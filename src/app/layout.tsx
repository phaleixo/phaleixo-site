import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "phaleixo - Soluções Digitais",
  description:
    "Especialista em desenvolvimento de sistemas web, sites modernos e integrações WhatsApp. Transformo ideias em soluções digitais eficientes e escaláveis.",
  keywords: [
    "desenvolvimento de sistemas",
    "sites modernos",
    "integração whatsapp",
    "sistemas web",
    "jardinopolis",
    "ribeirao preto",
    "landing pages",
    "manutencao de computadores",
    "manutencao de celulares",
    "tecnologia",
    "informatica",
    "site",
    "phaleixo",
  ],
  authors: [{ name: "Paulo Henrique Aleixo de Campos" }],
  openGraph: {
    title: "phaleixo - Soluções Digitais",
    description:
      "Especialista em desenvolvimento de sistemas web, sites modernos e integrações WhatsApp. Transformo ideias em soluções digitais eficientes e escaláveis.",
    type: "website",
    images: ["/metadata.png"],
  },
  twitter: {
    title: "phaleixo - Soluções Digitais",
    card: "summary_large_image",
    images: ["/metadata.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
