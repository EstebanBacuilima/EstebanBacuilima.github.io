export const es = {
  lang: 'es',
  htmlLang: 'es-EC',
  meta: {
    title: 'Esteban Bacuilima — Desarrollador de software',
    description:
      'Portafolio de Esteban David Bacuilima Pérez: desarrollador de software full-stack. Creador de DomifyPOS y DomifyTool, productos SaaS para negocios y talleres.',
  },
  a11y: {
    skip: 'Saltar al contenido',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    nav: 'Navegación principal',
    footerNav: 'Navegación secundaria',
    lang: 'Cambiar idioma',
    whatsapp: 'Escribir por WhatsApp',
    terminalCaption: 'Terminal ilustrativa, no ejecuta comandos reales',
    gallery: 'Capturas de pantalla',
  },
  nav: {
    projects: 'Proyectos',
    stack: 'Stack',
    educational: 'Académicos',
    about: 'Sobre mí',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    role: 'Desarrollador de software full-stack',
    intro:
      'Desarrollador de software especializado en .NET, C# y Angular, con experiencia en APIs, microservicios e integraciones. Creo productos SaaS de principio a fin, desde el diseño del backend hasta el despliegue en producción.',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactar',
    ctaCv: 'Descargar CV',
    specialties: ['Angular', '.NET', 'PostgreSQL', 'Flutter'],
    avatarAlt:
      'Ilustración 3D de Esteban saludando, con una sudadera con el símbolo de código y una tablet bajo el brazo',
    terminal: {
      whoami: 'esteban-bacuilima · software developer',
      stackCmd: 'cat stack.txt',
      stack: 'Angular · Flutter · .NET · PostgreSQL ',
      projectsCmd: 'ls projects/',
      projects: 'domify-pos/  domify-tool/',
    },
  },
  projects: {
    title: 'Productos SaaS',
    subtitle:
      'Dos productos propios, en uso real, pensados para que una empresa o pequeños negocios administren varios locales o talleres desde una sola cuenta.',
    features: 'Funcionalidades',
    stack: 'Tecnologías',
    demo: 'Solicitar demo por WhatsApp',
    flow: 'Estados de una orden',
  },
  stack: {
    title: 'Stack tecnológico',
    subtitle: 'Tecnologías que uso en mis proyectos y otras que conozco.',
    legendCore: 'Las que más uso',
    legendFamiliar: 'Las he usado menos, pero las conozco',
  },
  educational: {
    title: 'Proyectos académicos',
    subtitle: 'Proyectos de cuando estudiaba. Muestran de dónde vengo, no mi trabajo actual.',
  },
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Desarrollador de software con más de 3 años de experiencia en desarrollo backend y frontend, especializado en C#/.NET, Angular y PostgreSQL, con experiencia adicional en Flutter. He participado en el desarrollo de aplicaciones empresariales, microservicios, integraciones con servicios externos y funcionalidades transaccionales.',
      'También desarrollo productos de software propios orientados a digitalizar procesos de negocio, desde la implementación hasta el despliegue en infraestructura cloud.',
    ],
  },
  contact: {
    title: 'Contacto',
    subtitle: '¿Tienes una oferta o quieres ver una demo de DomifyPOS o DomifyTool? Escríbeme.',
    email: 'Correo',
    whatsapp: 'WhatsApp',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    whatsappMessage: 'Hola Esteban, vi tu portafolio y me gustaría conversar.',
  },
  footer: {
    rights: 'Esteban David Bacuilima Pérez',
    built: 'Hecho con Astro y Tailwind CSS',
    top: 'Volver arriba',
  },
};

export type Dict = typeof es;
