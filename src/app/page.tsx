import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Gallery from "@/src/components/Gallery";
import About from "@/src/components/About";
import Pricing from "@/src/components/Pricing";
import CTA from "@/src/components/CTA";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
