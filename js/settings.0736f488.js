(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"00fd":function(t,e,n){var i=n("9e69"),r=Object.prototype,a=r.hasOwnProperty,o=r.toString,s=i?i.toStringTag:void 0;function c(t){var e=a.call(t,s),n=t[s];try{t[s]=void 0;var i=!0}catch(c){}var r=o.call(t);return i&&(e?t[s]=n:delete t[s]),r}t.exports=c},1310:function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},1593:function(t,e,n){"use strict";var i=n("d311"),r=n.n(i);r.a},"1a8c":function(t,e){function n(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}t.exports=n},"26d3":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Settings page")]),n("SettingsWidget")],1)},r=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h2",[t._v("Configure the bars in your bar graph.")]),n("p",{attrs:{"data-details":t.globalTotal}},[t._v(t._s(t.showStatus))]),n("div",[n("button",{staticClass:"buttonSetter",on:{click:t.decrementGlobalTotal}},[t._v("-")]),t._v("\n        "+t._s(t.globalTotal)+"\n        "),n("button",{staticClass:"buttonSetter",on:{click:t.incrementGlobalTotal}},[t._v("+")]),n("p"),t._l(t.globalTotal,function(e,i){return n("AnimatedGraph",{attrs:{msg:t.graphName(e),beginValue:0,endValue:100,myIndex:i}})})],2)])},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",[t._v(t._s(t.msg))]),n("p",[n("button",{on:{click:function(){return t.decrementBegining()}}},[t._v(" -")]),t._v("\n        Beginning value: "+t._s(this.$store.state.barSettingsContainer[this.myIndex].startValue)+"%\n        "),n("button",{on:{click:function(){return t.incrementBegining()}}},[t._v(" +")])]),n("p",[n("button",{on:{click:function(){return t.decrementEnding()}}},[t._v(" -")]),t._v("\n        End value: "+t._s(this.$store.state.barSettingsContainer[this.myIndex].endValue)+"%\n        "),n("button",{on:{click:function(){return t.incrementEnding()}}},[t._v(" +")])]),n("p",[t._v("My animating value: "+t._s(t.myanimatingvalue)+" ")]),n("div",{staticClass:"barFull"},[n("div",{ref:"bar",staticClass:"barPartial",style:{width:t.myValue.thePercentage+"%"}})]),n("button",{on:{click:t.startAnimation}},[t._v("Animate from beginning % to end %")])])},c=[],u=(n("c5f6"),n("cffa")),l=n("345a"),f=n.n(l),m={name:"theGraph",props:{msg:String,myIndex:{type:Number,required:!0}},data:function(){return{myValue:{thePercentage:0},tl:null}},methods:{startAnimation:function(){this.myValue.thePercentage=this.$store.state.barSettingsContainer[this.myIndex].startValue,this.tl.clear(),this.tl.to(this.myValue,5,{delay:1,thePercentage:this.$store.state.barSettingsContainer[this.myIndex].endValue,ease:u["a"].easeOut})},incrementBegining:function(){if(f()(this.$store.state.barSettingsContainer[this.myIndex].startValue,0,100)){var t=this.$store.state.barSettingsContainer[this.myIndex]+1;this.$store.commit("incrementBegining",{bar:this.myIndex,newValue:t})}},decrementBegining:function(){if(f()(this.$store.state.barSettingsContainer[this.myIndex].startValue,1,101)){var t=this.$store.state.barSettingsContainer[this.myIndex]-1;this.$store.commit("decrementBegining",{bar:this.myIndex,newValue:t})}},incrementEnding:function(){if(f()(this.$store.state.barSettingsContainer[this.myIndex].endValue,0,100)){var t=this.$store.state.barSettingsContainer[this.myIndex]+1;this.$store.commit("incrementEnding",{bar:this.myIndex,newValue:t})}},decrementEnding:function(){if(f()(this.$store.state.barSettingsContainer[this.myIndex].endValue,1,101)){var t=this.$store.state.barSettingsContainer[this.myIndex]-1;this.$store.commit("decrementEnding",{bar:this.myIndex,newValue:t})}}},computed:{myanimatingvalue:function(){return Math.ceil(this.myValue.thePercentage)+"%"}},mounted:function(){this.tl=new u["b"],this.startAnimation()}},d=m,b=(n("d8de"),n("2877")),g=Object(b["a"])(d,s,c,!1,null,"2fcf62aa",null);g.options.__file="SingleBarGraphSetting.vue";var h=g.exports,v={name:"SettingsWidget",components:{AnimatedGraph:h},props:{},data:function(){return{}},computed:{showStatus:function(){return this.$store.getters.status},globalTotal:function(){return this.$store.state.bars}},methods:{graphName:function(t){return"Bar graph "+t},incrementGlobalTotal:function(){console.log("incrementGlobalTotal"),this.$store.commit("addBar")},decrementGlobalTotal:function(){console.log("incrementGlobalTotal"),this.$store.commit("minusBar")}}},p=v,y=(n("1593"),Object(b["a"])(p,a,o,!1,null,"7edc1776",null));y.options.__file="SettingsWidget.vue";var x=y.exports,_={name:"Settings",components:{SettingsWidget:x}},S=_,$=(n("35e8"),Object(b["a"])(S,i,r,!1,null,"6d9ecd32",null));$.options.__file="Settings.vue";e["default"]=$.exports},"29f3":function(t,e){var n=Object.prototype,i=n.toString;function r(t){return i.call(t)}t.exports=r},"2b3e":function(t,e,n){var i=n("585a"),r="object"==typeof self&&self&&self.Object===Object&&self,a=i||r||Function("return this")();t.exports=a},"303a":function(t,e,n){},"345a":function(t,e,n){var i=n("cb16"),r=n("6428"),a=n("b4b0");function o(t,e,n){return e=r(e),void 0===n?(n=e,e=0):n=r(n),t=a(t),i(t,e,n)}t.exports=o},"35e8":function(t,e,n){"use strict";var i=n("fe8b"),r=n.n(i);r.a},3729:function(t,e,n){var i=n("9e69"),r=n("00fd"),a=n("29f3"),o="[object Null]",s="[object Undefined]",c=i?i.toStringTag:void 0;function u(t){return null==t?void 0===t?s:o:c&&c in Object(t)?r(t):a(t)}t.exports=u},"585a":function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("c8ba"))},6428:function(t,e,n){var i=n("b4b0"),r=1/0,a=1.7976931348623157e308;function o(t){if(!t)return 0===t?t:0;if(t=i(t),t===r||t===-r){var e=t<0?-1:1;return e*a}return t===t?t:0}t.exports=o},"9e69":function(t,e,n){var i=n("2b3e"),r=i.Symbol;t.exports=r},b4b0:function(t,e,n){var i=n("1a8c"),r=n("ffd6"),a=NaN,o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt;function f(t){if("number"==typeof t)return t;if(r(t))return a;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var n=c.test(t);return n||u.test(t)?l(t.slice(2),n?2:8):s.test(t)?a:+t}t.exports=f},cb16:function(t,e){var n=Math.max,i=Math.min;function r(t,e,r){return t>=i(e,r)&&t<n(e,r)}t.exports=r},d311:function(t,e,n){},d8de:function(t,e,n){"use strict";var i=n("303a"),r=n.n(i);r.a},fe8b:function(t,e,n){},ffd6:function(t,e,n){var i=n("3729"),r=n("1310"),a="[object Symbol]";function o(t){return"symbol"==typeof t||r(t)&&i(t)==a}t.exports=o}}]);
//# sourceMappingURL=settings.0736f488.js.map