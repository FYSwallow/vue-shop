<template>
<div>
    <v-header :name="name"></v-header>
        <div class="login">
            <div class="ct_wrapper">
                <p>密码任意...</p>
                <form class="mui-input-group">
                    <div class="mui-input-row">
                        <label>用户名</label>
                        <input name="username" type="text" class="mui-input-clear" placeholder="请输入用户名" v-model="account">
                    </div>
                    <div class="mui-input-row">
                        <label>密码</label>
                        <input name="password" type="password" class="mui-input-password" placeholder="请输入密码" v-model="password">
                    </div>
                    <div class="mui-button-row">
                        <button to="/home" @click="login" type="button" class="mui-btn mui-btn-primary" >确认</button>
                        <button type="button" class="mui-btn mui-btn-danger" @click="del">取消</button>
                    </div>
                </form>
            </div>
        </div>
    <v-footer></v-footer>
</div>
    
</template>

<script>
import Header from '@/common/header.vue'
import Footer from '@/common/footer.vue'
export default {
    data(){
        return {
            account: '',
            password: '',
            name: '登录'
        }
    },
    methods: {
        login() {
            if(this.account!=="" && this.password!=="") {
                let info = {
                    username: this.account,
                    password: this.password,
                    list: [], //收货地址,
                    addressSeclected: 0 //默认地址索引,
                }
                this.$store.commit('loginUser', info)
                this.mui.toast('登陆成功') 
            }else {
               this.mui.toast('登陆失败')
                return false
            }
            setTimeout(()=>{
                this.$router.go(-1);
            },1000)
        },
        del() {
            this.account = ''
            this.password = ''
        }
    },
    components: {
        'v-header': Header,
        'v-footer': Footer
    }
}
</script>

<style lang="less" scoped>
.login {
    padding: 50px 0;
}
</style>
