<script setup>
import { fetchHotGoodsAPI } from '@/apis/DetailAPIs';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

// type适配不同类型热榜数据
const props = defineProps({
  type: {
    type: Number, // 1代表24小时热销榜 2代表周热销榜 3代表总热销榜 可以使用type去适配title和数据列表
    default: 1
  }
})

const TYPEMAP = {
    1: '24小时热销榜',
    2: '周热销榜',
}

const title = computed(() => {TYPEMAP[props.type]})


const hotList= ref([]);
const route = useRoute();
const getHotList = async () => {
  const res = await fetchHotGoodsAPI({
    id: route.params.id,
    type: props.type,
  });
  hotList.value = res.data.result;
};

onMounted(() => {
  getHotList();
});

</script>


<template>
    <div class="goods-hot">
      <h3> {{title}} </h3>
      <!-- 商品区块 -->
      <RouterLink :to="`/detail/${item.id}`" class="goods-item" v-for="item in hotList" :key="item.id">
        <img :src="item.picture" alt="" />
        <p class="name ellipsis">{{ item.name }}</p>
        <p class="desc ellipsis">{{ item.desc }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>