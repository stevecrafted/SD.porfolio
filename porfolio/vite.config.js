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
  ].filter(Boolean),
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
}))