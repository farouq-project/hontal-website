import { ArrowRight, CalendarCheck, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CTA() {
  return (
    <section id="kontak" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-card shadow-elevated px-8 py-16 sm:px-16 text-center">
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[600px] rounded-full bg-primary/20 blur-[120px]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" /> 14 Hari Gratis · Tanpa Kartu Kredit
            </div>
            <h2 className="mt-5 text-3xl sm:text-5xl font-semibold tracking-tight max-w-3xl mx-auto leading-tight">
              Siap mengubah cara bisnis Anda{" "}
              <span className="text-gradient">beroperasi?</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Jadwalkan demo 30 menit. Tim kami akan menunjukkan cara Hontal bekerja
              untuk bisnis distribusi Anda, langsung dengan skenario operasional yang relevan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
              >
                <CalendarCheck className="h-4 w-4" /> Jadwalkan Demo Gratis
              </Link>
              <a
                href="https://wa.me/6285179584244"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-6 py-3 text-sm font-medium hover:bg-surface transition"
              >
                <MessageCircle className="h-4 w-4" /> Hubungi via WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
