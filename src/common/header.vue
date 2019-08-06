<template>
        <!-- 顶部header -->
    <mt-header fixed :title="name">
        <span slot="right">
            <mt-button icon="search"></mt-button>
        </span>
        <span slot="left">
            <mt-button icon="back" v-show="flag" @click="goBack"></mt-button>
        </span>
    </mt-header>
</template>
<script>
export default {
    data() {
        return {
            flag: ''
        }
    },
    props: ['name'],
    created() {
        this.flag = this.$route.path === '/home'? false : true
    },
    methods: {
        goBack() {
        // 点击后退
        this.$router.go(-1);
        }
    },
    watch: {
        "this.$route.path": function(newVal) {
            if (newVal === "/home") {
                this.flag = false;
            } else {
                this.flag = true;
            }
        }
    }
}
</script>

<style lang="less" scoped>
.mint-header {
    height: 50px;
}
</style>
