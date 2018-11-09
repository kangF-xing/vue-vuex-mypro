<template>
    <div v-html="contentList" id="groupChildXQ">
        
    </div>
</template>

<script>
import '../../assets/other/css/groupCHildXQ.scss'
export default {
    data(){
        return{
            contentList:"",
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
