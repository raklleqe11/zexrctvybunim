import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PhotoPlaceholder } from "@/components/site/PhotoPlaceholder";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "360° Journal — Stories from Vibe 360° Sarandë" },
      { name: "description", content: "Guides, stories and tips from Sarandë's favorite cocktail bar. Best breakfast, shisha, sunset spots and more." },
      { property: "og:title", content: "360° Journal — Vibe 360°" },
      { property: "og:description", content: "Stories from the Albanian Riviera." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { tag: "Food Guide", date: "Apr 12, 2026", title: "Best Breakfast in Saranda", excerpt: "From traditional petulla and byrek to avocado toast and fresh juice — your morning starts here." },
  { tag: "Lifestyle", date: "Mar 28, 2026", title: "Shisha in Saranda: A Night Guide", excerpt: "Premium dark leaf, proper coal, and the best terraces under the stars on the Albanian Riviera." },
  { tag: "Cocktails", date: "Mar 14, 2026", title: "Albanian Spirits, Reinvented", excerpt: "How we turn raki — the soul of Albanian hospitality — into modern signature cocktails." },
  { tag: "Travel", date: "Feb 28, 2026", title: "Sunset Spots You Can't Miss in Sarandë", excerpt: "The corners of the city where golden hour hits hardest, mapped by locals." },
  { tag: "Behind the Bar", date: "Feb 10, 2026", title: "Meet the Bartenders of Vibe 360°", excerpt: "The hands behind the Kadare cocktail and the stories that shape every pour." },
  { tag: "Coming Soon", date: "—", title: "A Year on the Ionian", excerpt: "Twelve months, twelve stories — coming soon to the journal." },
];

function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      <header className="bg-forest-deep text-cream text-center pb-0 pt-[80px]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="eyebrow">360° Journal</span>
          <h1 className="font-display md:text-7xl mt-3 mb-4 text-4xl">
            Stories from <em className="text-gold">the Vibe.</em>
          </h1>
          <p className="text-cream/70 max-w-xl mx-auto text-sm">Guides, recipes, and unfiltered notes from Sarandë.</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform group">
              <PhotoPlaceholder label={`Blog cover: ${p.title}`} className="aspect-[16/10] !rounded-none !border-x-0 !border-t-0" />
              <div className="p-6">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.2em] mb-3">
                  <span className="text-gold font-semibold">{p.tag}</span>
                  <span className="text-charcoal/40">{p.date}</span>
                </div>
                <h2 className="font-display text-2xl text-forest mb-3 group-hover:text-gold transition-colors">{p.title}</h2>
                <p className="text-sm text-charcoal/65 mb-5">{p.excerpt}</p>
                <a href="#" className="text-sm text-forest font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ArrowRight size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
