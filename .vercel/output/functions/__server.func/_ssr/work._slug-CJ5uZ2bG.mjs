import { c as projects } from "./insights-DLbSV-QZ.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { n as TextLink } from "./ActionLink-CXE4usJA.mjs";
import { r as Reveal, t as Eyebrow } from "./SectionHeading-DjWuyN6J.mjs";
import { a as MetricBlock, t as CTASection } from "./sections-DyqE6za6.mjs";
import { t as Route } from "./work._slug-CtEPsbem.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-CJ5uZ2bG.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/work.$slug.tsx?tsr-split=component";
function Facts({ project }) {
	const rows = [
		["Client", project.title],
		["Industry", project.industry],
		["Services", project.services.join(" · ")],
		["Year", project.year]
	];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
		className: "grid gap-8 sm:grid-cols-4",
		children: rows.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
			className: "eyebrow text-muted-foreground",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 11
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
			className: "mt-3 text-base font-bold",
			children: value
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 11
		}, this)] }, label, true, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 37
		}, this))
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 14,
		columnNumber: 10
	}, this);
}
function Block({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
		className: "grid gap-4 border-t border-border py-10 md:grid-cols-12 md:gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
			className: "eyebrow text-primary md:col-span-3",
			children: title
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 29,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
			className: "text-lg font-medium leading-relaxed md:col-span-8",
			children: body
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 30,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 28,
		columnNumber: 10
	}, this);
}
function CaseStudy() {
	const project = Route.useLoaderData();
	const index = projects.findIndex((p) => p.slug === project.slug);
	const next = projects[(index + 1) % projects.length];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
			className: "pt-36 md:pt-48",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Case study" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 13
					}, this) }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 42,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
						delay: 80,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "display-hero mt-8",
							children: project.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
						delay: 140,
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "lead mt-8 max-w-2xl",
							children: project.headline
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 41,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, {
				delay: 200,
				className: "mt-14",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
					src: project.heroImage,
					alt: project.heroAlt,
					width: 1440,
					height: 1088,
					className: "h-[46vh] w-full object-cover md:h-[72vh]"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 52,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 40,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "shell py-14 md:py-20",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Facts, { project }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 58,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 57,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
					title: "Challenge",
					body: project.challenge
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 62,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
					title: "Strategy",
					body: project.strategy
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
					title: "Creative direction",
					body: project.creative
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Block, {
					title: "Execution",
					body: project.execution
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 65,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 61,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "shell mt-8 grid gap-6 md:grid-cols-2",
			children: project.gallery.map((image) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
				src: image.src,
				alt: image.alt,
				loading: "lazy",
				width: 1440,
				height: 1088,
				className: "w-full rounded-lg object-cover"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 70,
				columnNumber: 13
			}, this) }, image.src, false, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 39
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 68,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "shell mt-16 md:mt-24",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Results" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 75,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MetricBlock, { items: project.results }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 77,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 74,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "bg-ink text-ink-foreground",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "shell section-y",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("blockquote", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "display-lg max-w-4xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-primary",
							children: "\""
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 86,
							columnNumber: 17
						}, this),
						project.testimonial.quote,
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-primary",
							children: "\""
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 88,
							columnNumber: 17
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 85,
					columnNumber: 15
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
					className: "mt-8 text-sm font-bold uppercase tracking-[0.14em]",
					children: [project.testimonial.name, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "ml-3 font-medium normal-case tracking-normal text-ink-foreground/60",
						children: project.testimonial.role
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 17
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 90,
					columnNumber: 15
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 13
				}, this) }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 83,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 81,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
			className: "section-y",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "shell",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eyebrow, { children: "Next project" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 103,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/work/$slug",
						params: { slug: next.slug },
						className: "group mt-8 grid items-center gap-8 md:grid-cols-12",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("figure", {
							className: "overflow-hidden rounded-lg md:col-span-7",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
								src: next.heroImage,
								alt: next.heroAlt,
								loading: "lazy",
								width: 1440,
								height: 1088,
								className: "w-full object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 108,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "md:col-span-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
									className: "display-lg transition-colors group-hover:text-primary",
									children: next.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 111,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-4 text-sm font-medium text-muted-foreground",
									children: [
										next.industry,
										" · ",
										next.year
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 114,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "eyebrow mt-8 inline-flex items-center gap-2",
									children: ["View case study", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										"aria-hidden": true,
										className: "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1",
										children: "↗"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 119,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 117,
									columnNumber: 15
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 110,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-10",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextLink, {
							to: "/work",
							children: "All work"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 126,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 125,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 101,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CTASection, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 131,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 39,
		columnNumber: 10
	}, this);
}
//#endregion
export { CaseStudy as component };
