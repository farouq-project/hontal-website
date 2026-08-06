import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Truck } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Placeholder } from "@/components/site/Placeholder";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Operasi.id" },
      { name: "description", content: "Produk digital untuk operasional bisnis. Hontal Delivery, produk unggulan kami untuk UMKM." },
      { property: "og:title", content: "Products — Operasi.id" },
      { property: "og:description", content: "Produk digital untuk operasional bisnis." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <PageShell
      eyebrow="Our Products"
      title="Produk yang dibangun dari operasional nyata"
      description="Setiap produk kami lahir dari kebutuhan lapangan — bukan riset teoretis."
    >
      <section className="mx-auto max-w-7xl px-6 py-16">
        <article className="rounded-3xl border border-border bg-gradient-card shadow-elevated overflow-hidden grid lg:grid-cols-2">
          <div className="p-8 lg:p-12">
            <div className="grid place-items-center h-12 w-12 rounded-xl bg-primary/15 text-primary border border-primary/25">
              <Truck className="h-6 w-6" />
            </div>
            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary/15 text-primary text-[10px] uppercase tracking-wider px-2.5 py-1 border border-primary/25">
              Flagship · Subscription
            </div>
            <h2 className="mt-3 text-3xl font-semibold">
              Hontal <span className="text-gradient">Delivery</span>
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Cloud delivery platform untuk UMKM. Gunakan driver sendiri, miliki
              database pelanggan sendiri, kurangi ketergantungan pada marketplace.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/products/hontal-delivery" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
                Learn More <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/demo" className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-3 text-sm font-medium hover:bg-surface transition">
                Request Demo
              </Link>
            </div>
          </div>
          <div className="bg-surface/40 p-6 lg:p-10 border-t lg:border-t-0 lg:border-l border-border/60">
            <Placeholder kind="screenshot" label="Hontal Delivery — Dashboard" ratio="4/3" />
          </div>
        </article>

        <div className="mt-10 rounded-2xl border border-dashed border-border bg-surface/30 p-8 text-center">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Coming Soon</div>
          <div className="mt-2 text-lg font-semibold">Business Activation Platform</div>
          <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Roadmap kami berikutnya: platform aktivasi peluang bisnis yang dapat digunakan secara self-service.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
