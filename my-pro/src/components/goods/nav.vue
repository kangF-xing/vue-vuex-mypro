<template>
    <div id="nav">
        <ul>
            <router-link to="/storeup" tag="li">
                <span class="iconfont icon-qiandao"></span>
                <p>签到</p> 
            </router-link>
            <router-link to="/giftcertificate" tag="li">
                <span class="iconfont icon-huiyuanhuangguanguanjun-xianxing"></span>
                <p>礼卷</p>
            </router-link>
            <router-link to="/cutprice" tag="li">
                 <span class="iconfont icon-baobao"></span>
                <p>砍价</p>
            </router-link>
            <router-link to="/strictselection" tag="li">
                 <span class="iconfont icon-diaodeng"></span>
                <p>专栏</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
import '../../assets/other/css/nav.scss'
export default {

}
</script>

<style>

</style>