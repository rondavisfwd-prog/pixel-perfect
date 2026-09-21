import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getProject, projects } from "@/data/projects";
import { CTASection, MetricBlock } from "@/components/site/sections";
import { Eyebrow } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { TextLink } from "@/components/site/ActionLink";

export const Route = createFileRoute("/work/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} case study — The Pink Digital` },
          { name: "description", content: `${loaderData.headline} ${loaderData.result}.` },
          { property: "og:title", content: `${loaderData.title} — The Pink Digital` },
          { property: "og:description", content: loaderData.headline },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [],
  }),
  component: CaseStudy,
});

function Facts({ project }: { project: NonNullable<ReturnType<typeof getProject>> }) {
  const rows = [
    ["Client", project.title],
    ["Industry", project.industry],
    ["Services", project.services.join(" · ")],
    ["Year", project.year],
  ];
  return (
    <dl className="grid gap-8 sm:grid-cols-4">
      {rows.map(([label, value]) => (
        <div key={label}>
          <dt className="eyebrow text-muted-foreground">{label}</dt>
          <dd className="mt-3 text-base font-bold">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Block({ title, body }: { title: string; body: string }) {
  return (
    <Reveal className="grid gap-4 border-t border-border py-10 md:grid-cols-12 md:gap-10">
      <h2 className="eyebrow text-primary md:col-span-3">{title}</h2>
      <p className="text-lg font-medium leading-relaxed md:col-span-8">{body}</p>
    </Reveal>
  );
}

function CaseStudy() {
  const project = Route.useLoaderData();
  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length]!;

  return (
    <>
      <header className="pt-36 md:pt-48">
        <div className="shell">
          <Reveal>
            <Eyebrow>Case study</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-hero mt-8">{project.title}</h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead mt-8 max-w-2xl">{project.headline}</p>
          </Reveal>
        </div>
        <Reveal delay={200} className="mt-14">
          <img
            src={project.heroImage}
            alt={project.heroAlt}
            width={1440}
            height={1088}
            className="h-[46vh] w-full object-cover md:h-[72vh]"
          />
        </Reveal>
      </header>

      <section className="shell py-14 md:py-20">
        <Facts project={project} />
      </section>

      <section className="shell">
        <Block title="Challenge" body={project.challenge} />
        <Block title="Strategy" body={project.strategy} />
        <Block title="Creative direction" body={project.creative} />
        <Block title="Execution" body={project.execution} />
      </section>

      <section className="shell mt-8 grid gap-6 md:grid-cols-2">
        {project.gallery.map((image) => (
          <Reveal key={image.src}>
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              width={1440}
              height={1088}
              className="w-full rounded-lg object-cover"
            />
          </Reveal>
        ))}
      </section>

      <section className="shell mt-16 md:mt-24">
        <Eyebrow>Results</Eyebrow>
        <div className="mt-8">
          <MetricBlock items={project.results} />
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="shell section-y">
          <Reveal>
            <blockquote>
              <p className="display-lg max-w-4xl">
                <span className="text-primary">"</span>
                {project.testimonial.quote}
                <span className="text-primary">"</span>
              </p>
              <footer className="mt-8 text-sm font-bold uppercase tracking-[0.14em]">
                {project.testimonial.name}
                <span className="ml-3 font-medium normal-case tracking-normal text-ink-foreground/60">
                  {project.testimonial.role}
                </span>
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="shell">
          <Eyebrow>Next project</Eyebrow>
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="group mt-8 grid items-center gap-8 md:grid-cols-12"
          >
            <figure className="overflow-hidden rounded-lg md:col-span-7">
              <img
                src={next.heroImage}
                alt={next.heroAlt}
                loading="lazy"
                width={1440}
                height={1088}
                className="w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
              />
            </figure>
            <div className="md:col-span-5">
              <h2 className="display-lg transition-colors group-hover:text-primary">
                {next.title}
              </h2>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                {next.industry} · {next.year}
              </p>
              <span className="eyebrow mt-8 inline-flex items-center gap-2">
                View case study
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  ↗
                </span>
              </span>
            </div>
          </Link>
          <div className="mt-10">
            <TextLink to="/work">All work</TextLink>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
