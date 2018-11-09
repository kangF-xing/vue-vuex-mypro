<template>
    <div id="group-show">
        <div id="group-show-content" v-for="(i,index) in detailList" :key="index">
        <div id="group-show-details">
            <img src="../../assets/img/images/20181105135749_08.jpg" alt="">
            <h3>{{i.name}}</h3>
            <p>￥999</p>
            <span @click="shut">×</span>
        </div>
        <div class="group-show-select-1">
            <h3>选择版本</h3>
            <ul>
                <li class="show-li-1" v-for="(i,index) in i.childsCurGoods" :key="index" @click="ADDstyle(index)" :class="{showLiQH:addCLass==index}">
                    {{i.name}}
                </li>
            </ul>
        </div>
        <div class="group-show-select-1">
            <h3>选择服务</h3>
            <ul>
                <li class="show-li-1" @click="AdDstyle(501)" :class="{showLiqH:addCLAss==501}">不要服务</li>
                <li class="show-li-1" @click="AdDstyle(502)" :class="{showLiqH:addCLAss==502}">部署上线一条龙</li>
            </ul>
        </div>
        <div id="group-show-count">
            <h2>购买数量</h2>
            <ul>
                <li @click="minus">-</li>
                <li>{{buynum}}</li>
                <li @click="add">+</li>
            </ul>
        </div>
        <div class="buy">
            <router-link :to="{path:'/payorder/',query:{}}" >
                立即购买
            </router-link>
        </div>
        </div>
    </div>
</template>

<script>
import '../../assets/other/css/groupShow.scss'
export default {
    data(){
        return{
            detailList:{},
            addCLass:-1,
            addCLAss:-1,
        }
    },
    computed:{
        buynum(){
            return this.$store.state.buynum
        }
    },
    methods:{
        minus(){
            this.$store.commit("minus")
        },
        add(){
            this.$store.commit("add")
        },
        shut(){
            this.$store.commit("shut")
        },
        ADDstyle(val){
            this.addCLass=val
        },
        AdDstyle(val){
            this.addCLAss=val
        }
    },
    mounted() {
         this.axios.get(global.globalData.api+"shop/goods/detail/?id="+this.$route.query.id).then(res=>{
        this.detailList=res.data.data.properties
        console.log(res)
        this.detailList.map(i=>{
            console.log(i.name)
        })
      })
    },
}
</script>

<style>

</style>
