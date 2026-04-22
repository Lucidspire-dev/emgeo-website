"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type HeroSectionProps = {
  imageSrc?: string;
  imageAlt?: string;
};

export function HeroSection({
  imageSrc = "/images/hero-team-clean.png",
  imageAlt = "Team collaboration",
}: HeroSectionProps) {
  const slides = useMemo(
    () => [
      {
        imageSrc,
        imageAlt,
        headingLine1: { text: "Unlocking Talent Potential", color: "#2899E6" },
        headingLine2: { text: "Across 160 Countries", color: "#0F3D5C" },
        subtext:
          "Trusted partner for EOR, Hiring, Payroll, Compliance, Mobility services",
        buttonText: "Contact Us",
        topCard: {
          value: "250+",
          label: "employees onboarded",
          bg: "#F4E4FF",
          text: "#992AD2",
          width: "lg:w-[310px]",
          height: "lg:h-[122px]",
          left: "lg:left-[95px]",
          top: "lg:top-0",
          padding: "lg:px-6 lg:pb-6 lg:pt-2",
        },
        sideCard: {
          value: "100%",
          label: "record compliance",
          bg: "#F4E4FF",
          text: "#992AD2",
          width: "lg:w-[184px]",
          height: "lg:h-[153px]",
          top: "lg:top-[137px]",
        },
        badge: {
          text: "Employer of Record",
          color: "#8D3FC2",
          bg: "#F9EDFF",
          desktopPos: "lg:right-[350px] lg:top-[528px]",
        },
        icon: {
          src: "/images/hero-edge-icon.png",
          alt: "Employer icon",
          pos: "lg:left-[536px] lg:top-[128px]",
          size: 72,
        },
      },
      {
        imageSrc: "/images/hero-team-3.png",
        imageAlt: "Visa and permit support team",
        headingLine1: { text: "One partner", color: "#2899E6" },
        headingLine2: { text: "for end-to-end workforce solution", color: "#0F3D5C" },
        subtext:
          "Helping you hire, move, manage, and retain talent across the globe",
        buttonText: "Book a Demo",
        topCard: {
          value: "3,200+",
          label: "work permit processed",
          bg: "#FFF5E1",
          text: "#B08330",
          width: "lg:w-[361px]",
          height: "lg:h-[122px]",
          left: "lg:left-0",
          top: "lg:top-0",
          padding: "lg:p-6",
        },
        sideCard: {
          value: "97.5%",
          label: "first-time visa approval rate",
          bg: "#FFF5E1",
          text: "#B08330",
          width: "lg:w-[191px]",
          height: "lg:h-[184px]",
          top: "lg:top-[140px]",
        },
        badge: {
          text: "Visa & Permit Approval",
          color: "#B08330",
          bg: "#FFF5E1",
          desktopPos: "lg:left-[204px] lg:top-[528px]",
        },
        icon: {
          src: "/images/hero-visa-icon-orange.png",
          alt: "Visa icon",
          pos: "lg:left-[180px] lg:top-[140px]",
          size: 64,
        },
      },
    ],
    [],
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const goPrev = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="min-w-0 bg-background">
      <div className="mx-auto w-full min-w-0 max-w-7xl box-border px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="relative min-w-0 overflow-visible">
          {slides.map((slide, index) => (
            <div
              key={slide.headingLine1.text}
              className={`transition-opacity duration-500 ${
                currentSlide === index
                  ? "relative opacity-100"
                  : "pointer-events-none absolute inset-0 opacity-0"
              }`}
            >
              <div className="grid min-w-0 w-full max-w-full items-start gap-8 lg:grid-cols-[542px_617px] lg:gap-4 xl:gap-10">
                <div className="order-1 flex min-w-0 max-w-full flex-col pt-2 lg:h-[374px]">
                  <h1 className="min-w-0 max-w-full font-['Darker_Grotesque'] text-[36px] font-bold leading-[95%] tracking-[0] sm:text-[44px] md:text-[52px] lg:text-[72px] lg:leading-[85%]">
                    <span style={{ color: slide.headingLine1.color }}>
                      {slide.headingLine1.text}
                    </span>
                    <br />
                    <span style={{ color: slide.headingLine2.color }}>
                      {slide.headingLine2.text}
                    </span>
                  </h1>

                  <p className="mt-4 max-w-[520px] font-['Plus_Jakarta_Sans'] text-[16px] font-medium leading-[145%] tracking-[0] text-[#49718D] sm:text-[18px] md:text-[20px] lg:text-[28px] lg:leading-[140%]">
                    {slide.subtext}
                  </p>

                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className={`flex h-[44px] items-center justify-between gap-2 rounded-[28px] bg-[#0F3D5C] py-1 pl-6 pr-1 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b2f48] hover:shadow-lg ${
                        slide.buttonText === "Book a Demo"
                          ? "w-[170px]"
                          : "w-[150px]"
                      }`}
                    >
                      <span className="whitespace-nowrap font-['Darker_Grotesque'] text-[18px] leading-[130%] font-bold">
                        {slide.buttonText}
                      </span>
                      <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white">
                        <span
                          aria-hidden
                          className="text-[16px] font-semibold leading-none text-[#0F3D5C]"
                        >
                          →
                        </span>
                      </span>
                    </Link>
                  </div>

                  <div
                    className={`mt-3 flex items-center gap-3 lg:mt-auto lg:pt-3 ${
                      index === 1 ? "lg:translate-y-[60px]" : ""
                    }`}
                  >
                    <button
                      type="button"
                      onClick={goPrev}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-[#0F3D5C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/5 hover:shadow-md"
                      aria-label="Previous slide"
                    >
                      ‹
                    </button>
                    <div className="flex h-[14px] w-[78px] items-center text-[#0F3D5C]">
                      <span className="flex h-[14px] w-[8px] items-center justify-center font-['Plus_Jakarta_Sans'] text-[12px] leading-[120%] font-semibold">
                        {currentSlide + 1}
                      </span>
                      <div className="relative mx-[6px] h-0 w-[50px] border-t border-[#9BB9CE]">
                        <div
                          className="absolute top-1/2 h-[9px] w-[9px] -translate-y-1/2 rounded-full bg-[#0F3D5C] transition-all duration-500"
                          style={{
                            left:
                              slides.length > 1
                                ? `calc(${(currentSlide / (slides.length - 1)) * 100}% - 4.5px)`
                                : "0px",
                          }}
                        />
                      </div>
                      <span className="flex h-[14px] w-[8px] items-center justify-center font-['Plus_Jakarta_Sans'] text-[12px] leading-[120%] font-semibold">
                        {slides.length}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={goNext}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-[#0F3D5C] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black/5 hover:shadow-md"
                      aria-label="Next slide"
                    >
                      ›
                    </button>
                  </div>
                </div>

                <div className="order-2 relative min-w-0 w-full max-w-full overflow-x-hidden lg:w-[617px] lg:overflow-x-visible lg:h-[575px]">
                  <div className="relative mx-auto h-auto min-w-0 w-full max-w-[617px] overflow-x-hidden lg:h-[575px] lg:w-[617px] lg:overflow-x-visible">
                    {index === 0 ? (
                      <>
                        <div
                          className={`relative z-20 mb-3 ml-0 mr-auto flex h-auto w-full max-w-[min(100%,260px)] flex-col gap-3 rounded-[12px] p-4 shadow-[0_8px_20px_rgba(15,61,92,0.1)] lg:absolute lg:mb-0 lg:max-w-none ${slide.topCard.top} ${slide.topCard.left} ${slide.topCard.height} ${slide.topCard.width} lg:-translate-x-1/2 lg:translate-x-0`}
                          style={{ backgroundColor: slide.topCard.bg }}
                        >
                          <div
                            className="font-['Darker_Grotesque'] text-[40px] font-extrabold leading-[130%] tracking-[0] sm:text-[48px] lg:text-[56px]"
                            style={{ color: slide.topCard.text }}
                          >
                            {slide.topCard.value}
                          </div>
                          <div
                            className="mt-[-8px] font-['Plus_Jakarta_Sans'] text-[17px] font-normal leading-[130%] tracking-[0] sm:text-[20px] lg:mt-[-12px] lg:text-[24px]"
                            style={{ color: slide.topCard.text }}
                          >
                            {slide.topCard.label}
                          </div>
                        </div>

                        <div
                          className={`relative z-20 mb-4 ml-0 mr-auto w-full max-w-[min(100%,260px)] rounded-[12px] px-5 py-3 shadow-[0_8px_20px_rgba(15,61,92,0.1)] lg:absolute lg:mb-0 lg:max-w-none lg:left-0 lg:top-[120px] ${slide.sideCard.height} ${slide.sideCard.width} ${slide.sideCard.top} lg:w-auto lg:p-6`}
                          style={{ backgroundColor: slide.sideCard.bg }}
                        >
                          <div
                            className="font-['Darker_Grotesque'] text-[40px] font-extrabold leading-[100%] sm:text-[48px] lg:text-[56px]"
                            style={{ color: slide.sideCard.text }}
                          >
                            {slide.sideCard.value}
                          </div>
                          <div
                            className="mt-1 font-['Plus_Jakarta_Sans'] text-[17px] font-normal leading-[120%] sm:text-[20px] lg:text-[24px]"
                            style={{ color: slide.sideCard.text }}
                          >
                            {index === 0 ? (
                              <>
                                <span className="lg:hidden">{slide.sideCard.label}</span>
                                <span className="hidden lg:block">
                                  record
                                  <br />
                                  compliance
                                </span>
                              </>
                            ) : (
                              slide.sideCard.label
                            )}
                          </div>
                        </div>

                        <div
                          className={`absolute z-30 hidden lg:block ${slide.icon.pos}`}
                        >
                          <Image
                            src={slide.icon.src}
                            alt={slide.icon.alt}
                            width={slide.icon.size}
                            height={slide.icon.size}
                            style={{
                              width: slide.icon.size,
                              height: slide.icon.size,
                            }}
                          />
                        </div>

                        <div className="relative mx-auto mt-2 w-full max-w-[min(100%,360px)] overflow-hidden rounded-[12px] lg:absolute lg:left-[204px] lg:mx-0 lg:mt-0 lg:h-[431px] lg:w-[413px] lg:max-w-none lg:translate-x-0 lg:transition-transform lg:duration-700 lg:ease-out lg:hover:-translate-y-1 lg:top-[142px]">
                          <Image
                            src={slide.imageSrc}
                            alt={slide.imageAlt}
                            width={1200}
                            height={900}
                            className="h-auto w-full object-cover lg:h-full"
                            priority={index === 0}
                          />
                          <div className="absolute bottom-2 left-3 z-30 translate-x-[60px] lg:hidden">
                            <div
                              className="rounded-[52px] border px-5 py-1.5 font-['Plus_Jakarta_Sans'] text-[14px] font-semibold whitespace-nowrap shadow-sm"
                              style={{
                                borderColor: slide.badge.bg,
                                color: slide.badge.color,
                                backgroundColor: slide.badge.bg,
                              }}
                            >
                              {slide.badge.text}
                            </div>
                          </div>
                        </div>

                        <div
                          className={`absolute z-30 hidden lg:block ${slide.badge.desktopPos}`}
                        >
                          <div
                            className="flex h-[45px] min-w-[244px] items-center justify-center rounded-[52px] border-r-2 border-b-2 border-l-0 border-t-0 px-[24px] py-0 font-['Plus_Jakarta_Sans'] text-[18px] font-semibold whitespace-nowrap"
                            style={{
                              borderColor: slide.badge.color,
                              color: slide.badge.color,
                              backgroundColor: slide.badge.bg,
                            }}
                          >
                            {slide.badge.text}
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Slide 2 — mobile / tablet: stack within viewport (no absolute overflow) */}
                        <div className="w-full min-w-0 max-w-full space-y-3 lg:hidden">
                          <div
                            className="relative z-20 flex w-full max-w-[min(100%,360px)] flex-col gap-1 rounded-[12px] p-4 shadow-[0_8px_20px_rgba(15,61,92,0.1)]"
                            style={{ backgroundColor: slide.topCard.bg }}
                          >
                            <div
                              className="font-['Darker_Grotesque'] text-[40px] leading-[110%] font-extrabold tracking-[0] sm:text-[48px]"
                              style={{ color: slide.topCard.text }}
                            >
                              {slide.topCard.value}
                            </div>
                            <div
                              className="font-['Plus_Jakarta_Sans'] text-[17px] leading-[130%] font-normal tracking-[0] sm:text-[20px]"
                              style={{ color: slide.topCard.text }}
                            >
                              {slide.topCard.label}
                            </div>
                          </div>
                          <div
                            className="relative z-20 w-full max-w-[min(100%,360px)] rounded-[12px] px-4 py-3 shadow-[0_8px_20px_rgba(15,61,92,0.1)] sm:px-5 sm:py-4"
                            style={{ backgroundColor: slide.sideCard.bg }}
                          >
                            <div
                              className="font-['Darker_Grotesque'] text-[40px] leading-[100%] font-extrabold sm:text-[48px]"
                              style={{ color: slide.sideCard.text }}
                            >
                              {slide.sideCard.value}
                            </div>
                            <div
                              className="mt-2 font-['Plus_Jakarta_Sans'] text-[17px] leading-[125%] font-normal sm:text-[20px]"
                              style={{ color: slide.sideCard.text }}
                            >
                              {slide.sideCard.label}
                            </div>
                          </div>
                          <div className="relative mx-auto w-full max-w-[min(100%,360px)] overflow-hidden rounded-[12px]">
                            <Image
                              src={slide.imageSrc}
                              alt={slide.imageAlt}
                              width={413}
                              height={433}
                              className="h-auto w-full object-cover"
                              priority={index === 1}
                            />
                            <div className="absolute bottom-2 left-3 z-30 translate-x-[60px]">
                              <div
                                className="rounded-[52px] border px-4 py-1.5 font-['Plus_Jakarta_Sans'] text-[13px] font-semibold whitespace-nowrap shadow-sm sm:text-[14px]"
                                style={{
                                  borderColor: slide.badge.bg,
                                  color: slide.badge.color,
                                  backgroundColor: slide.badge.bg,
                                }}
                              >
                                {slide.badge.text}
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Slide 2 — desktop layout */}
                        <div className="relative mx-auto mt-24 hidden w-full max-w-[413px] lg:absolute lg:left-1/2 lg:top-[142px] lg:mt-0 lg:block lg:h-[433px] lg:w-[413px] lg:-translate-x-1/2">
                          <div className="absolute top-[-140px] left-[242px] z-20 h-[122px] w-[361px] rounded-[12px] bg-[#FFF5E1] p-6 transition-transform duration-700 ease-out lg:hover:-translate-y-1">
                            <div className="-mt-[15px] h-[32px] w-[313px] font-['Darker_Grotesque'] text-[56px] font-extrabold leading-[130%] tracking-[0] text-[#B08330]">
                              {slide.topCard.value}
                            </div>
                            <div className="mt-[32px] h-[18px] w-[264px] font-['Plus_Jakarta_Sans'] text-[24px] font-normal leading-[130%] tracking-[0] text-[#B08330]">
                              {slide.topCard.label}
                            </div>
                          </div>

                          <div className="absolute top-0 left-[432px] z-20 h-[184px] w-[191px] rounded-[12px] bg-[#FFF5E1] p-6 transition-transform duration-700 ease-out lg:hover:-translate-y-1">
                            <div className="-mt-[12px] h-[32px] w-[143px] font-['Darker_Grotesque'] text-[56px] font-extrabold leading-[130%] tracking-[0] text-[#B08330]">
                              {slide.sideCard.value}
                            </div>
                            <div className="mt-[30px] h-[80px] w-[149px] font-['Plus_Jakarta_Sans'] text-[24px] font-normal leading-[130%] tracking-[0] text-[#B08330]">
                              {slide.sideCard.label}
                            </div>
                          </div>

                          <div className="absolute left-[-7px] top-[-30px] z-30">
                            <Image
                              src={slide.icon.src}
                              alt={slide.icon.alt}
                              width={72}
                              height={72}
                              className="h-[72px] w-[72px]"
                            />
                          </div>

                          <div className="absolute bottom-[5px] left-[319px] z-20 flex h-[45px] min-w-[244px] items-center justify-center rounded-[52px] border border-b-2 border-l-0 border-r-2 border-t-0 border-[#B08330] bg-[#FFF5E1] px-[24px] py-0 font-['Plus_Jakarta_Sans'] text-[18px] font-semibold whitespace-nowrap text-[#B08330] transition-transform duration-700 ease-out lg:hover:-translate-y-0.5">
                            {slide.badge.text}
                          </div>

                          <div className="relative z-10 h-full w-full overflow-hidden rounded-[12px]">
                            <Image
                              src={slide.imageSrc}
                              alt={slide.imageAlt}
                              width={413}
                              height={433}
                              className="h-full w-full object-cover"
                              priority={index === 1}
                            />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

