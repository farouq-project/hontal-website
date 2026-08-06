import { Package, Snowflake, Cookie, UtensilsCrossed, Building2, Egg } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const industries = [
  {
    icon: Package,
    name: "Distributor FMCG",
    problem: "Ribuan order ke ratusan toko setiap hari.",
    solution: "Dispatch board dan auto routing membuat koordinasi driver lebih cepat dan terstruktur.",
  },
  {
    icon: Snowflake,
    name: "Frozen Food & Cold Chain",
    problem: "Pengiriman sensitif waktu — keterlambatan berarti produk rusak.",
    solution: "Live tracking dan rute prioritas membantu pengiriman lebih tepat waktu.",
  },
  {
    icon: Cookie,
    name: "Bakery & Produk Roti",
    problem: "Produk harus sampai pagi hari sebelum toko buka.",
    solution: "Penjadwalan order lebih awal dan pengelompokan rute membantu pengiriman dini hari berjalan lebih teratur.",
  },
  {
    icon: UtensilsCrossed,
    name: "Restoran & Katering",
    problem: "Pelanggan B2B dengan jadwal pemesanan rutin yang berbeda-beda.",
    solution: "Customer Intelligence mendeteksi perubahan pola beli sebelum pelanggan berhenti.",
  },
  {
    icon: Building2,
    name: "Bisnis Multi-Cabang",
    problem: "Tidak bisa memantau performa operasional di semua cabang sekaligus.",
    solution: "Business Health Score per cabang dalam satu dashboard terintegrasi.",
  },
  {
    icon: Egg,
    name: "Distributor Produk Segar",
    problem: "Volume tinggi, margin tipis — efisiensi rute sangat krusial.",
    solution: "Auto routing menghemat bahan bakar dan memaksimalkan kapasitas tiap driver.",
  },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-24 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Cocok untuk Berbagai Industri"
          title="Hontal dirancang untuk berbagai bisnis distribusi"
          description="Setiap industri punya tantangan operasional yang berbeda. Hontal dirancang untuk semuanya."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <article
                key={ind.name}
                className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card hover:border-primary/40 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="grid place-items-center h-10 w-10 rounded-xl bg-primary/15 text-primary border border-primary/25">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold leading-tight">{ind.name}</h3>
                </div>
                <div className="mt-5 space-y-3 text-sm">
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-primary">Tantangan Umum</div>
                    <p className="mt-1 text-foreground/85 leading-relaxed">{ind.problem}</p>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-success">Dengan Hontal</div>
                    <p className="mt-1 text-foreground/80 leading-relaxed">{ind.solution}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
