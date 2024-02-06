import{s as setAccTitle,g as getAccTitle,a as getAccDescription,b as setAccDescription,c as getConfig,B as setDiagramTitle,D as getDiagramTitle,m as mermaidAPI,E as clear$1,l as log,f as common,z as utils,j as d3select}from"./mermaid-766fee4c.js";var parser=function(){var e=function(e,t,s,n){for(s=s||{},n=e.length;n--;s[e[n]]=t);return s},t=[1,34],s=[1,35],n=[1,36],i=[1,37],u=[1,9],a=[1,8],r=[1,19],c=[1,20],o=[1,21],l=[1,40],h=[1,41],A=[1,27],p=[1,25],d=[1,26],C=[1,32],m=[1,33],y=[1,28],E=[1,29],g=[1,30],T=[1,31],D=[1,45],f=[1,42],k=[1,43],b=[1,44],F=[1,46],_=[1,24],B=[1,16,24],N=[1,60],S=[1,61],v=[1,62],L=[1,63],$=[1,64],I=[1,65],x=[1,66],O=[1,16,24,52],R=[1,77],P=[1,16,24,27,28,36,50,52,55,68,69,70,71,72,73,74,79,81],w=[1,16,24,27,28,34,36,50,52,55,59,68,69,70,71,72,73,74,79,81,94,96,97,98,99],M=[1,86],G=[28,94,96,97,98,99],U=[28,73,74,94,96,97,98,99],z=[28,68,69,70,71,72,94,96,97,98,99],K=[1,99],Y=[1,16,24,50,52,55],j=[1,16,24,36],Q=[8,9,10,11,19,23,44,46,48,53,57,58,60,61,63,65,75,76,78,82,94,96,97,98,99],X={trace:function(){},yy:{},symbols_:{error:2,start:3,mermaidDoc:4,directive:5,statements:6,direction:7,direction_tb:8,direction_bt:9,direction_rl:10,direction_lr:11,graphConfig:12,openDirective:13,typeDirective:14,closeDirective:15,NEWLINE:16,":":17,argDirective:18,open_directive:19,type_directive:20,arg_directive:21,close_directive:22,CLASS_DIAGRAM:23,EOF:24,statement:25,classLabel:26,SQS:27,STR:28,SQE:29,namespaceName:30,alphaNumToken:31,className:32,classLiteralName:33,GENERICTYPE:34,relationStatement:35,LABEL:36,namespaceStatement:37,classStatement:38,methodStatement:39,annotationStatement:40,clickStatement:41,cssClassStatement:42,noteStatement:43,acc_title:44,acc_title_value:45,acc_descr:46,acc_descr_value:47,acc_descr_multiline_value:48,namespaceIdentifier:49,STRUCT_START:50,classStatements:51,STRUCT_STOP:52,NAMESPACE:53,classIdentifier:54,STYLE_SEPARATOR:55,members:56,CLASS:57,ANNOTATION_START:58,ANNOTATION_END:59,MEMBER:60,SEPARATOR:61,relation:62,NOTE_FOR:63,noteText:64,NOTE:65,relationType:66,lineType:67,AGGREGATION:68,EXTENSION:69,COMPOSITION:70,DEPENDENCY:71,LOLLIPOP:72,LINE:73,DOTTED_LINE:74,CALLBACK:75,LINK:76,LINK_TARGET:77,CLICK:78,CALLBACK_NAME:79,CALLBACK_ARGS:80,HREF:81,CSSCLASS:82,commentToken:83,textToken:84,graphCodeTokens:85,textNoTagsToken:86,TAGSTART:87,TAGEND:88,"==":89,"--":90,PCT:91,DEFAULT:92,SPACE:93,MINUS:94,keywords:95,UNICODE_TEXT:96,NUM:97,ALPHA:98,BQUOTE_STR:99,$accept:0,$end:1},terminals_:{2:"error",8:"direction_tb",9:"direction_bt",10:"direction_rl",11:"direction_lr",16:"NEWLINE",17:":",19:"open_directive",20:"type_directive",21:"arg_directive",22:"close_directive",23:"CLASS_DIAGRAM",24:"EOF",27:"SQS",28:"STR",29:"SQE",34:"GENERICTYPE",36:"LABEL",44:"acc_title",45:"acc_title_value",46:"acc_descr",47:"acc_descr_value",48:"acc_descr_multiline_value",50:"STRUCT_START",52:"STRUCT_STOP",53:"NAMESPACE",55:"STYLE_SEPARATOR",57:"CLASS",58:"ANNOTATION_START",59:"ANNOTATION_END",60:"MEMBER",61:"SEPARATOR",63:"NOTE_FOR",65:"NOTE",68:"AGGREGATION",69:"EXTENSION",70:"COMPOSITION",71:"DEPENDENCY",72:"LOLLIPOP",73:"LINE",74:"DOTTED_LINE",75:"CALLBACK",76:"LINK",77:"LINK_TARGET",78:"CLICK",79:"CALLBACK_NAME",80:"CALLBACK_ARGS",81:"HREF",82:"CSSCLASS",85:"graphCodeTokens",87:"TAGSTART",88:"TAGEND",89:"==",90:"--",91:"PCT",92:"DEFAULT",93:"SPACE",94:"MINUS",95:"keywords",96:"UNICODE_TEXT",97:"NUM",98:"ALPHA",99:"BQUOTE_STR"},productions_:[0,[3,1],[3,2],[3,1],[7,1],[7,1],[7,1],[7,1],[4,1],[5,4],[5,6],[13,1],[14,1],[18,1],[15,1],[12,4],[6,1],[6,2],[6,3],[26,3],[30,1],[30,2],[32,1],[32,1],[32,2],[32,2],[32,2],[25,1],[25,2],[25,1],[25,1],[25,1],[25,1],[25,1],[25,1],[25,1],[25,1],[25,2],[25,2],[25,1],[37,4],[37,5],[49,2],[51,1],[51,2],[51,3],[38,1],[38,3],[38,4],[38,6],[54,2],[54,3],[40,4],[56,1],[56,2],[39,1],[39,2],[39,1],[39,1],[35,3],[35,4],[35,4],[35,5],[43,3],[43,2],[62,3],[62,2],[62,2],[62,1],[66,1],[66,1],[66,1],[66,1],[66,1],[67,1],[67,1],[41,3],[41,4],[41,3],[41,4],[41,4],[41,5],[41,3],[41,4],[41,4],[41,5],[41,4],[41,5],[41,5],[41,6],[42,3],[83,1],[83,1],[84,1],[84,1],[84,1],[84,1],[84,1],[84,1],[84,1],[86,1],[86,1],[86,1],[86,1],[31,1],[31,1],[31,1],[31,1],[33,1],[64,1]],performAction:function(e,t,s,n,i,u,a){var r=u.length-1;switch(i){case 4:n.setDirection("TB");break;case 5:n.setDirection("BT");break;case 6:n.setDirection("RL");break;case 7:n.setDirection("LR");break;case 11:n.parseDirective("%%{","open_directive");break;case 12:n.parseDirective(u[r],"type_directive");break;case 13:u[r]=u[r].trim().replace(/'/g,'"'),n.parseDirective(u[r],"arg_directive");break;case 14:n.parseDirective("}%%","close_directive","class");break;case 19:this.$=u[r-1];break;case 20:case 22:case 23:this.$=u[r];break;case 21:case 24:this.$=u[r-1]+u[r];break;case 25:case 26:this.$=u[r-1]+"~"+u[r]+"~";break;case 27:n.addRelation(u[r]);break;case 28:u[r-1].title=n.cleanupLabel(u[r]),n.addRelation(u[r-1]);break;case 37:this.$=u[r].trim(),n.setAccTitle(this.$);break;case 38:case 39:this.$=u[r].trim(),n.setAccDescription(this.$);break;case 40:n.addClassesToNamespace(u[r-3],u[r-1]);break;case 41:n.addClassesToNamespace(u[r-4],u[r-1]);break;case 42:this.$=u[r],n.addNamespace(u[r]);break;case 43:case 53:this.$=[u[r]];break;case 44:this.$=[u[r-1]];break;case 45:u[r].unshift(u[r-2]),this.$=u[r];break;case 47:n.setCssClass(u[r-2],u[r]);break;case 48:n.addMembers(u[r-3],u[r-1]);break;case 49:n.setCssClass(u[r-5],u[r-3]),n.addMembers(u[r-5],u[r-1]);break;case 50:this.$=u[r],n.addClass(u[r]);break;case 51:this.$=u[r-1],n.addClass(u[r-1]),n.setClassLabel(u[r-1],u[r]);break;case 52:n.addAnnotation(u[r],u[r-2]);break;case 54:u[r].push(u[r-1]),this.$=u[r];break;case 55:case 57:case 58:break;case 56:n.addMember(u[r-1],n.cleanupLabel(u[r]));break;case 59:this.$={id1:u[r-2],id2:u[r],relation:u[r-1],relationTitle1:"none",relationTitle2:"none"};break;case 60:this.$={id1:u[r-3],id2:u[r],relation:u[r-1],relationTitle1:u[r-2],relationTitle2:"none"};break;case 61:this.$={id1:u[r-3],id2:u[r],relation:u[r-2],relationTitle1:"none",relationTitle2:u[r-1]};break;case 62:this.$={id1:u[r-4],id2:u[r],relation:u[r-2],relationTitle1:u[r-3],relationTitle2:u[r-1]};break;case 63:n.addNote(u[r],u[r-1]);break;case 64:n.addNote(u[r]);break;case 65:this.$={type1:u[r-2],type2:u[r],lineType:u[r-1]};break;case 66:this.$={type1:"none",type2:u[r],lineType:u[r-1]};break;case 67:this.$={type1:u[r-1],type2:"none",lineType:u[r]};break;case 68:this.$={type1:"none",type2:"none",lineType:u[r]};break;case 69:this.$=n.relationType.AGGREGATION;break;case 70:this.$=n.relationType.EXTENSION;break;case 71:this.$=n.relationType.COMPOSITION;break;case 72:this.$=n.relationType.DEPENDENCY;break;case 73:this.$=n.relationType.LOLLIPOP;break;case 74:this.$=n.lineType.LINE;break;case 75:this.$=n.lineType.DOTTED_LINE;break;case 76:case 82:this.$=u[r-2],n.setClickEvent(u[r-1],u[r]);break;case 77:case 83:this.$=u[r-3],n.setClickEvent(u[r-2],u[r-1]),n.setTooltip(u[r-2],u[r]);break;case 78:this.$=u[r-2],n.setLink(u[r-1],u[r]);break;case 79:this.$=u[r-3],n.setLink(u[r-2],u[r-1],u[r]);break;case 80:this.$=u[r-3],n.setLink(u[r-2],u[r-1]),n.setTooltip(u[r-2],u[r]);break;case 81:this.$=u[r-4],n.setLink(u[r-3],u[r-2],u[r]),n.setTooltip(u[r-3],u[r-1]);break;case 84:this.$=u[r-3],n.setClickEvent(u[r-2],u[r-1],u[r]);break;case 85:this.$=u[r-4],n.setClickEvent(u[r-3],u[r-2],u[r-1]),n.setTooltip(u[r-3],u[r]);break;case 86:this.$=u[r-3],n.setLink(u[r-2],u[r]);break;case 87:this.$=u[r-4],n.setLink(u[r-3],u[r-1],u[r]);break;case 88:this.$=u[r-4],n.setLink(u[r-3],u[r-1]),n.setTooltip(u[r-3],u[r]);break;case 89:this.$=u[r-5],n.setLink(u[r-4],u[r-2],u[r]),n.setTooltip(u[r-4],u[r-1]);break;case 90:n.setCssClass(u[r-1],u[r])}},table:[{3:1,4:2,5:3,6:4,7:18,8:t,9:s,10:n,11:i,12:5,13:6,19:u,23:a,25:7,31:38,32:22,33:39,35:10,37:11,38:12,39:13,40:14,41:15,42:16,43:17,44:r,46:c,48:o,49:23,53:l,54:24,57:h,58:A,60:p,61:d,63:C,65:m,75:y,76:E,78:g,82:T,94:D,96:f,97:k,98:b,99:F},{1:[3]},{1:[2,1]},{3:47,4:2,5:3,6:4,7:18,8:t,9:s,10:n,11:i,12:5,13:6,19:u,23:a,25:7,31:38,32:22,33:39,35:10,37:11,38:12,39:13,40:14,41:15,42:16,43:17,44:r,46:c,48:o,49:23,53:l,54:24,57:h,58:A,60:p,61:d,63:C,65:m,75:y,76:E,78:g,82:T,94:D,96:f,97:k,98:b,99:F},{1:[2,3]},{1:[2,8]},{14:48,20:[1,49]},e(_,[2,16],{16:[1,50]}),{16:[1,51]},{20:[2,11]},e(B,[2,27],{36:[1,52]}),e(B,[2,29]),e(B,[2,30]),e(B,[2,31]),e(B,[2,32]),e(B,[2,33]),e(B,[2,34]),e(B,[2,35]),e(B,[2,36]),{45:[1,53]},{47:[1,54]},e(B,[2,39]),e(B,[2,55],{62:55,66:58,67:59,28:[1,56],36:[1,57],68:N,69:S,70:v,71:L,72:$,73:I,74:x}),{50:[1,67]},e(O,[2,46],{50:[1,69],55:[1,68]}),e(B,[2,57]),e(B,[2,58]),{31:70,94:D,96:f,97:k,98:b},{31:38,32:71,33:39,94:D,96:f,97:k,98:b,99:F},{31:38,32:72,33:39,94:D,96:f,97:k,98:b,99:F},{31:38,32:73,33:39,94:D,96:f,97:k,98:b,99:F},{28:[1,74]},{31:38,32:75,33:39,94:D,96:f,97:k,98:b,99:F},{28:R,64:76},e(B,[2,4]),e(B,[2,5]),e(B,[2,6]),e(B,[2,7]),e(P,[2,22],{31:38,33:39,32:78,34:[1,79],94:D,96:f,97:k,98:b,99:F}),e(P,[2,23],{34:[1,80]}),{30:81,31:82,94:D,96:f,97:k,98:b},{31:38,32:83,33:39,94:D,96:f,97:k,98:b,99:F},e(w,[2,104]),e(w,[2,105]),e(w,[2,106]),e(w,[2,107]),e([1,16,24,27,28,34,36,50,52,55,68,69,70,71,72,73,74,79,81],[2,108]),{1:[2,2]},{15:84,17:[1,85],22:M},e([17,22],[2,12]),e(_,[2,17],{25:7,35:10,37:11,38:12,39:13,40:14,41:15,42:16,43:17,7:18,32:22,49:23,54:24,31:38,33:39,6:87,8:t,9:s,10:n,11:i,44:r,46:c,48:o,53:l,57:h,58:A,60:p,61:d,63:C,65:m,75:y,76:E,78:g,82:T,94:D,96:f,97:k,98:b,99:F}),{6:88,7:18,8:t,9:s,10:n,11:i,25:7,31:38,32:22,33:39,35:10,37:11,38:12,39:13,40:14,41:15,42:16,43:17,44:r,46:c,48:o,49:23,53:l,54:24,57:h,58:A,60:p,61:d,63:C,65:m,75:y,76:E,78:g,82:T,94:D,96:f,97:k,98:b,99:F},e(B,[2,28]),e(B,[2,37]),e(B,[2,38]),{28:[1,90],31:38,32:89,33:39,94:D,96:f,97:k,98:b,99:F},{62:91,66:58,67:59,68:N,69:S,70:v,71:L,72:$,73:I,74:x},e(B,[2,56]),{67:92,73:I,74:x},e(G,[2,68],{66:93,68:N,69:S,70:v,71:L,72:$}),e(U,[2,69]),e(U,[2,70]),e(U,[2,71]),e(U,[2,72]),e(U,[2,73]),e(z,[2,74]),e(z,[2,75]),{16:[1,95],38:96,51:94,54:24,57:h},{31:97,94:D,96:f,97:k,98:b},{56:98,60:K},{59:[1,100]},{28:[1,101]},{28:[1,102]},{79:[1,103],81:[1,104]},{31:105,94:D,96:f,97:k,98:b},{28:R,64:106},e(B,[2,64]),e(B,[2,109]),e(P,[2,24]),e(P,[2,25]),e(P,[2,26]),{50:[2,42]},{30:107,31:82,50:[2,20],94:D,96:f,97:k,98:b},e(Y,[2,50],{26:108,27:[1,109]}),{16:[1,110]},{18:111,21:[1,112]},{16:[2,14]},e(_,[2,18]),{24:[1,113]},e(j,[2,59]),{31:38,32:114,33:39,94:D,96:f,97:k,98:b,99:F},{28:[1,116],31:38,32:115,33:39,94:D,96:f,97:k,98:b,99:F},e(G,[2,67],{66:117,68:N,69:S,70:v,71:L,72:$}),e(G,[2,66]),{52:[1,118]},{38:96,51:119,54:24,57:h},{16:[1,120],52:[2,43]},e(O,[2,47],{50:[1,121]}),{52:[1,122]},{52:[2,53],56:123,60:K},{31:38,32:124,33:39,94:D,96:f,97:k,98:b,99:F},e(B,[2,76],{28:[1,125]}),e(B,[2,78],{28:[1,127],77:[1,126]}),e(B,[2,82],{28:[1,128],80:[1,129]}),{28:[1,130]},e(B,[2,90]),e(B,[2,63]),{50:[2,21]},e(Y,[2,51]),{28:[1,131]},e(Q,[2,9]),{15:132,22:M},{22:[2,13]},{1:[2,15]},e(j,[2,61]),e(j,[2,60]),{31:38,32:133,33:39,94:D,96:f,97:k,98:b,99:F},e(G,[2,65]),e(B,[2,40]),{52:[1,134]},{38:96,51:135,52:[2,44],54:24,57:h},{56:136,60:K},e(O,[2,48]),{52:[2,54]},e(B,[2,52]),e(B,[2,77]),e(B,[2,79]),e(B,[2,80],{77:[1,137]}),e(B,[2,83]),e(B,[2,84],{28:[1,138]}),e(B,[2,86],{28:[1,140],77:[1,139]}),{29:[1,141]},{16:[1,142]},e(j,[2,62]),e(B,[2,41]),{52:[2,45]},{52:[1,143]},e(B,[2,81]),e(B,[2,85]),e(B,[2,87]),e(B,[2,88],{77:[1,144]}),e(Y,[2,19]),e(Q,[2,10]),e(O,[2,49]),e(B,[2,89])],defaultActions:{2:[2,1],4:[2,3],5:[2,8],9:[2,11],47:[2,2],81:[2,42],86:[2,14],107:[2,21],112:[2,13],113:[2,15],123:[2,54],135:[2,45]},parseError:function(e,t){if(!t.recoverable){var s=new Error(e);throw s.hash=t,s}this.trace(e)},parse:function(e){var t=[0],s=[],n=[null],i=[],u=this.table,a="",r=0,c=0,o=i.slice.call(arguments,1),l=Object.create(this.lexer),h={yy:{}};for(var A in this.yy)Object.prototype.hasOwnProperty.call(this.yy,A)&&(h.yy[A]=this.yy[A]);l.setInput(e,h.yy),h.yy.lexer=l,h.yy.parser=this,void 0===l.yylloc&&(l.yylloc={});var p=l.yylloc;i.push(p);var d=l.options&&l.options.ranges;"function"==typeof h.yy.parseError?this.parseError=h.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var C,m,y,E,g,T,D,f,k,b={};;){if(m=t[t.length-1],this.defaultActions[m]?y=this.defaultActions[m]:(null==C&&(k=void 0,"number"!=typeof(k=s.pop()||l.lex()||1)&&(k instanceof Array&&(k=(s=k).pop()),k=this.symbols_[k]||k),C=k),y=u[m]&&u[m][C]),void 0===y||!y.length||!y[0]){var F;for(g in f=[],u[m])this.terminals_[g]&&g>2&&f.push("'"+this.terminals_[g]+"'");F=l.showPosition?"Parse error on line "+(r+1)+":\n"+l.showPosition()+"\nExpecting "+f.join(", ")+", got '"+(this.terminals_[C]||C)+"'":"Parse error on line "+(r+1)+": Unexpected "+(1==C?"end of input":"'"+(this.terminals_[C]||C)+"'"),this.parseError(F,{text:l.match,token:this.terminals_[C]||C,line:l.yylineno,loc:p,expected:f})}if(y[0]instanceof Array&&y.length>1)throw new Error("Parse Error: multiple actions possible at state: "+m+", token: "+C);switch(y[0]){case 1:t.push(C),n.push(l.yytext),i.push(l.yylloc),t.push(y[1]),C=null,c=l.yyleng,a=l.yytext,r=l.yylineno,p=l.yylloc;break;case 2:if(T=this.productions_[y[1]][1],b.$=n[n.length-T],b._$={first_line:i[i.length-(T||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(T||1)].first_column,last_column:i[i.length-1].last_column},d&&(b._$.range=[i[i.length-(T||1)].range[0],i[i.length-1].range[1]]),void 0!==(E=this.performAction.apply(b,[a,c,r,h.yy,y[1],n,i].concat(o))))return E;T&&(t=t.slice(0,-1*T*2),n=n.slice(0,-1*T),i=i.slice(0,-1*T)),t.push(this.productions_[y[1]][0]),n.push(b.$),i.push(b._$),D=u[t[t.length-2]][t[t.length-1]],t.push(D);break;case 3:return!0}}return!0}},W={EOF:1,parseError:function(e,t){if(!this.yy.parser)throw new Error(e);this.yy.parser.parseError(e,t)},setInput:function(e,t){return this.yy=t||this.yy||{},this._input=e,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var e=this._input[0];return this.yytext+=e,this.yyleng++,this.offset++,this.match+=e,this.matched+=e,e.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),e},unput:function(e){var t=e.length,s=e.split(/(?:\r\n?|\n)/g);this._input=e+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-t),this.offset-=t;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),s.length-1&&(this.yylineno-=s.length-1);var i=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:s?(s.length===n.length?this.yylloc.first_column:0)+n[n.length-s.length].length-s[0].length:this.yylloc.first_column-t},this.options.ranges&&(this.yylloc.range=[i[0],i[0]+this.yyleng-t]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(e){this.unput(this.match.slice(e))},pastInput:function(){var e=this.matched.substr(0,this.matched.length-this.match.length);return(e.length>20?"...":"")+e.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var e=this.match;return e.length<20&&(e+=this._input.substr(0,20-e.length)),(e.substr(0,20)+(e.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var e=this.pastInput(),t=new Array(e.length+1).join("-");return e+this.upcomingInput()+"\n"+t+"^"},test_match:function(e,t){var s,n,i;if(this.options.backtrack_lexer&&(i={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(i.yylloc.range=this.yylloc.range.slice(0))),(n=e[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+e[0].length},this.yytext+=e[0],this.match+=e[0],this.matches=e,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(e[0].length),this.matched+=e[0],s=this.performAction.call(this,this.yy,this,t,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),s)return s;if(this._backtrack){for(var u in i)this[u]=i[u];return!1}return!1},next:function(){if(this.done)return this.EOF;var e,t,s,n;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var i=this._currentRules(),u=0;u<i.length;u++)if((s=this._input.match(this.rules[i[u]]))&&(!t||s[0].length>t[0].length)){if(t=s,n=u,this.options.backtrack_lexer){if(!1!==(e=this.test_match(s,i[u])))return e;if(this._backtrack){t=!1;continue}return!1}if(!this.options.flex)break}return t?!1!==(e=this.test_match(t,i[n]))&&e:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(e){this.conditionStack.push(e)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(e){return(e=this.conditionStack.length-1-Math.abs(e||0))>=0?this.conditionStack[e]:"INITIAL"},pushState:function(e){this.begin(e)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(e,t,s,n){switch(s){case 0:return this.begin("open_directive"),19;case 1:return 8;case 2:return 9;case 3:return 10;case 4:return 11;case 5:return this.begin("type_directive"),20;case 6:return this.popState(),this.begin("arg_directive"),17;case 7:return this.popState(),this.popState(),22;case 8:return 21;case 9:case 10:case 19:case 34:case 39:case 43:case 50:break;case 11:return this.begin("acc_title"),44;case 12:return this.popState(),"acc_title_value";case 13:return this.begin("acc_descr"),46;case 14:return this.popState(),"acc_descr_value";case 15:this.begin("acc_descr_multiline");break;case 16:case 24:case 27:case 29:case 61:case 64:this.popState();break;case 17:return"acc_descr_multiline_value";case 18:case 38:return 16;case 20:case 21:return 23;case 22:case 40:case 48:return"EDGE_STATE";case 23:this.begin("callback_name");break;case 25:this.popState(),this.begin("callback_args");break;case 26:return 79;case 28:return 80;case 30:return"STR";case 31:this.begin("string");break;case 32:return this.begin("namespace"),53;case 33:case 42:return this.popState(),16;case 35:return this.begin("namespace-body"),50;case 36:case 46:return this.popState(),52;case 37:case 47:return"EOF_IN_STRUCT";case 41:return this.begin("class"),57;case 44:return this.popState(),this.popState(),52;case 45:return this.begin("class-body"),50;case 49:return"OPEN_IN_STRUCT";case 51:return"MEMBER";case 52:return 82;case 53:return 75;case 54:return 76;case 55:return 78;case 56:return 63;case 57:return 65;case 58:return 58;case 59:return 59;case 60:return 81;case 62:return"GENERICTYPE";case 63:this.begin("generic");break;case 65:return"BQUOTE_STR";case 66:this.begin("bqstring");break;case 67:case 68:case 69:case 70:return 77;case 71:case 72:return 69;case 73:case 74:return 71;case 75:return 70;case 76:return 68;case 77:return 72;case 78:return 73;case 79:return 74;case 80:return 36;case 81:return 55;case 82:return 94;case 83:return"DOT";case 84:return"PLUS";case 85:return 91;case 86:case 87:return"EQUALS";case 88:return 98;case 89:return 27;case 90:return 29;case 91:return"PUNCTUATION";case 92:return 97;case 93:return 96;case 94:return 93;case 95:return 24}},rules:[/^(?:%%\{)/,/^(?:.*direction\s+TB[^\n]*)/,/^(?:.*direction\s+BT[^\n]*)/,/^(?:.*direction\s+RL[^\n]*)/,/^(?:.*direction\s+LR[^\n]*)/,/^(?:((?:(?!\}%%)[^:.])*))/,/^(?::)/,/^(?:\}%%)/,/^(?:((?:(?!\}%%).|\n)*))/,/^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/,/^(?:%%[^\n]*(\r?\n)*)/,/^(?:accTitle\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*\{\s*)/,/^(?:[\}])/,/^(?:[^\}]*)/,/^(?:\s*(\r?\n)+)/,/^(?:\s+)/,/^(?:classDiagram-v2\b)/,/^(?:classDiagram\b)/,/^(?:\[\*\])/,/^(?:call[\s]+)/,/^(?:\([\s]*\))/,/^(?:\()/,/^(?:[^(]*)/,/^(?:\))/,/^(?:[^)]*)/,/^(?:["])/,/^(?:[^"]*)/,/^(?:["])/,/^(?:namespace\b)/,/^(?:\s*(\r?\n)+)/,/^(?:\s+)/,/^(?:[{])/,/^(?:[}])/,/^(?:$)/,/^(?:\s*(\r?\n)+)/,/^(?:\s+)/,/^(?:\[\*\])/,/^(?:class\b)/,/^(?:\s*(\r?\n)+)/,/^(?:\s+)/,/^(?:[}])/,/^(?:[{])/,/^(?:[}])/,/^(?:$)/,/^(?:\[\*\])/,/^(?:[{])/,/^(?:[\n])/,/^(?:[^{}\n]*)/,/^(?:cssClass\b)/,/^(?:callback\b)/,/^(?:link\b)/,/^(?:click\b)/,/^(?:note for\b)/,/^(?:note\b)/,/^(?:<<)/,/^(?:>>)/,/^(?:href\b)/,/^(?:[~])/,/^(?:[^~]*)/,/^(?:~)/,/^(?:[`])/,/^(?:[^`]+)/,/^(?:[`])/,/^(?:_self\b)/,/^(?:_blank\b)/,/^(?:_parent\b)/,/^(?:_top\b)/,/^(?:\s*<\|)/,/^(?:\s*\|>)/,/^(?:\s*>)/,/^(?:\s*<)/,/^(?:\s*\*)/,/^(?:\s*o\b)/,/^(?:\s*\(\))/,/^(?:--)/,/^(?:\.\.)/,/^(?::{1}[^:\n;]+)/,/^(?::{3})/,/^(?:-)/,/^(?:\.)/,/^(?:\+)/,/^(?:%)/,/^(?:=)/,/^(?:=)/,/^(?:\w+)/,/^(?:\[)/,/^(?:\])/,/^(?:[!"#$%&'*+,-.`?\\/])/,/^(?:[0-9]+)/,/^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/,/^(?:\s)/,/^(?:$)/],conditions:{"namespace-body":{rules:[31,36,37,38,39,40,41,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},namespace:{rules:[31,32,33,34,35,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},"class-body":{rules:[31,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},class:{rules:[31,42,43,44,45,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},acc_descr_multiline:{rules:[16,17,31,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},acc_descr:{rules:[14,31,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},acc_title:{rules:[12,31,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},arg_directive:{rules:[7,8,31,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},type_directive:{rules:[6,7,31,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},open_directive:{rules:[5,31,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},callback_args:{rules:[27,28,31,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},callback_name:{rules:[24,25,26,31,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},href:{rules:[31,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},struct:{rules:[31,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},generic:{rules:[31,52,53,54,55,56,57,58,59,60,61,62,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},bqstring:{rules:[31,52,53,54,55,56,57,58,59,60,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},string:{rules:[29,30,31,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,9,10,11,13,15,18,19,20,21,22,23,31,32,41,52,53,54,55,56,57,58,59,60,63,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],inclusive:!0}}};function H(){this.yy={}}return X.lexer=W,H.prototype=X,X.Parser=H,new H}();parser.parser=parser;const parser$1=parser,MERMAID_DOM_ID_PREFIX="classId-";let relations=[],classes={},notes=[],classCounter=0,namespaces={},namespaceCounter=0,functions=[];const sanitizeText=e=>common.sanitizeText(e,getConfig()),parseDirective=function(e,t,s){mermaidAPI.parseDirective(this,e,t,s)},splitClassNameAndType=function(e){let t="",s=e;if(e.indexOf("~")>0){const n=e.split("~");s=sanitizeText(n[0]),t=sanitizeText(n[1])}return{className:s,type:t}},setClassLabel=function(e,t){t&&(t=sanitizeText(t));const{className:s}=splitClassNameAndType(e);classes[s].label=t},addClass=function(e){const t=splitClassNameAndType(e);void 0===classes[t.className]&&(classes[t.className]={id:t.className,type:t.type,label:t.className,cssClasses:[],methods:[],members:[],annotations:[],domId:"classId-"+t.className+"-"+classCounter},classCounter++)},lookUpDomId=function(e){if(e in classes)return classes[e].domId;throw new Error("Class not found: "+e)},clear=function(){relations=[],classes={},notes=[],functions=[],functions.push(setupToolTips),namespaces={},namespaceCounter=0,clear$1()},getClass=function(e){return classes[e]},getClasses=function(){return classes},getRelations=function(){return relations},getNotes=function(){return notes},addRelation=function(e){log.debug("Adding relation: "+JSON.stringify(e)),addClass(e.id1),addClass(e.id2),e.id1=splitClassNameAndType(e.id1).className,e.id2=splitClassNameAndType(e.id2).className,e.relationTitle1=common.sanitizeText(e.relationTitle1.trim(),getConfig()),e.relationTitle2=common.sanitizeText(e.relationTitle2.trim(),getConfig()),relations.push(e)},addAnnotation=function(e,t){const s=splitClassNameAndType(e).className;classes[s].annotations.push(t)},addMember=function(e,t){const s=splitClassNameAndType(e).className,n=classes[s];if("string"==typeof t){const e=t.trim();e.startsWith("<<")&&e.endsWith(">>")?n.annotations.push(sanitizeText(e.substring(2,e.length-2))):e.indexOf(")")>0?n.methods.push(sanitizeText(e)):e&&n.members.push(sanitizeText(e))}},addMembers=function(e,t){Array.isArray(t)&&(t.reverse(),t.forEach((t=>addMember(e,t))))},addNote=function(e,t){const s={id:`note${notes.length}`,class:t,text:e};notes.push(s)},cleanupLabel=function(e){return e.startsWith(":")&&(e=e.substring(1)),sanitizeText(e.trim())},setCssClass=function(e,t){e.split(",").forEach((function(e){let s=e;e[0].match(/\d/)&&(s="classId-"+s),void 0!==classes[s]&&classes[s].cssClasses.push(t)}))},setTooltip=function(e,t){e.split(",").forEach((function(e){void 0!==t&&(classes[e].tooltip=sanitizeText(t))}))},getTooltip=function(e,t){return t?namespaces[t].classes[e].tooltip:classes[e].tooltip},setLink=function(e,t,s){const n=getConfig();e.split(",").forEach((function(e){let i=e;e[0].match(/\d/)&&(i="classId-"+i),void 0!==classes[i]&&(classes[i].link=utils.formatUrl(t,n),"sandbox"===n.securityLevel?classes[i].linkTarget="_top":classes[i].linkTarget="string"==typeof s?sanitizeText(s):"_blank")})),setCssClass(e,"clickable")},setClickEvent=function(e,t,s){e.split(",").forEach((function(e){setClickFunc(e,t,s),classes[e].haveCallback=!0})),setCssClass(e,"clickable")},setClickFunc=function(e,t,s){if("loose"!==getConfig().securityLevel)return;if(void 0===t)return;const n=e;if(void 0!==classes[n]){const e=lookUpDomId(n);let i=[];if("string"==typeof s){i=s.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let e=0;e<i.length;e++){let t=i[e].trim();'"'===t.charAt(0)&&'"'===t.charAt(t.length-1)&&(t=t.substr(1,t.length-2)),i[e]=t}}0===i.length&&i.push(e),functions.push((function(){const s=document.querySelector(`[id="${e}"]`);null!==s&&s.addEventListener("click",(function(){utils.runFunc(t,...i)}),!1)}))}},bindFunctions=function(e){functions.forEach((function(t){t(e)}))},lineType={LINE:0,DOTTED_LINE:1},relationType={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3,LOLLIPOP:4},setupToolTips=function(e){let t=d3select(".mermaidTooltip");null===(t._groups||t)[0][0]&&(t=d3select("body").append("div").attr("class","mermaidTooltip").style("opacity",0)),d3select(e).select("svg").selectAll("g.node").on("mouseover",(function(){const e=d3select(this);if(null===e.attr("title"))return;const s=this.getBoundingClientRect();t.transition().duration(200).style("opacity",".9"),t.text(e.attr("title")).style("left",window.scrollX+s.left+(s.right-s.left)/2+"px").style("top",window.scrollY+s.top-14+document.body.scrollTop+"px"),t.html(t.html().replace(/&lt;br\/&gt;/g,"<br/>")),e.classed("hover",!0)})).on("mouseout",(function(){t.transition().duration(500).style("opacity",0),d3select(this).classed("hover",!1)}))};functions.push(setupToolTips);let direction="TB";const getDirection=()=>direction,setDirection=e=>{direction=e},addNamespace=function(e){void 0===namespaces[e]&&(namespaces[e]={id:e,classes:{},children:{},domId:"classId-"+e+"-"+namespaceCounter},namespaceCounter++)},getNamespace=function(e){return namespaces[e]},getNamespaces=function(){return namespaces},addClassesToNamespace=function(e,t){void 0!==namespaces[e]&&t.map((t=>{classes[t].parent=e,namespaces[e].classes[t]=classes[t]}))},db={parseDirective,setAccTitle,getAccTitle,getAccDescription,setAccDescription,getConfig:()=>getConfig().class,addClass,bindFunctions,clear,getClass,getClasses,getNotes,addAnnotation,addNote,getRelations,addRelation,getDirection,setDirection,addMember,addMembers,cleanupLabel,lineType,relationType,setClickEvent,setCssClass,setLink,getTooltip,setTooltip,lookUpDomId,setDiagramTitle,getDiagramTitle,setClassLabel,addNamespace,addClassesToNamespace,getNamespace,getNamespaces},getStyles=e=>`g.classGroup text {\n  fill: ${e.nodeBorder};\n  fill: ${e.classText};\n  stroke: none;\n  font-family: ${e.fontFamily};\n  font-size: 10px;\n\n  .title {\n    font-weight: bolder;\n  }\n\n}\n\n.nodeLabel, .edgeLabel {\n  color: ${e.classText};\n}\n.edgeLabel .label rect {\n  fill: ${e.mainBkg};\n}\n.label text {\n  fill: ${e.classText};\n}\n.edgeLabel .label span {\n  background: ${e.mainBkg};\n}\n\n.classTitle {\n  font-weight: bolder;\n}\n.node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n\n\n.divider {\n  stroke: ${e.nodeBorder};\n  stroke-width: 1;\n}\n\ng.clickable {\n  cursor: pointer;\n}\n\ng.classGroup rect {\n  fill: ${e.mainBkg};\n  stroke: ${e.nodeBorder};\n}\n\ng.classGroup line {\n  stroke: ${e.nodeBorder};\n  stroke-width: 1;\n}\n\n.classLabel .box {\n  stroke: none;\n  stroke-width: 0;\n  fill: ${e.mainBkg};\n  opacity: 0.5;\n}\n\n.classLabel .label {\n  fill: ${e.nodeBorder};\n  font-size: 10px;\n}\n\n.relation {\n  stroke: ${e.lineColor};\n  stroke-width: 1;\n  fill: none;\n}\n\n.dashed-line{\n  stroke-dasharray: 3;\n}\n\n.dotted-line{\n  stroke-dasharray: 1 2;\n}\n\n#compositionStart, .composition {\n  fill: ${e.lineColor} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#compositionEnd, .composition {\n  fill: ${e.lineColor} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#dependencyStart, .dependency {\n  fill: ${e.lineColor} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#dependencyStart, .dependency {\n  fill: ${e.lineColor} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#extensionStart, .extension {\n  fill: ${e.mainBkg} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#extensionEnd, .extension {\n  fill: ${e.mainBkg} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#aggregationStart, .aggregation {\n  fill: ${e.mainBkg} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#aggregationEnd, .aggregation {\n  fill: ${e.mainBkg} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#lollipopStart, .lollipop {\n  fill: ${e.mainBkg} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n#lollipopEnd, .lollipop {\n  fill: ${e.mainBkg} !important;\n  stroke: ${e.lineColor} !important;\n  stroke-width: 1;\n}\n\n.edgeTerminals {\n  font-size: 11px;\n}\n\n.classTitleText {\n  text-anchor: middle;\n  font-size: 18px;\n  fill: ${e.textColor};\n}\n`,styles=getStyles;export{db as d,parser$1 as p,styles as s};