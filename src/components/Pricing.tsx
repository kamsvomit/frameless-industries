"use client";

import { motion } from "motion/react";

const pricingData = [
  {
    service: "Sablon RGB",
    sub: "Digital Printing",
    desc: "Cocok untuk desain full color, gradien, dan detail kompleks",
    price: "65.000",
  },
  {
    service: "Sablon Rubber",
    sub: "PU Ink",
    desc: "Tinta premium, elastis, nyaman di kulit",
    price: "45.000",
  },
  {
    service: "Sablon Plastisol",
    sub: "Standard",
    desc: "Tinta standar industri, warna solid maksimal",
    price: "35.000",
  },
  {
    service: "Sablon Glow in Dark",
    sub: "Special Effect",
    desc: "Menyala di gelap, efek futuristik",
    price: "75.000",
  },
  {
    service: "Packing",
    sub: "Finishing",
    desc: "Label custom, polybag, packing rapih",
    price: "5.000",
  },
  {
    service: "Jahitan Tambahan",
    sub: "Custom",
    desc: "Sablon pada hoodie, jaket, tas, dll",
    price: "CALL",
  },
];

export default function Pricing() {
  return (
    <section id="harga" className="bg-black border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="lg:col-span-4 p-12 lg:p-24 border-b lg:border-b-0 lg:border-r border-white/10">
          <p className="font-mono text-xs text-white/40 tracking-[0.4em] mb-8 uppercase">
            INVESTASI
          </p>
          <h2 className="font-sans font-black text-5xl sm:text-7xl tracking-tighter leading-[0.9] text-white uppercase mb-8">
            TRANSPARAN<br />
            <span className="text-stroke">PRICING</span>
          </h2>
          <p className="font-mono text-sm text-white/60 leading-relaxed max-w-xs">
            Kami memberikan harga yang jujur sesuai dengan kualitas bahan dan kerumitan pengerjaan.
          </p>
        </div>
        
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1">
            {pricingData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group grid grid-cols-1 md:grid-cols-12 border-b border-white/10 hover:bg-white/5 transition-colors"
              >
                <div className="md:col-span-6 p-8 lg:p-12">
                  <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2">0{index + 1} / {item.sub}</p>
                  <h3 className="font-sans font-black text-2xl text-white uppercase tracking-tighter">{item.service}</h3>
                </div>
                <div className="md:col-span-4 p-8 lg:p-12 flex items-center border-t md:border-t-0 md:border-l border-white/10">
                  <p className="font-mono text-xs text-white/60 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="md:col-span-2 p-8 lg:p-12 flex flex-col justify-center items-end border-t md:border-t-0 md:border-l border-white/10">
                  <p className="font-sans font-black text-3xl text-white">
                    {item.price}
                  </p>
                  <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest mt-1">
                    {item.price === "CALL" ? "KONSULTASI" : "/ KAOS"}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-12 lg:p-24 border-b border-white/10">
        <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase text-center">
          *Harga dapat berubah sewaktu-waktu. Hubungi kami untuk mendapat informasi terkini.
        </p>
      </div>
    </section>
  );
}
