import './axios.js';
import { createApp } from 'vue'
import { createPinia } from 'pinia' // Import

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()) // Create the root store
app.use(router)

app.mount('#app')


