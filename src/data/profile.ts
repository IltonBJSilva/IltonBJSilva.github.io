import type { Lang } from '../types';
import cvPt from '../docs/Programador - CV - Curriculo.pdf';
import cvEn from '../docs/Inglês - Programador - CV - Ilton - Curriculo.pdf';
import cvEs from '../docs/Espanhol_Curriculo_Ilton.pdf';

/** Dados que não mudam com o idioma. */
export const profile = {
  name: 'Ilton Batista',
  email: 'iltonbatista2018@gmail.com',
  github: 'https://github.com/IltonBJSilva',
  linkedin: 'https://www.linkedin.com/in/iltonbsilva/',
  repositories: 'https://github.com/IltonBJSilva?tab=repositories',
};

export const cv: Record<Lang, { url: string; fileName: string }> = {
  pt: { url: cvPt, fileName: 'Ilton-Batista-Curriculo.pdf' },
  en: { url: cvEn, fileName: 'Ilton-Batista-Resume.pdf' },
  es: { url: cvEs, fileName: 'Ilton-Batista-Curriculum.pdf' },
};
