import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import AboutDentist from "@/components/AboutDentist";
import ServicesSection from "@/components/ServicesSection";
import AppointmentSteps from "@/components/AppointmentSteps";
import InsuranceSection from "@/components/InsuranceSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. Faixa de credibilidade */}
        <TrustBar />

        {/* 3. Sobre a dentista */}
        <AboutDentist />

        {/* 4. Tratamentos */}
        <ServicesSection />

        {/* 5. Como funciona o atendimento */}
        <AppointmentSteps />

        {/* 6. Convênios */}
        <InsuranceSection />

        {/* 7. Diferenciais */}
        <DifferentialsSection />

        {/* 8. Depoimentos */}
        <TestimonialsSection />

        {/* 9. Galeria do ambiente */}
        <GallerySection />

        {/* 10. Localização */}
        <LocationSection />

        {/* 11. FAQ */}
        <FAQSection />

        {/* 12. CTA Final */}
        <FinalCTA />
      </main>

      <Footer />

      {/* Botão flutuante WhatsApp — visível somente no mobile */}
      <WhatsAppFloatingButton />
    </>
  );
}
