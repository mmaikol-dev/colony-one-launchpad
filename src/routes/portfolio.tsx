import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Github, ArrowRight, ExternalLink } from "lucide-react";
import Tilt3D from "@/components/Tilt3D";
import beePalace from "@/assets/myth-bee-palace.jpg";
import antWarrior from "@/assets/myth-ant-warrior.jpg";
import antMetropolis from "@/assets/myth-ant-metropolis.jpg";
import nectar from "@/assets/myth-nectar.jpg";
import amphitheater from "@/assets/myth-amphitheater.jpg";
import statues from "@/assets/myth-statues.jpg";
import architect from "@/assets/myth-architect.jpg";
import beeQueen from "@/assets/myth-bee-queen.jpg";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Chronicles — Colony One" },
      { name: "description", content: "Chronicles of the colony: platforms, temples and citadels we have forged for allies across three continents." },
      { property: "og:image", content: beePalace },
    ],
  }),
  component: PortfolioPage,
});

type Cat = "All" | "Treasury" | "Asclepion" | "Cartography" | "Citadel" | "Oracles";

const projects: { name: string; desc: string; tags: string[]; cat: Exclude<Cat, "All">; client?: string; featured?: boolean; img: string }[] = [
  { name: "Telewomens SACCO Treasury", client: "Telewomens Group", desc: "A treasury of the co-operative — member scrolls, loans, and sacred ledgers of finance.", tags: ["Next.js", "Postgres", "Node"], cat: "Treasury", featured: true, img: nectar },
  { name: "RealDeal Logistics Roads",  client: "RealDeal Logistics", desc: "Chariots of trade — fleet, dispatch and realtime scouts across the empire's roads.", tags: ["React", "Mapbox", "Node"], cat: "Cartography", featured: true, img: antMetropolis },
  { name: "Perisquare Asclepion",       client: "Perisquare Medical & Laboratories", desc: "A temple of Asclepius: patient scrolls, laboratories, apothecary and billing rites.", tags: ["Next.js", "Postgres", "HL7"], cat: "Asclepion", featured: true, img: architect },
  { name: "Aquavita Waterworks",        client: "Aquavita", desc: "Bottling and distribution operations, orchestrated like Roman aqueducts.", tags: ["React", "Supabase"], cat: "Citadel", img: statues },
  { name: "Phone Farm Praetorium",      desc: "A centralised praetorium commanding vast phone farms and device legions.", tags: ["Go", "ADB", "Redis"], cat: "Oracles", img: antWarrior },
  { name: "Warehouse Citadel (WMS)",    desc: "Barcode-driven fortress with bin locations, picking waves and realtime inventory rites.", tags: ["Next.js", "Postgres"], cat: "Citadel", img: amphitheater },
  { name: "Payments Aqueduct",          desc: "Multi-rail payments channel — M-Pesa, cards and bank transfers flowing as one river.", tags: ["Go", "Postgres", "Webhooks"], cat: "Treasury", img: beePalace },
  { name: "Agentic Oracle Court",       desc: "n8n and LLM agents that hear petitions, qualify leads and run back-office rites, day and night.", tags: ["n8n", "OpenAI", "LangGraph"], cat: "Oracles", featured: true, img: beeQueen },
];

const filters: Cat[] = ["All", "Treasury", "Asclepion", "Cartography", "Citadel", "Oracles"];

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
          <p className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">Great Library</p>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase md:text-7xl">The <span className="text-glow">Chronicles</span></h1>
          <div className="laurel-divider my-6 mx-auto max-w-md"><span className="font-display text-[11px] uppercase tracking-[0.28em]">✦</span></div>
          <p className="mx-auto max-w-xl font-serif text-lg italic text-muted-foreground">Selected works from our marble scriptorium, arranged by discipline.</p>

          <div className="mx-auto mt-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`border px-5 py-2 font-display text-[11px] uppercase tracking-[0.22em] transition-all ${
                  filter === f
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_15px_30px_-10px_var(--gold)]"
                    : "border-primary/40 bg-background/60 text-muted-foreground hover:border-primary/80 hover:text-foreground"
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
                <Tilt3D className="group relative block overflow-hidden glass glass-hover shine">
                  <a href="https://github.com/mmaikol-dev" target="_blank" rel="noreferrer" className="block">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                        <div className="flex items-center gap-2 rounded-sm border border-primary bg-primary px-5 py-2 font-display text-[11px] uppercase tracking-[0.22em] text-primary-foreground shadow-lg">
                          Read Chronicle <ExternalLink size={12} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between">
                        <h3 className="font-display text-xl font-semibold uppercase tracking-wide">{p.name}</h3>
                        <Github size={18} className="text-muted-foreground transition-colors group-hover:text-primary" />
                      </div>
                      {p.client && <p className="mt-1 font-display text-[10px] uppercase tracking-[0.28em] text-primary">{p.client}</p>}
                      <p className="mt-2 font-serif text-muted-foreground">{p.desc}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span key={t} className="border border-primary/40 bg-background/70 px-3 py-1 font-display text-[10px] uppercase tracking-widest text-primary">{t}</span>
                        ))}
                      </div>
                    </div>
                  </a>
                </Tilt3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-10 text-center font-serif italic text-muted-foreground">
          More scrolls on GitHub —{" "}
          <a href="https://github.com/mmaikol-dev" target="_blank" rel="noreferrer" className="text-primary hover:underline">github.com/mmaikol-dev</a>
        </p>
      </section>

      {/* CASE STUDY SPOTLIGHT */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">Illuminated Manuscripts</p>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase md:text-5xl">Featured <span className="text-glow">chronicles</span></h2>
        <div className="mt-12 space-y-8">
          {featured.map((f) => (
            <motion.div key={f.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-8 overflow-hidden glass p-6 md:grid-cols-[1.1fr_1fr] md:p-8">
              <div className="relative overflow-hidden gold-frame">
                <img src={f.img} alt={f.name} loading="lazy" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-3xl font-bold uppercase tracking-wide">{f.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((t) => <span key={t} className="border border-primary/40 bg-primary/10 px-3 py-1 font-display text-[10px] uppercase tracking-widest text-primary">{t}</span>)}
                  </div>
                </div>
                {f.client && <p className="mt-1 font-display text-[10px] uppercase tracking-[0.28em] text-primary">{f.client}</p>}
                <div className="mt-6 grid gap-6 sm:grid-cols-3">
                  <div>
                    <p className="font-display text-[10px] uppercase tracking-[0.28em] text-primary">The Trial</p>
                    <p className="mt-2 font-serif text-muted-foreground">Legacy systems were slow and impossible to scale.</p>
                  </div>
                  <div>
                    <p className="font-display text-[10px] uppercase tracking-[0.28em] text-primary">The Rite</p>
                    <p className="mt-2 font-serif text-muted-foreground">A modern platform, service-oriented and blessed with realtime sync.</p>
                  </div>
                  <div>
                    <p className="font-display text-[10px] uppercase tracking-[0.28em] text-primary">The Omen</p>
                    <p className="mt-2 font-serif text-muted-foreground">3× swifter workflows and 60% fewer supplications to the support altar.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <h2 className="font-display text-4xl font-bold uppercase md:text-6xl">Shall your name be <span className="text-glow">the next chronicle?</span></h2>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-8 py-4 font-display text-xs uppercase tracking-[0.24em] text-primary-foreground transition-all hover:shadow-[0_25px_50px_-10px_var(--gold)]">
          Petition the Colony <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
