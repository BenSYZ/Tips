"use strict";function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function createGumroadEmbed(){window.GumroadEmbed||(window.GumroadEmbed=new GumroadEmbedManager)}function receiveMessage(e){var t={};if(e.data)try{t=JSON.parse(e.data)}catch(r){}if("GumroadEmbedMessage"===t.type&&GumroadEmbed){var i=GumroadEmbed.findEmbed(t.args.id)||GumroadEmbed.findEmbed(t.args.unique_id);i&&"setHeight"===t.action&&i.setHeight(t.args.height)}}var _get=function get(e,t,i){for(var r=!0;r;){var a=e,n=t,o=i;r=!1,null===a&&(a=Function.prototype);var s=Object.getOwnPropertyDescriptor(a,n);if(s!==undefined){if("value"in s)return s.value;var d=s.get;return d===undefined?undefined:d.call(o)}var u=Object.getPrototypeOf(a);if(null===u)return undefined;e=u,t=n,i=o,r=!0,s=u=undefined}},_createClass=function(){function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}}(),GumroadClass=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"setEnvironment",value:function t(){this.environment="production",this.domain="https://gumroad.com",this[this.environment]=!0,this.origin=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"")}},{key:"startNodeAdditionObserver",value:function i(){MutationObserver&&(this.nodeAdditionObserver=new MutationObserver(function(e){for(var t=0;t<e.length;t++)for(var i=0;i<e[t].addedNodes.length;i++)this.nodeAdditionCallback&&this.nodeAdditionCallback(e[t].addedNodes[i])}.bind(this)),this.nodeAdditionObserver.observe(document.body,{childList:!0,subtree:!0}))}},{key:"convertAffiliateProductUrl",value:function o(e){var t=e.match(this.affiliateProductUrlRegExp);if(null===t)return e;var i=t.groups,r=/\/a\/.+(\/.+)/,a=function a(e,t){return"/l"+t},n=new URL(e.replace(r,a));return n.searchParams.append("affiliate_id",i.affiliateId),n.href}},{key:"affiliateProductUrlRegExp",get:function r(){return/.+\/a\/(?<affiliateId>.+)\/.+/}}]),e}(),GumroadEmbedElement=function(){function a(e,t){_classCallCheck(this,a),_get(Object.getPrototypeOf(a.prototype),"constructor",this).call(this),this.manager=t;var i=e.getAttribute("data-gumroad-product-id"),r=this.fetchUrl(e);(i||r)&&(this.div=e,this.setIdAndUrl(),this.opts={as_embed:"true",referrer:document.referrer,origin:this.manager.origin},this.manager.embeds.push(this),this.show())}return _inherits(a,GumroadClass),_createClass(a,[{key:"buildUrl",value:function n(){var e=(this.manager.domain||"")+"/l/"+this.id+"?",t=this.div.getAttribute("data-gumroad-params"),i=this.div.getAttribute("data-gumroad-product-id");for(var r in i||(e=this.convertAffiliateProductUrl(this.url),e=""===new URL(e).search?e+"?":e+"&"),t&&(e+=t+"&"),this.outboundEmbed&&(this.opts.outbound_embed="true"),this.opts)this.opts.hasOwnProperty(r)&&(e+="&"+r+"="+encodeURIComponent(this.opts[r]));return e}},{key:"createIframe",value:function e(){this.iframe=document.createElement("iframe"),this.iframe.allowtransparency=!0,this.iframe.setAttribute("allowFullScreen","allowfullscreen"),this.iframe.setAttribute("allowPaymentRequest","allowpaymentrequest"),this.iframe.className="gumroad-embed-iframe",this.iframe.scrolling="no",this.iframe.width="100%",this.iframe.height=0,this.iframe.id="gumroad-embed-iframe-"+this.id,this.iframe.setAttribute("style","display: block !important; border: none !important; margin: 0 auto !important; padding: 0 !important; max-width: 100% !important;"),this.div.parentNode.insertBefore(this.iframe,this.div)}},{key:"setIdAndUrl",value:function r(){var e=this.fetchUrl(this.div),t=this.div.getAttribute("data-gumroad-product-id");if(!t&&e){var i=new URL(this.convertAffiliateProductUrl(e)).pathname.match(/\/l\/(?<productUniquePermalink>.+)/);i&&(t=i.groups.productUniquePermalink)}this.id=t,this.url=e}},{key:"fetchUrl",value:function i(e){if(!e)return null;var t=e.querySelector("a");return t?t.getAttribute("href"):null}},{key:"setHeight",value:function t(e){this.div.style.display="none",this.iframe.setAttribute("height",e)}},{key:"show",value:function o(){this.iframe||this.createIframe();this.setIdAndUrl(),this.outboundEmbed=!!this.div.getAttribute("data-outbound-embed"),this.iframe.setAttribute("src",this.buildUrl())}}]),a}(),GumroadEmbedManager=function(){function e(){_classCallCheck(this,e),_get(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.setEnvironment(),this.createEmbeds()}return _inherits(e,GumroadClass),_createClass(e,[{key:"createEmbeds",value:function i(){this.embeds=[];for(var e=document.getElementsByClassName("gumroad-product-embed"),t=0;t<e.length;t++)new GumroadEmbedElement(e[t],this)}},{key:"findEmbed",value:function r(e){for(var t=0;t<this.embeds.length;t++)if(this.embeds[t].id==e)return this.embeds[t];return!1}},{key:"gotMessage",value:function a(e){var t={};try{t=JSON.parse(e.data)}catch(i){}this[t.action]&&this[t.action](t.args)}},{key:"reload",value:function n(){for(var e=0;e<this.embeds.length;e++){var t=this.embeds[e].iframe;t&&t.parentNode&&(t.parentNode.removeChild(t),this.embeds[e].div.style.display="")}this.createEmbeds()}},{key:"setHeight",value:function o(e,t){var i=this.findEmbed(e);i&&i.setHeight(t)}}]),e}();window.addEventListener?(window.addEventListener("message",receiveMessage,!1),window.addEventListener("load",createGumroadEmbed)):window.attachEvent&&(window.attachEvent("onmessage",receiveMessage,!1),window.attachEvent("onload",createGumroadEmbed));