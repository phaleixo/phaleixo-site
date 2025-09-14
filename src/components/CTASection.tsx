import React from 'react';
import Link from 'next/link';
import { WhatsAppIcon } from './Icons';

interface CTASectionProps {
  openWhatsApp: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ openWhatsApp }) => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Pronto para Desenvolver seu Sistema?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Vamos criar uma solução personalizada para seu negócio. 
          Agende uma conversa gratuita no WhatsApp agora mesmo!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={openWhatsApp}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-lg hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            <WhatsAppIcon />
            <span className="ml-2">Orçamento Gratuito</span>
          </button>
          <Link
            href="/landing-pages"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Landing Pages Especializadas
          </Link>
        </div>
      </div>
    </section>
  );
};
