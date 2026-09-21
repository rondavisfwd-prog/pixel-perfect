import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/sections";

export const Route = createFileRoute("/privacy")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Privacy Policy — The Pink Digital" },
      {
        name: "description",
        content:
          "How The Pink Digital collects, uses and protects information submitted through this website.",
      },
      { property: "og:title", content: "Privacy Policy — The Pink Digital" },
      { property: "og:description", content: "How we handle your information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

const sections = [
  [
    "What we collect",
    "When you submit the project enquiry form we collect the details you provide: name, work email, company, website, country, industry, the services you're interested in, budget range, timeline and your message.",
  ],
  [
    "How we use it",
    "Only to respond to your enquiry, prepare a proposal and keep a record of our conversation. We don't sell or rent your information.",
  ],
  [
    "Analytics",
    "This site can be configured to use privacy-conscious analytics and advertising measurement tools. Tracking identifiers are supplied through environment configuration and are not active unless set.",
  ],
  [
    "Retention",
    "Enquiry details are kept for as long as needed to serve the relationship, then removed on request.",
  ],
  [
    "Your rights",
    "You can ask us what we hold, request a correction, or ask us to delete it. Email hello@thepinkdigital.com and we'll action it.",
  ],
];

function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        intro="Plain-language summary of how we handle information. Last updated August 2026."
      />
      <div className="shell py-16 md:py-24">
        <div className="max-w-3xl space-y-12">
          {sections.map(([title, body]) => (
            <section key={title}>
              <h2 className="display-md">{title}</h2>
              <p className="mt-4 text-lg font-medium leading-relaxed text-muted-foreground">
                {body}
              </p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
