import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Code2, Shield, Sparkles, Smartphone, Cloud, Hexagon, Bot, Users, Workflow, Brain, Plug } from "lucide-react";
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
      { title: "Services — Colony One" },
      { name: "description", content: "Web, mobile, enterprise systems, agentic AI, automation and cloud engineering by Colony One." },
      { property: "og:image", content: amphitheater },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Brain, title: "Agentic AI", desc: "Autonomous AI agents that reason, plan and execute across your tools and data.", img: beeQueen },
  { icon: Users, title: "AI Digital Employees", desc: "Tireless AI workers for sales, support and research — trained on your knowledge base.", img: architect },
  { icon: Workflow, title: "n8n & Automation", desc: "Workflows that connect every SaaS, database and API in your stack.", img: nectar },
  { icon: Bot, title: "LLM & RAG Systems", desc: "Custom LLM apps, fine-tuned models and vector search over your private data.", img: amphitheater },
  { icon: Code2, title: "Web Applications", desc: "Fast, accessible web apps built with React, Next.js and modern tooling.", img: beePalace },
  { icon: Shield, title: "Enterprise Systems", desc: "Internal platforms, SACCO, HMS, WMS and payments — built to scale safely.", img: antWarrior },
  { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform apps for iOS and Android with React Native and Flutter.", img: statues },
  { icon: Plug, title: "APIs & Integrations", desc: "REST and GraphQL APIs that keep data flowing between every system you own.", img: antMetropolis },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Scalable AWS, GCP and Azure architecture with rock-solid CI/CD.", img: nectar },
  { icon: Hexagon, title: "Product Design", desc: "UI/UX design and design systems — beauty backed by user research.", img: architect },
];

const process = [
  { step: "01", title: "Discover", desc: "We understand your goals, users and constraints." },
  { step: "02", title: "Design",   desc: "Wireframes, prototypes and a design system." },
  { step: "03", title: "Build",    desc: "Engineering in weekly sprints with full transparency." },
  { step: "04", title: "Test",     desc: "QA, performance and security hardening." },
  { step: "05", title: "Ship",     desc: "Zero-downtime deployment to production." },
  { step: "06", title: "Support",  desc: "Ongoing iteration, monitoring and improvement." },
];

const techCategories: Record<string, string[]> = {
  "Web":        ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue", "Three.js"],
  "Backend":    ["Node.js", "Python", "Go", "Express", "FastAPI", "GraphQL"],
  "Mobile":     ["React Native", "Flutter", "Swift", "Kotlin"],
  "Cloud":      ["AWS", "GCP", "Azure", "Cloudflare", "Vercel", "Docker", "Kubernetes"],
  "Data":       ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  "AI":         ["OpenAI", "Anthropic Claude", "LangChain", "LangGraph", "n8n", "MCP", "Pinecone", "Vercel AI SDK"],
};

function ServicesPage() {
  const [tab, setTab] = useState<keyof typeof techCategories>("Web");
  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="relative overflow-hidden py-32 text-center">
        <div className="absolute inset-0">
          <img src={amphitheater} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/85" />
        </div>
        <ParticleField density={50} />
        <div className="relative mx-auto max-w-4xl px-6">
          <p className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">Services</p>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase md:text-7xl">What we <span className="text-glow">build</span></h1>
          <div className="laurel-divider my-6 mx-auto max-w-md"><span className="font-display text-[11px] uppercase tracking-[0.28em]">✦</span></div>
          <p className="mx-auto max-w-xl font-serif text-lg italic text-muted-foreground">Ten disciplines we combine to ship modern software.</p>
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
                    Get in touch <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">Our process</p>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase md:text-5xl">How we <span className="text-glow">work</span></h2>
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

      {/* TECH STACK */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">Our stack</p>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase md:text-5xl">Technologies we <span className="text-glow">use</span></h2>
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
        <h2 className="font-display text-4xl font-bold uppercase md:text-6xl">Have a project <span className="text-glow">in mind?</span></h2>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-8 py-4 font-display text-xs uppercase tracking-[0.24em] text-primary-foreground transition-all hover:shadow-[0_25px_50px_-10px_var(--gold)]">
          Let's talk <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
