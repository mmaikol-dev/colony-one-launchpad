import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Hexagon } from "lucide-react";

const links = [
  { to: "/", label: "Acropolis" },
  { to: "/about", label: "The Colony" },
  { to: "/services", label: "Rites" },
  { to: "/portfolio", label: "Chronicles" },
  { to: "/contact", label: "Petition" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-primary/25 bg-background/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="group flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center">
              <Hexagon className="absolute inset-0 h-full w-full text-primary" strokeWidth={1.25} />
              <span className="font-display text-sm font-bold text-primary">Ϙ</span>
            </span>
            <span className="font-display text-lg font-semibold uppercase tracking-[0.22em]">
              Colony <span className="text-gold">One</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => {
              const active = path === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`relative font-display text-xs uppercase tracking-[0.24em] transition-colors ${
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-px bg-primary transition-all duration-300 ${
                        active ? "w-full shadow-[0_0_10px_var(--gold)]" : "w-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center rounded-sm border border-primary/50 bg-primary/10 px-5 py-2 font-display text-[11px] uppercase tracking-[0.22em] text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_var(--gold)]"
            >
              Summon Us
            </Link>
            <button
              aria-label="Menu"
              className="md:hidden text-foreground"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 backdrop-blur-xl md:hidden animate-fade-in">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-display text-2xl uppercase tracking-[0.24em] animate-fade-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="mt-4 rounded-sm border border-primary bg-primary px-8 py-3 font-display text-xs uppercase tracking-[0.22em] text-primary-foreground">
            Summon Us
          </Link>
        </div>
      )}
    </>
  );
}
