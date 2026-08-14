import { Layers } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold">
            <span className="grid place-items-center h-8 w-8 rounded-lg bg-gradient-primary">
              <Layers className="h-4 w-4 text-primary-foreground" strokeWidth={2.5} />
            </span>
            <span>Operasi<span className="text-primary">.id</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
            Produk, sistem custom, dan aktivasi bisnis untuk operasional yang lahir
            dari lapangan — bukan teori.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            Digunakan dalam operasional nyata.
          </p>
        </div>

        <FooterCol
          title="Perusahaan"
          items={[
            ["/products", "Products"],
            ["/services", "Services"],
            ["/portfolio", "Portfolio"],
            ["/about", "About"],
          ]}
        />
        <FooterCol
          title="Hontal Delivery"
          items={[
            ["/products/hontal-delivery", "Fitur Hontal"],
            ["/demo", "Book Demo"],
            ["https://app.hontal.id", "Masuk ke Hontal"],
            ["/contact", "Contact"],
          ]}
        />
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Operasi.id — Digital transformation untuk operasional bisnis.</span>
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
            <a href={to} className="hover:text-primary transition-colors">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
