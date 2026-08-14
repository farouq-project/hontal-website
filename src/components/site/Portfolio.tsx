import { CheckCircle2, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Placeholder } from "./Placeholder";

const before = [
  "Koordinasi dispatch via Manual",
  "Posisi driver tidak diketahui saat pengiriman",
  "Laporan rekap dibuat manual setiap hari",
  "Tidak ada data segmentasi pelanggan",
];

const after = [
  "Semua order dikelola dari satu dispatch board",
  "Live tracking posisi driver",
  "Dashboard otomatis, tidak ada lagi rekap manual",
  "Customer Intelligence mendeteksi pelanggan at-risk",
];

export function CaseStudy() {
  return (
    <section id="case-study" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Studi Kasus"
          title="Kencana Lima: Dari WhatsApp ke Dispatch Board"
          description="Minimarket yang mengelola pesan antar ke ratusan pelanggan setiap hari dan menggunakan Hontal Delivery setiap hari dalam operasional nyata."
        />

        <article className="mt-12 rounded-3xl border border-border bg-gradient-card shadow-elevated overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Text side */}
            <div className="p-8 lg:p-12 flex flex-col">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 text-success text-[10px] uppercase tracking-wider px-2.5 py-1 border border-success/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                  Aktif digunakan dalam operasional
                </span>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Retail &amp; Distribution · Jawa
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight">Kencana Lima</h3>
              <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                Minimarket yang mengelola pesan antar ke ratusan pelanggan setiap hari.
                Sebelum Hontal, koordinasi driver dilakukan Manual.
                Sekarang semua berjalan dari satu dispatch board.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">Sebelum Hontal</div>
                  <ul className="space-y-2">
                    {before.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-success mb-3">Dengan Hontal</div>
                  <ul className="space-y-2">
                    {after.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-sm text-foreground/85">
                        <CheckCircle2 className="h-3.5 w-3.5 text-success mt-0.5 shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-primary/25 bg-primary/5 p-5">
                <Quote className="h-4 w-4 text-primary mb-3" />
                <p className="text-sm text-foreground/90 leading-relaxed font-medium">
                  "Digunakan setiap hari dalam operasional."
                </p>
                <p className="mt-2 text-xs text-muted-foreground">— Kencana Lima, Minimarket Pesan Antar</p>
              </div>
            </div>

            {/* Screenshot side */}
            <div className="relative bg-surface/40 p-6 lg:p-10 border-t lg:border-t-0 lg:border-l border-border/60 flex flex-col gap-4">
              <Placeholder kind="screenshot" label="Kencana Lima — Dispatch Board" ratio="16/10" src="/screenshots/dispatch.png" />
              <div className="grid grid-cols-2 gap-4">
                <Placeholder kind="screenshot" label="Customer Intelligence" ratio="4/3" src="/screenshots/customer_bi.png" />
                <Placeholder kind="screenshot" label="Business Health Score" ratio="4/3" src="/screenshots/business-health-score.png" />
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
