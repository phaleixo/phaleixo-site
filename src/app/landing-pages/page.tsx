import LandingPagesClient from "@/components/LandingPagesClient";
import About from "@/components/about";
import { Footer } from "@/components/Footer";
import { Metadata } from "next";

// Metadata customizado para esta página
export const metadata: Metadata = {
  title: "PHALEIXO - Desenvolvimento de Landing Pages",
  description: "Desenvolvimento de landing pages personalizadas para aumentar suas conversões e atrair mais clientes. Transforme visitantes em leads com designs modernos e otimizados.",
  keywords: ["landing page","phaleixo","Paulo Henrique Aleixo de Campos","Jardinopolis","Ribeirao preto", "chatbot", "WhatsApp", "desenvolvimento web", "manutenção"],
  metadataBase: new URL(process.env.SITE_URL ?? "https://www.phaleixo.dev"),
  openGraph: {
    title: "PHALEIXO - Desenvolvimento de Landing Pages",
    description: "Desenvolvimento de landing pages personalizadas para aumentar suas conversões e atrair mais clientes. Transforme visitantes em leads com designs modernos e otimizados.",
    url: "/landing-pages",
    images: [
      {
        url: "/metadata.png",
        width: 1200,
        height: 630,
        alt: "Desenvolvimento de Landing Pages - Phaleixo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/metadata.png"],
  },
};

export default function LandingPages() {
  return (
    <>
      <LandingPagesClient />
      <About />
      <Footer />
    </>
  );
}
