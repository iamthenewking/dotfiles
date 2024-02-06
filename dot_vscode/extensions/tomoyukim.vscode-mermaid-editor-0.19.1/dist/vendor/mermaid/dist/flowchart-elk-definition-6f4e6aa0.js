import{d as db,p as parser}from"./flowDb-8f9fc471.js";import{select,curveLinear,line}from"d3";import{a as insertMarkers,e as insertNode,l as labelHelper,f as insertEdgeLabel}from"./edges-b00f0ec2.js";import"dagre-d3-es/src/dagre-js/label/add-html-label.js";import{l as log,c as getConfig,p as setupGraphViewbox,k as getStylesFromArray,o as interpolateToCurve,e as common}from"./mermaid-a98f434b.js";import ELK from"elkjs/lib/elk.bundled.js";import"./createText-285e50b4.js";import"mdast-util-from-markdown";import"ts-dedent";import"./svgDraw-5d8a058e.js";import"dayjs";import"@braintree/sanitize-url";import"dompurify";import"khroma";import"lodash-es/memoize.js";import"stylis";import"lodash-es/isEmpty.js";const findCommonAncestor=(e,t,r)=>{const{parentById:o}=r,a=new Set;let n=e;for(;n;){if(a.add(n),n===t)return n;n=o[n]}for(n=t;n;){if(a.has(n))return n;n=o[n]}return"root"},elk=new ELK;let portPos={};const conf={};let nodeDb={};const addVertices=async function(e,t,r,o,a,n,s){const l=r.select(`[id="${t}"]`).insert("g").attr("class","nodes"),i=Object.keys(e);return await Promise.all(i.map((async function(t){const r=e[t];let s="default";r.classes.length>0&&(s=r.classes.join(" ")),s+=" flowchart-label";const i=getStylesFromArray(r.styles);let d=void 0!==r.text?r.text:r.id;const c={width:0,height:0},p=[{id:r.id+"-west",layoutOptions:{"port.side":"WEST"}},{id:r.id+"-east",layoutOptions:{"port.side":"EAST"}},{id:r.id+"-south",layoutOptions:{"port.side":"SOUTH"}},{id:r.id+"-north",layoutOptions:{"port.side":"NORTH"}}];let h=0,g="",b={};switch(r.type){case"round":h=5,g="rect";break;case"square":case"group":default:g="rect";break;case"diamond":g="question",b={portConstraints:"FIXED_SIDE"};break;case"hexagon":g="hexagon";break;case"odd":case"odd_right":g="rect_left_inv_arrow";break;case"lean_right":g="lean_right";break;case"lean_left":g="lean_left";break;case"trapezoid":g="trapezoid";break;case"inv_trapezoid":g="inv_trapezoid";break;case"circle":g="circle";break;case"ellipse":g="ellipse";break;case"stadium":g="stadium";break;case"subroutine":g="subroutine";break;case"cylinder":g="cylinder";break;case"doublecircle":g="doublecircle"}const u={labelStyle:i.labelStyle,shape:g,labelText:d,labelType:r.labelType,rx:h,ry:h,class:s,style:i.style,id:r.id,link:r.link,linkTarget:r.linkTarget,tooltip:a.db.getTooltip(r.id)||"",domId:a.db.lookUpDomId(r.id),haveCallback:r.haveCallback,width:"group"===r.type?500:void 0,dir:r.dir,type:r.type,props:r.props,padding:getConfig().flowchart.padding};let y,f;if("group"!==u.type)f=await insertNode(l,u,r.dir),y=f.node().getBBox();else{o.createElementNS("http://www.w3.org/2000/svg","text");const{shapeSvg:e,bbox:t}=await labelHelper(l,u,void 0,!0);c.width=t.width,c.wrappingWidth=getConfig().flowchart.wrappingWidth,c.height=t.height,c.labelNode=e.node(),u.labelData=c}const w={id:r.id,ports:"diamond"===r.type?p:[],layoutOptions:b,labelText:d,labelData:c,domId:a.db.lookUpDomId(r.id),width:null==y?void 0:y.width,height:null==y?void 0:y.height,type:r.type,el:f,parent:n.parentById[r.id]};nodeDb[u.id]=w}))),s},getNextPosition=(e,t,r)=>{const o={TB:{in:{north:"north"},out:{south:"west",west:"east",east:"south"}},LR:{in:{west:"west"},out:{east:"south",south:"north",north:"east"}},RL:{in:{east:"east"},out:{west:"north",north:"south",south:"west"}},BT:{in:{south:"south"},out:{north:"east",east:"west",west:"north"}}};return o.TD=o.TB,log.info("abc88",r,t,e),o[r][t][e]},getNextPort=(e,t,r)=>{if(log.info("getNextPort abc88",{node:e,edgeDirection:t,graphDirection:r}),!portPos[e])switch(r){case"TB":case"TD":portPos[e]={inPosition:"north",outPosition:"south"};break;case"BT":portPos[e]={inPosition:"south",outPosition:"north"};break;case"RL":portPos[e]={inPosition:"east",outPosition:"west"};break;case"LR":portPos[e]={inPosition:"west",outPosition:"east"}}const o="in"===t?portPos[e].inPosition:portPos[e].outPosition;return"in"===t?portPos[e].inPosition=getNextPosition(portPos[e].inPosition,t,r):portPos[e].outPosition=getNextPosition(portPos[e].outPosition,t,r),o},getEdgeStartEndPoint=(e,t)=>{let r=e.start,o=e.end;const a=r,n=o,s=nodeDb[r],l=nodeDb[o];return s&&l?("diamond"===s.type&&(r=`${r}-${getNextPort(r,"out",t)}`),"diamond"===l.type&&(o=`${o}-${getNextPort(o,"in",t)}`),{source:r,target:o,sourceId:a,targetId:n}):{source:r,target:o}},addEdges=function(e,t,r,o){log.info("abc78 edges = ",e);const a=o.insert("g").attr("class","edgeLabels");let n,s,l={},i=t.db.getDirection();if(void 0!==e.defaultStyle){const t=getStylesFromArray(e.defaultStyle);n=t.style,s=t.labelStyle}return e.forEach((function(t){const o="L-"+t.start+"-"+t.end;void 0===l[o]?(l[o]=0,log.info("abc78 new entry",o,l[o])):(l[o]++,log.info("abc78 new entry",o,l[o]));let d=o+"-"+l[o];log.info("abc78 new link id to be used is",o,d,l[o]);const c="LS-"+t.start,p="LE-"+t.end,h={style:"",labelStyle:""};switch(h.minlen=t.length||1,"arrow_open"===t.type?h.arrowhead="none":h.arrowhead="normal",h.arrowTypeStart="arrow_open",h.arrowTypeEnd="arrow_open",t.type){case"double_arrow_cross":h.arrowTypeStart="arrow_cross";case"arrow_cross":h.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":h.arrowTypeStart="arrow_point";case"arrow_point":h.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":h.arrowTypeStart="arrow_circle";case"arrow_circle":h.arrowTypeEnd="arrow_circle"}let g="",b="";switch(t.stroke){case"normal":g="fill:none;",void 0!==n&&(g=n),void 0!==s&&(b=s),h.thickness="normal",h.pattern="solid";break;case"dotted":h.thickness="normal",h.pattern="dotted",h.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":h.thickness="thick",h.pattern="solid",h.style="stroke-width: 3.5px;fill:none;"}if(void 0!==t.style){const e=getStylesFromArray(t.style);g=e.style,b=e.labelStyle}h.style=h.style+=g,h.labelStyle=h.labelStyle+=b,void 0!==t.interpolate?h.curve=interpolateToCurve(t.interpolate,curveLinear):void 0!==e.defaultInterpolate?h.curve=interpolateToCurve(e.defaultInterpolate,curveLinear):h.curve=interpolateToCurve(conf.curve,curveLinear),void 0===t.text?void 0!==t.style&&(h.arrowheadStyle="fill: #333"):(h.arrowheadStyle="fill: #333",h.labelpos="c"),h.labelType=t.labelType,h.label=t.text.replace(common.lineBreakRegex,"\n"),void 0===t.style&&(h.style=h.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),h.labelStyle=h.labelStyle.replace("color:","fill:"),h.id=d,h.classes="flowchart-link "+c+" "+p;const u=insertEdgeLabel(a,h),{source:y,target:f,sourceId:w,targetId:k}=getEdgeStartEndPoint(t,i);log.debug("abc78 source and target",y,f),r.edges.push({id:"e"+t.start+t.end,sources:[y],targets:[f],sourceId:w,targetId:k,labelEl:u,labels:[{width:h.width,height:h.height,orgWidth:h.width,orgHeight:h.height,text:h.label,layoutOptions:{"edgeLabels.inline":"true","edgeLabels.placement":"CENTER"}}],edgeData:h})})),r},addMarkersToEdge=function(e,t,r,o){let a="";switch(o&&(a=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,a=a.replace(/\(/g,"\\("),a=a.replace(/\)/g,"\\)")),t.arrowTypeStart){case"arrow_cross":e.attr("marker-start","url("+a+"#"+r+"-crossStart)");break;case"arrow_point":e.attr("marker-start","url("+a+"#"+r+"-pointStart)");break;case"arrow_barb":e.attr("marker-start","url("+a+"#"+r+"-barbStart)");break;case"arrow_circle":e.attr("marker-start","url("+a+"#"+r+"-circleStart)");break;case"aggregation":e.attr("marker-start","url("+a+"#"+r+"-aggregationStart)");break;case"extension":e.attr("marker-start","url("+a+"#"+r+"-extensionStart)");break;case"composition":e.attr("marker-start","url("+a+"#"+r+"-compositionStart)");break;case"dependency":e.attr("marker-start","url("+a+"#"+r+"-dependencyStart)");break;case"lollipop":e.attr("marker-start","url("+a+"#"+r+"-lollipopStart)")}switch(t.arrowTypeEnd){case"arrow_cross":e.attr("marker-end","url("+a+"#"+r+"-crossEnd)");break;case"arrow_point":e.attr("marker-end","url("+a+"#"+r+"-pointEnd)");break;case"arrow_barb":e.attr("marker-end","url("+a+"#"+r+"-barbEnd)");break;case"arrow_circle":e.attr("marker-end","url("+a+"#"+r+"-circleEnd)");break;case"aggregation":e.attr("marker-end","url("+a+"#"+r+"-aggregationEnd)");break;case"extension":e.attr("marker-end","url("+a+"#"+r+"-extensionEnd)");break;case"composition":e.attr("marker-end","url("+a+"#"+r+"-compositionEnd)");break;case"dependency":e.attr("marker-end","url("+a+"#"+r+"-dependencyEnd)");break;case"lollipop":e.attr("marker-end","url("+a+"#"+r+"-lollipopEnd)")}},getClasses=function(e,t){log.info("Extracting classes"),t.db.clear("ver-2");try{return t.parse(e),t.db.getClasses()}catch(e){return{}}},addSubGraphs=function(e){const t={parentById:{},childrenById:{}},r=e.getSubGraphs();return log.info("Subgraphs - ",r),r.forEach((function(e){e.nodes.forEach((function(r){t.parentById[r]=e.id,void 0===t.childrenById[e.id]&&(t.childrenById[e.id]=[]),t.childrenById[e.id].push(r)}))})),r.forEach((function(e){e.id,void 0!==t.parentById[e.id]&&t.parentById[e.id]})),t},calcOffset=function(e,t,r){const o=findCommonAncestor(e,t,r);if(void 0===o||"root"===o)return{x:0,y:0};const a=nodeDb[o].offset;return{x:a.posX,y:a.posY}},insertEdge=function(e,t,r,o,a){const n=calcOffset(t.sourceId,t.targetId,a),s=t.sections[0].startPoint,l=t.sections[0].endPoint,i=(t.sections[0].bendPoints?t.sections[0].bendPoints:[]).map((e=>[e.x+n.x,e.y+n.y])),d=[[s.x+n.x,s.y+n.y],...i,[l.x+n.x,l.y+n.y]],c=line().curve(curveLinear),p=e.insert("path").attr("d",c(d)).attr("class","path "+r.classes).attr("fill","none"),h=e.insert("g").attr("class","edgeLabel"),g=select(h.node().appendChild(t.labelEl)),b=g.node().firstChild.getBoundingClientRect();g.attr("width",b.width),g.attr("height",b.height),h.attr("transform",`translate(${t.labels[0].x+n.x}, ${t.labels[0].y+n.y})`),addMarkersToEdge(p,r,o.type,o.arrowMarkerAbsolute)},insertChildren=(e,t)=>{e.forEach((e=>{e.children||(e.children=[]);const r=t.childrenById[e.id];r&&r.forEach((t=>{e.children.push(nodeDb[t])})),insertChildren(e.children,t)}))},draw=async function(e,t,r,o){var a;o.db.clear(),nodeDb={},portPos={},o.db.setGen("gen-2"),o.parser.parse(e);const n=select("body").append("div").attr("style","height:400px").attr("id","cy");let s={id:"root",layoutOptions:{"elk.hierarchyHandling":"INCLUDE_CHILDREN","org.eclipse.elk.padding":"[top=100, left=100, bottom=110, right=110]","elk.layered.spacing.edgeNodeBetweenLayers":"30","elk.direction":"DOWN"},children:[],edges:[]};switch(log.info("Drawing flowchart using v3 renderer",elk),o.db.getDirection()){case"BT":s.layoutOptions["elk.direction"]="UP";break;case"TB":s.layoutOptions["elk.direction"]="DOWN";break;case"LR":s.layoutOptions["elk.direction"]="RIGHT";break;case"RL":s.layoutOptions["elk.direction"]="LEFT"}const{securityLevel:l,flowchart:i}=getConfig();let d;"sandbox"===l&&(d=select("#i"+t));const c=select("sandbox"===l?d.nodes()[0].contentDocument.body:"body"),p="sandbox"===l?d.nodes()[0].contentDocument:document,h=c.select(`[id="${t}"]`);insertMarkers(h,["point","circle","cross"],o.type,o.arrowMarkerAbsolute);const g=o.db.getVertices();let b;const u=o.db.getSubGraphs();log.info("Subgraphs - ",u);for(let e=u.length-1;e>=0;e--)b=u[e],o.db.addVertex(b.id,{text:b.title,type:b.labelType},"group",void 0,b.classes,b.dir);const y=h.insert("g").attr("class","subgraphs"),f=addSubGraphs(o.db);s=await addVertices(g,t,c,p,o,f,s);const w=h.insert("g").attr("class","edges edgePath"),k=o.db.getEdges();s=addEdges(k,o,s,h),Object.keys(nodeDb).forEach((e=>{const t=nodeDb[e];t.parent||s.children.push(t),void 0!==f.childrenById[e]&&(t.labels=[{text:t.labelText,layoutOptions:{"nodeLabels.placement":"[H_CENTER, V_TOP, INSIDE]"},width:t.labelData.width,height:t.labelData.height}],delete t.x,delete t.y,delete t.width,delete t.height)})),insertChildren(s.children,f),log.info("after layout",JSON.stringify(s,null,2));const m=await elk.layout(s);drawNodes(0,0,m.children,h,y,o,0),log.info("after layout",m),null==(a=m.edges)||a.map((e=>{insertEdge(w,e,e.edgeData,o,f)})),setupGraphViewbox({},h,i.diagramPadding,i.useMaxWidth),n.remove()},drawNodes=(e,t,r,o,a,n,s)=>{r.forEach((function(r){if(r)if(nodeDb[r.id].offset={posX:r.x+e,posY:r.y+t,x:e,y:t,depth:s,width:r.width,height:r.height},"group"===r.type){const o=a.insert("g").attr("class","subgraph");o.insert("rect").attr("class","subgraph subgraph-lvl-"+s%5+" node").attr("x",r.x+e).attr("y",r.y+t).attr("width",r.width).attr("height",r.height);const n=o.insert("g").attr("class","label"),l=getConfig().flowchart.htmlLabels?r.labelData.width/2:0;n.attr("transform",`translate(${r.labels[0].x+e+r.x+l}, ${r.labels[0].y+t+r.y+3})`),n.node().appendChild(r.labelData.labelNode),log.info("Id (UGH)= ",r.type,r.labels)}else log.info("Id (UGH)= ",r.id),r.el.attr("transform",`translate(${r.x+e+r.width/2}, ${r.y+t+r.height/2})`)})),r.forEach((function(r){r&&"group"===r.type&&drawNodes(e+r.x,t+r.y,r.children,o,a,n,s+1)}))},renderer={getClasses,draw},genSections=e=>{let t="";for(let r=0;r<5;r++)t+=`\n      .subgraph-lvl-${r} {\n        fill: ${e[`surface${r}`]};\n        stroke: ${e[`surfacePeer${r}`]};\n      }\n    `;return t},getStyles=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span {\n    color: ${e.titleColor};\n  }\n\n  .label text,span {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.85;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n  .subgraph {\n    stroke-width:2;\n    rx:3;\n  }\n  // .subgraph-lvl-1 {\n  //   fill:#ccc;\n  //   // stroke:black;\n  // }\n\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n\n  ${genSections(e)}\n`,styles=getStyles,diagram={db,renderer,parser,styles};export{diagram};