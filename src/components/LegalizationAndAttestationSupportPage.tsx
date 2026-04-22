"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { ConnectWithUsSection } from "./ConnectWithUsForm";
import { FaqSectionTitle } from "./FaqSectionTitle";

const HERO_IMAGE = "https://emgeo.lucidspire.com/wp-content/uploads/2026/02/h3.png";

const processSteps = [
  {
    title: "Document Assessment",
    description:
      "Each destination country follows a distinct legalization framework. Emgeo reviews your documents and maps them against the destination country's specific requirements, identifying whether apostille, attestation, legalization, or certified translation is mandatory before immigration filing.",
  },
  {
    title: "Home-Country Authentication",
    description:
      "We coordinate initial verification through authorized notaries, state departments, and the Ministry of External Affairs (or equivalent authority), ensuring documents are officially authenticated at the source and meet foundational compliance standards.",
  },
  {
    title: "Embassy or Consular Legalization",
    description:
      "For non-Hague countries, we manage embassy or consular legalization, obtaining the final governmental seal required to validate documents for foreign immigration, employment, and residency processes.",
  },
  {
    title: "Certified & Notarized Translation",
    description:
      "Where required, documents are translated into the destination country's official language. Emgeo provides certified and notarized translations, ensuring technical, legal, and academic terminology remains accurate and compliant.",
  },
  {
    title: "Final Verification & Secure Delivery",
    description:
      "Before handover, all documents undergo a final compliance review to confirm accuracy, validity, and completeness. Originals and legalized copies are securely returned, ready for immediate submission to immigration or regulatory authorities.",
  },
] as const;

const helpsCards = [
  {
    title: "Eliminates Immigration Delays",
    description:
      "Properly legalized documents prevent application rejections, resubmissions, and costly deployment delays that can impact project timelines and business commitments.",
  },
  {
    title: "Reduces Compliance Risk",
    description:
      "Every document is processed in line with destination-country laws, ensuring full regulatory compliance and protecting organizations from legal and reputational exposure.",
  },
  {
    title: "Saves Internal Time & Resources",
    description:
      "Clients avoid navigating complex government departments, embassies, and third-party agents, allowing internal teams to focus on core business priorities.",
  },
  {
    title: "Ensures End-to-End Accountability",
    description:
      "With a single point of responsibility, clients gain clarity, traceability, and confidence throughout the documentation lifecycle.",
  },
  {
    title: "Supports Faster Global Deployment",
    description:
      "Accurate documentation enables quicker visa approvals and smoother onboarding of international employees and assignees.",
  },
] as const;

const faqs = [
  {
    q: "Is legalization and attestation mandatory for all countries?",
    a: "No. Requirements depend on the destination country. Hague Convention countries typically require apostille, while non-Hague countries mandate multi-level attestation and embassy legalization. Emgeo advises the correct pathway based on destination regulations.",
  },
  {
    q: "Can clients manage legalization independently?",
    a: "Yes, clients may self-manage the process. However, errors, incorrect sequencing, or missing attestations can result in rejection. Emgeo assumes full accountability only when the process is managed end-to-end by us.",
  },
  {
    q: "What is the difference between apostille and attestation?",
    a: "Apostille is a single-step certification for Hague Convention countries. Attestation involves multiple verifications for non-Hague countries, culminating in embassy or consular legalization.",
  },
  {
    q: "Are original documents safe during the process?",
    a: "Yes. Emgeo follows strict handling protocols to ensure original documents are tracked, secured, and returned without damage or loss.",
  },
  {
    q: "Are costs transparent?",
    a: "Yes. All government fees, translation costs, and service charges are communicated upfront, ensuring complete transparency with no hidden expenses.",
  },
] as const;

export function LegalizationAndAttestationSupportPage() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0);
  const processRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrapper = processRef.current;
    if (!wrapper) return;

    let isActive = false;
    let reachedEnd = false;
    const getProcessStep = () => {
      const card = wrapper.querySelector<HTMLElement>(".legal-process-item");
      if (!card) return 220;
      const row = wrapper.querySelector<HTMLElement>(".legal-process-row");
      const gapStr = row ? window.getComputedStyle(row).gap : "0px";
      const gap = Number.parseFloat(gapStr || "0") || 0;
      return card.getBoundingClientRect().width + gap;
    };

    const checkPosition = () => {
      const rect = wrapper.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.6) {
        isActive = true;
      } else {
        isActive = false;
        reachedEnd = false;
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (window.innerWidth <= 1024) return;
      if (!isActive) return;
      if (e.deltaY <= 0) return; // lock horizontal only while scrolling down

      const maxScroll = wrapper.scrollWidth - wrapper.clientWidth;
      if (wrapper.scrollLeft < maxScroll) {
        e.preventDefault();
        const step = getProcessStep();
        const current = wrapper.scrollLeft;
        const next = Math.ceil((current + 1) / step) * step;
        wrapper.scrollLeft = Math.min(maxScroll, next);
        reachedEnd = false;
      } else if (!reachedEnd) {
        e.preventDefault();
        reachedEnd = true;
      } else {
        isActive = false;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth <= 768) return;
      const rect = wrapper.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const width = rect.width;
      const scrollAmount = wrapper.scrollWidth - width;
      const move = Math.pow(mouseX / width, 1.2) * scrollAmount;
      wrapper.scrollLeft = move;
    };

    window.addEventListener("scroll", checkPosition, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });
    wrapper.addEventListener("mousemove", onMouseMove);
    checkPosition();
    return () => {
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("wheel", onWheel);
      wrapper.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const section = cardsRef.current;
    if (!section) return;
    const cards = Array.from(section.querySelectorAll<HTMLElement>(".legal-card"));
    if (!cards.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.2 });
    cards.forEach((card) => observer.observe(card));

    let isActive = false;
    let reachedEnd = false;
    const getHelpsStep = () => {
      const card = section.querySelector<HTMLElement>(".legal-card");
      if (!card) return 220;
      const row = section.querySelector<HTMLElement>(".legal-cards-wrapper");
      const gapStr = row ? window.getComputedStyle(row).gap : "0px";
      const gap = Number.parseFloat(gapStr || "0") || 0;
      return card.getBoundingClientRect().width + gap;
    };

    const checkPosition = () => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.6) {
        isActive = true;
      } else {
        isActive = false;
        reachedEnd = false;
      }
    };

    const onWheel = (e: WheelEvent) => {
      if (window.innerWidth <= 768) return;
      if (!isActive) return;
      if (e.deltaY <= 0) return; // lock only while scrolling down

      const maxScroll = section.scrollWidth - section.clientWidth;
      if (maxScroll <= 0) return;

      if (section.scrollLeft < maxScroll) {
        e.preventDefault();
        const step = getHelpsStep();
        const current = section.scrollLeft;
        const next = Math.ceil((current + 1) / step) * step;
        section.scrollLeft = Math.min(maxScroll, next);
        reachedEnd = false;
      } else if (!reachedEnd) {
        e.preventDefault();
        reachedEnd = true;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      if (window.innerWidth <= 768) return;

      const rect = section.getBoundingClientRect();
      const width = rect.width;
      if (width <= 0) return;

      const maxScroll = section.scrollWidth - section.clientWidth;
      if (maxScroll <= 0) return;

      const x = (e.clientX - rect.left) / width;
      const clamped = Math.min(1, Math.max(0, x));
      section.scrollLeft = clamped * maxScroll;
    };

    window.addEventListener("scroll", checkPosition, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });
    section.addEventListener("mousemove", onMouseMove);
    checkPosition();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkPosition);
      window.removeEventListener("wheel", onWheel);
      section.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <main className="service-page service-legalization-and-attestation-support flex min-w-0 max-w-full flex-col overflow-x-hidden md:overflow-x-visible">
      <section className="bg-background">
        <Container className="pt-12 pb-6 sm:pt-16 sm:pb-8 lg:pt-20 lg:pb-6">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_500px] lg:items-center lg:gap-0">
            <div className="min-w-0 pl-[40px] max-md:pl-0">
              <h1 className="align-middle font-['Darker_Grotesque'] text-[44px] font-bold leading-[110%] tracking-[0] [leading-trim:none] text-[#2899E6] sm:text-[60px] lg:text-[80px] max-md:text-[28px] max-md:leading-[1.3]">
                Legalization and Attestation Services
              </h1>
              <p className="mt-6 w-full max-w-[720px] align-middle font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-[150%] tracking-[0] [leading-trim:none] text-[#0B1F2DCC] sm:text-[24px] max-md:text-[15px] max-md:leading-[1.5]">
                Emgeo Global manages the complete documentation lifecycle,
                including apostille, multi-level attestation, embassy or
                consular legalization, and certified translations.
              </p>
            </div>
            <div className="relative flex w-full min-w-0 justify-center lg:justify-end">
              <div className="relative aspect-[1366/742] w-full max-w-[500px] overflow-hidden rounded-[24px] bg-white lg:aspect-auto lg:h-[272px] lg:w-[500px]">
                <img
                  src={HERO_IMAGE}
                  alt="Legalization and attestation service"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <div className="mx-auto w-full px-4 pb-8 pt-0 sm:px-6 sm:pb-10 lg:px-8">
          <h2 className="text-center align-middle font-['Darker_Grotesque'] text-[40px] font-bold leading-[110%] tracking-[0] [leading-trim:none] sm:text-[52px] lg:text-[64px] max-md:text-[28px] max-md:leading-[1.3]">
            <span className="text-[#0B1F2D]">How this </span>
            <span className="text-[#2899E6]">works</span>
          </h2>

          <div ref={processRef} className="legal-process-wrapper mt-2">
            <div className="legal-process-row">
              {processSteps.map((step, idx) => (
                <div key={step.title} className={`legal-process-item legal-card-${idx + 1}`}>
                  <div className="legal-process-number"><span>{idx + 1}</span></div>
                  <div className="legal-process-card">
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
        aria-labelledby="legal-helps-heading"
      >
        <div className="mx-auto w-full px-4 pt-6 pb-8 sm:px-6 sm:pt-8 sm:pb-10 lg:px-8 lg:pt-10">
          <h2 id="legal-helps-heading" className="text-center align-middle font-['Darker_Grotesque'] text-[40px] font-bold leading-[110%] tracking-[0] [leading-trim:none] sm:text-[52px] lg:text-[64px] max-md:text-[28px] max-md:leading-[1.3]">
            <span className="text-[#0B1F2D]">How This Service </span>
            <span className="text-[#2899E6]">Helps You</span>
          </h2>
        </div>

        <div
          ref={cardsRef}
          className="legal-cards-section"
        >
          <div className="legal-cards-wrapper">
            {helpsCards.map((card) => (
              <article key={card.title} className="legal-card">
                <svg viewBox="0 0 500 410" aria-hidden>
                  <path d="M420 56C420 69.2548 430.745 80 444 80H476C489.255 80 500 90.7452 500 104V386C500 399.255 489.255 410 476 410H104C90.7452 410 80 399.255 80 386V357C80 343.745 69.2548 333 56 333H24C10.7452 333 0 322.255 0 309V24C0 10.7452 10.7452 0 24 0H396C409.255 0 420 10.7452 420 24V56Z" />
                </svg>
                <div className="legal-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto w-full px-4 pt-4 pb-14 sm:px-6 sm:pt-6 sm:pb-18 lg:px-8 lg:pt-8">
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
        </div>
      </section>

      <ConnectWithUsSection />
    </main>
  );
}

