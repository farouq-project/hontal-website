import { Handshake, Workflow, PackageCheck, Compass, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { icon: Compass, title: "Real Operational Experience", desc: "Kami pernah menjalankan operasional distribusi, riset, dan audit sendiri." },
  { icon: Workflow, title: "Custom Workflow Design", desc: "Setiap sistem dibangun mengikuti alur bisnis Anda — bukan sebaliknya." },
  { icon: PackageCheck, title: "Products Built from Real Needs", desc: "Hontal Delivery lahir dari kebutuhan lapangan, bukan riset pasar teoretis." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "Sistem yang kami bangun terus berevolusi bersama pertumbuhan bisnis Anda." },
  { icon: Sparkles, title: "Practical Solutions", desc: "Kami memilih solusi paling sederhana yang menyelesaikan masalah — bukan yang paling canggih." },
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Kami bicara operasional, bukan sekadar teknologi"
          description="Alasan bisnis memilih kami bukan tentang stack — tapi tentang cara berpikir."
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {items.map((it) => (
            <article key={it.title} className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card">
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-surface-elevated border border-border text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-sm font-semibold leading-tight">{it.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
