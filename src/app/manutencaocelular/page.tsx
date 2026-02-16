import type { Metadata } from "next";
import Image from "next/image";
import { Footer } from "../../components/Footer";
import { Smartphone, BatteryCharging, Droplet, Bug, Wrench, Volume2, Check,} from "lucide-react";
import About from "@/components/about";
import IssueList from "@/components/IssueList";
import ServiceCard from "@/components/ServiceCard";
import ContactButton from "@/components/ContactButton";


// Metadata customizado para esta página
export const metadata: Metadata = {
  title: "PHALEIXO - Manutenção de Celulares",
  description: "Manutenção completa de celulares com peças originais e garantia. Reparos rápidos e profissionais para todos os modelos.",
  keywords: ["manutecao celulares","phaleixo","Paulo Henrique Aleixo de Campos","Jardinopolis","Ribeirao preto", "tela quebrada", "WhatsApp", "celular quebrou", "manutenção"],

  metadataBase: new URL(process.env.SITE_URL ?? "https://www.phaleixo.dev"),
  openGraph: {
    title: "PHALEIXO - Manutenção de Celulares",
    description: "Manutenção completa de celulares com peças originais e garantia. Reparos rápidos e profissionais para todos os modelos.",
    url: "/manutencaocelular",
    images: [
      {
        url: "/metadata.png", 
        width: 1200,
        height: 630,
        alt: "Manutenção de Celulares - Phaleixo"
      }
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
    "Olá, gostaria de um orçamento para conserto de celular.",
  )}`;

  return (
    <div className="min-h-screen bg-[#020d18] blue-oscillate text-white">
      <main className="pt-16">
       
        <section className="max-w-7xl mx-auto px-6 md:px-8 py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex items-start gap-0">
              <div className="flex-shrink-0 w-56 sm:w-56 md:w-96">
                <Image
                  src="/telaquebrada.png"
                  alt="Phone with cracked screen"
                  width={520}
                  height={520}
                  className="object-contain"
                />
              </div>

              <IssueList
                items={[
                  "Tela quebrada",
                  "Parou de carregar",
                  "Som não funciona",
                  "Não liga",
                  "Virus",
                ]}
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-6xl font-extrabold leading-tight mb-6">
                Não se desespere
              </h1>
              <p className="text-gray-300 max-w-xl mb-8">
                Conserto rápido e profissional para o seu smartphone. Sem
                complicações, apenas soluções.
              </p>

              <div className="flex items-center gap-4">
                <ContactButton
                  href={whatsappHref}
                  label="Paulo Aleixo 16-988380508"
                />

                <a href="#servicos" className="text-gray-300 hover:text-white">
                  Ver Serviços
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="servicos" className="py-16">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-6">Nossos Serviços</h2>
            <p className="text-gray-400 mb-10">
              Soluções rápidas e confiáveis para seu aparelho.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                icon={<Smartphone className="w-10 h-10 text-green-400" />}
                title="Troca de Tela"
              >
                Recupere a visualização original em poucos minutos.
              </ServiceCard>

              <ServiceCard
                icon={<BatteryCharging className="w-10 h-10 text-green-400" />}
                title="Troca de Bateria"
              >
                Mais autonomia para o seu dia a dia, sem interrupções.
              </ServiceCard>

              <ServiceCard
                icon={<Droplet className="w-10 h-10 text-green-400" />}
                title="Danos por Água"
              >
                Soluções especializadas para recuperar dispositivos molhados.
              </ServiceCard>

              <ServiceCard
                icon={<Bug className="w-10 h-10 text-green-400" />}
                title="Remoção de Vírus"
              >
                Diagnóstico e remoção de malwares, recuperação de desempenho.
              </ServiceCard>

              <ServiceCard
                icon={<Wrench className="w-10 h-10 text-green-400" />}
                title="Reparos em Geral"
              >
                Pequenos e grandes reparos: conector de carga, botões, câmeras e
                mais.
              </ServiceCard>

              <ServiceCard
                icon={<Volume2 className="w-10 h-10 text-green-400" />}
                title="Reparo Som"
              >
                Conserto de alto-falante, microfone e problemas de áudio.
              </ServiceCard>
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-6">Por Que Nos Escolher?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="flex items-start gap-4">
                <Check className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Técnico Certificado</h4>
                  <p className="text-gray-400 text-sm">
                    Técnico confiável e certificado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Check className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Garantia de Serviço</h4>
                  <p className="text-gray-400 text-sm">
                    Garantia em peças e mão de obra.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Check className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Peças de Qualidade</h4>
                  <p className="text-gray-400 text-sm">
                    Peças com excelente procedência.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Check className="w-5 h-5 text-green-400 mt-1" />
                <div>
                  <h4 className="font-semibold">Atendimento Ágil</h4>
                  <p className="text-gray-400 text-sm">
                    Atendimento rápido e sem complicações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <About />
        <Footer />
      </main>
    </div>
  );
}
