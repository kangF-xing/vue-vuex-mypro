<template>
    <div id="pay-price-deatils">
        <div id="pay-price-deatils-header">
            <span>＜</span>
            <p>确认订单</p>
        </div>
        <div id="pay-price-deatils-allprice">
            <p class="iconfont icon-jinqian"></p>
            <ul>
                <li>商品总额：<span>￥{{val}}</span></li>
                <li class="OrderID">订单号：<span>od3321985632451</span></li>
            </ul>
        </div>
        <div id="bgcolor"></div>
        <div id="pay-price-deatils-allprice">
            <p class="iconfont icon-dizhi dizhi"></p>
            <ul>
                <li>{{list.linkMan}} {{list.mobile}}</li>
                <li class="OrderID">{{list.address}}</li>
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
            val:"",
        }
    },
    mounted() {
        this.val=this.$route.query.zj
        this.axios.post("/api/user/shipping-address/default/?token="+localStorage.token).then(res=>{
            this.list=res.data.data
        })
    },
}
</script>

<style>

</style>