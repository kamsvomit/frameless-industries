import { Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="kontak" className="bg-[var(--bg-secondary)] py-20 border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-[var(--text-primary)] flex items-center justify-center">
                <span className="font-mono font-bold text-lg">F</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                FRAMELESS
              </span>
            </div>
            <p className="font-mono text-xs text-[var(--text-muted)] leading-relaxed uppercase tracking-wider">
              Workshop sablon manual artisan berbasis di Bandung. Fokus pada kualitas, presisi, dan kepuasan brand.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 border border-[var(--border-color)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-8 tracking-tight">WORKSHOP</h4>
            <ul className="space-y-4 font-mono text-sm text-[var(--text-muted)]">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 shrink-0 text-[var(--text-secondary)]" />
                <span>Jl. Artisan No. 45, Coblong, Kota Bandung, Jawa Barat 40132</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 shrink-0 text-[var(--text-secondary)]" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 shrink-0 text-[var(--text-secondary)]" />
                <span>hello@frameless.id</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-8 tracking-tight">NAVIGASI</h4>
            <ul className="space-y-4 font-mono text-sm text-[var(--text-muted)]">
              <li><a href="#produk" className="hover:text-[var(--text-primary)] transition-colors">Katalog Produk</a></li>
              <li><a href="#cerita" className="hover:text-[var(--text-primary)] transition-colors">Cerita Workshop</a></li>
              <li><a href="#harga" className="hover:text-[var(--text-primary)] transition-colors">Daftar Harga</a></li>
              <li><a href="#" className="hover:text-[var(--text-primary)] transition-colors">Syarat & Ketentuan</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-8 tracking-tight">JAM KERJA</h4>
            <ul className="space-y-4 font-mono text-sm text-[var(--text-muted)]">
              <li className="flex justify-between">
                <span>Senin - Jumat</span>
                <span className="text-[var(--text-primary)]">09:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabtu</span>
                <span className="text-[var(--text-primary)]">10:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Minggu</span>
                <span className="text-[var(--text-secondary)]">Tutup</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-[var(--border-color)] flex flex-col sm:flex-row justify-between items-center gap-6">
          <p className="font-mono text-[10px] text-[var(--text-muted)] tracking-widest uppercase">
            © {currentYear} Frameless Industries. Handcrafted in Bandung.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-mono text-[10px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors tracking-widest uppercase">Privacy Policy</a>
            <a href="#" className="font-mono text-[10px] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors tracking-widest uppercase">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
