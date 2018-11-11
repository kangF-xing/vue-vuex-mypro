<template>
    <div id="MyAddress-value">
        <div id="MyAddress-value-header">
            <span>＜</span>
            <p v-if="!buer">新增地址</p>
            <p v-if="buer">修改地址</p>
        </div>
        <div id="MyAddress-value-content">
            <ul>
                <li><label for="">联系人</label><input type="text" placeholder="姓名" v-model="linkMan"></li>
                <li><label for="">手机号码</label><input type="text" placeholder="11位手机号码" v-model="mobile"></li>
                <li><label for="">选择地区</label>
                <select name="" id="">
                    <option value="请选择">请选择</option>
                </select>
                <select name="" id="">
                    <option value="请选择">请选择</option>
                </select>
                <select name="" id="">
                    <option value="请选择">请选择</option>
                </select>
                </li>
                <li><label for="">详细地址</label><input type="text" placeholder="街道门牌信息" v-model="address"></li>
                <li><label for="">邮政编号</label><input type="text" placeholder="" v-model="code"></li>
            </ul>
        </div>
        <div id="MyAddress-value-buttons">
            <router-link to="/mine" @click.native="Address"><el-button type="danger">保存</el-button></router-link>
            <router-link to="" v-if="!buer"><el-button type="success">从微信读取</el-button></router-link>
            <router-link to="/myaddress" v-if="buer" @click.native="removeAdd"><el-button type="success">删除该地址</el-button></router-link>
            <router-link to="/myaddress" tag="el-button">取消</router-link>
        </div>
    </div>
</template>

<script>
import '../../../assets/other/css/MyAddressValue.scss'
import {Button} from 'element-ui'
export default {
    data(){
        return{
            linkMan:"",
            mobile:"",
            code:"",
            address:"",
            list:[],
            buer:false,
            id:"",
        }
    },
    mounted() {  
        this.list=this.$route.query.val
        if(this.list==''||this.list==undefined){
            this.buer=false
            this.linkMan!==undefined
            this.mobile!==undefined
            this.code!==undefined
            this.address!==undefined
            this.id!==undefined
        }else{
            this.buer=true
            this.linkMan=this.list.linkMan
            this.mobile=this.list.mobile
            this.code=this.list.code
            this.address=this.list.address
            this.id=this.list.id
        }
    },
    methods:{
        Address(){
            if(this.id==''||this.id==undefined){
                let params = new URLSearchParams();
                params.append('address', this.address);
                params.append('cityId', '750001');
                params.append('code', this.code);
                params.append('mobile', this.mobile);
                params.append('linkMan', this.linkMan);
                params.append('provinceId', '750001');
                params.append('token', localStorage.token);
                this.axios.post(global.globalData.api+"user/shipping-address/add",params).then(res=>{
                })
            }else{
                let params = new URLSearchParams();
                params.append('address', this.address);
                params.append('cityId', '750001');
                params.append('code', this.code);
                params.append('mobile', this.mobile);
                params.append('linkMan', this.linkMan);
                params.append('provinceId', '750001');
                params.append('id', this.id);
                params.append('token', localStorage.token);
                this.axios.post(global.globalData.api+'user/shipping-address/update',params).then(res=>{
                })
            }
        },
        removeAdd(){
            let params = new URLSearchParams();
            params.append('id', this.id);
            params.append('token', localStorage.token);
            this.axios.post(global.globalData.api+"user/shipping-address/delete",params).then(res=>{
                
            })
        }
    },
    
}
</script>

<style>

</style>