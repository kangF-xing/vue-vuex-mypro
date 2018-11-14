<template>
    <div id="strict-selection">
        <div id="strict-header">
            <span>＜</span>
            <p>严选专栏</p>
        </div>
        <div id="strict-nav">
            <ul>
                <router-link :to="{path:'/columndetails/',query:{id:i.id}}" tag="li" v-for="(i,index) in list" :key="index"><img :src="i.pic" alt=""></router-link>
            </ul>
        </div>
        <div id="strict-content">
            <router-link tag="div" :to="{path:'/columndetails/',query:{id:i.id}}" v-for="(i,index) in list" :key="index">
            <img :src="i.pic" alt="">
            </router-link>
        </div>
        
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[],
        }
    },
    mounted() {
         this.axios.get("api/cms/news/list").then(res=>{
             console.log(res)
            this.list=res.data.data.filter(i=>{
                return i.isRecommend==true
            })
        })

    },
}
</script>

<style>

</style>
