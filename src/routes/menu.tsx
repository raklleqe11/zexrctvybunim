import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Full Menu — Vibe 360° Sarandë" },
      { name: "description", content: "Cocktails, Albanian spirits, breakfast, Mediterranean bites, wine and more. Full menu with prices in Lek." },
      { property: "og:title", content: "Full Menu — Vibe 360°" },
      { property: "og:description", content: "Signature cocktails, Albanian spirits, Mediterranean kitchen." },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; desc?: string; price: string; tag?: string };
type Section = { id: string; title: string; note?: string; items: Item[] };

const sections: Section[] = [
  {
    id: "breakfast", title: "Breakfast", note: "Served 8AM – 2PM",
    items: [
      { name: "Avocado Eggs", desc: "Sourdough, smashed avocado, poached eggs", price: "550L" },
      { name: "Albanian Breakfast", desc: "Byrek, white cheese, olives, tomato, eggs", price: "600L" },
      { name: "Petulla", desc: "Fried dough, honey, feta, jam", price: "400L" },
      { name: "Pancakes", desc: "Maple syrup, banana, chocolate", price: "500L" },
    ],
  },
  {
    id: "starters", title: "Bruschetta & Starters",
    items: [
      { name: "Bruschetta Classico", desc: "Tomato, basil, garlic, olive oil", price: "400L" },
      { name: "Burrata Plate", desc: "Burrata, prosciutto, rocket", price: "850L" },
      { name: "Antipasto Mediterraneo", desc: "Cured meats, cheese, olives, grilled veg", price: "1100L" },
    ],
  },
  {
    id: "salads", title: "Salads & Pasta",
    items: [
      { name: "Greek Salad", price: "550L" },
      { name: "Caesar with Chicken", price: "700L" },
      { name: "Ricotta & Shrimp Linguine", price: "950L" },
      { name: "Pasta al Pomodoro", price: "600L" },
    ],
  },
  {
    id: "fried", title: "Fried Specialties",
    items: [
      { name: "Fried Calamari", desc: "Lemon, garlic aioli", price: "850L" },
      { name: "Fish & Chips", price: "900L" },
      { name: "Mozzarella Sticks", price: "500L" },
    ],
  },
  {
    id: "grill", title: "Pizza, Burgers & Grill",
    items: [
      { name: "Margherita", price: "650L" },
      { name: "Diavola", price: "750L" },
      { name: "Vibe Burger", desc: "Beef, cheddar, caramelized onion, fries", price: "850L" },
      { name: "Mixed Grill", desc: "Chicken, beef, pork, vegetables", price: "1300L" },
    ],
  },
  {
    id: "cocktails", title: "Signature Cocktails",
    items: [
      { name: "Kadare", desc: "Saffron raki, honey syrup, lemon, fresh mint", price: "800L", tag: "Albanian Original" },
      { name: "Mojito", desc: "White rum, lime, mint, sugar, soda", price: "650L" },
      { name: "Espresso Martini", desc: "Vodka, fresh espresso, coffee liqueur", price: "700L" },
      { name: "Negroni", desc: "Gin, Campari, sweet vermouth", price: "750L" },
      { name: "Aperol Spritz", desc: "Aperol, prosecco, soda, orange", price: "650L" },
      { name: "Old Fashioned", desc: "Bourbon, sugar, bitters, orange peel", price: "800L" },
    ],
  },
  {
    id: "spritz", title: "Spritz · Shots · Long Drinks · Spirits",
    items: [
      { name: "Hugo Spritz", price: "550L" },
      { name: "Tequila Shot", price: "300L" },
      { name: "Gin Tonic", price: "550L" },
      { name: "Whisky Cola", price: "550L" },
    ],
  },
  {
    id: "albanian", title: "Albanian Spirits", note: "Cultural pride — distilled at home",
    items: [
      { name: "Raki Rrushi", desc: "Grape raki, traditional", price: "200L" },
      { name: "Raki Mani", desc: "Mulberry raki, smooth & aromatic", price: "250L" },
      { name: "Skanderbeg Cognac", price: "350L" },
    ],
  },
  {
    id: "beers", title: "Beers",
    items: [
      { name: "Korça (draft)", price: "250L" },
      { name: "Tirana", price: "250L" },
      { name: "Peroni", price: "350L" },
      { name: "Heineken", price: "350L" },
    ],
  },
  {
    id: "cafeteria", title: "Cafeteria",
    items: [
      { name: "Espresso", price: "100L" },
      { name: "Cappuccino", price: "150L" },
      { name: "Latte", price: "180L" },
      { name: "Tea Selection", price: "150L" },
    ],
  },
  {
    id: "soft", title: "Soft Drinks & Juices",
    items: [
      { name: "Fresh Orange Juice", price: "300L" },
      { name: "Lemonade", price: "250L" },
      { name: "Coca-Cola", price: "200L" },
      { name: "Sparkling Water", price: "150L" },
    ],
  },
  {
    id: "wine", title: "Wine Selection",
    items: [
      { name: "House Red — Glass", price: "300L" },
      { name: "House White — Glass", price: "300L" },
      { name: "Albanian Kallmet — Bottle", price: "1800L" },
      { name: "Prosecco — Bottle", price: "2200L" },
    ],
  },
];

function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <header className="pt-32 pb-16 bg-forest-deep text-cream text-center">
        <div className="mx-auto max-w-4xl px-6">
          <span className="eyebrow">The Full Menu</span>
          <h1 className="font-display text-5xl md:text-7xl mt-3 mb-4">
            Drink. Eat. <em className="text-gold">Repeat.</em>
          </h1>
          <p className="text-cream/70 max-w-xl mx-auto">All prices in Albanian Lek (L). Service included.</p>
        </div>
      </header>

      {/* Anchor nav */}
      <nav className="sticky top-[64px] z-30 bg-cream/90 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-6 flex gap-2 overflow-x-auto py-3 text-sm">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="shrink-0 px-3 py-1.5 rounded-full hover:bg-forest hover:text-cream text-forest/70 transition-colors whitespace-nowrap">
              {s.title}
            </a>
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 py-20 space-y-20">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-32">
            <div className="border-b border-forest/15 pb-4 mb-8">
              <h2 className="font-display text-4xl md:text-5xl text-forest">{s.title}</h2>
              {s.note && <p className="text-sm text-gold uppercase tracking-[0.2em] mt-2">{s.note}</p>}
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
              {s.items.map((it) => (
                <li key={it.name} className="flex gap-4 items-baseline">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <h3 className="font-display text-xl text-forest">{it.name}</h3>
                      {it.tag && <span className="text-[10px] uppercase tracking-[0.18em] text-gold font-semibold">{it.tag}</span>}
                    </div>
                    {it.desc && <p className="text-sm text-charcoal/65 mt-1">{it.desc}</p>}
                  </div>
                  <span className="text-forest font-semibold tracking-wide whitespace-nowrap">{it.price}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      <Footer />
    </div>
  );
}
