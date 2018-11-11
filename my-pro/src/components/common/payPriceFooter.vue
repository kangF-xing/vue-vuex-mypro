<template>
    <div id="pay-price-footer">
        微信支付 ￥{{val}}
    </div>
</template>

<script>
export default {
    data(){
        return{
            val:"",
        }
    },
    mounted() {
        this.val=this.$route.query.zj
    },
}
</script>

<style>

</style>
