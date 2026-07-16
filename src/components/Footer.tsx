import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Hexagon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-primary/30 bg-gradient-to-b from-background to-secondary/40">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center">
              <Hexagon className="absolute inset-0 h-full w-full text-primary" strokeWidth={1.25} />
              <span className="font-display text-sm font-bold text-primary">Ϙ</span>
            </span>
            <span className="font-display text-lg font-semibold uppercase tracking-[0.22em]">
              Colony <span className="text-gold">One</span>
            </span>
          </div>
          <p className="mt-4 font-serif text-sm italic text-muted-foreground">
            Where divine bees and Spartan ants forge software worthy of the gods.
          </p>
        </div>

        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.24em] text-foreground">The Order</h4>
          <ul className="mt-4 space-y-2 font-serif text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">The Colony</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary">Chronicles</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Petition</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.24em] text-foreground">Sacred Rites</h4>
          <ul className="mt-4 space-y-2 font-serif text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary">Web Temples</Link></li>
            <li><Link to="/services" className="hover:text-primary">Mobile Auguries</Link></li>
            <li><Link to="/services" className="hover:text-primary">Enterprise Citadels</Link></li>
            <li><Link to="/services" className="hover:text-primary">Agentic Oracles</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.24em] text-foreground">Envoys</h4>
          <div className="mt-4 flex gap-3">
            <a href="https://github.com/mmaikol-dev" target="_blank" rel="noreferrer" className="rounded-sm border border-primary/40 p-2 text-muted-foreground hover:border-primary hover:text-primary transition-colors"><Github size={18} /></a>
            <a href="#" className="rounded-sm border border-primary/40 p-2 text-muted-foreground hover:border-primary hover:text-primary transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="rounded-sm border border-primary/40 p-2 text-muted-foreground hover:border-primary hover:text-primary transition-colors"><Twitter size={18} /></a>
          </div>
          <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="your.scroll@olympus" className="w-full rounded-l-sm border border-primary/40 bg-input px-3 py-2 font-serif text-sm outline-none focus:border-primary" />
            <button className="rounded-r-sm bg-primary px-3 font-display text-[11px] uppercase tracking-widest text-primary-foreground">Enlist</button>
          </form>
        </div>
      </div>
      <div className="border-t border-primary/20">
        <p className="mx-auto max-w-7xl px-6 py-6 text-center font-display text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          © MMXXVI · Colony One · Forged in Marble & Honey
        </p>
      </div>
    </footer>
  );
}
