import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue' // 根组件
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app') // 挂载应用
