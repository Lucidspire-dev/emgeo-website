import { Container } from "../../components/Container";

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

export default function BlogPage() {
  return (
    <main className="flex flex-col">
      <section className="bg-background">
        <Container className="py-14 sm:py-18">
          <SectionHeader
            kicker="Blog / News"
            title="News & Highlights"
            description="Latest updates are showcased on the homepage news section."
          />
        </Container>
      </section>
    </main>
  );
}

