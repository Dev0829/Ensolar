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
/******/ 	return __webpack_require__(__webpack_require__.s = "./jet-engine/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./jet-engine/Notification.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./jet-engine/Notification.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../source */ "./source.js");
/* harmony import */ var jfb_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jfb-editor */ "../node_modules/jfb-editor/src/main.js");
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
//
//
//
//
//
//


var source = _source__WEBPACK_IMPORTED_MODULE_0__["getLocalizedFullPack"].source,
    _label = _source__WEBPACK_IMPORTED_MODULE_0__["getLocalizedFullPack"].label,
    _help = _source__WEBPACK_IMPORTED_MODULE_0__["getLocalizedFullPack"].help;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'login',
  components: {
    JetFormEditorRow: jfb_editor__WEBPACK_IMPORTED_MODULE_1__["JetFormEditorRow"]
  },
  props: {
    value: Object,
    fields: Array,
    jsonSource: Array
  },
  data: function data() {
    return {
      instance: {}
    };
  },
  created: function created() {
    this.instance = JSON.parse(JSON.stringify(this.value || {}));
  },
  watch: {
    instance: function instance(newResponse) {
      this.$emit('input', newResponse);
    }
  },
  methods: {
    label: function label(attr) {
      return _label(attr);
    },
    help: function help(attr) {
      return _help(attr);
    }
  }
});

/***/ }),

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

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./jet-engine/Notification.vue?vue&type=template&id=66d06534&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./jet-engine/Notification.vue?vue&type=template&id=66d06534& ***!
  \****************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "jet-fb-hubspot-notification" },
    [
      _c(
        "JetFormEditorRow",
        { attrs: { label: _vm.label("user_login_field") } },
        [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.instance.user_login_field,
                  expression: "instance.user_login_field"
                }
              ],
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.instance,
                    "user_login_field",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("--")]),
              _vm._v(" "),
              _vm._l(_vm.fields, function(field) {
                return _c("option", { domProps: { value: field } }, [
                  _vm._v(_vm._s(field))
                ])
              })
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "JetFormEditorRow",
        { attrs: { label: _vm.label("user_pass_field") } },
        [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.instance.user_pass_field,
                  expression: "instance.user_pass_field"
                }
              ],
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.instance,
                    "user_pass_field",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("--")]),
              _vm._v(" "),
              _vm._l(_vm.fields, function(field) {
                return _c("option", { domProps: { value: field } }, [
                  _vm._v(_vm._s(field))
                ])
              })
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "JetFormEditorRow",
        { attrs: { label: _vm.label("remember_field") } },
        [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.instance.remember_field,
                  expression: "instance.remember_field"
                }
              ],
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.$set(
                    _vm.instance,
                    "remember_field",
                    $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                  )
                }
              }
            },
            [
              _c("option", { attrs: { value: "" } }, [_vm._v("--")]),
              _vm._v(" "),
              _vm._l(_vm.fields, function(field) {
                return _c("option", { domProps: { value: field } }, [
                  _vm._v(_vm._s(field))
                ])
              })
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _c("JetFormEditorRow", { attrs: { label: _vm.label("secure_cookie") } }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.instance.secure_cookie,
              expression: "instance.secure_cookie"
            }
          ],
          attrs: { type: "checkbox" },
          domProps: {
            checked: Array.isArray(_vm.instance.secure_cookie)
              ? _vm._i(_vm.instance.secure_cookie, null) > -1
              : _vm.instance.secure_cookie
          },
          on: {
            change: function($event) {
              var $$a = _vm.instance.secure_cookie,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 &&
                    _vm.$set(_vm.instance, "secure_cookie", $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    _vm.$set(
                      _vm.instance,
                      "secure_cookie",
                      $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                    )
                }
              } else {
                _vm.$set(_vm.instance, "secure_cookie", $$c)
              }
            }
          }
        })
      ])
    ],
    1
  )
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

/***/ "./jet-engine/Notification.vue":
/*!*************************************!*\
  !*** ./jet-engine/Notification.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification_vue_vue_type_template_id_66d06534___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification.vue?vue&type=template&id=66d06534& */ "./jet-engine/Notification.vue?vue&type=template&id=66d06534&");
/* harmony import */ var _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notification.vue?vue&type=script&lang=js& */ "./jet-engine/Notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notification_vue_vue_type_template_id_66d06534___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Notification_vue_vue_type_template_id_66d06534___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "jet-engine/Notification.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./jet-engine/Notification.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./jet-engine/Notification.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=script&lang=js& */ "../node_modules/babel-loader/lib/index.js!../node_modules/vue-loader/lib/index.js?!./jet-engine/Notification.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./jet-engine/Notification.vue?vue&type=template&id=66d06534&":
/*!********************************************************************!*\
  !*** ./jet-engine/Notification.vue?vue&type=template&id=66d06534& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_66d06534___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./Notification.vue?vue&type=template&id=66d06534& */ "../node_modules/vue-loader/lib/loaders/templateLoader.js?!../node_modules/vue-loader/lib/index.js?!./jet-engine/Notification.vue?vue&type=template&id=66d06534&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_66d06534___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notification_vue_vue_type_template_id_66d06534___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./jet-engine/main.js":
/*!****************************!*\
  !*** ./jet-engine/main.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification */ "./jet-engine/Notification.vue");

var addFilter = wp.hooks.addFilter;
addFilter('jet.engine.register.notifications', 'jet-engine', function (notifications) {
  notifications.push(_Notification__WEBPACK_IMPORTED_MODULE_0__["default"]);
  return notifications;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lLmVkaXRvci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vTm90aWZpY2F0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2pmYi1lZGl0b3Ivc3JjL2FjdGlvbnMvRWRpdG9yRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2pmYi1lZGl0b3Ivc3JjL2VuZ2luZS1lZGl0b3IvSmV0Rm9ybUVkaXRvclJvdy52dWUiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9qZmItZWRpdG9yL3NyYy9lbmdpbmUtZWRpdG9yL0pldEZvcm1FZGl0b3JSb3cudnVlPzRjMDkiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9qZmItZWRpdG9yL3NyYy9lbmdpbmUtZWRpdG9yL0pldEZvcm1FZGl0b3JSb3cudnVlPzVjZGMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9qZmItZWRpdG9yL3NyYy9tYWluLmpzIiwid2VicGFjazovLy9KZXRGb3JtRWRpdG9yUm93LnZ1ZSIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2pmYi1lZGl0b3Ivc3JjL2VuZ2luZS1lZGl0b3IvSmV0Rm9ybUVkaXRvclJvdy52dWU/ZjdhOSIsIndlYnBhY2s6Ly8vLi9qZXQtZW5naW5lL05vdGlmaWNhdGlvbi52dWU/Njk1OSIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9qZXQtZW5naW5lL05vdGlmaWNhdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vamV0LWVuZ2luZS9Ob3RpZmljYXRpb24udnVlPzNmMmEiLCJ3ZWJwYWNrOi8vLy4vamV0LWVuZ2luZS9Ob3RpZmljYXRpb24udnVlPzI1YmEiLCJ3ZWJwYWNrOi8vLy4vamV0LWVuZ2luZS9tYWluLmpzIiwid2VicGFjazovLy8uL3NvdXJjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pldC1lbmdpbmUvbWFpbi5qc1wiKTtcbiIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiamV0LWZiLWh1YnNwb3Qtbm90aWZpY2F0aW9uXCI+XHJcblx0XHQ8SmV0Rm9ybUVkaXRvclJvdyA6bGFiZWw9XCJsYWJlbCggJ3VzZXJfbG9naW5fZmllbGQnIClcIj5cclxuXHRcdFx0PHNlbGVjdCB2LW1vZGVsPVwiaW5zdGFuY2UudXNlcl9sb2dpbl9maWVsZFwiPlxyXG5cdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIj4tLTwvb3B0aW9uPlxyXG5cdFx0XHRcdDxvcHRpb24gdi1mb3I9XCJmaWVsZCBpbiBmaWVsZHNcIiA6dmFsdWU9XCJmaWVsZFwiPnt7IGZpZWxkIH19PC9vcHRpb24+XHJcblx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0PC9KZXRGb3JtRWRpdG9yUm93PlxyXG5cdFx0PEpldEZvcm1FZGl0b3JSb3cgOmxhYmVsPVwibGFiZWwoICd1c2VyX3Bhc3NfZmllbGQnIClcIj5cclxuXHRcdFx0PHNlbGVjdCB2LW1vZGVsPVwiaW5zdGFuY2UudXNlcl9wYXNzX2ZpZWxkXCI+XHJcblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPi0tPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbiB2LWZvcj1cImZpZWxkIGluIGZpZWxkc1wiIDp2YWx1ZT1cImZpZWxkXCI+e3sgZmllbGQgfX08L29wdGlvbj5cclxuXHRcdFx0PC9zZWxlY3Q+XHJcblx0XHQ8L0pldEZvcm1FZGl0b3JSb3c+XHJcblx0XHQ8SmV0Rm9ybUVkaXRvclJvdyA6bGFiZWw9XCJsYWJlbCggJ3JlbWVtYmVyX2ZpZWxkJyApXCI+XHJcblx0XHRcdDxzZWxlY3Qgdi1tb2RlbD1cImluc3RhbmNlLnJlbWVtYmVyX2ZpZWxkXCI+XHJcblx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiPi0tPC9vcHRpb24+XHJcblx0XHRcdFx0PG9wdGlvbiB2LWZvcj1cImZpZWxkIGluIGZpZWxkc1wiIDp2YWx1ZT1cImZpZWxkXCI+e3sgZmllbGQgfX08L29wdGlvbj5cclxuXHRcdFx0PC9zZWxlY3Q+XHJcblx0XHQ8L0pldEZvcm1FZGl0b3JSb3c+XHJcblx0XHQ8SmV0Rm9ybUVkaXRvclJvdyA6bGFiZWw9XCJsYWJlbCggJ3NlY3VyZV9jb29raWUnIClcIj5cclxuXHRcdFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJpbnN0YW5jZS5zZWN1cmVfY29va2llXCIvPlxyXG5cdFx0PC9KZXRGb3JtRWRpdG9yUm93PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgZ2V0TG9jYWxpemVkRnVsbFBhY2sgfSBmcm9tICcuLi9zb3VyY2UnXHJcbmltcG9ydCB7IEpldEZvcm1FZGl0b3JSb3cgfSBmcm9tIFwiamZiLWVkaXRvclwiXHJcblxyXG5jb25zdCB7IHNvdXJjZSwgbGFiZWwsIGhlbHAgfSA9IGdldExvY2FsaXplZEZ1bGxQYWNrO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdG5hbWU6ICdsb2dpbicsXHJcblx0Y29tcG9uZW50czoge1xyXG5cdFx0SmV0Rm9ybUVkaXRvclJvdyxcclxuXHR9LFxyXG5cdHByb3BzOiB7XHJcblx0XHR2YWx1ZTogT2JqZWN0LFxyXG5cdFx0ZmllbGRzOiBBcnJheSxcclxuXHRcdGpzb25Tb3VyY2U6IEFycmF5XHJcblx0fSxcclxuXHRkYXRhOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHRpbnN0YW5jZToge30sXHJcblx0XHR9O1xyXG5cdH0sXHJcblx0Y3JlYXRlZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0dGhpcy5pbnN0YW5jZSA9IEpTT04ucGFyc2UoIEpTT04uc3RyaW5naWZ5KCB0aGlzLnZhbHVlIHx8IHt9ICkgKTtcclxuXHR9LFxyXG5cdHdhdGNoOiB7XHJcblx0XHRpbnN0YW5jZSggbmV3UmVzcG9uc2UgKSB7XHJcblx0XHRcdHRoaXMuJGVtaXQoICdpbnB1dCcsIG5ld1Jlc3BvbnNlICk7XHJcblx0XHR9LFxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0bGFiZWw6IGF0dHIgPT4gbGFiZWwoIGF0dHIgKSxcclxuXHRcdGhlbHA6IGF0dHIgPT4gaGVscCggYXR0ciApLFxyXG5cdH0sXHJcblxyXG59XHJcbjwvc2NyaXB0PiIsImNsYXNzIEVkaXRvckRhdGEge1xyXG5cdGNvbnN0cnVjdG9yKCB0eXBlLCBsYWJlbCApIHtcclxuXHRcdHRoaXMudHlwZSA9IHR5cGU7XHJcblx0XHR0aGlzLmxhYmVsID0gbGFiZWw7XHJcblx0XHR0aGlzLnNvdXJjZSA9IHt9O1xyXG5cdFx0dGhpcy5fX2xhYmVscyA9IHt9O1xyXG5cdFx0dGhpcy5fX2hlbHBfbWVzc2FnZXMgPSB7fTtcclxuXHRcdHRoaXMuX19nYXRld2F5X2F0dHJzID0ge307XHJcblx0XHR0aGlzLl9fbWVzc2FnZXMgPSB7fTtcclxuXHR9XHJcblxyXG5cdHNldFNvdXJjZSggY29uZmlnICkge1xyXG5cdFx0dGhpcy5zb3VyY2UgPSBjb25maWc7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRzZXRMYWJlbHMoIGNvbmZpZyApIHtcclxuXHRcdHRoaXMuX19sYWJlbHMgPSBjb25maWc7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRzZXRIZWxwKCBjb25maWcgKSB7XHJcblx0XHR0aGlzLl9faGVscF9tZXNzYWdlcyA9IGNvbmZpZztcclxuXHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHNldEdhdGV3YXlBdHRycyggY29uZmlnICkge1xyXG5cdFx0dGhpcy5fX2dhdGV3YXlfYXR0cnMgPSBjb25maWc7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRzZXRNZXNzYWdlcyggY29uZmlnICkge1xyXG5cdFx0dGhpcy5fX21lc3NhZ2VzID0gY29uZmlnO1xyXG5cclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0ZXhwb3J0QWxsKCkge1xyXG5cdFx0aWYgKCAhICggJ2pldEZvcm1BY3Rpb25UeXBlcycgaW4gd2luZG93ICkgKSB7XHJcblx0XHRcdHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXMgPSBbXTtcclxuXHRcdH1cclxuXHJcblx0XHRjb25zdCBzb3VyY2UgPSB0aGlzLnNvdXJjZTtcclxuXHRcdGNvbnN0IGxhYmVsID0gdGhpcy5leHBvcnRMYWJlbHMoKTtcclxuXHRcdGNvbnN0IGhlbHAgPSB0aGlzLmV4cG9ydEhlbHAoKTtcclxuXHRcdGNvbnN0IGdhdGV3YXlBdHRycyA9IHRoaXMuZXhwb3J0R2F0ZXdheUF0dHJzKCk7XHJcblx0XHRjb25zdCBtZXNzYWdlcyA9IHRoaXMuZXhwb3J0TWVzc2FnZXMoKTtcclxuXHJcblx0XHRjb25zdCBleHBvcnRPYmogPSAgeyBzb3VyY2UsIGxhYmVsLCBoZWxwLCBtZXNzYWdlcywgZ2F0ZXdheUF0dHJzIH1cclxuXHJcblx0XHRjb25zdCBhY3Rpb25JbmRleCA9IHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXMuZmluZEluZGV4KCB0eXBlID0+IHRoaXMudHlwZSA9PT0gdHlwZS5pZCApO1xyXG5cdFx0Y29uc3QgYWN0aW9uRGF0YSA9IHtcclxuXHRcdFx0aWQ6IHRoaXMudHlwZSxcclxuXHRcdFx0bmFtZTogdGhpcy5sYWJlbCxcclxuXHRcdFx0Li4uZXhwb3J0T2JqXHJcblx0XHR9O1xyXG5cclxuXHRcdGlmICggLTEgPT09IGFjdGlvbkluZGV4ICkge1xyXG5cdFx0XHR3aW5kb3cuamV0Rm9ybUFjdGlvblR5cGVzLnB1c2goIGFjdGlvbkRhdGEgKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHdpbmRvdy5qZXRGb3JtQWN0aW9uVHlwZXNbIGFjdGlvbkluZGV4IF0gPSB7XHJcblx0XHRcdFx0Li4ud2luZG93LmpldEZvcm1BY3Rpb25UeXBlc1sgYWN0aW9uSW5kZXggXSAsXHJcblx0XHRcdFx0Li4uZXhwb3J0T2JqXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGV4cG9ydE9iajtcclxuXHR9XHJcblxyXG5cclxuXHRleHBvcnRMYWJlbHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRMb2NhbGl6ZWRXaXRoRnVuYyggJ19fbGFiZWxzJywgJ1tFbXB0eSBMYWJlbF0nICk7XHJcblx0fTtcclxuXHJcblx0ZXhwb3J0SGVscCgpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldExvY2FsaXplZFdpdGhGdW5jKCAnX19oZWxwX21lc3NhZ2VzJyApO1xyXG5cdH07XHJcblxyXG5cdGV4cG9ydEdhdGV3YXlBdHRycygpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldExvY2FsaXplZFdpdGhGdW5jKCAnX19nYXRld2F5X2F0dHJzJywgW10gKTtcclxuXHR9O1xyXG5cclxuXHRleHBvcnRNZXNzYWdlcygpIHtcclxuXHRcdHJldHVybiB0aGlzLmdldExvY2FsaXplZFdpdGhGdW5jKCAnX19tZXNzYWdlcycsIHt9ICk7XHJcblx0fTtcclxuXHJcblx0Z2V0TG9jYWxpemVkV2l0aEZ1bmMoIG9iamVjdEtleSwgaWZFbXB0eVJldHVybiA9ICcnICkge1xyXG5cclxuXHRcdGxldCBhY3Rpb24gPSBmYWxzZTtcclxuXHJcblx0XHRpZiAoIG9iamVjdEtleSBpbiB0aGlzICkge1xyXG5cdFx0XHRhY3Rpb24gPSB0aGlzWyBvYmplY3RLZXkgXTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoICEgYWN0aW9uICkge1xyXG5cdFx0XHRyZXR1cm4gKCkgPT4gaWZFbXB0eVJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gYXR0ciA9PiB7XHJcblx0XHRcdGlmICggYXR0ciApIHtcclxuXHRcdFx0XHRyZXR1cm4gKCBhY3Rpb25bIGF0dHIgXSA/IGFjdGlvblsgYXR0ciBdIDogaWZFbXB0eVJldHVybiApO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBhY3Rpb247XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0fTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdG9yRGF0YTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0pldEZvcm1FZGl0b3JSb3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3NmUzOGI2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0pldEZvcm1FZGl0b3JSb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9KZXRGb3JtRWRpdG9yUm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcZGV2ZWxvcC5qZXRcXFxcZGV2ZWxvcFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0LWZvcm0tYnVpbGRlci1sb2dpbi1hY3Rpb25cXFxcYXNzZXRzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA3NmUzOGI2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA3NmUzOGI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA3NmUzOGI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9KZXRGb3JtRWRpdG9yUm93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNzZlMzhiNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNzZlMzhiNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibm9kZV9tb2R1bGVzL2pmYi1lZGl0b3Ivc3JjL2VuZ2luZS1lZGl0b3IvSmV0Rm9ybUVkaXRvclJvdy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9KZXRGb3JtRWRpdG9yUm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSmV0Rm9ybUVkaXRvclJvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0pldEZvcm1FZGl0b3JSb3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA3NmUzOGI2JlwiIiwiaW1wb3J0IEVkaXRvckRhdGEgZnJvbSBcIi4vYWN0aW9ucy9FZGl0b3JEYXRhXCI7XHJcbmltcG9ydCBKZXRGb3JtRWRpdG9yUm93IGZyb20gXCIuL2VuZ2luZS1lZGl0b3IvSmV0Rm9ybUVkaXRvclJvd1wiO1xyXG5cclxuY29uc3QgQWN0aW9ucyA9IHsgRWRpdG9yRGF0YSB9O1xyXG5cclxuZXhwb3J0IHsgQWN0aW9ucywgSmV0Rm9ybUVkaXRvclJvdyB9OyIsIjx0ZW1wbGF0ZT5cclxuXHQ8ZGl2IGNsYXNzPVwiamV0LWZvcm0tZWRpdG9yX19yb3dcIj5cclxuXHRcdDxkaXYgOmNsYXNzPVwibGFiZWxDbGFzc09iamVjdFwiPlxyXG5cdFx0XHR7eyBsYWJlbCB9fVxyXG5cdFx0XHQ8ZGl2IDpjbGFzcz1cImhlbHBDbGFzc09iamVjdFwiIHYtaWY9XCJ0aGlzLiRzbG90cy5oZWxwTGFiZWxcIj5cclxuXHRcdFx0XHQ8c2xvdCBuYW1lPVwiaGVscExhYmVsXCI+PC9zbG90PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiA6Y2xhc3M9XCJjb250cm9sQ2xhc3NPYmplY3RcIj5cclxuXHRcdFx0PHNsb3Q+PC9zbG90PlxyXG5cdFx0XHQ8ZGl2IDpjbGFzcz1cImhlbHBDbGFzc09iamVjdFwiIHYtaWY9XCJ0aGlzLiRzbG90cy5oZWxwQ29udHJvbFwiPlxyXG5cdFx0XHRcdDxzbG90IG5hbWU9XCJoZWxwQ29udHJvbFwiPjwvc2xvdD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXYgOmNsYXNzPVwiaGVscENsYXNzT2JqZWN0XCIgdi1pZj1cInRoaXMuJHNsb3RzLmhlbHBTaWRlXCI+XHJcblx0XHRcdCZuYnNwOyZuYnNwOyZuYnNwOyZuYnNwOzxzbG90IG5hbWU9XCJoZWxwU2lkZVwiPjwvc2xvdD5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRuYW1lOiAnamV0LWZvcm0tZWRpdG9yLXJvdycsXHJcblx0cHJvcHM6IHtcclxuXHRcdGxhYmVsOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdH0sXHJcblx0XHRsYWJlbENsYXNzOiB7XHJcblx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdH0sXHJcblx0XHRoZWxwQ2xhc3M6IHtcclxuXHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0fSxcclxuXHRcdGNvbnRyb2xDbGFzczoge1xyXG5cdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdGRlZmF1bHQ6ICcnXHJcblx0XHR9LFxyXG5cdH0sXHJcblx0Y29tcHV0ZWQ6IHtcclxuXHRcdGxhYmVsQ2xhc3NPYmplY3QoKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLmdldENsYXNzKCAnZGVmYXVsdExhYmVsQ2xhc3MnLCAnbGFiZWxDbGFzcycgKVxyXG5cdFx0fSxcclxuXHRcdGhlbHBDbGFzc09iamVjdCgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0Q2xhc3MoICdkZWZhdWx0SGVscENsYXNzJywgJ2hlbHBDbGFzcycgKVxyXG5cdFx0fSxcclxuXHRcdGNvbnRyb2xDbGFzc09iamVjdCgpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0Q2xhc3MoICdkZWZhdWx0Q29udHJvbENsYXNzJywgJ2NvbnRyb2xDbGFzcycgKVxyXG5cdFx0fVxyXG5cdH0sXHJcblx0ZGF0YSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRlZmF1bHRMYWJlbENsYXNzOiAnamV0LWZvcm0tZWRpdG9yX19yb3ctbGFiZWwnLFxyXG5cdFx0XHRkZWZhdWx0SGVscENsYXNzOiAnamV0LWZvcm0tZWRpdG9yX19yb3ctbm90aWNlJyxcclxuXHRcdFx0ZGVmYXVsdENvbnRyb2xDbGFzczogJ2pldC1mb3JtLWVkaXRvcl9fcm93LWNvbnRyb2wnLFxyXG5cdFx0fVxyXG5cdH0sXHJcblx0bWV0aG9kczoge1xyXG5cdFx0Z2V0Q2xhc3MoIGRlZmF1bHRLZXksIHByb3BLZXkgKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0WyBgJHsgdGhpc1sgZGVmYXVsdEtleSBdIH0gJHsgdGhpc1sgcHJvcEtleSBdIH1gIF06IHRoaXNbIHByb3BLZXkgXSxcclxuXHRcdFx0XHRbIHRoaXNbIGRlZmF1bHRLZXkgXSBdOiAhIHRoaXNbIHByb3BLZXkgXVxyXG5cdFx0XHR9O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiamV0LWZvcm0tZWRpdG9yX19yb3dcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBjbGFzczogX3ZtLmxhYmVsQ2xhc3NPYmplY3QgfSwgW1xuICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XCIgKyBfdm0uX3MoX3ZtLmxhYmVsKSArIFwiXFxuXFx0XFx0XCIpLFxuICAgICAgdGhpcy4kc2xvdHMuaGVscExhYmVsXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBjbGFzczogX3ZtLmhlbHBDbGFzc09iamVjdCB9LCBbX3ZtLl90KFwiaGVscExhYmVsXCIpXSwgMilcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBjbGFzczogX3ZtLmNvbnRyb2xDbGFzc09iamVjdCB9LFxuICAgICAgW1xuICAgICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICB0aGlzLiRzbG90cy5oZWxwQ29udHJvbFxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgY2xhc3M6IF92bS5oZWxwQ2xhc3NPYmplY3QgfSxcbiAgICAgICAgICAgICAgW192bS5fdChcImhlbHBDb250cm9sXCIpXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIHRoaXMuJHNsb3RzLmhlbHBTaWRlXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBjbGFzczogX3ZtLmhlbHBDbGFzc09iamVjdCB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG5cXHRcXHTCoMKgwqDCoFwiKSwgX3ZtLl90KFwiaGVscFNpZGVcIildLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImpldC1mYi1odWJzcG90LW5vdGlmaWNhdGlvblwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiSmV0Rm9ybUVkaXRvclJvd1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBfdm0ubGFiZWwoXCJ1c2VyX2xvZ2luX2ZpZWxkXCIpIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pbnN0YW5jZS51c2VyX2xvZ2luX2ZpZWxkLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpbnN0YW5jZS51c2VyX2xvZ2luX2ZpZWxkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgIF92bS5pbnN0YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VyX2xvZ2luX2ZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0sIFtfdm0uX3YoXCItLVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmZpZWxkcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJvcHRpb25cIiwgeyBkb21Qcm9wczogeyB2YWx1ZTogZmllbGQgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGZpZWxkKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiSmV0Rm9ybUVkaXRvclJvd1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGxhYmVsOiBfdm0ubGFiZWwoXCJ1c2VyX3Bhc3NfZmllbGRcIikgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNlbGVjdFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmluc3RhbmNlLnVzZXJfcGFzc19maWVsZCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaW5zdGFuY2UudXNlcl9wYXNzX2ZpZWxkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHZhciAkJHNlbGVjdGVkVmFsID0gQXJyYXkucHJvdG90eXBlLmZpbHRlclxuICAgICAgICAgICAgICAgICAgICAuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsID0gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgIF92bS5pbnN0YW5jZSxcbiAgICAgICAgICAgICAgICAgICAgXCJ1c2VyX3Bhc3NfZmllbGRcIixcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC5tdWx0aXBsZSA/ICQkc2VsZWN0ZWRWYWwgOiAkJHNlbGVjdGVkVmFsWzBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIm9wdGlvblwiLCB7IGF0dHJzOiB7IHZhbHVlOiBcIlwiIH0gfSwgW192bS5fdihcIi0tXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcIm9wdGlvblwiLCB7IGRvbVByb3BzOiB7IHZhbHVlOiBmaWVsZCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoZmllbGQpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJKZXRGb3JtRWRpdG9yUm93XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbGFiZWw6IF92bS5sYWJlbChcInJlbWVtYmVyX2ZpZWxkXCIpIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzZWxlY3RcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pbnN0YW5jZS5yZW1lbWJlcl9maWVsZCxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaW5zdGFuY2UucmVtZW1iZXJfZmllbGRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgdmFyICQkc2VsZWN0ZWRWYWwgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyXG4gICAgICAgICAgICAgICAgICAgIC5jYWxsKCRldmVudC50YXJnZXQub3B0aW9ucywgZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmluc3RhbmNlLFxuICAgICAgICAgICAgICAgICAgICBcInJlbWVtYmVyX2ZpZWxkXCIsXG4gICAgICAgICAgICAgICAgICAgICRldmVudC50YXJnZXQubXVsdGlwbGUgPyAkJHNlbGVjdGVkVmFsIDogJCRzZWxlY3RlZFZhbFswXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJvcHRpb25cIiwgeyBhdHRyczogeyB2YWx1ZTogXCJcIiB9IH0sIFtfdm0uX3YoXCItLVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmZpZWxkcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJvcHRpb25cIiwgeyBkb21Qcm9wczogeyB2YWx1ZTogZmllbGQgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGZpZWxkKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJKZXRGb3JtRWRpdG9yUm93XCIsIHsgYXR0cnM6IHsgbGFiZWw6IF92bS5sYWJlbChcInNlY3VyZV9jb29raWVcIikgfSB9LCBbXG4gICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5pbnN0YW5jZS5zZWN1cmVfY29va2llLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImluc3RhbmNlLnNlY3VyZV9jb29raWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJjaGVja2JveFwiIH0sXG4gICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLmluc3RhbmNlLnNlY3VyZV9jb29raWUpXG4gICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5pbnN0YW5jZS5zZWN1cmVfY29va2llLCBudWxsKSA+IC0xXG4gICAgICAgICAgICAgIDogX3ZtLmluc3RhbmNlLnNlY3VyZV9jb29raWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjaGFuZ2U6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLmluc3RhbmNlLnNlY3VyZV9jb29raWUsXG4gICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICBpZiAoJCRlbC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAkJGkgPCAwICYmXG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5pbnN0YW5jZSwgXCJzZWN1cmVfY29va2llXCIsICQkYS5jb25jYXQoWyQkdl0pKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAkJGkgPiAtMSAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgICAgICAgXCJzZWN1cmVfY29va2llXCIsXG4gICAgICAgICAgICAgICAgICAgICAgJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uaW5zdGFuY2UsIFwic2VjdXJlX2Nvb2tpZVwiLCAkJGMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbChcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIChvcHRpb25zLmZ1bmN0aW9uYWwgPyB0aGlzLnBhcmVudCA6IHRoaXMpLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3RcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvbmFsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTm90aWZpY2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NmQwNjUzNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob3RpZmljYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Ob3RpZmljYXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJDOlxcXFxPcGVuU2VydmVyXFxcXGRvbWFpbnNcXFxcZGV2ZWxvcC5qZXRcXFxcZGV2ZWxvcFxcXFx3cC1jb250ZW50XFxcXHBsdWdpbnNcXFxcamV0LWZvcm0tYnVpbGRlci1sb2dpbi1hY3Rpb25cXFxcYXNzZXRzXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY2ZDA2NTM0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY2ZDA2NTM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY2ZDA2NTM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob3RpZmljYXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY2ZDA2NTM0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY2ZDA2NTM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJqZXQtZW5naW5lL05vdGlmaWNhdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90aWZpY2F0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL05vdGlmaWNhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTm90aWZpY2F0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NmQwNjUzNCZcIiIsImltcG9ydCBOb3RpZmljYXRpb24gZnJvbSBcIi4vTm90aWZpY2F0aW9uXCI7XHJcblxyXG5jb25zdCB7IGFkZEZpbHRlciB9ID0gd3AuaG9va3M7XHJcblxyXG5hZGRGaWx0ZXIoICdqZXQuZW5naW5lLnJlZ2lzdGVyLm5vdGlmaWNhdGlvbnMnLCAnamV0LWVuZ2luZScsIG5vdGlmaWNhdGlvbnMgPT4ge1xyXG5cdG5vdGlmaWNhdGlvbnMucHVzaCggTm90aWZpY2F0aW9uICk7XHJcblxyXG5cdHJldHVybiBub3RpZmljYXRpb25zO1xyXG59ICkiLCJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSBcImpmYi1lZGl0b3JcIjtcclxuXHJcbmNvbnN0IHsgX18gfSA9IHdwLmkxOG47XHJcblxyXG5jb25zdCBnZXRMb2NhbGl6ZWRGdWxsUGFjayA9IG5ldyBBY3Rpb25zLkVkaXRvckRhdGEoICdsb2dpbicgKS5zZXRMYWJlbHMoIHtcclxuXHR1c2VyX2xvZ2luX2ZpZWxkOiBfXyggJ1VzZXIgTG9naW4gRmllbGQnLCAnamV0LWZvcm0tYnVpbGRlci1sb2dpbi1hY3Rpb24nICksXHJcblx0dXNlcl9wYXNzX2ZpZWxkOiBfXyggJ1VzZXIgUGFzc3dvcmQgRmllbGQnLCAnamV0LWZvcm0tYnVpbGRlci1sb2dpbi1hY3Rpb24nICksXHJcblx0cmVtZW1iZXJfZmllbGQ6IF9fKCAnUmVtZW1iZXIgRmllbGQnLCAnamV0LWZvcm0tYnVpbGRlci1sb2dpbi1hY3Rpb24nICksXHJcblx0c2VjdXJlX2Nvb2tpZTogX18oICdXaGV0aGVyIHRvIHVzZSBzZWN1cmUgY29va2llJywgJ2pldC1mb3JtLWJ1aWxkZXItbG9naW4tYWN0aW9uJyApLFxyXG59ICkuZXhwb3J0QWxsKCk7XHJcblxyXG5leHBvcnQgeyBnZXRMb2NhbGl6ZWRGdWxsUGFjayB9OyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRkE7QUF2QkE7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDakhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFpQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNyTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQWlCQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3RDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=