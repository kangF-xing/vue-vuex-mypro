<template>
    <div id="pay-price-deatils">
        <div id="pay-price-deatils-header">
            <span>＜</span>
            <p>确认订单</p>
        </div>
        <div id="pay-price-deatils-allprice">
            <p class="iconfont icon-jinqian"></p>
            <ul>
                <li>商品总额：<span>￥399</span></li>
                <li class="OrderID">订单号：<span>od3321985632451</span></li>
            </ul>
        </div>
        <div id="bgcolor"></div>
        <div id="pay-price-deatils-allprice">
            <p class="iconfont icon-dizhi dizhi"></p>
            <ul>
                <li>爸爸 61656516513265</li>
                <li class="OrderID">吉利大学</li>
            </ul>
        </div>
    </div>
</template>

<script>
import '../../../assets/other/css/paypricedeatils.scss'
export default {
    data(){
        return{
            list:[],
        }
    },
    mounted() {
        
    },
}
</script>

<style>

</style>