"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ConnectWithUsSection } from "./ConnectWithUsForm";
import { FaqSectionTitle } from "./FaqSectionTitle";

const HERO_IMAGE =
  "https://emgeo.lucidspire.com/wp-content/uploads/2026/02/Screenshot-from-2026-02-27-21-16-22.png";

const processSteps = [
  {
    title: "Requirement Assessment and Country Feasibility Review",
    description:
      "We begin by understanding the assignment objective, role scope, duration, and destination country. Our team evaluates immigration feasibility, work permit categories, quota requirements, minimum salary thresholds, and regulatory constraints applicable to the proposed deployment.",
  },
  {
    title: "Immigration Strategy and Visa Pathway Advisory",
    description:
      "Based on feasibility findings, we identify the most appropriate and legally compliant visa or work permit category. Clients receive a clear advisory covering timelines, documentation requirements, costs, and country-specific risks.",
  },
  {
    title: "Documentation Collection and Compliance Validation",
    description:
      "All documents are reviewed in detail to ensure alignment with statutory formats and host-country regulations. This includes employment details, compensation structures, educational credentials, and personal documentation. Errors at this stage are proactively eliminated to prevent rejection or delays.",
  },
  {
    title: "Application Submission and Authority Liaison",
    description:
      "Once documentation is validated, applications are submitted to the relevant immigration authorities. Emgeo coordinates with government bodies, immigration departments, and local partners to track progress, respond to queries, and ensure procedural compliance throughout adjudication.",
  },
  {
    title: "Post-Approval, In-Country Compliance, and Lifecycle Management",
    description:
      "After approval, we support travel readiness and in-country formalities such as registrations, medicals, and local compliance requirements. We track permit validity, manage renewals proactively, and handle exit formalities to ensure full legal closure of the assignment.",
  },
] as const;

const helpsCards = [
  {
    title: "Ensures Predictable Project Timelines",
    description:
      "Accurate visa selection and realistic timelines prevent deployment delays that could otherwise impact client commitments and revenue delivery.",
    path: "M420 56C420 69.2548 430.745 80 444 80H476C489.255 80 500 90.7452 500 104V386C500 399.255 489.255 410 476 410H104C90.7452 410 80 399.255 80 386V357C80 343.745 69.2548 333 56 333H24C10.7452 333 0 322.255 0 309V24C0 10.7452 10.7452 0 24 0H396C409.255 0 420 10.7452 420 24V56Z",
  },
  {
    title: "Eliminates Regulatory Risk",
    description:
      "Clients avoid fines, blacklisting, and legal exposure by ensuring every assignee operates under the correct immigration and employment framework.",
    path: "M420 56C420 69.2548 430.745 80 444 80H476C489.255 80 500 90.7452 500 104V306C500 319.255 489.255 330 476 330H444C430.745 330 420 340.745 420 354V386C420 399.255 409.255 410 396 410H24C10.7452 410 0 399.255 0 386V24C0 10.7452 10.7452 0 24 0H396C409.255 0 420 10.7452 420 24V56Z",
  },
  {
    title: "Reduces Internal Compliance Burden",
    description:
      "Legal, HR, and finance teams are freed from navigating complex immigration rules, allowing them to focus on core business operations.",
    path: "M420 56C420 69.2548 430.745 80 444 80H476C489.255 80 500 90.7452 500 104V386C500 399.255 489.255 410 476 410H104C90.7452 410 80 399.255 80 386V357C80 343.745 69.2548 333 56 333H24C10.7452 333 0 322.255 0 309V24C0 10.7452 10.7452 0 24 0H396C409.255 0 420 10.7452 420 24V56Z",
  },
  {
    title: "Supports Scalable Global Expansion",
    description:
      "With a single immigration partner across 160+ countries, clients can expand into new geographies without rebuilding compliance frameworks repeatedly.",
    path: "M420 56C420 69.2548 430.745 80 444 80H476C489.255 80 500 90.7452 500 104V306C500 319.255 489.255 330 476 330H444C430.745 330 420 340.745 420 354V386C420 399.255 409.255 410 396 410H24C10.7452 410 0 399.255 0 386V24C0 10.7452 10.7452 0 24 0H396C409.255 0 420 10.7452 420 24V56Z",
  },
  {
    title: "Protects Corporate Reputation",
    description:
      "Strict adherence to local laws ensures the organisation maintains a strong compliance record with authorities and stakeholders.",
    path: "M420 56C420 69.2548 430.745 80 444 80H476C489.255 80 500 90.7452 500 104V386C500 399.255 489.255 410 476 410H104C90.7452 410 80 399.255 80 386V357C80 343.745 69.2548 333 56 333H24C10.7452 333 0 322.255 0 309V24C0 10.7452 10.7452 0 24 0H396C409.255 0 420 10.7452 420 24V56Z",
  },
] as const;

const faqs = [
  {
    q: "Can an assignee work on a Business Visa in a foreign country?",
    a: "No. In the majority of countries, Business Visas do not permit remunerative work. Paid employment requires a valid Work Visa or Work Permit issued specifically for that jurisdiction and role.",
  },
  {
    q: "Can an assignee remain on home-country payroll while working abroad?",
    a: "This depends on host-country regulations. Most jurisdictions require local payroll compliance and statutory employer contributions. Emgeo advises compliant payroll structures aligned with local labour and tax laws.",
  },
  {
    q: "Is it possible to convert a Business Visa into a Work Permit in-country?",
    a: "Generally no. Most countries require the assignee to exit and apply from their home country unless specific \"change of status\" provisions exist under local law.",
  },
  {
    q: "What documents are typically required for a Work Permit application?",
    a: "Common requirements include passport copies, photographs, detailed job descriptions, designation, salary details meeting local thresholds, and an updated CV. Additional documents may apply based on country-specific rules.",
  },
  {
    q: "Does Emgeo manage renewals and exit compliance?",
    a: "Yes. Emgeo tracks permit validity, manages renewals well in advance, and ensures compliant exits, protecting both the client and the assignee from future regulatory or immigration issues.",
  },
] as const;

export function ImmigrationAndCompliancePage() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);
  const cardsSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = cardsSectionRef.current;
    if (!section) return;

    const cards = Array.from(section.querySelectorAll<HTMLElement>(".imm-card"));
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("show");
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));

    let isActive = false;
    let reachedEnd = false;
    let reachedStart = false;
    let lockCompleted = false;

    const checkPosition = () => {
      if (lockCompleted) return;
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight * 0.4 &&
        rect.bottom >= window.innerHeight * 0.6
      ) {
        isActive = true;
      } else {
        isActive = false;
        reachedEnd = false;
        reachedStart = false;
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (window.innerWidth <= 768) return;
      if (!isActive || lockCompleted) return;

      const maxScroll = section.scrollWidth - section.clientWidth;
      if (e.deltaY > 0) {
        if (section.scrollLeft < maxScroll) {
          e.preventDefault();
          section.scrollLeft += 60;
          reachedEnd = false;
        } else if (!reachedEnd) {
          e.preventDefault();
          reachedEnd = true;
        } else {
          lockCompleted = true;
          isActive = false;
        }
      } else if (e.deltaY < 0) {
        if (section.scrollLeft > 0) {
          e.preventDefault();
          section.scrollLeft -= 60;
          reachedStart = false;
        } else if (!reachedStart) {
          e.preventDefault();
          reachedStart = true;
        }
      }
    };

    window.addEventListener("scroll", checkPosition, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });
    checkPosition();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <main className="service-page service-immigration-and-compliance flex min-w-0 max-w-full flex-col overflow-x-hidden md:overflow-x-visible">
      <section className="bg-background">
        <div className="mx-auto w-full px-4 pb-[28px] pt-12 sm:px-6 sm:pb-[44px] sm:pt-16 lg:px-8 lg:pb-[60px] lg:pt-20">
          <div className="relative">
            <div className="relative mx-auto aspect-[1238/457] w-full max-w-[1238px] overflow-hidden rounded-[24px]">
              <Image
                src={HERO_IMAGE}
                alt="Immigration and compliance service"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1280px) 1238px, 100vw"
                priority
              />
            </div>
            <div className="imm-hero-panel relative z-10 mx-auto -mt-8 w-full max-w-[980px] rounded-[24px] border-0 p-6 shadow-none outline-none [&_*]:border-b-0 [&_hr]:hidden sm:-mt-12 sm:p-8 lg:-mt-[214px] lg:ml-[60px] lg:max-w-[900px] lg:p-10">
              <h1 className="align-middle font-['Darker_Grotesque'] text-[42px] font-bold leading-[110%] tracking-[0] [leading-trim:none] text-[#2899E6] sm:text-[56px] lg:text-[64px] max-md:text-[28px] max-md:leading-[1.3]">
                Immigration and Compliance
              </h1>
              <p className="imm-hero-copy mt-4 border-0 align-middle font-['Plus_Jakarta_Sans'] text-[20px] font-normal leading-[150%] tracking-[0] [leading-trim:none] text-[#0B1F2DCC] shadow-none sm:text-[24px] max-md:text-[15px] max-md:leading-[1.5]">
                We deliver end-to-end immigration and compliance support to
                enable lawful, seamless cross-border workforce deployment. We
                manage visas, work permits, renewals, and statutory obligations
                across 160+ countries
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto w-full px-4 pb-8 pt-2 sm:px-6 sm:pb-10 lg:px-8 lg:pt-4">
          {/* Inline flex + gap: globals.css cannot override this; keeps heading close to steps */}
          <div
            className="imm-how-stack flex min-w-0 flex-col items-stretch"
            style={{ gap: "clamp(12px, 2.4vw, 20px)" }}
          >
            <h2 className="-mt-[60px] text-center align-middle font-['Darker_Grotesque'] text-[40px] font-bold leading-[110%] tracking-[0] [leading-trim:none] sm:text-[52px] lg:text-[64px] max-md:mt-0 max-md:text-[28px] max-md:leading-[1.3]">
              <span className="text-[#0B1F2D]">How this </span>
              <span className="text-[#2899E6]">works</span>
            </h2>

            <div id="imm-how-process" className="immv-process-wrapper">
              <div className="immv-timeline-line" />
              {processSteps.map((step, idx) => (
                <div
                  key={step.title}
                  className={`immv-process-item immv-card-${idx + 1}`}
                >
                  <div className="immv-process-number">
                    <span>{idx + 1}</span>
                  </div>
                  <div className="immv-process-card">
                    <h2>{step.title}</h2>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-background overflow-x-hidden"
        aria-labelledby="imm-helps-heading"
      >
        <div className="mx-auto w-full px-4 pt-6 pb-8 sm:px-6 sm:pt-8 sm:pb-10 lg:px-8 lg:pt-10">
          <h2
            id="imm-helps-heading"
            className="text-center align-middle font-['Darker_Grotesque'] text-[40px] font-bold leading-[110%] tracking-[0] [leading-trim:none] sm:text-[52px] lg:text-[64px] max-md:text-[28px] max-md:leading-[1.3]"
          >
            <span className="text-[#0B1F2D]">How This Service </span>
            <span className="text-[#2899E6]">Helps You</span>
          </h2>
        </div>

        <div ref={cardsSectionRef} className="imm-cards-section">
          <div className="imm-cards-wrapper">
            {helpsCards.map((card) => (
              <article key={card.title} className="imm-card">
                <svg viewBox="0 0 500 410" aria-hidden>
                  <path d={card.path} fill="#DDF1FF" />
                </svg>
                <div className="imm-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto w-full px-4 pt-10 pb-14 sm:px-6 sm:pb-18 lg:px-8">
          <div className="mx-auto w-full max-w-[1280px]">
            <FaqSectionTitle className="mt-[50px]" />

            <div id="my-faq" className="mt-8">
              {faqs.map((f, idx) => {
                const isActive = idx === activeFaqIndex;
                return (
                  <div
                    key={f.q}
                    className="mb-8 overflow-hidden rounded-[16px] border-0 last:mb-0"
                    onMouseEnter={() => setActiveFaqIndex(idx)}
                  >
                    <button
                      type="button"
                      className={`relative w-full rounded-t-[16px] border-0 px-10 py-8 pr-24 text-left align-middle font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[140%] tracking-[0] text-[#0B1F2D] sm:text-[22px] lg:text-[24px] max-md:px-4 max-md:py-4 max-md:pr-16 max-md:text-[18px] max-md:leading-[1.45] ${
                        isActive ? "bg-[#DDF1FF]" : "bg-[#F2F2F2]"
                      }`}
                      aria-expanded={isActive}
                      onClick={() =>
                        setActiveFaqIndex((prev) => (prev === idx ? prev : idx))
                      }
                    >
                      {f.q}
                      <span className="pointer-events-none absolute right-[17px] top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#1C4E71] p-0 text-white shadow-[0_6px_20px_rgba(0,0,0,0.15)] max-md:right-4 max-md:h-11 max-md:w-11">
                        <svg
                          aria-hidden
                          viewBox="0 0 24 24"
                          className="h-7 w-7"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.8"
                          strokeLinecap="round"
                        >
                          <path d="M6 12h12" />
                          {!isActive && <path d="M12 6v12" />}
                        </svg>
                      </span>
                    </button>
                    {isActive ? (
                      <div className="relative rounded-b-[16px] bg-[#DDF1FF] px-10 pb-8 pt-8 align-middle font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-[140%] tracking-[0] text-[#0B1F2D] sm:text-[19px] lg:text-[20px] max-md:px-4 max-md:pb-5 max-md:pt-4 max-md:text-[15px] max-md:leading-[1.5]">
                        <span className="absolute left-10 right-10 top-0 h-px bg-[#1C4E71]/20 max-md:left-4 max-md:right-4" />
                        <p>{f.a}</p>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ConnectWithUsSection />
    </main>
  );
}

