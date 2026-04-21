"use client";

import { useEffect, useState } from "react";

const CARDS = [
  {
    letter: "E",
    title: "Employment Across Geographies",
    text: "We champion Employment Across Geographies by enabling businesses to hire, manage, and support global talent seamlessly. Through our expansive network and compliance-driven approach.",
  },
  {
    letter: "M",
    title: "Mobility Beyond Borders",
    text: "We simplify and enable global workforce movement through expert guidance, compliant frameworks, and tech-driven solutions that make mobility seamless.",
  },
  {
    letter: "G",
    title: "Global Expansion Support",
    text: "We help organizations grow across markets with confidence offering agile, compliant, and customized strategies that support long-term international success.",
  },
  {
    letter: "E",
    title: "Empowering Excellence",
    text: "We empower our clients through excellence in delivery combining precision, transparency, and proactive support to ensure measurable impact.",
  },
  {
    letter: "O",
    title: "Operational Effectiveness",
    text: "We optimize every aspect of service delivery from compliance to coordination ensuring efficiency, reliability, and consistency across global engagements.",
  },
] as const;

export function AboutCoreValuesScroller() {
  const [parallaxScroll, setParallaxScroll] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const sync = () => setParallaxScroll(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div
      className="about-cards-section"
      onMouseMove={
        parallaxScroll
          ? (e) => {
              const el = e.currentTarget;
              const rect = el.getBoundingClientRect();
              const mouseX = e.clientX - rect.left;
              const width = rect.width || 1;
              const scrollWidth = el.scrollWidth - width;
              el.scrollLeft = (mouseX / width) * scrollWidth;
            }
          : undefined
      }
    >
      <div className="about-cards-wrapper">
        {CARDS.map((card) => (
          <article key={`${card.letter}-${card.title}`} className="about-card">
            <div className="about-card-letter-plate">
              <span className="about-card-letter">{card.letter}</span>
            </div>
            {/* preserveAspectRatio none: on mobile the card is taller than the 600×440 viewBox; "meet" letterboxes the shape so it no longer aligns with content (looks like a second offset card). */}
            <svg viewBox="0 0 600 440" preserveAspectRatio="none" aria-hidden>
              <path d="M600 420C600 431.046 591.046 440 580 440H20C8.9543 440 0 431.046 0 420V92C0 80.9543 8.95431 72 20 72H52C63.0457 72 72 63.0457 72 52V20C72 8.95431 80.9543 0 92 0H580C591.046 0 600 8.95431 600 20V420Z" />
            </svg>
            <div className="about-card-content">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

