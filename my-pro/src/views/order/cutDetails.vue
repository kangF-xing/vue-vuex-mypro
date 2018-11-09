<template>
    <div id="cutDetails">
        <div class="cutDetails">
            <div>
                <cutDetailsHeader></cutDetailsHeader>
                <cutDetailsContent></cutDetailsContent>
            </div>
        </div>
        <cutDetailsFooter></cutDetailsFooter>
    </div>  
</template>

<script>
import cutDetailsHeader from "../../components/order/cutPrice/cutDetailsheader"
import cutDetailsContent from '../../components/order/cutPrice/cutDetailscontent'
import cutDetailsFooter from '../../components/order/cutPrice/cutDetailsfooter'
export default {
    components:{
        cutDetailsHeader,
        cutDetailsContent,
        cutDetailsFooter
    }
}
</script>

<style>
#cutDetails{
    display: flex;
    flex-direction: column;
}
.cutDetails{
    flex:1;
    overflow: auto;
}
</style>
