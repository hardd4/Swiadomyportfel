import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PixelEvent from "@/components/PixelPageView";
import Problems from "@/components/Problems";
import ProductSection from "@/components/ProductSection";
import LossCalculator from "@/components/LossCalculator";
import HowItWorks from "@/components/HowItWorks";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PixelEvent event="ViewContent" params={{ content_name: "ŚwiadomyPortfel", content_type: "product", currency: "PLN", value: 64.99 }} />
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <ProductSection />
        <LossCalculator />
        <HowItWorks />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
