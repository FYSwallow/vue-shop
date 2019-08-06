<template>
<div>
    <v-header :name="name"></v-header>
    <section class="view mui-content mui-row mui-fullscreen">
        <v-aside :asideData="aside" @func="getTabNum"></v-aside>
        <v-main :tabIndex="tabNum" :asideData="aside"></v-main>
    </section>  
    <v-footer></v-footer>
</div>
    
</template>

<script>
import Header from '@/common/header.vue'
import Footer from '@/common/footer.vue'
import Aside from '@/components/category/aside.vue'
import Main from '@/components/category/main.vue'
export default {
    data() {
        return {
            aside: {},
            tabNum: 1,
            name: '分类'
        }
    },
    components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-aside': Aside,
        'v-main': Main
    },
    created() {
        this.getCategory()
    },
    methods: {
         getCategory(){
            this.$axios
                .get('/category')
                .then(response => {
                    this.aside = response.data.aside;
                    console.log(this.aside)
                })
                .catch(error => {
                    alert(error)
                })
        },
        getTabNum(i){
            this.tabNum = i
        }
    }
}
</script>

<style lang="less" scoped>
 .view {
    width: 100%;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}
</style>