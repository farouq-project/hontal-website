import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const NAV_ITEMS: [string, string][] = [
  ["/", "Beranda"],
  ["/#features", "Fitur"],
  ["/#industries", "Industri"],
  ["/#pricing", "Harga"],
  ["/demo", "Demo"],
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <img src="/logo.png" alt="Hontal" className="h-8 w-8 rounded-lg object-contain" />
          <span className="text-foreground">Hontal</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground">
          {NAV_ITEMS.map(([to, label]) => (
            <a key={to} href={to} className="px-3 py-2 rounded-md hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://app.hontal.id/login"
            className="hidden lg:inline text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Masuk
          </a>
          <Link
            to="/demo"
            className="hidden sm:inline text-sm px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition"
          >
            Jadwalkan Demo
          </Link>
          {/* Hamburger — mobile only */}
          <button
            className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Tutup menu" : "Buka menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map(([to, label]) => (
              <a
                key={to}
                href={to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm hover:text-foreground hover:bg-surface/60 transition-colors"
              >
                {label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-border/50 flex flex-col gap-2">
              <a
                href="https://app.hontal.id/login"
                className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Masuk
              </a>
              <Link
                to="/demo"
                onClick={() => setOpen(false)}
                className="text-sm px-4 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium text-center hover:opacity-90 transition"
              >
                Jadwalkan Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
