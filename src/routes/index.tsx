import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PhotoPlaceholder } from "@/components/site/PhotoPlaceholder";
import { useState } from "react";
import { Star, MapPin, Phone, ArrowRight, Sun, Wine, Waves, Cloud } from "lucide-react";
import heroImg from "@/assets/site/hero.png";
import shishaImg from "@/assets/site/shisha.png";
import terraceImg from "@/assets/site/terrace.png";
import goldenHourImg from "@/assets/site/golden-hour.png";
import cocktailPourImg from "@/assets/site/cocktail-pour.png";
import espressoMartiniImg from "@/assets/site/espresso-martini.png";
import spaceSpeakImg from "@/assets/site/space-speak.png";
import spaceSpeak2Img from "@/assets/site/space-speak-2.webp";
import spaceSpeak3Img from "@/assets/site/space-speak-3.png";
import mojitoImg from "@/assets/site/mojito.png";

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
  { name: "Mojito", price: "650L", desc: "White rum, lime, mint, sugar, soda", badge: "Most Popular", img: mojitoImg },
  { name: "Espresso Martini", price: "700L", desc: "Vodka, fresh espresso, coffee liqueur", badge: null, img: espressoMartiniImg },
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
          className="absolute inset-0 h-full w-full object-cover scale-105 blur-[2px]"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-forest-deep/25" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-cream">
          <div className="inline-flex items-center gap-2 text-gold text-xs sm:text-sm tracking-[0.25em] uppercase mb-6">
            <MapPin size={14} /> Seafront · Sarandë
          </div>
          <h1 className="font-display font-light text-[2.75rem] leading-[1.02] sm:text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight">
            A <em className="italic text-gold font-normal">360°</em> view<br />of the good life.
          </h1>
          <p className="text-cream/95 text-base md:text-lg max-w-xl mx-auto mt-6 mb-12 leading-relaxed font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
            Sea on every side. Cocktails in every hand. Sarandë's all-day rooftop on the Ionian.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-primary w-full sm:w-auto">Reserve a Table</a>
            <a href="/menu" className="btn-outline w-full sm:w-auto">View Menu</a>
          </div>
        </div>
      </section>

      {/* VIBE STRIP */}
      <section className="bg-forest text-cream">
        <div className="mx-auto max-w-7xl px-6 grid gap-12 md:grid-cols-4 text-left">
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
      <section id="about" className="relative py-24 md:py-36 overflow-hidden">
        {/* Decorative giant 360° watermark */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-10 select-none font-display text-[14rem] md:text-[22rem] leading-none text-forest/[0.04] tracking-tighter"
        >
          360°
        </div>

        <div className="relative mx-auto max-w-7xl px-6 grid gap-16 lg:gap-24 lg:grid-cols-12 items-center">
          {/* Image collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative">
              <img
                src={goldenHourImg}
                alt="Vibe 360° Sarandë rooftop bar at golden hour with 360° sea views"
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
              />
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-cream rounded-2xl shadow-[var(--shadow-card)] border border-forest/10 px-5 py-4 flex items-center gap-4">
                <div className="font-display text-4xl text-gold leading-none">07</div>
                <div className="text-left">
                  <div className="text-xs uppercase tracking-[0.2em] text-forest/60">Years on the</div>
                  <div className="text-sm font-semibold text-forest">Sarandë seafront</div>
                </div>
              </div>
              {/* Floating gold badge */}
              <div className="hidden sm:flex absolute -top-5 -right-5 h-24 w-24 rounded-full bg-gold text-forest items-center justify-center text-center shadow-[var(--shadow-card)] rotate-[-8deg]">
                <div>
                  <div className="font-display text-xl leading-none">360°</div>
                  <div className="text-[9px] uppercase tracking-[0.18em] mt-1">Sea View</div>
                </div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-6 lg:pl-6">
            <span className="eyebrow">More Than a Bar</span>
            <h2 className="font-display md:text-5xl mt-3 mb-5 text-left text-2xl text-forest leading-[1.05]">
              Born from passion.<br />
              <em className="text-gold not-italic font-display italic">Built for the vibe.</em>
            </h2>
            <p className="text-charcoal/75 leading-relaxed mb-5 text-[17px]">
              One of Sarandë's top rooftop bars — 360° sea views, handcrafted cocktails, tasty food and a relaxed vibe just steps from the promenade.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-10">
              Now featuring premium shisha with curated flavors. Try our signature <em className="text-forest not-italic font-semibold">Kadare</em> with saffron raki, share shrimp ravioli, pinsa, truffle pasta or a seafood platter — and stay for the sunset. Come for the cocktails, stay for the view.
            </p>

            {/* Feature list */}
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
              {[
                { t: "Two Seaview Verandas", s: "Upper deck for sunsets, lower for late nights" },
                { t: "Albanian Craft Cocktails", s: "Saffron raki, mulberry, mountain herbs" },
                { t: "Mediterranean Kitchen", s: "Fresh catch, grills, garden plates" },
                { t: "Premium Shisha", s: "Dark leaf, hand-prepared, slow burn" },
              ].map((f) => (
                <li key={f.t} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-forest">{f.t}</div>
                    <div className="text-xs text-charcoal/60 mt-0.5">{f.s}</div>
                  </div>
                </li>
              ))}
            </ul>

            <a href="#contact" className="btn-ghost-dark inline-flex gap-2 text-center">
              Our Full Story <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* MENU PREVIEW */}
      <section className="py-24 bg-muted/40 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <span className="eyebrow">Drink. Eat. Feel the Vibe.</span>
            <h2 className="font-display md:text-5xl mt-3 text-forest text-3xl text-center">A taste of the menu</h2>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:justify-center gap-2 mb-12 max-w-md sm:max-w-none mx-auto">
            {([
              ["cocktails", "🍹 Cocktails"],
              ["breakfast", "🍳 Breakfast"],
              ["food", "🍤 Food & Bites"],
              ["shisha", "💨 Shisha"],
            ] as [Tab, string][]).map(([k, l]) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
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
                  {c.img ? (
                    <img src={c.img} alt={`${c.name} cocktail at Vibe 360°`} className="aspect-[4/3] w-full object-cover" loading="lazy" />
                  ) : (
                    <PhotoPlaceholder label={`Cocktail photo: ${c.name} in coupe glass, garnish, soft backlight`} className="aspect-[4/3] !rounded-none !border-x-0 !border-t-0" />
                  )}
                  <div className="p-6">
                    {c.badge && <span className="text-gold text-xl font-semibold">{c.badge}</span>}
                    <div className="flex items-baseline justify-between mt-1">
                      <h3 className="font-display text-forest mt-2 mb-3 group-hover:text-gold transition-colors text-xl">{c.name}</h3>
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
                    <h3 className="font-display text-forest mt-2 mb-3 group-hover:text-gold transition-colors text-xl">{c.name}</h3>
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
                    <h3 className="font-display text-forest mt-2 mb-3 group-hover:text-gold transition-colors text-xl">{c.name}</h3>
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
            <a href="/menu" className="btn-ghost-dark inline-flex gap-2 text-center">View Full Menu <ArrowRight size={16} /></a>
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
        <div className="mx-auto max-w-7xl px-6 mb-10 text-left">
          <span className="eyebrow text-left">The Atmosphere</span>
          <h2 className="font-display md:text-5xl mt-3 text-forest text-3xl text-left">Let the space speak.</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto px-6 pb-6 snap-x">
          {[
            { type: "img" as const, src: spaceSpeakImg, alt: "The atmosphere at Vibe 360° in Sarandë" },
            { type: "img" as const, src: spaceSpeak2Img, alt: "Inside the Vibe 360° lounge" },
            { type: "img" as const, src: spaceSpeak3Img, alt: "Vibe 360° interior detail" },
            { type: "img" as const, src: terraceImg, alt: "Guests on the seaview terrace at Vibe 360°" },
            { type: "img" as const, src: cocktailPourImg, alt: "Bartender pouring a signature cocktail at Vibe 360°" },
          ].map((item, i) => (
            <img
              key={i}
              src={item.src}
              alt={item.alt}
              className="aspect-[3/4] w-[260px] md:w-[320px] shrink-0 snap-start rounded-xl object-cover shadow-[var(--shadow-card)]"
            />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="bg-forest-deep text-cream py-24 text-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-14 flex flex-col items-center">
            <span className="eyebrow">{"\n"}</span>
            <h2 className="font-display md:text-5xl mt-3 mb-5 text-center text-3xl">What our guests say</h2>
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

      {/* TRUST STRIP — repositioned as social proof band */}
      <section className="bg-cream border-y border-forest/10">
        <div className="mx-auto max-w-5xl px-6 py-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-forest text-sm">
          <div className="inline-flex items-center gap-2">
            <Star size={15} fill="currentColor" className="text-gold" />
            <span><span className="font-semibold">4.8</span> · 717 Google reviews</span>
          </div>
          <span className="hidden sm:block h-4 w-px bg-forest/15" />
          <div className="inline-flex items-center gap-2">
            <Wine size={15} className="text-gold" /> <span>Signature Cocktails</span>
          </div>
          <span className="hidden sm:block h-4 w-px bg-forest/15" />
          <div className="inline-flex items-center gap-2">
            <Waves size={15} className="text-gold" /> <span>Seaview Terrace</span>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between mb-12 gap-6 flex-wrap text-center">
            <div className="text-center">
              <span className="eyebrow">360° Journal</span>
              <h2 className="font-display md:text-5xl mt-3 mb-5 text-center text-3xl">Stories from the Vibe</h2>
            </div>
            <a href="/blog" className="btn-ghost-dark inline-flex gap-2 text-center">Visit the Journal <ArrowRight size={16} /></a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <article key={p.title} className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] group">
                <PhotoPlaceholder label={`Blog cover: ${p.title}`} className="aspect-[16/10] !rounded-none !border-x-0 !border-t-0" />
                <div className="p-6">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">{p.tag}</span>
                  <h3 className="font-display text-forest mt-2 mb-3 group-hover:text-gold transition-colors text-xl">{p.title}</h3>
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
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] mb-8">
              <img
                src={goldenHourImg}
                alt="Golden hour view from Vibe 360 terrace in Sarandë"
                className="w-full h-72 md:h-96 object-cover"
                loading="lazy"
              />
            </div>
            <span className="eyebrow text-left">Reserve</span>
            <h2 className="font-display md:text-5xl mt-3 mb-5 text-left text-2xl">
              Reserve your <em className="text-gold">golden hour.</em>
            </h2>
            <p className="text-cream/70 mb-3">
              The sky turns gold, the sea glows — and the best seats go fast. Lock in your sunset table in seconds.
            </p>
            <p className="text-gold/90 text-sm font-semibold uppercase tracking-wider text-center">
              Happy Hour daily · 6–8 PM
            </p>
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
