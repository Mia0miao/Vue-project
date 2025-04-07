import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
// 引入样式文件
import '@/styles/common.scss'
import { useIntersectionObserver } from '@vueuse/core'



const app = createApp(App)



app.use(createPinia())
app.use(router)

app.mount('#app')

app.directive('img-lazy', {
    mounted(el, binding) {
        useIntersectionObserver(
           el,
            ([entry]) => {
                if (entry.isIntersecting) {
                    // 进入视口，加载图片
                    el.src = binding.value
                } else {
                    // 离开视口，清空图片
                    el.src = ''
                }
            },
        )
    }
  })

// 检查图片是否在视口内
