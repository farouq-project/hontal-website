import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, Mail, MailCheck, Target, LineChart, Sparkles, Users, Activity, DatabaseZap } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Placeholder } from "@/components/site/Placeholder";

export const Route = createFileRoute("/services/business-activation")({
  head: () => ({
    meta: [
      { title: "Business Activation — Operasi.id" },
      { name: "description", content: "Managed service untuk mengubah website menjadi mesin peluang bisnis: review, optimasi, data scraping, email blasting, dan lead pipeline." },
      { property: "og:title", content: "Business Activation" },
      { property: "og:description", content: "Website review, data scraping, email blasting, dan lead pipeline sebagai managed service." },
    ],
  }),
  component: Page,
});

const services = [
  { icon: Search, name: "Website Review" },
  { icon: Sparkles, name: "Website Optimization" },
  { icon: DatabaseZap, name: "Data Scraping" },
  { icon: Target, name: "Target Company Identification" },
  { icon: MailCheck, name: "Email Validation" },
  { icon: Mail, name: "Email Blasting / Outreach" },
  { icon: Activity, name: "Campaign Tracking" },
  { icon: LineChart, name: "Traffic Monitoring" },
];

function Page() {
  return (
    <PageShell
      eyebrow="Service · Managed"
      title="Business Activation"
      description="Mengubah website Anda dari brosur pasif menjadi mesin peluang bisnis yang terukur."
    >
      <section className="mx-auto max-w-7xl px-6 py-16 space-y-12">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-gradient-card p-8">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Who is it for?</div>
            <p className="mt-3 text-foreground/85 leading-relaxed">
              Bisnis B2B yang punya website tapi belum menghasilkan inquiry atau peluang
              yang bisa dilacak ke pipeline sales.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-card p-8">
            <div className="text-[10px] uppercase tracking-wider text-primary">Expected Outcomes</div>
            <ul className="mt-3 space-y-2 text-sm text-foreground/85 leading-relaxed">
              <li>· Website teroptimasi untuk konversi</li>
              <li>· Daftar target perusahaan hasil data scraping yang tervalidasi</li>
              <li>· Email blasting terjadwal & terlacak, bounce rate terjaga rendah</li>
              <li>· CRM dashboard untuk pipeline peluang</li>
            </ul>
          </div>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-4">What's Included</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s) => (
              <div key={s.name} className="rounded-2xl border border-border bg-gradient-card p-5">
                <div className="grid place-items-center h-10 w-10 rounded-xl bg-success/15 text-success border border-success/25">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-sm font-semibold">{s.name}</div>
              </div>
            ))}
          </div>
        </div>

        <Placeholder kind="screenshot" label="Business Activation — CRM Dashboard" ratio="16/9" />

        <div className="rounded-2xl border border-dashed border-border bg-surface/40 p-6 text-center">
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Roadmap</div>
          <div className="mt-1 text-base font-semibold">Business Activation Platform — coming soon</div>
        </div>

        <div className="text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:opacity-90 transition">
            Book Discussion <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
