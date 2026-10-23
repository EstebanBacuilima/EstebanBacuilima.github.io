import type { Locale } from '../i18n/utils';

export const site = {
  name: 'Esteban David Bacuilima Pérez',
  shortName: 'Esteban Bacuilima',
  url: 'https://estebanbacuilima.github.io',
  email: 'davidbacuilima13@gmail.com',
  github: 'https://github.com/EstebanBacuilima',
  linkedin: 'https://www.linkedin.com/in/esteban-david-bacuilima-perez-bb3a06256',
  // International format without '+', spaces or dashes.
  whatsappNumber: '593958807968',
  /**
   * Public path of the CV. Stays null until the real PDF exists in `public/cv/`
   * (e.g. '/cv/Esteban-Bacuilima-CV.pdf'); while null, no download button renders.
   */
  cvPath: null as string | null,
};

export const whatsappUrl = (message: string): string =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const mailtoUrl = `mailto:${site.email}`;

export type { Locale };
