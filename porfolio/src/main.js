import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { watch } from 'vue'
import { applyGlobalSeo } from './seo'
import { initializeLocale, locale } from './i18n'

initializeLocale()
applyGlobalSeo(locale.value)
watch(locale, (newLocale) => {
	applyGlobalSeo(newLocale)
})

createApp(App).mount('#app')
