import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

// Metadata customizado para esta página
export const metadata: Metadata = {
  title: "PHALEIXO - Desenvolvimento de Sistemas",
  description:
    "Desenvolvimento de sistemas personalizados para atender às necessidades do seu negócio. Soluções eficientes e escaláveis para impulsionar sua empresa.",
  keywords: [
    "Desenvolvimento de Sistemas",
    "phaleixo",
    "Paulo Henrique Aleixo de Campos",
    "Jardinopolis",
    "Ribeirao preto",
    "computador quebrado",
    "WhatsApp",
    "computador lento",
    "celular quebrado",
    "manutenção",
    "informatica",
  ],

  metadataBase: new URL(process.env.SITE_URL ?? "https://www.phaleixo.dev"),
  openGraph: {
    title: "PHALEIXO - Desenvolvimento de Sistemas",
    description:
      "Desenvolvimento de sistemas personalizados para atender às necessidades do seu negócio. Soluções eficientes e escaláveis para impulsionar sua empresa.",
    url: "/",
    images: [
      {
        url: "/metadata.png",
        width: 1200,
        height: 630,
        alt: "Desenvolvimento de Sistemas - Phaleixo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/metadata.png"],
  },
};

export default function Home() {
  return <HomeClient />;
}
