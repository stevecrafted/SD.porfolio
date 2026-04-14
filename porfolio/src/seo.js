import { messages } from './i18n'

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

export function applyGlobalSeo(locale) {
  const baseUrl = window.location.origin
  const currentUrl = `${baseUrl}${window.location.pathname}`
  const seo = messages[locale]?.seo ?? messages.fr.seo

  document.title = seo.title
  upsertCanonical(currentUrl)
  upsertMeta('property', 'og:locale', seo.ogLocale)

  upsertMeta('name', 'description', seo.description)
  upsertMeta('property', 'og:title', seo.title)
  upsertMeta('property', 'og:description', seo.description)
  upsertMeta('property', 'og:url', currentUrl)
  upsertMeta('property', 'og:type', 'website')
  upsertMeta('property', 'og:site_name', 'Portfolio de Stevens Rakotomalala')

  upsertMeta('name', 'twitter:title', seo.title)
  upsertMeta('name', 'twitter:description', seo.description)
}
