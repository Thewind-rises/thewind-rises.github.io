!function t(e,n,r){function o(a,c){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require;if(!c&&s)return s(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};e[a][0].call(u.exports,(function(t){return o(e[a][1][t]||t)}),u,u.exports,t,e,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,e,n){"use strict";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,a=t},f:function(){try{c||null==n.return||n.return()}finally{if(s)throw a}}}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return e};var t,e={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",u=c.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new _(r||[]);return i(a,"_invoke",{value:S(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var m="suspendedStart",v="suspendedYield",g="executing",p="completed",y={};function b(){}function L(){}function w(){}var E={};d(E,s,(function(){return this}));var O=Object.getPrototypeOf,x=O&&O(O(N([])));x&&x!==n&&o.call(x,s)&&(E=x);var G=w.prototype=b.prototype=Object.create(E);function A(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function I(t,e){function n(i,a,c,s){var l=h(t[i],t,a);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==r(d)&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(d).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,s)}))}s(l.arg)}var a;i(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function S(e,n,r){var o=m;return function(i,a){if(o===g)throw Error("Generator is already running");if(o===p){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=C(c,r);if(s){if(s===y)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===m)throw o=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=g;var l=h(e,n,r);if("normal"===l.type){if(o=r.done?p:v,l.arg===y)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=p,r.method="throw",r.arg=l.arg)}}}function C(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,C(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=h(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function B(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function N(e){if(e||""===e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(o.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return L.prototype=w,i(G,"constructor",{value:w,configurable:!0}),i(w,"constructor",{value:L,configurable:!0}),L.displayName=d(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===L||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,d(t,u,"GeneratorFunction")),t.prototype=Object.create(G),t},e.awrap=function(t){return{__await:t}},A(I.prototype),d(I.prototype,l,(function(){return this})),e.AsyncIterator=I,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new I(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},A(G),d(G,u,"Generator"),d(G,s,(function(){return this})),d(G,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=N,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(B),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),B(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;B(n)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:N(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),y}},e}function c(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function s(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){c(i,r,o,a,s,"next",t)}function s(t){c(i,r,o,a,s,"throw",t)}a(void 0)}))}}document.addEventListener("DOMContentLoaded",(function(){var t,e,n=!1,r=function(n){var r=function(t){return Array.from(t).reduce((function(t,e){return t+e.offsetWidth}),0)};if(n){var o=r(document.querySelector("#blog-info > a").children),i=r(document.getElementById("menus").children);t=o+i,e=document.getElementById("nav")}var a=window.innerWidth<=768||t>e.offsetWidth-120;e.classList.toggle("hide-menu",a)},i=function(){btf.sidebarPaddingR(),document.body.style.overflow="hidden",btf.animateIn(document.getElementById("menu-mask"),"to_show 0.5s"),document.getElementById("sidebar-menus").classList.add("open"),n=!0},c=function(){var t=document.body;t.style.overflow="",t.style.paddingRight="",btf.animateOut(document.getElementById("menu-mask"),"to_hide 0.5s"),document.getElementById("sidebar-menus").classList.remove("open"),n=!1},l=function(){var t=GLOBAL_CONFIG.highlight;if(t){var e=t.highlightCopy,n=t.highlightLang,r=t.highlightHeightLimit,o=t.plugin,i=GLOBAL_CONFIG_SITE.isHighlightShrink,a=e||n||void 0!==i,c="highlight.js"===o?document.querySelectorAll("figure.highlight"):document.querySelectorAll('pre[class*="language-"]');if((a||r)&&c.length){var s="prismjs"===o,l=!0===i?"closed":"",u=void 0!==i?'<i class="fas fa-angle-down expand"></i>':"",d=e?'<div class="copy-notice"></div><i class="fas fa-paste copy-button"></i>':"",f=function(t,e){if(void 0!==GLOBAL_CONFIG.Snackbar)btf.snackbarShow(e);else{var n=t.previousElementSibling;n.textContent=e,n.style.opacity=1,setTimeout((function(){n.style.opacity=0}),800)}},h=function(t){var e=t.parentNode;e.classList.add("copy-true");var n,r=window.getSelection(),o=document.createRange(),i=s?"pre code":"table .code pre";o.selectNodeContents(e.querySelectorAll("".concat(i))[0]),r.removeAllRanges(),r.addRange(o),n=t.lastChild,document.queryCommandSupported&&document.queryCommandSupported("copy")?(document.execCommand("copy"),f(n,GLOBAL_CONFIG.copy.success)):f(n,GLOBAL_CONFIG.copy.noSupport),r.removeAllRanges(),e.classList.remove("copy-true")},m=function(t){var e=t.target.classList;e.contains("expand")?this.classList.toggle("closed"):e.contains("copy-button")&&h(this)},v=function(){this.classList.toggle("expand-done")},g=function(t,e,n){var o=document.createDocumentFragment();if(a){var i=document.createElement("div");i.className="highlight-tools ".concat(l),i.innerHTML=u+t+d,btf.addEventListenerPjax(i,"click",m),o.appendChild(i)}if(r&&e.offsetHeight>r+30){var c=document.createElement("div");c.className="code-expand-btn",c.innerHTML='<i class="fas fa-angle-double-down"></i>',btf.addEventListenerPjax(c,"click",v),o.appendChild(c)}"hl"===n?e.insertBefore(o,e.firstChild):e.parentNode.insertBefore(o,e)};s?c.forEach((function(t){if(n){var e=t.getAttribute("data-language")||"Code",r='<div class="code-lang">'.concat(e,"</div>");btf.wrap(t,"figure",{class:"highlight"}),g(r,t)}else btf.wrap(t,"figure",{class:"highlight"}),g("",t)})):c.forEach((function(t){if(n){var e=t.getAttribute("class").split(" ")[1];"plain"!==e&&void 0!==e||(e="Code");var r='<div class="code-lang">'.concat(e,"</div>");g(r,t,"hl")}else g("",t,"hl")}))}}},u=function(){var t=s(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3?arguments[3]:void 0,o=e.length,i=new InfiniteGrid.JustifiedInfiniteGrid(t,{gap:5,isConstantSize:!0,sizeRange:[150,600],useResizeObserver:!0,observeChildren:!0,useTransform:!0});r&&btf.addGlobalFn("igOfTabs",(function(){i.destroy()}),!1,r);var a=function(t){return t.replace(/"/g,"&quot;")},c=GLOBAL_CONFIG.infinitegrid.buttonText,s=function(t,n){i.append(function(t,n){for(var r=[],i=(t-1)*n,c=0;c<n;++c){var s=i+c;if(s>=o)break;var l=e[s],u=l.alt?'alt="'.concat(a(l.alt),'"'):"",d=l.title?'title="'.concat(a(l.title),'"'):"";r.push('<div class="item ">\n            <img src="'.concat(l.url,'" data-grid-maintained-target="true" ').concat(u+d," />\n          </div>"))}return r}(t,n),t)},l=Math.ceil(o/10),u=btf.debounce((function(t){var e=(+t.groupKey||0)+1;s(e,10),e===l&&i.off("requestAppend",u)}),300);btf.setLoading.add(t),i.on("renderComplete",(function e(r){var o=r.updated,a=r.isResize,u=r.mounted;if(o.length&&u.length&&!a){if(btf.loadLightbox(t.querySelectorAll("img:not(.medium-zoom-image)")),i.getGroups().length===l)return btf.setLoading.remove(t),void i.off("renderComplete",e);n&&(btf.setLoading.remove(t),function(t){var e=document.createElement("button");e.textContent=c,e.addEventListener("click",(function e(n){n.target.removeEventListener("click",e),n.target.remove(),btf.setLoading.add(t),s(i.getGroups().length+1,10)})),t.insertAdjacentElement("afterend",e)}(t))}})),n?s(1,10):(i.on("requestAppend",u),i.renderItems()),btf.addGlobalFn("justifiedGallery",(function(){i.destroy()}))},f=function(){var t=s(a().mark((function t(e){var n,r,i=arguments;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=i.length>1&&void 0!==i[1]&&i[1],r=function(){var t=s(a().mark((function t(){var r,i,c,s,l,f,h,m;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=o(e),t.prev=1,r.s();case 3:if((i=r.n()).done){t.next=22;break}if(c=i.value,!btf.isHidden(c)){t.next=7;break}return t.abrupt("continue",20);case 7:if(n&&c.classList.contains("loaded")&&(c.querySelector(".gallery-items").innerHTML="",s=c.querySelector(":scope > button"),l=c.querySelector(":scope > .loading-container"),s&&s.remove(),l&&l.remove()),f="true"===c.getAttribute("data-button"),h=c.firstElementChild.textContent,c.classList.add("loaded"),"url"!==c.getAttribute("data-type")){t.next=17;break}return t.next=14,u(h);case 14:t.t0=t.sent,t.next=18;break;case 17:t.t0=JSON.parse(h);case 18:m=t.t0,d(c.lastElementChild,m,f,n);case 20:t.next=3;break;case 22:t.next=27;break;case 24:t.prev=24,t.t1=t.catch(1),r.e(t.t1);case 27:return t.prev=27,r.f(),t.finish(27);case 30:case"end":return t.stop()}}),t,null,[[1,24,27,30]])})));return function(){return t.apply(this,arguments)}}(),"function"!=typeof InfiniteGrid){t.next=6;break}r(),t.next=9;break;case 6:return t.next=8,getScript("".concat(GLOBAL_CONFIG.infinitegrid.js));case 8:r();case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=document.getElementById("rightside"),e=window.innerHeight+56,n=0,r=document.getElementById("page-header"),o="undefined"!=typeof chatBtn,i=GLOBAL_CONFIG.percent.rightside;if(document.body.scrollHeight<=e)t.classList.add("rightside-show");else{var a="",c=btf.throttle((function(){var c=window.scrollY||document.documentElement.scrollTop,s=function(t){var e=t>n;return n=t,e}(c);c>56?(""===a&&(r.classList.add("nav-fixed"),t.classList.add("rightside-show")),s?"down"!==a&&(r.classList.remove("nav-visible"),o&&window.chatBtn.hide(),a="down"):"up"!==a&&(r.classList.add("nav-visible"),o&&window.chatBtn.show(),a="up")):(a="",0===c&&r.classList.remove("nav-fixed","nav-visible"),t.classList.remove("rightside-show")),i&&function(t){var e=btf.getScrollPercent(t,document.body),n=document.getElementById("go-up");e<95?(n.classList.add("show-percent"),n.querySelector(".scroll-percent").textContent=e):n.classList.remove("show-percent")}(c),document.body.scrollHeight<=e&&t.classList.add("rightside-show")}),300);btf.addEventListenerPjax(window,"scroll",c,{passive:!0})}},m=function(){var t=GLOBAL_CONFIG_SITE.isToc,e=GLOBAL_CONFIG.isAnchor,n=document.getElementById("article-container");if(n&&(t||e)){var r,o,i,a,c;if(t){var s=document.getElementById("card-toc");o=s.querySelector(".toc-content"),r=o.querySelectorAll(".toc-link"),a=s.querySelector(".toc-percentage"),c=o.classList.contains("is-expand");btf.addEventListenerPjax(o,"click",(function(t){var e=t.target.closest(".toc-link");e&&(t.preventDefault(),btf.scrollToDest(btf.getEleTop(document.getElementById(decodeURI(e.getAttribute("href")).replace("#",""))),300),window.innerWidth<900&&s.classList.remove("open"))})),i=function(t){var e=t.getBoundingClientRect().top,n=o.scrollTop;e>document.documentElement.clientHeight-100&&(o.scrollTop=n+150),e<100&&(o.scrollTop=n-150)}}var l=n.querySelectorAll("h1,h2,h3,h4,h5,h6"),u="",d=btf.throttle((function(){var s=window.scrollY||document.documentElement.scrollTop;t&&GLOBAL_CONFIG.percent.toc&&(a.textContent=btf.getScrollPercent(s,n)),function(n){if(0===n)return!1;var a="",s="";if(l.forEach((function(t,e){if(n>btf.getEleTop(t)-80){var r=t.id;a=r?"#"+encodeURI(r):"",s=e}})),u!==s&&(e&&btf.updateAnchor(a),u=s,t)){if(o.querySelectorAll(".active").forEach((function(t){t.classList.remove("active")})),""===a)return;var d=r[s];if(d.classList.add("active"),setTimeout((function(){i(d)}),0),c)return;for(var f=d.parentNode;!f.matches(".toc");f=f.parentNode)f.matches("li")&&f.classList.add("active")}}(s)}),100);btf.addEventListenerPjax(window,"scroll",d,{passive:!0})}},v=function(t){var e=(window.globalFn||{}).themeChange||{};e&&Object.keys(e).forEach((function(n){var r=e[n];["disqus","disqusjs"].includes(n)?setTimeout((function(){return r(t)}),300):r(t)}))},g={readmode:function(){var t=document.body;t.classList.add("read-mode");var e=document.createElement("button");e.type="button",e.className="fas fa-sign-out-alt exit-readmode",t.appendChild(e);e.addEventListener("click",(function n(){t.classList.remove("read-mode"),e.remove(),e.removeEventListener("click",n)}))},darkmode:function(){var t="dark"===document.documentElement.getAttribute("data-theme")?"light":"dark";"dark"===t?(activateDarkMode(),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)):(activateLightMode(),void 0!==GLOBAL_CONFIG.Snackbar&&btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)),saveToLocal.set("theme",t,2),v(t)},"rightside-config":function(t){var e=t.firstElementChild;e.classList.contains("show")&&(e.classList.add("status"),setTimeout((function(){e.classList.remove("status")}),300)),e.classList.toggle("show")},"go-up":function(){btf.scrollToDest(0,500)},"hide-aside-btn":function(){var t=document.documentElement.classList,e=t.contains("hide-aside")?"show":"hide";saveToLocal.set("aside-status",e,2),t.toggle("hide-aside")},"mobile-toc-button":function(t){var e=document.getElementById("card-toc");e.style.transition="transform 0.3s ease-in-out",e.classList.toggle("open"),e.addEventListener("transitionend",(function(){e.style.transition=""}),{once:!0})},"chat-btn":function(){window.chatBtnFn()},translateLink:function(){window.translateFn.translatePage()}};document.getElementById("rightside").addEventListener("click",(function(t){var e=t.target.closest("[id]");e&&g[e.id]&&g[e.id](this)}));var p,y,b,L=function(){var t=document.querySelectorAll("#article-container .tabs");if(t.length){var e=function(t,e){Array.from(t).forEach((function(t){t.classList.remove("active"),t!==e&&t.id!==e||t.classList.add("active")}))};t.forEach((function(t){var n=!!t.querySelectorAll(".gallery-container");!function(t,n){btf.addEventListenerPjax(t.firstElementChild,"click",(function(t){var r=t.target.closest("button");if(!r.classList.contains("active")){e(this.children,r),this.classList.remove("no-default");var o=r.getAttribute("data-href"),i=this.nextElementSibling;if(e(i.children,o),n){btf.removeGlobalFnEvent("igOfTabs",this);var a=i.querySelectorAll(":scope > #".concat(o," .gallery-container"));a.length&&f(a,this)}}}))}(t,n),function(t){btf.addEventListenerPjax(t.lastElementChild,"click",(function(e){e.target.closest("button")&&btf.scrollToDest(btf.getEleTop(t),300)}))}(t)}))}},w=function(t){t.forEach((function(t){var e=t.getAttribute("datetime");t.textContent=btf.diffDate(e,!0),t.style.display="inline"}))};window.refreshFn=function(){var t,n;r(!0),e.classList.add("show"),GLOBAL_CONFIG_SITE.isPost?(void 0!==GLOBAL_CONFIG.noticeOutdate&&function(){var t=GLOBAL_CONFIG.noticeOutdate,e=t.limitDay,n=t.messagePrev,r=t.messageNext,o=t.position,i=btf.diffDate(GLOBAL_CONFIG_SITE.postUpdate);if(i>=e){var a=document.createElement("div");a.className="post-outdate-notice",a.textContent="".concat(n," ").concat(i," ").concat(r);var c=document.getElementById("article-container");"top"===o?c.insertBefore(a,c.firstChild):c.appendChild(a)}}(),GLOBAL_CONFIG.relativeDate.post&&w(document.querySelectorAll("#post-meta time"))):(GLOBAL_CONFIG.relativeDate.homepage&&w(document.querySelectorAll("#recent-posts time")),GLOBAL_CONFIG.runtime&&function(){var t=document.getElementById("runtimeshow");if(t){var e=t.getAttribute("data-publishDate");t.textContent="".concat(btf.diffDate(e)," ").concat(GLOBAL_CONFIG.runtime)}}(),function(){var t=document.getElementById("last-push-date");if(t){var e=t.getAttribute("data-lastPushDate");t.textContent=btf.diffDate(e,!0)}}(),(t=document.querySelector("#aside-cat-list.expandBtn"))&&btf.addEventListenerPjax(t,"click",(function(t){var e=t.target;"I"===e.nodeName&&(t.preventDefault(),e.parentNode.classList.toggle("expand"))}),!0)),m(),GLOBAL_CONFIG_SITE.isHome&&((n=document.getElementById("scroll-down"))&&btf.addEventListenerPjax(n,"click",(function(){btf.scrollToDest(document.getElementById("content-inner").offsetTop,300)}))),l(),GLOBAL_CONFIG.isPhotoFigcaption&&document.querySelectorAll("#article-container img").forEach((function(t){var e=t.title||t.alt;if(e){var n=document.createElement("div");n.className="img-alt is-center",n.textContent=e,t.insertAdjacentElement("afterend",n)}})),h(),btf.removeGlobalFnEvent("justifiedGallery");var o,a=document.querySelectorAll("#article-container .gallery-container");a.length&&f(a),btf.loadLightbox(document.querySelectorAll("#article-container img:not(.no-lightbox)")),(o=document.querySelectorAll("#article-container table")).length&&o.forEach((function(t){t.closest(".highlight")||btf.wrap(t,"div",{class:"table-wrap"})})),function(){var t=document.querySelectorAll("#article-container .hide-button");if(t.length){var e=function(t){this.classList.add("open");var e=this.nextElementSibling.querySelectorAll(".gallery-container");e.length&&f(e)};t.forEach((function(t){t.addEventListener("click",e,{once:!0})}))}}(),L(),function(){var t=document.getElementById("switch-btn");if(t){var e=!1,n=document.getElementById("post-comment");btf.addEventListenerPjax(t,"click",(function(){n.classList.toggle("move"),e||"function"!=typeof loadOtherComment||(e=!0,loadOtherComment())}))}}(),btf.addEventListenerPjax(document.getElementById("toggle-menu"),"click",(function(){i()}))},refreshFn(),window.addEventListener("resize",(function(){r(!1),n&&btf.isHidden(document.getElementById("toggle-menu"))&&c()})),document.getElementById("menu-mask").addEventListener("click",(function(t){c()})),document.querySelector("#sidebar-menus .menus_items").addEventListener("click",(function(t){var e=t.target.closest(".site-page.group");e&&e.classList.toggle("hide")})),GLOBAL_CONFIG.islazyload&&(window.lazyLoadInstance=new LazyLoad({elements_selector:"img",threshold:0,data_src:"lazy-src"})),void 0!==GLOBAL_CONFIG.copyright&&(p=GLOBAL_CONFIG.copyright,y=p.limitCount,b=p.languages,document.body.addEventListener("copy",(function(t){t.preventDefault();var e=window.getSelection(0).toString(),n=e;return e.length>y&&(n="".concat(e,"\n\n\n").concat(b.author,"\n").concat(b.link).concat(window.location.href,"\n").concat(b.source,"\n").concat(b.info)),t.clipboardData?t.clipboardData.setData("text",n):window.clipboardData.setData("text",n)}))),GLOBAL_CONFIG.autoDarkmode&&window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(function(t){void 0===saveToLocal.get("theme")&&(t.matches?v("dark"):v("light"))}))}))},{}]},{},[1]);