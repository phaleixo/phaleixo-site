import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  url?: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "Orça Fácil",
    category: "Sistema Web",
    description: "Sistema completo para orçamento MEI",
    image: "/capturas_apps/orcafacil.png",
    tech: ["Django", "Node.js", "SQLite"],
  },
  {
    title: "Monica Menezes Store",
    category: "Loja Virtual",
    url: "https://monicamenezes.shop",
    description:
      "Marketplace de produtos para beleza como perfumes e cosméticos",
    image: "/capturas_apps/monicamenezes.png",
    tech: ["Next.js", "Shadcnui", "PostgreSQL", "SEO"],
  },
  {
    title: "DiverGente",
    category: "Mobile App",
    description: "Aplicativo para gestão de de tempo para divergentes",
    image: "/capturas_apps/divergente.png",
    tech: ["React Native"],
  },
  {
    title: "Taynara Thompson",
    category: "Site",
    url: "https://www.taynarathompson.com.br",
    description: "landing page para escritora e palestrante",
    image: "/capturas_apps/taynarathompson.png",
    tech: ["Next.js", "CMS", "SEO"],
  },
  {
    title: "Pós-Instalação do Debian",
    category: "Site",
    url: "https://phaleixo.github.io/after_install_debian_12/index.html",
    description:
      "Site com scripts e tutoriais sobre Debian, facilitando a vida dos usuários",
    image: "/capturas_apps/debian.png",
    tech: ["React", "Node.js", "MySQL"],
  },
  {
    title: "Ecosol autista",
    category: "Site",
    url: "https://www.ecosolautista.com.br",
    description:
      "Site de economia solidaria para que autistas possam vender seus produtos e divulgar seus trabalhos",
    image: "/capturas_apps/ecosol.png",
    tech: ["Next.js", "Shadcnui", "PostgreSQL", "SEO"],
  },
];

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="group cursor-pointer">
    <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <div className="aspect-video relative w-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </a>
      ) : (
        <div className="aspect-video relative w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">{project.category}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
        <p className="text-sm text-gray-700 mt-2 mb-4">{project.description}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* botão 'Ver site' removido — imagem agora é clicável quando `url` existe */}
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
