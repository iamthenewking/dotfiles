import{c as ot,g as pt,s as mt,a as _t,b as kt,D as xt,B as vt,E as bt,f as wt,av as St,j as Y,k as Lt}from"./mermaid-42f7bf2b.js";import{o as Et}from"./ordinal-5695958c.js";import"./init-f9637058.js";function At(t){for(var n=t.length/6|0,e=new Array(n),i=0;i<n;)e[i]="#"+t.slice(6*i,6*++i);return e}const Tt=At("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");var tt=function(){var t=function(t,n,e,i){for(e=e||{},i=t.length;i--;e[t[i]]=n);return e},n=[1,9],e=[1,10],i=[1,5,10,12],s={trace:function(){},yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:function(t,n,e,i,s,r,o){var c=r.length-1;switch(s){case 7:const t=i.findOrCreateNode(r[c-4].trim().replaceAll('""','"')),n=i.findOrCreateNode(r[c-2].trim().replaceAll('""','"')),e=parseFloat(r[c].trim());i.addLink(t,n,e);break;case 8:case 9:case 11:this.$=r[c];break;case 10:this.$=r[c-1]}},table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:n,20:e},{1:[2,6],7:11,10:[1,12]},t(e,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(i,[2,8]),t(i,[2,9]),{19:[1,16]},t(i,[2,11]),{1:[2,1]},{1:[2,5]},t(e,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:n,20:e},{15:18,16:7,17:8,18:n,20:e},{18:[1,19]},t(e,[2,3]),{12:[1,20]},t(i,[2,10]),{15:21,16:7,17:8,18:n,20:e},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:function(t,n){if(!n.recoverable){var e=new Error(t);throw e.hash=n,e}this.trace(t)},parse:function(t){var n=[0],e=[],i=[null],s=[],r=this.table,o="",c=0,l=0,a=s.slice.call(arguments,1),h=Object.create(this.lexer),u={yy:{}};for(var f in this.yy)Object.prototype.hasOwnProperty.call(this.yy,f)&&(u.yy[f]=this.yy[f]);h.setInput(t,u.yy),u.yy.lexer=h,u.yy.parser=this,typeof h.yylloc>"u"&&(h.yylloc={});var y=h.yylloc;s.push(y);var d,p=h.options&&h.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,_,m,x,k,v,b,w,E={};;){if(_=n[n.length-1],this.defaultActions[_]?m=this.defaultActions[_]:((null===g||typeof g>"u")&&(d=void 0,"number"!=typeof(d=e.pop()||h.lex()||1)&&(d instanceof Array&&(d=(e=d).pop()),d=this.symbols_[d]||d),g=d),m=r[_]&&r[_][g]),typeof m>"u"||!m.length||!m[0]){var A;for(k in w=[],r[_])this.terminals_[k]&&k>2&&w.push("'"+this.terminals_[k]+"'");A=h.showPosition?"Parse error on line "+(c+1)+":\n"+h.showPosition()+"\nExpecting "+w.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(A,{text:h.match,token:this.terminals_[g]||g,line:h.yylineno,loc:y,expected:w})}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+g);switch(m[0]){case 1:n.push(g),i.push(h.yytext),s.push(h.yylloc),n.push(m[1]),g=null,l=h.yyleng,o=h.yytext,c=h.yylineno,y=h.yylloc;break;case 2:if(v=this.productions_[m[1]][1],E.$=i[i.length-v],E._$={first_line:s[s.length-(v||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(v||1)].first_column,last_column:s[s.length-1].last_column},p&&(E._$.range=[s[s.length-(v||1)].range[0],s[s.length-1].range[1]]),typeof(x=this.performAction.apply(E,[o,l,c,u.yy,m[1],i,s].concat(a)))<"u")return x;v&&(n=n.slice(0,-1*v*2),i=i.slice(0,-1*v),s=s.slice(0,-1*v)),n.push(this.productions_[m[1]][0]),i.push(E.$),s.push(E._$),b=r[n[n.length-2]][n[n.length-1]],n.push(b);break;case 3:return!0}}return!0}},r={EOF:1,parseError:function(t,n){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,n)},setInput:function(t,n){return this.yy=n||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var n=t.length,e=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),e.length-1&&(this.yylineno-=e.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:e?(e.length===i.length?this.yylloc.first_column:0)+i[i.length-e.length].length-e[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),n=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+n+"^"},test_match:function(t,n){var e,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],e=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),e)return e;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,n,e,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((e=this._input.match(this.rules[s[r]]))&&(!n||e[0].length>n[0].length)){if(n=e,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(e,s[r])))return t;if(this._backtrack){n=!1;continue}return!1}if(!this.options.flex)break}return n?!1!==(t=this.test_match(n,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{easy_keword_rules:!0},performAction:function(t,n,e,i){switch(e){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},rules:[/^(?:sankey-beta\b)/,/^(?:$)/,/^(?:((\u000D\u000A)|(\u000A)))/,/^(?:(\u002C))/,/^(?:(\u0022))/,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/,/^(?:(\u0022)(?!(\u0022)))/,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};function o(){this.yy={}}return s.lexer=r,o.prototype=s,s.Parser=o,new o}();tt.parser=tt;const H=tt;let q=[],Q=[],D={};const Mt=()=>{q=[],Q=[],D={},bt()};class Nt{constructor(t,n,e=0){this.source=t,this.target=n,this.value=e}}const Pt=(t,n,e)=>{q.push(new Nt(t,n,e))};class Ct{constructor(t){this.ID=t}}const It=t=>(t=wt.sanitizeText(t,ot()),D[t]||(D[t]=new Ct(t),Q.push(D[t])),D[t]),Ot=()=>Q,zt=()=>q,jt=()=>({nodes:Q.map((t=>({id:t.ID}))),links:q.map((t=>({source:t.source.ID,target:t.target.ID,value:t.value})))}),Dt={nodesMap:D,getConfig:()=>ot().sankey,getNodes:Ot,getLinks:zt,getGraph:jt,addLink:Pt,findOrCreateNode:It,getAccTitle:pt,setAccTitle:mt,getAccDescription:_t,setAccDescription:kt,getDiagramTitle:xt,setDiagramTitle:vt,clear:Mt};function at(t,n){let e;if(void 0===n)for(const n of t)null!=n&&(e<n||void 0===e&&n>=n)&&(e=n);else{let i=-1;for(let s of t)null!=(s=n(s,++i,t))&&(e<s||void 0===e&&s>=s)&&(e=s)}return e}function yt(t,n){let e;if(void 0===n)for(const n of t)null!=n&&(e>n||void 0===e&&n>=n)&&(e=n);else{let i=-1;for(let s of t)null!=(s=n(s,++i,t))&&(e>s||void 0===e&&s>=s)&&(e=s)}return e}function Z(t,n){let e=0;if(void 0===n)for(let n of t)(n=+n)&&(e+=n);else{let i=-1;for(let s of t)(s=+n(s,++i,t))&&(e+=s)}return e}function $t(t){return t.target.depth}function Bt(t){return t.depth}function Rt(t,n){return n-1-t.height}function dt(t,n){return t.sourceLinks.length?t.depth:n-1}function Ft(t){return t.targetLinks.length?t.depth:t.sourceLinks.length?yt(t.sourceLinks,$t)-1:0}function G(t){return function(){return t}}function lt(t,n){return X(t.source,n.source)||t.index-n.index}function ct(t,n){return X(t.target,n.target)||t.index-n.index}function X(t,n){return t.y0-n.y0}function J(t){return t.value}function Ut(t){return t.index}function Wt(t){return t.nodes}function Vt(t){return t.links}function ut(t,n){const e=t.get(n);if(!e)throw new Error("missing: "+n);return e}function ht({nodes:t}){for(const n of t){let t=n.y0,e=t;for(const e of n.sourceLinks)e.y0=t+e.width/2,t+=e.width;for(const t of n.targetLinks)t.y1=e+t.width/2,e+=t.width}}function Yt(){let t,n,e,i=0,s=0,r=1,o=1,c=24,l=8,a=Ut,h=dt,u=Wt,f=Vt,y=6;function d(){const d={nodes:u.apply(null,arguments),links:f.apply(null,arguments)};return function({nodes:t,links:n}){for(const[n,e]of t.entries())e.index=n,e.sourceLinks=[],e.targetLinks=[];const i=new Map(t.map(((n,e)=>[a(n,e,t),n])));for(const[t,e]of n.entries()){e.index=t;let{source:n,target:s}=e;"object"!=typeof n&&(n=e.source=ut(i,n)),"object"!=typeof s&&(s=e.target=ut(i,s)),n.sourceLinks.push(e),s.targetLinks.push(e)}if(null!=e)for(const{sourceLinks:n,targetLinks:i}of t)n.sort(e),i.sort(e)}(d),function({nodes:t}){for(const n of t)n.value=void 0===n.fixedValue?Math.max(Z(n.sourceLinks,J),Z(n.targetLinks,J)):n.fixedValue}(d),function({nodes:t}){const n=t.length;let e=new Set(t),i=new Set,s=0;for(;e.size;){for(const t of e){t.depth=s;for(const{target:n}of t.sourceLinks)i.add(n)}if(++s>n)throw new Error("circular link");e=i,i=new Set}}(d),function({nodes:t}){const n=t.length;let e=new Set(t),i=new Set,s=0;for(;e.size;){for(const t of e){t.height=s;for(const{source:n}of t.targetLinks)i.add(n)}if(++s>n)throw new Error("circular link");e=i,i=new Set}}(d),function(e){const a=function({nodes:t}){const e=at(t,(t=>t.depth))+1,s=(r-i-c)/(e-1),o=new Array(e);for(const n of t){const t=Math.max(0,Math.min(e-1,Math.floor(h.call(null,n,e))));n.layer=t,n.x0=i+t*s,n.x1=n.x0+c,o[t]?o[t].push(n):o[t]=[n]}if(n)for(const t of o)t.sort(n);return o}(e);t=Math.min(l,(o-s)/(at(a,(t=>t.length))-1)),function(n){const e=yt(n,(n=>(o-s-(n.length-1)*t)/Z(n,J)));for(const i of n){let n=s;for(const s of i){s.y0=n,s.y1=n+s.value*e,n=s.y1+t;for(const t of s.sourceLinks)t.width=t.value*e}n=(o-n+t)/(i.length+1);for(let t=0;t<i.length;++t){const e=i[t];e.y0+=n*(t+1),e.y1+=n*(t+1)}v(i)}}(a);for(let t=0;t<y;++t){const n=Math.pow(.99,t),e=Math.max(1-n,(t+1)/y);g(a,n,e),p(a,n,e)}}(d),ht(d),d}function p(t,e,i){for(let s=1,r=t.length;s<r;++s){const r=t[s];for(const t of r){let n=0,i=0;for(const{source:e,value:s}of t.targetLinks){let r=s*(t.layer-e.layer);n+=b(e,t)*r,i+=r}if(!(i>0))continue;let s=(n/i-t.y0)*e;t.y0+=s,t.y1+=s,k(t)}void 0===n&&r.sort(X),_(r,i)}}function g(t,e,i){for(let s=t.length-2;s>=0;--s){const r=t[s];for(const t of r){let n=0,i=0;for(const{target:e,value:s}of t.sourceLinks){let r=s*(e.layer-t.layer);n+=w(t,e)*r,i+=r}if(!(i>0))continue;let s=(n/i-t.y0)*e;t.y0+=s,t.y1+=s,k(t)}void 0===n&&r.sort(X),_(r,i)}}function _(n,e){const i=n.length>>1,r=n[i];x(n,r.y0-t,i-1,e),m(n,r.y1+t,i+1,e),x(n,o,n.length-1,e),m(n,s,0,e)}function m(n,e,i,s){for(;i<n.length;++i){const r=n[i],o=(e-r.y0)*s;o>1e-6&&(r.y0+=o,r.y1+=o),e=r.y1+t}}function x(n,e,i,s){for(;i>=0;--i){const r=n[i],o=(r.y1-e)*s;o>1e-6&&(r.y0-=o,r.y1-=o),e=r.y0-t}}function k({sourceLinks:t,targetLinks:n}){if(void 0===e){for(const{source:{sourceLinks:t}}of n)t.sort(ct);for(const{target:{targetLinks:n}}of t)n.sort(lt)}}function v(t){if(void 0===e)for(const{sourceLinks:n,targetLinks:e}of t)n.sort(ct),e.sort(lt)}function b(n,e){let i=n.y0-(n.sourceLinks.length-1)*t/2;for(const{target:s,width:r}of n.sourceLinks){if(s===e)break;i+=r+t}for(const{source:t,width:s}of e.targetLinks){if(t===n)break;i-=s}return i}function w(n,e){let i=e.y0-(e.targetLinks.length-1)*t/2;for(const{source:s,width:r}of e.targetLinks){if(s===n)break;i+=r+t}for(const{target:t,width:s}of n.sourceLinks){if(t===e)break;i-=s}return i}return d.update=function(t){return ht(t),t},d.nodeId=function(t){return arguments.length?(a="function"==typeof t?t:G(t),d):a},d.nodeAlign=function(t){return arguments.length?(h="function"==typeof t?t:G(t),d):h},d.nodeSort=function(t){return arguments.length?(n=t,d):n},d.nodeWidth=function(t){return arguments.length?(c=+t,d):c},d.nodePadding=function(n){return arguments.length?(l=t=+n,d):l},d.nodes=function(t){return arguments.length?(u="function"==typeof t?t:G(t),d):u},d.links=function(t){return arguments.length?(f="function"==typeof t?t:G(t),d):f},d.linkSort=function(t){return arguments.length?(e=t,d):e},d.size=function(t){return arguments.length?(i=s=0,r=+t[0],o=+t[1],d):[r-i,o-s]},d.extent=function(t){return arguments.length?(i=+t[0][0],r=+t[1][0],s=+t[0][1],o=+t[1][1],d):[[i,s],[r,o]]},d.iterations=function(t){return arguments.length?(y=+t,d):y},d}var et=Math.PI,nt=2*et,z=1e-6,Gt=nt-z;function it(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function gt(){return new it}function ft(t){return function(){return t}}function Ht(t){return t[0]}function Xt(t){return t[1]}it.prototype=gt.prototype={constructor:it,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,i){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+i)},bezierCurveTo:function(t,n,e,i,s,r){this._+="C"+ +t+","+ +n+","+ +e+","+ +i+","+(this._x1=+s)+","+(this._y1=+r)},arcTo:function(t,n,e,i,s){t=+t,n=+n,e=+e,i=+i,s=+s;var r=this._x1,o=this._y1,c=e-t,l=i-n,a=r-t,h=o-n,u=a*a+h*h;if(s<0)throw new Error("negative radius: "+s);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(u>z)if(Math.abs(h*c-l*a)>z&&s){var f=e-r,y=i-o,d=c*c+l*l,p=f*f+y*y,g=Math.sqrt(d),_=Math.sqrt(u),m=s*Math.tan((et-Math.acos((d+u-p)/(2*g*_)))/2),x=m/_,k=m/g;Math.abs(x-1)>z&&(this._+="L"+(t+x*a)+","+(n+x*h)),this._+="A"+s+","+s+",0,0,"+ +(h*f>a*y)+","+(this._x1=t+k*c)+","+(this._y1=n+k*l)}else this._+="L"+(this._x1=t)+","+(this._y1=n)},arc:function(t,n,e,i,s,r){t=+t,n=+n,r=!!r;var o=(e=+e)*Math.cos(i),c=e*Math.sin(i),l=t+o,a=n+c,h=1^r,u=r?i-s:s-i;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+l+","+a:(Math.abs(this._x1-l)>z||Math.abs(this._y1-a)>z)&&(this._+="L"+l+","+a),e&&(u<0&&(u=u%nt+nt),u>Gt?this._+="A"+e+","+e+",0,1,"+h+","+(t-o)+","+(n-c)+"A"+e+","+e+",0,1,"+h+","+(this._x1=l)+","+(this._y1=a):u>z&&(this._+="A"+e+","+e+",0,"+ +(u>=et)+","+h+","+(this._x1=t+e*Math.cos(s))+","+(this._y1=n+e*Math.sin(s))))},rect:function(t,n,e,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +i+"h"+-e+"Z"},toString:function(){return this._}};var qt=Array.prototype.slice;function Qt(t){return t.source}function Kt(t){return t.target}function Zt(t){var n=Qt,e=Kt,i=Ht,s=Xt,r=null;function o(){var o,c=qt.call(arguments),l=n.apply(this,c),a=e.apply(this,c);if(r||(r=o=gt()),t(r,+i.apply(this,(c[0]=l,c)),+s.apply(this,c),+i.apply(this,(c[0]=a,c)),+s.apply(this,c)),o)return r=null,o+""||null}return o.source=function(t){return arguments.length?(n=t,o):n},o.target=function(t){return arguments.length?(e=t,o):e},o.x=function(t){return arguments.length?(i="function"==typeof t?t:ft(+t),o):i},o.y=function(t){return arguments.length?(s="function"==typeof t?t:ft(+t),o):s},o.context=function(t){return arguments.length?(r=t??null,o):r},o}function Jt(t,n,e,i,s){t.moveTo(n,e),t.bezierCurveTo(n=(n+i)/2,e,n,s,i,s)}function te(){return Zt(Jt)}function ee(t){return[t.source.x1,t.y0]}function ne(t){return[t.target.x0,t.y1]}function ie(){return te().source(ee).target(ne)}const st=class{static next(t){return new st(t+ ++st.count)}constructor(t){this.id=t,this.href=`#${t}`}toString(){return"url("+this.href+")"}};let rt=st;rt.count=0;const se={left:Bt,right:Rt,center:Ft,justify:dt},re=function(t,n,e,i){const{securityLevel:s,sankey:r}=ot(),o=St.sankey;let c;"sandbox"===s&&(c=Y("#i"+n));const l=Y("sandbox"===s?c.nodes()[0].contentDocument.body:"body"),a="sandbox"===s?l.select(`[id="${n}"]`):Y(`[id="${n}"]`),h=(null==r?void 0:r.width)||o.width,u=(null==r?void 0:r.height)||o.width,f=(null==r?void 0:r.useMaxWidth)||o.useMaxWidth,y=(null==r?void 0:r.nodeAlignment)||o.nodeAlignment;Lt(a,u,h,f);const d=i.db.getGraph(),p=se[y];Yt().nodeId((t=>t.id)).nodeWidth(10).nodePadding(10).nodeAlign(p).extent([[0,0],[h,u]])(d);const g=Et(Tt);a.append("g").attr("class","nodes").selectAll(".node").data(d.nodes).join("g").attr("class","node").attr("id",(t=>(t.uid=rt.next("node-")).id)).attr("transform",(function(t){return"translate("+t.x0+","+t.y0+")"})).attr("x",(t=>t.x0)).attr("y",(t=>t.y0)).append("rect").attr("height",(t=>t.y1-t.y0)).attr("width",(t=>t.x1-t.x0)).attr("fill",(t=>g(t.id))),a.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(d.nodes).join("text").attr("x",(t=>t.x0<h/2?t.x1+6:t.x0-6)).attr("y",(t=>(t.y1+t.y0)/2)).attr("dy","0.35em").attr("text-anchor",(t=>t.x0<h/2?"start":"end")).text((t=>t.id));const _=a.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(d.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),m=(null==r?void 0:r.linkColor)||"gradient";if("gradient"===m){const t=_.append("linearGradient").attr("id",(t=>(t.uid=rt.next("linearGradient-")).id)).attr("gradientUnits","userSpaceOnUse").attr("x1",(t=>t.source.x1)).attr("x2",(t=>t.target.x0));t.append("stop").attr("offset","0%").attr("stop-color",(t=>g(t.source.id))),t.append("stop").attr("offset","100%").attr("stop-color",(t=>g(t.target.id)))}let x;switch(m){case"gradient":x=t=>t.uid;break;case"source":x=t=>g(t.source.id);break;case"target":x=t=>g(t.target.id);break;default:x=m}_.append("path").attr("d",ie()).attr("stroke",x).attr("stroke-width",(t=>Math.max(1,t.width)))},oe={draw:re},ae=t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,"\n").trim(),le=H.parse.bind(H);H.parse=t=>le(ae(t));const fe={parser:H,db:Dt,renderer:oe};export{fe as diagram};