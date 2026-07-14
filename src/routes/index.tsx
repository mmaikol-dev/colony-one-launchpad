import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";
import { ArrowRight, Code2, Cloud, Smartphone, Sparkles, Brain, Workflow } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import CountUp from "@/components/CountUp";
import Scene3D from "@/components/Scene3D";
import Tilt3D from "@/components/Tilt3D";
import ClientOnly from "@/components/ClientOnly";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Colony One — Custom Software for Businesses & Enterprises" },
      { name: "description", content: "We build software that transforms businesses. Web apps, mobile, enterprise platforms, AI agents & cloud." },
    ],
  }),
  component: HomePage,
});

const features = [
  {
    icon: Code2,
    title: "Web & Mobile Apps",
    desc: "Beautiful, performant apps people love to use.",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: Brain,
    title: "Agentic AI Systems",
    desc: "Autonomous agents & AI employees that run 24/7.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: Sparkles,
    title: "Enterprise Platforms",
    desc: "Mission-critical systems built to scale.",
    img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: Workflow,
    title: "n8n & Automation",
    desc: "Custom workflows that connect every tool you use.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Modern infrastructure with rock-solid pipelines.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format&fit=crop",
  },
  {
    icon: Smartphone,
    title: "Product Design",
    desc: "Interfaces backed by research and craft.",
    img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80&auto=format&fit=crop",
  },
];

const projects = [
  {
    name: "Telewomens SACCO",
    desc: "SACCO accounting platform with loans, members & finance.",
    tags: ["Next.js", "Postgres", "Node"],
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&q=80&auto=format&fit=crop",
  },
  {
    name: "Perisquare HMS",
    desc: "Hospital management: EMR, labs, billing & pharmacy.",
    tags: ["Next.js", "HL7", "Postgres"],
    img: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1200&q=80&auto=format&fit=crop",
  },
  {
    name: "RealDeal Logistics",
    desc: "Fleet, dispatch & realtime driver telemetry.",
    tags: ["React", "Mapbox", "Node"],
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1200&q=80&auto=format&fit=crop",
  },
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;
    const targets = heroRef.current.querySelectorAll<HTMLElement>("[data-hero]");
    animate(targets, {
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 900,
      delay: stagger(120, { start: 100 }),
      ease: "outExpo",
    });
  }, []);

  return (
    <>
      {/* HERO with 3D scene */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="absolute inset-0 mesh-bg opacity-80" />
        <div className="absolute inset-0 dot-bg opacity-60" />
        <ParticleField density={90} />

        <div ref={heroRef} className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-2">
          <div>
            <div
              data-hero
              style={{ opacity: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/70 px-4 py-1.5 text-xs uppercase tracking-widest text-primary backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Engineering the Future
            </div>
            <h1
              data-hero
              style={{ opacity: 0 }}
              className="font-display text-6xl font-bold leading-[0.95] md:text-8xl"
            >
              Colony <span className="text-glow">One</span>
            </h1>
            <p
              data-hero
              style={{ opacity: 0 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl"
            >
              We build custom software, agentic AI, and enterprise platforms — one elegant solution at a time.
            </p>
            <div
              data-hero
              style={{ opacity: 0 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link to="/portfolio" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-medium text-primary-foreground transition-all hover:shadow-[0_20px_40px_-10px_var(--primary)]">
                Explore Our Work <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-7 py-3 font-medium backdrop-blur hover:border-primary">
                Start a Project
              </Link>
            </div>
          </div>

          {/* 3D showcase */}
          <div className="relative h-[420px] w-full md:h-[520px]">
            <div className="absolute inset-0 rounded-[2rem] glass" />
            <ClientOnly>
              <Scene3D className="absolute inset-0" />
            </ClientOnly>
            <div className="pointer-events-none absolute inset-x-6 bottom-6 flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
              <span>Interactive · WebGL</span>
              <span className="rounded-full bg-white/80 px-3 py-1 text-primary">Live 3D</span>
            </div>
          </div>
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
        <p className="mt-4 max-w-xl text-muted-foreground">Six core practices. One relentless standard.</p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Tilt3D className="group relative overflow-hidden rounded-2xl glass glass-hover">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex rounded-xl bg-white/85 p-3 text-primary shadow-sm backdrop-blur">
                    <f.icon size={22} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Learn more <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Tilt3D>
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
          <Link to="/portfolio" className="hidden md:inline-flex items-center gap-2 text-sm text-primary">
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
            >
              <Tilt3D className="group relative block overflow-hidden rounded-2xl glass glass-hover shine">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-electric/30 mix-blend-multiply" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-white/70 px-3 py-1 text-xs text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative overflow-hidden border-y border-border bg-gradient-to-r from-secondary/40 via-white to-secondary/40 py-20">
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
        <Smartphone className="mx-auto mb-6 h-12 w-12 text-primary" />
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-4xl font-bold md:text-6xl">
          Ready to build <span className="text-glow">something great?</span>
        </motion.h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">Let's turn your idea into a product the world remembers.</p>
        <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-medium text-primary-foreground transition-all hover:shadow-[0_25px_50px_-10px_var(--primary)]">
          Start a Project <ArrowRight size={18} />
        </Link>
      </section>
    </>
  );
}
