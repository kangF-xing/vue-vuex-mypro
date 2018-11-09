<template>
    <div id="footer">
        <ul>
                <router-link to="/" tag="li">           
                <span class="iconfont icon-shouye"></span>
                <p>首页</p>
            </router-link>
                <router-link to="/sort" tag="li">
                <span class="iconfont icon-chouti"></span>
                <p>分类</p>
            </router-link>
                <router-link to="/cart" tag="li">
                <span class="iconfont icon-gouwuche-01"></span>
                <p>购物车</p>
            </router-link>
                <router-link to="/mine" tag="li">
                <span class="iconfont icon-gerenzhongxin"></span>
                <p>个人</p>
            </router-link>
        </ul>
    </div>
</template>

<script>
import '../../assets/other/css/footer.scss'
export default {

}
</script>

<style>

</style>
