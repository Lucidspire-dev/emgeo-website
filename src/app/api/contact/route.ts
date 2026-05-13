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
      return NextResponse.json(
        {
          error:
            "Contact email is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and CONTACT_MAIL_FROM on the server.",
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
