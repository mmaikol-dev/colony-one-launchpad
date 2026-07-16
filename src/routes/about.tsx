import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Sparkles, Heart, Zap, Eye } from "lucide-react";
import Tilt3D from "@/components/Tilt3D";
import beeQueen from "@/assets/myth-bee-queen.jpg";
import antWarrior from "@/assets/myth-ant-warrior.jpg";
import architect from "@/assets/myth-architect.jpg";
import statues from "@/assets/myth-statues.jpg";
import amphitheater from "@/assets/myth-amphitheater.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Colony — Colony One" },
      { name: "description", content: "The mythos of Colony One: divine bee-queens of design, Spartan ants of engineering, philosophers of AI." },
      { property: "og:image", content: statues },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Sparkles, title: "Craft as Sacrament", desc: "Every line of code chiseled with the reverence of a temple mason." },
  { icon: Heart,    title: "Allies, not Clients", desc: "We swear the same oaths the ancients did — loyalty, honesty, honor." },
  { icon: Zap,      title: "Cunning of Athena",   desc: "Modern strategy and sharp technique. We do not merely build; we outthink." },
  { icon: Eye,      title: "Marble Transparency", desc: "Open scrolls, weekly ceremonies. No black boxes, no shadowed altars." },
];

const team = [
  { name: "Maikol M.", role: "Founder · High Architect",     bio: "Chief mason of our marble platforms and lead of the honey-gold workshop.", img: architect },
  { name: "The Queen", role: "Muse · Head of Design",         bio: "Bee-queen of aesthetics — guardian of every pixel that leaves our forum.", img: beeQueen },
  { name: "The General", role: "Strategos · DevOps",          bio: "Spartan of the citadels — commands deployments as legions.", img: antWarrior },
];

const milestones = [
  { year: "MMXXII",  title: "The Colony is founded", desc: "Two builders lay the first stone of the acropolis." },
  { year: "MMXXIII", title: "First sovereign ally",   desc: "A mission-critical citadel raised on time and on budget." },
  { year: "MMXXIV",  title: "X chronicles inscribed", desc: "Web temples, mobile auguries and cloud citadels across three continents." },
  { year: "MMXXV",   title: "Oracles awaken",         desc: "Agentic AI joins the pantheon — n8n, LangGraph and custom oracles." },
  { year: "MMXXVI",  title: "Global pantheon",        desc: "Allies from Nairobi to New York gather at our marble tables." },
];

const techs = ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "Docker", "AWS", "Firebase", "Flutter", "GraphQL", "Tailwind", "Three.js", "n8n", "LangGraph"];

function AboutPage() {
  return (
    <div className="pt-32">
      {/* HERO */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-20 md:grid-cols-2">
        <div>
          <p className="mb-4 font-display text-[11px] uppercase tracking-[0.32em] text-primary">The Colony</p>
          <h1 className="font-display text-5xl font-bold uppercase leading-tight md:text-7xl">
            A civilization of <span className="text-glow">builders</span>.
          </h1>
          <div className="mt-8 space-y-4 font-serif text-lg text-muted-foreground">
            <p>Colony One is a workshop of divine bees and Spartan ants — designers, engineers, philosophers of AI — sworn to raise software the way the ancients raised temples.</p>
            <p>We turn tangled problems into marble-clean products: web temples, mobile auguries, enterprise citadels, and agentic oracles that never sleep.</p>
            <p className="italic">Our creed is simple. Craft as sacrament. Allies as kin. Cunning of Athena. Transparency of Delphi.</p>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden gold-frame">
          <img src={beeQueen} alt="The Queen of Colony One" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 text-center">
            <p className="font-display text-[10px] uppercase tracking-[0.28em] text-primary">Ex Marmore et Melle</p>
            <p className="font-serif italic">Of marble and honey</p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="relative overflow-hidden py-32 text-center">
        <div className="absolute inset-0">
          <img src={amphitheater} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative mx-auto max-w-4xl px-6 font-display text-3xl font-semibold uppercase md:text-5xl">
          We raise businesses through
          <span className="text-glow"> intelligent, well-carved software.</span>
        </motion.h2>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">Our Creed</p>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase md:text-5xl">Values engraved in <span className="text-glow">stone</span></h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Tilt3D className="group relative h-full glass glass-hover p-6">
                <v.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="font-display text-xl font-semibold uppercase tracking-wide">{v.title}</h3>
                <p className="mt-2 font-serif text-muted-foreground">{v.desc}</p>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">The Pantheon</p>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase md:text-5xl">Deities of <span className="text-glow">Colony One</span></h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {team.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <Tilt3D className="group relative h-full overflow-hidden glass glass-hover">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide">{t.name}</h3>
                  <p className="font-display text-[11px] uppercase tracking-[0.24em] text-primary">{t.role}</p>
                  <p className="mt-3 font-serif text-muted-foreground">{t.bio}</p>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">Our Saga</p>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase md:text-5xl">The <span className="text-glow">chronicle</span></h2>
        <div className="relative mt-12">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-accent to-transparent md:left-1/2" />
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative mb-12 grid gap-6 md:grid-cols-2 ${i % 2 === 0 ? "" : "md:[&>div:first-child]:order-2"}`}
            >
              <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <p className="font-display text-lg uppercase tracking-[0.28em] text-primary">{m.year}</p>
                <h3 className="mt-1 font-display text-xl font-semibold uppercase tracking-wide">{m.title}</h3>
                <p className="mt-2 font-serif text-muted-foreground">{m.desc}</p>
              </div>
              <div className="absolute left-2 top-2 h-4 w-4 hex-clip bg-primary md:left-1/2 md:-translate-x-1/2" style={{ boxShadow: "0 0 20px var(--gold)" }} />
              <div />
            </motion.div>
          ))}
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section className="overflow-hidden border-y border-primary/25 marble-bg py-12">
        <div className="flex marquee gap-12 whitespace-nowrap">
          {[...techs, ...techs].map((t, i) => (
            <span key={i} className="font-display text-3xl font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">
              {t} <span className="text-primary/40">✦</span>
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
