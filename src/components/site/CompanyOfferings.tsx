import { ArrowRight, Truck, Workflow, Megaphone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./SectionHeader";
import { Placeholder } from "./Placeholder";

export function ProductsTeaser() {
  return (
    <section className="relative py-24" id="products">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Product"
          title="Produk yang dibangun dari operasional nyata"
          description="Bukan riset pasar teoretis — Hontal lahir dari kebutuhan lapangan yang kami alami sendiri."
        />

        <article className="mt-10 rounded-3xl border border-border bg-gradient-card shadow-elevated overflow-hidden grid lg:grid-cols-2">
          <div className="p-8 lg:p-12">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-primary/15 text-primary border border-primary/25">
              <Truck className="h-6 w-6" />
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/15 text-primary text-[10px] uppercase tracking-wider px-2.5 py-1 border border-primary/25">
              Flagship · Subscription
            </div>
            <h3 className="mt-3 text-3xl font-semibold">
              Hontal <span className="text-gradient">Delivery</span>
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Cloud delivery platform untuk UMKM. Gunakan driver sendiri, miliki
              database pelanggan sendiri, kurangi ketergantungan pada marketplace.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/products/hontal-delivery" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
                Lihat Produk <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="bg-surface/40 p-6 lg:p-10 border-t lg:border-t-0 lg:border-l border-border/60">
            <Placeholder kind="screenshot" label="Hontal Delivery — Dashboard" ratio="4/3" src="/screenshots/hero-dashboard.png" />
          </div>
        </article>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Workflow,
    tone: "primary" as const,
    tag: "Service · Project Based",
    title: "Custom Operational Systems",
    desc: "ERP, CRM, audit, riset, dan workflow automation yang dirancang mengikuti proses bisnis Anda.",
    href: "/services/custom-operational-systems",
  },
  {
    icon: Megaphone,
    tone: "success" as const,
    tag: "Service · Managed",
    title: "Business Activation",
    desc: "Mengubah website Anda dari brosur pasif menjadi mesin peluang bisnis — outreach, scraping, dan email campaign termasuk di dalamnya.",
    href: "/services/business-activation",
  },
];

export function ServicesTeaser() {
  return (
    <section className="relative py-24 border-y border-border/60" id="services">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Services"
          title="Dua layanan untuk mendorong operasional & pertumbuhan"
          description="Setiap layanan dirancang mulai dari pemahaman workflow — teknologi adalah implementasinya."
        />

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.href}
              className="group rounded-2xl border border-border bg-gradient-card p-8 shadow-card hover:border-primary/40 transition-colors"
            >
              <div
                className={`grid place-items-center h-12 w-12 rounded-xl border ${
                  s.tone === "primary"
                    ? "bg-primary/15 text-primary border-primary/25"
                    : "bg-success/15 text-success border-success/25"
                }`}
              >
                <s.icon className="h-6 w-6" />
              </div>
              <div className="mt-4 text-[10px] uppercase tracking-wider text-muted-foreground">{s.tag}</div>
              <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary">
                Pelajari lebih lanjut
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
