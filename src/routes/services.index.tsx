import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { CTASection, PageHero, ProcessTimeline } from "@/components/site/sections";
import { Reveal } from "@/components/site/Reveal";
import { TextLink } from "@/components/site/ActionLink";

export const Route = createFileRoute("/services/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Services — The Pink Digital" },
      {
        name: "description",
        content:
          "Brand strategy, web design and development, social, performance marketing, creative production and AI automation from one connected team.",
      },
      { property: "og:title", content: "Services — The Pink Digital" },
      {
        property: "og:description",
        content: "One agency. The whole digital picture. Brand, web, social, growth, creative, AI.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            One agency.
            <br />
            <span className="text-primary">The whole digital picture.</span>
          </>
        }
        intro="Six disciplines that work better together than they ever do apart."
      />

      <section className="section-y">
        <div className="shell border-t border-border">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 50}>
              <article className="grid gap-8 border-b border-border py-12 md:grid-cols-12 md:gap-10 md:py-16">
                <div className="md:col-span-4">
                  <p className="eyebrow text-primary">{service.n}</p>
                  <h2 className="display-lg mt-5 uppercase">{service.title}</h2>
                  <p className="mt-5 max-w-sm text-sm font-medium text-muted-foreground">
                    {service.summary}
                  </p>
                  <div className="mt-8">
                    <TextLink to={`/services/${service.slug}`}>
                      Explore {service.title}
                    </TextLink>
                  </div>
                </div>
                <div className="grid gap-8 md:col-span-8 md:grid-cols-2">
                  <div>
                    <h3 className="eyebrow text-muted-foreground">What we do</h3>
                    <ul className="mt-4 space-y-2 text-sm font-semibold">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <span aria-hidden className="h-1 w-1 bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="eyebrow text-muted-foreground">Typical deliverables</h3>
                    <ul className="mt-4 space-y-2 text-sm font-medium text-muted-foreground">
                      {service.deliverables.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ProcessTimeline />
      <CTASection />
    </>
  );
}
