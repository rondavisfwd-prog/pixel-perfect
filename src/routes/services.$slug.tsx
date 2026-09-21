import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { CTASection, PageHero } from "@/components/site/sections";
import { Eyebrow } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/services/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — The Pink Digital` },
          { name: "description", content: loaderData.summary },
          { property: "og:title", content: `${loaderData.title} — The Pink Digital` },
          { property: "og:description", content: loaderData.summary },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [],
  }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();
  const related = projects.filter((p) =>
    p.services.some((s) => s.toLowerCase().startsWith(service.title.toLowerCase().slice(0, 4))),
  );

  return (
    <>
      <PageHero
        eyebrow={`Service ${service.n}`}
        title={
          <>
            {service.title}
            <span className="text-primary">.</span>
          </>
        }
        intro={service.summary}
      />

      <section className="shell section-y grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <h2 className="eyebrow text-primary">What it is</h2>
            <p className="mt-5 text-xl font-medium leading-relaxed">{service.what}</p>
          </Reveal>
          <Reveal delay={80} className="mt-14">
            <h2 className="eyebrow text-primary">Who it's for</h2>
            <p className="mt-5 text-xl font-medium leading-relaxed">{service.who}</p>
          </Reveal>
        </div>
        <div className="md:col-span-4 md:col-start-9">
          <Reveal delay={120}>
            <h2 className="eyebrow text-muted-foreground">What we do</h2>
            <ul className="mt-5 space-y-3 text-base font-bold">
              {service.items.map((item) => (
                <li key={item} className="border-b border-border pb-3">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={180} className="mt-12">
            <h2 className="eyebrow text-muted-foreground">Typical deliverables</h2>
            <ul className="mt-5 space-y-2 text-sm font-medium text-muted-foreground">
              {service.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {related.length > 0 ? (
        <section className="section-y border-t border-border">
          <div className="shell">
            <Eyebrow>Relevant case studies</Eyebrow>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {related.slice(0, 2).map((project) => (
                <Reveal key={project.slug}>
                  <Link
                    to="/work/$slug"
                    params={{ slug: project.slug }}
                    className="group block overflow-hidden rounded-lg"
                  >
                    <img
                      src={project.heroImage}
                      alt={project.heroAlt}
                      loading="lazy"
                      width={1440}
                      height={1088}
                      className="w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
                    />
                    <h3 className="display-md mt-6 transition-colors group-hover:text-primary">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-muted-foreground">
                      {project.industry} — {project.result}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section-y border-t border-border">
        <div className="shell">
          <Eyebrow>All services</Eyebrow>
          <div className="mt-8 flex flex-wrap gap-3">
            {services
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="rounded-md border border-border px-4 py-2 text-sm font-bold uppercase tracking-[0.1em] transition-colors hover:border-primary hover:text-primary"
                >
                  {s.title}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
