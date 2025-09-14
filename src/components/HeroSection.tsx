import React from 'react';
import { WhatsAppIcon, CheckIcon, CodeIcon } from './Icons';

interface HeroSectionProps {
  isVisible: boolean;
  openWhatsApp: () => void;
  scrollToSection: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ isVisible, openWhatsApp, scrollToSection }) => {
  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 hero-content ${isVisible ? 'visible' : ''}`}>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Desenvolvimento de{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sistemas
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Especialista em criar sistemas web, sites modernos e integrações WhatsApp. 
                Transformo ideias em soluções digitais eficientes e escaláveis.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openWhatsApp}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <WhatsAppIcon />
                <span className="ml-2">Conversar no WhatsApp</span>
              </button>
              <button
                onClick={() => scrollToSection('servicos')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-lg border-2 border-gray-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-300"
              >
                Ver Soluções
              </button>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckIcon />
                <span>Sistemas Escaláveis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon />
                <span>Tecnologias Modernas</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckIcon />
                <span>Suporte Completo</span>
              </div>
            </div>
          </div>

          <div className={`relative hero-image ${isVisible ? 'visible' : ''}`}>
            {/* Elementos visuais modernos */}
            <div className="relative z-10 float-animation">
              {/* Card principal com gradiente animado */}
              <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl"></div>
                
                {/* Grid de código simulado */}
                <div className="relative space-y-4">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <CodeIcon />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Sistema Web</h3>
                      <p className="text-gray-600">Moderno & Eficiente</p>
                    </div>
                  </div>
                  
                  {/* Linhas de código animadas */}
                  <div className="space-y-3">
                    <div className="h-3 bg-gradient-to-r from-blue-200 to-blue-300 rounded-full code-line"></div>
                    <div className="h-3 bg-gradient-to-r from-purple-200 to-purple-300 rounded-full w-4/5 code-line" style={{animationDelay: '0.3s'}}></div>
                    <div className="h-3 bg-gradient-to-r from-pink-200 to-pink-300 rounded-full w-3/5 code-line" style={{animationDelay: '0.6s'}}></div>
                    <div className="h-3 bg-gradient-to-r from-indigo-200 to-indigo-300 rounded-full w-2/3 code-line" style={{animationDelay: '0.9s'}}></div>
                  </div>
                  
                  {/* Indicadores de status */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-75"></div>
                      <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse delay-150"></div>
                    </div>
                    <div className="text-xs text-gray-500 font-mono">React • TypeScript • Next.js</div>
                  </div>
                </div>
              </div>
              
              {/* Elementos flutuantes decorativos */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-xl animate-pulse delay-200"></div>
            </div>
            
            {/* Background decorativo */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-purple-300/30 to-pink-300/30 rounded-full blur-3xl animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
