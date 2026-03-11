"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "PRODUK", href: "#produk" },
    { name: "CERITA", href: "#cerita" },
    { name: "HARGA", href: "#harga" },
    { name: "KONTAK", href: "#kontak" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b",
        scrolled 
          ? "bg-black/90 backdrop-blur-xl border-white/10 py-4" 
          : "bg-transparent border-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="w-10 h-10 border border-white flex items-center justify-center bg-white text-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
              <span className="font-mono font-bold text-lg">F</span>
            </div>
            <span className="font-sans font-black text-xl tracking-tighter text-white">
              FRAMELESS
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-[10px] tracking-[0.3em] text-white/40 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://wa.me/6281234567890"
              className="px-6 py-2 border border-white/20 font-mono text-[10px] tracking-widest text-white hover:bg-white hover:text-black transition-all"
            >
              ORDER NOW
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-white"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-12 space-y-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block font-sans font-black text-4xl tracking-tighter text-white/40 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/6281234567890"
                className="block w-full py-6 bg-white text-black text-center font-mono text-xs font-bold tracking-widest"
              >
                ORDER NOW
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
