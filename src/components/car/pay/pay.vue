<template lang="html">
<div>
  <v-header :name="name"></v-header>
  <div class="pay" >
    <h3>支付订单</h3>
    <div class="pay-address" v-if="flag">
      <div>
        <p class="main-address-per">收货人:<span>{{address[selected].getMan}}</span></p>
        <p class="main-address-tel">联系电话:{{address[selected].tel}}</p>
      </div>
      <p>收货地址:<span>{{address[selected].msg || ''}}</span></p>
      <button @click="goAddress">更换地址</button>
    </div>
    <button @click="goAddress" v-else>请选择地址</button>

    <div class="pay-product">
      <ul v-if="confirm">
        <li v-for="k in list">
          <a>
            <img :src="k.image" alt="">
            <div>
              <h2><span style="color:#ee7150"> {{k.size}} - {{k.color}} </span>- {{k.title}} -</h2>
              <p class="num">x {{k.count}} 个 </p>
              <p>{{k.price}} 元</p>
            </div>
          </a>
        </li>
      </ul>

      <!-- 支付成功后的提示 -->
      <div class="pay-confirm" v-else>
        <router-link to="/category">继续购物~~</router-link>
      </div>
    </div>
    <h3 class="pay-allpay">总需要支付 : <i>￥</i><span>{{allpay}}</span></h3>
    <footer class="pay-footer" ontouchstrat="" @click="clearCar">
      <span >立即支付</span>
    </footer>


  </div>
</div>
  
</template>

<script>
import Header from '@/common/header.vue'
import { MessageBox } from 'mint-ui';
export default {
  data () {
    return {
      confirm: true,
      list: [],
      address: [],
      selected: '',
      flag: false,
      name: '支付'
    }
  },
  computed: {
    
    // // 商品价格总和
    allpay () {   
      return this.$store.getters.getGoodsCountAndAmount.amount     
    }
  },
  created () {
    this.list = this.$store.getters.getGoodsApy
    this.address = this.$store.state.user.list 
    this.selected = this.$store.state.user.addressSeclected
    console.log(this.$store.state.user)
    this.addressLength()
  },

  methods: {
    clearCar() {
      MessageBox
        .confirm("立即支付?共需要"+this.allpay+"元")
        .then(action => {
            this.list.forEach(item => {
              this.$store.commit('removeFromCar', item.id)
            })
            this.confirm = false
        })
    },
    goAddress() {
      this.$router.push('/address')
    },
    addressLength() {
      if(this.address[this.selected] === undefined){
        this.flag = false
      }else {
         this.flag = true
      }
    }
  },
  components: {
      'v-header': Header
  }

}
</script>

<style lang="less" scoped>
.pay {
  width: 100%;
  background-color: #f7f7f7;
  padding: 50px 0;
  .pay-address {
    background-color: #fff;
    border-bottom: 1 * 10vw/75 solid #dedede;
    padding: 30 * 10vw/75;
    position: relative;

    div {
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      justify-content: space-between;

      p {
        color: #868686;
      }
    }
    button {
        position: absolute;
        right: 10px;
        bottom: 10px;
    }

    > p {
      color: #868686;
      padding-top: 30 * 10vw/75;
      letter-spacing: 3 * 10vw/75;
      line-height: 45 * 10vw/75;
    }
  }
  .pay-product {
    background-color: #fff;
    height: 60vw;
    overflow: auto;

    li {
      a {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        box-sizing: border-box;
        padding: 20 * 10vw/75 30 * 10vw/75;
        color: #4d4d4d;
        border-bottom: 1 * 10vw/75 solid #dedede;

        > img {
          display: block;
          width: 2.5 * 10vw;
          height: 2.5 * 10vw;
        }

        > div {
          box-sizing: border-box;
          padding-left: 50 * 10vw/75;
          width: 70%;
          h2 {
            padding-top: 0.09 * 10vw;
            overflow: hidden;
            word-break: keep-all;
            white-space: nowrap;
            font-size: 16px;
            text-overflow: ellipsis;
          }
          p {
            text-align: right;
            padding-top: 10px;
            margin: 0;
            &.num {
              text-align: left;
            }
          }
        }
      }
    }
    .pay-confirm {
      font-size: 30px;
      background: #fff;
      a {
         color: #868686;
      }
    }
  }

  .pay-allpay {
    text-align: right;
    margin-top: 6vw;
    padding: 4vw 5vw;
    color: #999999;
    background-color: #fff;
    i,
    span {
      color: red;
    }
  }

  .pay-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 4vw;
    span {
      display: block;
      width: 85%;
      background-color: #fd729c;
      border-radius: 1.3vw;
      color: #fff;
      font-size: 17px;
      padding: 4vw;
      margin: 0 auto;
      text-align: center;
      &:active {
        background-color: red;
      }
    }
  }

  .pay-confirm {
    padding: 20px 0;
    background-color: red;
    text-align: center;
    color: #fff;
    line-height: 30px;
  }
}
</style>
