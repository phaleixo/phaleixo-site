import React from 'react';
import { CodeIcon } from './Icons';

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "Sistema de Gestão ERP",
    category: "Sistema Web",
    description: "ERP completo para gestão empresarial",
    image: "bg-gradient-to-br from-blue-400 to-indigo-600",
    tech: ["React", "Node.js", "PostgreSQL"]
  },
  {
    title: "E-commerce MultiStore",
    category: "Loja Virtual",
    description: "Marketplace com múltiplas lojas",
    image: "bg-gradient-to-br from-purple-400 to-pink-600",
    tech: ["Next.js", "Stripe", "MongoDB"]
  },
  {
    title: "App de Delivery",
    category: "Mobile App",
    description: "Aplicativo de delivery integrado",
    image: "bg-gradient-to-br from-green-400 to-teal-600",
    tech: ["React Native", "WhatsApp API"]
  },
  {
    title: "Portal Imobiliário",
    category: "Site Institucional",
    description: "Portal completo para imobiliária",
    image: "bg-gradient-to-br from-orange-400 to-red-600",
    tech: ["Next.js", "CMS", "SEO"]
  },
  {
    title: "Sistema Hospitalar",
    category: "Sistema Web",
    description: "Gestão completa hospitalar",
    image: "bg-gradient-to-br from-cyan-400 to-blue-600",
    tech: ["React", "Node.js", "MySQL"]
  },
  {
    title: "Chatbot Inteligente",
    category: "Automação",
    description: "Bot para atendimento automatizado",
    image: "bg-gradient-to-br from-indigo-400 to-purple-600",
    tech: ["Python", "WhatsApp", "AI"]
  }
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="group cursor-pointer">
    <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
      <div className={`aspect-video ${project.image} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
        <div className="text-center text-white">
          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
            <CodeIcon />
          </div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-sm opacity-90">{project.description}</p>
        </div>
      </div>
      <div className="p-6 bg-white">
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-600">{project.category}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-3">{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, techIndex) => (
            <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Portfolio de Projetos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alguns dos sistemas e sites desenvolvidos para clientes satisfeitos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
