import React from "react";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400 mb-6">
            <a
              href="https://www.phaleixo.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              PHALEIXO - SOLUÇÕES DIGITAIS - Desenvolvimento de Sistemas para
              seu negócio.
            </a>
          </p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © {year} PHALEIXO. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
