import Image from "next/image";

import { Container } from "./Container";

const TRUST_COPY =
  "We are ISMS-certified, ensuring globally recognized, enterprise-grade protection for customer data. Every process from onboarding to workforce management follows strict controls, continuous monitoring, and strong risk-mitigation practices, giving you complete confidence in our security.";

const TOP_EDGE_ACCENT = "/images/why-trust-showcase-top-accent.png";
const CERTIFICATE_IMAGE = "/images/iso-certificate.png";
const ISO_LOGO = "/images/iso-27001-badge-new.png";

/**
 * Additional Why Trust section requested from screenshot reference.
 * This section is intentionally separate from the existing AboutWhyTrustSection.
 */
export function AboutWhyTrustShowcaseSection() {
  return (
    <section className="min-w-0 overflow-x-hidden bg-background md:overflow-x-visible" aria-labelledby="why-trust-showcase-heading">
      <Container className="box-border py-10 sm:py-18">
        <div className="mx-auto w-full max-w-[1280px] min-w-0">
          <h2
            id="why-trust-showcase-heading"
            className="text-center font-['Darker_Grotesque'] text-[28px] font-bold leading-[1.25] tracking-[0] text-[#0F3D5C] sm:text-left sm:text-[64px] sm:leading-[110%] lg:pl-[150px]"
          >
            Why Trust Us?
          </h2>

          <div className="mt-4 grid min-w-0 items-center gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10">
            <div className="relative mx-auto translate-x-[10px] h-[315px] w-[286px] sm:h-[405px] sm:w-[348px] lg:mx-0 lg:translate-y-[17px] lg:h-[565px] lg:w-full lg:max-w-none">
              <Image
                src={CERTIFICATE_IMAGE}
                alt="ISO Certificate"
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 226px, 184px"
              />
            </div>

            <div className="relative pt-6 sm:pt-8 lg:w-full lg:max-w-[640px] lg:justify-self-start">
              <div className="why-trust-pop-iso absolute left-5 top-0 z-30 ml-[-18px] mt-[71px] h-[74px] w-[74px] -translate-y-1/2 sm:left-10 sm:ml-[-40px] sm:mt-[90px] sm:h-[92px] sm:w-[92px] lg:left-12">
                <Image
                  src={ISO_LOGO}
                  alt="ISO 27001 Certified"
                  fill
                  className="why-trust-pop-iso-img object-contain"
                  sizes="(min-width: 640px) 92px, 74px"
                />
              </div>
              <div
                className="pointer-events-none absolute left-0 top-0 z-20 h-[132px] w-[min(136px,34vw)] -translate-x-[13.5px] translate-y-[11px] sm:h-[178px] sm:w-[174px] sm:-translate-x-[17px] sm:translate-y-[15px]"
                aria-hidden
              >
                <Image
                  src={TOP_EDGE_ACCENT}
                  alt=""
                  fill
                  className="origin-top-left -scale-x-100 -rotate-90 object-contain object-left-top"
                  sizes="230px"
                />
              </div>
              <article className="why-trust-pop-card relative z-0 translate-y-[2px] overflow-hidden rounded-[24px] bg-[#1C4E71] px-5 pb-28 pt-9 sm:px-10 sm:pb-[165px] sm:pt-12 lg:min-h-[430px] lg:px-12 lg:pb-[173px] lg:pt-14">
                <p className="relative z-10 mt-20 max-w-[720px] font-['Plus_Jakarta_Sans'] text-left text-[15px] font-medium leading-[1.55] tracking-[0] text-[#D2DCE3] sm:mt-[110px] sm:text-[20px] sm:leading-[160%]">
                  {TRUST_COPY}
                </p>
              </article>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
