import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Placeholder } from "@/components/site/Placeholder";

export const Route = createFileRoute("/products/hontal-delivery")({
  head: () => ({
    meta: [
      { title: "Hontal Delivery — Cloud Delivery Platform for SMEs" },
      { name: "description", content: "Platform delivery untuk UMKM. Gunakan driver sendiri, miliki database pelanggan, kurangi ketergantungan marketplace." },
      { property: "og:title", content: "Hontal Delivery — Cloud Delivery Platform" },
      { property: "og:description", content: "Order, dispatch, driver tracking, dan analytics penjualan dalam satu platform." },
    ],
  }),
  component: HontalPage,
});

const modules = [
  "Order Management", "Dispatch Board", "Auto Routing", "Driver Assignment",
  "Driver Tracking", "Customer Database", "Delivery History", "Cashier Integration",
  "QRIS Receipt", "Bluetooth Printing", "Sales Dashboard", "Customer Mapping",
  "Reporting", "Live GPS Monitoring",
];

const outcomes = [
  "Miliki database pelanggan sendiri",
  "Kurangi waktu koordinasi driver",
  "Pantau operasional secara real-time",
  "Kurangi ketergantungan pada marketplace",
];

function HontalPage() {
  return (
    <PageShell
      eyebrow="Flagship Product"
      title="Hontal Delivery — platform delivery yang bisnis Anda miliki"
      description="Subscription-based cloud platform untuk UMKM yang menjalankan pengiriman dengan driver mereka sendiri."
    >
      <section className="mx-auto max-w-7xl px-6 py-16 space-y-10">
        <Placeholder kind="screenshot" label="Hontal Delivery — Dashboard Preview" ratio="16/9" src="/screenshots/hero-dashboard.png" />

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-gradient-card p-8">
            <div className="text-[10px] uppercase tracking-wider text-primary">Business Outcomes</div>
            <ul className="mt-4 space-y-3">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-card p-8">
            <div className="text-[10px] uppercase tracking-wider text-primary">Modules</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {modules.map((m) => (
                <span key={m} className="text-xs rounded-full border border-border bg-surface px-3 py-1 text-foreground/80">{m}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Placeholder kind="screenshot" label="Dispatch Board" ratio="4/3" src="/screenshots/dispatch-board.png" />
          <Placeholder kind="screenshot" label="Live GPS Tracking" ratio="4/3" src="/screenshots/driver-live-tracking.png" />
          <Placeholder kind="screenshot" label="Sales Analytics" ratio="4/3" src="/screenshots/bi-sales.png" />
        </div>

        <div className="text-center">
          <Link to="/demo" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
            Request Product Demo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
