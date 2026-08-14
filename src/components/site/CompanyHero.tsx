import { ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Placeholder } from "./Placeholder";

export function CompanyHero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              Dibentuk oleh operasional lapangan, bukan teori
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              Operasional bisnis Anda,{" "}
              <span className="text-gradient">dibangun sesuai alur nyata</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Operasi.id membantu bisnis distribusi, agribisnis, dan riset menjalankan
              operasional lebih baik — lewat produk siap pakai, sistem custom, atau
              aktivasi bisnis dari website yang sudah ada.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
              >
                <MessageSquare className="h-4 w-4" /> Book Discussion
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground hover:bg-surface transition"
              >
                Lihat Portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "1 Produk", l: "Hontal Delivery, live" },
                { v: "2 Layanan", l: "Custom system · Activation" },
                { v: "6+ Project", l: "Lintas sektor" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-semibold text-foreground">{s.v}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-border shadow-elevated bg-gradient-card">
              <Placeholder kind="screenshot" label="Hontal Dashboard — Dispatch Board" ratio="16/10" src="/screenshots/hero-dashboard.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
