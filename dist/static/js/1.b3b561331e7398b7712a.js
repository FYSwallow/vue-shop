webpackJsonp([1],{DxD3:function(t,s){},EwGG:function(t,s){},J91o:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n("PBVb"),e=n("CPkp"),a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("mt-swipe",{attrs:{auto:4e3}},this._l(this.swiperData,function(t){return s("mt-swipe-item",{key:t.id},[s("router-link",{attrs:{to:"/detail"}},[s("img",{attrs:{src:t.imgPath,alt:""}})])],1)}),1)],1)},staticRenderFns:[]};var r=n("VU/8")({props:["swiperData"]},a,!1,function(t){n("Y8Cn")},"data-v-482fd204",null).exports,c={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"service"},[s("ul",[s("li",[s("i",{staticClass:"icon-ok"}),s("span",[this._v("自营品牌")])]),this._v(" "),s("li",[s("i",{staticClass:"icon-ok"}),s("span",[this._v("无忧退货")])]),this._v(" "),s("li",[s("i",{staticClass:"icon-ok"}),s("span",[this._v("48小时快速退款")])])])])])}]};var l=n("VU/8")({},c,!1,function(t){n("lnJd")},"data-v-208900d3",null).exports,o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("section",{staticClass:"section1"},[this._m(0),this._v(" "),s("ul",{staticClass:"section1-list"},this._l(this.list,function(t){return s("li",{key:t.id},[s("router-link",{attrs:{to:"/detail"}},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.imgPath,expression:"item.imgPath"}],attrs:{alt:""}})])],1)}),0),this._v(" "),s("a",{staticClass:"section1-banner"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.banner,expression:"banner"}]})])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{staticClass:"section1-title"},[this._v("\n            section1\n             "),s("i",{staticClass:"mui-icon mui-icon-arrowright"})])}]};var v=n("VU/8")({props:["list","banner"]},o,!1,function(t){n("DxD3")},"data-v-b76e9e1c",null).exports,u={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"section2"},[n("div",{staticClass:"section2-list"},[n("ul",t._l(t.list,function(s){return n("router-link",{key:s.id,attrs:{to:"/detail",tag:"li"}},[n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:s.imgPath,alt:""}})]),t._v(" "),n("h2",{staticClass:"section-list-title ac"},[t._v(t._s(s.title))]),t._v(" "),n("p",{staticClass:"section2-list-info"},[t._v(t._s(s.intro))]),t._v(" "),n("p",{staticClass:"section2-list-price"},[t._v("￥"+t._s(s.price))])])}),1)]),t._v(" "),n("a",{staticClass:"section2-banner"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.banner,expression:"banner"}]})])])},staticRenderFns:[]};var m=n("VU/8")({props:["list","banner"]},u,!1,function(t){n("WRZL")},"data-v-7727f38a",null).exports,_={data:function(){return{list:[],banner:"",dom:[{num1:"",num2:"",num3:"",num4:""},{num1:"",num2:"",num3:"",num4:""},{num1:"",num2:"",num3:"",num4:""},{num1:"",num2:"",num3:"",num4:""}]}},created:function(){this.getSwiperGoods()},methods:{getSwiperGoods:function(){var t=this;this.$axios.get("/index").then(function(s){var n=s.data.section3;t.list=n.list,t.banner=n.banner,console.log(t.list);!function(t,s){for(var n=function(n){console.log(1);var i=t[n].end;console.log(i);var e=i.toString(),a=new Date(e).getTime();setInterval(function(){var t=(new Date).getTime(),i=parseInt((a-t)/1e3),e=parseInt(i%86400/3600),r=parseInt(i%3600/60),c=parseInt(i%60);e<10&&(e="0"+e),r<10&&(r="0"+r),c<10&&(c="0"+c);var l=(100-Number(parseInt(t/10).toString().substr(-2))).toString();if(l<10&&(l="0"+l),a-t<=0)return e="00",r="00",c="00",void(l="00");s[n].num1=e,s[n].num2=r,s[n].num3=c,s[n].num4=l},40),t[n].dom=s[n]},i=0;i<t.length;i++)n(i)}(t.list,t.dom)}).catch(function(t){alert(t)})}}},d={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"section3"},[n("ul",{staticClass:"section3-list"},t._l(t.list,function(s){return n("li",{key:s.id},[n("div",{staticClass:"section3-list-left"},[n("h4",[t._v(t._s(s.title))]),t._v(" "),n("div",{staticClass:"time"},[n("span",{staticClass:"time-num"},[t._v(t._s(s.dom.num1||"00"))]),t._v(" "),n("span",{staticClass:"time-col"},[t._v(":")]),t._v(" "),n("span",{staticClass:"time-num"},[t._v(t._s(s.dom.num2||"00"))]),t._v(" "),n("span",{staticClass:"time-col"},[t._v(":")]),t._v(" "),n("span",{staticClass:"time-num"},[t._v(t._s(s.dom.num3||"00"))]),t._v(" "),n("span",{staticClass:"time-col"},[t._v(":")]),t._v(" "),n("span",{staticClass:"time-num"},[t._v(t._s(s.dom.num4||"00"))])]),t._v(" "),n("p",{staticClass:"start"},[t._v("Starts at "+t._s(s.start))])]),t._v(" "),n("router-link",{staticClass:"section3-list-right",attrs:{to:"/detail"}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.imgPath,expression:"item.imgPath"}]}),t._v(" "),n("span",[t._v("$"+t._s(s.price))])])],1)}),0),t._v(" "),n("a",{staticClass:"section3-banner"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.banner,expression:"banner"}]})])])},staticRenderFns:[]};var f=n("VU/8")(_,d,!1,function(t){n("Ye3a")},"data-v-1449aa14",null).exports,p={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("section",{staticClass:"section4"},[t._m(0),t._v(" "),n("div",{staticClass:"section4-list"},t._l(t.list,function(s){return n("router-link",{key:t.list.id,staticClass:"section4-item",attrs:{to:"/detail",tag:"div"}},[n("img",{attrs:{src:s.imgPath,alt:""}}),t._v(" "),n("h1",{staticClass:"title"},[t._v(t._s(s.intro))]),t._v(" "),n("div",{staticClass:"info"},[n("p",{staticClass:"price"},[n("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),n("span",{staticClass:"old"},[t._v("￥"+t._s(s.price))])]),t._v(" "),n("p",{staticClass:"sell"},[n("span",[t._v("热卖中")]),t._v(" "),n("span",[t._v("剩10件")])])])])}),1),t._v(" "),n("a",{staticClass:"section4-banner"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.banner,expression:"banner"}]})])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{staticClass:"section4-title"},[this._v("\n    section4\n    "),s("i",{staticClass:"mui-icon mui-icon-arrowright"})])}]};var h=n("VU/8")({props:["list","banner"]},p,!1,function(t){n("lhzK")},"data-v-73b48814",null).exports,C=n("yLl/"),g={data:function(){return{datas:{section1:{},section2:{},section3:{},section4:{},swiper:[],flag:!0},name:"个人商城"}},created:function(){this.getSwiperGoods()},methods:{getSwiperGoods:function(){var t=this;this.$axios.get("/index").then(function(s){t.datas=s.data,console.log(t.datas)}).catch(function(t){alert(t)})}},components:{"v-header":i.a,"v-footer":e.a,"v-swiper":r,"v-service":l,"v-section1":v,"v-section2":m,"v-section3":f,"v-section4":h,"v-baseline":C.a}},b={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",[n("v-header",{attrs:{name:t.name}}),t._v(" "),n("transition",[n("div",{staticClass:"index"},[n("v-swiper",{attrs:{swiperData:t.datas.swiper}}),t._v(" "),n("v-service"),t._v(" "),n("v-section1",{attrs:{list:t.datas.section1.list,banner:t.datas.section1.banner}}),t._v(" "),n("v-section2",{attrs:{list:t.datas.section2.list,banner:t.datas.section2.banner}}),t._v(" "),n("v-section3"),t._v(" "),n("v-section4",{attrs:{list:t.datas.section4.list,banner:t.datas.section4.banner}}),t._v(" "),n("v-baseline")],1)]),t._v(" "),n("v-footer")],1)},staticRenderFns:[]};var w=n("VU/8")(g,b,!1,function(t){n("EwGG")},"data-v-6dacb7b2",null);s.default=w.exports},WRZL:function(t,s){},WasN:function(t,s){},Y8Cn:function(t,s){},Ye3a:function(t,s){},lhzK:function(t,s){},lnJd:function(t,s){},"yLl/":function(t,s,n){"use strict";var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("没有更多了...")])},staticRenderFns:[]};var e=n("VU/8")({},i,!1,function(t){n("WasN")},"data-v-caa2fc52",null);s.a=e.exports}});
//# sourceMappingURL=1.b3b561331e7398b7712a.js.map