export type Service = {
  n: string;
  slug: string;
  title: string;
  summary: string;
  what: string;
  who: string;
  items: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    n: "01",
    slug: "brand",
    title: "Brand",
    summary: "Positioning, identity and messaging that make a business impossible to confuse with anyone else.",
    what: "Brand is the shortcut people use to decide whether you are worth their attention. We define what you stand for, then design the system that proves it everywhere.",
    who: "New businesses launching, established businesses that have outgrown their identity, and brands entering the US, Canada or UK market.",
    items: ["Brand Strategy", "Visual Identity", "Messaging", "Brand Guidelines", "Campaign Concepts"],
    deliverables: ["Positioning platform", "Logo and identity system", "Messaging framework", "Brand guidelines", "Launch campaign concept"],
  },
  {
    n: "02",
    slug: "web",
    title: "Web",
    summary: "Websites built to be understood in five seconds and to convert long after that.",
    what: "We plan the journey, design the experience and build fast, accessible, search-friendly sites that sales teams actually like sending people to.",
    who: "Businesses whose website looks dated, loads slowly, or quietly loses the leads their marketing paid for.",
    items: ["Website Strategy", "UX/UI Design", "Web Development", "Landing Pages", "E-commerce"],
    deliverables: ["Sitemap and UX flows", "Design system", "Responsive build", "CMS setup", "Analytics and event tracking"],
  },
  {
    n: "03",
    slug: "social",
    title: "Social",
    summary: "Content with a point of view, published consistently enough to compound.",
    what: "We build the strategy, then produce the work: short-form video, design, editorial and community management on a calendar you can rely on.",
    who: "Brands posting inconsistently, or teams producing plenty of content that never quite sounds like one brand.",
    items: ["Social Strategy", "Content Creation", "Short-Form Video", "Community Management", "Content Calendars"],
    deliverables: ["Channel strategy", "Monthly content calendar", "Design and video assets", "Community guidelines", "Performance reporting"],
  },
  {
    n: "04",
    slug: "growth",
    title: "Growth",
    summary: "Paid media, SEO and conversion work measured against revenue, not impressions.",
    what: "We build acquisition systems: the right channels, the right creative, the right landing pages, tested continuously against real cost per lead.",
    who: "Businesses spending on ads without clarity, or ready to scale acquisition beyond referrals.",
    items: ["Paid Social", "Google Ads", "SEO", "Lead Generation", "Conversion Optimization"],
    deliverables: ["Channel plan and forecast", "Campaign build", "Ad creative library", "Landing page tests", "Performance dashboard"],
  },
  {
    n: "05",
    slug: "creative",
    title: "Creative",
    summary: "Campaign ideas and production that earn attention instead of buying it twice.",
    what: "From the idea to the final cut: art direction, design, ad creative, video editing and ongoing content production.",
    who: "Brands that need a steady stream of high-quality creative without rebuilding an in-house studio.",
    items: ["Campaign Creative", "Graphic Design", "Ad Creative", "Video Editing", "Content Production"],
    deliverables: ["Creative concepts", "Art direction", "Ad creative sets", "Edited video", "Asset library"],
  },
  {
    n: "06",
    slug: "ai-automation",
    title: "AI + Automation",
    summary: "Quiet systems that follow up, qualify and report while your team sleeps.",
    what: "We map the work humans should not be doing, then wire it up: CRM workflows, lead routing, reporting and useful AI where it genuinely helps.",
    who: "Teams losing leads in inboxes, or spending days a month on reporting and manual admin.",
    items: ["Marketing Automation", "CRM Workflows", "AI Integration", "Lead Automation", "Business Process Automation"],
    deliverables: ["Process audit", "Automation blueprint", "CRM and workflow build", "AI assist integrations", "Documentation and training"],
  },
];
