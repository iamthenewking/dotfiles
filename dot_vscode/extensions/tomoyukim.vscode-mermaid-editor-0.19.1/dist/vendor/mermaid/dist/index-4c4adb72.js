import{layout}from"dagre-d3-es/src/dagre/index.js";import*as graphlibJson from"dagre-d3-es/src/graphlib/json.js";import{c as createLabel,i as intersectRect,a as insertMarkers,b as clear$2,d as clear$3,u as updateNodeBounds,s as setNodeElem,e as insertNode,f as insertEdgeLabel,p as positionNode,g as insertEdge,h as positionEdgeLabel}from"./edges-b00f0ec2.js";import{l as log,n as evaluate,c as getConfig}from"./mermaid-a98f434b.js";import*as graphlib from"dagre-d3-es/src/graphlib/index.js";import{c as createText}from"./createText-285e50b4.js";import{select}from"d3";let clusterDb={},descendants={},parents={};const clear$1=()=>{descendants={},parents={},clusterDb={}},isDescendant=(e,t)=>(log.trace("In isDecendant",t," ",e," = ",descendants[t].includes(e)),!!descendants[t].includes(e)),edgeInCluster=(e,t)=>(log.info("Decendants of ",t," is ",descendants[t]),log.info("Edge is ",e),e.v!==t&&e.w!==t&&(descendants[t]?descendants[t].includes(e.v)||isDescendant(e.v,t)||isDescendant(e.w,t)||descendants[t].includes(e.w):(log.debug("Tilt, ",t,",not in decendants"),!1))),copy=(e,t,r,n)=>{log.warn("Copying children of ",e,"root",n,"data",t.node(e),n);const i=t.children(e)||[];e!==n&&i.push(e),log.warn("Copying (nodes) clusterId",e,"nodes",i),i.forEach((i=>{if(t.children(i).length>0)copy(i,t,r,n);else{const s=t.node(i);log.info("cp ",i," to ",n," with parent ",e),r.setNode(i,s),n!==t.parent(i)&&(log.warn("Setting parent",i,t.parent(i)),r.setParent(i,t.parent(i))),e!==n&&i!==e?(log.debug("Setting parent",i,e),r.setParent(i,e)):(log.info("In copy ",e,"root",n,"data",t.node(e),n),log.debug("Not Setting parent for node=",i,"cluster!==rootId",e!==n,"node!==clusterId",i!==e));const o=t.edges(i);log.debug("Copying Edges",o),o.forEach((i=>{log.info("Edge",i);const s=t.edge(i.v,i.w,i.name);log.info("Edge data",s,n);try{edgeInCluster(i,n)?(log.info("Copying as ",i.v,i.w,s,i.name),r.setEdge(i.v,i.w,s,i.name),log.info("newGraph edges ",r.edges(),r.edge(r.edges()[0]))):log.info("Skipping copy of edge ",i.v,"--\x3e",i.w," rootId: ",n," clusterId:",e)}catch(e){log.error(e)}}))}log.debug("Removing node",i),t.removeNode(i)}))},extractDescendants=(e,t)=>{const r=t.children(e);let n=[...r];for(const i of r)parents[i]=e,n=[...n,...extractDescendants(i,t)];return n},findNonClusterChild=(e,t)=>{log.trace("Searching",e);const r=t.children(e);if(log.trace("Searching children of id ",e,r),r.length<1)return log.trace("This is a valid node",e),e;for(const n of r){const r=findNonClusterChild(n,t);if(r)return log.trace("Found replacement for",e," => ",r),r}},getAnchorId=e=>clusterDb[e]&&clusterDb[e].externalConnections&&clusterDb[e]?clusterDb[e].id:e,adjustClustersAndEdges=(e,t)=>{!e||t>10?log.debug("Opting out, no graph "):(log.debug("Opting in, graph "),e.nodes().forEach((function(t){e.children(t).length>0&&(log.warn("Cluster identified",t," Replacement id in edges: ",findNonClusterChild(t,e)),descendants[t]=extractDescendants(t,e),clusterDb[t]={id:findNonClusterChild(t,e),clusterData:e.node(t)})})),e.nodes().forEach((function(t){const r=e.children(t),n=e.edges();r.length>0?(log.debug("Cluster identified",t,descendants),n.forEach((e=>{e.v!==t&&e.w!==t&&isDescendant(e.v,t)^isDescendant(e.w,t)&&(log.warn("Edge: ",e," leaves cluster ",t),log.warn("Decendants of XXX ",t,": ",descendants[t]),clusterDb[t].externalConnections=!0)}))):log.debug("Not a cluster ",t,descendants)})),e.edges().forEach((function(t){const r=e.edge(t);log.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(t)),log.warn("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(e.edge(t)));let n=t.v,i=t.w;if(log.warn("Fix XXX",clusterDb,"ids:",t.v,t.w,"Translating: ",clusterDb[t.v]," --- ",clusterDb[t.w]),clusterDb[t.v]&&clusterDb[t.w]&&clusterDb[t.v]===clusterDb[t.w]){log.warn("Fixing and trixing link to self - removing XXX",t.v,t.w,t.name),log.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),n=getAnchorId(t.v),i=getAnchorId(t.w),e.removeEdge(t.v,t.w,t.name);const s=t.w+"---"+t.v;e.setNode(s,{domId:s,id:s,labelStyle:"",labelText:r.label,padding:0,shape:"labelRect",style:""});const o=JSON.parse(JSON.stringify(r)),a=JSON.parse(JSON.stringify(r));o.label="",o.arrowTypeEnd="none",a.label="",o.fromCluster=t.v,a.toCluster=t.v,e.setEdge(n,s,o,t.name+"-cyclic-special"),e.setEdge(s,i,a,t.name+"-cyclic-special")}else(clusterDb[t.v]||clusterDb[t.w])&&(log.warn("Fixing and trixing - removing XXX",t.v,t.w,t.name),n=getAnchorId(t.v),i=getAnchorId(t.w),e.removeEdge(t.v,t.w,t.name),n!==t.v&&(r.fromCluster=t.v),i!==t.w&&(r.toCluster=t.w),log.warn("Fix Replacing with XXX",n,i,t.name),e.setEdge(n,i,r,t.name))})),log.warn("Adjusted Graph",graphlibJson.write(e)),extractor(e,0),log.trace(clusterDb))},extractor=(e,t)=>{if(log.warn("extractor - ",t,graphlibJson.write(e),e.children("D")),t>10)return void log.error("Bailing out");let r=e.nodes(),n=!1;for(const t of r){const r=e.children(t);n=n||r.length>0}if(n){log.debug("Nodes = ",r,t);for(const n of r)if(log.debug("Extracting node",n,clusterDb,clusterDb[n]&&!clusterDb[n].externalConnections,!e.parent(n),e.node(n),e.children("D")," Depth ",t),clusterDb[n])if(!clusterDb[n].externalConnections&&e.children(n)&&e.children(n).length>0){log.warn("Cluster without external connections, without a parent and with children",n,t);let r="TB"===e.graph().rankdir?"LR":"TB";clusterDb[n]&&clusterDb[n].clusterData&&clusterDb[n].clusterData.dir&&(r=clusterDb[n].clusterData.dir,log.warn("Fixing dir",clusterDb[n].clusterData.dir,r));const i=new graphlib.Graph({multigraph:!0,compound:!0}).setGraph({rankdir:r,nodesep:50,ranksep:50,marginx:8,marginy:8}).setDefaultEdgeLabel((function(){return{}}));log.warn("Old graph before copy",graphlibJson.write(e)),copy(n,e,i,n),e.setNode(n,{clusterNode:!0,id:n,clusterData:clusterDb[n].clusterData,labelText:clusterDb[n].labelText,graph:i}),log.warn("New graph after copy node: (",n,")",graphlibJson.write(i)),log.debug("Old graph after copy",graphlibJson.write(e))}else log.warn("Cluster ** ",n," **not meeting the criteria !externalConnections:",!clusterDb[n].externalConnections," no parent: ",!e.parent(n)," children ",e.children(n)&&e.children(n).length>0,e.children("D"),t),log.debug(clusterDb);else log.debug("Not a cluster",n,t);r=e.nodes(),log.warn("New list of nodes",r);for(const n of r){const r=e.node(n);log.warn(" Now next level",n,r),r.clusterNode&&extractor(r.graph,t+1)}}else log.debug("Done, no node has children",e.nodes())},sorter=(e,t)=>{if(0===t.length)return[];let r=Object.assign(t);return t.forEach((t=>{const n=e.children(t),i=sorter(e,n);r=[...r,...i]})),r},sortNodesByHierarchy=e=>sorter(e,e.children()),rect=(e,t)=>{log.info("Creating subgraph rect for ",t.id,t);const r=e.insert("g").attr("class","cluster"+(t.class?" "+t.class:"")).attr("id",t.id),n=r.insert("rect",":first-child"),i=evaluate(getConfig().flowchart.htmlLabels),s=r.insert("g").attr("class","cluster-label"),o="markdown"===t.labelType?createText(s,t.labelText,{style:t.labelStyle,useHtmlLabels:i}):s.node().appendChild(createLabel(t.labelText,t.labelStyle,void 0,!0));let a=o.getBBox();if(evaluate(getConfig().flowchart.htmlLabels)){const e=o.children[0],t=select(o);a=e.getBoundingClientRect(),t.attr("width",a.width),t.attr("height",a.height)}const d=0*t.padding,l=d/2,c=t.width<=a.width+d?a.width+d:t.width;t.width<=a.width+d?t.diff=(a.width-t.width)/2-t.padding/2:t.diff=-t.padding/2,log.trace("Data ",t,JSON.stringify(t)),n.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-c/2).attr("y",t.y-t.height/2-l).attr("width",c).attr("height",t.height+d),i?s.attr("transform","translate("+(t.x-a.width/2)+", "+(t.y-t.height/2)+")"):s.attr("transform","translate("+t.x+", "+(t.y-t.height/2)+")");const g=n.node().getBBox();return t.width=g.width,t.height=g.height,t.intersect=function(e){return intersectRect(t,e)},r},noteGroup=(e,t)=>{const r=e.insert("g").attr("class","note-cluster").attr("id",t.id),n=r.insert("rect",":first-child"),i=0*t.padding,s=i/2;n.attr("rx",t.rx).attr("ry",t.ry).attr("x",t.x-t.width/2-s).attr("y",t.y-t.height/2-s).attr("width",t.width+i).attr("height",t.height+i).attr("fill","none");const o=n.node().getBBox();return t.width=o.width,t.height=o.height,t.intersect=function(e){return intersectRect(t,e)},r},roundedWithTitle=(e,t)=>{const r=e.insert("g").attr("class",t.classes).attr("id",t.id),n=r.insert("rect",":first-child"),i=r.insert("g").attr("class","cluster-label"),s=r.append("rect"),o=i.node().appendChild(createLabel(t.labelText,t.labelStyle,void 0,!0));let a=o.getBBox();if(evaluate(getConfig().flowchart.htmlLabels)){const e=o.children[0],t=select(o);a=e.getBoundingClientRect(),t.attr("width",a.width),t.attr("height",a.height)}a=o.getBBox();const d=0*t.padding,l=d/2,c=t.width<=a.width+t.padding?a.width+t.padding:t.width;t.width<=a.width+t.padding?t.diff=(a.width+0*t.padding-t.width)/2:t.diff=-t.padding/2,n.attr("class","outer").attr("x",t.x-c/2-l).attr("y",t.y-t.height/2-l).attr("width",c+d).attr("height",t.height+d),s.attr("class","inner").attr("x",t.x-c/2-l).attr("y",t.y-t.height/2-l+a.height-1).attr("width",c+d).attr("height",t.height+d-a.height-3),i.attr("transform","translate("+(t.x-a.width/2)+", "+(t.y-t.height/2-t.padding/3+(evaluate(getConfig().flowchart.htmlLabels)?5:3))+")");const g=n.node().getBBox();return t.height=g.height,t.intersect=function(e){return intersectRect(t,e)},r},divider=(e,t)=>{const r=e.insert("g").attr("class",t.classes).attr("id",t.id),n=r.insert("rect",":first-child"),i=0*t.padding,s=i/2;n.attr("class","divider").attr("x",t.x-t.width/2-s).attr("y",t.y-t.height/2).attr("width",t.width+i).attr("height",t.height+i);const o=n.node().getBBox();return t.width=o.width,t.height=o.height,t.diff=-t.padding/2,t.intersect=function(e){return intersectRect(t,e)},r},shapes={rect,roundedWithTitle,noteGroup,divider};let clusterElems={};const insertCluster=(e,t)=>{log.trace("Inserting cluster");const r=t.shape||"rect";clusterElems[t.id]=shapes[r](e,t)},clear=()=>{clusterElems={}},recursiveRender=async(e,t,r,n)=>{log.info("Graph in recursive render: XXX",graphlibJson.write(t),n);const i=t.graph().rankdir;log.trace("Dir in recursive render - dir:",i);const s=e.insert("g").attr("class","root");t.nodes()?log.info("Recursive render XXX",t.nodes()):log.info("No nodes found for",t),t.edges().length>0&&log.trace("Recursive edges",t.edge(t.edges()[0]));const o=s.insert("g").attr("class","clusters"),a=s.insert("g").attr("class","edgePaths"),d=s.insert("g").attr("class","edgeLabels"),l=s.insert("g").attr("class","nodes");await Promise.all(t.nodes().map((async function(e){const s=t.node(e);if(void 0!==n){const r=JSON.parse(JSON.stringify(n.clusterData));log.info("Setting data for cluster XXX (",e,") ",r,n),t.setNode(n.id,r),t.parent(e)||(log.trace("Setting parent",e,n.id),t.setParent(e,n.id,r))}if(log.info("(Insert) Node XXX"+e+": "+JSON.stringify(t.node(e))),s&&s.clusterNode){log.info("Cluster identified",e,s.width,t.node(e));const n=await recursiveRender(l,s.graph,r,t.node(e)),i=n.elem;updateNodeBounds(s,i),s.diff=n.diff||0,log.info("Node bounds (abc123)",e,s,s.width,s.x,s.y),setNodeElem(i,s),log.warn("Recursive render complete ",i,s)}else t.children(e).length>0?(log.info("Cluster - the non recursive path XXX",e,s.id,s,t),log.info(findNonClusterChild(s.id,t)),clusterDb[s.id]={id:findNonClusterChild(s.id,t),node:s}):(log.info("Node - the non recursive path",e,s.id,s),await insertNode(l,t.node(e),i))}))),t.edges().forEach((function(e){const r=t.edge(e.v,e.w,e.name);log.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e)),log.info("Edge "+e.v+" -> "+e.w+": ",e," ",JSON.stringify(t.edge(e))),log.info("Fix",clusterDb,"ids:",e.v,e.w,"Translateing: ",clusterDb[e.v],clusterDb[e.w]),insertEdgeLabel(d,r)})),t.edges().forEach((function(e){log.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(e))})),log.info("#############################################"),log.info("###                Layout                 ###"),log.info("#############################################"),log.info(t),layout(t),log.info("Graph after layout:",graphlibJson.write(t));let c=0;return sortNodesByHierarchy(t).forEach((function(e){const r=t.node(e);log.info("Position "+e+": "+JSON.stringify(t.node(e))),log.info("Position "+e+": ("+r.x,","+r.y,") width: ",r.width," height: ",r.height),r&&r.clusterNode?positionNode(r):t.children(e).length>0?(insertCluster(o,r),clusterDb[r.id].node=r):positionNode(r)})),t.edges().forEach((function(e){const n=t.edge(e);log.info("Edge "+e.v+" -> "+e.w+": "+JSON.stringify(n),n);const i=insertEdge(a,e,n,clusterDb,r,t);positionEdgeLabel(n,i)})),t.nodes().forEach((function(e){const r=t.node(e);log.info(e,r.type,r.diff),"group"===r.type&&(c=r.diff)})),{elem:s,diff:c}},render=async(e,t,r,n,i)=>{insertMarkers(e,r,n,i),clear$2(),clear$3(),clusterElems={},descendants={},parents={},clusterDb={},log.warn("Graph at first:",graphlibJson.write(t)),adjustClustersAndEdges(t),log.warn("Graph after:",graphlibJson.write(t)),await recursiveRender(e,t,n)};export{render as r};