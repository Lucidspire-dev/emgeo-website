"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "./Container";
import { ConnectWithUsSection } from "./ConnectWithUsForm";
import { FaqSectionTitle } from "./FaqSectionTitle";

const HERO_IMAGE =
  "https://emgeo.lucidspire.com/wp-content/uploads/2026/02/Screenshot-from-2026-02-27-21-16-22.png";

const processSteps = [
  {
    title: "Initiation and Needs Assessment",
    description:
      "The engagement begins with a structured consultation and detailed needs assessment covering family composition, lifestyle preferences, schooling requirements, commuting expectations, and budget considerations. This phase establishes clear timelines, priorities, and realistic settlement expectations aligned with the assignee's role and assignment duration.",
  },
  {
    title: "Pre-Arrival Planning and Coordination",
    description:
      "Prior to arrival, Emgeo coordinates housing shortlists, neighbourhood profiles, schooling options, and essential service planning. This proactive preparation ensures that assignees arrive with clarity on accommodation options, local living standards, and immediate next steps upon landing.",
  },
  {
    title: "Arrival, Orientation, and Local Setup",
    description:
      "Upon arrival, assignees receive structured \"meet and greet\" support, city and neighbourhood orientation, and assistance with bank accounts, local registrations, transportation, and essential services. This phase focuses on eliminating uncertainty during the critical first days in the host country.",
  },
  {
    title: "Settling-In and Cultural Integration",
    description:
      "Emgeo supports longer-term integration through assistance with healthcare registrations, utility connections, internet setup, public transportation usage, and cultural acclimatisation. This ensures assignees and families are comfortable, independent, and confident in their daily routines.",
  },
  {
    title: "Ongoing Support and Issue Resolution",
    description:
      "Throughout the assignment, Emgeo remains the single point of contact for settlement-related concerns, addressing housing adjustments, school changes, or lifestyle issues. This continuous support reduces assignment disruption and enhances employee satisfaction and retention.",
  },
] as const;

const helpsCards = [
  {
    title: "Protects Assignment Success",
    description:
      "Protects Assignment Success by reducing relocation-related stress that often leads to early assignment failure or reduced employee performance.",
    iconClassName: "fa-solid fa-circle-check",
  },
  {
    title: "Improves Employee Productivity",
    description:
      "Improves Employee Productivity by enabling assignees to focus on their professional responsibilities rather than settlement challenges.",
    iconClassName: "fa-solid fa-star",
  },
  {
    title: "Enhances Employer Brand",
    description:
      "Enhances Employer Brand by demonstrating structured care for employee and family well-being during international deployments.",
    iconClassName: "fa-solid fa-user-tie",
  },
  {
    title: "Provides Cost Transparency",
    description:
      "Provides Cost Transparency through clearly defined services, realistic budgeting, and visibility into third-party expenses.",
    iconClassName: "fa-solid fa-receipt",
  },
  {
    title: "Reduces Internal Burden",
    description:
      "Reduces Internal Burden by outsourcing complex, location-specific settlement activities to experienced destination specialists.",
    iconClassName: "fa-solid fa-handshake",
  },
] as const;

const faqs = [
  {
    q: "Are Relocation & Destination Services mandatory for international assignments?",
    a: "No. These services are not mandatory. However, organizations that invest in structured destination support experience significantly higher assignment success rates, faster employee productivity, and improved assignee satisfaction, particularly for medium- to long-term international deployments.",
  },
  {
    q: "Can Relocation & Destination Services be availed independently?",
    a: "Yes. Emgeo Global offers Destination Services as a standalone solution. While commonly bundled with Immigration or Employer of Record services, clients may engage these services independently based on their specific operational or employee support requirements.",
  },
  {
    q: "Does Emgeo assist with housing and schooling searches?",
    a: "Yes. Emgeo provides structured assistance for housing searches, temporary accommodation, and schooling options based on family needs, budget, commuting considerations, and local availability, ensuring informed decision-making by the assignee.",
  },
  {
    q: "Are family members covered under these services?",
    a: "Yes. Our destination services are designed to support both the assignee and accompanying family members, recognising that family comfort and integration are critical factors in the overall success of international assignments.",
  },
  {
    q: "How are costs managed and communicated to the client?",
    a: "Emgeo follows a transparent cost structure. Service fees are clearly defined, and third-party expenses are billed at actuals with prior visibility. This ensures clients and assignees retain full control over relocation-related budgets.",
  },
] as const;

export function RelocationAndDestinationServicesPage() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  return (
    <main className="service-page service-relocation-and-destination-services flex min-w-0 max-w-full flex-col overflow-x-hidden md:overflow-x-visible">
      <section className="bg-background">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="relative">
            <div className="relative mx-auto aspect-[1238/457] w-full max-w-[1238px] overflow-hidden rounded-[24px]">
              <Image src={HERO_IMAGE} alt="Relocation and destination services" fill className="object-cover object-center" sizes="(min-width: 1280px) 1238px, 100vw" priority />
            </div>
            <div className="relative z-10 mx-auto -mt-8 w-full max-w-[980px] rounded-[24px] p-6 sm:-mt-12 sm:p-8 lg:-mt-[214px] lg:ml-[-25px] lg:max-w-[900px] lg:p-10">
              <h1 className="align-middle font-['Darker_Grotesque'] text-[44px] font-bold leading-[110%] tracking-[0] [leading-trim:none] text-[#2899E6] sm:text-[60px] lg:text-[80px] max-md:text-[28px] max-md:leading-[1.3]">
                Relocation and Destination Services
              </h1>
              <p className="mt-4 align-middle font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-[150%] tracking-[0] [leading-trim:none] text-[#0B1F2DCC] sm:text-[24px] max-md:text-[15px] max-md:leading-[1.5]">
                Emgeo Global delivers structured, country-specific destination
                support through an experienced global partner network.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <div className="mx-auto w-full px-4 pb-8 pt-2 sm:px-6 sm:pb-10 lg:px-8 lg:pt-4">
          <h2 className="text-center align-middle font-['Darker_Grotesque'] text-[40px] font-bold leading-[110%] tracking-[0] [leading-trim:none] sm:text-[52px] lg:text-[64px] max-md:text-[28px] max-md:leading-[1.3]">
            <span className="text-[#0B1F2D]">How this </span>
            <span className="text-[#2899E6]">works</span>
          </h2>
          <div className="process-wrapper mt-10">
            <div className="horizontal-process-wrapper">
              <div className="process-row">
                {processSteps.map((step, idx) => (
                  <div key={step.title} className={`process-item card-${idx + 1}`}>
                    <div className="process-number"><span>{idx + 1}</span></div>
                    <div className="process-card">
                      <h2>{step.title}</h2>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background" aria-labelledby="reloc-helps-heading">
        <Container className="-mt-[80px] max-md:mt-0 pt-8 pb-8 sm:pt-8 sm:pb-10 lg:pt-10">
          <h2
            id="reloc-helps-heading"
            className="scroll-mt-28 text-center align-middle font-['Darker_Grotesque'] text-[40px] font-bold leading-[110%] tracking-[0] [leading-trim:none] sm:text-[52px] lg:text-[64px] max-md:text-[28px] max-md:leading-[1.3]"
          >
            <span className="text-[#0B1F2D]">How This Service </span>
            <span className="text-[#2899E6]">Helps You</span>
          </h2>

          <div className="reloc-benefits mt-10">
            <div className="emgeo-benefits-section">
            {helpsCards.map((card, idx) => (
              <article
                key={card.title}
                className={`emgeo-card ${idx === helpsCards.length - 1 ? "card5" : ""}`}
              >
                <div className="emgeo-icon">
                  <i className={card.iconClassName} aria-hidden />
                </div>
                <div className="emgeo-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="pt-10 pb-14 sm:pb-18">
          <div className="mx-auto w-full max-w-[1280px]">
            <FaqSectionTitle />
            <div id="my-faq" className="mt-8">
              {faqs.map((f, idx) => {
                const isActive = idx === activeFaqIndex;
                return (
                  <div key={f.q} className="mb-8 overflow-hidden rounded-[16px] border-0 last:mb-0" onMouseEnter={() => setActiveFaqIndex(idx)}>
                    <button
                      type="button"
                      className={`relative w-full rounded-t-[16px] border-0 px-10 py-8 pr-24 text-left align-middle font-['Plus_Jakarta_Sans'] text-[20px] font-semibold leading-[140%] tracking-[0] text-[#0B1F2D] sm:text-[22px] lg:text-[24px] max-md:px-4 max-md:py-4 max-md:pr-16 max-md:text-[18px] max-md:leading-[1.45] ${isActive ? "bg-[#DDF1FF]" : "bg-[#F2F2F2]"}`}
                      aria-expanded={isActive}
                      onClick={() => setActiveFaqIndex((prev) => (prev === idx ? prev : idx))}
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
        </Container>
      </section>

      <ConnectWithUsSection />
    </main>
  );
}

