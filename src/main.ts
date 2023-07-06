import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// 跟组件
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
