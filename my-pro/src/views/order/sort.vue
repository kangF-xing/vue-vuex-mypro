<template>
    <div id="div">
        <Input/>
        <Sort></Sort>
        <Footer></Footer>
    </div>
</template>

<script>
import Input from '../../components/order/sort/input'
import Sort from '../../components/order/sort/sort'
import Footer from '../../components/common/footer'
export default {
    components:{
        Input,
        Sort,
        Footer
    }
}
</script>
<style>
#div{
    height:100%;
    display: flex;
    flex-direction: column;
}
</style>