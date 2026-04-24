import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import prerenderStatic from 'vite-plugin-prerender-static'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    prerenderStatic({
      routes: [
        {
          path: '/',
          tags: {
            title: 'Rakotomalala Stevens Daniel Fanambinana | Fullstack Developer Portfolio',
            description:
              'Fullstack developer portfolio featuring Java, Spring Boot, Vue, React, Node.js, DevOps and AI projects.',
            author: 'Rakotomalala Stevens Daniel Fanambinana',
            url: 'https://counterporfolio.web.app/',
            robots: 'index, follow',
            keywords:
              'fullstack developer portfolio, java developer portfolio, spring boot, vue, react, node.js, madagascar developer',
          },
        },
      ],
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
      Explore selected projects, technical skills, certifications, and contact information.
    </p>
  </section>
</main>`.trim(),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})