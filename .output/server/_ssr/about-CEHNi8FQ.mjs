import { d as studio_default } from "./insights-DLbSV-QZ.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import {
  n as Pink,
  r as Reveal,
  t as Eyebrow,
} from "./SectionHeading-Bl9F-0XW.mjs";
import {
  n as GlobalPresence,
  p as TestimonialSlider,
  s as PageHero,
  t as CTASection,
} from "./sections-BFFf0tRt.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CEHNi8FQ.js
var import_jsx_runtime = require_jsx_runtime();
var beliefs = [
  [
    "Clarity beats cleverness.",
    "If it needs explaining twice, it isn't finished.",
  ],
  [
    "Taste is a business asset.",
    "Attention is expensive. Good work earns some of it back.",
  ],
  [
    "Numbers keep creative honest.",
    "We would rather be measured than admired.",
  ],
  [
    "Small teams, senior hands.",
    "The people in the pitch are the people doing the work.",
  ],
];
var team = [
  ["Creative Direction", "Art direction, identity, campaign thinking"],
  ["Strategy", "Positioning, research, growth planning"],
  ["Design & Web", "UX/UI, design systems, build"],
  ["Growth", "Paid media, SEO, conversion, analytics"],
];
function About() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
          eyebrow: "About",
          title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_jsx_runtime.Fragment,
            { children: "We're not interested in making more digital noise." },
          ),
          intro: "We're here to make work worth noticing.",
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "shell section-y grid gap-12 md:grid-cols-12",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "md:col-span-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                    className: "eyebrow text-primary",
                    children: "Our story",
                  }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                  delay: 80,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "div",
                    {
                      className:
                        "mt-8 space-y-6 text-lg font-medium leading-relaxed",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          children:
                            "The Pink Digital started with a simple frustration: beautiful work that didn't sell anything, and performance work that looked like everybody else's.",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          children:
                            "So we built a small studio where strategy, creative, web and growth sit at the same table. One team, one plan, one set of numbers to answer to.",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          children:
                            "Today we work remotely with founders and marketing leads across the United States, Canada and the United Kingdom — brands ambitious enough to want both taste and traction.",
                        }),
                      ],
                    },
                  ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
              delay: 140,
              className: "md:col-span-5 md:col-start-8",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
                src: studio_default,
                alt: "Brand collateral, colour swatches and a notebook laid out on a studio desk",
                loading: "lazy",
                width: 1440,
                height: 1088,
                className: "w-full rounded-lg object-cover",
              }),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: "bg-ink text-ink-foreground",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "shell section-y",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
                  className: "text-ink-foreground/60",
                  children: "Our approach",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                delay: 80,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
                  className: "display-xl mt-8 max-w-4xl",
                  children: [
                    "Good design gets attention. Good strategy knows ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pink, {
                      children: "what to do with it.",
                    }),
                  ],
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className:
                  "mt-16 grid gap-10 border-t border-ink-foreground/15 pt-12 md:grid-cols-2",
                children: beliefs.map(([title, body], i) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    Reveal,
                    {
                      delay: i * 70,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                          className: "display-md",
                          children: title,
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                          className:
                            "mt-3 max-w-md text-base font-medium text-ink-foreground/65",
                          children: body,
                        }),
                      ],
                    },
                    title,
                  ),
                ),
              }),
            ],
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
          className: "section-y",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "shell",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                className: "eyebrow text-primary",
                children: "Our team",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                className: "lead mt-6 max-w-2xl",
                children:
                  "A senior core team, extended by specialists when a project needs them.",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mt-12 border-t border-border",
                children: team.map(([role, detail], i) =>
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    Reveal,
                    {
                      delay: i * 60,
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        "div",
                        {
                          className:
                            "flex flex-col gap-2 border-b border-border py-7 md:flex-row md:items-baseline md:justify-between",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                              className: "display-md",
                              children: role,
                            }),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                              className:
                                "text-sm font-medium text-muted-foreground",
                              children: detail,
                            }),
                          ],
                        },
                      ),
                    },
                    role,
                  ),
                ),
              }),
            ],
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialSlider, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalPresence, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTASection, {}),
      ],
    },
  );
}
//#endregion
export { About as component };
