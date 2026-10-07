import { n as __toESM } from "../_runtime.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import { r as cn, t as ActionLink } from "./ActionLink-BhFolQAt.mjs";
import { r as Reveal, t as Eyebrow } from "./SectionHeading-Bl9F-0XW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DNaWCXpu.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var HELP_OPTIONS = [
  "Brand",
  "Website",
  "Social Media",
  "Paid Advertising",
  "SEO",
  "Creative",
  "AI + Automation",
  "Full Digital Partnership",
];
var BUDGETS = [
  "Under $2,500",
  "$2,500–$5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000+",
  "Not sure yet",
];
var TIMELINES = ["ASAP", "1–2 months", "3–6 months", "Just exploring"];
var COUNTRIES = ["United States", "Canada", "United Kingdom", "Other"];
var initial = {
  name: "",
  email: "",
  company: "",
  website: "",
  country: "",
  industry: "",
  help: [],
  brief: "",
  budget: "",
  timeline: "",
};
var fieldClass =
  "w-full border-0 border-b border-input bg-transparent pb-3 pt-2 text-lg font-semibold outline-none transition-colors placeholder:font-medium placeholder:text-muted-foreground/70 focus:border-primary";
var labelClass = "eyebrow text-muted-foreground";
function Field({ label, children, error, className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
        className: labelClass,
        children: [
          label,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "mt-3 font-normal normal-case tracking-normal",
            children,
          }),
        ],
      }),
      error
        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "mt-2 text-xs font-bold text-destructive",
            children: error,
          })
        : null,
    ],
  });
}
function Contact() {
  const [values, setValues] = (0, import_react.useState)(initial);
  const [errors, setErrors] = (0, import_react.useState)({});
  const [sent, setSent] = (0, import_react.useState)(false);
  const set = (key, value) =>
    setValues((v) => ({
      ...v,
      [key]: value,
    }));
  const toggleHelp = (option) =>
    setValues((v) => ({
      ...v,
      help: v.help.includes(option)
        ? v.help.filter((h) => h !== option)
        : [...v.help, option],
    }));
  const validate = () => {
    const next = {};
    if (values.name.trim().length < 2) next.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email))
      next.email = "Add a valid work email.";
    if (!values.company.trim()) next.company = "Which company are you with?";
    if (!values.country) next.country = "Pick a country.";
    if (values.help.length === 0) next.help = "Choose at least one.";
    if (values.brief.trim().length < 20)
      next.brief = "A sentence or two is plenty.";
    if (!values.budget) next.budget = "Pick a range.";
    if (!values.timeline) next.timeline = "Pick a timeline.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (!validate()) return;
    console.info("project_enquiry", {
      ...values,
      submittedAt: /* @__PURE__ */ new Date().toISOString(),
    });
    setSent(true);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  if (sent)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
      className:
        "flex min-h-screen items-center bg-primary text-primary-foreground",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "shell py-32",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
            className: "display-xl max-w-3xl",
            children: "You're officially on our radar. 💗",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "mt-8 text-xl font-semibold",
            children: "We'll be in touch soon.",
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "mt-12 flex flex-wrap gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
                to: "/work",
                variant: "dark",
                children: "Browse our work",
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
                variant: "dark",
                arrow: "none",
                onClick: () => {
                  setValues(initial);
                  setSent(false);
                },
                children: "Send another",
              }),
            ],
          }),
        ],
      }),
    });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    import_jsx_runtime.Fragment,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
          className: "border-b border-border pb-16 pt-36 md:pb-20 md:pt-48",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "shell",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
                  children: "Start a project",
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                delay: 80,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
                  className: "display-hero mt-8",
                  children: [
                    "Let's make",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
                    "something ",
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-primary",
                      children: "good.",
                    }),
                  ],
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
                delay: 140,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                  className: "lead mt-10 max-w-xl",
                  children:
                    "A few questions so the first conversation is a useful one. Takes about two minutes.",
                }),
              }),
            ],
          }),
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
          className: "shell py-16 md:py-24",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
            onSubmit,
            noValidate: true,
            className: "max-w-4xl",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "grid gap-10 md:grid-cols-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
                    label: "Name",
                    error: errors.name,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "input",
                      {
                        className: fieldClass,
                        value: values.name,
                        onChange: (e) => set("name", e.target.value),
                        placeholder: "Alex Rivera",
                        autoComplete: "name",
                        "aria-invalid": !!errors.name,
                      },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
                    label: "Work email",
                    error: errors.email,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "input",
                      {
                        type: "email",
                        className: fieldClass,
                        value: values.email,
                        onChange: (e) => set("email", e.target.value),
                        placeholder: "alex@company.com",
                        autoComplete: "email",
                        "aria-invalid": !!errors.email,
                      },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
                    label: "Company",
                    error: errors.company,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "input",
                      {
                        className: fieldClass,
                        value: values.company,
                        onChange: (e) => set("company", e.target.value),
                        placeholder: "Company name",
                        autoComplete: "organization",
                        "aria-invalid": !!errors.company,
                      },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
                    label: "Website",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "input",
                      {
                        className: fieldClass,
                        value: values.website,
                        onChange: (e) => set("website", e.target.value),
                        placeholder: "company.com",
                        autoComplete: "url",
                      },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
                    label: "Country",
                    error: errors.country,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "select",
                      {
                        className: cn(fieldClass, "appearance-none"),
                        value: values.country,
                        onChange: (e) => set("country", e.target.value),
                        "aria-invalid": !!errors.country,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "option",
                            {
                              value: "",
                              children: "Select…",
                            },
                          ),
                          COUNTRIES.map((c) =>
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "option",
                              {
                                value: c,
                                children: c,
                              },
                              c,
                            ),
                          ),
                        ],
                      },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
                    label: "Industry",
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "input",
                      {
                        className: fieldClass,
                        value: values.industry,
                        onChange: (e) => set("industry", e.target.value),
                        placeholder: "e.g. Beauty, SaaS, Property",
                      },
                    ),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
                className: "mt-16",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
                    className: labelClass,
                    children: "What can we help with?",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                    className: "mt-6 flex flex-wrap gap-3",
                    children: HELP_OPTIONS.map((option) => {
                      const active = values.help.includes(option);
                      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        "button",
                        {
                          type: "button",
                          "aria-pressed": active,
                          onClick: () => toggleHelp(option),
                          className: cn(
                            "rounded-md border px-4 py-2.5 text-sm font-bold transition-all duration-300",
                            active
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary hover:text-primary",
                          ),
                          children: option,
                        },
                        option,
                      );
                    }),
                  }),
                  errors.help
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                        className: "mt-3 text-xs font-bold text-destructive",
                        children: errors.help,
                      })
                    : null,
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                className: "mt-16",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
                  label:
                    "Tell us a little about what you're trying to accomplish.",
                  error: errors.brief,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "textarea",
                    {
                      rows: 4,
                      className: cn(fieldClass, "resize-none"),
                      value: values.brief,
                      onChange: (e) => set("brief", e.target.value),
                      placeholder: "Where you are now, where you'd like to be…",
                      "aria-invalid": !!errors.brief,
                    },
                  ),
                }),
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mt-16 grid gap-10 md:grid-cols-2",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
                    label: "Budget",
                    error: errors.budget,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "select",
                      {
                        className: cn(fieldClass, "appearance-none"),
                        value: values.budget,
                        onChange: (e) => set("budget", e.target.value),
                        "aria-invalid": !!errors.budget,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "option",
                            {
                              value: "",
                              children: "Select…",
                            },
                          ),
                          BUDGETS.map((b) =>
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "option",
                              {
                                value: b,
                                children: b,
                              },
                              b,
                            ),
                          ),
                        ],
                      },
                    ),
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
                    label: "Timeline",
                    error: errors.timeline,
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                      "select",
                      {
                        className: cn(fieldClass, "appearance-none"),
                        value: values.timeline,
                        onChange: (e) => set("timeline", e.target.value),
                        "aria-invalid": !!errors.timeline,
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            "option",
                            {
                              value: "",
                              children: "Select…",
                            },
                          ),
                          TIMELINES.map((t) =>
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "option",
                              {
                                value: t,
                                children: t,
                              },
                              t,
                            ),
                          ),
                        ],
                      },
                    ),
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mt-16 flex flex-wrap items-center gap-8",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionLink, {
                    type: "submit",
                    size: "lg",
                    arrow: "right",
                    children: "Send It",
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
                    className: "text-sm font-medium text-muted-foreground",
                    children: [
                      "Or email",
                      " ",
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                        href: "mailto:hello@thepinkdigital.com",
                        className:
                          "font-bold underline decoration-primary decoration-2 underline-offset-4",
                        children: "hello@thepinkdigital.com",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    },
  );
}
//#endregion
export { Contact as component };
