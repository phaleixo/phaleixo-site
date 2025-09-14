import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-sm font-bold">PHALEIXO -  SOLUÇÕES DIGITAIS</span>
          </div>
          <p className="text-gray-400 mb-6">
            Desenvolvimento de Sistemas - Soluções Digitais para seu negócio.
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2025 PHALEIXO. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
