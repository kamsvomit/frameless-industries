"use client";

import { motion } from "motion/react";

const products = [
  {
    category: "PLASTISOL",
    title: "Heavyweight Series",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80",
  },
  {
    category: "DISCHARGE",
    title: "Vintage Soft-Feel",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80",
  },
  {
    category: "RUBBER",
    title: "Elastic Premium",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80",
  },
  {
    category: "GLOW IN DARK",
    title: "Night Vision Print",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
  },
  {
    category: "HOODIE",
    title: "Streetwear Master",
    image: "https://images.unsplash.com/photo-1551028919-ac76c9085b67?w=800&q=80",
  },
  {
    category: "LIMITED",
    title: "Artisan Collection",
    image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80",
  },
];

export default function Gallery() {
  return (
    <section id="produk" className="py-24 sm:py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="font-mono text-xs text-[var(--text-secondary)] tracking-[0.2em] mb-3 uppercase">
              Katalog Terpilih
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl tracking-tight">
              HASIL PRESISI
            </h2>
          </div>
          <p className="font-mono text-sm text-[var(--text-muted)] max-w-md">
            Setiap cetakan melewati kontrol kualitas ketat untuk memastikan detail tertajam dan ketahanan warna maksimal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square bg-[var(--bg-tertiary)] overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-mono text-xs text-[var(--text-secondary)] mb-2 tracking-widest">
                  {product.category}
                </p>
                <h3 className="font-heading font-bold text-2xl">
                  {product.title}
                </h3>
                <div className="mt-4 h-0.5 w-0 group-hover:w-12 bg-[var(--text-primary)] transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
