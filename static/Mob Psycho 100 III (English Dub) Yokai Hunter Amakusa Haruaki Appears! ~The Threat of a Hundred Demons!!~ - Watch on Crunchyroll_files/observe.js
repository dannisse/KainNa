!function(){var d=0,u=[],n=!1,a=window.evidon_dg.productIds.Observe,s=window.evidon_dg.companyId,g=window.evidon_dg.siteId,v=window.evidon_dg.getConfigValue("observe");if(v){v.percent&&v.pageScans&&v.initialDelay&&v.scanInterval||window.evidon_dg.logToConsoleF(a,"Configuration Corrupt. Missing Values.",!0,!0),window.evidon_dg.logToConsoleO(a,"Config: ",v);var f,w=v.percent,p=v.pageScans,y=v.initialDelay,m=v.scanInterval,e=v.noSite;if(!g){if(!e)return window.evidon_dg.logToConsoleF(a,"Site Not Configured (No SiteId) - Observe Disabled");window.evidon_dg.logToConsoleF(a,"Site Not Configured (No SiteId) - Observe Override Enabled")}w<0||100<w?window.evidon_dg.logToConsoleF(a,'Configuration Contains Invalid Value For "collectionPercent" ('+w+").",!0,!0):(e=Math.floor(100*Math.random())+1)<=w?(window.evidon_dg.logToConsoleF(a,"Random ("+e+") Within Bounds of CollectionPercent ("+w+") - Observe Enabled"),f=window.setInterval(function e(){d++;window.clearInterval(f);d<p&&(f=window.setInterval(e,1e3*m));var n=[];S(window,n);h(window,n);n=v.recollect?u:n;if(0==n.length)return void window.evidon_dg.logToConsoleF(a,"[Scan "+d+"] Collecting: No New Resources Found");n=T(n,"src");var o=window.evidon_dg.getUcpNoticeId();var r=document.documentURI;var t=C();var i=[];n.forEach(function(e){i.push({companyId:s,siteId:g,ucpNoticeId:o,pageLoadId:window.evidon_dg.pageLoadId,resourceUri:e.src,pageUri:r,resourceLatencyMs:0<e.latency?e.latency:null,resourceSizeBytes:0<e.resourceSizeBytes?e.resourceSizeBytes:null,pageLatencyMs:0<t?t:null,disposition:"observe",initialDelaySeconds:y,scanIntervalSeconds:m,collectionPercent:w,pageScans:p,throwIndex:d})});var l={"csp-report":{resources:i}};l=JSON.stringify(l["csp-report"]);var c=new XMLHttpRequest;c.open("POST",window.evidon_dg.collector,!0);c.setRequestHeader("content-type","application/json");c.addEventListener("error",I);c.send(l);window.evidon_dg.logToConsoleO(a,"[Scan "+d+"] Collecting: ",n)},1e3*y)):window.evidon_dg.logToConsoleF(a,"Random ("+e+") Outside Bounds of CollectionPercent ("+w+") - Observe Disabled")}else window.evidon_dg.logToConsoleF(a,"Configuration (observe) Not Found For Company ("+s+") OR Site ("+g+")",!0,!0);function C(){var e=window.performance.timing;return!n&&0<e.loadEventEnd?(e=e.loadEventEnd-e.navigationStart,n=!0,e):0}function S(e,n){if(void 0!==performance){var o=e.document;if(null!=o){for(var r=(r=Array.from(e.performance.getEntriesByType("resource"))).filter(function(e){return!e.name.split("?")[0].includes(window.location.hostname)&&e.name.includes("//")}),t=0;t<r.length;t++){var i=r[t],l={scanType:"performance",src:i.name,latency:i.duration,resourceSizeBytes:i.transferSize};_(u,n,l,function(e){return e.src===l.src}),_(u,u,l,function(e){return e.src===l.src})}var c=Array.from(o.getElementsByTagName("iframe"));if(0<c.length)for(var d=0;d<c.length;d++){var a=null,s=null;try{a=c[d].contentWindow,s=c[d].contentWindow.document}catch(e){}null!=s&&S(a,n)}}}}function h(e,n){e=e.document;if(null!=e&&null!=e.querySelectorAll("[src]")){for(var o=Array.from(e.querySelectorAll("[src]")).filter(function(e){return!!e.src&&!e.src.includes(window.location.hostname)&&e.src.includes("//")}),r=0;r<o.length;r++){var t={scanType:"crawl",src:o[r].src,latency:null,resourceSizeBytes:null};_(u,n,t,function(e){return e.src===t.src}),_(u,u,t,function(e){return e.src===t.src})}var i=Array.from(e.getElementsByTagName("iframe"));if(0<i.length)for(var l=0;l<i.length;l++){var c=null,d=null;try{c=i[l].contentWindow,d=i[l].contentWindow.document}catch(e){}null!=d&&h(c,n)}}}function I(){window.evidon_dg.logToConsoleF(a,"Error sending observed data",!0)}function _(e,n,o,r){!function(e,n){for(var o=0;o<e.length;o++)if(n(e[o]))return 1}(e,r)&&n.push(o)}function T(e){var t,n=e.slice();return arguments.length<2?n.sort():(t=Array.prototype.slice.call(arguments),n.sort(function(e,n){for(var o=t.slice(),r=o.shift();e[r]==n[r]&&o.length;)r=o.shift();return e[r]==n[r]?0:e[r]>n[r]?1:-1}))}}();