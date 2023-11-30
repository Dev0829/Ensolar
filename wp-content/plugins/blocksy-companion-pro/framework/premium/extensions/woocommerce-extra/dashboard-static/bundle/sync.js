/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "blocksy-customizer-sync":
/*!***********************************************!*\
  !*** external "window.blocksyCustomizerSync" ***!
  \***********************************************/
/***/ (function(module) {

module.exports = window.blocksyCustomizerSync;

/***/ }),

/***/ "ct-events":
/*!**********************************!*\
  !*** external "window.ctEvents" ***!
  \**********************************/
/***/ (function(module) {

module.exports = window.ctEvents;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************************************************************************!*\
  !*** ./framework/premium/extensions/woocommerce-extra/dashboard-static/js/sync.js ***!
  \************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var blocksy_customizer_sync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! blocksy-customizer-sync */ "blocksy-customizer-sync");
/* harmony import */ var blocksy_customizer_sync__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(blocksy_customizer_sync__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ct_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ct-events */ "ct-events");
/* harmony import */ var ct_events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ct_events__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



ct_events__WEBPACK_IMPORTED_MODULE_1___default().on('ct:customizer:sync:collect-variable-descriptors', function (allVariables) {
  var coreWooSingleDescriptors = allVariables.result.woo_single_layout;
  allVariables.result = _objectSpread(_objectSpread({}, allVariables.result), {}, {
    woo_single_layout: function woo_single_layout(v) {
      var variables = [];
      v.map(function (layer) {
        if (layer.id === 'product_content_block') {
          variables = [].concat(_toConsumableArray(variables), [{
            selector: ".entry-summary > .ct-product-content-block[data-id=\"".concat((layer === null || layer === void 0 ? void 0 : layer.__id) || 'default', "\"]"),
            variable: 'product-element-spacing',
            responsive: true,
            unit: 'px',
            extractValue: function extractValue() {
              return layer.spacing || 10;
            }
          }]);
        } else {
          var selectorsMap = {
            product_brands: '.entry-summary > .ct-product-brands',
            product_sharebox: '.entry-summary > .ct-share-box'
          };

          if (selectorsMap[layer.id]) {
            variables = [].concat(_toConsumableArray(variables), [{
              selector: selectorsMap[layer.id],
              variable: 'product-element-spacing',
              responsive: true,
              unit: 'px',
              extractValue: function extractValue() {
                var defaultValue = 10;

                switch (layer.id) {
                  case 'product_brands':
                    defaultValue = 35;
                    break;

                  case 'product_sharebox':
                    defaultValue = 10;
                    break;

                  default:
                    break;
                }

                return layer.spacing || defaultValue;
              }
            }]);
          }
        }
      });
      var coreVariables = coreWooSingleDescriptors(v);
      return [].concat(_toConsumableArray(variables), _toConsumableArray(coreVariables));
    }
  });
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c3ktY29tcGFuaW9uL2V4dGVybmFsIHZhciBcIndpbmRvdy5ibG9ja3N5Q3VzdG9taXplclN5bmNcIiIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi9leHRlcm5hbCB2YXIgXCJ3aW5kb3cuY3RFdmVudHNcIiIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmxvY2tzeS1jb21wYW5pb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jsb2Nrc3ktY29tcGFuaW9uLy4vZnJhbWV3b3JrL3ByZW1pdW0vZXh0ZW5zaW9ucy93b29jb21tZXJjZS1leHRyYS9kYXNoYm9hcmQtc3RhdGljL2pzL3N5bmMuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuYmxvY2tzeUN1c3RvbWl6ZXJTeW5jOyIsIm1vZHVsZS5leHBvcnRzID0gd2luZG93LmN0RXZlbnRzOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xuXHRoYW5kbGVCYWNrZ3JvdW5kT3B0aW9uRm9yLFxuXHRyZXNwb25zaXZlQ2xhc3Nlc0Zvcixcblx0dHlwb2dyYXBoeU9wdGlvbixcbn0gZnJvbSAnYmxvY2tzeS1jdXN0b21pemVyLXN5bmMnXG5pbXBvcnQgY3RFdmVudHMgZnJvbSAnY3QtZXZlbnRzJ1xuXG5jdEV2ZW50cy5vbihcblx0J2N0OmN1c3RvbWl6ZXI6c3luYzpjb2xsZWN0LXZhcmlhYmxlLWRlc2NyaXB0b3JzJyxcblx0KGFsbFZhcmlhYmxlcykgPT4ge1xuXHRcdGNvbnN0IGNvcmVXb29TaW5nbGVEZXNjcmlwdG9ycyA9IGFsbFZhcmlhYmxlcy5yZXN1bHQud29vX3NpbmdsZV9sYXlvdXRcblxuXHRcdGFsbFZhcmlhYmxlcy5yZXN1bHQgPSB7XG5cdFx0XHQuLi5hbGxWYXJpYWJsZXMucmVzdWx0LFxuXG5cdFx0XHR3b29fc2luZ2xlX2xheW91dDogKHYpID0+IHtcblx0XHRcdFx0bGV0IHZhcmlhYmxlcyA9IFtdXG5cdFx0XHRcdHYubWFwKChsYXllcikgPT4ge1xuXHRcdFx0XHRcdGlmIChsYXllci5pZCA9PT0gJ3Byb2R1Y3RfY29udGVudF9ibG9jaycpIHtcblx0XHRcdFx0XHRcdHZhcmlhYmxlcyA9IFtcblx0XHRcdFx0XHRcdFx0Li4udmFyaWFibGVzLFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0b3I6IGAuZW50cnktc3VtbWFyeSA+IC5jdC1wcm9kdWN0LWNvbnRlbnQtYmxvY2tbZGF0YS1pZD1cIiR7XG5cdFx0XHRcdFx0XHRcdFx0XHRsYXllcj8uX19pZCB8fCAnZGVmYXVsdCdcblx0XHRcdFx0XHRcdFx0XHR9XCJdYCxcblx0XHRcdFx0XHRcdFx0XHR2YXJpYWJsZTogJ3Byb2R1Y3QtZWxlbWVudC1zcGFjaW5nJyxcblx0XHRcdFx0XHRcdFx0XHRyZXNwb25zaXZlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdHVuaXQ6ICdweCcsXG5cdFx0XHRcdFx0XHRcdFx0ZXh0cmFjdFZhbHVlOiAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbGF5ZXIuc3BhY2luZyB8fCAxMFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxldCBzZWxlY3RvcnNNYXAgPSB7XG5cdFx0XHRcdFx0XHRcdHByb2R1Y3RfYnJhbmRzOlxuXHRcdFx0XHRcdFx0XHRcdCcuZW50cnktc3VtbWFyeSA+IC5jdC1wcm9kdWN0LWJyYW5kcycsXG5cdFx0XHRcdFx0XHRcdHByb2R1Y3Rfc2hhcmVib3g6ICcuZW50cnktc3VtbWFyeSA+IC5jdC1zaGFyZS1ib3gnLFxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoc2VsZWN0b3JzTWFwW2xheWVyLmlkXSkge1xuXHRcdFx0XHRcdFx0XHR2YXJpYWJsZXMgPSBbXG5cdFx0XHRcdFx0XHRcdFx0Li4udmFyaWFibGVzLFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdG9yOiBzZWxlY3RvcnNNYXBbbGF5ZXIuaWRdLFxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFibGU6ICdwcm9kdWN0LWVsZW1lbnQtc3BhY2luZycsXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXNwb25zaXZlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0dW5pdDogJ3B4Jyxcblx0XHRcdFx0XHRcdFx0XHRcdGV4dHJhY3RWYWx1ZTogKCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRsZXQgZGVmYXVsdFZhbHVlID0gMTBcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGxheWVyLmlkKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAncHJvZHVjdF9icmFuZHMnOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlID0gMzVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSAncHJvZHVjdF9zaGFyZWJveCc6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWUgPSAxMFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBsYXllci5zcGFjaW5nIHx8IGRlZmF1bHRWYWx1ZVxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdGNvbnN0IGNvcmVWYXJpYWJsZXMgPSBjb3JlV29vU2luZ2xlRGVzY3JpcHRvcnModilcblxuXHRcdFx0XHRyZXR1cm4gWy4uLnZhcmlhYmxlcywgLi4uY29yZVZhcmlhYmxlc11cblx0XHRcdH0sXG5cdFx0fVxuXHR9XG4pXG4iXSwibmFtZXMiOlsiaGFuZGxlQmFja2dyb3VuZE9wdGlvbkZvciIsInJlc3BvbnNpdmVDbGFzc2VzRm9yIiwidHlwb2dyYXBoeU9wdGlvbiIsImN0RXZlbnRzIiwib24iLCJhbGxWYXJpYWJsZXMiLCJjb3JlV29vU2luZ2xlRGVzY3JpcHRvcnMiLCJyZXN1bHQiLCJ3b29fc2luZ2xlX2xheW91dCIsInYiLCJ2YXJpYWJsZXMiLCJtYXAiLCJsYXllciIsImlkIiwic2VsZWN0b3IiLCJfX2lkIiwidmFyaWFibGUiLCJyZXNwb25zaXZlIiwidW5pdCIsImV4dHJhY3RWYWx1ZSIsInNwYWNpbmciLCJzZWxlY3RvcnNNYXAiLCJwcm9kdWN0X2JyYW5kcyIsInByb2R1Y3Rfc2hhcmVib3giLCJkZWZhdWx0VmFsdWUiLCJjb3JlVmFyaWFibGVzIl0sInNvdXJjZVJvb3QiOiIifQ==