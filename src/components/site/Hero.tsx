import { ArrowRight, CalendarCheck, TrendingUp, Truck, Users } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Placeholder } from "./Placeholder";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 lg:pt-28">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
              Sudah berjalan dalam operasional nyata
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              Masih Kelola Pengiriman{" "}
              <span className="text-gradient">Lewat WhatsApp?</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              Hontal mengganti koordinasi manual dengan satu dispatch board,
              lengkap dengan live tracking driver, intelijen pelanggan, dan dashboard
              kesehatan bisnis yang bisa dibuka setiap pagi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
              >
                <CalendarCheck className="h-4 w-4" /> Book Demo Gratis
              </Link>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground hover:bg-surface transition"
              >
                Lihat Fitur <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { v: "14 Hari", l: "Trial gratis" },
                { v: "3 Pilar", l: "Deliver · Understand · Grow" },
                { v: "1 Hari", l: "Setup & onboarding" },
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

            <FloatingStat
              className="absolute -left-4 top-10"
              icon={<TrendingUp className="h-4 w-4" />}
              label="Business Health Score"
              value="84 / 100"
              tone="success"
            />
            <FloatingStat
              className="absolute -right-2 top-1/2"
              icon={<Truck className="h-4 w-4" />}
              label="Pengiriman aktif"
              value="47 order"
            />
            <FloatingStat
              className="absolute left-8 -bottom-4"
              icon={<Users className="h-4 w-4" />}
              label="Pelanggan terpantau"
              value="312 aktif"
            />
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { l: "Dispatch Board", src: "/screenshots/dispatch.png" },
            { l: "Live Tracking Driver", src: "/screenshots/driver-live-tracking.png" },
            { l: "Customer Intelligence", src: "/screenshots/customer_bi.png" },
            { l: "Business Health Score", src: "/screenshots/business-health-score.png" },
          ].map((s) => (
            <Placeholder key={s.l} kind="screenshot" label={s.l} ratio="16/10" src={s.src} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FloatingStat({
  icon,
  label,
  value,
  tone,
  className,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone?: "success";
  className?: string;
}) {
  return (
    <div
      className={`hidden sm:flex items-center gap-3 rounded-xl border border-border bg-surface-elevated/90 backdrop-blur px-4 py-3 shadow-card ${className}`}
    >
      <div
        className={`grid place-items-center h-8 w-8 rounded-lg ${
          tone === "success" ? "bg-success/15 text-success" : "bg-primary/15 text-primary"
        }`}
      >
        {icon}
      </div>
      <div>
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div
          className={`text-sm font-semibold ${tone === "success" ? "text-success" : "text-foreground"}`}
        >
          {value}
        </div>
      </div>
    </div>
  );
}
