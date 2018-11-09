<template>
    <div id="cut-details-footer">
        立即发起砍价，最低可砍到{{detailV.kanjiaPrice}}
    </div>
</template>

<script>
import '../../../assets/other/css/cutDetailsfooter.scss'
export default {
    data(){
        return{
            detailV:[],
        }
    },
    mounted() {
        this.axios.post(global.globalData.api+"shop/goods/detail?id="+this.$route.query.id).then(res=>{
         this.detailV=res.data.data.basicInfo;
     })
    },
}
</script>

<style>

</style>
