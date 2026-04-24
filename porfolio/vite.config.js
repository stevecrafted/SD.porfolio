import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import prerenderStatic from 'vite-plugin-prerender-static'

const siteUrl = 'https://sd-porfolio.vercel.app'

const projectPages = [
  {
    path: 'projects/orienta',
    title: 'Orienta Project | AI Jobs and Learning Platform',
    description:
      'Orienta is an AI-powered platform for jobs and learning, built with Next.js and Spring Boot.',
    heading: 'Orienta',
    stack: 'Next.js, Spring Boot, OpenAI, Gemini',
    body: 'Built during the Visaverse AI Hackathon to help users discover career opportunities and learning paths with AI assistance.',
    repo: 'https://github.com/stevecrafted/orienta',
    demo: 'https://orienta-519a.vercel.app',
  },
  {
    path: 'projects/java-framework',
    title: 'Java Framework Project | IoC and Annotations',
    description:
      'A custom Java framework inspired by Spring with IoC container and annotation-based configuration.',
    heading: 'Java Framework',
    stack: 'Java, IoC, Annotations',
    body: 'A personal framework project focused on dependency injection and clean architecture patterns.',
    repo: 'https://github.com/stevecrafted/FRAMEWORK',
  },
  {
    path: 'projects/pong-chess',
    title: 'Pong Chess Project | Online Multiplayer C# Game',
    description: 'An online multiplayer game developed in C# .NET.',
    heading: 'Pong Chess',
    stack: 'C#, .NET',
    body: 'A game development project focused on real-time interactions and multiplayer gameplay.',
    repo: 'https://github.com/stevecrafted/pong_echec',
  },
  {
    path: 'projects/taxi-brousse',
    title: 'Taxi Brousse Project | Spring Boot Booking API',
    description: 'A Spring Boot API for intercity taxi booking.',
    heading: 'Taxi_brousse',
    stack: 'Java, Spring Boot, REST API',
    body: 'A backend API project for booking and managing taxi-brousse trips.',
    repo: 'https://github.com/stevecrafted/Taxi_brousse',
  },
  {
    path: 'projects/back-office',
    title: 'Back Office Project | Pure Java and Custom Framework',
    description: 'A back office application built in pure Java with a custom framework.',
    heading: 'BACK_OFFICE',
    stack: 'Java',
    body: 'A Java project emphasizing maintainability and practical architecture.',
    repo: 'https://github.com/stevecrafted/BACK_OFFICE',
  },
  {
    path: 'projects/rent-prediction',
    title: 'Rent Prediction Project | Python ML Flask App',
    description: 'A machine learning project in Python (Flask) for property rent prediction.',
    heading: 'Rent_prediction',
    stack: 'Python, Flask, Machine Learning',
    body: 'An end-to-end ML project for real estate rent prediction and practical data analysis.',
    repo: 'https://github.com/stevecrafted/Prediction_loyer',
  },
]

const homeRoute = {
  path: '/',
  tags: {
    title: 'Rakotomalala Stevens Daniel Fanambinana | Fullstack Developer Portfolio',
    description:
      'Fullstack developer portfolio featuring Java, Spring Boot, Vue, React, Node.js, DevOps and AI projects.',
    author: 'Rakotomalala Stevens Daniel Fanambinana',
    url: `${siteUrl}/`,
    canonical: `${siteUrl}/`,
    robots: 'index, follow',
    keywords:
      'fullstack developer portfolio, java developer portfolio, spring boot, vue, react, node.js, madagascar developer',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Rakotomalala Stevens Portfolio',
      url: `${siteUrl}/`,
      inLanguage: 'en',
      author: {
        '@type': 'Person',
        name: 'Rakotomalala Stevens Daniel Fanambinana',
      },
    },
  },
}

const projectRoutes = projectPages.map((project) => ({
  path: project.path,
  tags: {
    title: project.title,
    description: project.description,
    author: 'Rakotomalala Stevens Daniel Fanambinana',
    url: `${siteUrl}/${project.path}`,
    canonical: `${siteUrl}/${project.path}`,
    robots: 'index, follow',
    keywords: `project case study, ${project.heading.toLowerCase()}, fullstack developer portfolio`,
    schema: {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.heading,
      url: `${siteUrl}/${project.path}`,
      creator: {
        '@type': 'Person',
        name: 'Rakotomalala Stevens Daniel Fanambinana',
      },
    },
  },
}))

const allRoutes = [homeRoute, ...projectRoutes]

export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    command === 'serve' ? vueDevTools() : null,
    prerenderStatic({
      routes: allRoutes,
      template: 'template.html',
      dist: 'dist',
      render: (route) => {
        if (route.path === '/') {
          return `
<main>
  <section>
    <h1>Rakotomalala Stevens Daniel Fanambinana - Fullstack Developer Portfolio</h1>
    <p>
      Fullstack developer based in Madagascar, building Java, Spring Boot, Vue, React, Node.js,
      DevOps and AI projects.
    </p>
    <p>
      I build reliable backend systems, modern frontend interfaces, and AI-powered features with a
      focus on clean architecture and measurable impact.
    </p>
    <p>
      Explore selected projects, technical skills, certifications, and contact information.
    </p>
  </section>
</main>`.trim()
        }

        const project = projectPages.find((item) => item.path === route.path)
        if (!project) {
          return '<main><h1>Project not found</h1></main>'
        }

        const demoLink = project.demo
          ? `<a href="${project.demo}" target="_blank" rel="noopener noreferrer">Live demo</a>`
          : ''

        return `
<main>
  <article>
    <h1>${project.heading}</h1>
    <p><strong>Tech stack:</strong> ${project.stack}</p>
    <p>${project.body}</p>
    <p>
      <a href="${project.repo}" target="_blank" rel="noopener noreferrer">Source code</a>
      ${demoLink}
    </p>
    <p><a href="/">Back to portfolio homepage</a></p>
  </article>
</main>`.trim()
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
}))