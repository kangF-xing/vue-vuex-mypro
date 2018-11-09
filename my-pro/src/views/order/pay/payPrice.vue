<template>
    <div id="payPrice">
        <div class="payPrice">
            <div><payPriceDeatils></payPriceDeatils></div>
        </div>
        <payPriceFooter></payPriceFooter>
    </div>
</template>

<script>
import payPriceDeatils from '../../../components/order/pay/payPriceDeatils'
import payPriceFooter from '../../../components/common/payPriceFooter'
export default {
    components:{
        payPriceDeatils,
        payPriceFooter,
    }
}
</script>

<style>
#payPrice{
    height:100%;
    display: flex;
    flex-direction: column;
}
.payPrice{
    flex:1;
    overflow:auto;
}
</style>
