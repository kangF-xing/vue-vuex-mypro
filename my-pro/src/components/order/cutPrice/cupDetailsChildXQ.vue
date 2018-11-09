<template>
    <div id="cupDetailChildXQ" v-html="contentList">
    </div>
</template>

<script>
export default {
    data(){
        return{
            contentList:[],
        }
    },
    mounted() {
        this.axios.post(global.globalData.api+"shop/goods/detail?id="+this.$route.query.id).then(res=>{
            this.contentList=res.data.data.content
     })
    },
}
</script>

<style>

</style>
