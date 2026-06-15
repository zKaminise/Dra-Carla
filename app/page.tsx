import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

// Seções abaixo da dobra — carregadas de forma lazy para não bloquear o carregamento inicial
const AboutDentist       = dynamic(() => import("@/components/AboutDentist"));
const ServicesSection    = dynamic(() => import("@/components/ServicesSection"));
const AppointmentSteps   = dynamic(() => import("@/components/AppointmentSteps"));
const InsuranceSection   = dynamic(() => import("@/components/InsuranceSection"));
const DifferentialsSection = dynamic(() => import("@/components/DifferentialsSection"));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection"));
const GallerySection     = dynamic(() => import("@/components/GallerySection"));
const LocationSection    = dynamic(() => import("@/components/LocationSection"));
const FAQSection         = dynamic(() => import("@/components/FAQSection"));
const FinalCTA           = dynamic(() => import("@/components/FinalCTA"));
const Footer             = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Crítico: carrega imediatamente */}
        <Hero />
        <TrustBar />

        {/* Abaixo da dobra: carregamento lazy */}
        <AboutDentist />
        <ServicesSection />
        <AppointmentSteps />
        <InsuranceSection />
        <DifferentialsSection />
        <TestimonialsSection />
        <GallerySection />
        <LocationSection />
        <FAQSection />
        <FinalCTA />
      </main>

      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
