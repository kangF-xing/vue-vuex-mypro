<template>
    <div id="siftcontent">
        <router-link to="/strictselection" tag="h2">精选专题 <small>></small></router-link>
        <div id="row">
        <ul >
            <router-link :to="{path:'/columndetails/',query:{id:i.id}}" tag="li" v-for="(i,index) in list" :key="index">
                <img :src="i.pic" alt="">
                <div>
                    <h3>{{i.title}}</h3>
                    <span>29起</span>
                </div>
                <p>{{i.descript}}</p>
            </router-link>
        </ul>
        </div>
    </div>
</template>

<script>
import '../../assets/other/css/siftcontent.scss'

export default {
    data(){
        return{
            list:[],
        }
    },
    mounted() {
        this.axios.get("api/cms/news/list").then(res=>{
            this.list=res.data.data
        })

    },
}
</script>

<style>
</style>
