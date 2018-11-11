<template>
    <dir id="groupFooter">
        <ul>
            <router-link to="" tag="li"><span class="iconfont icon-kefuweixuanzhong"></span></router-link>
            <router-link to="" tag="li"><span class="iconfont icon-shoucang"></span></router-link>
            <router-link :to="{query:{id:val}}" tag="li" @click.native="comeOut">
                <small>￥{{detailList.originalPrice}}</small>
                <p>原价购买</p>
            </router-link>
            <router-link to="" tag="li" id="groupcolor" > 
                <small>￥{{detailList.pingtuanPrice}}</small>
                <p>一键开团</p>
            </router-link>
        </ul>

    </dir>
</template>

<script>
import '../../assets/other/css/groupFooter.scss'
export default {
    data(){
        return{
            detailList:[],
            val:"",
        }
    },
    mounted() {
        this.val=this.$route.query.id
        this.axios.get(global.globalData.api+"shop/goods/detail/?id="+this.$route.query.id).then(res=>{
        this.detailList=res.data.data.basicInfo
      })
    },
    methods:{
        //@click.native="comeOut"
        comeOut(){
            this.$store.commit("comeout")
        }
    }
}
</script>

<style>

</style>