!function(){"use strict";var r={n:function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},d:function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},o:function(r,e){return Object.prototype.hasOwnProperty.call(r,e)}},e=window.ctEvents,t=r.n(e),o=window.blocksyCustomizerSync;function n(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function i(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,o)}return t}function c(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){a(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function a(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}t().on("ct:customizer:sync:collect-variable-descriptors",(function(r){var e,t;r.result=c(c(c({},r.result),{},(a(e={},"".concat(l,"_filter_items_horizontal_spacing"),{selector:(0,o.applyPrefixFor)(".ct-dynamic-filter",l),variable:"items-horizontal-spacing",responsive:!0,unit:"px"}),a(e,"".concat(l,"_filter_items_vertical_spacing"),{selector:(0,o.applyPrefixFor)(".ct-dynamic-filter",l),variable:"items-vertical-spacing",responsive:!0,unit:"px"}),a(e,"".concat(l,"_filter_container_spacing"),{selector:(0,o.applyPrefixFor)(".ct-dynamic-filter",l),variable:"container-spacing",responsive:!0,unit:"px"}),a(e,"".concat(l,"_horizontal_alignment"),{selector:(0,o.applyPrefixFor)(".ct-dynamic-filter",l),variable:"filter-items-alignment",unit:"",responsive:!0}),e),(0,o.typographyOption)({id:"".concat(l,"_filter_font"),selector:(0,o.applyPrefixFor)(".ct-dynamic-filter",l)})),{},(a(t={},"".concat(l,"_filter_font_color"),[{selector:(0,o.applyPrefixFor)(".ct-dynamic-filter",l),variable:"linkInitialColor",type:"color:default"},{selector:(0,o.applyPrefixFor)(".ct-dynamic-filter",l),variable:"linkHoverColor",type:"color:hover"}]),a(t,"".concat(l,"_filter_button_color"),[{selector:(0,o.applyPrefixFor)(".ct-dynamic-filter",l),variable:"buttonInitialColor",type:"color:default"},{selector:(0,o.applyPrefixFor)(".ct-dynamic-filter",l),variable:"buttonHoverColor",type:"color:hover"}]),a(t,"".concat(l,"_filter_button_padding"),{selector:(0,o.applyPrefixFor)(".ct-dynamic-filter",l),type:"spacing",variable:"padding",responsive:!0,unit:""}),a(t,"".concat(l,"_filter_button_border_radius"),{selector:(0,o.applyPrefixFor)(".ct-dynamic-filter",l),type:"spacing",variable:"border-radius",responsive:!0}),t))}));var l=(0,o.getPrefixFor)({allowed_prefixes:["blog","woo_categories"],default_prefix:"blog"});function s(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=r[t];return o}function p(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,o)}return t}function f(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){u(r,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))}))}return r}function u(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}(0,o.watchOptionsWithPrefix)({getPrefix:function(){return l},getOptionsForPrefix:function(){return["".concat(l,"_filter_visibility"),"".concat(l,"_filter_type")]},render:function(){var r;(r=document.querySelectorAll(".ct-dynamic-filter"),function(r){if(Array.isArray(r))return n(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return n(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(r){(0,o.responsiveClassesFor)((0,o.getOptionFor)("filter_visibility",l),r),r.closest("main").classList.add("ct-no-transition"),requestAnimationFrame((function(){r.dataset.type=(0,o.getOptionFor)("filter_type",l),setTimeout((function(){r.closest("main").classList.remove("ct-no-transition")}))}))}))}});var y=(0,o.getPrefixFor)();t().on("ct:customizer:sync:collect-variable-descriptors",(function(r){var e;r.result=f(f({},r.result),{},(u(e={},"".concat(y,"_read_progress_height"),[{selector:(0,o.applyPrefixFor)(".ct-read-progress-bar",y),variable:"progress-bar-height",unit:"px"}]),u(e,"".concat(y,"_progress_bar_filled_color"),[{selector:(0,o.applyPrefixFor)(".ct-read-progress-bar",y),variable:"progress-bar-scroll",type:"color:default",responsive:!0}]),u(e,"".concat(y,"_progress_bar_background_color"),[{selector:(0,o.applyPrefixFor)(".ct-read-progress-bar",y),variable:"progress-bar-background",type:"color:default",responsive:!0}]),e))})),(0,o.watchOptionsWithPrefix)({getPrefix:function(){return y},getOptionsForPrefix:function(){return["".concat(y,"_read_progress_visibility"),"".concat(y,"_has_auto_hide")]},render:function(){var r;(r=document.querySelectorAll(".ct-read-progress-bar"),function(r){if(Array.isArray(r))return s(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||function(r,e){if(r){if("string"==typeof r)return s(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(r,e):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(r){(0,o.responsiveClassesFor)((0,o.getOptionFor)("read_progress_visibility",y),r),r.classList.remove("ct-auto-hide"),"yes"===(0,o.getOptionFor)("has_auto_hide",y)&&r.classList.add("ct-auto-hide")}))}})}();