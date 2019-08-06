<template>
    <div class="wrap">
        <div class="mui-content">
			<ul id="OA_task_1" class="mui-table-view">
				<li class="mui-table-view-cell" v-for="(item, i) in data" :key="item.id">
					<div class="mui-slider-right mui-disabled">
                        <div class="mui-btn mui-btn-primary" @click="edit(item.id, i)">编辑</div>
						<div class="mui-btn mui-btn-red" @click="remove(item.id, i)">删除</div>
					</div>
					<div class="mui-slider-handle">
                        <div class="mui-input-row mui-checkbox mui-left">
                            <div class="mui-input-row mui-checkbox mui-left">
                                <label id="goods" @click.stop="goDetail">
                                    <a class="mui-navigate-right">
                                        <img :src="item.image" alt="">
                                        <div class="infro">
                                            <div class="title">{{item.title}}</div>
                                            <div class="detail">{{item.size}}</div>
                                            <div class="price">
                                                <del>&yen;{{item.oldprice}}</del>
                                                <span class="newPrice">&yen;{{item.price}}</span>
                                            </div>
                                            <div class="number">x{{item.count}}个</div>
                                        </div>
                                    </a>
                                    <div class="edit">
                                        <!-- <v-computed :id="item.id" :numData="list"></v-computed> -->
                                    </div>
                                </label>
                                <input name="checkbox"  type="checkbox" 
                                    :checked="item.selected"
                                    @change="selectedChanged(item.id, item.selected)"
                                >
					        </div>
					    </div>
					</div>
				</li>
            </ul>
        </div>
        <div class="cart_order">订单总额: &yen;<span id="cartAmount">{{account}}</span> <span class="gopay" @click="goPay">生成订单</span></div>
        <div class="edit">
               
        </div>
    </div>
    
</template>

<script>
import { MessageBox } from 'mint-ui';
import Computed from '@/components/car/computed.vue'
export default {
    data() {
        return {
            data: [],
            money: 0
        }
    },
    created() {
        this.data = this.$store.state.car
    },
    methods: {
        remove (id, index) {
            this.data.splice(index, 1)
            this.$store.commit('removeFromCar', id)
        },
        selectedChanged (id, val) {
            console.log(val)
            this.$store.commit("updateCar", { id: id, selected: val })
        },
        goDetail() {
            this.$router.push('/detail')
        },
        goPay(){
           let money = this.$store.getters.getGoodsCountAndAmount.amount
            if(money === 0 || money === undefined) {
                this.mui.toast('你还没有选择商品')
                return
            }else {
                this.$router.push('/pay')
            }
        }
    },
    computed: {
        account() {
            return this.$store.getters.getGoodsCountAndAmount.amount
        }
    },
    components: {
        'v-computed': Computed
    }
}
</script>

<style lang="less" scoped>

.wrap {
    height: 100%;
    .mui-content {
        position: relative;
        height: 100%;
        #goods {
            height: 150px;
            a {
                clear: both;
                display: block;
                width: 100%;
                color: #666;
                img {
                    width: 30%;
                    float: left;
                }
                .infro {
                    width: 60%;
                    height: 20%;
                    float: left;
                    padding-left: 10px;
                    .detail {
                        color: orange;
                        font-size: 20px;
                        padding: 5px;
                    }
                    .price{
                        padding: 10px 0 0;
                        position: absolute;
                        bottom: 10px;
                        .newPrice {
                            color: red;
                            font-size: 25px;
                            padding-left: 10px;
                        }
                    }
                    .number{
                        font-size: 14px;
                        position: absolute;
                        right: 3px;
                        bottom: 10px;
                    }
                }
                
            }
            .edit {
                position: absolute;
                right: 3px;
                bottom: 30%;
            }
        }
    }
    .cart_order {
        width: 100%;
        height: 30px;
        position: fixed;
        left: 0;
        bottom: 50px;
        line-height: 30px;
        font-size: 14px;
        color: #ff3300;
        z-index: 99;
        padding-left: 20px;
        background: #ccc;
    }
    .cart_order {
        .gopay {
            float: right;
            width: 100px;
            background: #ff3300;
            text-align: center;
            color: #fff;
        }
    }
}


.mui-checkbox input[type=checkbox], .mui-radio input[type=radio] {
        position: absolute;
        top: 50%;
        transform: translateY(-50%)
}
</style>