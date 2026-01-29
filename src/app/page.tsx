"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from '@/components/PortfolioSection';
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppIcon } from "@/components/Icons";
import { createWhatsAppUrl } from "@/config/contact";
import About from "@/components/about";

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
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open(createWhatsAppUrl(), "_blank");
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

      {/* Link para Manutenção de Computadores */}
      <section className="py-12 mb-12 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        {/* Elementos decorativos de fundo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Conteúdo */}
            <div className="text-center lg:text-left space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-blue-200 text-sm font-medium">
                  Serviço Disponível
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                Manutenção de
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Computadores
                </span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                Especialista em formatação, reparos, instalação de software e
                hardware. Atendimento personalizado em Jardinópolis e toda
                região de Ribeirão Preto.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💻</span>
                  </div>
                  <span className="text-gray-200 text-sm">Formatação</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🔧</span>
                  </div>
                  <span className="text-gray-200 text-sm">Reparos</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📦</span>
                  </div>
                  <span className="text-gray-200 text-sm">Software</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-xl">🖥️</span>
                  </div>
                  <span className="text-gray-200 text-sm">Hardware</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/manutencaocomputador"
                  className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-1"
                >
                  Ver Detalhes
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Card Visual */}
            <div className="hidden lg:flex justify-center">
              <div className="relative">
                {/* Card principal */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 w-72">
                  <div className="text-5xl mb-4 text-center">🖥️</div>
                  <div className="space-y-3">
                    <div className="h-3 bg-white/20 rounded-full w-full"></div>
                    <div className="h-3 bg-white/15 rounded-full w-4/5"></div>
                    <div className="h-3 bg-white/10 rounded-full w-3/5"></div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <div className="flex-1 h-10 bg-cyan-500/30 rounded-xl"></div>
                    <div className="flex-1 h-10 bg-blue-500/30 rounded-xl"></div>
                  </div>
                </div>

                {/* Elementos flutuantes */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                  Disponível!
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⚡</span>
                    <span className="text-white text-sm font-medium">
                      Atendimento Rápido
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PortfolioSection />

      <CTASection openWhatsApp={openWhatsApp} />

      <ContactSection openWhatsApp={openWhatsApp} />
      <About />
      <Footer />

      {/* Botão flutuante do WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openWhatsApp}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center animate-bounce cursor-pointer"
          aria-label="Conversar no WhatsApp"
        >
          <WhatsAppIcon />
        </button>
      </div>
    </div>
  );
}
