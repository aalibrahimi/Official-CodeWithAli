/**
 * EmailContact — richer lead email.
 *
 * v1 sent a bare-bones "Client Name / Email / Details / Service"
 * block. v2 includes company, phone, budget, timeline, source, and
 * originating IP, laid out as a structured table so leads triage
 * fast in the inbox. The subject line at the API layer gets the
 * budget so we can prioritize by glancing at the inbox list.
 */
import * as React from "react";

interface EmailContactProps {
  name: string;
  email: string;
  company?: string | null;
  phone?: string | null;
  service: string;
  budget: string;
  timeline: string;
  projectDetails: string;
  hearAbout?: string | null;
  ip?: string;
}

const styles = {
  wrap: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    background: "#FAF9F6",
    padding: "32px 16px",
    color: "#0F0F10",
  } as const,
  card: {
    maxWidth: "640px",
    margin: "0 auto",
    background: "#FFFFFF",
    border: "1px solid rgba(0,0,0,0.08)",
    borderRadius: "12px",
    overflow: "hidden",
  } as const,
  header: {
    padding: "28px 32px 20px 32px",
    borderBottom: "1px solid rgba(0,0,0,0.06)",
  } as const,
  eyebrow: {
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.22em",
    color: "#D4AF37",
    margin: 0,
  },
  title: {
    fontSize: "22px",
    fontWeight: 600,
    color: "#0F0F10",
    margin: "6px 0 0 0",
    letterSpacing: "-0.01em",
  } as const,
  body: { padding: "20px 32px 28px 32px" } as const,
  row: {
    display: "flex",
    gap: "14px",
    padding: "10px 0",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
  } as const,
  label: {
    flex: "0 0 140px",
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.18em",
    color: "rgba(15,15,16,0.55)",
    paddingTop: "3px",
  },
  value: {
    flex: "1",
    fontSize: "14px",
    color: "#0F0F10",
    wordBreak: "break-word" as const,
  },
  detailsBlock: {
    marginTop: "20px",
    padding: "16px 20px",
    background: "#FAF9F6",
    borderLeft: "3px solid #C8102E",
    borderRadius: "4px",
  } as const,
  detailsLabel: {
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.18em",
    color: "#D4AF37",
    margin: "0 0 10px 0",
  },
  detailsText: {
    fontSize: "14.5px",
    lineHeight: "1.65",
    color: "#0F0F10",
    margin: 0,
    whiteSpace: "pre-wrap" as const,
  },
  footer: {
    padding: "16px 32px",
    borderTop: "1px solid rgba(0,0,0,0.06)",
    background: "#FAF9F6",
    fontSize: "11px",
    color: "rgba(15,15,16,0.5)",
  } as const,
  budgetPill: {
    display: "inline-block",
    padding: "3px 10px",
    background: "#C8102E",
    color: "#fff",
    fontSize: "11px",
    fontWeight: 600,
    textTransform: "uppercase" as const,
    letterSpacing: "0.12em",
    borderRadius: "20px",
  } as const,
};

export const EmailContact: React.FC<Readonly<EmailContactProps>> = ({
  name, email, company, phone, service, budget, timeline,
  projectDetails, hearAbout, ip,
}) => {
  return (
    <div style={styles.wrap}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <p style={styles.eyebrow}>New lead · CodeWithAli</p>
          <h1 style={styles.title}>
            {name}
            {company ? <span style={{ color: "rgba(15,15,16,0.6)", fontWeight: 400 }}> · {company}</span> : null}
          </h1>
          <div style={{ marginTop: "12px" }}>
            <span style={styles.budgetPill}>{budget}</span>
          </div>
        </div>

        {/* Body — structured rows */}
        <div style={styles.body}>
          <Row label="Email" value={<a href={`mailto:${email}`} style={{ color: "#C8102E", textDecoration: "none" }}>{email}</a>} />
          {phone ? <Row label="Phone" value={<a href={`tel:${phone}`} style={{ color: "#C8102E", textDecoration: "none" }}>{phone}</a>} /> : null}
          {company ? <Row label="Company" value={company} /> : null}
          <Row label="Service" value={service} />
          <Row label="Timeline" value={timeline} />
          {hearAbout ? <Row label="Source" value={hearAbout} /> : null}

          {/* Details */}
          <div style={styles.detailsBlock}>
            <p style={styles.detailsLabel}>Project details</p>
            <p style={styles.detailsText}>{projectDetails}</p>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          Reply directly to this email to reach {name.split(" ")[0]} at {email}.
          {ip ? ` · Submitted from IP ${ip}` : null}
        </div>
      </div>
    </div>
  );
};

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={styles.row}>
      <div style={styles.label}>{label}</div>
      <div style={styles.value}>{value}</div>
    </div>
  );
}
