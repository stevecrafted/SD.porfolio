const SEO_DEFAULTS = {
  title: 'Stevens Rakotomalala | Developpeur Fullstack',
  description:
    "Portfolio de Stevens Rakotomalala, developpeur fullstack passionne d'IA. Projets Java, Spring Boot, Vue, React, Node.js, DevOps et Machine Learning.",
}

function upsertMeta(attribute, key, content) {
  let node = document.head.querySelector(`meta[${attribute}="${key}"]`)

  if (!node) {
    node = document.createElement('meta')
    node.setAttribute(attribute, key)
    document.head.appendChild(node)
  }

  node.setAttribute('content', content)
}

function upsertCanonical(url) {
  let node = document.head.querySelector('link[rel="canonical"]')

  if (!node) {
    node = document.createElement('link')
    node.setAttribute('rel', 'canonical')
    document.head.appendChild(node)
  }

  node.setAttribute('href', url)
}

export function applyGlobalSeo() {
  const baseUrl = window.location.origin
  const currentUrl = `${baseUrl}${window.location.pathname}`

  document.title = SEO_DEFAULTS.title
  upsertCanonical(currentUrl)

  upsertMeta('name', 'description', SEO_DEFAULTS.description)
  upsertMeta('property', 'og:title', SEO_DEFAULTS.title)
  upsertMeta('property', 'og:description', SEO_DEFAULTS.description)
  upsertMeta('property', 'og:url', currentUrl)
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:site_name', 'Portfolio de Stevens Rakotomalala')

  upsertMeta('name', 'twitter:title', SEO_DEFAULTS.title)
  upsertMeta('name', 'twitter:description', SEO_DEFAULTS.description)
}
