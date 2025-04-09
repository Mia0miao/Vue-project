// 调取API，获取轮播图数据
import { getHomeBanner } from '@/apis/HomeAPIs';
import { ref, onMounted } from 'vue';


export function useBannerList(){
// 获取轮播图数据
    const bannerList = ref([]);
    const getBanner = async () => {
        const res = await getHomeBanner({distributionSite : '1'});
        bannerList.value = res.data.result;
    }

    onMounted(() => {
        getBanner();
    })

    return {
        bannerList
    }
}