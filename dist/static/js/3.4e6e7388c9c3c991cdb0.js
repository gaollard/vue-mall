webpackJsonp([3],{Wlcl:function(t,s){},hSyW:function(t,s,c){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=c("Dd8w"),i=c.n(e),o=c("NYxO"),a={computed:i()({},Object(o.b)({products:function(t){return t.welProduct.products.slice(0,6)},imgRoot:function(t){return t.imgRoot}})),methods:{toProduct:function(t){this.$router.push("/product/"+t.productId)}},mounted:function(){!this.products.length&&this.$store.dispatch("welProduct/getProducts")}},r={render:function(){var t=this,s=t.$createElement,c=t._self._c||s;return c("div",{staticClass:"welcome-products"},[c("div",{staticClass:"card"},[c("div",{staticClass:"card-hd"},[t._v("热门商品")]),t._v(" "),c("div",{staticClass:"card-bd"},[c("ul",{staticClass:"product-list"},t._l(t.products,function(s,e){return c("li",{key:e,staticClass:"product-item",on:{click:function(c){t.toProduct(s)}}},[c("div",{staticClass:"p-box"},[c("div",{staticClass:"product-logo-wrap"},[c("img",{staticClass:"product-logo",attrs:{src:t.imgRoot+s.productLogo,alt:""}})]),t._v(" "),c("div",{staticClass:"product-name ext-nowrap"},[t._v(t._s(s.productName))]),t._v(" "),c("div",{staticClass:"product-desc"},[t._v("比购买省￥4344起")]),t._v(" "),c("div",{staticClass:"now-price"},[c("span",{staticClass:"now-price-num"},[t._v(t._s(s.productPrice/100))]),t._v("元")])])])}))])])])},staticRenderFns:[]};var n={components:{WelcomeProduct:c("VU/8")(a,r,!1,function(t){c("Wlcl")},"data-v-40c1fb97",null).exports},data:function(){return{subjects:[]}}},l={render:function(){var t=this,s=t.$createElement,c=t._self._c||s;return c("div",{staticClass:"view-welcome"},[t._m(0),t._v(" "),c("ul",{staticClass:"cate-list"},[c("li",{staticClass:"cate-item"},[c("router-link",{attrs:{to:"/posts"}},[t._v("接需求")])],1),t._v(" "),c("li",{staticClass:"cate-item"},[c("router-link",{attrs:{to:"/category"}},[t._v("买好书")])],1),t._v(" "),c("li",{staticClass:"cate-item"},[c("router-link",{attrs:{to:"/movies"}},[t._v("看电影")])],1),t._v(" "),c("li",{staticClass:"cate-item"},[c("router-link",{attrs:{to:"/musics"}},[t._v("卖手机")])],1)]),t._v(" "),c("welcome-product")],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"banner"},[s("img",{attrs:{src:"https://mall.s.maizuo.com/0690e3551f92b8b1dcdf9be0dc3b9b69.jpg?x-oss-process=image/quality,Q_70"}})])}]};var u=c("VU/8")(n,l,!1,function(t){c("i+HN")},"data-v-654b26bd",null);s.default=u.exports},"i+HN":function(t,s){}});
//# sourceMappingURL=3.4e6e7388c9c3c991cdb0.js.map