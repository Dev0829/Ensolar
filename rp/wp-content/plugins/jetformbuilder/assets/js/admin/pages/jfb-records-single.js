(()=>{var e={8999:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(3476),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,"#form-fields-wrapper{margin-bottom:20px}#form-fields-wrapper #form-fields{margin-bottom:unset}#form-fields-wrapper .jfb-pagination{padding:.8em 0}#form-fields-wrapper .cell--field_type{flex:.3}#form-fields-wrapper .cell--name{flex:.5}#actions-log .cell--created_at{flex:.5}",""]);const i=o},6028:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(3476),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".field-type-template--icon>svg{width:24px;height:24px}",""]);const i=o},3476:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},1730:(e,t,r)=>{var n=r(8999);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,r(9441).Z)("3ae8262d",n,!1,{})},2017:(e,t,r)=>{var n=r(6028);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),(0,r(9441).Z)("4b451e86",n,!1,{})},9441:(e,t,r)=>{"use strict";function n(e,t){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],s=i[0],a={id:e+":"+o,css:i[1],media:i[2],sourceMap:i[3]};n[s]?n[s].parts.push(a):r.push(n[s]={id:s,parts:[a]})}return r}r.d(t,{Z:()=>v});var o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=o&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,c=!1,u=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(e,t,r,o){c=r,d=o||{};var s=n(e,t);return m(s),function(t){for(var r=[],o=0;o<s.length;o++){var a=s[o];(l=i[a.id]).refs--,r.push(l)}for(t?m(s=n(e,t)):s=[],o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete i[l.id]}}}}function m(e){for(var t=0;t<e.length;t++){var r=e[t],n=i[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(g(r.parts[o]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length)}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(g(r.parts[o]));i[r.id]={id:r.id,refs:1,parts:s}}}}function h(){var e=document.createElement("style");return e.type="text/css",s.appendChild(e),e}function g(e){var t,r,n=document.querySelector("style["+f+'~="'+e.id+'"]');if(n){if(c)return u;n.parentNode.removeChild(n)}if(p){var o=l++;n=a||(a=h()),t=_.bind(null,n,o,!1),r=_.bind(null,n,o,!0)}else n=h(),t=x.bind(null,n),r=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else r()}}var b,y=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function _(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function x(e,t){var r=t.css,n=t.media,o=t.sourceMap;if(n&&e.setAttribute("media",n),d.ssrId&&e.setAttribute(f,t.id),o&&(r+="\n/*# sourceURL="+o.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{"use strict";var e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("FormBuilderPage",[r("AlertsList"),e._v(" "),r("PostBoxGrid",{scopedSlots:e._u([{key:"after-form-fields",fn:function(){return[r("TablePagination",{attrs:{scope:"form-fields"}})]},proxy:!0}])})],1)};e._withStripped=!0;var t=JetFBComponents,n=t.PostBoxGrid,o=t.TablePagination,i=t.FormBuilderPage,s=t.AlertsList,a=wp.apiFetch;const l={name:"jfb-records-single",components:{AlertsList:s,PostBoxGrid:n,TablePagination:o,FormBuilderPage:i},created:function(){var e=this;jfbEventBus.$on("alert-click-update",(function(t){var r=t.button;e.installMigrations(r)}))},methods:{installMigrations:function(e){var t=e.rest;a(t).then((function(e){jfbEventBus.$CXNotice.add({message:e.message,type:"success",duration:4e3}),window.location.reload()})).catch((function(e){jfbEventBus.$CXNotice.add({message:e.message,type:"error",duration:4e3})}))}}};function c(e,t,r,n,o,i,s,a){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),n&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):o&&(l=a?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,l):[l]}return{exports:e,options:c}}r(1730);const u=c(l,e,[],!1,null,null,null).exports;var d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",{staticClass:"field-type-template"},[r("span",{staticClass:"field-type-template--icon",attrs:{title:e.value.title},domProps:{innerHTML:e._s(e.value.icon)}})])};d._withStripped=!0;r(2017);const f={item:c({name:"field_type--item",props:["value","full-entry","entry-id"]},d,[],!1,null,null,null).exports};function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}(0,wp.hooks.addFilter)("jet.fb.admin.table.form-fields","jet-form-builder",(function(e){return e.push(f),e}));var h=JetFBStore,g=h.BaseStore,b=h.SingleMetaBoxesPlugin,y=h.NoticesPlugin;(0,window.JetFBActions.renderCurrentPage)(u,{store:new Vuex.Store(v(v({},g),{},{plugins:[b,y]}))})})()})();