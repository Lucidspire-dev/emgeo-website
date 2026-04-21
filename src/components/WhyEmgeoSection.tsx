"use client";

import { useEffect, useRef } from "react";

const CARDS = [
  {
    className: "card1",
    icon: "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/w1.png",
    title: "Payroll Made Easy",
    desc: "100% compliant payroll management with compliances and simple disbursement.",
  },
  {
    className: "card2",
    icon: "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/w2.png",
    title: "Global Hiring Simplified",
    desc: "Depute your assignee without worrying about infrastructure.",
  },
  {
    className: "card3",
    icon: "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/w3.png",
    title: "Compliance You Trust",
    desc: "Updated rules & regulations to meet deputation challenges.",
  },
  {
    className: "card4",
    icon: "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/w4.png",
    title: "Talent Without Borders",
    desc: "Access top talent with quick turnaround time.",
  },
  {
    className: "card5",
    icon: "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/w5.png",
    title: "Mobility Made Seamless",
    desc: "Immigration made easy with proper work permits.",
  },
  {
    className: "card6",
    icon: "https://emgeo.lucidspire.com/wp-content/uploads/2026/03/w6.png",
    title: "End-to-End Partnership",
    desc: "A one-stop solution for international deputations.",
  },
] as const;

export function WhyEmgeoSection() {
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const onWheel = (e: WheelEvent) => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        return;
      }

      const { scrollLeft, scrollWidth, clientWidth } = row;
      const tol = 2;
      const atStart = scrollLeft <= tol;
      const atEnd = scrollLeft + clientWidth >= scrollWidth - tol;

      const dy = e.deltaY;
      const dx = e.deltaX;

      if (Math.abs(dx) > Math.abs(dy)) {
        return;
      }

      if (dy > 0 && !atEnd) {
        e.preventDefault();
        row.scrollLeft += dy;
        return;
      }
      if (dy < 0 && !atStart) {
        e.preventDefault();
        row.scrollLeft += dy;
      }
    };

    row.addEventListener("wheel", onWheel, { passive: false });
    return () => row.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="min-w-0 bg-background">
      <div className="mx-auto w-full max-w-full box-border px-4 pb-4 pt-6 sm:px-6 sm:pb-6 sm:pt-8 lg:px-8 lg:pb-8 lg:pt-10">
        <h2 className="max-w-full font-['Darker_Grotesque'] text-[32px] font-bold leading-[115%] tracking-[0] text-foreground sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px] xl:leading-[130%]">
          Why Emgeo?
        </h2>

        <div className="emgeo-wrapper mt-8 max-w-full sm:mt-10">
          <div ref={rowRef} className="emgeo-row">
            {CARDS.map((c) => (
              <div key={c.title} className={`emgeo-card ${c.className}`}>
                <svg viewBox="0 0 440 500" preserveAspectRatio="none" aria-hidden>
                  <path d="M440 476C440 489.255 429.255 500 416 500H24C10.7452 500 0 489.255 0 476V24C0 10.7452 10.7452 0 24 0H136C149.255 0 160 10.7452 160 24V56C160 69.2548 170.745 80 184 80H256C269.255 80 280 69.2548 280 56V24C280 10.7452 290.745 0 304 0H416C429.255 0 440 10.7452 440 24V476Z" />
                </svg>
                <div className="card-icon">
                  <img src={c.icon} alt={c.title} />
                </div>
                <div className="card-content">
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
