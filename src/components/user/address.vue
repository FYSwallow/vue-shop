<template>
<div>
    <v-header :name="name"></v-header>
        <div class="address">
            <h3>添加地址</h3>
            <input type="text" placeholder="收件人" v-model="getMan">
            <input type="text" placeholder="电话" v-model='tel'>
            <textarea placeholder="请输入地址" maxlength="120" v-model="msg"></textarea>

            <mt-button type="primary" size="large" @click="postComment">添加地址</mt-button>

            <h3>选择地址</h3>
            <ul>
                <li v-for="(item, i) in list" :key="i">
                    <p>电话: {{item.tel}}  收件人: {{item.getMan}} </p> 
                    <p>地址{{item.msg}}</p>
                    <button class="mui-btn mui-btn-danger" @click="del(i)">删除</button>
                    <button class="choseaddress" v-if="chose === i">默认</button>
                    <button class="choseaddress" @click="choseAddress(i)" v-else>设为默认地址</button>
                </li>
            </ul>
        </div>
    <v-footer></v-footer>
</div>
    
</template>
<script>
import Header from '@/common/header.vue'
import Footer from '@/common/footer.vue'
import { MessageBox } from 'mint-ui';
export default {
    data(){
        return {
            list: [],
            msg: '' ,
            getMan:'',
            tel: '',
            chose : '',
            name: '地址管理'
        }
    },
    created() {
        this.list = this.$store.state.user.list
        this.chose = this.$store.state.user.addressSeclected
        console.log(this.chose)
    },
    methods: {
        postComment() {
            if(this.getMan.trim().length === 0) {
                return this.mui.toast('收件人不能为空')
            }
            if(this.tel.trim().length === 0) {
                return this.mui.toast('电话不能为空')
            }
            if(this.msg.trim().length === 0) {
                return this.mui.toast('地址不能为空')
            }
            var obj = {}
            obj.msg = this.msg
            obj.getMan = this.getMan
            obj.tel = this.tel
            console.log(obj)
            this.$store.commit('addAddress', obj)
            MessageBox
                .confirm('添加地址成功,是否前往购物车?')
                .then(action => {
                    this.$router.replace({
                        path: '/pay'
                    })
                })
        },
        del(i) {
            this.$store.commit('delAddress', i)
        },
        go() {
            
        },
        choseAddress(i) {
            this.chose = i
            console.log(this.$store.state.user)
            this.$store.commit('addressSeclected', i)
            MessageBox
                .confirm('设置地址成功,返回购物车?')
                .then(action => {
                    this.$router.replace({
                        path: '/pay'
                    })
                })
        }
    },
    components: {
        'v-header': Header,
        'v-footer': Footer
    }
}
</script>

<style lang="less" scoped>
 .address {
    padding: 50px 0;
    h3 {
        font-size: 18px;
        text-align: center;
        font-weight: normal;
        margin: 10px;
    }
    textarea {
        font-size: 20px;
        height: 85px;
        margin: 0;
    }
    ul {
        width: 100%;
        li {
            line-height: 30px;
            font-size: 20px;
            border: 1px solid #ccc;
            background: #fff;
            margin-top: 10px;
            padding: 10px;
            position: relative;
            button {
                position: absolute;
                right: 20px;
                bottom: 50px;
            }
            .choseaddress {
                position: absolute;
                right: 20px;
                bottom: 10px;
            }
        }
    }
}   
</style>