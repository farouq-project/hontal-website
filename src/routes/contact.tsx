import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, MapPin, CalendarCheck } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Operasi.id" },
      { name: "description", content: "Mari diskusikan operasional bisnis Anda — dan bagaimana produk & sistem kami bisa membantu." },
      { property: "og:title", content: "Contact — Operasi.id" },
      { property: "og:description", content: "Book a discussion tentang operasional & pertumbuhan bisnis Anda." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Mari bicara operasional bisnis Anda"
      description="Kami mulai dari diskusi — bukan proposal. Ceritakan konteks bisnis Anda, kami dengarkan dulu."
      showCTA={false}
    >
      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-border bg-gradient-card p-8 space-y-6">
          <div className="flex items-start gap-4">
            <div className="grid place-items-center h-11 w-11 rounded-xl bg-primary/15 text-primary border border-primary/25">
              <CalendarCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">Book a Discussion</div>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                Sesi diskusi 30–45 menit untuk memahami kebutuhan operasional dan pertumbuhan bisnis Anda.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="grid place-items-center h-11 w-11 rounded-xl bg-surface-elevated text-primary border border-border">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">Email</div>
              <a href="mailto:halo@hontal.id" className="mt-1 text-sm text-muted-foreground hover:text-primary">halo@hontal.id</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="grid place-items-center h-11 w-11 rounded-xl bg-surface-elevated text-primary border border-border">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">WhatsApp</div>
              <a
                href="https://wa.me/6285179584244?text=Halo%20Tim%20Hontal!%0A%0ASaya%20ingin%20mengetahui%20lebih%20lanjut%20tentang%20Hontal%20Delivery.%0A%0ANama%20Bisnis%3A%20%0AJenis%20Produk%3A%20%0AKota%2FLokasi%3A%20%0ATarget%20Pasar%3A%20%0A%0ATerima%20kasih!"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-sm text-muted-foreground hover:text-primary"
              >
                +62 851-7958-4244
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="grid place-items-center h-11 w-11 rounded-xl bg-surface-elevated text-primary border border-border">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold">Lokasi</div>
              <div className="mt-1 text-sm text-muted-foreground">Indonesia — melayani seluruh wilayah</div>
            </div>
          </div>
        </div>

        <form className="rounded-3xl border border-border bg-gradient-card p-8 space-y-4">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Nama</label>
            <input className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Nama lengkap" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Perusahaan</label>
            <input className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Nama perusahaan" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
            <input type="email" className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary" placeholder="you@company.com" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Ceritakan konteks bisnis</label>
            <textarea rows={5} className="mt-2 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Industri, ukuran tim, masalah operasional saat ini" />
          </div>
          <button type="button" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
            Kirim Diskusi
          </button>
        </form>
      </section>
    </PageShell>
  );
}
