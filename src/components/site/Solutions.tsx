import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Placeholder } from "./Placeholder";

const features = [
  {
    id: "dispatch",
    eyebrow: "Operasional · Dispatch Board",
    title: "Dari order masuk hingga diantar, semua dalam satu layar",
    desc: "Dispatcher bisa melihat semua order, mengalokasikan driver, dan mengoptimalkan rute, semua tanpa harus membuka WhatsApp.",
    bullets: [
      "Buat dan kelola order dari satu dashboard",
      "Tetapkan driver dan optimalkan rute secara efisien",
      "Auto routing menghemat waktu dan bahan bakar",
      "Status setiap order langsung diperbarui",
    ],
    screenshot: "Dispatch Board — Order & Driver Management",
    src: "/screenshots/dispatch-board.png",
    reverse: false,
  },
  {
    id: "intelligence",
    eyebrow: "Pelanggan · Customer Intelligence",
    title: "Tahu pelanggan yang mulai menghilang sebelum mereka pergi",
    desc: "Segmentasi otomatis membagi pelanggan menjadi 5 tier berdasarkan pola pembelian. Bisnis Anda tahu siapa yang perlu ditindaklanjuti.",
    bullets: [
      "5 tier segmentasi: New, Active, At-Risk, Dormant, Lost",
      "Riwayat transaksi lengkap setiap pelanggan",
      "Identifikasi otomatis pelanggan VIP",
      "Notifikasi ketika pelanggan mulai tidak aktif",
    ],
    screenshot: "Customer Intelligence — Segmentation Dashboard",
    src: "/screenshots/customer-intelligence.png",
    reverse: true,
  },
  {
    id: "health",
    eyebrow: "Pertumbuhan · Business Health Score",
    title: "Satu angka yang merangkum kondisi bisnis Anda hari ini",
    desc: "Business Health Score menggabungkan 5 dimensi bisnis (revenue, pelanggan, operasional, pertumbuhan, dan goals) menjadi skor 0–100 yang bisa dibaca setiap pagi.",
    bullets: [
      "Skor komposit dari 5 dimensi bisnis",
      "Rekomendasi berbasis data, bukan asumsi",
      "Pantau tren bulan ke bulan",
      "Tetapkan dan pantau target bisnis langsung dari dashboard",
    ],
    screenshot: "Business Health Score — Executive Dashboard",
    src: "/screenshots/business-health-score.png",
    reverse: false,
  },
];

export function Features() {
  return (
    <section id="product-detail" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 space-y-24">
        <SectionHeader
          eyebrow="Fitur Unggulan"
          title="Dibuat dari operasional nyata, bukan asumsi"
          description="Setiap fitur Hontal lahir dari masalah nyata yang dihadapi bisnis distribusi, bukan dari fitur yang terlihat bagus di atas kertas."
        />

        {features.map((f) => (
          <article
            key={f.id}
            className={`grid lg:grid-cols-2 gap-12 items-center ${f.reverse ? "lg:gap-16" : ""}`}
          >
            <div className={f.reverse ? "lg:order-2" : ""}>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {f.eyebrow}
              </div>
              <h3 className="mt-5 text-2xl sm:text-3xl font-semibold tracking-tight leading-tight">
                {f.title}
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{f.desc}</p>
              <ul className="mt-6 space-y-3">
                {f.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                    <span className="text-foreground/85">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={f.reverse ? "lg:order-1" : ""}>
              <Placeholder kind="screenshot" label={f.screenshot} ratio="4/3" src={f.src} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
