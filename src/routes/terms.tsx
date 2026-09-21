import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/sections";

export const Route = createFileRoute("/terms")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Terms — The Pink Digital" },
      {
        name: "description",
        content: "Terms covering use of The Pink Digital website and the content published on it.",
      },
      { property: "og:title", content: "Terms — The Pink Digital" },
      { property: "og:description", content: "Website terms of use." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terms,
});

const sections = [
  [
    "Using this site",
    "You're welcome to browse, share and quote this site with attribution. Please don't republish whole pages or present our work as your own.",
  ],
  [
    "Our work",
    "Case study figures shown here are representative placeholders until client-approved results are published. Project work remains the property of the client, and identity systems shown are used with permission.",
  ],
  [
    "Enquiries",
    "Submitting the enquiry form doesn't create a contract. Scope, timelines and fees are agreed in a separate written proposal.",
  ],
  [
    "Liability",
    "This site is provided as-is. We take care with what we publish, but nothing here is professional advice specific to your business.",
  ],
  [
    "Questions",
    "Email hello@thepinkdigital.com and a human will reply.",
  ],
];

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms"
        intro="The short version. Last updated August 2026."
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
