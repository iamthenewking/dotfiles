import{D as H,a as Q,S as X,b as Z,c as j,p as F,d as M,s as I}from"./styles-3fb7b9cf.js";import{G as tt}from"./layout-c5a37d74.js";import{l,c as g,j as $,z as et,k as st,f as w}from"./mermaid-42f7bf2b.js";import{r as ot}from"./index-d0b453e2.js";import"./edges-558884ee.js";import"./createText-94e3ebbf.js";import"./svgDraw-af99a425.js";import"./line-ce5d1152.js";import"./array-2ff2c7a6.js";import"./constant-2fe7eae5.js";const h="rect",C="rectWithTitle",nt="start",ct="end",it="divider",rt="roundedWithTitle",lt="note",at="noteGroup",u="statediagram",dt="state",Et=`${u}-${dt}`,U="transition",St="note",Tt="note-edge",pt=`${U} ${Tt}`,ut=`${u}-${St}`,_t="cluster",ft=`${u}-${_t}`,Dt="cluster-alt",bt=`${u}-${Dt}`,V="parent",Y="note",At="state",N="----",ht=`${N}${Y}`,v=`${N}${V}`,z="fill:none",W="fill: #333",m="c",q="text",K="normal";let y={},E=0;const yt=function(t){const e=Object.keys(t);for(const s of e)t[s]},gt=function(t,e){l.trace("Extracting classes"),e.db.clear();try{return e.parser.parse(t),e.db.extract(e.db.getRootDocV2()),e.db.getClasses()}catch(t){return t}};function xt(t){return null==t?"":t.classes?t.classes.join(" "):""}function R(t="",e=0,s="",a=N){const o=null!==s&&s.length>0?`${a}${s}`:"";return`${At}-${t}${o}-${e}`}const A=(t,e,s,a,o,r)=>{const i=s.id,n=xt(a[i]);if("root"!==i){let e=h;!0===s.start&&(e=nt),!1===s.start&&(e=ct),s.type!==H&&(e=s.type),y[i]||(y[i]={id:i,shape:e,description:w.sanitizeText(i,g()),classes:`${n} ${Et}`});const a=y[i];s.description&&(Array.isArray(a.description)?(a.shape=C,a.description.push(s.description)):a.description.length>0?(a.shape=C,a.description===i?a.description=[s.description]:a.description=[a.description,s.description]):(a.shape=h,a.description=s.description),a.description=w.sanitizeTextOrArray(a.description,g())),1===a.description.length&&a.shape===C&&(a.shape=h),!a.type&&s.doc&&(l.info("Setting cluster for ",i,G(s)),a.type="group",a.dir=G(s),a.shape=s.type===Q?it:rt,a.classes=a.classes+" "+ft+" "+(r?bt:""));const o={labelStyle:"",shape:a.shape,labelText:a.description,classes:a.classes,style:"",id:i,dir:a.dir,domId:R(i,E),type:a.type,padding:15,centerLabel:!0};if(s.note){const e={labelStyle:"",shape:lt,labelText:s.note.text,classes:ut,style:"",id:i+ht+"-"+E,domId:R(i,E,Y),type:a.type,padding:15},r={labelStyle:"",shape:at,labelText:s.note.text,classes:a.classes,style:"",id:i+v,domId:R(i,E,V),type:"group",padding:0};E++;const n=i+v;t.setNode(n,r),t.setNode(e.id,e),t.setNode(i,o),t.setParent(i,n),t.setParent(e.id,n);let d=i,c=e.id;"left of"===s.note.position&&(d=e.id,c=i),t.setEdge(d,c,{arrowhead:"none",arrowType:"",style:z,labelStyle:"",classes:pt,arrowheadStyle:W,labelpos:m,labelType:q,thickness:K})}else t.setNode(i,o)}e&&"root"!==e.id&&(l.trace("Setting node ",i," to be child of its parent ",e.id),t.setParent(i,e.id)),s.doc&&(l.trace("Adding nodes children "),$t(t,s,s.doc,a,o,!r))},$t=(t,e,s,a,o,r)=>{l.trace("items",s),s.forEach((s=>{switch(s.stmt){case Z:case H:A(t,e,s,a,o,r);break;case X:{A(t,e,s.state1,a,o,r),A(t,e,s.state2,a,o,r);const i={id:"edge"+E,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:z,labelStyle:"",label:w.sanitizeText(s.description,g()),arrowheadStyle:W,labelpos:m,labelType:q,thickness:K,classes:U};t.setEdge(s.state1.id,s.state2.id,i,E),E++}}}))},G=(t,e=j)=>{let s=e;if(t.doc)for(let e=0;e<t.doc.length;e++){const a=t.doc[e];"dir"===a.stmt&&(s=a.value)}return s},Ct=async function(t,e,s,a){l.info("Drawing state diagram (v2)",e),y={},a.db.getDirection();const{securityLevel:o,state:r}=g(),i=r.nodeSpacing||50,n=r.rankSpacing||50;l.info(a.db.getRootDocV2()),a.db.extract(a.db.getRootDocV2()),l.info(a.db.getRootDocV2());const d=a.db.getStates(),c=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:G(a.db.getRootDocV2()),nodesep:i,ranksep:n,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));let p;A(c,void 0,a.db.getRootDocV2(),d,a.db,!0),"sandbox"===o&&(p=$("#i"+e));const b=$("sandbox"===o?p.nodes()[0].contentDocument.body:"body"),f=b.select(`[id="${e}"]`),m=b.select("#"+e+" g");await ot(m,c,["barb"],u,e),et.insertTitle(f,"statediagramTitleText",r.titleTopMargin,a.db.getDiagramTitle());const x=f.node().getBBox(),w=x.width+16,T=x.height+16;f.attr("class",u);const E=f.node().getBBox();st(f,T,w,r.useMaxWidth);const S=`${E.x-8} ${E.y-8} ${w} ${T}`;l.debug(`viewBox ${S}`),f.attr("viewBox",S);const j=document.querySelectorAll('[id="'+e+'"] .edgeLabel .label');for(const t of j){const e=t.getBBox(),s=document.createElementNS("http://www.w3.org/2000/svg",h);s.setAttribute("rx",0),s.setAttribute("ry",0),s.setAttribute("width",e.width),s.setAttribute("height",e.height),t.insertBefore(s,t.firstChild)}},Rt={setConf:yt,getClasses:gt,draw:Ct},Ht={parser:F,db:M,renderer:Rt,styles:I,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,M.clear()}};export{Ht as diagram};