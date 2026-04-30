import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream/80 pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest border-2 border-gold">
              <span className="font-display text-gold text-xl">V</span>
            </div>
            <div>
              <div className="font-display text-cream text-xl">Vibe 360°</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold/80">Cocktails · Bites · Sea</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-cream/60">
            Best cocktail bar on the Albanian Riviera. Sunset terraces, signature drinks, and a vibe that lasts till late.
          </p>
        </div>

        <div>
          <h4 className="text-gold text-sm uppercase tracking-[0.2em] mb-4 font-sans font-semibold">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/menu" className="hover:text-gold">Menu</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Journal</Link></li>
            <li><a href="#about" className="hover:text-gold">About</a></li>
            <li><a href="#contact" className="hover:text-gold">Reserve</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-sm uppercase tracking-[0.2em] mb-4 font-sans font-semibold">Hours</h4>
          <ul className="space-y-2 text-sm text-cream/70">
            <li className="flex justify-between"><span>Mon – Thu</span><span>8:00 — 01:00</span></li>
            <li className="flex justify-between"><span>Fri – Sat</span><span>8:00 — 02:00</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>8:00 — 01:00</span></li>
            <li className="pt-2 text-gold">Happy Hour 14:00 — 18:00</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-sm uppercase tracking-[0.2em] mb-4 font-sans font-semibold">Find Us</h4>
          <ul className="space-y-3 text-sm text-cream/70">
            <li className="flex gap-2"><MapPin size={16} className="text-gold mt-0.5 shrink-0" /> Seafront Promenade, Sarandë, Albania</li>
            <li className="flex gap-2"><Phone size={16} className="text-gold mt-0.5 shrink-0" /> <a href="tel:+355683993447" className="hover:text-gold">+355 68 399 3447</a></li>
          </ul>
          <div className="flex gap-3 mt-5">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full border border-cream/15 hover:border-gold hover:text-gold transition-colors">
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 pt-6 border-t border-cream/10 text-center text-xs text-cream/40">
        © {new Date().getFullYear()} Vibe 360° Sarandë. All rights reserved.
      </div>
    </footer>
  );
}
