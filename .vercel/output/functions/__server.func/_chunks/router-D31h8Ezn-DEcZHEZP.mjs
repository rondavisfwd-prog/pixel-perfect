import { r as __toESM } from "./rolldown-runtime-CMFfr-1z.mjs";
import { a as insights, c as projects, l as services, u as site } from "./insights-DLbSV-QZ-Cq1DXJpc.mjs";
import { r as require_react, t as QueryClientProvider } from "./_libs/@tanstack/react-query-7X162K7y.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, l as useRouterState, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "./_libs/@tanstack/react-router-D-bzuk39.mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react-BXVD0bQ8.mjs";
import { r as cn, t as ActionLink } from "./ActionLink-JC4E8TR3-CT_uCKlE.mjs";
import { t as Route$10 } from "./insights._slug-DE-4hzb7-DogdFz1F.mjs";
import { t as getStartContext } from "./async-local-storage-C5fJChCT-Bdbm_Lqh.mjs";
import { t as Route$11 } from "./services._slug-CQBjNrnW-C2vU3i1Y.mjs";
import { t as Route$12 } from "./work._slug-DKw8qMmy-B3wnMc6q.mjs";
import { t as QueryClient } from "./_libs/@tanstack/query-core-DRU39m6i.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D31h8Ezn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var getRouterInstance = () => getStartContext().getRouter();
var styles_default = "/assets/styles-DA5lRP_a.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var _jsxFileName$2 = "/app/applet/src/components/site/Navbar.tsx";
function Wordmark({ onClick, large }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
		to: "/",
		onClick,
		"aria-label": "The Pink Digital — home",
		className: cn("font-extrabold leading-none tracking-[-0.04em]", large ? "text-3xl" : "text-base sm:text-lg"),
		children: [
			"THE",
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "text-primary",
				children: "PINK"
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 18,
				columnNumber: 10
			}, this),
			"DIGITAL"
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled ? "py-2" : "py-4"),
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "shell",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: cn("flex items-center justify-between gap-6 transition-all duration-500", scrolled ? "rounded-full border border-border bg-background/80 px-5 py-3 backdrop-blur-xl" : "px-0 py-2"),
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Wordmark, {}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 63,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
						"aria-label": "Main",
						className: "hidden items-center gap-8 md:flex",
						children: site.nav.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: item.to,
							className: cn("eyebrow group transition-colors hover:text-primary", pathname.startsWith(item.to) ? "text-primary" : "text-foreground"),
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "link-line",
								children: [item.label, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "link-line-inner group-hover:scale-x-100" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 77,
									columnNumber: 21
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 75,
								columnNumber: 19
							}, this)
						}, item.to, false, {
							fileName: _jsxFileName$2,
							lineNumber: 67,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$2,
						lineNumber: 65,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionLink, {
							to: "/contact",
							className: "hidden md:inline-flex",
							children: "Start a Project"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 84,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setOpen(true),
							"aria-label": "Open menu",
							"aria-expanded": open,
							className: "eyebrow flex items-center gap-2 md:hidden",
							children: ["Menu", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								"aria-hidden": true,
								className: "flex flex-col gap-[3px]",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block h-[2px] w-5 bg-primary" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 96,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "block h-[2px] w-5 bg-foreground" }, void 0, false, {
									fileName: _jsxFileName$2,
									lineNumber: 97,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$2,
								lineNumber: 95,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$2,
							lineNumber: 87,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$2,
						lineNumber: 83,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 55,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 54,
			columnNumber: 9
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 48,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: cn("fixed inset-0 z-[60] flex flex-col bg-ink text-ink-foreground transition-[clip-path,opacity] duration-500 md:hidden", open ? "pointer-events-auto opacity-100 [clip-path:circle(150%_at_90%_5%)]" : "pointer-events-none opacity-0 [clip-path:circle(0%_at_90%_5%)]"),
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "shell flex items-center justify-between py-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-base font-extrabold tracking-[-0.04em]",
					children: [
						"THE",
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-primary",
							children: "PINK"
						}, void 0, false, {
							fileName: _jsxFileName$2,
							lineNumber: 116,
							columnNumber: 16
						}, this),
						"DIGITAL"
					]
				}, void 0, true, {
					fileName: _jsxFileName$2,
					lineNumber: 115,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => setOpen(false),
					"aria-label": "Close menu",
					className: "eyebrow text-ink-foreground/70 hover:text-primary",
					children: "Close ✕"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 118,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 114,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
				"aria-label": "Mobile",
				className: "shell flex flex-1 flex-col justify-center gap-2",
				children: [...site.nav, {
					label: "Contact",
					to: "/contact"
				}].map((item, i) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: item.to,
					onClick: () => setOpen(false),
					className: "display-lg border-b border-ink-foreground/15 py-4 transition-colors hover:text-primary",
					style: { transitionDelay: `${i * 30}ms` },
					children: item.label
				}, item.to, false, {
					fileName: _jsxFileName$2,
					lineNumber: 129,
					columnNumber: 13
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 127,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "shell pb-10",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ActionLink, {
					to: "/contact",
					size: "lg",
					className: "w-full",
					onClick: () => setOpen(false),
					children: "Start a Project"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 141,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "eyebrow mt-6 text-ink-foreground/50",
					children: "US · Canada · UK"
				}, void 0, false, {
					fileName: _jsxFileName$2,
					lineNumber: 144,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$2,
				lineNumber: 140,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 106,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 47,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/site/Footer.tsx";
function Column({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
		className: "eyebrow text-ink-foreground/50",
		children: title
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 7,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
		className: "mt-5 space-y-3 text-sm font-medium text-ink-foreground/85",
		children
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 8,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "bg-ink text-ink-foreground",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "shell py-16 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "grid gap-14 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "md:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "display-lg leading-[0.9]",
						children: [
							"THE",
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 21,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-primary",
								children: "PINK"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 22,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 23,
								columnNumber: 15
							}, this),
							"DIGITAL"
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 19,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: `mailto:${site.email}`,
						className: "mt-8 inline-block text-base font-bold underline decoration-primary decoration-2 underline-offset-4 transition-colors hover:text-primary",
						children: site.email
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 26,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 18,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid grid-cols-2 gap-10 md:col-span-7 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Column, {
							title: "Explore",
							children: [...site.nav, {
								label: "Contact",
								to: "/contact"
							}].map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: item.to,
								className: "transition-colors hover:text-primary",
								children: item.label
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 38,
								columnNumber: 19
							}, this) }, item.to, false, {
								fileName: _jsxFileName$1,
								lineNumber: 37,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 35,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Column, {
							title: "Social",
							children: site.socials.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: s.href,
								target: "_blank",
								rel: "noreferrer",
								className: "transition-colors hover:text-primary",
								children: s.label
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 47,
								columnNumber: 19
							}, this) }, s.label, false, {
								fileName: _jsxFileName$1,
								lineNumber: 46,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 44,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Column, {
							title: "Markets",
							children: site.markets.map((m) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: m }, m, false, {
								fileName: _jsxFileName$1,
								lineNumber: 60,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 58,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 34,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 17,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-16 flex flex-col gap-6 border-t border-ink-foreground/15 pt-8 md:flex-row md:items-center md:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "eyebrow text-primary",
					children: site.tagline
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 67,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center gap-6 text-xs font-medium text-ink-foreground/55",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/privacy",
							className: "hover:text-ink-foreground",
							children: "Privacy Policy"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 69,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/terms",
							className: "hover:text-ink-foreground",
							children: "Terms"
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 72,
							columnNumber: 13
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "© 2026 The Pink Digital" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 75,
							columnNumber: 13
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 68,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 66,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 16,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/__root.tsx";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "display-hero text-primary",
					children: "404"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 21,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "display-md mt-6",
					children: "This page isn't here."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 22,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-3 text-sm font-medium text-muted-foreground",
					children: "The link may be old, or the page has moved."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground",
						children: "Back home ↗"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 26,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 20,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 19,
		columnNumber: 5
	}, this);
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "display-md",
					children: "This page didn't load"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-3 text-sm font-medium text-muted-foreground",
					children: "Something went wrong on our end. Try again, or head back home."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center rounded-md bg-primary px-6 py-3 text-sm font-bold text-primary-foreground",
						children: "Try again"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: "/",
						className: "inline-flex items-center rounded-md border border-border px-6 py-3 text-sm font-bold",
						children: "Go home"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 63,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 53,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 48,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 47,
		columnNumber: 5
	}, this);
}
var Route$9 = createRootRouteWithContext()({
	staticData: { sitemap: false },
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "The Pink Digital — Strategy. Creative. Growth." },
			{
				name: "description",
				content: "The Pink Digital is a digital agency for ambitious brands across the US, Canada and UK. Brand, web, social, growth, creative and AI automation."
			},
			{
				name: "author",
				content: "The Pink Digital"
			},
			{
				property: "og:title",
				content: "The Pink Digital — Strategy. Creative. Growth."
			},
			{
				property: "og:description",
				content: "Digital looks better in pink. A digital agency for ambitious brands."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/favicon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 117,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 116,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 121,
			columnNumber: 9
		}, this)] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 119,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 115,
		columnNumber: 5
	}, this);
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-primary-foreground",
				children: "Skip to content"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 132,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Navbar, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 138,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 141,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 139,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer, {}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 143,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 131,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$7 = () => import("./routes-Du36_SW1-BtCR2u_J.mjs");
var Route$8 = createFileRoute("/")({
	staticData: { sitemap: true },
	head: () => ({ meta: [
		{ title: "The Pink Digital — Digital looks better in pink." },
		{
			name: "description",
			content: "A digital agency for ambitious brands in the US, Canada and UK. Brand strategy, web design, social, performance marketing, creative and AI automation."
		},
		{
			property: "og:title",
			content: "The Pink Digital — Digital looks better in pink."
		},
		{
			property: "og:description",
			content: "Strategy, creative and growth for ambitious brands ready to be noticed. US · Canada · UK."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./about-CSrZ8ReM-oRyEzbTb.mjs");
var Route$7 = createFileRoute("/about")({
	staticData: { sitemap: true },
	head: () => ({ meta: [
		{ title: "About — The Pink Digital" },
		{
			name: "description",
			content: "The Pink Digital is a remote creative and growth agency working with ambitious brands across the US, Canada and UK. Here's how we think and how we work."
		},
		{
			property: "og:title",
			content: "About — The Pink Digital"
		},
		{
			property: "og:description",
			content: "We're not interested in making more digital noise. We make work worth noticing."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-DJ8daF_H-i2CTPV_u.mjs");
var Route$6 = createFileRoute("/contact")({
	staticData: { sitemap: true },
	head: () => ({ meta: [
		{ title: "Start a Project — The Pink Digital" },
		{
			name: "description",
			content: "Tell us what you're trying to accomplish. Brand, website, social, paid advertising, SEO, creative or AI automation for brands in the US, Canada and UK."
		},
		{
			property: "og:title",
			content: "Start a Project — The Pink Digital"
		},
		{
			property: "og:description",
			content: "Let's make something good."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./privacy-B2YwXW3B-BEtUbNGD.mjs");
var Route$5 = createFileRoute("/privacy")({
	staticData: { sitemap: true },
	head: () => ({ meta: [
		{ title: "Privacy Policy — The Pink Digital" },
		{
			name: "description",
			content: "How The Pink Digital collects, uses and protects information submitted through this website."
		},
		{
			property: "og:title",
			content: "Privacy Policy — The Pink Digital"
		},
		{
			property: "og:description",
			content: "How we handle your information."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
function isSitemapRouteIncluded(route) {
	if (!route || route.isRoot || route.options.staticData?.sitemap !== true) return false;
	for (let ancestor = route.parentRoute; ancestor; ancestor = ancestor.parentRoute) if (ancestor.options.staticData?.sitemap === "exclude-subtree") return false;
	return true;
}
function sitemapStaticPaths(router) {
	const paths = /* @__PURE__ */ new Set();
	for (const route of Object.values(router.routesById)) {
		if (!isSitemapRouteIncluded(route) || /[$*]/.test(route.fullPath)) continue;
		const path = sitemapPathForLocation(router, router.buildLocation({ to: route.fullPath }), route.id);
		if (path !== void 0) paths.add(path);
	}
	return [...paths].sort();
}
function sitemapPathForLocation(router, location, routeId) {
	if (!isSafeSitemapPath(location.pathname) || !isSafeSitemapPath(location.publicHref)) return void 0;
	const result = router.getMatchedRoutes(location.pathname);
	const [params, foundRoute] = Array.isArray(result) ? [result[1], result[2]] : [result.routeParams, result.parseError ? void 0 : result.foundRoute];
	return params["**"] === void 0 && foundRoute?.id === routeId && isSitemapRouteIncluded(foundRoute) ? location.publicHref : void 0;
}
function isSafeSitemapPath(pathname) {
	if (!pathname.startsWith("/") || pathname.startsWith("//") || /[?#\\]/.test(pathname)) return false;
	try {
		return decodeURI(new URL(pathname, "https://sitemap.invalid").pathname) === decodeURI(pathname);
	} catch {
		return false;
	}
}
function sitemapXML(baseURL, entries) {
	const origin = new URL(baseURL);
	if (!/^https?:$/.test(origin.protocol) || origin.username || origin.password || origin.pathname !== "/" || origin.search || origin.hash) throw new Error("The sitemap base URL must be the public site origin");
	const escape = (value) => value.replace(/[&<>"']/g, (character) => ({
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&apos;"
	})[character]);
	const seen = /* @__PURE__ */ new Set();
	const urls = [];
	for (const entry of entries) {
		if (!isSafeSitemapPath(entry.path)) throw new Error("Invalid sitemap path");
		const url = new URL(entry.path, origin);
		if (seen.has(url.href)) continue;
		seen.add(url.href);
		urls.push(`<url><loc>${escape(url.href)}</loc>${entry.lastmod ? `<lastmod>${escape(entry.lastmod)}</lastmod>` : ""}</url>`);
	}
	return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}</urlset>`;
}
var BASE_URL = "https://pixel-perfect-studio-201.lovable.app";
var Route$4 = createFileRoute("/sitemap.xml")({
	staticData: { sitemap: false },
	server: { handlers: { GET: async () => {
		const router = await getRouterInstance();
		const entries = sitemapStaticPaths(router).map((path) => ({ path }));
		const routesById = router.routesById;
		const dynamic = [
			{
				routeId: "/work/$slug",
				to: "/work/$slug",
				slugs: projects.map((p) => p.slug)
			},
			{
				routeId: "/services/$slug",
				to: "/services/$slug",
				slugs: services.map((s) => s.slug)
			},
			{
				routeId: "/insights/$slug",
				to: "/insights/$slug",
				slugs: insights.map((i) => i.slug)
			}
		];
		for (const group of dynamic) {
			if (!isSitemapRouteIncluded(routesById[group.routeId])) continue;
			for (const slug of group.slugs) {
				const path = sitemapPathForLocation(router, router.buildLocation({
					to: group.to,
					params: { slug },
					search: () => ({}),
					hash: ""
				}), group.routeId);
				if (path) entries.push({ path });
			}
		}
		if (entries.length === 0) return new Response("No pages are included in this sitemap. Check route decisions and ancestor exclusions. Setting \"exclude-subtree\" on the root excludes the entire site.", {
			status: 404,
			headers: { "Cache-Control": "no-store" }
		});
		return new Response(sitemapXML(BASE_URL, entries), { headers: {
			"Content-Type": "application/xml",
			"Cache-Control": "public, max-age=3600"
		} });
	} } }
});
var $$splitComponentImporter$3 = () => import("./terms-DdcfM8AZ-BKkZg04K.mjs");
var Route$3 = createFileRoute("/terms")({
	staticData: { sitemap: true },
	head: () => ({ meta: [
		{ title: "Terms — The Pink Digital" },
		{
			name: "description",
			content: "Terms covering use of The Pink Digital website and the content published on it."
		},
		{
			property: "og:title",
			content: "Terms — The Pink Digital"
		},
		{
			property: "og:description",
			content: "Website terms of use."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./insights.index-90xDL3qo-C53sySA6.mjs");
var Route$2 = createFileRoute("/insights/")({
	staticData: { sitemap: true },
	head: () => ({ meta: [
		{ title: "Insights — The Pink Digital" },
		{
			name: "description",
			content: "Notes on brand, websites that convert, performance marketing and where AI actually belongs in a marketing stack."
		},
		{
			property: "og:title",
			content: "Insights — The Pink Digital"
		},
		{
			property: "og:description",
			content: "Thinking, occasionally out loud."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services.index-CDnSW9R0-BZEoUj8-.mjs");
var Route$1 = createFileRoute("/services/")({
	staticData: { sitemap: true },
	head: () => ({ meta: [
		{ title: "Services — The Pink Digital" },
		{
			name: "description",
			content: "Brand strategy, web design and development, social, performance marketing, creative production and AI automation from one connected team."
		},
		{
			property: "og:title",
			content: "Services — The Pink Digital"
		},
		{
			property: "og:description",
			content: "One agency. The whole digital picture. Brand, web, social, growth, creative, AI."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./work.index-BOIPU1-m-ZWuSAnYG.mjs");
var Route = createFileRoute("/work/")({
	staticData: { sitemap: true },
	head: () => ({ meta: [
		{ title: "Work — The Pink Digital" },
		{
			name: "description",
			content: "Selected case studies from The Pink Digital: brand, web, social, creative and growth work for brands in the US, Canada and UK."
		},
		{
			property: "og:title",
			content: "Work — The Pink Digital"
		},
		{
			property: "og:description",
			content: "Case studies in brand, web, social, creative and performance marketing."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$8.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$7.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var PrivacyRoute = Route$5.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$9
});
var SitemapDotxmlRoute = Route$4.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$9
});
var TermsRoute = Route$3.update({
	id: "/terms",
	path: "/terms",
	getParentRoute: () => Route$9
});
var InsightsIndexRoute = Route$2.update({
	id: "/insights/",
	path: "/insights/",
	getParentRoute: () => Route$9
});
var InsightsSlugRoute = Route$10.update({
	id: "/insights/$slug",
	path: "/insights/$slug",
	getParentRoute: () => Route$9
});
var ServicesIndexRoute = Route$1.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$9
});
var ServicesSlugRoute = Route$11.update({
	id: "/services/$slug",
	path: "/services/$slug",
	getParentRoute: () => Route$9
});
var WorkIndexRoute = Route.update({
	id: "/work/",
	path: "/work/",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	PrivacyRoute,
	SitemapDotxmlRoute,
	TermsRoute,
	InsightsSlugRoute,
	ServicesSlugRoute,
	WorkSlugRoute: Route$12.update({
		id: "/work/$slug",
		path: "/work/$slug",
		getParentRoute: () => Route$9
	}),
	InsightsIndexRoute,
	ServicesIndexRoute,
	WorkIndexRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
