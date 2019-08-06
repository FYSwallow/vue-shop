import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['@/view/Index.vue'], resolve)
const Detail = resolve => require(['@/view/Detail.vue'], resolve)
const Category = resolve => require(['@/view/Category.vue'], resolve)
const Car = resolve => require(['@/view/Car.vue'], resolve)
const User = resolve => require(['@/view/User.vue'], resolve)
const Login = resolve => require(['@/components/user/login.vue'], resolve)
const Address = resolve => require(['@/components/user/address.vue'], resolve)
const Apy = resolve => require(['@/components/car/pay/pay.vue'], resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Index},
    {path: '/detail', component: Detail},
    {path: '/category', component: Category},
    {path: '/car', component: Car},
    {path: '/user', component: User},
    {path: '/login', component: Login},
    {path: '/address', component: Address},
    {path: '/pay', component: Apy}
  ],
  linkActiveClass: 'mui-active'
})
