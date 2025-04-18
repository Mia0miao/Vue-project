import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      // 根目录显示layout组件
      path: '/',
      component: Layout,
      children: [
        {
          // 默认二级路由
          path: '',
          component: Home,
        },
        {
          path: 'category/:id',
          component: Category,
        },
        {
          path: 'category/sub/:id',
          component: SubCategory,
        },
        {
          path: 'detail/:id',
          component: Detail
        }
      ],
    },
    {
      path: '/login',
      component: Login,
    },
  ],
  // 路由切换时滚动到顶部
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
