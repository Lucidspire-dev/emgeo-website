"use client";

import { useMemo, useState } from "react";

export function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    { type: "idle" } | { type: "success"; text: string } | { type: "error"; text: string }
  >({ type: "idle" });

  const isValid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim());
    return values.name.trim().length >= 2 && emailOk && values.message.trim().length >= 10;
  }, [values]);

  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (!isValid) {
          setStatus({
            type: "error",
            text: "Please enter a valid name, email, and a message (10+ characters).",
          });
          return;
        }

        // Placeholder: wire this to your backend/email service later.
        setStatus({
          type: "success",
          text: "Thanks! Your message has been captured. We'll reach out soon.",
        });
        setValues({ name: "", email: "", message: "" });
      }}
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm font-semibold">
          Name
        </label>
        <input
          id="name"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className="h-11 rounded-xl border border-black/10 bg-background px-4 text-sm outline-none focus:border-black/30"
          placeholder="Your name"
          autoComplete="name"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm font-semibold">
          Email
        </label>
        <input
          id="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className="h-11 rounded-xl border border-black/10 bg-background px-4 text-sm outline-none focus:border-black/30"
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="message" className="text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          value={values.message}
          onChange={(e) =>
            setValues((v) => ({ ...v, message: e.target.value }))
          }
          className="min-h-[120px] resize-none rounded-xl border border-black/10 bg-background px-4 py-3 text-sm outline-none focus:border-black/30"
          placeholder="Tell us what you want to build..."
        />
      </div>

      {status.type === "error" ? (
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-600">
          {status.text}
        </div>
      ) : null}
      {status.type === "success" ? (
        <div className="rounded-xl border border-green-500/20 bg-green-500/5 px-4 py-3 text-sm text-green-700">
          {status.text}
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-foreground/60">
          By submitting, you agree to be contacted about your request.
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-foreground px-6 text-sm font-semibold text-background disabled:cursor-not-allowed disabled:opacity-50"
        >
          Send message
        </button>
      </div>
    </form>
  );
}

