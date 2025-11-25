'use client';

import { useState, useEffect } from 'react';
import { createWhatsAppUrl, CONTACT_CONFIG } from '@/config/contact';
import { Footer } from '@/components/Footer';
import { WhatsAppIcon, CheckIcon, DesignIcon, ChartIcon, ChatBotIcon, StarIcon } from '@/components/Icons';
import About from '@/components/about';



export default function LandingPages() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // Animação para features em destaque
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  const openWhatsApp = () => {
    window.open(createWhatsAppUrl(CONTACT_CONFIG.whatsapp.messages.landingPage), '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: "Landing Page Pro",
      price: "R$ 250",
      period: "/ano",
      description: "Solução completa para sua presença online",
      features: [
        "Landing page responsiva e moderna",
        "Registro de domínio incluído",
        "Design profissional personalizado",
        "Otimização para conversão",
        "Formulário de contato integrado",
        "Analytics básico incluído",
        "Suporte técnico por 1 ano"
      ],
      highlight: false,
      ctaText: "Começar Agora"
    },
    {
      name: "ChatBot WhatsApp IA",
      price: "Consulte valores",
      period: "",
      description: "Automatize seu atendimento com inteligência artificial",
      features: [
        "Chatbot inteligente com IA",
        "Integração WhatsApp Business",
        "Respostas automáticas 24/7",
        "Configuração personalizada",
        "Relatórios de conversas",
        "Suporte e manutenção",
        "Treinamento da equipe"
      ],
      highlight: false,
      ctaText: "Automatizar Agora"
    },
    {
      name: "Solução Completa",
      price: "Consulte valores",
      period: "",
      description: "Landing page + chatbot IA em um pacote completo",
      features: [
        "Landing page responsiva",
        "Registro de domínio incluído",
        "Chatbot IA para WhatsApp",
        "Integração completa",
        "Design profissional",
        "Analytics avançado",
        "Suporte prioritário 24/7",
        "Atualizações gratuitas"
      ],
      highlight: true,
      ctaText: "Escolher Completo",
      badge: "Mais Popular"
    }
  ];

  const features = [
    {
      title: "Design Impactante",
      description: "Criamos landing pages visualmente impressionantes que capturam a atenção do seu público e transmitem profissionalismo.",
      icon: <DesignIcon />
    },
    {
      title: "Otimização para Conversão",
      description: "Estratégias comprovadas para aumentar suas taxas de conversão e transformar visitantes em clientes.",
      icon: <ChartIcon />
    },
    {
      title: "Chatbot Inteligente",
      description: "Atendimento automatizado 24/7 com IA que entende e responde às necessidades dos seus clientes.",
      icon: <ChatBotIcon />
    }
  ];

  const testimonials = [
    {
      name: "Amanda Silva",
      company: "Cabeleireira",
      text: "Minha agenda nunca mais ficou vazia! A landing page trouxe muito mais clientes e o chatbot agenda os horários automaticamente.",
      rating: 5
    },
    {
      name: "Juliana Santos",
      company: "Manicure",
      text: "Revolucionou meu negócio! Agora tenho uma presença digital profissional e o atendimento automático funciona 24h. Aumentou 60% meus agendamentos!",
      rating: 5
    },
    {
      name: "Dra. Patricia Mendes",
      company: "Psicóloga",
      text: "A página transmite total credibilidade profissional. Pacientes conseguem agendar consultas facilmente e sinto que minha prática ganhou muito mais visibilidade.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background moderno com gradientes e formas */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
          <svg viewBox="0 0 1000 1000" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="modernGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="modernGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#6366F1" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#4F46E5" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#4338CA" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path 
              d="M800,100 C900,150 950,250 900,400 C850,550 700,600 600,550 C500,500 450,400 500,250 C550,100 700,50 800,100 Z" 
              fill="url(#modernGradient1)"
            />
            <path 
              d="M200,300 C100,350 50,450 100,600 C150,750 300,800 400,750 C500,700 550,600 500,450 C450,300 300,250 200,300 Z" 
              fill="url(#modernGradient2)"
            />
          </svg>
        </div>
        
        {/* Elementos de fundo  */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 -left-20 w-60 h-60 bg-blue-300 rounded-full opacity-20 blur-3xl animate-pulse-medium"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-indigo-300 rounded-full opacity-20 blur-3xl animate-pulse-slow"></div>
        
        {/* Grid sutil de fundo */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      

      {/* Hero Section  */}
      <section className="relative z-40 pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className={`mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-semibold tracking-wider uppercase mb-4 animate-pulse">
               PROFISSIONAIS AUTONOMOS • PRESTADORES DE SERVIÇOS
              </span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-black mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="text-gray-900 block">Criando Soluções</span>
              <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent block animate-gradient">
                Criativas
              </span>
            </h1>
            
            <p className={`text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Transformamos sua ideia em uma landing page moderna e conversiva, 
              com chatbots inteligentes integrados ao WhatsApp para maximizar seus resultados.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 group relative overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">Ver Planos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button 
                onClick={openWhatsApp}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-200 font-semibold text-lg group relative overflow-hidden cursor-pointer"
              >
                <span className="relative z-10">Falar no WhatsApp</span>
                <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </button>
            </div>

            {/* Estatísticas em destaque */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[
                { value: '98%', label: 'Satisfação' },
                { value: '24/7', label: 'Suporte' },
                { value: '40%', label: 'Mais Conversões' },
                { value: '50+', label: 'Clientes' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Elementos flutuantes animados */}
        <div className="absolute top-20 left-10 w-10 h-10 bg-purple-400 rounded-full opacity-20 animate-float-1"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-float-2"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-400 rounded-full opacity-20 animate-float-3"></div>
      </section>

      {/* Features Section  */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Recursos <span className="text-purple-600">Exclusivos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções completas para impulsionar seu negócio no digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`bg-white p-8 rounded-2xl shadow-lg border border-purple-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  activeFeature === index ? 'ring-2 ring-purple-200 scale-105' : ''
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section  */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                <span>Como podemos te ajudar</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Somos especialistas em criar landing pages de alta conversão e chatbots inteligentes 
                que transformam a experiência digital do seu negócio. Combinamos design moderno com 
                tecnologia avançada para entregar resultados reais.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Design responsivo e moderno",
                  "Otimização para mecanismos de busca",
                  "Integração com WhatsApp Business API",
                  "Chatbots com inteligência artificial",
                  "Suporte técnico especializado",
                  "Relatórios de desempenho detalhados"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                      <CheckIcon />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <WhatsAppIcon />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">Integração WhatsApp</h3>
                    <p className="text-gray-600">Atendimento automatizado 24/7</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">+40%</div>
                    <div className="text-sm text-gray-600">Conversões</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600">Atendimento</div>
                  </div>
                </div>
              </div>
              
              {/* Elementos decorativos */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-400 rounded-full opacity-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section  */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Planos <span className="text-purple-600">Acessíveis</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha a solução perfeita para o seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                  plan.highlight 
                    ? 'shadow-2xl border-2 border-purple-200 ring-4 ring-purple-50 transform -translate-y-2' 
                    : 'shadow-lg hover:shadow-xl border border-gray-100'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      {plan.badge}
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon />
                      <span className="ml-3 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={openWhatsApp}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 cursor-pointer ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-xl'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {plan.ctaText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              O que nossos <span className="text-purple-600">clientes</span> dizem
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Confira a experiência de quem já transformou seu negócio conosco
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-purple-50">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">&quot;{testimonial.text}&quot;</p>
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-purple-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Perguntas <span className="text-purple-600">Frequentes</span>
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre nossos serviços
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Quanto tempo leva para desenvolver uma landing page?",
                answer: "O prazo médio é de 7 a 10 dias úteis, dependendo da complexidade do projeto e da agilidade no fornecimento de conteúdo e feedback."
              },
              {
                question: "O domínio está incluído no pacote?",
                answer: "Sim, todos os nossos pacotes incluem registro de domínio por 1 ano. A renovação anual é de responsabilidade do cliente."
              },
              {
                question: "Como funciona o chatbot para WhatsApp?",
                answer: "Desenvolvemos um chatbot inteligente que se integra à API oficial do WhatsApp Business. Ele pode responder perguntas frequentes, qualificar leads e agendar consultas automaticamente."
              },
              {
                question: "Há algum custo adicional?",
                answer: "Nosso preço é transparente e inclui todos os serviços listados. A única exceção são possíveis personalizações extras solicitadas após o projeto inicial."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final moderna */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full opacity-5"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para <span className="text-yellow-300">transformar</span> seu negócio?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Entre em contato agora e receba uma proposta personalizada para seu projeto
          </p>
          <button 
            onClick={openWhatsApp}
            className="bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 inline-flex items-center cursor-pointer"
          >
            <WhatsAppIcon />
            <span className="ml-2">Falar com Especialista</span>
          </button>
          
          <div className="mt-8 text-purple-200 text-sm">
            <p>Resposta em até 1 hora durante o horário comercial</p>
          </div>
        </div>
      </section>

      <About />
      <Footer />

      {/* Botão flutuante do WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={openWhatsApp}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors flex items-center justify-center animate-bounce cursor-pointer"
          aria-label="Conversar no WhatsApp"
        >
          <WhatsAppIcon />
        </button>
      </div>

      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .bg-grid-pattern {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(15 23 42 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
        }
        @keyframes float-1 {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes float-2 {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes float-3 {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        @keyframes pulse-medium {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }
        .animate-float-1 {
          animation: float-1 6s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float-2 8s ease-in-out infinite;
        }
        .animate-float-3 {
          animation: float-3 7s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-medium {
          animation: pulse-medium 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}