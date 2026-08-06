import { ArrowRight, Search, Wrench, Rocket, BarChart3, TrendingUp, AlertCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const steps = [
  { icon: AlertCircle, label: "Business Problem", desc: "Kami mulai dari masalah operasional, bukan fitur." },
  { icon: Search, label: "Understand Workflow", desc: "Diskusi mendalam, observasi lapangan, mapping proses." },
  { icon: Wrench, label: "Design Solution", desc: "Rancang sistem sesuai alur nyata — bukan template." },
  { icon: Rocket, label: "Implementation", desc: "Bangun, integrasikan, & uji langsung dengan tim operasional." },
  { icon: BarChart3, label: "Operational Efficiency", desc: "Tim bekerja lebih cepat, data terpusat, kesalahan turun." },
  { icon: TrendingUp, label: "Business Growth", desc: "Visibilitas & data mendorong keputusan yang menumbuhkan bisnis." },
];

export function HowWeHelp() {
  return (
    <section id="how-we-help" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="How We Help Businesses"
          title="Dari masalah bisnis menjadi pertumbuhan yang terukur"
          description="Pendekatan yang sama kami pakai di setiap engagement — produk maupun custom system."
        />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((s, i) => (
            <div
              key={s.label}
              className="relative rounded-2xl border border-border bg-gradient-card p-6 shadow-card"
            >
              <div className="flex items-center justify-between">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-primary/15 text-primary border border-primary/25">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold">{s.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
