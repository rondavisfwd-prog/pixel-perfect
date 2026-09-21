import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import {
  CTASection,
  GlobalPresence,
  InsightsGrid,
  LogoMarquee,
  PackageRows,
  Positioning,
  ProcessTimeline,
  SelectedWork,
  ServiceAccordion,
  TestimonialSlider,
  WhyPink,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "The Pink Digital — Digital looks better in pink." },
      {
        name: "description",
        content:
          "A digital agency for ambitious brands in the US, Canada and UK. Brand strategy, web design, social, performance marketing, creative and AI automation.",
      },
      { property: "og:title", content: "The Pink Digital — Digital looks better in pink." },
      {
        property: "og:description",
        content:
          "Strategy, creative and growth for ambitious brands ready to be noticed. US · Canada · UK.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <Positioning />
      <ServiceAccordion />
      <div id="work" className="scroll-mt-24">
        <SelectedWork />
      </div>
      <WhyPink />
      <ProcessTimeline />
      <PackageRows />
      <TestimonialSlider />
      <GlobalPresence />
      <InsightsGrid />
      <CTASection />
    </>
  );
}
