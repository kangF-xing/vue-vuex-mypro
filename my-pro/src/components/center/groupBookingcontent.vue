<template>
    <div id="groupBookingcontent">
        <div id="title">
            <h3>{{detailList.name}}</h3>
            <p>{{detailList.characteristic}}</p>
        </div>
        <div id="Spell-group-price">
            <h3><small>拼团价￥</small>{{detailList.pingtuanPrice}}</h3>
            <ol>
                <li>2人开团</li>
                <li><s>原价 ￥{{detailList.originalPrice}}</s></li>
            </ol>
            <p>已团111件</p>
        </div>
        <div class="bgcolor"></div>
        <div id="Spell-the-group-process">
            <h3>拼团流程</h3>
            <ul>
                <li>
                    <span class="iconfont icon-jinqian"></span>
                    <p>支付开团和参团</p>
                </li>
                <li>
                    <span class="iconfont icon-jinqian"></span>
                    <p>邀请好友一起开团</p>
                </li>
                <li>
                    <span class="iconfont icon-jinqian"></span>
                    <p>达到人数分别发货</p>
                </li>
                <li>
                    <span class="iconfont icon-jinqian"></span>
                    <p>人数不够自动退款</p>
                </li>
            </ul>
        </div>
        <div class="bgcolor"></div>
        <router-link :to="{query:{val:123,id:id}}" tag="div" id="Choose-specifications" @click.native="comeOut">
            <p>选择规格：<span>选择版本 选择服务</span></p>
            <h3>></h3>
        </router-link>
        <div class="bgcolor"></div>
    </div>
</template>

<script>
import '../../assets/other/css/groupBookingcontent.scss'
export default {
    data(){
        return{
            detailList:[],
            id:"",
        }
    },
    mounted() {
        this.id=this.$route.query.id
        this.axios.get(global.globalData.api+"shop/goods/detail/?id="+this.$route.query.id).then(res=>{
        this.detailList=res.data.data.basicInfo
      })
    },
    methods:{
        comeOut(){
            this.$store.commit("comeOut")
        }
    }
}
</script>

<style>

</style>