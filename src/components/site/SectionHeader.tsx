export function SectionHeader({
  eyebrow, title, description, align = "left",
}: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-primary ${align === "center" ? "justify-self-center" : ""}`}>
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">{title}</h2>
      {description && <p className="mt-4 text-muted-foreground leading-relaxed">{description}</p>}
    </div>
  );
}
