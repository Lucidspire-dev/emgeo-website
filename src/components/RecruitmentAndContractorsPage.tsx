"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "./Container";
import { ConnectWithUsSection } from "./ConnectWithUsForm";
import { FaqSectionTitle } from "./FaqSectionTitle";
import { HowItWorksAccordion } from "./HowItWorksAccordion";
import { ServiceHelpsYouSection } from "./ServiceHelpsYouSection";

const HERO_IMAGE =
  "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/Screenshot-from-2026-03-02-12-44-42.png";

const timelineSteps = [
  {
    title: "Requirement Definition and Workforce Planning",
    titleClassName: "c1",
    description:
      "The engagement begins with a detailed understanding of role requirements, skill sets, experience levels, project duration, and budgeted compensation to ensures realistic market mapping and avoids delays during sourcing and negotiation stages.",
  },
  {
    title: "Strategic Talent Sourcing (Local and International)",
    titleClassName: "c2",
    description:
      "We leverages our global recruitment network, proprietary databases, and local recruitment partners to source suitable candidates either from the home country or directly within the destination country, depending on cost, timeline, and compliance.",
  },
  {
    title: "Screening, Vetting, and Shortlisting",
    titleClassName: "c3",
    description:
      "Candidates undergo structured screening to validate technical competencies, role suitability, and cultural alignment. Only shortlisted profiles are presented, ensuring quality over volume and reducing evaluation time for client teams.",
  },
  {
    title: "Client Interviews, Selection, and Offer Management",
    titleClassName: "c4",
    description:
      "We coordinates interviews, manages feedback loops, and supports offer finalization. We also advise on market-aligned compensation, statutory benefits, and contract structures to ensure acceptance while remaining fully compliant with local labour norms.",
  },
  {
    title: "Onboarding, Deployment, and Contract Administration",
    titleClassName: "c5",
    description:
      "Once selected, we manages onboarding, documentation, immigration alignment (if applicable) and payroll onboarding through EoR or contractor frameworks. This ensures the talent is deployed legally, efficiently, and ready to contribute from day one.",
  },
] as const;

const HELPS_ICON_SRC = {
  y1: "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/y1.png",
  y2: "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/y2.png",
  y3: "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/y3.png",
  y4: "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/y4.png",
  y5: "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/y5.png",
} as const;

const helpsCards = [
  {
    title: "Accelerates Hiring Timelines",
    description:
      "Access to pre-vetted global and local talent pools significantly reducing time-to-hire, helping organizations meet project deadlines and market entry commitments without compromising on quality.",
    iconSrc: HELPS_ICON_SRC.y1,
  },
  {
    title: "Eliminates Compliance Risk",
    description:
      "By engaging talent through compliant employment or contractor models, clients avoid misclassification risks, labour law violations, and regulatory exposure in unfamiliar jurisdictions.",
    iconSrc: HELPS_ICON_SRC.y2,
  },
  {
    title: "Optimizes Resource Allocation",
    description:
      "Clients save on internal recruitment overheads, extended vacancy costs, and unnecessary relocation expenses by adopting the most efficient sourcing strategy for each role.",
    iconSrc: HELPS_ICON_SRC.y3,
  },
  {
    title: "Provides Flexibility",
    description:
      "Whether the requirement is permanent, contract, or project-based deployment, Emgeo enables flexible workforce scaling aligned to business demand.",
    iconSrc: HELPS_ICON_SRC.y4,
  },
  {
    title: "Single-Point Accountability",
    description:
      "From sourcing to onboarding and deployment, Emgeo acts as a single accountable partner, simplifying coordination throughout the recruitment lifecycle.",
    iconSrc: HELPS_ICON_SRC.y5,
  },
] as const;

const faqs = [
  {
    q: "Can Emgeo support recruitment in countries where we do not have a legal entity?",
    a: "Yes. Emgeo can source and onboard local or international talent through its Employer of Record or compliant contractor models, allowing you to hire legally without establishing a local entity.",
  },
  {
    q: "What types of roles does Emgeo typically support?",
    a: "Emgeo supports a wide range of roles across technology, IT services, finance, operations, and specialized project-based functions, subject to local labour and immigration feasibility.",
  },
  {
    q: "Do you provide salary benchmarking for different countries?",
    a: "Yes. Emgeo provides market-aligned salary benchmarking based on role complexity, experience requirements, industry standards, and local labour market conditions to support informed hiring decisions.",
  },
  {
    q: "Can Emgeo support short-term or project-based contractor requirements?",
    a: "Yes. Emgeo supports short-term and project-based engagements, provided the minimum duration and local compliance requirements are met. Typically, a minimum engagement period applies.",
  },
  {
    q: "How does Emgeo ensure recruitment compliance across countries?",
    a: "Compliance is ensured through in-country legal frameworks, vetted recruitment partners, and alignment with labour, payroll, and immigration regulations applicable to each destination country.",
  },
] as const;

export function RecruitmentAndContractorsPage() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  return (
    <main className="service-page service-recruitment-and-contractors flex min-w-0 max-w-full flex-col overflow-x-hidden md:overflow-x-visible">
      <section className="bg-background">
        <Container className="pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_620px] lg:items-center lg:gap-0">
            <div className="min-w-0 pl-[40px] max-md:pl-0">
              <h1 className="align-middle font-['Darker_Grotesque'] text-[44px] font-bold leading-[110%] tracking-[0] [leading-trim:none] text-[#2899E6] sm:text-[60px] lg:text-[80px] max-md:text-[28px] max-md:leading-[1.3]">
                Recruitment and Contractors
              </h1>
              <p className="mt-6 w-full max-w-[980px] align-middle font-['Plus_Jakarta_Sans'] text-[24px] font-normal leading-[150%] tracking-[0] [leading-trim:none] text-[#0B1F2DCC] max-md:text-[15px] max-md:leading-[1.5]">
                Emgeo Global enables organizations to recruit and deploy
                permanent employees and specialized contractors across global
                markets with speed and full regulatory compliance. We simplify
                cross-border hiring through compliant engagement models
                eliminating the need for local entity setup
              </p>
            </div>

            <div className="relative flex w-full min-w-0 justify-center lg:-mt-[30px] lg:justify-end">
              <div className="relative aspect-[1182/714] w-full max-w-[620px] overflow-hidden rounded-[24px] bg-white lg:aspect-auto lg:h-[380px] lg:w-[620px]">
                <Image
                  src={HERO_IMAGE}
                  alt="Recruitment and contractors service"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 1024px) 620px, 100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="pb-8 pt-0 sm:pb-10">
          <h2 className="text-center align-middle font-['Darker_Grotesque'] text-[40px] font-bold leading-[110%] tracking-[0] [leading-trim:none] text-[#0B1F2D] sm:text-[52px] lg:text-[64px] max-md:text-[28px] max-md:leading-[1.3]">
            <span className="text-[#0B1F2D]">How this </span>
            <span className="text-[#2899E6]">Works</span>
          </h2>
          <HowItWorksAccordion
            steps={timelineSteps.map((s) => ({
              title: s.title,
              description: s.description,
            }))}
          />
        </Container>
      </section>

      <ServiceHelpsYouSection
        id="recruitment-helps-heading"
        className="-mt-[50px] max-md:mt-0"
        cards={helpsCards}
      />

      <section className="bg-background">
        <Container className="-mt-[180px] pt-0 pb-14 sm:-mt-[160px] sm:pb-18 lg:-mt-[180px] max-md:mt-0">
          <div className="mx-auto w-full max-w-[1280px]">
            <FaqSectionTitle />

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
        </Container>
      </section>

      <ConnectWithUsSection />
    </main>
  );
}

