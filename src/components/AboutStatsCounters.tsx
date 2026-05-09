"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const STATS = [
  { target: 1200, label: "Candidates Placed", suffix: "+", decimals: 0 },
  { target: 99.7, label: "Success Rate", suffix: "%", decimals: 1 },
  { target: 160, label: "Countries Supported", suffix: "+", decimals: 0 },
  { target: 70, label: "Companies That Trust Us", suffix: "+", decimals: 0 },
] as const;

function useCountUp(
  target: number,
  start: boolean,
  decimals = 0,
  duration = 1300,
) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frameId = 0;
    const startTs = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTs) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const scaled = target * eased;
      const precision = Math.pow(10, decimals);
      setValue(Math.round(scaled * precision) / precision);
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [duration, start, target]);

  return value;
}

function StatCard({
  target,
  label,
  suffix,
  decimals,
  start,
}: {
  target: number;
  label: string;
  suffix: string;
  decimals: number;
  start: boolean;
}) {
  const current = useCountUp(target, start, decimals);
  const display = useMemo(
    () =>
      `${current.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}${suffix}`,
    [current, decimals, suffix],
  );

  return (
    <article className="about-stat-card box-border max-w-full rounded-2xl border border-[#0B1F2D1A] bg-[#F8FBFF] p-4 text-center sm:p-6">
      <div className="font-['Darker_Grotesque'] text-[32px] font-bold leading-[1.15] text-[#2899E6] sm:text-[52px] sm:leading-[110%]">
        {display}
      </div>
      <div className="mt-2 font-['Plus_Jakarta_Sans'] text-[14px] leading-[1.45] text-[#0B1F2DCC] sm:text-[16px] sm:leading-[145%]">
        {label}
      </div>
    </article>
  );
}

export function AboutStatsCounters() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          setStart(true);
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="about-stats-grid mt-5 grid min-w-0 grid-cols-2 gap-3 sm:mt-10 sm:grid-cols-4 sm:gap-5">
      {STATS.map((s, idx) => (
        <StatCard
          key={`${s.label}-${idx}`}
          target={s.target}
          label={s.label}
          suffix={s.suffix}
          decimals={s.decimals}
          start={start}
        />
      ))}
    </div>
  );
}

