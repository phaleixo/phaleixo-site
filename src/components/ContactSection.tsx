import React from 'react';
import { WhatsAppIcon, EmailIcon } from './Icons';

interface ContactSectionProps {
  openWhatsApp: () => void;
}

const processSteps = [
  "Análise de requisitos e escopo",
  "Prototipagem e arquitetura",
  "Desenvolvimento iterativo",
  "Testes e validação",
  "Deploy e configuração",
  "Treinamento e suporte"
];

export const ContactSection: React.FC<ContactSectionProps> = ({ openWhatsApp }) => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Vamos Desenvolver Juntos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estou aqui para transformar suas ideias em soluções digitais eficientes
          </p>
        </div>

        {/* Grid - Fale Conosco e Processo */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          
          {/* Card Fale Conosco */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl flex flex-col justify-between">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Fale Conosco</h3>

            <div className="space-y-8">
              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h4>
                  <p className="text-gray-600">Converse diretamente pelo WhatsApp</p>
                  <button
                    onClick={openWhatsApp}
                    className="text-green-600 font-semibold hover:text-green-700 mt-2 inline-block cursor-pointer"
                  >
                    Iniciar Conversa →
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <EmailIcon />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Email</h4>
                  <p className="text-gray-600">Para propostas e orçamentos detalhados</p>
                  <a
                    href="mailto:phaleixo@outlook.com.br"
                    className="text-blue-600 font-semibold hover:text-blue-700 mt-2 inline-block"
                  >
                    phaleixo@outlook.com.br →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card Processo de Desenvolvimento */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl flex flex-col justify-between">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Processo de Desenvolvimento</h3>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
