import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/colony-one-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
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
          scrolled ? "border-b border-border bg-background/70 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="Colony One" className="h-10 w-auto transition-transform group-hover:scale-110" />
            <span className="font-display text-lg font-semibold tracking-tight">
              Colony<span className="text-accent">One</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((l) => {
              const active = path === l.to;
              return (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className={`relative text-sm font-medium transition-colors ${
                      active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {l.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-accent transition-all duration-300 ${
                        active ? "w-full shadow-[0_0_10px_var(--cyan)]" : "w-0"
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
              className="hidden md:inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-5 py-2 text-sm font-medium text-accent transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_30px_var(--cyan)]"
            >
              Start a Project
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
              className="font-display text-3xl font-semibold animate-fade-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="mt-4 rounded-full bg-accent px-8 py-3 text-sm font-medium text-accent-foreground">
            Start a Project
          </Link>
        </div>
      )}
    </>
  );
}
