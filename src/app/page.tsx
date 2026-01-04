import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Spacer for fixed header */}
        <div className="h-[76px]" />
        
        {/* Hero Section */}
        <Hero />
        
        {/* Benefits Section */}
        <Benefits />
        
        {/* Contact Form Section */}
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
