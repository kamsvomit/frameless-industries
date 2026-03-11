"use client";

import Image from "next/image";
import { motion } from "motion/react";

const products = [
  {
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1551028919-ac76c9085b67?w=800&q=80",
  },
  {
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
  },
];

export default function Gallery() {
  return (
    <section id="produk" className="bg-black border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative aspect-[3/4] overflow-hidden border-r border-b border-white/10 last:border-r-0"
          >
            <Image
              src={product.image}
              alt="Product"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-mono text-[10px] text-white/60 tracking-widest uppercase mb-2">0{index + 1}</p>
                <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tighter">PREMIUM PRINT</h3>
              </div>
            </div>
            
            {/* Corner Accent */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-white/20" />
          </motion.div>
        ))}
      </div>
      
      <div className="py-12 px-6 lg:px-12 flex justify-between items-center border-b border-white/10">
        <p className="font-mono text-[10px] text-white/40 tracking-[0.3em] uppercase">
          VIEW ALL PRODUCTS
        </p>
        <div className="flex gap-2">
          <div className="w-1 h-1 bg-white/40 rounded-full" />
          <div className="w-1 h-1 bg-white/40 rounded-full" />
          <div className="w-1 h-1 bg-white/20 rounded-full" />
        </div>
      </div>
    </section>
  );
}
