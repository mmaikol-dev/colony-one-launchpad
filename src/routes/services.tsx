import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Code, Building2, Smartphone, Plug, Cloud, Palette, ArrowRight } from "lucide-react";
import ParticleField from "@/components/ParticleField";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Colony One" },
      { name: "description", content: "End-to-end software solutions: web apps, mobile, enterprise platforms, APIs, cloud, and product design." },
      { property: "og:title", content: "What We Build — Colony One" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Code, title: "Custom Web Applications", desc: "Scalable, modern web apps built with React, Next.js, and the latest tooling — designed to perform and delight." },
  { icon: Building2, title: "Enterprise Software Solutions", desc: "Complex platforms tailored for large organizations. From internal tools to mission-critical systems." },
  { icon: Smartphone, title: "Mobile App Development", desc: "Native and cross-platform apps for iOS and Android using React Native and Flutter." },
  { icon: Plug, title: "API Development & Integration", desc: "Robust REST and GraphQL APIs that connect your systems seamlessly and scale without breaking." },
  { icon: Cloud, title: "Cloud Infrastructure & DevOps", desc: "Scalable cloud architecture on AWS, GCP, and Azure with bulletproof CI/CD pipelines." },
  { icon: Palette, title: "UI/UX Design & Prototyping", desc: "Beautiful, intuitive interfaces backed by user research and a relentless attention to detail." },
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
};

function ServicesPage() {
  const [tab, setTab] = useState<keyof typeof techCategories>("Frontend");
  return (
    <div className="pt-24">
      {/* HERO */}
      <section className="relative overflow-hidden py-32 text-center">
        <ParticleField density={60} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="relative mx-auto max-w-4xl px-6">
          <p className="mb-4 text-sm uppercase tracking-widest text-accent">Services</p>
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
              className="group relative overflow-hidden rounded-2xl glass glass-hover tilt-card p-8"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/5 blur-3xl transition-all group-hover:bg-accent/15" />
              <div className="relative">
                <div className="mb-6 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                  <s.icon size={28} />
                </div>
                <h3 className="font-display text-2xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                  Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-4xl font-bold md:text-5xl">How we <span className="text-glow">work</span></h2>
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent md:block" />
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-6">
            {process.map((p, i) => (
              <motion.div key={p.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group text-center">
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-accent/30 bg-background font-display text-xl font-semibold text-accent transition-all group-hover:border-accent group-hover:shadow-[0_0_30px_var(--cyan)]">
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
                  ? "border-accent bg-accent text-accent-foreground shadow-[0_0_30px_var(--cyan)]"
                  : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
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
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-accent-foreground transition-all hover:shadow-[0_0_50px_var(--cyan)]">
          Let's Talk <ArrowRight size={18} />
        </Link>
      </section>
    </div>
  );
}
