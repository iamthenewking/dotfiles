import{Z as constant,$ as interpolateNumber,a0 as color,a1 as interpolateRgb,a2 as interpolateString}from"./mermaid-766fee4c.js";import{i as initRange}from"./init-cc95ec8e.js";function ascending(t,n){return null==t||null==n?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function descending(t,n){return null==t||null==n?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function bisector(t){let n,r,e;function i(t,e,i=0,a=t.length){if(i<a){if(0!==n(e,e))return a;do{const n=i+a>>>1;r(t[n],e)<0?i=n+1:a=n}while(i<a)}return i}return 2!==t.length?(n=ascending,r=(n,r)=>ascending(t(n),r),e=(n,r)=>t(n)-r):(n=t===ascending||t===descending?t:zero,r=t,e=t),{left:i,center:function(t,n,r=0,a=t.length){const o=i(t,n,r,a-1);return o>r&&e(t[o-1],n)>-e(t[o],n)?o-1:o},right:function(t,e,i=0,a=t.length){if(i<a){if(0!==n(e,e))return a;do{const n=i+a>>>1;r(t[n],e)<=0?i=n+1:a=n}while(i<a)}return i}}}function zero(){return 0}function number$1(t){return null===t?NaN:+t}const ascendingBisect=bisector(ascending),bisectRight=ascendingBisect.right;bisector(number$1).center;const bisect=bisectRight;var e10=Math.sqrt(50),e5=Math.sqrt(10),e2=Math.sqrt(2);function ticks(t,n,r){var e,i,a,o,c=-1;if(r=+r,(t=+t)==(n=+n)&&r>0)return[t];if((e=n<t)&&(i=t,t=n,n=i),0===(o=tickIncrement(t,n,r))||!isFinite(o))return[];if(o>0){let r=Math.round(t/o),e=Math.round(n/o);for(r*o<t&&++r,e*o>n&&--e,a=new Array(i=e-r+1);++c<i;)a[c]=(r+c)*o}else{o=-o;let r=Math.round(t*o),e=Math.round(n*o);for(r/o<t&&++r,e/o>n&&--e,a=new Array(i=e-r+1);++c<i;)a[c]=(r+c)/o}return e&&a.reverse(),a}function tickIncrement(t,n,r){var e=(n-t)/Math.max(0,r),i=Math.floor(Math.log(e)/Math.LN10),a=e/Math.pow(10,i);return i>=0?(a>=e10?10:a>=e5?5:a>=e2?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=e10?10:a>=e5?5:a>=e2?2:1)}function tickStep(t,n,r){var e=Math.abs(n-t)/Math.max(0,r),i=Math.pow(10,Math.floor(Math.log(e)/Math.LN10)),a=e/i;return a>=e10?i*=10:a>=e5?i*=5:a>=e2&&(i*=2),n<t?-i:i}function numberArray(t,n){n||(n=[]);var r,e=t?Math.min(n.length,t.length):0,i=n.slice();return function(a){for(r=0;r<e;++r)i[r]=t[r]*(1-a)+n[r]*a;return i}}function isNumberArray(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function genericArray(t,n){var r,e=n?n.length:0,i=t?Math.min(e,t.length):0,a=new Array(i),o=new Array(e);for(r=0;r<i;++r)a[r]=interpolate(t[r],n[r]);for(;r<e;++r)o[r]=n[r];return function(t){for(r=0;r<i;++r)o[r]=a[r](t);return o}}function date(t,n){var r=new Date;return t=+t,n=+n,function(e){return r.setTime(t*(1-e)+n*e),r}}function object(t,n){var r,e={},i={};for(r in null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={}),n)r in t?e[r]=interpolate(t[r],n[r]):i[r]=n[r];return function(t){for(r in e)i[r]=e[r](t);return i}}function interpolate(t,n){var r,e=typeof n;return null==n||"boolean"===e?constant(n):("number"===e?interpolateNumber:"string"===e?(r=color(n))?(n=r,interpolateRgb):interpolateString:n instanceof color?interpolateRgb:n instanceof Date?date:isNumberArray(n)?numberArray:Array.isArray(n)?genericArray:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?object:interpolateNumber)(t,n)}function interpolateRound(t,n){return t=+t,n=+n,function(r){return Math.round(t*(1-r)+n*r)}}function formatDecimal(t){return Math.abs(t=Math.round(t))>=1e21?t.toLocaleString("en").replace(/,/g,""):t.toString(10)}function formatDecimalParts(t,n){if((r=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var r,e=t.slice(0,r);return[e.length>1?e[0]+e.slice(2):e,+t.slice(r+1)]}function exponent(t){return(t=formatDecimalParts(Math.abs(t)))?t[1]:NaN}function formatGroup(t,n){return function(r,e){for(var i=r.length,a=[],o=0,c=t[0],u=0;i>0&&c>0&&(u+c+1>e&&(c=Math.max(1,e-u)),a.push(r.substring(i-=c,i+c)),!((u+=c+1)>e));)c=t[o=(o+1)%t.length];return a.reverse().join(n)}}function formatNumerals(t){return function(n){return n.replace(/[0-9]/g,(function(n){return t[+n]}))}}var prefixExponent,re=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function formatSpecifier(t){if(!(n=re.exec(t)))throw new Error("invalid format: "+t);var n;return new FormatSpecifier({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function FormatSpecifier(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function formatTrim(t){t:for(var n,r=t.length,e=1,i=-1;e<r;++e)switch(t[e]){case".":i=n=e;break;case"0":0===i&&(i=e),n=e;break;default:if(!+t[e])break t;i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t}function formatPrefixAuto(t,n){var r=formatDecimalParts(t,n);if(!r)return t+"";var e=r[0],i=r[1],a=i-(prefixExponent=3*Math.max(-8,Math.min(8,Math.floor(i/3))))+1,o=e.length;return a===o?e:a>o?e+new Array(a-o+1).join("0"):a>0?e.slice(0,a)+"."+e.slice(a):"0."+new Array(1-a).join("0")+formatDecimalParts(t,Math.max(0,n+a-1))[0]}function formatRounded(t,n){var r=formatDecimalParts(t,n);if(!r)return t+"";var e=r[0],i=r[1];return i<0?"0."+new Array(-i).join("0")+e:e.length>i+1?e.slice(0,i+1)+"."+e.slice(i+1):e+new Array(i-e.length+2).join("0")}formatSpecifier.prototype=FormatSpecifier.prototype,FormatSpecifier.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};const formatTypes={"%":(t,n)=>(100*t).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:formatDecimal,e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>formatRounded(100*t,n),r:formatRounded,s:formatPrefixAuto,X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function identity$1(t){return t}var locale,format,formatPrefix,map=Array.prototype.map,prefixes=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function formatLocale(t){var n=void 0===t.grouping||void 0===t.thousands?identity$1:formatGroup(map.call(t.grouping,Number),t.thousands+""),r=void 0===t.currency?"":t.currency[0]+"",e=void 0===t.currency?"":t.currency[1]+"",i=void 0===t.decimal?".":t.decimal+"",a=void 0===t.numerals?identity$1:formatNumerals(map.call(t.numerals,String)),o=void 0===t.percent?"%":t.percent+"",c=void 0===t.minus?"−":t.minus+"",u=void 0===t.nan?"NaN":t.nan+"";function f(t){var f=(t=formatSpecifier(t)).fill,s=t.align,l=t.sign,m=t.symbol,h=t.zero,p=t.width,d=t.comma,g=t.precision,y=t.trim,M=t.type;"n"===M?(d=!0,M="g"):formatTypes[M]||(void 0===g&&(g=12),y=!0,M="g"),(h||"0"===f&&"="===s)&&(h=!0,f="0",s="=");var v="$"===m?r:"#"===m&&/[boxX]/.test(M)?"0"+M.toLowerCase():"",b="$"===m?e:/[%p]/.test(M)?o:"",x=formatTypes[M],N=/[defgprs%]/.test(M);function w(t){var r,e,o,m=v,w=b;if("c"===M)w=x(t)+w,t="";else{var A=(t=+t)<0||1/t<0;if(t=isNaN(t)?u:x(Math.abs(t),g),y&&(t=formatTrim(t)),A&&0==+t&&"+"!==l&&(A=!1),m=(A?"("===l?l:c:"-"===l||"("===l?"":l)+m,w=("s"===M?prefixes[8+prefixExponent/3]:"")+w+(A&&"("===l?")":""),N)for(r=-1,e=t.length;++r<e;)if(48>(o=t.charCodeAt(r))||o>57){w=(46===o?i+t.slice(r+1):t.slice(r))+w,t=t.slice(0,r);break}}d&&!h&&(t=n(t,1/0));var k=m.length+t.length+w.length,S=k<p?new Array(p-k+1).join(f):"";switch(d&&h&&(t=n(S+t,S.length?p-w.length:1/0),S=""),s){case"<":t=m+t+w+S;break;case"=":t=m+S+t+w;break;case"^":t=S.slice(0,k=S.length>>1)+m+t+w+S.slice(k);break;default:t=S+m+t+w}return a(t)}return g=void 0===g?6:/[gprs]/.test(M)?Math.max(1,Math.min(21,g)):Math.max(0,Math.min(20,g)),w.toString=function(){return t+""},w}return{format:f,formatPrefix:function(t,n){var r=f(((t=formatSpecifier(t)).type="f",t)),e=3*Math.max(-8,Math.min(8,Math.floor(exponent(n)/3))),i=Math.pow(10,-e),a=prefixes[8+e/3];return function(t){return r(i*t)+a}}}}function defaultLocale(t){return locale=formatLocale(t),format=locale.format,formatPrefix=locale.formatPrefix,locale}function precisionFixed(t){return Math.max(0,-exponent(Math.abs(t)))}function precisionPrefix(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(exponent(n)/3)))-exponent(Math.abs(t)))}function precisionRound(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,exponent(n)-exponent(t))+1}function constants(t){return function(){return t}}function number(t){return+t}defaultLocale({thousands:",",grouping:[3],currency:["$",""]});var unit=[0,1];function identity(t){return t}function normalize(t,n){return(n-=t=+t)?function(r){return(r-t)/n}:constants(isNaN(n)?NaN:.5)}function clamper(t,n){var r;return t>n&&(r=t,t=n,n=r),function(r){return Math.max(t,Math.min(n,r))}}function bimap(t,n,r){var e=t[0],i=t[1],a=n[0],o=n[1];return i<e?(e=normalize(i,e),a=r(o,a)):(e=normalize(e,i),a=r(a,o)),function(t){return a(e(t))}}function polymap(t,n,r){var e=Math.min(t.length,n.length)-1,i=new Array(e),a=new Array(e),o=-1;for(t[e]<t[0]&&(t=t.slice().reverse(),n=n.slice().reverse());++o<e;)i[o]=normalize(t[o],t[o+1]),a[o]=r(n[o],n[o+1]);return function(n){var r=bisect(t,n,1,e)-1;return a[r](i[r](n))}}function copy(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function transformer(){var t,n,r,e,i,a,o=unit,c=unit,u=interpolate,f=identity;function s(){var t=Math.min(o.length,c.length);return f!==identity&&(f=clamper(o[0],o[t-1])),e=t>2?polymap:bimap,i=a=null,l}function l(n){return null==n||isNaN(n=+n)?r:(i||(i=e(o.map(t),c,u)))(t(f(n)))}return l.invert=function(r){return f(n((a||(a=e(c,o.map(t),interpolateNumber)))(r)))},l.domain=function(t){return arguments.length?(o=Array.from(t,number),s()):o.slice()},l.range=function(t){return arguments.length?(c=Array.from(t),s()):c.slice()},l.rangeRound=function(t){return c=Array.from(t),u=interpolateRound,s()},l.clamp=function(t){return arguments.length?(f=!!t||identity,s()):f!==identity},l.interpolate=function(t){return arguments.length?(u=t,s()):u},l.unknown=function(t){return arguments.length?(r=t,l):r},function(r,e){return t=r,n=e,s()}}function continuous(){return transformer()(identity,identity)}function tickFormat(t,n,r,e){var i,a=tickStep(t,n,r);switch((e=formatSpecifier(null==e?",f":e)).type){case"s":var o=Math.max(Math.abs(t),Math.abs(n));return null!=e.precision||isNaN(i=precisionPrefix(a,o))||(e.precision=i),formatPrefix(e,o);case"":case"e":case"g":case"p":case"r":null!=e.precision||isNaN(i=precisionRound(a,Math.max(Math.abs(t),Math.abs(n))))||(e.precision=i-("e"===e.type));break;case"f":case"%":null!=e.precision||isNaN(i=precisionFixed(a))||(e.precision=i-2*("%"===e.type))}return format(e)}function linearish(t){var n=t.domain;return t.ticks=function(t){var r=n();return ticks(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,r){var e=n();return tickFormat(e[0],e[e.length-1],null==t?10:t,r)},t.nice=function(r){null==r&&(r=10);var e,i,a=n(),o=0,c=a.length-1,u=a[o],f=a[c],s=10;for(f<u&&(i=u,u=f,f=i,i=o,o=c,c=i);s-- >0;){if((i=tickIncrement(u,f,r))===e)return a[o]=u,a[c]=f,n(a);if(i>0)u=Math.floor(u/i)*i,f=Math.ceil(f/i)*i;else{if(!(i<0))break;u=Math.ceil(u*i)/i,f=Math.floor(f*i)/i}e=i}return t},t}function linear(){var t=continuous();return t.copy=function(){return copy(t,linear())},initRange.apply(t,arguments),linearish(t)}export{copy as a,bisector as b,continuous as c,linear as l,tickStep as t};