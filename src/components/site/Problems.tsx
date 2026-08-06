import { MessageCircleX, EyeOff, HelpCircle, BarChart2, UserX, Brain } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    icon: MessageCircleX,
    title: "WhatsApp Kelebihan Beban",
    desc: "Konfirmasi order, koordinasi driver, update status, semuanya menumpuk di WhatsApp grup. Tidak ada struktur, tidak bisa berkembang.",
    signal: "Satu driver bermasalah bisa membuat chat penuh selama berjam-jam.",
  },
  {
    icon: EyeOff,
    title: "Driver Tidak Bisa Dipantau",
    desc: "Posisi driver tidak diketahui. Tidak ada informasi sudah sampai mana pengiriman tanpa harus telepon langsung.",
    signal: "Dispatcher tidak tahu apa-apa. Pelanggan telepon terus. Tim kehabisan waktu untuk menjawab.",
  },
  {
    icon: HelpCircle,
    title: "Pelanggan Bertanya-Tanya",
    desc: "Setiap pertanyaan 'sudah sampai mana paketnya?' harus dijawab manual. Tidak ada sistem tracking untuk pelanggan.",
    signal: "Bukan salah pelanggan, memang tidak ada visibilitas untuk mereka.",
  },
  {
    icon: BarChart2,
    title: "Operasional Tanpa Data",
    desc: "Berapa pengiriman sukses hari ini? Mana driver dengan performa terbaik? Owner tidak tahu tanpa rekap manual.",
    signal: "Laporan baru tersedia di akhir bulan, sehingga terlambat untuk mengambil keputusan.",
  },
  {
    icon: UserX,
    title: "Pelanggan Menghilang Diam-Diam",
    desc: "Tidak ada sistem untuk mendeteksi pelanggan yang mulai jarang beli. Pelanggan yang berhenti baru disadari setelah sudah lama tidak kembali.",
    signal: "Ketika sudah disadari, biasanya sudah terlambat untuk menahan mereka kembali.",
  },
  {
    icon: Brain,
    title: "Keputusan Berdasarkan Insting",
    desc: "Tanpa dashboard bisnis, owner memutuskan mana yang perlu diperbaiki berdasarkan perasaan, bukan data.",
    signal: "Peluang pertumbuhan terlewat karena tidak ada data yang bisa dipegang.",
  },
];

export function Problems() {
  return (
    <section id="challenges" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Masalah yang Kami Selesaikan"
          title="Kenapa bisnis distribusi sulit tumbuh?"
          description="Bukan karena kurang kerja keras. Tapi karena operasional masih berjalan manual."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <article
              key={it.title}
              className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card hover:border-primary/40 transition"
            >
              <div className="grid place-items-center h-11 w-11 rounded-xl bg-surface-elevated border border-border text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold leading-tight">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              <p className="mt-4 text-xs text-foreground/80 border-t border-border/60 pt-3">
                {it.signal}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
