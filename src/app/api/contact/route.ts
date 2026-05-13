import { NextResponse } from "next/server";
import {
  MailNotConfiguredError,
  sendContactEmail,
  validateContactBody,
} from "../../../lib/contact-mail";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const parsed = validateContactBody(json);
  if (parsed.ok === false) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  if (parsed.data.honeypot?.trim()) {
    return NextResponse.json({ ok: true });
  }

  try {
    await sendContactEmail(parsed.data);
  } catch (e) {
    if (e instanceof MailNotConfiguredError) {
      console.warn(
        "Contact form: email not configured (set SMTP_HOST, SMTP_USER, SMTP_PASS, CONTACT_MAIL_FROM).",
      );
      return NextResponse.json(
        {
          error:
            "We couldn't send your message from this form. Please email us at operations@emgeoglobal.com and we'll respond shortly.",
        },
        { status: 503 },
      );
    }
    console.error("contact mail error", e);
    return NextResponse.json(
      {
        error:
          "We could not send your message. Please try again later or email operations@emgeoglobal.com directly.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
