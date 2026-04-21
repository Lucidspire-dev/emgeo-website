import Image from "next/image";

const TRUST_COPY =
  "We are ISMS-certified, ensuring globally recognized, enterprise-grade protection for customer data. Every process from onboarding to workforce management follows strict controls, continuous monitoring, and strong risk-mitigation practices, giving you complete confidence in our security.";

/** Figma: seal frame (centers badge on notch) */
const BADGE_FRAME_W = 203.28125;
const BADGE_FRAME_H = 99;
/** Figma: seal graphic */
const BADGE_IMG_W = 108.03250885009766;
const BADGE_IMG_H = 110.7801742553711;
/** Enlarged seal + frame (scales notch to match) */
const BADGE_SCALE = 2.55;
const BADGE_IMG_W_SCALED = BADGE_IMG_W * BADGE_SCALE;
const BADGE_IMG_H_SCALED = BADGE_IMG_H * BADGE_SCALE;
const BADGE_FRAME_W_SCALED = BADGE_FRAME_W * BADGE_SCALE;
const BADGE_FRAME_H_SCALED = BADGE_FRAME_H * BADGE_SCALE;
/** Shift seal downward from seam */
const BADGE_OFFSET_Y_PX = 24;
/** Top corner radii for white cap (half frame width; browser clamps to height) */
const NOTCH_TOP_R = BADGE_FRAME_W / 2;

export function AboutWhyTrustSection() {
  return (
    <section className="min-w-0 overflow-x-hidden bg-background md:overflow-x-visible" aria-labelledby="why-trust-heading">
      <div className="mx-auto box-border w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-18 lg:px-8">
        <div className="mx-auto flex w-full max-w-[1280px] min-w-0 flex-col items-center gap-5 overflow-visible sm:gap-8 md:gap-[54px]">
          <h2
            id="why-trust-heading"
            className="relative z-30 w-full max-w-full text-center font-['Darker_Grotesque'] text-[28px] font-bold leading-[1.3] tracking-[0] text-[#0F3D5C] [leading-trim:none] md:text-[64px] md:leading-[120%]"
          >
            Why Trust Us?
          </h2>

          <div className="relative z-0 w-full max-w-[1280px] min-w-0 overflow-visible">
            <div className="about-trust-panel relative z-0 box-border flex min-h-[282px] w-full max-w-full flex-col justify-center rounded-[24px] bg-[#1C4E71] px-5 pb-12 pt-20 text-center ring-0 outline-none sm:px-10 sm:pb-[56px] sm:pt-28 lg:min-h-[282px] lg:px-[80px] lg:pt-[130px]">
              <p className="mx-auto min-h-0 w-full max-w-[1120px] text-center font-['Plus_Jakarta_Sans'] text-[15px] font-medium leading-[1.55] tracking-[0] text-[#D2DCE3] [leading-trim:none] sm:min-h-[96px] sm:text-[20px] sm:leading-[160%]">
                {TRUST_COPY}
              </p>
            </div>

            {/* Page-white semicircle: sits above panel; flat base on top edge of blue = U cutout */}
            <div
              className="about-trust-notch pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-full bg-background opacity-100"
              style={{
                width: `${BADGE_FRAME_W_SCALED}px`,
                height: `${BADGE_FRAME_H_SCALED}px`,
                borderTopLeftRadius: `${NOTCH_TOP_R * BADGE_SCALE}px`,
                borderTopRightRadius: `${NOTCH_TOP_R * BADGE_SCALE}px`,
              }}
              aria-hidden
            />

            <div
              className="about-trust-badge-anchor absolute left-1/2 top-0 z-20 flex items-center justify-center opacity-100"
              style={{
                left: "50%",
                top: 0,
                width: `${BADGE_FRAME_W_SCALED}px`,
                height: `${BADGE_FRAME_H_SCALED}px`,
                transform: `translate(-50%, calc(-50% + ${BADGE_OFFSET_Y_PX}px))`,
              }}
            >
              <Image
                src="/images/iso-27001-badge-v3.png"
                alt="ISO 27001 Certified"
                width={512}
                height={512}
                className="about-trust-badge-img object-contain"
                style={{
                  width: `${BADGE_IMG_W_SCALED}px`,
                  height: `${BADGE_IMG_H_SCALED}px`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
