import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { ActionLink } from "@/components/site/ActionLink";

export const Route = createFileRoute("/contact")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Start a Project — The Pink Digital" },
      {
        name: "description",
        content:
          "Tell us what you're trying to accomplish. Brand, website, social, paid advertising, SEO, creative or AI automation for brands in the US, Canada and UK.",
      },
      { property: "og:title", content: "Start a Project — The Pink Digital" },
      { property: "og:description", content: "Let's make something good." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

const HELP_OPTIONS = [
  "Brand",
  "Website",
  "Social Media",
  "Paid Advertising",
  "SEO",
  "Creative",
  "AI + Automation",
  "Full Digital Partnership",
];

const BUDGETS = [
  "Under $2,500",
  "$2,500–$5,000",
  "$5,000–$10,000",
  "$10,000–$25,000",
  "$25,000+",
  "Not sure yet",
];

const TIMELINES = ["ASAP", "1–2 months", "3–6 months", "Just exploring"];

const COUNTRIES = ["United States", "Canada", "United Kingdom", "Other"];

type Values = {
  name: string;
  email: string;
  company: string;
  website: string;
  country: string;
  industry: string;
  help: string[];
  brief: string;
  budget: string;
  timeline: string;
};

const initial: Values = {
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

const fieldClass =
  "w-full border-0 border-b border-input bg-transparent pb-3 pt-2 text-lg font-semibold outline-none transition-colors placeholder:font-medium placeholder:text-muted-foreground/70 focus:border-primary";

const labelClass = "eyebrow text-muted-foreground";

function Field({
  label,
  children,
  error,
  className,
}: {
  label: string;
  children: React.ReactNode;
  error?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <div className={className}>
      <label className={labelClass}>
        {label}
        <div className="mt-3 font-normal normal-case tracking-normal">{children}</div>
      </label>
      {error ? <p className="mt-2 text-xs font-bold text-destructive">{error}</p> : null}
    </div>
  );
}

function Contact() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [sent, setSent] = useState(false);

  const set = <K extends keyof Values>(key: K, value: Values[K]) =>
    setValues((v) => ({ ...v, [key]: value }));

  const toggleHelp = (option: string) =>
    setValues((v) => ({
      ...v,
      help: v.help.includes(option) ? v.help.filter((h) => h !== option) : [...v.help, option],
    }));

  const validate = () => {
    const next: Partial<Record<keyof Values, string>> = {};
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

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    // Submission payload is shaped for a future enquiries table / server function.
    console.info("project_enquiry", { ...values, submittedAt: new Date().toISOString() });
    setSent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (sent) {
    return (
      <section className="flex min-h-screen items-center bg-primary text-primary-foreground">
        <div className="shell py-32">
          <h1 className="display-xl max-w-3xl">You're officially on our radar. 💗</h1>
          <p className="mt-8 text-xl font-semibold">We'll be in touch soon.</p>
          <div className="mt-12 flex flex-wrap gap-4">
            <ActionLink to="/work" variant="dark">
              Browse our work
            </ActionLink>
            <ActionLink
              variant="dark"
              arrow="none"
              onClick={() => {
                setValues(initial);
                setSent(false);
              }}
            >
              Send another
            </ActionLink>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <header className="border-b border-border pb-16 pt-36 md:pb-20 md:pt-48">
        <div className="shell">
          <Reveal>
            <Eyebrow>Start a project</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display-hero mt-8">
              Let's make
              <br />
              something <span className="text-primary">good.</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="lead mt-10 max-w-xl">
              A few questions so the first conversation is a useful one. Takes about two minutes.
            </p>
          </Reveal>
        </div>
      </header>

      <div className="shell py-16 md:py-24">
        <form onSubmit={onSubmit} noValidate className="max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2">
            <Field label="Name" error={errors.name}>
              <input
                className={fieldClass}
                value={values.name}
                onChange={(e) => set("name", e.target.value)}
                placeholder="Alex Rivera"
                autoComplete="name"
                aria-invalid={!!errors.name}
              />
            </Field>
            <Field label="Work email" error={errors.email}>
              <input
                type="email"
                className={fieldClass}
                value={values.email}
                onChange={(e) => set("email", e.target.value)}
                placeholder="alex@company.com"
                autoComplete="email"
                aria-invalid={!!errors.email}
              />
            </Field>
            <Field label="Company" error={errors.company}>
              <input
                className={fieldClass}
                value={values.company}
                onChange={(e) => set("company", e.target.value)}
                placeholder="Company name"
                autoComplete="organization"
                aria-invalid={!!errors.company}
              />
            </Field>
            <Field label="Website">
              <input
                className={fieldClass}
                value={values.website}
                onChange={(e) => set("website", e.target.value)}
                placeholder="company.com"
                autoComplete="url"
              />
            </Field>
            <Field label="Country" error={errors.country}>
              <select
                className={cn(fieldClass, "appearance-none")}
                value={values.country}
                onChange={(e) => set("country", e.target.value)}
                aria-invalid={!!errors.country}
              >
                <option value="">Select…</option>
                {COUNTRIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Industry">
              <input
                className={fieldClass}
                value={values.industry}
                onChange={(e) => set("industry", e.target.value)}
                placeholder="e.g. Beauty, SaaS, Property"
              />
            </Field>
          </div>

          <fieldset className="mt-16">
            <legend className={labelClass}>What can we help with?</legend>
            <div className="mt-6 flex flex-wrap gap-3">
              {HELP_OPTIONS.map((option) => {
                const active = values.help.includes(option);
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleHelp(option)}
                    className={cn(
                      "rounded-md border px-4 py-2.5 text-sm font-bold transition-all duration-300",
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary hover:text-primary",
                    )}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {errors.help ? (
              <p className="mt-3 text-xs font-bold text-destructive">{errors.help}</p>
            ) : null}
          </fieldset>

          <div className="mt-16">
            <Field
              label="Tell us a little about what you're trying to accomplish."
              error={errors.brief}
            >
              <textarea
                rows={4}
                className={cn(fieldClass, "resize-none")}
                value={values.brief}
                onChange={(e) => set("brief", e.target.value)}
                placeholder="Where you are now, where you'd like to be…"
                aria-invalid={!!errors.brief}
              />
            </Field>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            <Field label="Budget" error={errors.budget}>
              <select
                className={cn(fieldClass, "appearance-none")}
                value={values.budget}
                onChange={(e) => set("budget", e.target.value)}
                aria-invalid={!!errors.budget}
              >
                <option value="">Select…</option>
                {BUDGETS.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Timeline" error={errors.timeline}>
              <select
                className={cn(fieldClass, "appearance-none")}
                value={values.timeline}
                onChange={(e) => set("timeline", e.target.value)}
                aria-invalid={!!errors.timeline}
              >
                <option value="">Select…</option>
                {TIMELINES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-8">
            <ActionLink type="submit" size="lg" arrow="right">
              Send It
            </ActionLink>
            <p className="text-sm font-medium text-muted-foreground">
              Or email{" "}
              <a
                href="mailto:hello@thepinkdigital.com"
                className="font-bold underline decoration-primary decoration-2 underline-offset-4"
              >
                hello@thepinkdigital.com
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
