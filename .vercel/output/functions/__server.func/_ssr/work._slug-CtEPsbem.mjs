import { i as getProject } from "./insights-DLbSV-QZ.mjs";
import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-CtEPsbem.js
var $$splitComponentImporter = () => import("./work._slug-CJ5uZ2bG.mjs");
var Route = createFileRoute("/work/$slug")({
	staticData: { sitemap: true },
	loader: ({ params }) => {
		const project = getProject(params.slug);
		if (!project) throw notFound();
		return project;
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.title} case study — The Pink Digital` },
		{
			name: "description",
			content: `${loaderData.headline} ${loaderData.result}.`
		},
		{
			property: "og:title",
			content: `${loaderData.title} — The Pink Digital`
		},
		{
			property: "og:description",
			content: loaderData.headline
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] : [] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
