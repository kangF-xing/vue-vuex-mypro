<template>
    <div id="mineorder">
        <div class="bgcolor"></div>
        <router-link to="/myorder" tag="div" class="mineorder">
            <span class="iconfont icon-jifendingdan"> <small>我的订单</small></span>
            <p>></p>
        </router-link>
        <ul>
            <router-link :to="{path:'/myorder/',query:{index:1}}" tag="li">
                <span class="iconfont icon-daizhifudingdan"></span>
                <p>待付款</p>
            </router-link>
            <router-link :to="{path:'/MyOrderdropShipping',query:{index:2}}" tag="li">
                <span class="iconfont icon-daifahuo"></span>
                <p>待发货</p>
            </router-link>
            <router-link :to="{path:'/MyOrderDropCollect',query:{index:3}}" tag="li">
                <span class="iconfont icon-daishouhuo"></span>
                <p>待收货</p>
            </router-link>
            <router-link :to="{path:'/MyOrderDropAppraise',query:{index:4}}" tag="li">
                <span class="iconfont icon-daipingjia01"></span>
                <p>待评价</p>
            </router-link>
        </ul>
        <div class="bgcolor"></div>
    </div>
</template>

<script>
import '../../../assets/other/css/mineorder.scss'
export default {

}
</script>

<style>

</style>
