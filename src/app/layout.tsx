import type { Metadata } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://frameless-industries.vercel.app"),
  title: "Frameless Industries | Sablon Manual Premium Bandung",
  description: "Jasa sablon manual kualitas artisan di Bandung. Spesialis plastisol, rubber, dan discharge dengan detail presisi untuk brand clothing Anda.",
  keywords: ["sablon manual bandung", "konveksi kaos bandung", "sablon kaos premium", "frameless industries", "sablon plastisol bandung"],
  authors: [{ name: "Frameless Industries" }],
  openGraph: {
    title: "Frameless Industries | Sablon Manual Premium Bandung",
    description: "Menerjemahkan visi brand Anda menjadi karya seni di atas kain. Sablon manual dengan dedikasi tinggi.",
    url: "https://framelessindustries.com",
    siteName: "Frameless Industries",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frameless Industries Workshop",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frameless Industries | Sablon Manual Premium Bandung",
    description: "Sablon manual kualitas artisan untuk brand clothing masa kini.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${archivo.variable} ${spaceMono.variable} antialiased bg-[#0a0a0a] text-[#fafafa]`}
      >
        {children}
      </body>
    </html>
  );
}
