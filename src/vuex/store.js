import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car') || '[]')
var user = JSON.parse(localStorage.getItem('user') || '{}')
var loginFlage = JSON.parse(localStorage.getItem('loginFlag') || false)
export default new Vuex.Store({
  state: {
    car: car,
    loginFlag: loginFlage,
    user: user
  },
  mutations: {
    addTocar (state, goodsinfo) {
      var flag = false
      console.log(state.car)
      state.car.some(item => {
        if (item.id === goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      if (!flag) {
        state.car.push(goodsinfo)
      }
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFromCar (state, id) {
      state.car.some((item, i) => {
        if (item.id === id) {
          state.car.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateCar (state, info) {
      state.car.some(item => {
        if (item.id === info.id) {
          if (item.selected === true) {
            item.selected = false
          } else {
            item.selected = true
          }
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    loginUser (state, userInfo) {
      state.loginFlag = true
      state.user = userInfo
      localStorage.setItem('loginFlag', JSON.stringify(state.loginFlag))
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    exitUser (state) {
      state.loginFlag = false
      state.user = {}
      localStorage.setItem('loginFlag', JSON.stringify(state.loginFlag))
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    addAddress (state, obj) {
      console.log(state.user.list)
      state.user.list.push(obj)
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    delAddress (state, index) {
      state.user.list.splice(index, 1)
      localStorage.setItem('user', JSON.stringify(state.user))
    },
    addressSeclected (state, index) {
      state.user.addressSeclected = index
      localStorage.setItem('user', JSON.stringify(state.user))
    }

  },
  getters: {
    getAllcount (state) {
      var c = 0
      state.car.forEach(item => {
        c += item.count
      })
      return c
    },
    getGoodsCount (state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected (state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoodsApy (state) {
      var o = []
      state.car.forEach(item => {
        if (item.selected === true) {
          o.push(item)
        }
      })
      return o
    },
    getGoodsCountAndAmount (state) {
      var o = {
        count: 0, // 勾选的数量
        amount: 0 // 勾选的总价
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count
          o.amount += item.price * item.count
        }
      })
      return o
    }
  }
})
