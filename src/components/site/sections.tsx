import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { clients, differentiators, packages, processSteps, testimonials } from "@/data/site";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { insights } from "@/data/insights";
import { cn } from "@/lib/utils";
import { ActionLink, TextLink } from "./ActionLink";
import { Eyebrow, Pink, SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

/* ---------------- Logo marquee ---------------- */

export function LogoMarquee() {
  const row = [...clients, ...clients];
  return (
    <section aria-labelledby="clients-heading" className="border-y border-border bg-card py-12 md:py-16">
      <div className="shell">
        <h2 id="clients-heading" className="eyebrow text-muted-foreground">
          Built for ambitious brands.
        </h2>
      </div>
      <div className="mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track items-center gap-14 md:gap-24">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 text-lg font-extrabold tracking-[-0.02em] text-foreground/35 transition-colors hover:text-primary md:text-2xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Positioning ---------------- */

export function Positioning() {
  return (
    <section className="section-y">
      <div className="shell grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-xl mt-8">
              We build brands people <Pink>notice</Pink> and digital experiences that turn attention
              into <Pink>growth</Pink>.
            </h2>
          </Reveal>
        </div>
        <div className="flex flex-col justify-end gap-8 md:col-span-4 md:col-start-9">
          <Reveal delay={140}>
            <p className="lead">
              The Pink Digital brings strategy, design, technology and growth marketing together
              under one roof.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <TextLink to="/about">Meet The Pink Digital</TextLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services accordion ---------------- */

export function ServiceAccordion() {
  const [open, setOpen] = useState<string | null>(services[0]?.slug ?? null);

  return (
    <section className="section-y border-t border-border">
      <div className="shell">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              Everything your brand needs to <Pink>move forward.</Pink>
            </>
          }
          intro="Six disciplines, one team. Engage a single service or the whole picture."
        />

        <div className="mt-14 border-t border-border">
          {services.map((service, i) => {
            const isOpen = open === service.slug;
            return (
              <Reveal key={service.slug} delay={i * 50}>
                <div className="border-b border-border">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : service.slug)}
                      aria-expanded={isOpen}
                      className="group flex w-full items-center gap-5 py-7 text-left transition-colors hover:text-primary md:gap-10 md:py-9"
                    >
                      <span
                        className={cn(
                          "eyebrow shrink-0 transition-colors",
                          isOpen ? "text-primary" : "text-muted-foreground",
                        )}
                      >
                        {service.n}
                      </span>
                      <span
                        className={cn(
                          "display-lg flex-1 uppercase transition-colors",
                          isOpen && "text-primary",
                        )}
                      >
                        {service.title}
                      </span>
                      <span
                        aria-hidden
                        className={cn(
                          "shrink-0 text-2xl transition-transform duration-500 md:text-3xl",
                          isOpen ? "rotate-45 text-primary" : "group-hover:rotate-90",
                        )}
                      >
                        +
                      </span>
                    </button>
                  </h3>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="min-h-0">
                      <div className="grid gap-8 pb-10 md:grid-cols-12 md:pl-[calc(2.5rem+2ch)]">
                        <p className="lead md:col-span-6">{service.summary}</p>
                        <ul className="grid gap-2 text-sm font-semibold md:col-span-4">
                          {service.items.map((item) => (
                            <li key={item} className="flex items-center gap-3">
                              <span aria-hidden className="h-1 w-1 shrink-0 bg-primary" />
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="md:col-span-2">
                          <TextLink to={`/services/${service.slug}`}>Detail</TextLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Project showcase ---------------- */

export function ProjectShowcase({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="mt-16 grid gap-16 md:gap-24">
      {list.map((project, i) => (
        <Reveal key={project.slug}>
          <Link
            to="/work/$slug"
            params={{ slug: project.slug }}
            className={cn(
              "group grid items-center gap-8 md:grid-cols-12",
              i % 2 === 1 && "md:[&>figure]:order-2",
            )}
          >
            <figure className="overflow-hidden rounded-lg bg-card md:col-span-8">
              <img
                src={project.heroImage}
                alt={project.heroAlt}
                loading={i === 0 ? "eager" : "lazy"}
                width={1440}
                height={1088}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
            </figure>
            <div className="md:col-span-4">
              <p className="eyebrow text-muted-foreground">
                {project.industry} · {project.year}
              </p>
              <h3 className="display-lg mt-4 transition-all duration-500 group-hover:translate-x-2 group-hover:text-primary">
                {project.title}
              </h3>
              <p className="mt-4 text-sm font-medium text-muted-foreground">
                {project.services.join(" · ")}
              </p>
              <p className="display-md mt-6 text-primary">{project.result}</p>
              <span className="eyebrow mt-8 inline-flex items-center gap-2 text-foreground">
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
        </Reveal>
      ))}
    </div>
  );
}

export function SelectedWork() {
  return (
    <section className="section-y border-t border-border">
      <div className="shell">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Some things we've <Pink>made happen.</Pink>
            </>
          }
          aside={<TextLink to="/work">View all work</TextLink>}
        />
        <ProjectShowcase limit={4} />
      </div>
    </section>
  );
}

/* ---------------- Why (dark) ---------------- */

export function WhyPink() {
  return (
    <section className="bg-ink text-ink-foreground">
      <div className="shell section-y">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow className="text-ink-foreground/60">Why the pink digital</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display-xl mt-8">
                Pretty isn't the strategy.
                <br />
                <Pink>Growth is.</Pink>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140} className="flex items-end md:col-span-4 md:col-start-9">
            <p className="lead text-ink-foreground/70">
              Great creative gets attention. Great strategy turns that attention into something
              valuable. We bring both together.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid border-t border-ink-foreground/15 md:grid-cols-2">
          {differentiators.map((d, i) => (
            <Reveal
              key={d.title}
              delay={i * 70}
              className={cn(
                "border-b border-ink-foreground/15 py-10 md:py-14",
                i % 2 === 0 ? "md:pr-14" : "md:border-l md:pl-14",
              )}
            >
              <p className="eyebrow text-primary">0{i + 1}</p>
              <h3 className="display-md mt-5">{d.title}</h3>
              <p className="mt-4 max-w-md text-base font-medium text-ink-foreground/65">{d.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */

export function ProcessTimeline() {
  return (
    <section className="section-y">
      <div className="shell">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              Less chaos.
              <br />
              <Pink>More clarity.</Pink>
            </>
          }
          intro="A process built to keep momentum without endless meetings."
        />
        <ol className="mt-16 grid gap-px border-t border-border md:grid-cols-5 md:border-t-0">
          {processSteps.map((step, i) => (
            <Reveal
              as="li"
              key={step.n}
              delay={i * 80}
              className="group border-b border-border py-8 md:border-b-0 md:border-t md:py-0 md:pt-8"
            >
              <div className="md:pr-6">
                <div className="flex items-center gap-4 md:block">
                  <span className="display-md text-primary">{step.n}</span>
                  <h3 className="eyebrow md:mt-6">{step.title}</h3>
                </div>
                <p className="mt-4 max-w-xs text-sm font-medium leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
                <span
                  aria-hidden
                  className="mt-6 hidden h-[2px] w-0 bg-primary transition-all duration-700 group-hover:w-full md:block"
                />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Packages ---------------- */

export function PackageRows() {
  return (
    <section className="section-y border-t border-border bg-card">
      <div className="shell">
        <SectionHeading
          eyebrow="Ways to work with us"
          title={
            <>
              Choose your <Pink>starting point.</Pink>
            </>
          }
          intro="Fixed scopes or ongoing partnership. Pricing is shaped around the work, not a tier list."
        />
        <div className="mt-14 border-t border-border">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 60}>
              <article className="group grid gap-6 border-b border-border py-10 md:grid-cols-12 md:items-center md:gap-10 md:py-12">
                <div className="md:col-span-4">
                  <h3 className="display-md uppercase transition-colors group-hover:text-primary">
                    {pkg.name}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-muted-foreground">{pkg.blurb}</p>
                </div>
                <ul className="flex flex-wrap gap-2 md:col-span-5">
                  {pkg.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-6 md:col-span-3 md:justify-end">
                  <span className="eyebrow text-muted-foreground">Let's talk.</span>
                  <ActionLink to="/contact" variant="secondary">
                    Explore
                  </ActionLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */

export function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index] ?? testimonials[0]!;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 8000);
    return () => clearInterval(id);
  }, []);

  return (
    <section aria-label="Client testimonials" className="section-y">
      <div className="shell">
        <Reveal>
          <Eyebrow>Clients</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <blockquote key={index} className="mt-10 max-w-5xl animate-in fade-in duration-700">
            <p className="display-lg">
              <span className="text-primary">"</span>
              {active.quote}
              <span className="text-primary">"</span>
            </p>
            <footer className="mt-8 text-sm font-bold uppercase tracking-[0.14em]">
              {active.name}
              <span className="ml-3 font-medium normal-case tracking-normal text-muted-foreground">
                {active.role}
              </span>
            </footer>
          </blockquote>
        </Reveal>
        <div className="mt-12 flex gap-3">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={i === index}
              className={cn(
                "h-[3px] w-12 transition-colors",
                i === index ? "bg-primary" : "bg-foreground/15 hover:bg-foreground/40",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Global presence ---------------- */

const DOTS = 240;

export function GlobalPresence() {
  return (
    <section className="section-y border-t border-border">
      <div className="shell grid gap-12 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>US · Canada · UK</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-xl mt-8">
              Big ideas don't care about <Pink>borders.</Pink>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead mt-8 max-w-md">
              We work remotely with ambitious businesses across the United States, Canada and United
              Kingdom.
            </p>
          </Reveal>
        </div>
        <Reveal delay={200} className="md:col-span-6 md:col-start-7">
          <div
            aria-hidden
            className="grid grid-cols-[repeat(20,1fr)] gap-2 rounded-lg border border-border bg-card p-6"
          >
            {Array.from({ length: DOTS }).map((_, i) => {
              const highlight = [24, 25, 26, 44, 45, 46, 64, 85, 86, 106, 107, 127].includes(i);
              return (
                <span
                  key={i}
                  className={cn(
                    "aspect-square rounded-full",
                    highlight ? "bg-primary" : "bg-foreground/12",
                  )}
                />
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Insights ---------------- */

export function InsightsGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className={cn(heading && "section-y border-t border-border")}>
      <div className={cn(heading && "shell")}>
        {heading ? (
          <SectionHeading
            eyebrow="Insights"
            title={
              <>
                Thinking, occasionally <Pink>out loud.</Pink>
              </>
            }
            aside={<TextLink to="/insights">All insights</TextLink>}
          />
        ) : null}
        <div className={cn("border-t border-border", heading ? "mt-14" : "mt-0")}>
          {insights.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <Link
                to="/insights/$slug"
                params={{ slug: post.slug }}
                className="group grid gap-4 border-b border-border py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-10"
              >
                <span className="eyebrow text-primary md:col-span-2">{post.category}</span>
                <div className="md:col-span-7">
                  <h3 className="display-md transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm font-medium text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground md:col-span-3 md:text-right">
                  {post.date} · {post.read}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

export function CTASection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="shell section-y">
        <Reveal>
          <h2 className="display-hero">
            GOT SOMETHING
            <br />
            GOOD IN MIND?
          </h2>
        </Reveal>
        <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal delay={80}>
            <p className="display-md max-w-md">Let's make it impossible to ignore.</p>
          </Reveal>
          <Reveal delay={140}>
            <ActionLink to="/contact" variant="dark" size="lg">
              Start a Project
            </ActionLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Page hero (inner pages) ---------------- */

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
}) {
  return (
    <header className="border-b border-border pb-16 pt-36 md:pb-24 md:pt-48">
      <div className="shell">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="display-xl mt-8 max-w-4xl">{title}</h1>
        </Reveal>
        {intro ? (
          <Reveal delay={140}>
            <p className="lead mt-8 max-w-2xl">{intro}</p>
          </Reveal>
        ) : null}
      </div>
    </header>
  );
}

export function MetricBlock({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid gap-10 border-y border-border py-12 md:grid-cols-3">
      {items.map((item, i) => (
        <Reveal key={item.label} delay={i * 80}>
          <p className="display-xl text-primary">{item.value}</p>
          <p className="eyebrow mt-4 text-muted-foreground">{item.label}</p>
        </Reveal>
      ))}
    </div>
  );
}
