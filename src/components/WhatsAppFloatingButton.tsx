import React from 'react';
import { WhatsAppIcon } from './Icons';

interface WhatsAppFloatingButtonProps {
  openWhatsApp: () => void;
}

export const WhatsAppFloatingButton: React.FC<WhatsAppFloatingButtonProps> = ({ openWhatsApp }) => {
  return (
    <button
      onClick={openWhatsApp}
      className="fixed bottom-6 right-6 bg-green-300 hover:bg-green-400 text-white p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 z-50"
      aria-label="Conversar no WhatsApp"
    >
      <WhatsAppIcon />
    </button>
  );
};
