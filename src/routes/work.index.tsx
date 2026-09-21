import { createFileRoute } from "@tanstack/react-router";
import { CTASection, PageHero, ProjectShowcase } from "@/components/site/sections";

export const Route = createFileRoute("/work/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Work — The Pink Digital" },
      {
        name: "description",
        content:
          "Selected case studies from The Pink Digital: brand, web, social, creative and growth work for brands in the US, Canada and UK.",
      },
      { property: "og:title", content: "Work — The Pink Digital" },
      {
        property: "og:description",
        content: "Case studies in brand, web, social, creative and performance marketing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Some things we've <span className="text-primary">made happen.</span>
          </>
        }
        intro="A short list of projects where strategy, design and growth pulled in the same direction."
      />
      <section className="section-y">
        <div className="shell">
          <h2 className="eyebrow text-primary">Case studies</h2>
          <div className="mt-10">
            <ProjectShowcase />
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
