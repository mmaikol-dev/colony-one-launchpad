import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Code, Building2, Smartphone, Plug, Cloud, Palette, ArrowRight, Bot, Users, Workflow, Brain } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import Tilt3D from "@/components/Tilt3D";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Colony One" },
      { name: "description", content: "End-to-end software solutions: web apps, mobile, enterprise platforms, AI agents, APIs, cloud, and product design." },
      { property: "og:title", content: "What We Build — Colony One" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Brain, title: "Agentic AI Development", desc: "Autonomous AI agents that reason, plan, and execute complex multi-step workflows on your behalf.", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80&auto=format&fit=crop" },
  { icon: Users, title: "AI Agentic Employees", desc: "Always-on digital workers for sales, support, ops, and research — trained on your stack and SOPs.", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=80&auto=format&fit=crop" },
  { icon: Workflow, title: "n8n & Workflow Automation", desc: "Custom n8n workflows, MCP integrations, and AI-powered automations that connect every tool you use.", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop" },
  { icon: Bot, title: "LLM & RAG Solutions", desc: "Custom GPTs, fine-tuned models, vector search, and RAG pipelines built on your private data.", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80&auto=format&fit=crop" },
  { icon: Code, title: "Custom Web Applications", desc: "Scalable, modern web apps built with React, Next.js, and the latest tooling.", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80&auto=format&fit=crop" },
  { icon: Building2, title: "Enterprise Software Solutions", desc: "Complex platforms tailored for large organizations — internal tools to mission-critical systems.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80&auto=format&fit=crop" },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform apps for iOS and Android using React Native and Flutter.", img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&q=80&auto=format&fit=crop" },
  { icon: Plug, title: "API Development & Integration", desc: "Robust REST and GraphQL APIs that connect your systems seamlessly and scale.", img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&q=80&auto=format&fit=crop" },
  { icon: Cloud, title: "Cloud Infrastructure & DevOps", desc: "Scalable cloud architecture on AWS, GCP, and Azure with bulletproof CI/CD pipelines.", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80&auto=format&fit=crop" },
  { icon: Palette, title: "UI/UX Design & Prototyping", desc: "Beautiful, intuitive interfaces backed by user research and craft.", img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=900&q=80&auto=format&fit=crop" },
];

const process = [
  { step: "01", title: "Discover", desc: "We dig deep into your goals, users, and constraints." },
  { step: "02", title: "Design", desc: "Wireframes, prototypes, and pixel-perfect design systems." },
  { step: "03", title: "Build", desc: "Engineering with weekly demos and full transparency." },
  { step: "04", title: "Test", desc: "QA, performance audits, and security hardening." },
  { step: "05", title: "Deploy", desc: "Smooth launches with zero-downtime CI/CD." },
  { step: "06", title: "Support", desc: "Ongoing iteration, monitoring, and improvements." },
];

const techCategories: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue", "Three.js"],
  Backend: ["Node.js", "Python", "Go", "Express", "FastAPI", "GraphQL"],
  Mobile: ["React Native", "Flutter", "Swift", "Kotlin"],
  Cloud: ["AWS", "GCP", "Azure", "Cloudflare", "Vercel", "Docker", "Kubernetes"],
  Databases: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  "AI & Agents": ["OpenAI", "Anthropic Claude", "LangChain", "LangGraph", "n8n", "MCP", "Pinecone", "Vercel AI SDK"],
};

function ServicesPage() {
  const [tab, setTab] = useState<keyof typeof techCategories>("Frontend");
  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="relative overflow-hidden py-32 text-center">
        <div className="absolute inset-0 mesh-bg opacity-70" />
        <ParticleField density={60} />
        <div className="relative mx-auto max-w-4xl px-6">
          <p className="mb-4 text-sm uppercase tracking-widest text-primary">Services</p>
          <h1 className="font-display text-6xl font-bold md:text-8xl">What we <span className="text-glow">build</span></h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">End-to-end software solutions tailored for your business.</p>
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
              <Tilt3D className="group relative h-full overflow-hidden rounded-2xl glass glass-hover">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex rounded-xl bg-white/85 p-3 text-primary shadow-sm backdrop-blur">
                    <s.icon size={22} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  <Link to="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-4xl font-bold md:text-5xl">How we <span className="text-glow">work</span></h2>
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group text-center">
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-white font-display text-xl font-semibold text-primary shadow-sm transition-all group-hover:border-primary group-hover:shadow-[0_20px_40px_-10px_var(--primary)]">
                  {p.step}
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH ARSENAL */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Our tech <span className="text-glow">arsenal</span></h2>
        <div className="mt-8 flex flex-wrap gap-2">
          {Object.keys(techCategories).map((cat) => (
            <button
              key={cat}
              onClick={() => setTab(cat as keyof typeof techCategories)}
              className={`rounded-full border px-5 py-2 text-sm transition-all ${
                tab === cat
                  ? "border-primary bg-primary text-primary-foreground shadow-[0_15px_30px_-10px_var(--primary)]"
                  : "border-border bg-white/60 text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-8 flex flex-wrap gap-3">
          {techCategories[tab].map((t) => (
            <div key={t} className="rounded-xl glass px-5 py-3 font-display text-sm font-medium">
              {t}
            </div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-32 text-center">
        <h2 className="font-display text-4xl font-bold md:text-6xl">Have a project <span className="text-glow">in mind?</span></h2>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-all hover:shadow-[0_25px_50px_-10px_var(--primary)]">
          Let's Talk <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
