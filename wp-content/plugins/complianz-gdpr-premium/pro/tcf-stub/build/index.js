(()=>{"use strict";var t={131:t=>{function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(){for(var t,r,o=[],n=window,a=n;a;){try{if(a.frames.__tcfapiLocator){t=a;break}}catch(t){}if(a===n.top)break;a=a.parent}t||(function t(){var e=n.document,r=!!n.frames.__tcfapiLocator;if(!r)if(e.body){var o=e.createElement("iframe");o.style.cssText="display:none",o.name="__tcfapiLocator",e.body.appendChild(o)}else setTimeout(t,5);return!r}(),n.__tcfapi=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!e.length)return o;"setGdprApplies"===e[0]?e.length>3&&2===parseInt(e[1],10)&&"boolean"==typeof e[3]&&(r=e[3],"function"==typeof e[2]&&e[2]("set",!0)):"ping"===e[0]?"function"==typeof e[2]&&e[2]({gdprApplies:r,cmpLoaded:!1,cmpStatus:"stub"}):o.push(e)},n.addEventListener("message",(function(t){var r="string"==typeof t.data,o={};if(r)try{o=JSON.parse(t.data)}catch(t){}else o=t.data;var n="object"===e(o)?o.__tcfapiCall:null;n&&window.__tcfapi(n.command,n.version,(function(e,o){var a={__tcfapiReturn:{returnValue:e,success:o,callId:n.callId}};t&&t.source&&t.source.postMessage&&t.source.postMessage(r?JSON.stringify(a):a,"*")}),n.parameter)}),!1))}}},e={};function r(o){var n=e[o];if(void 0!==n)return n.exports;var a=e[o]={exports:{}};return t[o](a,a.exports,r),a.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r(131)()})();