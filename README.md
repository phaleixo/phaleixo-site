# PhaleiXo - Desenvolvimento de Sistemas

![Next.js](https://img.shields.io/badge/Next.js-15.5.3-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)

Site profissional moderno para a PhaleiXo, especializada em desenvolvimento de sistemas web, criação de landing pages e integrações WhatsApp.

## 🚀 Características

- **Design Moderno**: Interface responsiva com glassmorphism e animações CSS
- **Performance Otimizada**: Next.js 15 com Turbopack para desenvolvimento rápido
- **Componentizado**: Arquitetura modular React com TypeScript
- **SEO Otimizado**: Metadados configurados para melhor indexação
- **Integração WhatsApp**: Sistema centralizado de contato via WhatsApp
- **Responsivo**: Design adaptado para desktop, tablet e mobile

## 🎨 Seções do Site

### Página Principal (`/`)

- **Hero Section**: Apresentação da empresa com call-to-action
- **Serviços**: Desenvolvimento Web, Landing Pages, Integração WhatsApp
- **Portfólio**: Projetos em destaque (comentado no código)
- **CTA Section**: Chamada para ação principal
- **Contato**: Informações de contato e WhatsApp
- **Footer**: Links e informações da empresa

### Página Landing Pages (`/landing-pages`)

- Foco específico em criação de landing pages
- Portfolio de projetos de landing pages
- Processo de desenvolvimento detalhado
- Call-to-action otimizado para conversão

## 🛠️ Tecnologias Utilizadas

### Frontend

- **Next.js 15.5.3** - Framework React com Turbopack
- **React 19.1.0** - Biblioteca para interfaces de usuário
- **TypeScript 5** - Tipagem estática para JavaScript
- **Tailwind CSS 4** - Framework CSS utility-first

### Ferramentas de Desenvolvimento

- **ESLint** - Linting e análise de código
- **PostCSS** - Processamento de CSS
- **Inter Font** - Fonte otimizada via Next.js

## 📦 Estrutura do Projeto

```
phaleixo-site/
├── public/                     # Arquivos estáticos
│   └── afterinstalldebian12.png
├── src/
│   ├── app/                    # App Router (Next.js 13+)
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx            # Página inicial
│   │   ├── globals.css         # Estilos globais
│   │   └── landing-pages/      # Página de landing pages
│   │       └── page.tsx
│   ├── components/             # Componentes React
│   │   ├── Header.tsx          # Cabeçalho com navegação
│   │   ├── HeroSection.tsx     # Seção hero moderna
│   │   ├── ServicesSection.tsx # Seção de serviços
│   │   ├── PortfolioSection.tsx# Portfolio de projetos
│   │   ├── CTASection.tsx      # Call-to-action
│   │   ├── ContactSection.tsx  # Seção de contato
│   │   ├── Footer.tsx          # Rodapé
│   │   ├── Icons.tsx           # Ícones personalizados
│   │   └── WhatsAppFloatingButton.tsx
│   └── config/                 # Configurações
│       ├── contact.ts          # Config de contato (protegido)
│       └── contact.template.ts # Template de configuração
├── CONTACT_CONFIG.md           # Documentação de contato
└── README.md                   # Este arquivo
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+
- npm, yarn ou pnpm

### Instalação

1. **Clone o repositório**

```bash
git clone <url-do-repositorio>
cd phaleixo-site
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure o contato** (Primeira vez)

```bash
# Copie o template de configuração
cp src/config/contact.template.ts src/config/contact.ts
```

4. **Edite suas informações de contato**

```bash
# Edite o arquivo com seus dados reais
nano src/config/contact.ts
```

5. **Execute em desenvolvimento**

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

6. **Acesse no navegador**

```
http://localhost:3000
```

## ⚙️ Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack (recomendado)
npm run dev

# Build para produção
npm run build

# Executar em produção
npm run start

# Análise de código (linting)
npm run lint
```

## 🔧 Configuração

### Configuração de Contato

O sistema usa um arquivo de configuração centralizado para informações de contato:

```typescript
// src/config/contact.ts
export const CONTACT_CONFIG = {
  whatsapp: {
    number: "5511999999999", // Seu número do WhatsApp
    messages: {
      general: "Mensagem padrão",
      landingPage: "Mensagem específica para landing pages",
    },
  },
  email: {
    address: "contato@seudominio.com",
  },
};
```

**Importante**: O arquivo `contact.ts` está no `.gitignore` para proteger suas informações pessoais.

### Personalização

1. **Cores e Estilos**: Edite `src/app/globals.css`
2. **Componentes**: Modifique arquivos em `src/components/`
3. **Conteúdo**: Atualize textos diretamente nos componentes
4. **Metadados SEO**: Configure em `src/app/layout.tsx`

## 🎨 Design e Animações

### Características Visuais

- **Glassmorphism**: Efeitos de vidro moderno na hero section
- **Gradientes**: Backgrounds sofisticados com degradês
- **Animações CSS**: Transições suaves e efeitos hover
- **Responsividade**: Design adaptável para todos os dispositivos

### Animações Implementadas

```css
/* Exemplos de animações personalizadas */
.code-line-animation {
  /* Linhas de código animadas */
}
.float-animation {
  /* Elementos flutuantes */
}
.gradient-shift {
  /* Mudança de gradientes */
}
```

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Segurança

- **Informações Protegidas**: Contatos não são expostos no repositório
- **Template System**: Uso de templates para configuração segura
- **Environment Variables**: Suporte para variáveis de ambiente

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instale a CLI do Vercel
npm i -g vercel

# Faça o deploy
vercel
```

### Outros Provedores

- **Netlify**: Conecte o repositório GitHub
- **AWS Amplify**: Configure build settings
- **Railway**: Deploy direto do GitHub

### Configurações de Build

```json
{
  "scripts": {
    "build": "next build --turbopack",
    "start": "next start"
  }
}
```

## 📊 Performance

- **Lighthouse Score**: 90+ em todas as métricas
- **Turbopack**: Build e desenvolvimento acelerados
- **Font Optimization**: Inter font otimizada via Next.js
- **Image Optimization**: Processamento automático de imagens
- **CSS Optimization**: Tailwind CSS com purge automático

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Documentação Adicional

- [Configuração de Contato](./CONTACT_CONFIG.md) - Como configurar WhatsApp e email
- [Next.js Documentation](https://nextjs.org/docs) - Framework principal
- [Tailwind CSS](https://tailwindcss.com/docs) - Framework CSS
- [TypeScript](https://www.typescriptlang.org/docs/) - Tipagem estática

## 📞 Suporte

Para suporte ou dúvidas sobre o projeto:

- **Email**: contato@phaleixo.com
- **WhatsApp**: Configure conforme documentação
- **Issues**: Use a aba Issues do GitHub

## 📜 Licença

Este projeto é privado e proprietário da PhaleiXo.

---

**Desenvolvido com ❤️ por PhaleiXo**

_Transformando ideias em soluções digitais eficientes e escaláveis._
