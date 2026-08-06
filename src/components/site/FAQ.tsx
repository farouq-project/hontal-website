import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "./SectionHeader";

const faqs = [
  {
    q: "Apakah perlu install aplikasi?",
    a: "Tidak. Hontal berbasis web, bisa diakses dari browser di laptop atau smartphone. Tidak ada download, tidak ada instalasi. Driver menggunakan link yang dikirim otomatis.",
  },
  {
    q: "Apakah bisa dipakai dengan hanya 1 driver?",
    a: "Bisa. Paket Starter sudah mencakup semua fitur operasional untuk bisnis kecil. Tidak ada minimum jumlah driver. Hontal tumbuh bersama bisnis Anda.",
  },
  {
    q: "Berapa lama proses setup?",
    a: "Dalam 1 hari Anda sudah bisa beroperasi. Tim kami mendampingi proses onboarding: mulai dari membuat akun, input data pelanggan, hingga order pertama dijalankan dari dispatch board.",
  },
  {
    q: "Apakah data bisnis kami aman?",
    a: "Ya. Data bisnis Anda disimpan secara terenkripsi dan tidak pernah dibagikan ke pihak ketiga. Setiap merchant memiliki database yang terisolasi dari merchant lain.",
  },
  {
    q: "Bagaimana jika bisnis kami sudah menggunakan ERP atau sistem lain?",
    a: "Hontal bisa berjalan berdampingan dengan sistem yang sudah ada. Dalam banyak kasus, Hontal melengkapi ERP dengan fokus pada operasional pengiriman dan Customer Intelligence yang biasanya tidak tersedia di ERP generik.",
  },
  {
    q: "Apakah ada masa trial?",
    a: "Ya. Kami menyediakan trial 14 hari gratis dengan akses fitur penuh. Tidak perlu kartu kredit. Tidak ada kewajiban lanjut. Demo dan onboarding didampingi tim kami.",
  },
  {
    q: "Bagaimana cara memulai?",
    a: "Klik tombol Jadwalkan Demo di halaman ini. Tim kami akan menghubungi Anda via WhatsApp untuk sesi demo 30 menit, setelah itu trial bisa langsung dimulai.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 border-t border-border/60">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeader
          align="center"
          eyebrow="FAQ"
          title="Pertanyaan yang sering ditanyakan"
          description="Tidak menemukan jawaban yang Anda cari? Hubungi kami via WhatsApp."
        />

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-xl border border-border bg-gradient-card px-6 shadow-card data-[state=open]:border-primary/40 transition"
            >
              <AccordionTrigger className="text-sm font-semibold text-foreground text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
