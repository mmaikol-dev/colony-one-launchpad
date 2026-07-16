import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Clock, Github, Linkedin, Twitter, ChevronDown, Loader2, Check } from "lucide-react";
import ParticleField from "@/components/ParticleField";
import amphitheater from "@/assets/myth-amphitheater.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Petition — Colony One" },
      { name: "description", content: "Bring your labour to the marble tables of Colony One. We answer within a single sun's turn." },
      { property: "og:image", content: amphitheater },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  { q: "How long does a rite of building take?",        a: "Most works are consecrated in 6–16 weeks depending on scope. A detailed scroll of timings follows the divination phase." },
  { q: "Do you serve allies beyond these borders?",     a: "Yes — we work with envoys across Africa, Europe and North America. Asynchronous scrolls are our default." },
  { q: "What is the ceremony of building?",             a: "Divination → Blueprint → Forge → Trial → Consecrate → Tend. Weekly demos, unwavering transparency." },
  { q: "Do you tend the temple after opening?",         a: "Absolutely. Monthly retainers and SLAs for ongoing rites of monitoring and evolution." },
  { q: "How do we begin?",                              a: "Send your scroll through the petition below. A discovery audience is arranged within a single sun's turn." },
];

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const errs: Record<string, string> = {};
    if (!fd.get("name")) errs.name = "Required";
    if (!fd.get("email")) errs.email = "Required";
    if (!fd.get("message")) errs.message = "Required";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1200);
  };

  return (
    <div className="pt-32">
      {/* HERO */}
      <section className="relative overflow-hidden py-20 text-center">
        <div className="absolute inset-0">
          <img src={amphitheater} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <ParticleField density={40} />
        <div className="relative mx-auto max-w-3xl px-6">
          <p className="font-display text-[11px] uppercase tracking-[0.32em] text-primary">Petition</p>
          <h1 className="mt-4 font-display text-5xl font-bold uppercase md:text-7xl">Speak to the <span className="text-glow">Colony</span></h1>
          <div className="laurel-divider my-6 mx-auto max-w-md"><span className="font-display text-[11px] uppercase tracking-[0.28em]">✦</span></div>
          <p className="mx-auto max-w-xl font-serif text-lg italic text-muted-foreground">Bring us your labour. We answer within a single sun's turn.</p>
        </div>
      </section>

      {/* TWO COL */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-5">
        <div className="md:col-span-2 space-y-6">
          <div className="glass p-6">
            <p className="mb-4 inline-flex items-center gap-2 text-xs">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
              </span>
              <span className="font-display uppercase tracking-[0.28em] text-primary">Accepting new petitions</span>
            </p>
            <ul className="space-y-4 font-serif">
              <li className="flex items-start gap-3"><Mail className="mt-0.5 text-primary" size={18} /><div><p className="font-display text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Envoy</p><a href="mailto:hello@colonyone.com" className="text-foreground hover:text-primary">hello@colonyone.com</a></div></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 text-primary" size={18} /><div><p className="font-display text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Acropolis</p><p>Nairobi, Kenya</p></div></li>
              <li className="flex items-start gap-3"><Clock className="mt-0.5 text-primary" size={18} /><div><p className="font-display text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Reply within</p><p>One sun's turn</p></div></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="https://github.com/mmaikol-dev" target="_blank" rel="noreferrer" className="rounded-sm border border-primary/40 p-2 transition-colors hover:border-primary hover:text-primary"><Github size={18} /></a>
              <a href="#" className="rounded-sm border border-primary/40 p-2 transition-colors hover:border-primary hover:text-primary"><Linkedin size={18} /></a>
              <a href="#" className="rounded-sm border border-primary/40 p-2 transition-colors hover:border-primary hover:text-primary"><Twitter size={18} /></a>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="md:col-span-3 glass p-8 space-y-5">
          {status === "success" ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary bg-primary/20 text-primary"><Check size={32} /></div>
              <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-wide">The scroll is received</h3>
              <p className="mt-2 font-serif italic text-muted-foreground">We shall answer within a single sun's turn.</p>
            </motion.div>
          ) : (
            <>
              <div className="grid gap-5 md:grid-cols-2">
                <Field name="name" label="Your Name" error={errors.name} />
                <Field name="email" label="Envoy Address (Email)" type="email" error={errors.email} />
                <Field name="company" label="House / Company" />
                <Select name="projectType" label="Rite Requested" options={["Web Temple", "Mobile Augury", "Enterprise Citadel", "Agentic Oracle", "Other"]} />
                <Select name="budget" label="Tribute (Budget)" options={["< $10k", "$10k–$25k", "$25k–$50k", "$50k–$100k", "$100k+"]} />
              </div>
              <div>
                <label className="mb-2 block font-display text-[10px] uppercase tracking-[0.28em] text-muted-foreground">The Petition</label>
                <textarea name="message" rows={5} className="w-full resize-none rounded-sm border border-primary/40 bg-input/60 px-4 py-3 font-serif outline-none transition-colors focus:border-primary" />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button disabled={status === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-primary bg-primary px-6 py-3 font-display text-xs uppercase tracking-[0.24em] text-primary-foreground transition-all hover:shadow-[0_0_40px_var(--gold)] disabled:opacity-50">
                {status === "sending" ? <><Loader2 className="animate-spin" size={18} /> Sending Scroll…</> : "Deliver the Scroll"}
              </button>
            </>
          )}
        </form>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-center font-display text-4xl font-bold uppercase md:text-5xl">Common <span className="text-glow">questions</span></h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="glass overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between p-5 text-left">
                <span className="font-display uppercase tracking-wide">{f.q}</span>
                <ChevronDown className={`transition-transform ${openFaq === i ? "rotate-180 text-primary" : ""}`} size={18} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40" : "max-h-0"}`}>
                <p className="px-5 pb-5 font-serif text-muted-foreground">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label className="mb-2 block font-display text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{label}</label>
      <input name={name} type={type} className="w-full rounded-sm border border-primary/40 bg-input/60 px-4 py-2.5 font-serif outline-none transition-colors focus:border-primary" />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <div>
      <label className="mb-2 block font-display text-[10px] uppercase tracking-[0.28em] text-muted-foreground">{label}</label>
      <select name={name} className="w-full rounded-sm border border-primary/40 bg-input/60 px-4 py-2.5 font-serif outline-none transition-colors focus:border-primary">
        {options.map((o) => <option key={o} className="bg-background">{o}</option>)}
      </select>
    </div>
  );
}
