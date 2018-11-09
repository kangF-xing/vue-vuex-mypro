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
    }
}
</script>

<style>
#group{
    display: flex;
    flex-direction: column;
}
.group{
    flex: 1;
    overflow: auto;
}
</style>
