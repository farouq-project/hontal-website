import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problems } from "@/components/site/Problems";
import { Ownership } from "@/components/site/Ownership";
import { ROI } from "@/components/site/ROI";
import { Pillars } from "@/components/site/Products";
import { Features } from "@/components/site/Solutions";
import { Industries } from "@/components/site/Demos";
import { CaseStudy } from "@/components/site/Portfolio";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { WaButton } from "@/components/site/WaButton";

export const Route = createFileRoute("/products/hontal-delivery")({
  head: () => ({
    meta: [
      { title: "Hontal — Platform Operasional Pengiriman untuk Bisnis Distribusi" },
      { name: "description", content: "Hontal membantu bisnis distribusi mengelola pengiriman, memahami pelanggan, dan mengukur pertumbuhan dalam satu platform." },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Hontal — Platform Operasional Pengiriman untuk Bisnis Distribusi" },
      { property: "og:description", content: "Kelola pengiriman, pahami pelanggan, dan tumbuhkan bisnis distribusi Anda." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://hontal.id/products/hontal-delivery" },
      { property: "og:image", content: "https://hontal.id/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Hontal — Platform Operasional Pengiriman untuk Bisnis Distribusi" },
      { property: "og:site_name", content: "Hontal by Operasi.id" },
      { property: "og:locale", content: "id_ID" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Hontal — Platform Operasional Pengiriman untuk Bisnis Distribusi" },
      { name: "twitter:description", content: "Kelola pengiriman, pahami pelanggan, dan tumbuhkan bisnis distribusi Anda." },
      { name: "twitter:image", content: "https://hontal.id/og-image.png" },
    ],
    links: [
      { rel: "canonical", href: "https://hontal.id/products/hontal-delivery" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  component: HontalPage,
});

function HontalPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Problems />
        <Ownership />
        <ROI />
        <Pillars />
        <Features />
        <Industries />
        <CaseStudy />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WaButton />
    </div>
  );
}
