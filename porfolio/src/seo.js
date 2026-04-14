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

function upsertAlternateLang(hreflang, href) {
  let node = document.head.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`)

  if (!node) {
    node = document.createElement('link')
    node.setAttribute('rel', 'alternate')
    node.setAttribute('hreflang', hreflang)
    document.head.appendChild(node)
  }

  node.setAttribute('href', href)
}

export function applyGlobalSeo(locale) {
  const baseUrl = window.location.origin
  const currentPath = window.location.pathname
  const currentUrl = `${baseUrl}${currentPath}?lang=${locale}`
  const seo = messages[locale]?.seo ?? messages.fr.seo

  document.title = seo.title
  upsertCanonical(currentUrl)
  upsertAlternateLang('fr', `${baseUrl}${currentPath}?lang=fr`)
  upsertAlternateLang('en', `${baseUrl}${currentPath}?lang=en`)
  upsertAlternateLang('x-default', `${baseUrl}${currentPath}?lang=fr`)
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
