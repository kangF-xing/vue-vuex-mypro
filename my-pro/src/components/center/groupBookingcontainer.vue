<template>
    <div id="groupBookingcontainer">
        <ul>
            <router-link :to="{path:'/group/',query:{id:val}}" tag="li">商品介绍</router-link>
            <router-link :to="{path:'/groupChildPJ/',query:{id:val}}" tag="li">商品评价</router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import '../../assets/other/css/groupBookingcontainer.scss'
export default {
    data(){
        return{
            val:"",
        }
    },
    mounted() {
        this.val=this.$route.query.id
    },
}
</script>

<style>

</style>