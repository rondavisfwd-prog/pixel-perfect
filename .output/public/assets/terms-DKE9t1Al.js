import { u as e } from "./ActionLink-DLXSrhX5.js";
import { s as t } from "./sections-CPZt92U8.js";
var n = e(),
  r = [
    [
      `Using this site`,
      `You're welcome to browse, share and quote this site with attribution. Please don't republish whole pages or present our work as your own.`,
    ],
    [
      `Our work`,
      `Case study figures shown here are representative placeholders until client-approved results are published. Project work remains the property of the client, and identity systems shown are used with permission.`,
    ],
    [
      `Enquiries`,
      `Submitting the enquiry form doesn't create a contract. Scope, timelines and fees are agreed in a separate written proposal.`,
    ],
    [
      `Liability`,
      `This site is provided as-is. We take care with what we publish, but nothing here is professional advice specific to your business.`,
    ],
    [`Questions`, `Email hello@thepinkdigital.com and a human will reply.`],
  ];
function i() {
  return (0, n.jsxs)(n.Fragment, {
    children: [
      (0, n.jsx)(t, {
        eyebrow: `Legal`,
        title: `Terms`,
        intro: `The short version. Last updated August 2026.`,
      }),
      (0, n.jsx)(`div`, {
        className: `shell py-16 md:py-24`,
        children: (0, n.jsx)(`div`, {
          className: `max-w-3xl space-y-12`,
          children: r.map(([e, t]) =>
            (0, n.jsxs)(
              `section`,
              {
                children: [
                  (0, n.jsx)(`h2`, { className: `display-md`, children: e }),
                  (0, n.jsx)(`p`, {
                    className: `mt-4 text-lg font-medium leading-relaxed text-muted-foreground`,
                    children: t,
                  }),
                ],
              },
              e,
            ),
          ),
        }),
      }),
    ],
  });
}
export { i as component };
