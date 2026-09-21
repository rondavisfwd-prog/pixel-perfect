import lume from "@/assets/work-lume.jpg";
import northbank from "@/assets/work-northbank.jpg";
import atelier from "@/assets/work-atelier.jpg";
import kinetic from "@/assets/work-kinetic.jpg";
import studio from "@/assets/studio.jpg";
import sphere from "@/assets/abstract-sphere.jpg";

export type Project = {
  title: string;
  slug: string;
  industry: string;
  services: string[];
  year: string;
  headline: string;
  result: string;
  heroImage: string;
  heroAlt: string;
  gallery: { src: string; alt: string }[];
  challenge: string;
  strategy: string;
  creative: string;
  execution: string;
  results: { value: string; label: string }[];
  testimonial: { quote: string; name: string; role: string };
};

export const projects: Project[] = [
  {
    title: "LUMÉ",
    slug: "lume",
    industry: "Beauty / E-commerce",
    services: ["Brand", "Web", "Growth"],
    year: "2026",
    headline: "A skincare label rebuilt around one clear promise.",
    result: "+184% conversion rate",
    heroImage: lume,
    heroAlt: "Minimal LUMÉ skincare bottles on a warm plaster surface with a pink cast shadow",
    gallery: [
      { src: sphere, alt: "Abstract pink sphere used across LUMÉ campaign art direction" },
      { src: studio, alt: "LUMÉ brand collateral and colour swatches laid out on a studio desk" },
    ],
    challenge:
      "Strong products, crowded category. LUMÉ had loyal customers but a store that explained everything and convinced no one.",
    strategy:
      "We narrowed the range story to a single promise, rebuilt the product hierarchy around routines instead of ingredients, and rewrote the buying journey to answer objections in order.",
    creative:
      "A quieter, more confident identity: editorial typography, warm neutral photography and pink used only where we wanted a decision to happen.",
    execution:
      "New identity system, a rebuilt storefront with routine-led navigation, refreshed PDP content, and a paid social programme with creative built per objection.",
    results: [
      { value: "184%", label: "Increase in conversion" },
      { value: "3.2X", label: "Return on ad spend" },
      { value: "42%", label: "Decrease in acquisition cost" },
    ],
    testimonial: {
      quote:
        "The Pink Digital didn't just redesign our brand. They completely changed how customers experience our business.",
      name: "Elise Moreau",
      role: "Founder, LUMÉ",
    },
  },
  {
    title: "NORTHBANK",
    slug: "northbank",
    industry: "Property / Development",
    services: ["Brand", "Web", "Creative"],
    year: "2025",
    headline: "A development brand that sells the space, not the spec sheet.",
    result: "+61% qualified enquiries",
    heroImage: northbank,
    heroAlt: "Minimal concrete and warm white interior with a single hot pink chair",
    gallery: [
      { src: atelier, alt: "Pink and black fabric study from the Northbank campaign" },
      { src: studio, alt: "Northbank print collateral photographed from above" },
    ],
    challenge:
      "Northbank had beautiful buildings and marketing that read like planning documents.",
    strategy:
      "We repositioned around how the spaces feel to live in, and rebuilt the enquiry journey so sales received context, not just email addresses.",
    creative:
      "Architectural photography, generous whitespace, one accent colour and typography confident enough to stand alone.",
    execution:
      "Brand refresh, a new development site with per-building pages, a qualified enquiry flow and a launch campaign across paid and print.",
    results: [
      { value: "61%", label: "More qualified enquiries" },
      { value: "2.4X", label: "Time on site" },
      { value: "38%", label: "Faster sales response" },
    ],
    testimonial: {
      quote:
        "We came for a website. We left with a growth engine, a clearer story and a team that actually understands numbers.",
      name: "Daniel Whitfield",
      role: "Managing Director, Northbank",
    },
  },
  {
    title: "ATELIER 9",
    slug: "atelier-9",
    industry: "Fashion / Retail",
    services: ["Brand", "Social", "Creative"],
    year: "2025",
    headline: "Nine years of archive turned into a living content engine.",
    result: "+310% social reach",
    heroImage: atelier,
    heroAlt: "Close-up of pink and black satin folds shot as a fashion editorial texture",
    gallery: [
      { src: lume, alt: "Atelier 9 product styling study" },
      { src: sphere, alt: "Abstract pink form used in Atelier 9 seasonal campaign" },
    ],
    challenge:
      "A respected label with a decade of work and almost no consistent presence online.",
    strategy:
      "We built an editorial content model: recurring formats, seasonal narratives and a publishing rhythm the small team could actually sustain.",
    creative:
      "Fabric-led art direction, close-up texture photography and short-form video that felt like the clothes rather than the algorithm.",
    execution:
      "Social strategy, monthly calendars, in-studio production days and community management across three channels.",
    results: [
      { value: "310%", label: "Increase in reach" },
      { value: "4.7X", label: "Content output" },
      { value: "27%", label: "Lift in repeat purchase" },
    ],
    testimonial: {
      quote:
        "For the first time our online presence looks like the work we actually make.",
      name: "Marguerite Hale",
      role: "Creative Director, Atelier 9",
    },
  },
  {
    title: "KINETIC",
    slug: "kinetic",
    industry: "Technology / B2B",
    services: ["Web", "Growth", "AI + Automation"],
    year: "2026",
    headline: "A pipeline that qualifies itself before sales gets involved.",
    result: "-46% cost per lead",
    heroImage: kinetic,
    heroAlt: "Matte black consumer tech objects lit with hot pink gel lighting",
    gallery: [
      { src: northbank, alt: "Kinetic brand environment photography" },
      { src: studio, alt: "Kinetic workshop materials on a studio desk" },
    ],
    challenge:
      "Strong demand, leaky funnel. Leads arrived, then waited days for a reply.",
    strategy:
      "We rebuilt the acquisition path end to end: message, landing pages, lead scoring and automated routing into the CRM within minutes.",
    creative:
      "Product-led art direction with hard light and pink accents, plus an ad creative library built for rapid testing.",
    execution:
      "New site and landing page system, paid search and social, CRM workflows, lead scoring and an automated reporting dashboard.",
    results: [
      { value: "46%", label: "Lower cost per lead" },
      { value: "5 min", label: "Average lead response" },
      { value: "2.9X", label: "Sales-qualified leads" },
    ],
    testimonial: {
      quote:
        "Sharp thinking, beautiful work, zero drama. They move faster than agencies three times their size.",
      name: "Priya Raman",
      role: "VP Marketing, Kinetic",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
