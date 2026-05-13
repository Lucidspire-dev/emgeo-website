import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactInbound = {
  source: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  honeypot?: string;
};

const MAX = {
  name: 120,
  email: 254,
  phone: 40,
  company: 200,
  message: 8000,
  source: 64,
} as const;

function trim(s: unknown, max: number): string {
  if (typeof s !== "string") return "";
  return s.trim().slice(0, max);
}

export function validateContactBody(
  body: unknown,
): { ok: true; data: ContactInbound } | { ok: false; error: string } {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid request body." };
  }
  const o = body as Record<string, unknown>;
  const source = trim(o.source, MAX.source) || "website";
  const name = trim(o.name, MAX.name);
  const email = trim(o.email, MAX.email);
  const phone = trim(o.phone, MAX.phone);
  const company = trim(o.company, MAX.company);
  const message = trim(o.message, MAX.message);
  const honeypot = typeof o.honeypot === "string" ? o.honeypot : "";

  if (name.length < 2) {
    return { ok: false, error: "Please enter your name." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (phone && phone.replace(/\D/g, "").length < 8) {
    return { ok: false, error: "Please enter a valid phone number." };
  }
  if (message.length < 10) {
    return { ok: false, error: "Please enter a message (at least 10 characters)." };
  }

  return {
    ok: true,
    data: { source, name, email, phone, company, message, honeypot },
  };
}

function getSmtpConfig():
  | null
  | {
      host: string;
      port: number;
      secure: boolean;
      user: string;
      pass: string;
      to: string;
      from: string;
    } {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const port = Number(process.env.SMTP_PORT || "587");
  const secure = process.env.SMTP_SECURE === "true";
  const to = process.env.CONTACT_MAIL_TO?.trim() || "operations@emgeoglobal.com";
  const from =
    process.env.CONTACT_MAIL_FROM?.trim() ||
    process.env.SMTP_FROM?.trim() ||
    user;

  if (!host || !user || !pass || !from) {
    return null;
  }

  return { host, port, secure, user, pass, to, from };
}

export class MailNotConfiguredError extends Error {
  constructor() {
    super("MAIL_NOT_CONFIGURED");
    this.name = "MailNotConfiguredError";
  }
}

export async function sendContactEmail(data: ContactInbound): Promise<void> {
  const cfg = getSmtpConfig();
  if (!cfg) {
    throw new MailNotConfiguredError();
  }

  const transporter = nodemailer.createTransport({
    host: cfg.host,
    port: cfg.port,
    secure: cfg.secure,
    auth: { user: cfg.user, pass: cfg.pass },
  });

  const subject = `[Emgeo website — ${data.source}] ${data.name}`;
  const text = [
    `Source: ${data.source}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.company ? `Company: ${data.company}` : null,
    "",
    "Message:",
    data.message,
  ]
    .filter(Boolean)
    .join("\n");

  const html = `
  <p><strong>Source:</strong> ${escapeHtml(data.source)}</p>
  <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
  <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
  ${data.phone ? `<p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>` : ""}
  ${data.company ? `<p><strong>Company:</strong> ${escapeHtml(data.company)}</p>` : ""}
  <p><strong>Message:</strong></p>
  <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(data.message)}</pre>
  `;

  await transporter.sendMail({
    from: cfg.from,
    to: cfg.to,
    replyTo: data.email,
    subject,
    text,
    html,
  });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
