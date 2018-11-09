<template>
    <div id="Column-details">
        <div id="Column-details-header">
            <span>＜</span>
            <p>专栏详情</p>
        </div>
        <div id="Column-details-content">
            <h2>{{list.title}}</h2>
            <div  v-html="list.content" id="Column-details-HTMLcontent">
            </div>
        </div>
        <h3><small></small><span>✦</span>大佬同款推荐<span>✦</span><small></small></h3>
        <ul>
            <router-link tag="li" :to="{path:'/group/',query:{id:i.id}}" v-for="(i,index) in detaillist" :key="index">
                <img :src="i.pic" alt="">
                <span>{{i.name}}</span>
                <p>￥{{i.originalPrice}}<small>已售138</small></p>
            </router-link>
        </ul>
    </div>
</template>

<script>
import '../../../assets/other/css/ColumnDetailscontent.scss'
export default {
    data(){
        return{
            list:[],
            detaillist:[],
        }
    },
    mounted() {
        this.axios.get(global.globalData.api+"cms/news/detail?id="+this.$route.query.id).then(res=>{
            this.list=res.data.data
        })
        this.axios.get(global.globalData.api+"shop/goods/list").then(res=>{
            this.detaillist=res.data.data.filter(i=>{
                return i.recommendStatusStr=="推荐"&&i.kanjia!==true
            })
            console.log(this.detaillist)
        })
    },  
}
</script>

<style>

</style>
