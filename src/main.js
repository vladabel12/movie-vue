import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'
import '/src/styles/_layout.scss'
import '/src/styles/_reset.scss'
import '/src/styles/_vars.scss'
import '/src/styles/icons/icons.scss'

const app = createApp(App)

const loggedIn = true;

app.use(router)

app.mount('#app', {
  loggedIn
})


