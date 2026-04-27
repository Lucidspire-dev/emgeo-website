"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { Container } from "./Container";
import { services } from "../lib/services";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  /** null = default highlight first item; number = which row matches the “active” blue style */
  const [servicesMenuActiveIndex, setServicesMenuActiveIndex] = useState<
    number | null
  >(null);
  const servicesHoverTimeoutRef = useRef<number | null>(null);

  const servicesMenuHighlightIndex = servicesMenuActiveIndex ?? 0;

  const clearServicesHoverTimeout = () => {
    if (servicesHoverTimeoutRef.current) {
      window.clearTimeout(servicesHoverTimeoutRef.current);
      servicesHoverTimeoutRef.current = null;
    }
  };

  const items = useMemo(
    () => [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Blog", href: "/blog" },
    ],
    [],
  );

  const submenuServices = useMemo(() => {
    const slugsInOrder = [
      "employer-of-record",
      "immigration-and-compliance",
      "global-payroll-solutions",
      "recruitment-and-contractors",
      "legalization-and-attestation-support",
      "relocation-and-destination-services",
    ];

    const bySlug = new Map(services.map((s) => [s.slug, s]));
    return slugsInOrder
      .map((slug) => bySlug.get(slug))
      .filter((s): s is (typeof services)[number] => Boolean(s));
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-black/10">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex items-center"
            aria-label="Emgeo Global"
          >
            <Image
              src="/images/emgeo-logo.png"
              alt="Emgeo Global"
              width={230}
              height={72}
              className="h-10 w-auto sm:h-12"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            <Link
              href={items[0].href}
              className="font-['Plus_Jakarta_Sans'] text-base font-bold text-foreground/80 hover:text-foreground"
            >
              {items[0].label}
            </Link>

            <div className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen(true)}
                className="inline-flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-base font-bold text-foreground/80 hover:text-foreground"
                aria-expanded={servicesOpen}
                onMouseEnter={() => {
                  clearServicesHoverTimeout();
                  setServicesOpen(true);
                }}
                onMouseLeave={() => {
                  clearServicesHoverTimeout();
                  servicesHoverTimeoutRef.current = window.setTimeout(() => {
                    setServicesOpen(false);
                    setServicesMenuActiveIndex(null);
                  }, 120);
                }}
              >
                Services
              </button>

              {servicesOpen ? (
                <div
                  className="services-submenu-panel absolute left-0 z-50 mt-2 w-[min(100vw-2rem,380px)] overflow-hidden rounded border border-black/[0.08] bg-white shadow-[0_12px_40px_rgba(15,61,92,0.14)]"
                  onMouseEnter={() => {
                    clearServicesHoverTimeout();
                    setServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    clearServicesHoverTimeout();
                    setServicesMenuActiveIndex(null);
                    setServicesOpen(false);
                  }}
                >
                  <ul
                    className="m-0 list-none p-0"
                    onMouseLeave={() => setServicesMenuActiveIndex(null)}
                  >
                    {submenuServices.map((s, i) => {
                      const isActive = i === servicesMenuHighlightIndex;
                      return (
                        <li key={s.slug} className="m-0 p-0">
                          <Link
                            href={`/services/${s.slug}`}
                            onMouseEnter={() => setServicesMenuActiveIndex(i)}
                            onClick={() => {
                              setServicesOpen(false);
                              setServicesMenuActiveIndex(null);
                            }}
                            className={`flex items-center px-5 py-3.5 font-['Plus_Jakarta_Sans'] text-[17px] font-medium leading-[130%] no-underline transition-colors ${
                              isActive
                                ? "bg-[#2899E6] text-white hover:bg-[#1f82d4]"
                                : "text-[#101010] hover:bg-[#2899E6] hover:text-white"
                            }`}
                          >
                            {s.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </div>

            <Link
              href={items[1].href}
              className="font-['Plus_Jakarta_Sans'] text-base font-bold text-foreground/80 hover:text-foreground"
            >
              {items[1].label}
            </Link>

            <Link
              href={items[2].href}
              className="font-['Plus_Jakarta_Sans'] text-base font-bold text-foreground/80 hover:text-foreground"
            >
              {items[2].label}
            </Link>

            <Link
              href="/contact"
              className="flex h-[44px] w-[150px] items-center justify-between gap-2 rounded-[28px] bg-[#0F3D5C] py-1 pl-6 pr-1 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b2f48] hover:shadow-lg"
            >
              <span className="whitespace-nowrap font-['Darker_Grotesque'] text-[18px] leading-[130%] font-bold">
                Contact Us
              </span>
              <span className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white">
                <span
                  aria-hidden
                  className="text-[16px] font-semibold leading-none text-[#0F3D5C]"
                >
                  →
                </span>
              </span>
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-black/10 p-2.5 text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className="sr-only">Menu</span>
            <div className="h-6 w-6">
              <div
                className={`h-[3px] w-full rounded-full bg-current transition-transform ${
                  open ? "translate-y-[10px] rotate-45" : "-translate-y-0.5"
                }`}
              />
              <div
                className={`mt-1.5 h-[3px] w-full rounded-full bg-current transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <div
                className={`mt-1.5 h-[3px] w-full rounded-full bg-current transition-transform ${
                  open ? "-translate-y-[10px] -rotate-45" : "translate-y-0"
                }`}
              />
            </div>
          </button>
        </div>

        {open ? (
          <div className="mt-5 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link
                href={items[0].href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-black/10 bg-background px-5 py-4 font-['Plus_Jakarta_Sans'] text-lg font-bold text-foreground hover:text-foreground"
              >
                {items[0].label}
              </Link>

              <div className="rounded-xl border border-black/10 bg-background px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-['Plus_Jakarta_Sans'] text-lg font-bold text-foreground">
                    Services
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setServicesOpen((v) => !v);
                      setServicesMenuActiveIndex(null);
                    }}
                    className="shrink-0 font-['Plus_Jakarta_Sans'] text-sm font-bold text-foreground/70 hover:text-foreground"
                    aria-expanded={servicesOpen}
                  >
                    {servicesOpen ? "Hide" : "Show"}
                  </button>
                </div>
                {servicesOpen ? (
                  <ul
                    className="mt-4 m-0 list-none overflow-hidden rounded-lg border border-black/[0.08] bg-white p-0 shadow-sm"
                    onMouseLeave={() => setServicesMenuActiveIndex(null)}
                  >
                    {submenuServices.map((s, i) => {
                      const isActive = i === servicesMenuHighlightIndex;
                      return (
                        <li key={s.slug} className="m-0 p-0">
                          <Link
                            href={`/services/${s.slug}`}
                            onMouseEnter={() => setServicesMenuActiveIndex(i)}
                            onClick={() => {
                              setOpen(false);
                              setServicesOpen(false);
                              setServicesMenuActiveIndex(null);
                            }}
                            className={`flex items-center px-4 py-4 font-['Plus_Jakarta_Sans'] text-base font-medium leading-[130%] no-underline transition-colors ${
                              isActive
                                ? "bg-[#2899E6] text-white hover:bg-[#1f82d4]"
                                : "text-[#101010] hover:bg-[#2899E6] hover:text-white"
                            }`}
                          >
                            {s.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </div>

              <Link
                href={items[1].href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-black/10 bg-background px-5 py-4 font-['Plus_Jakarta_Sans'] text-lg font-bold text-foreground hover:text-foreground"
              >
                {items[1].label}
              </Link>

              <Link
                href={items[2].href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-black/10 bg-background px-5 py-4 font-['Plus_Jakarta_Sans'] text-lg font-bold text-foreground hover:text-foreground"
              >
                {items[2].label}
              </Link>

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="flex h-[50px] w-[min(100%,11rem)] self-center items-center justify-between gap-2 rounded-[28px] bg-[#0F3D5C] py-1 pl-6 pr-1 text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b2f48] hover:shadow-lg"
              >
                <span className="whitespace-nowrap font-['Darker_Grotesque'] text-[19px] leading-[130%] font-bold">
                  Contact Us
                </span>
                <span className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-white">
                  <span
                    aria-hidden
                    className="text-[17px] font-semibold leading-none text-[#0F3D5C]"
                  >
                    →
                  </span>
                </span>
              </Link>
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
}

