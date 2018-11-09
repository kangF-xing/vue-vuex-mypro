<template>
    <div id="pay">
        <div class="pay">
            <div>
                <payOrder></payOrder>
                <payList></payList>
            </div>
        </div>
        <payFooter></payFooter>
    </div>
</template>

<script>
import payOrder from '../../../components/order/pay/payOrder'
import payList from '../../../components/order/pay/payList'
import payFooter from '../../../components/common/payFooter'
export default {
    components:{
        payOrder,
        payList,
        payFooter
    }
}
</script>

<style>
#pay{
    display: flex;
    height:100%;
    flex-direction: column;
}
.pay{
    flex:1;
    overflow: auto;
}
</style>
