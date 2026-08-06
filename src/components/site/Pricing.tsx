import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./SectionHeader";

const plans = [
  {
    name: "Starter",
    price: "Rp 299.000",
    period: "/bulan",
    credits: "150 kredit pengiriman",
    identity: "Cocok untuk bisnis yang baru mulai membangun sistem operasional pengiriman.",
    forWho: "1–3 driver",
    highlighted: false,
    features: [
      "Dispatch board & order management",
      "Live GPS tracking driver",
      "Public tracking link untuk pelanggan",
      "Database pelanggan",
      "Laporan dasar",
      "WhatsApp support",
    ],
  },
  {
    name: "Growth",
    price: "Rp 699.000",
    period: "/bulan",
    credits: "600 kredit pengiriman",
    identity: "Cocok untuk distributor yang sudah berkembang dan ingin memiliki Customer Intelligence.",
    forWho: "3–10 driver",
    highlighted: true,
    features: [
      "Semua fitur Starter",
      "Auto routing & optimasi rute",
      "Customer Intelligence (5 tier segmentasi)",
      "Business Health Score",
      "Goal tracking",
      "Marketing & dashboard pertumbuhan",
      "Executive report bulanan",
      "Priority WhatsApp support",
    ],
  },
  {
    name: "Professional",
    price: "Rp 1.499.000",
    period: "/bulan",
    credits: "1.500 kredit pengiriman",
    identity: "Cocok untuk operasional besar dengan banyak driver atau lebih dari satu cabang.",
    forWho: "10+ driver",
    highlighted: false,
    features: [
      "Semua fitur Growth",
      "Dukungan multi-cabang",
      "Analytics penjualan lanjutan",
      "Custom goals & laporan",
      "Analitik performa per area",
      "Priority support (respons < 1 jam)",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          align="center"
          eyebrow="Harga"
          title="Pilih paket sesuai skala bisnis Anda"
          description="Tidak ada kontrak. Tidak ada biaya setup. Trial 14 hari gratis dengan pendampingan onboarding."
        />

        <div className="mt-12 grid lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-3xl border p-8 flex flex-col transition ${
                plan.highlighted
                  ? "border-primary bg-gradient-card shadow-elevated"
                  : "border-border bg-gradient-card shadow-card hover:border-primary/40"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-primary text-primary-foreground text-[10px] uppercase tracking-wider px-3 py-1 shadow-glow font-medium">
                    <Sparkles className="h-3 w-3" /> Paling Populer
                  </span>
                </div>
              )}

              <div>
                <div className="text-sm font-semibold text-foreground">{plan.name}</div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{plan.identity}</p>
                <div className="mt-4 flex items-end gap-1">
                  <span className="text-3xl font-semibold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground mb-1">{plan.period}</span>
                </div>
                <div className="mt-1.5 text-xs text-primary font-medium">{plan.credits}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{plan.forWho}</div>
              </div>

              <div className="mt-6 border-t border-border/60 pt-6 flex-1">
                <ul className="space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/85">
                      <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  to="/demo"
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition ${
                    plan.highlighted
                      ? "bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-90"
                      : "border border-border bg-surface/60 text-foreground hover:bg-surface"
                  }`}
                >
                  Coba Gratis 14 Hari <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Enterprise row */}
        <div className="mt-6 rounded-2xl border border-border bg-gradient-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-base font-semibold">Enterprise</div>
            <p className="mt-1 text-sm text-muted-foreground max-w-lg">
              Untuk distributor besar dengan kebutuhan integrasi khusus atau volume tinggi.
              Kredit tidak terbatas dan dukungan langsung dari tim Hontal.
            </p>
          </div>
          <Link
            to="/demo"
            className="shrink-0 inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-3 text-sm font-medium hover:bg-surface transition"
          >
            Hubungi Kami <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Kredit tambahan tersedia: Rp 50.000 per 50 kredit. Tidak ada kontrak. Batalkan kapan saja.
        </p>
      </div>
    </section>
  );
}
