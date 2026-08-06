import { Link } from "@tanstack/react-router";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/50">
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <img src="/logo.png" alt="Hontal" className="h-8 w-8 rounded-lg object-contain" />
          <span className="text-foreground">
            Hontal
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-1 text-sm text-muted-foreground">
          <NavLink to="/">Beranda</NavLink>
          <NavLink to="/#features">Fitur</NavLink>
          <NavLink to="/#industries">Industri</NavLink>
          <NavLink to="/#pricing">Harga</NavLink>
          <NavLink to="/demo">Demo</NavLink>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://app.hontal.id/login"
            className="hidden sm:inline text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Masuk
          </a>
          <Link
            to="/demo"
            className="text-sm px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground font-medium shadow-glow hover:opacity-90 transition"
          >
            Jadwalkan Demo
          </Link>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <a
      href={to}
      className="px-3 py-2 rounded-md hover:text-foreground transition-colors"
    >
      {children}
    </a>
  );
}
