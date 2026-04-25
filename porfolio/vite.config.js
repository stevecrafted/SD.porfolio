import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import prerenderStatic from 'vite-plugin-prerender-static'

const siteUrl = 'https://sd-porfolio.vercel.app'

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

export default defineConfig(({ command }) => ({
  plugins: [
    vue(),
    command === 'serve' ? vueDevTools() : null,
    prerenderStatic({
      routes: [homeRoute],
      template: 'template.html',
      dist: 'dist',
      render: () => `
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
</main>`.trim(),
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
}))