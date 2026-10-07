import { r as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { t as ActionLink } from "./ActionLink-CXE4usJA.mjs";
import { c as Positioning, d as SelectedWork, f as ServiceAccordion, i as LogoMarquee, l as ProcessTimeline, m as WhyPink, n as GlobalPresence, o as PackageRows, p as TestimonialSlider, r as InsightsGrid, t as CTASection } from "./sections-DyqE6za6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C8lxZBW6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/site/Hero.tsx";
function Hero() {
	const [offset, setOffset] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	const raf = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		if (window.matchMedia("(hover: none)").matches) return;
		const onMove = (e) => {
			if (raf.current) cancelAnimationFrame(raf.current);
			raf.current = requestAnimationFrame(() => {
				const x = (e.clientX / window.innerWidth - .5) * 2;
				const y = (e.clientY / window.innerHeight - .5) * 2;
				setOffset({
					x,
					y
				});
			});
		};
		window.addEventListener("pointermove", onMove);
		return () => {
			window.removeEventListener("pointermove", onMove);
			if (raf.current) cancelAnimationFrame(raf.current);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
		className: "relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-48",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute right-[4vw] top-32 hidden w-[26vw] max-w-[380px] md:block",
			style: {
				transform: `translate3d(${offset.x * 26}px, ${offset.y * 26}px, 0)`,
				transition: "transform 700ms cubic-bezier(0.16,1,0.3,1)"
			},
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "float-slow aspect-square w-full rounded-full blur-[2px]",
				style: { background: "radial-gradient(circle at 34% 28%, oklch(0.86 0.09 349) 0%, oklch(0.72 0.20 349) 42%, oklch(0.62 0.25 349.5) 78%, oklch(0.55 0.23 349.5) 100%)" }
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 38,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 30,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "shell relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "eyebrow text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						"aria-hidden": true,
						className: "mr-3 inline-block h-2 w-2 bg-primary"
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 49,
						columnNumber: 11
					}, this), "Strategy · Creative · Growth"]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 48,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "display-hero mt-8 max-w-[16ch]",
					children: [
						"DIGITAL",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 55,
							columnNumber: 11
						}, this),
						"LOOKS BETTER",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 57,
							columnNumber: 11
						}, this),
						"IN ",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-primary",
							children: "PINK."
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 58,
							columnNumber: 14
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 53,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-12 grid gap-10 md:grid-cols-12 md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "lead max-w-xl md:col-span-6",
						children: "Strategy, creative and growth for ambitious brands ready to be noticed."
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 62,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap items-center gap-4 md:col-span-6 md:justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionLink, {
							to: "/contact",
							size: "lg",
							children: "Start a Project"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 67,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionLink, {
							href: "#work",
							variant: "secondary",
							size: "lg",
							arrow: "down",
							children: "See Our Work"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 70,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 66,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 61,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "eyebrow mt-16 text-muted-foreground",
					children: "US · Canada · UK"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 76,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 47,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 29,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
function Home() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Hero, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 5,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogoMarquee, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 6,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Positioning, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 7,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ServiceAccordion, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 8,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			id: "work",
			className: "scroll-mt-24",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SelectedWork, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 10,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 9,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhyPink, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 12,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProcessTimeline, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 13,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PackageRows, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 14,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TestimonialSlider, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 15,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GlobalPresence, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 16,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(InsightsGrid, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 17,
			columnNumber: 7
		}, this),
		/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CTASection, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 7
		}, this)
	] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 4,
		columnNumber: 10
	}, this);
}
//#endregion
export { Home as component };
