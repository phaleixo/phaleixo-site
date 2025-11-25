import React from 'react';
import Image from 'next/image';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Image 
              src="/phaleixo-solucoesdigitais.svg" 
              alt="PHALEIXO - SOLUÇÕES DIGITAIS" 
              width={120}
              height={48}
              className="h-8 w-auto"
            />
          </div>
          <p className="text-gray-400 mb-6">
            Desenvolvimento de Sistemas - Soluções Digitais para seu negócio.
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 ALEIXO. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
