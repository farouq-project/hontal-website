import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const withMarketplace = [
  "Kontak pelanggan tidak bisa diakses langsung oleh bisnis Anda",
  "Riwayat pembelian tersimpan di sistem platform pihak ketiga",
  "Pelanggan setia tidak bisa diidentifikasi atau diprioritaskan",
  "Tidak ada cara mengetahui pelanggan yang mulai berhenti membeli",
];

const withHontal = [
  "Database pelanggan yang sepenuhnya milik bisnis Anda",
  "Riwayat transaksi lengkap setiap pelanggan tersedia kapan saja",
  "Segmentasi otomatis: New, Active, At-Risk, Dormant, Lost",
  "Deteksi dini pelanggan yang mulai menghilang — sebelum terlambat",
  "Hubungan langsung tanpa bergantung pada platform perantara",
];

export function Ownership() {
  return (
    <section id="ownership" className="relative py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Aset Bisnis Anda"
          title="Siapa yang Memiliki Pelanggan Anda?"
          description="Pertanyaan yang sering tidak disadari, sampai pelanggan sudah lama tidak kembali."
        />

        {/* Key callout */}
        <div className="mt-10 rounded-2xl border border-primary/30 bg-gradient-card p-8 text-center max-w-2xl mx-auto shadow-card">
          <p className="text-base text-muted-foreground leading-relaxed">
            Marketplace membantu mendapatkan pelanggan.
          </p>
          <p className="mt-2 text-xl font-semibold text-foreground leading-tight">
            Hontal membantu pelanggan{" "}
            <span className="text-gradient">kembali membeli.</span>
          </p>
        </div>

        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          {/* Left: marketplace reality */}
          <article className="rounded-2xl border border-border bg-gradient-card p-8 shadow-card">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-4">
              Lewat Platform Pihak Ketiga
            </div>
            <h3 className="text-lg font-semibold leading-tight">
              Anda mendapat order, tapi bukan pelanggan
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Marketplace dan aplikasi pesan antar sangat membantu mendatangkan pembeli baru.
              Tapi setelah transaksi selesai, hubungan sering berhenti di sana.
              Data pelanggan tidak berpindah ke tangan bisnis Anda.
            </p>
            <ul className="mt-6 space-y-3">
              {withMarketplace.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/65">
                  <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </article>

          {/* Right: Hontal solution */}
          <article className="rounded-2xl border border-success/30 bg-success/5 p-8 shadow-card">
            <div className="text-[10px] uppercase tracking-wider text-success mb-4">
              Dengan Hontal
            </div>
            <h3 className="text-lg font-semibold leading-tight">
              Bangun aset pelanggan milik bisnis Anda sendiri
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Setiap order yang masuk lewat Hontal membangun database pelanggan yang
              sepenuhnya Anda kuasai, lengkap dengan data, riwayat, dan intelijen
              untuk tindak lanjut yang tepat sasaran.
            </p>
            <ul className="mt-6 space-y-3">
              {withHontal.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                  <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
