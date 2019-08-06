<template>
<div>
    <v-header :name="name"></v-header>
        <v-user></v-user>
    <v-footer></v-footer>
</div>

</template>
<script>
import Header from '@/common/header.vue'
import Footer from '@/common/footer.vue'
import User from '@/components/user/user.vue'
import Login from '@/components/user/login.vue'
export default {
    data() {
        return {
            loginFlag: false,
            name: '个人中心'
        }
    },
    created(){
            this.loginFlag =this.$store.state.loginFlag
            console.log(this.$store.state.loginFlag)
    },
    components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-login': Login,
        'v-user': User
    }
}
</script>
<style lang="less" scoped>
</style>
