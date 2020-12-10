import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'jquery';
import 'popper.js';
import '../src/assets/app.scss'

createApp(App).use(router).mount('#app')
