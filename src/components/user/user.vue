<template>
<div>
    <div class="user">
        <div class="ct_content">
            <ul class="mui-table-view">
                <li class="mui-table-view-cell">
                    <img class="mui-media-object mui-pull-left" src="../../assets/user.jpg">
                    <div class="mui-media-body">
                        <div class="name" @click="goLogin">{{name || '去登陆'}}</div>
                    </div>
                </li>
                <li class="mui-table-view-cell">
                    <a href="#" class="mui-navigate-right">账号与安全</a>
                </li>
                <li class="mui-table-view-cell">
                    <router-link to="/car" class="mui-navigate-right">我的购物车</router-link>
                </li>
                <li class="mui-table-view-cell" @click="goaddress">
                    <span class="mui-navigate-right">收货地址管理</span>
                </li>
            </ul>
            <div class="exit">
                <button @click="exit">退出登录</button>
            </div>
        </div>
    </div>
    <!-- 123 -->
</div>
</template>
<script>
import { MessageBox } from 'mint-ui';
export default {
    data() {
        return {
            name: ''
        }
    },
    created() {
        this.name = this.$store.state.user.username
        console.log(this.name)
    },
    methods: {
        exit() {
            if(this.name === '' || this.name === undefined) {
                this.mui.toast('抱歉,你还没有登录哟,请先登陆')
                return
            }
            this.$store.commit('exitUser')
            this.$router.replace(
                 {path: '/login'}
            )
        },
        goLogin(){
            if(this.name === '' || this.name === undefined) {
                this.$router.replace(
                    {path: '/login'}
                )
            }else {
                return
            }
        },
        goaddress() {
            console.log(this.$store.state.loginFlag)
            if(this.$store.state.loginFlag){
                this.$router.push('/address')
                console.log(this.$store.state.loginFlag)
            }else{
                MessageBox
                .confirm('你还没有登录,是否前去登录')
                .then(action => {
                    this.$router.push('/login')
                })
            }
        }
    }
}
</script>
<style lang="less" scoped>
.user {
    padding: 50px 0;
    .exit {
        width: 100%;
        height: 50px;
        padding: 0 10px;
        button {
            width: 100%;
            height: 30px;
            margin: 20px 0;
            padding: 0;
            background: #fff;
        }  
    } 
    .name {
        line-height: 40px;
        font-size: 20px;
    }
}

</style>
