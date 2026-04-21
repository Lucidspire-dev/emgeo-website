import type { ReactNode } from "react";
import Image from "next/image";

/** Same asset URLs as https://emgeo.lucidspire.com/employer-of-record-eor/ “How This Service Helps You”. */
const HELPS_ICONS = {
  acceleratesGlobalExpansion:
    "https://emgeo.lucidspire.com/wp-content/uploads/2026/02/Screenshot-from-2026-02-27-16-49-54.png",
  providesWorkforceFlexibility:
    "https://emgeo.lucidspire.com/wp-content/uploads/2026/02/Screenshot-from-2026-02-27-18-40-09.png",
  reducesCosts:
    "https://emgeo.lucidspire.com/wp-content/uploads/2026/02/Screenshot-from-2026-02-27-18-53-46.png",
  maintainsBusinessControl:
    "https://emgeo.lucidspire.com/wp-content/uploads/2026/02/Screenshot-from-2026-02-27-17-47-13.png",
  eliminatesComplianceRisk:
    "https://emgeo.lucidspire.com/wp-content/uploads/2026/02/Screenshot-from-2026-02-27-18-54-44.png",
} as const;

function HelpsCardIcon({ src }: { src: string }) {
  return (
    <div className="pointer-events-none absolute right-4 top-4 sm:right-6 sm:top-6">
      <div className="relative h-[86px] w-[86px] opacity-100">
        <Image
          src={src}
          alt=""
          fill
          className="object-contain object-right-top"
          sizes="86px"
        />
      </div>
    </div>
  );
}

function HelpsCard({
  title,
  children,
  iconSrc,
  className = "",
  titleSingleLine = true,
}: {
  title: string;
  children: ReactNode;
  iconSrc: string;
  className?: string;
  /** When true, heading stays on one line from `md` up (wraps on very small viewports if needed). */
  titleSingleLine?: boolean;
}) {
  return (
    <article
      className={`relative min-w-0 overflow-hidden rounded-[24px] bg-[#E6F5FF] p-6 sm:p-8 ${className}`}
    >
      <HelpsCardIcon src={iconSrc} />
      <div className="relative z-[1] min-w-0 max-w-[min(100%,420px)] pr-[100px] sm:pr-[108px]">
        <h3
          className={`align-middle font-['Darker_Grotesque'] text-[24px] font-bold leading-[110%] tracking-[0] [leading-trim:none] text-[#0B1F2D] sm:text-[32px] lg:text-[40px] ${
            titleSingleLine ? "md:whitespace-nowrap" : ""
          }`}
        >
          {title}
        </h3>
        <div className="mt-4 align-middle font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-[150%] tracking-[0] [leading-trim:none] text-[#0B1F2DCC] sm:text-[18px] lg:text-[20px]">
          {children}
        </div>
      </div>
    </article>
  );
}

export function EmployerOfRecordHelpsYouSection() {
  return (
    <section className="bg-background" aria-labelledby="eor-helps-heading">
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-8 lg:px-8 lg:pb-12 lg:pt-10">
        <h2
          id="eor-helps-heading"
          className="text-center align-middle font-['Darker_Grotesque'] text-[36px] font-bold leading-[110%] tracking-[0] [leading-trim:none] sm:text-[48px] lg:text-[64px]"
        >
          <span className="text-[#0B1F2D]">How This Service </span>
          <span className="text-[#2899E6]">Helps You</span>
        </h2>

        <div className="mt-10 flex flex-col gap-4 sm:gap-5 lg:mt-14 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-5 lg:gap-x-5">
          <HelpsCard
            title="Accelerates Global Expansion"
            iconSrc={HELPS_ICONS.acceleratesGlobalExpansion}
            className="lg:col-start-1 lg:row-start-1"
          >
            <p>
              Enables rapid market entry and project execution without delays
              caused by entity incorporation or local registrations.
            </p>
          </HelpsCard>

          <HelpsCard
            title="Maintains Business Control"
            iconSrc={HELPS_ICONS.maintainsBusinessControl}
            titleSingleLine={false}
            className="lg:col-start-1 lg:row-start-2 lg:row-span-2"
          >
            <p>
              Clients retain complete authority over roles, deliverables, and
              performance management while Emgeo handles compliance.
            </p>
          </HelpsCard>

          <HelpsCard
            title="Provides Workforce Flexibility"
            iconSrc={HELPS_ICONS.providesWorkforceFlexibility}
            className="lg:col-start-2 lg:row-start-1"
          >
            <p>
              Allows organizations to scale headcount up or down based on
              business needs and project timelines.
            </p>
          </HelpsCard>

          <HelpsCard
            title="Reduces Operational & Capital Costs"
            iconSrc={HELPS_ICONS.reducesCosts}
            className="lg:col-start-2 lg:row-start-2"
          >
            <p>
              Avoids long-term investment in foreign infrastructure, legal
              entities, and administrative overheads.
            </p>
          </HelpsCard>

          <HelpsCard
            title="Eliminates Legal and Compliance Risk"
            iconSrc={HELPS_ICONS.eliminatesComplianceRisk}
            className="lg:col-start-2 lg:row-start-3"
          >
            <p>
              Ensures full adherence to labour laws, tax regulations, and
              statutory obligations across jurisdictions.
            </p>
          </HelpsCard>
        </div>
      </div>
    </section>
  );
}
