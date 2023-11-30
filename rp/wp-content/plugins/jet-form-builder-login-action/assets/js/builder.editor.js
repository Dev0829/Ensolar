/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./jet-form-builder/action.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/jfb-editor/src/actions/EditorData.js":
/*!************************************************************!*\
  !*** ../node_modules/jfb-editor/src/actions/EditorData.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class EditorData {
	constructor( type, label ) {
		this.type = type;
		this.label = label;
		this.source = {};
		this.__labels = {};
		this.__help_messages = {};
		this.__gateway_attrs = {};
		this.__messages = {};
	}

	setSource( config ) {
		this.source = config;

		return this;
	}

	setLabels( config ) {
		this.__labels = config;

		return this;
	}

	setHelp( config ) {
		this.__help_messages = config;

		return this;
	}

	setGatewayAttrs( config ) {
		this.__gateway_attrs = config;

		return this;
	}

	setMessages( config ) {
		this.__messages = config;

		return this;
	}

	exportAll() {
		if ( ! ( 'jetFormActionTypes' in window ) ) {
			window.jetFormActionTypes = [];
		}

		const source = this.source;
		const label = this.exportLabels();
		const help = this.exportHelp();
		const gatewayAttrs = this.exportGatewayAttrs();
		const messages = this.exportMessages();

		const exportObj =  { source, label, help, messages, gatewayAttrs }

		const actionIndex = window.jetFormActionTypes.findIndex( type => this.type === type.id );
		const actionData = {
			id: this.type,
			name: this.label,
			...exportObj
		};

		if ( -1 === actionIndex ) {
			window.jetFormActionTypes.push( actionData );
		} else {
			window.jetFormActionTypes[ actionIndex ] = {
				...window.jetFormActionTypes[ actionIndex ] ,
				...exportObj
			};
		}

		return exportObj;
	}


	exportLabels() {
		return this.getLocalizedWithFunc( '__labels', '[Empty Label]' );
	};

	exportHelp() {
		return this.getLocalizedWithFunc( '__help_messages' );
	};

	exportGatewayAttrs() {
		return this.getLocalizedWithFunc( '__gateway_attrs', [] );
	};

	exportMessages() {
		return this.getLocalizedWithFunc( '__messages', {} );
	};

	getLocalizedWithFunc( objectKey, ifEmptyReturn = '' ) {

		let action = false;

		if ( objectKey in this ) {
			action = this[ objectKey ];
		}

		if ( ! action ) {
			return () => ifEmptyReturn;
		}

		return attr => {
			if ( attr ) {
				return ( action[ attr ] ? action[ attr ] : ifEmptyReturn );
			}
			else {
				return action;
			}
		};
	};
}

/* harmony default export */ __webpack_exports__["default"] = (EditorData);

/***/ }),

/***/ "../node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue":
/*!*************************************************************************!*\
  !*** ../node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JetFormEditorRow_vue_vue_type_template_id_076e38b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JetFormEditorRow.vue?vue&type=template&id=076e38b6& */ "../node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue?vue&type=template&id=076e38b6&");
/* harmony import */ var _JetFormEditorRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JetFormEditorRow.vue?vue&type=script&lang=js& */ "../node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JetFormEditorRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JetFormEditorRow_vue_vue_type_template_id_076e38b6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JetFormEditorRow_vue_vue_type_template_id_076e38b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ../node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_index_js_vue_loader_options_JetFormEditorRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib??vue-loader-options!./JetFormEditorRow.vue?vue&type=script&lang=js& */ "../node_modules/vue-loader/lib/index.js?!../node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_vue_loader_lib_index_js_vue_loader_options_JetFormEditorRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "../node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue?vue&type=template&id=076e38b6&":
/*!********************************************************************************************************!*\
  !*** ../node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue?vue&type=template&id=076e38b6& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_JetFormEditorRow_vue_vue_type_template_id_076e38b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../vue-loader/lib??vue-loader-options!./JetFormEditorRow.vue?vue&type=template&id=076e38b6& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!../node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue?vue&type=template&id=076e38b6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_JetFormEditorRow_vue_vue_type_template_id_076e38b6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_loader_lib_index_js_vue_loader_options_JetFormEditorRow_vue_vue_type_template_id_076e38b6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "../node_modules/jfb-editor/src/main.js":
/*!**********************************************!*\
  !*** ../node_modules/jfb-editor/src/main.js ***!
  \**********************************************/
/*! exports provided: Actions, JetFormEditorRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Actions", function() { return Actions; });
/* harmony import */ var _actions_EditorData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions/EditorData */ "../node_modules/jfb-editor/src/actions/EditorData.js");
/* harmony import */ var _engine_editor_JetFormEditorRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engine-editor/JetFormEditorRow */ "../node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JetFormEditorRow", function() { return _engine_editor_JetFormEditorRow__WEBPACK_IMPORTED_MODULE_1__["default"]; });




const Actions = { EditorData: _actions_EditorData__WEBPACK_IMPORTED_MODULE_0__["default"] };



/***/ }),

/***/ "../node_modules/vue-loader/lib/index.js?!../node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib??vue-loader-options!../node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
	name: 'jet-form-editor-row',
	props: {
		label: {
			type: String,
			default: ''
		},
		labelClass: {
			type: String,
			default: ''
		},
		helpClass: {
			type: String,
			default: ''
		},
		controlClass: {
			type: String,
			default: ''
		},
	},
	computed: {
		labelClassObject() {
			return this.getClass( 'defaultLabelClass', 'labelClass' )
		},
		helpClassObject() {
			return this.getClass( 'defaultHelpClass', 'helpClass' )
		},
		controlClassObject() {
			return this.getClass( 'defaultControlClass', 'controlClass' )
		}
	},
	data() {
		return {
			defaultLabelClass: 'jet-form-editor__row-label',
			defaultHelpClass: 'jet-form-editor__row-notice',
			defaultControlClass: 'jet-form-editor__row-control',
		}
	},
	methods: {
		getClass( defaultKey, propKey ) {
			return {
				[ `${ this[ defaultKey ] } ${ this[ propKey ] }` ]: this[ propKey ],
				[ this[ defaultKey ] ]: ! this[ propKey ]
			};
		}
	}
});


/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!../node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue?vue&type=template&id=076e38b6&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!../node_modules/jfb-editor/src/engine-editor/JetFormEditorRow.vue?vue&type=template&id=076e38b6& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "jet-form-editor__row" }, [
    _c("div", { class: _vm.labelClassObject }, [
      _vm._v("\n\t\t" + _vm._s(_vm.label) + "\n\t\t"),
      this.$slots.helpLabel
        ? _c("div", { class: _vm.helpClassObject }, [_vm._t("helpLabel")], 2)
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      { class: _vm.controlClassObject },
      [
        _vm._t("default"),
        _vm._v(" "),
        this.$slots.helpControl
          ? _c(
              "div",
              { class: _vm.helpClassObject },
              [_vm._t("helpControl")],
              2
            )
          : _vm._e()
      ],
      2
    ),
    _vm._v(" "),
    this.$slots.helpSide
      ? _c(
          "div",
          { class: _vm.helpClassObject },
          [_vm._v("\n\t\t    "), _vm._t("helpSide")],
          2
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!*********************************************************************!*\
  !*** ../node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./jet-form-builder/action.js":
/*!************************************!*\
  !*** ./jet-form-builder/action.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source */ "./source.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var _JetFBActions = JetFBActions,
    withPlaceholder = _JetFBActions.Tools.withPlaceholder,
    addAction = _JetFBActions.addAction,
    getFormFieldsBlocks = _JetFBActions.getFormFieldsBlocks;
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _JetFBComponents = JetFBComponents,
    ActionFieldsMap = _JetFBComponents.ActionFieldsMap,
    WrapperRequiredControl = _JetFBComponents.WrapperRequiredControl,
    RepeaterWithState = _JetFBComponents.RepeaterWithState,
    ActionModal = _JetFBComponents.ActionModal;
var _wp$components = wp.components,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl;
var addFilter = wp.hooks.addFilter;
var source = _source__WEBPACK_IMPORTED_MODULE_0__["getLocalizedFullPack"].source,
    label = _source__WEBPACK_IMPORTED_MODULE_0__["getLocalizedFullPack"].label,
    help = _source__WEBPACK_IMPORTED_MODULE_0__["getLocalizedFullPack"].help;
addAction('login', function LoginAction(_ref) {
  var settings = _ref.settings,
      onChangeSetting = _ref.onChangeSetting;

  var _useState = useState(function () {
    return getFormFieldsBlocks([], '--');
  }),
      _useState2 = _slicedToArray(_useState, 1),
      formFields = _useState2[0];

  return wp.element.createElement(React.Fragment, null, wp.element.createElement(SelectControl, {
    label: label('user_login_field'),
    labelPosition: "side",
    value: settings.user_login_field,
    onChange: function onChange(val) {
      return onChangeSetting(val, 'user_login_field');
    },
    options: formFields
  }), wp.element.createElement(SelectControl, {
    label: label('user_pass_field'),
    labelPosition: "side",
    value: settings.user_pass_field,
    onChange: function onChange(val) {
      return onChangeSetting(val, 'user_pass_field');
    },
    options: formFields
  }), wp.element.createElement(SelectControl, {
    label: label('remember_field'),
    labelPosition: "side",
    value: settings.remember_field,
    onChange: function onChange(val) {
      return onChangeSetting(val, 'remember_field');
    },
    options: formFields
  }), wp.element.createElement(ToggleControl, {
    label: label('secure_cookie'),
    checked: settings.secure_cookie,
    onChange: function onChange(val) {
      return onChangeSetting(val, 'secure_cookie');
    }
  }));
});
addFilter('jet.fb.section.actions.header.login', 'jet-form-builder', function () {
  return wp.element.createElement("span", {
    style: {
      marginTop: '0px',
      color: 'rgb(117, 117, 117)'
    }
  }, 'Note: if you need a redirect, use Redirect to Page.');
});

/***/ }),

/***/ "./source.js":
/*!*******************!*\
  !*** ./source.js ***!
  \*******************/
/*! exports provided: getLocalizedFullPack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalizedFullPack", function() { return getLocalizedFullPack; });
/* harmony import */ var jfb_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jfb-editor */ "../node_modules/jfb-editor/src/main.js");

var __ = wp.i18n.__;
var getLocalizedFullPack = new jfb_editor__WEBPACK_IMPORTED_MODULE_0__["Actions"].EditorData('login').setLabels({
  user_login_field: __('User Login Field', 'jet-form-builder-login-action'),
  user_pass_field: __('User Password Field', 'jet-form-builder-login-action'),
  remember_field: __('Remember Field', 'jet-form-builder-login-action'),
  secure_cookie: __('Whether to use secure cookie', 'jet-form-builder-login-action')
}).exportAll();


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5lZGl0b3IuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9qZmItZWRpdG9yL3NyYy9hY3Rpb25zL0VkaXRvckRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9qZmItZWRpdG9yL3NyYy9lbmdpbmUtZWRpdG9yL0pldEZvcm1FZGl0b3JSb3cudnVlIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvamZiLWVkaXRvci9zcmMvZW5naW5lLWVkaXRvci9KZXRGb3JtRWRpdG9yUm93LnZ1ZT80YzA5Iiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvamZiLWVkaXRvci9zcmMvZW5naW5lLWVkaXRvci9KZXRGb3JtRWRpdG9yUm93LnZ1ZT81Y2RjIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvamZiLWVkaXRvci9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vSmV0Rm9ybUVkaXRvclJvdy52dWUiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9qZmItZWRpdG9yL3NyYy9lbmdpbmUtZWRpdG9yL0pldEZvcm1FZGl0b3JSb3cudnVlP2Y3YTkiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vamV0LWZvcm0tYnVpbGRlci9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc291cmNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vamV0LWZvcm0tYnVpbGRlci9hY3Rpb24uanNcIik7XG4iLCJjbGFzcyBFZGl0b3JEYXRhIHtcclxuXHRjb25zdHJ1Y3RvciggdHlwZSwgbGFiZWwgKSB7XHJcblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xyXG5cdFx0dGhpcy5sYWJlbCA9IGxhYmVsO1xyXG5cdFx0dGhpcy5zb3VyY2UgPSB7fTtcclxuXHRcdHRoaXMuX19sYWJlbHMgPSB7fTtcclxuXHRcdHRoaXMuX19oZWxwX21lc3NhZ2VzID0ge307XHJcblx0XHR0aGlzLl9fZ2F0ZXdheV9hdHRycyA9IHt9O1xyXG5cdFx0dGhpcy5fX21lc3NhZ2VzID0ge307XHJcblx0fVxyXG5cclxuXHRzZXRTb3VyY2UoIGNvbmZpZyApIHtcclxuXHRcdHRoaXMuc291cmNlID0gY29uZmlnO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0c2V0TGFiZWxzKCBjb25maWcgKSB7XHJcblx0XHR0aGlzLl9fbGFiZWxzID0gY29uZmlnO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0c2V0SGVscCggY29uZmlnICkge1xyXG5cdFx0dGhpcy5fX2hlbHBfbWVzc2FnZXMgPSBjb25maWc7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRzZXRHYXRld2F5QXR0cnMoIGNvbmZpZyApIHtcclxuXHRcdHRoaXMuX19nYXRld2F5X2F0dHJzID0gY29uZmlnO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0c2V0TWVzc2FnZXMoIGNvbmZpZyApIHtcclxuXHRcdHRoaXMuX19tZXNzYWdlcyA9IGNvbmZpZztcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGV4cG9ydEFsbCgpIHtcclxuXHRcdGlmICggISAoICdqZXRGb3JtQWN0aW9uVHlwZXMnIGluIHdpbmRvdyApICkge1xyXG5cdFx0XHR3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzID0gW107XHJcblx0XHR9XHJcblxyXG5cdFx0Y29uc3Qgc291cmNlID0gdGhpcy5zb3VyY2U7XHJcblx0XHRjb25zdCBsYWJlbCA9IHRoaXMuZXhwb3J0TGFiZWxzKCk7XHJcblx0XHRjb25zdCBoZWxwID0gdGhpcy5leHBvcnRIZWxwKCk7XHJcblx0XHRjb25zdCBnYXRld2F5QXR0cnMgPSB0aGlzLmV4cG9ydEdhdGV3YXlBdHRycygpO1xyXG5cdFx0Y29uc3QgbWVzc2FnZXMgPSB0aGlzLmV4cG9ydE1lc3NhZ2VzKCk7XHJcblxyXG5cdFx0Y29uc3QgZXhwb3J0T2JqID0gIHsgc291cmNlLCBsYWJlbCwgaGVscCwgbWVzc2FnZXMsIGdhdGV3YXlBdHRycyB9XHJcblxyXG5cdFx0Y29uc3QgYWN0aW9uSW5kZXggPSB3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzLmZpbmRJbmRleCggdHlwZSA9PiB0aGlzLnR5cGUgPT09IHR5cGUuaWQgKTtcclxuXHRcdGNvbnN0IGFjdGlvbkRhdGEgPSB7XHJcblx0XHRcdGlkOiB0aGlzLnR5cGUsXHJcblx0XHRcdG5hbWU6IHRoaXMubGFiZWwsXHJcblx0XHRcdC4uLmV4cG9ydE9ialxyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAoIC0xID09PSBhY3Rpb25JbmRleCApIHtcclxuXHRcdFx0d2luZG93LmpldEZvcm1BY3Rpb25UeXBlcy5wdXNoKCBhY3Rpb25EYXRhICk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzWyBhY3Rpb25JbmRleCBdID0ge1xyXG5cdFx0XHRcdC4uLndpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXNbIGFjdGlvbkluZGV4IF0gLFxyXG5cdFx0XHRcdC4uLmV4cG9ydE9ialxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBleHBvcnRPYmo7XHJcblx0fVxyXG5cclxuXHJcblx0ZXhwb3J0TGFiZWxzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0TG9jYWxpemVkV2l0aEZ1bmMoICdfX2xhYmVscycsICdbRW1wdHkgTGFiZWxdJyApO1xyXG5cdH07XHJcblxyXG5cdGV4cG9ydEhlbHAoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRMb2NhbGl6ZWRXaXRoRnVuYyggJ19faGVscF9tZXNzYWdlcycgKTtcclxuXHR9O1xyXG5cclxuXHRleHBvcnRHYXRld2F5QXR0cnMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRMb2NhbGl6ZWRXaXRoRnVuYyggJ19fZ2F0ZXdheV9hdHRycycsIFtdICk7XHJcblx0fTtcclxuXHJcblx0ZXhwb3J0TWVzc2FnZXMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRMb2NhbGl6ZWRXaXRoRnVuYyggJ19fbWVzc2FnZXMnLCB7fSApO1xyXG5cdH07XHJcblxyXG5cdGdldExvY2FsaXplZFdpdGhGdW5jKCBvYmplY3RLZXksIGlmRW1wdHlSZXR1cm4gPSAnJyApIHtcclxuXHJcblx0XHRsZXQgYWN0aW9uID0gZmFsc2U7XHJcblxyXG5cdFx0aWYgKCBvYmplY3RLZXkgaW4gdGhpcyApIHtcclxuXHRcdFx0YWN0aW9uID0gdGhpc1sgb2JqZWN0S2V5IF07XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCAhIGFjdGlvbiApIHtcclxuXHRcdFx0cmV0dXJuICgpID0+IGlmRW1wdHlSZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGF0dHIgPT4ge1xyXG5cdFx0XHRpZiAoIGF0dHIgKSB7XHJcblx0XHRcdFx0cmV0dXJuICggYWN0aW9uWyBhdHRyIF0gPyBhY3Rpb25bIGF0dHIgXSA6IGlmRW1wdHlSZXR1cm4gKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gYWN0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRvckRhdGE7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9KZXRGb3JtRWRpdG9yUm93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzZlMzhiNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9KZXRGb3JtRWRpdG9yUm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSmV0Rm9ybUVkaXRvclJvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiQzpcXFxcT3BlblNlcnZlclxcXFxkb21haW5zXFxcXGRldmVsb3AuamV0XFxcXGRldmVsb3BcXFxcd3AtY29udGVudFxcXFxwbHVnaW5zXFxcXGpldC1mb3JtLWJ1aWxkZXItbG9naW4tYWN0aW9uXFxcXGFzc2V0c1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNzZlMzhiNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNzZlMzhiNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNzZlMzhiNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSmV0Rm9ybUVkaXRvclJvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDc2ZTM4YjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDc2ZTM4YjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIm5vZGVfbW9kdWxlcy9qZmItZWRpdG9yL3NyYy9lbmdpbmUtZWRpdG9yL0pldEZvcm1FZGl0b3JSb3cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSmV0Rm9ybUVkaXRvclJvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0pldEZvcm1FZGl0b3JSb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9KZXRGb3JtRWRpdG9yUm93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzZlMzhiNiZcIiIsImltcG9ydCBFZGl0b3JEYXRhIGZyb20gXCIuL2FjdGlvbnMvRWRpdG9yRGF0YVwiO1xyXG5pbXBvcnQgSmV0Rm9ybUVkaXRvclJvdyBmcm9tIFwiLi9lbmdpbmUtZWRpdG9yL0pldEZvcm1FZGl0b3JSb3dcIjtcclxuXHJcbmNvbnN0IEFjdGlvbnMgPSB7IEVkaXRvckRhdGEgfTtcclxuXHJcbmV4cG9ydCB7IEFjdGlvbnMsIEpldEZvcm1FZGl0b3JSb3cgfTsiLCI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cImpldC1mb3JtLWVkaXRvcl9fcm93XCI+XHJcblx0XHQ8ZGl2IDpjbGFzcz1cImxhYmVsQ2xhc3NPYmplY3RcIj5cclxuXHRcdFx0e3sgbGFiZWwgfX1cclxuXHRcdFx0PGRpdiA6Y2xhc3M9XCJoZWxwQ2xhc3NPYmplY3RcIiB2LWlmPVwidGhpcy4kc2xvdHMuaGVscExhYmVsXCI+XHJcblx0XHRcdFx0PHNsb3QgbmFtZT1cImhlbHBMYWJlbFwiPjwvc2xvdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgOmNsYXNzPVwiY29udHJvbENsYXNzT2JqZWN0XCI+XHJcblx0XHRcdDxzbG90Pjwvc2xvdD5cclxuXHRcdFx0PGRpdiA6Y2xhc3M9XCJoZWxwQ2xhc3NPYmplY3RcIiB2LWlmPVwidGhpcy4kc2xvdHMuaGVscENvbnRyb2xcIj5cclxuXHRcdFx0XHQ8c2xvdCBuYW1lPVwiaGVscENvbnRyb2xcIj48L3Nsb3Q+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IDpjbGFzcz1cImhlbHBDbGFzc09iamVjdFwiIHYtaWY9XCJ0aGlzLiRzbG90cy5oZWxwU2lkZVwiPlxyXG5cdFx0XHQmbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDs8c2xvdCBuYW1lPVwiaGVscFNpZGVcIj48L3Nsb3Q+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0bmFtZTogJ2pldC1mb3JtLWVkaXRvci1yb3cnLFxyXG5cdHByb3BzOiB7XHJcblx0XHRsYWJlbDoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHR9LFxyXG5cdFx0bGFiZWxDbGFzczoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHR9LFxyXG5cdFx0aGVscENsYXNzOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdH0sXHJcblx0XHRjb250cm9sQ2xhc3M6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0fSxcclxuXHR9LFxyXG5cdGNvbXB1dGVkOiB7XHJcblx0XHRsYWJlbENsYXNzT2JqZWN0KCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRDbGFzcyggJ2RlZmF1bHRMYWJlbENsYXNzJywgJ2xhYmVsQ2xhc3MnIClcclxuXHRcdH0sXHJcblx0XHRoZWxwQ2xhc3NPYmplY3QoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdldENsYXNzKCAnZGVmYXVsdEhlbHBDbGFzcycsICdoZWxwQ2xhc3MnIClcclxuXHRcdH0sXHJcblx0XHRjb250cm9sQ2xhc3NPYmplY3QoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdldENsYXNzKCAnZGVmYXVsdENvbnRyb2xDbGFzcycsICdjb250cm9sQ2xhc3MnIClcclxuXHRcdH1cclxuXHR9LFxyXG5cdGRhdGEoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRkZWZhdWx0TGFiZWxDbGFzczogJ2pldC1mb3JtLWVkaXRvcl9fcm93LWxhYmVsJyxcclxuXHRcdFx0ZGVmYXVsdEhlbHBDbGFzczogJ2pldC1mb3JtLWVkaXRvcl9fcm93LW5vdGljZScsXHJcblx0XHRcdGRlZmF1bHRDb250cm9sQ2xhc3M6ICdqZXQtZm9ybS1lZGl0b3JfX3Jvdy1jb250cm9sJyxcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdGdldENsYXNzKCBkZWZhdWx0S2V5LCBwcm9wS2V5ICkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFsgYCR7IHRoaXNbIGRlZmF1bHRLZXkgXSB9ICR7IHRoaXNbIHByb3BLZXkgXSB9YCBdOiB0aGlzWyBwcm9wS2V5IF0sXHJcblx0XHRcdFx0WyB0aGlzWyBkZWZhdWx0S2V5IF0gXTogISB0aGlzWyBwcm9wS2V5IF1cclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImpldC1mb3JtLWVkaXRvcl9fcm93XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgY2xhc3M6IF92bS5sYWJlbENsYXNzT2JqZWN0IH0sIFtcbiAgICAgIF92bS5fdihcIlxcblxcdFxcdFwiICsgX3ZtLl9zKF92bS5sYWJlbCkgKyBcIlxcblxcdFxcdFwiKSxcbiAgICAgIHRoaXMuJHNsb3RzLmhlbHBMYWJlbFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgY2xhc3M6IF92bS5oZWxwQ2xhc3NPYmplY3QgfSwgW192bS5fdChcImhlbHBMYWJlbFwiKV0sIDIpXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgY2xhc3M6IF92bS5jb250cm9sQ2xhc3NPYmplY3QgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgdGhpcy4kc2xvdHMuaGVscENvbnRyb2xcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGNsYXNzOiBfdm0uaGVscENsYXNzT2JqZWN0IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3QoXCJoZWxwQ29udHJvbFwiKV0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdLFxuICAgICAgMlxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICB0aGlzLiRzbG90cy5oZWxwU2lkZVxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgY2xhc3M6IF92bS5oZWxwQ2xhc3NPYmplY3QgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuXFx0XFx0wqDCoMKgwqBcIiksIF92bS5fdChcImhlbHBTaWRlXCIpXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgKG9wdGlvbnMuZnVuY3Rpb25hbCA/IHRoaXMucGFyZW50IDogdGhpcykuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdFxuICAgICAgICApXG4gICAgICB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9uYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYWxpemVkRnVsbFBhY2sgfSBmcm9tICcuLi9zb3VyY2UnO1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBUb29sczogeyB3aXRoUGxhY2Vob2xkZXIgfSxcclxuXHRcdCAgYWRkQWN0aW9uLFxyXG5cdFx0ICBnZXRGb3JtRmllbGRzQmxvY2tzLFxyXG5cdCAgfSA9IEpldEZCQWN0aW9ucztcclxuXHJcbmNvbnN0IHtcclxuXHRcdCAgdXNlU3RhdGUsXHJcblx0XHQgIHVzZUVmZmVjdCxcclxuXHQgIH0gPSB3cC5lbGVtZW50O1xyXG5cclxuY29uc3Qge1xyXG5cdFx0ICBBY3Rpb25GaWVsZHNNYXAsXHJcblx0XHQgIFdyYXBwZXJSZXF1aXJlZENvbnRyb2wsXHJcblx0XHQgIFJlcGVhdGVyV2l0aFN0YXRlLFxyXG5cdFx0ICBBY3Rpb25Nb2RhbCxcclxuXHQgIH0gPSBKZXRGQkNvbXBvbmVudHM7XHJcblxyXG5jb25zdCB7XHJcblx0XHQgIFNlbGVjdENvbnRyb2wsXHJcblx0XHQgIFRvZ2dsZUNvbnRyb2wsXHJcblx0ICB9ID0gd3AuY29tcG9uZW50cztcclxuXHJcbmNvbnN0IHsgYWRkRmlsdGVyIH0gPSB3cC5ob29rcztcclxuXHJcbmNvbnN0IHsgc291cmNlLCBsYWJlbCwgaGVscCB9ID0gZ2V0TG9jYWxpemVkRnVsbFBhY2s7XHJcblxyXG5hZGRBY3Rpb24oXHJcblx0J2xvZ2luJyxcclxuXHRmdW5jdGlvbiBMb2dpbkFjdGlvbigge1xyXG5cdFx0XHRcdFx0XHRcdCAgc2V0dGluZ3MsXHJcblx0XHRcdFx0XHRcdFx0ICBvbkNoYW5nZVNldHRpbmcsXHJcblx0XHRcdFx0XHRcdCAgfSApIHtcclxuXHRcdGNvbnN0IFsgZm9ybUZpZWxkcyBdID0gdXNlU3RhdGUoICgpID0+IGdldEZvcm1GaWVsZHNCbG9ja3MoIFtdLCAnLS0nICkgKTtcclxuXHJcblx0XHRyZXR1cm4gPD5cclxuXHRcdFx0PFNlbGVjdENvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAndXNlcl9sb2dpbl9maWVsZCcgKSB9XHJcblx0XHRcdFx0bGFiZWxQb3NpdGlvbj0nc2lkZSdcclxuXHRcdFx0XHR2YWx1ZT17IHNldHRpbmdzLnVzZXJfbG9naW5fZmllbGQgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IG9uQ2hhbmdlU2V0dGluZyggdmFsLCAndXNlcl9sb2dpbl9maWVsZCcgKSB9XHJcblx0XHRcdFx0b3B0aW9ucz17IGZvcm1GaWVsZHMgfVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8U2VsZWN0Q29udHJvbFxyXG5cdFx0XHRcdGxhYmVsPXsgbGFiZWwoICd1c2VyX3Bhc3NfZmllbGQnICkgfVxyXG5cdFx0XHRcdGxhYmVsUG9zaXRpb249J3NpZGUnXHJcblx0XHRcdFx0dmFsdWU9eyBzZXR0aW5ncy51c2VyX3Bhc3NfZmllbGQgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IG9uQ2hhbmdlU2V0dGluZyggdmFsLCAndXNlcl9wYXNzX2ZpZWxkJyApIH1cclxuXHRcdFx0XHRvcHRpb25zPXsgZm9ybUZpZWxkcyB9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxTZWxlY3RDb250cm9sXHJcblx0XHRcdFx0bGFiZWw9eyBsYWJlbCggJ3JlbWVtYmVyX2ZpZWxkJyApIH1cclxuXHRcdFx0XHRsYWJlbFBvc2l0aW9uPSdzaWRlJ1xyXG5cdFx0XHRcdHZhbHVlPXsgc2V0dGluZ3MucmVtZW1iZXJfZmllbGQgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IG9uQ2hhbmdlU2V0dGluZyggdmFsLCAncmVtZW1iZXJfZmllbGQnICkgfVxyXG5cdFx0XHRcdG9wdGlvbnM9eyBmb3JtRmllbGRzIH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PFRvZ2dsZUNvbnRyb2xcclxuXHRcdFx0XHRsYWJlbD17IGxhYmVsKCAnc2VjdXJlX2Nvb2tpZScgKSB9XHJcblx0XHRcdFx0Y2hlY2tlZD17IHNldHRpbmdzLnNlY3VyZV9jb29raWUgfVxyXG5cdFx0XHRcdG9uQ2hhbmdlPXsgdmFsID0+IG9uQ2hhbmdlU2V0dGluZyggdmFsLCAnc2VjdXJlX2Nvb2tpZScgKSB9XHJcblx0XHRcdC8+XHJcblxyXG5cdFx0PC8+O1xyXG5cdH0gKTtcclxuXHJcbmFkZEZpbHRlciggJ2pldC5mYi5zZWN0aW9uLmFjdGlvbnMuaGVhZGVyLmxvZ2luJywgJ2pldC1mb3JtLWJ1aWxkZXInLCBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gPHNwYW4gc3R5bGU9eyB7IG1hcmdpblRvcDogJzBweCcsIGNvbG9yOiAncmdiKDExNywgMTE3LCAxMTcpJyB9IH0+XHJcblx0XHR7ICdOb3RlOiBpZiB5b3UgbmVlZCBhIHJlZGlyZWN0LCB1c2UgUmVkaXJlY3QgdG8gUGFnZS4nIH1cclxuXHQ8L3NwYW4+O1xyXG59ICkiLCJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcImpmYi1lZGl0b3JcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBnZXRMb2NhbGl6ZWRGdWxsUGFjayA9IG5ldyBBY3Rpb25zLkVkaXRvckRhdGEoICdsb2dpbicgKS5zZXRMYWJlbHMoIHtcclxuXHR1c2VyX2xvZ2luX2ZpZWxkOiBfXyggJ1VzZXIgTG9naW4gRmllbGQnLCAnamV0LWZvcm0tYnVpbGRlci1sb2dpbi1hY3Rpb24nICksXHJcblx0dXNlcl9wYXNzX2ZpZWxkOiBfXyggJ1VzZXIgUGFzc3dvcmQgRmllbGQnLCAnamV0LWZvcm0tYnVpbGRlci1sb2dpbi1hY3Rpb24nICksXHJcblx0cmVtZW1iZXJfZmllbGQ6IF9fKCAnUmVtZW1iZXIgRmllbGQnLCAnamV0LWZvcm0tYnVpbGRlci1sb2dpbi1hY3Rpb24nICksXHJcblx0c2VjdXJlX2Nvb2tpZTogX18oICdXaGV0aGVyIHRvIHVzZSBzZWN1cmUgY29va2llJywgJ2pldC1mb3JtLWJ1aWxkZXItbG9naW4tYWN0aW9uJyApLFxyXG59ICkuZXhwb3J0QWxsKCk7XHJcblxyXG5leHBvcnQgeyBnZXRMb2NhbGl6ZWRGdWxsUGFjayB9OyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBaUJBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUtBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFIQTtBQU9BO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=