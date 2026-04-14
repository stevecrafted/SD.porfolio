import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { applyGlobalSeo } from './seo'

applyGlobalSeo()

createApp(App).mount('#app')
