import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, MapPin, Phone, MessageCircle } from "lucide-react";
import logo from "@/assets/site/logo.png";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-cream/80 pt-20 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-4 text-center">
        <div className="md:col-span-1 text-center">
          <div className="flex items-center gap-3 mb-4 text-left">
            <img src={logo} alt="Vibe 360°" className="h-12 w-12 object-contain" />
            <div>
              <div className="font-display text-cream text-xl">Vibe 360°</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold/80">Cocktails · Bites · Sea</div>
            </div>
          </div>
          <p className="leading-relaxed text-cream/60 text-center text-xs">
            Best cocktail bar on the Albanian Riviera. Sunset terraces, signature drinks, and a vibe that lasts till late.
          </p>
        </div>

        <div>
          <h4 className="text-gold text-sm uppercase tracking-[0.2em] mb-4 font-sans font-semibold text-center">Explore</h4>
          <ul className="space-y-2 text-sm text-center">
            <li><Link to="/" className="hover:text-gold">Home</Link></li>
            <li><Link to="/menu" className="hover:text-gold">Menu</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Journal</Link></li>
            <li><a href="#about" className="hover:text-gold">About</a></li>
            <li><a href="#contact" className="hover:text-gold">Reserve</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-sm uppercase tracking-[0.2em] mb-4 font-sans font-semibold text-center">Hours</h4>
          <ul className="space-y-2 text-sm text-cream/70 text-center">
            <li className="flex justify-between"><span>Mon – Thu</span><span>8:00 — 01:00</span></li>
            <li className="flex justify-between"><span>Fri – Sat</span><span>8:00 — 02:00</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>8:00 — 01:00</span></li>
            <li className="pt-2 text-gold">Happy Hour 14:00 — 18:00</li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-sm uppercase tracking-[0.2em] mb-4 font-sans font-semibold text-center">Find Us</h4>
          <ul className="space-y-3 text-sm text-cream/70 text-center">
            <li className="flex gap-2 text-center"><MapPin size={16} className="text-gold mt-0.5 shrink-0" /> Seafront Promenade, Sarandë, Albania</li>
            <li className="flex gap-2 text-center"><Phone size={16} className="text-gold mt-0.5 shrink-0" /> <a href="tel:+355683993447" className="hover:text-gold">+355 68 399 3447</a></li>
          </ul>
          <div className="flex gap-3 mt-5 text-center">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/vibe360.al/", label: "Instagram" },
              { Icon: Facebook, href: "https://www.facebook.com/people/Vibe-360%C2%BA-Cocktail-Food-Bar-Saranda/61573891322385/", label: "Facebook" },
              { Icon: Youtube, href: "https://www.youtube.com/channel/UCaLyQzb_CCiWE1qwTJ_BtWw", label: "YouTube" },
              { Icon: MessageCircle, href: "https://www.tripadvisor.com/Restaurant_Review-g303165-d33008172-Reviews-Vibe_360_Cocktail_Food_Bar_Saranda-Saranda_Vlore_County.html", label: "Tripadvisor" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="h-9 w-9 grid place-items-center rounded-full border border-cream/15 hover:border-gold hover:text-gold transition-colors">
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
