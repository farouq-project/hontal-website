import { createFileRoute } from "@tanstack/react-router";
import { CalendarCheck, MessageCircle, Clock, Truck, Users, TrendingUp, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Book Demo — Hontal" },
      { name: "description", content: "Jadwalkan demo 30 menit dan lihat cara Hontal mengelola pengiriman, pelanggan, dan pertumbuhan bisnis distribusi Anda." },
      { property: "og:title", content: "Book Demo — Hontal" },
      { property: "og:description", content: "Demo gratis 30 menit. Lihat Hontal bekerja untuk bisnis distribusi Anda." },
    ],
  }),
  component: DemoPage,
});

const flow = [
  { step: "01", label: "Anda book demo", desc: "Kirim pesan via WhatsApp atau isi form. Tim kami merespons dalam 1 jam kerja." },
  { step: "02", label: "Sesi demo 30 menit", desc: "Kami tampilkan Hontal langsung — dispatch board, customer intelligence, business health score." },
  { step: "03", label: "Trial 14 hari gratis", desc: "Akun trial langsung diaktifkan. Onboarding didampingi tim kami pada hari pertama." },
  { step: "04", label: "Bisnis berjalan di Hontal", desc: "Order pertama dijalankan dari dispatch board dalam hari yang sama." },
];

const demoCoverage = [
  { icon: Truck, label: "DELIVER", items: ["Dispatch board live", "Auto routing demo", "Live GPS tracking"] },
  { icon: Users, label: "UNDERSTAND", items: ["Customer segmentation", "Dormant detection", "VIP identification"] },
  { icon: TrendingUp, label: "GROW", items: ["Business Health Score", "Executive report", "Goal tracking"] },
];

function DemoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-hero border-b border-border/60">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[380px] w-[800px] rounded-full bg-primary/20 blur-[140px]" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                  Demo Gratis · Tanpa Komitmen
                </div>
                <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.1]">
                  Jadwalkan Demo<br />
                  <span className="text-gradient">30 Menit Gratis</span>
                </h1>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  Tim kami akan menunjukkan cara Hontal bekerja untuk bisnis distribusi Anda —
                  langsung dengan skenario operasional yang relevan.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/6285179584244?text=Halo%20Tim%20Hontal!%0A%0ASaya%20ingin%20menjadwalkan%20demo%20Hontal%20Delivery.%0A%0ANama%20Bisnis%3A%20%0AJenis%20Produk%3A%20%0AKota%2FLokasi%3A%20%0AJumlah%20Driver%3A%20%0A%0ATerima%20kasih!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-primary px-6 py-4 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
                  >
                    <MessageCircle className="h-5 w-5" /> Jadwalkan via WhatsApp
                  </a>
                  <a
                    href="mailto:dhani@hontal.id"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-surface/60 px-6 py-4 text-sm font-medium hover:bg-surface transition"
                  >
                    <CalendarCheck className="h-5 w-5" /> Kirim Email
                  </a>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  Respons dalam 1 jam kerja
                </div>
              </div>

              {/* Demo flow */}
              <div className="space-y-4">
                {flow.map((f) => (
                  <div key={f.step} className="flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-5 shadow-card">
                    <div className="grid place-items-center h-10 w-10 rounded-xl bg-primary/15 text-primary border border-primary/25 shrink-0 text-xs font-bold">
                      {f.step}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{f.label}</div>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What we cover */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Isi Demo
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight">
                Apa yang ditunjukkan dalam 30 menit
              </h2>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {demoCoverage.map((d) => {
                const Icon = d.icon;
                return (
                  <article key={d.label} className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="grid place-items-center h-10 w-10 rounded-xl bg-primary/15 text-primary border border-primary/25">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] uppercase tracking-widest text-primary font-medium">{d.label}</span>
                    </div>
                    <ul className="space-y-2">
                      {d.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-foreground/85">
                          <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <p className="mt-10 text-center text-sm text-muted-foreground">
              Demo menggunakan data merchant fiktif yang mewakili operasional distribusi nyata.
              Tidak ada integrasi atau data bisnis Anda yang dibutuhkan sebelum demo.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
