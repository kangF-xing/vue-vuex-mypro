<template>
    <div id="cut-details-content">
        <ul id="cut-details-content-ul">
            <router-link :to='{path:"/cutdetails/",query:{id:value}}' tag="li">
                商品介绍
            </router-link>
            <router-link :to='{path:"/cutdetailsChildPJ/",query:{id:value}}' tag="li">
                商品评价
            </router-link>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
import '../../../assets/other/css/cutDetailscontent.scss'
export default {
    data(){
        return{
            value:"",
        }
    },
    mounted() {
        this.value=this.$route.query.id

    },
    computed:{
    }
}
</script>

<style>

</style>
