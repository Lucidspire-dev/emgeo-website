import Image from "next/image";

/** Icons from https://emgeo.lucidspire.com/global-payroll-solutions/ (Elementor image assets) */
const HELPS_ICON_SRC = {
  reducesOperational:
    "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/Screenshot-from-2026-03-02-10-46-14.png",
  supportsExpansion:
    "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/Screenshot-from-2026-03-02-10-19-57-1.png",
  improvesConfidence:
    "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/Screenshot-from-2026-03-02-11-13-44.png",
  auditGovernance:
    "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/Screenshot-from-2026-03-02-11-09-22.png",
  regulatoryCompliance:
    "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/Screenshot-from-2026-03-02-11-11-03.png",
} as const;

const LEFT_CARDS = [
  {
    title: "Supports Scalable Global Expansion",
    description:
      "Enables organisations to add new countries and employees without redesigning payroll infrastructure or compliance processes.",
    iconSrc: HELPS_ICON_SRC.supportsExpansion,
  },
  {
    title: "Delivers Audit-Ready Governance",
    description:
      "Provides structured payroll documentation and reporting aligned with corporate governance, financial audits, and regulatory inspections.",
    iconSrc: HELPS_ICON_SRC.auditGovernance,
  },
] as const;

const RIGHT_CARDS = [
  {
    title: "Reduces Operational Complexity",
    description:
      "Removes the need to manage multiple local payroll vendors, systems, and compliance teams across different countries.",
    iconSrc: HELPS_ICON_SRC.reducesOperational,
  },
  {
    title: "Improves Workforce Confidence",
    description:
      "Accurate and timely salary payments enhance employee trust, satisfaction, and retention in international assignments.",
    iconSrc: HELPS_ICON_SRC.improvesConfidence,
  },
  {
    title: "Ensures Regulatory Compliance",
    description:
      "Eliminates exposure to payroll-related penalties, statutory violations, and audit risks by ensuring full adherence to local labour and tax laws.",
    iconSrc: HELPS_ICON_SRC.regulatoryCompliance,
  },
] as const;

function HelpsNotchCard({
  title,
  description,
  iconSrc,
}: {
  title: string;
  description: string;
  iconSrc: string;
}) {
  return (
    <article className="helps-card relative rounded-[24px] bg-[#E6F5FF]">
      <div className="absolute left-0 top-0 z-10 h-[84px] w-[84px] overflow-hidden rounded-tl-[24px] rounded-br-[27px] bg-[#E6F5FF]">
        <Image
          src={iconSrc}
          alt=""
          fill
          className="scale-110 object-cover object-top"
          sizes="84px"
        />
      </div>
      <div className="px-6 pb-8 pt-[6rem]">
        <h3 className="align-middle font-['Darker_Grotesque'] text-[24px] font-bold leading-[110%] tracking-[0] text-[#0B1F2D] sm:text-[32px] lg:text-[40px]">
          {title}
        </h3>
        <p className="mt-4 font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-[150%] tracking-[0] text-[#0B1F2DCC] sm:text-[18px] lg:text-[20px]">
          {description}
        </p>
      </div>
    </article>
  );
}

export function GlobalPayrollHelpsYouSection() {
  return (
    <section
      className="-mt-8 bg-white sm:-mt-10 lg:-mt-12 lg:min-h-[1141px]"
      aria-labelledby="payroll-helps-heading"
    >
      <div className="mx-auto w-full max-w-[1440px] px-4 pb-0 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
        <h2
          id="payroll-helps-heading"
          className="text-left font-['Darker_Grotesque'] text-[36px] font-bold leading-[110%] tracking-[0] sm:text-[48px] lg:ml-[130px] lg:text-[64px]"
        >
          <span className="block text-[#0B1F2D]">How This Service</span>
          <span className="mt-1 block text-[#2899E6]">Helps You</span>
        </h2>

        <div className="mt-12 flex flex-col gap-4 md:mt-16 lg:flex-row lg:items-start lg:gap-x-[30px]">
          <div className="flex w-full shrink-0 flex-col gap-4 lg:ml-[120px] lg:w-[560px] lg:gap-[30px]">
            {LEFT_CARDS.map((c) => (
              <HelpsNotchCard key={c.title} {...c} />
            ))}
          </div>
          <div className="flex w-full shrink-0 flex-col gap-4 lg:w-[556px] lg:gap-[30px] lg:-translate-y-[200px]">
            {RIGHT_CARDS.map((c) => (
              <HelpsNotchCard key={c.title} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
