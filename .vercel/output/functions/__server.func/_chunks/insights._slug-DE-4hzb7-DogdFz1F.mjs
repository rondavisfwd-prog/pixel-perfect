import { r as getInsight } from "./insights-DLbSV-QZ-Cq1DXJpc.mjs";
import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "./_libs/@tanstack/react-router-D-bzuk39.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights._slug-DE-4hzb7.js
var $$splitComponentImporter = () => import("./insights._slug-DQUJnMOG-ngz0Bvds.mjs");
var Route = createFileRoute("/insights/$slug")({
	staticData: { sitemap: true },
	loader: ({ params }) => {
		const post = getInsight(params.slug);
		if (!post) throw notFound();
		return post;
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.title} — The Pink Digital` },
		{
			name: "description",
			content: loaderData.excerpt
		},
		{
			property: "og:title",
			content: loaderData.title
		},
		{
			property: "og:description",
			content: loaderData.excerpt
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
