if (self.CavalryLogger) { CavalryLogger.start_js(["m79szvg"]); }

__d("translationOverrideListener",["requireDeferred"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g=b("requireDeferred")("IntlQtEventFalcoEvent").__setRef("translationOverrideListener");function a(a){g.onReady(function(b){return b.log(function(){return{hash:a}})})}}),null);
__d("CometTooltipGroup.react",["BaseTooltipGroup.react","CometTooltipImpl.react","react"],(function(a,b,c,d,e,f){"use strict";e.exports=a;var g,h=g||b("react");function a(a){return h.jsx(b("BaseTooltipGroup.react").Container,babelHelpers["extends"]({},a,{tooltipImpl:b("CometTooltipImpl.react")}))}}),null);
__d("FocusEvent",["Event","Run","ge","getOrCreateDOMID"],(function(a,b,c,d,e,f){"use strict";f.listen=a;var g={},h=!1;function i(a,b){if(g[a]){b=g[a].indexOf(b);b>=0&&g[a].splice(b,1);g[a].length===0&&delete g[a]}}function j(a){var b=a.getTarget();if(g[b.id]&&g[b.id].length>0){var c=a.type==="focusin"||a.type==="focus";g[b.id].forEach(function(a){a(c)})}}function k(){if(h)return;b("Event").listen(document.documentElement,"focusout",j);b("Event").listen(document.documentElement,"focusin",j);h=!0}function a(a,c){k();var d=b("getOrCreateDOMID")(a);g[d]||(g[d]=[]);g[d].push(c);var e=!1;function f(){e||(i(d,c),h&&(h.remove(),h=null),e=!0)}var h=b("Run").onLeave(function(){b("ge")(d)||f()});return{remove:function(){f()}}}}),null);
__d("tooltipPropsFor",[],(function(a,b,c,d,e,f){"use strict";e.exports=a;function a(a,b,c){if(!a)return{};a={"data-tooltip-content":a,"data-hover":"tooltip"};b&&(a["data-tooltip-position"]=b);c&&(a["data-tooltip-alignh"]=c);return a}}),null);
__d("TooltipData",["DOM","DataStore","FBLogger","URI","getElementText","ifRequired","isStringNullOrEmpty","isTextNode","killswitch","tooltipPropsFor"],(function(a,b,c,d,e,f){var g;function h(a){var c=a.getAttribute("data-tooltip-delay");c=c?parseInt(c,10)||1e3:0;if(b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT"))return babelHelpers["extends"]({className:a.getAttribute("data-tooltip-root-class"),content:a.getAttribute("data-tooltip-content"),delay:c,position:a.getAttribute("data-tooltip-position")||"above",alignH:a.getAttribute("data-tooltip-alignh")||"left",offsetY:a.getAttribute("data-tooltip-offsety")||0,suppress:!1,overflowDisplay:a.getAttribute("data-tooltip-display")==="overflow",persistOnClick:a.getAttribute("data-pitloot-persistonclick"),textDirection:a.getAttribute("data-tooltip-text-direction")},b("DataStore").get(a,"tooltip"));else{var d;d=(d=b("DataStore").get(a,"tooltip"))!=null?d:{};var e=d.content;d=babelHelpers.objectWithoutPropertiesLoose(d,["content"]);var f=a.getAttribute("data-tooltip-content");!b("isStringNullOrEmpty")(e)&&!b("isStringNullOrEmpty")(f)&&b("FBLogger")("tooltip").warn('Getting DataStore tooltip content on an element that has both a "data-tooltip-content" attribute value (set to %s) and a value coming from the DataStore',a.getAttribute("data-tooltip-content"));return babelHelpers["extends"]({className:a.getAttribute("data-tooltip-root-class"),delay:c,position:a.getAttribute("data-tooltip-position")||"above",alignH:a.getAttribute("data-tooltip-alignh")||"left",offsetY:a.getAttribute("data-tooltip-offsety")||0,suppress:!1,overflowDisplay:a.getAttribute("data-tooltip-display")==="overflow",persistOnClick:a.getAttribute("data-pitloot-persistonclick"),textDirection:a.getAttribute("data-tooltip-text-direction"),content:(a=(c=f)!=null?c:e)!=null?a:null},d)}}function i(a,c){var d=h(a);if(b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT"))b("DataStore").set(a,"tooltip",{content:c.content||d.content,position:c.position||d.position,alignH:c.alignH||d.alignH,suppress:c.suppress!==void 0?c.suppress:d.suppress,overflowDisplay:c.overflowDisplay||d.overflowDisplay,persistOnClick:c.persistOnClick||d.persistOnClick});else{!b("isStringNullOrEmpty")(c.content)&&!b("isStringNullOrEmpty")(a.getAttribute("data-tooltip-content"))&&b("FBLogger")("tooltip").warn('Setting DataStore tooltip content on an element that already has the "data-tooltip-content" attribute (set to %s) is invalid',a.getAttribute("data-tooltip-content"));b("DataStore").set(a,"tooltip",{content:c.content||((a=b("DataStore").get(a,"tooltip"))!=null?a:{}).content,position:c.position||d.position,alignH:c.alignH||d.alignH,suppress:c.suppress!==void 0?c.suppress:d.suppress,overflowDisplay:c.overflowDisplay||d.overflowDisplay,persistOnClick:c.persistOnClick||d.persistOnClick})}}function j(a,b){i(a,b),a.setAttribute("data-hover","tooltip")}function k(a,b){}var l={remove:function(a,c){c=c===void 0?{}:c;c=c.onlyCleanupDataStore;c=c===void 0?!1:c;b("DataStore").remove(a,"tooltip");c||(a.removeAttribute("data-hover"),a.removeAttribute("data-tooltip-position"),a.removeAttribute("data-tooltip-alignh"),b("ifRequired")("Tooltip",function(b){b.isActive(a)&&b.hide()}))},set:function(a,c,d,e){k(a,c);if(c instanceof(g||(g=b("URI"))))a.setAttribute("data-tooltip-uri",c),b("ifRequired")("Tooltip",function(b){b.isActive(a)&&b.fetchIfNecessary(a)});else if(b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")){var f=l._store({context:a,content:c,position:d,alignH:e});typeof f.content!=="string"?a.setAttribute("data-tooltip-content",b("getElementText")(f.content)):a.setAttribute("data-tooltip-content",f.content);l.refreshIfActive(a)}else a.removeAttribute("data-tooltip-content"),l._store({context:a,content:c,position:d,alignH:e}),l.refreshIfActive(a)},refreshIfActive:function(a){b("ifRequired")("Tooltip",function(b){b.isActive(a)&&b.show(a)})},_store:function(a){var c=a.context,d=a.content,e=a.position;a=a.alignH;k(c,d);b("isTextNode")(d)&&(d=b("getElementText")(d));var f=!1;typeof d!=="string"?d=b("DOM").create("div",{},d):f=d==="";a={alignH:a,content:d,position:e,suppress:f};j(c,a);return a},propsFor:b("tooltipPropsFor"),enableDisplayOnOverflow:function(a){a.removeAttribute("data-tooltip-display"),j(a,{overflowDisplay:!0})},enablePersistOnClick:function(a){a.removeAttribute("data-pitloot-persistOnClick"),j(a,{persistOnClick:!0})},suppress:function(a,b){i(a,{suppress:b})},_get:h};e.exports=l}),null);
__d("Focus",["cx","CSS","Event","FocusEvent","KeyStatus","TooltipData","ifRequired"],(function(a,b,c,d,e,f,g){f.set=a;f.setWithoutOutline=h;f.relocate=c;f.performRelocation=d;function a(a,c){c===void 0&&(c=!1);if(a){var d=b("ifRequired")("VirtualCursorStatus",function(a){return a.isVirtualCursorTriggered()},function(){return!1});c||b("KeyStatus").isKeyDown()||d?i(a):h(a)}}function h(a){if(a){b("CSS").addClass(a,"_5f0v");var c=b("Event").listen(a,"blur",function(){a&&b("CSS").removeClass(a,"_5f0v"),c.remove()});b("TooltipData").suppress(a,!0);i(a);b("TooltipData").suppress(a,!1)}}function c(a,c){b("CSS").addClass(a,"_5f0v");return b("FocusEvent").listen(a,this.performRelocation.bind(this,a,c))}function d(a,c,d){b("CSS").addClass(a,"_5f0v");a=b("ifRequired")("FocusRing",function(a){return a.usingKeyboardNavigation()},function(){return!0});d=d&&a;b("CSS").conditionClass(c,"_3oxt",d);b("CSS").conditionClass(c,"_16jm",d)}function i(a){try{a.tabIndex=a.tabIndex,a.focus()}catch(a){}}}),null);
__d("XCometMeControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f){a=b("jsRouteBuilder")("/me/",Object.freeze({}),void 0);c=a;e.exports=c}),null);
__d("relay-runtime/store/DependencyGraph",[],(function(a,b,c,d,e,f){"use strict";var g=new Set();a=function(){function a(){this.$1=new Map()}var b=a.prototype;b.$2=function(a){return(a=this.$1.get(a))!=null?a:g};b.$3=function(a){var b=new Set(),c=new Set();a=Array.from(a);while(a.length){var d=a.pop();c.add(d);for(var d=this.$2(d),e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var g;if(e){if(f>=d.length)break;g=d[f++]}else{f=d.next();if(f.done)break;g=f.value}g=g;b.add(g);g.kind==="delete"&&!c.has(g.dataID)&&a.push(g.dataID)}}return b};b.getInstructionsForUpdatedIDs=function(a){return Array.from(this.$3(a))};b.$4=function(a,b){var c=this.$1.get(a);c===void 0&&(c=new Set(),this.$1.set(a,c));c.add(b)};b.setDependency=function(a,b,c,d,e){b===a?this.$4(d,{kind:"unlink",dataID:b,storageKey:c}):this.$4(d,{kind:"delete",dataID:a});this.$4(b,{kind:"delete",dataID:d});for(var c=e,a=Array.isArray(c),b=0,c=a?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){if(a){if(b>=c.length)break;e=c[b++]}else{b=c.next();if(b.done)break;e=b.value}e=e;this.$4(e,{kind:"delete",dataID:d})}};return a}();e.exports={MutableDependencyGraph:a}}),null);
__d("relay-runtime/store/ResolverCache",["relay-runtime/store/ClientID","relay-runtime/store/DependencyGraph","relay-runtime/store/RelayModernRecord","relay-runtime/store/RelayStoreUtils"],(function(a,b,c,d,e,f){"use strict";var g,h=b("relay-runtime/store/ClientID").generateClientID,i=b("relay-runtime/store/DependencyGraph").MutableDependencyGraph,j=b("relay-runtime/store/RelayStoreUtils").RELAY_RESOLVER_VALUE_KEY,k=b("relay-runtime/store/RelayStoreUtils").getStorageKey;a=function(){function a(){}var b=a.prototype;b.readFromCacheOrEvaluate=function(a,b,c,d){return d().resolverResult};b.invalidateDataIDs=function(a){};return a}();var l=[];c=function(){function a(a){this.$1=new i(),this.$2=a}var c=a.prototype;c.readFromCacheOrEvaluate=function(a,c,d,e){var f=this.$2(),i=(g||(g=b("relay-runtime/store/RelayModernRecord"))).getDataID(a);c=k(c,d);d=g.getLinkedRecordID(a,c);if(d==null||f.get(d)==null){d=h(i,c);var m=(g||(g=b("relay-runtime/store/RelayModernRecord"))).create(d,"__RELAY_RESOLVER__");l.push(d);try{e=e()}finally{l.pop()}g.setValue(m,j,e.resolverResult);f.set(d,m);m=g.clone(a);g.setLinkedRecordID(m,c,d);f.set(g.getDataID(m),m);a=l.length?l[l.length-1]:i;this.$1.setDependency(a,i,c,d,e.seenRecords)}m=f.get(d);return m==null?null:m[j]};c.invalidateDataIDs=function(a){var c=this.$2(),d=this.$1.getInstructionsForUpdatedIDs(a);for(var d=d,e=Array.isArray(d),f=0,d=e?d:d[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var h;if(e){if(f>=d.length)break;h=d[f++]}else{f=d.next();if(f.done)break;h=f.value}h=h;switch(h.kind){case"delete":c["delete"](h.dataID);a.add(h.dataID);break;case"unlink":var i=h.dataID,j=c.get(i);if(!j)return;j=(g||(g=b("relay-runtime/store/RelayModernRecord"))).clone(j);(g||(g=b("relay-runtime/store/RelayModernRecord"))).setValue(j,h.storageKey,null);c.set(i,j);a.add(i);break}}};return a}();e.exports={NoopResolverCache:a,RecordResolverCache:c}}),null);