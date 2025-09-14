'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
//import { PortfolioSection } from '@/components/PortfolioSection';
import { CTASection } from '@/components/CTASection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppIcon } from '@/components/Icons';
import { createWhatsAppUrl } from '@/config/contact';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open(createWhatsAppUrl(), '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <HeroSection 
        isVisible={isMounted && isVisible} 
        openWhatsApp={openWhatsApp} 
        scrollToSection={scrollToSection} 
      />
      
      <ServicesSection />

      {/* <PortfolioSection /> */}

      <CTASection openWhatsApp={openWhatsApp} />
      
      <ContactSection openWhatsApp={openWhatsApp} />
      
      <Footer />
      
      {/* Botão flutuante do WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={openWhatsApp}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center animate-bounce"
          aria-label="Conversar no WhatsApp"
        >
          <WhatsAppIcon />
        </button>
      </div>
    </div>
  );
}
