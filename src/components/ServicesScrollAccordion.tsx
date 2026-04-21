"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const servicePanels = [
  {
    title: "Global Payroll Solutions",
    description:
      "Eliminate payroll complexity with Emgeo's global payroll services. We ensure accurate, compliant, multi-currency salary processing, automate taxes, and reduce payroll errors, enabling enterprises to focus on growth while we manage workforce payments seamlessly.",
    href: "/services/global-payroll-solutions",
  },
  {
    title: "Employer of Record (EoR)",
    description:
      "Expand globally without legal entities. Emgeo's Employer of Record solutions handle hiring, onboarding, compliance, and payroll, empowering enterprises to build international teams quickly, compliantly, and cost-effectively across 160+ countries.",
    href: "/services/employer-of-record",
  },
  {
    title: "Recruitment & Contractors",
    description:
      "Overcome talent shortages and project delays. Emgeo connects enterprises with pre-vetted global professionals and contractors, delivering skilled teams in weeks, ensuring flexibility, scalability, and alignment with critical business requirements worldwide.",
    href: "/services/recruitment-and-contractors",
  },
  {
    title: "Immigration and Compliance",
    description:
      "Simplify global mobility and compliance challenges. Emgeo provides expert visa support, work permits, immigration solutions, and ongoing compliance monitoring - ensuring organizations move talent seamlessly, stay compliant, and succeed in new markets.",
    href: "/services/immigration-and-compliance",
  },
  {
    title: "Relocation and Destination Services",
    description:
      "Expand globally without legal entities. Emgeo's Employer of Record solutions handle hiring, onboarding, compliance, and payroll, empowering enterprises to build international teams quickly, compliantly, and cost-effectively across 160+ countries.",
    href: "/services/relocation-and-destination-services",
  },
  {
    title: "Legalization and Attestation Support",
    description:
      "Expand globally without legal entities. Emgeo's Employer of Record solutions handle hiring, onboarding, compliance, and payroll, empowering enterprises to build international teams quickly, compliantly, and cost-effectively across 160+ countries.",
    href: "/services/legalization-and-attestation-support",
  },
];

export function ServicesScrollAccordion() {
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [manualIndex, setManualIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPoint = window.scrollY + window.innerHeight * 0.6;

      let nextActive = -1;
      panelRefs.current.forEach((panel, idx) => {
        if (!panel) return;
        const top = panel.offsetTop;
        const bottom = top + panel.offsetHeight;
        if (scrollPoint > top && scrollPoint < bottom) {
          nextActive = idx;
        }
      });

      if (manualIndex === null && nextActive !== -1) setActiveIndex(nextActive);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [manualIndex]);

  return (
    <div className="svc-accordion">
      {servicePanels.map((panel, idx) => (
        <div
          key={panel.title}
          ref={(el) => {
            panelRefs.current[idx] = el;
          }}
          className="svc-panel"
        >
          <button
            type="button"
            className="svc-panel-toggle"
            onClick={() => {
              if (manualIndex === idx) {
                setManualIndex(null);
              } else {
                setManualIndex(idx);
                setActiveIndex(idx);
              }
            }}
            aria-expanded={(manualIndex ?? activeIndex) === idx}
          >
            <h2 className="svc-panel-title">{panel.title}</h2>
          </button>

          <div
            className={`svc-panel-desc ${
              (manualIndex ?? activeIndex) === idx ? "is-visible" : ""
            }`}
          >
            <div className="svc-panel-row">
              <div className="svc-col">
                <p>{panel.description}</p>
                <Link href={panel.href} className="svc-view-btn">
                  <span className="svc-view-btn-text">View Details</span>
                  <span className="svc-view-btn-icon" aria-hidden>
                    →
                  </span>
                </Link>
              </div>

              <div className="svc-col">
                <Image
                  src="https://emgeo.lucidspire.com/wp-content/uploads/2025/11/Frame-2018776173.png"
                  alt={panel.title}
                  width={635}
                  height={367}
                  className="svc-panel-image"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

