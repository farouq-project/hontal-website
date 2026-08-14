import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { CompanyHero } from "@/components/site/CompanyHero";
import { ProductsTeaser, ServicesTeaser } from "@/components/site/CompanyOfferings";
import { HowWeHelp } from "@/components/site/HowWeHelp";
import { WhyUs } from "@/components/site/WhyUs";
import { CompanyCTA } from "@/components/site/CompanyCTA";
import { Footer } from "@/components/site/Footer";
import { WaButton } from "@/components/site/WaButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Operasi.id — Digital Transformation untuk Operasional Bisnis" },
      { name: "description", content: "Produk, sistem custom, dan aktivasi bisnis untuk operasional yang lahir dari lapangan — bukan teori." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Operasi.id — Digital Transformation untuk Operasional Bisnis" },
      { property: "og:description", content: "Produk, sistem custom, dan aktivasi bisnis untuk operasional bisnis Anda." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hontal.id" },
      { property: "og:image", content: "https://hontal.id/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:site_name", content: "Operasi.id" },
      { property: "og:locale", content: "id_ID" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Operasi.id — Digital Transformation untuk Operasional Bisnis" },
      { name: "twitter:description", content: "Produk, sistem custom, dan aktivasi bisnis untuk operasional bisnis Anda." },
      { name: "twitter:image", content: "https://hontal.id/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://hontal.id" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

const portfolioCategories = [
  "Retail & Distribution", "Research", "Audit", "Agribusiness", "Corporate Websites",
];

function PortfolioTeaser() {
  return (
    <section className="relative py-24 border-y border-border/60" id="portfolio">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Portfolio
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
              Project lintas sektor, dari lapangan yang sama
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Distribusi, riset, audit, agribisnis, hingga corporate website —
              dibangun dengan pendekatan yang sama: memahami workflow dulu.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground hover:bg-surface transition shrink-0"
          >
            Lihat Semua Portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {portfolioCategories.map((c) => (
            <span key={c} className="text-sm rounded-full border border-border bg-gradient-card px-4 py-2 text-foreground/80">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <CompanyHero />
        <ProductsTeaser />
        <ServicesTeaser />
        <HowWeHelp />
        <PortfolioTeaser />
        <WhyUs />
        <CompanyCTA />
      </main>
      <Footer />
      <WaButton />
    </div>
  );
}
