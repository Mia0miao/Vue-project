<script setup>
import Homepanel from './Homepanel.vue';
import { getHomeHot } from '@/apis/HomeAPIs';
import { ref, onMounted } from 'vue';


// 获取人气推荐数据
const hotList = ref([]);

const getHotList = async () => {
    const res = await getHomeHot();
    hotList.value = res.data.result;
}

onMounted(() => {
    getHotList();
})
</script>

<template>
  <Homepanel title="人气推荐" sub-title="人气爆款 不容错过">
    <ul class="goods-list">
        <li v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
            <img v-img-lazy="item.picture"  alt="" />
            <p class="name">{{ item.title }}</p>
        </RouterLink>
        </li>
    </ul>
  </Homepanel>
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>