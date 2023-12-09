import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import { pinia } from "./store/index.js";

import './axios.js';

createApp(App).use(router).use(pinia).mount('#app')
