export type ContactSubmitPayload = {
  source: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  honeypot?: string;
};

export async function submitContactForm(
  payload: ContactSubmitPayload,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data: { error?: string } = {};
  try {
    data = await res.json();
  } catch {
    // ignore
  }

  if (!res.ok) {
    return {
      ok: false,
      error: data.error || "Something went wrong. Please try again.",
    };
  }
  return { ok: true };
}
