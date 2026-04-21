"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import type { CSSProperties } from "react";

type Testimonial = {
  text: string;
  name: string;
  role: string;
  bg: string;
  accent: string;
};

export function TestimonialsCarousel() {
  const rowRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonials = useMemo(
    () =>
      [
        {
          text: "Our Skilled Workers Visa deputations to the UK were excellently managed by Emgeo. Their proactive approach, responsiveness, and accurate guidance helped us meet urgent requirements on time. The team&apos;s consistent support and reliability have been noteworthy and instrumental in enabling us to manage global deputations.",
          name: "Swapnil Deshpande",
          role: "Head - Global Mobility, Tredence",
          bg: "#E0FDFF",
          accent: "#009395",
        },
        {
          text: "EMGEO Global has been supporting us on strategic mobility solutions including EOR for a long time now. The team is always ready to share country specific immigration requirements and processes on work permits and visa options. Their commitment and responsiveness is the differentiator.",
          name: "S. Ravi Shankar",
          role: "Associate Vice President, Birlasoft Limited",
          bg: "#DDF1FF",
          accent: "#195885",
        },
        {
          text: "Emgeo Global has been a trusted partner for our international deputations. Their timely guidance and deep expertise have supported our expansion across multiple geographies. Their commitment and insight continue to play a key role in ensuring our global mobility programs remain smooth and successful.",
          name: "Sunita Bedrekar",
          role: "Associate Director - Global Mobility, Prodapt",
          bg: "#E0DCFF",
          accent: "#3325A1",
        },
        {
          text: "Whenever deputations are required, we rely on Emgeo Global. Their team always provides accurate timelines, clear guidance, and well-defined processes. This reliability, combined with their structured systems, has consistently made our global deputations efficient. We are extremely satisfied with their ongoing support and partnership.",
          name: "Prasad Manjrekar",
          role: "Sr. Manager - Travel, Percivon",
          bg: "#FFF3DB",
          accent: "#B08330",
        },
        {
          text: "For our expansion needs and compliance requirements, we consistently rely on Emgeo Global. Their timely advice and accurate strategies have greatly supported our global deputations. We truly value their immigration support and are delighted to continue partnering with such a reliable team.",
          name: "Nehal Shah",
          role: "Wholetime Director, Allied Digital Services Limited",
          bg: "#F5E3FD",
          accent: "#A134D9",
        },
      ] as Testimonial[],
    [],
  );

  const getScrollAmount = () => {
    const row = rowRef.current;
    if (!row) return 940;

    const firstCard = row.querySelector<HTMLElement>(".testimonial-slide-card");
    if (!firstCard) return 940;

    const gapStr = window.getComputedStyle(row).gap || "0px";
    const gap = Number.parseFloat(gapStr.replace("px", "")) || 0;
    return firstCard.getBoundingClientRect().width + gap;
  };

  const updateScrollState = () => {
    const row = rowRef.current;
    if (!row) return;

    const eps = 2;
    setCanScrollLeft(row.scrollLeft > eps);
    setCanScrollRight(row.scrollLeft + row.clientWidth < row.scrollWidth - eps);
  };

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    updateScrollState();

    const onScroll = () => updateScrollState();
    row.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      row.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const scrollByCards = (dir: -1 | 1) => {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: dir * getScrollAmount(), behavior: "smooth" });
  };

  return (
    <div className="testimonial-wrapper mx-auto mt-8 w-full max-w-full min-w-0 overflow-x-hidden px-0 sm:mt-10 md:px-4 lg:px-10">
      <button
        type="button"
        aria-label="Previous testimonials"
        onClick={() => scrollByCards(-1)}
        disabled={!canScrollLeft}
        className="absolute left-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#163E5A]/18 bg-white text-[#0F3D5C] shadow-[0_4px_14px_rgba(15,61,92,0.12)] transition-all duration-200 hover:border-[#163E5A]/35 hover:bg-[#F8FAFC] hover:shadow-[0_6px_20px_rgba(15,61,92,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F3D5C]/25 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-35 md:flex"
      >
        <svg
          viewBox="0 0 24 24"
          className="block h-6 w-6 shrink-0"
          fill="none"
          aria-hidden
        >
          <path
            d="M16 6 9 12l7 6"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next testimonials"
        onClick={() => scrollByCards(1)}
        disabled={!canScrollRight}
        className="absolute right-0 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#163E5A]/18 bg-white text-[#0F3D5C] shadow-[0_4px_14px_rgba(15,61,92,0.12)] transition-all duration-200 hover:border-[#163E5A]/35 hover:bg-[#F8FAFC] hover:shadow-[0_6px_20px_rgba(15,61,92,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F3D5C]/25 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-35 md:flex"
      >
        <svg
          viewBox="0 0 24 24"
          className="block h-6 w-6 shrink-0"
          fill="none"
          aria-hidden
        >
          <path
            d="M8 6 15 12l-7 6"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div ref={rowRef} className="testimonial-row" role="list">
        {testimonials.map((t) => (
          <div
            key={t.name}
            role="listitem"
            className="testimonial-slide-card relative flex flex-col items-center gap-8 overflow-hidden rounded-[16px] px-4 pb-0 pt-10 text-center sm:gap-10 sm:px-8 sm:pt-14 md:gap-12 lg:min-h-[282px] lg:gap-[54px] lg:px-[48px] lg:pb-0 lg:pt-[80px]"
            style={
              {
                backgroundColor: t.bg,
                "--testimonial-author-color": t.accent,
              } as CSSProperties
            }
          >
            <Image
              src="/images/testimonial-watermark.png"
              alt=""
              width={280}
              height={280}
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-auto w-[min(55%,280px)] max-w-[280px] -translate-x-1/2 -translate-y-1/2 object-contain opacity-[0.18] select-none"
              aria-hidden
            />

            <div
              className="testimonial-quote-mask testimonial-quote-icon pointer-events-none absolute left-4 top-2 z-[1] overflow-hidden translate-y-0 md:left-6 md:top-4 md:z-10 md:translate-y-[25px]"
              style={{ backgroundColor: t.accent }}
              aria-hidden
            />

            <div className="relative z-10 mx-auto w-full min-w-0 max-w-[844px] px-1 pt-1 max-md:pt-2 md:pt-0">
              <p className="text-center font-['Plus_Jakarta_Sans'] text-[16px] font-medium leading-[155%] tracking-[0] text-[#163E5A] sm:text-[17px] md:text-[18px] lg:text-[20px] lg:leading-[160%]">
                {t.text}
              </p>
              <div
                className="testimonial-quote-mask testimonial-quote-mask--flip testimonial-quote-icon pointer-events-none mt-5 ml-auto max-w-[39px] overflow-hidden sm:mt-6"
                style={{ backgroundColor: t.accent }}
                aria-hidden
              />
            </div>

            <div className="testimonial-name-card relative z-10 mt-[2px] mx-auto w-full max-w-[520px] bg-white px-6 py-4 shadow-[0_8px_24px_rgba(15,61,92,0.08)]">
              <div
                className="text-center align-middle font-['Darker_Grotesque'] text-[20px] font-extrabold leading-[100%] tracking-[0]"
                style={{ color: t.accent }}
              >
                {t.name}
              </div>
              <div className="mt-2 text-center align-middle font-['Plus_Jakarta_Sans'] text-[14px] font-semibold leading-[150%] tracking-[0] text-[#808080]">
                {t.role}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

