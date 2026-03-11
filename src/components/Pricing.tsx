"use client";

import { motion } from "motion/react";

const pricingData = [
  {
    service: "Plastisol Standard",
    desc: "Tinta standar industri, warna solid & awet",
    price: "35.000",
    unit: "/ kaos",
  },
  {
    service: "Rubber Premium",
    desc: "PU Ink, hasil lembut dan sangat elastis",
    price: "45.000",
    unit: "/ kaos",
  },
  {
    service: "Discharge (Cabut Warna)",
    desc: "Menyatu dengan kain, hasil super soft",
    price: "55.000",
    unit: "/ kaos",
  },
  {
    service: "High Density / Puff",
    desc: "Efek timbul 3D yang artistik",
    price: "65.000",
    unit: "/ kaos",
  },
  {
    service: "Glow in the Dark",
    desc: "Efek menyala di kegelapan",
    price: "75.000",
    unit: "/ kaos",
  },
  {
    service: "Full Package (Kaos + Sablon)",
    desc: "Cotton Combed 24s/30s premium",
    price: "CALL",
    unit: "konsultasi",
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="py-24 sm:py-32 bg-[var(--bg-secondary)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="font-mono text-xs text-[var(--text-secondary)] tracking-[0.2em] mb-4 uppercase">
            Investasi Kualitas
          </p>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl tracking-tight">
            TRANSPARANSI HARGA
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="border-b border-[var(--border-strong)]">
                <th className="text-left py-6 px-6 font-mono text-xs text-[var(--text-secondary)] tracking-wider uppercase">
                  Layanan
                </th>
                <th className="text-left py-6 px-6 font-mono text-xs text-[var(--text-secondary)] tracking-wider uppercase">
                  Spesifikasi
                </th>
                <th className="text-right py-6 px-6 font-mono text-xs text-[var(--text-secondary)] tracking-wider uppercase">
                  Estimasi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-color)]">
              {pricingData.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-[var(--text-primary)]/5 transition-colors group"
                >
                  <td className="py-8 px-6">
                    <p className="font-heading font-bold text-xl group-hover:translate-x-2 transition-transform duration-300">
                      {item.service}
                    </p>
                  </td>
                  <td className="py-8 px-6">
                    <p className="font-mono text-sm text-[var(--text-muted)]">
                      {item.desc}
                    </p>
                  </td>
                  <td className="py-8 px-6 text-right">
                    <p className="font-heading font-bold text-2xl">
                      {item.price !== "CALL" && <span className="text-sm font-mono mr-1">Rp</span>}
                      {item.price}
                    </p>
                    <p className="font-mono text-xs text-[var(--text-muted)] mt-1">
                      {item.unit}
                    </p>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 border border-[var(--border-strong)] bg-[var(--bg-primary)]">
          <p className="font-mono text-xs text-[var(--text-muted)] max-w-md text-center sm:text-left">
            * Harga di atas adalah estimasi untuk minimal order 24 pcs. Harga final bergantung pada jumlah warna, ukuran desain, dan kuantitas.
          </p>
          <a
            href="https://wa.me/6281234567890"
            className="font-mono text-sm font-bold text-[var(--text-primary)] underline underline-offset-8 hover:text-[var(--text-secondary)] transition-colors"
          >
            MINTA PENAWARAN KHUSUS
          </a>
        </div>
      </div>
    </section>
  );
}
