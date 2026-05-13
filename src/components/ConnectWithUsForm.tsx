"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { submitContactForm } from "../lib/submit-contact";

function ConnectSubmitButton({
  disabled,
  loading,
}: {
  disabled: boolean;
  loading?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className="inline-flex h-[44px] w-full max-w-[400px] items-center justify-between gap-2 rounded-[72px] border border-[#2F6F97] bg-white pl-5 pr-1 py-1 align-middle tracking-[0] text-[#0F3D5C] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-100 sm:h-[46px] sm:pl-6 md:h-[44px] md:w-[177px] md:max-w-none md:justify-start md:pl-[24px] md:pr-[4px] md:pt-[4px] md:pb-[4px]"
    >
      <span className="inline-flex h-full min-w-0 flex-1 items-center justify-start whitespace-nowrap align-middle text-left font-['Darker_Grotesque'] text-[16px] leading-[130%] font-bold tracking-[0] sm:text-[17px] md:w-[105px] md:flex-none md:justify-center md:text-[18px] md:text-center">
        {loading ? "Sending…" : "Submit Now"}
      </span>
      <span className="inline-flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#1C4E71]">
        <span
          aria-hidden
          className="text-[16px] font-semibold leading-none text-white"
        >
          →
        </span>
      </span>
    </button>
  );
}

export function ConnectWithUsForm() {
  const [values, setValues] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "success"; text: string }
    | { type: "error"; text: string }
  >({ type: "idle" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const isValid = useMemo(() => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim());
    const phoneOk = values.phone.replace(/\D/g, "").length >= 8;
    return (
      values.name.trim().length >= 2 &&
      emailOk &&
      phoneOk &&
      values.message.trim().length >= 10
    );
  }, [values]);

  const inputClass =
    "h-[44px] w-full rounded-[8px] border border-white bg-white/[0.12] px-3 pt-[11px] pb-[9px] align-middle text-left font-['Plus_Jakarta_Sans'] text-[15px] leading-[150%] font-normal tracking-[0] text-[#FFFFFFE5] outline-none placeholder:text-[#FFFFFFE5] focus:border-white focus:bg-white/[0.16] sm:h-[46px] sm:px-4 sm:text-[16px] md:h-[48px] md:py-0 md:pt-[13px] md:pb-[11px]";

  return (
    <form
      className="relative w-full"
      onSubmit={async (e) => {
        e.preventDefault();
        if (!isValid) {
          setStatus({
            type: "error",
            text: "Please enter your name, a valid phone and email, and a message (10+ characters).",
          });
          return;
        }
        setIsSubmitting(true);
        setStatus({ type: "idle" });
        const result = await submitContactForm({
          source: "home-connect",
          name: values.name.trim(),
          company: values.company.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          message: values.message.trim(),
          honeypot,
        });
        setIsSubmitting(false);
        if (result.ok === false) {
          setStatus({ type: "error", text: result.error });
          return;
        }
        setHoneypot("");
        setStatus({
          type: "success",
          text: "Thank you! Your message has been received. We will get back to you soon.",
        });
        setValues({
          name: "",
          company: "",
          phone: "",
          email: "",
          message: "",
        });
      }}
    >
      <div
        className="pointer-events-none absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
        aria-hidden="true"
      >
        <label htmlFor="home-connect-hp">Leave blank</label>
        <input
          id="home-connect-hp"
          name="company_website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-2 md:gap-y-6">
        <input
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className={inputClass}
          placeholder="Enter your name"
          autoComplete="name"
          aria-label="Your name"
        />
        <input
          value={values.company}
          onChange={(e) =>
            setValues((v) => ({ ...v, company: e.target.value }))
          }
          className={inputClass}
          placeholder="Enter company name (Optional)"
          autoComplete="organization"
          aria-label="Company name (optional)"
        />
        <input
          value={values.phone}
          onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
          className={inputClass}
          type="tel"
          placeholder="Enter phone number"
          autoComplete="tel"
          aria-label="Phone number"
        />
        <input
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className={inputClass}
          type="email"
          placeholder="Enter your email ID"
          autoComplete="email"
          aria-label="Email"
        />
        <textarea
          value={values.message}
          onChange={(e) =>
            setValues((v) => ({ ...v, message: e.target.value }))
          }
          className="min-h-[96px] w-full resize-none rounded-[8px] border border-white bg-white/[0.12] px-3 py-2.5 align-middle text-left font-['Plus_Jakarta_Sans'] text-[15px] leading-[150%] font-normal tracking-[0] text-[#FFFFFFE5] outline-none placeholder:text-[#FFFFFFE5] focus:border-white focus:bg-white/[0.16] sm:min-h-[110px] sm:px-4 sm:py-3 sm:text-[16px] md:col-span-2 lg:min-h-0 lg:h-[88px]"
          placeholder="Enter your message"
          aria-label="Your message"
        />
      </div>

      {status.type === "error" ? (
        <div className="mt-4 rounded-[8px] border border-red-300/40 bg-red-500/15 px-4 py-3 font-['Plus_Jakarta_Sans'] text-[14px] leading-[140%] font-medium text-white">
          {status.text}
        </div>
      ) : null}
      {status.type === "success" ? (
        <div className="mt-4 rounded-[8px] border border-white/30 bg-white/10 px-4 py-3 font-['Plus_Jakarta_Sans'] text-[14px] leading-[140%] font-medium text-white/95">
          {status.text}
        </div>
      ) : null}

      <div className="mt-4 flex justify-center sm:mt-6 md:justify-start lg:mt-4">
        <ConnectSubmitButton disabled={!isValid} loading={isSubmitting} />
      </div>
    </form>
  );
}

export function ConnectWithUsSection() {
  return (
    <section className="relative z-0 mt-6 mb-10 w-full overflow-hidden rounded-[24px] bg-[#217AB8] text-white max-md:rounded-[20px] md:mt-[42px] md:mb-[70px] lg:z-10">
      {/* Figma frame: 1440×448; top offset is canvas-only (lg+) */}
      <div className="mx-auto box-border w-full max-w-[1440px] px-4 py-6 sm:px-5 sm:py-8 lg:flex lg:h-[448px] lg:flex-col lg:justify-center lg:px-[80px] lg:py-[80px]">
        <div className="grid grid-cols-1 items-start gap-5 text-center sm:gap-6 md:text-left lg:grid-cols-2 lg:items-center lg:gap-x-[80px] lg:gap-y-0 lg:gap-12 xl:gap-x-[100px]">
          <div className="mx-auto max-w-[520px] w-full md:mx-0">
            {/* Figma: 183×95; left 80px aligns with section lg:px-[80px] */}
            <Image
              src="/images/connect-with-us-icon.png"
              alt=""
              width={183}
              height={95}
              className="mx-auto block h-[52px] w-auto max-w-[100px] shrink-0 object-contain max-md:-translate-y-[25px] sm:h-[60px] sm:max-w-[118px] md:mx-0 md:h-[72px] md:max-w-[140px] md:translate-y-0 lg:h-[95px] lg:max-w-[183px] lg:-mt-[174px] lg:ml-0"
            />
            <h2 className="mt-3 font-['Darker_Grotesque'] text-[28px] leading-[110%] font-bold tracking-[0] text-white sm:mt-4 sm:text-[32px] md:text-left md:text-[44px] md:leading-[115%] lg:mt-4 lg:text-[64px] lg:leading-[120%]">
              Connect with us
            </h2>
            <p className="mt-2 max-w-[480px] font-['Plus_Jakarta_Sans'] text-[14px] leading-[142%] font-normal tracking-[0] text-white/80 sm:mt-3 sm:text-[15px] md:mx-0 md:mt-4 md:text-left md:text-[18px] md:leading-[145%] lg:mt-3 lg:text-[20px] lg:leading-[140%]">
              We’re here to make global workforce movement effortless. Contact
              us today and see how we can transform your mobility experience.
            </p>
          </div>
          <div className="min-w-0 w-full max-w-[400px] mx-auto md:max-w-none lg:-ml-[150px] lg:mx-0 lg:flex lg:h-[292px] lg:w-[735px] lg:items-center lg:max-w-none">
            <div className="w-full rounded-[20px] text-left lg:h-full">
              <ConnectWithUsForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
