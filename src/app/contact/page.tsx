import type { Metadata } from "next";
import { ContactUsHeroSection } from "../../components/ContactUsHeroSection";
import { GlobalPresenceMap } from "../../components/GlobalPresenceMap";

export const metadata: Metadata = {
  title: "Contact Us | Emgeo Global",
  description:
    "Connect with Emgeo Global for global workforce mobility, payroll, EoR, immigration, and compliance support.",
};

export default function ContactPage() {
  return (
    <main className="contact-page flex min-w-0 max-w-full flex-col overflow-x-hidden md:overflow-x-visible">
      <ContactUsHeroSection />

      <section className="bg-background" aria-labelledby="global-presence-heading">
        <div className="mx-auto box-border w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24 md:py-16">
          <div className="mx-auto max-w-6xl min-w-0">
            <div className="mx-auto w-full max-w-[720px] min-w-0 lg:max-w-[1218px]">
              <h2
                id="global-presence-heading"
                className="mx-auto max-w-full text-center align-middle font-['Darker_Grotesque'] text-[40px] font-bold leading-[110%] tracking-[0] [leading-trim:none] sm:text-[52px] lg:text-[64px] lg:whitespace-nowrap xl:h-[70px] xl:w-[1218px] max-md:text-[28px] max-md:leading-[1.3]"
              >
                <span className="text-[#0B1F2D]">Global presence in </span>
                <span className="text-[#2899E6]">160+ Countries</span>
              </h2>
              <p className="mx-auto mt-4 max-w-full text-center align-middle font-['Plus_Jakarta_Sans'] text-[24px] font-normal leading-[150%] tracking-[0] [leading-trim:none] text-[#0B1F2DCC] md:mt-6 max-md:text-[15px] max-md:leading-[1.5] xl:h-[72px] xl:w-[1218px] xl:max-w-[1218px]">
                Our network spans over 160+ countries, with registered entities
                at India, Singapore, the United States of America and the United
                Kingdom supported by legal advisors, in-country experts and
                mobility consultants
              </p>
            </div>
            <div className="mt-8 overflow-hidden rounded-xl ring-1 ring-black/10 sm:mt-12 sm:rounded-2xl">
              <GlobalPresenceMap />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
