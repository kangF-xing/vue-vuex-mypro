<template>
    <div id="register">
        <label for="">手机号</label>
        <input type="text" placeholder="请输入手机号" v-model="usernameVal">
        <label for="">密码</label>
        <input type="password" placeholder="请输入密码" v-model="userpassVal">
        <router-link tag="div" :to="{path:'/group/',query:{id:list.id}}" @click.native="storage">
            <button>登录</button>
        </router-link>
    </div>
</template>

<script>
import '../../../assets/other/css/register.scss'
export default {
    data(){
        return{
            list:[],
            usernameVal:"",
            userpassVal:"",
            keyid:"",
            cc:"",
        }
    },
    mounted() {
        this.list=this.$route.query
    },
    methods:{
        //:to="{path:'/group/',query:{id:list.id}}"
        storage(){
             this.axios.post(global.globalData.api+"user/m/login/?mobile=13500000000&pwd=123&deviceId=1231&deviceName=6165").then(res=>{
                 localStorage.token=res.data.data.token
             })
        }
    }
}
</script>

<style>

</style>
