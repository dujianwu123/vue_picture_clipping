(function(t){function e(e){for(var i,c,r=e[0],o=e[1],u=e[2],l=0,f=[];l<r.length;l++)c=r[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&f.push(a[c][0]),a[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);h&&h(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(i=!1)}i&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},s=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/vue_picture_clipping/dist/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var h=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1a52":function(t,e,n){},2395:function(t,e,n){},"4cb1":function(t,e,n){},"532b":function(t,e,n){"use strict";var i=n("1a52"),a=n.n(i);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.isSave?n("div",{staticClass:"resultBox",on:{click:t.change}},[n("img",{attrs:{src:t.data,alt:""}})]):n("clip-image",{on:{saveImage:t.saveImage}})],1)},s=[],c=(n("983d"),n("4cb1"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clipImageBox"},[n("div",{staticClass:"canvasBox",on:{touchstart:t.startFunc,touchmove:t.moveFunc}},[n("canvas",{ref:"canvas",attrs:{width:t.CW,height:t.CH}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.ISMARK,expression:"ISMARK"}],staticClass:"mark",style:{width:t.MW+"px",height:t.MH+"px",left:t.ML+"px",top:t.MT+"px"}})]),n("div",{staticClass:"buttonBox"},[n("input",{ref:"file",staticClass:"file",attrs:{type:"file",accept:"image/*"},on:{change:t.changeFunc}}),n("button",{on:{click:t.clickFunc}},[t._v("选择图片")]),n("button",{on:{click:function(e){return t.scaleFunc(1)}}},[t._v("放大")]),n("button",{on:{click:function(e){return t.scaleFunc(0)}}},[t._v("缩小")]),n("button",{on:{click:t.saveFunc}},[t._v("保存图片")])])])}),r=[],o=(n("acd8"),{data:function(){var t=document.documentElement.clientWidth,e=parseFloat(document.documentElement.style.fontSize),n=t-.4*e,i=.7*n;return{CW:n,CH:n,MH:i,MW:i,ML:(n-i)/2,MT:(n-i)/2,IW:0,IH:0,IL:0,IT:0,ISMARK:!1}},methods:{clickFunc:function(){this.$refs.file.click()},changeFunc:function(){var t=this;this.ISMARK=!0;var e=this.$refs.file.files[0];if(e){var n=new FileReader;n.readAsDataURL(e),n.onload=function(e){t.IMAGE=new Image,t.IMAGE.src=e.target.result,t.IMAGE.onload=function(e){t.IW=t.IMAGE.width,t.IH=t.IMAGE.height;var n=1;t.IW>t.IH?(n=t.IW/t.CW,t.IW=t.CW,t.IH=t.IH/n):(n=t.IH/t.CH,t.IH=t.CH,t.IW=t.IW/n),t.IL=(t.CW-t.IW)/2,t.IT=(t.CH-t.IH)/2,t.drawImage()}}}},scaleFunc:function(t){if(this.IMAGE){var e=this.IW/this.IH,n=20,i=n/e;t?(this.IW+=n,this.IH+=i):(this.IW-=n,this.IH-=i),this.drawImage()}},startFunc:function(t){if(this.IMAGE){var e=t.changedTouches[0];this.startX=e.clientX,this.startY=e.clientY}},moveFunc:function(t){if(this.IMAGE){var e=t.changedTouches[0];this.changeX=e.clientX-this.startX,this.changeY=e.clientY-this.startY,(Math.abs(this.changeX)>10||Math.abs(this.chageY)>10)&&(this.IL+=this.changeX,this.IT+=this.changeY,this.drawImage(),this.startX=e.clientX,this.startY=e.clientY)}},saveFunc:function(){if(this.IMAGE){var t=this.CTX.getImageData(this.ML,this.MT,this.MW,this.MH),e=document.createElement("canvas"),n=e.getContext("2d");e.width=this.MW,e.height=this.MH,n.putImageData(t,0,0,0,0,this.MW,this.MH),this.$emit("saveImage",e.toDataURL("image/png"))}},drawImage:function(){this.CTX=this.$refs.canvas.getContext("2d"),this.CTX.clearRect(0,0,this.CW,this.CH),this.CTX.drawImage(this.IMAGE,this.IL,this.IT,this.IW,this.IH)}}}),u=o,h=(n("532b"),n("2877")),l=Object(h["a"])(u,c,r,!1,null,"7855a26b",null),f=l.exports,d={data:function(){return{isSave:!1,data:""}},components:{ClipImage:f},methods:{saveImage:function(t){console.log("imageData",t),this.isSave=!0,this.data=t},change:function(){this.isSave=!1}}},p=d,v=(n("7c55"),Object(h["a"])(p,a,s,!1,null,null,null)),I=v.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(I)}}).$mount("#app")},"7c55":function(t,e,n){"use strict";var i=n("2395"),a=n.n(i);a.a},"983d":function(t,e,n){}});
//# sourceMappingURL=app.0620e2e4.js.map