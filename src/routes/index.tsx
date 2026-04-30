import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PhotoPlaceholder } from "@/components/site/PhotoPlaceholder";
import { useState } from "react";
import { Star, MapPin, Phone, ArrowRight, Sun, Wine, Waves, Cloud } from "lucide-react";
import heroImg from "@/assets/site/hero.png";
import shishaImg from "@/assets/site/shisha.png";
import terraceImg from "@/assets/site/terrace.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vibe 360° — Cocktail Bar & Seaview Terrace in Sarandë" },
      { name: "description", content: "Best cocktail bar on the Albanian Riviera. Signature cocktails, Mediterranean bites, premium shisha and unforgettable Ionian sunsets in Sarandë." },
      { property: "og:title", content: "Vibe 360° — Sarandë" },
      { property: "og:description", content: "Sunset views, signature cocktails, unforgettable vibes on the Ionian seafront." },
    ],
  }),
  component: Home,
});

const cocktails = [
  { name: "Kadare", price: "800L", desc: "Saffron raki, honey syrup, lemon, fresh mint", badge: "Albanian Original" },
  { name: "Mojito", price: "650L", desc: "White rum, lime, mint, sugar, soda", badge: "Most Popular" },
  { name: "Espresso Martini", price: "700L", desc: "Vodka, fresh espresso, coffee liqueur", badge: null },
];

const breakfast = [
  { name: "Avocado Eggs", desc: "Toasted sourdough, smashed avocado, poached eggs" },
  { name: "Albanian Breakfast", desc: "Byrek, olives, white cheese, tomato, eggs" },
  { name: "Petulla", desc: "Albanian fried dough, honey, feta & jam" },
];

const food = [
  { name: "Fried Calamari", desc: "Crispy rings, lemon, garlic aioli" },
  { name: "Ricotta & Shrimp Pasta", desc: "Linguine, ricotta cream, sautéed shrimp" },
  { name: "Vibe Burger", desc: "Beef patty, cheddar, caramelized onion, fries" },
];

const reviews = [
  { name: "Emma", rating: 5, quote: "Hands down the best sunset spot in Sarandë. The Kadare cocktail is unreal." },
  { name: "Iris", rating: 5, quote: "Beautiful terrace, attentive staff, and the shisha was top quality." },
  { name: "Georg", rating: 5, quote: "Came for one drink, stayed for four. The vibe is exactly what the name promises." },
];

const posts = [
  { tag: "Food Guide", title: "Best Breakfast in Saranda", excerpt: "From traditional petulla to avocado toast — where to start your day right." },
  { tag: "Lifestyle", title: "Shisha in Saranda: A Night Guide", excerpt: "What to look for, premium tobacco, and the best terraces under the stars." },
  { tag: "Coming Soon", title: "Sunset Cocktail Pairings", excerpt: "Our bartenders share their favorite drinks for golden hour." },
];

type Tab = "cocktails" | "breakfast" | "food" | "shisha";

function Home() {
  const [tab, setTab] = useState<Tab>("cocktails");

  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Vibe 360° terrace at golden hour overlooking the Ionian sea in Sarandë"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-cream">
          <div className="inline-flex items-center gap-2 text-gold text-xs sm:text-sm tracking-[0.25em] uppercase mb-6">
            <MapPin size={14} /> Seafront · Sarandë
          </div>
          <h1 className="font-display font-light text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
            Where the <em className="italic text-gold font-normal">sunset</em> meets your glass.
          </h1>
          <p className="text-cream/80 text-base md:text-lg max-w-xl mx-auto mb-10">
            Cocktails, shisha and Mediterranean bites on the Ionian seafront — all day, every day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary w-full sm:w-auto">Reserve a Table</a>
            <a href="/menu" className="btn-outline w-full sm:w-auto">View Menu</a>
          </div>

          <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
            {[
              { icon: <Star size={14} fill="currentColor" />, t: "4.8 Rating" },
              { icon: <Wine size={14} />, t: "Signature Cocktails" },
              { icon: <Waves size={14} />, t: "Seaview Terrace" },
            ].map((p, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-gold text-xs tracking-wider px-4 py-2 rounded-full border border-gold/30 bg-forest-deep/40 backdrop-blur-sm">
                {p.icon}{p.t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* VIBE STRIP */}
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-4 py-4 grid grid-cols-2 gap-x-4 gap-y-3 md:flex md:justify-around md:py-5 text-xs sm:text-sm">
          {[
            { i: <Sun size={15} className="text-gold shrink-0" />, t: "Open Daily 8AM" },
            { i: <Wine size={15} className="text-gold shrink-0" />, t: "Happy Hour 2–6PM" },
            { i: <Waves size={15} className="text-gold shrink-0" />, t: "Ionian Seaview" },
            { i: <Cloud size={15} className="text-gold shrink-0" />, t: "Premium Shisha" },
          ].map((x, i) => (
            <div key={i} className="flex items-center justify-center gap-2">
              {x.i}<span className="truncate">{x.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-2 md:items-center">
          <img
            src={terraceImg}
            alt="Guests sitting at outdoor tables at Vibe 360° in Sarandë"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-card)]"
          />
          <div>
            <span className="eyebrow">More Than a Bar</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 mb-6 text-forest">
              Born from passion,<br /><em className="text-gold not-italic font-display">built for vibes.</em>
            </h2>
            <p className="text-charcoal/75 leading-relaxed mb-4">
              Vibe 360° was born on the Sarandë seafront with one goal — to create a place where the sunset, the music, and the cocktails all hit at exactly the right moment.
            </p>
            <p className="text-charcoal/75 leading-relaxed mb-8">
              Two seaview verandas, a bar built around Albanian spirits, and a kitchen that loves the Mediterranean. Come for golden hour, stay until the stars are out.
            </p>
            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { icon: "🌅", t: "Seaview", s: "Two verandas" },
                { icon: "🥂", t: "Cocktails", s: "Albanian craft" },
                { icon: "🍕", t: "Kitchen", s: "Mediterranean" },
              ].map((c) => (
                <div key={c.t} className="rounded-xl border border-forest/15 bg-forest/[0.04] px-3 py-4 text-center">
                  <div className="text-2xl mb-1.5">{c.icon}</div>
                  <div className="text-sm font-semibold text-forest leading-tight">{c.t}</div>
                  <div className="text-[11px] text-charcoal/60 mt-0.5">{c.s}</div>
                </div>
              ))}
            </div>
            <a href="#contact" className="btn-ghost-dark inline-flex gap-2">Our Full Story <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <span className="eyebrow">Drink. Eat. Feel the Vibe.</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 text-forest">A taste of the menu</h2>
          </div>

          <div className="flex justify-center gap-2 mb-12 overflow-x-auto pb-2">
            {([
              ["cocktails", "🍹 Cocktails"],
              ["breakfast", "🍳 Breakfast"],
              ["food", "🍤 Food & Bites"],
              ["shisha", "💨 Shisha"],
            ] as [Tab, string][]).map(([k, l]) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  tab === k ? "bg-forest text-cream" : "bg-cream text-forest/70 hover:text-forest border border-forest/10"
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          {tab === "cocktails" && (
            <div className="grid gap-6 md:grid-cols-3">
              {cocktails.map((c) => (
                <article key={c.name} className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform">
                  <PhotoPlaceholder label={`Cocktail photo: ${c.name} in coupe glass, garnish, soft backlight`} className="aspect-[4/3] !rounded-none !border-x-0 !border-t-0" />
                  <div className="p-6">
                    {c.badge && <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">{c.badge}</span>}
                    <div className="flex items-baseline justify-between mt-1">
                      <h3 className="font-display text-2xl text-forest">{c.name}</h3>
                      <span className="text-forest font-sans font-semibold">{c.price}</span>
                    </div>
                    <p className="text-sm text-charcoal/65 mt-2">{c.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {tab === "breakfast" && (
            <div className="grid gap-6 md:grid-cols-3">
              {breakfast.map((c) => (
                <article key={c.name} className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
                  <PhotoPlaceholder label={`Breakfast photo: ${c.name}, plated, natural morning light`} className="aspect-[4/3] !rounded-none !border-x-0 !border-t-0" />
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-forest">{c.name}</h3>
                    <p className="text-sm text-charcoal/65 mt-2">{c.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {tab === "food" && (
            <div className="grid gap-6 md:grid-cols-3">
              {food.map((c) => (
                <article key={c.name} className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
                  <PhotoPlaceholder label={`Food photo: ${c.name}, top-down, rustic plate`} className="aspect-[4/3] !rounded-none !border-x-0 !border-t-0" />
                  <div className="p-6">
                    <h3 className="font-display text-2xl text-forest">{c.name}</h3>
                    <p className="text-sm text-charcoal/65 mt-2">{c.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          )}

          {tab === "shisha" && (
            <div className="rounded-3xl bg-forest-deep text-cream p-10 md:p-16 grid md:grid-cols-2 gap-10 items-center">
              <img src={shishaImg} alt="Premium shisha at Vibe 360°" className="aspect-[4/3] w-full rounded-2xl object-cover" />
              <div>
                <span className="eyebrow">Sunset Sessions</span>
                <h3 className="font-display text-4xl mt-3 mb-4">Premium dark leaf, hand-prepared.</h3>
                <p className="text-cream/70 mb-6 leading-relaxed">
                  We use only premium dark leaf tobacco, blended fresh and served with proper coal management. Pair with a cocktail and ride the sunset.
                </p>
                <span className="inline-block bg-gold text-forest px-4 py-2 rounded-full text-sm font-semibold">Happy Hour 2–6PM · Free snack with every shisha</span>
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <a href="/menu" className="btn-ghost-dark inline-flex gap-2">View Full Menu <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      {/* HAPPY HOUR */}
      <section className="bg-forest text-cream py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="eyebrow">Every Day</span>
          <h2 className="font-display whitespace-nowrap text-[2rem] sm:text-5xl md:text-6xl mt-3 mb-6">
            Happy Hour <span className="text-gold italic">2–6PM</span>
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 my-10 text-sm">
            <div className="border border-cream/15 rounded-xl p-5">
              <div className="text-gold font-display text-3xl mb-1">−20%</div>
              <div className="text-cream/70">Off all cocktails</div>
            </div>
            <div className="border border-cream/15 rounded-xl p-5">
              <div className="text-gold font-display text-3xl mb-1">Free</div>
              <div className="text-cream/70">Snack with every shisha</div>
            </div>
            <div className="border border-cream/15 rounded-xl p-5">
              <div className="text-gold font-display text-3xl mb-1">1500L</div>
              <div className="text-cream/70">Sunset Pack: 2 cocktails + antipasto for 2</div>
            </div>
          </div>
          <a href="#contact" className="btn-primary">Book Your Spot</a>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 mb-10">
          <span className="eyebrow">The Atmosphere</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3 text-forest">Let the space speak.</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-6 pb-6 snap-x">
          {[
            "The Terrace at golden hour",
            "Bar shelves with Albanian spirits",
            "Sea view from upper veranda",
            "The illuminated Vibe 360° sign",
            "Cocktail being poured",
            "Late night ambient lights",
          ].map((t, i) => (
            <PhotoPlaceholder
              key={i}
              label={t}
              className="aspect-[3/4] w-[260px] md:w-[320px] shrink-0 snap-start"
            />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-forest-deep text-cream py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14 flex flex-col items-center">
            <span className="eyebrow">Guest Stories</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 mb-5">What our guests say</h2>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-gold/30 bg-gold/5">
              <div className="flex gap-0.5 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <span className="text-cream/85 text-xs sm:text-sm">
                <span className="font-semibold text-gold">4.8</span> · 717 Google reviews
              </span>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="border border-cream/10 rounded-2xl p-7 bg-cream/[0.03]">
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: r.rating }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-cream/85 leading-relaxed mb-5">"{r.quote}"</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-display text-lg">{r.name}</span>
                  <span className="text-gold/70 text-xs uppercase tracking-wider">Google</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#" className="btn-outline">Leave a Google Review</a>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap">
            <div>
              <span className="eyebrow">360° Journal</span>
              <h2 className="font-display text-4xl md:text-5xl mt-3 text-forest">Stories from the Vibe</h2>
            </div>
            <a href="/blog" className="btn-ghost-dark inline-flex gap-2">Visit the Journal <ArrowRight size={16} /></a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <article key={p.title} className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] group">
                <PhotoPlaceholder label={`Blog cover: ${p.title}`} className="aspect-[16/10] !rounded-none !border-x-0 !border-t-0" />
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">{p.tag}</span>
                  <h3 className="font-display text-2xl text-forest mt-2 mb-3 group-hover:text-gold transition-colors">{p.title}</h3>
                  <p className="text-sm text-charcoal/65 mb-4">{p.excerpt}</p>
                  <a href="/blog" className="text-sm text-forest font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">Read More <ArrowRight size={14} /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION */}
      <section id="contact" className="py-24 bg-gradient-to-br from-forest to-forest-deep text-cream">
        <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Reserve</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 mb-5">
              Reserve your table.<br /><em className="text-gold">Catch the best views in Sarandë.</em>
            </h2>
            <p className="text-cream/70 mb-8">
              Walk-ins welcome — but for sunset hours and weekends, a reservation guarantees your view. Reach us in seconds.
            </p>
            <div className="space-y-3">
              <a href="https://wa.me/355683993447" className="btn-primary w-full sm:w-auto">💬 Reserve on WhatsApp</a>
              <div>
                <a href="tel:+355683993447" className="inline-flex items-center gap-2 text-cream hover:text-gold">
                  <Phone size={16} /> +355 68 399 3447
                </a>
              </div>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); window.open("https://wa.me/355683993447", "_blank"); }}
            className="bg-cream/5 border border-cream/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-4"
          >
            <h3 className="font-display text-2xl text-cream mb-2">Quick Reservation</h3>
            {[
              { l: "Name", t: "text" },
              { l: "Date", t: "date" },
              { l: "Party size", t: "number" },
              { l: "Phone or Email", t: "text" },
            ].map((f) => (
              <div key={f.l}>
                <label className="block text-xs uppercase tracking-wider text-cream/60 mb-1">{f.l}</label>
                <input type={f.t} required className="w-full bg-transparent border border-cream/20 rounded-lg px-4 py-3 text-cream focus:border-gold focus:outline-none transition-colors" />
              </div>
            ))}
            <button type="submit" className="btn-primary w-full">Send Reservation</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
