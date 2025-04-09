import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// 引入样式文件
import '@/styles/common.scss'
// 引入懒加载指令插件
import { lazyPlugins } from './directives'



const app = createApp(App)



app.use(createPinia())
app.use(router)
app.use(lazyPlugins)

app.mount('#app')

