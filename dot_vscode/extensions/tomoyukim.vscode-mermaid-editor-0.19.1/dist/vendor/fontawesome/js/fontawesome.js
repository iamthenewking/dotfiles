/*! For license information please see fontawesome.js.LICENSE.txt */
!function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},r=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),r.forEach((function(e){n(t,e,a[e])}))}return t}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],a=!0,r=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(n.push(o.value),!e||n.length!==e);a=!0);}catch(t){r=!0,i=t}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=function(){},c={},s={},l=null,f={mark:o,measure:o};try{"undefined"!=typeof window&&(c=window),"undefined"!=typeof document&&(s=document),"undefined"!=typeof MutationObserver&&(l=MutationObserver),"undefined"!=typeof performance&&(f=performance)}catch(t){}var u=(c.navigator||{}).userAgent,d=void 0===u?"":u,m=c,p=s,h=l,g=f,v=!!m.document,b=!!p.documentElement&&!!p.head&&"function"==typeof p.addEventListener&&"function"==typeof p.createElement,y=~d.indexOf("MSIE")||~d.indexOf("Trident/"),w="___FONT_AWESOME___",x=16,k="fa",A="svg-inline--fa",C="data-fa-i2svg",O="data-fa-pseudo-element",P="data-fa-pseudo-element-pending",S="data-prefix",N="data-icon",M="fontawesome-i2svg",z="async",E=["HTML","HEAD","STYLE","SCRIPT"],j=function(){try{return!0}catch(t){return!1}}(),L={fas:"solid",far:"regular",fal:"light",fad:"duotone",fab:"brands",fak:"kit",fa:"solid"},R={solid:"fas",regular:"far",light:"fal",duotone:"fad",brands:"fab",kit:"fak"},I="fa-layers-text",_=/Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i,T={900:"fas",400:"far",normal:"far",300:"fal"},Y=[1,2,3,4,5,6,7,8,9,10],H=Y.concat([11,12,13,14,15,16,17,18,19,20]),F=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],D={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},U=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",D.GROUP,D.SWAP_OPACITY,D.PRIMARY,D.SECONDARY].concat(Y.map((function(t){return"".concat(t,"x")}))).concat(H.map((function(t){return"w-".concat(t)}))),W=m.FontAwesomeConfig||{};p&&"function"==typeof p.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(t){var e=r(t,2),n=e[0],a=e[1],i=function(t){return""===t||"false"!==t&&("true"===t||t)}(function(t){var e=p.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}(n));null!=i&&(W[a]=i)}));var q=a({},{familyPrefix:k,replacementClass:A,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},W);q.autoReplaceSvg||(q.observeMutations=!1);var V=a({},q);m.FontAwesomeConfig=V;var X=m||{};X[w]||(X[w]={}),X[w].styles||(X[w].styles={}),X[w].hooks||(X[w].hooks={}),X[w].shims||(X[w].shims=[]);var B=X[w],G=[],K=!1;function J(t){b&&(K?setTimeout(t,0):G.push(t))}b&&((K=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState))||p.addEventListener("DOMContentLoaded",(function t(){p.removeEventListener("DOMContentLoaded",t),K=1,G.map((function(t){return t()}))})));var Q,Z="pending",$="settled",tt="fulfilled",et="rejected",nt=function(){},at="undefined"!=typeof global&&void 0!==global.process&&"function"==typeof global.process.emit,rt="undefined"==typeof setImmediate?setTimeout:setImmediate,it=[];function ot(){for(var t=0;t<it.length;t++)it[t][0](it[t][1]);it=[],Q=!1}function ct(t,e){it.push([t,e]),Q||(Q=!0,rt(ot,0))}function st(t){var e=t.owner,n=e._state,a=e._data,r=t[n],i=t.then;if("function"==typeof r){n=tt;try{a=r(a)}catch(t){dt(i,t)}}lt(i,a)||(n===tt&&ft(i,a),n===et&&dt(i,a))}function lt(e,n){var a;try{if(e===n)throw new TypeError("A promises callback cannot return that same promise.");if(n&&("function"==typeof n||"object"===t(n))){var r=n.then;if("function"==typeof r)return r.call(n,(function(t){a||(a=!0,n===t?ut(e,t):ft(e,t))}),(function(t){a||(a=!0,dt(e,t))})),!0}}catch(t){return a||dt(e,t),!0}return!1}function ft(t,e){t!==e&&lt(t,e)||ut(t,e)}function ut(t,e){t._state===Z&&(t._state=$,t._data=e,ct(pt,t))}function dt(t,e){t._state===Z&&(t._state=$,t._data=e,ct(ht,t))}function mt(t){t._then=t._then.forEach(st)}function pt(t){t._state=tt,mt(t)}function ht(t){t._state=et,mt(t),!t._handled&&at&&global.process.emit("unhandledRejection",t._data,t)}function gt(t){global.process.emit("rejectionHandled",t)}function vt(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof vt==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,e){function n(t){dt(e,t)}try{t((function(t){ft(e,t)}),n)}catch(t){n(t)}}(t,this)}vt.prototype={constructor:vt,_state:Z,_then:null,_data:void 0,_handled:!1,then:function(t,e){var n={owner:this,then:new this.constructor(nt),fulfilled:t,rejected:e};return!e&&!t||this._handled||(this._handled=!0,this._state===et&&at&&ct(gt,this)),this._state===tt||this._state===et?ct(st,n):this._then.push(n),n.then},catch:function(t){return this.then(null,t)}},vt.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new vt((function(e,n){var a=[],r=0;function i(t){return r++,function(n){a[t]=n,--r||e(a)}}for(var o,c=0;c<t.length;c++)(o=t[c])&&"function"==typeof o.then?o.then(i(c),n):a[c]=o;r||e(a)}))},vt.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new vt((function(e,n){for(var a,r=0;r<t.length;r++)(a=t[r])&&"function"==typeof a.then?a.then(e,n):e(a)}))},vt.resolve=function(e){return e&&"object"===t(e)&&e.constructor===vt?e:new vt((function(t){t(e)}))},vt.reject=function(t){return new vt((function(e,n){n(t)}))};var bt="function"==typeof Promise?Promise:vt,yt=x,wt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xt(t){if(t&&b){var e=p.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=p.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return p.head.insertBefore(e,a),t}}var kt="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function At(){for(var t=12,e="";t-- >0;)e+=kt[62*Math.random()|0];return e}function Ct(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ot(t){return t.classList?Ct(t.classList):(t.getAttribute("class")||"").split(" ").filter((function(t){return t}))}function Pt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function St(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,": ").concat(t[n],";")}),"")}function Nt(t){return t.size!==wt.size||t.x!==wt.x||t.y!==wt.y||t.rotate!==wt.rotate||t.flipX||t.flipY}function Mt(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(32*e.x,", ").concat(32*e.y,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),c="rotate(".concat(e.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(c)},path:{transform:"translate(".concat(a/2*-1," -256)")}}}var zt={x:0,y:0,width:"100%",height:"100%"};function Et(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function jt(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,c=t.transform,s=t.symbol,l=t.title,f=t.maskId,u=t.titleId,d=t.extra,m=t.watchable,p=void 0!==m&&m,h=r.found?r:n,g=h.width,v=h.height,b="fak"===i,y=b?"":"fa-w-".concat(Math.ceil(g/v*16)),w=[V.replacementClass,o?"".concat(V.familyPrefix,"-").concat(o):"",y].filter((function(t){return-1===d.classes.indexOf(t)})).filter((function(t){return""!==t||!!t})).concat(d.classes).join(" "),x={children:[],attributes:a({},d.attributes,{"data-prefix":i,"data-icon":o,class:w,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(v)})},k=b&&!~d.classes.indexOf("fa-fw")?{width:"".concat(g/v*16*.0625,"em")}:{};p&&(x.attributes[C]=""),l&&x.children.push({tag:"title",attributes:{id:x.attributes["aria-labelledby"]||"title-".concat(u||At())},children:[l]});var A=a({},x,{prefix:i,iconName:o,main:n,mask:r,maskId:f,transform:c,symbol:s,styles:a({},k,d.styles)}),O=r.found&&n.found?function(t){var e,n=t.children,r=t.attributes,i=t.main,o=t.mask,c=t.maskId,s=t.transform,l=i.width,f=i.icon,u=o.width,d=o.icon,m=Mt({transform:s,containerWidth:u,iconWidth:l}),p={tag:"rect",attributes:a({},zt,{fill:"white"})},h=f.children?{children:f.children.map(Et)}:{},g={tag:"g",attributes:a({},m.inner),children:[Et(a({tag:f.tag,attributes:a({},f.attributes,m.path)},h))]},v={tag:"g",attributes:a({},m.outer),children:[g]},b="mask-".concat(c||At()),y="clip-".concat(c||At()),w={tag:"mask",attributes:a({},zt,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:(e=d,"g"===e.tag?e.children:[e])},w]};return n.push(x,{tag:"rect",attributes:a({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(b,")")},zt)}),{children:n,attributes:r}}(A):function(t){var e=t.children,n=t.attributes,r=t.main,i=t.transform,o=St(t.styles);if(o.length>0&&(n.style=o),Nt(i)){var c=Mt({transform:i,containerWidth:r.width,iconWidth:r.width});e.push({tag:"g",attributes:a({},c.outer),children:[{tag:"g",attributes:a({},c.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:a({},r.icon.attributes,c.path)}]}]})}else e.push(r.icon);return{children:e,attributes:n}}(A),P=O.children,S=O.attributes;return A.children=P,A.attributes=S,s?function(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:a({},i,{id:!0===o?"".concat(e,"-").concat(V.familyPrefix,"-").concat(n):o}),children:r}]}]}(A):function(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,c=t.transform;if(Nt(c)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=St(a({},o,{"transform-origin":"".concat(s.x+c.x/16,"em ").concat(s.y+c.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}(A)}function Lt(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,c=t.extra,s=t.watchable,l=void 0!==s&&s,f=a({},c.attributes,o?{title:o}:{},{class:c.classes.join(" ")});l&&(f[C]="");var u=a({},c.styles);Nt(i)&&(u.transform=function(t){var e=t.transform,n=t.width,a=void 0===n?x:n,r=t.height,i=void 0===r?x:r,o=t.startCentered,c=void 0!==o&&o,s="";return s+=c&&y?"translate(".concat(e.x/yt-a/2,"em, ").concat(e.y/yt-i/2,"em) "):c?"translate(calc(-50% + ".concat(e.x/yt,"em), calc(-50% + ").concat(e.y/yt,"em)) "):"translate(".concat(e.x/yt,"em, ").concat(e.y/yt,"em) "),(s+="scale(".concat(e.size/yt*(e.flipX?-1:1),", ").concat(e.size/yt*(e.flipY?-1:1),") "))+"rotate(".concat(e.rotate,"deg) ")}({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var d=St(u);d.length>0&&(f.style=d);var m=[];return m.push({tag:"span",attributes:f,children:[e]}),o&&m.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),m}var Rt=function(){},It=V.measurePerformance&&g&&g.mark&&g.measure?g:{mark:Rt,measure:Rt},_t='FA "5.15.4"',Tt=function(t){It.mark("".concat(_t," ").concat(t," ends")),It.measure("".concat(_t," ").concat(t),"".concat(_t," ").concat(t," begins"),"".concat(_t," ").concat(t," ends"))},Yt={begin:function(t){return It.mark("".concat(_t," ").concat(t," begins")),function(){return Tt(t)}},end:Tt},Ht=function(t,e,n,a){var r,i,o,c=Object.keys(t),s=c.length,l=void 0!==a?function(t,e){return function(n,a,r,i){return t.call(e,n,a,r,i)}}(e,a):e;for(void 0===n?(r=1,o=t[c[0]]):(r=0,o=n);r<s;r++)o=l(o,t[i=c[r]],i,t);return o};function Ft(t){for(var e="",n=0;n<t.length;n++)e+=("000"+t.charCodeAt(n).toString(16)).slice(-4);return e}function Dt(t,e){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).skipHooks,r=void 0!==n&&n,i=Object.keys(e).reduce((function(t,n){var a=e[n];return a.icon?t[a.iconName]=a.icon:t[n]=a,t}),{});"function"!=typeof B.hooks.addPack||r?B.styles[t]=a({},B.styles[t]||{},i):B.hooks.addPack(t,i),"fas"===t&&Dt("fa",e)}var Ut=B.styles,Wt=B.shims,qt={},Vt={},Xt={},Bt=function(){var t=function(t){return Ht(Ut,(function(e,n,a){return e[a]=Ht(n,t,{}),e}),{})};qt=t((function(t,e,n){return e[3]&&(t[e[3]]=n),t})),Vt=t((function(t,e,n){var a=e[2];return t[n]=n,a.forEach((function(e){t[e]=n})),t}));var e="far"in Ut;Xt=Ht(Wt,(function(t,n){var a=n[0],r=n[1],i=n[2];return"far"!==r||e||(r="fas"),t[a]={prefix:r,iconName:i},t}),{})};function Gt(t,e){return(qt[t]||{})[e]}Bt();var Kt=B.styles,Jt=function(){return{prefix:null,iconName:null,rest:[]}};function Qt(t){return t.reduce((function(t,e){var n=function(t,e){var n,a=e.split("-"),r=a[0],i=a.slice(1).join("-");return r!==t||""===i||(n=i,~U.indexOf(n))?null:i}(V.familyPrefix,e);if(Kt[e])t.prefix=e;else if(V.autoFetchSvg&&Object.keys(L).indexOf(e)>-1)t.prefix=e;else if(n){var a="fa"===t.prefix?Xt[n]||{prefix:null,iconName:null}:{};t.iconName=a.iconName||n,t.prefix=a.prefix||t.prefix}else e!==V.replacementClass&&0!==e.indexOf("fa-w-")&&t.rest.push(e);return t}),Jt())}function Zt(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}function $t(t){var e=t.tag,n=t.attributes,a=void 0===n?{}:n,r=t.children,i=void 0===r?[]:r;return"string"==typeof t?Pt(t):"<".concat(e," ").concat(function(t){return Object.keys(t||{}).reduce((function(e,n){return e+"".concat(n,'="').concat(Pt(t[n]),'" ')}),"").trim()}(a),">").concat(i.map($t).join(""),"</").concat(e,">")}var te=function(){};function ee(t){return"string"==typeof(t.getAttribute?t.getAttribute(C):null)}var ne={replace:function(t){var e=t[0],n=t[1].map((function(t){return $t(t)})).join("\n");if(e.parentNode&&e.outerHTML)e.outerHTML=n+(V.keepOriginalSource&&"svg"!==e.tagName.toLowerCase()?"\x3c!-- ".concat(e.outerHTML," Font Awesome fontawesome.com --\x3e"):"");else if(e.parentNode){var a=document.createElement("span");e.parentNode.replaceChild(a,e),a.outerHTML=n}},nest:function(t){var e=t[0],n=t[1];if(~Ot(e).indexOf(V.replacementClass))return ne.replace(t);var a=new RegExp("".concat(V.familyPrefix,"-.*"));delete n[0].attributes.style,delete n[0].attributes.id;var r=n[0].attributes.class.split(" ").reduce((function(t,e){return e===V.replacementClass||e.match(a)?t.toSvg.push(e):t.toNode.push(e),t}),{toNode:[],toSvg:[]});n[0].attributes.class=r.toSvg.join(" ");var i=n.map((function(t){return $t(t)})).join("\n");e.setAttribute("class",r.toNode.join(" ")),e.setAttribute(C,""),e.innerHTML=i}};function ae(t){t()}function re(t,e){var n="function"==typeof e?e:te;if(0===t.length)n();else{var a=ae;V.mutateApproach===z&&(a=m.requestAnimationFrame||ae),a((function(){var e=!0===V.autoReplaceSvg?ne.replace:ne[V.autoReplaceSvg]||ne.replace,a=Yt.begin("mutate");t.map(e),a(),n()}))}}var ie=!1;function oe(){ie=!1}var ce=null;function se(t){if(h&&V.observeMutations){var e=t.treeCallback,n=t.nodeCallback,a=t.pseudoElementsCallback,r=t.observeMutationsRoot,i=void 0===r?p:r;ce=new h((function(t){ie||Ct(t).forEach((function(t){if("childList"===t.type&&t.addedNodes.length>0&&!ee(t.addedNodes[0])&&(V.searchPseudoElements&&a(t.target),e(t.target)),"attributes"===t.type&&t.target.parentNode&&V.searchPseudoElements&&a(t.target.parentNode),"attributes"===t.type&&ee(t.target)&&~F.indexOf(t.attributeName))if("class"===t.attributeName){var r=Qt(Ot(t.target)),i=r.prefix,o=r.iconName;i&&t.target.setAttribute("data-prefix",i),o&&t.target.setAttribute("data-icon",o)}else n(t.target)}))})),b&&ce.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}var le=function(t){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce((function(t,e){var n=e.toLowerCase().split("-"),a=n[0],r=n.slice(1).join("-");if(a&&"h"===r)return t.flipX=!0,t;if(a&&"v"===r)return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(a){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r}return t}),e):e};function fe(t){var e=function(t){var e,n,a=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),i=void 0!==t.innerText?t.innerText.trim():"",o=Qt(Ot(t));return a&&r&&(o.prefix=a,o.iconName=r),o.prefix&&i.length>1?o.iconName=(e=o.prefix,n=t.innerText,(Vt[e]||{})[n]):o.prefix&&1===i.length&&(o.iconName=Gt(o.prefix,Ft(t.innerText))),o}(t),n=e.iconName,a=e.prefix,r=e.rest,i=function(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce((function(t,e){var n=e.split(":"),a=n[0],r=n.slice(1);return a&&r.length>0&&(t[a]=r.join(":").trim()),t}),{})),n}(t),o=function(t){return le(t.getAttribute("data-fa-transform"))}(t),c=function(t){var e=t.getAttribute("data-fa-symbol");return null!==e&&(""===e||e)}(t),s=function(t){var e=Ct(t.attributes).reduce((function(t,e){return"class"!==t.name&&"style"!==t.name&&(t[e.name]=e.value),t}),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return V.autoA11y&&(n?e["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(a||At()):(e["aria-hidden"]="true",e.focusable="false")),e}(t),l=function(t){var e=t.getAttribute("data-fa-mask");return e?Qt(e.split(" ").map((function(t){return t.trim()}))):Jt()}(t);return{iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:o,symbol:c,mask:l,maskId:t.getAttribute("data-fa-mask-id"),extra:{classes:r,styles:i,attributes:s}}}function ue(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}ue.prototype=Object.create(Error.prototype),ue.prototype.constructor=ue;var de={fill:"currentColor"},me={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},pe={tag:"path",attributes:a({},de,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},he=a({},me,{attributeName:"opacity"}),ge={tag:"g",children:[pe,{tag:"circle",attributes:a({},de,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:a({},me,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:a({},he,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:a({},de,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:a({},he,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:a({},de,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:a({},he,{values:"0;0;1;1;0;0;"})}]}]},ve=B.styles;function be(t){var e=t[0],n=t[1],a=r(t.slice(4),1)[0];return{found:!0,width:e,height:n,icon:Array.isArray(a)?{tag:"g",attributes:{class:"".concat(V.familyPrefix,"-").concat(D.GROUP)},children:[{tag:"path",attributes:{class:"".concat(V.familyPrefix,"-").concat(D.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(V.familyPrefix,"-").concat(D.PRIMARY),fill:"currentColor",d:a[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:a}}}}function ye(t,e){return new bt((function(n,a){var r={found:!1,width:512,height:512,icon:ge};if(t&&e&&ve[e]&&ve[e][t])return n(be(ve[e][t]));t&&e&&!V.showMissingIcons?a(new ue("Icon is missing for prefix ".concat(e," with icon name ").concat(t))):n(r)}))}var we=B.styles;function xe(t){var e=fe(t);return~e.extra.classes.indexOf(I)?function(t,e){var n=e.title,a=e.transform,r=e.extra,i=null,o=null;if(y){var c=parseInt(getComputedStyle(t).fontSize,10),s=t.getBoundingClientRect();i=s.width/c,o=s.height/c}return V.autoA11y&&!n&&(r.attributes["aria-hidden"]="true"),bt.resolve([t,Lt({content:t.innerHTML,width:i,height:o,transform:a,title:n,extra:r,watchable:!0})])}(t,e):function(t,e){var n=e.iconName,a=e.title,i=e.titleId,o=e.prefix,c=e.transform,s=e.symbol,l=e.mask,f=e.maskId,u=e.extra;return new bt((function(e,d){bt.all([ye(n,o),ye(l.iconName,l.prefix)]).then((function(l){var d=r(l,2),m=d[0],p=d[1];e([t,jt({icons:{main:m,mask:p},prefix:o,iconName:n,transform:c,symbol:s,mask:p,maskId:f,title:a,titleId:i,extra:u,watchable:!0})])}))}))}(t,e)}function ke(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(b){var n=p.documentElement.classList,a=function(t){return n.add("".concat(M,"-").concat(t))},r=function(t){return n.remove("".concat(M,"-").concat(t))},i=V.autoFetchSvg?Object.keys(L):Object.keys(we),o=[".".concat(I,":not([").concat(C,"])")].concat(i.map((function(t){return".".concat(t,":not([").concat(C,"])")}))).join(", ");if(0!==o.length){var c=[];try{c=Ct(t.querySelectorAll(o))}catch(t){}if(c.length>0){a("pending"),r("complete");var s=Yt.begin("onTree"),l=c.reduce((function(t,e){try{var n=xe(e);n&&t.push(n)}catch(t){j||t instanceof ue&&console.error(t)}return t}),[]);return new bt((function(t,n){bt.all(l).then((function(n){re(n,(function(){a("active"),a("complete"),r("pending"),"function"==typeof e&&e(),s(),t()}))})).catch((function(){s(),n()}))}))}}}}function Ae(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;xe(t).then((function(t){t&&re([t],e)}))}function Ce(t,e){var n="".concat(P).concat(e.replace(":","-"));return new bt((function(r,i){if(null!==t.getAttribute(n))return r();var o=Ct(t.children).filter((function(t){return t.getAttribute(O)===e}))[0],c=m.getComputedStyle(t,e),s=c.getPropertyValue("font-family").match(_),l=c.getPropertyValue("font-weight"),f=c.getPropertyValue("content");if(o&&!s)return t.removeChild(o),r();if(s&&"none"!==f&&""!==f){var u=c.getPropertyValue("content"),d=~["Solid","Regular","Light","Duotone","Brands","Kit"].indexOf(s[2])?R[s[2].toLowerCase()]:T[l],h=Ft(3===u.length?u.substr(1,1):u),g=Gt(d,h),v=g;if(!g||o&&o.getAttribute(S)===d&&o.getAttribute(N)===v)r();else{t.setAttribute(n,v),o&&t.removeChild(o);var b={iconName:null,title:null,titleId:null,prefix:null,transform:wt,symbol:!1,mask:null,maskId:null,extra:{classes:[],styles:{},attributes:{}}},y=b.extra;y.attributes[O]=e,ye(g,d).then((function(i){var o=jt(a({},b,{icons:{main:i,mask:Jt()},prefix:d,iconName:v,extra:y,watchable:!0})),c=p.createElement("svg");":before"===e?t.insertBefore(c,t.firstChild):t.appendChild(c),c.outerHTML=o.map((function(t){return $t(t)})).join("\n"),t.removeAttribute(n),r()})).catch(i)}}else r()}))}function Oe(t){return bt.all([Ce(t,":before"),Ce(t,":after")])}function Pe(t){return!(t.parentNode===document.head||~E.indexOf(t.tagName.toUpperCase())||t.getAttribute(O)||t.parentNode&&"svg"===t.parentNode.tagName)}function Se(t){if(b)return new bt((function(e,n){var a=Ct(t.querySelectorAll("*")).filter(Pe).map(Oe),r=Yt.begin("searchPseudoElements");ie=!0,bt.all(a).then((function(){r(),oe(),e()})).catch((function(){r(),oe(),n()}))}))}var Ne="svg:not(:root).svg-inline--fa{overflow:visible}.svg-inline--fa{display:inline-block;font-size:inherit;height:1em;overflow:visible;vertical-align:-.125em}.svg-inline--fa.fa-lg{vertical-align:-.225em}.svg-inline--fa.fa-w-1{width:.0625em}.svg-inline--fa.fa-w-2{width:.125em}.svg-inline--fa.fa-w-3{width:.1875em}.svg-inline--fa.fa-w-4{width:.25em}.svg-inline--fa.fa-w-5{width:.3125em}.svg-inline--fa.fa-w-6{width:.375em}.svg-inline--fa.fa-w-7{width:.4375em}.svg-inline--fa.fa-w-8{width:.5em}.svg-inline--fa.fa-w-9{width:.5625em}.svg-inline--fa.fa-w-10{width:.625em}.svg-inline--fa.fa-w-11{width:.6875em}.svg-inline--fa.fa-w-12{width:.75em}.svg-inline--fa.fa-w-13{width:.8125em}.svg-inline--fa.fa-w-14{width:.875em}.svg-inline--fa.fa-w-15{width:.9375em}.svg-inline--fa.fa-w-16{width:1em}.svg-inline--fa.fa-w-17{width:1.0625em}.svg-inline--fa.fa-w-18{width:1.125em}.svg-inline--fa.fa-w-19{width:1.1875em}.svg-inline--fa.fa-w-20{width:1.25em}.svg-inline--fa.fa-pull-left{margin-right:.3em;width:auto}.svg-inline--fa.fa-pull-right{margin-left:.3em;width:auto}.svg-inline--fa.fa-border{height:1.5em}.svg-inline--fa.fa-li{width:2em}.svg-inline--fa.fa-fw{width:1.25em}.fa-layers svg.svg-inline--fa{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.fa-layers{display:inline-block;height:1em;position:relative;text-align:center;vertical-align:-.125em;width:1em}.fa-layers svg.svg-inline--fa{-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter,.fa-layers-text{display:inline-block;position:absolute;text-align:center}.fa-layers-text{left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transform-origin:center center;transform-origin:center center}.fa-layers-counter{background-color:#ff253a;border-radius:1em;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff;height:1.5em;line-height:1;max-width:5em;min-width:1.5em;overflow:hidden;padding:.25em;right:0;text-overflow:ellipsis;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-bottom-right{bottom:0;right:0;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom right;transform-origin:bottom right}.fa-layers-bottom-left{bottom:0;left:0;right:auto;top:auto;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:bottom left;transform-origin:bottom left}.fa-layers-top-right{right:0;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top right;transform-origin:top right}.fa-layers-top-left{left:0;right:auto;top:0;-webkit-transform:scale(.25);transform:scale(.25);-webkit-transform-origin:top left;transform-origin:top left}.fa-lg{font-size:1.3333333333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s infinite linear;animation:fa-spin 2s infinite linear}.fa-pulse{-webkit-animation:fa-spin 1s infinite steps(8);animation:fa-spin 1s infinite steps(8)}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.fa-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.fa-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-180,:root .fa-rotate-270,:root .fa-rotate-90{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;position:relative;width:2.5em}.fa-stack-1x,.fa-stack-2x{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.svg-inline--fa.fa-stack-1x{height:1em;width:1.25em}.svg-inline--fa.fa-stack-2x{height:2em;width:2.5em}.fa-inverse{color:#fff}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}.svg-inline--fa .fa-primary{fill:var(--fa-primary-color,currentColor);opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa .fa-secondary{fill:var(--fa-secondary-color,currentColor);opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-primary{opacity:.4;opacity:var(--fa-secondary-opacity,.4)}.svg-inline--fa.fa-swap-opacity .fa-secondary{opacity:1;opacity:var(--fa-primary-opacity,1)}.svg-inline--fa mask .fa-primary,.svg-inline--fa mask .fa-secondary{fill:#000}.fad.fa-inverse{color:#fff}";function Me(){var t=k,e=A,n=V.familyPrefix,a=V.replacementClass,r=Ne;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(c,".".concat(a))}return r}var ze=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}var n,r;return n=t,r=[{key:"add",value:function(){for(var t=this,e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var i=n.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(e){t.definitions[e]=a({},t.definitions[e]||{},i[e]),Dt(e,i[e]),Bt()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,e){var n=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(n).map((function(e){var a=n[e],r=a.prefix,i=a.iconName,o=a.icon;t[r]||(t[r]={}),t[r][i]=o})),t}}],r&&e(n.prototype,r),t}();function Ee(){V.autoAddCss&&!_e&&(xt(Me()),_e=!0)}function je(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return $t(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(b){var e=p.createElement("div");return e.innerHTML=t.html,e.children}}}),t}function Le(t){var e=t.prefix,n=void 0===e?"fa":e,a=t.iconName;if(a)return Zt(Ie.definitions,n,a)||Zt(B.styles,n,a)}var Re,Ie=new ze,_e=!1,Te={i2svg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(b){Ee();var e=t.node,n=void 0===e?p:e,a=t.callback,r=void 0===a?function(){}:a;return V.searchPseudoElements&&Se(n),ke(n,r)}return bt.reject("Operation requires a DOM of some kind.")},css:Me,insertCss:function(){_e||(xt(Me()),_e=!0)},watch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.autoReplaceSvgRoot,n=t.observeMutationsRoot;!1===V.autoReplaceSvg&&(V.autoReplaceSvg=!0),V.observeMutations=!0,J((function(){Fe({autoReplaceSvgRoot:e}),se({treeCallback:ke,nodeCallback:Ae,pseudoElementsCallback:Se,observeMutationsRoot:n})}))}},Ye=(Re=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?wt:n,i=e.symbol,o=void 0!==i&&i,c=e.mask,s=void 0===c?null:c,l=e.maskId,f=void 0===l?null:l,u=e.title,d=void 0===u?null:u,m=e.titleId,p=void 0===m?null:m,h=e.classes,g=void 0===h?[]:h,v=e.attributes,b=void 0===v?{}:v,y=e.styles,w=void 0===y?{}:y;if(t){var x=t.prefix,k=t.iconName,A=t.icon;return je(a({type:"icon"},t),(function(){return Ee(),V.autoA11y&&(d?b["aria-labelledby"]="".concat(V.replacementClass,"-title-").concat(p||At()):(b["aria-hidden"]="true",b.focusable="false")),jt({icons:{main:be(A),mask:s?be(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:k,transform:a({},wt,r),symbol:o,title:d,maskId:f,titleId:p,extra:{attributes:b,styles:w,classes:g}})}))}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(t||{}).icon?t:Le(t||{}),r=e.mask;return r&&(r=(r||{}).icon?r:Le(r||{})),Re(n,a({},e,{mask:r}))}),He={noAuto:function(){V.autoReplaceSvg=!1,V.observeMutations=!1,ce&&ce.disconnect()},config:V,dom:Te,library:Ie,parse:{transform:function(t){return le(t)}},findIconDefinition:Le,icon:Ye,text:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.transform,r=void 0===n?wt:n,o=e.title,c=void 0===o?null:o,s=e.classes,l=void 0===s?[]:s,f=e.attributes,u=void 0===f?{}:f,d=e.styles,m=void 0===d?{}:d;return je({type:"text",content:t},(function(){return Ee(),Lt({content:t,transform:a({},wt,r),title:c,extra:{attributes:u,styles:m,classes:["".concat(V.familyPrefix,"-layers-text")].concat(i(l))}})}))},counter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.title,r=void 0===n?null:n,o=e.classes,c=void 0===o?[]:o,s=e.attributes,l=void 0===s?{}:s,f=e.styles,u=void 0===f?{}:f;return je({type:"counter",content:t},(function(){return Ee(),function(t){var e=t.content,n=t.title,r=t.extra,i=a({},r.attributes,n?{title:n}:{},{class:r.classes.join(" ")}),o=St(r.styles);o.length>0&&(i.style=o);var c=[];return c.push({tag:"span",attributes:i,children:[e]}),n&&c.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),c}({content:t.toString(),title:r,extra:{attributes:l,styles:u,classes:["".concat(V.familyPrefix,"-layers-counter")].concat(i(c))}})}))},layer:function(t){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).classes,n=void 0===e?[]:e;return je({type:"layer"},(function(){Ee();var e=[];return t((function(t){Array.isArray(t)?t.map((function(t){e=e.concat(t.abstract)})):e=e.concat(t.abstract)})),[{tag:"span",attributes:{class:["".concat(V.familyPrefix,"-layers")].concat(i(n)).join(" ")},children:e}]}))},toHtml:$t},Fe=function(){var t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).autoReplaceSvgRoot,e=void 0===t?p:t;(Object.keys(B.styles).length>0||V.autoFetchSvg)&&b&&V.autoReplaceSvg&&He.dom.i2svg({node:e})};!function(t){try{v&&(m.FontAwesome||(m.FontAwesome=He),J((function(){Fe(),se({treeCallback:ke,nodeCallback:Ae,pseudoElementsCallback:Se})}))),B.hooks=a({},B.hooks,{addPack:function(t,e){B.styles[t]=a({},B.styles[t]||{},e),Bt(),Fe()},addShims:function(t){var e;(e=B.shims).push.apply(e,i(t)),Bt(),Fe()}})}catch(t){if(!j)throw t}}()}();