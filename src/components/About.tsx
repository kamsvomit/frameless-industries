"use client";

import { motion } from "motion/react";

export default function About() {
  return (
    <section id="cerita" className="py-24 sm:py-32 bg-[var(--bg-primary)] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-[var(--bg-tertiary)] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Proses Sablon Manual"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 border-2 border-[var(--text-primary)] flex items-center justify-center bg-[var(--bg-primary)] hidden sm:flex">
              <span className="font-mono text-xs text-center font-bold">
                ESTABLISHED<br />2018
              </span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <p className="font-mono text-xs text-[var(--text-secondary)] tracking-[0.2em] mb-4 uppercase">
                Filosofi Kami
              </p>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl tracking-tight leading-tight mb-6">
                DEDIKASI TANGAN,<br />KUALITAS ABADI.
              </h2>
              <p className="font-mono text-sm text-[var(--text-muted)] leading-relaxed">
                Di tengah gempuran produksi massal mesin, Frameless Industries tetap setia pada teknik sablon manual. Kami percaya bahwa setiap gesekan rakel memiliki jiwa yang tidak bisa digantikan oleh algoritma manapun.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="border-l-2 border-[var(--border-strong)] pl-6 hover:border-[var(--text-primary)] transition-colors">
                <h4 className="font-heading font-bold text-xl mb-2">Presisi Tanpa Kompromi</h4>
                <p className="font-mono text-sm text-[var(--text-muted)]">
                  Dari separasi warna hingga pemilihan mesh screen, setiap detail dihitung dengan teliti untuk hasil yang tajam dan tahan lama.
                </p>
              </div>

              <div className="border-l-2 border-[var(--border-strong)] pl-6 hover:border-[var(--text-primary)] transition-colors">
                <h4 className="font-heading font-bold text-xl mb-2">Material Pilihan</h4>
                <p className="font-mono text-sm text-[var(--text-muted)]">
                  Kami hanya menggunakan tinta premium (Matsui, Wilflex) dan kain berkualitas tinggi untuk memastikan kenyamanan maksimal bagi pemakainya.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-px bg-[var(--text-primary)]"></div>
                <p className="font-mono text-xs text-[var(--text-secondary)] tracking-widest">
                  BANDUNG ARTISAN SCREENPRINTING
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
