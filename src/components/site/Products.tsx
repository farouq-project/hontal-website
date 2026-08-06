import {
  Truck, Users, TrendingUp,
  Package, Route, MapPin, Link2,
  Eye, HeartPulse, ShoppingBag, Bell,
  Target, BarChart3, FileText, Megaphone,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./SectionHeader";

const pillars = [
  {
    id: "deliver",
    eyebrow: "DELIVER",
    icon: Truck,
    title: "Operasional Pengiriman",
    desc: "Dari order masuk hingga diantar, semua dikelola dalam satu dispatch board tanpa ketergantungan pada grup WhatsApp.",
    accentClass: "bg-primary/15 text-primary border-primary/25",
    badgeClass: "bg-primary/10 text-primary border-primary/25",
    features: [
      { icon: Package, label: "Dispatch Board", desc: "Kelola semua order dari satu layar" },
      { icon: Route, label: "Auto Routing", desc: "Optimalkan rute pengiriman otomatis" },
      { icon: Truck, label: "Driver Assignment", desc: "Alokasikan driver secara efisien" },
      { icon: MapPin, label: "Live GPS Tracking", desc: "Pantau posisi driver secara real-time" },
      { icon: Link2, label: "Public Tracking Link", desc: "Pelanggan pantau sendiri tanpa telepon" },
    ],
  },
  {
    id: "understand",
    eyebrow: "UNDERSTAND",
    icon: Users,
    title: "Intelijen Pelanggan",
    desc: "Ketahui siapa pelanggan VIP Anda, siapa yang mulai menghilang, dan siapa yang perlu ditindaklanjuti sebelum terlambat.",
    accentClass: "bg-success/15 text-success border-success/25",
    badgeClass: "bg-success/10 text-success border-success/25",
    features: [
      { icon: Eye, label: "Customer Segmentation", desc: "5 tier: New, Active, At-Risk, Dormant, Lost" },
      { icon: HeartPulse, label: "Customer Health", desc: "Pantau aktivitas setiap pelanggan" },
      { icon: ShoppingBag, label: "Purchase History", desc: "Seluruh riwayat transaksi pelanggan" },
      { icon: Bell, label: "Dormant Alert", desc: "Tahu saat pelanggan mulai menghilang" },
      { icon: Users, label: "VIP Detection", desc: "Identifikasi pelanggan bernilai tinggi" },
    ],
  },
  {
    id: "grow",
    eyebrow: "GROW",
    icon: TrendingUp,
    title: "Analytics & Pertumbuhan",
    desc: "Data bisnis yang bermakna untuk membantu owner memutuskan berdasarkan angka, bukan perasaan.",
    accentClass: "bg-primary/15 text-primary border-primary/25",
    badgeClass: "bg-primary/10 text-primary border-primary/25",
    features: [
      { icon: HeartPulse, label: "Business Health Score", desc: "Skor 100 poin kondisi bisnis hari ini" },
      { icon: Target, label: "Goal Tracking", desc: "Pantau target revenue, order, dan pelanggan" },
      { icon: FileText, label: "Executive Report", desc: "Laporan bulanan otomatis + rekomendasi" },
      { icon: Megaphone, label: "Marketing Dashboard", desc: "ROAS, CAC, dan analitik kampanye" },
      { icon: BarChart3, label: "Growth Dashboard", desc: "Sales funnel dan analitik pertumbuhan" },
    ],
  },
];

export function Pillars() {
  return (
    <section id="features" className="relative py-28 border-y border-border/60">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeader
          align="center"
          eyebrow="Tiga Pilar Utama"
          title="Deliver · Understand · Grow"
          description="Hontal bukan sekadar software pengiriman. Ini platform operasional terpadu untuk bisnis distribusi Anda."
        />

        <div className="mt-14 grid lg:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.id}
                className="rounded-3xl border border-border bg-gradient-card p-8 shadow-card hover:border-primary/40 transition flex flex-col"
              >
                <div className="flex items-center gap-3">
                  <div className={`grid place-items-center h-11 w-11 rounded-xl border ${p.accentClass}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className={`text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border font-medium ${p.badgeClass}`}>
                    {p.eyebrow}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>

                <ul className="mt-6 space-y-3 flex-1">
                  {p.features.map((f) => {
                    const FIcon = f.icon;
                    return (
                      <li key={f.label} className="flex items-start gap-3">
                        <div className={`mt-0.5 grid place-items-center h-6 w-6 rounded-md border shrink-0 ${p.accentClass}`}>
                          <FIcon className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <span className="text-sm font-medium text-foreground">{f.label}</span>
                          <span className="text-xs text-muted-foreground ml-2">{f.desc}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
          >
            Jadwalkan Demo — Gratis
          </Link>
        </div>
      </div>
    </section>
  );
}
