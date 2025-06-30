import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // remove if not using routing
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)
app.use(router) // remove if not using routing
app.mount('#app')

AOS.init()