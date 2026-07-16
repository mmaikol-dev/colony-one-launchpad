import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Scroll, Shield, Sparkles, Feather, Crown, Hexagon, Bot, Users, Workflow, Brain } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import Tilt3D from "@/components/Tilt3D";
import architect from "@/assets/myth-architect.jpg";
import beeQueen from "@/assets/myth-bee-queen.jpg";
import antWarrior from "@/assets/myth-ant-warrior.jpg";
import antMetropolis from "@/assets/myth-ant-metropolis.jpg";
import nectar from "@/assets/myth-nectar.jpg";
import amphitheater from "@/assets/myth-amphitheater.jpg";
import statues from "@/assets/myth-statues.jpg";
import beePalace from "@/assets/myth-bee-palace.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Rites — Colony One" },
      { name: "description", content: "The sacred rites of Colony One: web temples, mobile auguries, enterprise citadels, agentic oracles, cloud acropolises." },
      { property: "og:image", content: amphitheater },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Brain, title: "Agentic Oracles", desc: "Autonomous AI agents that reason, plan and execute — the digital seers of your court.", img: beeQueen },
  { icon: Users, title: "Divine Digital Employees", desc: "Tireless AI workers for sales, support and research — trained on your sacred scrolls.", img: architect },
  { icon: Workflow, title: "n8n & Automation Auguries", desc: "Workflows that connect every altar, temple and marketplace you rely upon.", img: nectar },
  { icon: Bot, title: "LLM & RAG Sanctuaries", desc: "Custom oracles, fine-tuned models and vector-search reliquaries over your private knowledge.", img: amphitheater },
  { icon: Scroll, title: "Web Temples", desc: "Marble-clean web applications carved in React, Next.js and the finest modern tooling.", img: beePalace },
  { icon: Shield, title: "Enterprise Citadels", desc: "Fortified platforms and internal systems built to withstand any siege.", img: antWarrior },
  { icon: Sparkles, title: "Mobile Auguries", desc: "Native and cross-platform apps for iOS and Android — omens in every pocket.", img: statues },
  { icon: Feather, title: "API Aqueducts", desc: "REST and GraphQL aqueducts channelling data between every temple in your realm.", img: antMetropolis },
  { icon: Crown, title: "Cloud Acropolises", desc: "Scalable AWS, GCP and Azure architectures with bulletproof CI/CD rites.", img: nectar },
  { icon: Hexagon, title: "Design of the Divine", desc: "Interfaces sculpted with the reverence of Athenian craftsmen — beauty backed by research.", img: architect },
];

const process = [
  { step: "I",   title: "Divination", desc: "We commune with your goals, users and constraints." },
  { step: "II",  title: "Blueprint",  desc: "Sketches, wireframes and pixel-perfect design systems etched in marble." },
  { step: "III", title: "Forge",      desc: "Engineering with weekly ceremonies and unwavering transparency." },
  { step: "IV",  title: "Trial",      desc: "QA, performance auguries and security hardening." },
  { step: "V",   title: "Consecrate", desc: "Zero-downtime deployment — the temple opens its doors." },
  { step: "VI",  title: "Tend",       desc: "Ongoing rites of iteration, monitoring and evolution." },
];

const techCategories: Record<string, string[]> = {
  "Web Marble":     ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue", "Three.js"],
  "Bronze Engines": ["Node.js", "Python", "Go", "Express", "FastAPI", "GraphQL"],
  "Auguries":       ["React Native", "Flutter", "Swift", "Kotlin"],
  "Sky Citadels":   ["AWS", "GCP", "Azure", "Cloudflare", "Vercel", "Docker", "Kubernetes"],
  "Reliquaries":    ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  "Oracles":        ["OpenAI", "Anthropic Claude", "LangChain", "LangGraph", "n8n", "MCP", "Pinecone", "Vercel AI SDK"],
};

function ServicesPage() {
  const [tab, setTab] = useState<keyof typeof techCategories>("Web Marble");
  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="relative overflow-hidden py-32 text-center">
        <div className="absolute inset-0">
          <img src={amphitheater} alt="Golden amphitheater at dusk" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <ParticleField density={50} />
        <div className="relative mx-auto max-w-4xl px-6">
          <p className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">Book of Rites</p>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase md:text-7xl">Sacred <span className="text-glow">Rites</span></h1>
          <div className="laurel-divider my-6 mx-auto max-w-md"><span className="font-display text-[11px] uppercase tracking-[0.28em]">✦</span></div>
          <p className="mx-auto max-w-xl font-serif text-lg italic text-muted-foreground">Ten disciplines by which we consecrate software.</p>
        </div>
      </section>

      {/* GRID */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Tilt3D className="group relative h-full overflow-hidden glass glass-hover">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex border border-primary/60 bg-background/85 p-3 text-primary backdrop-blur">
                    <s.icon size={20} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide">{s.title}</h3>
                  <p className="mt-2 font-serif leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.24em] text-primary">
                    Invoke this rite <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">The Six Ceremonies</p>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase md:text-5xl">How we <span className="text-glow">forge</span></h2>
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent md:block" />
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group text-center">
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center border border-primary/50 bg-background font-display text-lg font-semibold text-primary shadow-sm transition-all group-hover:border-primary group-hover:shadow-[0_20px_40px_-10px_var(--gold)] hex-clip">
                  {p.step}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide">{p.title}</h3>
                <p className="mt-2 font-serif text-sm text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH ARSENAL */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">The Armory</p>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase md:text-5xl">Our <span className="text-glow">arsenal</span></h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {Object.keys(techCategories).map((cat) => (
            <button
              key={cat}
              onClick={() => setTab(cat as keyof typeof techCategories)}
              className={`border px-5 py-2 font-display text-[11px] uppercase tracking-[0.22em] transition-all ${
                tab === cat
                  ? "border-primary bg-primary text-primary-foreground shadow-[0_15px_30px_-10px_var(--gold)]"
                  : "border-primary/40 bg-background/60 text-muted-foreground hover:border-primary/80 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 flex flex-wrap gap-3">
          {techCategories[tab].map((t) => (
            <div key={t} className="glass px-5 py-3 font-display text-sm uppercase tracking-widest">
              {t}
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <h2 className="font-display text-4xl font-bold uppercase md:text-6xl">A labour <span className="text-glow">in mind?</span></h2>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-8 py-4 font-display text-xs uppercase tracking-[0.24em] text-primary-foreground transition-all hover:shadow-[0_25px_50px_-10px_var(--gold)]">
          Speak your vision <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
