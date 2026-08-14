import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, ClipboardCheck, Database, FlaskConical, Globe, LineChart, Users, Wallet, Workflow } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Placeholder } from "@/components/site/Placeholder";

export const Route = createFileRoute("/services/custom-operational-systems")({
  head: () => ({
    meta: [
      { title: "Custom Operational Systems — Operasi.id" },
      { name: "description", content: "ERP, inventory, CRM, audit, riset, dan workflow automation yang dirancang mengikuti proses bisnis Anda." },
      { property: "og:title", content: "Custom Operational Systems" },
      { property: "og:description", content: "Sistem operasional custom sesuai workflow bisnis Anda." },
    ],
  }),
  component: Page,
});

const systems = [
  { icon: Boxes, name: "ERP & Inventory" },
  { icon: Users, name: "CRM" },
  { icon: ClipboardCheck, name: "Audit System" },
  { icon: FlaskConical, name: "Research Platform" },
  { icon: Wallet, name: "Receivable Management" },
  { icon: Workflow, name: "Workflow Automation" },
  { icon: LineChart, name: "Business Dashboard" },
  { icon: Database, name: "Data Consolidation" },
  { icon: Globe, name: "Custom Website" },
];

function Page() {
  return (
    <PageShell
      eyebrow="Service · Project Based"
      title="Custom Operational Systems"
      description="Sistem operasional yang dibangun mengikuti alur bisnis Anda — bukan sebaliknya. Bukan template software."
    >
      <section className="mx-auto max-w-7xl px-6 py-16 space-y-12">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-gradient-card p-8">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Who is it for?</div>
            <p className="mt-3 text-foreground/85 leading-relaxed">
              Distributor, supplier, agribisnis, konsultan, dan lembaga riset yang membutuhkan
              sistem sesuai workflow spesifik mereka — termasuk website perusahaan yang butuh
              lebih dari sekadar template.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-card p-8">
            <div className="text-[10px] uppercase tracking-wider text-primary">Expected Outcomes</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/85 leading-relaxed">
              <li>· Workflow terdigitalisasi end-to-end</li>
              <li>· Dashboard visibilitas real-time</li>
              <li>· Tim bekerja di satu sistem terpadu</li>
              <li>· Data terkonsolidasi & siap dianalisis</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-4">System Categories</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {systems.map((s) => (
              <div key={s.name} className="rounded-2xl border border-border bg-gradient-card p-5">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-primary/15 text-primary border border-primary/25">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-sm font-semibold">{s.name}</div>
              </div>
            ))}
          </div>
        </div>

        <Placeholder kind="screenshot" label="Custom Dashboard Sample" ratio="16/9" />

        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
            Book Discussion <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
