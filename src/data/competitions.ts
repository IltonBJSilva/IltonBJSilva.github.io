import type { Competition } from '../types';
import cert2025 from '../assets/cert-2025.webp';
import cert2026 from '../assets/cert-2026.webp';

/**
 * Hackathons e competições. Conteúdo baseado nas páginas oficiais do
 * NASA Space Apps, nos READMEs e no histórico de commits.
 * Os PDFs dos certificados ficam em public/certificates/.
 */
export const competitions: Competition[] = [
  {
    id: 'artemis',
    title: 'Artemis Adventure',
    event: 'NASA Space Apps Challenge',
    year: 2026,
    date: { pt: '14–15 nov 2026', en: 'Nov 14–15, 2026', es: '14–15 nov 2026' },
    location: 'Uberlândia, Brasil',
    challenge: 'Build a Junior Astronaut Mission Trainer',
    team: 'Artemis Adventure',
    format: {
      pt: '48 horas · equipe de 6',
      en: '48 hours · team of 6',
      es: '48 horas · equipo de 6',
    },
    summary: {
      pt: 'Jogo educativo para crianças de 7 a 12 anos: o jogador comanda uma base lunar por 5 dias, com só 2 ações por dia para manter energia, oxigênio, comida e saúde. São 15 minijogos com 20 fatos científicos de fontes da NASA e da ESA, e tempestades solares modeladas em eventos reais da base NASA DONKI. Roda direto no navegador.',
      en: 'Educational game for kids aged 7 to 12: the player commands a lunar base for 5 days, with only 2 actions per day to keep energy, oxygen, food and health up. It has 15 minigames with 20 scientific facts sourced from NASA and ESA, and solar storms modeled on real events from the NASA DONKI database. Runs right in the browser.',
      es: 'Juego educativo para niños de 7 a 12 años: el jugador comanda una base lunar durante 5 días, con solo 2 acciones por día para mantener energía, oxígeno, comida y salud. Tiene 15 minijuegos con 20 datos científicos de fuentes de la NASA y la ESA, y tormentas solares basadas en eventos reales de la base NASA DONKI. Funciona directo en el navegador.',
    },
    contributions: {
      pt: [
        'Computador de navegação ARTEMIS-OS com eventos reais de clima espacial da NASA DONKI',
        'Emergência de chuva de meteoros: um módulo é atingido e o jogador tem 20 segundos para acionar a alavanca',
        'Minijogo de equalização e purga criogênica dos tanques de energia',
        'Primeiras versões dos minijogos de blindagem, refeição e distribuição de energia',
      ],
      en: [
        'ARTEMIS-OS navigation computer with real NASA DONKI space weather events',
        'Meteor shower emergency: a module gets hit and the player has 20 seconds to pull the lever',
        'Cryogenic tank equalization and purge minigame',
        'Original versions of the shielding, meal and power balance minigames',
      ],
      es: [
        'Computadora de navegación ARTEMIS-OS con eventos reales de clima espacial de NASA DONKI',
        'Emergencia de lluvia de meteoros: un módulo es alcanzado y el jugador tiene 20 segundos para activar la palanca',
        'Minijuego de ecualización y purga criogénica de los tanques de energía',
        'Primeras versiones de los minijuegos de blindaje, comida y distribución de energía',
      ],
    },
    stack: ['Godot', 'GDScript', 'JSON', 'NASA DONKI', 'NASA API', 'Python (Pillow)', 'Git'],
    links: [
      { kind: 'play', url: 'https://iuryhattori.itch.io/artemis-adventure' },
      { kind: 'video', url: 'https://www.youtube.com/watch?v=gih1q3I8GMc' },
      { kind: 'code', url: 'https://github.com/IltonBJSilva/Artemis-Adventure' },
      { kind: 'official', url: 'https://www.spaceappschallenge.org/2026/find-a-team/artemis-adventure/' },
    ],
    certificate: { image: cert2026, pdf: '/certificates/nasa-space-apps-2026.pdf' },
  },
  {
    id: 'cosmic-windows',
    title: 'Cosmic Windows',
    repoName: 'DeepEyes',
    event: 'NASA Space Apps Challenge',
    year: 2025,
    date: { pt: '4–5 out 2025', en: 'Oct 4–5, 2025', es: '4–5 oct 2025' },
    location: 'Uberlândia, Brasil',
    challenge: 'Embiggen Your Eyes!',
    team: 'Agamotto',
    role: { pt: 'Líder da equipe', en: 'Team lead', es: 'Líder del equipo' },
    format: {
      pt: '48 horas · equipe de 6',
      en: '48 hours · team of 6',
      es: '48 horas · equipo de 6',
    },
    summary: {
      pt: 'Site para qualquer pessoa, não só cientistas, explorar as imagens de altíssima resolução da NASA. Com uma busca simples, o público navega por um acervo enorme que normalmente é difícil de acessar, democratizando o acesso a dados espaciais.',
      en: 'Website that lets anyone, not just scientists, explore NASA\'s ultra-high-resolution imagery. A simple search lets the public navigate a huge dataset that is normally hard to reach, democratizing access to space data.',
      es: 'Sitio para que cualquier persona, no solo científicos, explore las imágenes de altísima resolución de la NASA. Con una búsqueda simple, el público navega por un acervo enorme que normalmente es difícil de acceder, democratizando el acceso a datos espaciales.',
    },
    contributions: {
      pt: [
        'Liderança da equipe Agamotto e início do projeto',
        'Principal autor do código: cerca de 30 dos 44 commits',
        'Backend em Flask consumindo as APIs públicas da NASA, com cache de imagens em Redis',
        'Banco PostgreSQL com PostGIS, testes, carrossel no frontend e deploy',
      ],
      en: [
        'Led team Agamotto and started the project',
        'Main code author: about 30 of 44 commits',
        'Flask backend consuming NASA public APIs, with image caching in Redis',
        'PostgreSQL database with PostGIS, tests, frontend carousel and deployment',
      ],
      es: [
        'Liderazgo del equipo Agamotto e inicio del proyecto',
        'Autor principal del código: unos 30 de 44 commits',
        'Backend en Flask que consume las APIs públicas de la NASA, con caché de imágenes en Redis',
        'Base PostgreSQL con PostGIS, pruebas, carrusel en el frontend y deploy',
      ],
    },
    stack: ['Python', 'Flask', 'PostgreSQL', 'PostGIS', 'Redis', 'NASA API', 'Render', 'Figma'],
    links: [
      { kind: 'video', url: 'https://youtu.be/V0CiyiWyyA8' },
      { kind: 'code', url: 'https://github.com/IltonBJSilva/DeepEyes' },
      { kind: 'official', url: 'https://www.spaceappschallenge.org/2025/find-a-team/agamotto/' },
    ],
    certificate: { image: cert2025, pdf: '/certificates/nasa-space-apps-2025.pdf' },
  },
];
