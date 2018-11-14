<template>
    <div id="group">
        <div class="group">
            <div>
            <groupBookingHheader></groupBookingHheader>
            <groupBookingcontent></groupBookingcontent>
            <groupBookingcontainer></groupBookingcontainer>
            </div>
            <groupShow v-show="buynum"></groupShow>
        </div>
        <groupFooter></groupFooter>
    </div>
</template>

<script>
import groupShow from '../../components/center/groupShow'
import groupBookingcontent from '../../components/center/groupBookingcontent'
import groupBookingHheader from '../../components/center/groupBookingHheader'
import groupBookingcontainer from '../../components/center/groupBookingcontainer'
import groupFooter from '../../components/common/groupFooter'
export default {
    components:{
       groupBookingHheader, 
       groupBookingcontent,
       groupBookingcontainer,
       groupFooter,
       groupShow,
    },
    computed:{
        buynum(){
            return this.$store.state.buyshow
        }
    },
    methods:{
    //     _initScroll(){
    //     this.menuScroll = new BScroll(this.$refs.menuWrapper, {})
    //     this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {})
    //   }
    },
    mounted() {
        // this.$nextTick(()=>{
        //     this._initScroll()
        // })
    }
}
    
</script>

<style>
#group{
    display: flex;
    height:100%;
    flex-direction: column;
}
.group{
    overflow: scroll;
}
</style>
