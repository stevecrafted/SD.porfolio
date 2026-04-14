import { ref } from 'vue'

const SUPPORTED_LOCALES = ['fr', 'en']

function resolveLocale() {
  const urlLocale = new URLSearchParams(window.location.search).get('lang')
  if (SUPPORTED_LOCALES.includes(urlLocale)) {
    return urlLocale
  }

  const storedLocale = window.localStorage.getItem('site-locale')
  if (SUPPORTED_LOCALES.includes(storedLocale)) {
    return storedLocale
  }

  return navigator.language?.toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export const locale = ref(resolveLocale())

export const messages = {
  fr: {
    seo: {
      title: 'Stevens Rakotomalala | Developpeur Fullstack',
      description:
        "Portfolio de Stevens Rakotomalala, developpeur fullstack passionne d'IA. Projets Java, Spring Boot, Vue, React, Node.js, DevOps et Machine Learning.",
      ogLocale: 'fr_FR',
    },
    navbar: {
      cv: 'Voir mon CV',
    },
    hero: {
      line1: 'Developpeur',
      line2: 'Fullstack',
      line3: '& passionne d\'IA',
      subtitle: 'RAKOTOMALALA Stevens · base a Madagascar',
      school: 'IT University',
      contact: 'Me contacter',
      contactAlert: 'Contact : stevens.rakotomalala@gmail.com',
    },
    skills: {
      badge: 'Pourquoi me choisir',
      title: 'Ma liste complete',
      title2: 'de competences',
      summary: 'Java/Spring, React, Node.js, DevOps, IA/Data. Stack propre et evolutif.',
      items: [
        { category: 'Backend', items: 'Java/Spring Boot · Node.js · .NET · Laravel · Python', highlight: false },
        { category: 'Frontend', items: 'React · Vue · Next.js · TS · Tailwind', highlight: false },
        { category: 'DevOps', items: 'Git · Docker · Vercel · Render · Koyeb · Supabase', highlight: false },
        { category: 'Bases de donnees', items: 'PostgreSQL · MySQL · MongoDB', highlight: false },
        { category: 'IA & Data', items: 'OpenAI · Gemini · Scraping · Pandas · Scikit-learn', highlight: true },
        { category: 'Langues', items: 'Malagasy (nat.) · Francais avance · Anglais intermediaire', highlight: false },
      ],
    },
    projects: {
      badge: 'Realisations recentes',
      title: 'Projets',
      links: {
        demo: 'Demo',
      },
      items: [
        {
          title: 'Orienta',
          description: 'Plateforme emploi/formation IA · Next.js / Spring Boot',
          highlight: true,
          links: [
            { url: 'https://github.com/stevecrafted/orienta', label: 'GitHub', icon: 'fab fa-github' },
            { url: 'https://orienta-519a.vercel.app', label: 'Demo', icon: 'fas fa-external-link-alt' },
            {
              url: 'https://devpost.com/software/orienta-6e1cb0?ref_content=user-portfolio&ref_feature=in_progress',
              label: 'Devpost',
              icon: 'fab fa-dev',
            },
          ],
        },
        {
          title: 'Framework Java',
          description: 'Framework Spring-like avec IoC & annotations',
          highlight: false,
          links: [{ url: 'https://github.com/stevecrafted/FRAMEWORK', label: 'GitHub', icon: 'fab fa-github' }],
        },
        {
          title: 'Pong Chess',
          description: 'Jeu C# .NET multi-joueurs en ligne',
          highlight: false,
          links: [{ url: 'https://github.com/stevecrafted/pong_echec', label: 'GitHub', icon: 'fab fa-github' }],
        },
        {
          title: 'Taxi_brousse',
          description: 'API Spring Boot pour reservation de taxi-brousse',
          highlight: false,
          links: [{ url: 'https://github.com/stevecrafted/Taxi_brousse', label: 'GitHub', icon: 'fab fa-github' }],
        },
        {
          title: 'BACK_OFFICE',
          description: 'Java pur + framework personnel',
          highlight: false,
          links: [{ url: 'https://github.com/stevecrafted/BACK_OFFICE', label: 'GitHub', icon: 'fab fa-github' }],
        },
        {
          title: 'Prediction_loyer',
          description: 'ML Python (Flask) pour prediction fonciere',
          highlight: false,
          links: [{ url: 'https://github.com/stevecrafted/Prediction_loyer', label: 'GitHub', icon: 'fab fa-github' }],
        },
      ],
      experiences: [
        {
          event: 'Visaverse AI Hackathon',
          date: '2025 · DevPost',
          description: 'Fullstack TS/Spring Boot · integration OpenAI, Gemini. 95 % de precision.',
        },
        {
          event: 'GreenCraft',
          date: '2024 · DevFest',
          description: 'Solution IA pour economie circulaire · backend et defi environnemental.',
        },
        {
          event: 'Ideathon Axian ESTI',
          date: '2024 · ESTI',
          description: '1re place (20 equipes) · conception projet IA.',
        },
      ],
    },
    certifications: {
      badge: 'Certification',
      title: 'Reconnaissance',
      certTitle: 'Certificat Ingenieur Logiciel',
      owner: 'RAKOTOMALALA Stevens Daniel Fanambinana',
      dateLine: 'Obtenu le 18 fevrier 2026 · ID: 814100395F8B',
      open: 'Voir le certificat',
    },
    footer: {
      education: 'Formation',
      uni1: 'IT University · Licence Informatique',
      uni1date: '2024 - aujourd\'hui',
      uni2: 'ESTI Antanimena · Informatique',
      uni2date: '2023 - 2024',
      languagesHobbies: 'Langues & loisirs',
      lang1: 'Malagasy (langue M.)',
      lang2: 'Francais avance',
      lang3: 'Anglais intermediaire',
      hobbies: 'Jeu video · Football',
      copyright: '© 2026 Stevens RAKOTOMALALA - design minimal & glow vert',
    },
    counter: {
      visits: 'Visites',
    },
  },
  en: {
    seo: {
      title: 'Stevens Rakotomalala | Fullstack Developer',
      description:
        'Portfolio of Stevens Rakotomalala, fullstack developer passionate about AI. Projects in Java, Spring Boot, Vue, React, Node.js, DevOps, and Machine Learning.',
      ogLocale: 'en_US',
    },
    navbar: {
      cv: 'View my Resume',
    },
    hero: {
      line1: 'Fullstack',
      line2: 'Developer',
      line3: '& AI enthusiast',
      subtitle: 'RAKOTOMALALA Stevens · based in Madagascar',
      school: 'IT University',
      contact: 'Contact me',
      contactAlert: 'Contact: stevens.rakotomalala@gmail.com',
    },
    skills: {
      badge: 'Why work with me',
      title: 'My complete',
      title2: 'skill set',
      summary: 'Java/Spring, React, Node.js, DevOps, AI/Data. Clean and scalable stack.',
      items: [
        { category: 'Backend', items: 'Java/Spring Boot · Node.js · .NET · Laravel · Python', highlight: false },
        { category: 'Frontend', items: 'React · Vue · Next.js · TS · Tailwind', highlight: false },
        { category: 'DevOps', items: 'Git · Docker · Vercel · Render · Koyeb · Supabase', highlight: false },
        { category: 'Databases', items: 'PostgreSQL · MySQL · MongoDB', highlight: false },
        { category: 'AI & Data', items: 'OpenAI · Gemini · Scraping · Pandas · Scikit-learn', highlight: true },
        { category: 'Languages', items: 'Malagasy (native) · French advanced · English intermediate', highlight: false },
      ],
    },
    projects: {
      badge: 'Recent work',
      title: 'Projects',
      items: [
        {
          title: 'Orienta',
          description: 'AI platform for jobs and learning · Next.js / Spring Boot',
          highlight: true,
          links: [
            { url: 'https://github.com/stevecrafted/orienta', label: 'GitHub', icon: 'fab fa-github' },
            { url: 'https://orienta-519a.vercel.app', label: 'Live Demo', icon: 'fas fa-external-link-alt' },
            {
              url: 'https://devpost.com/software/orienta-6e1cb0?ref_content=user-portfolio&ref_feature=in_progress',
              label: 'Devpost',
              icon: 'fab fa-dev',
            },
          ],
        },
        {
          title: 'Java Framework',
          description: 'Spring-like framework with IoC and annotations',
          highlight: false,
          links: [{ url: 'https://github.com/stevecrafted/FRAMEWORK', label: 'GitHub', icon: 'fab fa-github' }],
        },
        {
          title: 'Pong Chess',
          description: 'Online multiplayer game in C# .NET',
          highlight: false,
          links: [{ url: 'https://github.com/stevecrafted/pong_echec', label: 'GitHub', icon: 'fab fa-github' }],
        },
        {
          title: 'Taxi_brousse',
          description: 'Spring Boot API for intercity taxi booking',
          highlight: false,
          links: [{ url: 'https://github.com/stevecrafted/Taxi_brousse', label: 'GitHub', icon: 'fab fa-github' }],
        },
        {
          title: 'BACK_OFFICE',
          description: 'Pure Java + custom framework',
          highlight: false,
          links: [{ url: 'https://github.com/stevecrafted/BACK_OFFICE', label: 'GitHub', icon: 'fab fa-github' }],
        },
        {
          title: 'Rent_prediction',
          description: 'Python ML (Flask) for property rent prediction',
          highlight: false,
          links: [{ url: 'https://github.com/stevecrafted/Prediction_loyer', label: 'GitHub', icon: 'fab fa-github' }],
        },
      ],
      experiences: [
        {
          event: 'Visaverse AI Hackathon',
          date: '2025 · DevPost',
          description: 'Fullstack TS/Spring Boot · OpenAI and Gemini integration. 95% accuracy.',
        },
        {
          event: 'GreenCraft',
          date: '2024 · DevFest',
          description: 'AI solution for circular economy · backend and environmental challenge.',
        },
        {
          event: 'Ideathon Axian ESTI',
          date: '2024 · ESTI',
          description: '1st place (20 teams) · AI project design.',
        },
      ],
    },
    certifications: {
      badge: 'Certification',
      title: 'Recognition',
      certTitle: 'Software Engineer Certificate',
      owner: 'RAKOTOMALALA Stevens Daniel Fanambinana',
      dateLine: 'Earned on February 18, 2026 · ID: 814100395F8B',
      open: 'View certificate',
    },
    footer: {
      education: 'Education',
      uni1: 'IT University · Bachelor in Computer Science',
      uni1date: '2024 - present',
      uni2: 'ESTI Antanimena · Computer Science',
      uni2date: '2023 - 2024',
      languagesHobbies: 'Languages & hobbies',
      lang1: 'Malagasy (native language)',
      lang2: 'French advanced',
      lang3: 'English intermediate',
      hobbies: 'Video games · Football',
      copyright: '© 2026 Stevens RAKOTOMALALA - minimal design & green glow',
    },
    counter: {
      visits: 'Visits',
    },
  },
}

function updateHtmlLang(nextLocale) {
  document.documentElement.setAttribute('lang', nextLocale)
}

function updateUrlLocale(nextLocale) {
  const url = new URL(window.location.href)
  url.searchParams.set('lang', nextLocale)
  window.history.replaceState({}, '', url.toString())
}

export function setLocale(nextLocale) {
  if (!SUPPORTED_LOCALES.includes(nextLocale) || nextLocale === locale.value) {
    return
  }

  locale.value = nextLocale
  window.localStorage.setItem('site-locale', nextLocale)
  updateHtmlLang(nextLocale)
  updateUrlLocale(nextLocale)
}

export function initializeLocale() {
  updateHtmlLang(locale.value)
  updateUrlLocale(locale.value)
  window.localStorage.setItem('site-locale', locale.value)
}
