import{d as db,p as parser,s as styles}from"./styles-f19653ad.js";import{c as getConfig,F as curveBasis,z as utils,f as common,l as log,j as d3select,k as configureSvgSize}from"./mermaid-766fee4c.js";import{G as Graph,l as layout}from"./layout-cc6d5710.js";import{l as line}from"./line-cdadca5f.js";import"./array-b7dcf730.js";import"./constant-b644328d.js";const idCache={},set=(t,e)=>{idCache[t]=e},get=t=>idCache[t],keys=()=>Object.keys(idCache),size=()=>keys().length,idCache$1={get,set,keys,size},drawStartState=t=>t.append("circle").attr("class","start-state").attr("r",getConfig().state.sizeUnit).attr("cx",getConfig().state.padding+getConfig().state.sizeUnit).attr("cy",getConfig().state.padding+getConfig().state.sizeUnit),drawDivider=t=>t.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",getConfig().state.textHeight).attr("class","divider").attr("x2",2*getConfig().state.textHeight).attr("y1",0).attr("y2",0),drawSimpleState=(t,e)=>{const a=t.append("text").attr("x",2*getConfig().state.padding).attr("y",getConfig().state.textHeight+2*getConfig().state.padding).attr("font-size",getConfig().state.fontSize).attr("class","state-title").text(e.id),i=a.node().getBBox();return t.insert("rect",":first-child").attr("x",getConfig().state.padding).attr("y",getConfig().state.padding).attr("width",i.width+2*getConfig().state.padding).attr("height",i.height+2*getConfig().state.padding).attr("rx",getConfig().state.radius),a},drawDescrState=(t,e)=>{const a=t.append("text").attr("x",2*getConfig().state.padding).attr("y",getConfig().state.textHeight+1.3*getConfig().state.padding).attr("font-size",getConfig().state.fontSize).attr("class","state-title").text(e.descriptions[0]).node().getBBox(),i=a.height,n=t.append("text").attr("x",getConfig().state.padding).attr("y",i+.4*getConfig().state.padding+getConfig().state.dividerMargin+getConfig().state.textHeight).attr("class","state-description");let o=!0,r=!0;e.descriptions.forEach((function(t){o||(function(t,e,a){const i=t.append("tspan").attr("x",2*getConfig().state.padding).text(e);a||i.attr("dy",getConfig().state.textHeight)}(n,t,r),r=!1),o=!1}));const d=t.append("line").attr("x1",getConfig().state.padding).attr("y1",getConfig().state.padding+i+getConfig().state.dividerMargin/2).attr("y2",getConfig().state.padding+i+getConfig().state.dividerMargin/2).attr("class","descr-divider"),g=n.node().getBBox(),s=Math.max(g.width,a.width);return d.attr("x2",s+3*getConfig().state.padding),t.insert("rect",":first-child").attr("x",getConfig().state.padding).attr("y",getConfig().state.padding).attr("width",s+2*getConfig().state.padding).attr("height",g.height+i+2*getConfig().state.padding).attr("rx",getConfig().state.radius),t},addTitleAndBox=(t,e,a)=>{const i=getConfig().state.padding,n=2*getConfig().state.padding,o=t.node().getBBox(),r=o.width,d=o.x,g=t.append("text").attr("x",0).attr("y",getConfig().state.titleShift).attr("font-size",getConfig().state.fontSize).attr("class","state-title").text(e.id),s=g.node().getBBox().width+n;let c,f=Math.max(s,r);f===r&&(f+=n);const l=t.node().getBBox();e.doc,c=d-i,s>r&&(c=(r-f)/2+i),Math.abs(d-l.x)<i&&s>r&&(c=d-(s-r)/2);const p=1-getConfig().state.textHeight;return t.insert("rect",":first-child").attr("x",c).attr("y",p).attr("class",a?"alt-composit":"composit").attr("width",f).attr("height",l.height+getConfig().state.textHeight+getConfig().state.titleShift+1).attr("rx","0"),g.attr("x",c+i),s<=r&&g.attr("x",d+(f-n)/2-s/2+i),t.insert("rect",":first-child").attr("x",c).attr("y",getConfig().state.titleShift-getConfig().state.textHeight-getConfig().state.padding).attr("width",f).attr("height",3*getConfig().state.textHeight).attr("rx",getConfig().state.radius),t.insert("rect",":first-child").attr("x",c).attr("y",getConfig().state.titleShift-getConfig().state.textHeight-getConfig().state.padding).attr("width",f).attr("height",l.height+3+2*getConfig().state.textHeight).attr("rx",getConfig().state.radius),t},drawEndState=t=>(t.append("circle").attr("class","end-state-outer").attr("r",getConfig().state.sizeUnit+getConfig().state.miniPadding).attr("cx",getConfig().state.padding+getConfig().state.sizeUnit+getConfig().state.miniPadding).attr("cy",getConfig().state.padding+getConfig().state.sizeUnit+getConfig().state.miniPadding),t.append("circle").attr("class","end-state-inner").attr("r",getConfig().state.sizeUnit).attr("cx",getConfig().state.padding+getConfig().state.sizeUnit+2).attr("cy",getConfig().state.padding+getConfig().state.sizeUnit+2)),drawForkJoinState=(t,e)=>{let a=getConfig().state.forkWidth,i=getConfig().state.forkHeight;if(e.parentId){let t=a;a=i,i=t}return t.append("rect").style("stroke","black").style("fill","black").attr("width",a).attr("height",i).attr("x",getConfig().state.padding).attr("y",getConfig().state.padding)},_drawLongText=(t,e,a,i)=>{let n=0;const o=i.append("text");o.style("text-anchor","start"),o.attr("class","noteText");let r=t.replace(/\r\n/g,"<br/>");r=r.replace(/\n/g,"<br/>");const d=r.split(common.lineBreakRegex);let g=1.25*getConfig().state.noteMargin;for(const t of d){const i=t.trim();if(i.length>0){const t=o.append("tspan");t.text(i),0===g&&(g+=t.node().getBBox().height),n+=g,t.attr("x",e+getConfig().state.noteMargin),t.attr("y",a+n+1.25*getConfig().state.noteMargin)}}return{textWidth:o.node().getBBox().width,textHeight:n}},drawNote=(t,e)=>{e.attr("class","state-note");const a=e.append("rect").attr("x",0).attr("y",getConfig().state.padding),i=e.append("g"),{textWidth:n,textHeight:o}=_drawLongText(t,0,0,i);return a.attr("height",o+2*getConfig().state.noteMargin),a.attr("width",n+2*getConfig().state.noteMargin),a},drawState=function(t,e){const a=e.id,i={id:a,label:e.id,width:0,height:0},n=t.append("g").attr("id",a).attr("class","stateGroup");"start"===e.type&&drawStartState(n),"end"===e.type&&drawEndState(n),"fork"!==e.type&&"join"!==e.type||drawForkJoinState(n,e),"note"===e.type&&drawNote(e.note.text,n),"divider"===e.type&&drawDivider(n),"default"===e.type&&0===e.descriptions.length&&drawSimpleState(n,e),"default"===e.type&&e.descriptions.length>0&&drawDescrState(n,e);const o=n.node().getBBox();return i.width=o.width+2*getConfig().state.padding,i.height=o.height+2*getConfig().state.padding,idCache$1.set(a,i),i};let edgeCount=0;const drawEdge=function(t,e,a){e.points=e.points.filter((t=>!Number.isNaN(t.y)));const i=e.points,n=line().x((function(t){return t.x})).y((function(t){return t.y})).curve(curveBasis),o=t.append("path").attr("d",n(i)).attr("id","edge"+edgeCount).attr("class","transition");let r="";if(getConfig().state.arrowMarkerAbsolute&&(r=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,r=r.replace(/\(/g,"\\("),r=r.replace(/\)/g,"\\)")),o.attr("marker-end","url("+r+"#"+function(t){switch(db.relationType.DEPENDENCY){case db.relationType.AGGREGATION:return"aggregation";case db.relationType.EXTENSION:return"extension";case db.relationType.COMPOSITION:return"composition";case db.relationType.DEPENDENCY:return"dependency"}}()+"End)"),void 0!==a.title){const i=t.append("g").attr("class","stateLabel"),{x:n,y:o}=utils.calcLabelPosition(e.points),r=common.getRows(a.title);let d=0;const g=[];let s=0,c=0;for(let t=0;t<=r.length;t++){const e=i.append("text").attr("text-anchor","middle").text(r[t]).attr("x",n).attr("y",o+d),a=e.node().getBBox();if(s=Math.max(s,a.width),c=Math.min(c,a.x),log.info(a.x,n,o+d),0===d){const t=e.node().getBBox();d=t.height,log.info("Title height",d,o)}g.push(e)}let f=d*r.length;if(r.length>1){const t=(r.length-1)*d*.5;g.forEach(((e,a)=>e.attr("y",o+a*d-t))),f=d*r.length}const l=i.node().getBBox();i.insert("rect",":first-child").attr("class","box").attr("x",n-s/2-getConfig().state.padding/2).attr("y",o-f/2-getConfig().state.padding/2-3.5).attr("width",s+getConfig().state.padding).attr("height",f+getConfig().state.padding),log.info(l)}edgeCount++};let conf;const transformationLog={},setConf=function(){},insertMarkers=function(t){t.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},draw=function(t,e,a,i){conf=getConfig().state;const n=getConfig().securityLevel;let o;"sandbox"===n&&(o=d3select("#i"+e));const r=d3select("sandbox"===n?o.nodes()[0].contentDocument.body:"body"),d="sandbox"===n?o.nodes()[0].contentDocument:document;log.debug("Rendering diagram "+t);const g=r.select(`[id='${e}']`);g.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z");const s=i.db.getRootDoc();renderDoc(s,g,void 0,!1,r,d,i);const c=conf.padding,f=g.node().getBBox(),l=f.width+2*c,p=f.height+2*c;configureSvgSize(g,p,1.75*l,conf.useMaxWidth),g.attr("viewBox",`${f.x-conf.padding}  ${f.y-conf.padding} `+l+" "+p)},getLabelWidth=t=>t?t.length*conf.fontSizeFactor:1,renderDoc=(t,e,a,i,n,o,r)=>{const d=new Graph({compound:!0,multigraph:!0});let g,s=!0;for(g=0;g<t.length;g++)if("relation"===t[g].stmt){s=!1;break}a?d.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:s?1:conf.edgeLengthFactor,nodeSep:s?1:50,isMultiGraph:!0}):d.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:s?1:conf.edgeLengthFactor,nodeSep:s?1:50,ranker:"tight-tree",isMultiGraph:!0}),d.setDefaultEdgeLabel((function(){return{}})),r.db.extract(t);const c=r.db.getStates(),f=r.db.getRelations(),l=Object.keys(c);for(const t of l){const g=c[t];let s;if(a&&(g.parentId=a),g.doc){let t=e.append("g").attr("id",g.id).attr("class","stateGroup");s=renderDoc(g.doc,t,g.id,!i,n,o,r);{t=addTitleAndBox(t,g,i);let e=t.node().getBBox();s.width=e.width,s.height=e.height+conf.padding/2,transformationLog[g.id]={y:conf.compositTitleSize}}}else s=drawState(e,g);if(g.note){const t={descriptions:[],id:g.id+"-note",note:g.note,type:"note"},a=drawState(e,t);"left of"===g.note.position?(d.setNode(s.id+"-note",a),d.setNode(s.id,s)):(d.setNode(s.id,s),d.setNode(s.id+"-note",a)),d.setParent(s.id,s.id+"-group"),d.setParent(s.id+"-note",s.id+"-group")}else d.setNode(s.id,s)}log.debug("Count=",d.nodeCount(),d);let p=0;f.forEach((function(t){var e;p++,log.debug("Setting edge",t),d.setEdge(t.id1,t.id2,{relation:t,width:(e=t.title,e?e.length*conf.fontSizeFactor:1),height:conf.labelHeight*common.getRows(t.title).length,labelpos:"c"},"id"+p)})),layout(d),log.debug("Graph after layout",d.nodes());const h=e.node();d.nodes().forEach((function(t){void 0!==t&&void 0!==d.node(t)?(log.warn("Node "+t+": "+JSON.stringify(d.node(t))),n.select("#"+h.id+" #"+t).attr("transform","translate("+(d.node(t).x-d.node(t).width/2)+","+(d.node(t).y+(transformationLog[t]?transformationLog[t].y:0)-d.node(t).height/2)+" )"),n.select("#"+h.id+" #"+t).attr("data-x-shift",d.node(t).x-d.node(t).width/2),o.querySelectorAll("#"+h.id+" #"+t+" .divider").forEach((t=>{const e=t.parentElement;let a=0,i=0;e&&(e.parentElement&&(a=e.parentElement.getBBox().width),i=parseInt(e.getAttribute("data-x-shift"),10),Number.isNaN(i)&&(i=0)),t.setAttribute("x1",0-i+8),t.setAttribute("x2",a-i-8)}))):log.debug("No Node "+t+": "+JSON.stringify(d.node(t)))}));let x=h.getBBox();d.edges().forEach((function(t){void 0!==t&&void 0!==d.edge(t)&&(log.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(d.edge(t))),drawEdge(e,d.edge(t),d.edge(t).relation))})),x=h.getBBox();const C={id:a||"root",label:a||"root",width:0,height:0};return C.width=x.width+2*conf.padding,C.height=x.height+2*conf.padding,log.debug("Doc rendered",C,d),C},renderer={setConf,draw},diagram={parser,db,renderer,styles,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,db.clear()}};export{diagram};