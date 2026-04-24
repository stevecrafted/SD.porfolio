import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

document.documentElement.setAttribute('lang', 'en')

const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'

if (normalizedPath === '/') {
	createApp(App).mount('#app')
}
