/**
 * Spam heuristics — shared by the contact form client and the API route.
 *
 * Background: keyword filters + honeypot + time-gate aren't enough.
 * The spam that's been getting through is keyboard-mashed text
 * ("sssssssss...") long enough to pass the char-count minimum. This
 * module adds statistical / linguistic checks that catch gibberish
 * without requiring a specific blocklisted word.
 *
 * Two entry points:
 *   - `isGibberish(text)`   — checks a single field
 *   - `checkSubmission(f)`  — checks a full contact submission with
 *                             cross-field signals (name matches details,
 *                             email domain is disposable, etc.)
 *
 * Design rules:
 *   - False positives are worse than false negatives here. Real
 *     prospects write short messages sometimes; we skip gibberish
 *     checks for short text and weigh signals rather than rejecting
 *     on any single one.
 *   - Every returned `reason` is a short slug so the server can log
 *     it without echoing the content (privacy + anti-probe).
 *   - All checks are language-agnostic where possible.
 */

export interface GibberishResult {
  bad: boolean;
  reason?: string;
}

/* ─── Individual checks ──────────────────────────────────────── */

/**
 * A single character dominates the string. "aaaaaa...aaa" → caught.
 * Threshold 35% is generous enough to pass real text (where the
 * most-common char is usually a space at ~15%).
 */
function charDominance(s: string): boolean {
  const counts = new Map<string, number>();
  for (const ch of s.toLowerCase()) {
    counts.set(ch, (counts.get(ch) ?? 0) + 1);
  }
  let max = 0;
  for (const v of counts.values()) if (v > max) max = v;
  return max / s.length > 0.35;
}

/** Very few distinct characters. Real text has 15+ unique chars easily. */
function lowCharDiversity(s: string): boolean {
  const chars = new Set(s.toLowerCase().replace(/\s/g, ""));
  return chars.size < 8;
}

/** Same character repeated 6+ times in a row — keyboard mash signature. */
function longRepeatedRun(s: string): boolean {
  return /(.)\1{5,}/.test(s);
}

/**
 * Vowel ratio too low for Latin text. Real English is ~38% vowels,
 * other Latin languages similar. We only flag <15%, which catches
 * consonant soup ("zxzxzx") without punishing legitimate Slavic or
 * Welsh names etc.
 */
function lowVowelRatio(s: string): boolean {
  const letters = (s.match(/[a-zA-Z]/g) ?? []).length;
  if (letters < 20) return false;
  const vowels = (s.match(/[aeiouAEIOU]/g) ?? []).length;
  return vowels / letters < 0.15;
}

/**
 * Too few distinct words. Even a terse real message has 6+ unique
 * words. "sssss sssss sssss" fails — only one unique word.
 */
function lowWordDiversity(s: string): boolean {
  const words = s.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length >= 2);
  if (words.length < 3) return false; // too short to judge
  const unique = new Set(words);
  return unique.size < 6;
}

/**
 * A single word repeated more than half the time. Catches "spam spam
 * spam spam spam spam spam" where word count is high but diversity
 * is low.
 */
function wordRepetition(s: string): boolean {
  const words = s.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length >= 2);
  if (words.length < 6) return false;
  const counts = new Map<string, number>();
  for (const w of words) counts.set(w, (counts.get(w) ?? 0) + 1);
  let max = 0;
  for (const v of counts.values()) if (v > max) max = v;
  return max > words.length * 0.4;
}

/** Runs of 6+ where 80%+ of chars are the same single character. */
function homogeneousSpans(s: string): boolean {
  const match = s.match(/[a-zA-Z]{8,}/g);
  if (!match) return false;
  for (const span of match) {
    const counts = new Map<string, number>();
    for (const ch of span.toLowerCase()) counts.set(ch, (counts.get(ch) ?? 0) + 1);
    let max = 0;
    for (const v of counts.values()) if (v > max) max = v;
    if (max / span.length > 0.75) return true;
  }
  return false;
}

/* ─── Public API: single-field check ─────────────────────────── */

export function isGibberish(text: string, opts?: { minLength?: number }): GibberishResult {
  const s = text.trim();
  const minLength = opts?.minLength ?? 10;
  if (s.length < minLength) return { bad: false };

  if (charDominance(s))       return { bad: true, reason: "char-dominance" };
  if (lowCharDiversity(s))    return { bad: true, reason: "low-char-diversity" };
  if (longRepeatedRun(s))     return { bad: true, reason: "long-repeat-run" };
  if (homogeneousSpans(s))    return { bad: true, reason: "homogeneous-span" };
  if (lowVowelRatio(s))       return { bad: true, reason: "low-vowel-ratio" };
  if (lowWordDiversity(s))    return { bad: true, reason: "low-word-diversity" };
  if (wordRepetition(s))      return { bad: true, reason: "word-repetition" };

  return { bad: false };
}

/* ─── Name validation ───────────────────────────────────────── */

/**
 * Names are harder — they're short and can be any script. We only
 * reject the obvious mash patterns ("aaa", "sss", single repeated
 * char) since we don't want to block e.g. "Ng" or "Ye".
 */
export function isNameInvalid(name: string): GibberishResult {
  const s = name.trim();
  if (s.length < 2) return { bad: true, reason: "name-too-short" };

  const unique = new Set(s.toLowerCase().replace(/\s/g, ""));
  if (s.length >= 4 && unique.size < 2) {
    return { bad: true, reason: "name-single-char" };
  }
  if (s.length >= 5 && unique.size < 3) {
    return { bad: true, reason: "name-low-diversity" };
  }
  if (/^(.)\1{3,}$/.test(s.replace(/\s/g, ""))) {
    return { bad: true, reason: "name-all-same" };
  }
  return { bad: false };
}

/* ─── Disposable / throwaway email domains ──────────────────── */
// Partial list of known disposable/trash email services. Not
// exhaustive — just the ones most spam hits come from. Kept short
// because maintenance cost grows fast. If a legit prospect uses
// one, they can use another email.
const DISPOSABLE_DOMAINS = new Set([
  "mailinator.com",    "tempmail.com",      "guerrillamail.com",
  "10minutemail.com",  "throwawaymail.com", "yopmail.com",
  "trashmail.com",     "maildrop.cc",       "getnada.com",
  "sharklasers.com",   "grr.la",            "spam4.me",
  "fakeinbox.com",     "dispostable.com",   "mytemp.email",
  "tempr.email",       "tempmailo.com",     "emailondeck.com",
  "mohmal.com",        "tempail.com",       "mailpoof.com",
]);

export function isDisposableEmail(email: string): boolean {
  const at = email.lastIndexOf("@");
  if (at < 0) return false;
  const domain = email.slice(at + 1).toLowerCase().trim();
  return DISPOSABLE_DOMAINS.has(domain);
}

/* ─── Cross-field signal ─────────────────────────────────────── */

/**
 * If multiple fields contain the same mash pattern, that's a very
 * strong signal — a bot or a tester just typing "ssssss" everywhere.
 * We look for long-repeat runs appearing in both the name and
 * another field.
 */
export function hasCrossFieldMash(fields: {
  name: string; details: string; company?: string | null;
}): boolean {
  const pickRun = (s: string) => {
    const m = s.match(/(.)\1{4,}/);
    return m ? m[0] : null;
  };
  const detailsRun = pickRun(fields.details);
  if (!detailsRun) return false;
  const namelike = fields.name.toLowerCase();
  const companylike = (fields.company ?? "").toLowerCase();
  const run = detailsRun.toLowerCase();
  return namelike.includes(run) || companylike.includes(run);
}

/* ─── Unified submission check ───────────────────────────────── */

export interface SubmissionInput {
  name: string;
  email: string;
  company?: string | null;
  details: string;
}

export interface SubmissionCheck {
  ok: boolean;
  reason?: string;
}

export function checkSubmission(input: SubmissionInput): SubmissionCheck {
  const nameCheck = isNameInvalid(input.name);
  if (nameCheck.bad) return { ok: false, reason: nameCheck.reason };

  if (isDisposableEmail(input.email)) {
    return { ok: false, reason: "disposable-email" };
  }

  const detailsCheck = isGibberish(input.details, { minLength: 20 });
  if (detailsCheck.bad) return { ok: false, reason: `details-${detailsCheck.reason}` };

  if (input.company) {
    const companyCheck = isGibberish(input.company, { minLength: 8 });
    if (companyCheck.bad) return { ok: false, reason: `company-${companyCheck.reason}` };
  }

  if (hasCrossFieldMash({
    name: input.name,
    details: input.details,
    company: input.company,
  })) {
    return { ok: false, reason: "cross-field-mash" };
  }

  return { ok: true };
}
