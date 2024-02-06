import{V as tau,c as getConfig,s as setAccTitle,g as getAccTitle,B as setDiagramTitle,D as getDiagramTitle,a as getAccDescription,b as setAccDescription,m as mermaidAPI,f as common,l as log,E as clear$1,j as d3select,k as configureSvgSize,W as parseFontSize}from"./mermaid-766fee4c.js";import{o as ordinal}from"./ordinal-475e0c0c.js";import{a as array}from"./array-b7dcf730.js";import{c as constant}from"./constant-b644328d.js";import{d as d3arc}from"./arc-9d741495.js";import"./init-cc95ec8e.js";function descending(t,e){return e<t?-1:e>t?1:e>=t?0:NaN}function identity(t){return t}function d3pie(){var t=identity,e=descending,i=null,n=constant(0),s=constant(tau),r=constant(0);function a(a){var c,o,l,h,u,p=(a=array(a)).length,y=0,d=new Array(p),g=new Array(p),f=+n.apply(this,arguments),m=Math.min(tau,Math.max(-tau,s.apply(this,arguments)-f)),_=Math.min(Math.abs(m)/p,r.apply(this,arguments)),v=_*(m<0?-1:1);for(c=0;c<p;++c)(u=g[d[c]=c]=+t(a[c],c,a))>0&&(y+=u);for(null!=e?d.sort((function(t,i){return e(g[t],g[i])})):null!=i&&d.sort((function(t,e){return i(a[t],a[e])})),c=0,l=y?(m-p*v)/y:0;c<p;++c,f=h)o=d[c],h=f+((u=g[o])>0?u*l:0)+v,g[o]={data:a[o],index:c,value:u,startAngle:f,endAngle:h,padAngle:_};return g}return a.value=function(e){return arguments.length?(t="function"==typeof e?e:constant(+e),a):t},a.sortValues=function(t){return arguments.length?(e=t,i=null,a):e},a.sort=function(t){return arguments.length?(i=t,e=null,a):i},a.startAngle=function(t){return arguments.length?(n="function"==typeof t?t:constant(+t),a):n},a.endAngle=function(t){return arguments.length?(s="function"==typeof t?t:constant(+t),a):s},a.padAngle=function(t){return arguments.length?(r="function"==typeof t?t:constant(+t),a):r},a}var parser=function(){var t=function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},e=[1,4],i=[1,5],n=[1,6],s=[1,7],r=[1,9],a=[1,11,13,15,17,19,20,26,27,28,29],c=[2,5],o=[1,6,11,13,15,17,19,20,26,27,28,29],l=[26,27,28],h=[2,8],u=[1,18],p=[1,19],y=[1,20],d=[1,21],g=[1,22],f=[1,23],m=[1,28],_=[6,26,27,28,29],v={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,directive:5,PIE:6,document:7,showData:8,line:9,statement:10,txt:11,value:12,title:13,title_value:14,acc_title:15,acc_title_value:16,acc_descr:17,acc_descr_value:18,acc_descr_multiline_value:19,section:20,openDirective:21,typeDirective:22,closeDirective:23,":":24,argDirective:25,NEWLINE:26,";":27,EOF:28,open_directive:29,type_directive:30,arg_directive:31,close_directive:32,$accept:0,$end:1},terminals_:{2:"error",6:"PIE",8:"showData",11:"txt",12:"value",13:"title",14:"title_value",15:"acc_title",16:"acc_title_value",17:"acc_descr",18:"acc_descr_value",19:"acc_descr_multiline_value",20:"section",24:":",26:"NEWLINE",27:";",28:"EOF",29:"open_directive",30:"type_directive",31:"arg_directive",32:"close_directive"},productions_:[0,[3,2],[3,2],[3,2],[3,3],[7,0],[7,2],[9,2],[10,0],[10,2],[10,2],[10,2],[10,2],[10,1],[10,1],[10,1],[5,3],[5,5],[4,1],[4,1],[4,1],[21,1],[22,1],[25,1],[23,1]],performAction:function(t,e,i,n,s,r,a){var c=r.length-1;switch(s){case 4:n.setShowData(!0);break;case 7:this.$=r[c-1];break;case 9:n.addSection(r[c-1],n.cleanupValue(r[c]));break;case 10:this.$=r[c].trim(),n.setDiagramTitle(this.$);break;case 11:this.$=r[c].trim(),n.setAccTitle(this.$);break;case 12:case 13:this.$=r[c].trim(),n.setAccDescription(this.$);break;case 14:n.addSection(r[c].substr(8)),this.$=r[c].substr(8);break;case 21:n.parseDirective("%%{","open_directive");break;case 22:n.parseDirective(r[c],"type_directive");break;case 23:r[c]=r[c].trim().replace(/'/g,'"'),n.parseDirective(r[c],"arg_directive");break;case 24:n.parseDirective("}%%","close_directive","pie")}},table:[{3:1,4:2,5:3,6:e,21:8,26:i,27:n,28:s,29:r},{1:[3]},{3:10,4:2,5:3,6:e,21:8,26:i,27:n,28:s,29:r},{3:11,4:2,5:3,6:e,21:8,26:i,27:n,28:s,29:r},t(a,c,{7:12,8:[1,13]}),t(o,[2,18]),t(o,[2,19]),t(o,[2,20]),{22:14,30:[1,15]},{30:[2,21]},{1:[2,1]},{1:[2,2]},t(l,h,{21:8,9:16,10:17,5:24,1:[2,3],11:u,13:p,15:y,17:d,19:g,20:f,29:r}),t(a,c,{7:25}),{23:26,24:[1,27],32:m},t([24,32],[2,22]),t(a,[2,6]),{4:29,26:i,27:n,28:s},{12:[1,30]},{14:[1,31]},{16:[1,32]},{18:[1,33]},t(l,[2,13]),t(l,[2,14]),t(l,[2,15]),t(l,h,{21:8,9:16,10:17,5:24,1:[2,4],11:u,13:p,15:y,17:d,19:g,20:f,29:r}),t(_,[2,16]),{25:34,31:[1,35]},t(_,[2,24]),t(a,[2,7]),t(l,[2,9]),t(l,[2,10]),t(l,[2,11]),t(l,[2,12]),{23:36,32:m},{32:[2,23]},t(_,[2,17])],defaultActions:{9:[2,21],10:[2,1],11:[2,2],35:[2,23]},parseError:function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)},parse:function(t){var e=[0],i=[],n=[null],s=[],r=this.table,a="",c=0,o=0,l=s.slice.call(arguments,1),h=Object.create(this.lexer),u={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(u.yy[p]=this.yy[p]);h.setInput(t,u.yy),u.yy.lexer=h,u.yy.parser=this,void 0===h.yylloc&&(h.yylloc={});var y=h.yylloc;s.push(y);var d=h.options&&h.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var g,f,m,_,v,b,k,x,S,w={};;){if(f=e[e.length-1],this.defaultActions[f]?m=this.defaultActions[f]:(null==g&&(S=void 0,"number"!=typeof(S=i.pop()||h.lex()||1)&&(S instanceof Array&&(S=(i=S).pop()),S=this.symbols_[S]||S),g=S),m=r[f]&&r[f][g]),void 0===m||!m.length||!m[0]){var D;for(v in x=[],r[f])this.terminals_[v]&&v>2&&x.push("'"+this.terminals_[v]+"'");D=h.showPosition?"Parse error on line "+(c+1)+":\n"+h.showPosition()+"\nExpecting "+x.join(", ")+", got '"+(this.terminals_[g]||g)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==g?"end of input":"'"+(this.terminals_[g]||g)+"'"),this.parseError(D,{text:h.match,token:this.terminals_[g]||g,line:h.yylineno,loc:y,expected:x})}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+g);switch(m[0]){case 1:e.push(g),n.push(h.yytext),s.push(h.yylloc),e.push(m[1]),g=null,o=h.yyleng,a=h.yytext,c=h.yylineno,y=h.yylloc;break;case 2:if(b=this.productions_[m[1]][1],w.$=n[n.length-b],w._$={first_line:s[s.length-(b||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(b||1)].first_column,last_column:s[s.length-1].last_column},d&&(w._$.range=[s[s.length-(b||1)].range[0],s[s.length-1].range[1]]),void 0!==(_=this.performAction.apply(w,[a,o,c,u.yy,m[1],n,s].concat(l))))return _;b&&(e=e.slice(0,-1*b*2),n=n.slice(0,-1*b),s=s.slice(0,-1*b)),e.push(this.productions_[m[1]][0]),n.push(w.$),s.push(w._$),k=r[e[e.length-2]][e[e.length-1]],e.push(k);break;case 3:return!0}}return!0}},b={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,n,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,i,n;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((i=this._input.match(this.rules[s[r]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,n){switch(i){case 0:return this.begin("open_directive"),29;case 1:return this.begin("type_directive"),30;case 2:return this.popState(),this.begin("arg_directive"),24;case 3:return this.popState(),this.popState(),32;case 4:return 31;case 5:case 6:case 8:case 9:break;case 7:return 26;case 10:return this.begin("title"),13;case 11:return this.popState(),"title_value";case 12:return this.begin("acc_title"),15;case 13:return this.popState(),"acc_title_value";case 14:return this.begin("acc_descr"),17;case 15:return this.popState(),"acc_descr_value";case 16:this.begin("acc_descr_multiline");break;case 17:case 20:this.popState();break;case 18:return"acc_descr_multiline_value";case 19:this.begin("string");break;case 21:return"txt";case 22:return 6;case 23:return 8;case 24:return"value";case 25:return 28}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:[\s]+)/i,/^(?:title\b)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:pie\b)/i,/^(?:showData\b)/i,/^(?::[\s]*[\d]+(?:\.[\d]+)?)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[17,18],inclusive:!1},acc_descr:{rules:[15],inclusive:!1},acc_title:{rules:[13],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},title:{rules:[11],inclusive:!1},string:{rules:[20,21],inclusive:!1},INITIAL:{rules:[0,5,6,7,8,9,10,12,14,16,19,22,23,24,25],inclusive:!0}}};function k(){this.yy={}}return v.lexer=b,k.prototype=v,v.Parser=k,new k}();parser.parser=parser;const parser$1=parser;let sections={},showData=!1;const parseDirective=function(t,e,i){mermaidAPI.parseDirective(this,t,e,i)},addSection=function(t,e){t=common.sanitizeText(t,getConfig()),void 0===sections[t]&&(sections[t]=e,log.debug("Added new section :",t))},getSections=()=>sections,setShowData=function(t){showData=t},getShowData=function(){return showData},cleanupValue=function(t){return":"===t.substring(0,1)?(t=t.substring(1).trim(),Number(t.trim())):Number(t.trim())},clear=function(){sections={},showData=!1,clear$1()},db={parseDirective,getConfig:()=>getConfig().pie,addSection,getSections,cleanupValue,clear,setAccTitle,getAccTitle,setDiagramTitle,getDiagramTitle,setShowData,getShowData,getAccDescription,setAccDescription},getStyles=t=>`\n  .pieCircle{\n    stroke: ${t.pieStrokeColor};\n    stroke-width : ${t.pieStrokeWidth};\n    opacity : ${t.pieOpacity};\n  }\n  .pieOuterCircle{\n    stroke: ${t.pieOuterStrokeColor};\n    stroke-width: ${t.pieOuterStrokeWidth};\n    fill: none;\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ${t.pieTitleTextSize};\n    fill: ${t.pieTitleTextColor};\n    font-family: ${t.fontFamily};\n  }\n  .slice {\n    font-family: ${t.fontFamily};\n    fill: ${t.pieSectionTextColor};\n    font-size:${t.pieSectionTextSize};\n    // fill: white;\n  }\n  .legend text {\n    fill: ${t.pieLegendTextColor};\n    font-family: ${t.fontFamily};\n    font-size: ${t.pieLegendTextSize};\n  }\n`,styles=getStyles;let width,conf=getConfig();const height=450,draw=(t,e,i,n)=>{var s;try{conf=getConfig(),log.debug("Rendering info diagram\n"+t);const i=getConfig().securityLevel;let f;"sandbox"===i&&(f=d3select("#i"+e));const m=d3select("sandbox"===i?f.nodes()[0].contentDocument.body:"body"),_=("sandbox"===i?f.nodes()[0].contentDocument:document).getElementById(e);width=_.parentElement.offsetWidth,void 0===width&&(width=1200),void 0!==conf.useWidth&&(width=conf.useWidth),void 0!==conf.pie.useWidth&&(width=conf.pie.useWidth);const v=m.select("#"+e);configureSvgSize(v,450,width,conf.pie.useMaxWidth),_.setAttribute("viewBox","0 0 "+width+" 450");var r=Math.min(width,450)/2-40,a=v.append("g").attr("transform","translate("+width/2+",225)"),c=n.db.getSections(),o=0;Object.keys(c).forEach((function(t){o+=c[t]}));const b=conf.themeVariables;var l=[b.pie1,b.pie2,b.pie3,b.pie4,b.pie5,b.pie6,b.pie7,b.pie8,b.pie9,b.pie10,b.pie11,b.pie12];const k=(null==(s=conf.pie)?void 0:s.textPosition)??.75;let[x]=parseFontSize(b.pieOuterStrokeWidth);x??(x=2);var h=ordinal().range(l),u=Object.entries(c).map((function(t,e){return{order:e,name:t[0],value:t[1]}})),p=d3pie().value((function(t){return t.value})).sort((function(t,e){return t.order-e.order}))(u),y=d3arc().innerRadius(0).outerRadius(r),d=d3arc().innerRadius(r*k).outerRadius(r*k);a.append("circle").attr("cx",0).attr("cy",0).attr("r",r+x/2).attr("class","pieOuterCircle"),a.selectAll("mySlices").data(p).enter().append("path").attr("d",y).attr("fill",(function(t){return h(t.data.name)})).attr("class","pieCircle"),a.selectAll("mySlices").data(p).enter().append("text").text((function(t){return(t.data.value/o*100).toFixed(0)+"%"})).attr("transform",(function(t){return"translate("+d.centroid(t)+")"})).style("text-anchor","middle").attr("class","slice"),a.append("text").text(n.db.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");var g=a.selectAll(".legend").data(h.domain()).enter().append("g").attr("class","legend").attr("transform",(function(t,e){return"translate(216,"+(22*e-22*h.domain().length/2)+")"}));g.append("rect").attr("width",18).attr("height",18).style("fill",h).style("stroke",h),g.data(p).append("text").attr("x",22).attr("y",14).text((function(t){return n.db.getShowData()||conf.showData||conf.pie.showData?t.data.name+" ["+t.data.value+"]":t.data.name}))}catch(t){log.error("Error while rendering info diagram"),log.error(t)}},renderer={draw},diagram={parser:parser$1,db,renderer,styles};export{diagram};