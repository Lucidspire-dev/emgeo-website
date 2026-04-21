"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { ConnectWithUsSection } from "./ConnectWithUsForm";
import { GlobalPayrollHelpsYouSection } from "./GlobalPayrollHelpsYouSection";
import { FaqSectionTitle } from "./FaqSectionTitle";

const processSteps = [
  {
    key: 1,
    cardClass: "card-1",
    title: "Country-Specific Payroll Assessment",
    description:
      "Emgeo Global assesses host-country payroll regulations—covering wages, taxes, social security, benefits, and employer liabilities—to ensure compliance, feasibility, and risk mitigation before onboarding.",
  },
  {
    key: 2,
    cardClass: "card-2",
    title: "Salary Structuring and Compliance Alignment",
    description:
      "Compensation structures are designed to align with local labour laws while maintaining consistency with the client's internal remuneration framework. This includes structuring fixed pay, allowances, statutory benefits, and taxable components in accordance with country-specific regulations.",
  },
  {
    key: 3,
    cardClass: "card-3",
    title: "Payroll Setup and Employee Onboarding",
    description:
      "Employees are onboarded into compliant payroll systems with verified documentation, correct employment classification, and statutory registrations. This step establishes a legally compliant payroll foundation and ensures accurate employee records from the start of employment.",
  },
  {
    key: 4,
    cardClass: "card-4",
    title: "Monthly Payroll Processing and Disbursement",
    description:
      "Emgeo Global manages monthly payroll processing, including salary computation, deductions, reimbursements, overtime, and bonuses. Payroll is processed within statutory timelines to ensure accurate and timely salary disbursement in the local currency.",
  },
  {
    key: 5,
    cardClass: "card-5",
    title: "Statutory Filings, Reporting, and Audit Support",
    description:
      "All mandatory tax filings, social security payments, and regulatory submissions are completed as per local requirements. Detailed payroll reports and compliant payslips are issued, ensuring audit readiness and support for immigration, financial, and statutory reviews.",
  },
] as const;

const faqs = [
  {
    q: "Can Emgeo Global manage payroll without the client having a local legal entity?",
    a: "Yes. Payroll can be administered through Emgeo Global's Employer of Record (EoR) framework, allowing compliant salary processing without the client establishing a local entity in the host country.",
  },
  {
    q: "Are statutory employer contributions included in the payroll service?",
    a: "Yes. All mandatory employer contributions, including social security, pensions, insurance, and other statutory payments, are calculated and remitted as per local regulations.",
  },
  {
    q: "Is payroll processed in local currency?",
    a: "Yes. Payroll is processed in the legally mandated local currency, ensuring compliance with local labour and tax laws and avoiding foreign exchange or regulatory issues.",
  },
  {
    q: "Can payroll be managed for short-term or project-based assignments?",
    a: "Yes. Payroll support is available for short-term and project-based engagements, subject to local labour laws and statutory employment requirements.",
  },
  {
    q: "How does Emgeo Global ensure payroll data security?",
    a: "Payroll data is handled under strict confidentiality protocols, supported by secure systems and ISO-aligned data protection and information security practices.",
  },
] as const;

export function GlobalPayrollSolutionsPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const scrollBoxRef = useRef<HTMLDivElement | null>(null);
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const scrollBoxEl = scrollBoxRef.current;
    if (!sectionEl || !scrollBoxEl) return;

    let isActive = false;
    let reachedEnd = false;
    let reachedStart = false;

    const checkPosition = () => {
      const rect = sectionEl.getBoundingClientRect();
      isActive = rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.6;
      if (!isActive) {
        reachedEnd = false;
        reachedStart = false;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth <= 768) return;

      const rect = sectionEl.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const width = rect.width;
      if (width <= 0) return;

      const scrollAmount = scrollBoxEl.scrollWidth - width;
      if (scrollAmount <= 0) return;

      const move = (mouseX / width) * scrollAmount;
      scrollBoxEl.scrollLeft = move;
    };

    const onWheel = (e: WheelEvent) => {
      if (window.innerWidth <= 768) return;
      if (!isActive) return;

      const maxScroll = scrollBoxEl.scrollWidth - scrollBoxEl.clientWidth;
      if (maxScroll <= 0) return;

      // SCROLL RIGHT
      if (e.deltaY > 0) {
        if (scrollBoxEl.scrollLeft < maxScroll) {
          e.preventDefault();
          scrollBoxEl.scrollLeft += 220;
          reachedEnd = false;
        } else if (!reachedEnd) {
          e.preventDefault();
          reachedEnd = true;
        }
      }

      // SCROLL LEFT
      if (e.deltaY < 0) {
        if (scrollBoxEl.scrollLeft > 0) {
          e.preventDefault();
          scrollBoxEl.scrollLeft -= 220;
          reachedStart = false;
        } else if (!reachedStart) {
          e.preventDefault();
          reachedStart = true;
        }
      }
    };

    // Initial
    checkPosition();

    window.addEventListener("scroll", checkPosition);
    window.addEventListener("wheel", onWheel, { passive: false });
    sectionEl.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("wheel", onWheel as EventListener);
      sectionEl.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <main className="service-page service-global-payroll flex min-w-0 max-w-full flex-col overflow-x-hidden md:overflow-x-visible">
      <section className="bg-background">
        <div className="mx-auto w-full max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 lg:px-[80px] lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_500px] lg:items-center lg:gap-0">
            <div className="relative z-10 min-w-0 pl-[40px] lg:overflow-x-auto max-md:pl-0">
              <h1 className="w-max max-w-none font-['Darker_Grotesque'] text-[40px] font-bold leading-[110%] tracking-[0] text-[#2899E6] sm:text-[48px] md:text-[56px] lg:text-[80px] lg:whitespace-nowrap max-md:w-full max-md:max-w-full max-md:text-[28px] max-md:leading-[1.3] max-md:whitespace-normal">
                Global Payroll Services
              </h1>
              <p className="mt-6 w-full max-w-[542px] font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-[150%] tracking-[0] text-[#0B1F2DCC] sm:text-[20px] lg:text-[24px] max-md:text-[15px] max-md:leading-[1.5]">
                Emgeo Global delivers structured global payroll services that
                ensure employees are paid accurately and on time, while
                safeguarding organisations from compliance risks across
                international jurisdictions.
              </p>
            </div>
            <div className="relative z-0 flex w-full min-w-0 justify-center lg:-translate-x-[144px] lg:justify-end">
              <div className="relative aspect-[683/371] w-full max-w-[500px] overflow-hidden rounded-[24px] bg-white lg:aspect-auto lg:h-[272px] lg:w-[500px] lg:shrink-0">
                <Image
                  src="/images/global-payroll-hero.png"
                  alt="Professionals collaborating on global payroll services"
                  width={500}
                  height={272}
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="h-full w-full object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <Container className="pb-4 pt-2 sm:pb-6 lg:pt-4">
          <h2 className="text-center align-middle font-['Darker_Grotesque'] text-[36px] font-bold leading-[110%] tracking-[0] text-[#0B1F2D] sm:text-[48px] lg:text-[64px] max-md:text-[28px] max-md:leading-[1.3]">
            How this works
          </h2>
        </Container>
        <div className="w-full">
          <div className="process-wrapper" ref={sectionRef}>
            <div className="horizontal-process-wrapper" ref={scrollBoxRef}>
              <div className="process-row">
                {processSteps.map((s) => (
                  <div key={s.key} className={`process-item ${s.cardClass}`}>
                    <div className="process-number">
                      <span>{s.key}</span>
                    </div>
                    <div className="process-card">
                      <h2>{s.title}</h2>
                      <p>{s.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <GlobalPayrollHelpsYouSection />

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

