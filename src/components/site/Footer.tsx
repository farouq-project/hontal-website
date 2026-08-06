import { Truck } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-primary">
              <Truck className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span>Hontal</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Platform operasional pengiriman untuk bisnis distribusi Indonesia.
            Kelola order, driver, pelanggan, dan pertumbuhan dalam satu dashboard.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Digunakan dalam operasional nyata.
          </p>
        </div>

        <FooterCol
          title="Produk"
          items={[
            ["/#features", "Fitur"],
            ["/#pricing", "Harga"],
            ["/demo", "Book Demo"],
            ["https://app.hontal.id", "Masuk"],
          ]}
        />
        <FooterCol
          title="Informasi"
          items={[
            ["/#industries", "Industri"],
            ["/#case-study", "Studi Kasus"],
            ["/#faq", "FAQ"],
            ["/demo", "Jadwalkan Demo"],
          ]}
        />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Hontal — Platform operasional pengiriman untuk bisnis distribusi.</span>
          <span>Made in Indonesia 🇮🇩</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map(([to, label]) => (
          <li key={to}>
            {to.startsWith("http") ? (
              <a href={to} className="hover:text-primary transition-colors">{label}</a>
            ) : (
              <a href={to} className="hover:text-primary transition-colors">{label}</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
