import type { Metadata } from "next";
import ClientManutencao from '../../components/ClientManutencao';

// Metadata customizado para esta página
export const metadata: Metadata = {
  title: "PHALEIXO - Manutenção de Computadores",
  description: "Manutenção completa de computadores com peças originais e garantia. Reparos rápidos e profissionais para todos os modelos.",
  keywords: ["manutecao computadores","phaleixo","Paulo Henrique Aleixo de Campos","Jardinopolis","Ribeirao preto", "computador quebrado", "WhatsApp", "computador lento", "manutenção"],

  metadataBase: new URL(process.env.SITE_URL ?? "https://www.phaleixo.dev"),
  openGraph: {
    title: "PHALEIXO - Manutenção de Computadores",
    description: "Manutenção completa de computadores com peças originais e garantia. Reparos rápidos e profissionais para todos os modelos.",
    url: "/manutencaocomputador",
    images: [
      {
        url: "/metadata.png", 
        width: 1200,
        height: 630,
        alt: "Manutenção de Computadores - Phaleixo"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/metadata.png"],
  },
};



export default function ManutencaoComputadores() {
  return <ClientManutencao />;
}
