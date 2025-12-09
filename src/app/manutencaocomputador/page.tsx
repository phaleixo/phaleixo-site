import type { Metadata } from "next";
import ClientManutencao from '../../components/ClientManutencao';

// Metadata customizado para esta página
export const metadata: Metadata = {
  title: "PHALEIXO - Manutenção de Computadores",
  description: "Especialista em Manutenção de Computadores, Formatação e Reparos, instalação de software e hardware.",
  keywords: "Formatação, manutenção de computadores, reparos, instalação de software, instalação de hardware, phaleixo, Jardinopolis, SP, Ribeirão Preto",
  authors: [{ name: "Paulo Henrique Aleixo de Campos" }],
};



export default function ManutencaoComputadores() {
  return <ClientManutencao />;
}
