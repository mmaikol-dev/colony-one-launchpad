import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/colony-one-logo.png";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-background">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Colony One" className="h-10 w-auto" />
            <span className="font-display text-lg font-semibold">Colony<span className="text-accent">One</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Engineering the Future, One Solution at a Time.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/portfolio" className="hover:text-accent">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-accent">Web Apps</Link></li>
            <li><Link to="/services" className="hover:text-accent">Mobile</Link></li>
            <li><Link to="/services" className="hover:text-accent">Enterprise</Link></li>
            <li><Link to="/services" className="hover:text-accent">Cloud & DevOps</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h4>
          <div className="mt-4 flex gap-3">
            <a href="https://github.com/mmaikol-dev" target="_blank" rel="noreferrer" className="rounded-full border border-border p-2 hover:border-accent hover:text-accent transition-colors"><Github size={18} /></a>
            <a href="#" className="rounded-full border border-border p-2 hover:border-accent hover:text-accent transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="rounded-full border border-border p-2 hover:border-accent hover:text-accent transition-colors"><Twitter size={18} /></a>
          </div>
          <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="your@email.com" className="w-full rounded-l-md border border-border bg-input px-3 py-2 text-sm outline-none focus:border-accent" />
            <button className="rounded-r-md bg-accent px-3 text-sm font-medium text-accent-foreground">Join</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs text-muted-foreground">
          © 2025 Colony One. All rights reserved. | Built with precision.
        </p>
      </div>
    </footer>
  );
}
