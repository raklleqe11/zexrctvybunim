import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/site/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/#about", label: "About" },
  { to: "/#testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/#contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "backdrop-blur-md bg-[color-mix(in_oklab,var(--forest-deep)_85%,transparent)] border-b border-[color-mix(in_oklab,var(--gold)_15%,transparent)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Vibe 360° Sarandë" className="h-11 w-11 object-contain transition-transform group-hover:rotate-6" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-cream text-lg">Vibe 360°</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold/80">Sarandë</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="text-sm text-cream/85 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex btn-primary !py-2.5 !px-5 text-sm"
        >
          Reserve a Table
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-cream p-2"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[color-mix(in_oklab,var(--gold)_15%,transparent)] bg-forest-deep/95">
          <div className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <a key={l.to} href={l.to} className="py-3 text-cream/90 hover:text-gold border-b border-cream/5">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-4 self-start">Reserve a Table</a>
          </div>
        </div>
      )}
    </header>
  );
}
