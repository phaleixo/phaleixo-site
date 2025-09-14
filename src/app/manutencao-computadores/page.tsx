'use client';

import { useState, useEffect } from 'react';
import { createWhatsAppUrl } from '@/config/contact';
import { WhatsAppIcon, CheckIcon } from '@/components/Icons';

// Icons locais customizados para esta página
const ComputerIcon = () => (
  <svg className="w-12 h-12 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function ManutencaoComputadores() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openWhatsApp = () => {
    const message = "Olá! Gostaria de saber mais sobre os serviços de manutenção de computadores.";
    window.open(createWhatsAppUrl(message), '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section Principal */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background com degradê adicional */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-800/30 via-transparent to-indigo-800/30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-8">
              <ComputerIcon />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-white">MANUTENÇÃO</span>
              <br />
              <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">COMPUTADORES</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-purple-100 max-w-2xl mx-auto">
              Seu PC lento, travando ou com vírus? 
              <span className="text-indigo-300 font-bold"> Resolvemos HOJE!</span>
            </p>
            
            <button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white px-12 py-6 rounded-full text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto space-x-4"
            >
              <WhatsAppIcon />
              <span>CHAMAR NO WHATSAPP</span>
            </button>
          </div>
        </div>
      </section>

      {/* Seção de Problemas */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent to-purple-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-12 text-white">
            SEU PC TEM ESSES <span className="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">PROBLEMAS?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "💻 Computador MUITO LENTO",
              "🦠 Vírus e Pop-ups",
              "💥 Tela Azul da Morte",
              "🔥 Superaquecimento",
              "🔊 Ruídos Estranhos",
              "⚠️ Não Liga Direito"
            ].map((problem, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-purple-300/30 p-6 rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <p className="text-xl font-bold text-white">{problem}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white px-10 py-4 rounded-full text-lg font-bold shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              RESOLVER AGORA!
            </button>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section className="py-16 px-4 bg-gradient-to-t from-indigo-900/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-center mb-12 text-white">
            NOSSOS <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">SERVIÇOS</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-purple-400/40 p-8 rounded-lg hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🔧</div>
                <h3 className="text-2xl font-bold text-purple-300 mb-2">LIMPEZA COMPLETA</h3>
                <div className="text-3xl font-black text-white"></div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 text-white">Limpeza interna total</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 text-white">Troca de pasta térmica</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 text-white">PC como novo</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-indigo-400/40 p-8 rounded-lg hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🛡️</div>
                <h3 className="text-2xl font-bold text-indigo-300 mb-2">REMOÇÃO DE VÍRUS</h3>
                <div className="text-3xl font-black text-white"></div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 text-white">Remove todos os vírus</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 text-white">Instala antivírus</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 text-white">PC 100% seguro</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-purple-400/40 p-8 rounded-lg hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-purple-300 mb-2">FORMATAÇÃO</h3>
                <div className="text-3xl font-black text-white"></div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 text-white">Windows novinho</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 text-white">Programas essenciais</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 text-white">Backup incluído</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-indigo-400/40 p-8 rounded-lg hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-indigo-300 mb-2">DIAGNÓSTICO</h3>
                <div className="text-3xl font-black text-white"></div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 text-white">Encontra o problema</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 text-white">Orçamento detalhado</span>
                </li>
                <li className="flex items-center">
                  <CheckIcon />
                  <span className="ml-3 text-white">SEM surpresas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white">
            CHAMA NO ZAP!
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-purple-100">
            Atendimento rápido • Preço justo • Garantia total
          </p>
          
          <button 
            onClick={openWhatsApp}
            className="bg-white hover:bg-gray-100 text-purple-700 px-16 py-8 rounded-full text-2xl font-black shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto space-x-4"
          >
            <svg className="w-8 h-8 text-purple-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.516z"/>
            </svg>
            <span>RESOLVER MEU PC AGORA!</span>
          </button>
          
          <div className="mt-8 text-purple-100 font-bold">
            <p>📱 Resposta em minutos • 🚀 Atendimento no mesmo dia • ✅ Garantia de qualidade</p>
          </div>
        </div>
      </section>

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
