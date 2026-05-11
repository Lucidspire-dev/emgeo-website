import Image from "next/image";
import { AboutCoreValuesScroller } from "../../components/AboutCoreValuesScroller";
import { AboutLeadershipSection } from "../../components/AboutLeadershipSection";
import { AboutStatsCounters } from "../../components/AboutStatsCounters";
import { AboutWhyTrustShowcaseSection } from "../../components/AboutWhyTrustShowcaseSection";
import { ConnectWithUsSection } from "../../components/ConnectWithUsForm";
import { Container } from "../../components/Container";
import { GlobalPresenceMap } from "../../components/GlobalPresenceMap";

const HERO_IMAGE = "/images/about-hero-new-v4.png";
const STAND_FOR_MISSION_IMAGE = "/images/about-standfor-mission-v3.png";
const STAND_FOR_VISION_IMAGE = "/images/about-standfor-vision-new.png";

export default function AboutPage() {
  return (
    <main className="about-page flex min-w-0 max-w-full flex-col overflow-x-hidden md:overflow-x-visible">
      <section className="min-w-0 bg-background">
        <div className="mx-auto w-full max-w-[1440px] px-0 pt-0">
          <div className="relative overflow-hidden rounded-[8px]">
            <div className="relative h-[260px] w-full sm:h-[340px] lg:h-[471px]">
              <Image
                src={HERO_IMAGE}
                alt="About Emgeo"
                fill
                priority
                quality={100}
                className="object-cover object-center opacity-100"
                sizes="(min-width: 1440px) 1440px, 100vw"
              />
              <h1 className="absolute bottom-6 left-4 right-4 max-w-[760px] font-['Darker_Grotesque'] text-[28px] font-bold leading-[1.35] tracking-[0] text-white max-md:pr-2 md:bottom-10 md:left-8 md:right-auto md:text-[52px] md:leading-[110%] lg:left-12 lg:text-[80px]">
                25+ years of excellence
                <br />
                in global HR
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="min-w-0 bg-background">
        <Container className="box-border pb-14 pt-10 sm:pb-18 sm:pt-12">
          <div className="mx-auto max-w-[1200px] px-0">
            <h2 className="text-center font-['Darker_Grotesque'] text-[28px] font-bold leading-[1.3] tracking-[0] md:text-[64px] md:leading-[110%]">
              <span className="text-[#2899E6]">Your Partner </span>
              <span className="text-[#0B1F2D]">in Global Expansion</span>
            </h2>

            <div className="mt-5 overflow-hidden rounded-[24px] bg-background md:mt-[50px]">
              <div className="grid min-w-0 items-stretch gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(420px,480px)] lg:gap-8">
                <div className="box-border min-w-0 rounded-[20px] bg-white px-5 py-5 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
                  <p className="font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-[1.5] tracking-[0] text-[#0B1F2DCC] md:text-[24px] md:leading-[150%]">
                    Emgeo Global is a trusted partner in Professional Global Mobility and Employment Solutions,
                    empowering businesses to expand across borders with assurance and compliance. With a robust
                    presence in 160+ countries, we deliver end-to-end workforce deployment services — including
                    immigration, payroll, recruitment, and relocation—tailored to the legal, cultural, and
                    operational frameworks of each geography.
                  </p>
                </div>
                <div className="relative min-h-[280px] w-full min-w-0 overflow-hidden rounded-[16px] sm:min-h-[360px] lg:h-[467px] lg:w-[517px] lg:min-h-0">
                  <Image
                    src="/images/about-intro-team-new.png"
                    alt="Professional global mobility consultation"
                    fill
                    className="object-cover object-center opacity-100"
                    sizes="(min-width: 1024px) 480px, 100vw"
                  />
                </div>
              </div>
            </div>

            <AboutStatsCounters />
          </div>
        </Container>
      </section>

      <section className="min-w-0 bg-[#E8F3FB]">
        <Container className="box-border py-10 sm:py-14 md:py-18">
          <h2 className="text-center font-['Darker_Grotesque'] text-[28px] font-bold leading-[1.3] tracking-[0] text-[#0B1F2D] md:text-[64px] md:leading-[110%]">
            What We Stand For
          </h2>

          <div className="mx-auto mt-4 flex max-w-[1280px] flex-col gap-6 md:mt-5">
            <article className="box-border min-w-0 rounded-[10px] bg-[#E6F5FF] p-4 sm:p-5 lg:p-6">
              <div className="flex h-full min-w-0 flex-col gap-6 lg:grid lg:grid-cols-[639px_minmax(0,1fr)] lg:items-start">
                <div className="relative h-[200px] w-full min-w-0 overflow-hidden rounded-[24px] border border-[#B7C6D6] shadow-none sm:h-[220px] lg:h-[320px] lg:w-[639px]">
                  <Image
                    src={STAND_FOR_MISSION_IMAGE}
                    alt="City skyline representing global expansion"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                </div>
                <div className="flex h-full min-w-0 flex-col justify-center px-1 lg:px-2">
                  <h3 className="font-['Darker_Grotesque'] text-[22px] font-bold leading-[1.25] tracking-[0] text-[#163E5A] md:text-[48px] md:leading-[100%]">
                    Our Mission
                  </h3>
                  <p className="mt-3 max-w-full font-['Plus_Jakarta_Sans'] text-[15px] font-medium leading-[1.5] tracking-[0] text-[#0B1F2DCC] md:mt-4 md:max-w-[98%] md:text-[20px] md:leading-[150%]">
                    To help global enterprises expand seamlessly across borders with
                    strategic, compliant, and high-impact mobility solutions
                    empowering them with end-to-end support that simplifies
                    international workforce deployment, ensures compliance, and
                    drives growth in new markets.
                  </p>
                </div>
              </div>
            </article>

            <article className="box-border min-w-0 rounded-[10px] bg-[#E6F5FF] p-4 sm:p-5 lg:p-6">
              <div className="flex h-full min-w-0 flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_639px] lg:items-start">
                <div className="flex h-full min-w-0 flex-col justify-center px-1 lg:px-2">
                  <h3 className="font-['Darker_Grotesque'] text-[22px] font-bold leading-[1.25] tracking-[0] text-[#163E5A] md:text-[48px] md:leading-[100%]">
                    Our Vision
                  </h3>
                  <p className="mt-3 max-w-full font-['Plus_Jakarta_Sans'] text-[15px] font-medium leading-[1.5] tracking-[0] text-[#0B1F2DCC] md:mt-4 md:max-w-[98%] md:text-[20px] md:leading-[150%]">
                    To be the world’s most trusted and agile partner in global
                    workforce mobility delivering smart, compliant, and scalable
                    solutions that help businesses expand confidently and thrive
                    globally. We envision a future where global expansion is a
                    strategic advantage powered by Emgeo’s expertise and technology.
                  </p>
                </div>
                <div className="relative h-[200px] w-full min-w-0 overflow-hidden rounded-[24px] border border-[#B7C6D6] shadow-none sm:h-[220px] lg:h-[320px] lg:w-[639px]">
                  <Image
                    src={STAND_FOR_VISION_IMAGE}
                    alt="City skyline representing global expansion"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 560px, 100vw"
                  />
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>

      <section className="min-w-0 bg-background" aria-labelledby="our-core-values-heading">
        <Container className="box-border pb-6 pt-4 sm:pb-8 sm:pt-6">
          <h2
            id="our-core-values-heading"
            className="mt-[20px] text-center font-['Darker_Grotesque'] text-[28px] font-bold leading-[1.3] tracking-[0] text-[#0B1F2D] sm:text-[52px] sm:leading-[110%] lg:text-[64px]"
          >
            Our Core Values
          </h2>
        </Container>
        <AboutCoreValuesScroller />
      </section>

      <AboutLeadershipSection />

      <AboutWhyTrustShowcaseSection />

      <section className="-mt-8 min-w-0 bg-background sm:-mt-10 lg:-mt-12" aria-labelledby="global-presence-heading">
        <div className="mx-auto box-border w-full max-w-7xl px-4 pb-4 pt-3 sm:px-6 sm:pb-6 sm:pt-5 md:pb-8 md:pt-7 lg:px-8 lg:pb-10 lg:pt-9">
          <div className="mx-auto max-w-6xl min-w-0">
            <div className="mx-auto w-full max-w-[720px] min-w-0 lg:max-w-[1218px]">
              <h2
                id="global-presence-heading"
                className="mx-auto max-w-full text-center font-['Darker_Grotesque'] text-[40px] font-bold leading-[110%] tracking-[0] sm:text-[52px] lg:text-[64px] lg:whitespace-nowrap max-md:text-[28px] max-md:leading-[1.3]"
              >
                <span className="text-[#0B1F2D]">Global presence in </span>
                <span className="text-[#2899E6]">160+ Countries</span>
              </h2>
              <p className="mx-auto mt-4 max-w-full text-center font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-[1.5] tracking-[0] text-[#0B1F2DCC] md:mt-5 md:text-[24px] md:leading-[150%] lg:h-[72px] lg:w-[1218px] lg:max-w-none lg:opacity-100">
                Our network spans over 160+ countries, with registered entities
                at India, Singapore, the United States of America and the United
                Kingdom supported by legal advisors, in-country experts and
                mobility consultants
              </p>
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl ring-1 ring-black/10 md:mt-5">
              <GlobalPresenceMap />
            </div>
          </div>
        </div>
      </section>

      <ConnectWithUsSection />
    </main>
  );
}

