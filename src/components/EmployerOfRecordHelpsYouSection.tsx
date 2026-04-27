import { ServiceHelpsYouSection } from "./ServiceHelpsYouSection";

export function EmployerOfRecordHelpsYouSection() {
  const cards = [
    {
      title: "Accelerates Global Expansion",
      description:
        "Enables rapid market entry and project execution without delays caused by entity incorporation or local registrations.",
      iconSrc:
        "https://emgeo.lucidspire.com/wp-content/uploads/2026/02/Screenshot-from-2026-02-27-16-49-54.png",
    },
    {
      title: "Maintains Business Control",
      description:
        "Clients retain complete authority over roles, deliverables, and performance management while Emgeo handles compliance.",
      iconSrc:
        "https://emgeo.lucidspire.com/wp-content/uploads/2026/02/Screenshot-from-2026-02-27-17-47-13.png",
    },
    {
      title: "Provides Workforce Flexibility",
      description:
        "Allows organizations to scale headcount up or down based on business needs and project timelines.",
      iconSrc:
        "https://emgeo.lucidspire.com/wp-content/uploads/2026/02/Screenshot-from-2026-02-27-18-40-09.png",
    },
    {
      title: "Reduces Operational & Capital Costs",
      description:
        "Avoids long-term investment in foreign infrastructure, legal entities, and administrative overheads.",
      iconSrc:
        "https://emgeo.lucidspire.com/wp-content/uploads/2026/02/Screenshot-from-2026-02-27-18-53-46.png",
    },
    {
      title: "Eliminates Legal and Compliance Risk",
      description:
        "Ensures full adherence to labour laws, tax regulations, and statutory obligations across jurisdictions.",
      iconSrc:
        "https://emgeo.lucidspire.com/wp-content/uploads/2026/02/Screenshot-from-2026-02-27-18-54-44.png",
    },
  ] as const;

  return (
    <ServiceHelpsYouSection id="eor-helps-heading" cards={cards} className="-mt-2" />
  );
}
