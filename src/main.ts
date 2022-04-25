import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elem from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(store).use(router).use(elem).mount('#app')
