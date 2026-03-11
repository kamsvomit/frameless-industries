import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
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
    url: "https://frameless-industries.vercel.app",
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
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
