<template>
    <div id="cart">
        <div class="cart">
            <div>
                <Cartconent></Cartconent>
                <Cartrecommend></Cartrecommend>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Cartconent from '../../components/order/cart/cartcontent'
import Cartrecommend from '../../components/order/cart/cartrecommend'
import Footer from '../../components/common/footer'
export default {
    components:{
        Cartconent,
        Cartrecommend,
        Footer,
    }
}
</script>

<style>
#cart{
    height:100%;
    display: flex;
    flex-direction: column;
}
#cart .cart{
    flex:1;
    overflow: auto;
}
</style>