import{sanitizeUrl}from"@braintree/sanitize-url";import dayjs from"dayjs";import dayjsIsoWeek from"dayjs/plugin/isoWeek.js";import dayjsCustomParseFormat from"dayjs/plugin/customParseFormat.js";import dayjsAdvancedFormat from"dayjs/plugin/advancedFormat.js";import{c as getConfig,s as setAccTitle,g as getAccTitle,r as setDiagramTitle,t as getDiagramTitle,b as setAccDescription,a as getAccDescription,m as mermaidAPI,v as clear$1,u as utils,l as log,i as configureSvgSize,e as common}from"./mermaid-a98f434b.js";import{select,scaleTime,min,max,scaleLinear,interpolateHcl,axisBottom,timeFormat,timeMonth,timeDay,timeHour,timeMinute,axisTop,timeMonday,timeTuesday,timeWednesday,timeThursday,timeFriday,timeSaturday,timeSunday}from"d3";import"ts-dedent";import"dompurify";import"khroma";import"lodash-es/memoize.js";import"stylis";import"lodash-es/isEmpty.js";var parser=function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[1,3],n=[1,5],i=[7,9,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,33,34,36,43,48],s=[1,32],a=[1,33],r=[1,34],o=[1,35],c=[1,36],l=[1,37],d=[1,38],u=[1,15],h=[1,16],m=[1,17],y=[1,18],k=[1,19],f=[1,20],g=[1,21],p=[1,22],T=[1,24],b=[1,25],x=[1,26],v=[1,27],_=[1,28],w=[1,30],D=[1,39],C=[1,42],S=[5,7,9,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,33,34,36,43,48],E={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,gantt:5,document:6,EOF:7,line:8,SPACE:9,statement:10,NL:11,weekday:12,weekday_monday:13,weekday_tuesday:14,weekday_wednesday:15,weekday_thursday:16,weekday_friday:17,weekday_saturday:18,weekday_sunday:19,dateFormat:20,inclusiveEndDates:21,topAxis:22,axisFormat:23,tickInterval:24,excludes:25,includes:26,todayMarker:27,title:28,acc_title:29,acc_title_value:30,acc_descr:31,acc_descr_value:32,acc_descr_multiline_value:33,section:34,clickStatement:35,taskTxt:36,taskData:37,openDirective:38,typeDirective:39,closeDirective:40,":":41,argDirective:42,click:43,callbackname:44,callbackargs:45,href:46,clickStatementDebug:47,open_directive:48,type_directive:49,arg_directive:50,close_directive:51,$accept:0,$end:1},terminals_:{2:"error",5:"gantt",7:"EOF",9:"SPACE",11:"NL",13:"weekday_monday",14:"weekday_tuesday",15:"weekday_wednesday",16:"weekday_thursday",17:"weekday_friday",18:"weekday_saturday",19:"weekday_sunday",20:"dateFormat",21:"inclusiveEndDates",22:"topAxis",23:"axisFormat",24:"tickInterval",25:"excludes",26:"includes",27:"todayMarker",28:"title",29:"acc_title",30:"acc_title_value",31:"acc_descr",32:"acc_descr_value",33:"acc_descr_multiline_value",34:"section",36:"taskTxt",37:"taskData",41:":",43:"click",44:"callbackname",45:"callbackargs",46:"href",48:"open_directive",49:"type_directive",50:"arg_directive",51:"close_directive"},productions_:[0,[3,2],[3,3],[6,0],[6,2],[8,2],[8,1],[8,1],[8,1],[12,1],[12,1],[12,1],[12,1],[12,1],[12,1],[12,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,2],[10,1],[4,4],[4,6],[35,2],[35,3],[35,3],[35,4],[35,3],[35,4],[35,2],[47,2],[47,3],[47,3],[47,4],[47,3],[47,4],[47,2],[38,1],[39,1],[42,1],[40,1]],performAction:function(t,e,n,i,s,a,r){var o=a.length-1;switch(s){case 2:return a[o-1];case 3:case 7:case 8:this.$=[];break;case 4:a[o-1].push(a[o]),this.$=a[o-1];break;case 5:case 6:this.$=a[o];break;case 9:i.setWeekday("monday");break;case 10:i.setWeekday("tuesday");break;case 11:i.setWeekday("wednesday");break;case 12:i.setWeekday("thursday");break;case 13:i.setWeekday("friday");break;case 14:i.setWeekday("saturday");break;case 15:i.setWeekday("sunday");break;case 16:i.setDateFormat(a[o].substr(11)),this.$=a[o].substr(11);break;case 17:i.enableInclusiveEndDates(),this.$=a[o].substr(18);break;case 18:i.TopAxis(),this.$=a[o].substr(8);break;case 19:i.setAxisFormat(a[o].substr(11)),this.$=a[o].substr(11);break;case 20:i.setTickInterval(a[o].substr(13)),this.$=a[o].substr(13);break;case 21:i.setExcludes(a[o].substr(9)),this.$=a[o].substr(9);break;case 22:i.setIncludes(a[o].substr(9)),this.$=a[o].substr(9);break;case 23:i.setTodayMarker(a[o].substr(12)),this.$=a[o].substr(12);break;case 25:i.setDiagramTitle(a[o].substr(6)),this.$=a[o].substr(6);break;case 26:this.$=a[o].trim(),i.setAccTitle(this.$);break;case 27:case 28:this.$=a[o].trim(),i.setAccDescription(this.$);break;case 29:i.addSection(a[o].substr(8)),this.$=a[o].substr(8);break;case 31:i.addTask(a[o-1],a[o]),this.$="task";break;case 35:this.$=a[o-1],i.setClickEvent(a[o-1],a[o],null);break;case 36:this.$=a[o-2],i.setClickEvent(a[o-2],a[o-1],a[o]);break;case 37:this.$=a[o-2],i.setClickEvent(a[o-2],a[o-1],null),i.setLink(a[o-2],a[o]);break;case 38:this.$=a[o-3],i.setClickEvent(a[o-3],a[o-2],a[o-1]),i.setLink(a[o-3],a[o]);break;case 39:this.$=a[o-2],i.setClickEvent(a[o-2],a[o],null),i.setLink(a[o-2],a[o-1]);break;case 40:this.$=a[o-3],i.setClickEvent(a[o-3],a[o-1],a[o]),i.setLink(a[o-3],a[o-2]);break;case 41:this.$=a[o-1],i.setLink(a[o-1],a[o]);break;case 42:case 48:this.$=a[o-1]+" "+a[o];break;case 43:case 44:case 46:this.$=a[o-2]+" "+a[o-1]+" "+a[o];break;case 45:case 47:this.$=a[o-3]+" "+a[o-2]+" "+a[o-1]+" "+a[o];break;case 49:i.parseDirective("%%{","open_directive");break;case 50:i.parseDirective(a[o],"type_directive");break;case 51:a[o]=a[o].trim().replace(/'/g,'"'),i.parseDirective(a[o],"arg_directive");break;case 52:i.parseDirective("}%%","close_directive","gantt")}},table:[{3:1,4:2,5:e,38:4,48:n},{1:[3]},{3:6,4:2,5:e,38:4,48:n},t(i,[2,3],{6:7}),{39:8,49:[1,9]},{49:[2,49]},{1:[2,1]},{4:31,7:[1,10],8:11,9:[1,12],10:13,11:[1,14],12:23,13:s,14:a,15:r,16:o,17:c,18:l,19:d,20:u,21:h,22:m,23:y,24:k,25:f,26:g,27:p,28:T,29:b,31:x,33:v,34:_,35:29,36:w,38:4,43:D,48:n},{40:40,41:[1,41],51:C},t([41,51],[2,50]),t(i,[2,8],{1:[2,2]}),t(i,[2,4]),{4:31,10:43,12:23,13:s,14:a,15:r,16:o,17:c,18:l,19:d,20:u,21:h,22:m,23:y,24:k,25:f,26:g,27:p,28:T,29:b,31:x,33:v,34:_,35:29,36:w,38:4,43:D,48:n},t(i,[2,6]),t(i,[2,7]),t(i,[2,16]),t(i,[2,17]),t(i,[2,18]),t(i,[2,19]),t(i,[2,20]),t(i,[2,21]),t(i,[2,22]),t(i,[2,23]),t(i,[2,24]),t(i,[2,25]),{30:[1,44]},{32:[1,45]},t(i,[2,28]),t(i,[2,29]),t(i,[2,30]),{37:[1,46]},t(i,[2,32]),t(i,[2,9]),t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),t(i,[2,13]),t(i,[2,14]),t(i,[2,15]),{44:[1,47],46:[1,48]},{11:[1,49]},{42:50,50:[1,51]},{11:[2,52]},t(i,[2,5]),t(i,[2,26]),t(i,[2,27]),t(i,[2,31]),t(i,[2,35],{45:[1,52],46:[1,53]}),t(i,[2,41],{44:[1,54]}),t(S,[2,33]),{40:55,51:C},{51:[2,51]},t(i,[2,36],{46:[1,56]}),t(i,[2,37]),t(i,[2,39],{45:[1,57]}),{11:[1,58]},t(i,[2,38]),t(i,[2,40]),t(S,[2,34])],defaultActions:{5:[2,49],6:[2,1],42:[2,52],51:[2,51]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=[0],n=[],i=[null],s=[],a=this.table,r="",o=0,c=0,l=s.slice.call(arguments,1),d=Object.create(this.lexer),u={yy:{}};for(var h in this.yy)Object.prototype.hasOwnProperty.call(this.yy,h)&&(u.yy[h]=this.yy[h]);d.setInput(t,u.yy),u.yy.lexer=d,u.yy.parser=this,void 0===d.yylloc&&(d.yylloc={});var m=d.yylloc;s.push(m);var y=d.options&&d.options.ranges;"function"==typeof u.yy.parseError?this.parseError=u.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var k,f,g,p,T,b,x,v,_,w={};;){if(f=e[e.length-1],this.defaultActions[f]?g=this.defaultActions[f]:(null==k&&(_=void 0,"number"!=typeof(_=n.pop()||d.lex()||1)&&(_ instanceof Array&&(_=(n=_).pop()),_=this.symbols_[_]||_),k=_),g=a[f]&&a[f][k]),void 0===g||!g.length||!g[0]){var D;for(T in v=[],a[f])this.terminals_[T]&&T>2&&v.push("'"+this.terminals_[T]+"'");D=d.showPosition?"Parse error on line "+(o+1)+":\n"+d.showPosition()+"\nExpecting "+v.join(", ")+", got '"+(this.terminals_[k]||k)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==k?"end of input":"'"+(this.terminals_[k]||k)+"'"),this.parseError(D,{text:d.match,token:this.terminals_[k]||k,line:d.yylineno,loc:m,expected:v})}if(g[0]instanceof Array&&g.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+k);switch(g[0]){case 1:e.push(k),i.push(d.yytext),s.push(d.yylloc),e.push(g[1]),k=null,c=d.yyleng,r=d.yytext,o=d.yylineno,m=d.yylloc;break;case 2:if(b=this.productions_[g[1]][1],w.$=i[i.length-b],w._$={first_line:s[s.length-(b||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(b||1)].first_column,last_column:s[s.length-1].last_column},y&&(w._$.range=[s[s.length-(b||1)].range[0],s[s.length-1].range[1]]),void 0!==(p=this.performAction.apply(w,[r,c,o,u.yy,g[1],i,s].concat(l))))return p;b&&(e=e.slice(0,-1*b*2),i=i.slice(0,-1*b),s=s.slice(0,-1*b)),e.push(this.productions_[g[1]][0]),i.push(w.$),s.push(w._$),x=a[e[e.length-2]][e[e.length-1]],e.push(x);break;case 3:return!0}}return!0}},I={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var a in s)this[a]=s[a];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),a=0;a<s.length;a++)if((n=this._input.match(this.rules[s[a]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=a,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[a])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,n,i){switch(n){case 0:return this.begin("open_directive"),48;case 1:return this.begin("type_directive"),49;case 2:return this.popState(),this.begin("arg_directive"),41;case 3:return this.popState(),this.popState(),51;case 4:return 50;case 5:return this.begin("acc_title"),29;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),31;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:case 20:case 23:case 26:case 29:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:case 13:case 14:case 16:case 17:case 18:break;case 15:return 11;case 19:this.begin("href");break;case 21:return 46;case 22:this.begin("callbackname");break;case 24:this.popState(),this.begin("callbackargs");break;case 25:return 44;case 27:return 45;case 28:this.begin("click");break;case 30:return 43;case 31:return 5;case 32:return 20;case 33:return 21;case 34:return 22;case 35:return 23;case 36:return 24;case 37:return 26;case 38:return 25;case 39:return 27;case 40:return 13;case 41:return 14;case 42:return 15;case 43:return 16;case 44:return 17;case 45:return 18;case 46:return 19;case 47:return"date";case 48:return 28;case 49:return"accDescription";case 50:return 34;case 51:return 36;case 52:return 37;case 53:return 41;case 54:return 7;case 55:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},callbackargs:{rules:[26,27],inclusive:!1},callbackname:{rules:[23,24,25],inclusive:!1},href:{rules:[20,21],inclusive:!1},click:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,22,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}};function $(){this.yy={}}return E.lexer=I,$.prototype=E,E.Parser=$,new $}();parser.parser=parser;const ganttParser=parser;dayjs.extend(dayjsIsoWeek),dayjs.extend(dayjsCustomParseFormat),dayjs.extend(dayjsAdvancedFormat);let tickInterval,dateFormat="",axisFormat="",todayMarker="",includes=[],excludes=[],links={},sections=[],tasks=[],currentSection="",displayMode="";const tags=["active","done","crit","milestone"];let funs=[],inclusiveEndDates=!1,topAxis=!1,weekday="sunday",lastOrder=0;const parseDirective=function(t,e,n){mermaidAPI.parseDirective(this,t,e,n)},clear=function(){sections=[],tasks=[],currentSection="",funs=[],taskCnt=0,lastTask=void 0,lastTaskID=void 0,rawTasks=[],dateFormat="",axisFormat="",displayMode="",tickInterval=void 0,todayMarker="",includes=[],excludes=[],inclusiveEndDates=!1,topAxis=!1,lastOrder=0,links={},clear$1(),weekday="sunday"},setAxisFormat=function(t){axisFormat=t},getAxisFormat=function(){return axisFormat},setTickInterval=function(t){tickInterval=t},getTickInterval=function(){return tickInterval},setTodayMarker=function(t){todayMarker=t},getTodayMarker=function(){return todayMarker},setDateFormat=function(t){dateFormat=t},enableInclusiveEndDates=function(){inclusiveEndDates=!0},endDatesAreInclusive=function(){return inclusiveEndDates},enableTopAxis=function(){topAxis=!0},topAxisEnabled=function(){return topAxis},setDisplayMode=function(t){displayMode=t},getDisplayMode=function(){return displayMode},getDateFormat=function(){return dateFormat},setIncludes=function(t){includes=t.toLowerCase().split(/[\s,]+/)},getIncludes=function(){return includes},setExcludes=function(t){excludes=t.toLowerCase().split(/[\s,]+/)},getExcludes=function(){return excludes},getLinks=function(){return links},addSection=function(t){currentSection=t,sections.push(t)},getSections=function(){return sections},getTasks=function(){let t=compileTasks(),e=0;for(;!t&&e<10;)t=compileTasks(),e++;return tasks=rawTasks,tasks},isInvalidDate=function(t,e,n,i){return!i.includes(t.format(e.trim()))&&(!!(t.isoWeekday()>=6&&n.includes("weekends"))||!!n.includes(t.format("dddd").toLowerCase())||n.includes(t.format(e.trim())))},setWeekday=function(t){weekday=t},getWeekday=function(){return weekday},checkTaskDates=function(t,e,n,i){if(!n.length||t.manualEndTime)return;let s,a;s=t.startTime instanceof Date?dayjs(t.startTime):dayjs(t.startTime,e,!0),s=s.add(1,"d"),a=t.endTime instanceof Date?dayjs(t.endTime):dayjs(t.endTime,e,!0);const[r,o]=fixTaskDates(s,a,e,n,i);t.endTime=r.toDate(),t.renderEndTime=o},fixTaskDates=function(t,e,n,i,s){let a=!1,r=null;for(;t<=e;)a||(r=e.toDate()),a=isInvalidDate(t,n,i,s),a&&(e=e.add(1,"d")),t=t.add(1,"d");return[e,r]},getStartDate=function(t,e,n){n=n.trim();const i=/^after\s+([\d\w- ]+)/.exec(n.trim());if(null!==i){let t=null;if(i[1].split(" ").forEach((function(e){let n=findTaskById(e);void 0!==n&&(t?n.endTime>t.endTime&&(t=n):t=n)})),t)return t.endTime;{const t=new Date;return t.setHours(0,0,0,0),t}}let s=dayjs(n,e.trim(),!0);if(s.isValid())return s.toDate();{log.debug("Invalid date:"+n),log.debug("With date format:"+e.trim());const t=new Date(n);if(void 0===t||isNaN(t.getTime())||t.getFullYear()<-1e4||t.getFullYear()>1e4)throw new Error("Invalid date:"+n);return t}},parseDuration=function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},getEndDate=function(t,e,n,i=!1){n=n.trim();let s=dayjs(n,e.trim(),!0);if(s.isValid())return i&&(s=s.add(1,"d")),s.toDate();let a=dayjs(t);const[r,o]=parseDuration(n);if(!Number.isNaN(r)){const t=a.add(r,o);t.isValid()&&(a=t)}return a.toDate()};let taskCnt=0;const parseId=function(t){return void 0===t?(taskCnt+=1,"task"+taskCnt):t},compileData=function(t,e){let n;n=":"===e.substr(0,1)?e.substr(1,e.length):e;const i=n.split(","),s={};getTaskTags(i,s,tags);for(let t=0;t<i.length;t++)i[t]=i[t].trim();let a="";switch(i.length){case 1:s.id=parseId(),s.startTime=t.endTime,a=i[0];break;case 2:s.id=parseId(),s.startTime=getStartDate(0,dateFormat,i[0]),a=i[1];break;case 3:s.id=parseId(i[0]),s.startTime=getStartDate(0,dateFormat,i[1]),a=i[2]}return a&&(s.endTime=getEndDate(s.startTime,dateFormat,a,inclusiveEndDates),s.manualEndTime=dayjs(a,"YYYY-MM-DD",!0).isValid(),checkTaskDates(s,dateFormat,excludes,includes)),s},parseData=function(t,e){let n;n=":"===e.substr(0,1)?e.substr(1,e.length):e;const i=n.split(","),s={};getTaskTags(i,s,tags);for(let t=0;t<i.length;t++)i[t]=i[t].trim();switch(i.length){case 1:s.id=parseId(),s.startTime={type:"prevTaskEnd",id:t},s.endTime={data:i[0]};break;case 2:s.id=parseId(),s.startTime={type:"getStartDate",startData:i[0]},s.endTime={data:i[1]};break;case 3:s.id=parseId(i[0]),s.startTime={type:"getStartDate",startData:i[1]},s.endTime={data:i[2]}}return s};let lastTask,lastTaskID,rawTasks=[];const taskDb={},addTask=function(t,e){const n={section:currentSection,type:currentSection,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},i=parseData(lastTaskID,e);n.raw.startTime=i.startTime,n.raw.endTime=i.endTime,n.id=i.id,n.prevTaskId=lastTaskID,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,n.order=lastOrder,lastOrder++;const s=rawTasks.push(n);lastTaskID=n.id,taskDb[n.id]=s-1},findTaskById=function(t){const e=taskDb[t];return rawTasks[e]},addTaskOrg=function(t,e){const n={section:currentSection,type:currentSection,description:t,task:t,classes:[]},i=compileData(lastTask,e);n.startTime=i.startTime,n.endTime=i.endTime,n.id=i.id,n.active=i.active,n.done=i.done,n.crit=i.crit,n.milestone=i.milestone,lastTask=n,tasks.push(n)},compileTasks=function(){const t=function(t){const e=rawTasks[t];let n="";switch(rawTasks[t].raw.startTime.type){case"prevTaskEnd":{const t=findTaskById(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":n=getStartDate(0,dateFormat,rawTasks[t].raw.startTime.startData),n&&(rawTasks[t].startTime=n)}return rawTasks[t].startTime&&(rawTasks[t].endTime=getEndDate(rawTasks[t].startTime,dateFormat,rawTasks[t].raw.endTime.data,inclusiveEndDates),rawTasks[t].endTime&&(rawTasks[t].processed=!0,rawTasks[t].manualEndTime=dayjs(rawTasks[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),checkTaskDates(rawTasks[t],dateFormat,excludes,includes))),rawTasks[t].processed};let e=!0;for(const[n,i]of rawTasks.entries())t(n),e=e&&i.processed;return e},setLink=function(t,e){let n=e;"loose"!==getConfig().securityLevel&&(n=sanitizeUrl(e)),t.split(",").forEach((function(t){void 0!==findTaskById(t)&&(pushFun(t,(()=>{window.open(n,"_self")})),links[t]=n)})),setClass(t,"clickable")},setClass=function(t,e){t.split(",").forEach((function(t){let n=findTaskById(t);void 0!==n&&n.classes.push(e)}))},setClickFun=function(t,e,n){if("loose"!==getConfig().securityLevel)return;if(void 0===e)return;let i=[];if("string"==typeof n){i=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<i.length;t++){let e=i[t].trim();'"'===e.charAt(0)&&'"'===e.charAt(e.length-1)&&(e=e.substr(1,e.length-2)),i[t]=e}}0===i.length&&i.push(t),void 0!==findTaskById(t)&&pushFun(t,(()=>{utils.runFunc(e,...i)}))},pushFun=function(t,e){funs.push((function(){const n=document.querySelector(`[id="${t}"]`);null!==n&&n.addEventListener("click",(function(){e()}))}),(function(){const n=document.querySelector(`[id="${t}-text"]`);null!==n&&n.addEventListener("click",(function(){e()}))}))},setClickEvent=function(t,e,n){t.split(",").forEach((function(t){setClickFun(t,e,n)})),setClass(t,"clickable")},bindFunctions=function(t){funs.forEach((function(e){e(t)}))},ganttDb={parseDirective,getConfig:()=>getConfig().gantt,clear,setDateFormat,getDateFormat,enableInclusiveEndDates,endDatesAreInclusive,enableTopAxis,topAxisEnabled,setAxisFormat,getAxisFormat,setTickInterval,getTickInterval,setTodayMarker,getTodayMarker,setAccTitle,getAccTitle,setDiagramTitle,getDiagramTitle,setDisplayMode,getDisplayMode,setAccDescription,getAccDescription,addSection,getSections,getTasks,addTask,findTaskById,addTaskOrg,setIncludes,getIncludes,setExcludes,getExcludes,setClickEvent,setLink,getLinks,bindFunctions,parseDuration,isInvalidDate,setWeekday,getWeekday};function getTaskTags(t,e,n){let i=!0;for(;i;)i=!1,n.forEach((function(n){const s=new RegExp("^\\s*"+n+"\\s*$");t[0].match(s)&&(e[n]=!0,t.shift(1),i=!0)}))}const setConf=function(){log.debug("Something is calling, setConf, remove the call")},mapWeekdayToTimeFunction={monday:timeMonday,tuesday:timeTuesday,wednesday:timeWednesday,thursday:timeThursday,friday:timeFriday,saturday:timeSaturday,sunday:timeSunday},getMaxIntersections=(t,e)=>{let n=[...t].map((()=>-1/0)),i=[...t].sort(((t,e)=>t.startTime-e.startTime||t.order-e.order)),s=0;for(const t of i)for(let i=0;i<n.length;i++)if(t.startTime>=n[i]){n[i]=t.endTime,t.order=i+e,i>s&&(s=i);break}return s};let w;const draw=function(t,e,n,i){const s=getConfig().gantt,a=getConfig().securityLevel;let r;"sandbox"===a&&(r=select("#i"+e));const o=select("sandbox"===a?r.nodes()[0].contentDocument.body:"body"),c="sandbox"===a?r.nodes()[0].contentDocument:document,l=c.getElementById(e);w=l.parentElement.offsetWidth,void 0===w&&(w=1200),void 0!==s.useWidth&&(w=s.useWidth);const d=i.db.getTasks();let u=[];for(const t of d)u.push(t.type);u=function(t){const e={},n=[];for(let i=0,s=t.length;i<s;++i)Object.prototype.hasOwnProperty.call(e,t[i])||(e[t[i]]=!0,n.push(t[i]));return n}(u);const h={};let m=2*s.topPadding;if("compact"===i.db.getDisplayMode()||"compact"===s.displayMode){const t={};for(const e of d)void 0===t[e.section]?t[e.section]=[e]:t[e.section].push(e);let e=0;for(const n of Object.keys(t)){const i=getMaxIntersections(t[n],e)+1;e+=i,m+=i*(s.barHeight+s.barGap),h[n]=i}}else{m+=d.length*(s.barHeight+s.barGap);for(const t of u)h[t]=d.filter((e=>e.type===t)).length}l.setAttribute("viewBox","0 0 "+w+" "+m);const y=o.select(`[id="${e}"]`),k=scaleTime().domain([min(d,(function(t){return t.startTime})),max(d,(function(t){return t.endTime}))]).rangeRound([0,w-s.leftPadding-s.rightPadding]);d.sort((function(t,e){const n=t.startTime,i=e.startTime;let s=0;return n>i?s=1:n<i&&(s=-1),s})),function(t,n,a){const r=s.barHeight,o=r+s.barGap,l=s.topPadding,d=s.leftPadding;scaleLinear().domain([0,u.length]).range(["#00B9FA","#F95002"]).interpolate(interpolateHcl),function(t,e,n,a,r,o,c,l){const d=o.reduce(((t,{startTime:e})=>t?Math.min(t,e):e),0),u=o.reduce(((t,{endTime:e})=>t?Math.max(t,e):e),0),h=i.db.getDateFormat();if(!d||!u)return;const m=[];let f=null,g=dayjs(d);for(;g.valueOf()<=u;)i.db.isInvalidDate(g,h,c,l)?f?f.end=g:f={start:g,end:g}:f&&(m.push(f),f=null),g=g.add(1,"d");y.append("g").selectAll("rect").data(m).enter().append("rect").attr("id",(function(t){return"exclude-"+t.start.format("YYYY-MM-DD")})).attr("x",(function(t){return k(t.start)+n})).attr("y",s.gridLineStartPadding).attr("width",(function(t){const e=t.end.add(1,"day");return k(e)-k(t.start)})).attr("height",r-e-s.gridLineStartPadding).attr("transform-origin",(function(e,i){return(k(e.start)+n+.5*(k(e.end)-k(e.start))).toString()+"px "+(i*t+.5*r).toString()+"px"})).attr("class","exclude-range")}(o,l,d,0,a,t,i.db.getExcludes(),i.db.getIncludes()),function(t,e,n,a){let r=axisBottom(k).tickSize(-a+e+s.gridLineStartPadding).tickFormat(timeFormat(i.db.getAxisFormat()||s.axisFormat||"%Y-%m-%d"));const o=/^([1-9]\d*)(minute|hour|day|week|month)$/.exec(i.db.getTickInterval()||s.tickInterval);if(null!==o){const t=o[1],e=o[2],n=i.db.getWeekday()||s.weekday;switch(e){case"minute":r.ticks(timeMinute.every(t));break;case"hour":r.ticks(timeHour.every(t));break;case"day":r.ticks(timeDay.every(t));break;case"week":r.ticks(mapWeekdayToTimeFunction[n].every(t));break;case"month":r.ticks(timeMonth.every(t))}}if(y.append("g").attr("class","grid").attr("transform","translate("+t+", "+(a-50)+")").call(r).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),i.db.topAxisEnabled()||s.topAxis){let n=axisTop(k).tickSize(-a+e+s.gridLineStartPadding).tickFormat(timeFormat(i.db.getAxisFormat()||s.axisFormat||"%Y-%m-%d"));if(null!==o){const t=o[1],e=o[2],a=i.db.getWeekday()||s.weekday;switch(e){case"minute":n.ticks(timeMinute.every(t));break;case"hour":n.ticks(timeHour.every(t));break;case"day":n.ticks(timeDay.every(t));break;case"week":n.ticks(mapWeekdayToTimeFunction[a].every(t));break;case"month":n.ticks(timeMonth.every(t))}}y.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(n).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}(d,l,0,a),function(t,n,a,r,o,c,l){const d=[...new Set(t.map((t=>t.order)))].map((e=>t.find((t=>t.order===e))));y.append("g").selectAll("rect").data(d).enter().append("rect").attr("x",0).attr("y",(function(t,e){return t.order*n+a-2})).attr("width",(function(){return l-s.rightPadding/2})).attr("height",n).attr("class",(function(t){for(const[e,n]of u.entries())if(t.type===n)return"section section"+e%s.numberSectionStyles;return"section section0"}));const h=y.append("g").selectAll("rect").data(t).enter(),m=i.db.getLinks();if(h.append("rect").attr("id",(function(t){return t.id})).attr("rx",3).attr("ry",3).attr("x",(function(t){return t.milestone?k(t.startTime)+r+.5*(k(t.endTime)-k(t.startTime))-.5*o:k(t.startTime)+r})).attr("y",(function(t,e){return t.order*n+a})).attr("width",(function(t){return t.milestone?o:k(t.renderEndTime||t.endTime)-k(t.startTime)})).attr("height",o).attr("transform-origin",(function(t,e){return e=t.order,(k(t.startTime)+r+.5*(k(t.endTime)-k(t.startTime))).toString()+"px "+(e*n+a+.5*o).toString()+"px"})).attr("class",(function(t){let e="";t.classes.length>0&&(e=t.classes.join(" "));let n=0;for(const[e,i]of u.entries())t.type===i&&(n=e%s.numberSectionStyles);let i="";return t.active?t.crit?i+=" activeCrit":i=" active":t.done?i=t.crit?" doneCrit":" done":t.crit&&(i+=" crit"),0===i.length&&(i=" task"),t.milestone&&(i=" milestone "+i),i+=n,i+=" "+e,"task"+i})),h.append("text").attr("id",(function(t){return t.id+"-text"})).text((function(t){return t.task})).attr("font-size",s.fontSize).attr("x",(function(t){let e=k(t.startTime),n=k(t.renderEndTime||t.endTime);t.milestone&&(e+=.5*(k(t.endTime)-k(t.startTime))-.5*o),t.milestone&&(n=e+o);const i=this.getBBox().width;return i>n-e?n+i+1.5*s.leftPadding>l?e+r-5:n+r+5:(n-e)/2+e+r})).attr("y",(function(t,e){return t.order*n+s.barHeight/2+(s.fontSize/2-2)+a})).attr("text-height",o).attr("class",(function(t){const e=k(t.startTime);let n=k(t.endTime);t.milestone&&(n=e+o);const i=this.getBBox().width;let a="";t.classes.length>0&&(a=t.classes.join(" "));let r=0;for(const[e,n]of u.entries())t.type===n&&(r=e%s.numberSectionStyles);let c="";return t.active&&(c=t.crit?"activeCritText"+r:"activeText"+r),t.done?c=t.crit?c+" doneCritText"+r:c+" doneText"+r:t.crit&&(c=c+" critText"+r),t.milestone&&(c+=" milestoneText"),i>n-e?n+i+1.5*s.leftPadding>l?a+" taskTextOutsideLeft taskTextOutside"+r+" "+c:a+" taskTextOutsideRight taskTextOutside"+r+" "+c+" width-"+i:a+" taskText taskText"+r+" "+c+" width-"+i})),"sandbox"===getConfig().securityLevel){let t;t=select("#i"+e);const n=t.nodes()[0].contentDocument;h.filter((function(t){return void 0!==m[t.id]})).each((function(t){var e=n.querySelector("#"+t.id),i=n.querySelector("#"+t.id+"-text");const s=e.parentNode;var a=n.createElement("a");a.setAttribute("xlink:href",m[t.id]),a.setAttribute("target","_top"),s.appendChild(a),a.appendChild(e),a.appendChild(i)}))}}(t,o,l,d,r,0,n),function(t,e){let n=0;const i=Object.keys(h).map((t=>[t,h[t]]));y.append("g").selectAll("text").data(i).enter().append((function(t){const e=t[0].split(common.lineBreakRegex),n=-(e.length-1)/2,i=c.createElementNS("http://www.w3.org/2000/svg","text");i.setAttribute("dy",n+"em");for(const[t,n]of e.entries()){const e=c.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),t>0&&e.setAttribute("dy","1em"),e.textContent=n,i.appendChild(e)}return i})).attr("x",10).attr("y",(function(s,a){if(!(a>0))return s[1]*t/2+e;for(let r=0;r<a;r++)return n+=i[a-1][1],s[1]*t/2+n*t+e})).attr("font-size",s.sectionFontSize).attr("class",(function(t){for(const[e,n]of u.entries())if(t[0]===n)return"sectionTitle sectionTitle"+e%s.numberSectionStyles;return"sectionTitle"}))}(o,l),function(t,e,n,a){const r=i.db.getTodayMarker();if("off"===r)return;const o=y.append("g").attr("class","today"),c=new Date,l=o.append("line");l.attr("x1",k(c)+t).attr("x2",k(c)+t).attr("y1",s.titleTopMargin).attr("y2",a-s.titleTopMargin).attr("class","today"),""!==r&&l.attr("style",r.replace(/,/g,";"))}(d,0,0,a)}(d,w,m),configureSvgSize(y,m,w,s.useMaxWidth),y.append("text").text(i.db.getDiagramTitle()).attr("x",w/2).attr("y",s.titleTopMargin).attr("class","titleText")},ganttRenderer={setConf,draw},getStyles=t=>`\n  .mermaid-main-font {\n    font-family: "trebuchet ms", verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  .exclude-range {\n    fill: ${t.excludeBkgColor};\n  }\n\n  .section {\n    stroke: none;\n    opacity: 0.2;\n  }\n\n  .section0 {\n    fill: ${t.sectionBkgColor};\n  }\n\n  .section2 {\n    fill: ${t.sectionBkgColor2};\n  }\n\n  .section1,\n  .section3 {\n    fill: ${t.altSectionBkgColor};\n    opacity: 0.2;\n  }\n\n  .sectionTitle0 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle1 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle2 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle3 {\n    fill: ${t.titleColor};\n  }\n\n  .sectionTitle {\n    text-anchor: start;\n    // font-size: ${t.ganttFontSize};\n    // text-height: 14px;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n\n  }\n\n\n  /* Grid and axis */\n\n  .grid .tick {\n    stroke: ${t.gridColor};\n    opacity: 0.8;\n    shape-rendering: crispEdges;\n    text {\n      font-family: ${t.fontFamily};\n      fill: ${t.textColor};\n    }\n  }\n\n  .grid path {\n    stroke-width: 0;\n  }\n\n\n  /* Today line */\n\n  .today {\n    fill: none;\n    stroke: ${t.todayLineColor};\n    stroke-width: 2px;\n  }\n\n\n  /* Task styling */\n\n  /* Default task */\n\n  .task {\n    stroke-width: 2;\n  }\n\n  .taskText {\n    text-anchor: middle;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n\n  // .taskText:not([font-size]) {\n  //   font-size: ${t.ganttFontSize};\n  // }\n\n  .taskTextOutsideRight {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: start;\n    // font-size: ${t.ganttFontSize};\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n\n  }\n\n  .taskTextOutsideLeft {\n    fill: ${t.taskTextDarkColor};\n    text-anchor: end;\n    // font-size: ${t.ganttFontSize};\n  }\n\n  /* Special case clickable */\n  .task.clickable {\n    cursor: pointer;\n  }\n  .taskText.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideLeft.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  .taskTextOutsideRight.clickable {\n    cursor: pointer;\n    fill: ${t.taskTextClickableColor} !important;\n    font-weight: bold;\n  }\n\n  /* Specific task settings for the sections*/\n\n  .taskText0,\n  .taskText1,\n  .taskText2,\n  .taskText3 {\n    fill: ${t.taskTextColor};\n  }\n\n  .task0,\n  .task1,\n  .task2,\n  .task3 {\n    fill: ${t.taskBkgColor};\n    stroke: ${t.taskBorderColor};\n  }\n\n  .taskTextOutside0,\n  .taskTextOutside2\n  {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n  .taskTextOutside1,\n  .taskTextOutside3 {\n    fill: ${t.taskTextOutsideColor};\n  }\n\n\n  /* Active task */\n\n  .active0,\n  .active1,\n  .active2,\n  .active3 {\n    fill: ${t.activeTaskBkgColor};\n    stroke: ${t.activeTaskBorderColor};\n  }\n\n  .activeText0,\n  .activeText1,\n  .activeText2,\n  .activeText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Completed task */\n\n  .done0,\n  .done1,\n  .done2,\n  .done3 {\n    stroke: ${t.doneTaskBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneText0,\n  .doneText1,\n  .doneText2,\n  .doneText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n\n  /* Tasks on the critical line */\n\n  .crit0,\n  .crit1,\n  .crit2,\n  .crit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.critBkgColor};\n    stroke-width: 2;\n  }\n\n  .activeCrit0,\n  .activeCrit1,\n  .activeCrit2,\n  .activeCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.activeTaskBkgColor};\n    stroke-width: 2;\n  }\n\n  .doneCrit0,\n  .doneCrit1,\n  .doneCrit2,\n  .doneCrit3 {\n    stroke: ${t.critBorderColor};\n    fill: ${t.doneTaskBkgColor};\n    stroke-width: 2;\n    cursor: pointer;\n    shape-rendering: crispEdges;\n  }\n\n  .milestone {\n    transform: rotate(45deg) scale(0.8,0.8);\n  }\n\n  .milestoneText {\n    font-style: italic;\n  }\n  .doneCritText0,\n  .doneCritText1,\n  .doneCritText2,\n  .doneCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .activeCritText0,\n  .activeCritText1,\n  .activeCritText2,\n  .activeCritText3 {\n    fill: ${t.taskTextDarkColor} !important;\n  }\n\n  .titleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor}    ;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n`,ganttStyles=getStyles,diagram={parser:ganttParser,db:ganttDb,renderer:ganttRenderer,styles:ganttStyles};export{diagram};