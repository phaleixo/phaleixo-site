// Configurações de contato - TEMPLATE
// Copie este arquivo para contact.ts e configure com suas informações

export const CONTACT_CONFIG = {
  // WhatsApp number (format: country code + area code + number, without + or spaces)
  // Example: For Brazil +55 11 99999-9999, use: 5511999999999
  whatsapp: {
    number: '5511999999999', // ALTERE: Substitua pelo seu número do WhatsApp
    messages: {
      general: 'Olá! Gostaria de conversar sobre desenvolvimento de sistemas.',
      landingPage: 'Olá! Tenho interesse em criar uma landing page para minha empresa. Podemos conversar?'
    }
  },
  
  email: {
    address: 'contato@seudominio.com' // ALTERE: Substitua pelo seu email
  }
} as const;

// Helper function to create WhatsApp URL
export const createWhatsAppUrl = (message?: string) => {
  const defaultMessage = CONTACT_CONFIG.whatsapp.messages.general;
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${CONTACT_CONFIG.whatsapp.number}?text=${encodedMessage}`;
};
