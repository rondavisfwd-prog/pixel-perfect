export type Insight = {
  slug: string;
  title: string;
  category: string;
  date: string;
  read: string;
  excerpt: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: "why-most-business-websites-dont-convert",
    title: "Why most business websites don't convert",
    category: "Web",
    date: "12 Aug 2026",
    read: "6 min read",
    excerpt:
      "Most sites aren't ugly. They're unclear. Here is the order people actually need information in.",
    body: [
      "Almost every underperforming website we audit has the same problem, and it isn't the design. It's sequence. The page answers questions in the order the business finds interesting rather than the order the customer needs.",
      "A visitor arrives with three silent questions: what is this, is it for me, and what happens next. If the first screen answers all three, everything after it is easier. If it answers none of them, no amount of testimonials further down will rescue the visit.",
      "The second common failure is friction disguised as thoroughness. Eleven form fields, four navigation levels, a video that autoplays over the headline. Each one is a small tax on attention, and attention is the only budget your visitor didn't agree to spend.",
      "Fix the sequence first. State the offer plainly, prove it once, remove a step from the path, then measure. Design work lands much harder on a page that already makes sense.",
    ],
  },
  {
    slug: "brand-isnt-your-logo",
    title: "Brand isn't your logo. Here's what it actually is.",
    category: "Brand",
    date: "24 Jul 2026",
    read: "5 min read",
    excerpt:
      "A logo is a signature. Brand is the reason anyone cares that you signed it.",
    body: [
      "Logos get the meetings and the arguments, which is odd, because they are the smallest part of the job. A logo identifies. A brand persuades.",
      "Brand is the accumulated impression of every decision a customer can perceive: what you promise, who you clearly aren't for, how quickly you reply, how your pricing is explained, what your work looks like next to competitors.",
      "That means brand work is mostly decision work. Choosing a position specific enough to be rejected by some people. Writing the sentence a salesperson can repeat without wincing. Building a system so the tenth touchpoint looks like the first.",
      "Get those right and the identity design becomes straightforward, because you finally know what it has to communicate.",
    ],
  },
  {
    slug: "where-ai-belongs-in-your-marketing-stack",
    title: "Where AI actually belongs in your marketing stack",
    category: "AI + Automation",
    date: "03 Jul 2026",
    read: "7 min read",
    excerpt:
      "Not in your brand voice. Very much in the twelve hours a month you spend on reporting.",
    body: [
      "The useful question isn't whether to use AI. It's which work is genuinely repetitive, low-judgement and high-volume — because that is where automation compounds and nobody misses the human touch.",
      "Good candidates: enriching and routing inbound leads, drafting first-pass reporting commentary, tagging and summarising support conversations, generating variant copy for tests you will actually measure, and cleaning data before it reaches a dashboard.",
      "Bad candidates: your positioning, your point of view, anything a customer will read and judge you by without a human editing it, and anything where being confidently wrong is expensive.",
      "Start with one process, measure the hours it returns, then expand. Automation is only impressive when someone can point at the time it gave back.",
    ],
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
