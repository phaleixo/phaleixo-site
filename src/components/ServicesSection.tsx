import React from 'react';
import { CheckIcon } from './Icons';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: "🌐",
    title: "Sites Institucionais",
    description: "Sites profissionais responsivos com design moderno, otimização SEO e performance superior para sua empresa.",
    features: ["Design Responsivo", "Otimização SEO", "Performance Otimizada", "CMS Personalizado"]
  },
  {
    icon: "⚙️",
    title: "Sistemas Web",
    description: "Desenvolvimento de sistemas personalizados para gestão, controle e automação de processos empresariais.",
    features: ["Dashboard Personalizado", "API Rest", "Banco de Dados", "Relatórios Avançados"]
  },
  {
    icon: "💬",
    title: "Integração WhatsApp",
    description: "Conecte seus sistemas ao WhatsApp Business com chatbots inteligentes e automação de atendimento.",
    features: ["Chatbot Avançado", "Automação Completa", "Multi-atendimento", "Analytics Detalhado"]
  },
  {
    icon: "📱",
    title: "Aplicações Mobile",
    description: "Apps nativos e híbridos para Android e iOS, integrados com seus sistemas existentes.",
    features: ["React Native", "Design Nativo", "Push Notifications", "Offline First"]
  },
  {
    icon: "🔧",
    title: "Manutenção & Suporte",
    description: "Suporte técnico contínuo, atualizações de segurança e melhorias constantes em seus sistemas.",
    features: ["Suporte 24/7", "Backups Automáticos", "Atualizações", "Monitoramento"]
  }
];

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2">
    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
    <p className="text-gray-600 mb-6">{service.description}</p>
    <ul className="space-y-2">
      {service.features.map((feature, fIndex) => (
        <li key={fIndex} className="flex items-center text-sm text-gray-600">
          <CheckIcon />
          <span className="ml-2">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Serviços de Desenvolvimento
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para transformar seu negócio digitalmente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};
