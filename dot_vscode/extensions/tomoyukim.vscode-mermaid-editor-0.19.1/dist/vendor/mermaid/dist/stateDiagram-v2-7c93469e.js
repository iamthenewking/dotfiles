import{D as DEFAULT_STATE_TYPE,a as DIVIDER_TYPE,S as STMT_RELATION,b as STMT_STATE,c as DEFAULT_NESTED_DOC_DIR,p as parser,d as db,s as styles}from"./styles-f626f8de.js";import*as graphlib from"dagre-d3-es/src/graphlib/index.js";import{select}from"d3";import{l as log,c as getConfig,u as utils,i as configureSvgSize,e as common}from"./mermaid-a98f434b.js";import{r as render}from"./index-4c4adb72.js";import"ts-dedent";import"dayjs";import"@braintree/sanitize-url";import"dompurify";import"khroma";import"lodash-es/memoize.js";import"stylis";import"lodash-es/isEmpty.js";import"dagre-d3-es/src/dagre/index.js";import"dagre-d3-es/src/graphlib/json.js";import"./edges-b00f0ec2.js";import"./createText-285e50b4.js";import"mdast-util-from-markdown";import"./svgDraw-5d8a058e.js";const SHAPE_STATE="rect",SHAPE_STATE_WITH_DESC="rectWithTitle",SHAPE_START="start",SHAPE_END="end",SHAPE_DIVIDER="divider",SHAPE_GROUP="roundedWithTitle",SHAPE_NOTE="note",SHAPE_NOTEGROUP="noteGroup",CSS_DIAGRAM="statediagram",CSS_STATE="state",CSS_DIAGRAM_STATE=`${CSS_DIAGRAM}-state`,CSS_EDGE="transition",CSS_NOTE="note",CSS_NOTE_EDGE="note-edge",CSS_EDGE_NOTE_EDGE=`${CSS_EDGE} note-edge`,CSS_DIAGRAM_NOTE=`${CSS_DIAGRAM}-note`,CSS_CLUSTER="cluster",CSS_DIAGRAM_CLUSTER=`${CSS_DIAGRAM}-cluster`,CSS_CLUSTER_ALT="cluster-alt",CSS_DIAGRAM_CLUSTER_ALT=`${CSS_DIAGRAM}-cluster-alt`,PARENT="parent",NOTE="note",DOMID_STATE="state",DOMID_TYPE_SPACER="----",NOTE_ID=`----${NOTE}`,PARENT_ID=`----${PARENT}`,G_EDGE_STYLE="fill:none",G_EDGE_ARROWHEADSTYLE="fill: #333",G_EDGE_LABELPOS="c",G_EDGE_LABELTYPE="text",G_EDGE_THICKNESS="normal";let nodeDb={},graphItemCount=0;const setConf=function(e){const t=Object.keys(e);for(const s of t)e[s]},getClasses=function(e,t){log.trace("Extracting classes"),t.db.clear();try{return t.parser.parse(e),t.db.extract(t.db.getRootDocV2()),t.db.getClasses()}catch(e){return e}};function getClassesFromDbInfo(e){return null==e?"":e.classes?e.classes.join(" "):""}function stateDomId(e="",t=0,s="",o="----"){return`state-${e}${null!==s&&s.length>0?`${o}${s}`:""}-${t}`}const setupNode=(e,t,s,o,r,a)=>{const i=s.id,n=getClassesFromDbInfo(o[i]);if("root"!==i){let t="rect";!0===s.start&&(t="start"),!1===s.start&&(t="end"),s.type!==DEFAULT_STATE_TYPE&&(t=s.type),nodeDb[i]||(nodeDb[i]={id:i,shape:t,description:common.sanitizeText(i,getConfig()),classes:`${n} ${CSS_DIAGRAM_STATE}`});const o=nodeDb[i];s.description&&(Array.isArray(o.description)?(o.shape="rectWithTitle",o.description.push(s.description)):o.description.length>0?(o.shape="rectWithTitle",o.description===i?o.description=[s.description]:o.description=[o.description,s.description]):(o.shape="rect",o.description=s.description),o.description=common.sanitizeTextOrArray(o.description,getConfig())),1===o.description.length&&"rectWithTitle"===o.shape&&(o.shape="rect"),!o.type&&s.doc&&(log.info("Setting cluster for ",i,getDir(s)),o.type="group",o.dir=getDir(s),o.shape=s.type===DIVIDER_TYPE?"divider":SHAPE_GROUP,o.classes=o.classes+" "+CSS_DIAGRAM_CLUSTER+" "+(a?CSS_DIAGRAM_CLUSTER_ALT:""));const r={labelStyle:"",shape:o.shape,labelText:o.description,classes:o.classes,style:"",id:i,dir:o.dir,domId:stateDomId(i,graphItemCount),type:o.type,padding:15,centerLabel:!0};if(s.note){const t={labelStyle:"",shape:"note",labelText:s.note.text,classes:CSS_DIAGRAM_NOTE,style:"",id:i+NOTE_ID+"-"+graphItemCount,domId:stateDomId(i,graphItemCount,NOTE),type:o.type,padding:15},a={labelStyle:"",shape:"noteGroup",labelText:s.note.text,classes:o.classes,style:"",id:i+PARENT_ID,domId:stateDomId(i,graphItemCount,PARENT),type:"group",padding:0};graphItemCount++;const n=i+PARENT_ID;e.setNode(n,a),e.setNode(t.id,t),e.setNode(i,r),e.setParent(i,n),e.setParent(t.id,n);let d=i,l=t.id;"left of"===s.note.position&&(d=t.id,l=i),e.setEdge(d,l,{arrowhead:"none",arrowType:"",style:"fill:none",labelStyle:"",classes:CSS_EDGE_NOTE_EDGE,arrowheadStyle:"fill: #333",labelpos:"c",labelType:"text",thickness:"normal"})}else e.setNode(i,r)}t&&"root"!==t.id&&(log.trace("Setting node ",i," to be child of its parent ",t.id),e.setParent(i,t.id)),s.doc&&(log.trace("Adding nodes children "),setupDoc(e,s,s.doc,o,r,!a))},setupDoc=(e,t,s,o,r,a)=>{log.trace("items",s),s.forEach((s=>{switch(s.stmt){case STMT_STATE:case DEFAULT_STATE_TYPE:setupNode(e,t,s,o,r,a);break;case STMT_RELATION:{setupNode(e,t,s.state1,o,r,a),setupNode(e,t,s.state2,o,r,a);const i={id:"edge"+graphItemCount,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:"fill:none",labelStyle:"",label:common.sanitizeText(s.description,getConfig()),arrowheadStyle:"fill: #333",labelpos:"c",labelType:"text",thickness:"normal",classes:CSS_EDGE};e.setEdge(s.state1.id,s.state2.id,i,graphItemCount),graphItemCount++}}}))},getDir=(e,t=DEFAULT_NESTED_DOC_DIR)=>{let s=t;if(e.doc)for(let t=0;t<e.doc.length;t++){const o=e.doc[t];"dir"===o.stmt&&(s=o.value)}return s},draw=async function(e,t,s,o){log.info("Drawing state diagram (v2)",t),nodeDb={},o.db.getDirection();const{securityLevel:r,state:a}=getConfig(),i=a.nodeSpacing||50,n=a.rankSpacing||50;log.info(o.db.getRootDocV2()),o.db.extract(o.db.getRootDocV2()),log.info(o.db.getRootDocV2());const d=o.db.getStates(),l=new graphlib.Graph({multigraph:!0,compound:!0}).setGraph({rankdir:getDir(o.db.getRootDocV2()),nodesep:i,ranksep:n,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let c;setupNode(l,void 0,o.db.getRootDocV2(),d,o.db,!0),"sandbox"===r&&(c=select("#i"+t));const p=select("sandbox"===r?c.nodes()[0].contentDocument.body:"body"),E=p.select(`[id="${t}"]`),S=p.select("#"+t+" g");await render(S,l,["barb"],CSS_DIAGRAM,t),utils.insertTitle(E,"statediagramTitleText",a.titleTopMargin,o.db.getDiagramTitle());const g=E.node().getBBox(),T=g.width+16,_=g.height+16;E.attr("class",CSS_DIAGRAM);const D=E.node().getBBox();configureSvgSize(E,_,T,a.useMaxWidth);const A=`${D.x-8} ${D.y-8} ${T} ${_}`;log.debug(`viewBox ${A}`),E.attr("viewBox",A);const m=document.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const e of m){const t=e.getBBox(),s=document.createElementNS("http://www.w3.org/2000/svg","rect");s.setAttribute("rx",0),s.setAttribute("ry",0),s.setAttribute("width",t.width),s.setAttribute("height",t.height),e.insertBefore(s,e.firstChild)}},renderer={setConf,getClasses,draw},diagram={parser,db,renderer,styles,init:e=>{e.state||(e.state={}),e.state.arrowMarkerAbsolute=e.arrowMarkerAbsolute,db.clear()}};export{diagram};