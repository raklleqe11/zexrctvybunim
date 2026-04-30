import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/site/logo.png";

const leftLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/#about", label: "About" },
] as const;

const rightLinks = [
  { to: "/#testimonials", label: "Reviews" },
  { to: "/blog", label: "Blog" },
  { to: "/#contact", label: "Contact" },
] as const;

const allLinks = [...leftLinks, ...rightLinks];

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
      {/* Desktop: centered logo with split nav */}
      <div className="mx-auto hidden lg:grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-8 px-8 py-4">
        <nav className="flex items-center justify-end gap-7">
          {leftLinks.map((l) => (
            <a key={l.to} href={l.to} className="text-sm text-cream/85 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <Link to="/" className="flex items-center justify-center group">
          <img
            src={logo}
            alt="Vibe 360° Sarandë"
            className="h-12 w-12 object-contain transition-transform group-hover:rotate-6"
          />
        </Link>

        <nav className="flex items-center justify-start gap-7">
          {rightLinks.map((l) => (
            <a key={l.to} href={l.to} className="text-sm text-cream/85 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !py-2.5 !px-5 text-sm ml-2">
            Reserve
          </a>
        </nav>
      </div>

      {/* Mobile: logo center, menu toggle right */}
      <div className="lg:hidden flex items-center justify-between px-5 py-3.5">
        <div className="w-10" />
        <Link to="/" className="flex items-center justify-center">
          <img src={logo} alt="Vibe 360°" className="h-10 w-10 object-contain" />
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-cream p-2"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[color-mix(in_oklab,var(--gold)_15%,transparent)] bg-forest-deep/95">
          <div className="flex flex-col px-6 py-4 gap-1">
            {allLinks.map((l) => (
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
