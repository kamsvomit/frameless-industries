"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col relative grid-pattern pt-32 overflow-hidden">
      {/* Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
      
      <div className="flex-1 flex flex-col justify-center px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-baseline gap-4 mb-4"
          >
            <span className="font-mono text-xs text-white/40 tracking-widest">01</span>
            <p className="font-mono text-xs tracking-[0.5em] text-white/60 uppercase">
              BANDUNG • INDONESIA
            </p>
          </motion.div>
          
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-black text-[15vw] lg:text-[12vw] tracking-tighter leading-[0.85] text-white uppercase"
            >
              SABLON<br />
              <span className="text-stroke">INDUSTRIES</span>
            </motion.h1>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="md:col-span-4"
            >
              <p className="font-mono text-xs sm:text-sm text-white/50 leading-relaxed max-w-sm">
                Setiap helai kain adalah kanvas. Setiap desain adalah cerita. Dibuat dengan tangan, diselesaikan dengan hati.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="md:col-span-8 flex flex-wrap gap-4 md:justify-end"
            >
              <a
                href="#produk"
                className="group relative inline-flex items-center justify-center px-12 py-6 bg-white text-black font-mono text-xs font-bold tracking-[0.2em] hover:bg-white/90 transition-all"
              >
                LIHAT KATALOG
                <div className="absolute -bottom-1 -right-1 w-full h-full border border-white/20 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/6281234567890"
                className="inline-flex items-center justify-center px-12 py-6 border border-white/20 text-white font-mono text-xs font-bold tracking-[0.2em] hover:bg-white/5 transition-all"
              >
                LAYANAN KAMI
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute right-12 top-0 w-[1px] h-full bg-white/5 hidden lg:block" />
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-12 flex items-center gap-4"
      >
        <div className="w-px h-12 bg-white/20" />
        <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase vertical-text">SCROLL</span>
      </motion.div>
    </section>
  );
}
