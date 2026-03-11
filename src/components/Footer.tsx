import { Instagram, Twitter, Youtube, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-white flex items-center justify-center bg-white text-black">
                <span className="font-mono font-bold text-lg">F</span>
              </div>
              <span className="font-sans font-black text-xl tracking-tighter text-white">
                FRAMELESS
              </span>
            </div>
            <p className="font-mono text-xs text-white/40 leading-relaxed max-w-xs">
              Membangun identitas melalui seni sablon berkualitas tinggi. Berbasis di Bandung, melayani seluruh Indonesia.
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-8">NAVIGASI</p>
            <ul className="space-y-4">
              {["PRODUK", "CERITA", "HARGA", "KONTAK"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="font-mono text-xs text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-8">SOSIAL</p>
            <ul className="space-y-4">
              {["INSTAGRAM", "TIKTOK", "FACEBOOK", "WHATSAPP"].map((item) => (
                <li key={item}>
                  <a href="#" className="font-mono text-xs text-white/60 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-8">ALAMAT</p>
            <p className="font-mono text-xs text-white/60 leading-relaxed">
              Jl. Industri No. 123<br />
              Cicendo, Bandung<br />
              Jawa Barat, 40172
            </p>
            <p className="mt-4 font-mono text-xs text-white/60">
              hello@frameless.id
            </p>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] text-white/20 tracking-widest uppercase">
            © 2024 FRAMELESS INDUSTRIES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-mono text-[10px] text-white/20 hover:text-white transition-colors uppercase">Privacy Policy</a>
            <a href="#" className="font-mono text-[10px] text-white/20 hover:text-white transition-colors uppercase">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
