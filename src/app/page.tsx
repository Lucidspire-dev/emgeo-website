import { ConnectWithUsSection } from "../components/ConnectWithUsForm";
import { HeroSection } from "../components/HeroSection";
import { TestimonialsCarousel } from "../components/TestimonialsCarousel";
import { ServicesScrollAccordion } from "../components/ServicesScrollAccordion";
import { WhyEmgeoSection } from "../components/WhyEmgeoSection";

export default function Home() {
  return (
    <main className="home-page flex min-w-0 max-w-full flex-col overflow-x-hidden">
      <HeroSection />

      <WhyEmgeoSection />

      <section className="min-w-0 bg-background">
        <div className="mx-auto w-full max-w-full box-border px-4 pb-2 pt-10 sm:px-6 sm:pb-4 sm:pt-14 lg:px-8 lg:pb-0 lg:pt-18">
          <div className="min-w-0 max-w-full">
            <div className="font-['Plus_Jakarta_Sans'] text-[14px] font-bold uppercase leading-[120%] tracking-[0.12em] text-[#0F3D5C] sm:text-[16px] sm:tracking-[0.15em] md:text-[18px] lg:text-[20px]">
              Our Services
            </div>
            <h2 className="mt-2 max-w-full font-['Darker_Grotesque'] text-[32px] font-bold leading-[110%] tracking-[0] text-[#0B1F2D] sm:mt-3 sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px]">
              Making global employment easier than ever
            </h2>
          </div>

          <div className="mt-4 min-w-0 max-w-full sm:mt-6">
            <ServicesScrollAccordion />
          </div>
        </div>
      </section>

      <section id="testimonials" className="min-w-0 bg-background lg:-mt-[260px]">
        <div className="mx-auto w-full max-w-full box-border px-4 pb-2 pt-0 sm:px-6 sm:pb-4 sm:pt-2 lg:px-8 lg:pb-6 lg:pt-4">
          <h2 className="text-center font-['Darker_Grotesque'] text-[32px] font-bold leading-[115%] tracking-[0] text-[#0F3D5C] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px]">
            Hear from our clients
          </h2>

          <TestimonialsCarousel />
        </div>
      </section>

      <ConnectWithUsSection />
    </main>
  );
}
