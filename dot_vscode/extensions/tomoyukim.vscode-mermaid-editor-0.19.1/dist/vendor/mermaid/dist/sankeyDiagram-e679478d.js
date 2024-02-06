import{c as getConfig,g as getAccTitle,s as setAccTitle,a as getAccDescription,b as setAccDescription,t as getDiagramTitle,r as setDiagramTitle,v as clear$1,e as common,G as defaultConfig,i as configureSvgSize}from"./mermaid-a98f434b.js";import{select,scaleOrdinal,schemeTableau10}from"d3";import{sankey,sankeyLinkHorizontal,sankeyLeft,sankeyRight,sankeyCenter,sankeyJustify}from"d3-sankey";import"ts-dedent";import"dayjs";import"@braintree/sanitize-url";import"dompurify";import"khroma";import"lodash-es/memoize.js";import"stylis";import"lodash-es/isEmpty.js";var parser=function(){var t=function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},e=[1,9],i=[1,10],n=[1,5,10,12],s={trace:function(){},yy:{},symbols_:{error:2,start:3,SANKEY:4,NEWLINE:5,csv:6,opt_eof:7,record:8,csv_tail:9,EOF:10,"field[source]":11,COMMA:12,"field[target]":13,"field[value]":14,field:15,escaped:16,non_escaped:17,DQUOTE:18,ESCAPED_TEXT:19,NON_ESCAPED_TEXT:20,$accept:0,$end:1},terminals_:{2:"error",4:"SANKEY",5:"NEWLINE",10:"EOF",11:"field[source]",12:"COMMA",13:"field[target]",14:"field[value]",18:"DQUOTE",19:"ESCAPED_TEXT",20:"NON_ESCAPED_TEXT"},productions_:[0,[3,4],[6,2],[9,2],[9,0],[7,1],[7,0],[8,5],[15,1],[15,1],[16,3],[17,1]],performAction:function(t,e,i,n,s,r,a){var o=r.length-1;switch(s){case 7:const t=n.findOrCreateNode(r[o-4].trim().replaceAll('""','"')),e=n.findOrCreateNode(r[o-2].trim().replaceAll('""','"')),i=parseFloat(r[o].trim());n.addLink(t,e,i);break;case 8:case 9:case 11:this.$=r[o];break;case 10:this.$=r[o-1]}},table:[{3:1,4:[1,2]},{1:[3]},{5:[1,3]},{6:4,8:5,15:6,16:7,17:8,18:e,20:i},{1:[2,6],7:11,10:[1,12]},t(i,[2,4],{9:13,5:[1,14]}),{12:[1,15]},t(n,[2,8]),t(n,[2,9]),{19:[1,16]},t(n,[2,11]),{1:[2,1]},{1:[2,5]},t(i,[2,2]),{6:17,8:5,15:6,16:7,17:8,18:e,20:i},{15:18,16:7,17:8,18:e,20:i},{18:[1,19]},t(i,[2,3]),{12:[1,20]},t(n,[2,10]),{15:21,16:7,17:8,18:e,20:i},t([1,5,10],[2,7])],defaultActions:{11:[2,1],12:[2,5]},parseError:function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)},parse:function(t){var e=[0],i=[],n=[null],s=[],r=this.table,a="",o=0,l=0,c=s.slice.call(arguments,1),h=Object.create(this.lexer),u={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(u.yy[y]=this.yy[y]);h.setInput(t,u.yy),u.yy.lexer=h,u.yy.parser=this,void 0===h.yylloc&&(h.yylloc={});var d=h.yylloc;s.push(d);var p=h.options&&h.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,f,m,_,k,x,b,v,A,E={};;){if(f=e[e.length-1],this.defaultActions[f]?m=this.defaultActions[f]:(null==g&&(A=void 0,"number"!=typeof(A=i.pop()||h.lex()||1)&&(A instanceof Array&&(A=(i=A).pop()),A=this.symbols_[A]||A),g=A),m=r[f]&&r[f][g]),void 0===m||!m.length||!m[0]){var S;for(k in v=[],r[f])this.terminals_[k]&&k>2&&v.push("'"+this.terminals_[k]+"'");S=h.showPosition?"Parse error on line "+(o+1)+":\n"+h.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(S,{text:h.match,token:this.terminals_[g]||g,line:h.yylineno,loc:d,expected:v})}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+g);switch(m[0]){case 1:e.push(g),n.push(h.yytext),s.push(h.yylloc),e.push(m[1]),g=null,l=h.yyleng,a=h.yytext,o=h.yylineno,d=h.yylloc;break;case 2:if(x=this.productions_[m[1]][1],E.$=n[n.length-x],E._$={first_line:s[s.length-(x||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(x||1)].first_column,last_column:s[s.length-1].last_column},p&&(E._$.range=[s[s.length-(x||1)].range[0],s[s.length-1].range[1]]),void 0!==(_=this.performAction.apply(E,[a,l,o,u.yy,m[1],n,s].concat(c))))return _;x&&(e=e.slice(0,-1*x*2),n=n.slice(0,-1*x),s=s.slice(0,-1*x)),e.push(this.productions_[m[1]][0]),n.push(E.$),s.push(E._$),b=r[e[e.length-2]][e[e.length-1]],e.push(b);break;case 3:return!0}}return!0}},r={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,n,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,i,n;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((i=this._input.match(this.rules[s[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{easy_keword_rules:!0},performAction:function(t,e,i,n){switch(i){case 0:return this.pushState("csv"),4;case 1:return 10;case 2:return 5;case 3:return 12;case 4:return this.pushState("escaped_text"),18;case 5:return 20;case 6:return this.popState("escaped_text"),18;case 7:return 19}},rules:[/^(?:sankey-beta\b)/,/^(?:$)/,/^(?:((\u000D\u000A)|(\u000A)))/,/^(?:(\u002C))/,/^(?:(\u0022))/,/^(?:([\u0020-\u0021\u0023-\u002B\u002D-\u007E])*)/,/^(?:(\u0022)(?!(\u0022)))/,/^(?:(([\u0020-\u0021\u0023-\u002B\u002D-\u007E])|(\u002C)|(\u000D)|(\u000A)|(\u0022)(\u0022))*)/],conditions:{csv:{rules:[1,2,3,4,5,6,7],inclusive:!1},escaped_text:{rules:[6,7],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7],inclusive:!0}}};function a(){this.yy={}}return s.lexer=r,a.prototype=s,s.Parser=a,new a}();parser.parser=parser;const parser$1=parser;let links=[],nodes=[],nodesMap={};const clear=()=>{links=[],nodes=[],nodesMap={},clear$1()};class SankeyLink{constructor(t,e,i=0){this.source=t,this.target=e,this.value=i}}const addLink=(t,e,i)=>{links.push(new SankeyLink(t,e,i))};class SankeyNode{constructor(t){this.ID=t}}const findOrCreateNode=t=>(t=common.sanitizeText(t,getConfig()),nodesMap[t]||(nodesMap[t]=new SankeyNode(t),nodes.push(nodesMap[t])),nodesMap[t]),getNodes=()=>nodes,getLinks=()=>links,getGraph=()=>({nodes:nodes.map((t=>({id:t.ID}))),links:links.map((t=>({source:t.source.ID,target:t.target.ID,value:t.value})))}),db={nodesMap,getConfig:()=>getConfig().sankey,getNodes,getLinks,getGraph,addLink,findOrCreateNode,getAccTitle,setAccTitle,getAccDescription,setAccDescription,getDiagramTitle,setDiagramTitle,clear},_Uid=class{static next(t){return new _Uid(t+ ++_Uid.count)}constructor(t){this.id=t,this.href=`#${t}`}toString(){return"url("+this.href+")"}};let Uid=_Uid;Uid.count=0;const alignmentsMap={left:sankeyLeft,right:sankeyRight,center:sankeyCenter,justify:sankeyJustify},draw=function(t,e,i,n){const{securityLevel:s,sankey:r}=getConfig(),a=defaultConfig.sankey;let o;"sandbox"===s&&(o=select("#i"+e));const l=select("sandbox"===s?o.nodes()[0].contentDocument.body:"body"),c="sandbox"===s?l.select(`[id="${e}"]`):select(`[id="${e}"]`),h=(null==r?void 0:r.width)||a.width,u=(null==r?void 0:r.height)||a.width,y=(null==r?void 0:r.useMaxWidth)||a.useMaxWidth,d=(null==r?void 0:r.nodeAlignment)||a.nodeAlignment;configureSvgSize(c,u,h,y);const p=n.db.getGraph(),g=alignmentsMap[d];sankey().nodeId((t=>t.id)).nodeWidth(10).nodePadding(10).nodeAlign(g).extent([[0,0],[h,u]])(p);const f=scaleOrdinal(schemeTableau10);c.append("g").attr("class","nodes").selectAll(".node").data(p.nodes).join("g").attr("class","node").attr("id",(t=>(t.uid=Uid.next("node-")).id)).attr("transform",(function(t){return"translate("+t.x0+","+t.y0+")"})).attr("x",(t=>t.x0)).attr("y",(t=>t.y0)).append("rect").attr("height",(t=>t.y1-t.y0)).attr("width",(t=>t.x1-t.x0)).attr("fill",(t=>f(t.id))),c.append("g").attr("class","node-labels").attr("font-family","sans-serif").attr("font-size",14).selectAll("text").data(p.nodes).join("text").attr("x",(t=>t.x0<h/2?t.x1+6:t.x0-6)).attr("y",(t=>(t.y1+t.y0)/2)).attr("dy","0.35em").attr("text-anchor",(t=>t.x0<h/2?"start":"end")).text((t=>t.id));const m=c.append("g").attr("class","links").attr("fill","none").attr("stroke-opacity",.5).selectAll(".link").data(p.links).join("g").attr("class","link").style("mix-blend-mode","multiply"),_=(null==r?void 0:r.linkColor)||"gradient";if("gradient"===_){const t=m.append("linearGradient").attr("id",(t=>(t.uid=Uid.next("linearGradient-")).id)).attr("gradientUnits","userSpaceOnUse").attr("x1",(t=>t.source.x1)).attr("x2",(t=>t.target.x0));t.append("stop").attr("offset","0%").attr("stop-color",(t=>f(t.source.id))),t.append("stop").attr("offset","100%").attr("stop-color",(t=>f(t.target.id)))}let k;switch(_){case"gradient":k=t=>t.uid;break;case"source":k=t=>f(t.source.id);break;case"target":k=t=>f(t.target.id);break;default:k=_}m.append("path").attr("d",sankeyLinkHorizontal()).attr("stroke",k).attr("stroke-width",(t=>Math.max(1,t.width)))},renderer={draw},prepareTextForParsing=t=>t.replaceAll(/^[^\S\n\r]+|[^\S\n\r]+$/g,"").replaceAll(/([\n\r])+/g,"\n").trim(),originalParse=parser$1.parse.bind(parser$1);parser$1.parse=t=>originalParse(prepareTextForParsing(t));const diagram={parser:parser$1,db,renderer};export{diagram};