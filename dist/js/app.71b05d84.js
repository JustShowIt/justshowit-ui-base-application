(function(t){function e(e){for(var r,i,s=e[0],a=e[1],c=e[2],p=0,f=[];p<s.length;p++)i=s[p],o[i]&&f.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(e);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,s=1;s<n.length;s++){var a=n[s];0!==o[a]&&(r=!1)}r&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},u=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=a;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02d3":function(t,e,n){},"0e3d":function(t,e,n){"use strict";var r=n("9a8a"),o=n.n(r);o.a},"1fbd":function(t,e,n){var r={"./Search.vue":"c106","./justshowme-text.vue":"e063","./justshowme-unit.vue":"8b77"};function o(t){var e=u(t);return n(e)}function u(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=u,t.exports=o,o.id="1fbd"},2790:function(t,e,n){"use strict";var r=n("9780"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"justshowme"}},[n("router-view"),t._l(t.initialUnits,function(e){return n(t.getComponentTypeByUnit(e),{key:e.id,tag:"component",attrs:{unit:e}},[t._v("\n    "+t._s(e.id)+" - "+t._s(e.type)+"\n  ")])})],2)},u=[],i=(n("386d"),n("28a5"),n("7f7f"),n("ac6a"),n("bc3a")),s=n.n(i),a=n("9224"),c={data:function(){return{initialUnits:[{id:10,type:"text"},{id:20,type:"text"},{id:30,type:"unit",units:[{id:40,type:"text"},{id:50,type:"unit",units:[{id:60,type:"text"}]},{id:70,type:"text"},{id:80,options:{titel:"Lustiges Video",description:"Ein cooles lustiges Video mit einem Hasen.",path:"https://www.w3schools.com/html/mov_bbb.mp4",resolution:"320x240",runtime:"10.26s",size:"131.509.108",author:"Mario Linz",intelligentSearchDepth:5}}]},{id:90,type:"text"}]}},methods:{getComponentTypeByUnit:function(t){return t.type?"justshowme-"+t.type:"justshowme-text"}},created:function(){var t=n("1fbd");t.keys().map(function(e){return r["a"].component(t(e).default.name,t(e).default)})},mounted:function(){var t=this,e=window.location.search.substr(1).split("&"),n=null;if(e.length&&""!==e[0]&&(n=e.filter(function(t){return-1!==t.search("justshowme=")}).map(function(t){return decodeURIComponent(t)})[0],n&&(n=n.split("=")[1])),n)try{var r=a["a"].gateway+a["a"].dataPath;console.log("Initial service request detected to",n),s.a.get(r,{headers:{"justshowme-service-request-uri":n}}).then(function(e){t.initialUnits=e})}catch(o){console.error(o)}}},l=c,p=(n("5c0b"),n("2877")),f=Object(p["a"])(l,o,u,!1,null,null,null);f.options.__file="App.vue";var d=f.exports,h=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Search")},v=[],y=n("c106"),w={name:"JustShowMeAddressInput",components:{Search:y["default"]}},b=w,_=Object(p["a"])(b,m,v,!1,null,null,null);_.options.__file="JustShowMeAddressInput.vue";var j=_.exports;r["a"].use(h["a"]);var g=new h["a"]({mode:"history",base:"/",routes:[{path:"/",name:"JustShowMeAddressInput",component:j}]}),x=n("2f62");r["a"].use(x["a"]);var O=new x["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({router:g,store:O,render:function(t){return t(d)}}).$mount("#justshowme")},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(t,e,n){},"8b77":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"justshowme-unit"},[t._t("default"),t._l(t.unit.units,function(e){return n(t.getComponentTypeByUnit(e),{key:e.id,tag:"component",attrs:{unit:e}},[t._v("\n    "+t._s(e.id)+" - "+t._s(e.type)+"\n  ")])})],2)},o=[],u={name:"justshowme-unit",props:{unit:Object},methods:{getComponentTypeByUnit:function(t){return t.type?"justshowme-"+t.type:"justshowme-text"}}},i=u,s=(n("2790"),n("2877")),a=Object(s["a"])(i,r,o,!1,null,"1e21ed5a",null);a.options.__file="justshowme-unit.vue";e["default"]=a.exports},9224:function(t){t.exports={a:{gateway:"http://localhost:9000",dataPath:"/justshowme",header:"justshowme-service-request-uri"}}},9780:function(t,e,n){},"9a8a":function(t,e,n){},aef5:function(t,e,n){"use strict";var r=n("02d3"),o=n.n(r);o.a},c106:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("input",{staticClass:"search-address-input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.value},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.submit(t.value)}}})])},o=[],u=(n("96cf"),n("1da1")),i=n("bc3a"),s=n.n(i),a=n("9224"),c={name:"Search",props:{value:{type:String,default:"http://localhost:9001/test"},placeholder:{type:String,default:"http://"}},methods:{submit:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.get(a["a"].gateway+a["a"].dataPath,{headers:{"justshowme-service-request-uri":e}});case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.error(t.t0);case 8:case"end":return t.stop()}},t,this,[[0,5]])}));function e(e){return t.apply(this,arguments)}return e}()}},l=c,p=(n("aef5"),n("2877")),f=Object(p["a"])(l,r,o,!1,null,"0553f38e",null);f.options.__file="Search.vue";e["default"]=f.exports},e063:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"justshowme-text"},[t._t("default"),t._l(t.unit.units,function(e){return n(t.getComponentTypeByUnit(e),{key:e.id,tag:"component",attrs:{unit:e}},[t._v("\n    "+t._s(e.id)+" - "+t._s(e.type)+"\n  ")])})],2)},o=[],u=(n("cadf"),n("551c"),n("097d"),{name:"justshowme-text",props:{unit:Object},methods:{getComponentTypeByUnit:function(t){return t.type?"justshowme-"+t.type:"justshowme-text"}}}),i=u,s=(n("0e3d"),n("2877")),a=Object(s["a"])(i,r,o,!1,null,"75fc2709",null);a.options.__file="justshowme-text.vue";e["default"]=a.exports}});
//# sourceMappingURL=app.71b05d84.js.map