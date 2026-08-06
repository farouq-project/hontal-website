import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Features } from "@/components/site/Solutions";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Operasi.id" },
      { name: "description", content: "Custom Operational Systems dan Business Activation untuk mendorong operasional dan pertumbuhan bisnis." },
      { property: "og:title", content: "Services — Operasi.id" },
      { property: "og:description", content: "Custom Operational Systems · Business Activation" },
    ],
  }),
  component: () => (
    <PageShell
      eyebrow="Our Services"
      title="Dua layanan untuk mendorong operasional & pertumbuhan"
      description="Setiap layanan dirancang mulai dari pemahaman workflow — teknologi adalah implementasinya."
    >
      <Features />
    </PageShell>
  ),
});
