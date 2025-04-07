<script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

// 引入分类数据
const categoryStore = useCategoryStore()

onMounted(() => {
  // 获取分类列表
  categoryStore.getCategoryList()
})

</script>

<template>
  <LayoutFixed />
  <LayoutNav />
  <LayoutHeader />
  <RouterView />
  <LayoutFooter />
</template>