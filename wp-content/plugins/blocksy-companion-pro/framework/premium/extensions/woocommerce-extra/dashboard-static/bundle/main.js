/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./framework/premium/extensions/woocommerce-extra/dashboard-static/js/EditSettings.js":
/*!********************************************************************************************!*\
  !*** ./framework/premium/extensions/woocommerce-extra/dashboard-static/js/EditSettings.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ct_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ct-events */ "ct-events");
/* harmony import */ var ct_events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ct_events__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var blocksy_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blocksy-options */ "blocksy-options");
/* harmony import */ var blocksy_options__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blocksy_options__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ct_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ct-i18n */ "ct-i18n");
/* harmony import */ var ct_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ct_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_js_helpers_Overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../static/js/helpers/Overlay */ "./static/js/helpers/Overlay.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var wooExtraSettingsCache = {
  ct_enable_swatches: false,
  ct_enable_brands: false,
  ct_brands_single_slug: 'brand'
};

var EditSettings = function EditSettings() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isEditing = _useState2[0],
      setIsEditing = _useState2[1]; // details | advanced


  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('details'),
      _useState4 = _slicedToArray(_useState3, 2),
      currentTab = _useState4[0],
      setCurrentTab = _useState4[1];

  var _useState5 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(wooExtraSettingsCache),
      _useState6 = _slicedToArray(_useState5, 2),
      wooExtraSettings = _useState6[0],
      setWooExtraSettings = _useState6[1];

  var loadData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var body, response, _yield$response$json, success, data;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              body = new FormData();
              body.append('action', 'blocksy_get_woo_extra_settings');
              _context.prev = 2;
              _context.next = 5;
              return fetch(ctDashboardLocalizations.ajax_url, {
                method: 'POST',
                body: body
              });

            case 5:
              response = _context.sent;

              if (!(response.status === 200)) {
                _context.next = 13;
                break;
              }

              _context.next = 9;
              return response.json();

            case 9:
              _yield$response$json = _context.sent;
              success = _yield$response$json.success;
              data = _yield$response$json.data;

              if (success) {
                wooExtraSettingsCache = data.settings;
                setWooExtraSettings(data.settings);
              }

            case 13:
              _context.next = 17;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](2);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 15]]);
    }));

    return function loadData() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleSave = function handleSave() {
    wp.ajax.send({
      url: "".concat(wp.ajax.settings.url, "?action=blocksy_update_woo_extra_settings"),
      contentType: 'application/json',
      data: JSON.stringify(wooExtraSettings)
    }).then(function () {
      // location.reload()
      setIsEditing(false);
    });
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    loadData();
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "ct-button ct-config-btn",
    "data-button": "white",
    title: (0,ct_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Edit Settings', 'blocksy-companion'),
    onClick: function onClick() {
      return setIsEditing(true);
    }
  }, (0,ct_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Configure', 'blocksy-companion')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_static_js_helpers_Overlay__WEBPACK_IMPORTED_MODULE_5__["default"], {
    items: isEditing,
    onDismiss: function onDismiss() {
      return setIsEditing(false);
    },
    className: 'ct-whitelabel-modal',
    render: function render() {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ct-modal-content')
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, (0,ct_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Woocommerce Extra Settings', 'blocksy-companion')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "ct-options-container ct-tabs-scroll"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ct-tabs')
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, ['details', 'advanced'].map(function (tab) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
          key: tab,
          className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
            active: tab === currentTab
          }),
          onClick: function onClick() {
            return setCurrentTab(tab);
          }
        }, {
          details: (0,ct_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('General', 'blocksy-companion'),
          advanced: (0,ct_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Advanced', 'blocksy-companion')
        }[tab]);
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "ct-current-tab"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
        onClick: function onClick() {
          return setWooExtraSettings(_objectSpread(_objectSpread({}, wooExtraSettings), {}, {
            ct_enable_swatches: !wooExtraSettings.ct_enable_swatches
          }));
        }
      }, (0,ct_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Variation swatches', 'blocksy-companion'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(blocksy_options__WEBPACK_IMPORTED_MODULE_2__.Switch, {
        option: {
          behavior: 'boolean'
        },
        value: wooExtraSettings.ct_enable_swatches,
        onChange: function onChange() {}
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
        onClick: function onClick() {
          return setWooExtraSettings(_objectSpread(_objectSpread({}, wooExtraSettings), {}, {
            ct_enable_brands: !wooExtraSettings.ct_enable_brands
          }));
        }
      }, (0,ct_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Product Brands', 'blocksy-companion'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(blocksy_options__WEBPACK_IMPORTED_MODULE_2__.Switch, {
        option: {
          behavior: 'boolean'
        },
        value: wooExtraSettings.ct_enable_brands,
        onChange: function onChange() {}
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "ct-controls-group"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
        "data-columns": "medium:1"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(blocksy_options__WEBPACK_IMPORTED_MODULE_2__.OptionsPanel, {
        onChange: function onChange(optionId, optionValue) {
          return setWooExtraSettings(function (wooExtraSettings) {
            return _objectSpread(_objectSpread({}, wooExtraSettings), {}, _defineProperty({}, optionId, optionValue));
          });
        },
        options: {
          ct_brands_single_slug: {
            type: 'text',
            value: '',
            label: (0,ct_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Single Slug', 'blocksy-companion')
          }
        },
        value: wooExtraSettings || {},
        hasRevertButton: false
      })))))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "ct-modal-actions has-divider"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "button-primary",
        onClick: function onClick(e) {
          e.preventDefault();
          handleSave();
          ct_events__WEBPACK_IMPORTED_MODULE_1___default().trigger('blocksy_exts_sync_exts');
        }
      }, (0,ct_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Save Settings', 'blocksy-companion'))));
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EditSettings);

/***/ }),

/***/ "./framework/premium/extensions/woocommerce-extra/dashboard-static/js/WoocommerceExtra.js":
/*!************************************************************************************************!*\
  !*** ./framework/premium/extensions/woocommerce-extra/dashboard-static/js/WoocommerceExtra.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ct_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ct-i18n */ "ct-i18n");
/* harmony import */ var ct_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ct_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _EditSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditSettings */ "./framework/premium/extensions/woocommerce-extra/dashboard-static/js/EditSettings.js");
/* harmony import */ var _static_js_helpers_useExtensionReadme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../static/js/helpers/useExtensionReadme */ "./static/js/helpers/useExtensionReadme.js");
/* harmony import */ var _static_js_helpers_useActivationAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../static/js/helpers/useActivationAction */ "./static/js/helpers/useActivationAction.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var WoocommerceExtra = function WoocommerceExtra(_ref) {
  var extension = _ref.extension,
      onExtsSync = _ref.onExtsSync;

  var _useActivationAction = (0,_static_js_helpers_useActivationAction__WEBPACK_IMPORTED_MODULE_5__["default"])(extension, function () {
    return onExtsSync();
  }),
      _useActivationAction2 = _slicedToArray(_useActivationAction, 2),
      isLoading = _useActivationAction2[0],
      activationAction = _useActivationAction2[1];

  var _useExtensionReadme = (0,_static_js_helpers_useExtensionReadme__WEBPACK_IMPORTED_MODULE_4__["default"])(extension),
      _useExtensionReadme2 = _slicedToArray(_useExtensionReadme, 2),
      showReadme = _useExtensionReadme2[0],
      readme = _useExtensionReadme2[1];

  if (extension.data.locked) {
    return null;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      active: !!extension.__object
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", {
    className: "ct-extension-title"
  }, extension.config.name, isLoading && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 100 100"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "translate(50,50)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    transform: "scale(1)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "0",
    cy: "0",
    r: "50",
    fill: "#687c93"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "0",
    cy: "-26",
    r: "12",
    fill: "#ffffff",
    transform: "rotate(161.634)"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    calcMode: "linear",
    values: "0 0 0;360 0 0",
    keyTimes: "0;1",
    dur: "1s",
    begin: "0s",
    repeatCount: "indefinite"
  })))))), extension.config.description && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ct-extension-description"
  }, extension.config.description), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ct-extension-actions"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(extension.__object ? 'ct-button' : 'ct-button-primary'),
    "data-button": "white",
    disabled: isLoading,
    onClick: function onClick() {
      return activationAction();
    }
  }, extension.__object ? (0,ct_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Deactivate', 'blocksy-companion') : (0,ct_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Activate', 'blocksy-companion')), extension.__object && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_EditSettings__WEBPACK_IMPORTED_MODULE_3__["default"], null), extension.readme && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: function onClick() {
      return showReadme();
    },
    "data-button": "white",
    className: "ct-minimal-button ct-instruction"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M12,2C6.477,2,2,6.477,2,12s4.477,10,10,10s10-4.477,10-10S17.523,2,12,2z M12,17L12,17c-0.552,0-1-0.448-1-1v-4 c0-0.552,0.448-1,1-1h0c0.552,0,1,0.448,1,1v4C13,16.552,12.552,17,12,17z M12.5,9h-1C11.224,9,11,8.776,11,8.5v-1 C11,7.224,11.224,7,11.5,7h1C12.776,7,13,7.224,13,7.5v1C13,8.776,12.776,9,12.5,9z"
  })))), readme);
};

/* harmony default export */ __webpack_exports__["default"] = (WoocommerceExtra);

/***/ }),

/***/ "./static/js/DashboardContext.js":
/*!***************************************!*\
  !*** ./static/js/DashboardContext.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Consumer": function() { return /* binding */ Consumer; },
/* harmony export */   "Provider": function() { return /* binding */ Provider; }
/* harmony export */ });
var DashboardContext = window.ctDashboardLocalizations.DashboardContext;
var Provider = DashboardContext.Provider;
var Consumer = DashboardContext.Consumer;
/* harmony default export */ __webpack_exports__["default"] = (DashboardContext);

/***/ }),

/***/ "./static/js/helpers/Overlay.js":
/*!**************************************!*\
  !*** ./static/js/helpers/Overlay.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reach/dialog */ "./static/js/helpers/reach/dialog.js");
/* harmony import */ var blocksy_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! blocksy-options */ "blocksy-options");
/* harmony import */ var blocksy_options__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(blocksy_options__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ct_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ct-i18n */ "ct-i18n");
/* harmony import */ var ct_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ct_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);






var defaultIsVisible = function defaultIsVisible(i) {
  return !!i;
};

var Overlay = function Overlay(_ref) {
  var items = _ref.items,
      _ref$isVisible = _ref.isVisible,
      isVisible = _ref$isVisible === void 0 ? defaultIsVisible : _ref$isVisible,
      render = _ref.render,
      className = _ref.className,
      _onDismiss = _ref.onDismiss;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(blocksy_options__WEBPACK_IMPORTED_MODULE_2__.Transition, {
    items: items,
    onStart: function onStart() {
      return document.body.classList[isVisible(items) ? 'add' : 'remove']('ct-dashboard-overlay-open');
    },
    config: {
      duration: 200
    },
    from: {
      opacity: 0,
      y: -10
    },
    enter: {
      opacity: 1,
      y: 0
    },
    leave: {
      opacity: 0,
      y: 10
    }
  }, function (items) {
    return isVisible(items) && function (props) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reach_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogOverlay, {
        style: {
          opacity: props.opacity
        },
        container: document.querySelector('#wpbody'),
        onDismiss: function onDismiss() {
          return _onDismiss();
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reach_dialog__WEBPACK_IMPORTED_MODULE_1__.DialogContent, {
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('ct-admin-modal', className),
        style: {
          transform: "translate3d(0px, ".concat(props.y, "px, 0px)")
        }
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "close-button",
        onClick: function onClick() {
          return _onDismiss();
        }
      }, "\xD7"), render(items, props)));
    };
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Overlay);

/***/ }),

/***/ "./static/js/helpers/reach/dialog.js":
/*!*******************************************!*\
  !*** ./static/js/helpers/reach/dialog.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dialog": function() { return /* binding */ Dialog; },
/* harmony export */   "DialogContent": function() { return /* binding */ DialogContent; },
/* harmony export */   "DialogOverlay": function() { return /* binding */ DialogOverlay; }
/* harmony export */ });
/* harmony import */ var _reach_component_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/component-component */ "./node_modules/@reach/component-component/es/index.js");
/* harmony import */ var _portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portal */ "./static/js/helpers/reach/portal.js");
/* harmony import */ var _reach_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reach/utils */ "./node_modules/@reach/utils/es/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/index.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(focus_trap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var createAriaHider = function createAriaHider(dialogNode) {
  var originalValues = [];
  var rootNodes = [];
  Array.prototype.forEach.call(document.querySelectorAll('body > *'), function (node) {
    if (node === dialogNode.parentNode) {
      return;
    }

    var attr = node.getAttribute('aria-hidden');
    var alreadyHidden = attr !== null && attr !== 'false';

    if (alreadyHidden) {
      return;
    }

    originalValues.push(attr);
    rootNodes.push(node);
    node.setAttribute('aria-hidden', 'true');
  });
  return function () {
    rootNodes.forEach(function (node, index) {
      var originalValue = originalValues[index];

      if (originalValue === null) {
        node.removeAttribute('aria-hidden');
      } else {
        node.setAttribute('aria-hidden', originalValue);
      }
    });
  };
};

var k = function k() {};

var checkDialogStyles = function checkDialogStyles() {
  return (0,_reach_utils__WEBPACK_IMPORTED_MODULE_2__.checkStyles)('dialog');
};

var portalDidMount = function portalDidMount(refs, initialFocusRef) {
  refs.disposeAriaHider = createAriaHider(refs.overlayNode);
  refs.trap = focus_trap__WEBPACK_IMPORTED_MODULE_3___default()(refs.overlayNode, {
    initialFocus: initialFocusRef ? function () {
      return initialFocusRef.current;
    } : undefined,
    fallbackFocus: refs.contentNode,
    escapeDeactivates: false,
    clickOutsideDeactivates: false
  }); // refs.trap.activate()
};

var contentWillUnmount = function contentWillUnmount(_ref) {
  var refs = _ref.refs;
  refs.trap.deactivate();
  refs.disposeAriaHider();
};

var FocusContext = React.createContext();
var DialogOverlay = React.forwardRef(function (_ref2, forwardRef) {
  var container = _ref2.container,
      _ref2$isOpen = _ref2.isOpen,
      isOpen = _ref2$isOpen === void 0 ? true : _ref2$isOpen,
      _ref2$onDismiss = _ref2.onDismiss,
      onDismiss = _ref2$onDismiss === void 0 ? k : _ref2$onDismiss,
      initialFocusRef = _ref2.initialFocusRef,
      onClick = _ref2.onClick,
      onKeyDown = _ref2.onKeyDown,
      props = _objectWithoutProperties(_ref2, ["container", "isOpen", "onDismiss", "initialFocusRef", "onClick", "onKeyDown"]);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(_reach_component_component__WEBPACK_IMPORTED_MODULE_0__["default"], {
    didMount: checkDialogStyles
  }, isOpen ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(_portal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    container: container,
    "data-reach-dialog-wrapper": true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(_reach_component_component__WEBPACK_IMPORTED_MODULE_0__["default"], {
    refs: {
      overlayNode: null,
      contentNode: null
    },
    didMount: function didMount(_ref3) {
      var refs = _ref3.refs;
      portalDidMount(refs, initialFocusRef);
    },
    willUnmount: contentWillUnmount
  }, function (_ref4) {
    var refs = _ref4.refs;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(FocusContext.Provider, {
      value: function value(node) {
        return refs.contentNode = node;
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)("div", _extends({
      "data-reach-dialog-overlay": true,
      onClick: (0,_reach_utils__WEBPACK_IMPORTED_MODULE_2__.wrapEvent)(onClick, function (event) {
        event.stopPropagation();
        onDismiss();
      }),
      onKeyDown: (0,_reach_utils__WEBPACK_IMPORTED_MODULE_2__.wrapEvent)(onKeyDown, function (event) {
        if (event.key === 'Escape') {
          event.stopPropagation();
          onDismiss();
        }
      }),
      ref: function ref(node) {
        refs.overlayNode = node;
        forwardRef && forwardRef(node);
      }
    }, props)));
  })) : null);
});
DialogOverlay.propTypes = {
  initialFocusRef: function initialFocusRef() {}
};

var stopPropagation = function stopPropagation(event) {
  return event.stopPropagation();
};

var DialogContent = React.forwardRef(function (_ref5, forwardRef) {
  var onClick = _ref5.onClick,
      onKeyDown = _ref5.onKeyDown,
      props = _objectWithoutProperties(_ref5, ["onClick", "onKeyDown"]);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(FocusContext.Consumer, null, function (contentRef) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)("div", _extends({
      "aria-modal": "true",
      "data-reach-dialog-content": true,
      tabIndex: "-1",
      onClick: (0,_reach_utils__WEBPACK_IMPORTED_MODULE_2__.wrapEvent)(onClick, stopPropagation),
      ref: function ref(node) {
        contentRef(node);
        forwardRef && forwardRef(node);
      }
    }, props));
  });
});

var Dialog = function Dialog(_ref6) {
  var container = _ref6.container,
      isOpen = _ref6.isOpen,
      _ref6$onDismiss = _ref6.onDismiss,
      onDismiss = _ref6$onDismiss === void 0 ? k : _ref6$onDismiss,
      props = _objectWithoutProperties(_ref6, ["container", "isOpen", "onDismiss"]);

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(DialogOverlay, {
    container: container,
    isOpen: isOpen,
    onDismiss: onDismiss
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.createElement)(DialogContent, props));
};



/***/ }),

/***/ "./static/js/helpers/reach/portal.js":
/*!*******************************************!*\
  !*** ./static/js/helpers/reach/portal.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reach/component-component */ "./node_modules/@reach/component-component/es/index.js");



var Portal = function Portal(_ref) {
  var children = _ref.children,
      _ref$container = _ref.container,
      container = _ref$container === void 0 ? document.body : _ref$container,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'reach-portal' : _ref$type;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_reach_component_component__WEBPACK_IMPORTED_MODULE_1__["default"], {
    getRefs: function getRefs() {
      return {
        node: null
      };
    },
    didMount: function didMount(_ref2) {
      var refs = _ref2.refs,
          forceUpdate = _ref2.forceUpdate;
      var containerNode = container.hasOwnProperty('current') ? container.current : container;
      refs.node = document.createElement(type);
      containerNode.appendChild(refs.node);
      forceUpdate();
    },
    willUnmount: function willUnmount(_ref3) {
      var node = _ref3.refs.node;
      var containerNode = container.hasOwnProperty('current') ? container.current : container;

      if (containerNode) {
        containerNode.removeChild(node);
      }
    },
    render: function render(_ref4) {
      var node = _ref4.refs.node;
      return node ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createPortal)(children, node) : null;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Portal);

/***/ }),

/***/ "./static/js/helpers/useActivationAction.js":
/*!**************************************************!*\
  !*** ./static/js/helpers/useActivationAction.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ct_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ct-i18n */ "ct-i18n");
/* harmony import */ var ct_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ct_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reach/dialog */ "./static/js/helpers/reach/dialog.js");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Overlay */ "./static/js/helpers/Overlay.js");
/* harmony import */ var _DashboardContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DashboardContext */ "./static/js/DashboardContext.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var useActivationAction = function useActivationAction(extension) {
  var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isDisplayed = _useState4[0],
      setIsDisplayed = _useState4[1];

  var _useContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_DashboardContext__WEBPACK_IMPORTED_MODULE_4__["default"]),
      Link = _useContext.Link,
      history = _useContext.history;

  var is_pro = ctDashboardLocalizations.plugin_data.is_pro;

  var makeAction = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var body;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!is_pro && extension.config.pro)) {
                _context.next = 3;
                break;
              }

              setIsDisplayed(true);
              return _context.abrupt("return");

            case 3:
              body = new FormData();
              body.append('ext', extension.name);
              body.append('action', extension.__object ? 'blocksy_extension_deactivate' : 'blocksy_extension_activate');
              setIsLoading(true);
              _context.prev = 7;
              _context.next = 10;
              return fetch(ctDashboardLocalizations.ajax_url, {
                method: 'POST',
                body: body
              });

            case 10:
              if (extension.config.require_refresh) {
                location.reload();
              }

              cb();
              _context.next = 16;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](7);

            case 16:
              // await new Promise(r => setTimeout(() => r(), 1000))
              setIsLoading(false);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[7, 14]]);
    }));

    return function makeAction() {
      return _ref.apply(this, arguments);
    };
  }();

  return [isLoading, makeAction, !is_pro && extension.config.pro ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Overlay__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: isDisplayed,
    className: "ct-onboarding-modal",
    onDismiss: function onDismiss() {
      return setIsDisplayed(false);
    },
    render: function render() {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "ct-modal-content"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
        width: "55",
        height: "55",
        viewBox: "0 0 40.5 48.3"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        fill: "#2d82c8",
        d: "M33.4 29.4l7.1 12.3-7.4.6-4 6-7.3-12.9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M33.5 29.6L26 42.7l-4.2-7.3 11.6-6 .1.2zM0 41.7l7.5.6 3.9 6 7.2-12.4-11-7.3L0 41.7z",
        fill: "#2271b1"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M39.5 18.7c0 1.6-2.4 2.8-2.7 4.3-.4 1.5 1 3.8.2 5.1-.8 1.3-3.4 1.2-4.5 2.3-1.1 1.1-1 3.7-2.3 4.5-1.3.8-3.6-.6-5.1-.2-1.5.4-2.7 2.7-4.3 2.7S18 35 16.5 34.7c-1.5-.4-3.8 1-5.1.2s-1.2-3.4-2.3-4.5-3.7-1-4.5-2.3.6-3.6.2-5.1-2.7-2.7-2.7-4.3 2.4-2.8 2.7-4.3c.4-1.5-1-3.8-.2-5.1C5.4 8 8.1 8.1 9.1 7c1.1-1.1 1-3.7 2.3-4.5s3.6.6 5.1.2C18 2.4 19.2 0 20.8 0c1.6 0 2.8 2.4 4.3 2.7 1.5.4 3.8-1 5.1-.2 1.3.8 1.2 3.4 2.3 4.5 1.1 1.1 3.7 1 4.5 2.3s-.6 3.6-.2 5.1c.3 1.5 2.7 2.7 2.7 4.3z",
        fill: "#599fd9"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
        d: "M23.6 7c-6.4-1.5-12.9 2.5-14.4 8.9-.7 3.1-.2 6.3 1.5 9.1 1.7 2.7 4.3 4.6 7.4 5.4.9.2 1.9.3 2.8.3 2.2 0 4.4-.6 6.3-1.8 2.7-1.7 4.6-4.3 5.4-7.5C34 15 30 8.5 23.6 7zm7 14c-.6 2.6-2.2 4.8-4.5 6.2-2.3 1.4-5 1.8-7.6 1.2-2.6-.6-4.8-2.2-6.2-4.5-1.4-2.3-1.8-5-1.2-7.6.6-2.6 2.2-4.8 4.5-6.2 1.6-1 3.4-1.5 5.2-1.5.8 0 1.5.1 2.3.3 5.4 1.3 8.7 6.7 7.5 12.1zm-8.2-4.5l3.7.5-2.7 2.7.7 3.7-3.4-1.8-3.3 1.8.6-3.7-2.7-2.7 3.8-.5 1.6-3.4 1.7 3.4z",
        fill: "#fff"
      })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
        className: "ct-modal-title"
      }, "This is a Pro extension"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,ct_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upgrade to the Pro version and get instant access to all premium extensions, features and future updates.', 'blocksy-companion')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "ct-modal-actions has-divider",
        "data-buttons": "2"
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        onClick: function onClick(e) {
          e.preventDefault();
          setIsDisplayed(false);
          setTimeout(function () {
            history.navigate('/pro');
          }, 300);
        },
        className: "button"
      }, (0,ct_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Free vs Pro', 'blocksy')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: "https://creativethemes.com/blocksy/pricing/",
        target: "_blank",
        className: "button button-primary"
      }, (0,ct_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Upgrade Now', 'blocksy-companion'))));
    }
  }) : null];
};

/* harmony default export */ __webpack_exports__["default"] = (useActivationAction);

/***/ }),

/***/ "./static/js/helpers/useExtensionReadme.js":
/*!*************************************************!*\
  !*** ./static/js/helpers/useExtensionReadme.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reach_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reach/dialog */ "./static/js/helpers/reach/dialog.js");
/* harmony import */ var _Overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Overlay */ "./static/js/helpers/Overlay.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // import '@reach/dialog/styles.css'



var useExtensionReadme = function useExtensionReadme(extension) {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showReadme = _useState2[0],
      setIsShowingReadme = _useState2[1];

  return [function () {
    return setIsShowingReadme(true);
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Overlay__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: showReadme,
    onDismiss: function onDismiss() {
      return setIsShowingReadme(false);
    },
    render: function render() {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        className: "ct-modal-content",
        dangerouslySetInnerHTML: {
          __html: extension.readme
        }
      });
    }
  })];
};

/* harmony default export */ __webpack_exports__["default"] = (useExtensionReadme);

/***/ }),

/***/ "./node_modules/@reach/component-component/es/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@reach/component-component/es/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var cleanProps = function cleanProps(props) {
  var initialState = props.initialState,
      getInitialState = props.getInitialState,
      refs = props.refs,
      getRefs = props.getRefs,
      didMount = props.didMount,
      didUpdate = props.didUpdate,
      willUnmount = props.willUnmount,
      getSnapshotBeforeUpdate = props.getSnapshotBeforeUpdate,
      shouldUpdate = props.shouldUpdate,
      render = props.render,
      rest = _objectWithoutProperties(props, ["initialState", "getInitialState", "refs", "getRefs", "didMount", "didUpdate", "willUnmount", "getSnapshotBeforeUpdate", "shouldUpdate", "render"]);

  return rest;
};

var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component() {
    var _temp, _this, _ret;

    _classCallCheck(this, Component);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
  }

  Component.prototype.getArgs = function getArgs() {
    var state = this.state,
        props = this.props,
        setState = this._setState,
        forceUpdate = this._forceUpdate,
        refs = this._refs;

    return {
      state: state,
      props: cleanProps(props),
      refs: refs,
      setState: setState,
      forceUpdate: forceUpdate
    };
  };

  Component.prototype.componentDidMount = function componentDidMount() {
    if (this.props.didMount) this.props.didMount(this.getArgs());
  };

  Component.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props.shouldUpdate) return this.props.shouldUpdate({
      props: this.props,
      state: this.state,
      nextProps: cleanProps(nextProps),
      nextState: nextState
    });else return true;
  };

  Component.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.props.willUnmount) this.props.willUnmount({
      state: this.state,
      props: cleanProps(this.props),
      refs: this._refs
    });
  };

  Component.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.didUpdate) this.props.didUpdate(Object.assign(this.getArgs(), {
      prevProps: cleanProps(prevProps),
      prevState: prevState
    }), snapshot);
  };

  Component.prototype.getSnapshotBeforeUpdate = function getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props.getSnapshotBeforeUpdate) {
      return this.props.getSnapshotBeforeUpdate(Object.assign(this.getArgs(), {
        prevProps: cleanProps(prevProps),
        prevState: prevState
      }));
    } else {
      return null;
    }
  };

  Component.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        render = _props.render;

    return render ? render(this.getArgs()) : typeof children === "function" ? children(this.getArgs()) : children || null;
  };

  return Component;
}((react__WEBPACK_IMPORTED_MODULE_0___default().Component));

Component.defaultProps = {
  getInitialState: function getInitialState() {},
  getRefs: function getRefs() {
    return {};
  }
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.state = this.props.initialState || this.props.getInitialState(this.props);
  this._refs = this.props.refs || this.props.getRefs(this.getArgs());

  this._setState = function () {
    return _this2.setState.apply(_this2, arguments);
  };

  this._forceUpdate = function () {
    return _this2.forceUpdate.apply(_this2, arguments);
  };
};

 true ? Component.propTypes = {
  initialState: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  getInitialState: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  refs: prop_types__WEBPACK_IMPORTED_MODULE_1__.object,
  getRefs: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  didMount: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  didUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  willUnmount: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  getSnapshotBeforeUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  shouldUpdate: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  render: prop_types__WEBPACK_IMPORTED_MODULE_1__.func,
  children: (0,prop_types__WEBPACK_IMPORTED_MODULE_1__.oneOfType)([prop_types__WEBPACK_IMPORTED_MODULE_1__.func, prop_types__WEBPACK_IMPORTED_MODULE_1__.node])
} : 0;


/* harmony default export */ __webpack_exports__["default"] = (Component);

/***/ }),

/***/ "./node_modules/@reach/utils/es/index.js":
/*!***********************************************!*\
  !*** ./node_modules/@reach/utils/es/index.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "assignRef": function() { return /* binding */ assignRef; },
/* harmony export */   "checkStyles": function() { return /* binding */ checkStyles; },
/* harmony export */   "wrapEvent": function() { return /* binding */ wrapEvent; }
/* harmony export */ });
var checkedPkgs = {};

var checkStyles = function checkStyles() {};

if (true) {
  checkStyles = function checkStyles(pkg) {
    // only check once per package
    if (checkedPkgs[pkg]) return;
    checkedPkgs[pkg] = true;

    if (parseInt(window.getComputedStyle(document.body).getPropertyValue("--reach-" + pkg), 10) !== 1) {
      console.warn("@reach/" + pkg + " styles not found. If you are using a bundler like webpack or parcel include this in the entry file of your app before any of your own styles:\n\n    import \"@reach/" + pkg + "/styles.css\";\n\n  Otherwise you'll need to include them some other way:\n\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"node_modules/@reach/" + pkg + "/styles.css\" />\n\n  For more information visit https://ui.reach.tech/styling.\n  ");
    }
  };
}



var wrapEvent = function wrapEvent(theirHandler, ourHandler) {
  return function (event) {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
};

var assignRef = function assignRef(ref, value) {
  if (ref == null) return;
  if (typeof ref === "function") {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error("Cannot assign value \"" + value + "\" to ref \"" + ref + "\"");
    }
  }
};

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/focus-trap/index.js":
/*!******************************************!*\
  !*** ./node_modules/focus-trap/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var tabbable = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/index.js");
var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js");

var activeFocusDelay;

var activeFocusTraps = (function() {
  var trapQueue = [];
  return {
    activateTrap: function(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];
        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },

    deactivateTrap: function(trap) {
      var trapIndex = trapQueue.indexOf(trap);
      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
})();

function focusTrap(element, userOptions) {
  var doc = document;
  var container =
    typeof element === 'string' ? doc.querySelector(element) : element;

  var config = xtend(
    {
      returnFocusOnDeactivate: true,
      escapeDeactivates: true
    },
    userOptions
  );

  var state = {
    firstTabbableNode: null,
    lastTabbableNode: null,
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };

  var trap = {
    activate: activate,
    deactivate: deactivate,
    pause: pause,
    unpause: unpause
  };

  return trap;

  function activate(activateOptions) {
    if (state.active) return;

    updateTabbableNodes();

    state.active = true;
    state.paused = false;
    state.nodeFocusedBeforeActivation = doc.activeElement;

    var onActivate =
      activateOptions && activateOptions.onActivate
        ? activateOptions.onActivate
        : config.onActivate;
    if (onActivate) {
      onActivate();
    }

    addListeners();
    return trap;
  }

  function deactivate(deactivateOptions) {
    if (!state.active) return;

    clearTimeout(activeFocusDelay);

    removeListeners();
    state.active = false;
    state.paused = false;

    activeFocusTraps.deactivateTrap(trap);

    var onDeactivate =
      deactivateOptions && deactivateOptions.onDeactivate !== undefined
        ? deactivateOptions.onDeactivate
        : config.onDeactivate;
    if (onDeactivate) {
      onDeactivate();
    }

    var returnFocus =
      deactivateOptions && deactivateOptions.returnFocus !== undefined
        ? deactivateOptions.returnFocus
        : config.returnFocusOnDeactivate;
    if (returnFocus) {
      delay(function() {
        tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
      });
    }

    return trap;
  }

  function pause() {
    if (state.paused || !state.active) return;
    state.paused = true;
    removeListeners();
  }

  function unpause() {
    if (!state.paused || !state.active) return;
    state.paused = false;
    updateTabbableNodes();
    addListeners();
  }

  function addListeners() {
    if (!state.active) return;

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trap);

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    activeFocusDelay = delay(function() {
      tryFocus(getInitialFocusNode());
    });

    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });

    return trap;
  }

  function removeListeners() {
    if (!state.active) return;

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);

    return trap;
  }

  function getNodeForOption(optionName) {
    var optionValue = config[optionName];
    var node = optionValue;
    if (!optionValue) {
      return null;
    }
    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);
      if (!node) {
        throw new Error('`' + optionName + '` refers to no known node');
      }
    }
    if (typeof optionValue === 'function') {
      node = optionValue();
      if (!node) {
        throw new Error('`' + optionName + '` did not return a node');
      }
    }
    return node;
  }

  function getInitialFocusNode() {
    var node;
    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (container.contains(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      node = state.firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error(
        'Your focus-trap needs to have at least one focusable element'
      );
    }

    return node;
  }

  function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus');
    return node ? node : previousActiveElement;
  }

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  function checkPointerDown(e) {
    if (container.contains(e.target)) return;
    if (config.clickOutsideDeactivates) {
      deactivate({
        returnFocus: !tabbable.isFocusable(e.target)
      });
      return;
    }
    // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)
    if (config.allowOutsideClick && config.allowOutsideClick(e)) {
      return;
    }
    e.preventDefault();
  }

  // In case focus escapes the trap for some strange reason, pull it back in.
  function checkFocusIn(e) {
    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (container.contains(e.target) || e.target instanceof Document) {
      return;
    }
    e.stopImmediatePropagation();
    tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
  }

  function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      deactivate();
      return;
    }
    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  }

  // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  function checkTab(e) {
    updateTabbableNodes();
    if (e.shiftKey && e.target === state.firstTabbableNode) {
      e.preventDefault();
      tryFocus(state.lastTabbableNode);
      return;
    }
    if (!e.shiftKey && e.target === state.lastTabbableNode) {
      e.preventDefault();
      tryFocus(state.firstTabbableNode);
      return;
    }
  }

  function checkClick(e) {
    if (config.clickOutsideDeactivates) return;
    if (container.contains(e.target)) return;
    if (config.allowOutsideClick && config.allowOutsideClick(e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  }

  function updateTabbableNodes() {
    var tabbableNodes = tabbable(container);
    state.firstTabbableNode = tabbableNodes[0] || getInitialFocusNode();
    state.lastTabbableNode =
      tabbableNodes[tabbableNodes.length - 1] || getInitialFocusNode();
  }

  function tryFocus(node) {
    if (node === doc.activeElement) return;
    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }
    node.focus();
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  }
}

function isSelectableInput(node) {
  return (
    node.tagName &&
    node.tagName.toLowerCase() === 'input' &&
    typeof node.select === 'function'
  );
}

function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
}

function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
}

function delay(fn) {
  return setTimeout(fn, 0);
}

module.exports = focusTrap;


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/tabbable/index.js":
/*!****************************************!*\
  !*** ./node_modules/tabbable/index.js ***!
  \****************************************/
/***/ (function(module) {

var candidateSelectors = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
];
var candidateSelector = candidateSelectors.join(',');

var matches = typeof Element === 'undefined'
  ? function () {}
  : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

function tabbable(el, options) {
  options = options || {};

  var regularTabbables = [];
  var orderedTabbables = [];

  var candidates = el.querySelectorAll(candidateSelector);

  if (options.includeContainer) {
    if (matches.call(el, candidateSelector)) {
      candidates = Array.prototype.slice.apply(candidates);
      candidates.unshift(el);
    }
  }

  var i, candidate, candidateTabindex;
  for (i = 0; i < candidates.length; i++) {
    candidate = candidates[i];

    if (!isNodeMatchingSelectorTabbable(candidate)) continue;

    candidateTabindex = getTabindex(candidate);
    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate,
      });
    }
  }

  var tabbableNodes = orderedTabbables
    .sort(sortOrderedTabbables)
    .map(function(a) { return a.node })
    .concat(regularTabbables);

  return tabbableNodes;
}

tabbable.isTabbable = isTabbable;
tabbable.isFocusable = isFocusable;

function isNodeMatchingSelectorTabbable(node) {
  if (
    !isNodeMatchingSelectorFocusable(node)
    || isNonTabbableRadio(node)
    || getTabindex(node) < 0
  ) {
    return false;
  }
  return true;
}

function isTabbable(node) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, candidateSelector) === false) return false;
  return isNodeMatchingSelectorTabbable(node);
}

function isNodeMatchingSelectorFocusable(node) {
  if (
    node.disabled
    || isHiddenInput(node)
    || isHidden(node)
  ) {
    return false;
  }
  return true;
}

var focusableCandidateSelector = candidateSelectors.concat('iframe').join(',');
function isFocusable(node) {
  if (!node) throw new Error('No node provided');
  if (matches.call(node, focusableCandidateSelector) === false) return false;
  return isNodeMatchingSelectorFocusable(node);
}

function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);
  if (!isNaN(tabindexAttr)) return tabindexAttr;
  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  if (isContentEditable(node)) return 0;
  return node.tabIndex;
}

function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
}

function isContentEditable(node) {
  return node.contentEditable === 'true';
}

function isInput(node) {
  return node.tagName === 'INPUT';
}

function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
}

function isRadio(node) {
  return isInput(node) && node.type === 'radio';
}

function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
}

function getCheckedRadio(nodes) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked) {
      return nodes[i];
    }
  }
}

function isTabbableRadio(node) {
  if (!node.name) return true;
  // This won't account for the edge case where you have radio groups with the same
  // in separate forms on the same page.
  var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
  var checked = getCheckedRadio(radioSet);
  return !checked || checked === node;
}

function isHidden(node) {
  // offsetParent being null will allow detecting cases where an element is invisible or inside an invisible element,
  // as long as the element does not use position: fixed. For them, their visibility has to be checked directly as well.
  return node.offsetParent === null || getComputedStyle(node).visibility === 'hidden';
}

module.exports = tabbable;


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/***/ (function(module) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),

/***/ "react":
/*!*******************************!*\
  !*** external "window.React" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = window.React;

/***/ }),

/***/ "blocksy-options":
/*!****************************************!*\
  !*** external "window.blocksyOptions" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = window.blocksyOptions;

/***/ }),

/***/ "ct-events":
/*!**********************************!*\
  !*** external "window.ctEvents" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = window.ctEvents;

/***/ }),

/***/ "@wordpress/element":
/*!************************************!*\
  !*** external "window.wp.element" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window.wp.element;

/***/ }),

/***/ "ct-i18n":
/*!*********************************!*\
  !*** external "window.wp.i18n" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window.wp.i18n;

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************************************************************************!*\
  !*** ./framework/premium/extensions/woocommerce-extra/dashboard-static/js/main.js ***!
  \************************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WoocommerceExtra__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WoocommerceExtra */ "./framework/premium/extensions/woocommerce-extra/dashboard-static/js/WoocommerceExtra.js");
/* harmony import */ var ct_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ct-events */ "ct-events");
/* harmony import */ var ct_events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ct_events__WEBPACK_IMPORTED_MODULE_1__);


ct_events__WEBPACK_IMPORTED_MODULE_1___default().on('ct:extensions:card', function (_ref) {
  var CustomComponent = _ref.CustomComponent,
      extension = _ref.extension;
  if (extension.name !== 'woocommerce-extra') return;
  CustomComponent.extension = _WoocommerceExtra__WEBPACK_IMPORTED_MODULE_0__["default"];
});
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLElBQUlXLHFCQUFxQixHQUFHO0FBQzNCQyxFQUFBQSxrQkFBa0IsRUFBRSxLQURPO0FBRTNCQyxFQUFBQSxnQkFBZ0IsRUFBRSxLQUZTO0FBRzNCQyxFQUFBQSxxQkFBcUIsRUFBRTtBQUhJLENBQTVCOztBQU1BLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQSxrQkFDUVosNERBQVEsQ0FBQyxLQUFELENBRGhCO0FBQUE7QUFBQSxNQUNuQmEsU0FEbUI7QUFBQSxNQUNSQyxZQURRLGtCQUcxQjs7O0FBSDBCLG1CQUlVZCw0REFBUSxDQUFDLFNBQUQsQ0FKbEI7QUFBQTtBQUFBLE1BSW5CZSxVQUptQjtBQUFBLE1BSVBDLGFBSk87O0FBQUEsbUJBTXNCaEIsNERBQVEsQ0FDdkRRLHFCQUR1RCxDQU45QjtBQUFBO0FBQUEsTUFNbkJTLGdCQU5tQjtBQUFBLE1BTURDLG1CQU5DOztBQVUxQixNQUFNQyxRQUFRO0FBQUEsdUVBQUc7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNWQyxjQUFBQSxJQURVLEdBQ0gsSUFBSUMsUUFBSixFQURHO0FBRWhCRCxjQUFBQSxJQUFJLENBQUNFLE1BQUwsQ0FBWSxRQUFaLEVBQXNCLGdDQUF0QjtBQUZnQjtBQUFBO0FBQUEscUJBS1FDLEtBQUssQ0FBQ0Msd0JBQXdCLENBQUNDLFFBQTFCLEVBQW9DO0FBQy9EQyxnQkFBQUEsTUFBTSxFQUFFLE1BRHVEO0FBRS9ETixnQkFBQUEsSUFBSSxFQUFKQTtBQUYrRCxlQUFwQyxDQUxiOztBQUFBO0FBS1RPLGNBQUFBLFFBTFM7O0FBQUEsb0JBVVhBLFFBQVEsQ0FBQ0MsTUFBVCxLQUFvQixHQVZUO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEscUJBV2tCRCxRQUFRLENBQUNFLElBQVQsRUFYbEI7O0FBQUE7QUFBQTtBQVdOQyxjQUFBQSxPQVhNLHdCQVdOQSxPQVhNO0FBV0dDLGNBQUFBLElBWEgsd0JBV0dBLElBWEg7O0FBYWQsa0JBQUlELE9BQUosRUFBYTtBQUNadEIsZ0JBQUFBLHFCQUFxQixHQUFHdUIsSUFBSSxDQUFDQyxRQUE3QjtBQUNBZCxnQkFBQUEsbUJBQW1CLENBQUNhLElBQUksQ0FBQ0MsUUFBTixDQUFuQjtBQUNBOztBQWhCYTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJiLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFxQkEsTUFBTWMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN4QkMsSUFBQUEsRUFBRSxDQUFDQyxJQUFILENBQ0VDLElBREYsQ0FDTztBQUNMQyxNQUFBQSxHQUFHLFlBQUtILEVBQUUsQ0FBQ0MsSUFBSCxDQUFRSCxRQUFSLENBQWlCSyxHQUF0Qiw4Q0FERTtBQUVMQyxNQUFBQSxXQUFXLEVBQUUsa0JBRlI7QUFHTFAsTUFBQUEsSUFBSSxFQUFFUSxJQUFJLENBQUNDLFNBQUwsQ0FBZXZCLGdCQUFmO0FBSEQsS0FEUCxFQU1Fd0IsSUFORixDQU1PLFlBQU07QUFDWDtBQUNBM0IsTUFBQUEsWUFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNBLEtBVEY7QUFVQSxHQVhEOztBQWFBZixFQUFBQSw2REFBUyxDQUFDLFlBQU07QUFDZm9CLElBQUFBLFFBQVE7QUFDUixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsU0FDQyxrRUFBQyx3REFBRCxRQUNDO0FBQ0MsYUFBUyxFQUFDLHlCQURYO0FBRUMsbUJBQVksT0FGYjtBQUdDLFNBQUssRUFBRWIsMkNBQUUsQ0FBQyxlQUFELEVBQWtCLG1CQUFsQixDQUhWO0FBSUMsV0FBTyxFQUFFO0FBQUEsYUFBTVEsWUFBWSxDQUFDLElBQUQsQ0FBbEI7QUFBQTtBQUpWLEtBS0VSLDJDQUFFLENBQUMsV0FBRCxFQUFjLG1CQUFkLENBTEosQ0FERCxFQVNDLGtFQUFDLGtFQUFEO0FBQ0MsU0FBSyxFQUFFTyxTQURSO0FBRUMsYUFBUyxFQUFFO0FBQUEsYUFBTUMsWUFBWSxDQUFDLEtBQUQsQ0FBbEI7QUFBQSxLQUZaO0FBR0MsYUFBUyxFQUFFLHFCQUhaO0FBSUMsVUFBTSxFQUFFO0FBQUEsYUFDUDtBQUFLLGlCQUFTLEVBQUVULGlEQUFVLENBQUMsa0JBQUQ7QUFBMUIsU0FDQyw4RUFDRUMsMkNBQUUsQ0FDRiw0QkFERSxFQUVGLG1CQUZFLENBREosQ0FERCxFQVFDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0M7QUFBSyxpQkFBUyxFQUFFRCxpREFBVSxDQUFDLFNBQUQ7QUFBMUIsU0FDQyw4RUFDRSxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCcUMsR0FBeEIsQ0FBNEIsVUFBQ0MsR0FBRDtBQUFBLGVBQzVCO0FBQ0MsYUFBRyxFQUFFQSxHQUROO0FBRUMsbUJBQVMsRUFBRXRDLGlEQUFVLENBQUM7QUFDckJ1QyxZQUFBQSxNQUFNLEVBQUVELEdBQUcsS0FBSzVCO0FBREssV0FBRCxDQUZ0QjtBQUtDLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUMsYUFBYSxDQUFDMkIsR0FBRCxDQUFuQjtBQUFBO0FBTFYsV0FPRTtBQUNDRSxVQUFBQSxPQUFPLEVBQUV2QywyQ0FBRSxDQUNWLFNBRFUsRUFFVixtQkFGVSxDQURaO0FBS0N3QyxVQUFBQSxRQUFRLEVBQUV4QywyQ0FBRSxDQUNYLFVBRFcsRUFFWCxtQkFGVztBQUxiLFVBU0VxQyxHQVRGLENBUEYsQ0FENEI7QUFBQSxPQUE1QixDQURGLENBREQsRUF5QkM7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQztBQUNDLGVBQU8sRUFBRTtBQUFBLGlCQUNSekIsbUJBQW1CLGlDQUNmRCxnQkFEZTtBQUVsQlIsWUFBQUEsa0JBQWtCLEVBQ2pCLENBQUNRLGdCQUFnQixDQUFDUjtBQUhELGFBRFg7QUFBQTtBQURWLFNBUUVILDJDQUFFLENBQ0Ysb0JBREUsRUFFRixtQkFGRSxDQVJKLEVBYUMsa0VBQUMsbURBQUQ7QUFDQyxjQUFNLEVBQUU7QUFDUHlDLFVBQUFBLFFBQVEsRUFBRTtBQURILFNBRFQ7QUFJQyxhQUFLLEVBQ0o5QixnQkFBZ0IsQ0FBQ1Isa0JBTG5CO0FBT0MsZ0JBQVEsRUFBRSxvQkFBTSxDQUFFO0FBUG5CLFFBYkQsQ0FERCxFQXlCQztBQUNDLGVBQU8sRUFBRTtBQUFBLGlCQUNSUyxtQkFBbUIsaUNBQ2ZELGdCQURlO0FBRWxCUCxZQUFBQSxnQkFBZ0IsRUFDZixDQUFDTyxnQkFBZ0IsQ0FBQ1A7QUFIRCxhQURYO0FBQUE7QUFEVixTQVFFSiwyQ0FBRSxDQUNGLGdCQURFLEVBRUYsbUJBRkUsQ0FSSixFQWFDLGtFQUFDLG1EQUFEO0FBQ0MsY0FBTSxFQUFFO0FBQ1B5QyxVQUFBQSxRQUFRLEVBQUU7QUFESCxTQURUO0FBSUMsYUFBSyxFQUNKOUIsZ0JBQWdCLENBQUNQLGdCQUxuQjtBQU9DLGdCQUFRLEVBQUUsb0JBQU0sQ0FBRTtBQVBuQixRQWJELENBekJELEVBaURDO0FBQUssaUJBQVMsRUFBQztBQUFmLFNBQ0M7QUFBUyx3QkFBYTtBQUF0QixTQUNDLGtFQUFDLHlEQUFEO0FBQ0MsZ0JBQVEsRUFBRSxrQkFDVHNDLFFBRFMsRUFFVEMsV0FGUztBQUFBLGlCQUlUL0IsbUJBQW1CLENBQ2xCLFVBQUNELGdCQUFEO0FBQUEsbURBQ0lBLGdCQURKLDJCQUVFK0IsUUFGRixFQUdFQyxXQUhGO0FBQUEsV0FEa0IsQ0FKVjtBQUFBLFNBRFg7QUFhQyxlQUFPLEVBQUU7QUFDUnRDLFVBQUFBLHFCQUFxQixFQUFFO0FBQ3RCdUMsWUFBQUEsSUFBSSxFQUFFLE1BRGdCO0FBRXRCQyxZQUFBQSxLQUFLLEVBQUUsRUFGZTtBQUd0QkMsWUFBQUEsS0FBSyxFQUFFOUMsMkNBQUUsQ0FDUixhQURRLEVBRVIsbUJBRlE7QUFIYTtBQURmLFNBYlY7QUF1QkMsYUFBSyxFQUFFVyxnQkFBZ0IsSUFBSSxFQXZCNUI7QUF3QkMsdUJBQWUsRUFBRTtBQXhCbEIsUUFERCxDQURELENBakRELENBekJELENBREQsQ0FSRCxFQXFIQztBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNDO0FBQ0MsaUJBQVMsRUFBQyxnQkFEWDtBQUVDLGVBQU8sRUFBRSxpQkFBQ29DLENBQUQsRUFBTztBQUNmQSxVQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQXJCLFVBQUFBLFVBQVU7QUFFVi9CLFVBQUFBLHdEQUFBLENBQWlCLHdCQUFqQjtBQUNBO0FBUEYsU0FRRUksMkNBQUUsQ0FBQyxlQUFELEVBQWtCLG1CQUFsQixDQVJKLENBREQsQ0FySEQsQ0FETztBQUFBO0FBSlQsSUFURCxDQUREO0FBcUpBLENBck1EOztBQXVNQSwrREFBZU0sWUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM05BO0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNOEMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUErQjtBQUFBLE1BQTVCQyxTQUE0QixRQUE1QkEsU0FBNEI7QUFBQSxNQUFqQkMsVUFBaUIsUUFBakJBLFVBQWlCOztBQUFBLDZCQUNqQkgsa0ZBQW1CLENBQUNFLFNBQUQsRUFBWTtBQUFBLFdBQ3BFQyxVQUFVLEVBRDBEO0FBQUEsR0FBWixDQURGO0FBQUE7QUFBQSxNQUNoREMsU0FEZ0Q7QUFBQSxNQUNyQ0MsZ0JBRHFDOztBQUFBLDRCQUsxQk4saUZBQWtCLENBQUNHLFNBQUQsQ0FMUTtBQUFBO0FBQUEsTUFLaERJLFVBTGdEO0FBQUEsTUFLcENDLE1BTG9DOztBQU92RCxNQUFJTCxTQUFTLENBQUM1QixJQUFWLENBQWVrQyxNQUFuQixFQUEyQjtBQUMxQixXQUFPLElBQVA7QUFDQTs7QUFFRCxTQUNDO0FBQUksYUFBUyxFQUFFNUQsaURBQVUsQ0FBQztBQUFFdUMsTUFBQUEsTUFBTSxFQUFFLENBQUMsQ0FBQ2UsU0FBUyxDQUFDTztBQUF0QixLQUFEO0FBQXpCLEtBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUNFUCxTQUFTLENBQUNRLE1BQVYsQ0FBaUJDLElBRG5CLEVBR0VQLFNBQVMsSUFDVDtBQUFLLFNBQUssRUFBQyxJQUFYO0FBQWdCLFVBQU0sRUFBQyxJQUF2QjtBQUE0QixXQUFPLEVBQUM7QUFBcEMsS0FDQztBQUFHLGFBQVMsRUFBQztBQUFiLEtBQ0M7QUFBRyxhQUFTLEVBQUM7QUFBYixLQUNDO0FBQVEsTUFBRSxFQUFDLEdBQVg7QUFBZSxNQUFFLEVBQUMsR0FBbEI7QUFBc0IsS0FBQyxFQUFDLElBQXhCO0FBQTZCLFFBQUksRUFBQztBQUFsQyxJQURELEVBRUM7QUFDQyxNQUFFLEVBQUMsR0FESjtBQUVDLE1BQUUsRUFBQyxLQUZKO0FBR0MsS0FBQyxFQUFDLElBSEg7QUFJQyxRQUFJLEVBQUMsU0FKTjtBQUtDLGFBQVMsRUFBQztBQUxYLEtBTUM7QUFDQyxpQkFBYSxFQUFDLFdBRGY7QUFFQyxRQUFJLEVBQUMsUUFGTjtBQUdDLFlBQVEsRUFBQyxRQUhWO0FBSUMsVUFBTSxFQUFDLGVBSlI7QUFLQyxZQUFRLEVBQUMsS0FMVjtBQU1DLE9BQUcsRUFBQyxJQU5MO0FBT0MsU0FBSyxFQUFDLElBUFA7QUFRQyxlQUFXLEVBQUM7QUFSYixJQU5ELENBRkQsQ0FERCxDQURELENBSkYsQ0FERCxFQWdDRUYsU0FBUyxDQUFDUSxNQUFWLENBQWlCRSxXQUFqQixJQUNBO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRVYsU0FBUyxDQUFDUSxNQUFWLENBQWlCRSxXQURuQixDQWpDRixFQXNDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0M7QUFDQyxhQUFTLEVBQUVoRSxpREFBVSxDQUNwQnNELFNBQVMsQ0FBQ08sUUFBVixHQUFxQixXQUFyQixHQUFtQyxtQkFEZixDQUR0QjtBQUlDLG1CQUFZLE9BSmI7QUFLQyxZQUFRLEVBQUVMLFNBTFg7QUFNQyxXQUFPLEVBQUU7QUFBQSxhQUFNQyxnQkFBZ0IsRUFBdEI7QUFBQTtBQU5WLEtBT0VILFNBQVMsQ0FBQ08sUUFBVixHQUNFNUQsMkNBQUUsQ0FBQyxZQUFELEVBQWUsbUJBQWYsQ0FESixHQUVFQSwyQ0FBRSxDQUFDLFVBQUQsRUFBYSxtQkFBYixDQVROLENBREQsRUFhRXFELFNBQVMsQ0FBQ08sUUFBVixJQUFzQixrRUFBQyxxREFBRCxPQWJ4QixFQWVFUCxTQUFTLENBQUNLLE1BQVYsSUFDQTtBQUNDLFdBQU8sRUFBRTtBQUFBLGFBQU1ELFVBQVUsRUFBaEI7QUFBQSxLQURWO0FBRUMsbUJBQVksT0FGYjtBQUdDLGFBQVMsRUFBQztBQUhYLEtBSUM7QUFBSyxTQUFLLEVBQUMsSUFBWDtBQUFnQixVQUFNLEVBQUMsSUFBdkI7QUFBNEIsV0FBTyxFQUFDO0FBQXBDLEtBQ0M7QUFBTSxLQUFDLEVBQUM7QUFBUixJQURELENBSkQsQ0FoQkYsQ0F0Q0QsRUFnRUVDLE1BaEVGLENBREQ7QUFvRUEsQ0EvRUQ7O0FBaUZBLCtEQUFlTixnQkFBZjs7Ozs7Ozs7Ozs7Ozs7OztBQy9GQSxJQUFNWSxnQkFBZ0IsR0FBR0MsTUFBTSxDQUFDL0Msd0JBQVAsQ0FBZ0M4QyxnQkFBekQ7QUFFTyxJQUFNRSxRQUFRLEdBQUdGLGdCQUFnQixDQUFDRSxRQUFsQztBQUNBLElBQU1DLFFBQVEsR0FBR0gsZ0JBQWdCLENBQUNHLFFBQWxDO0FBRVAsK0RBQWVILGdCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQVNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1VLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsQ0FBRDtBQUFBLFNBQU8sQ0FBQyxDQUFDQSxDQUFUO0FBQUEsQ0FBekI7O0FBRUEsSUFBTTFFLE9BQU8sR0FBRyxTQUFWQSxPQUFVLE9BTVY7QUFBQSxNQUxMMkUsS0FLSyxRQUxMQSxLQUtLO0FBQUEsNEJBSkxDLFNBSUs7QUFBQSxNQUpMQSxTQUlLLCtCQUpPSCxnQkFJUDtBQUFBLE1BSExJLE1BR0ssUUFITEEsTUFHSztBQUFBLE1BRkxDLFNBRUssUUFGTEEsU0FFSztBQUFBLE1BRExDLFVBQ0ssUUFETEEsU0FDSztBQUNMLFNBQ0Msa0VBQUMsdURBQUQ7QUFDQyxTQUFLLEVBQUVKLEtBRFI7QUFFQyxXQUFPLEVBQUU7QUFBQSxhQUNSSyxRQUFRLENBQUNuRSxJQUFULENBQWNvRSxTQUFkLENBQXdCTCxTQUFTLENBQUNELEtBQUQsQ0FBVCxHQUFtQixLQUFuQixHQUEyQixRQUFuRCxFQUNDLDJCQURELENBRFE7QUFBQSxLQUZWO0FBT0MsVUFBTSxFQUFFO0FBQUVPLE1BQUFBLFFBQVEsRUFBRTtBQUFaLEtBUFQ7QUFRQyxRQUFJLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFLENBQVg7QUFBY0MsTUFBQUEsQ0FBQyxFQUFFLENBQUM7QUFBbEIsS0FSUDtBQVNDLFNBQUssRUFBRTtBQUFFRCxNQUFBQSxPQUFPLEVBQUUsQ0FBWDtBQUFjQyxNQUFBQSxDQUFDLEVBQUU7QUFBakIsS0FUUjtBQVVDLFNBQUssRUFBRTtBQUFFRCxNQUFBQSxPQUFPLEVBQUUsQ0FBWDtBQUFjQyxNQUFBQSxDQUFDLEVBQUU7QUFBakI7QUFWUixLQVdFLFVBQUNULEtBQUQ7QUFBQSxXQUNBQyxTQUFTLENBQUNELEtBQUQsQ0FBVCxJQUNDLFVBQUNVLEtBQUQ7QUFBQSxhQUNBLGtFQUFDLHdEQUFEO0FBQ0MsYUFBSyxFQUFFO0FBQUVGLFVBQUFBLE9BQU8sRUFBRUUsS0FBSyxDQUFDRjtBQUFqQixTQURSO0FBRUMsaUJBQVMsRUFBRUgsUUFBUSxDQUFDTSxhQUFULENBQXVCLFNBQXZCLENBRlo7QUFHQyxpQkFBUyxFQUFFO0FBQUEsaUJBQU1QLFVBQVMsRUFBZjtBQUFBO0FBSFosU0FJQyxrRUFBQyx3REFBRDtBQUNDLGlCQUFTLEVBQUVqRixpREFBVSxDQUFDLGdCQUFELEVBQW1CZ0YsU0FBbkIsQ0FEdEI7QUFFQyxhQUFLLEVBQUU7QUFDTlMsVUFBQUEsU0FBUyw2QkFBc0JGLEtBQUssQ0FBQ0QsQ0FBNUI7QUFESDtBQUZSLFNBS0M7QUFDQyxpQkFBUyxFQUFDLGNBRFg7QUFFQyxlQUFPLEVBQUU7QUFBQSxpQkFBTUwsVUFBUyxFQUFmO0FBQUE7QUFGVixnQkFMRCxFQVdFRixNQUFNLENBQUNGLEtBQUQsRUFBUVUsS0FBUixDQVhSLENBSkQsQ0FEQTtBQUFBLEtBRkQ7QUFBQSxHQVhGLENBREQ7QUFxQ0EsQ0E1Q0Q7O0FBOENBLCtEQUFlckYsT0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0EsSUFBSTRGLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsVUFBVSxFQUFJO0FBQ25DLE1BQUlDLGNBQWMsR0FBRyxFQUFyQjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUVBQyxFQUFBQSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLE9BQWhCLENBQXdCQyxJQUF4QixDQUNDbkIsUUFBUSxDQUFDb0IsZ0JBQVQsQ0FBMEIsVUFBMUIsQ0FERCxFQUVDLFVBQUFDLElBQUksRUFBSTtBQUNQLFFBQUlBLElBQUksS0FBS1IsVUFBVSxDQUFDUyxVQUF4QixFQUFvQztBQUNuQztBQUNBOztBQUNELFFBQUlDLElBQUksR0FBR0YsSUFBSSxDQUFDRyxZQUFMLENBQWtCLGFBQWxCLENBQVg7QUFDQSxRQUFJQyxhQUFhLEdBQUdGLElBQUksS0FBSyxJQUFULElBQWlCQSxJQUFJLEtBQUssT0FBOUM7O0FBQ0EsUUFBSUUsYUFBSixFQUFtQjtBQUNsQjtBQUNBOztBQUNEWCxJQUFBQSxjQUFjLENBQUNZLElBQWYsQ0FBb0JILElBQXBCO0FBQ0FSLElBQUFBLFNBQVMsQ0FBQ1csSUFBVixDQUFlTCxJQUFmO0FBQ0FBLElBQUFBLElBQUksQ0FBQ00sWUFBTCxDQUFrQixhQUFsQixFQUFpQyxNQUFqQztBQUNBLEdBZEY7QUFpQkEsU0FBTyxZQUFNO0FBQ1paLElBQUFBLFNBQVMsQ0FBQ0csT0FBVixDQUFrQixVQUFDRyxJQUFELEVBQU9PLEtBQVAsRUFBaUI7QUFDbEMsVUFBSUMsYUFBYSxHQUFHZixjQUFjLENBQUNjLEtBQUQsQ0FBbEM7O0FBQ0EsVUFBSUMsYUFBYSxLQUFLLElBQXRCLEVBQTRCO0FBQzNCUixRQUFBQSxJQUFJLENBQUNTLGVBQUwsQ0FBcUIsYUFBckI7QUFDQSxPQUZELE1BRU87QUFDTlQsUUFBQUEsSUFBSSxDQUFDTSxZQUFMLENBQWtCLGFBQWxCLEVBQWlDRSxhQUFqQztBQUNBO0FBQ0QsS0FQRDtBQVFBLEdBVEQ7QUFVQSxDQS9CRDs7QUFpQ0EsSUFBSUUsQ0FBQyxHQUFHLFNBQUpBLENBQUksR0FBTSxDQUFFLENBQWhCOztBQUVBLElBQUlDLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxTQUFNdkIseURBQVcsQ0FBQyxRQUFELENBQWpCO0FBQUEsQ0FBeEI7O0FBRUEsSUFBSXdCLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsSUFBRCxFQUFPQyxlQUFQLEVBQTJCO0FBQy9DRCxFQUFBQSxJQUFJLENBQUNFLGdCQUFMLEdBQXdCeEIsZUFBZSxDQUFDc0IsSUFBSSxDQUFDRyxXQUFOLENBQXZDO0FBQ0FILEVBQUFBLElBQUksQ0FBQ0ksSUFBTCxHQUFZM0IsaURBQWUsQ0FBQ3VCLElBQUksQ0FBQ0csV0FBTixFQUFtQjtBQUM3Q0UsSUFBQUEsWUFBWSxFQUFFSixlQUFlLEdBQzFCO0FBQUEsYUFBTUEsZUFBZSxDQUFDSyxPQUF0QjtBQUFBLEtBRDBCLEdBRTFCQyxTQUgwQztBQUk3Q0MsSUFBQUEsYUFBYSxFQUFFUixJQUFJLENBQUNTLFdBSnlCO0FBSzdDQyxJQUFBQSxpQkFBaUIsRUFBRSxLQUwwQjtBQU03Q0MsSUFBQUEsdUJBQXVCLEVBQUU7QUFOb0IsR0FBbkIsQ0FBM0IsQ0FGK0MsQ0FVL0M7QUFDQSxDQVhEOztBQWFBLElBQUlDLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsT0FBYztBQUFBLE1BQVhaLElBQVcsUUFBWEEsSUFBVztBQUN0Q0EsRUFBQUEsSUFBSSxDQUFDSSxJQUFMLENBQVVTLFVBQVY7QUFDQWIsRUFBQUEsSUFBSSxDQUFDRSxnQkFBTDtBQUNBLENBSEQ7O0FBS0EsSUFBSVksWUFBWSxHQUFHQyxLQUFLLENBQUM3RCxhQUFOLEVBQW5CO0FBRUEsSUFBSUUsYUFBYSxHQUFHMkQsS0FBSyxDQUFDQyxVQUFOLENBQ25CLGlCQVVDQSxVQVZEO0FBQUEsTUFFRUMsU0FGRixTQUVFQSxTQUZGO0FBQUEsMkJBR0VDLE1BSEY7QUFBQSxNQUdFQSxNQUhGLDZCQUdXLElBSFg7QUFBQSw4QkFJRXJELFNBSkY7QUFBQSxNQUlFQSxTQUpGLGdDQUljZ0MsQ0FKZDtBQUFBLE1BS0VJLGVBTEYsU0FLRUEsZUFMRjtBQUFBLE1BTUVrQixPQU5GLFNBTUVBLE9BTkY7QUFBQSxNQU9FQyxTQVBGLFNBT0VBLFNBUEY7QUFBQSxNQVFLakQsS0FSTDs7QUFBQSxTQVlDLGtFQUFDLGtFQUFEO0FBQVcsWUFBUSxFQUFFMkI7QUFBckIsS0FDRW9CLE1BQU0sR0FDTixrRUFBQywrQ0FBRDtBQUFRLGFBQVMsRUFBRUQsU0FBbkI7QUFBOEI7QUFBOUIsS0FDQyxrRUFBQyxrRUFBRDtBQUNDLFFBQUksRUFBRTtBQUFFZCxNQUFBQSxXQUFXLEVBQUUsSUFBZjtBQUFxQk0sTUFBQUEsV0FBVyxFQUFFO0FBQWxDLEtBRFA7QUFFQyxZQUFRLEVBQUUseUJBQWM7QUFBQSxVQUFYVCxJQUFXLFNBQVhBLElBQVc7QUFDdkJELE1BQUFBLGNBQWMsQ0FBQ0MsSUFBRCxFQUFPQyxlQUFQLENBQWQ7QUFDQSxLQUpGO0FBS0MsZUFBVyxFQUFFVztBQUxkLEtBTUU7QUFBQSxRQUFHWixJQUFILFNBQUdBLElBQUg7QUFBQSxXQUNBLGtFQUFDLFlBQUQsQ0FBYyxRQUFkO0FBQ0MsV0FBSyxFQUFFLGVBQUFiLElBQUk7QUFBQSxlQUFLYSxJQUFJLENBQUNTLFdBQUwsR0FBbUJ0QixJQUF4QjtBQUFBO0FBRFosT0FFQztBQUNDLHVDQUREO0FBRUMsYUFBTyxFQUFFWCx1REFBUyxDQUFDMkMsT0FBRCxFQUFVLFVBQUFFLEtBQUssRUFBSTtBQUNwQ0EsUUFBQUEsS0FBSyxDQUFDQyxlQUFOO0FBQ0F6RCxRQUFBQSxTQUFTO0FBQ1QsT0FIaUIsQ0FGbkI7QUFNQyxlQUFTLEVBQUVXLHVEQUFTLENBQUM0QyxTQUFELEVBQVksVUFBQUMsS0FBSyxFQUFJO0FBQ3hDLFlBQUlBLEtBQUssQ0FBQ0UsR0FBTixLQUFjLFFBQWxCLEVBQTRCO0FBQzNCRixVQUFBQSxLQUFLLENBQUNDLGVBQU47QUFDQXpELFVBQUFBLFNBQVM7QUFDVDtBQUNELE9BTG1CLENBTnJCO0FBWUMsU0FBRyxFQUFFLGFBQUFzQixJQUFJLEVBQUk7QUFDWmEsUUFBQUEsSUFBSSxDQUFDRyxXQUFMLEdBQW1CaEIsSUFBbkI7QUFDQTZCLFFBQUFBLFVBQVUsSUFBSUEsVUFBVSxDQUFDN0IsSUFBRCxDQUF4QjtBQUNBO0FBZkYsT0FnQktoQixLQWhCTCxFQUZELENBREE7QUFBQSxHQU5GLENBREQsQ0FETSxHQWlDSCxJQWxDTCxDQVpEO0FBQUEsQ0FEbUIsQ0FBcEI7QUFvREFmLGFBQWEsQ0FBQ29FLFNBQWQsR0FBMEI7QUFDekJ2QixFQUFBQSxlQUFlLEVBQUUsMkJBQU0sQ0FBRTtBQURBLENBQTFCOztBQUlBLElBQUlxQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFELEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLGVBQU4sRUFBSjtBQUFBLENBQTNCOztBQUVBLElBQUlqRSxhQUFhLEdBQUcwRCxLQUFLLENBQUNDLFVBQU4sQ0FDbkIsaUJBQW1DQSxVQUFuQztBQUFBLE1BQUdHLE9BQUgsU0FBR0EsT0FBSDtBQUFBLE1BQVlDLFNBQVosU0FBWUEsU0FBWjtBQUFBLE1BQTBCakQsS0FBMUI7O0FBQUEsU0FDQyxrRUFBQyxZQUFELENBQWMsUUFBZCxRQUNFLFVBQUFzRCxVQUFVO0FBQUEsV0FDVjtBQUNDLG9CQUFXLE1BRFo7QUFFQyx1Q0FGRDtBQUdDLGNBQVEsRUFBQyxJQUhWO0FBSUMsYUFBTyxFQUFFakQsdURBQVMsQ0FBQzJDLE9BQUQsRUFBVUcsZUFBVixDQUpuQjtBQUtDLFNBQUcsRUFBRSxhQUFBbkMsSUFBSSxFQUFJO0FBQ1pzQyxRQUFBQSxVQUFVLENBQUN0QyxJQUFELENBQVY7QUFDQTZCLFFBQUFBLFVBQVUsSUFBSUEsVUFBVSxDQUFDN0IsSUFBRCxDQUF4QjtBQUNBO0FBUkYsT0FTS2hCLEtBVEwsRUFEVTtBQUFBLEdBRFosQ0FERDtBQUFBLENBRG1CLENBQXBCOztBQW9CQSxJQUFJaEIsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxNQUFHOEQsU0FBSCxTQUFHQSxTQUFIO0FBQUEsTUFBY0MsTUFBZCxTQUFjQSxNQUFkO0FBQUEsOEJBQXNCckQsU0FBdEI7QUFBQSxNQUFzQkEsU0FBdEIsZ0NBQWtDZ0MsQ0FBbEM7QUFBQSxNQUF3QzFCLEtBQXhDOztBQUFBLFNBQ1osa0VBQUMsYUFBRDtBQUFlLGFBQVMsRUFBRThDLFNBQTFCO0FBQXFDLFVBQU0sRUFBRUMsTUFBN0M7QUFBcUQsYUFBUyxFQUFFckQ7QUFBaEUsS0FDQyxrRUFBQyxhQUFELEVBQW1CTSxLQUFuQixDQURELENBRFk7QUFBQSxDQUFiOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xKQTtBQU9BOztBQUVBLElBQUlHLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsTUFDWnFELFFBRFksUUFDWkEsUUFEWTtBQUFBLDRCQUVaVixTQUZZO0FBQUEsTUFFWkEsU0FGWSwrQkFFQW5ELFFBQVEsQ0FBQ25FLElBRlQ7QUFBQSx1QkFHWjhCLElBSFk7QUFBQSxNQUdaQSxJQUhZLDBCQUdMLGNBSEs7QUFBQSxTQUtaLGtFQUFDLGtFQUFEO0FBQ0MsV0FBTyxFQUFFO0FBQUEsYUFBTztBQUFFMEQsUUFBQUEsSUFBSSxFQUFFO0FBQVIsT0FBUDtBQUFBLEtBRFY7QUFFQyxZQUFRLEVBQUUseUJBQTJCO0FBQUEsVUFBeEJhLElBQXdCLFNBQXhCQSxJQUF3QjtBQUFBLFVBQWxCNEIsV0FBa0IsU0FBbEJBLFdBQWtCO0FBQ3BDLFVBQUlDLGFBQWEsR0FBR1osU0FBUyxDQUFDYSxjQUFWLENBQXlCLFNBQXpCLElBQ2pCYixTQUFTLENBQUNYLE9BRE8sR0FFakJXLFNBRkg7QUFHQWpCLE1BQUFBLElBQUksQ0FBQ2IsSUFBTCxHQUFZckIsUUFBUSxDQUFDMUYsYUFBVCxDQUF1QnFELElBQXZCLENBQVo7QUFDQW9HLE1BQUFBLGFBQWEsQ0FBQ0UsV0FBZCxDQUEwQi9CLElBQUksQ0FBQ2IsSUFBL0I7QUFDQXlDLE1BQUFBLFdBQVc7QUFDWCxLQVRGO0FBVUMsZUFBVyxFQUFFLDRCQUF3QjtBQUFBLFVBQWJ6QyxJQUFhLFNBQXJCYSxJQUFxQixDQUFiYixJQUFhO0FBQ3BDLFVBQUkwQyxhQUFhLEdBQUdaLFNBQVMsQ0FBQ2EsY0FBVixDQUF5QixTQUF6QixJQUNqQmIsU0FBUyxDQUFDWCxPQURPLEdBRWpCVyxTQUZIOztBQUdBLFVBQUlZLGFBQUosRUFBbUI7QUFDbEJBLFFBQUFBLGFBQWEsQ0FBQ0csV0FBZCxDQUEwQjdDLElBQTFCO0FBQ0E7QUFDRCxLQWpCRjtBQWtCQyxVQUFNLEVBQUUsdUJBQXdCO0FBQUEsVUFBYkEsSUFBYSxTQUFyQmEsSUFBcUIsQ0FBYmIsSUFBYTtBQUMvQixhQUFPQSxJQUFJLEdBQUd1QyxnRUFBWSxDQUFDQyxRQUFELEVBQVd4QyxJQUFYLENBQWYsR0FBa0MsSUFBN0M7QUFDQTtBQXBCRixJQUxZO0FBQUEsQ0FBYjs7QUE2QkEsK0RBQWViLE1BQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBUUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTXRDLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsQ0FBQ0UsU0FBRCxFQUE4QjtBQUFBLE1BQWxCZ0csRUFBa0IsdUVBQWIsWUFBTSxDQUFFLENBQUs7O0FBQUEsa0JBQ3ZCM0osNERBQVEsQ0FBQyxLQUFELENBRGU7QUFBQTtBQUFBLE1BQ2xENkQsU0FEa0Q7QUFBQSxNQUN2QytGLFlBRHVDOztBQUFBLG1CQUVuQjVKLDREQUFRLENBQUMsS0FBRCxDQUZXO0FBQUE7QUFBQSxNQUVsRDZKLFdBRmtEO0FBQUEsTUFFckNDLGNBRnFDOztBQUFBLG9CQUkvQnBGLDhEQUFVLENBQUNKLHlEQUFELENBSnFCO0FBQUEsTUFJakR5RixJQUppRCxlQUlqREEsSUFKaUQ7QUFBQSxNQUkzQ0MsT0FKMkMsZUFJM0NBLE9BSjJDOztBQU16RCxNQUFNQyxNQUFNLEdBQUd6SSx3QkFBd0IsQ0FBQzBJLFdBQXpCLENBQXFDRCxNQUFwRDs7QUFFQSxNQUFNRSxVQUFVO0FBQUEsdUVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQ2QsQ0FBQ0YsTUFBRCxJQUFXdEcsU0FBUyxDQUFDUSxNQUFWLENBQWlCaUcsR0FEZDtBQUFBO0FBQUE7QUFBQTs7QUFFakJOLGNBQUFBLGNBQWMsQ0FBQyxJQUFELENBQWQ7QUFGaUI7O0FBQUE7QUFPWjFJLGNBQUFBLElBUFksR0FPTCxJQUFJQyxRQUFKLEVBUEs7QUFTbEJELGNBQUFBLElBQUksQ0FBQ0UsTUFBTCxDQUFZLEtBQVosRUFBbUJxQyxTQUFTLENBQUNTLElBQTdCO0FBQ0FoRCxjQUFBQSxJQUFJLENBQUNFLE1BQUwsQ0FDQyxRQURELEVBRUNxQyxTQUFTLENBQUNPLFFBQVYsR0FDRyw4QkFESCxHQUVHLDRCQUpKO0FBT0EwRixjQUFBQSxZQUFZLENBQUMsSUFBRCxDQUFaO0FBakJrQjtBQUFBO0FBQUEscUJBb0JYckksS0FBSyxDQUFDQyx3QkFBd0IsQ0FBQ0MsUUFBMUIsRUFBb0M7QUFDOUNDLGdCQUFBQSxNQUFNLEVBQUUsTUFEc0M7QUFFOUNOLGdCQUFBQSxJQUFJLEVBQUpBO0FBRjhDLGVBQXBDLENBcEJNOztBQUFBO0FBeUJqQixrQkFBSXVDLFNBQVMsQ0FBQ1EsTUFBVixDQUFpQmtHLGVBQXJCLEVBQXNDO0FBQ3JDQyxnQkFBQUEsUUFBUSxDQUFDQyxNQUFUO0FBQ0E7O0FBRURaLGNBQUFBLEVBQUU7QUE3QmU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFnQ2xCO0FBRUFDLGNBQUFBLFlBQVksQ0FBQyxLQUFELENBQVo7O0FBbENrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFWTyxVQUFVO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQXFDQSxTQUFPLENBQ050RyxTQURNLEVBRU5zRyxVQUZNLEVBR04sQ0FBQ0YsTUFBRCxJQUFXdEcsU0FBUyxDQUFDUSxNQUFWLENBQWlCaUcsR0FBNUIsR0FDQyxrRUFBQyxnREFBRDtBQUNDLFNBQUssRUFBRVAsV0FEUjtBQUVDLGFBQVMsRUFBQyxxQkFGWDtBQUdDLGFBQVMsRUFBRTtBQUFBLGFBQU1DLGNBQWMsQ0FBQyxLQUFELENBQXBCO0FBQUEsS0FIWjtBQUlDLFVBQU0sRUFBRTtBQUFBLGFBQ1A7QUFBSyxpQkFBUyxFQUFDO0FBQWYsU0FDQztBQUFLLGFBQUssRUFBQyxJQUFYO0FBQWdCLGNBQU0sRUFBQyxJQUF2QjtBQUE0QixlQUFPLEVBQUM7QUFBcEMsU0FDQztBQUNDLFlBQUksRUFBQyxTQUROO0FBRUMsU0FBQyxFQUFDO0FBRkgsUUFERCxFQUtDO0FBQ0MsU0FBQyxFQUFDLHFGQURIO0FBRUMsWUFBSSxFQUFDO0FBRk4sUUFMRCxFQVNDO0FBQ0MsU0FBQyxFQUFDLHNkQURIO0FBRUMsWUFBSSxFQUFDO0FBRk4sUUFURCxFQWFDO0FBQ0MsU0FBQyxFQUFDLDZhQURIO0FBRUMsWUFBSSxFQUFDO0FBRk4sUUFiRCxDQURELEVBb0JDO0FBQUksaUJBQVMsRUFBQztBQUFkLG1DQXBCRCxFQXdCQyw2RUFDRXhKLDJDQUFFLENBQ0YsMkdBREUsRUFFRixtQkFGRSxDQURKLENBeEJELEVBK0JDO0FBQ0MsaUJBQVMsRUFBQyw4QkFEWDtBQUVDLHdCQUFhO0FBRmQsU0FHQztBQUNDLGVBQU8sRUFBRSxpQkFBQytDLENBQUQsRUFBTztBQUNmQSxVQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQXdHLFVBQUFBLGNBQWMsQ0FBQyxLQUFELENBQWQ7QUFFQVUsVUFBQUEsVUFBVSxDQUFDLFlBQU07QUFDaEJSLFlBQUFBLE9BQU8sQ0FBQ1MsUUFBUixDQUFpQixNQUFqQjtBQUNBLFdBRlMsRUFFUCxHQUZPLENBQVY7QUFHQSxTQVJGO0FBU0MsaUJBQVMsRUFBQztBQVRYLFNBVUVuSywyQ0FBRSxDQUFDLGFBQUQsRUFBZ0IsU0FBaEIsQ0FWSixDQUhELEVBZ0JDO0FBQ0MsWUFBSSxFQUFDLDZDQUROO0FBRUMsY0FBTSxFQUFDLFFBRlI7QUFHQyxpQkFBUyxFQUFDO0FBSFgsU0FJRUEsMkNBQUUsQ0FBQyxhQUFELEVBQWdCLG1CQUFoQixDQUpKLENBaEJELENBL0JELENBRE87QUFBQTtBQUpULElBREQsR0ErREksSUFsRUUsQ0FBUDtBQW9FQSxDQWpIRDs7QUFtSEEsK0RBQWVtRCxtQkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pJQTtDQVFBOztBQUNBOztBQUVBLElBQU1ELGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQUcsU0FBUyxFQUFJO0FBQUEsa0JBQ0UzRCw0REFBUSxDQUFDLEtBQUQsQ0FEVjtBQUFBO0FBQUEsTUFDaEMrRCxVQURnQztBQUFBLE1BQ3BCMkcsa0JBRG9COztBQUd2QyxTQUFPLENBQ047QUFBQSxXQUFNQSxrQkFBa0IsQ0FBQyxJQUFELENBQXhCO0FBQUEsR0FETSxFQUdOLGtFQUFDLGdEQUFEO0FBQ0MsU0FBSyxFQUFFM0csVUFEUjtBQUVDLGFBQVMsRUFBRTtBQUFBLGFBQU0yRyxrQkFBa0IsQ0FBQyxLQUFELENBQXhCO0FBQUEsS0FGWjtBQUdDLFVBQU0sRUFBRTtBQUFBLGFBQ1A7QUFDQyxpQkFBUyxFQUFDLGtCQURYO0FBRUMsK0JBQXVCLEVBQUU7QUFDeEJDLFVBQUFBLE1BQU0sRUFBRWhILFNBQVMsQ0FBQ0s7QUFETTtBQUYxQixRQURPO0FBQUE7QUFIVCxJQUhNLENBQVA7QUFnQkEsQ0FuQkQ7O0FBcUJBLCtEQUFlUixrQkFBZjs7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQSxrREFBa0QsMENBQTBDOztBQUU1RixrREFBa0QsYUFBYSx5RkFBeUY7O0FBRXhKLDJDQUEyQywrREFBK0QsdUdBQXVHLHlFQUF5RSxlQUFlLDBFQUEwRSxHQUFHOztBQUV0WCwrQ0FBK0MsaUJBQWlCLHFCQUFxQixvQ0FBb0MsNkRBQTZELHNCQUFzQjs7QUFFbEw7QUFDaUM7O0FBRTNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxvRUFBb0UsYUFBYTtBQUNqRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDLENBQUMsd0RBQWU7O0FBRWpCO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBcUM7QUFDckMsZ0JBQWdCLDhDQUFNO0FBQ3RCLG1CQUFtQiw0Q0FBSTtBQUN2QixRQUFRLDhDQUFNO0FBQ2QsV0FBVyw0Q0FBSTtBQUNmLFlBQVksNENBQUk7QUFDaEIsYUFBYSw0Q0FBSTtBQUNqQixlQUFlLDRDQUFJO0FBQ25CLDJCQUEyQiw0Q0FBSTtBQUMvQixnQkFBZ0IsNENBQUk7QUFDcEIsVUFBVSw0Q0FBSTtBQUNkLFlBQVkscURBQVMsRUFBRSw0Q0FBSSxFQUFFLDRDQUFJO0FBQ2pDLEVBQUUsRUFBRSxDQUFNOzs7QUFHViwrREFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pKeEI7O0FBRUE7O0FBRUEsSUFBSSxJQUFxQztBQUN6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFPQUFxTztBQUNyTztBQUNBO0FBQ0E7O0FBRXVCOztBQUVoQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBOztBQUVBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsS0FBSyxLQUE2QjtBQUNsQztBQUNBO0FBQ0EsR0FBRyxTQUFTLElBQTRFO0FBQ3hGO0FBQ0EsRUFBRSxpQ0FBcUIsRUFBRSxtQ0FBRTtBQUMzQjtBQUNBLEdBQUc7QUFBQSxrR0FBQztBQUNKLEdBQUcsS0FBSyxFQUVOO0FBQ0YsQ0FBQzs7Ozs7Ozs7Ozs7QUNuREQsZUFBZSxtQkFBTyxDQUFDLGtEQUFVO0FBQ2pDLFlBQVksbUJBQU8sQ0FBQyxnREFBTzs7QUFFM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw4QkFBOEI7QUFDOUIsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLEtBQUs7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCw0QkFBNEI7QUFDNUIsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLFNBQVMsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isc0JBQXNCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQiwyQkFBMkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLDRGQUE0RixDQUFNO0FBQzdJO0FBQ0E7O0FBRUEsb0JBQW9CLGdDQUFnQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsZ0NBQWdDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDOWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFTLENBQUNTLElBQVYsS0FBbUIsbUJBQXZCLEVBQTRDO0FBQzVDeUcsRUFBQUEsZUFBZSxDQUFDbEgsU0FBaEIsR0FBNEJELHlEQUE1QjtBQUNBLENBSEQsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb2Nrc3ktY29tcGFuaW9uLy4vZnJhbWV3b3JrL3ByZW1pdW0vZXh0ZW5zaW9ucy93b29jb21tZXJjZS1leHRyYS9kYXNoYm9hcmQtc3RhdGljL2pzL0VkaXRTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi8uL2ZyYW1ld29yay9wcmVtaXVtL2V4dGVuc2lvbnMvd29vY29tbWVyY2UtZXh0cmEvZGFzaGJvYXJkLXN0YXRpYy9qcy9Xb29jb21tZXJjZUV4dHJhLmpzIiwid2VicGFjazovL2Jsb2Nrc3ktY29tcGFuaW9uLy4vc3RhdGljL2pzL0Rhc2hib2FyZENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tzeS1jb21wYW5pb24vLi9zdGF0aWMvanMvaGVscGVycy9PdmVybGF5LmpzIiwid2VicGFjazovL2Jsb2Nrc3ktY29tcGFuaW9uLy4vc3RhdGljL2pzL2hlbHBlcnMvcmVhY2gvZGlhbG9nLmpzIiwid2VicGFjazovL2Jsb2Nrc3ktY29tcGFuaW9uLy4vc3RhdGljL2pzL2hlbHBlcnMvcmVhY2gvcG9ydGFsLmpzIiwid2VicGFjazovL2Jsb2Nrc3ktY29tcGFuaW9uLy4vc3RhdGljL2pzL2hlbHBlcnMvdXNlQWN0aXZhdGlvbkFjdGlvbi5qcyIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi8uL3N0YXRpYy9qcy9oZWxwZXJzL3VzZUV4dGVuc2lvblJlYWRtZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi8uL25vZGVfbW9kdWxlcy9AcmVhY2gvY29tcG9uZW50LWNvbXBvbmVudC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi8uL25vZGVfbW9kdWxlcy9AcmVhY2gvdXRpbHMvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmxvY2tzeS1jb21wYW5pb24vLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi8uL25vZGVfbW9kdWxlcy9mb2N1cy10cmFwL2luZGV4LmpzIiwid2VicGFjazovL2Jsb2Nrc3ktY29tcGFuaW9uLy4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmxvY2tzeS1jb21wYW5pb24vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9jaGVja1Byb3BUeXBlcy5qcyIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzLmpzIiwid2VicGFjazovL2Jsb2Nrc3ktY29tcGFuaW9uLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYmxvY2tzeS1jb21wYW5pb24vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vYmxvY2tzeS1jb21wYW5pb24vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL2Jsb2Nrc3ktY29tcGFuaW9uLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL2Jsb2Nrc3ktY29tcGFuaW9uLy4vbm9kZV9tb2R1bGVzL3RhYmJhYmxlL2luZGV4LmpzIiwid2VicGFjazovL2Jsb2Nrc3ktY29tcGFuaW9uLy4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi9leHRlcm5hbCB2YXIgXCJ3aW5kb3cuUmVhY3RcIiIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi9leHRlcm5hbCB2YXIgXCJ3aW5kb3cuYmxvY2tzeU9wdGlvbnNcIiIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi9leHRlcm5hbCB2YXIgXCJ3aW5kb3cuY3RFdmVudHNcIiIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi9leHRlcm5hbCB2YXIgXCJ3aW5kb3cud3AuZWxlbWVudFwiIiwid2VicGFjazovL2Jsb2Nrc3ktY29tcGFuaW9uL2V4dGVybmFsIHZhciBcIndpbmRvdy53cC5pMThuXCIiLCJ3ZWJwYWNrOi8vYmxvY2tzeS1jb21wYW5pb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmxvY2tzeS1jb21wYW5pb24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmxvY2tzeS1jb21wYW5pb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jsb2Nrc3ktY29tcGFuaW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmxvY2tzeS1jb21wYW5pb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ibG9ja3N5LWNvbXBhbmlvbi8uL2ZyYW1ld29yay9wcmVtaXVtL2V4dGVuc2lvbnMvd29vY29tbWVyY2UtZXh0cmEvZGFzaGJvYXJkLXN0YXRpYy9qcy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdGNyZWF0ZUVsZW1lbnQsXG5cdENvbXBvbmVudCxcblx0dXNlRWZmZWN0LFxuXHR1c2VTdGF0ZSxcblx0RnJhZ21lbnQsXG59IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCdcbmltcG9ydCBjdEV2ZW50cyBmcm9tICdjdC1ldmVudHMnXG5pbXBvcnQgeyBTd2l0Y2gsIE9wdGlvbnNQYW5lbCB9IGZyb20gJ2Jsb2Nrc3ktb3B0aW9ucydcblxuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IF9fIH0gZnJvbSAnY3QtaTE4bidcbmltcG9ydCBPdmVybGF5IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3N0YXRpYy9qcy9oZWxwZXJzL092ZXJsYXknXG5cbmxldCB3b29FeHRyYVNldHRpbmdzQ2FjaGUgPSB7XG5cdGN0X2VuYWJsZV9zd2F0Y2hlczogZmFsc2UsXG5cdGN0X2VuYWJsZV9icmFuZHM6IGZhbHNlLFxuXHRjdF9icmFuZHNfc2luZ2xlX3NsdWc6ICdicmFuZCcsXG59XG5cbmNvbnN0IEVkaXRTZXR0aW5ncyA9ICgpID0+IHtcblx0Y29uc3QgW2lzRWRpdGluZywgc2V0SXNFZGl0aW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdC8vIGRldGFpbHMgfCBhZHZhbmNlZFxuXHRjb25zdCBbY3VycmVudFRhYiwgc2V0Q3VycmVudFRhYl0gPSB1c2VTdGF0ZSgnZGV0YWlscycpXG5cblx0Y29uc3QgW3dvb0V4dHJhU2V0dGluZ3MsIHNldFdvb0V4dHJhU2V0dGluZ3NdID0gdXNlU3RhdGUoXG5cdFx0d29vRXh0cmFTZXR0aW5nc0NhY2hlXG5cdClcblxuXHRjb25zdCBsb2FkRGF0YSA9IGFzeW5jICgpID0+IHtcblx0XHRjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKClcblx0XHRib2R5LmFwcGVuZCgnYWN0aW9uJywgJ2Jsb2Nrc3lfZ2V0X3dvb19leHRyYV9zZXR0aW5ncycpXG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChjdERhc2hib2FyZExvY2FsaXphdGlvbnMuYWpheF91cmwsIHtcblx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdGJvZHksXG5cdFx0XHR9KVxuXG5cdFx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcblx0XHRcdFx0Y29uc3QgeyBzdWNjZXNzLCBkYXRhIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuXHRcdFx0XHRpZiAoc3VjY2Vzcykge1xuXHRcdFx0XHRcdHdvb0V4dHJhU2V0dGluZ3NDYWNoZSA9IGRhdGEuc2V0dGluZ3Ncblx0XHRcdFx0XHRzZXRXb29FeHRyYVNldHRpbmdzKGRhdGEuc2V0dGluZ3MpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7fVxuXHR9XG5cblx0Y29uc3QgaGFuZGxlU2F2ZSA9ICgpID0+IHtcblx0XHR3cC5hamF4XG5cdFx0XHQuc2VuZCh7XG5cdFx0XHRcdHVybDogYCR7d3AuYWpheC5zZXR0aW5ncy51cmx9P2FjdGlvbj1ibG9ja3N5X3VwZGF0ZV93b29fZXh0cmFfc2V0dGluZ3NgLFxuXHRcdFx0XHRjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuXHRcdFx0XHRkYXRhOiBKU09OLnN0cmluZ2lmeSh3b29FeHRyYVNldHRpbmdzKSxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoKSA9PiB7XG5cdFx0XHRcdC8vIGxvY2F0aW9uLnJlbG9hZCgpXG5cdFx0XHRcdHNldElzRWRpdGluZyhmYWxzZSlcblx0XHRcdH0pXG5cdH1cblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGxvYWREYXRhKClcblx0fSwgW10pXG5cblx0cmV0dXJuIChcblx0XHQ8RnJhZ21lbnQ+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGNsYXNzTmFtZT1cImN0LWJ1dHRvbiBjdC1jb25maWctYnRuXCJcblx0XHRcdFx0ZGF0YS1idXR0b249XCJ3aGl0ZVwiXG5cdFx0XHRcdHRpdGxlPXtfXygnRWRpdCBTZXR0aW5ncycsICdibG9ja3N5LWNvbXBhbmlvbicpfVxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRJc0VkaXRpbmcodHJ1ZSl9PlxuXHRcdFx0XHR7X18oJ0NvbmZpZ3VyZScsICdibG9ja3N5LWNvbXBhbmlvbicpfVxuXHRcdFx0PC9idXR0b24+XG5cblx0XHRcdDxPdmVybGF5XG5cdFx0XHRcdGl0ZW1zPXtpc0VkaXRpbmd9XG5cdFx0XHRcdG9uRGlzbWlzcz17KCkgPT4gc2V0SXNFZGl0aW5nKGZhbHNlKX1cblx0XHRcdFx0Y2xhc3NOYW1lPXsnY3Qtd2hpdGVsYWJlbC1tb2RhbCd9XG5cdFx0XHRcdHJlbmRlcj17KCkgPT4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdjdC1tb2RhbC1jb250ZW50Jyl9PlxuXHRcdFx0XHRcdFx0PGgyPlxuXHRcdFx0XHRcdFx0XHR7X18oXG5cdFx0XHRcdFx0XHRcdFx0J1dvb2NvbW1lcmNlIEV4dHJhIFNldHRpbmdzJyxcblx0XHRcdFx0XHRcdFx0XHQnYmxvY2tzeS1jb21wYW5pb24nXG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L2gyPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN0LW9wdGlvbnMtY29udGFpbmVyIGN0LXRhYnMtc2Nyb2xsXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc25hbWVzKCdjdC10YWJzJyl9PlxuXHRcdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHRcdHtbJ2RldGFpbHMnLCAnYWR2YW5jZWQnXS5tYXAoKHRhYikgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3RhYn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzbmFtZXMoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0YWN0aXZlOiB0YWIgPT09IGN1cnJlbnRUYWIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0Q3VycmVudFRhYih0YWIpfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRldGFpbHM6IF9fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdHZW5lcmFsJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnYmxvY2tzeS1jb21wYW5pb24nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFkdmFuY2VkOiBfXyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnQWR2YW5jZWQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdibG9ja3N5LWNvbXBhbmlvbidcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1bdGFiXVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN0LWN1cnJlbnQtdGFiXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRXb29FeHRyYVNldHRpbmdzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLndvb0V4dHJhU2V0dGluZ3MsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdF9lbmFibGVfc3dhdGNoZXM6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCF3b29FeHRyYVNldHRpbmdzLmN0X2VuYWJsZV9zd2F0Y2hlcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7X18oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1ZhcmlhdGlvbiBzd2F0Y2hlcycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2Jsb2Nrc3ktY29tcGFuaW9uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxTd2l0Y2hcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb249e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGJlaGF2aW9yOiAnYm9vbGVhbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3b29FeHRyYVNldHRpbmdzLmN0X2VuYWJsZV9zd2F0Y2hlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4ge319XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWxcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzZXRXb29FeHRyYVNldHRpbmdzKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLndvb0V4dHJhU2V0dGluZ3MsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjdF9lbmFibGVfYnJhbmRzOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQhd29vRXh0cmFTZXR0aW5ncy5jdF9lbmFibGVfYnJhbmRzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtfXyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnUHJvZHVjdCBCcmFuZHMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdibG9ja3N5LWNvbXBhbmlvbidcblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8U3dpdGNoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRiZWhhdmlvcjogJ2Jvb2xlYW4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d29vRXh0cmFTZXR0aW5ncy5jdF9lbmFibGVfYnJhbmRzXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3QtY29udHJvbHMtZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlY3Rpb24gZGF0YS1jb2x1bW5zPVwibWVkaXVtOjFcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8T3B0aW9uc1BhbmVsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25JZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uVmFsdWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2V0V29vRXh0cmFTZXR0aW5ncyhcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQod29vRXh0cmFTZXR0aW5ncykgPT4gKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC4uLndvb0V4dHJhU2V0dGluZ3MsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbb3B0aW9uSWRdOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25WYWx1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGN0X2JyYW5kc19zaW5nbGVfc2x1Zzoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICd0ZXh0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogJycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw6IF9fKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J1NpbmdsZSBTbHVnJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdibG9ja3N5LWNvbXBhbmlvbidcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt3b29FeHRyYVNldHRpbmdzIHx8IHt9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aGFzUmV2ZXJ0QnV0dG9uPXtmYWxzZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlY3Rpb24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdC1tb2RhbC1hY3Rpb25zIGhhcy1kaXZpZGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b24tcHJpbWFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGUpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRcdFx0XHRcdFx0aGFuZGxlU2F2ZSgpXG5cblx0XHRcdFx0XHRcdFx0XHRcdGN0RXZlbnRzLnRyaWdnZXIoJ2Jsb2Nrc3lfZXh0c19zeW5jX2V4dHMnKVxuXHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdHtfXygnU2F2ZSBTZXR0aW5ncycsICdibG9ja3N5LWNvbXBhbmlvbicpfVxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0Lz5cblx0XHQ8L0ZyYWdtZW50PlxuXHQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRTZXR0aW5nc1xuIiwiaW1wb3J0IHtcblx0Y3JlYXRlRWxlbWVudCxcblx0Q29tcG9uZW50LFxuXHR1c2VFZmZlY3QsXG5cdHVzZVN0YXRlLFxuXHRGcmFnbWVudCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50J1xuaW1wb3J0IHsgX18gfSBmcm9tICdjdC1pMThuJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuaW1wb3J0IEVkaXRTZXR0aW5ncyBmcm9tICcuL0VkaXRTZXR0aW5ncydcbmltcG9ydCB1c2VFeHRlbnNpb25SZWFkbWUgZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3RhdGljL2pzL2hlbHBlcnMvdXNlRXh0ZW5zaW9uUmVhZG1lJ1xuaW1wb3J0IHVzZUFjdGl2YXRpb25BY3Rpb24gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vc3RhdGljL2pzL2hlbHBlcnMvdXNlQWN0aXZhdGlvbkFjdGlvbidcblxuY29uc3QgV29vY29tbWVyY2VFeHRyYSA9ICh7IGV4dGVuc2lvbiwgb25FeHRzU3luYyB9KSA9PiB7XG5cdGNvbnN0IFtpc0xvYWRpbmcsIGFjdGl2YXRpb25BY3Rpb25dID0gdXNlQWN0aXZhdGlvbkFjdGlvbihleHRlbnNpb24sICgpID0+XG5cdFx0b25FeHRzU3luYygpXG5cdClcblxuXHRjb25zdCBbc2hvd1JlYWRtZSwgcmVhZG1lXSA9IHVzZUV4dGVuc2lvblJlYWRtZShleHRlbnNpb24pXG5cblx0aWYgKGV4dGVuc2lvbi5kYXRhLmxvY2tlZCkge1xuXHRcdHJldHVybiBudWxsXG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxsaSBjbGFzc05hbWU9e2NsYXNzbmFtZXMoeyBhY3RpdmU6ICEhZXh0ZW5zaW9uLl9fb2JqZWN0IH0pfT5cblx0XHRcdDxoNCBjbGFzc05hbWU9XCJjdC1leHRlbnNpb24tdGl0bGVcIj5cblx0XHRcdFx0e2V4dGVuc2lvbi5jb25maWcubmFtZX1cblxuXHRcdFx0XHR7aXNMb2FkaW5nICYmIChcblx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMTVcIiBoZWlnaHQ9XCIxNVwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxuXHRcdFx0XHRcdFx0PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDUwLDUwKVwiPlxuXHRcdFx0XHRcdFx0XHQ8ZyB0cmFuc2Zvcm09XCJzY2FsZSgxKVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGUgY3g9XCIwXCIgY3k9XCIwXCIgcj1cIjUwXCIgZmlsbD1cIiM2ODdjOTNcIiAvPlxuXHRcdFx0XHRcdFx0XHRcdDxjaXJjbGVcblx0XHRcdFx0XHRcdFx0XHRcdGN4PVwiMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjeT1cIi0yNlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRyPVwiMTJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIiNmZmZmZmZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtPVwicm90YXRlKDE2MS42MzQpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YW5pbWF0ZVRyYW5zZm9ybVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVOYW1lPVwidHJhbnNmb3JtXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInJvdGF0ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNhbGNNb2RlPVwibGluZWFyXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWVzPVwiMCAwIDA7MzYwIDAgMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleVRpbWVzPVwiMDsxXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZHVyPVwiMXNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRiZWdpbj1cIjBzXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9jaXJjbGU+XG5cdFx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHRcdDwvZz5cblx0XHRcdFx0XHQ8L3N2Zz5cblx0XHRcdFx0KX1cblx0XHRcdDwvaDQ+XG5cblx0XHRcdHtleHRlbnNpb24uY29uZmlnLmRlc2NyaXB0aW9uICYmIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdC1leHRlbnNpb24tZGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHR7ZXh0ZW5zaW9uLmNvbmZpZy5kZXNjcmlwdGlvbn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN0LWV4dGVuc2lvbi1hY3Rpb25zXCI+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzbmFtZXMoXG5cdFx0XHRcdFx0XHRleHRlbnNpb24uX19vYmplY3QgPyAnY3QtYnV0dG9uJyA6ICdjdC1idXR0b24tcHJpbWFyeSdcblx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdGRhdGEtYnV0dG9uPVwid2hpdGVcIlxuXHRcdFx0XHRcdGRpc2FibGVkPXtpc0xvYWRpbmd9XG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gYWN0aXZhdGlvbkFjdGlvbigpfT5cblx0XHRcdFx0XHR7ZXh0ZW5zaW9uLl9fb2JqZWN0XG5cdFx0XHRcdFx0XHQ/IF9fKCdEZWFjdGl2YXRlJywgJ2Jsb2Nrc3ktY29tcGFuaW9uJylcblx0XHRcdFx0XHRcdDogX18oJ0FjdGl2YXRlJywgJ2Jsb2Nrc3ktY29tcGFuaW9uJyl9XG5cdFx0XHRcdDwvYnV0dG9uPlxuXG5cdFx0XHRcdHtleHRlbnNpb24uX19vYmplY3QgJiYgPEVkaXRTZXR0aW5ncyAvPn1cblxuXHRcdFx0XHR7ZXh0ZW5zaW9uLnJlYWRtZSAmJiAoXG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2hvd1JlYWRtZSgpfVxuXHRcdFx0XHRcdFx0ZGF0YS1idXR0b249XCJ3aGl0ZVwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdC1taW5pbWFsLWJ1dHRvbiBjdC1pbnN0cnVjdGlvblwiPlxuXHRcdFx0XHRcdFx0PHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG5cdFx0XHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTIsMkM2LjQ3NywyLDIsNi40NzcsMiwxMnM0LjQ3NywxMCwxMCwxMHMxMC00LjQ3NywxMC0xMFMxNy41MjMsMiwxMiwyeiBNMTIsMTdMMTIsMTdjLTAuNTUyLDAtMS0wLjQ0OC0xLTF2LTQgYzAtMC41NTIsMC40NDgtMSwxLTFoMGMwLjU1MiwwLDEsMC40NDgsMSwxdjRDMTMsMTYuNTUyLDEyLjU1MiwxNywxMiwxN3ogTTEyLjUsOWgtMUMxMS4yMjQsOSwxMSw4Ljc3NiwxMSw4LjV2LTEgQzExLDcuMjI0LDExLjIyNCw3LDExLjUsN2gxQzEyLjc3Niw3LDEzLDcuMjI0LDEzLDcuNXYxQzEzLDguNzc2LDEyLjc3Niw5LDEyLjUsOXpcIiAvPlxuXHRcdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHtyZWFkbWV9XG5cdFx0PC9saT5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBXb29jb21tZXJjZUV4dHJhXG4iLCJjb25zdCBEYXNoYm9hcmRDb250ZXh0ID0gd2luZG93LmN0RGFzaGJvYXJkTG9jYWxpemF0aW9ucy5EYXNoYm9hcmRDb250ZXh0XG5cbmV4cG9ydCBjb25zdCBQcm92aWRlciA9IERhc2hib2FyZENvbnRleHQuUHJvdmlkZXJcbmV4cG9ydCBjb25zdCBDb25zdW1lciA9IERhc2hib2FyZENvbnRleHQuQ29uc3VtZXJcblxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkQ29udGV4dFxuIiwiaW1wb3J0IHtcblx0Y3JlYXRlRWxlbWVudCxcblx0Q29tcG9uZW50LFxuXHR1c2VFZmZlY3QsXG5cdHVzZVN0YXRlLFxuXHR1c2VDb250ZXh0LFxuXHRjcmVhdGVDb250ZXh0LFxuXHRGcmFnbWVudCxcbn0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50J1xuaW1wb3J0IHsgRGlhbG9nLCBEaWFsb2dPdmVybGF5LCBEaWFsb2dDb250ZW50IH0gZnJvbSAnLi9yZWFjaC9kaWFsb2cnXG5pbXBvcnQgeyBUcmFuc2l0aW9uIH0gZnJvbSAnYmxvY2tzeS1vcHRpb25zJ1xuaW1wb3J0IHsgX18gfSBmcm9tICdjdC1pMThuJ1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcblxuY29uc3QgZGVmYXVsdElzVmlzaWJsZSA9IChpKSA9PiAhIWlcblxuY29uc3QgT3ZlcmxheSA9ICh7XG5cdGl0ZW1zLFxuXHRpc1Zpc2libGUgPSBkZWZhdWx0SXNWaXNpYmxlLFxuXHRyZW5kZXIsXG5cdGNsYXNzTmFtZSxcblx0b25EaXNtaXNzLFxufSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxUcmFuc2l0aW9uXG5cdFx0XHRpdGVtcz17aXRlbXN9XG5cdFx0XHRvblN0YXJ0PXsoKSA9PlxuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmNsYXNzTGlzdFtpc1Zpc2libGUoaXRlbXMpID8gJ2FkZCcgOiAncmVtb3ZlJ10oXG5cdFx0XHRcdFx0J2N0LWRhc2hib2FyZC1vdmVybGF5LW9wZW4nXG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHRcdGNvbmZpZz17eyBkdXJhdGlvbjogMjAwIH19XG5cdFx0XHRmcm9tPXt7IG9wYWNpdHk6IDAsIHk6IC0xMCB9fVxuXHRcdFx0ZW50ZXI9e3sgb3BhY2l0eTogMSwgeTogMCB9fVxuXHRcdFx0bGVhdmU9e3sgb3BhY2l0eTogMCwgeTogMTAgfX0+XG5cdFx0XHR7KGl0ZW1zKSA9PlxuXHRcdFx0XHRpc1Zpc2libGUoaXRlbXMpICYmXG5cdFx0XHRcdCgocHJvcHMpID0+IChcblx0XHRcdFx0XHQ8RGlhbG9nT3ZlcmxheVxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgb3BhY2l0eTogcHJvcHMub3BhY2l0eSB9fVxuXHRcdFx0XHRcdFx0Y29udGFpbmVyPXtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd3Bib2R5Jyl9XG5cdFx0XHRcdFx0XHRvbkRpc21pc3M9eygpID0+IG9uRGlzbWlzcygpfT5cblx0XHRcdFx0XHRcdDxEaWFsb2dDb250ZW50XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17Y2xhc3NuYW1lcygnY3QtYWRtaW4tbW9kYWwnLCBjbGFzc05hbWUpfVxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKDBweCwgJHtwcm9wcy55fXB4LCAwcHgpYCxcblx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjbG9zZS1idXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG9uRGlzbWlzcygpfT5cblx0XHRcdFx0XHRcdFx0XHTDl1xuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblxuXHRcdFx0XHRcdFx0XHR7cmVuZGVyKGl0ZW1zLCBwcm9wcyl9XG5cdFx0XHRcdFx0XHQ8L0RpYWxvZ0NvbnRlbnQ+XG5cdFx0XHRcdFx0PC9EaWFsb2dPdmVybGF5PlxuXHRcdFx0XHQpKVxuXHRcdFx0fVxuXHRcdDwvVHJhbnNpdGlvbj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBPdmVybGF5XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJ0ByZWFjaC9jb21wb25lbnQtY29tcG9uZW50J1xuaW1wb3J0IFBvcnRhbCBmcm9tICcuL3BvcnRhbCdcbmltcG9ydCB7IGNoZWNrU3R5bGVzLCB3cmFwRXZlbnQgfSBmcm9tICdAcmVhY2gvdXRpbHMnXG5pbXBvcnQgY3JlYXRlRm9jdXNUcmFwIGZyb20gJ2ZvY3VzLXRyYXAnXG5pbXBvcnQge1xuXHRjcmVhdGVFbGVtZW50LFxuXHR1c2VFZmZlY3QsXG5cdHVzZVN0YXRlLFxuXHRGcmFnbWVudFxufSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnXG5cbmxldCBjcmVhdGVBcmlhSGlkZXIgPSBkaWFsb2dOb2RlID0+IHtcblx0bGV0IG9yaWdpbmFsVmFsdWVzID0gW11cblx0bGV0IHJvb3ROb2RlcyA9IFtdXG5cblx0QXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChcblx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5ID4gKicpLFxuXHRcdG5vZGUgPT4ge1xuXHRcdFx0aWYgKG5vZGUgPT09IGRpYWxvZ05vZGUucGFyZW50Tm9kZSkge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdGxldCBhdHRyID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJylcblx0XHRcdGxldCBhbHJlYWR5SGlkZGVuID0gYXR0ciAhPT0gbnVsbCAmJiBhdHRyICE9PSAnZmFsc2UnXG5cdFx0XHRpZiAoYWxyZWFkeUhpZGRlbikge1xuXHRcdFx0XHRyZXR1cm5cblx0XHRcdH1cblx0XHRcdG9yaWdpbmFsVmFsdWVzLnB1c2goYXR0cilcblx0XHRcdHJvb3ROb2Rlcy5wdXNoKG5vZGUpXG5cdFx0XHRub2RlLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpXG5cdFx0fVxuXHQpXG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRyb290Tm9kZXMuZm9yRWFjaCgobm9kZSwgaW5kZXgpID0+IHtcblx0XHRcdGxldCBvcmlnaW5hbFZhbHVlID0gb3JpZ2luYWxWYWx1ZXNbaW5kZXhdXG5cdFx0XHRpZiAob3JpZ2luYWxWYWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0XHRub2RlLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bm9kZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgb3JpZ2luYWxWYWx1ZSlcblx0XHRcdH1cblx0XHR9KVxuXHR9XG59XG5cbmxldCBrID0gKCkgPT4ge31cblxubGV0IGNoZWNrRGlhbG9nU3R5bGVzID0gKCkgPT4gY2hlY2tTdHlsZXMoJ2RpYWxvZycpXG5cbmxldCBwb3J0YWxEaWRNb3VudCA9IChyZWZzLCBpbml0aWFsRm9jdXNSZWYpID0+IHtcblx0cmVmcy5kaXNwb3NlQXJpYUhpZGVyID0gY3JlYXRlQXJpYUhpZGVyKHJlZnMub3ZlcmxheU5vZGUpXG5cdHJlZnMudHJhcCA9IGNyZWF0ZUZvY3VzVHJhcChyZWZzLm92ZXJsYXlOb2RlLCB7XG5cdFx0aW5pdGlhbEZvY3VzOiBpbml0aWFsRm9jdXNSZWZcblx0XHRcdD8gKCkgPT4gaW5pdGlhbEZvY3VzUmVmLmN1cnJlbnRcblx0XHRcdDogdW5kZWZpbmVkLFxuXHRcdGZhbGxiYWNrRm9jdXM6IHJlZnMuY29udGVudE5vZGUsXG5cdFx0ZXNjYXBlRGVhY3RpdmF0ZXM6IGZhbHNlLFxuXHRcdGNsaWNrT3V0c2lkZURlYWN0aXZhdGVzOiBmYWxzZVxuXHR9KVxuXHQvLyByZWZzLnRyYXAuYWN0aXZhdGUoKVxufVxuXG5sZXQgY29udGVudFdpbGxVbm1vdW50ID0gKHsgcmVmcyB9KSA9PiB7XG5cdHJlZnMudHJhcC5kZWFjdGl2YXRlKClcblx0cmVmcy5kaXNwb3NlQXJpYUhpZGVyKClcbn1cblxubGV0IEZvY3VzQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKVxuXG5sZXQgRGlhbG9nT3ZlcmxheSA9IFJlYWN0LmZvcndhcmRSZWYoXG5cdChcblx0XHR7XG5cdFx0XHRjb250YWluZXIsXG5cdFx0XHRpc09wZW4gPSB0cnVlLFxuXHRcdFx0b25EaXNtaXNzID0gayxcblx0XHRcdGluaXRpYWxGb2N1c1JlZixcblx0XHRcdG9uQ2xpY2ssXG5cdFx0XHRvbktleURvd24sXG5cdFx0XHQuLi5wcm9wc1xuXHRcdH0sXG5cdFx0Zm9yd2FyZFJlZlxuXHQpID0+IChcblx0XHQ8Q29tcG9uZW50IGRpZE1vdW50PXtjaGVja0RpYWxvZ1N0eWxlc30+XG5cdFx0XHR7aXNPcGVuID8gKFxuXHRcdFx0XHQ8UG9ydGFsIGNvbnRhaW5lcj17Y29udGFpbmVyfSBkYXRhLXJlYWNoLWRpYWxvZy13cmFwcGVyPlxuXHRcdFx0XHRcdDxDb21wb25lbnRcblx0XHRcdFx0XHRcdHJlZnM9e3sgb3ZlcmxheU5vZGU6IG51bGwsIGNvbnRlbnROb2RlOiBudWxsIH19XG5cdFx0XHRcdFx0XHRkaWRNb3VudD17KHsgcmVmcyB9KSA9PiB7XG5cdFx0XHRcdFx0XHRcdHBvcnRhbERpZE1vdW50KHJlZnMsIGluaXRpYWxGb2N1c1JlZilcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHR3aWxsVW5tb3VudD17Y29udGVudFdpbGxVbm1vdW50fT5cblx0XHRcdFx0XHRcdHsoeyByZWZzIH0pID0+IChcblx0XHRcdFx0XHRcdFx0PEZvY3VzQ29udGV4dC5Qcm92aWRlclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXtub2RlID0+IChyZWZzLmNvbnRlbnROb2RlID0gbm9kZSl9PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEtcmVhY2gtZGlhbG9nLW92ZXJsYXlcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3dyYXBFdmVudChvbkNsaWNrLCBldmVudCA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uRGlzbWlzcygpXG5cdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdG9uS2V5RG93bj17d3JhcEV2ZW50KG9uS2V5RG93biwgZXZlbnQgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25EaXNtaXNzKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRyZWY9e25vZGUgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWZzLm92ZXJsYXlOb2RlID0gbm9kZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb3J3YXJkUmVmICYmIGZvcndhcmRSZWYobm9kZSlcblx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHR7Li4ucHJvcHN9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9Gb2N1c0NvbnRleHQuUHJvdmlkZXI+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvQ29tcG9uZW50PlxuXHRcdFx0XHQ8L1BvcnRhbD5cblx0XHRcdCkgOiBudWxsfVxuXHRcdDwvQ29tcG9uZW50PlxuXHQpXG4pXG5cbkRpYWxvZ092ZXJsYXkucHJvcFR5cGVzID0ge1xuXHRpbml0aWFsRm9jdXNSZWY6ICgpID0+IHt9XG59XG5cbmxldCBzdG9wUHJvcGFnYXRpb24gPSBldmVudCA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG5sZXQgRGlhbG9nQ29udGVudCA9IFJlYWN0LmZvcndhcmRSZWYoXG5cdCh7IG9uQ2xpY2ssIG9uS2V5RG93biwgLi4ucHJvcHMgfSwgZm9yd2FyZFJlZikgPT4gKFxuXHRcdDxGb2N1c0NvbnRleHQuQ29uc3VtZXI+XG5cdFx0XHR7Y29udGVudFJlZiA9PiAoXG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRhcmlhLW1vZGFsPVwidHJ1ZVwiXG5cdFx0XHRcdFx0ZGF0YS1yZWFjaC1kaWFsb2ctY29udGVudFxuXHRcdFx0XHRcdHRhYkluZGV4PVwiLTFcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9e3dyYXBFdmVudChvbkNsaWNrLCBzdG9wUHJvcGFnYXRpb24pfVxuXHRcdFx0XHRcdHJlZj17bm9kZSA9PiB7XG5cdFx0XHRcdFx0XHRjb250ZW50UmVmKG5vZGUpXG5cdFx0XHRcdFx0XHRmb3J3YXJkUmVmICYmIGZvcndhcmRSZWYobm9kZSlcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdHsuLi5wcm9wc31cblx0XHRcdFx0Lz5cblx0XHRcdCl9XG5cdFx0PC9Gb2N1c0NvbnRleHQuQ29uc3VtZXI+XG5cdClcbilcblxubGV0IERpYWxvZyA9ICh7IGNvbnRhaW5lciwgaXNPcGVuLCBvbkRpc21pc3MgPSBrLCAuLi5wcm9wcyB9KSA9PiAoXG5cdDxEaWFsb2dPdmVybGF5IGNvbnRhaW5lcj17Y29udGFpbmVyfSBpc09wZW49e2lzT3Blbn0gb25EaXNtaXNzPXtvbkRpc21pc3N9PlxuXHRcdDxEaWFsb2dDb250ZW50IHsuLi5wcm9wc30gLz5cblx0PC9EaWFsb2dPdmVybGF5PlxuKVxuXG5leHBvcnQgeyBEaWFsb2dPdmVybGF5LCBEaWFsb2dDb250ZW50LCBEaWFsb2cgfVxuIiwiaW1wb3J0IHtcblx0Y3JlYXRlRWxlbWVudCxcblx0dXNlRWZmZWN0LFxuICAgIGNyZWF0ZVBvcnRhbCxcblx0dXNlU3RhdGUsXG5cdEZyYWdtZW50XG59IGZyb20gJ0B3b3JkcHJlc3MvZWxlbWVudCdcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnQHJlYWNoL2NvbXBvbmVudC1jb21wb25lbnQnXG5cbmxldCBQb3J0YWwgPSAoe1xuXHRjaGlsZHJlbixcblx0Y29udGFpbmVyID0gZG9jdW1lbnQuYm9keSxcblx0dHlwZSA9ICdyZWFjaC1wb3J0YWwnXG59KSA9PiAoXG5cdDxDb21wb25lbnRcblx0XHRnZXRSZWZzPXsoKSA9PiAoeyBub2RlOiBudWxsIH0pfVxuXHRcdGRpZE1vdW50PXsoeyByZWZzLCBmb3JjZVVwZGF0ZSB9KSA9PiB7XG5cdFx0XHRsZXQgY29udGFpbmVyTm9kZSA9IGNvbnRhaW5lci5oYXNPd25Qcm9wZXJ0eSgnY3VycmVudCcpXG5cdFx0XHRcdD8gY29udGFpbmVyLmN1cnJlbnRcblx0XHRcdFx0OiBjb250YWluZXJcblx0XHRcdHJlZnMubm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcblx0XHRcdGNvbnRhaW5lck5vZGUuYXBwZW5kQ2hpbGQocmVmcy5ub2RlKVxuXHRcdFx0Zm9yY2VVcGRhdGUoKVxuXHRcdH19XG5cdFx0d2lsbFVubW91bnQ9eyh7IHJlZnM6IHsgbm9kZSB9IH0pID0+IHtcblx0XHRcdGxldCBjb250YWluZXJOb2RlID0gY29udGFpbmVyLmhhc093blByb3BlcnR5KCdjdXJyZW50Jylcblx0XHRcdFx0PyBjb250YWluZXIuY3VycmVudFxuXHRcdFx0XHQ6IGNvbnRhaW5lclxuXHRcdFx0aWYgKGNvbnRhaW5lck5vZGUpIHtcblx0XHRcdFx0Y29udGFpbmVyTm9kZS5yZW1vdmVDaGlsZChub2RlKVxuXHRcdFx0fVxuXHRcdH19XG5cdFx0cmVuZGVyPXsoeyByZWZzOiB7IG5vZGUgfSB9KSA9PiB7XG5cdFx0XHRyZXR1cm4gbm9kZSA/IGNyZWF0ZVBvcnRhbChjaGlsZHJlbiwgbm9kZSkgOiBudWxsXG5cdFx0fX1cblx0Lz5cbilcblxuZXhwb3J0IGRlZmF1bHQgUG9ydGFsXG4iLCJpbXBvcnQge1xuXHRjcmVhdGVFbGVtZW50LFxuXHRDb21wb25lbnQsXG5cdHVzZUVmZmVjdCxcblx0dXNlQ29udGV4dCxcblx0dXNlU3RhdGUsXG5cdEZyYWdtZW50LFxufSBmcm9tICdAd29yZHByZXNzL2VsZW1lbnQnXG5pbXBvcnQgeyBfXywgc3ByaW50ZiB9IGZyb20gJ2N0LWkxOG4nXG5pbXBvcnQgeyBEaWFsb2csIERpYWxvZ092ZXJsYXksIERpYWxvZ0NvbnRlbnQgfSBmcm9tICcuL3JlYWNoL2RpYWxvZydcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vT3ZlcmxheSdcblxuaW1wb3J0IERhc2hib2FyZENvbnRleHQgZnJvbSAnLi4vRGFzaGJvYXJkQ29udGV4dCdcblxuY29uc3QgdXNlQWN0aXZhdGlvbkFjdGlvbiA9IChleHRlbnNpb24sIGNiID0gKCkgPT4ge30pID0+IHtcblx0Y29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBbaXNEaXNwbGF5ZWQsIHNldElzRGlzcGxheWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdGNvbnN0IHsgTGluaywgaGlzdG9yeSB9ID0gdXNlQ29udGV4dChEYXNoYm9hcmRDb250ZXh0KVxuXG5cdGNvbnN0IGlzX3BybyA9IGN0RGFzaGJvYXJkTG9jYWxpemF0aW9ucy5wbHVnaW5fZGF0YS5pc19wcm9cblxuXHRjb25zdCBtYWtlQWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuXHRcdGlmICghaXNfcHJvICYmIGV4dGVuc2lvbi5jb25maWcucHJvKSB7XG5cdFx0XHRzZXRJc0Rpc3BsYXllZCh0cnVlKVxuXG5cdFx0XHRyZXR1cm5cblx0XHR9XG5cblx0XHRjb25zdCBib2R5ID0gbmV3IEZvcm1EYXRhKClcblxuXHRcdGJvZHkuYXBwZW5kKCdleHQnLCBleHRlbnNpb24ubmFtZSlcblx0XHRib2R5LmFwcGVuZChcblx0XHRcdCdhY3Rpb24nLFxuXHRcdFx0ZXh0ZW5zaW9uLl9fb2JqZWN0XG5cdFx0XHRcdD8gJ2Jsb2Nrc3lfZXh0ZW5zaW9uX2RlYWN0aXZhdGUnXG5cdFx0XHRcdDogJ2Jsb2Nrc3lfZXh0ZW5zaW9uX2FjdGl2YXRlJ1xuXHRcdClcblxuXHRcdHNldElzTG9hZGluZyh0cnVlKVxuXG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IGZldGNoKGN0RGFzaGJvYXJkTG9jYWxpemF0aW9ucy5hamF4X3VybCwge1xuXHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0Ym9keSxcblx0XHRcdH0pXG5cblx0XHRcdGlmIChleHRlbnNpb24uY29uZmlnLnJlcXVpcmVfcmVmcmVzaCkge1xuXHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKVxuXHRcdFx0fVxuXG5cdFx0XHRjYigpXG5cdFx0fSBjYXRjaCAoZSkge31cblxuXHRcdC8vIGF3YWl0IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dCgoKSA9PiByKCksIDEwMDApKVxuXG5cdFx0c2V0SXNMb2FkaW5nKGZhbHNlKVxuXHR9XG5cblx0cmV0dXJuIFtcblx0XHRpc0xvYWRpbmcsXG5cdFx0bWFrZUFjdGlvbixcblx0XHQhaXNfcHJvICYmIGV4dGVuc2lvbi5jb25maWcucHJvID8gKFxuXHRcdFx0PE92ZXJsYXlcblx0XHRcdFx0aXRlbXM9e2lzRGlzcGxheWVkfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJjdC1vbmJvYXJkaW5nLW1vZGFsXCJcblx0XHRcdFx0b25EaXNtaXNzPXsoKSA9PiBzZXRJc0Rpc3BsYXllZChmYWxzZSl9XG5cdFx0XHRcdHJlbmRlcj17KCkgPT4gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3QtbW9kYWwtY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PHN2ZyB3aWR0aD1cIjU1XCIgaGVpZ2h0PVwiNTVcIiB2aWV3Qm94PVwiMCAwIDQwLjUgNDguM1wiPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdGZpbGw9XCIjMmQ4MmM4XCJcblx0XHRcdFx0XHRcdFx0XHRkPVwiTTMzLjQgMjkuNGw3LjEgMTIuMy03LjQuNi00IDYtNy4zLTEyLjlcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdGQ9XCJNMzMuNSAyOS42TDI2IDQyLjdsLTQuMi03LjMgMTEuNi02IC4xLjJ6TTAgNDEuN2w3LjUuNiAzLjkgNiA3LjItMTIuNC0xMS03LjNMMCA0MS43elwiXG5cdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIiMyMjcxYjFcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8cGF0aFxuXHRcdFx0XHRcdFx0XHRcdGQ9XCJNMzkuNSAxOC43YzAgMS42LTIuNCAyLjgtMi43IDQuMy0uNCAxLjUgMSAzLjguMiA1LjEtLjggMS4zLTMuNCAxLjItNC41IDIuMy0xLjEgMS4xLTEgMy43LTIuMyA0LjUtMS4zLjgtMy42LS42LTUuMS0uMi0xLjUuNC0yLjcgMi43LTQuMyAyLjdTMTggMzUgMTYuNSAzNC43Yy0xLjUtLjQtMy44IDEtNS4xLjJzLTEuMi0zLjQtMi4zLTQuNS0zLjctMS00LjUtMi4zLjYtMy42LjItNS4xLTIuNy0yLjctMi43LTQuMyAyLjQtMi44IDIuNy00LjNjLjQtMS41LTEtMy44LS4yLTUuMUM1LjQgOCA4LjEgOC4xIDkuMSA3YzEuMS0xLjEgMS0zLjcgMi4zLTQuNXMzLjYuNiA1LjEuMkMxOCAyLjQgMTkuMiAwIDIwLjggMGMxLjYgMCAyLjggMi40IDQuMyAyLjcgMS41LjQgMy44LTEgNS4xLS4yIDEuMy44IDEuMiAzLjQgMi4zIDQuNSAxLjEgMS4xIDMuNyAxIDQuNSAyLjNzLS42IDMuNi0uMiA1LjFjLjMgMS41IDIuNyAyLjcgMi43IDQuM3pcIlxuXHRcdFx0XHRcdFx0XHRcdGZpbGw9XCIjNTk5ZmQ5XCJcblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PHBhdGhcblx0XHRcdFx0XHRcdFx0XHRkPVwiTTIzLjYgN2MtNi40LTEuNS0xMi45IDIuNS0xNC40IDguOS0uNyAzLjEtLjIgNi4zIDEuNSA5LjEgMS43IDIuNyA0LjMgNC42IDcuNCA1LjQuOS4yIDEuOS4zIDIuOC4zIDIuMiAwIDQuNC0uNiA2LjMtMS44IDIuNy0xLjcgNC42LTQuMyA1LjQtNy41QzM0IDE1IDMwIDguNSAyMy42IDd6bTcgMTRjLS42IDIuNi0yLjIgNC44LTQuNSA2LjItMi4zIDEuNC01IDEuOC03LjYgMS4yLTIuNi0uNi00LjgtMi4yLTYuMi00LjUtMS40LTIuMy0xLjgtNS0xLjItNy42LjYtMi42IDIuMi00LjggNC41LTYuMiAxLjYtMSAzLjQtMS41IDUuMi0xLjUuOCAwIDEuNS4xIDIuMy4zIDUuNCAxLjMgOC43IDYuNyA3LjUgMTIuMXptLTguMi00LjVsMy43LjUtMi43IDIuNy43IDMuNy0zLjQtMS44LTMuMyAxLjguNi0zLjctMi43LTIuNyAzLjgtLjUgMS42LTMuNCAxLjcgMy40elwiXG5cdFx0XHRcdFx0XHRcdFx0ZmlsbD1cIiNmZmZcIlxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9zdmc+XG5cblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJjdC1tb2RhbC10aXRsZVwiPlxuXHRcdFx0XHRcdFx0XHRUaGlzIGlzIGEgUHJvIGV4dGVuc2lvblxuXHRcdFx0XHRcdFx0PC9oMj5cblxuXHRcdFx0XHRcdFx0PHA+XG5cdFx0XHRcdFx0XHRcdHtfXyhcblx0XHRcdFx0XHRcdFx0XHQnVXBncmFkZSB0byB0aGUgUHJvIHZlcnNpb24gYW5kIGdldCBpbnN0YW50IGFjY2VzcyB0byBhbGwgcHJlbWl1bSBleHRlbnNpb25zLCBmZWF0dXJlcyBhbmQgZnV0dXJlIHVwZGF0ZXMuJyxcblx0XHRcdFx0XHRcdFx0XHQnYmxvY2tzeS1jb21wYW5pb24nXG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cblx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3QtbW9kYWwtYWN0aW9ucyBoYXMtZGl2aWRlclwiXG5cdFx0XHRcdFx0XHRcdGRhdGEtYnV0dG9ucz1cIjJcIj5cblx0XHRcdFx0XHRcdFx0PGFcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRJc0Rpc3BsYXllZChmYWxzZSlcblxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhpc3RvcnkubmF2aWdhdGUoJy9wcm8nKVxuXHRcdFx0XHRcdFx0XHRcdFx0fSwgMzAwKVxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0e19fKCdGcmVlIHZzIFBybycsICdibG9ja3N5Jyl9XG5cdFx0XHRcdFx0XHRcdDwvYT5cblxuXHRcdFx0XHRcdFx0XHQ8YVxuXHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJodHRwczovL2NyZWF0aXZldGhlbWVzLmNvbS9ibG9ja3N5L3ByaWNpbmcvXCJcblx0XHRcdFx0XHRcdFx0XHR0YXJnZXQ9XCJfYmxhbmtcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiPlxuXHRcdFx0XHRcdFx0XHRcdHtfXygnVXBncmFkZSBOb3cnLCAnYmxvY2tzeS1jb21wYW5pb24nKX1cblx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQvPlxuXHRcdCkgOiBudWxsLFxuXHRdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUFjdGl2YXRpb25BY3Rpb25cbiIsImltcG9ydCB7XG5cdGNyZWF0ZUVsZW1lbnQsXG5cdENvbXBvbmVudCxcblx0dXNlRWZmZWN0LFxuXHR1c2VTdGF0ZSxcblx0RnJhZ21lbnRcbn0gZnJvbSAnQHdvcmRwcmVzcy9lbGVtZW50J1xuaW1wb3J0IHsgRGlhbG9nLCBEaWFsb2dPdmVybGF5LCBEaWFsb2dDb250ZW50IH0gZnJvbSAnLi9yZWFjaC9kaWFsb2cnXG4vLyBpbXBvcnQgJ0ByZWFjaC9kaWFsb2cvc3R5bGVzLmNzcydcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vT3ZlcmxheSdcblxuY29uc3QgdXNlRXh0ZW5zaW9uUmVhZG1lID0gZXh0ZW5zaW9uID0+IHtcblx0Y29uc3QgW3Nob3dSZWFkbWUsIHNldElzU2hvd2luZ1JlYWRtZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXHRyZXR1cm4gW1xuXHRcdCgpID0+IHNldElzU2hvd2luZ1JlYWRtZSh0cnVlKSxcblxuXHRcdDxPdmVybGF5XG5cdFx0XHRpdGVtcz17c2hvd1JlYWRtZX1cblx0XHRcdG9uRGlzbWlzcz17KCkgPT4gc2V0SXNTaG93aW5nUmVhZG1lKGZhbHNlKX1cblx0XHRcdHJlbmRlcj17KCkgPT4gKFxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3QtbW9kYWwtY29udGVudFwiXG5cdFx0XHRcdFx0ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcblx0XHRcdFx0XHRcdF9faHRtbDogZXh0ZW5zaW9uLnJlYWRtZVxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQpfVxuXHRcdC8+XG5cdF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRXh0ZW5zaW9uUmVhZG1lXG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgb2JqZWN0LCBmdW5jLCBvbmVPZlR5cGUsIG5vZGUgfSBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG52YXIgY2xlYW5Qcm9wcyA9IGZ1bmN0aW9uIGNsZWFuUHJvcHMocHJvcHMpIHtcbiAgdmFyIGluaXRpYWxTdGF0ZSA9IHByb3BzLmluaXRpYWxTdGF0ZSxcbiAgICAgIGdldEluaXRpYWxTdGF0ZSA9IHByb3BzLmdldEluaXRpYWxTdGF0ZSxcbiAgICAgIHJlZnMgPSBwcm9wcy5yZWZzLFxuICAgICAgZ2V0UmVmcyA9IHByb3BzLmdldFJlZnMsXG4gICAgICBkaWRNb3VudCA9IHByb3BzLmRpZE1vdW50LFxuICAgICAgZGlkVXBkYXRlID0gcHJvcHMuZGlkVXBkYXRlLFxuICAgICAgd2lsbFVubW91bnQgPSBwcm9wcy53aWxsVW5tb3VudCxcbiAgICAgIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlID0gcHJvcHMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUsXG4gICAgICBzaG91bGRVcGRhdGUgPSBwcm9wcy5zaG91bGRVcGRhdGUsXG4gICAgICByZW5kZXIgPSBwcm9wcy5yZW5kZXIsXG4gICAgICByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJpbml0aWFsU3RhdGVcIiwgXCJnZXRJbml0aWFsU3RhdGVcIiwgXCJyZWZzXCIsIFwiZ2V0UmVmc1wiLCBcImRpZE1vdW50XCIsIFwiZGlkVXBkYXRlXCIsIFwid2lsbFVubW91bnRcIiwgXCJnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZVwiLCBcInNob3VsZFVwZGF0ZVwiLCBcInJlbmRlclwiXSk7XG5cbiAgcmV0dXJuIHJlc3Q7XG59O1xuXG52YXIgQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKENvbXBvbmVudCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gQ29tcG9uZW50KCkge1xuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfaW5pdGlhbGlzZVByb3BzLmNhbGwoX3RoaXMpLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIENvbXBvbmVudC5wcm90b3R5cGUuZ2V0QXJncyA9IGZ1bmN0aW9uIGdldEFyZ3MoKSB7XG4gICAgdmFyIHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBzZXRTdGF0ZSA9IHRoaXMuX3NldFN0YXRlLFxuICAgICAgICBmb3JjZVVwZGF0ZSA9IHRoaXMuX2ZvcmNlVXBkYXRlLFxuICAgICAgICByZWZzID0gdGhpcy5fcmVmcztcblxuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZTogc3RhdGUsXG4gICAgICBwcm9wczogY2xlYW5Qcm9wcyhwcm9wcyksXG4gICAgICByZWZzOiByZWZzLFxuICAgICAgc2V0U3RhdGU6IHNldFN0YXRlLFxuICAgICAgZm9yY2VVcGRhdGU6IGZvcmNlVXBkYXRlXG4gICAgfTtcbiAgfTtcblxuICBDb21wb25lbnQucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZGlkTW91bnQpIHRoaXMucHJvcHMuZGlkTW91bnQodGhpcy5nZXRBcmdzKCkpO1xuICB9O1xuXG4gIENvbXBvbmVudC5wcm90b3R5cGUuc2hvdWxkQ29tcG9uZW50VXBkYXRlID0gZnVuY3Rpb24gc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuc2hvdWxkVXBkYXRlKSByZXR1cm4gdGhpcy5wcm9wcy5zaG91bGRVcGRhdGUoe1xuICAgICAgcHJvcHM6IHRoaXMucHJvcHMsXG4gICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgIG5leHRQcm9wczogY2xlYW5Qcm9wcyhuZXh0UHJvcHMpLFxuICAgICAgbmV4dFN0YXRlOiBuZXh0U3RhdGVcbiAgICB9KTtlbHNlIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy53aWxsVW5tb3VudCkgdGhpcy5wcm9wcy53aWxsVW5tb3VudCh7XG4gICAgICBzdGF0ZTogdGhpcy5zdGF0ZSxcbiAgICAgIHByb3BzOiBjbGVhblByb3BzKHRoaXMucHJvcHMpLFxuICAgICAgcmVmczogdGhpcy5fcmVmc1xuICAgIH0pO1xuICB9O1xuXG4gIENvbXBvbmVudC5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBzbmFwc2hvdCkge1xuICAgIGlmICh0aGlzLnByb3BzLmRpZFVwZGF0ZSkgdGhpcy5wcm9wcy5kaWRVcGRhdGUoT2JqZWN0LmFzc2lnbih0aGlzLmdldEFyZ3MoKSwge1xuICAgICAgcHJldlByb3BzOiBjbGVhblByb3BzKHByZXZQcm9wcyksXG4gICAgICBwcmV2U3RhdGU6IHByZXZTdGF0ZVxuICAgIH0pLCBzbmFwc2hvdCk7XG4gIH07XG5cbiAgQ29tcG9uZW50LnByb3RvdHlwZS5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSA9IGZ1bmN0aW9uIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKE9iamVjdC5hc3NpZ24odGhpcy5nZXRBcmdzKCksIHtcbiAgICAgICAgcHJldlByb3BzOiBjbGVhblByb3BzKHByZXZQcm9wcyksXG4gICAgICAgIHByZXZTdGF0ZTogcHJldlN0YXRlXG4gICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfTtcblxuICBDb21wb25lbnQucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgIHJlbmRlciA9IF9wcm9wcy5yZW5kZXI7XG5cbiAgICByZXR1cm4gcmVuZGVyID8gcmVuZGVyKHRoaXMuZ2V0QXJncygpKSA6IHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiID8gY2hpbGRyZW4odGhpcy5nZXRBcmdzKCkpIDogY2hpbGRyZW4gfHwgbnVsbDtcbiAgfTtcblxuICByZXR1cm4gQ29tcG9uZW50O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5Db21wb25lbnQuZGVmYXVsdFByb3BzID0ge1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uIGdldEluaXRpYWxTdGF0ZSgpIHt9LFxuICBnZXRSZWZzOiBmdW5jdGlvbiBnZXRSZWZzKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxufTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICB0aGlzLnN0YXRlID0gdGhpcy5wcm9wcy5pbml0aWFsU3RhdGUgfHwgdGhpcy5wcm9wcy5nZXRJbml0aWFsU3RhdGUodGhpcy5wcm9wcyk7XG4gIHRoaXMuX3JlZnMgPSB0aGlzLnByb3BzLnJlZnMgfHwgdGhpcy5wcm9wcy5nZXRSZWZzKHRoaXMuZ2V0QXJncygpKTtcblxuICB0aGlzLl9zZXRTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMyLnNldFN0YXRlLmFwcGx5KF90aGlzMiwgYXJndW1lbnRzKTtcbiAgfTtcblxuICB0aGlzLl9mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMyLmZvcmNlVXBkYXRlLmFwcGx5KF90aGlzMiwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIGluaXRpYWxTdGF0ZTogb2JqZWN0LFxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmMsXG4gIHJlZnM6IG9iamVjdCxcbiAgZ2V0UmVmczogZnVuYyxcbiAgZGlkTW91bnQ6IGZ1bmMsXG4gIGRpZFVwZGF0ZTogZnVuYyxcbiAgd2lsbFVubW91bnQ6IGZ1bmMsXG4gIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlOiBmdW5jLFxuICBzaG91bGRVcGRhdGU6IGZ1bmMsXG4gIHJlbmRlcjogZnVuYyxcbiAgY2hpbGRyZW46IG9uZU9mVHlwZShbZnVuYywgbm9kZV0pXG59IDogdm9pZCAwO1xuXG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDsiLCJ2YXIgY2hlY2tlZFBrZ3MgPSB7fTtcblxudmFyIGNoZWNrU3R5bGVzID0gZnVuY3Rpb24gY2hlY2tTdHlsZXMoKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBjaGVja1N0eWxlcyA9IGZ1bmN0aW9uIGNoZWNrU3R5bGVzKHBrZykge1xuICAgIC8vIG9ubHkgY2hlY2sgb25jZSBwZXIgcGFja2FnZVxuICAgIGlmIChjaGVja2VkUGtnc1twa2ddKSByZXR1cm47XG4gICAgY2hlY2tlZFBrZ3NbcGtnXSA9IHRydWU7XG5cbiAgICBpZiAocGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkuZ2V0UHJvcGVydHlWYWx1ZShcIi0tcmVhY2gtXCIgKyBwa2cpLCAxMCkgIT09IDEpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkByZWFjaC9cIiArIHBrZyArIFwiIHN0eWxlcyBub3QgZm91bmQuIElmIHlvdSBhcmUgdXNpbmcgYSBidW5kbGVyIGxpa2Ugd2VicGFjayBvciBwYXJjZWwgaW5jbHVkZSB0aGlzIGluIHRoZSBlbnRyeSBmaWxlIG9mIHlvdXIgYXBwIGJlZm9yZSBhbnkgb2YgeW91ciBvd24gc3R5bGVzOlxcblxcbiAgICBpbXBvcnQgXFxcIkByZWFjaC9cIiArIHBrZyArIFwiL3N0eWxlcy5jc3NcXFwiO1xcblxcbiAgT3RoZXJ3aXNlIHlvdSdsbCBuZWVkIHRvIGluY2x1ZGUgdGhlbSBzb21lIG90aGVyIHdheTpcXG5cXG4gICAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiB0eXBlPVxcXCJ0ZXh0L2Nzc1xcXCIgaHJlZj1cXFwibm9kZV9tb2R1bGVzL0ByZWFjaC9cIiArIHBrZyArIFwiL3N0eWxlcy5jc3NcXFwiIC8+XFxuXFxuICBGb3IgbW9yZSBpbmZvcm1hdGlvbiB2aXNpdCBodHRwczovL3VpLnJlYWNoLnRlY2gvc3R5bGluZy5cXG4gIFwiKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCB7IGNoZWNrU3R5bGVzIH07XG5cbmV4cG9ydCB2YXIgd3JhcEV2ZW50ID0gZnVuY3Rpb24gd3JhcEV2ZW50KHRoZWlySGFuZGxlciwgb3VySGFuZGxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgdGhlaXJIYW5kbGVyICYmIHRoZWlySGFuZGxlcihldmVudCk7XG4gICAgaWYgKCFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICByZXR1cm4gb3VySGFuZGxlcihldmVudCk7XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0IHZhciBhc3NpZ25SZWYgPSBmdW5jdGlvbiBhc3NpZ25SZWYocmVmLCB2YWx1ZSkge1xuICBpZiAocmVmID09IG51bGwpIHJldHVybjtcbiAgaWYgKHR5cGVvZiByZWYgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJlZih2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlZi5jdXJyZW50ID0gdmFsdWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhc3NpZ24gdmFsdWUgXFxcIlwiICsgdmFsdWUgKyBcIlxcXCIgdG8gcmVmIFxcXCJcIiArIHJlZiArIFwiXFxcIlwiKTtcbiAgICB9XG4gIH1cbn07IiwiLyohXG4gIENvcHlyaWdodCAoYykgMjAxNyBKZWQgV2F0c29uLlxuICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UgKE1JVCksIHNlZVxuICBodHRwOi8vamVkd2F0c29uLmdpdGh1Yi5pby9jbGFzc25hbWVzXG4qL1xuLyogZ2xvYmFsIGRlZmluZSAqL1xuXG4oZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5cdGZ1bmN0aW9uIGNsYXNzTmFtZXMgKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XG5cdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0aWYgKGlubmVyKSB7XG5cdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGlubmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmIChhcmdUeXBlID09PSAnb2JqZWN0Jykge1xuXHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0aWYgKGhhc093bi5jYWxsKGFyZywga2V5KSAmJiBhcmdba2V5XSkge1xuXHRcdFx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGtleSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwidmFyIHRhYmJhYmxlID0gcmVxdWlyZSgndGFiYmFibGUnKTtcbnZhciB4dGVuZCA9IHJlcXVpcmUoJ3h0ZW5kJyk7XG5cbnZhciBhY3RpdmVGb2N1c0RlbGF5O1xuXG52YXIgYWN0aXZlRm9jdXNUcmFwcyA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHRyYXBRdWV1ZSA9IFtdO1xuICByZXR1cm4ge1xuICAgIGFjdGl2YXRlVHJhcDogZnVuY3Rpb24odHJhcCkge1xuICAgICAgaWYgKHRyYXBRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBhY3RpdmVUcmFwID0gdHJhcFF1ZXVlW3RyYXBRdWV1ZS5sZW5ndGggLSAxXTtcbiAgICAgICAgaWYgKGFjdGl2ZVRyYXAgIT09IHRyYXApIHtcbiAgICAgICAgICBhY3RpdmVUcmFwLnBhdXNlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHRyYXBJbmRleCA9IHRyYXBRdWV1ZS5pbmRleE9mKHRyYXApO1xuICAgICAgaWYgKHRyYXBJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdHJhcFF1ZXVlLnB1c2godHJhcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBtb3ZlIHRoaXMgZXhpc3RpbmcgdHJhcCB0byB0aGUgZnJvbnQgb2YgdGhlIHF1ZXVlXG4gICAgICAgIHRyYXBRdWV1ZS5zcGxpY2UodHJhcEluZGV4LCAxKTtcbiAgICAgICAgdHJhcFF1ZXVlLnB1c2godHJhcCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGRlYWN0aXZhdGVUcmFwOiBmdW5jdGlvbih0cmFwKSB7XG4gICAgICB2YXIgdHJhcEluZGV4ID0gdHJhcFF1ZXVlLmluZGV4T2YodHJhcCk7XG4gICAgICBpZiAodHJhcEluZGV4ICE9PSAtMSkge1xuICAgICAgICB0cmFwUXVldWUuc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmFwUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICB0cmFwUXVldWVbdHJhcFF1ZXVlLmxlbmd0aCAtIDFdLnVucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KSgpO1xuXG5mdW5jdGlvbiBmb2N1c1RyYXAoZWxlbWVudCwgdXNlck9wdGlvbnMpIHtcbiAgdmFyIGRvYyA9IGRvY3VtZW50O1xuICB2YXIgY29udGFpbmVyID1cbiAgICB0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBkb2MucXVlcnlTZWxlY3RvcihlbGVtZW50KSA6IGVsZW1lbnQ7XG5cbiAgdmFyIGNvbmZpZyA9IHh0ZW5kKFxuICAgIHtcbiAgICAgIHJldHVybkZvY3VzT25EZWFjdGl2YXRlOiB0cnVlLFxuICAgICAgZXNjYXBlRGVhY3RpdmF0ZXM6IHRydWVcbiAgICB9LFxuICAgIHVzZXJPcHRpb25zXG4gICk7XG5cbiAgdmFyIHN0YXRlID0ge1xuICAgIGZpcnN0VGFiYmFibGVOb2RlOiBudWxsLFxuICAgIGxhc3RUYWJiYWJsZU5vZGU6IG51bGwsXG4gICAgbm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uOiBudWxsLFxuICAgIG1vc3RSZWNlbnRseUZvY3VzZWROb2RlOiBudWxsLFxuICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgcGF1c2VkOiBmYWxzZVxuICB9O1xuXG4gIHZhciB0cmFwID0ge1xuICAgIGFjdGl2YXRlOiBhY3RpdmF0ZSxcbiAgICBkZWFjdGl2YXRlOiBkZWFjdGl2YXRlLFxuICAgIHBhdXNlOiBwYXVzZSxcbiAgICB1bnBhdXNlOiB1bnBhdXNlXG4gIH07XG5cbiAgcmV0dXJuIHRyYXA7XG5cbiAgZnVuY3Rpb24gYWN0aXZhdGUoYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgaWYgKHN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuXG4gICAgc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICBzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24gPSBkb2MuYWN0aXZlRWxlbWVudDtcblxuICAgIHZhciBvbkFjdGl2YXRlID1cbiAgICAgIGFjdGl2YXRlT3B0aW9ucyAmJiBhY3RpdmF0ZU9wdGlvbnMub25BY3RpdmF0ZVxuICAgICAgICA/IGFjdGl2YXRlT3B0aW9ucy5vbkFjdGl2YXRlXG4gICAgICAgIDogY29uZmlnLm9uQWN0aXZhdGU7XG4gICAgaWYgKG9uQWN0aXZhdGUpIHtcbiAgICAgIG9uQWN0aXZhdGUoKTtcbiAgICB9XG5cbiAgICBhZGRMaXN0ZW5lcnMoKTtcbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlYWN0aXZhdGUoZGVhY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICBpZiAoIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgY2xlYXJUaW1lb3V0KGFjdGl2ZUZvY3VzRGVsYXkpO1xuXG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgc3RhdGUuYWN0aXZlID0gZmFsc2U7XG4gICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG5cbiAgICBhY3RpdmVGb2N1c1RyYXBzLmRlYWN0aXZhdGVUcmFwKHRyYXApO1xuXG4gICAgdmFyIG9uRGVhY3RpdmF0ZSA9XG4gICAgICBkZWFjdGl2YXRlT3B0aW9ucyAmJiBkZWFjdGl2YXRlT3B0aW9ucy5vbkRlYWN0aXZhdGUgIT09IHVuZGVmaW5lZFxuICAgICAgICA/IGRlYWN0aXZhdGVPcHRpb25zLm9uRGVhY3RpdmF0ZVxuICAgICAgICA6IGNvbmZpZy5vbkRlYWN0aXZhdGU7XG4gICAgaWYgKG9uRGVhY3RpdmF0ZSkge1xuICAgICAgb25EZWFjdGl2YXRlKCk7XG4gICAgfVxuXG4gICAgdmFyIHJldHVybkZvY3VzID1cbiAgICAgIGRlYWN0aXZhdGVPcHRpb25zICYmIGRlYWN0aXZhdGVPcHRpb25zLnJldHVybkZvY3VzICE9PSB1bmRlZmluZWRcbiAgICAgICAgPyBkZWFjdGl2YXRlT3B0aW9ucy5yZXR1cm5Gb2N1c1xuICAgICAgICA6IGNvbmZpZy5yZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZTtcbiAgICBpZiAocmV0dXJuRm9jdXMpIHtcbiAgICAgIGRlbGF5KGZ1bmN0aW9uKCkge1xuICAgICAgICB0cnlGb2N1cyhnZXRSZXR1cm5Gb2N1c05vZGUoc3RhdGUubm9kZUZvY3VzZWRCZWZvcmVBY3RpdmF0aW9uKSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgIGlmIChzdGF0ZS5wYXVzZWQgfHwgIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuICAgIHN0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1bnBhdXNlKCkge1xuICAgIGlmICghc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHJldHVybjtcbiAgICBzdGF0ZS5wYXVzZWQgPSBmYWxzZTtcbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgYWRkTGlzdGVuZXJzKCk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCFzdGF0ZS5hY3RpdmUpIHJldHVybjtcblxuICAgIC8vIFRoZXJlIGNhbiBiZSBvbmx5IG9uZSBsaXN0ZW5pbmcgZm9jdXMgdHJhcCBhdCBhIHRpbWVcbiAgICBhY3RpdmVGb2N1c1RyYXBzLmFjdGl2YXRlVHJhcCh0cmFwKTtcblxuICAgIC8vIERlbGF5IGVuc3VyZXMgdGhhdCB0aGUgZm9jdXNlZCBlbGVtZW50IGRvZXNuJ3QgY2FwdHVyZSB0aGUgZXZlbnRcbiAgICAvLyB0aGF0IGNhdXNlZCB0aGUgZm9jdXMgdHJhcCBhY3RpdmF0aW9uLlxuICAgIGFjdGl2ZUZvY3VzRGVsYXkgPSBkZWxheShmdW5jdGlvbigpIHtcbiAgICAgIHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgfSk7XG5cbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdHJhcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBpZiAoIXN0YXRlLmFjdGl2ZSkgcmV0dXJuO1xuXG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBjaGVja0ZvY3VzSW4sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGNoZWNrUG9pbnRlckRvd24sIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrQ2xpY2ssIHRydWUpO1xuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgY2hlY2tLZXksIHRydWUpO1xuXG4gICAgcmV0dXJuIHRyYXA7XG4gIH1cblxuICBmdW5jdGlvbiBnZXROb2RlRm9yT3B0aW9uKG9wdGlvbk5hbWUpIHtcbiAgICB2YXIgb3B0aW9uVmFsdWUgPSBjb25maWdbb3B0aW9uTmFtZV07XG4gICAgdmFyIG5vZGUgPSBvcHRpb25WYWx1ZTtcbiAgICBpZiAoIW9wdGlvblZhbHVlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvcHRpb25WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5vZGUgPSBkb2MucXVlcnlTZWxlY3RvcihvcHRpb25WYWx1ZSk7XG4gICAgICBpZiAoIW5vZGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdgJyArIG9wdGlvbk5hbWUgKyAnYCByZWZlcnMgdG8gbm8ga25vd24gbm9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBub2RlID0gb3B0aW9uVmFsdWUoKTtcbiAgICAgIGlmICghbm9kZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2AnICsgb3B0aW9uTmFtZSArICdgIGRpZCBub3QgcmV0dXJuIGEgbm9kZScpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEluaXRpYWxGb2N1c05vZGUoKSB7XG4gICAgdmFyIG5vZGU7XG4gICAgaWYgKGdldE5vZGVGb3JPcHRpb24oJ2luaXRpYWxGb2N1cycpICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJyk7XG4gICAgfSBlbHNlIGlmIChjb250YWluZXIuY29udGFpbnMoZG9jLmFjdGl2ZUVsZW1lbnQpKSB7XG4gICAgICBub2RlID0gZG9jLmFjdGl2ZUVsZW1lbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUgPSBzdGF0ZS5maXJzdFRhYmJhYmxlTm9kZSB8fCBnZXROb2RlRm9yT3B0aW9uKCdmYWxsYmFja0ZvY3VzJyk7XG4gICAgfVxuXG4gICAgaWYgKCFub2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdZb3VyIGZvY3VzLXRyYXAgbmVlZHMgdG8gaGF2ZSBhdCBsZWFzdCBvbmUgZm9jdXNhYmxlIGVsZW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0UmV0dXJuRm9jdXNOb2RlKHByZXZpb3VzQWN0aXZlRWxlbWVudCkge1xuICAgIHZhciBub2RlID0gZ2V0Tm9kZUZvck9wdGlvbignc2V0UmV0dXJuRm9jdXMnKTtcbiAgICByZXR1cm4gbm9kZSA/IG5vZGUgOiBwcmV2aW91c0FjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICAvLyBUaGlzIG5lZWRzIHRvIGJlIGRvbmUgb24gbW91c2Vkb3duIGFuZCB0b3VjaHN0YXJ0IGluc3RlYWQgb2YgY2xpY2tcbiAgLy8gc28gdGhhdCBpdCBwcmVjZWRlcyB0aGUgZm9jdXMgZXZlbnQuXG4gIGZ1bmN0aW9uIGNoZWNrUG9pbnRlckRvd24oZSkge1xuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSByZXR1cm47XG4gICAgaWYgKGNvbmZpZy5jbGlja091dHNpZGVEZWFjdGl2YXRlcykge1xuICAgICAgZGVhY3RpdmF0ZSh7XG4gICAgICAgIHJldHVybkZvY3VzOiAhdGFiYmFibGUuaXNGb2N1c2FibGUoZS50YXJnZXQpXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gVGhpcyBpcyBuZWVkZWQgZm9yIG1vYmlsZSBkZXZpY2VzLlxuICAgIC8vIChJZiB3ZSdsbCBvbmx5IGxldCBgY2xpY2tgIGV2ZW50cyB0aHJvdWdoLFxuICAgIC8vIHRoZW4gb24gbW9iaWxlIHRoZXkgd2lsbCBiZSBibG9ja2VkIGFueXdheXMgaWYgYHRvdWNoc3RhcnRgIGlzIGJsb2NrZWQuKVxuICAgIGlmIChjb25maWcuYWxsb3dPdXRzaWRlQ2xpY2sgJiYgY29uZmlnLmFsbG93T3V0c2lkZUNsaWNrKGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIC8vIEluIGNhc2UgZm9jdXMgZXNjYXBlcyB0aGUgdHJhcCBmb3Igc29tZSBzdHJhbmdlIHJlYXNvbiwgcHVsbCBpdCBiYWNrIGluLlxuICBmdW5jdGlvbiBjaGVja0ZvY3VzSW4oZSkge1xuICAgIC8vIEluIEZpcmVmb3ggd2hlbiB5b3UgVGFiIG91dCBvZiBhbiBpZnJhbWUgdGhlIERvY3VtZW50IGlzIGJyaWVmbHkgZm9jdXNlZC5cbiAgICBpZiAoY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSB8fCBlLnRhcmdldCBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgdHJ5Rm9jdXMoc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrS2V5KGUpIHtcbiAgICBpZiAoY29uZmlnLmVzY2FwZURlYWN0aXZhdGVzICE9PSBmYWxzZSAmJiBpc0VzY2FwZUV2ZW50KGUpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBkZWFjdGl2YXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChpc1RhYkV2ZW50KGUpKSB7XG4gICAgICBjaGVja1RhYihlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICAvLyBIaWphY2sgVGFiIGV2ZW50cyBvbiB0aGUgZmlyc3QgYW5kIGxhc3QgZm9jdXNhYmxlIG5vZGVzIG9mIHRoZSB0cmFwLFxuICAvLyBpbiBvcmRlciB0byBwcmV2ZW50IGZvY3VzIGZyb20gZXNjYXBpbmcuIElmIGl0IGVzY2FwZXMgZm9yIGV2ZW4gYVxuICAvLyBtb21lbnQgaXQgY2FuIGVuZCB1cCBzY3JvbGxpbmcgdGhlIHBhZ2UgYW5kIGNhdXNpbmcgY29uZnVzaW9uIHNvIHdlXG4gIC8vIGtpbmQgb2YgbmVlZCB0byBjYXB0dXJlIHRoZSBhY3Rpb24gYXQgdGhlIGtleWRvd24gcGhhc2UuXG4gIGZ1bmN0aW9uIGNoZWNrVGFiKGUpIHtcbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgaWYgKGUuc2hpZnRLZXkgJiYgZS50YXJnZXQgPT09IHN0YXRlLmZpcnN0VGFiYmFibGVOb2RlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0cnlGb2N1cyhzdGF0ZS5sYXN0VGFiYmFibGVOb2RlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFlLnNoaWZ0S2V5ICYmIGUudGFyZ2V0ID09PSBzdGF0ZS5sYXN0VGFiYmFibGVOb2RlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0cnlGb2N1cyhzdGF0ZS5maXJzdFRhYmJhYmxlTm9kZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tDbGljayhlKSB7XG4gICAgaWYgKGNvbmZpZy5jbGlja091dHNpZGVEZWFjdGl2YXRlcykgcmV0dXJuO1xuICAgIGlmIChjb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpKSByZXR1cm47XG4gICAgaWYgKGNvbmZpZy5hbGxvd091dHNpZGVDbGljayAmJiBjb25maWcuYWxsb3dPdXRzaWRlQ2xpY2soZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVUYWJiYWJsZU5vZGVzKCkge1xuICAgIHZhciB0YWJiYWJsZU5vZGVzID0gdGFiYmFibGUoY29udGFpbmVyKTtcbiAgICBzdGF0ZS5maXJzdFRhYmJhYmxlTm9kZSA9IHRhYmJhYmxlTm9kZXNbMF0gfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpO1xuICAgIHN0YXRlLmxhc3RUYWJiYWJsZU5vZGUgPVxuICAgICAgdGFiYmFibGVOb2Rlc1t0YWJiYWJsZU5vZGVzLmxlbmd0aCAtIDFdIHx8IGdldEluaXRpYWxGb2N1c05vZGUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyeUZvY3VzKG5vZGUpIHtcbiAgICBpZiAobm9kZSA9PT0gZG9jLmFjdGl2ZUVsZW1lbnQpIHJldHVybjtcbiAgICBpZiAoIW5vZGUgfHwgIW5vZGUuZm9jdXMpIHtcbiAgICAgIHRyeUZvY3VzKGdldEluaXRpYWxGb2N1c05vZGUoKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG5vZGUuZm9jdXMoKTtcbiAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IG5vZGU7XG4gICAgaWYgKGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpKSB7XG4gICAgICBub2RlLnNlbGVjdCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpc1NlbGVjdGFibGVJbnB1dChub2RlKSB7XG4gIHJldHVybiAoXG4gICAgbm9kZS50YWdOYW1lICYmXG4gICAgbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcgJiZcbiAgICB0eXBlb2Ygbm9kZS5zZWxlY3QgPT09ICdmdW5jdGlvbidcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNFc2NhcGVFdmVudChlKSB7XG4gIHJldHVybiBlLmtleSA9PT0gJ0VzY2FwZScgfHwgZS5rZXkgPT09ICdFc2MnIHx8IGUua2V5Q29kZSA9PT0gMjc7XG59XG5cbmZ1bmN0aW9uIGlzVGFiRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdUYWInIHx8IGUua2V5Q29kZSA9PT0gOTtcbn1cblxuZnVuY3Rpb24gZGVsYXkoZm4pIHtcbiAgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZvY3VzVHJhcDtcbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0UHJvcFR5cGVzU2VjcmV0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsInZhciBjYW5kaWRhdGVTZWxlY3RvcnMgPSBbXG4gICdpbnB1dCcsXG4gICdzZWxlY3QnLFxuICAndGV4dGFyZWEnLFxuICAnYVtocmVmXScsXG4gICdidXR0b24nLFxuICAnW3RhYmluZGV4XScsXG4gICdhdWRpb1tjb250cm9sc10nLFxuICAndmlkZW9bY29udHJvbHNdJyxcbiAgJ1tjb250ZW50ZWRpdGFibGVdOm5vdChbY29udGVudGVkaXRhYmxlPVwiZmFsc2VcIl0pJyxcbl07XG52YXIgY2FuZGlkYXRlU2VsZWN0b3IgPSBjYW5kaWRhdGVTZWxlY3RvcnMuam9pbignLCcpO1xuXG52YXIgbWF0Y2hlcyA9IHR5cGVvZiBFbGVtZW50ID09PSAndW5kZWZpbmVkJ1xuICA/IGZ1bmN0aW9uICgpIHt9XG4gIDogRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcyB8fCBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvciB8fCBFbGVtZW50LnByb3RvdHlwZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbmZ1bmN0aW9uIHRhYmJhYmxlKGVsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gIHZhciByZWd1bGFyVGFiYmFibGVzID0gW107XG4gIHZhciBvcmRlcmVkVGFiYmFibGVzID0gW107XG5cbiAgdmFyIGNhbmRpZGF0ZXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9yKTtcblxuICBpZiAob3B0aW9ucy5pbmNsdWRlQ29udGFpbmVyKSB7XG4gICAgaWYgKG1hdGNoZXMuY2FsbChlbCwgY2FuZGlkYXRlU2VsZWN0b3IpKSB7XG4gICAgICBjYW5kaWRhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGNhbmRpZGF0ZXMpO1xuICAgICAgY2FuZGlkYXRlcy51bnNoaWZ0KGVsKTtcbiAgICB9XG4gIH1cblxuICB2YXIgaSwgY2FuZGlkYXRlLCBjYW5kaWRhdGVUYWJpbmRleDtcbiAgZm9yIChpID0gMDsgaSA8IGNhbmRpZGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjYW5kaWRhdGUgPSBjYW5kaWRhdGVzW2ldO1xuXG4gICAgaWYgKCFpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUoY2FuZGlkYXRlKSkgY29udGludWU7XG5cbiAgICBjYW5kaWRhdGVUYWJpbmRleCA9IGdldFRhYmluZGV4KGNhbmRpZGF0ZSk7XG4gICAgaWYgKGNhbmRpZGF0ZVRhYmluZGV4ID09PSAwKSB7XG4gICAgICByZWd1bGFyVGFiYmFibGVzLnB1c2goY2FuZGlkYXRlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3JkZXJlZFRhYmJhYmxlcy5wdXNoKHtcbiAgICAgICAgZG9jdW1lbnRPcmRlcjogaSxcbiAgICAgICAgdGFiSW5kZXg6IGNhbmRpZGF0ZVRhYmluZGV4LFxuICAgICAgICBub2RlOiBjYW5kaWRhdGUsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YXIgdGFiYmFibGVOb2RlcyA9IG9yZGVyZWRUYWJiYWJsZXNcbiAgICAuc29ydChzb3J0T3JkZXJlZFRhYmJhYmxlcylcbiAgICAubWFwKGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGEubm9kZSB9KVxuICAgIC5jb25jYXQocmVndWxhclRhYmJhYmxlcyk7XG5cbiAgcmV0dXJuIHRhYmJhYmxlTm9kZXM7XG59XG5cbnRhYmJhYmxlLmlzVGFiYmFibGUgPSBpc1RhYmJhYmxlO1xudGFiYmFibGUuaXNGb2N1c2FibGUgPSBpc0ZvY3VzYWJsZTtcblxuZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG5vZGUpIHtcbiAgaWYgKFxuICAgICFpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG5vZGUpXG4gICAgfHwgaXNOb25UYWJiYWJsZVJhZGlvKG5vZGUpXG4gICAgfHwgZ2V0VGFiaW5kZXgobm9kZSkgPCAwXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaXNUYWJiYWJsZShub2RlKSB7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgY2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG5vZGUpO1xufVxuXG5mdW5jdGlvbiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG5vZGUpIHtcbiAgaWYgKFxuICAgIG5vZGUuZGlzYWJsZWRcbiAgICB8fCBpc0hpZGRlbklucHV0KG5vZGUpXG4gICAgfHwgaXNIaWRkZW4obm9kZSlcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG52YXIgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IgPSBjYW5kaWRhdGVTZWxlY3RvcnMuY29uY2F0KCdpZnJhbWUnKS5qb2luKCcsJyk7XG5mdW5jdGlvbiBpc0ZvY3VzYWJsZShub2RlKSB7XG4gIGlmICghbm9kZSkgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShub2RlKTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFiaW5kZXgobm9kZSkge1xuICB2YXIgdGFiaW5kZXhBdHRyID0gcGFyc2VJbnQobm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JyksIDEwKTtcbiAgaWYgKCFpc05hTih0YWJpbmRleEF0dHIpKSByZXR1cm4gdGFiaW5kZXhBdHRyO1xuICAvLyBCcm93c2VycyBkbyBub3QgcmV0dXJuIGB0YWJJbmRleGAgY29ycmVjdGx5IGZvciBjb250ZW50RWRpdGFibGUgbm9kZXM7XG4gIC8vIHNvIGlmIHRoZXkgZG9uJ3QgaGF2ZSBhIHRhYmluZGV4IGF0dHJpYnV0ZSBzcGVjaWZpY2FsbHkgc2V0LCBhc3N1bWUgaXQncyAwLlxuICBpZiAoaXNDb250ZW50RWRpdGFibGUobm9kZSkpIHJldHVybiAwO1xuICByZXR1cm4gbm9kZS50YWJJbmRleDtcbn1cblxuZnVuY3Rpb24gc29ydE9yZGVyZWRUYWJiYWJsZXMoYSwgYikge1xuICByZXR1cm4gYS50YWJJbmRleCA9PT0gYi50YWJJbmRleCA/IGEuZG9jdW1lbnRPcmRlciAtIGIuZG9jdW1lbnRPcmRlciA6IGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xufVxuXG5mdW5jdGlvbiBpc0NvbnRlbnRFZGl0YWJsZShub2RlKSB7XG4gIHJldHVybiBub2RlLmNvbnRlbnRFZGl0YWJsZSA9PT0gJ3RydWUnO1xufVxuXG5mdW5jdGlvbiBpc0lucHV0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJztcbn1cblxuZnVuY3Rpb24gaXNIaWRkZW5JbnB1dChub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ2hpZGRlbic7XG59XG5cbmZ1bmN0aW9uIGlzUmFkaW8obm9kZSkge1xuICByZXR1cm4gaXNJbnB1dChub2RlKSAmJiBub2RlLnR5cGUgPT09ICdyYWRpbyc7XG59XG5cbmZ1bmN0aW9uIGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc1JhZGlvKG5vZGUpICYmICFpc1RhYmJhYmxlUmFkaW8obm9kZSk7XG59XG5cbmZ1bmN0aW9uIGdldENoZWNrZWRSYWRpbyhub2Rlcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vZGVzW2ldLmNoZWNrZWQpIHtcbiAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNUYWJiYWJsZVJhZGlvKG5vZGUpIHtcbiAgaWYgKCFub2RlLm5hbWUpIHJldHVybiB0cnVlO1xuICAvLyBUaGlzIHdvbid0IGFjY291bnQgZm9yIHRoZSBlZGdlIGNhc2Ugd2hlcmUgeW91IGhhdmUgcmFkaW8gZ3JvdXBzIHdpdGggdGhlIHNhbWVcbiAgLy8gaW4gc2VwYXJhdGUgZm9ybXMgb24gdGhlIHNhbWUgcGFnZS5cbiAgdmFyIHJhZGlvU2V0ID0gbm9kZS5vd25lckRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJyArIG5vZGUubmFtZSArICdcIl0nKTtcbiAgdmFyIGNoZWNrZWQgPSBnZXRDaGVja2VkUmFkaW8ocmFkaW9TZXQpO1xuICByZXR1cm4gIWNoZWNrZWQgfHwgY2hlY2tlZCA9PT0gbm9kZTtcbn1cblxuZnVuY3Rpb24gaXNIaWRkZW4obm9kZSkge1xuICAvLyBvZmZzZXRQYXJlbnQgYmVpbmcgbnVsbCB3aWxsIGFsbG93IGRldGVjdGluZyBjYXNlcyB3aGVyZSBhbiBlbGVtZW50IGlzIGludmlzaWJsZSBvciBpbnNpZGUgYW4gaW52aXNpYmxlIGVsZW1lbnQsXG4gIC8vIGFzIGxvbmcgYXMgdGhlIGVsZW1lbnQgZG9lcyBub3QgdXNlIHBvc2l0aW9uOiBmaXhlZC4gRm9yIHRoZW0sIHRoZWlyIHZpc2liaWxpdHkgaGFzIHRvIGJlIGNoZWNrZWQgZGlyZWN0bHkgYXMgd2VsbC5cbiAgcmV0dXJuIG5vZGUub2Zmc2V0UGFyZW50ID09PSBudWxsIHx8IGdldENvbXB1dGVkU3R5bGUobm9kZSkudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbic7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdGFiYmFibGU7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGV4dGVuZFxuXG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIHRhcmdldCA9IHt9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldXG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuUmVhY3Q7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuYmxvY2tzeU9wdGlvbnM7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cuY3RFdmVudHM7IiwibW9kdWxlLmV4cG9ydHMgPSB3aW5kb3cud3AuZWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9IHdpbmRvdy53cC5pMThuOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgV29vY29tbWVyY2VFeHRyYSBmcm9tICcuL1dvb2NvbW1lcmNlRXh0cmEnXG5cbmltcG9ydCBjdEV2ZW50cyBmcm9tICdjdC1ldmVudHMnXG5cbmN0RXZlbnRzLm9uKCdjdDpleHRlbnNpb25zOmNhcmQnLCAoeyBDdXN0b21Db21wb25lbnQsIGV4dGVuc2lvbiB9KSA9PiB7XG5cdGlmIChleHRlbnNpb24ubmFtZSAhPT0gJ3dvb2NvbW1lcmNlLWV4dHJhJykgcmV0dXJuXG5cdEN1c3RvbUNvbXBvbmVudC5leHRlbnNpb24gPSBXb29jb21tZXJjZUV4dHJhXG59KVxuIl0sIm5hbWVzIjpbImNyZWF0ZUVsZW1lbnQiLCJDb21wb25lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZyYWdtZW50IiwiY3RFdmVudHMiLCJTd2l0Y2giLCJPcHRpb25zUGFuZWwiLCJjbGFzc25hbWVzIiwiX18iLCJPdmVybGF5Iiwid29vRXh0cmFTZXR0aW5nc0NhY2hlIiwiY3RfZW5hYmxlX3N3YXRjaGVzIiwiY3RfZW5hYmxlX2JyYW5kcyIsImN0X2JyYW5kc19zaW5nbGVfc2x1ZyIsIkVkaXRTZXR0aW5ncyIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsImN1cnJlbnRUYWIiLCJzZXRDdXJyZW50VGFiIiwid29vRXh0cmFTZXR0aW5ncyIsInNldFdvb0V4dHJhU2V0dGluZ3MiLCJsb2FkRGF0YSIsImJvZHkiLCJGb3JtRGF0YSIsImFwcGVuZCIsImZldGNoIiwiY3REYXNoYm9hcmRMb2NhbGl6YXRpb25zIiwiYWpheF91cmwiLCJtZXRob2QiLCJyZXNwb25zZSIsInN0YXR1cyIsImpzb24iLCJzdWNjZXNzIiwiZGF0YSIsInNldHRpbmdzIiwiaGFuZGxlU2F2ZSIsIndwIiwiYWpheCIsInNlbmQiLCJ1cmwiLCJjb250ZW50VHlwZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwibWFwIiwidGFiIiwiYWN0aXZlIiwiZGV0YWlscyIsImFkdmFuY2VkIiwiYmVoYXZpb3IiLCJvcHRpb25JZCIsIm9wdGlvblZhbHVlIiwidHlwZSIsInZhbHVlIiwibGFiZWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmlnZ2VyIiwidXNlRXh0ZW5zaW9uUmVhZG1lIiwidXNlQWN0aXZhdGlvbkFjdGlvbiIsIldvb2NvbW1lcmNlRXh0cmEiLCJleHRlbnNpb24iLCJvbkV4dHNTeW5jIiwiaXNMb2FkaW5nIiwiYWN0aXZhdGlvbkFjdGlvbiIsInNob3dSZWFkbWUiLCJyZWFkbWUiLCJsb2NrZWQiLCJfX29iamVjdCIsImNvbmZpZyIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsIkRhc2hib2FyZENvbnRleHQiLCJ3aW5kb3ciLCJQcm92aWRlciIsIkNvbnN1bWVyIiwidXNlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJEaWFsb2ciLCJEaWFsb2dPdmVybGF5IiwiRGlhbG9nQ29udGVudCIsIlRyYW5zaXRpb24iLCJkZWZhdWx0SXNWaXNpYmxlIiwiaSIsIml0ZW1zIiwiaXNWaXNpYmxlIiwicmVuZGVyIiwiY2xhc3NOYW1lIiwib25EaXNtaXNzIiwiZG9jdW1lbnQiLCJjbGFzc0xpc3QiLCJkdXJhdGlvbiIsIm9wYWNpdHkiLCJ5IiwicHJvcHMiLCJxdWVyeVNlbGVjdG9yIiwidHJhbnNmb3JtIiwiUG9ydGFsIiwiY2hlY2tTdHlsZXMiLCJ3cmFwRXZlbnQiLCJjcmVhdGVGb2N1c1RyYXAiLCJjcmVhdGVBcmlhSGlkZXIiLCJkaWFsb2dOb2RlIiwib3JpZ2luYWxWYWx1ZXMiLCJyb290Tm9kZXMiLCJBcnJheSIsInByb3RvdHlwZSIsImZvckVhY2giLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsIm5vZGUiLCJwYXJlbnROb2RlIiwiYXR0ciIsImdldEF0dHJpYnV0ZSIsImFscmVhZHlIaWRkZW4iLCJwdXNoIiwic2V0QXR0cmlidXRlIiwiaW5kZXgiLCJvcmlnaW5hbFZhbHVlIiwicmVtb3ZlQXR0cmlidXRlIiwiayIsImNoZWNrRGlhbG9nU3R5bGVzIiwicG9ydGFsRGlkTW91bnQiLCJyZWZzIiwiaW5pdGlhbEZvY3VzUmVmIiwiZGlzcG9zZUFyaWFIaWRlciIsIm92ZXJsYXlOb2RlIiwidHJhcCIsImluaXRpYWxGb2N1cyIsImN1cnJlbnQiLCJ1bmRlZmluZWQiLCJmYWxsYmFja0ZvY3VzIiwiY29udGVudE5vZGUiLCJlc2NhcGVEZWFjdGl2YXRlcyIsImNsaWNrT3V0c2lkZURlYWN0aXZhdGVzIiwiY29udGVudFdpbGxVbm1vdW50IiwiZGVhY3RpdmF0ZSIsIkZvY3VzQ29udGV4dCIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsImNvbnRhaW5lciIsImlzT3BlbiIsIm9uQ2xpY2siLCJvbktleURvd24iLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImtleSIsInByb3BUeXBlcyIsImNvbnRlbnRSZWYiLCJjcmVhdGVQb3J0YWwiLCJjaGlsZHJlbiIsImZvcmNlVXBkYXRlIiwiY29udGFpbmVyTm9kZSIsImhhc093blByb3BlcnR5IiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDaGlsZCIsInNwcmludGYiLCJjYiIsInNldElzTG9hZGluZyIsImlzRGlzcGxheWVkIiwic2V0SXNEaXNwbGF5ZWQiLCJMaW5rIiwiaGlzdG9yeSIsImlzX3BybyIsInBsdWdpbl9kYXRhIiwibWFrZUFjdGlvbiIsInBybyIsInJlcXVpcmVfcmVmcmVzaCIsImxvY2F0aW9uIiwicmVsb2FkIiwic2V0VGltZW91dCIsIm5hdmlnYXRlIiwic2V0SXNTaG93aW5nUmVhZG1lIiwiX19odG1sIiwib24iLCJDdXN0b21Db21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9