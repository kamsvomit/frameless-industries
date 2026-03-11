"use client";

import { MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export default function CTA() {
  return (
    <section id="kontak" className="bg-white text-black py-24 lg:py-48 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-sans font-black text-6xl sm:text-8xl lg:text-[10rem] tracking-tighter leading-[0.85] uppercase"
            >
              SIAP UNTUK<br />
              BERKARYA?
            </motion.h2>
          </div>
          
          <div className="lg:col-span-4 lg:text-right">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="https://wa.me/6281234567890"
                className="inline-flex items-center justify-center w-48 h-48 rounded-full bg-black text-white font-mono text-xs font-bold tracking-widest uppercase hover:scale-110 transition-transform duration-500"
              >
                HUBUNGI KAMI
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-sans font-black text-[30vw] text-black/5 whitespace-nowrap pointer-events-none select-none">
        GET IN TOUCH
      </div>
    </section>
  );
}
