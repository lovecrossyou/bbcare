(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/wuc-tab/wuc-tab"],{"7aeb":function(t,e,n){},8136:function(t,e,n){"use strict";n.r(e);var u=n("e4cc"),r=n.n(u);for(var a in u)"default"!==a&&function(t){n.d(e,t,function(){return u[t]})}(a);e["default"]=r.a},a8bb:function(t,e,n){"use strict";n.r(e);var u=n("e35f"),r=n("8136");for(var a in r)"default"!==a&&function(t){n.d(e,t,function(){return r[t]})}(a);n("cc75");var c=n("2877"),f=Object(c["a"])(r["default"],u["a"],u["b"],!1,null,null,null);e["default"]=f.exports},cc75:function(t,e,n){"use strict";var u=n("7aeb"),r=n.n(u);r.a},e35f:function(t,e,n){"use strict";var u=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"a",function(){return u}),n.d(e,"b",function(){return r})},e4cc:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"wuc-tab",data:function(){return{}},props:{tabList:{type:Array,default:function(){return[]}},tabCur:{type:Number,default:function(){return 0}},tabClass:{type:String,default:function(){return""}},tabStyle:{type:String,default:function(){return""}},textFlex:{type:Boolean,default:function(){return!1}},selectClass:{type:String,default:function(){return"text-blue"}}},methods:{tabSelect:function(t,e){if(this.currentTab===t)return!1;this.$emit("update:tabCur",t),this.$emit("change",t)}},computed:{scrollLeft:function(){return 60*(this.tabCur-1)}}};e.default=u}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/wuc-tab/wuc-tab-create-component',
    {
        'components/wuc-tab/wuc-tab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("a8bb"))
        })
    },
    [['components/wuc-tab/wuc-tab-create-component']]
]);                
