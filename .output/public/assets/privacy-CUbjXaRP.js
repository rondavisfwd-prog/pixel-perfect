import { u as e } from "./ActionLink-DLXSrhX5.js";
import { s as t } from "./sections-CPZt92U8.js";
var n = e(),
  r = [
    [
      `What we collect`,
      `When you submit the project enquiry form we collect the details you provide: name, work email, company, website, country, industry, the services you're interested in, budget range, timeline and your message.`,
    ],
    [
      `How we use it`,
      `Only to respond to your enquiry, prepare a proposal and keep a record of our conversation. We don't sell or rent your information.`,
    ],
    [
      `Analytics`,
      `This site can be configured to use privacy-conscious analytics and advertising measurement tools. Tracking identifiers are supplied through environment configuration and are not active unless set.`,
    ],
    [
      `Retention`,
      `Enquiry details are kept for as long as needed to serve the relationship, then removed on request.`,
    ],
    [
      `Your rights`,
      `You can ask us what we hold, request a correction, or ask us to delete it. Email hello@thepinkdigital.com and we'll action it.`,
    ],
  ];
function i() {
  return (0, n.jsxs)(n.Fragment, {
    children: [
      (0, n.jsx)(t, {
        eyebrow: `Legal`,
        title: `Privacy Policy`,
        intro: `Plain-language summary of how we handle information. Last updated August 2026.`,
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
