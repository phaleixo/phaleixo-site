import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Phaleixo - Desenvolvimento de Sistemas",
  description: "Especialista em desenvolvimento de sistemas web, sites modernos e integrações WhatsApp. Transformo ideias em soluções digitais eficientes e escaláveis.",
  keywords: "desenvolvimento de sistemas, sites modernos, integração whatsapp, sistemas web, phaleixo",
  authors: [{ name: "Phaleixo" }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
