import { createFileRoute } from "@tanstack/react-router";
import studio from "@/assets/studio.jpg";
import { CTASection, GlobalPresence, PageHero, TestimonialSlider } from "@/components/site/sections";
import { Eyebrow, Pink } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "About — The Pink Digital" },
      {
        name: "description",
        content:
          "The Pink Digital is a remote creative and growth agency working with ambitious brands across the US, Canada and UK. Here's how we think and how we work.",
      },
      { property: "og:title", content: "About — The Pink Digital" },
      {
        property: "og:description",
        content: "We're not interested in making more digital noise. We make work worth noticing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const beliefs = [
  ["Clarity beats cleverness.", "If it needs explaining twice, it isn't finished."],
  ["Taste is a business asset.", "Attention is expensive. Good work earns some of it back."],
  ["Numbers keep creative honest.", "We would rather be measured than admired."],
  ["Small teams, senior hands.", "The people in the pitch are the people doing the work."],
];

const team = [
  ["Creative Direction", "Art direction, identity, campaign thinking"],
  ["Strategy", "Positioning, research, growth planning"],
  ["Design & Web", "UX/UI, design systems, build"],
  ["Growth", "Paid media, SEO, conversion, analytics"],
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            We're not interested in making more digital noise.
          </>
        }
        intro="We're here to make work worth noticing."
      />

      <section className="shell section-y grid gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <Reveal>
            <h2 className="eyebrow text-primary">Our story</h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-8 space-y-6 text-lg font-medium leading-relaxed">
              <p>
                The Pink Digital started with a simple frustration: beautiful work that didn't sell
                anything, and performance work that looked like everybody else's.
              </p>
              <p>
                So we built a small studio where strategy, creative, web and growth sit at the same
                table. One team, one plan, one set of numbers to answer to.
              </p>
              <p>
                Today we work remotely with founders and marketing leads across the United States,
                Canada and the United Kingdom — brands ambitious enough to want both taste and
                traction.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={140} className="md:col-span-5 md:col-start-8">
          <img
            src={studio}
            alt="Brand collateral, colour swatches and a notebook laid out on a studio desk"
            loading="lazy"
            width={1440}
            height={1088}
            className="w-full rounded-lg object-cover"
          />
        </Reveal>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="shell section-y">
          <Reveal>
            <Eyebrow className="text-ink-foreground/60">Our approach</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display-xl mt-8 max-w-4xl">
              Good design gets attention. Good strategy knows <Pink>what to do with it.</Pink>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 border-t border-ink-foreground/15 pt-12 md:grid-cols-2">
            {beliefs.map(([title, body], i) => (
              <Reveal key={title} delay={i * 70}>
                <h3 className="display-md">{title}</h3>
                <p className="mt-3 max-w-md text-base font-medium text-ink-foreground/65">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="shell">
          <h2 className="eyebrow text-primary">Our team</h2>
          <p className="lead mt-6 max-w-2xl">
            A senior core team, extended by specialists when a project needs them.
          </p>
          <div className="mt-12 border-t border-border">
            {team.map(([role, detail], i) => (
              <Reveal key={role} delay={i * 60}>
                <div className="flex flex-col gap-2 border-b border-border py-7 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="display-md">{role}</h3>
                  <p className="text-sm font-medium text-muted-foreground">{detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSlider />
      <GlobalPresence />
      <CTASection />
    </>
  );
}
