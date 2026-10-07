import { u as e } from "./ActionLink-DLXSrhX5.js";
import { r as t } from "./index-CfZM4pn7.js";
import { i as n, n as r, t as i } from "./SectionHeading-Dsjw7xGt.js";
import { n as a, p as o, s, t as c } from "./sections-CPZt92U8.js";
var l = e(),
  u = [
    [
      `Clarity beats cleverness.`,
      `If it needs explaining twice, it isn't finished.`,
    ],
    [
      `Taste is a business asset.`,
      `Attention is expensive. Good work earns some of it back.`,
    ],
    [
      `Numbers keep creative honest.`,
      `We would rather be measured than admired.`,
    ],
    [
      `Small teams, senior hands.`,
      `The people in the pitch are the people doing the work.`,
    ],
  ],
  d = [
    [`Creative Direction`, `Art direction, identity, campaign thinking`],
    [`Strategy`, `Positioning, research, growth planning`],
    [`Design & Web`, `UX/UI, design systems, build`],
    [`Growth`, `Paid media, SEO, conversion, analytics`],
  ];
function f() {
  return (0, l.jsxs)(l.Fragment, {
    children: [
      (0, l.jsx)(s, {
        eyebrow: `About`,
        title: (0, l.jsx)(l.Fragment, {
          children: `We're not interested in making more digital noise.`,
        }),
        intro: `We're here to make work worth noticing.`,
      }),
      (0, l.jsxs)(`section`, {
        className: `shell section-y grid gap-12 md:grid-cols-12`,
        children: [
          (0, l.jsxs)(`div`, {
            className: `md:col-span-6`,
            children: [
              (0, l.jsx)(n, {
                children: (0, l.jsx)(`h2`, {
                  className: `eyebrow text-primary`,
                  children: `Our story`,
                }),
              }),
              (0, l.jsx)(n, {
                delay: 80,
                children: (0, l.jsxs)(`div`, {
                  className: `mt-8 space-y-6 text-lg font-medium leading-relaxed`,
                  children: [
                    (0, l.jsx)(`p`, {
                      children: `The Pink Digital started with a simple frustration: beautiful work that didn't sell anything, and performance work that looked like everybody else's.`,
                    }),
                    (0, l.jsx)(`p`, {
                      children: `So we built a small studio where strategy, creative, web and growth sit at the same table. One team, one plan, one set of numbers to answer to.`,
                    }),
                    (0, l.jsx)(`p`, {
                      children: `Today we work remotely with founders and marketing leads across the United States, Canada and the United Kingdom — brands ambitious enough to want both taste and traction.`,
                    }),
                  ],
                }),
              }),
            ],
          }),
          (0, l.jsx)(n, {
            delay: 140,
            className: `md:col-span-5 md:col-start-8`,
            children: (0, l.jsx)(`img`, {
              src: t,
              alt: `Brand collateral, colour swatches and a notebook laid out on a studio desk`,
              loading: `lazy`,
              width: 1440,
              height: 1088,
              className: `w-full rounded-lg object-cover`,
            }),
          }),
        ],
      }),
      (0, l.jsx)(`section`, {
        className: `bg-ink text-ink-foreground`,
        children: (0, l.jsxs)(`div`, {
          className: `shell section-y`,
          children: [
            (0, l.jsx)(n, {
              children: (0, l.jsx)(i, {
                className: `text-ink-foreground/60`,
                children: `Our approach`,
              }),
            }),
            (0, l.jsx)(n, {
              delay: 80,
              children: (0, l.jsxs)(`h2`, {
                className: `display-xl mt-8 max-w-4xl`,
                children: [
                  `Good design gets attention. Good strategy knows `,
                  (0, l.jsx)(r, { children: `what to do with it.` }),
                ],
              }),
            }),
            (0, l.jsx)(`div`, {
              className: `mt-16 grid gap-10 border-t border-ink-foreground/15 pt-12 md:grid-cols-2`,
              children: u.map(([e, t], r) =>
                (0, l.jsxs)(
                  n,
                  {
                    delay: r * 70,
                    children: [
                      (0, l.jsx)(`h3`, {
                        className: `display-md`,
                        children: e,
                      }),
                      (0, l.jsx)(`p`, {
                        className: `mt-3 max-w-md text-base font-medium text-ink-foreground/65`,
                        children: t,
                      }),
                    ],
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, l.jsx)(`section`, {
        className: `section-y`,
        children: (0, l.jsxs)(`div`, {
          className: `shell`,
          children: [
            (0, l.jsx)(`h2`, {
              className: `eyebrow text-primary`,
              children: `Our team`,
            }),
            (0, l.jsx)(`p`, {
              className: `lead mt-6 max-w-2xl`,
              children: `A senior core team, extended by specialists when a project needs them.`,
            }),
            (0, l.jsx)(`div`, {
              className: `mt-12 border-t border-border`,
              children: d.map(([e, t], r) =>
                (0, l.jsx)(
                  n,
                  {
                    delay: r * 60,
                    children: (0, l.jsxs)(`div`, {
                      className: `flex flex-col gap-2 border-b border-border py-7 md:flex-row md:items-baseline md:justify-between`,
                      children: [
                        (0, l.jsx)(`h3`, {
                          className: `display-md`,
                          children: e,
                        }),
                        (0, l.jsx)(`p`, {
                          className: `text-sm font-medium text-muted-foreground`,
                          children: t,
                        }),
                      ],
                    }),
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
      }),
      (0, l.jsx)(o, {}),
      (0, l.jsx)(a, {}),
      (0, l.jsx)(c, {}),
    ],
  });
}
export { f as component };
