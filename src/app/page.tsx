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

      <section className="relative z-10 min-w-0 bg-background lg:-mt-[130px]">
        <div className="mx-auto w-full max-w-full box-border px-4 pb-10 pt-2 sm:px-6 sm:pb-14 sm:pt-4 lg:px-8 lg:pb-18 lg:pt-6">
          <h2 className="text-center font-['Darker_Grotesque'] text-[32px] font-bold leading-[115%] tracking-[0] text-[#0F3D5C] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px]">
            Latest News & Highlights
          </h2>

          <div className="mx-auto mt-8 grid min-w-0 w-full max-w-[1280px] grid-cols-1 gap-6 sm:mt-10 lg:grid-cols-[minmax(0,628px)_minmax(0,628px)] lg:items-start">
            <article className="relative mx-auto aspect-square w-full max-w-[628px] min-w-0 overflow-hidden rounded-[16px] lg:mx-0 lg:h-[628px] lg:w-full lg:max-w-none">
              <img
                src="/images/news-featured-meeting.png"
                alt="News featured image"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[#0B1F2D]/42" />
              <img
                src="/images/news-featured-corner-arrow.png"
                alt=""
                aria-hidden
                className="pointer-events-none absolute right-0 top-0 z-10 h-[72px] w-[72px] max-w-[22%] object-contain sm:h-[88px] sm:w-[88px] lg:h-[102px] lg:w-[102px] lg:max-w-none"
              />

              <div className="absolute bottom-6 left-4 right-4 z-10 flex min-w-0 flex-col items-start text-left sm:bottom-8 sm:left-6 sm:right-6">
                <div className="mb-3 inline-flex min-w-0 max-w-full items-center justify-start gap-2 sm:mb-4">
                  <img
                    src="https://emgeo.lucidspire.com/wp-content/uploads/2025/11/Ellipse-14670.png"
                    alt=""
                    className="h-7 w-7 shrink-0 rounded-full bg-white/95 object-contain sm:h-8 sm:w-8"
                  />
                  <span className="font-['Darker_Grotesque'] text-[16px] font-medium leading-[130%] tracking-[0] text-white sm:text-[18px] md:text-[20px]">
                    News Website
                  </span>
                </div>
                <h4 className="max-w-full font-['Darker_Grotesque'] text-[26px] font-bold leading-[105%] tracking-[0] text-white sm:text-[32px] md:text-[40px] lg:max-w-[430px] lg:text-[48px]">
                  Title of the news article or blog will come here
                </h4>
                <p className="mt-3 font-['Darker_Grotesque'] text-[14px] font-medium leading-[130%] tracking-[0] text-[#FFFFFFB2] sm:mt-4 sm:text-[15px] md:text-[16px]">
                  25 October 2025
                </p>
              </div>
            </article>

            <div className="grid min-w-0 w-full max-w-[628px] gap-5 justify-self-center sm:gap-6 lg:max-w-none lg:justify-self-stretch">
              {[0, 1].map((idx) => (
                <article
                  key={`news-right-${idx}`}
                  className="relative mx-auto min-h-[240px] w-full max-w-[628px] min-w-0 overflow-hidden rounded-[16px] bg-[#DDF1FF] p-5 sm:min-h-[280px] sm:p-7 md:h-[302px] lg:w-full lg:max-w-none lg:p-8"
                >
                  <img
                    src="/images/news-featured-corner-arrow.png"
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute right-0 top-0 z-10 h-[72px] w-[72px] max-w-[22%] object-contain sm:h-[88px] sm:w-[88px] lg:h-[102px] lg:w-[102px] lg:max-w-none"
                  />

                  <div className="relative z-10 mt-6 flex min-w-0 flex-col items-start text-left sm:mt-10">
                    <div className="mb-3 inline-flex min-w-0 max-w-full items-center justify-start gap-2 sm:mb-4">
                      <img
                        src="https://emgeo.lucidspire.com/wp-content/uploads/2025/11/Ellipse-14670.png"
                        alt=""
                        className="h-7 w-7 shrink-0 rounded-full bg-white object-contain sm:h-8 sm:w-8"
                      />
                      <span className="font-['Darker_Grotesque'] text-[16px] font-medium leading-[130%] tracking-[0] text-[#0B1F2D] sm:text-[18px] md:text-[20px]">
                        News Website
                      </span>
                    </div>
                    <h4 className="max-w-full font-['Darker_Grotesque'] text-[26px] font-bold leading-[105%] tracking-[0] text-[#0B1F2D] sm:text-[32px] md:text-[40px] lg:max-w-[430px] lg:text-[48px]">
                      Title of the news article or blog will come here
                    </h4>
                    <p className="mt-3 font-['Darker_Grotesque'] text-[14px] font-medium leading-[130%] tracking-[0] text-[#0B1F2D]/65 sm:mt-4 sm:text-[15px] md:text-[16px]">
                      25 October 2025
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>

      <ConnectWithUsSection />
    </main>
  );
}
