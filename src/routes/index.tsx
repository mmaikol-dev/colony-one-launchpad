import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Cloud, Smartphone, Sparkles } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import CountUp from "@/components/CountUp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Colony One — Custom Software for Businesses & Enterprises" },
      { name: "description", content: "We build software that transforms businesses. Web apps, mobile, enterprise platforms, cloud & DevOps." },
    ],
  }),
  component: HomePage,
});

const features = [
  { icon: Code2, title: "Web & Mobile Apps", desc: "Beautiful, performant apps people love to use." },
  { icon: Sparkles, title: "Enterprise Platforms", desc: "Mission-critical systems built to scale." },
  { icon: Cloud, title: "Cloud & DevOps", desc: "Modern infrastructure with rock-solid pipelines." },
];

const projects = [
  { name: "Helios CRM", desc: "Sales platform for a fintech scale-up.", tags: ["React", "Node", "Postgres"] },
  { name: "Apex Health", desc: "Telemedicine app serving 50k+ patients.", tags: ["Flutter", "Firebase"] },
  { name: "Forge ERP", desc: "Enterprise resource platform for manufacturing.", tags: ["Next.js", "GraphQL", "AWS"] },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 gradient-radial" />
        <ParticleField density={100} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />

        {/* floating code snippets */}
        <motion.pre
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="absolute left-8 top-32 hidden rounded-lg glass p-3 text-xs text-accent/70 lg:block animate-float"
        >
{`const colony = await build({
  scale: 'enterprise',
  vibe: 'premium',
});`}
        </motion.pre>
        <motion.pre
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="absolute right-8 bottom-32 hidden rounded-lg glass p-3 text-xs text-primary/70 lg:block animate-float"
          style={{ animationDelay: "2s" }}
        >
{`POST /api/launch
  ↳ status: shipping 🚀`}
        </motion.pre>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-xs uppercase tracking-widest text-accent"
          >
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            Engineering the Future
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-7xl font-bold leading-[0.95] md:text-9xl"
          >
            <span className="text-glow">Colony One</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            We build software that transforms businesses and enterprises — one elegant solution at a time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/portfolio" className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-medium text-accent-foreground transition-all hover:shadow-[0_0_40px_var(--cyan)]">
              Explore Our Work <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-7 py-3 font-medium backdrop-blur hover:border-accent">
              Start a Project
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-foreground"
        >
          Scroll
        </motion.div>
      </section>

      {/* WHAT WE DO */}
      <section className="relative mx-auto max-w-7xl px-6 py-32">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold md:text-6xl"
        >
          What we <span className="text-glow">do</span>
        </motion.h2>
        <p className="mt-4 max-w-xl text-muted-foreground">Three core practices. One relentless standard.</p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, rotateX: -20, y: 30 }}
              whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative rounded-2xl glass glass-hover tilt-card p-8 transition-all"
            >
              <div className="mb-6 inline-flex rounded-xl bg-accent/10 p-3 text-accent">
                <f.icon size={28} />
              </div>
              <h3 className="font-display text-2xl font-semibold">{f.title}</h3>
              <p className="mt-3 text-muted-foreground">{f.desc}</p>
              <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="flex items-end justify-between">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-4xl font-bold md:text-6xl">
            Selected <span className="text-glow">work</span>
          </motion.h2>
          <Link to="/portfolio" className="hidden md:inline-flex items-center gap-2 text-sm text-accent">
            View All Projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl glass glass-hover p-6"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-electric/30 via-accent/20 to-background border border-accent/20 grid-bg" />
              <h3 className="mt-5 font-display text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden border-y border-border bg-gradient-to-r from-background via-secondary/30 to-background py-20">
        <div className="absolute inset-0 gradient-radial" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4">
          {[
            { n: 20, s: "+", l: "Projects Shipped" },
            { n: 10, s: "+", l: "Enterprise Clients" },
            { n: 15, s: "+", l: "Technologies" },
            { n: 100, s: "%", l: "Client Satisfaction" },
          ].map((s) => (
            <div key={s.l}>
              <CountUp to={s.n} suffix={s.s} />
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-5xl px-6 py-32 text-center">
        <Smartphone className="mx-auto mb-6 h-12 w-12 text-accent" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-4xl font-bold md:text-6xl">
          Ready to build <span className="text-glow">something great?</span>
        </motion.h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">Let's turn your idea into a product the world remembers.</p>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-accent-foreground transition-all hover:shadow-[0_0_50px_var(--cyan)]">
          Start a Project <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
