import { r as __toESM } from "./rolldown-runtime-CMFfr-1z.mjs";
import { r as require_react } from "./_libs/@tanstack/react-query-7X162K7y.mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react-BXVD0bQ8.mjs";
import { r as cn, t as ActionLink } from "./ActionLink-JC4E8TR3-CT_uCKlE.mjs";
import { r as Reveal, t as Eyebrow } from "./SectionHeading-5giglFrX-gbgQQQEX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DJ8daF_H.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/contact.tsx?tsr-split=component";
var HELP_OPTIONS = [
	"Brand",
	"Website",
	"Social Media",
	"Paid Advertising",
	"SEO",
	"Creative",
	"AI + Automation",
	"Full Digital Partnership"
];
var BUDGETS = [
	"Under $2,500",
	"$2,500–$5,000",
	"$5,000–$10,000",
	"$10,000–$25,000",
	"$25,000+",
	"Not sure yet"
];
var TIMELINES = [
	"ASAP",
	"1–2 months",
	"3–6 months",
	"Just exploring"
];
var COUNTRIES = [
	"United States",
	"Canada",
	"United Kingdom",
	"Other"
];
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
	timeline: ""
};
var fieldClass = "w-full border-0 border-b border-input bg-transparent pb-3 pt-2 text-lg font-semibold outline-none transition-colors placeholder:font-medium placeholder:text-muted-foreground/70 focus:border-primary";
var labelClass = "eyebrow text-muted-foreground";
function Field({ label, children, error, className }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
			className: labelClass,
			children: [label, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-3 font-normal normal-case tracking-normal",
				children
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 7
		}, this), error ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "mt-2 text-xs font-bold text-destructive",
			children: error
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 52,
			columnNumber: 16
		}, this) : null]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 10
	}, this);
}
function Contact() {
	const [values, setValues] = (0, import_react.useState)(initial);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [sent, setSent] = (0, import_react.useState)(false);
	const set = (key, value) => setValues((v) => ({
		...v,
		[key]: value
	}));
	const toggleHelp = (option) => setValues((v) => ({
		...v,
		help: v.help.includes(option) ? v.help.filter((h) => h !== option) : [...v.help, option]
	}));
	const validate = () => {
		const next = {};
		if (values.name.trim().length < 2) next.name = "Please add your name.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) next.email = "Add a valid work email.";
		if (!values.company.trim()) next.company = "Which company are you with?";
		if (!values.country) next.country = "Pick a country.";
		if (values.help.length === 0) next.help = "Choose at least one.";
		if (values.brief.trim().length < 20) next.brief = "A sentence or two is plenty.";
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
			submittedAt: (/* @__PURE__ */ new Date()).toISOString()
		});
		setSent(true);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	if (sent) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "flex min-h-screen items-center bg-primary text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "shell py-32",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "display-xl max-w-3xl",
					children: "You're officially on our radar. 💗"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 97,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-8 text-xl font-semibold",
					children: "We'll be in touch soon."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 98,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-12 flex flex-wrap gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionLink, {
						to: "/work",
						variant: "dark",
						children: "Browse our work"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 100,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionLink, {
						variant: "dark",
						arrow: "none",
						onClick: () => {
							setValues(initial);
							setSent(false);
						},
						children: "Send another"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 99,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 96,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 95,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "border-b border-border pb-16 pt-36 md:pb-20 md:pt-48",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Start a project" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 117,
					columnNumber: 13
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "display-hero mt-8",
						children: [
							"Let's make",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 122,
								columnNumber: 15
							}, this),
							"something ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-primary",
								children: "good."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 123,
								columnNumber: 25
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 120,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 119,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: 140,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "lead mt-10 max-w-xl",
						children: "A few questions so the first conversation is a useful one. Takes about two minutes."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 126,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 115,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 114,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "shell py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
			onSubmit,
			noValidate: true,
			className: "max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-10 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Name",
							error: errors.name,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: fieldClass,
								value: values.name,
								onChange: (e) => set("name", e.target.value),
								placeholder: "Alex Rivera",
								autoComplete: "name",
								"aria-invalid": !!errors.name
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 138,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 137,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Work email",
							error: errors.email,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								type: "email",
								className: fieldClass,
								value: values.email,
								onChange: (e) => set("email", e.target.value),
								placeholder: "alex@company.com",
								autoComplete: "email",
								"aria-invalid": !!errors.email
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 141,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 140,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Company",
							error: errors.company,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: fieldClass,
								value: values.company,
								onChange: (e) => set("company", e.target.value),
								placeholder: "Company name",
								autoComplete: "organization",
								"aria-invalid": !!errors.company
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 144,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 143,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Website",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: fieldClass,
								value: values.website,
								onChange: (e) => set("website", e.target.value),
								placeholder: "company.com",
								autoComplete: "url"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 147,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 146,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Country",
							error: errors.country,
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
								className: cn(fieldClass, "appearance-none"),
								value: values.country,
								onChange: (e) => set("country", e.target.value),
								"aria-invalid": !!errors.country,
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: "",
									children: "Select…"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 151,
									columnNumber: 17
								}, this), COUNTRIES.map((c) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
									value: c,
									children: c
								}, c, false, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 37
								}, this))]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 150,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 149,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
							label: "Industry",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
								className: fieldClass,
								value: values.industry,
								onChange: (e) => set("industry", e.target.value),
								placeholder: "e.g. Beauty, SaaS, Property"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 158,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 157,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 136,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
					className: "mt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("legend", {
							className: labelClass,
							children: "What can we help with?"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 163,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: HELP_OPTIONS.map((option) => {
								const active = values.help.includes(option);
								return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
									type: "button",
									"aria-pressed": active,
									onClick: () => toggleHelp(option),
									className: cn("rounded-md border px-4 py-2.5 text-sm font-bold transition-all duration-300", active ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary hover:text-primary"),
									children: option
								}, option, false, {
									fileName: _jsxFileName,
									lineNumber: 167,
									columnNumber: 22
								}, this);
							})
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 164,
							columnNumber: 13
						}, this),
						errors.help ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-3 text-xs font-bold text-destructive",
							children: errors.help
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 172,
							columnNumber: 28
						}, this) : null
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 162,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-16",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
						label: "Tell us a little about what you're trying to accomplish.",
						error: errors.brief,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
							rows: 4,
							className: cn(fieldClass, "resize-none"),
							value: values.brief,
							onChange: (e) => set("brief", e.target.value),
							placeholder: "Where you are now, where you'd like to be…",
							"aria-invalid": !!errors.brief
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 177,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 176,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 175,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-16 grid gap-10 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
						label: "Budget",
						error: errors.budget,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
							className: cn(fieldClass, "appearance-none"),
							value: values.budget,
							onChange: (e) => set("budget", e.target.value),
							"aria-invalid": !!errors.budget,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
								value: "",
								children: "Select…"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 184,
								columnNumber: 17
							}, this), BUDGETS.map((b) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
								value: b,
								children: b
							}, b, false, {
								fileName: _jsxFileName,
								lineNumber: 185,
								columnNumber: 35
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 183,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 182,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Field, {
						label: "Timeline",
						error: errors.timeline,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
							className: cn(fieldClass, "appearance-none"),
							value: values.timeline,
							onChange: (e) => set("timeline", e.target.value),
							"aria-invalid": !!errors.timeline,
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
								value: "",
								children: "Select…"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 192,
								columnNumber: 17
							}, this), TIMELINES.map((t) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
								value: t,
								children: t
							}, t, false, {
								fileName: _jsxFileName,
								lineNumber: 193,
								columnNumber: 37
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 191,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 190,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 181,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-16 flex flex-wrap items-center gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionLink, {
						type: "submit",
						size: "lg",
						arrow: "right",
						children: "Send It"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 201,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-sm font-medium text-muted-foreground",
						children: [
							"Or email",
							" ",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: "mailto:hello@thepinkdigital.com",
								className: "font-bold underline decoration-primary decoration-2 underline-offset-4",
								children: "hello@thepinkdigital.com"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 206,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 204,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 200,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 135,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 134,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 113,
		columnNumber: 10
	}, this);
}
//#endregion
export { Contact as component };
