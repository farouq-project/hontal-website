import { ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const transformations = [
  {
    before: {
      label: "Koordinasi driver lewat WhatsApp grup",
      detail: "Chat penuh, koordinasi lambat, dispatcher tidak tahu posisi siapapun tanpa telepon satu per satu.",
    },
    after: {
      label: "Dispatch Board",
      detail: "Semua order dan driver dalam satu layar. Kelola tugas driver, pantau status, dan lacak pengiriman tanpa harus membuka WhatsApp.",
    },
  },
  {
    before: {
      label: "Tidak tahu pelanggan yang mulai hilang",
      detail: "Pelanggan yang berhenti baru disadari setelah sudah lama tidak pesan. Biasanya sudah terlambat untuk menahan mereka kembali.",
    },
    after: {
      label: "Customer Intelligence otomatis",
      detail: "Sistem langsung menandai pelanggan At-Risk dan Dormant sebelum mereka benar-benar berhenti membeli.",
    },
  },
  {
    before: {
      label: "Laporan dibuat manual setiap hari",
      detail: "Owner menghabiskan waktu untuk rekap angka dari catatan dan spreadsheet yang seharusnya bisa otomatis.",
    },
    after: {
      label: "Business Health Score & Executive Dashboard",
      detail: "Satu angka yang merangkum kondisi bisnis setiap hari. Laporan bulanan siap tanpa rekap manual.",
    },
  },
];

export function ROI() {
  return (
    <section id="transformation" className="relative py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Transformasi Operasional"
          title="Sebelum Hontal vs Dengan Hontal"
          description="Bukan soal fitur baru. Ini soal cara bisnis Anda beroperasi setiap hari."
        />

        <div className="mt-12 space-y-4">
          {transformations.map((t, i) => (
            <div
              key={i}
              className="grid lg:grid-cols-[1fr_auto_1fr] gap-3 items-stretch"
            >
              {/* Before */}
              <div className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3">
                  Sebelum
                </div>
                <div className="text-sm font-semibold text-foreground/80 leading-snug">
                  {t.before.label}
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {t.before.detail}
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/15 border border-primary/25 text-primary">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              {/* After */}
              <div className="rounded-2xl border border-success/30 bg-success/5 p-6 shadow-card">
                <div className="text-[10px] uppercase tracking-wider text-success mb-3">
                  Dengan Hontal
                </div>
                <div className="text-sm font-semibold text-foreground leading-snug">
                  {t.after.label}
                </div>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                  {t.after.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Sudah berjalan dalam operasional nyata.{" "}
          <span className="text-foreground/70">Ini yang sudah terjadi, bukan janji.</span>
        </p>
      </div>
    </section>
  );
}
