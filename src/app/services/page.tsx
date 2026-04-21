import Link from "next/link";
import { Container } from "../../components/Container";
import { services } from "../../lib/services";

function SectionHeader({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {kicker ? (
        <div className="text-sm font-semibold tracking-wide text-foreground/70">
          {kicker}
        </div>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-6 text-foreground/70 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="services-index-page flex flex-col">
      <section className="bg-background">
        <Container className="py-14 sm:py-18">
          <SectionHeader
            kicker="Services"
            title="Everything you need to support global mobility"
            description="Choose a service below to see details."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-2xl border border-black/10 bg-background p-6 hover:border-black/20"
              >
                <div className="text-base font-semibold">{s.title}</div>
                <p className="mt-2 text-sm leading-6 text-foreground/70">
                  {s.shortDescription}
                </p>
                <div className="mt-4 text-sm font-semibold text-foreground/80">
                  View Details →
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

