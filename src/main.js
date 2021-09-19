import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import JQuery from 'jquery'
window.$ = window.JQuery = JQuery;
require('bootstrap');




import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(store).use(router).mount('#app')
