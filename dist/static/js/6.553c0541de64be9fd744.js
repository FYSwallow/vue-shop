webpackJsonp([6],{"5ynu":function(t,e){},rvI7:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("PBVb"),o=s("CPkp"),a=s("Au9i"),r={data:function(){return{list:[],msg:"",getMan:"",tel:"",chose:"",name:"地址管理"}},created:function(){this.list=this.$store.state.user.list,this.chose=this.$store.state.user.addressSeclected,console.log(this.chose)},methods:{postComment:function(){var t=this;if(0===this.getMan.trim().length)return this.mui.toast("收件人不能为空");if(0===this.tel.trim().length)return this.mui.toast("电话不能为空");if(0===this.msg.trim().length)return this.mui.toast("地址不能为空");var e={};e.msg=this.msg,e.getMan=this.getMan,e.tel=this.tel,console.log(e),this.$store.commit("addAddress",e),a.MessageBox.confirm("添加地址成功,是否前往购物车?").then(function(e){t.$router.replace({path:"/pay"})})},del:function(t){this.$store.commit("delAddress",t)},go:function(){},choseAddress:function(t){var e=this;this.chose=t,console.log(this.$store.state.user),this.$store.commit("addressSeclected",t),a.MessageBox.confirm("设置地址成功,返回购物车?").then(function(t){e.$router.replace({path:"/pay"})})}},components:{"v-header":n.a,"v-footer":o.a}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-header",{attrs:{name:t.name}}),t._v(" "),s("div",{staticClass:"address"},[s("h3",[t._v("添加地址")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.getMan,expression:"getMan"}],attrs:{type:"text",placeholder:"收件人"},domProps:{value:t.getMan},on:{input:function(e){e.target.composing||(t.getMan=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],attrs:{type:"text",placeholder:"电话"},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}}),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{placeholder:"请输入地址",maxlength:"120"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}}),t._v(" "),s("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.postComment}},[t._v("添加地址")]),t._v(" "),s("h3",[t._v("选择地址")]),t._v(" "),s("ul",t._l(t.list,function(e,n){return s("li",{key:n},[s("p",[t._v("电话: "+t._s(e.tel)+"  收件人: "+t._s(e.getMan)+" ")]),t._v(" "),s("p",[t._v("地址"+t._s(e.msg))]),t._v(" "),s("button",{staticClass:"mui-btn mui-btn-danger",on:{click:function(e){return t.del(n)}}},[t._v("删除")]),t._v(" "),t.chose===n?s("button",{staticClass:"choseaddress"},[t._v("默认")]):s("button",{staticClass:"choseaddress",on:{click:function(e){return t.choseAddress(n)}}},[t._v("设为默认地址")])])}),0)],1),t._v(" "),s("v-footer")],1)},staticRenderFns:[]};var c=s("VU/8")(r,i,!1,function(t){s("5ynu")},"data-v-d900f68c",null);e.default=c.exports}});
//# sourceMappingURL=6.553c0541de64be9fd744.js.map