import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { CompanyCTA } from "./CompanyCTA";
import { WaButton } from "./WaButton";

export function PageShell({
  eyebrow,
  title,
  description,
  children,
  showCTA = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  showCTA?: boolean;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <section className="relative overflow-hidden bg-hero border-b border-border/60">
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[380px] w-[800px] rounded-full bg-primary/20 blur-[140px]" />
          <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-24">
            {eyebrow && (
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {eyebrow}
              </div>
            )}
            <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl leading-[1.1]">
              {title}
            </h1>
            {description && (
              <p className="mt-5 text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {description}
              </p>
            )}
          </div>
        </section>

        {children}

        {showCTA && <CompanyCTA />}
      </main>
      <Footer />
      <WaButton />
    </div>
  );
}
