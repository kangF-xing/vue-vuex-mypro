<template>
    <div id="pay-footer">
        <p>合计：￥{{list.originalPrice*num}}</p>
        <router-link :to="{path:'/payprice/',query:{zj:list.originalPrice*num}}" tag="span">
            提交订单
        </router-link>
    </div>
</template>

<script>
import '../../assets/other/css/payFooter.scss'
export default {
    data(){
        return{
            list:[],
        }
    },
    computed:{
        num(){
            return this.$store.state.buynum
        }
    },
    mounted() {
        this.list=this.$route.query.zj
    },
}
</script>

<style>

</style>
