"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function About() {
  return (
    <section id="cerita" className="bg-black border-b border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 lg:p-24 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-xs text-white/40 tracking-[0.4em] mb-8 uppercase">
              FILOSOFI KAMI
            </p>
            <h2 className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter leading-[0.9] text-white uppercase mb-12">
              ARTISAN<br />
              <span className="text-stroke">CRAFTSMANSHIP</span>
            </h2>
            <div className="max-w-md space-y-6">
              <p className="font-mono text-sm text-white/60 leading-relaxed">
                Kami percaya bahwa kualitas tidak bisa diburu-buru. Setiap cetakan adalah hasil dari ketelitian, pengalaman, dan dedikasi terhadap seni sablon.
              </p>
              <p className="font-mono text-sm text-white/60 leading-relaxed">
                Menggunakan bahan-bahan terbaik dan teknik yang telah teruji, kami memastikan setiap produk yang keluar dari workshop kami memiliki standar tertinggi.
              </p>
            </div>
            
            <div className="mt-16 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="font-sans font-black text-4xl text-white">10+</span>
                <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">Tahun Pengalaman</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="font-sans font-black text-4xl text-white">50k+</span>
                <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase">Produk Terkirim</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="relative aspect-square lg:aspect-auto min-h-[500px] grayscale hover:grayscale-0 transition-all duration-1000">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
            alt="Workshop"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Floating Label */}
          <div className="absolute bottom-12 right-12 bg-white text-black p-6 font-mono text-[10px] font-bold tracking-widest uppercase">
            EST. 2014 / BANDUNG
          </div>
        </div>
      </div>
    </section>
  );
}
