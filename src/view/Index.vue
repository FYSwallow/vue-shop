<template>
<div>
    <!-- 头部区域 -->
    <v-header :name="name"></v-header>
    <transition>
        <div class="index"> 
        <!-- 轮播图 -->
        <v-swiper :swiperData="datas.swiper"></v-swiper>
        <!-- 导航条 -->
        <v-service></v-service>
        <!-- 内容1 -->
        <v-section1 :list="datas.section1.list" :banner="datas.section1.banner"></v-section1>
        <v-section2 :list="datas.section2.list" :banner="datas.section2.banner"></v-section2>
        <v-section3></v-section3>
        <v-section4 :list="datas.section4.list" :banner="datas.section4.banner"></v-section4>
        <v-baseline></v-baseline>     
    </div>
    </transition>
    
     <!-- tab区域 -->
     <v-footer></v-footer>
</div>
    
</template>

<script>
import Header from '@/common/header.vue'
import Footer from '@/common/footer.vue'
import Swiper from '@/components/index/swiper.vue'
import Service from '@/components/index/banner.vue'
import Section1 from '@/components/index/section1.vue'
import Section2 from '@/components/index/section2.vue'
import Section3 from '@/components/index/section3.vue'
import Section4 from '@/components/index/section4.vue'
import Baseline from '@/common/baseline.vue'
export default {
    data() {
        return {
            datas: {
                section1:{},
                section2:{},
                section3:{},
                section4:{},
                swiper:[],
                flag: true
            },
            name: '个人商城'
        }
    },
    created() {
        this.getSwiperGoods()
    },
    methods: {
        getSwiperGoods(){
            this.$axios
                .get('/index')
                .then(response => {
                    this.datas = response.data;
                    console.log(this.datas)
                })
                .catch(error => {
                    alert(error)
                })
        }
    },
    components: {
        'v-header': Header,
        'v-footer': Footer,
        'v-swiper': Swiper,
        'v-service': Service,
        'v-section1': Section1,
        'v-section2': Section2,
        'v-section3': Section3,
        'v-section4': Section4,
        'v-baseline': Baseline
    }
}
</script>

<style lang="less" scoped>
.index {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    overflow-x: hidden;
    background-color: #F8FCFF;
    .service {
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        ul {
            display: -webkit-flex;
            display: -ms-flex;
            display: flex;
            justify-content: space-around;

            li {
                display: -webkit-flex;
                display: -ms-flex;
                display: flex;
                align-items: center;
                padding: 3.3vw 0;
                span {
                    padding-left: 4px;
                }
            }
        }
    }
    .section1 {
        margin-top: 20px;
        border-bottom: 1px solid #ccc;
        border-top: 1px solid #ccc;
        .section1-title {
            background-color: #ffffff;
            text-align: center;
            padding: 4vw 0;
            color: #333;
            position: relative;
            border-bottom: 1px solid #ccc;
            i {
                position: absolute;
                right: 6vw;
                top: 50%;
                margin-top: -10px;
                &::before {
                    color: rgb(159, 159, 159);
                }
             }
        }

        .section1-list {
            display: -ms-flex;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -ms-flex-pack: distribute;
            justify-content: space-around;
            padding: 0 2vw 4vw 2vw;
            li {
                width: 50%;
                padding: 1vw;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                a,
                img {
                    width: 100%;
                    display: block;
                }
            }
        }

        .section1-banner {
            display: block;
            width: 100vw;
            img {
            width: 100%;
            height: 24vw;
            }
        }
    }
    
} 

</style>
