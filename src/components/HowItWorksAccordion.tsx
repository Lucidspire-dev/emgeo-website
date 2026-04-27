"use client";

import { useState } from "react";

type HowItWorksStep = {
  title: string;
  description: string;
};

export function HowItWorksAccordion({
  steps,
  wrapperClassName = "mt-5 sm:mt-6 lg:mt-8",
}: {
  steps: readonly HowItWorksStep[];
  wrapperClassName?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      id="how-works"
      className={`scroll-accordion mx-auto w-full max-w-[1280px] flex flex-col gap-6 md:gap-0 ${wrapperClassName}`}
    >
      {steps.map((step, idx) => (
        <div
          key={step.title}
          className={`elementor-accordion-item ${
            idx === activeIndex ? "elementor-active" : ""
          }`}
          onMouseEnter={() => setActiveIndex(idx)}
        >
          <button
            type="button"
            className="elementor-tab-title w-full text-left"
            onClick={() => setActiveIndex(idx)}
          >
            <h3 className="align-middle font-['Darker_Grotesque'] text-[36px] font-bold leading-[110%] tracking-[0] [leading-trim:none] sm:text-[42px] lg:text-[48px] max-md:text-[22px] max-md:leading-[1.35]">
              {step.title}
            </h3>
          </button>
          <div
            className={
              idx === activeIndex
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
  );
}

