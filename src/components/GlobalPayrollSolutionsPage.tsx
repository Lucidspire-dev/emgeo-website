"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "./Container";
import { ConnectWithUsSection } from "./ConnectWithUsForm";
import { GlobalPayrollHelpsYouSection } from "./GlobalPayrollHelpsYouSection";
import { FaqSectionTitle } from "./FaqSectionTitle";
import { HowItWorksAccordion } from "./HowItWorksAccordion";

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
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);

  return (
    <main className="service-page service-global-payroll flex min-w-0 max-w-full flex-col overflow-x-hidden md:overflow-x-visible">
      <section className="bg-background">
        <Container className="pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_560px] lg:items-center lg:gap-0">
            <div className="min-w-0 pl-[40px] max-md:pl-0">
              <h1 className="align-middle font-['Darker_Grotesque'] text-[44px] font-bold leading-[110%] tracking-[0] [leading-trim:none] text-[#2899E6] sm:text-[60px] lg:text-[80px] max-md:text-[28px] max-md:leading-[1.3]">
                Global Payroll Services
              </h1>
              <p className="mt-6 w-full max-w-[720px] align-middle font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-[150%] tracking-[0] [leading-trim:none] text-[#0B1F2DCC] sm:text-[24px] max-md:text-[15px] max-md:leading-[1.5]">
                Emgeo Global delivers structured global payroll services that
                ensure employees are paid accurately and on time, while
                safeguarding organisations from compliance risks across
                international jurisdictions.
              </p>
            </div>
            <div className="relative flex w-full min-w-0 justify-center lg:justify-end">
              <div className="relative aspect-[683/371] w-full max-w-[560px] overflow-hidden rounded-[24px] bg-white lg:aspect-auto lg:h-[360px] lg:w-[560px]">
                <Image
                  src="/images/service-hero-3.png"
                  alt="Professionals collaborating on global payroll services"
                  width={560}
                  height={360}
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="h-full w-full object-cover object-[50%_45%]"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="pb-4 pt-2 sm:pb-6 lg:pt-4">
          <h2 className="text-center align-middle font-['Darker_Grotesque'] text-[36px] font-bold leading-[110%] tracking-[0] text-[#0B1F2D] sm:text-[48px] lg:text-[64px] max-md:text-[28px] max-md:leading-[1.3]">
            <span className="text-[#0B1F2D]">How this </span>
            <span className="text-[#2899E6]">Works</span>
          </h2>
          <HowItWorksAccordion
            steps={processSteps.map((s) => ({
              title: s.title,
              description: s.description,
            }))}
          />
        </Container>
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

