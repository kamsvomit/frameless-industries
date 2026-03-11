"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden grid-pattern pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/50 via-transparent to-[var(--bg-primary)]"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs sm:text-sm text-[var(--text-secondary)] tracking-[0.3em] mb-4 sm:mb-6"
        >
          BANDUNG • INDONESIA
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading font-black text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.85] mb-6 sm:mb-8"
        >
          SABLON<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[var(--text-secondary)] to-[var(--text-secondary)]">
            ARTISAN
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-mono text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto mb-8 sm:mb-12 leading-relaxed"
        >
          Bukan sekadar cetak, tapi dedikasi. Kami menghidupkan visi brand Anda melalui teknik sablon manual yang presisi dan material premium pilihan.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#produk"
            className="inline-flex items-center justify-center px-10 py-5 bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-sm font-bold tracking-wide hover:bg-[var(--text-secondary)] transition-all duration-300 hover:scale-105"
          >
            LIHAT KARYA
          </a>
          <a
            href="https://wa.me/6281234567890"
            className="inline-flex items-center justify-center px-10 py-5 border border-[var(--border-strong)] text-[var(--text-primary)] font-mono text-sm font-bold tracking-wide hover:border-[var(--text-primary)] transition-all duration-300 hover:bg-[var(--text-primary)]/5"
          >
            KONSULTASI GRATIS
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-[var(--text-secondary)]" />
      </motion.div>
    </section>
  );
}
