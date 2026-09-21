import { createFileRoute } from "@tanstack/react-router";
import { CTASection, InsightsGrid, PageHero } from "@/components/site/sections";

export const Route = createFileRoute("/insights/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Insights — The Pink Digital" },
      {
        name: "description",
        content:
          "Notes on brand, websites that convert, performance marketing and where AI actually belongs in a marketing stack.",
      },
      { property: "og:title", content: "Insights — The Pink Digital" },
      { property: "og:description", content: "Thinking, occasionally out loud." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsightsIndex,
});

function InsightsIndex() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Thinking, occasionally <span className="text-primary">out loud.</span>
          </>
        }
        intro="Short pieces on brand, digital and growth — written for people who have to make decisions."
      />
      <section className="section-y">
        <div className="shell">
          <InsightsGrid heading={false} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
