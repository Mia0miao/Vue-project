import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugins= {
    install(app) {
        app.directive('img-lazy', {
            mounted(el, binding) {
                const { stop } = useIntersectionObserver(
                   el,
                    ([entry]) => {
                        if (entry.isIntersecting) {
                            // 进入视口，加载图片
                            el.src = binding.value
                            stop() // 停止监听
                        } 
                    },
                )
            }
          })
        }
    }
