<template>
    <div id="MyAddress">
        <div class="MyAddress">
            <div>
                <MyAddress></MyAddress>
            </div>
        </div>
        <MyAddressFooter></MyAddressFooter>
    </div>
</template>

<script>
import MyAddress from '../../components/order/mine/MyAddress'
import MyAddressFooter from '../../components/order/mine/MyAddressFooter'
export default {
    components:{
        MyAddress,
        MyAddressFooter
    }
}
</script>

<style>
#MyAddress{
    height:100%;
    display: flex;
    flex-direction:column;
}
.MyAddress{
    flex:1;
    overflow: auto;
}
</style>
