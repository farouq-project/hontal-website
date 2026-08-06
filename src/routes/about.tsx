import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Founder } from "@/components/site/Founder";
import { WhyUs } from "@/components/site/WhyUs";
import { HowWeHelp } from "@/components/site/HowWeHelp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Operasi.id" },
      { name: "description", content: "Perusahaan yang membantu bisnis beroperasi lebih baik dan tumbuh lebih cepat. Produk, sistem custom, dan aktivasi bisnis." },
      { property: "og:title", content: "About — Operasi.id" },
      { property: "og:description", content: "Perusahaan yang lahir dari operasional lapangan." },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="About"
      title="Kami adalah perusahaan digital transformation, bukan software house"
      description="Kami tidak menjual software. Kami membangun solusi digital yang menyelesaikan masalah bisnis nyata."
    >
      <HowWeHelp />
      <WhyUs />
      <Founder />
    </PageShell>
  ),
});
