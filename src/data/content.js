const pt = {
  SITE: {
    name: 'A01 Agency',
    tagline: 'Agência de desenvolvimento web',
    location: 'Curitiba, Brasil',
    whatsappNumber: '5541985060538',
    social: {
      instagram: 'https://instagram.com/a01agency',
     
    },
  },
  HEADER: {
    socialAria: 'Redes sociais',
    languageToggleAria: 'Trocar idioma para inglês',
  },
  HERO: {
    headline: 'SITES FEITOS PARA CONVERTER, NÃO SÓ PARA EXISTIR.',
    scrollHint: 'Role para ver',
  },
  ABOUT: {
    eyebrow: 'Sobre',
    paragraphs: [
      'Focados em transformar ideias em experiências digitais que carregam identidade, performance e propósito.',
      'Unimos direção de arte com engenharia front-end de verdade, entregando sites rápidos, responsivos e feitos pra durar.',
      'Do primeiro wireframe ao deploy em produção. Cada projeto recebe a mesma obsessão por detalhe.',
    ],
    cta: 'Vamos trabalhar juntos',
  },
  PROJECTS: {
    title: 'Projetos selecionados',
    range: '(2023 — 2026)',
    categories: [
      { label: 'Clientes', sublabel: 'Comercial' },
      { label: 'Projetos autorais', sublabel: 'Explorações' },
    ],
  },
  SERVICES: {
    eyebrow: 'Serviços',
    description:
      'Uma abordagem focada em design de interface, desenvolvimento front-end e presença digital para marcas e negócios que levam o online a sério.',
    list: [
      'Design de Interface (UI)',
      'Direção de Arte',
      'Desenvolvimento Front-end',
      'Experiências Digitais',
      'Landing Pages de Alta Conversão',
      'Sistemas de Design',
    ],
  },
  CONTACT: {
    eyebrow: '/contact',
    fields: {
      name: { label: 'Nome completo', placeholder: 'Digite seu nome completo' },
      email: { label: 'E-mail', placeholder: 'Digite seu e-mail' },
      phone: { label: 'Telefone (opcional)', placeholder: 'Digite seu telefone' },
      message: { label: 'Mensagem', placeholder: 'Como podemos ajudar?' },
    },
    submit: 'Enviar',
    submitting: 'Enviando…',
    success: 'Mensagem enviada. Retornamos em breve.',
    error: 'Não foi possível enviar agora. Tenta de novo ou chama no WhatsApp.',
    terms: 'Ao enviar, você concorda com os Termos e Condições.',
    validation: {
      name: 'Digite seu nome.',
      email: 'Digite seu e-mail.',
      invalidEmail: 'E-mail inválido.',
      message: 'Escreva sua mensagem.',
    },
  },
}

const en = {
  SITE: {
    name: 'A01 Agency',
    tagline: 'Web development agency',
    location: 'Curitiba, Brazil',
    whatsappNumber: '5541985060538',
    social: {
      instagram: 'https://instagram.com/',
      linkedin: 'https://linkedin.com/',
    },
  },
  HEADER: {
    socialAria: 'Social media',
    languageToggleAria: 'Switch language to Portuguese',
  },
  HERO: {
    headline: 'WEBS BUILT TO CONVERT, NOT JUST TO EXIST.',
    scrollHint: 'Scroll to explore',
  },
  ABOUT: {
    eyebrow: 'About',
    paragraphs: [
      'Focused on turning ideas into digital experiences with identity, performance, and purpose.',
      'We combine art direction with real front-end engineering to deliver fast, responsive sites built to last.',
      'From the first wireframe to production deployment. Every project gets the same obsession with detail.',
    ],
    cta: 'Let’s work together',
  },
  PROJECTS: {
    title: 'Selected projects',
    range: '(2023 — 2026)',
    categories: [
      { label: 'Clients', sublabel: 'Commercial' },
      { label: 'Author projects', sublabel: 'Explorations' },
    ],
  },
  SERVICES: {
    eyebrow: 'Services',
    description:
      'An approach focused on interface design, front-end development, and digital presence for brands and businesses that take the online experience seriously.',
    list: [
      'Interface Design (UI)',
      'Art Direction',
      'Front-end Development',
      'Digital Experiences',
      'High-Conversion Landing Pages',
      'Design Systems',
    ],
  },
  CONTACT: {
    eyebrow: '/contact',
    fields: {
      name: { label: 'Full name', placeholder: 'Enter your full name' },
      email: { label: 'E-mail', placeholder: 'Enter your e-mail' },
      phone: { label: 'Phone (optional)', placeholder: 'Enter your phone number' },
      message: { label: 'Message', placeholder: 'How can we help?' },
    },
    submit: 'Send',
    submitting: 'Sending…',
    success: 'Message sent. We will get back to you soon.',
    error: 'We could not send it right now. Please try again or send a WhatsApp message.',
    terms: 'By sending, you agree to the Terms and Conditions.',
    validation: {
      name: 'Please enter your name.',
      email: 'Please enter your e-mail.',
      invalidEmail: 'Invalid e-mail.',
      message: 'Please write your message.',
    },
  },
}

export const CONTENT = { pt, en }
export const SITE = pt.SITE
export const HERO = pt.HERO
export const ABOUT = pt.ABOUT
export const PROJECTS = pt.PROJECTS
export const SERVICES = pt.SERVICES
export const CONTACT = pt.CONTACT
