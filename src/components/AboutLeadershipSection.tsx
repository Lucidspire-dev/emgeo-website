import Image from "next/image";

import { Container } from "./Container";

type LeadershipEntry = {
  name: string;
  role: string;
  image: string;
  linkedinUrl: string;
  imageObjectPosition?: string;
};

/** Top-anchored crop so heads stay visible with object-fit: cover (all cards). */
const LEADER_PHOTO_OBJECT_POSITION = "center top";

const LEADERS: LeadershipEntry[] = [
  {
    name: "Guruprasad G",
    role: "Co-Founder & Executive Director",
    image: "/images/leaders/guruprasad.png",
    linkedinUrl: "https://www.linkedin.com/in/guruprasadg/",
    imageObjectPosition: "center top",
  },
  {
    name: "Raghavendra N",
    role: "Director & Co-Founder",
    image: "/images/leaders/raghavendra.jpg",
    linkedinUrl: "https://www.linkedin.com/in/raghavendra-n-b6b7783a/",
    imageObjectPosition: "center top",
  },
  {
    name: "Dhiren Sampat",
    role: "Chief Executive Officer",
    image: "/images/leaders/dhiren-sampat.png",
    linkedinUrl: "https://www.linkedin.com/in/dhiren-sampat-0b16655/",
  },
];

/** Alpha mask — notched bottom-right + three rounded corners (820×834, same aspect as 410×417). */
const LEADER_PHOTO_MASK = "/images/leaders/leader-photo-mask.png";

const leaderPhotoMaskStyle = {
  WebkitMaskImage: `url(${LEADER_PHOTO_MASK})`,
  WebkitMaskSize: "100% 100%",
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskImage: `url(${LEADER_PHOTO_MASK})`,
  maskSize: "100% 100%",
  maskRepeat: "no-repeat",
  maskPosition: "center",
  maskMode: "alpha" as const,
};

/** Portrait frame — Figma 410×417; edge shape from mask (not plain border-radius). */
const LEADER_PHOTO_FRAME_CLASS =
  "relative aspect-[410/417] w-full min-h-0 min-w-0 bg-white";

const LINKEDIN_BADGE_SRC = "/images/leaders/linkedin-badge.png";

const linkedinBadgeClassName =
  "absolute z-30 h-[52px] w-[52px] translate-x-[15px] translate-y-[9px] overflow-hidden rounded-[12px] transition-opacity hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B1F2D]";

/**
 * Our Leadership — matches Lucidspire About order (after Our Core Values).
 * @see https://emgeo.lucidspire.com/about-us/
 */
export function AboutLeadershipSection() {
  const imageSizes = "(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 420px";

  return (
    <section className="-mt-[50px] min-w-0 bg-background sm:-mt-[58px] lg:-mt-[74px]" aria-labelledby="our-leadership-heading" id="our-leadership">
      <Container className="box-border pb-14 pt-10 max-md:pb-10 max-md:pt-8 sm:pb-18 sm:pt-12">
        <h2
          id="our-leadership-heading"
          className="text-center font-['Darker_Grotesque'] text-[28px] font-bold leading-[1.3] tracking-[0] text-[#0B1F2D] sm:text-[52px] sm:leading-[110%] lg:text-[64px]"
        >
          Our Leadership
        </h2>
        <div className="mt-8 grid min-w-0 grid-cols-1 gap-6 max-md:mt-4 sm:grid-cols-3 sm:gap-8">
          {LEADERS.map((leader) => (
            <article
              key={leader.name}
              className="relative min-w-0 max-w-full overflow-hidden rounded-2xl border border-[#0B1F2D]/[0.08] text-left shadow-[0_2px_20px_rgba(11,31,45,0.06)]"
            >
              <div className="relative w-full min-w-0">
                <div className={LEADER_PHOTO_FRAME_CLASS} style={leaderPhotoMaskStyle}>
                  <Image
                    src={leader.image}
                    alt={`${leader.name}, ${leader.role}`}
                    fill
                    className="h-full w-full object-cover"
                    style={{
                      objectPosition:
                        leader.imageObjectPosition ?? LEADER_PHOTO_OBJECT_POSITION,
                    }}
                    sizes={imageSizes}
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black/55 via-black/20 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-start justify-end gap-2 px-4 pb-5 pt-10 text-left align-middle">
                    <h3 className="w-full font-['Darker_Grotesque'] text-[22px] font-bold leading-[1.25] tracking-[0] text-white sm:text-[28px] sm:leading-[120%]">
                      <a
                        href={leader.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white underline-offset-2 hover:underline focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        aria-label={`${leader.name} on LinkedIn (opens in a new tab)`}
                      >
                        {leader.name}
                      </a>
                    </h3>
                    <p className="w-full font-['Darker_Grotesque'] text-[15px] font-semibold leading-[1.35] tracking-[0] text-white sm:text-[16px] md:text-[20px] md:leading-[120%]">
                      {leader.role}
                    </p>
                  </div>
                </div>
                <a
                  href={leader.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkedinBadgeClassName}
                  style={{ bottom: 8, right: 15 }}
                  aria-label={`${leader.name} LinkedIn profile (opens in a new tab)`}
                >
                  <Image
                    src={LINKEDIN_BADGE_SRC}
                    alt=""
                    width={52}
                    height={52}
                    className="h-full w-full object-cover"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
