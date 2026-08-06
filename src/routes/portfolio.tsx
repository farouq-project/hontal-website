import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Placeholder } from "@/components/site/Placeholder";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Operasi.id" },
      { name: "description", content: "Project representatif kami dikelompokkan berdasarkan kategori bisnis: retail & distribusi, riset, audit, agribisnis, dan corporate websites." },
      { property: "og:title", content: "Portfolio — Operasi.id" },
      { property: "og:description", content: "Project representatif berdasarkan kategori bisnis." },
    ],
  }),
  component: Page,
});

const categories = [
  {
    name: "Retail & Distribution",
    projects: [
      { n: "Kencana Lima", d: "ERP + inventory + delivery module." },
      { n: "Origimilk", d: "Delivery management & driver tracking." },
    ],
  },
  {
    name: "Research",
    projects: [{ n: "UNPAD Agriculture", d: "Research data platform & dashboard." }],
  },
  {
    name: "Audit",
    projects: [{ n: "Southfield Consultant", d: "Audit workflow & approval flow." }],
  },
  {
    name: "Agribusiness",
    projects: [
      { n: "Subzero Meat Supply", d: "Receivable management & rekonsiliasi." },
      { n: "Agro Mulia Lestari", d: "Corporate presence & positioning." },
    ],
  },
  {
    name: "Corporate Websites",
    projects: [
      { n: "Harmoni Kreasi Sukses", d: "Corporate website." },
      { n: "PT GAS", d: "Corporate website." },
    ],
  },
];

function Page() {
  return (
    <PageShell
      eyebrow="Portfolio"
      title="Project representatif — dikelompokkan berdasarkan kategori bisnis"
      description="Kami tidak menampilkan semua project. Berikut yang paling mewakili pendekatan kami di setiap sektor."
    >
      <section className="mx-auto max-w-7xl px-6 py-16 space-y-14">
        {categories.map((c) => (
          <div key={c.name}>
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">{c.name}</h2>
              <span className="text-xs text-muted-foreground">{c.projects.length} project</span>
            </div>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {c.projects.map((p) => (
                <article key={p.n} className="rounded-2xl border border-border bg-gradient-card p-5 shadow-card">
                  <Placeholder kind="screenshot" label={`${p.n} — Screenshot`} ratio="16/10" />
                  <h3 className="mt-4 text-base font-semibold">{p.n}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
