<template>
    <div>
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                 <section class="chose">
                    <div class="chose-view" v-if="dataView">
                        <h1 class="chose-view-title">
                            {{dataView.title}}~~ 
                            <span>(已选 {{colText}} - {{sizeText}})</span>
                        </h1>
                    </div>
                    <!-- 空函数解决safari浏览器无效 -->
                    <div class="chose-chosed" ontouchstart=''>
                        <div class="chose-color">
                            <span 
                                v-for="(item, i) in dataView.chose" 
                                :key="item.id" 
                                :class="{active:colNum===i || 0}"
                                @click="colChose(i)"
                                >
                                {{item.col}}
                                </span>
                        </div>
                        <div class="chose-size">
                            <span
                                v-for="(item, i) in dataView.chose" 
                                :key="item.id" 
                                :class="{active:sizeNum==i || 0}"
                                @click="sizeChose(i)">
                                {{item.size}}
                            </span>
                        </div>
                    </div>  
                     <p class="price">
                        市场价：<del>¥{{dataView.oldprice}}元</del>&nbsp;&nbsp;销售价：<span class="now_price">¥{{dataView.price}}元</span>
                    </p>               
                    <p>购买数量：<v-computed @getCount="getSelectedCount" :max="dataView.stock_quantity"></v-computed></p>
                    <mt-button type="primary" size="small">立即购买</mt-button>
                    <mt-button type="danger" size="small" @click="addToCar">加入购物车</mt-button>
                </section>
            </div>
        </div>
       
    </div>
</template>

<script>
import Computed from '@/common/computed.vue'
import { MessageBox } from 'mint-ui'
export default {
    props: ['dataView', 'dataList'],
    data() {
        return {
            colNum: 0,
            sizeNum: 0,
            ballFlag: false,
            selectedCount: 1,
            loginFlag: false
        }
    },
    mounted() {
        this.loginFlag = this.$store.state.loginFlag
    },
    methods: {
        colChose(i){
            this.colNum = i
        },
        sizeChose(i){
            this.sizeNum = i
        },
        addToCar(){
            if(this.loginFlag === false){
                MessageBox
                .confirm('你还没有登录购物车,需要前去登陆吗?')
                .then(action => {
                    this.$router.push('/login')
                });
            }else {   
                this.ballFlag = true
                var goodsinfo = {
                    id: this.dataView.id,
                    count: this.selectedCount,
                    price: this.dataView.price,
                    image: this.dataList[0].imgSrc,
                    intro: this.dataView.intro,
                    oldprice: this.dataView.oldprice,
                    stock_quantity: this.dataView.stock_quantity,
                    title: this.dataView.title,
                    size: this.sizeText,
                    color: this.colText,
                    selected: true    
                }
                console.log(goodsinfo)
                this.$store.commit('addTocar', goodsinfo)
                MessageBox
                .confirm('已成功添加购物车,是否需要前去看看?')
                .then(action => {
                    this.$router.push('/car')
                });
            }
        },
        beforeEnter(el) {
            el.style.transform = "translate(0, 0)";
        },
        enter(el, done) {
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            // 获取 徽标 在页面中的位置
            const badgePosition = document
                .getElementById("badge")
                .getBoundingClientRect()
            console.log(badgePosition)
            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;

            console.log(xDist+'---'+yDist)
            el.style.transform = 'translate('+xDist+'px,'+yDist+'px)'
            el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)"
            done()
        },
        afterEnter(el) {
            this.ballFlag = !this.ballFlag;
        },
        getSelectedCount(count){
            this.selectedCount = count
        }
    },
    computed: {
        colText() {
            return this.dataView.chose[this.colNum].col
        },
        sizeText() {
            return this.dataView.chose[this.sizeNum].size
        }
    },
    components: {
        'v-computed': Computed
    }
}
</script>

<style lang="less" scoped>
.ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 780px;
    left: 145px;
  }
.chose {
    padding: 3vw;
    background-color: #fff;
    .chose-view {
        h1 {
            font-size: 18px;
            font-weight: 400;
            color: #2c3e50;
            span {
                font-size: 14px;
                color: rgb(238, 113, 80)
            }
        }
    }
    .chose-chosed {
        > div {
            padding-top: 20px;
            display: -ms-flex;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            span {
                padding: 6px 10px;
                border: 1px solid rgb(111, 111,111);
                margin-right: 6vw;
                color: rgb(111, 111, 111);
                &.active,
                &:active {
                    color:orange;
                    border-color: orange;
                    -webkit-transform: scale(1.1);
                    transform: scale(1.1);
                }

            }
        }
    }
    .price {
        margin-top: 20px;
        .now_price {
            color: red;
        }
    }
}
</style>