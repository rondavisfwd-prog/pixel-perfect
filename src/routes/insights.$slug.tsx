import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getInsight, insights } from "@/data/insights";
import { CTASection } from "@/components/site/sections";
import { Eyebrow } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/insights/$slug")({
  staticData: { sitemap: true },
  loader: ({ params }) => {
    const post = getInsight(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — The Pink Digital` },
          { name: "description", content: loaderData.excerpt },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.excerpt },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [],
  }),
  component: Article,
});

function Article() {
  const post = Route.useLoaderData();
  const more = insights.filter((i) => i.slug !== post.slug);

  return (
    <>
      <article>
        <header className="border-b border-border pb-14 pt-36 md:pt-48">
          <div className="shell">
            <Reveal>
              <Eyebrow>{post.category}</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display-xl mt-8 max-w-4xl">{post.title}</h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="eyebrow mt-10 text-muted-foreground">
                {post.date} · {post.read}
              </p>
            </Reveal>
          </div>
        </header>

        <div className="shell py-16 md:py-24">
          <div className="max-w-3xl space-y-7 text-lg font-medium leading-relaxed md:text-xl">
            {post.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      <section className="border-t border-border py-16">
        <div className="shell">
          <Eyebrow>Keep reading</Eyebrow>
          <div className="mt-8 border-t border-border">
            {more.map((item) => (
              <Link
                key={item.slug}
                to="/insights/$slug"
                params={{ slug: item.slug }}
                className="group flex flex-col gap-2 border-b border-border py-7 md:flex-row md:items-baseline md:justify-between"
              >
                <h3 className="display-md transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {item.category} · {item.read}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
