import httpInstance from "@/utils/http";

/**
 * @description: 获取banner数据
 * @param {*}
 * @return {*}
 */
export function getHomeBanner(params = {}){
    // 默认值为1
    const { distributionSite = '1' } = params;
    return httpInstance({
        url: '/home/banner',
        method: 'get',
        params: {
            distributionSite
        }
    });
}


/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export function getHomeNew(){
    return httpInstance({
        url: '/home/new',
        method: 'get'
    });
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export function getHomeHot(){
    return httpInstance({
        url: '/home/hot',
        method: 'get'
    });
}

/**
 * @description: 获取商品列表
 * @param {*}
 * @return {*}
 */
export function getHomeGoodsAPI(){
    return httpInstance({
        url: '/home/goods',
        method: 'get'
    });
}