"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

const HERO_BG =
  "https://emgeo.lucidspire.com/wp-content/uploads/2026/01/3b892dbf6efff947d662e39f413d55abdf0ca1c8-1.png";

function ContactSubmitButton({ disabled }: { disabled: boolean }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className="flex h-[44px] min-h-[44px] min-w-[154px] items-center justify-between gap-2 rounded-[28px] bg-[#0F3D5C] py-1 pl-4 pr-1 align-middle tracking-[0] text-white shadow-[0_6px_18px_rgba(15,61,92,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b2f48] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-100 max-md:h-[48px] max-md:w-full max-md:min-w-0 max-md:py-1.5 max-md:pl-5 max-md:pr-2"
    >
      <span className="whitespace-nowrap font-['Darker_Grotesque'] text-[18px] font-bold leading-[130%] tracking-[0] max-md:text-[16px] max-md:leading-[1.4]">
        Submit Now
      </span>
      <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-white max-md:h-[34px] max-md:w-[34px]">
        <span
          aria-hidden
          className="text-[16px] font-semibold leading-none text-[#0F3D5C]"
        >
          →
        </span>
      </span>
    </button>
  );
}

export function ContactUsHeroSection() {
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    | { type: "idle" }
    | { type: "success"; text: string }
    | { type: "error"; text: string }
  >({ type: "idle" });

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
    "box-border h-[58px] w-full max-w-full rounded-[10px] border border-[#9AAAB4] bg-[#FFFEFB] px-5 py-[15px] text-left align-middle font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-[150%] tracking-[0] text-[#0D1427] outline-none transition-colors placeholder:text-[#0F3D5C99] focus:border-[#4f738a] focus:bg-[#FFFEFB] focus:ring-2 focus:ring-[#4f738a]/25 max-md:h-[52px] max-md:text-[15px] max-md:leading-[1.5]";

  return (
    <section className="relative min-h-[707px] w-full min-w-0 max-w-full overflow-x-hidden lg:h-[707px] md:overflow-x-visible">
      <Image
        src={HERO_BG}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/60"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] min-w-0 flex-col items-center px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
        <h1 className="text-center align-middle font-['Darker_Grotesque'] text-[52px] font-bold leading-[120%] tracking-[0] text-[#FFFFFF] sm:text-[64px] lg:text-[80px] max-md:text-[28px] max-md:leading-[1.3]">
          Connect with us
        </h1>
        <p className="mx-auto mt-5 max-w-[740px] text-center align-middle font-['Plus_Jakarta_Sans'] text-[20px] font-normal leading-[140%] tracking-[0] text-[#FFFFFFE5] max-md:mt-4 max-md:text-[15px] max-md:leading-[1.5]">
          We’re here to make global workforce movement effortless. Contact us
          today and see how we can transform your mobility experience.
        </p>

        <div className="mx-auto mt-10 w-full max-w-[1025px] sm:mt-14">
          <div className="relative mx-auto box-border rounded-[32px] bg-[#FFFEFB] px-4 pb-8 pt-7 shadow-none sm:px-10 sm:pb-16 sm:pt-10 lg:h-[396px] lg:w-[832px] lg:px-[40px] lg:pt-[40px] lg:pr-[40px] lg:pb-[64px] lg:pl-[40px]">
            <form
              className="relative flex h-full w-full min-w-0 flex-col gap-3 max-md:gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (!isValid) {
                  setStatus({
                    type: "error",
                    text: "Please enter your name, a valid email and phone, and a message (10+ characters).",
                  });
                  return;
                }
                setStatus({
                  type: "success",
                  text: "Thanks! Your message has been captured. We’ll reach out soon.",
                });
                setValues({
                  name: "",
                  company: "",
                  email: "",
                  phone: "",
                  message: "",
                });
              }}
            >
              <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2 max-md:gap-4">
                <input
                  value={values.name}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, name: e.target.value }))
                  }
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
                  onChange={(e) =>
                    setValues((v) => ({ ...v, phone: e.target.value }))
                  }
                  className={inputClass}
                  type="tel"
                  placeholder="Enter phone number"
                  autoComplete="tel"
                  aria-label="Phone number"
                />
                <input
                  value={values.email}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, email: e.target.value }))
                  }
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
                  className={`box-border min-h-[130px] w-full max-w-full resize-none rounded-[10px] border border-[#9AAAB4] bg-[#FFFEFB] px-5 py-4 align-middle font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-[150%] tracking-[0] text-[#313849] outline-none transition-colors placeholder:text-[#7A8A95] focus:border-[#4f738a] focus:bg-[#FFFEFB] focus:ring-2 focus:ring-[#4f738a]/25 sm:col-span-2 max-md:min-h-[120px] max-md:text-[15px] max-md:leading-[1.5]`}
                  placeholder="Enter your message"
                  aria-label="Your message"
                />
              </div>

              {status.type === "error" ? (
                <div className="mt-4 rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[140%] text-red-700">
                  {status.text}
                </div>
              ) : null}
              {status.type === "success" ? (
                <div className="mt-4 rounded-[8px] border border-emerald-200 bg-emerald-50 px-4 py-3 font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[140%] text-emerald-800">
                  {status.text}
                </div>
              ) : null}

              <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-[48px] justify-center max-md:static max-md:mt-1 max-md:w-full max-md:translate-x-0 max-md:translate-y-0">
                <ContactSubmitButton disabled={!isValid} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
