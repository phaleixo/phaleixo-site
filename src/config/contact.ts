// Configurações de contato
export const CONTACT_CONFIG = {
  
  whatsapp: {
    number: '5516988380508', // TODO: Replace with your actual WhatsApp number
    messages: {
      general: 'Olá! Gostaria de conversar sobre desenvolvimento de sistemas.',
      landingPage: 'Olá! Tenho interesse em criar uma landing page para minha empresa. Podemos conversar?'
    }
  },
  
  email: {
    address: 'phaleixo@outlook.com.br' // TODO: Replace with your actual email
  }
} as const;

// Helper function to create WhatsApp URL
export const createWhatsAppUrl = (message?: string) => {
  const defaultMessage = CONTACT_CONFIG.whatsapp.messages.general;
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${CONTACT_CONFIG.whatsapp.number}?text=${encodedMessage}`;
};
