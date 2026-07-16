import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Hexagon, Shield, Scroll, Sparkles, Feather, Crown } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import CountUp from "@/components/CountUp";
import Tilt3D from "@/components/Tilt3D";
import heroPalace from "@/assets/myth-bee-palace.jpg";
import beeQueen from "@/assets/myth-bee-queen.jpg";
import antWarrior from "@/assets/myth-ant-warrior.jpg";
import antMetropolis from "@/assets/myth-ant-metropolis.jpg";
import nectar from "@/assets/myth-nectar.jpg";
import amphitheater from "@/assets/myth-amphitheater.jpg";
import statues from "@/assets/myth-statues.jpg";
import architect from "@/assets/myth-architect.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Colony One — Mythos of Builders" },
      { name: "description", content: "Divine bee-queens and Spartan ants forge software worthy of Olympus. Web, mobile, enterprise platforms and agentic AI." },
      { property: "og:image", content: heroPalace },
      { name: "twitter:image", content: heroPalace },
    ],
  }),
  component: HomePage,
});

const rites = [
  { icon: Scroll, title: "Web Temples", desc: "Marble-clean web applications carved with modern craft.", img: architect },
  { icon: Sparkles, title: "Agentic Oracles", desc: "Autonomous AI agents that reason, plan, and act without slumber.", img: beeQueen },
  { icon: Shield, title: "Enterprise Citadels", desc: "Fortified platforms engineered to withstand any siege.", img: antWarrior },
  { icon: Feather, title: "Automation Auguries", desc: "n8n workflows and integrations that read the omens of your data.", img: nectar },
  { icon: Crown, title: "Cloud Acropolises", desc: "Scalable infrastructure built like temples atop the clouds.", img: statues },
  { icon: Hexagon, title: "Design of the Divine", desc: "Interfaces sculpted with the reverence of Athenian craftsmen.", img: amphitheater },
];

const chronicles = [
  { name: "Telewomens SACCO", desc: "A treasury of the co-operative — loans, members, and sacred ledgers.", tags: ["Fintech", "Postgres"], img: nectar },
  { name: "Perisquare HMS", desc: "A hospital of Asclepius: EMR, laboratories, apothecary, and billing.", tags: ["Healthcare", "HL7"], img: architect },
  { name: "RealDeal Logistics", desc: "Chariots of trade — fleets, dispatch, and realtime scouts.", tags: ["Logistics", "Mapbox"], img: antMetropolis },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <img src={heroPalace} alt="Golden bee palace atop the acropolis" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
        </div>
        <ParticleField density={70} />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-8 px-6 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-3 border border-primary/50 bg-background/70 px-4 py-1.5 font-display text-[11px] uppercase tracking-[0.28em] text-primary backdrop-blur"
            >
              <Hexagon size={12} className="text-primary" />
              Est. Mount Olympus · MMXXII
              <Hexagon size={12} className="text-primary" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-5xl font-bold leading-[1.05] uppercase tracking-[0.02em] md:text-7xl lg:text-[5.5rem]"
            >
              Colony <span className="text-glow">One</span>
              <span className="block mt-2 font-serif text-2xl italic normal-case tracking-normal text-muted-foreground md:text-3xl">
                A civilization of builders — divine as bees, disciplined as ants.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 max-w-xl font-serif text-lg text-foreground/80 md:text-xl"
            >
              From honey-gold palaces to fortified citadels of code, we craft software
              with the reverence of ancient masons and the cunning of Olympian gods.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link to="/portfolio" className="group inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-7 py-3 font-display text-xs uppercase tracking-[0.22em] text-primary-foreground transition-all hover:shadow-[0_20px_50px_-10px_var(--gold)]">
                Enter the Chronicles <ArrowRight className="transition-transform group-hover:translate-x-1" size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-sm border border-primary/60 bg-background/60 px-7 py-3 font-display text-xs uppercase tracking-[0.22em] text-foreground backdrop-blur hover:border-primary hover:text-primary">
                Petition the Colony
              </Link>
            </motion.div>
          </div>

          {/* Portrait card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mx-auto hidden aspect-[3/4] w-full max-w-sm overflow-hidden gold-frame lg:col-span-2 lg:block"
          >
            <img src={beeQueen} alt="The Queen — Goddess of Prosperity" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="font-display text-[10px] uppercase tracking-[0.28em] text-primary">The Queen</p>
              <p className="font-serif text-lg italic text-foreground">Goddess of Wisdom, Prosperity, and Harmony</p>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          ▼ Descend the Marble Stairs
        </div>
      </section>

      {/* PROCLAMATION */}
      <section className="relative border-y border-primary/25 bg-secondary/40 py-6">
        <div className="mx-auto flex max-w-7xl items-center gap-6 px-6 text-primary/70 laurel-divider">
          <span className="font-display text-[11px] uppercase tracking-[0.32em]">Trusted Allies</span>
        </div>
        <div className="mx-auto mt-4 flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 font-display text-xs uppercase tracking-[0.24em] text-muted-foreground">
          <span>Telewomens Group</span>
          <span className="text-primary/40">✦</span>
          <span>Perisquare Medical</span>
          <span className="text-primary/40">✦</span>
          <span>RealDeal Logistics</span>
          <span className="text-primary/40">✦</span>
          <span>Aquavita</span>
        </div>
      </section>

      {/* RITES */}
      <section className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="mb-16 max-w-3xl">
          <p className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">Book I</p>
          <h2 className="mt-2 font-display text-4xl font-bold uppercase md:text-6xl">
            The Sacred <span className="text-glow">Rites</span>
          </h2>
          <p className="mt-4 font-serif text-lg italic text-muted-foreground">
            Six practices, forged in bronze, gilded in gold, upheld with philosophical rigor.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rites.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Tilt3D className="group relative overflow-hidden glass glass-hover">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={f.img}
                    alt={f.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                  <div className="absolute left-4 top-4 inline-flex items-center justify-center border border-primary/60 bg-background/85 p-3 text-primary backdrop-blur">
                    <f.icon size={20} />
                  </div>
                </div>
                <div className="p-6">
                  <p className="font-display text-[10px] uppercase tracking-[0.28em] text-primary">Rite {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold uppercase tracking-wide">{f.title}</h3>
                  <p className="mt-2 font-serif text-muted-foreground">{f.desc}</p>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.24em] text-primary">
                    Read the scroll <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CHRONICLES */}
      <section className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">Book II</p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-2 font-display text-4xl font-bold uppercase md:text-6xl">
              Selected <span className="text-glow">Chronicles</span>
            </motion.h2>
          </div>
          <Link to="/portfolio" className="hidden md:inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.24em] text-primary">
            All Chronicles <ArrowRight size={12} />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {chronicles.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Tilt3D className="group relative block overflow-hidden glass glass-hover shine">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-crimson/30 via-transparent to-primary/25 mix-blend-multiply" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold uppercase tracking-wide">{p.name}</h3>
                  <p className="mt-2 font-serif text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="border border-primary/40 bg-background/70 px-3 py-1 font-display text-[10px] uppercase tracking-widest text-primary">{t}</span>
                    ))}
                  </div>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STATS — carved into marble */}
      <section className="relative overflow-hidden border-y border-primary/25 marble-bg py-24">
        <div className="absolute inset-0 gradient-radial" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center laurel-divider">
            <span className="font-display text-[11px] uppercase tracking-[0.32em]">Carved in Marble</span>
          </div>
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { n: 20, s: "+", l: "Chronicles Written" },
              { n: 10, s: "+", l: "Sovereign Allies" },
              { n: 15, s: "+", l: "Instruments of War" },
              { n: 100, s: "%", l: "Oaths Honored" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-primary">
                  <CountUp to={s.n} suffix={s.s} />
                </div>
                <p className="mt-3 font-display text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-32">
        <div className="absolute inset-0">
          <img src={statues} alt="Marble deities over the wheat fields" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <div className="laurel-divider mb-6"><span className="font-display text-[11px] uppercase tracking-[0.32em]">Coda</span></div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-4xl font-bold uppercase leading-tight md:text-6xl">
            Speak your vision. <span className="text-glow">We build the temple.</span>
          </motion.h2>
          <p className="mx-auto mt-6 max-w-xl font-serif text-lg italic text-muted-foreground">Bring us your labyrinth. We shall map it in marble and light it in gold.</p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-8 py-4 font-display text-xs uppercase tracking-[0.24em] text-primary-foreground transition-all hover:shadow-[0_25px_50px_-10px_var(--gold)]">
            Petition the Colony <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
