import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Github, ArrowRight, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Colony One" },
      { name: "description", content: "Selected projects we've built for clients and enterprises." },
      { property: "og:title", content: "Our Work — Colony One" },
    ],
  }),
  component: PortfolioPage,
});

type Cat = "All" | "Web Apps" | "Mobile" | "Enterprise" | "APIs";

const projects: { name: string; desc: string; tags: string[]; cat: Exclude<Cat, "All">; featured?: boolean }[] = [
  { name: "Helios CRM", desc: "Sales operations platform for a fintech scale-up.", tags: ["React", "Node", "Postgres"], cat: "Web Apps", featured: true },
  { name: "Apex Health", desc: "Telemedicine app serving 50k+ patients.", tags: ["Flutter", "Firebase"], cat: "Mobile" },
  { name: "Forge ERP", desc: "Enterprise resource platform for manufacturing.", tags: ["Next.js", "GraphQL", "AWS"], cat: "Enterprise", featured: true },
  { name: "Pulse Analytics", desc: "Realtime dashboard for ecommerce growth teams.", tags: ["React", "ClickHouse"], cat: "Web Apps" },
  { name: "Beacon API", desc: "High-throughput payments API for African merchants.", tags: ["Go", "Postgres"], cat: "APIs" },
  { name: "Nimbus", desc: "Cross-platform productivity app with offline sync.", tags: ["React Native", "Supabase"], cat: "Mobile" },
  { name: "Atlas Logistics", desc: "Fleet management platform for global shipping.", tags: ["Next.js", "Mapbox"], cat: "Enterprise" },
  { name: "Quanta Auth", desc: "Identity & access platform with SSO.", tags: ["Node", "OIDC"], cat: "APIs" },
];

const filters: Cat[] = ["All", "Web Apps", "Mobile", "Enterprise", "APIs"];

function PortfolioPage() {
  const [filter, setFilter] = useState<Cat>("All");
  const filtered = projects.filter((p) => filter === "All" || p.cat === filter);
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="pt-32">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-12 text-center">
        <p className="mb-4 text-sm uppercase tracking-widest text-accent">Portfolio</p>
        <h1 className="font-display text-6xl font-bold md:text-8xl">Our <span className="text-glow">work</span></h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">A selection of projects we've built for clients and enterprises.</p>

        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative rounded-full border px-5 py-2 text-sm transition-all ${
                filter === f
                  ? "border-accent bg-accent text-accent-foreground shadow-[0_0_30px_var(--cyan)]"
                  : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.a
                key={p.name}
                layout
                href="https://github.com/mmaikol-dev"
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
                className="group relative block overflow-hidden rounded-2xl glass glass-hover"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-gradient-to-br from-electric/30 via-background to-accent/15 grid-bg">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-accent-foreground">
                      View Project <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                    <Github size={18} className="text-muted-foreground transition-colors group-hover:text-accent" />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          More on GitHub →{" "}
          <a href="https://github.com/mmaikol-dev" target="_blank" rel="noreferrer" className="text-accent hover:underline">github.com/mmaikol-dev</a>
        </p>
      </section>

      {/* CASE STUDY SPOTLIGHT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Case study <span className="text-glow">spotlight</span></h2>
        <div className="mt-12 space-y-8">
          {featured.map((f) => (
            <motion.div key={f.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl glass p-8 md:p-12">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="font-display text-3xl font-bold">{f.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {f.tags.map((t) => <span key={t} className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">{t}</span>)}
                </div>
              </div>
              <div className="mt-8 grid gap-8 md:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent">Problem</p>
                  <p className="mt-2 text-sm text-muted-foreground">Legacy systems were slow, brittle, and impossible to scale across regions.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent">Solution</p>
                  <p className="mt-2 text-sm text-muted-foreground">A modern platform with a service-oriented architecture, realtime sync, and a beautiful UI.</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-accent">Outcome</p>
                  <p className="mt-2 text-sm text-muted-foreground">3× faster workflows, 60% reduction in support tickets, and a happy team.</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <h2 className="font-display text-4xl font-bold md:text-6xl">Want to be our next <span className="text-glow">success story?</span></h2>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-accent-foreground transition-all hover:shadow-[0_0_50px_var(--cyan)]">
          Start a Project <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
