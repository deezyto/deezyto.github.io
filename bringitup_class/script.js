!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=39)}([function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(21))},function(t,e,n){var i=n(4),r=n(18),o=n(23);t.exports=i?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var i=n(2);t.exports=!i((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,e,n){var i=n(3);t.exports=function(t){if(!i(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e){var n=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:n)(t)}},function(t,e,n){var i=n(0),r=n(1);t.exports=function(t,e){try{r(i,t,e)}catch(n){i[t]=e}return e}},function(t,e,n){var i=n(11),r=Function.toString;"function"!=typeof i.inspectSource&&(i.inspectSource=function(t){return r.call(t)}),t.exports=i.inspectSource},function(t,e,n){var i=n(0),r=n(9),o=i["__core-js_shared__"]||r("__core-js_shared__",{});t.exports=o},function(t,e,n){var i=n(28),r=n(11);(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.5.0",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,i=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+i).toString(36)}},function(t,e,n){var i=n(2);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!String(Symbol())}))},function(t,e,n){"use strict";var i,r,o=n(32),s=RegExp.prototype.exec,a=String.prototype.replace,l=s,c=(i=/a/,r=/b*/g,s.call(i,"a"),s.call(r,"a"),0!==i.lastIndex||0!==r.lastIndex),u=void 0!==/()??/.exec("")[1];(c||u)&&(l=function(t){var e,n,i,r,l=this;return u&&(n=new RegExp("^"+l.source+"$(?!\\s)",o.call(l))),c&&(e=l.lastIndex),i=s.call(l,t),c&&i&&(l.lastIndex=l.global?i.index+i[0].length:e),u&&i&&i.length>1&&a.call(i[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)})),i}),t.exports=l},function(t,e,n){"use strict";var i=n(17),r=n(5),o=n(33),s=n(34),a=n(8),l=n(7),c=n(35),u=n(37),d=Math.max,h=Math.min,p=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g;i("replace",2,(function(t,e,n){return[function(n,i){var r=l(this),o=null==n?void 0:n[t];return void 0!==o?o.call(n,r,i):e.call(String(r),n,i)},function(t,o){var l=n(e,t,this,o);if(l.done)return l.value;var p=r(t),f=String(this),v="function"==typeof o;v||(o=String(o));var y=p.global;if(y){var m=p.unicode;p.lastIndex=0}for(var g=[];;){var x=u(p,f);if(null===x)break;if(g.push(x),!y)break;""===String(x[0])&&(p.lastIndex=c(f,s(p.lastIndex),m))}for(var b,S="",_=0,w=0;w<g.length;w++){x=g[w];for(var E=String(x[0]),k=d(h(a(x.index),f.length),0),I=[],T=1;T<x.length;T++)I.push(void 0===(b=x[T])?b:String(b));var A=x.groups;if(v){var q=[E].concat(I,k,f);void 0!==A&&q.push(A);var j=String(o.apply(void 0,q))}else j=i(E,f,k,I,A,o);k>=_&&(S+=f.slice(_,k)+j,_=k+E.length)}return S+f.slice(_)}];function i(t,n,i,r,s,a){var l=i+t.length,c=r.length,u=v;return void 0!==s&&(s=o(s),u=f),e.call(a,u,(function(e,o){var a;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,i);case"'":return n.slice(l);case"<":a=s[o.slice(1,-1)];break;default:var u=+o;if(0===u)return e;if(u>c){var d=p(u/10);return 0===d?e:d<=c?void 0===r[d-1]?o.charAt(1):r[d-1]+o.charAt(1):e}a=r[u-1]}return void 0===a?"":a}))}}))},function(t,e,n){"use strict";var i=n(1),r=n(24),o=n(2),s=n(30),a=n(15),l=s("species"),c=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var h=s(t),p=!o((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),f=p&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[l]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return e=!0,null},n[h](""),!e}));if(!p||!f||"replace"===t&&!c||"split"===t&&!u){var v=/./[h],y=n(h,""[t],(function(t,e,n,i,r){return e.exec===a?p&&!r?{done:!0,value:v.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}})),m=y[0],g=y[1];r(String.prototype,t,m),r(RegExp.prototype,h,2==e?function(t,e){return g.call(t,this,e)}:function(t){return g.call(t,this)}),d&&i(RegExp.prototype[h],"sham",!0)}}},function(t,e,n){var i=n(4),r=n(19),o=n(5),s=n(22),a=Object.defineProperty;e.f=i?a:function(t,e,n){if(o(t),e=s(e,!0),o(n),r)try{return a(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var i=n(4),r=n(2),o=n(20);t.exports=!i&&!r((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var i=n(0),r=n(3),o=i.document,s=r(o)&&r(o.createElement);t.exports=function(t){return s?o.createElement(t):{}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var i=n(3);t.exports=function(t,e){if(!i(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!i(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!i(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var i=n(0),r=n(1),o=n(6),s=n(9),a=n(10),l=n(25),c=l.get,u=l.enforce,d=String(String).split("String");(t.exports=function(t,e,n,a){var l=!!a&&!!a.unsafe,c=!!a&&!!a.enumerable,h=!!a&&!!a.noTargetGet;"function"==typeof n&&("string"!=typeof e||o(n,"name")||r(n,"name",e),u(n).source=d.join("string"==typeof e?e:"")),t!==i?(l?!h&&t[e]&&(c=!0):delete t[e],c?t[e]=n:r(t,e,n)):c?t[e]=n:s(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||a(this)}))},function(t,e,n){var i,r,o,s=n(26),a=n(0),l=n(3),c=n(1),u=n(6),d=n(27),h=n(29),p=a.WeakMap;if(s){var f=new p,v=f.get,y=f.has,m=f.set;i=function(t,e){return m.call(f,t,e),e},r=function(t){return v.call(f,t)||{}},o=function(t){return y.call(f,t)}}else{var g=d("state");h[g]=!0,i=function(t,e){return c(t,g,e),e},r=function(t){return u(t,g)?t[g]:{}},o=function(t){return u(t,g)}}t.exports={set:i,get:r,has:o,enforce:function(t){return o(t)?r(t):i(t,{})},getterFor:function(t){return function(e){var n;if(!l(e)||(n=r(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e,n){var i=n(0),r=n(10),o=i.WeakMap;t.exports="function"==typeof o&&/native code/.test(r(o))},function(t,e,n){var i=n(12),r=n(13),o=i("keys");t.exports=function(t){return o[t]||(o[t]=r(t))}},function(t,e){t.exports=!1},function(t,e){t.exports={}},function(t,e,n){var i=n(0),r=n(12),o=n(6),s=n(13),a=n(14),l=n(31),c=r("wks"),u=i.Symbol,d=l?u:s;t.exports=function(t){return o(c,t)||(a&&o(u,t)?c[t]=u[t]:c[t]=d("Symbol."+t)),c[t]}},function(t,e,n){var i=n(14);t.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol()},function(t,e,n){"use strict";var i=n(5);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){var i=n(7);t.exports=function(t){return Object(i(t))}},function(t,e,n){var i=n(8),r=Math.min;t.exports=function(t){return t>0?r(i(t),9007199254740991):0}},function(t,e,n){"use strict";var i=n(36).charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},function(t,e,n){var i=n(8),r=n(7),o=function(t){return function(e,n){var o,s,a=String(r(e)),l=i(n),c=a.length;return l<0||l>=c?t?"":void 0:(o=a.charCodeAt(l))<55296||o>56319||l+1===c||(s=a.charCodeAt(l+1))<56320||s>57343?t?a.charAt(l):o:t?a.slice(l,l+2):s-56320+(o-55296<<10)+65536}};t.exports={codeAt:o(!1),charAt:o(!0)}},function(t,e,n){var i=n(38),r=n(15);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var o=n.call(t,e);if("object"!=typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,e)}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){"use strict";n.r(e);class i{constructor({container:t=null,buttons:e=null,next:n=null,prev:i=null,activeSelector:r="",animate:o,autoplay:s}={}){this.container=document.querySelector(t);try{this.slides=this.container.children}catch(t){}this.buttons=document.querySelectorAll(e),this.prev=document.querySelector(i),this.next=document.querySelector(n),this.prevModule=document.querySelectorAll(i),this.nextModule=document.querySelectorAll(n),this.slideIndex=1,this.activeSelector=r,this.autoplay=s,this.animate=o}}class r extends i{constructor(t){super(t)}showSlides(t){t>this.slides.length&&(this.slideIndex=1),t<1&&(this.slideIndex=this.slides.length),Array.from(this.slides).forEach(t=>{t.style.display="none"}),this.slides[this.slideIndex-1].style.display="block";try{3===t?(this.popUp=document.querySelector(".hanson"),this.popUp.style.opacity="0",setTimeout(()=>{this.popUp.classList.add("animated"),this.popUp.style.opacity="1",this.popUp.classList.add("slideInUp")},3e3)):this.popUp.classList.remove("slideInUp")}catch(t){}}plusSlides(t){this.showSlides(this.slideIndex+=t)}bindTriggers(){this.buttons.forEach(t=>{t.addEventListener("click",()=>{this.plusSlides(1)}),t.parentNode.previousElementSibling.addEventListener("click",t=>{1!==this.slideIndex&&(t.preventDefault(),this.slideIndex=1,this.showSlides(this.slideIndex))})}),this.prevModule.forEach(t=>{t.addEventListener("click",t=>{t.preventDefault(),this.plusSlides(-1)})}),this.nextModule.forEach(t=>{t.addEventListener("click",t=>{t.preventDefault(),this.plusSlides(0)})})}render(){try{this.bindTriggers(),this.showSlides(this.slideIndex)}catch(t){}}}class o extends i{constructor(t,e,n,i,r,o){super(t,e,n,i,r,o),this.slideNotButton=[],this.interval=0}decorizeSlider(){console.log(this.slides,"this slides",this.slideNotButton,"slideNotButton"),console.log(this.slideNotButton[0],"html"),Array.from(this.slides).forEach(t=>{t.classList.remove(this.activeSelector),"BUTTON"===t.tagName&&this.container.appendChild(t),this.animate&&(t.querySelector(".card__title").style.opacity="0.4",t.querySelector(".card__controls-arrow").style.opacity="0")}),this.slides[0].classList.add(this.activeSelector),this.animate&&(this.slides[0].querySelector(".card__title").style.opacity="1",this.slides[0].querySelector(".card__controls-arrow").style.opacity="1")}nextSlide(){this.container.appendChild(this.slides[0]),this.decorizeSlider()}setAutoplayInterval(){this.autoplay&&(this.interval=setInterval(()=>{this.nextSlide()},5e3))}bindTriggers(){["click","mouseover","mouseleave"].forEach(t=>{this.next.addEventListener(t,t=>{"click"===t.type?this.nextSlide():"mouseover"===t.type?clearInterval(this.interval):this.setAutoplayInterval()}),this.prev.addEventListener(t,t=>{if("click"===t.type){let t=this.slides[this.slides.length-1];"BUTTON"===this.slides[this.slides.length-1].tagName&&"BUTTON"===this.slides[this.slides.length-2].tagName&&(t=this.slides[this.slides.length-3]),this.container.insertBefore(t,this.slides[0]),this.decorizeSlider()}else"mouseover"===t.type?clearInterval(this.interval):this.setAutoplayInterval()}),this.container.addEventListener(t,t=>{"mouseover"===t.type?clearInterval(this.interval):"mouseleave"===t.type&&this.setAutoplayInterval()})})}init(){try{this.container.style.cssText="\n      display: flex;\n      flex-wrap: wrap;\n      overflow: hidden;\n      align-items: flex-start;\n      ",this.setAutoplayInterval(),this.bindTriggers(),this.decorizeSlider()}catch(t){}}}class s{constructor(t,e){this.buttons=document.querySelectorAll(t),this.overlay=document.querySelector(e),this.close=this.overlay.querySelector(".close"),this.onPlayerStateChange=this.onPlayerStateChange.bind(this)}bindTriggers(){this.buttons.forEach((t,e)=>{try{const n=t.closest(".module__video-item").nextElementSibling;e%2==0&&n.setAttribute("data-disabled","true")}catch(t){}t.addEventListener("click",()=>{t.closest(".module__video-item")&&"true"===t.closest(".module__video-item").getAttribute("data-disabled")||(this.activeButton=t,this.player?(this.overlay.style.display="flex",this.path!==t.getAttribute("data-url")&&(this.path=t.getAttribute("data-url"),this.player.loadVideoById({videoId:this.path}))):(this.path=t.getAttribute("data-url"),this.createPlayer(this.path)))})})}bindCloseButton(){this.close.addEventListener("click",()=>{this.overlay.style.display="none",this.player.stopVideo()})}createPlayer(t){this.player=new YT.Player("frame",{height:"100%",width:"100%",videoId:t,events:{onStateChange:this.onPlayerStateChange}}),this.overlay.style.display="flex"}onPlayerStateChange(t){try{const e=this.activeButton.closest(".module__video-item").nextElementSibling,n=this.activeButton.querySelector("svg").cloneNode(!0);0===t.data&&e.querySelector(".play__circle").classList.contains("closed")&&(e.querySelector(".play__circle").classList.remove("closed"),e.querySelector("svg").remove(),e.querySelector(".play__circle").appendChild(n),e.querySelector(".play__text").textContent="play video",e.querySelector(".play__text").classList.remove("attention"),e.style.cssText="\n            opacity: 1;\n            filter: none\n          ",e.setAttribute("data-disabled","false"))}catch(t){}}init(){if(this.buttons.length>0){const t=document.createElement("script");t.src="https://youtube.com/iframe_api";const e=document.querySelectorAll("script")[0];e.parentNode.insertBefore(t,e),this.bindTriggers(),this.bindCloseButton()}}}class a{constructor(t,e,n){this.firstTab=document.querySelector(t),this.secondTab=document.querySelector(e);try{this.firstItems=this.firstTab.querySelectorAll(n),this.secondItems=this.secondTab.querySelectorAll(n)}catch(t){}this.items=n,this.firstTabCounter=0,this.secondTabCouner=0}bindTriggers(t,e,n){t.addEventListener("click",()=>{n!==e.length-2?(e[n].style="display: flex; animation: fadeIn 1s;",n++):(e[n].style="display: flex; animation: fadeIn 1s;",e[e.length-1].remove())})}hideItems(t){t.forEach((t,e,n)=>{e!==n.length-1&&(t.style.display="none")})}init(){try{this.hideItems(this.firstItems),this.hideItems(this.secondItems),this.bindTriggers(this.firstTab,this.firstItems,this.firstTabCounter),this.bindTriggers(this.secondTab,this.secondItems,this.secondTabCouner)}catch(t){}}}n(16);class l{constructor(t){this.forms=document.querySelectorAll(t),this.inputs=document.querySelectorAll("input"),this.message={loading:"Відправка...",success:"Дякую. Скоро ми Вам зателефонуєм",failure:"Щось пішло не так..."},this.path="assets/question.php"}clearInputs(){this.inputs.forEach(t=>{t.value=""})}checkMailInputs(){document.querySelectorAll('[type="email"]').forEach(t=>{t.addEventListener("keypress",(function(t){t.key.match(/[^a-z 0-9 @.]/gi)&&t.preventDefault()}))})}initMask(){function t(t){let e=0,n="+1(___) ___-____".replace(/\D/g,""),i=this.value.replace(/\D/g,"");n.length>=i.length&&(i=n),this.value="+1(___) ___-____".replace(/./g,(function(t){return/[_\d]/.test(t)&&e<i.length?i.charAt(e++):e>=i.length?"":t})),"blur"===t.type?2===this.value.length&&(this.value=""):((t,e)=>{if(e.focus(),e.setSelectionRange)e.setSelectionRange(t,t);else if(e.createTextRange){let n=e.createTextRange();n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",t),n.select()}})(this.value.length,this)}document.querySelectorAll('[name="phone"]').forEach(e=>{e.addEventListener("input",t),e.addEventListener("focus",t),e.addEventListener("blur",t)})}async postData(t,e){let n=await fetch(t,{method:"POST",body:e});return await n.text()}init(){this.checkMailInputs(),this.initMask(),this.forms.forEach(t=>{t.addEventListener("submit",e=>{e.preventDefault();let n=document.createElement("div");n.style.cssText="\n          margin-top: 15px;\n          font-size: 18px;\n          color: black;\n        ",t.parentNode.appendChild(n),n.textContent=this.message.loading;const i=new FormData(t);this.postData(this.path,i).then(t=>{console.log(t),n.textContent=this.message.success}).catch(()=>{n.textContent=this.message.failure}).finally(()=>{t.reset(),setTimeout(()=>{n.remove()},5e3)})})})}}class c{constructor(t){this.buttons=document.querySelectorAll(t)}init(){this.buttons.forEach(t=>{t.addEventListener("click",()=>{try{const e=t.closest(".module__info-show").nextElementSibling;e.classList.toggle("msg"),e.style="margin-top: 20px; opacity: 1;",e.classList.add("animated"),e.classList.add("slideInDown")}catch(t){}})})}}class u{constructor(t){this.buttons=document.querySelectorAll(t),this.path={bitmap:{name:"bitmap",link:"../assets/img/Bitmap.jpg"},one:{name:"one",link:"../assets/img/feed_1.png"},two:{name:"two",link:"../assets/img/feed_2.png"},three:{name:"three",link:"../assets/img/main_light.jpg"},four:{name:"four",link:"../assets/img/module_bg.jpg"},five:{name:"five",link:"../assets/img/showup.jpg"},computer:{name:"computer",link:"../assets/img/slide_1_m.jpg"},site:{name:"site",link:"../assets/img/talk_bg.jpg"}}}donwloadFile(t){const e=document.createElement("a");e.setAttribute("href",this.path[t].link),e.setAttribute("download",this.path[t].name),e.style.display="none",document.body.appendChild(e),e.click(),document.body.removeChild(e)}init(){this.buttons.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),e.stopPropagation();let n=t.querySelector(".download__text").getAttribute("data-link");this.donwloadFile(n)})})}}window.addEventListener("DOMContentLoaded",()=>{new r({container:[".page",".moduleapp"],buttons:".next",prev:".prevmodule",next:".nextmodule"}).render();new o({container:".showup__content-slider",prev:".showup__prev",next:".showup__next",activeSelector:"card-active",animate:!0}).init();new o({container:".modules__content-slider",prev:".modules__info-btns .slick-prev",next:".modules__info-btns .slick-next",activeSelector:"card-active",animate:!0,autoplay:!0}).init();new o({container:".feed__slider",prev:".feed__slider .slick-prev",next:".feed__slider .slick-next",activeSelector:"feed__item-active"}).init(),new s(".showup .play",".overlay").init(),new s(".module__video-item .play",".overlay").init(),new a(".officerold",".officernew",".officer__card-item").init(),new l(".form").init(),new c(".plus__content").init(),new u(".download").init()})}]);