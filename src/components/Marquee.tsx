"use client";

import { motion } from "motion/react";

export default function Marquee() {
  const items = ["PREMIUM PRINT", "ARTISAN QUALITY", "BANDUNG BASED", "EST. 2014", "HANDMADE", "LIMITED EDITION"];
  
  return (
    <div className="bg-white py-6 overflow-hidden border-y border-black">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            {items.map((item) => (
              <span key={item} className="font-sans font-black text-4xl text-black tracking-tighter uppercase">
                {item}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
