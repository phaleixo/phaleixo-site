# 🚀 PHALEIXO - Site Corporativo

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)

Site corporativo moderno da **PHALEIXO - Soluções Digitais**, especializada em desenvolvimento de sistemas web, landing pages profissionais, integrações WhatsApp e manutenção de computadores.

## 📋 Índice

- [🎯 Visão Geral](#-visão-geral)
- [🌟 Características](#-características)
- [📱 Páginas e Funcionalidades](#-páginas-e-funcionalidades)
- [🛠️ Tecnologias](#️-tecnologias)
- [📦 Estrutura do Projeto](#-estrutura-do-projeto)
- [🚀 Instalação e Execução](#-instalação-e-execução)
- [⚙️ Configuração](#️-configuração)
- [🎨 Design e UI/UX](#-design-e-uiux)
- [📱 Responsividade](#-responsividade)
- [🔧 Desenvolvimento](#-desenvolvimento)
- [🚀 Deploy](#-deploy)
- [📊 Performance](#-performance)
- [🔒 Segurança](#-segurança)

## 🎯 Visão Geral

Site corporativo desenvolvido em **Next.js 15** com **React 19** e **TypeScript**, focado em:

- **Desenvolvimento de Sistemas Web**
- **Criação de Landing Pages**
- **Integrações WhatsApp Business**
- **Manutenção de Computadores**
- **Soluções Digitais Corporativas**

## 🌟 Características

### ✨ Design Moderno

- **Glassmorphism Effects** - Efeitos de vidro modernos
- **Gradientes Sofisticados** - Backgrounds com degradês
- **Animações CSS Avançadas** - Transições suaves e micro-interações
- **Interface Limpa** - Design minimalista e profissional

### 🚀 Performance

- **Next.js 15 + Turbopack** - Build ultrarrápido
- **React 19** - Última versão com recursos avançados
- **TypeScript 5** - Tipagem completa para melhor DX
- **Tailwind CSS 4** - CSS otimizado e purged

### 📱 User Experience

- **Totalmente Responsivo** - Mobile-first design
- **Navegação Intuitiva** - UX otimizada para conversão
- **Loading Otimizado** - Performance superior
- **SEO Friendly** - Metadados e estrutura otimizada

### 💬 Integração WhatsApp

- **Sistema Centralizado** - Configuração única para todos os contatos
- **Botão Flutuante** - Acesso rápido em todas as páginas
- **Mensagens Contextuais** - Diferentes mensagens por seção
- **Design Consistente** - Animação bounce e cores oficiais

## 📱 Páginas e Funcionalidades

### 🏠 Página Principal (`/`)

- **Hero Section** - Apresentação da empresa com CTA
- **Serviços** - Cards detalhados dos serviços oferecidos
- **Portfolio** - Projetos em destaque (disponível mas comentado)
- **CTA Section** - Chamada para ação principal
- **Contato** - Informações de contato e WhatsApp
- **Footer** - Links e informações da empresa

### 🎨 Landing Pages (`/landing-pages`)

- **Menu Flutuante** - Navegação centralizada moderna
- **Hero Section** - Foco em criação de landing pages
- **Recursos** - Features e vantagens competitivas
- **Sobre** - Apresentação da metodologia
- **Preços** - Planos e valores transparentes
- **Testimonials** - Depoimentos de clientes (cabeleireiro, manicure, psicóloga)
- **FAQ** - Perguntas frequentes
- **CTA Final** - Conversão otimizada

### 💻 Manutenção de Computadores (`/manutencao-computadores`)

- **Design Glassmorphism** - Tema roxo/azul moderno
- **Hero Section** - Apresentação dos serviços técnicos
- **Problemas Comuns** - Cards dos principais problemas
- **Serviços** - Limpeza, antivírus, formatação, diagnóstico
- **CTA** - "Chama no Zap!" com design impactante
- **Totalmente Responsivo** - Otimizado para mobile

## 🛠️ Tecnologias

### Frontend Core

```json
{
  "next": "15.5.3", // Framework React com App Router
  "react": "19.1.0", // Biblioteca UI com recursos mais recentes
  "react-dom": "19.1.0", // Renderização DOM
  "typescript": "^5" // Tipagem estática
}
```

### Styling e UI

```json
{
  "tailwindcss": "^4", // Framework CSS utility-first
  "@tailwindcss/postcss": "^4", // Processamento CSS
  "postcss": "automático" // Post-processamento CSS
}
```

### Development Tools

```json
{
  "@types/node": "^20", // Tipos Node.js
  "@types/react": "^19", // Tipos React
  "@types/react-dom": "^19", // Tipos React DOM
  "eslint": "^9", // Linting
  "eslint-config-next": "15.5.3" // Config ESLint Next.js
}
```

### Recursos Especiais

- **Turbopack** - Bundler ultrarrápido
- **App Router** - Sistema de roteamento moderno do Next.js
- **Server Components** - Renderização otimizada
- **Image Optimization** - Otimização automática de imagens
- **Font Optimization** - Carregamento otimizado de fontes

## 📦 Estrutura do Projeto

```
phaleixo-site/
├── 📁 public/                          # Assets estáticos
│   └── 🖼️ phaleixo-solucoesdigitais.svg # Logo principal SVG
│
├── 📁 src/
│   ├── 📁 app/                         # App Router (Next.js 15)
│   │   ├── 📄 layout.tsx               # Layout global da aplicação
│   │   ├── 📄 page.tsx                 # Página principal (Home)
│   │   ├── 📄 globals.css              # Estilos globais Tailwind
│   │   ├── 🖼️ favicon.ico             # Ícone do site
│   │   │
│   │   ├── 📁 landing-pages/           # Seção Landing Pages
│   │   │   └── 📄 page.tsx             # Página de landing pages
│   │   │
│   │   └── 📁 manutencao-computadores/ # Seção Manutenção
│   │       └── 📄 page.tsx             # Página de manutenção
│   │
│   ├── 📁 components/                  # Componentes React
│   │   ├── 🧩 Header.tsx               # Cabeçalho com navegação
│   │   ├── 🧩 HeroSection.tsx          # Seção hero principal
│   │   ├── 🧩 ServicesSection.tsx      # Grid de serviços
│   │   ├── 🧩 PortfolioSection.tsx     # Portfolio de projetos
│   │   ├── 🧩 CTASection.tsx           # Call-to-action principal
│   │   ├── 🧩 ContactSection.tsx       # Seção de contato
│   │   ├── 🧩 Footer.tsx               # Rodapé com logo
│   │   ├── 🧩 Icons.tsx                # Biblioteca de ícones SVG
│   │   └── 🧩 WhatsAppFloatingButton.tsx # Botão flutuante WhatsApp
│   │
│   └── 📁 config/                      # Configurações
│       ├── ⚙️ contact.ts               # Configuração de contato (sensível)
│       └── 📋 contact.template.ts      # Template de configuração
│
├── 📄 CONTACT_CONFIG.md                # Documentação de configuração
├── 📄 README.md                        # Esta documentação
├── 📄 package.json                     # Dependências e scripts
├── 📄 tsconfig.json                    # Configuração TypeScript
├── 📄 tailwind.config.ts               # Configuração Tailwind CSS
├── 📄 next.config.ts                   # Configuração Next.js
├── 📄 postcss.config.mjs               # Configuração PostCSS
└── 📄 eslint.config.mjs                # Configuração ESLint
```

## 🚀 Instalação e Execução

### Pré-requisitos

- **Node.js** 18.17 ou superior
- **npm**, **yarn** ou **pnpm**
- **Git** para versionamento

### 1️⃣ Clone o Repositório

```bash
git clone https://github.com/phaleixo/phaleixo-site.git
cd phaleixo-site
```

### 2️⃣ Instale as Dependências

```bash
# NPM
npm install

# Yarn
yarn install

# PNPM (recomendado)
pnpm install
```

### 3️⃣ Configure o Contato (Primeira Execução)

```bash
# Copie o template
cp src/config/contact.template.ts src/config/contact.ts

# Edite com seus dados reais
nano src/config/contact.ts
```

### 4️⃣ Execute em Desenvolvimento

```bash
# NPM
npm run dev

# Yarn
yarn dev

# PNPM
pnpm dev
```

### 5️⃣ Acesse o Site

```
🌐 http://localhost:3000
```

### 6️⃣ Build para Produção

```bash
# Build
npm run build

# Execute em produção
npm run start
```

## ⚙️ Configuração

### 📞 Configuração de Contato

Edite `src/config/contact.ts` com suas informações:

```typescript
export const CONTACT_CONFIG = {
  whatsapp: {
    number: "5511999999999", // Seu número com código do país
    messages: {
      general: "Olá! Gostaria de saber mais sobre os serviços da PHALEIXO.",
      landingPage: "Olá! Tenho interesse em uma landing page profissional.",
      maintenance: "Olá! Preciso de manutenção no meu computador.",
    },
  },
  email: {
    address: "contato@phaleixo.com",
    subject: "Contato via Site",
  },
};

export function createWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${CONTACT_CONFIG.whatsapp.number}`;
  const text = encodeURIComponent(
    message || CONTACT_CONFIG.whatsapp.messages.general
  );
  return `${baseUrl}?text=${text}`;
}
```

### 🎨 Personalização de Estilos

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Suas customizações aqui */
.custom-gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### 🔧 Configuração Next.js

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configurações específicas do projeto
  images: {
    domains: ["localhost"],
  },
  experimental: {
    turbopack: true,
  },
};

export default nextConfig;
```

## 🎨 Design e UI/UX

### 🌈 Paleta de Cores

```css
/* Cores Principais */
--primary-blue: #3B82F6     /* Azul principal */
--primary-purple: #8B5CF6   /* Roxo principal */
--primary-green: #10B981    /* Verde WhatsApp */

/* Cores Neutras */
--gray-50: #F9FAFB         /* Background claro */
--gray-900: #111827        /* Texto escuro */
--white: #FFFFFF           /* Branco puro */
```

### ✨ Efeitos Visuais

#### Glassmorphism

```css
.glassmorphism {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
}
```

#### Gradientes

```css
.gradient-primary {
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
}

.gradient-glass {
  background: linear-gradient(
    145deg,
    rgba(59, 130, 246, 0.1) 0%,
    rgba(139, 92, 246, 0.1) 100%
  );
}
```

#### Animações

```css
@keyframes bounce {
  0%,
  20%,
  53%,
  80%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  40%,
  43% {
    transform: translate3d(0, -8px, 0);
  }
  70% {
    transform: translate3d(0, -4px, 0);
  }
  90% {
    transform: translate3d(0, -2px, 0);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}
```

### 📐 Layout e Espaçamento

- **Container Max Width**: `max-w-7xl` (1280px)
- **Padding Horizontal**: `px-4 sm:px-6 lg:px-8`
- **Padding Vertical**: `py-20` para seções principais
- **Grid**: Sistema responsivo com breakpoints

## 📱 Responsividade

### 📏 Breakpoints

```css
/* Mobile First Approach */
/* xs: 0px - 640px */    Mobile
/* sm: 640px - 768px */  Mobile Large
/* md: 768px - 1024px */ Tablet
/* lg: 1024px - 1280px */ Desktop
/* xl: 1280px+ */        Desktop Large
```

### 📱 Componentes Responsivos

#### Header

```typescript
// Desktop: Menu horizontal
// Mobile: Menu hamburger

<nav className="hidden md:flex space-x-8">
  {/* Desktop Navigation */}
</nav>

<button className="md:hidden">
  {/* Mobile Menu Button */}
</button>
```

#### Grid de Serviços

```typescript
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* 1 coluna mobile, 2 tablet, 3 desktop */}
</div>
```

#### Tipografia Responsiva

```typescript
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  {/* Escala progressiva de texto */}
</h1>
```

## 🔧 Desenvolvimento

### 📝 Scripts Disponíveis

```json
{
  "dev": "next dev --turbopack", // Desenvolvimento com Turbopack
  "build": "next build --turbopack", // Build otimizado
  "start": "next start", // Servidor de produção
  "lint": "eslint" // Análise de código
}
```

### 🧪 Comandos Úteis

```bash
# Desenvolvimento com Turbopack (mais rápido)
npm run dev

# Análise de código
npm run lint

# Build e teste local
npm run build && npm run start

# Limpeza de cache
rm -rf .next node_modules
npm install
```

### 🔍 Debugging

```typescript
// Console debugging
console.log("Debug info:", data);

// Network debugging
// DevTools > Network > Disable Cache

// Performance debugging
// DevTools > Lighthouse > Generate Report
```

### 📊 Análise de Bundle

```bash
# Instalar analisador
npm install --save-dev @next/bundle-analyzer

# Analisar bundle
ANALYZE=true npm run build
```

## 🚀 Deploy

### ☁️ Vercel (Recomendado)

```bash
# Instalar CLI
npm i -g vercel

# Deploy
vercel

# Deploy em produção
vercel --prod
```

**Configurações automáticas:**

- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### 🌐 Netlify

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "18"
```

### ☁️ AWS Amplify

```yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - "**/*"
```

### 🐳 Docker

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 📊 Performance

### ⚡ Métricas Lighthouse

- **Performance**: 95+ pontos
- **Accessibility**: 100 pontos
- **Best Practices**: 95+ pontos
- **SEO**: 100 pontos

### 🚀 Otimizações Implementadas

#### Next.js Features

- **App Router** - Roteamento moderno
- **Server Components** - Renderização otimizada
- **Image Optimization** - Imagens automáticas
- **Font Optimization** - Fontes otimizadas

#### Tailwind CSS

- **Purge CSS** - Remoção automática de CSS não usado
- **JIT Mode** - Compilação just-in-time
- **Critical CSS** - CSS crítico inline

#### Bundle Optimization

- **Tree Shaking** - Remoção de código não usado
- **Code Splitting** - Divisão automática de código
- **Lazy Loading** - Carregamento sob demanda

### 📈 Web Vitals

```typescript
// Monitoramento de performance
export function reportWebVitals(metric: any) {
  switch (metric.name) {
    case "CLS":
    case "FID":
    case "FCP":
    case "LCP":
    case "TTFB":
      console.log(metric);
      break;
    default:
      break;
  }
}
```

## 🔒 Segurança

### 🛡️ Dados Sensíveis

```bash
# Arquivo protegido (não commitado)
src/config/contact.ts

# Template público
src/config/contact.template.ts
```

### 🔐 Headers de Segurança

```typescript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};
```

### 🚫 .gitignore

```gitignore
# Dependências
node_modules/
.pnp
.pnp.js

# Builds
.next/
out/
build/

# Configurações sensíveis
src/config/contact.ts

# Logs
*.log

# Ambiente
.env*
```

## 📋 Checklist de Deploy

### ✅ Antes do Deploy

- [ ] Configurar `contact.ts` com dados reais
- [ ] Testar todos os formulários de contato
- [ ] Verificar responsividade em todos os dispositivos
- [ ] Executar `npm run build` sem erros
- [ ] Testar performance com Lighthouse
- [ ] Verificar SEO e metadados
- [ ] Validar todas as integrações WhatsApp

### ✅ Pós Deploy

- [ ] Verificar todas as páginas em produção
- [ ] Testar botões WhatsApp
- [ ] Validar formulários de contato
- [ ] Verificar performance em produção
- [ ] Configurar domínio personalizado
- [ ] Adicionar SSL/TLS
- [ ] Configurar redirects se necessário

## 📞 Suporte e Contato

### 🛠️ Suporte Técnico

- **Desenvolvedor**: Paulo (PHALEIXO)
- **Email**: paulo@phaleixo.com
- **WhatsApp**: +55 11 99999-9999

### 📚 Recursos e Documentação

- [**Next.js 15 Docs**](https://nextjs.org/docs) - Framework principal
- [**React 19 Docs**](https://react.dev/) - Biblioteca UI
- [**Tailwind CSS**](https://tailwindcss.com/docs) - Framework CSS
- [**TypeScript**](https://www.typescriptlang.org/docs/) - Tipagem

### 🐛 Reportar Issues

Crie uma issue detalhada incluindo:

- Descrição do problema
- Passos para reproduzir
- Screenshots se aplicável
- Informações do ambiente

---

## 📝 Changelog

### v1.0.0 (2025-01-14)

- ✨ Site principal com hero section glassmorphism
- 🎨 Página de landing pages com menu flutuante
- 💻 Página de manutenção de computadores
- 📱 Sistema de WhatsApp integrado
- 🔧 Arquitetura componentizada
- 📊 Performance otimizada
- 🎯 Design responsivo completo

---

## 📜 Licença

Este projeto é **privado e proprietário** da PHALEIXO - Soluções Digitais.

Todos os direitos reservados © 2025 PHALEIXO.

---

<div align="center">

**🚀 Desenvolvido com ❤️ por PHALEIXO**

_Transformando ideias em soluções digitais eficientes e escaláveis_

</div>
