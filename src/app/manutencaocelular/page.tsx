import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import { Smartphone, BatteryCharging, Bug, Volume2, Cpu } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";
import About from "@/components/about";


export const metadata: Metadata = {
  title: "PHALEIXO - Manutenção de Celulares",
  description:
    "Manutenção completa de celulares com peças originais e garantia. Reparos rápidos e profissionais para todos os modelos.",
  keywords: [
    "manutecao celulares",
    "phaleixo",
    "Paulo Henrique Aleixo de Campos",
    "Jardinopolis",
    "Ribeirao preto",
    "tela quebrada",
    "WhatsApp",
    "celular quebrou",
    "manutenção",
  ],
  metadataBase: new URL(process.env.SITE_URL ?? "https://www.phaleixo.dev"),
  openGraph: {
    title: "PHALEIXO - Manutenção de Celulares",
    description:
      "Manutenção completa de celulares com peças originais e garantia. Reparos rápidos e profissionais para todos os modelos.",
    url: "/manutencaocelular",
    images: [
      {
        url: "/metadata.png",
        width: 1200,
        height: 630,
        alt: "Manutenção de Celulares - Phaleixo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/metadata.png"],
  },
};

export default function ManutencaoCelularPage() {
  const phone = "5516988380508";
  const whatsappHref = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá, Paulo! Gostaria de um orçamento para conserto de celular.",
  )}`;

  const servicosLista = [
    { icon: <Smartphone size={14} className="md:size-4" />, label: "TELA QUEBRADA" },
    { icon: <BatteryCharging size={14} className="md:size-4" />, label: "PAROU DE CARREGAR" },
    { icon: <Volume2 size={14} className="md:size-4" />, label: "SOM NÃO FUNCIONA" },
    { icon: <Cpu size={14} className="md:size-4" />, label: "NÃO LIGA" },
    { icon: <Bug size={14} className="md:size-4" />, label: "REMOÇÃO DE VÍRUS" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      <main>
        {/* === HERO SECTION === */}
        <section className="relative w-full overflow-hidden bg-[#f15a24] pt-6 md:pt-12 pb-16 min-h-[90vh] flex items-center">
          {/* Fundo Preto Diagonal Inferior */}
          <div
            className="absolute bottom-0 left-0 w-full h-[85%] bg-[#0a0a0a]"
            style={{ clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)" }}
          />

          {/* Detalhe Laranja Inferior */}
          <div
            className="absolute bottom-0 left-0 w-full h-[15%] bg-[#f15a24]"
            style={{ clipPath: "polygon(0 100%, 100% 20%, 100% 100%)" }}
          />

          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 w-full">
            {/* Título Principal */}
            <div className="text-center md:text-left">
              <h1 className="text-white text-2xl md:text-6xl lg:text-7xl font-black italic tracking-tighter leading-tight md:leading-tight md:max-w-md mx-auto md:mx-0">
                A TELA DO SEU CELULAR QUEBROU?
              </h1>

              <div className="mt-3 inline-block border-2 border-white/80 bg-white/10 px-4 py-1.5 rounded-md">
                <p className="text-white font-black tracking-[0.2em] text-sm md:text-base">
                  RESOLVA HOJE AINDA
                </p>
              </div>
            </div>

            {/* Layout com Imagem e Serviços lado a lado */}
            <div className="flex flex-row items-start gap-4 md:gap-8 lg:gap-12 mt-6 md:mt-8">
              
              {/* Imagem - Lado Esquerdo */}
              <div className="w-2/5 md:w-1/2 flex justify-center">
                <div className="w-full max-w-[200px] md:max-w-[320px] lg:max-w-[400px] drop-shadow-[0_20px_50px_rgba(241,90,36,0.3)]">
                  <Image
                    src="/telaquebrada.png"
                    alt="Celular com tela quebrada"
                    width={520}
                    height={520}
                    className="object-contain w-full"
                    priority
                  />
                </div>
              </div>

              {/* Lista de Serviços - Lado Direito */}
              <div className="w-3/5 md:w-1/2 flex flex-col">
                <div className="space-y-1.5 md:space-y-3 w-full">
                  {servicosLista.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 md:gap-3 border border-emerald-400/60 bg-[#0a0a0a]/90 p-2 md:p-3 rounded-md text-white text-xs md:text-base font-bold tracking-wide shadow-lg"
                    >
                      <span className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.8)] flex-shrink-0">
                        {item.icon}
                      </span>
                      <span className="flex-1 truncate">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Texto de Garantia */}
            <h2 className="mt-6 text-[#f15a24] font-black text-lg md:text-2xl lg:text-3xl italic text-center">
              CONSERTO RÁPIDO E COM GARANTIA.
            </h2>

            {/* Botão de Contato - Centralizado */}
            <div className="mt-6 md:mt-8 flex flex-col items-center w-full">
              <p className="text-white text-sm md:text-base font-black mb-3 uppercase tracking-wider text-center">
                Faça um orçamento sem compromisso.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-105 transition duration-300 rounded-full py-3 px-6 flex items-center justify-center gap-4 shadow-[0_8px_30px_rgba(37,211,102,0.18)] w-full max-w-md text-white"
              >
                <div className="bg-white/10 p-2 rounded-full flex items-center justify-center">
                  <WhatsAppIcon />
                </div>
                <div className="flex flex-col">
                  <span className="text-white text-xs font-bold leading-none">
                    Falar com Paulo
                  </span>
                  <span className="text-white font-black text-lg md:text-2xl whitespace-nowrap leading-none mt-1">
                    16 98838-0508
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <About />
        
        <Footer />
      </main>
    </div>
  );
}