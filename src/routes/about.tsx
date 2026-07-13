import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Heart, Zap, Eye } from "lucide-react";
import OrbScene from "@/components/OrbScene";
import ClientOnly from "@/components/ClientOnly";
import Tilt3D from "@/components/Tilt3D";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Colony One — Who We Are" },
      { name: "description", content: "Colony One designs and engineers custom software solutions. Meet the team turning complex problems into elegant products." },
      { property: "og:title", content: "About Colony One" },
      { property: "og:description", content: "Curiosity, precision, and a relentless pursuit of quality." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Sparkles, title: "Quality First", desc: "We never cut corners. Every line of code is intentional." },
  { icon: Heart, title: "Client-Centered", desc: "Your goals drive every decision we make." },
  { icon: Zap, title: "Innovation", desc: "We stay ahead of the curve so you can lead it." },
  { icon: Eye, title: "Transparency", desc: "Open communication, always. No black boxes." },
];

const team = [
  { name: "Maikol M.", role: "Founder & Lead Engineer", bio: "Builds full-stack platforms for scale-ups and enterprises.", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80&auto=format&fit=crop" },
  { name: "Open Role", role: "Senior Designer", bio: "Crafting the visual language of every product we ship.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop" },
  { name: "Open Role", role: "DevOps Engineer", bio: "Keeping deployments boring (in the best way).", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=800&q=80&auto=format&fit=crop" },
];

const milestones = [
  { year: "2022", title: "Colony founded", desc: "A two-person studio with a big idea." },
  { year: "2023", title: "First enterprise client", desc: "Shipped a mission-critical platform on time and on budget." },
  { year: "2024", title: "10+ shipped projects", desc: "Web, mobile, and cloud platforms across three continents." },
  { year: "2025", title: "Global expansion", desc: "Now partnering with teams from Nairobi to New York." },
];

const techs = ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "Firebase", "Flutter", "GraphQL", "Tailwind", "Three.js", "n8n", "LangGraph"];

function AboutPage() {
  return (
    <div className="pt-32">
      {/* HERO with 3D orb */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm uppercase tracking-widest text-primary">Who We Are</p>
          <h1 className="font-display text-5xl font-bold leading-tight md:text-7xl">
            A studio of <span className="text-glow">builders</span>.
          </h1>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>Colony One is a technology company that designs and engineers custom software solutions for companies and enterprises.</p>
            <p>We turn complex problems into elegant digital products — from web and mobile apps to full enterprise platforms and agentic AI systems.</p>
            <p>Our team is driven by curiosity, precision, and a relentless pursuit of quality.</p>
          </div>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute inset-0 rounded-full mesh-bg blur-2xl opacity-70" />
          <ClientOnly>
            <OrbScene className="absolute inset-0" />
          </ClientOnly>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative overflow-hidden py-32 text-center">
        <div className="absolute inset-0 gradient-radial" />
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto max-w-4xl px-6 font-display text-3xl font-semibold md:text-5xl">
          We exist to help businesses grow through
          <span className="text-glow"> intelligent, well-crafted software.</span>
        </motion.h2>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Our values</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Tilt3D className="group relative h-full rounded-2xl glass glass-hover p-6">
                <v.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-xl font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="font-display text-4xl font-bold md:text-5xl">The people behind <span className="text-glow">Colony One</span></h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {team.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Tilt3D className="group relative h-full overflow-hidden rounded-2xl glass glass-hover">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{t.name}</h3>
                  <p className="text-sm text-primary">{t.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{t.bio}</p>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-display text-4xl font-bold md:text-5xl">Our story</h2>
        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-electric to-transparent md:left-1/2" />
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative mb-12 grid gap-6 md:grid-cols-2 ${i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <p className="font-display text-2xl text-primary">{m.year}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
              </div>
              <div className="absolute left-2 top-2 h-4 w-4 rounded-full bg-primary md:left-1/2 md:-translate-x-1/2" style={{ boxShadow: "0 0 20px var(--primary)" }} />
              <div />
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section className="overflow-hidden border-y border-border bg-white py-12">
        <div className="flex marquee gap-12 whitespace-nowrap">
          {[...techs, ...techs].map((t, i) => (
            <span key={i} className="font-display text-3xl font-semibold text-muted-foreground transition-colors hover:text-primary">
              {t} <span className="text-primary/40">·</span>
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
