import { SectionHeader } from "./SectionHeader";
import { Placeholder } from "./Placeholder";

const chapters = [
  { tag: "Agribusiness", text: "Menjalankan operasional agribisnis — memahami siklus produksi & distribusi dari lapangan." },
  { tag: "Research", text: "Membangun sistem pencatatan untuk laboratorium & fakultas agar data eksperimen terstruktur." },
  { tag: "Audit", text: "Mendigitalisasi workflow audit & approval untuk tim konsultan lintas cabang." },
  { tag: "Distribution", text: "Mengelola dispatch, driver, dan piutang untuk distributor F&B skala kota." },
  { tag: "Digital Transformation", text: "Menyatukan pengalaman menjadi pendekatan digitalisasi operasional yang praktis." },
];

export function Founder() {
  return (
    <section id="founder" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Founder"
          title="Dibentuk oleh operasional lapangan — bukan teori"
          description="Latar belakang yang membentuk cara kami membangun sistem dan produk."
        />

        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <Placeholder kind="founder" label="Founder Portrait" ratio="4/5" className="col-span-2" />
            <Placeholder kind="photo" label="Warehouse Visit" ratio="1/1" />
            <Placeholder kind="photo" label="Research Activity" ratio="1/1" />
            <Placeholder kind="photo" label="Business Discussion" ratio="4/3" className="col-span-2" />
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-4">
              {chapters.map((c, i) => (
                <article key={c.tag} className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-primary">{c.tag}</span>
                    <span className="text-[10px] text-muted-foreground">Chapter {i + 1}</span>
                  </div>
                  <p className="mt-2 text-sm text-foreground/85 leading-relaxed">{c.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
