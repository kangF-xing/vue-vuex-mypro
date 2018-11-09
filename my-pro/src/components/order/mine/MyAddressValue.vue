<template>
    <div id="MyAddress-value">
        <div id="MyAddress-value-header">
            <span>＜</span>
            <p>新增地址</p>
        </div>
        <div id="MyAddress-value-content">
            <ul>
                <li><label for="">联系人</label><input type="text" placeholder="姓名"></li>
                <li><label for="">手机号码</label><input type="text" placeholder="11位手机号码"></li>
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
                <li><label for="">详细地址</label><input type="text" placeholder="街道门牌信息"></li>
                <li><label for="">邮政编号</label><input type="text" placeholder=""></li>
            </ul>
        </div>
        <div id="MyAddress-value-buttons">
            <router-link to="/mine"><el-button type="danger">保存</el-button></router-link>
            <router-link to=""><el-button type="success">从微信读取</el-button></router-link>
            <router-link to="/myaddress" tag="el-button">取消</router-link>
        </div>
    </div>
</template>

<script>
import '../../../assets/other/css/MyAddressValue.scss'
import {Button} from 'element-ui'
export default {

}
</script>

<style>

</style>
