(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"0805":function(e,t,n){"use strict";n.r(t);var r=n("8619"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},1707:function(e,t,n){"use strict";var r=n("629d"),a=n.n(r);a.a},"1af0":function(e,t,n){"use strict";n.r(t);var r=n("f8af"),a=n("0805");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("ab82"),n("1707");var u,o=n("f0c5"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,"033359b9",null,!1,r["a"],u);t["default"]=s.exports},"629d":function(e,t,n){},"75d5":function(e,t,n){"use strict";(function(e){n("f68b");r(n("66fd"));var t=r(n("1af0"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},8619:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,a,i,u){try{var o=e[i](u),s=o.value}catch(l){return void n(l)}o.done?t(s):Promise.resolve(s).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function o(e){i(u,r,a,o,s,"next",e)}function s(e){i(u,r,a,o,s,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,cehuashixingbieOptions:[],cehuashixingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var t=this;return u(r.default.mark((function n(){var a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:[],a=e.getStorageSync("loginTable"),t.tableName=a,"yonghu"==t.tableName&&(t.yonghuxingbieOptions="男,女".split(","),t.ruleForm.xingbie=t.yonghuxingbieOptions[0]),"cehuashi"==t.tableName&&(t.cehuashixingbieOptions="男,女".split(","),t.ruleForm.xingbie=t.cehuashixingbieOptions[0]),t.styleChange();case 6:case"end":return n.stop()}}),n)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},cehuashixingbieChange:function(e){this.cehuashixingbieIndex=e.target.value,this.ruleForm.xingbie=this.cehuashixingbieOptions[this.cehuashixingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return u(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.ruleForm.zhanghao||"yonghu"!=e.tableName){t.next=3;break}return e.$utils.msg("账号不能为空"),t.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){t.next=6;break}return e.$utils.msg("密码不能为空"),t.abrupt("return");case 6:if("yonghu"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){t.next=9;break}return e.$utils.msg("两次密码输入不一致"),t.abrupt("return");case 9:if(e.ruleForm.xingming||"yonghu"!=e.tableName){t.next=12;break}return e.$utils.msg("姓名不能为空"),t.abrupt("return");case 12:if("yonghu"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){t.next=15;break}return e.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 15:if("yonghu"!=e.tableName||!e.ruleForm.shoujihaoma||e.$validate.isMobile(e.ruleForm.shoujihaoma)){t.next=18;break}return e.$utils.msg("手机号码应输入手机格式"),t.abrupt("return");case 18:if(e.ruleForm.cehuazhanghao||"cehuashi"!=e.tableName){t.next=21;break}return e.$utils.msg("策划账号不能为空"),t.abrupt("return");case 21:if(e.ruleForm.mima||"cehuashi"!=e.tableName){t.next=24;break}return e.$utils.msg("密码不能为空"),t.abrupt("return");case 24:if("cehuashi"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){t.next=27;break}return e.$utils.msg("两次密码输入不一致"),t.abrupt("return");case 27:if(e.ruleForm.cehuaxingming||"cehuashi"!=e.tableName){t.next=30;break}return e.$utils.msg("策划姓名不能为空"),t.abrupt("return");case 30:if("cehuashi"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){t.next=33;break}return e.$utils.msg("邮箱应输入邮件格式"),t.abrupt("return");case 33:if("cehuashi"!=e.tableName||!e.ruleForm.lianxishouji||e.$validate.isMobile(e.ruleForm.lianxishouji)){t.next=36;break}return e.$utils.msg("联系手机应输入手机格式"),t.abrupt("return");case 36:return t.next=38,e.$api.register("".concat(e.tableName),e.ruleForm,e.emailcode);case 38:e.$utils.msgBack("注册成功");case 40:case"end":return t.stop()}}),t)})))()}}};t.default=o}).call(this,n("543d")["default"])},ab82:function(e,t,n){"use strict";var r=n("dd88"),a=n.n(r);a.a},dd88:function(e,t,n){},f8af:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=[]}},[["75d5","common/runtime","common/vendor"]]]);