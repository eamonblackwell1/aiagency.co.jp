import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { ProductModules } from "../components/ProductModules";
import { FounderCredibility } from "../components/FounderCredibility";
import { EntitySection } from "../components/EntitySection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Spacer for fixed header */}
        <div className="h-[76px]" />
        
        {/* Hero Section */}
        <Hero />

        {/* Product Modules Section */}
        <ProductModules />
        
        {/* Benefits Section */}
        <Benefits />

        {/* Founder Credibility Section */}
        <FounderCredibility />
        
        {/* Contact Form Section */}
        <ContactForm />

        {/* AIEO Entity Section */}
        <EntitySection />
      </main>
      <Footer />
    </>
  );
}
