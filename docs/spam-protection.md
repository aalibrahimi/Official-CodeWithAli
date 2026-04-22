# Contact form spam protection

A deep write-up of how we defend the `/contact` form. Captures the
threat we were actually seeing, the design principles, the layers,
and the tradeoffs we made along the way — so future us (or a
future engineer) can reason about changes instead of removing
things and not knowing why they were there.

---

## 1. The problem

Before this rewrite, the contact form was a five-field layout (name,
email, service, project details, submit) wired to a Resend email.
Validation was just the browser's built-in `required` attribute.
Over several months we started seeing a steady stream of junk
emails — not all from bots, some from real humans testing whether
the form "worked." The specific attack that motivated this rewrite
was typing `sssssssssssssssss...` into every field and watching the
form accept it.

That's the canonical "low-effort spam" pattern. It passes:

- Keyword filters (no spam words)
- Required-field checks (every field is filled)
- Character minimums (mashing is cheap)
- URL-count checks (no URLs)
- Browser email validation (the email is technically valid)
- Rate limits (first submission of the hour)
- Time-to-submit gates (typing `sssss` 40 times still takes >3s)

Our job was to raise the floor against this kind of attack without
making legitimate submissions harder.

---

## 2. Threat model

We sketched out who was actually sending spam and designed against
those specific actors, not a generic "bots."

| Actor                   | Motivation                                 | Signals they leave |
|-------------------------|--------------------------------------------|--------------------|
| Scraper bot             | Find forms, post loot URLs                 | Fills every field including hidden ones; submits in <1s; uses disposable emails |
| Bulk-SEO outreach tool  | Automated sales pitches ("we guarantee #1 rankings") | Keyword-heavy, has URLs, submits from same IP range repeatedly |
| Form tester             | Curious visitor mashing keys               | Low character diversity; same pattern across fields |
| Sophisticated human     | Crafted sales pitch, one at a time         | Passes all statistical checks; the only true adversary |

The first three are ~98% of the volume. Defending against them is
what this document is about. The sophisticated human we accept will
occasionally slip through — and for that, we rely on the replyTo
header (so we can just mute their email thread) and rate limits
(they can only get through 3x/hour even if they try).

---

## 3. Design principles

Five rules we wrote down before implementing anything. Everything
in the code below ladders up to one of these.

### 3.1 Layered defense

No single check is perfect. A honeypot catches bots that autofill
every field; a time-gate catches scripts that submit instantly; a
statistical check catches keyboard mashing; a keyword filter catches
SEO spam; a rate limit caps the blast radius for anything that gets
through. We assume each layer has false negatives and we compose
them so an attack has to beat all of them at once.

### 3.2 Silent rejection over loud rejection

When we detect spam on the server, we return `200 OK` with `{ ok: true }`
and never send the email. The client shows the "Message sent" success
screen.

Why: if we returned `403` with "spam detected," the attacker immediately
learns their submission was caught, tweaks their payload, and tries
again. Silent rejection wastes their time — they think the submission
worked, move on, and we get nothing in our inbox. Same reasoning
behind the "did you mean this email?" feature in Gmail — don't teach
the spammer.

The one exception: honeypot and rate-limit responses. Honeypot always
silent; rate-limit returns `429` because we want legitimate users who
submit twice quickly to see a real error.

### 3.3 Validate on both sides, never trust the client

Every client-side check is mirrored on the server. The client's job
is UX (fast feedback, don't let a user submit garbage and wait for
a server round-trip). The server's job is protection — it assumes
the client can be bypassed (it can, trivially, with `curl`).

Shared heuristics live in `src/lib/spam-heuristics.ts` so the two
sides can't drift.

### 3.4 False positives are worse than false negatives

A legitimate prospect who can't submit a contact form is a lost
engagement. A spam message that gets through costs us ten seconds
of inbox triage.

So every threshold errs generous: minimum char counts are low, vowel
ratios are lenient, Cyrillic threshold is 40% (not 10%), and the
gibberish checks skip any text under 20 characters. We'd rather
take some spam than block a real lead who wrote "Need a site ASAP,
call me."

### 3.5 Explain rejections to humans, not bots

When a real prospect accidentally trips a heuristic (autocorrect,
a weird company name), they see an explicit error:

> "This doesn't look like a real name. This form blocks automated submissions."

That's jarring enough that a human goes "oh, let me rephrase" — and
forgiving enough that they fix the mistake and continue. A bot gets
the same message but doesn't read it; doesn't matter.

---

## 4. The ten layers

From outside-in, in the order they trigger:

### Layer 1 — Honeypot field

**What it is.** An `<input name="website">` absolutely positioned
off-screen with `tabIndex={-1}` and `aria-hidden="true"`. It's in
the DOM so bots see it; it's invisible to humans who don't use
screen readers, and screen readers ignore it because of `aria-hidden`.

**What it catches.** Any bot that blindly fills every input on the
form. This is the single highest-value layer — it catches maybe 60%
of automated junk with zero cost to real users.

**Why the name "website".** Because it looks plausible and bots like
to autofill their prey's URL into fields named that way. Naming it
`trap` would be honest but less effective.

**Both sides check it.** Client silently bails if the field has any
value. Server returns `200 OK` so the bot thinks it worked.

```ts
if (payload.website && payload.website.trim().length > 0) {
  return Response.json({ ok: true }, { status: 200 });
}
```

### Layer 2 — Time-to-submit gate

**What it is.** On mount, the form stores `Date.now()`. On submit,
we compute `elapsed = now - mountedAt` and require at least 3000ms.

**What it catches.** Scripted submissions that find the form, fill
it, and submit in one tick. A human — even a fast one — spends
longer than 3 seconds reading the labels.

**Threshold tuning.** We tried 2s (too permissive — a fast click-bot
still passes) and 5s (caught a couple of real users who copied and
pasted content they'd prepared in another tab). 3s is the sweet spot.

**Server mirrors it.** Client sends `elapsedMs` in the payload;
server re-checks independently:

```ts
if (typeof payload.elapsedMs === "number" && payload.elapsedMs < 3000) {
  return Response.json({ ok: true }, { status: 200 });
}
```

### Layer 3 — IP rate limiting

**What it is.** An in-memory `Map<string, { count, firstAt }>`
keyed on the client IP, with a 1-hour window and a 3-submission
cap. Pulled from `x-forwarded-for` (Vercel), falling back to
`x-real-ip`.

**What it catches.** Spam floods — when one actor tries to push
50 messages in a minute. Also caps the damage if anything else
gets through: even a perfectly crafted human-written spam can only
arrive 3x/hour from one source.

**Why in-memory.** Our traffic is low enough that the bookkeeping
cost of Redis or upstash isn't justified. One serverless instance
handles all traffic most of the time; multiple instances mean
multiple separate counters, which is actually fine (the effective
limit just becomes `3 × N instances per hour`).

**When to upgrade.** If we start seeing >10k/day submissions, move
to Upstash or DynamoDB. The abstraction is simple — swap the `Map`
for async get/set.

Returns a **real 429** (not silent 200). A legitimate user who just
sent three messages in an hour should know that's why the fourth
didn't go through.

### Layer 4 — Server-side required-field validation

**What it is.** Re-runs every client validation: name length,
email regex, presence of service/budget/timeline, min/max char
counts on project details.

**What it catches.** Anyone who tried to bypass the client by
POSTing directly with fields missing. Trivial protection, but
if we don't have it we're trusting the client, which is the
entire failure mode of every vulnerable endpoint on the internet.

### Layer 5 — Spam keyword patterns

**What it is.** A list of regexes catching the canonical SEO-spam
phrases: "viagra", "crypto signal", "forex", "payday loan",
"click here", "100% guaranteed rankings", "buy now online",
"debt relief".

**What it catches.** The automated outreach tools that send the
same email template to every agency website they can scrape.

**Limitation.** Targeted human spammers who write custom pitches
won't hit these. That's by design — keyword filters always have
this weakness, which is why we layer the next three checks on top.

### Layer 6 — Statistical gibberish detection (the new part)

This is the layer that catches `sssssssss...`. Seven independent
checks, any one rejects.

#### 6.1 Character dominance
```
max(count(c) for c in text) / len(text) > 0.35
```
Real English text has a most-frequent character (usually space) at
around 15%. `sssssss` hits 100%. Threshold at 35% gives a wide
margin.

#### 6.2 Character diversity
```
|set(text.toLowerCase().replace(whitespace, ""))| >= 8
```
Real text uses at least 8 distinct characters easily. Mashing
typically uses 1–3.

#### 6.3 Long repeated runs
```
/(.)\1{5,}/
```
Six or more of the same character in a row. "Aaaaaa" is either mash
or ironic — either way, not a legitimate project description.

#### 6.4 Homogeneous word spans
For each word ≥8 characters: if one letter accounts for >75% of it,
flag. Catches edge cases where a word is technically varied
("absseeee") but still looks mashed.

#### 6.5 Vowel ratio
```
vowel_count / letter_count >= 0.15  (when letters > 20)
```
Consonant soup ("zxzxzxzx") fails this. Threshold of 15% is
permissive enough to allow legitimate non-English names and Welsh
words but catches keyboard noise.

#### 6.6 Word diversity
```
|unique words of length ≥2| >= 6
```
A three-sentence message has dozens of unique words. "ssss ssss ssss"
has one unique word regardless of how many times it's repeated.

#### 6.7 Word repetition
```
max(count(word)) / len(words) < 0.4
```
If one word is more than 40% of the total, flag. Catches
"spam spam spam spam spam" which passes the diversity check but
fails plausibility.

**Why seven checks, not one composite score.** Simplicity. Each
check is independently tunable, independently debuggable, and each
has a semantic reason. A composite "spamminess score" would be more
accurate on the margin but much harder to explain when a false
positive comes in.

**Minimum length skip.** All gibberish checks skip text under 20
characters. A real 15-character message ("need help asap") has very
low character diversity and would false-positive every check. Below
20 chars we trust the other layers (honeypot, rate limit, keyword
filter) to catch the spam.

### Layer 7 — Name field validation

Names are a special case: short, culturally varied, and sometimes
just one word. We can't run the full gibberish suite without
rejecting real names like "Ng" or "Ye". So we only enforce:

- At least 2 characters total
- If 4+ chars, at least 2 unique characters (rejects "aaaa" but allows "Ng")
- If 5+ chars, at least 3 unique characters (rejects "aabbcc" false positive but allows real names)
- No 4+ consecutive identical characters

This catches `sssssssss` as a name while allowing actual edge-case
names.

### Layer 8 — Disposable email blocklist

**What it is.** A hardcoded set of 21 known disposable-email domains
(`mailinator.com`, `guerrillamail.com`, `10minutemail.com`, etc.).
If an address's domain matches, the submission is silently dropped.

**Why hardcoded.** A live MX-check adds 300–1000ms of latency on
every submission. The top 20 disposable services cover ~95% of real
cases; maintaining that list manually is cheaper than the latency
tax.

**When to upgrade.** If we see spam from domains not in the list,
we add them. Simple. If the list ever exceeds ~200 entries, move
to a package like `disposable-email-domains` or a live API.

### Layer 9 — Cross-field mash detection

**What it catches.** The case where someone types `sssss` in the
name AND `sssss` in the project details. Each field individually
might squeak past a threshold, but together they're a very strong
signal.

**Algorithm.** Look for 5+ character runs in the details. For each
run found, check if that same substring appears in the name or
company. If yes, silently reject.

**Why.** A human testing the form by mashing the same keys in every
field is indistinguishable from an automated attack — and behaves
the same way. We don't want either.

### Layer 10 — Live client UI feedback

The previous nine layers are reactive. This one is psychological.

As the user types, every field runs its heuristics in "live" mode.
When any flag fires, two things happen in the UI:

1. **Per-field error** appears in red under the field: "This form
   rejects automated and low-content submissions."
2. **Form-level banner** slides in at the top with explicit copy:
   > AUTOMATED SUBMISSION DETECTED · Every submission is logged
   > with your IP and reviewed.

The explicit "logged with your IP and reviewed" language does two
things:

- **For real users** who accidentally trigger a check (unusual
  company name, multilingual content), it explains what's happening
  and how to fix it.
- **For spammers**, it's a friction signal. Most automated attackers
  are opportunistic — they're running a script against thousands of
  forms. Seeing an explicit "we're watching you" message makes their
  form harder to keep in the target list; closing the tab is easier
  than tweaking.

Is this actually effective? Hard to measure precisely. But the
equivalent principle drives real-world hostile architecture — the
visible camera in a convenience store deters shoplifters even if
nobody's watching the feed. Same idea, different medium.

---

## 5. Data flow

```
┌─────────────────────────────────────────────────────────────┐
│  Contact form (client)                                      │
│                                                             │
│  Every keystroke → run heuristics in "live" mode           │
│    └─ fail? show per-field error + top banner              │
│                                                             │
│  Submit click → run heuristics in "hard" mode              │
│    ├─ honeypot filled?    → silent success (drop)          │
│    ├─ submit < 3000ms?    → soft error to user             │
│    ├─ field errors?       → mark all touched, bail         │
│    └─ cross-field mash?   → generic "review your fields"   │
│                                                             │
│  All checks pass → POST /api/send-contact                   │
└──────────────────────────┬──────────────────────────────────┘
                           │
┌──────────────────────────▼──────────────────────────────────┐
│  /api/send-contact (server)                                 │
│                                                             │
│  honeypot filled?         → 200 ok (silent drop)            │
│  elapsedMs < 3000?        → 200 ok (silent drop)            │
│  IP rate limit exceeded?  → 429                             │
│  required fields missing? → 400                             │
│  spam keywords matched?   → 200 ok (silent drop, logged)    │
│  URLs > 3?                → 200 ok (silent drop, logged)    │
│  Cyrillic > 40%?          → 200 ok (silent drop, logged)    │
│  gibberish heuristic?     → 200 ok (silent drop, logged)    │
│  disposable email?        → 200 ok (silent drop, logged)    │
│                                                             │
│  All checks pass → Resend.send() with rich email template   │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. What's not covered

Being honest about the gaps:

### 6.1 Sophisticated human spam

A human spammer who reads English, writes a coherent pitch,
uses a real-looking email, and spaces their submissions out
across IPs will still get through. For them:

- They're one message, not a flood. Our time cost is small.
- The email template's `replyTo` is set to their address, so
  we can just mute the thread in Gmail. Not our server's problem.
- We can add them to an internal block list and return 200-silent
  if they come back.

### 6.2 CAPTCHAs

We intentionally didn't add one. They introduce friction for real
users, they're often accessible-unfriendly, and they're cracked by
commercial "CAPTCHA solver" services anyway. The only CAPTCHA worth
adding IMO is Cloudflare Turnstile (invisible to most users, based
on behavioral signals). If layer 1–10 ever aren't enough, Turnstile
is the next addition — we even left the integration hook in the
form (just set `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and add the widget
component).

### 6.3 Distributed / low-and-slow attacks

Our IP rate limit doesn't catch one message per hour across 100
IPs. We'd need a shared store (Redis) and a more complex key (email
+ fingerprint) to do that. If that becomes a real pattern we'll
add it.

### 6.4 Account-based email reputation

We don't check sender email against HIBP, spam databases, or DNS
MX records. Adding MX validation would catch some more junk but
costs 300ms+ per submission. Not worth it at our volume.

---

## 7. Where it lives

| File                                              | Role                                                     |
|---------------------------------------------------|----------------------------------------------------------|
| `src/lib/spam-heuristics.ts`                      | Shared gibberish + name + disposable + cross-field checks. Client and server both import from here. Single source of truth. |
| `src/MyComponents/contact-form.tsx`               | Client form. Runs heuristics live, renders errors, enforces honeypot + time-gate before POSTing. |
| `src/app/api/send-contact/route.ts`               | Server endpoint. Mirrors every client check plus rate limit, disposable-domain block, keyword/URL/Cyrillic filters. Sends email via Resend. |
| `src/MyComponents/email-contact.tsx`              | React Email template for the lead notification. Includes originating IP in the footer for audit. |

---

## 8. How to tune

### 8.1 Tightening

If spam starts getting through:

1. Lower `MIN_DETAIL_CHARS` from 40 → look at spam messages;
   if they're just under, drop the threshold. (Risk: real terse
   prospects trip it.)
2. Tighten character-dominance threshold from 35% → 30%.
3. Raise vowel ratio minimum from 15% → 18%.
4. Add specific keyword patterns to `SPAM_PATTERNS` in
   `spam-heuristics.ts`. Usually the cheapest tweak.
5. Add specific domains to `DISPOSABLE_DOMAINS`.
6. Drop the rate limit from 3/hour to 1/hour. (Risk: legitimate
   users asking follow-up questions get rejected.)

### 8.2 Loosening

If a legitimate prospect can't get through:

1. Look at what was logged. Every rejection writes
   `[send-contact] dropped: <reason>` to `console.info`, visible
   in Vercel function logs.
2. Raise the minimum-length threshold for the tripped check.
3. If it's a false positive on a specific pattern, add an exception
   in `spam-heuristics.ts` (but be surgical — each exception is a
   bypass vector).

### 8.3 Observing

Every rejection logs the reason slug. Grep Vercel function logs
for `[send-contact] dropped:` to see which layer is doing the
heavy lifting. If one layer is catching everything and others
are idle, we can simplify. If one layer never catches anything,
it can go.

---

## 9. Design history (what we tried and dropped)

- **reCAPTCHA v3.** Dropped because of user friction and because
  Google's behavioral model is a privacy concern for a site we
  don't control signals into.
- **MX record validation.** Dropped because of latency. We can
  add it async (verify-and-drop later) if we need it.
- **Server-side ML classifier.** Overkill for our traffic.
  Considered for ~10 minutes, then remembered that "fewer moving
  parts" is a design goal.
- **Full Cloudflare-in-front.** We already have Vercel; changing
  the DNS front-door is a significant move that the current
  traffic doesn't justify.
- **Email OTP verification** (send a code, user enters it). Would
  work against all of these attacks but doubles the time cost
  for real prospects. Saved for "if nothing else works."

---

## 10. TL;DR

Ten layers. Each one is cheap. Each one has a clear semantic
reason. They compose: no single attacker's tactic defeats more
than one or two at a time. The user experience is unchanged for
legitimate traffic; the cost for spammers is that the message
they just spent time writing silently never arrived.

If something breaks, the fix is usually a one-line threshold
tweak in `src/lib/spam-heuristics.ts`. If something more serious
changes (new attack pattern, real prospects getting blocked),
the observability is already there — check Vercel function logs
for `dropped:` lines and work backwards.

We don't expect this to hold forever. We expect it to hold until
the spam volume changes enough to justify the next layer
(Cloudflare Turnstile, most likely). Until then: eleven lines of
regex and one in-memory Map doing the work of much bigger systems.
