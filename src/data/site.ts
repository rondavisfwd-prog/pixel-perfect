export const site = {
  name: "The Pink Digital",
  wordmark: ["THE", "PINK", "DIGITAL"] as const,
  tagline: "Digital looks better in pink.",
  email: "hello@thepinkdigital.com",
  markets: ["United States", "Canada", "United Kingdom"],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
  nav: [
    { label: "Work", to: "/work" },
    { label: "Services", to: "/services" },
    { label: "About", to: "/about" },
    { label: "Insights", to: "/insights" },
  ],
};

export const clients = [
  "LUMÉ",
  "NORTHBANK",
  "ATELIER 9",
  "KINETIC",
  "MAISON ORO",
  "FOLD & CO",
  "HAVEN",
];

export const testimonials = [
  {
    quote:
      "The Pink Digital didn't just redesign our brand. They completely changed how customers experience our business.",
    name: "Elise Moreau",
    role: "Founder, LUMÉ",
  },
  {
    quote:
      "We came for a website. We left with a growth engine, a clearer story and a team that actually understands numbers.",
    name: "Daniel Whitfield",
    role: "Managing Director, Northbank",
  },
  {
    quote:
      "Sharp thinking, beautiful work, zero drama. They move faster than agencies three times their size.",
    name: "Priya Raman",
    role: "VP Marketing, Kinetic",
  },
];

export const differentiators = [
  {
    title: "Strategy first",
    body: "Every project starts with understanding the business, customer and opportunity.",
  },
  {
    title: "Creative that performs",
    body: "Beautiful work should also have a commercial purpose.",
  },
  {
    title: "One connected team",
    body: "Strategy, creative, web and growth work together.",
  },
  {
    title: "Built for momentum",
    body: "We create systems designed to evolve as your business grows.",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "DISCOVER",
    body: "We learn your business, audience, challenges and goals.",
  },
  {
    n: "02",
    title: "STRATEGIZE",
    body: "We create the roadmap and define what success looks like.",
  },
  {
    n: "03",
    title: "CREATE",
    body: "Strategy becomes design, content, campaigns and experiences.",
  },
  {
    n: "04",
    title: "LAUNCH",
    body: "Everything goes live after testing and refinement.",
  },
  {
    n: "05",
    title: "GROW",
    body: "We measure performance, learn and continuously improve.",
  },
];

export const packages = [
  {
    name: "PINK LAUNCH",
    blurb: "For businesses building or rebuilding their digital foundation.",
    items: ["Brand", "Website", "Social Setup", "Launch Strategy"],
  },
  {
    name: "PINK SOCIAL",
    blurb: "For brands that need consistent content and a stronger social presence.",
    items: ["Strategy", "Content", "Design", "Video", "Management"],
  },
  {
    name: "PINK GROWTH",
    blurb: "For businesses focused on acquisition and performance.",
    items: ["Paid Media", "Landing Pages", "Creative", "Conversion Optimization", "Analytics"],
  },
  {
    name: "PINK 360",
    blurb: "Your outsourced digital team.",
    items: ["Strategy", "Creative", "Web", "Social", "Growth", "Automation"],
  },
];
