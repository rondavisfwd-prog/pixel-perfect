import { c as projects, l as services } from "./insights-DLbSV-QZ-Cq1DXJpc.mjs";
import { g as Link } from "./_libs/@tanstack/react-router-D-bzuk39.mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react-BXVD0bQ8.mjs";
import { r as Reveal, t as Eyebrow } from "./SectionHeading-5giglFrX-gbgQQQEX.mjs";
import { s as PageHero, t as CTASection } from "./sections-z75G3BMc-DI9_CVL9.mjs";
import { t as Route } from "./services._slug-CQBjNrnW-C2vU3i1Y.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services._slug-C6mcTa3B.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/services.$slug.tsx?tsr-split=component";
function ServiceDetail() {
	const service = Route.useLoaderData();
	const related = projects.filter((p) => p.services.some((s) => s.toLowerCase().startsWith(service.title.toLowerCase().slice(0, 4))));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PageHero, {
			eyebrow: `Service ${service.n}`,
			title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [service.title, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "text-primary",
				children: "."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 13
			}, this)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 57
			}, this),
			intro: service.summary
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "shell section-y grid gap-12 md:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "md:col-span-7",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "eyebrow text-primary",
					children: "What it is"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-5 text-xl font-medium leading-relaxed",
					children: service.what
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 13
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 19,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: 80,
					className: "mt-14",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "eyebrow text-primary",
						children: "Who it's for"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-5 text-xl font-medium leading-relaxed",
						children: service.who
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 18,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "md:col-span-4 md:col-start-9",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: 120,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "eyebrow text-muted-foreground",
						children: "What we do"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 30,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "mt-5 space-y-3 text-base font-bold",
						children: service.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
							className: "border-b border-border pb-3",
							children: item
						}, item, false, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 42
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 29,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
					delay: 180,
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "eyebrow text-muted-foreground",
						children: "Typical deliverables"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 38,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "mt-5 space-y-2 text-sm font-medium text-muted-foreground",
						children: service.deliverables.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: item }, item, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 49
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 28,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 7
		}, this),
		related.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "section-y border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "shell",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Relevant case studies" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 48,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-10 grid gap-8 md:grid-cols-2",
					children: related.slice(0, 2).map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/work/$slug",
						params: { slug: project.slug },
						className: "group block overflow-hidden rounded-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: project.heroImage,
								alt: project.heroAlt,
								loading: "lazy",
								width: 1440,
								height: 1088,
								className: "w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
								className: "display-md mt-6 transition-colors group-hover:text-primary",
								children: project.title
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 55,
								columnNumber: 21
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-2 text-sm font-medium text-muted-foreground",
								children: [
									project.industry,
									" — ",
									project.result
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 58,
								columnNumber: 21
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 19
					}, this) }, project.slug, false, {
						fileName: _jsxFileName,
						lineNumber: 50,
						columnNumber: 51
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 13
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 46,
			columnNumber: 29
		}, this) : null,
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "section-y border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "shell",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "All services" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 69,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: services.filter((s) => s.slug !== service.slug).map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/services/$slug",
						params: { slug: s.slug },
						className: "rounded-md border border-border px-4 py-2 text-sm font-bold uppercase tracking-[0.1em] transition-colors hover:border-primary hover:text-primary",
						children: s.title
					}, s.slug, false, {
						fileName: _jsxFileName,
						lineNumber: 71,
						columnNumber: 69
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 70,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 68,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 67,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CTASection, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 80,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 11,
		columnNumber: 10
	}, this);
}
//#endregion
export { ServiceDetail as component };
