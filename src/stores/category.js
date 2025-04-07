import { ref, computed } from 'vue'
import { CategoryListAPI } from '@/apis/LayoutAPIs';
import { defineStore } from 'pinia'


// 1.定义一个store,管理state和action（本质上是一个函数，外部组件创造实例来访问state和action）
export const useCategoryStore = defineStore('category', () => {
  // 商品种类数据管理state
  const categoryList = ref([])
  // 定义一个方法触发种类数据action
  const getCategoryList = async () => {
    const res = await CategoryListAPI()
    categoryList.value = res.data.result
}

  return {
    categoryList,
    getCategoryList
   }
})
