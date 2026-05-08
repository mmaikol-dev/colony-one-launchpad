import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Clock, Github, Linkedin, Twitter, ChevronDown, Loader2, Check } from "lucide-react";
import ParticleField from "@/components/ParticleField";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Colony One" },
      { name: "description", content: "Tell us about your project. We respond within 24 hours." },
      { property: "og:title", content: "Let's Build Together — Colony One" },
    ],
  }),
  component: ContactPage,
});

const faqs = [
  { q: "How long does a typical project take?", a: "Most projects ship in 6–16 weeks depending on scope. We share a detailed timeline after the discovery phase." },
  { q: "Do you work with international clients?", a: "Yes — we partner with teams across Africa, Europe, and North America. Async communication is our default." },
  { q: "What is your development process?", a: "Discover → Design → Build → Test → Deploy → Support. Weekly demos and full transparency throughout." },
  { q: "Do you offer post-launch support?", a: "Absolutely. We offer monthly retainers and SLAs for ongoing iteration, monitoring, and improvements." },
  { q: "How do we get started?", a: "Send us a message through the form below and we'll set up a discovery call within 24 hours." },
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
        <ParticleField density={50} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
        <div className="relative mx-auto max-w-3xl px-6">
          <p className="mb-4 text-sm uppercase tracking-widest text-accent">Contact</p>
          <h1 className="font-display text-6xl font-bold md:text-8xl">Let's <span className="text-glow">build together</span></h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">Tell us about your project and we'll get back to you within 24 hours.</p>
        </div>
      </section>

      {/* TWO COL */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-5">
        {/* LEFT */}
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-2xl glass p-6">
            <p className="mb-4 inline-flex items-center gap-2 text-xs">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-400" />
              </span>
              <span className="uppercase tracking-widest text-green-400">Currently accepting new projects</span>
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3"><Mail className="mt-0.5 text-accent" size={18} /><div><p className="text-muted-foreground">Email</p><a href="mailto:hello@colonyone.com" className="text-foreground hover:text-accent">hello@colonyone.com</a></div></li>
              <li className="flex items-start gap-3"><MapPin className="mt-0.5 text-accent" size={18} /><div><p className="text-muted-foreground">Location</p><p>Nairobi, Kenya</p></div></li>
              <li className="flex items-start gap-3"><Clock className="mt-0.5 text-accent" size={18} /><div><p className="text-muted-foreground">Response time</p><p>Within 24 hours</p></div></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="https://github.com/mmaikol-dev" target="_blank" rel="noreferrer" className="rounded-full border border-border p-2 transition-colors hover:border-accent hover:text-accent"><Github size={18} /></a>
              <a href="#" className="rounded-full border border-border p-2 transition-colors hover:border-accent hover:text-accent"><Linkedin size={18} /></a>
              <a href="#" className="rounded-full border border-border p-2 transition-colors hover:border-accent hover:text-accent"><Twitter size={18} /></a>
            </div>
          </div>
        </div>

        {/* RIGHT — FORM */}
        <form onSubmit={submit} className="md:col-span-3 rounded-2xl glass p-8 space-y-5">
          {status === "success" ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 text-accent"><Check size={32} /></div>
              <h3 className="mt-4 font-display text-2xl font-semibold">Message sent</h3>
              <p className="mt-2 text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <>
              <div className="grid gap-5 md:grid-cols-2">
                <Field name="name" label="Full Name" error={errors.name} />
                <Field name="email" label="Email Address" type="email" error={errors.email} />
                <Field name="company" label="Company Name" />
                <Select name="projectType" label="Project Type" options={["Web App", "Mobile App", "Enterprise", "Other"]} />
                <Select name="budget" label="Budget Range" options={["< $10k", "$10k–$25k", "$25k–$50k", "$50k–$100k", "$100k+"]} />
              </div>
              <div>
                <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea name="message" rows={5} className="w-full resize-none rounded-lg border border-border bg-input/50 px-4 py-3 text-sm outline-none transition-colors focus:border-accent" />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button disabled={status === "sending"} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-foreground transition-all hover:shadow-[0_0_40px_var(--cyan)] disabled:opacity-50">
                {status === "sending" ? <><Loader2 className="animate-spin" size={18} /> Sending…</> : "Send Message"}
              </button>
            </>
          )}
        </form>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20">
        <h2 className="text-center font-display text-4xl font-bold md:text-5xl">Frequently asked <span className="text-glow">questions</span></h2>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl glass overflow-hidden">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between p-5 text-left">
                <span className="font-display font-semibold">{f.q}</span>
                <ChevronDown className={`transition-transform ${openFaq === i ? "rotate-180 text-accent" : ""}`} size={18} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-40" : "max-h-0"}`}>
                <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
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
      <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input name={name} type={type} className="w-full rounded-lg border border-border bg-input/50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent" />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <div>
      <label className="mb-2 block text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <select name={name} className="w-full rounded-lg border border-border bg-input/50 px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent">
        {options.map((o) => <option key={o} className="bg-background">{o}</option>)}
      </select>
    </div>
  );
}
