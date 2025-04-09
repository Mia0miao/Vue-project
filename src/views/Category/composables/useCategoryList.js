// 调取API，获取分类数据
import { getCategoryAPI } from '@/apis/CategoryAPIs';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { onBeforeRouteUpdate } from 'vue-router'; 

export function useCategoryList() {
// 获取分类数据
  const categoryList = ref({})
  const route = useRoute()

  const getCategoryList = async (id = route.params.id) => {
      const res = await getCategoryAPI(id)
      // route.params 是一个对象，存储了路由路径中的动态参数。
      // route.params.id 是获取当前路由中名为 id 的动态参数的值。
      categoryList.value = res.data.result
  }

  // 为了在路由参数变化时重新获取分类数据
  onBeforeRouteUpdate((to) => {
    getCategoryList(to.params.id)
  })

  onMounted(() => {
      getCategoryList();
    })

  return {
      categoryList,
    }
}