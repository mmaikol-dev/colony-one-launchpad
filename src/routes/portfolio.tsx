import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Github, ArrowRight, ExternalLink } from "lucide-react";
import Tilt3D from "@/components/Tilt3D";

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

type Cat = "All" | "Fintech" | "Healthcare" | "Logistics" | "Enterprise" | "AI & Automation";

const projects: { name: string; desc: string; tags: string[]; cat: Exclude<Cat, "All">; client?: string; featured?: boolean; img: string }[] = [
  { name: "Telewomens SACCO Accounting", client: "Telewomens Group", desc: "End-to-end SACCO accounting platform with member management, loans, and financial reporting.", tags: ["Next.js", "Postgres", "Node"], cat: "Fintech", featured: true, img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop" },
  { name: "RealDeal Logistics Platform", client: "RealDeal Logistics", desc: "Fleet, dispatch, and shipment tracking system with realtime driver telemetry.", tags: ["React", "Mapbox", "Node"], cat: "Logistics", featured: true, img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80&auto=format&fit=crop" },
  { name: "Perisquare HMS", client: "Perisquare Medical & Laboratories", desc: "Hospital management system covering EMR, lab results, billing, and pharmacy.", tags: ["Next.js", "Postgres", "HL7"], cat: "Healthcare", featured: true, img: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1200&q=80&auto=format&fit=crop" },
  { name: "Aquavita Operations", client: "Aquavita", desc: "Bottling and distribution operations platform with inventory and route management.", tags: ["React", "Supabase"], cat: "Enterprise", img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=1200&q=80&auto=format&fit=crop" },
  { name: "Phone Farm Orchestrator", desc: "Centralized control plane for managing large-scale phone farms and device fleets.", tags: ["Go", "ADB", "Redis"], cat: "AI & Automation", img: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=80&auto=format&fit=crop" },
  { name: "Warehouse Management System", desc: "Barcode-driven WMS with bin locations, picking waves, and realtime stock sync.", tags: ["Next.js", "Postgres"], cat: "Logistics", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80&auto=format&fit=crop" },
  { name: "Payments Gateway", desc: "Multi-rail payments system supporting M-Pesa, cards, and bank transfers.", tags: ["Go", "Postgres", "Webhooks"], cat: "Fintech", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80&auto=format&fit=crop" },
  { name: "Agentic AI Workforce", desc: "n8n + LLM agents that handle support, lead qualification, and back-office ops 24/7.", tags: ["n8n", "OpenAI", "LangGraph"], cat: "AI & Automation", featured: true, img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80&auto=format&fit=crop" },
];

const filters: Cat[] = ["All", "Fintech", "Healthcare", "Logistics", "Enterprise", "AI & Automation"];

function PortfolioPage() {
  const [filter, setFilter] = useState<Cat>("All");
  const filtered = projects.filter((p) => filter === "All" || p.cat === filter);
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="pt-32">
      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 py-12 text-center">
        <div className="absolute inset-0 mesh-bg opacity-70" />
        <div className="relative">
          <p className="mb-4 text-sm uppercase tracking-widest text-primary">Portfolio</p>
          <h1 className="font-display text-6xl font-bold md:text-8xl">Our <span className="text-glow">work</span></h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">A selection of projects we've built for clients and enterprises.</p>

          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative rounded-full border px-5 py-2 text-sm transition-all ${
                  filter === f
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_15px_30px_-10px_var(--primary)]"
                    : "border-border bg-white/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.name}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: i * 0.05 }}
              >
                <Tilt3D className="group relative block overflow-hidden rounded-2xl glass glass-hover shine">
                  <a href="https://github.com/mmaikol-dev" target="_blank" rel="noreferrer" className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-lg">
                          View Project <ExternalLink size={14} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                        <Github size={18} className="text-muted-foreground transition-colors group-hover:text-primary" />
                      </div>
                      {p.client && <p className="mt-1 text-xs uppercase tracking-widest text-primary">{p.client}</p>}
                      <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="rounded-full border border-border bg-white/70 px-3 py-1 text-xs text-muted-foreground">{t}</span>
                        ))}
                      </div>
                    </div>
                  </a>
                </Tilt3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          More on GitHub →{" "}
          <a href="https://github.com/mmaikol-dev" target="_blank" rel="noreferrer" className="text-primary hover:underline">github.com/mmaikol-dev</a>
        </p>
      </section>

      {/* CASE STUDY SPOTLIGHT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Case study <span className="text-glow">spotlight</span></h2>
        <div className="mt-12 space-y-8">
          {featured.map((f) => (
            <motion.div key={f.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-8 overflow-hidden rounded-3xl glass p-6 md:grid-cols-[1.1fr_1fr] md:p-8">
              <div className="relative overflow-hidden rounded-2xl">
                <img src={f.img} alt={f.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-3xl font-bold">{f.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((t) => <span key={t} className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary">{t}</span>)}
                  </div>
                </div>
                {f.client && <p className="mt-1 text-xs uppercase tracking-widest text-primary">{f.client}</p>}
                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary">Problem</p>
                    <p className="mt-2 text-sm text-muted-foreground">Legacy systems were slow and impossible to scale.</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary">Solution</p>
                    <p className="mt-2 text-sm text-muted-foreground">A modern platform with service-oriented architecture and realtime sync.</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-primary">Outcome</p>
                    <p className="mt-2 text-sm text-muted-foreground">3× faster workflows and 60% fewer support tickets.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <h2 className="font-display text-4xl font-bold md:text-6xl">Want to be our next <span className="text-glow">success story?</span></h2>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-all hover:shadow-[0_25px_50px_-10px_var(--primary)]">
          Start a Project <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
