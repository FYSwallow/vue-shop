<template>
<div>
    <v-header :name="name"></v-header>
    <div class="detail">
        <v-swiper :dataList='list'></v-swiper>
        <v-chose :dataView='view' :dataList='list'></v-chose>
        <v-content :list='contentImgSrc'></v-content>
        <v-baseline></v-baseline>
    </div>
    <!-- tab区域 -->
     <v-footer></v-footer>
</div>  
</template>

<script>
import Header from '@/common/header.vue'
import Footer from '@/common/footer.vue'
import Swiper from '@/components/detail/swiper.vue'
import Chose from '@/components/detail/chose.vue'
import Content from '@/components/detail/content.vue'
import Baseline from '@/common/baseline.vue'
export default {
    data(){
        return {
            list: [],
            view: '',
            contentImgSrc: [],
            name: '商品信息'
        }
    },
    components: {
        'v-swiper': Swiper,
        'v-chose': Chose,
        'v-content': Content,
        'v-baseline': Baseline,
        'v-header': Header,
        'v-footer': Footer
    }
    ,
    created(){
        this.getDatas()
    },
    methods: {
        getDatas(){
            this.$axios
                .get('/detail')
                .then((response) => {
                    this.list = response.data.swiper
                    this.view = response.data.view
                    this.contentImgSrc = response.data.contentImgSrc
                }).catch((err) => {
                    alert(err)
                });
        }
    }
}
</script>
<style lang="less" scoped>
 .detail {
  width: 100%;
  padding: 50px 0;
}   
</style>
