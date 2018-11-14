<template>
    <div id="mine">
        <div class="mine">
            <div>
                <MineHeader></MineHeader>
                <MineNotice></MineNotice>
                <Mineorder></Mineorder>
                <Mineparticulars></Mineparticulars>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import MineHeader from '../../components/order/mine/mineheader'
import MineNotice from '../../components/order/mine/minenotice'
import Mineorder from '../../components/order/mine/mineorder'
import Mineparticulars from '../../components/order/mine/mineparticulars'
import Footer from '../../components/common/footer'
export default {
    components:{
       MineHeader, 
       MineNotice,
       Mineorder,
       Mineparticulars,
       Footer
    },
    mounted() {
    },
}
</script>

<style>
#mine{
    height:100%;
    flex-direction: column;
    display: flex;
}
.mine{
    flex:1;
    overflow: auto;
}
</style>