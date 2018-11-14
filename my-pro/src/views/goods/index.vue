<template>
    <div id="box">
        <div id="conatiner">
            <div>
                <Slideshow></Slideshow>
                <Nav></Nav>
                <Bgcolor></Bgcolor>
                <Bargainingcontent></Bargainingcontent>
                <Bgcolor></Bgcolor>
                <Siltcontent></Siltcontent>
                <Bgcolor></Bgcolor>
                <Moodscontent></Moodscontent>
            </div>
        </div>
        <Footer></Footer>
</div>
</template>

<script>
import '../../assets/other/css/index.scss'
import Slideshow from '../../components/goods/slideshow'
import Nav from '../../components/goods/nav'
import Bgcolor from '../../components/goods/bgcolor'
import Bargainingcontent from '../../components/goods/Bargainingcontent'
import Siltcontent from '../../components/goods/siftcontent'
import Moodscontent from '../../components/goods/Hitscontent'
import Footer from '../../components/common/footer'
export default {
    components:{
        Slideshow,
        Nav,
        Bgcolor,
        Bargainingcontent,
        Siltcontent,
        Moodscontent,
        Footer
    },
    mounted() {
    },
}
</script>

<style>

</style>