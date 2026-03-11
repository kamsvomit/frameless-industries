"use client";

import { MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function CTA() {
  return (
    <section className="py-24 sm:py-40 bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter leading-none mb-8">
            WAKTUNYA BRAND ANDA<br />NAIK KELAS.
          </h2>
          <p className="font-mono text-base sm:text-lg text-[var(--text-muted)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Jangan biarkan desain hebat Anda hancur karena kualitas sablon yang buruk. Konsultasikan proyek Anda dengan tim artisan kami sekarang.
          </p>
          
          <a
            href="https://wa.me/6281234567890"
            className="inline-flex items-center justify-center gap-4 px-12 py-6 bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-base font-bold tracking-widest hover:bg-[var(--text-secondary)] transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            <MessageSquare className="w-6 h-6" />
            HUBUNGI VIA WHATSAPP
          </a>
          
          <p className="mt-8 font-mono text-xs text-[var(--text-secondary)] tracking-widest uppercase">
            Respon cepat • Konsultasi Desain Gratis • Sampel Tersedia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
