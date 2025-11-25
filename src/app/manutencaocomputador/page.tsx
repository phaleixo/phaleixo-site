import type { Metadata } from "next";
import ClientManutencao from '../../components/ClientManutencao';

// Metadata customizado para esta página
export const metadata: Metadata = {
  title: "Aleixo - Manutenção de Computadores",
  description: "Especialista em Manutenção de Computadores, Formatação e Reparos, instalação de software e hardware.",
  keywords: "Formatação, manutenção de computadores, reparos, instalação de software, instalação de hardware, phaleixo, Jardinopolis, SP, Ribeirão Preto",
  authors: [{ name: "Paulo Henrique Aleixo de Campos" }],
};

// Icons locais customizados para esta página
const ComputerIcon = () => (
  <svg className="w-12 h-12 text-white mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export default function ManutencaoComputadores() {
  return <ClientManutencao />;
}
