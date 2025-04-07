import httpInstance from "@/utils/http";

export function getHomeBanner(){
    return httpInstance({
        url: '/home/banner',
        method: 'get'
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