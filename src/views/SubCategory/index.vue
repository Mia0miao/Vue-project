<script setup>
import { getSubFilterAPI } from '@/apis/CategoryAPIs';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getSubCategoryAPI } from '@/apis/CategoryAPIs';
import GoodsItems from '../Home/components/GoodsItems.vue';


// 获取面包屑导航数据
const filterData = ref({})
const route = useRoute();

const getSubFilter = async () => {
  const res = await getSubFilterAPI(route.params.id);
  filterData.value = res.data.result;
  // console.log(res.data.result);
}

onMounted(() => {
  getSubFilter();
});



// 调取API，获取导航数据数据
const goodsList = ref([]);
const reqDate = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime',
});
const getSubCategory = async () => {
  const res = await getSubCategoryAPI(reqDate.value);
  goodsList.value = res.data.result.items;
}

onMounted(() => {
  getSubCategory();
});

// 切换Tab
const tabChange = () => {
  reqDate.value.page = 1;
  getSubCategory();
}

// 加载更多
const loading = ref(false);
const loadMore = async () => {
  reqDate.value.page++;
  const res = await getSubCategoryAPI(reqDate.value);
  goodsList.value = [...goodsList.value, ...res.data.result.items];
  if (res.data.result.items.length === 0) {
     loading.value = true;
   }
}

</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: `/category/${filterData.parentId}` }">居家
        </el-breadcrumb-item>
        <el-breadcrumb-item>居家生活用品</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <el-tabs v-model="reqDate.sortField" @tab-change="tabChange">
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="loadMore" :infinite-scroll-disabled="loading">
         <!-- 商品列表-->
         <GoodsItems v-for="item in goodsList" :key="item.is" :good="item"/>
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>