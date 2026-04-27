"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const SERVICES_LINKS: { href: string; label: string }[] = [
  { href: "/services/employer-of-record", label: "Employer of Record" },
  { href: "/services/immigration-and-compliance", label: "Immigration & Compliance" },
  { href: "/services/global-payroll-solutions", label: "Global Payroll Solutions" },
  { href: "/services/recruitment-and-contractors", label: "Recruitment & Contractors" },
  { href: "/services/legalization-and-attestation-support", label: "Legalization & Attestation" },
  { href: "/services/relocation-and-destination-services", label: "Relocation & Destination" },
];

const ABOUT_LINKS: { href: string; label: string }[] = [
  { href: "/about", label: "Vision" },
  { href: "/about#our-leadership", label: "Team" },
  { href: "/#testimonials", label: "Testimonials" },
];

function ServicesLinkList() {
  return (
    <ul className="space-y-3 font-['Plus_Jakarta_Sans'] text-[16px] leading-[130%] font-medium tracking-[0] text-white/90 md:text-[17px] lg:space-y-[22px] lg:text-[18px]">
      {SERVICES_LINKS.map(({ href, label }) => (
        <li key={`${href}-${label}`}>
          <Link href={href} className="hover:text-white">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function AboutLinkList() {
  return (
    <ul className="space-y-3 font-['Plus_Jakarta_Sans'] text-[16px] leading-[130%] font-medium tracking-[0] text-white/90 md:text-[17px] lg:space-y-[22px] lg:text-[18px]">
      {ABOUT_LINKS.map(({ href, label }) => (
        <li key={href + label}>
          <Link href={href} className="hover:text-white">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function ContactBlock() {
  return (
    <div className="space-y-3 font-['Plus_Jakarta_Sans'] text-[15px] leading-[140%] font-normal tracking-[0] text-white/90 md:text-[16px] lg:space-y-[22px] lg:leading-[110%]">
      <p className="flex items-start gap-2">
        <span
          aria-hidden
          className="mt-0.5 inline-flex h-[19px] w-[20px] shrink-0 items-center justify-center"
        >
          <svg
            width="20"
            height="19"
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 17.5V3.75H13.75V0H2.5V17.5H0V18.75H8.75V15H11.25V18.75H20V17.5H17.5ZM7.5 12.5H5V10H7.5V12.5ZM7.5 8.75H5V6.25H7.5V8.75ZM7.5 5H5V2.5H7.5V5ZM11.25 12.5H8.75V10H11.25V12.5ZM11.25 8.75H8.75V6.25H11.25V8.75ZM11.25 5H8.75V2.5H11.25V5ZM16.25 12.5H13.75V10H16.25V12.5ZM16.25 8.75H13.75V6.25H16.25V8.75Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </span>
        <span className="align-middle font-['Plus_Jakarta_Sans'] text-[15px] font-normal leading-[150%] tracking-[0] md:text-[16px]">
          G01 Cocoon, Amruthahalli Srirampura Main Road, Opposite to Old
          Amruthahalli Police Station, Amruthahalli, Bangalore 560092
        </span>
      </p>
      <p className="flex items-center gap-2">
        <span
          aria-hidden
          className="inline-flex h-[15px] w-[15px] shrink-0 items-center justify-center"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5031 10.2083L11.3864 9.96667C11.1375 9.93744 10.8852 9.96499 10.6485 10.0473C10.4118 10.1295 10.1968 10.2644 10.0197 10.4417L8.48639 11.975C6.12089 10.7716 4.19811 8.84884 2.99473 6.48334L4.5364 4.94167C4.89473 4.58333 5.06973 4.08334 5.01139 3.575L4.76973 1.475C4.72266 1.06841 4.52762 0.693355 4.22178 0.42133C3.91594 0.149305 3.5207 -0.000666726 3.11139 2.2283e-06H1.66973C0.728062 2.2283e-06 -0.0552721 0.783335 0.00306123 1.725C0.444728 8.84167 6.1364 14.525 13.2447 14.9667C14.1864 15.025 14.9697 14.2417 14.9697 13.3V11.8583C14.9781 11.0167 14.3447 10.3083 13.5031 10.2083Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </span>
        <span>+91 9632832314</span>
      </p>
      <p className="flex items-center gap-2">
        <span
          aria-hidden
          className="inline-flex h-[14px] w-[17px] shrink-0 items-center justify-center"
        >
          <svg
            width="17"
            height="14"
            viewBox="0 0 17 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66667 13.3333C1.20833 13.3333 0.816111 13.1703 0.49 12.8442C0.163889 12.5181 0.000555556 12.1256 0 11.6667V1.66667C0 1.20833 0.163333 0.816111 0.49 0.49C0.816667 0.163889 1.20889 0.000555556 1.66667 0H15C15.4583 0 15.8508 0.163333 16.1775 0.49C16.5042 0.816666 16.6672 1.20889 16.6667 1.66667V11.6667C16.6667 12.125 16.5036 12.5175 16.1775 12.8442C15.8514 13.1708 15.4589 13.3339 15 13.3333H1.66667ZM8.33333 7.5L15 3.33333V1.66667L8.33333 5.83333L1.66667 1.66667V3.33333L8.33333 7.5Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </span>
        <a href="mailto:operations@emgeoglobal.com" className="hover:text-white">
          operations@emgeoglobal.com
        </a>
      </p>
    </div>
  );
}

function NewsletterFields({
  email,
  setEmail,
  onSubmit,
  status,
  variant,
}: {
  email: string;
  setEmail: (v: string) => void;
  onSubmit: (e: FormEvent) => void;
  status: "idle" | "success";
  variant: "mobile" | "desktop";
}) {
  const inputClass =
    variant === "mobile"
      ? "box-border h-12 w-full min-h-[48px] rounded-lg border-2 border-white/50 bg-[#2a5f7a]/90 px-4 align-middle font-['Plus_Jakarta_Sans'] text-[16px] leading-[130%] font-medium tracking-[0] text-white placeholder:text-white/70 outline-none focus:border-white focus:bg-[#2a5f7a]"
      : "h-10 w-full rounded-[4px] border border-white/35 bg-transparent px-3 align-middle font-['Plus_Jakarta_Sans'] text-[18px] leading-[130%] font-medium tracking-[0] text-white placeholder:text-white/65 outline-none";

  const buttonClass =
    variant === "mobile"
      ? "mt-4 inline-flex h-[48px] w-full max-w-full items-center justify-between gap-2 rounded-[72px] border border-[#1C4E71] bg-white pl-6 pr-1 py-1 align-middle tracking-[0] text-[#1C4E71] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg md:h-[44px]"
      : "mt-4 inline-flex h-[44px] w-[177px] items-center gap-2 rounded-[72px] border border-[#1C4E71] bg-white pl-[24px] pr-[4px] pt-[4px] pb-[4px] align-middle tracking-[0] text-[#1C4E71] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg";

  return (
    <form className={variant === "mobile" ? "mt-4" : "mt-5"} onSubmit={onSubmit}>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
        className={inputClass}
      />
      <button type="submit" className={buttonClass}>
        <span
          className={`inline-flex h-full min-w-0 items-center whitespace-nowrap font-['Darker_Grotesque'] text-[18px] leading-[130%] font-bold tracking-[0] ${variant === "mobile" ? "flex-1 justify-start text-left" : "w-[105px] justify-center text-center"}`}
        >
          Subscribe Now
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
      {status === "success" ? (
        <div className="mt-3 align-middle font-['Plus_Jakarta_Sans'] text-[15px] leading-[130%] font-medium tracking-[0] text-white/85 md:text-[18px]">
          Thanks! You’re subscribed.
        </div>
      ) : null}
    </form>
  );
}

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const onNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("success");
  };

  return (
    <footer className="relative z-20 mt-auto h-auto shrink-0 overflow-visible rounded-t-3xl bg-[#1C4E71] text-white lg:rounded-[26px]">
      {/* —— Mobile —— */}
      <div className="h-auto min-h-[1080px] overflow-visible px-5 pb-32 pt-5 lg:hidden">
        <div className="relative -mx-5 -mt-5 w-[calc(100%+2.5rem)] max-w-none overflow-hidden rounded-tl-[26px]">
          <img
            src="/images/footer-logo-framed.png"
            alt="Emgeo Global"
            className="block h-auto w-full max-h-[120px] object-contain object-left"
          />
        </div>

        <h3 className="mt-6 max-w-[760px] font-['Darker_Grotesque'] text-[28px] leading-[110%] font-bold tracking-[0] text-white sm:text-[32px]">
          Your Trusted partner to support all Global Mobility needs
        </h3>

        <div className="mt-4 border-t border-white/20" />

        <div className="divide-y divide-white/20 border-b border-white/20">
          <div className="py-3.5">
            <h4 className="font-['Darker_Grotesque'] text-[26px] leading-[110%] font-bold tracking-[0] text-white sm:text-[28px]">
              Services
            </h4>
            <div className="mt-3 pb-1">
              <ServicesLinkList />
            </div>
          </div>

          <div className="py-3.5">
            <h4 className="font-['Darker_Grotesque'] text-[26px] leading-[110%] font-bold tracking-[0] text-white sm:text-[28px]">
              About
            </h4>
            <div className="mt-3 pb-1">
              <AboutLinkList />
            </div>
          </div>

          <div className="py-3.5">
            <h4 className="font-['Darker_Grotesque'] text-[26px] leading-[110%] font-bold tracking-[0] text-white sm:text-[28px]">
              Contact
            </h4>
            <div className="mt-3 pb-1">
              <ContactBlock />
            </div>
          </div>
        </div>

        <div className="relative z-10 mt-6">
          <h4 className="font-['Darker_Grotesque'] text-[26px] leading-[110%] font-bold tracking-[0] text-white sm:text-[28px]">
            Get our updates via newsletter
          </h4>
          <NewsletterFields
            email={email}
            setEmail={setEmail}
            onSubmit={onNewsletterSubmit}
            status={status}
            variant="mobile"
          />
        </div>

        <div className="mt-6 border-t border-white/20 pt-5">
          <div className="flex flex-wrap items-center justify-center gap-6 text-white">
            <a href="https://in.linkedin.com/company/emgeo-global-solutions-pvt-ltd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/95 hover:text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1.01 1.85-2.05 3.8-2.05 4.06 0 4.82 2.67 4.82 6.14V23h-4v-7.35c0-1.75-.03-4-2.44-4-2.45 0-2.82 1.91-2.82 3.87V23h-4V8Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-white/95 hover:text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm-.12 2A3.63 3.63 0 0 0 4 7.63v8.74A3.63 3.63 0 0 0 7.63 20h8.74A3.63 3.63 0 0 0 20 16.37V7.63A3.63 3.63 0 0 0 16.37 4H7.63Zm9.62 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
            <a href="#" aria-label="X" className="text-white/95 hover:text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.26l-4.9-6.41L6.43 22H3.31l7.25-8.3L.8 2h6.36l4.42 5.84L18.9 2Zm-1.1 18h1.72L6.24 3.9H4.4L17.8 20Z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-white/95 hover:text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                <path d="M13.5 22v-8.2h2.77l.42-3.2H13.5V8.55c0-.93.27-1.55 1.64-1.55h1.75V4.14A24.5 24.5 0 0 0 14.3 4C11.74 4 10 5.5 10 8.27v2.33H7.25v3.2H10V22h3.5Z" />
              </svg>
            </a>
          </div>
          <p className="mt-5 text-center font-['Plus_Jakarta_Sans'] text-[16px] leading-[130%] font-medium tracking-[0] text-white/75">
            Copyrights reserved 2026
          </p>
        </div>

        <div className="h-24" aria-hidden />
      </div>

      {/* —— Desktop —— */}
      <div className="relative mr-auto ml-0 hidden min-h-[647px] w-full max-w-[1392px] bg-[#1C4E71] lg:block">
        <div className="relative grid items-start lg:grid-cols-[minmax(0,411px)_minmax(0,1fr)]">
          <div className="relative left-0 w-full max-w-[411px] shrink-0 self-start overflow-hidden rounded-tl-[26px]">
            <img
              src="/images/footer-logo-framed.png"
              alt="Emgeo Global"
              className="block h-auto w-full max-h-[137px] object-contain object-left"
            />
          </div>
          <div className="min-w-0 px-6 pt-5 pb-4 lg:px-7 lg:pt-6">
            <h3 className="max-w-[760px] align-middle font-['Darker_Grotesque'] text-[48px] leading-[110%] font-bold tracking-[0] text-white">
              Your Trusted partner to support all Global Mobility needs
            </h3>
          </div>
        </div>

        <div className="mt-[20px] ml-[41px] w-[1325px] border-t border-white/20" />

        <div className="flex flex-wrap gap-y-8 gap-x-[20px] py-6 pl-[41px] pr-6 lg:flex-nowrap lg:pr-7">
          <div className="min-w-0 h-[167px] w-[355px] flex-none translate-x-[50px]">
            <h4 className="w-[377px] whitespace-nowrap align-middle font-['Darker_Grotesque'] text-[32px] leading-[110%] font-bold tracking-[0] text-white">
              Get our updates via newsletter
            </h4>
            <NewsletterFields
              email={email}
              setEmail={setEmail}
              onSubmit={onNewsletterSubmit}
              status={status}
              variant="desktop"
            />
          </div>

          <div className="min-w-0 min-h-[380px] w-[235px] flex-none translate-x-[200px]">
            <h4 className="align-middle font-['Darker_Grotesque'] text-[32px] leading-[110%] font-bold tracking-[0] text-white">
              Services
            </h4>
            <div className="mt-3">
              <ServicesLinkList />
            </div>
          </div>

          <div className="min-w-0 h-[157px] w-[235px] flex-none translate-x-[300px]">
            <h4 className="align-middle font-['Darker_Grotesque'] text-[32px] leading-[110%] font-bold tracking-[0] text-white">
              About
            </h4>
            <div className="mt-3">
              <AboutLinkList />
            </div>
          </div>

          <div className="min-w-0 h-[201px] w-[235px] flex-none translate-x-[200px]">
            <h4 className="align-middle font-['Darker_Grotesque'] text-[32px] leading-[110%] font-bold tracking-[0] text-white">
              Contact
            </h4>
            <div className="mt-3">
              <ContactBlock />
            </div>
          </div>
        </div>

        <div className="-mt-[10px] mx-6 border-t border-white/20 lg:mx-7" />

        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 lg:px-7">
          <div className="align-middle font-['Plus_Jakarta_Sans'] text-[18px] leading-[130%] font-medium tracking-[0] text-white/75">
            Copyrights reserved 2026
          </div>
          <div className="flex items-center gap-4 text-white">
            <a href="https://in.linkedin.com/company/emgeo-global-solutions-pvt-ltd" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/95 hover:text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1.01 1.85-2.05 3.8-2.05 4.06 0 4.82 2.67 4.82 6.14V23h-4v-7.35c0-1.75-.03-4-2.44-4-2.45 0-2.82 1.91-2.82 3.87V23h-4V8Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-white/95 hover:text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm-.12 2A3.63 3.63 0 0 0 4 7.63v8.74A3.63 3.63 0 0 0 7.63 20h8.74A3.63 3.63 0 0 0 20 16.37V7.63A3.63 3.63 0 0 0 16.37 4H7.63Zm9.62 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
            <a href="#" aria-label="X" className="text-white/95 hover:text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                <path d="M18.9 2H22l-6.78 7.75L23.2 22h-6.26l-4.9-6.41L6.43 22H3.31l7.25-8.3L.8 2h6.36l4.42 5.84L18.9 2Zm-1.1 18h1.72L6.24 3.9H4.4L17.8 20Z" />
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-white/95 hover:text-white">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
                <path d="M13.5 22v-8.2h2.77l.42-3.2H13.5V8.55c0-.93.27-1.55 1.64-1.55h1.75V4.14A24.5 24.5 0 0 0 14.3 4C11.74 4 10 5.5 10 8.27v2.33H7.25v3.2H10V22h3.5Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
