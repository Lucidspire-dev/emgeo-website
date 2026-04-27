"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { ConnectWithUsSection } from "./ConnectWithUsForm";
import { EmployerOfRecordHelpsYouSection } from "./EmployerOfRecordHelpsYouSection";
import { FaqSectionTitle } from "./FaqSectionTitle";

const howItWorksSteps = [
  {
    title: "Country Feasibility and Compliance Assessment",
    description:
      "Emgeo Global evaluates the target country's labour laws, employment regulations, quota restrictions, payroll thresholds, and immigration requirements to confirm the legal feasibility of deploying employees under the EoR model and identify any country-specific constraints or obligations.",
  },
  {
    title: "Employment Structure and Contract Issuance",
    description:
      "Once feasibility is confirmed, Emgeo drafts and issues locally compliant employment contracts that meet statutory requirements, define employment terms, and align with both local regulations and the client's commercial objectives.",
  },
  {
    title: "Immigration, Payroll, and Statutory Setup",
    description:
      "Emgeo manages the necessary visa and work permit applications, sets up local payroll, and ensures all statutory registrations and social security obligations are met in the host country.",
  },
  {
    title: "In-Country Compliance and Ongoing Administration",
    description:
      "Throughout the assignment, Emgeo manages payroll processing, statutory filings, renewals, quota management (where applicable), and monitors regulatory changes to ensure continuous compliance with local labour and employment laws.",
  },
  {
    title: "Employment Lifecycle and Exit Management",
    description:
      "At the conclusion of the assignment, Emgeo manages contract closures, employee exits, final settlements, and statutory clearances, ensuring both the employee and client exit the engagement in full legal standing.",
  },
] as const;

const faqs = [
  {
    q: "Is the Employer of Record model legally acceptable across all countries?",
    a: "The EoR model is legally accepted in countries that permit this form of employment. In regions such as the Middle East, it is permissible provided quota requirements, work permits, and payroll compliance criteria are fully met in accordance with local regulations.",
  },
  {
    q: "Who controls the employee's daily work and performance under the EoR model?",
    a: "The client retains complete operational and managerial control over employee responsibilities, deliverables, and performance. Emgeo Global's role is limited to legal employment, payroll, and compliance administration.",
  },
  {
    q: "Can EoR be used for long-term or multi-year assignments?",
    a: "Yes. The EoR model supports short-term deployments and long-term engagements, including multi-year projects, subject to local labour and immigration laws.",
  },
  {
    q: "Are employees disadvantaged when employed under an EoR arrangement?",
    a: "No. Employees are legally employed, paid in compliance with local laws, and receive statutory benefits. Clear communication of the deputation structure ensures transparency and employee confidence.",
  },
  {
    q: "Can employees transition to a client's local entity in the future?",
    a: "Yes. If and when the client establishes a local entity, employees can be transitioned subject to local employment laws and required regulatory approvals.",
  },
] as const;

export function EmployerOfRecordPage() {
  const [activeHowIndex, setActiveHowIndex] = useState(0);
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);
  const howAccordionItemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pointerInsideHowWorksRef = useRef(false);

  const syncHowAccordionFromScroll = useCallback(() => {
    if (pointerInsideHowWorksRef.current) return;

    for (let i = 0; i < howAccordionItemsRef.current.length; i += 1) {
      const item = howAccordionItemsRef.current[i];
      if (!item) continue;

      const rect = item.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight * 0.5 && rect.bottom > windowHeight * 0.2) {
        setActiveHowIndex(i);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", syncHowAccordionFromScroll, { passive: true });
    syncHowAccordionFromScroll();

    return () => {
      window.removeEventListener("scroll", syncHowAccordionFromScroll);
    };
  }, [syncHowAccordionFromScroll]);

  return (
    <main className="service-page service-employer-of-record flex min-w-0 max-w-full flex-col overflow-x-hidden md:overflow-x-visible">
      <section className="bg-background">
        <Container className="pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_500px] lg:items-center lg:gap-0">
            <div className="min-w-0 pl-[40px] max-md:pl-0">
              <h1 className="align-middle font-['Darker_Grotesque'] text-[44px] font-bold leading-[110%] tracking-[0] [leading-trim:none] text-[#2899E6] sm:text-[60px] lg:text-[80px] max-md:text-[28px] max-md:leading-[1.3]">
                Employer of Record (EOR)
              </h1>
              <p className="mt-6 w-full max-w-[720px] align-middle font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-[150%] tracking-[0] [leading-trim:none] text-[#0B1F2DCC] sm:text-[24px] max-md:text-[15px] max-md:leading-[1.5]">
                Our EOR services enable compliant global hiring and talent
                deployment without entity setup, registrations, or compliance
                risk allowing businesses to enter new markets, and scale
                operations.
              </p>
            </div>
            <div className="relative flex w-full min-w-0 justify-center lg:justify-end">
              <div className="relative aspect-[683/371] w-full max-w-[500px] overflow-hidden rounded-[24px] bg-white lg:aspect-auto lg:h-[272px] lg:w-[500px]">
                <img
                  src="https://emgeo.lucidspire.com/wp-content/uploads/2026/02/h3.png"
                  alt="Employer of Record service"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="pb-4 pt-0 sm:pb-6 lg:pb-8">
          <h2 className="text-center align-middle font-['Darker_Grotesque'] text-[40px] font-bold leading-[110%] tracking-[0] [leading-trim:none] sm:text-[52px] lg:text-[64px] max-md:text-[28px] max-md:leading-[1.3]">
            <span className="text-[#0B1F2D]">How this </span>
            <span className="text-[#2899E6]">Works</span>
          </h2>

          <div
            id="how-works"
            className="scroll-accordion mt-5 flex flex-col gap-6 sm:mt-6 md:gap-0 lg:mt-8"
            onMouseEnter={() => {
              pointerInsideHowWorksRef.current = true;
            }}
            onMouseLeave={() => {
              pointerInsideHowWorksRef.current = false;
              syncHowAccordionFromScroll();
            }}
          >
            {howItWorksSteps.map((step, idx) => (
              <div
                key={step.title}
                ref={(el) => {
                  howAccordionItemsRef.current[idx] = el;
                }}
                className={`elementor-accordion-item ${
                  idx === activeHowIndex ? "elementor-active" : ""
                }`}
                onMouseEnter={() => setActiveHowIndex(idx)}
              >
                <button
                  type="button"
                  className="elementor-tab-title w-full text-left"
                  onClick={() => setActiveHowIndex(idx)}
                >
                  <h3 className="align-middle font-['Darker_Grotesque'] text-[36px] font-bold leading-[110%] tracking-[0] [leading-trim:none] sm:text-[42px] lg:text-[48px] max-md:text-[22px] max-md:leading-[1.35]">
                    {step.title}
                  </h3>
                </button>
                <div
                  className={
                    idx === activeHowIndex
                      ? "elementor-tab-content"
                      : "elementor-tab-content md:hidden"
                  }
                >
                  <p className="align-middle font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-[150%] tracking-[0] [leading-trim:none] text-[#0B1F2DCC] sm:text-[24px] max-md:text-[15px] max-md:leading-[1.5]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <EmployerOfRecordHelpsYouSection />

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

