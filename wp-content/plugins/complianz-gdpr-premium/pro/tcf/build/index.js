/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ccpa/src/uspapi.js":
/*!****************************!*\
  !*** ./ccpa/src/uspapi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _usprivacy_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./usprivacy-string */ "./ccpa/src/usprivacy-string.js");
/**
 * IAB's Reference UspAPI reference implementation
 **/

// import the UsprivacyString class


// global vars
const API_VERSION = 1;
let pendingCalls = [];
let uspString = new _usprivacy_string__WEBPACK_IMPORTED_MODULE_0__["default"]();

// helper functions
let getCookie = function (cookiename) {
  var name = cookiename + "=";
  var cookiearray = document.cookie.split(';');
  for (var i = 0; i < cookiearray.length; i++) {
    var cookie = cookiearray[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) == 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
};

// function to dynamically add the "__uspapiLocator" frame to the window
let addFrame = function () {
  // if the frame does not already exist
  if (!window.frames['__uspapiLocator']) {
    // in case this is running in the <head>, make sure <body> exists
    // (can't/shouldn't add a frame to the <head>
    if (document.body) {
      // create iframe and append it to <body>
      const iframe = document.createElement('iframe');
      iframe.style.cssText = 'display:none';
      iframe.name = '__uspapiLocator';
      document.body.appendChild(iframe);
    } else {
      /**
       * Wait for the body tag to exist.
       *
       * Since this API "stub" is located in the <head>,
       * setTimeout allows us to inject the iframe more
       * quickly than relying on DOMContentLoaded or
       * other events.
       */
      setTimeout(addFrame, 5);
    }
  }
};

// add the "__uspapiLocator" frame to the window
addFrame();
let getuspdata = function (apiver, callback) {
  if (typeof callback === 'function') {
    if (apiver !== null && apiver !== undefined && apiver != API_VERSION) {
      if (typeof callback === 'function') callback(null, false);
      return;
    }

    // Get the data from the storage
    let str1 = null;
    if (str1 = getCookie("usprivacy")) {
      if (!uspString.setUsprivacyString(str1)) {
        console.log("Warning: uspString not set.");
      }
    }

    // get the uspstring and stuff it into the uspdata object
    let str = uspString.getUsprivacyString();
    if (str) {
      callback({
        version: uspString.getVersion(),
        uspString: str
      }, true);
    } else {
      callback({
        version: null,
        uspString: null
      }, false);
    }
  } else {
    console.error("__uspapi: callback parameter not a function");
  }
};

/**
 * U.S. Privacy API implementation
 */
window.__uspapi = new function (win) {
  if (win.__uspapi) {
    try {
      // if the api was already loaded, then use it
      if (win.__uspapi('__uspapi')) {
        return win.__uspapi;
      } else {
        // Making a call to __uspapi with no arguments will return the pending calls;
        pendingCalls = win.__uspapi() || [];
      }
    } catch (nfe) {
      return win.__uspapi;
    }
  }
  let api = function (cmd) {
    try {
      return {
        getUSPData: getuspdata,
        __uspapi: function () {
          return true;
        }
      }[cmd].apply(null, [].slice.call(arguments, 1));
    } catch (err) {
      console.error("__uspapi: Invalid command: ", cmd);
    }
  };
  return api;
}(window);

// register postMessage handler
function __handleUspapiMessage(event) {
  const data = event && event.data && event.data.__uspapiCall;
  if (data) {
    window.__uspapi(data.command, data.version, (returnValue, success) => {
      event.source.postMessage({
        __uspapiReturn: {
          returnValue,
          success,
          callId: data.callId
        }
      }, '*');
    });
  }
}
window.addEventListener('message', __handleUspapiMessage, false);

/***/ }),

/***/ "./ccpa/src/usprivacy-string.js":
/*!**************************************!*\
  !*** ./ccpa/src/usprivacy-string.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * usprivacy-string.js
 * 
 * Implements class UsprivacyString
 * 
 * The class contains the methods to get/set the usprivacy string 
 * and a method to get the current version.
 * 
 * The usprivacy string as the format: ”vnol” where 
 *  v = version
 *  n = Notice Given
 *  o = OptedOut
 *  l = lspact (Limited Service Provider Agreement Covered Transaction)
 * Example: “1YYY” Version 1, Notice given, Opted out, LSAPCT in place.
 * Default is null.
 * 
 **/
const validStringRegExp = /^[1][nNyY-][nNyY-][nNyY-]$/;
class UsprivacyString {
  constructor() {
    this.version = 1;
    this.baseString = null; // default is null
  }

  // getUsprivacyString()
  // return the usprivacy string or null if an error occurs
  getUsprivacyString() {
    return this.baseString;
  }

  // setUsprivacyString(newstr)
  // checks for validity of the string before setting internals
  // returns true if success otherwise false
  setUsprivacyString(newstr) {
    let didSet = false;
    if (validStringRegExp.test(newstr)) {
      this.baseString = newstr;
      didSet = true;
    }
    return didSet;
  }

  // getVerion()
  // returns the version number
  getVersion() {
    return this.version;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UsprivacyString);

/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/CallResponder.js":
/*!**************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/CallResponder.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_KEY: () => (/* binding */ API_KEY),
/* harmony export */   CallResponder: () => (/* binding */ CallResponder)
/* harmony export */ });
/* harmony import */ var _command_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command/index.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/index.js");
/* harmony import */ var _command_CommandMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./command/CommandMap.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/CommandMap.js");
/* harmony import */ var _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CmpApiModel.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/CmpApiModel.js");
/* harmony import */ var _response_Disabled_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./response/Disabled.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/Disabled.js");
/* harmony import */ var _SupportedVersions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SupportedVersions.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/SupportedVersions.js");





const API_KEY = '__tcfapi';
class CallResponder {
    callQueue;
    customCommands;
    constructor(customCommands) {
        if (customCommands) {
            /**
             * The addEventListener command and removeEventListener are the only ones
             * that shouldn't be overwritten. The addEventListener command utilizes
             * getTCData command, so overridding the TCData response should happen
             * there.
             */
            let command = _command_index_js__WEBPACK_IMPORTED_MODULE_0__.TCFCommand.ADD_EVENT_LISTENER;
            if (customCommands?.[command]) {
                throw new Error(`Built-In Custom Commmand for ${command} not allowed: Use ${_command_index_js__WEBPACK_IMPORTED_MODULE_0__.TCFCommand.GET_TC_DATA} instead`);
            }
            command = _command_index_js__WEBPACK_IMPORTED_MODULE_0__.TCFCommand.REMOVE_EVENT_LISTENER;
            if (customCommands?.[command]) {
                throw new Error(`Built-In Custom Commmand for ${command} not allowed`);
            }
            /**
             * If `getTCData` custom command handler is specified, we should use it
             * for `addEventListener` and `removeEventListener` commands.
             */
            if (customCommands?.[_command_index_js__WEBPACK_IMPORTED_MODULE_0__.TCFCommand.GET_TC_DATA]) {
                customCommands[_command_index_js__WEBPACK_IMPORTED_MODULE_0__.TCFCommand.ADD_EVENT_LISTENER] = customCommands[_command_index_js__WEBPACK_IMPORTED_MODULE_0__.TCFCommand.GET_TC_DATA];
                customCommands[_command_index_js__WEBPACK_IMPORTED_MODULE_0__.TCFCommand.REMOVE_EVENT_LISTENER] = customCommands[_command_index_js__WEBPACK_IMPORTED_MODULE_0__.TCFCommand.GET_TC_DATA];
            }
            this.customCommands = customCommands;
        }
        /**
         * Attempt to grab the queue – we could call ping and see if it is the stub,
         * but instead we'll just a feature-detection method of just trying to get
         * a queue by calling the function with no parameters and see if we get a
         * queue back. If there is no stub or the stub doesn't return the queue by
         * calling with no arguments, then we'll just move on and create our
         * function.
         */
        try {
            // get queued commands
            this.callQueue = window[API_KEY]() || [];
        }
        catch (err) {
            this.callQueue = [];
        }
        finally {
            window[API_KEY] = this.apiCall.bind(this);
            this.purgeQueuedCalls();
        }
    }
    /**
     * Handler for all page call commands
     * @param {string} command
     * @param {number} version
     * @param {CommandCallback} callback
     * @param {any} params
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    apiCall(command, version, callback, ...params) {
        if (typeof command !== 'string') {
            callback(null, false);
        }
        else if (!_SupportedVersions_js__WEBPACK_IMPORTED_MODULE_4__.SupportedVersions.has(version)) {
            /**
             * Loosely checking version here on purpose.  If a string is passed
             * that's probably ok, we don't need strict adherence here.
             */
            callback(null, false);
        }
        else if (typeof callback !== 'function') {
            throw new Error('invalid callback function');
        }
        else if (_CmpApiModel_js__WEBPACK_IMPORTED_MODULE_2__.CmpApiModel.disabled) {
            callback(new _response_Disabled_js__WEBPACK_IMPORTED_MODULE_3__.Disabled(), false);
        }
        else if (!this.isCustomCommand(command) && !this.isBuiltInCommand(command)) {
            /**
             * This check is here just because the call shouldn't be queued if it's
             * something we know isn't going to work.  It's kind of like breaking off a bad
             * relationshipthe instant you know things are not going to work out
             * instead of letting it linger.
             */
            callback(null, false);
        }
        else if (this.isCustomCommand(command) && !this.isBuiltInCommand(command)) {
            this.customCommands[command](callback, ...params);
        }
        else if (command === _command_index_js__WEBPACK_IMPORTED_MODULE_0__.TCFCommand.PING) {
            /**
             * if it's a ping we always respond right away regardless of our tcModel
             * status or other things.
             */
            if (this.isCustomCommand(command)) {
                new _command_CommandMap_js__WEBPACK_IMPORTED_MODULE_1__.CommandMap[command](this.customCommands[command], params[0], null, callback);
            }
            else {
                new _command_CommandMap_js__WEBPACK_IMPORTED_MODULE_1__.CommandMap[command](callback, params[0]);
            }
            /**
             * tcModel will be either:
             * 1. undefined - update has not been called
             * 2. null - gdpr does not apply
             * 3. Valid TCModel - gdpr applies and update was called
             */
        }
        else if (_CmpApiModel_js__WEBPACK_IMPORTED_MODULE_2__.CmpApiModel.tcModel === undefined) {
            /**
             * If we are still waiting for the TC data to be set we can push this
             * onto the queue that we have and once the model is set it'll be called
             */
            this.callQueue.push([command, version, callback, ...params]);
        }
        else if (this.isCustomCommand(command) && this.isBuiltInCommand(command)) {
            new _command_CommandMap_js__WEBPACK_IMPORTED_MODULE_1__.CommandMap[command](this.customCommands[command], params[0], null, callback);
        }
        else {
            /**
             * at this point we know the command exists and we are free to call it
             */
            new _command_CommandMap_js__WEBPACK_IMPORTED_MODULE_1__.CommandMap[command](callback, params[0]);
        }
    }
    /**
     * purgeQueuedCalls - if there have been calls that are queued up this method
     * will go through and call them in a FIFO order
     *
     * @return {void}
     */
    purgeQueuedCalls() {
        const queueCopy = this.callQueue;
        this.callQueue = [];
        queueCopy.forEach((args) => {
            window[API_KEY](...args);
        });
    }
    /**
     * Checks to see if the command exists in the set of custom commands
     *
     * @param {string} command - command to check
     * @return {boolean} - whether or not this command is a custom command
     */
    isCustomCommand(command) {
        return ((this.customCommands && typeof this.customCommands[command] === 'function'));
    }
    /**
     * Checks to see if the command exists in the set of TCF Commands
     *
     * @param {string} command - command to check
     * @return {boolean} - whether or not this command is a built-in command
     */
    isBuiltInCommand(command) {
        return ((_command_CommandMap_js__WEBPACK_IMPORTED_MODULE_1__.CommandMap[command] !== undefined));
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/CmpApi.js":
/*!*******************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/CmpApi.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CmpApi: () => (/* binding */ CmpApi)
/* harmony export */ });
/* harmony import */ var _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CmpApiModel.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/CmpApiModel.js");
/* harmony import */ var _status_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./status/index.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/status/index.js");
/* harmony import */ var _CallResponder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CallResponder.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/CallResponder.js");
/* harmony import */ var _iabtcf_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iabtcf/core */ "./node_modules/@iabtcf/core/lib/mjs/index.js");




class CmpApi {
    callResponder;
    isServiceSpecific;
    numUpdates = 0;
    /**
     * @param {number} cmpId - IAB assigned CMP ID
     * @param {number} cmpVersion - integer version of the CMP
     * @param {boolean} isServiceSpecific - whether or not this cmp is configured to be service specific
     * @param {CustomCommands} [customCommands] - custom commands from the cmp
     */
    constructor(cmpId, cmpVersion, isServiceSpecific = false, customCommands) {
        this.throwIfInvalidInt(cmpId, 'cmpId', 2);
        this.throwIfInvalidInt(cmpVersion, 'cmpVersion', 0);
        _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.cmpId = cmpId;
        _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.cmpVersion = cmpVersion;
        _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcfPolicyVersion = 2;
        this.isServiceSpecific = !!isServiceSpecific;
        this.callResponder = new _CallResponder_js__WEBPACK_IMPORTED_MODULE_2__.CallResponder(customCommands);
    }
    throwIfInvalidInt(value, name, minValue) {
        if (!(typeof value === 'number' && Number.isInteger(value) && value >= minValue)) {
            throw new Error(`Invalid ${name}: ${value}`);
        }
    }
    /**
     * update - When the state of a CMP changes this function should be called
     * with the updated tc string and whether or not the UI is visible or not
     *
     * @param {string|null} encodedTCString - set a string to signal that
     * gdprApplies and that an encoded tc string is being passed.  If GDPR does
     * not apply, set to null.
     * @param {boolean} uiVisible - default false.  set to true if the ui is
     * being shown with this tc string update, this will set the correct values
     * for eventStatus and displayStatus.
     * @return {void}
     */
    update(encodedTCString, uiVisible = false) {
        if (_CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.disabled) {
            throw new Error('CmpApi Disabled');
        }
        _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.cmpStatus = _status_index_js__WEBPACK_IMPORTED_MODULE_1__.CmpStatus.LOADED;
        if (uiVisible) {
            _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.displayStatus = _status_index_js__WEBPACK_IMPORTED_MODULE_1__.DisplayStatus.VISIBLE;
            _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.eventStatus = _status_index_js__WEBPACK_IMPORTED_MODULE_1__.EventStatus.CMP_UI_SHOWN;
        }
        else {
            if (_CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcModel === undefined) {
                _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.displayStatus = _status_index_js__WEBPACK_IMPORTED_MODULE_1__.DisplayStatus.DISABLED;
                _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.eventStatus = _status_index_js__WEBPACK_IMPORTED_MODULE_1__.EventStatus.TC_LOADED;
            }
            else {
                _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.displayStatus = _status_index_js__WEBPACK_IMPORTED_MODULE_1__.DisplayStatus.HIDDEN;
                _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.eventStatus = _status_index_js__WEBPACK_IMPORTED_MODULE_1__.EventStatus.USER_ACTION_COMPLETE;
            }
        }
        _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.gdprApplies = (encodedTCString !== null);
        if (!_CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.gdprApplies) {
            _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcModel = null;
        }
        else {
            if (encodedTCString === '') {
                _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcModel = new _iabtcf_core__WEBPACK_IMPORTED_MODULE_3__.TCModel();
                _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcModel.cmpId = _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.cmpId;
                _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcModel.cmpVersion = _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.cmpVersion;
            }
            else {
                _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcModel = _iabtcf_core__WEBPACK_IMPORTED_MODULE_3__.TCString.decode(encodedTCString);
            }
            _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcModel.isServiceSpecific = this.isServiceSpecific;
            _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcfPolicyVersion = Number(_CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcModel.policyVersion);
            _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcString = encodedTCString;
        }
        if (this.numUpdates === 0) {
            /**
             * Will make AddEventListener Commands respond immediately.
             */
            this.callResponder.purgeQueuedCalls();
        }
        else {
            /**
             * Should be no queued calls and only any addEventListener commands
             */
            _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.eventQueue.exec();
        }
        this.numUpdates++;
    }
    /**
     * Disables the CmpApi from serving anything but ping and custom commands
     * Cannot be undone
     *
     * @return {void}
     */
    disable() {
        _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.disabled = true;
        _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.cmpStatus = _status_index_js__WEBPACK_IMPORTED_MODULE_1__.CmpStatus.ERROR;
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/CmpApiModel.js":
/*!************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/CmpApiModel.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CmpApiModel: () => (/* binding */ CmpApiModel)
/* harmony export */ });
/* harmony import */ var _status_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./status/index.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/status/index.js");
/* harmony import */ var _EventListenerQueue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventListenerQueue.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/EventListenerQueue.js");


/**
 * Class holds shareable data across cmp api and provides change event listener for TcModel.
 * Within the context of the CmpApi, this class acts much like a global state or database,
 * where CmpApi sets data and Commands read the data.
 */
class CmpApiModel {
    static apiVersion = '2';
    static tcfPolicyVersion;
    static eventQueue = new _EventListenerQueue_js__WEBPACK_IMPORTED_MODULE_1__.EventListenerQueue();
    static cmpStatus = _status_index_js__WEBPACK_IMPORTED_MODULE_0__.CmpStatus.LOADING;
    static disabled = false;
    static displayStatus = _status_index_js__WEBPACK_IMPORTED_MODULE_0__.DisplayStatus.HIDDEN;
    static cmpId;
    static cmpVersion;
    static eventStatus;
    static gdprApplies;
    static tcModel;
    static tcString;
    static reset() {
        delete this.cmpId;
        delete this.cmpVersion;
        delete this.eventStatus;
        delete this.gdprApplies;
        delete this.tcModel;
        delete this.tcString;
        delete this.tcfPolicyVersion;
        this.cmpStatus = _status_index_js__WEBPACK_IMPORTED_MODULE_0__.CmpStatus.LOADING;
        this.disabled = false;
        this.displayStatus = _status_index_js__WEBPACK_IMPORTED_MODULE_0__.DisplayStatus.HIDDEN;
        this.eventQueue.clear();
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/CustomCommands.js":
/*!***************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/CustomCommands.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/EventListenerQueue.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/EventListenerQueue.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventListenerQueue: () => (/* binding */ EventListenerQueue)
/* harmony export */ });
/* harmony import */ var _command_GetTCDataCommand_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command/GetTCDataCommand.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/GetTCDataCommand.js");

class EventListenerQueue {
    eventQueue = new Map();
    queueNumber = 0;
    add(eventItems) {
        this.eventQueue.set(this.queueNumber, eventItems);
        return this.queueNumber++;
    }
    remove(listenerId) {
        return this.eventQueue.delete(listenerId);
    }
    exec() {
        this.eventQueue.forEach((eventItem, listenerId) => {
            new _command_GetTCDataCommand_js__WEBPACK_IMPORTED_MODULE_0__.GetTCDataCommand(eventItem.callback, eventItem.param, listenerId, eventItem.next);
        });
    }
    clear() {
        this.queueNumber = 0;
        this.eventQueue.clear();
    }
    get size() {
        return this.eventQueue.size;
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/SupportedVersions.js":
/*!******************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/SupportedVersions.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SupportedVersions: () => (/* binding */ SupportedVersions)
/* harmony export */ });
class SupportedVersions {
    static set_ = new Set([0, 2, undefined, null]);
    static has(value) {
        if (typeof value === 'string') {
            value = Number(value);
        }
        return this.set_.has(value);
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/AddEventListenerCommand.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/command/AddEventListenerCommand.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddEventListenerCommand: () => (/* binding */ AddEventListenerCommand)
/* harmony export */ });
/* harmony import */ var _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CmpApiModel.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/CmpApiModel.js");
/* harmony import */ var _GetTCDataCommand_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetTCDataCommand.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/GetTCDataCommand.js");


class AddEventListenerCommand extends _GetTCDataCommand_js__WEBPACK_IMPORTED_MODULE_1__.GetTCDataCommand {
    respond() {
        this.listenerId = _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.eventQueue.add({
            callback: this.callback,
            param: this.param,
            next: this.next,
        });
        super.respond();
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/Command.js":
/*!****************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/command/Command.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Command: () => (/* binding */ Command)
/* harmony export */ });
class Command {
    listenerId;
    callback;
    next;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    param;
    success = true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(callback, param, listenerId, next) {
        Object.assign(this, {
            callback,
            listenerId,
            param,
            next,
        });
        try {
            this.respond();
        }
        catch (error) {
            this.invokeCallback(null);
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    invokeCallback(response) {
        const success = response !== null;
        if (typeof this.next === 'function') {
            this.callback(this.next, response, success);
        }
        else {
            this.callback(response, success);
        }
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/CommandCallback.js":
/*!************************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/command/CommandCallback.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/CommandMap.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/command/CommandMap.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommandMap: () => (/* binding */ CommandMap)
/* harmony export */ });
/* harmony import */ var _PingCommand_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PingCommand.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/PingCommand.js");
/* harmony import */ var _GetTCDataCommand_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GetTCDataCommand.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/GetTCDataCommand.js");
/* harmony import */ var _GetInAppTCDataCommand_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GetInAppTCDataCommand.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/GetInAppTCDataCommand.js");
/* harmony import */ var _GetVendorListCommand_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GetVendorListCommand.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/GetVendorListCommand.js");
/* harmony import */ var _AddEventListenerCommand_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddEventListenerCommand.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/AddEventListenerCommand.js");
/* harmony import */ var _RemoveEventListenerCommand_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RemoveEventListenerCommand.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/RemoveEventListenerCommand.js");
/* harmony import */ var _TCFCommand_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TCFCommand.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/TCFCommand.js");







class CommandMap {
    static [_TCFCommand_js__WEBPACK_IMPORTED_MODULE_6__.TCFCommand.PING] = _PingCommand_js__WEBPACK_IMPORTED_MODULE_0__.PingCommand;
    static [_TCFCommand_js__WEBPACK_IMPORTED_MODULE_6__.TCFCommand.GET_TC_DATA] = _GetTCDataCommand_js__WEBPACK_IMPORTED_MODULE_1__.GetTCDataCommand;
    static [_TCFCommand_js__WEBPACK_IMPORTED_MODULE_6__.TCFCommand.GET_IN_APP_TC_DATA] = _GetInAppTCDataCommand_js__WEBPACK_IMPORTED_MODULE_2__.GetInAppTCDataCommand;
    static [_TCFCommand_js__WEBPACK_IMPORTED_MODULE_6__.TCFCommand.GET_VENDOR_LIST] = _GetVendorListCommand_js__WEBPACK_IMPORTED_MODULE_3__.GetVendorListCommand;
    static [_TCFCommand_js__WEBPACK_IMPORTED_MODULE_6__.TCFCommand.ADD_EVENT_LISTENER] = _AddEventListenerCommand_js__WEBPACK_IMPORTED_MODULE_4__.AddEventListenerCommand;
    static [_TCFCommand_js__WEBPACK_IMPORTED_MODULE_6__.TCFCommand.REMOVE_EVENT_LISTENER] = _RemoveEventListenerCommand_js__WEBPACK_IMPORTED_MODULE_5__.RemoveEventListenerCommand;
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/GetInAppTCDataCommand.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/command/GetInAppTCDataCommand.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetInAppTCDataCommand: () => (/* binding */ GetInAppTCDataCommand)
/* harmony export */ });
/* harmony import */ var _GetTCDataCommand_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GetTCDataCommand.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/GetTCDataCommand.js");
/* harmony import */ var _response_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../response/index.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/index.js");


class GetInAppTCDataCommand extends _GetTCDataCommand_js__WEBPACK_IMPORTED_MODULE_0__.GetTCDataCommand {
    respond() {
        this.throwIfParamInvalid();
        this.invokeCallback(new _response_index_js__WEBPACK_IMPORTED_MODULE_1__.InAppTCData(this.param));
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/GetTCDataCommand.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/command/GetTCDataCommand.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetTCDataCommand: () => (/* binding */ GetTCDataCommand)
/* harmony export */ });
/* harmony import */ var _Command_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Command.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/Command.js");
/* harmony import */ var _response_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../response/index.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/index.js");


class GetTCDataCommand extends _Command_js__WEBPACK_IMPORTED_MODULE_0__.Command {
    respond() {
        this.throwIfParamInvalid();
        this.invokeCallback(new _response_index_js__WEBPACK_IMPORTED_MODULE_1__.TCData(this.param, this.listenerId));
    }
    throwIfParamInvalid() {
        /**
         * if they have passed something in as a parameter we'll need to see if
         * it's usable.  If not then we'll need to throw an error.  Check to see if
         * the array is not undefined and is an array of integers, otherwise it's
         * unusable
         */
        if (this.param !== undefined &&
            (!Array.isArray(this.param) ||
                !this.param.every(Number.isInteger))) {
            throw new Error('Invalid Parameter');
        }
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/GetVendorListCommand.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/command/GetVendorListCommand.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GetVendorListCommand: () => (/* binding */ GetVendorListCommand)
/* harmony export */ });
/* harmony import */ var _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CmpApiModel.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/CmpApiModel.js");
/* harmony import */ var _Command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Command.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/Command.js");
/* harmony import */ var _iabtcf_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iabtcf/core */ "./node_modules/@iabtcf/core/lib/mjs/index.js");



/**
 * Gets a version of the Global Vendors List
 */
class GetVendorListCommand extends _Command_js__WEBPACK_IMPORTED_MODULE_1__.Command {
    respond() {
        const tcModel = _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcModel;
        const tcModelVersion = tcModel.vendorListVersion;
        let gvl;
        if (this.param === undefined) {
            this.param = tcModelVersion;
        }
        if (this.param === tcModelVersion && tcModel.gvl) {
            gvl = tcModel.gvl;
        }
        else {
            gvl = new _iabtcf_core__WEBPACK_IMPORTED_MODULE_2__.GVL(this.param);
        }
        gvl.readyPromise.then(() => {
            this.invokeCallback(gvl.getJson());
        });
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/PingCommand.js":
/*!********************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/command/PingCommand.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PingCommand: () => (/* binding */ PingCommand)
/* harmony export */ });
/* harmony import */ var _response_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../response/index.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/index.js");
/* harmony import */ var _Command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Command.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/Command.js");


class PingCommand extends _Command_js__WEBPACK_IMPORTED_MODULE_1__.Command {
    respond() {
        this.invokeCallback(new _response_index_js__WEBPACK_IMPORTED_MODULE_0__.Ping());
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/RemoveEventListenerCommand.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/command/RemoveEventListenerCommand.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RemoveEventListenerCommand: () => (/* binding */ RemoveEventListenerCommand)
/* harmony export */ });
/* harmony import */ var _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CmpApiModel.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/CmpApiModel.js");
/* harmony import */ var _Command_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Command.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/Command.js");


class RemoveEventListenerCommand extends _Command_js__WEBPACK_IMPORTED_MODULE_1__.Command {
    respond() {
        this.invokeCallback(_CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.eventQueue.remove(this.param));
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/TCFCommand.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/command/TCFCommand.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TCFCommand: () => (/* binding */ TCFCommand)
/* harmony export */ });
var TCFCommand;
(function (TCFCommand) {
    TCFCommand["PING"] = "ping";
    TCFCommand["GET_TC_DATA"] = "getTCData";
    TCFCommand["GET_IN_APP_TC_DATA"] = "getInAppTCData";
    TCFCommand["GET_VENDOR_LIST"] = "getVendorList";
    TCFCommand["ADD_EVENT_LISTENER"] = "addEventListener";
    TCFCommand["REMOVE_EVENT_LISTENER"] = "removeEventListener";
})(TCFCommand || (TCFCommand = {}));


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/command/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TCFCommand: () => (/* reexport safe */ _TCFCommand_js__WEBPACK_IMPORTED_MODULE_0__.TCFCommand)
/* harmony export */ });
/* harmony import */ var _TCFCommand_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TCFCommand.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/TCFCommand.js");
/* harmony import */ var _CommandCallback_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommandCallback.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/CommandCallback.js");




/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_KEY: () => (/* reexport safe */ _CallResponder_js__WEBPACK_IMPORTED_MODULE_6__.API_KEY),
/* harmony export */   CmpApi: () => (/* reexport safe */ _CmpApi_js__WEBPACK_IMPORTED_MODULE_3__.CmpApi),
/* harmony export */   CmpApiModel: () => (/* reexport safe */ _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_4__.CmpApiModel),
/* harmony export */   CmpStatus: () => (/* reexport safe */ _status_index_js__WEBPACK_IMPORTED_MODULE_2__.CmpStatus),
/* harmony export */   Disabled: () => (/* reexport safe */ _response_index_js__WEBPACK_IMPORTED_MODULE_1__.Disabled),
/* harmony export */   DisplayStatus: () => (/* reexport safe */ _status_index_js__WEBPACK_IMPORTED_MODULE_2__.DisplayStatus),
/* harmony export */   EventStatus: () => (/* reexport safe */ _status_index_js__WEBPACK_IMPORTED_MODULE_2__.EventStatus),
/* harmony export */   InAppTCData: () => (/* reexport safe */ _response_index_js__WEBPACK_IMPORTED_MODULE_1__.InAppTCData),
/* harmony export */   Ping: () => (/* reexport safe */ _response_index_js__WEBPACK_IMPORTED_MODULE_1__.Ping),
/* harmony export */   Response: () => (/* reexport safe */ _response_index_js__WEBPACK_IMPORTED_MODULE_1__.Response),
/* harmony export */   TCData: () => (/* reexport safe */ _response_index_js__WEBPACK_IMPORTED_MODULE_1__.TCData),
/* harmony export */   TCFCommand: () => (/* reexport safe */ _command_index_js__WEBPACK_IMPORTED_MODULE_0__.TCFCommand)
/* harmony export */ });
/* harmony import */ var _command_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./command/index.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/command/index.js");
/* harmony import */ var _response_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response/index.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/index.js");
/* harmony import */ var _status_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./status/index.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/status/index.js");
/* harmony import */ var _CmpApi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CmpApi.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/CmpApi.js");
/* harmony import */ var _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CmpApiModel.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/CmpApiModel.js");
/* harmony import */ var _CustomCommands_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CustomCommands.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/CustomCommands.js");
/* harmony import */ var _CallResponder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CallResponder.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/CallResponder.js");









/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/Disabled.js":
/*!******************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/response/Disabled.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Disabled: () => (/* binding */ Disabled)
/* harmony export */ });
/* harmony import */ var _Response_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Response.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/Response.js");
/* harmony import */ var _status_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../status/index.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/status/index.js");


class Disabled extends _Response_js__WEBPACK_IMPORTED_MODULE_0__.Response {
    cmpStatus = _status_index_js__WEBPACK_IMPORTED_MODULE_1__.CmpStatus.ERROR;
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/InAppTCData.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/response/InAppTCData.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InAppTCData: () => (/* binding */ InAppTCData)
/* harmony export */ });
/* harmony import */ var _TCData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TCData.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/TCData.js");

/**
 * InAppTCData response builder
 */
class InAppTCData extends _TCData_js__WEBPACK_IMPORTED_MODULE_0__.TCData {
    constructor(vendorIds) {
        super(vendorIds);
        delete this.outOfBand;
    }
    /**
     * Creates a string bit field with a value for each id where each value is '1' if its id is in the passed in vector
     * @override
     * @param {Vector} vector
     * @return {string}
     */
    createVectorField(vector) {
        return [...vector].reduce((str, tpl) => {
            str += tpl[1] ? '1' : '0';
            return str;
        }, '');
    }
    /**
     * Creates a restrictions object given a PurposeRestrictionVector
     * @override
     * @param {PurposeRestrictionVector} purpRestrictions
     * @return {Restrictions}
     */
    createRestrictions(purpRestrictions) {
        const retr = {};
        if (purpRestrictions.numRestrictions > 0) {
            const maxVendorId = purpRestrictions.getMaxVendorId();
            /**
             * First create a string of empty values for each purpose that is long
             * enough to contain up to the max vendor id
             */
            purpRestrictions.getRestrictions().forEach((pRestrict) => {
                retr[pRestrict.purposeId.toString()] = '_'.repeat(maxVendorId);
            });
            /**
             * go through all of the vendor ids and insert their restriction type
             * number at the index of their vendor id on the purposeID string
             */
            for (let i = 0; i < maxVendorId; i++) {
                // offset by one
                const vendorId = i + 1;
                // Gets a list of purpose restrictions for this vendor
                purpRestrictions.getRestrictions(vendorId).forEach((pRestrict) => {
                    const strType = pRestrict.restrictionType.toString();
                    const strPurp = pRestrict.purposeId.toString();
                    // insert the restriction type at the index of the vendor ID
                    const firstPart = retr[strPurp].substr(0, i);
                    const lastPart = retr[strPurp].substr(i + 1);
                    retr[strPurp] = firstPart + strType + lastPart;
                });
            }
        }
        return retr;
    }
    ;
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/Ping.js":
/*!**************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/response/Ping.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ping: () => (/* binding */ Ping)
/* harmony export */ });
/* harmony import */ var _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CmpApiModel.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/CmpApiModel.js");
/* harmony import */ var _Response_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Response.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/Response.js");


/**
 * Ping response builder
 */
class Ping extends _Response_js__WEBPACK_IMPORTED_MODULE_1__.Response {
    /**
     * true - CMP main script is loaded
     * false - still running stub
     */
    cmpLoaded = true;
    /**
     * see Ping Status Codes in following table
     */
    cmpStatus = _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.cmpStatus;
    /**
     * see Ping Status Codes in following table
     */
    displayStatus = _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.displayStatus;
    /**
     * version of the CMP API that is supported; e.g. “2”
     */
    apiVersion = String(_CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.apiVersion);
    /**
     * Version of the GVL currently loaded by the CMP
     * undefined if still the stub
     */
    gvlVersion;
    constructor() {
        super();
        // only if the tcModel is defined
        if (_CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcModel && _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcModel.vendorListVersion) {
            this.gvlVersion = +_CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcModel.vendorListVersion;
        }
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/Response.js":
/*!******************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/response/Response.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Response: () => (/* binding */ Response)
/* harmony export */ });
/* harmony import */ var _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CmpApiModel.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/CmpApiModel.js");

class Response {
    cmpId = _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.cmpId;
    cmpVersion = _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.cmpVersion;
    gdprApplies = _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.gdprApplies;
    tcfPolicyVersion = _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcfPolicyVersion;
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/TCData.js":
/*!****************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/response/TCData.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TCData: () => (/* binding */ TCData)
/* harmony export */ });
/* harmony import */ var _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CmpApiModel.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/CmpApiModel.js");
/* harmony import */ var _Response_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Response.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/Response.js");


class TCData extends _Response_js__WEBPACK_IMPORTED_MODULE_1__.Response {
    tcString;
    listenerId;
    eventStatus;
    cmpStatus;
    isServiceSpecific;
    useNonStandardStacks;
    publisherCC;
    purposeOneTreatment;
    outOfBand;
    purpose;
    vendor;
    specialFeatureOptins;
    publisher;
    /**
     * Constructor to create a TCData object from a TCModel
     * @param {number[]} vendorIds - if not undefined, will be used to filter vendor ids
     * @param {number} listenerId - if there is a listenerId to add
     */
    constructor(vendorIds, listenerId) {
        super();
        this.eventStatus = _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.eventStatus;
        this.cmpStatus = _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.cmpStatus;
        this.listenerId = listenerId;
        if (_CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.gdprApplies) {
            const tcModel = _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcModel;
            this.tcString = _CmpApiModel_js__WEBPACK_IMPORTED_MODULE_0__.CmpApiModel.tcString;
            this.isServiceSpecific = tcModel.isServiceSpecific;
            this.useNonStandardStacks = tcModel.useNonStandardStacks;
            this.purposeOneTreatment = tcModel.purposeOneTreatment;
            this.publisherCC = tcModel.publisherCountryCode;
            this.outOfBand = {
                allowedVendors: this.createVectorField(tcModel.vendorsAllowed, vendorIds),
                disclosedVendors: this.createVectorField(tcModel.vendorsDisclosed, vendorIds),
            };
            this.purpose = {
                consents: this.createVectorField(tcModel.purposeConsents),
                legitimateInterests: this.createVectorField(tcModel.purposeLegitimateInterests),
            };
            this.vendor = {
                consents: this.createVectorField(tcModel.vendorConsents, vendorIds),
                legitimateInterests: this.createVectorField(tcModel.vendorLegitimateInterests, vendorIds),
            };
            this.specialFeatureOptins = this.createVectorField(tcModel.specialFeatureOptins);
            this.publisher = {
                consents: this.createVectorField(tcModel.publisherConsents),
                legitimateInterests: this.createVectorField(tcModel.publisherLegitimateInterests),
                customPurpose: {
                    consents: this.createVectorField(tcModel.publisherCustomConsents),
                    legitimateInterests: this.createVectorField(tcModel.publisherCustomLegitimateInterests),
                },
                restrictions: this.createRestrictions(tcModel.publisherRestrictions),
            };
        }
    }
    /**
     * Creates a restrictions object given a PurposeRestrictionVector
     * @param {PurposeRestrictionVector} purpRestrictions
     * @return {Restrictions}
     */
    createRestrictions(purpRestrictions) {
        const retr = {};
        if (purpRestrictions.numRestrictions > 0) {
            const max = purpRestrictions.getMaxVendorId();
            for (let vendorId = 1; vendorId <= max; vendorId++) {
                const strVendorId = vendorId.toString();
                // vendors restrictions
                purpRestrictions.getRestrictions(vendorId).forEach((pRestrict) => {
                    const strPurpId = pRestrict.purposeId.toString();
                    if (!retr[strPurpId]) {
                        retr[strPurpId] = {};
                    }
                    retr[strPurpId][strVendorId] = pRestrict.restrictionType;
                });
            }
        }
        return retr;
    }
    ;
    /**
     * Creates a string bit field with a value for each id where each value is
     * '1' if its id is in the passed in vector Can be overwritten to return a
     * string
     * @param {Vector} vector
     * @param {number[]} ids filter
     * @return {BooleanVector | string}
     */
    createVectorField(vector, ids) {
        if (ids) {
            return ids.reduce((booleanVector, obj) => {
                booleanVector[String(obj)] = vector.has(Number(obj));
                return booleanVector;
            }, {});
        }
        return [...vector].reduce((booleanVector, keys) => {
            booleanVector[keys[0].toString(10)] = keys[1];
            return booleanVector;
        }, {});
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/response/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Disabled: () => (/* reexport safe */ _Disabled_js__WEBPACK_IMPORTED_MODULE_0__.Disabled),
/* harmony export */   InAppTCData: () => (/* reexport safe */ _InAppTCData_js__WEBPACK_IMPORTED_MODULE_1__.InAppTCData),
/* harmony export */   Ping: () => (/* reexport safe */ _Ping_js__WEBPACK_IMPORTED_MODULE_2__.Ping),
/* harmony export */   Response: () => (/* reexport safe */ _Response_js__WEBPACK_IMPORTED_MODULE_3__.Response),
/* harmony export */   TCData: () => (/* reexport safe */ _TCData_js__WEBPACK_IMPORTED_MODULE_4__.TCData)
/* harmony export */ });
/* harmony import */ var _Disabled_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Disabled.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/Disabled.js");
/* harmony import */ var _InAppTCData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InAppTCData.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/InAppTCData.js");
/* harmony import */ var _Ping_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ping.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/Ping.js");
/* harmony import */ var _Response_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Response.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/Response.js");
/* harmony import */ var _TCData_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TCData.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/response/TCData.js");







/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/status/CmpStatus.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/status/CmpStatus.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CmpStatus: () => (/* binding */ CmpStatus)
/* harmony export */ });
/**
 * An enum representing all the possible statuses for the cmpStatus returned
 * through the CMP API
 *
 * @readonly
 * @enum {string}
 */
var CmpStatus;
(function (CmpStatus) {
    /**
     * CMP not yet loaded – stub still in place
     * @type {string}
     */
    CmpStatus["STUB"] = "stub";
    /**
     * CMP is loading
     * @type {string}
     */
    CmpStatus["LOADING"] = "loading";
    /**
     * CMP is finished loading
     * @type {string}
     */
    CmpStatus["LOADED"] = "loaded";
    /**
     * CMP is in an error state. A CMP shall not respond to any other API requests if this cmpStatus is present.
     * A CMP may set this status if, for any reason, it is unable to perform the operations in compliance with the TCF.
     * @type {string}
     */
    CmpStatus["ERROR"] = "error";
})(CmpStatus || (CmpStatus = {}));


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/status/DisplayStatus.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/status/DisplayStatus.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DisplayStatus: () => (/* binding */ DisplayStatus)
/* harmony export */ });
/**
 * An enum representing all the possible statuses for the displayStatus
 * returned through the CMP API
 *
 * @readonly
 * @enum {string}
 */
var DisplayStatus;
(function (DisplayStatus) {
    /**
     * User interface is currently displayed
     * @type {string}
     */
    DisplayStatus["VISIBLE"] = "visible";
    /**
     * User interface is not yet or no longer displayed
     * @type {string}
     */
    DisplayStatus["HIDDEN"] = "hidden";
    /**
     * User interface will not show (e.g. GDPR does not apply or TC data is current and does not need renewal)
     * @type {string}
     */
    DisplayStatus["DISABLED"] = "disabled";
})(DisplayStatus || (DisplayStatus = {}));


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/status/EventStatus.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/status/EventStatus.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventStatus: () => (/* binding */ EventStatus)
/* harmony export */ });
/**
 * EventStatus enum represents the possible values of the eventStatus property of the TCData
 */
var EventStatus;
(function (EventStatus) {
    /**
     * A CMP is loaded and is prepared to surface a TC String to any calling scripts on the page
     * @type {string}
     */
    EventStatus["TC_LOADED"] = "tcloaded";
    /**
     * The UI is surfaced or re-surfaced
     * And TC String is available and has rendered "Transparency" in accordance with the TCF Policy.
     * @type {string}
     */
    EventStatus["CMP_UI_SHOWN"] = "cmpuishown";
    /**
     * User has confirmed or re-confirmed their choices in accordance with TCF Policy
     * and a CMP is prepared to respond to any calling scripts with the corresponding TC String.
     * @type {string}
     */
    EventStatus["USER_ACTION_COMPLETE"] = "useractioncomplete";
})(EventStatus || (EventStatus = {}));


/***/ }),

/***/ "./node_modules/@iabtcf/cmpapi/lib/mjs/status/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@iabtcf/cmpapi/lib/mjs/status/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CmpStatus: () => (/* reexport safe */ _CmpStatus_js__WEBPACK_IMPORTED_MODULE_0__.CmpStatus),
/* harmony export */   DisplayStatus: () => (/* reexport safe */ _DisplayStatus_js__WEBPACK_IMPORTED_MODULE_1__.DisplayStatus),
/* harmony export */   EventStatus: () => (/* reexport safe */ _EventStatus_js__WEBPACK_IMPORTED_MODULE_2__.EventStatus)
/* harmony export */ });
/* harmony import */ var _CmpStatus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CmpStatus.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/status/CmpStatus.js");
/* harmony import */ var _DisplayStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DisplayStatus.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/status/DisplayStatus.js");
/* harmony import */ var _EventStatus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventStatus.js */ "./node_modules/@iabtcf/cmpapi/lib/mjs/status/EventStatus.js");





/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/Cloneable.js":
/*!********************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/Cloneable.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cloneable: () => (/* binding */ Cloneable)
/* harmony export */ });
/**
 * Abstract Class Cloneable<T> can be extended to give the child class the ability to clone its self.
 * The child class must pass its class to super. You can then pass any needed arguments to help build
 * the cloned class to the protected _clone() method.
 *
 * Example:
 *
 * class Example extends Cloneable<Example> {
 *
 * }
 * Todo: There must be more non primitive build in types to check. But for our current purposes, this works great.
 */
class Cloneable {
    /**
     * clone - returns a copy of the classes with new values and not references
     *
     * @return {T}
     */
    clone() {
        const myClone = new this.constructor();
        const keys = Object.keys(this);
        keys.forEach((key) => {
            const value = this.deepClone(this[key]);
            if (value !== undefined) {
                myClone[key] = value;
            }
        });
        return myClone;
    }
    ;
    /**
     * deepClone - recursive function that makes copies of reference values
     *
     * @param {unknown} item
     * @return {unknown}
     */
    deepClone(item) {
        const itsType = typeof item;
        if (itsType === 'number' || itsType === 'string' || itsType === 'boolean') {
            return item;
        }
        else if (item !== null && itsType === 'object') {
            if (typeof item.clone === 'function') {
                return item.clone();
            }
            else if (item instanceof Date) {
                return new Date(item.getTime());
            }
            else if (item[Symbol.iterator] !== undefined) {
                const ar = [];
                for (const subItem of item) {
                    ar.push(this.deepClone(subItem));
                }
                if (item instanceof Array) {
                    return ar;
                }
                else {
                    return new item.constructor(ar);
                }
            }
            else {
                const retr = {};
                for (const prop in item) {
                    if (item.hasOwnProperty(prop)) {
                        retr[prop] = this.deepClone(item[prop]);
                    }
                }
                return retr;
            }
        }
        /**
         * ignore functions because those will be initialized with the cloning
         * process
         */
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/GVL.js":
/*!**************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/GVL.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GVL: () => (/* binding */ GVL)
/* harmony export */ });
/* harmony import */ var _Cloneable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cloneable.js */ "./node_modules/@iabtcf/core/lib/mjs/Cloneable.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors/index.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/index.js");
/* harmony import */ var _Json_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Json.js */ "./node_modules/@iabtcf/core/lib/mjs/Json.js");
/* harmony import */ var _model_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/index.js */ "./node_modules/@iabtcf/core/lib/mjs/model/index.js");




/**
 * class with utilities for managing the global vendor list.  Will use JSON to
 * fetch the vendor list from specified url and will serialize it into this
 * object and provide accessors.  Provides ways to group vendors on the list by
 * purpose and feature.
 */
class GVL extends _Cloneable_js__WEBPACK_IMPORTED_MODULE_0__.Cloneable {
    static LANGUAGE_CACHE = new Map();
    static CACHE = new Map();
    static LATEST_CACHE_KEY = 0;
    static DEFAULT_LANGUAGE = 'EN';
    /**
     * Set of available consent languages published by the IAB
     */
    static consentLanguages = new _model_index_js__WEBPACK_IMPORTED_MODULE_3__.ConsentLanguages();
    static baseUrl_;
    /**
     * baseUrl - Entities using the vendor-list.json are required by the iab to
     * host their own copy of it to reduce the load on the iab's infrastructure
     * so a 'base' url must be set to be put together with the versioning scheme
     * of the filenames.
     *
     * @static
     * @param {string} url - the base url to load the vendor-list.json from.  This is
     * broken out from the filename because it follows a different scheme for
     * latest file vs versioned files.
     *
     * @throws {GVLError} - If the url is http[s]://vendorlist.consensu.org/...
     * this will throw an error.  IAB Europe requires that that CMPs and Vendors
     * cache their own copies of the GVL to minimize load on their
     * infrastructure.  For more information regarding caching of the
     * vendor-list.json, please see [the TCF documentation on 'Caching the Global
     * Vendor List'
     * ](https://github.com/InteractiveAdvertisingBureau/GDPR-Transparency-and-Consent-Framework/blob/master/TCFv2/IAB%20Tech%20Lab%20-%20Consent%20string%20and%20vendor%20list%20formats%20v2.md#caching-the-global-vendor-list)
     */
    static set baseUrl(url) {
        const notValid = /^https?:\/\/vendorlist\.consensu\.org\//;
        if (notValid.test(url)) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.GVLError('Invalid baseUrl!  You may not pull directly from vendorlist.consensu.org and must provide your own cache');
        }
        // if a trailing slash was forgotten
        if (url.length > 0 && url[url.length - 1] !== '/') {
            url += '/';
        }
        this.baseUrl_ = url;
    }
    ;
    /**
     * baseUrl - Entities using the vendor-list.json are required by the iab to
     * host their own copy of it to reduce the load on the iab's infrastructure
     * so a 'base' url must be set to be put together with the versioning scheme
     * of the filenames.
     *
     * @static
     * @return {string} - returns the previously set baseUrl, the default is
     * `undefined`
     */
    static get baseUrl() {
        return this.baseUrl_;
    }
    /**
     * @static
     * @param {string} - the latest is assumed to be vendor-list.json because
     * that is what the iab uses, but it could be different... if you want
     */
    static latestFilename = 'vendor-list.json';
    /**
     * @static
     * @param {string} - the versioned name is assumed to be
     * vendor-list-v[VERSION].json where [VERSION] will be replaced with the
     * specified version.  But it could be different... if you want just make
     * sure to include the [VERSION] macro if you have a numbering scheme, it's a
     * simple string substitution.
     *
     * eg.
     * ```javascript
     * GVL.baseUrl = "http://www.mydomain.com/iabcmp/";
     * GVL.versionedFilename = "vendorlist?getVersion=[VERSION]";
     * ```
     */
    static versionedFilename = 'archives/vendor-list-v[VERSION].json';
    /**
     * @param {string} - Translations of the names and descriptions for Purposes,
     * Special Purposes, Features, and Special Features to non-English languages
     * are contained in a file where attributes containing English content
     * (except vendor declaration information) are translated.  The iab publishes
     * one following the scheme below where the LANG is the iso639-1 language
     * code.  For a list of available translations
     * [please go here](https://register.consensu.org/Translation).
     *
     * eg.
     * ```javascript
     * GVL.baseUrl = "http://www.mydomain.com/iabcmp/";
     * GVL.languageFilename = "purposes?getPurposes=[LANG]";
     * ```
     */
    static languageFilename = 'purposes-[LANG].json';
    /**
     * @param {Promise} resolved when this GVL object is populated with the data
     * or rejected if there is an error.
     */
    readyPromise;
    /**
     * @param {number} gvlSpecificationVersion - schema version for the GVL that is used
     */
    gvlSpecificationVersion;
    /**
     * @param {number} incremented with each published file change
     */
    vendorListVersion;
    /**
     * @param {number} tcfPolicyVersion - The TCF MO will increment this value
     * whenever a GVL change (such as adding a new Purpose or Feature or a change
     * in Purpose wording) legally invalidates existing TC Strings and requires
     * CMPs to re-establish transparency and consent from users. If the policy
     * version number in the latest GVL is different from the value in your TC
     * String, then you need to re-establish transparency and consent for that
     * user. A version 1 format TC String is considered to have a version value
     * of 1.
     */
    tcfPolicyVersion;
    /**
     * @param {string | Date} lastUpdated - the date in which the vendor list
     * json file  was last updated.
     */
    lastUpdated;
    /**
     * @param {IntMap<Purpose>} a collection of [[Purpose]]s
     */
    purposes;
    /**
     * @param {IntMap<Purpose>} a collection of [[Purpose]]s
     */
    specialPurposes;
    /**
     * @param {IntMap<Feature>} a collection of [[Feature]]s
     */
    features;
    /**
     * @param {IntMap<Feature>} a collection of [[Feature]]s
     */
    specialFeatures;
    /**
     * @param {boolean} internal reference of when the GVL is ready to be used
     */
    isReady_ = false;
    /**
     * @param {IntMap<Vendor>} a collection of [[Vendor]]s
     */
    vendors_;
    vendorIds;
    /**
     * @param {IntMap<Vendor>} a collection of [[Vendor]]. Used as a backup if a whitelist is sets
     */
    fullVendorList;
    /**
     * @param {ByPurposeVendorMap} vendors by purpose
     */
    byPurposeVendorMap;
    /**
     * @param {IDSetMap} vendors by special purpose
     */
    bySpecialPurposeVendorMap;
    /**
     * @param {IDSetMap} vendors by feature
     */
    byFeatureVendorMap;
    /**
     * @param {IDSetMap} vendors by special feature
     */
    bySpecialFeatureVendorMap;
    /**
     * @param {IntMap<Stack>} a collection of [[Stack]]s
     */
    stacks;
    lang_;
    isLatest = false;
    /**
     * @param {VersionOrVendorList} [versionOrVendorList] - can be either a
     * [[VendorList]] object or a version number represented as a string or
     * number to download.  If nothing is passed the latest version of the GVL
     * will be loaded
     */
    constructor(versionOrVendorList) {
        super();
        /**
         * should have been configured before and instance was created and will
         * persist through the app
         */
        let url = GVL.baseUrl;
        this.lang_ = GVL.DEFAULT_LANGUAGE;
        if (this.isVendorList(versionOrVendorList)) {
            this.populate(versionOrVendorList);
            this.readyPromise = Promise.resolve();
        }
        else {
            if (!url) {
                throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.GVLError('must specify GVL.baseUrl before loading GVL json');
            }
            if (versionOrVendorList > 0) {
                const version = versionOrVendorList;
                if (GVL.CACHE.has(version)) {
                    this.populate(GVL.CACHE.get(version));
                    this.readyPromise = Promise.resolve();
                }
                else {
                    // load version specified
                    url += GVL.versionedFilename.replace('[VERSION]', String(version));
                    this.readyPromise = this.fetchJson(url);
                }
            }
            else {
                /**
                 * whatever it is (or isn't)... it doesn't matter we'll just get the
                 * latest. In this case we may have cached the latest version at key 0.
                 * If we have then we'll just use that instead of making a request.
                 * Otherwise we'll have to load it (and then we'll cache it for next
                 * time)
                 */
                if (GVL.CACHE.has(GVL.LATEST_CACHE_KEY)) {
                    this.populate(GVL.CACHE.get(GVL.LATEST_CACHE_KEY));
                    this.readyPromise = Promise.resolve();
                }
                else {
                    this.isLatest = true;
                    this.readyPromise = this.fetchJson(url + GVL.latestFilename);
                }
            }
        }
    }
    /**
     * emptyLanguageCache
     *
     * @param {string} [lang] - Optional ISO 639-1 langauge code to remove from
     * the cache.  Should be one of the languages in GVL.consentLanguages set.
     * If not then the whole cache will be deleted.
     * @return {boolean} - true if anything was deleted from the cache
     */
    static emptyLanguageCache(lang) {
        let retr = false;
        if (lang === undefined && GVL.LANGUAGE_CACHE.size > 0) {
            GVL.LANGUAGE_CACHE = new Map();
            retr = true;
        }
        else if (typeof lang === 'string' && this.consentLanguages.has(lang.toUpperCase())) {
            GVL.LANGUAGE_CACHE.delete(lang.toUpperCase());
            retr = true;
        }
        return retr;
    }
    /**
     * emptyCache
     *
     * @param {number} [vendorListVersion] - version of the vendor list to delete
     * from the cache.  If none is specified then the whole cache is deleted.
     * @return {boolean} - true if anything was deleted from the cache
     */
    static emptyCache(vendorListVersion) {
        let retr = false;
        if (Number.isInteger(vendorListVersion) && vendorListVersion >= 0) {
            GVL.CACHE.delete(vendorListVersion);
            retr = true;
        }
        else if (vendorListVersion === undefined) {
            GVL.CACHE = new Map();
            retr = true;
        }
        return retr;
    }
    cacheLanguage() {
        if (!GVL.LANGUAGE_CACHE.has(this.lang_)) {
            GVL.LANGUAGE_CACHE.set(this.lang_, {
                purposes: this.purposes,
                specialPurposes: this.specialPurposes,
                features: this.features,
                specialFeatures: this.specialFeatures,
                stacks: this.stacks,
            });
        }
    }
    async fetchJson(url) {
        try {
            this.populate(await _Json_js__WEBPACK_IMPORTED_MODULE_2__.Json.fetch(url));
        }
        catch (err) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.GVLError(err.message);
        }
    }
    /**
     * getJson - Method for getting the JSON that was downloaded to created this
     * `GVL` object
     *
     * @return {VendorList} - The basic JSON structure without the extra
     * functionality and methods of this class.
     */
    getJson() {
        return JSON.parse(JSON.stringify({
            gvlSpecificationVersion: this.gvlSpecificationVersion,
            vendorListVersion: this.vendorListVersion,
            tcfPolicyVersion: this.tcfPolicyVersion,
            lastUpdated: this.lastUpdated,
            purposes: this.purposes,
            specialPurposes: this.specialPurposes,
            features: this.features,
            specialFeatures: this.specialFeatures,
            stacks: this.stacks,
            vendors: this.fullVendorList,
        }));
    }
    /**
     * changeLanguage - retrieves the purpose language translation and sets the
     * internal language variable
     *
     * @param {string} lang - ISO 639-1 langauge code to change language to
     * @return {Promise<void | GVLError>} - returns the `readyPromise` and
     * resolves when this GVL is populated with the data from the language file.
     */
    async changeLanguage(lang) {
        const langUpper = lang.toUpperCase();
        if (GVL.consentLanguages.has(langUpper)) {
            if (langUpper !== this.lang_) {
                this.lang_ = langUpper;
                if (GVL.LANGUAGE_CACHE.has(langUpper)) {
                    const cached = GVL.LANGUAGE_CACHE.get(langUpper);
                    for (const prop in cached) {
                        if (cached.hasOwnProperty(prop)) {
                            this[prop] = cached[prop];
                        }
                    }
                }
                else {
                    // load Language specified
                    const url = GVL.baseUrl + GVL.languageFilename.replace('[LANG]', lang);
                    try {
                        await this.fetchJson(url);
                        this.cacheLanguage();
                    }
                    catch (err) {
                        throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.GVLError('unable to load language: ' + err.message);
                    }
                }
            }
        }
        else {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.GVLError(`unsupported language ${lang}`);
        }
    }
    get language() {
        return this.lang_;
    }
    isVendorList(gvlObject) {
        return gvlObject !== undefined && gvlObject.vendors !== undefined;
    }
    populate(gvlObject) {
        /**
         * these are populated regardless of whether it's a Declarations file or
         * a VendorList
         */
        this.purposes = gvlObject.purposes;
        this.specialPurposes = gvlObject.specialPurposes;
        this.features = gvlObject.features;
        this.specialFeatures = gvlObject.specialFeatures;
        this.stacks = gvlObject.stacks;
        if (this.isVendorList(gvlObject)) {
            this.gvlSpecificationVersion = gvlObject.gvlSpecificationVersion;
            this.tcfPolicyVersion = gvlObject.tcfPolicyVersion;
            this.vendorListVersion = gvlObject.vendorListVersion;
            this.lastUpdated = gvlObject.lastUpdated;
            if (typeof this.lastUpdated === 'string') {
                this.lastUpdated = new Date(this.lastUpdated);
            }
            this.vendors_ = gvlObject.vendors;
            this.fullVendorList = gvlObject.vendors;
            this.mapVendors();
            this.isReady_ = true;
            if (this.isLatest) {
                /**
                 * If the "LATEST" was requested then this flag will be set to true.
                 * In that case we'll cache the GVL at the special key
                 */
                GVL.CACHE.set(GVL.LATEST_CACHE_KEY, this.getJson());
            }
            /**
             * Whether or not it's the "LATEST" we'll cache the gvl at the version it
             * is declared to be (if it's not already). to avoid downloading it again
             * in the future.
             */
            if (!GVL.CACHE.has(this.vendorListVersion)) {
                GVL.CACHE.set(this.vendorListVersion, this.getJson());
            }
        }
        this.cacheLanguage();
    }
    mapVendors(vendorIds) {
        // create new instances of the maps
        this.byPurposeVendorMap = {};
        this.bySpecialPurposeVendorMap = {};
        this.byFeatureVendorMap = {};
        this.bySpecialFeatureVendorMap = {};
        // initializes data structure for purpose map
        Object.keys(this.purposes).forEach((purposeId) => {
            this.byPurposeVendorMap[purposeId] = {
                legInt: new Set(),
                consent: new Set(),
                flexible: new Set(),
            };
        });
        // initializes data structure for special purpose map
        Object.keys(this.specialPurposes).forEach((purposeId) => {
            this.bySpecialPurposeVendorMap[purposeId] = new Set();
        });
        // initializes data structure for feature map
        Object.keys(this.features).forEach((featureId) => {
            this.byFeatureVendorMap[featureId] = new Set();
        });
        // initializes data structure for feature map
        Object.keys(this.specialFeatures).forEach((featureId) => {
            this.bySpecialFeatureVendorMap[featureId] = new Set();
        });
        if (!Array.isArray(vendorIds)) {
            vendorIds = Object.keys(this.fullVendorList).map((vId) => +vId);
        }
        this.vendorIds = new Set(vendorIds);
        // assigns vendor ids to their respective maps
        this.vendors_ = vendorIds.reduce((vendors, vendorId) => {
            const vendor = this.vendors_[String(vendorId)];
            if (vendor && vendor.deletedDate === undefined) {
                vendor.purposes.forEach((purposeId) => {
                    const purpGroup = this.byPurposeVendorMap[String(purposeId)];
                    purpGroup.consent.add(vendorId);
                });
                vendor.specialPurposes.forEach((purposeId) => {
                    this.bySpecialPurposeVendorMap[String(purposeId)].add(vendorId);
                });
                vendor.legIntPurposes.forEach((purposeId) => {
                    this.byPurposeVendorMap[String(purposeId)].legInt.add(vendorId);
                });
                // could not be there
                if (vendor.flexiblePurposes) {
                    vendor.flexiblePurposes.forEach((purposeId) => {
                        this.byPurposeVendorMap[String(purposeId)].flexible.add(vendorId);
                    });
                }
                vendor.features.forEach((featureId) => {
                    this.byFeatureVendorMap[String(featureId)].add(vendorId);
                });
                vendor.specialFeatures.forEach((featureId) => {
                    this.bySpecialFeatureVendorMap[String(featureId)].add(vendorId);
                });
                vendors[vendorId] = vendor;
            }
            return vendors;
        }, {});
    }
    getFilteredVendors(purposeOrFeature, id, subType, special) {
        const properPurposeOrFeature = purposeOrFeature.charAt(0).toUpperCase() + purposeOrFeature.slice(1);
        let vendorSet;
        const retr = {};
        if (purposeOrFeature === 'purpose' && subType) {
            vendorSet = this['by' + properPurposeOrFeature + 'VendorMap'][String(id)][subType];
        }
        else {
            vendorSet = this['by' + (special ? 'Special' : '') + properPurposeOrFeature + 'VendorMap'][String(id)];
        }
        vendorSet.forEach((vendorId) => {
            retr[String(vendorId)] = this.vendors[String(vendorId)];
        });
        return retr;
    }
    /**
     * getVendorsWithConsentPurpose
     *
     * @param {number} purposeId
     * @return {IntMap<Vendor>} - list of vendors that have declared the consent purpose id
     */
    getVendorsWithConsentPurpose(purposeId) {
        return this.getFilteredVendors('purpose', purposeId, 'consent');
    }
    /**
     * getVendorsWithLegIntPurpose
     *
     * @param {number} purposeId
     * @return {IntMap<Vendor>} - list of vendors that have declared the legInt (Legitimate Interest) purpose id
     */
    getVendorsWithLegIntPurpose(purposeId) {
        return this.getFilteredVendors('purpose', purposeId, 'legInt');
    }
    /**
     * getVendorsWithFlexiblePurpose
     *
     * @param {number} purposeId
     * @return {IntMap<Vendor>} - list of vendors that have declared the flexible purpose id
     */
    getVendorsWithFlexiblePurpose(purposeId) {
        return this.getFilteredVendors('purpose', purposeId, 'flexible');
    }
    /**
     * getVendorsWithSpecialPurpose
     *
     * @param {number} specialPurposeId
     * @return {IntMap<Vendor>} - list of vendors that have declared the special purpose id
     */
    getVendorsWithSpecialPurpose(specialPurposeId) {
        return this.getFilteredVendors('purpose', specialPurposeId, undefined, true);
    }
    /**
     * getVendorsWithFeature
     *
     * @param {number} featureId
     * @return {IntMap<Vendor>} - list of vendors that have declared the feature id
     */
    getVendorsWithFeature(featureId) {
        return this.getFilteredVendors('feature', featureId);
    }
    /**
     * getVendorsWithSpecialFeature
     *
     * @param {number} specialFeatureId
     * @return {IntMap<Vendor>} - list of vendors that have declared the special feature id
     */
    getVendorsWithSpecialFeature(specialFeatureId) {
        return this.getFilteredVendors('feature', specialFeatureId, undefined, true);
    }
    /**
     * vendors
     *
     * @return {IntMap<Vendor>} - the list of vendors as it would on the JSON file
     * except if `narrowVendorsTo` was called, it would be that narrowed list
     */
    get vendors() {
        return this.vendors_;
    }
    /**
     * narrowVendorsTo - narrows vendors represented in this GVL to the list of ids passed in
     *
     * @param {number[]} vendorIds - list of ids to narrow this GVL to
     * @return {void}
     */
    narrowVendorsTo(vendorIds) {
        this.mapVendors(vendorIds);
    }
    /**
     * isReady - Whether or not this instance is ready to be used.  This will be
     * immediately and synchronously true if a vendorlist object is passed into
     * the constructor or once the JSON vendorllist is retrieved.
     *
     * @return {boolean} whether or not the instance is ready to be interacted
     * with and all the data is populated
     */
    get isReady() {
        return this.isReady_;
    }
    /**
     * clone - overrides base `clone()` method since GVL is a special class that
     * represents a JSON structure with some additional functionality.
     *
     * @return {GVL}
     */
    clone() {
        const result = new GVL(this.getJson());
        /*
         * If the current language of the GVL is not the default language, we set the language of
         * the clone to the current language since a new GVL is always created with the default
         * language. */
        if (this.lang_ !== GVL.DEFAULT_LANGUAGE) {
            /*
             * Since the GVL language was changed, this means that an asynchronous changeLanguage
             * call was made prior to cloning the GVL.  The new language specified has been cached
             * by the GVL and this changeLanguage call made as a part of cloning the GVL will be
             * synchronous. The code will look for the language definitions in the cache instead
             * of creating a http request. */
            result.changeLanguage(this.lang_);
        }
        return result;
    }
    static isInstanceOf(questionableInstance) {
        const isSo = typeof questionableInstance === 'object';
        return (isSo && typeof questionableInstance.narrowVendorsTo === 'function');
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/Json.js":
/*!***************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/Json.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Json: () => (/* binding */ Json)
/* harmony export */ });
class Json {
    static absCall(url, body, sendCookies, timeout) {
        return new Promise((resolve, reject) => {
            const req = new XMLHttpRequest();
            const onLoad = () => {
                // is the response done
                if (req.readyState == XMLHttpRequest.DONE) {
                    /**
                     * For our purposes if it's not a 200 range response, then it's a
                     * failure.
                     */
                    if (req.status >= 200 && req.status < 300) {
                        let response = req.response;
                        if (typeof response === 'string') {
                            try {
                                response = JSON.parse(response);
                            }
                            catch (e) { }
                        }
                        resolve(response);
                    }
                    else {
                        reject(new Error(`HTTP Status: ${req.status} response type: ${req.responseType}`));
                    }
                }
            };
            const onError = () => {
                reject(new Error('error'));
            };
            const onAbort = () => {
                reject(new Error('aborted'));
            };
            const onTimeout = () => {
                reject(new Error('Timeout ' + timeout + 'ms ' + url));
            };
            req.withCredentials = sendCookies;
            req.addEventListener('load', onLoad);
            req.addEventListener('error', onError);
            req.addEventListener('abort', onAbort);
            if (body === null) {
                req.open('GET', url, true);
            }
            else {
                req.open('POST', url, true);
            }
            req.responseType = 'json';
            // IE has a problem if this is before the open
            req.timeout = timeout;
            req.ontimeout = onTimeout;
            req.send(body);
        });
    }
    /**
     * @static
     * @param {string} url - full path to POST to
     * @param {object} body - JSON object to post
     * @param {boolean} sendCookies - Whether or not to send the XMLHttpRequest with credentials or not
     * @param {number} [timeout] - optional timeout in milliseconds
     * @return {Promise<object>} - if the server responds the response will be returned here
     */
    static post(url, body, sendCookies = false, timeout = 0) {
        return this.absCall(url, JSON.stringify(body), sendCookies, timeout);
    }
    /**
     * @static
     * @param {string} url - full path to the json
     * @param {boolean} sendCookies - Whether or not to send the XMLHttpRequest with credentials or not
     * @param {number} [timeout] - optional timeout in milliseconds
     * @return {Promise<object>} - resolves with parsed JSON
     */
    static fetch(url, sendCookies = false, timeout = 0) {
        return this.absCall(url, null, sendCookies, timeout);
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/TCModel.js":
/*!******************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/TCModel.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TCModel: () => (/* binding */ TCModel)
/* harmony export */ });
/* harmony import */ var _Cloneable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cloneable.js */ "./node_modules/@iabtcf/core/lib/mjs/Cloneable.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors/index.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/index.js");
/* harmony import */ var _GVL_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GVL.js */ "./node_modules/@iabtcf/core/lib/mjs/GVL.js");
/* harmony import */ var _model_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/index.js */ "./node_modules/@iabtcf/core/lib/mjs/model/index.js");




class TCModel extends _Cloneable_js__WEBPACK_IMPORTED_MODULE_0__.Cloneable {
    /**
     * Set of available consent languages published by the IAB
     */
    static consentLanguages = _GVL_js__WEBPACK_IMPORTED_MODULE_2__.GVL.consentLanguages;
    isServiceSpecific_ = false;
    supportOOB_ = true;
    useNonStandardStacks_ = false;
    purposeOneTreatment_ = false;
    publisherCountryCode_ = 'AA';
    version_ = 2;
    consentScreen_ = 0;
    policyVersion_ = 2;
    consentLanguage_ = 'EN';
    cmpId_ = 0;
    cmpVersion_ = 0;
    vendorListVersion_ = 0;
    numCustomPurposes_ = 0;
    // Member Variable for GVL
    gvl_;
    created;
    lastUpdated;
    /**
     * The TCF designates certain Features as special, that is, a CMP must afford
     * the user a means to opt in to their use. These Special Features are
     * published and numbered in the GVL separately from normal Features.
     * Provides for up to 12 special features.
     */
    specialFeatureOptins = new _model_index_js__WEBPACK_IMPORTED_MODULE_3__.Vector();
    /**
     * Renamed from `PurposesAllowed` in TCF v1.1
     * The user’s consent value for each Purpose established on the legal basis
     * of consent. Purposes are published in the Global Vendor List (see. [[GVL]]).
     */
    purposeConsents = new _model_index_js__WEBPACK_IMPORTED_MODULE_3__.Vector();
    /**
     * The user’s permission for each Purpose established on the legal basis of
     * legitimate interest. If the user has exercised right-to-object for a
     * purpose.
     */
    purposeLegitimateInterests = new _model_index_js__WEBPACK_IMPORTED_MODULE_3__.Vector();
    /**
     * The user’s consent value for each Purpose established on the legal basis
     * of consent, for the publisher.  Purposes are published in the Global
     * Vendor List.
     */
    publisherConsents = new _model_index_js__WEBPACK_IMPORTED_MODULE_3__.Vector();
    /**
     * The user’s permission for each Purpose established on the legal basis of
     * legitimate interest.  If the user has exercised right-to-object for a
     * purpose.
     */
    publisherLegitimateInterests = new _model_index_js__WEBPACK_IMPORTED_MODULE_3__.Vector();
    /**
     * The user’s consent value for each Purpose established on the legal basis
     * of consent, for the publisher.  Purposes are published in the Global
     * Vendor List.
     */
    publisherCustomConsents = new _model_index_js__WEBPACK_IMPORTED_MODULE_3__.Vector();
    /**
     * The user’s permission for each Purpose established on the legal basis of
     * legitimate interest.  If the user has exercised right-to-object for a
     * purpose that is established in the publisher's custom purposes.
     */
    publisherCustomLegitimateInterests = new _model_index_js__WEBPACK_IMPORTED_MODULE_3__.Vector();
    /**
     * set by a publisher if they wish to collect consent and LI Transparency for
     * purposes outside of the TCF
     */
    customPurposes;
    /**
     * Each [[Vendor]] is keyed by id. Their consent value is true if it is in
     * the Vector
     */
    vendorConsents = new _model_index_js__WEBPACK_IMPORTED_MODULE_3__.Vector();
    /**
     * Each [[Vendor]] is keyed by id. Whether their Legitimate Interests
     * Disclosures have been established is stored as boolean.
     * see: [[Vector]]
     */
    vendorLegitimateInterests = new _model_index_js__WEBPACK_IMPORTED_MODULE_3__.Vector();
    /**
     * The value included for disclosed vendors signals which vendors have been
     * disclosed to the user in the interface surfaced by the CMP. This section
     * content is required when writing a TC string to the global (consensu)
     * scope. When a CMP has read from and is updating a TC string from the
     * global consensu.org storage, the CMP MUST retain the existing disclosure
     * information and only add information for vendors that it has disclosed
     * that had not been disclosed by other CMPs in prior interactions with this
     * device/user agent.
     */
    vendorsDisclosed = new _model_index_js__WEBPACK_IMPORTED_MODULE_3__.Vector();
    /**
     * Signals which vendors the publisher permits to use OOB legal bases.
     */
    vendorsAllowed = new _model_index_js__WEBPACK_IMPORTED_MODULE_3__.Vector();
    publisherRestrictions = new _model_index_js__WEBPACK_IMPORTED_MODULE_3__.PurposeRestrictionVector();
    /**
     * Constructs the TCModel. Passing a [[GVL]] is optional when constructing
     * as this TCModel may be constructed from decoding an existing encoded
     * TCString.
     *
     * @param {GVL} [gvl]
     */
    constructor(gvl) {
        super();
        if (gvl) {
            this.gvl = gvl;
        }
        this.updated();
    }
    /**
     * sets the [[GVL]] with side effects of also setting the `vendorListVersion`, `policyVersion`, and `consentLanguage`
     * @param {GVL} gvl
     */
    set gvl(gvl) {
        /**
         * set the reference, but make sure it's our GVL wrapper class.
         */
        if (!(_GVL_js__WEBPACK_IMPORTED_MODULE_2__.GVL.isInstanceOf(gvl))) {
            gvl = new _GVL_js__WEBPACK_IMPORTED_MODULE_2__.GVL(gvl);
        }
        this.gvl_ = gvl;
        this.publisherRestrictions.gvl = gvl;
    }
    /**
     * @return {GVL} the gvl instance set on this TCModel instance
     */
    get gvl() {
        return this.gvl_;
    }
    /**
     * @param {number} integer - A unique ID will be assigned to each Consent
     * Manager Provider (CMP) from the iab.
     *
     * @throws {TCModelError} if the value is not an integer greater than 1 as those are not valid.
     */
    set cmpId(integer) {
        integer = Number(integer);
        if (Number.isInteger(integer) && integer > 1) {
            this.cmpId_ = integer;
        }
        else {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.TCModelError('cmpId', integer);
        }
    }
    get cmpId() {
        return this.cmpId_;
    }
    /**
     * Each change to an operating CMP should receive a
     * new version number, for logging proof of consent. CmpVersion defined by
     * each CMP.
     *
     * @param {number} integer
     *
     * @throws {TCModelError} if the value is not an integer greater than 1 as those are not valid.
     */
    set cmpVersion(integer) {
        integer = Number(integer);
        if (Number.isInteger(integer) && integer > -1) {
            this.cmpVersion_ = integer;
        }
        else {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.TCModelError('cmpVersion', integer);
        }
    }
    get cmpVersion() {
        return this.cmpVersion_;
    }
    /**
     * The screen number is CMP and CmpVersion
     * specific, and is for logging proof of consent.(For example, a CMP could
     * keep records so that a publisher can request information about the context
     * in which consent was gathered.)
     *
     * @param {number} integer
     *
     * @throws {TCModelError} if the value is not an integer greater than 0 as those are not valid.
     */
    set consentScreen(integer) {
        integer = Number(integer);
        if (Number.isInteger(integer) && integer > -1) {
            this.consentScreen_ = integer;
        }
        else {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.TCModelError('consentScreen', integer);
        }
    }
    get consentScreen() {
        return this.consentScreen_;
    }
    /**
     * @param {string} lang - [two-letter ISO 639-1 language
     * code](http://www.loc.gov/standards/iso639-2/php/code_list.php) in which
     * the CMP UI was presented
     *
     * @throws {TCModelError} if the value is not a length-2 string of alpha characters
     */
    set consentLanguage(lang) {
        this.consentLanguage_ = lang;
    }
    get consentLanguage() {
        return this.consentLanguage_;
    }
    /**
     * @param {string} countryCode - [two-letter ISO 3166-1 alpha-2 country
     * code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) of the publisher,
     * determined by the CMP-settings of the publisher.
     *
     * @throws {TCModelError} if the value is not a length-2 string of alpha characters
     */
    set publisherCountryCode(countryCode) {
        if (/^([A-z]){2}$/.test(countryCode)) {
            this.publisherCountryCode_ = countryCode.toUpperCase();
        }
        else {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.TCModelError('publisherCountryCode', countryCode);
        }
    }
    get publisherCountryCode() {
        return this.publisherCountryCode_;
    }
    /**
     * Version of the GVL used to create this TCModel. Global
     * Vendor List versions will be released periodically.
     *
     * @param {number} integer
     *
     * @throws {TCModelError} if the value is not an integer greater than 0 as those are not valid.
     */
    set vendorListVersion(integer) {
        /**
         * first coerce to a number via leading '+' then take the integer value by
         * bitshifting to the right.  This works on all types in JavaScript and if
         * it's not valid then value will be 0.
         */
        integer = Number(integer) >> 0;
        if (integer < 0) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.TCModelError('vendorListVersion', integer);
        }
        else {
            this.vendorListVersion_ = integer;
        }
    }
    get vendorListVersion() {
        if (this.gvl) {
            return this.gvl.vendorListVersion;
        }
        else {
            return this.vendorListVersion_;
        }
    }
    /**
     * From the corresponding field in the GVL that was
     * used for obtaining consent. A new policy version invalidates existing
     * strings and requires CMPs to re-establish transparency and consent from
     * users.
     *
     * If a TCF policy version number is different from the one from the latest
     * GVL, the CMP must re-establish transparency and consent.
     *
     * @param {number} num - You do not need to set this.  This comes
     * directly from the [[GVL]].
     *
     */
    set policyVersion(num) {
        this.policyVersion_ = parseInt(num, 10);
        if (this.policyVersion_ < 0) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.TCModelError('policyVersion', num);
        }
    }
    get policyVersion() {
        if (this.gvl) {
            return this.gvl.tcfPolicyVersion;
        }
        else {
            return this.policyVersion_;
        }
    }
    set version(num) {
        this.version_ = parseInt(num, 10);
    }
    get version() {
        return this.version_;
    }
    /**
     * Whether the signals encoded in this TC String were from site-specific
     * storage `true` versus ‘global’ consensu.org shared storage `false`. A
     * string intended to be stored in global/shared scope but the CMP is unable
     * to store due to a user agent not accepting third-party cookies would be
     * considered site-specific `true`.
     *
     * @param {boolean} bool - value to set. Some changes to other fields in this
     * model will automatically change this value like adding publisher
     * restrictions.
     */
    set isServiceSpecific(bool) {
        this.isServiceSpecific_ = bool;
    }
    get isServiceSpecific() {
        return this.isServiceSpecific_;
    }
    /**
     * Non-standard stacks means that a CMP is using publisher-customized stack
     * descriptions. Stacks (in terms of purposes in a stack) are pre-set by the
     * IAB. As are titles. Descriptions are pre-set, but publishers can customize
     * them. If they do, they need to set this bit to indicate that they've
     * customized descriptions.
     *
     * @param {boolean} bool - value to set
     */
    set useNonStandardStacks(bool) {
        this.useNonStandardStacks_ = bool;
    }
    get useNonStandardStacks() {
        return this.useNonStandardStacks_;
    }
    /**
     * Whether or not this publisher supports OOB signaling.  On Global TC String
     * OOB Vendors Disclosed will be included if the publish wishes to no allow
     * these vendors they should set this to false.
     * @param {boolean} bool - value to set
     */
    set supportOOB(bool) {
        this.supportOOB_ = bool;
    }
    get supportOOB() {
        return this.supportOOB_;
    }
    /**
     * `false` There is no special Purpose 1 status.
     * Purpose 1 was disclosed normally (consent) as expected by Policy.  `true`
     * Purpose 1 not disclosed at all. CMPs use PublisherCC to indicate the
     * publisher’s country of establishment to help Vendors determine whether the
     * vendor requires Purpose 1 consent. In global scope TC strings, this field
     * must always have a value of `false`. When a CMP encounters a global scope
     * string with `purposeOneTreatment=true` then that string should be
     * considered invalid and the CMP must re-establish transparency and consent.
     *
     * @param {boolean} bool
     */
    set purposeOneTreatment(bool) {
        this.purposeOneTreatment_ = bool;
    }
    get purposeOneTreatment() {
        return this.purposeOneTreatment_;
    }
    /**
     * setAllVendorConsents - sets all vendors on the GVL Consent (true)
     *
     * @return {void}
     */
    setAllVendorConsents() {
        this.vendorConsents.set(this.gvl.vendors);
    }
    /**
     * unsetAllVendorConsents - unsets all vendors on the GVL Consent (false)
     *
     * @return {void}
     */
    unsetAllVendorConsents() {
        this.vendorConsents.empty();
    }
    /**
     * setAllVendorsDisclosed - sets all vendors on the GVL Vendors Disclosed (true)
     *
     * @return {void}
     */
    setAllVendorsDisclosed() {
        this.vendorsDisclosed.set(this.gvl.vendors);
    }
    /**
     * unsetAllVendorsDisclosed - unsets all vendors on the GVL Consent (false)
     *
     * @return {void}
     */
    unsetAllVendorsDisclosed() {
        this.vendorsDisclosed.empty();
    }
    /**
     * setAllVendorsAllowed - sets all vendors on the GVL Consent (true)
     *
     * @return {void}
     */
    setAllVendorsAllowed() {
        this.vendorsAllowed.set(this.gvl.vendors);
    }
    /**
     * unsetAllVendorsAllowed - unsets all vendors on the GVL Consent (false)
     *
     * @return {void}
     */
    unsetAllVendorsAllowed() {
        this.vendorsAllowed.empty();
    }
    /**
     * setAllVendorLegitimateInterests - sets all vendors on the GVL LegitimateInterests (true)
     *
     * @return {void}
     */
    setAllVendorLegitimateInterests() {
        this.vendorLegitimateInterests.set(this.gvl.vendors);
    }
    /**
     * unsetAllVendorLegitimateInterests - unsets all vendors on the GVL LegitimateInterests (false)
     *
     * @return {void}
     */
    unsetAllVendorLegitimateInterests() {
        this.vendorLegitimateInterests.empty();
    }
    /**
     * setAllPurposeConsents - sets all purposes on the GVL Consent (true)
     *
     * @return {void}
     */
    setAllPurposeConsents() {
        this.purposeConsents.set(this.gvl.purposes);
    }
    /**
     * unsetAllPurposeConsents - unsets all purposes on the GVL Consent (false)
     *
     * @return {void}
     */
    unsetAllPurposeConsents() {
        this.purposeConsents.empty();
    }
    /**
     * setAllPurposeLegitimateInterests - sets all purposes on the GVL LI Transparency (true)
     *
     * @return {void}
     */
    setAllPurposeLegitimateInterests() {
        this.purposeLegitimateInterests.set(this.gvl.purposes);
    }
    /**
     * unsetAllPurposeLegitimateInterests - unsets all purposes on the GVL LI Transparency (false)
     *
     * @return {void}
     */
    unsetAllPurposeLegitimateInterests() {
        this.purposeLegitimateInterests.empty();
    }
    /**
     * setAllSpecialFeatureOptins - sets all special featuresOptins on the GVL (true)
     *
     * @return {void}
     */
    setAllSpecialFeatureOptins() {
        this.specialFeatureOptins.set(this.gvl.specialFeatures);
    }
    /**
     * unsetAllSpecialFeatureOptins - unsets all special featuresOptins on the GVL (true)
     *
     * @return {void}
     */
    unsetAllSpecialFeatureOptins() {
        this.specialFeatureOptins.empty();
    }
    setAll() {
        this.setAllVendorConsents();
        this.setAllPurposeLegitimateInterests();
        this.setAllSpecialFeatureOptins();
        this.setAllPurposeConsents();
        this.setAllVendorLegitimateInterests();
    }
    unsetAll() {
        this.unsetAllVendorConsents();
        this.unsetAllPurposeLegitimateInterests();
        this.unsetAllSpecialFeatureOptins();
        this.unsetAllPurposeConsents();
        this.unsetAllVendorLegitimateInterests();
    }
    get numCustomPurposes() {
        let len = this.numCustomPurposes_;
        if (typeof this.customPurposes === 'object') {
            /**
             * Keys are not guaranteed to be in order and likewise there is no
             * requirement that the customPurposes be non-sparse.  So we have to sort
             * and take the highest value.  Even if the set only contains 3 purposes
             * but goes to ID 6 we need to set the number to 6 for the encoding to
             * work properly since it's positional.
             */
            const purposeIds = Object.keys(this.customPurposes)
                .sort((a, b) => Number(a) - Number(b));
            len = parseInt(purposeIds.pop(), 10);
        }
        return len;
    }
    set numCustomPurposes(num) {
        this.numCustomPurposes_ = parseInt(num, 10);
        if (this.numCustomPurposes_ < 0) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.TCModelError('numCustomPurposes', num);
        }
    }
    /**
     * updated - updates the created and lastUpdated dates with a 'now' day-level UTC timestamp
     *
     * @return {void}
     */
    updated() {
        const date = new Date();
        const utcDate = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
        this.created = utcDate;
        this.lastUpdated = utcDate;
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/TCString.js":
/*!*******************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/TCString.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TCString: () => (/* binding */ TCString)
/* harmony export */ });
/* harmony import */ var _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encoder/index.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/index.js");
/* harmony import */ var _model_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/index.js */ "./node_modules/@iabtcf/core/lib/mjs/model/index.js");
/* harmony import */ var _encoder_field_IntEncoder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./encoder/field/IntEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/IntEncoder.js");
/* harmony import */ var _TCModel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TCModel.js */ "./node_modules/@iabtcf/core/lib/mjs/TCModel.js");




/**
 * Main class for encoding and decoding a
 * TCF Transparency and Consent String
 */
class TCString {
    /**
     * encodes a model into a TCString
     *
     * @param {TCModel} tcModel - model to convert into encoded string
     * @param {EncodingOptions} options - for encoding options other than default
     * @return {string} - base64url encoded Transparency and Consent String
     */
    static encode(tcModel, options) {
        let out = '';
        let sequence;
        tcModel = _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.SemanticPreEncoder.process(tcModel, options);
        /**
           * If they pass in a special segment sequence.
           */
        if (Array.isArray(options?.segments)) {
            sequence = options.segments;
        }
        else {
            sequence = new _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.SegmentSequence(tcModel, options)['' + tcModel.version];
        }
        sequence.forEach((segment, idx) => {
            let dotMaybe = '';
            if (idx < sequence.length - 1) {
                dotMaybe = '.';
            }
            out += _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.SegmentEncoder.encode(tcModel, segment) + dotMaybe;
        });
        return out;
    }
    /**
     * Decodes a string into a TCModel
     *
     * @param {string} encodedTCString - base64url encoded Transparency and
     * Consent String to decode - can also be a single or group of segments of
     * the string
     * @param {string} [tcModel] - model to enhance with the information.  If
     * none is passed a new instance of TCModel will be created.
     * @return {TCModel} - Returns populated TCModel
     */
    static decode(encodedTCString, tcModel) {
        const segments = encodedTCString.split('.');
        const len = segments.length;
        if (!tcModel) {
            tcModel = new _TCModel_js__WEBPACK_IMPORTED_MODULE_3__.TCModel();
        }
        for (let i = 0; i < len; i++) {
            const segString = segments[i];
            /**
             * first char will contain 6 bits, we only need the first 3. In version 1
             * and 2 of the TC string there is no segment type for the CORE string.
             * Instead the first 6 bits are reserved for the encoding version, but
             * because we're only on a maximum of encoding version 2 the first 3 bits
             * in the core segment will evaluate to 0.
             */
            const firstChar = _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.Base64Url.decode(segString.charAt(0));
            const segTypeBits = firstChar.substr(0, _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.segmentType);
            const segment = _model_index_js__WEBPACK_IMPORTED_MODULE_1__.SegmentIDs.ID_TO_KEY[_encoder_field_IntEncoder_js__WEBPACK_IMPORTED_MODULE_2__.IntEncoder.decode(segTypeBits, _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.segmentType).toString()];
            _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.SegmentEncoder.decode(segString, tcModel, segment);
        }
        return tcModel;
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/Base64Url.js":
/*!****************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/Base64Url.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base64Url: () => (/* binding */ Base64Url)
/* harmony export */ });
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors/index.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/index.js");

class Base64Url {
    /**
     * Base 64 URL character set.  Different from standard Base64 char set
     * in that '+' and '/' are replaced with '-' and '_'.
     */
    static DICT = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
    static REVERSE_DICT = new Map([
        ['A', 0], ['B', 1], ['C', 2], ['D', 3], ['E', 4], ['F', 5],
        ['G', 6], ['H', 7], ['I', 8], ['J', 9], ['K', 10], ['L', 11],
        ['M', 12], ['N', 13], ['O', 14], ['P', 15], ['Q', 16], ['R', 17],
        ['S', 18], ['T', 19], ['U', 20], ['V', 21], ['W', 22], ['X', 23],
        ['Y', 24], ['Z', 25], ['a', 26], ['b', 27], ['c', 28], ['d', 29],
        ['e', 30], ['f', 31], ['g', 32], ['h', 33], ['i', 34], ['j', 35],
        ['k', 36], ['l', 37], ['m', 38], ['n', 39], ['o', 40], ['p', 41],
        ['q', 42], ['r', 43], ['s', 44], ['t', 45], ['u', 46], ['v', 47],
        ['w', 48], ['x', 49], ['y', 50], ['z', 51], ['0', 52], ['1', 53],
        ['2', 54], ['3', 55], ['4', 56], ['5', 57], ['6', 58], ['7', 59],
        ['8', 60], ['9', 61], ['-', 62], ['_', 63],
    ]);
    /**
     * log2(64) = 6
     */
    static BASIS = 6;
    static LCM = 24;
    /**
     * encodes an arbitrary-length bitfield string into base64url
     *
     * @static
     * @param {string} str - arbitrary-length bitfield string to be encoded to base64url
     * @return {string} - base64url encoded result
     */
    static encode(str) {
        /**
         * should only be 0 or 1
         */
        if (!/^[0-1]+$/.test(str)) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_0__.EncodingError('Invalid bitField');
        }
        /**
         * Pad the end of the string to the least common mutliple of 6 (basis for
         * base64) and 8 (one byte)
         */
        const padding = str.length % this.LCM;
        str += padding ? '0'.repeat(this.LCM - padding) : '';
        let result = '';
        for (let i = 0; i < str.length; i += this.BASIS) {
            result += this.DICT[parseInt(str.substr(i, this.BASIS), 2)];
        }
        return result;
    }
    /**
     * decodes a base64url encoded bitfield string
     *
     * @static
     * @param {string} str - base64url encoded bitfield string to be decoded
     * @return {string} - bitfield string
     */
    static decode(str) {
        /**
         * should contain only characters from the base64url set
         */
        if (!/^[A-Za-z0-9\-_]+$/.test(str)) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_0__.DecodingError('Invalidly encoded Base64URL string');
        }
        let result = '';
        for (let i = 0; i < str.length; i++) {
            /**
             * index the binary value of the character from out reverse map
             */
            const strBits = this.REVERSE_DICT.get(str[i]).toString(2);
            /**
             * Since a bit string converted to an integer on encoding will lose
             * leading zeros – pad to the left for those missing leading zeros
             */
            result += '0'.repeat(this.BASIS - strBits.length) + strBits;
        }
        return result;
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/BitLength.js":
/*!****************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/BitLength.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BitLength: () => (/* binding */ BitLength)
/* harmony export */ });
/* harmony import */ var _model_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/index.js */ "./node_modules/@iabtcf/core/lib/mjs/model/index.js");

class BitLength {
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.cmpId] = 12;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.cmpVersion] = 12;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.consentLanguage] = 12;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.consentScreen] = 6;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.created] = 36;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.isServiceSpecific] = 1;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.lastUpdated] = 36;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.policyVersion] = 6;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.publisherCountryCode] = 12;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.publisherLegitimateInterests] = 24;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.publisherConsents] = 24;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.purposeConsents] = 24;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.purposeLegitimateInterests] = 24;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.purposeOneTreatment] = 1;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.specialFeatureOptins] = 12;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.useNonStandardStacks] = 1;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.vendorListVersion] = 12;
    static [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.version] = 6;
    static anyBoolean = 1;
    static encodingType = 1;
    static maxId = 16;
    static numCustomPurposes = 6;
    static numEntries = 12;
    static numRestrictions = 12;
    static purposeId = 6;
    static restrictionType = 2;
    static segmentType = 3;
    static singleOrRange = 1;
    static vendorId = 16;
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/EncodingOptions.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/EncodingOptions.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/SegmentEncoder.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/SegmentEncoder.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SegmentEncoder: () => (/* binding */ SegmentEncoder)
/* harmony export */ });
/* harmony import */ var _Base64Url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base64Url.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/Base64Url.js");
/* harmony import */ var _BitLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BitLength.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/BitLength.js");
/* harmony import */ var _field_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field/index.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/index.js");
/* harmony import */ var _sequence_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sequence/index.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/index.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../errors/index.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/index.js");
/* harmony import */ var _model_Fields_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/Fields.js */ "./node_modules/@iabtcf/core/lib/mjs/model/Fields.js");
/* harmony import */ var _model_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/index.js */ "./node_modules/@iabtcf/core/lib/mjs/model/index.js");







class SegmentEncoder {
    static fieldSequence = new _sequence_index_js__WEBPACK_IMPORTED_MODULE_3__.FieldSequence();
    static encode(tcModel, segment) {
        let sequence;
        try {
            sequence = this.fieldSequence[String(tcModel.version)][segment];
        }
        catch (err) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_4__.EncodingError(`Unable to encode version: ${tcModel.version}, segment: ${segment}`);
        }
        let bitField = '';
        /**
         * If this is anything other than the core segment we have a "segment id"
         * to append to the front of the string
         */
        if (segment !== _model_index_js__WEBPACK_IMPORTED_MODULE_6__.Segment.CORE) {
            bitField = _field_index_js__WEBPACK_IMPORTED_MODULE_2__.IntEncoder.encode(_model_index_js__WEBPACK_IMPORTED_MODULE_6__.SegmentIDs.KEY_TO_ID[segment], _BitLength_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.segmentType);
        }
        const fieldEncoderMap = (0,_field_index_js__WEBPACK_IMPORTED_MODULE_2__.FieldEncoderMap)();
        sequence.forEach((key) => {
            const value = tcModel[key];
            const encoder = fieldEncoderMap[key];
            let numBits = _BitLength_js__WEBPACK_IMPORTED_MODULE_1__.BitLength[key];
            if (numBits === undefined) {
                if (this.isPublisherCustom(key)) {
                    /**
                     * publisherCustom[Consents | LegitimateInterests] are an edge case
                     * because they are of variable length. The length is defined in a
                     * separate field named numCustomPurposes.
                     */
                    numBits = Number(tcModel[_model_Fields_js__WEBPACK_IMPORTED_MODULE_5__.Fields.numCustomPurposes]);
                }
            }
            try {
                bitField += encoder.encode(value, numBits);
            }
            catch (err) {
                throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_4__.EncodingError(`Error encoding ${segment}->${key}: ${err.message}`);
            }
        });
        // base64url encode the string and return
        return _Base64Url_js__WEBPACK_IMPORTED_MODULE_0__.Base64Url.encode(bitField);
    }
    static decode(encodedString, tcModel, segment) {
        const bitField = _Base64Url_js__WEBPACK_IMPORTED_MODULE_0__.Base64Url.decode(encodedString);
        let bStringIdx = 0;
        if (segment === _model_index_js__WEBPACK_IMPORTED_MODULE_6__.Segment.CORE) {
            tcModel.version = _field_index_js__WEBPACK_IMPORTED_MODULE_2__.IntEncoder.decode(bitField.substr(bStringIdx, _BitLength_js__WEBPACK_IMPORTED_MODULE_1__.BitLength[_model_Fields_js__WEBPACK_IMPORTED_MODULE_5__.Fields.version]), _BitLength_js__WEBPACK_IMPORTED_MODULE_1__.BitLength[_model_Fields_js__WEBPACK_IMPORTED_MODULE_5__.Fields.version]);
        }
        if (segment !== _model_index_js__WEBPACK_IMPORTED_MODULE_6__.Segment.CORE) {
            bStringIdx += _BitLength_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.segmentType;
        }
        const sequence = this.fieldSequence[String(tcModel.version)][segment];
        const fieldEncoderMap = (0,_field_index_js__WEBPACK_IMPORTED_MODULE_2__.FieldEncoderMap)();
        sequence.forEach((key) => {
            const encoder = fieldEncoderMap[key];
            let numBits = _BitLength_js__WEBPACK_IMPORTED_MODULE_1__.BitLength[key];
            if (numBits === undefined) {
                if (this.isPublisherCustom(key)) {
                    /**
                     * publisherCustom[Consents | LegitimateInterests] are an edge case
                     * because they are of variable length. The length is defined in a
                     * separate field named numCustomPurposes.
                     */
                    numBits = Number(tcModel[_model_Fields_js__WEBPACK_IMPORTED_MODULE_5__.Fields.numCustomPurposes]);
                }
            }
            if (numBits !== 0) {
                /**
                 * numBits could be 0 if this is a publisher custom purposes field and
                 * no custom purposes are defined. If that is the case, we don't need
                 * to gather no bits and we don't need to increment our bStringIdx
                 * pointer because those would all be 0 increments and would mess up
                 * the next logical if statement.
                 */
                const bits = bitField.substr(bStringIdx, numBits);
                if (encoder === _field_index_js__WEBPACK_IMPORTED_MODULE_2__.VendorVectorEncoder) {
                    tcModel[key] = encoder.decode(bits, tcModel.version);
                }
                else {
                    tcModel[key] = encoder.decode(bits, numBits);
                }
                if (Number.isInteger(numBits)) {
                    bStringIdx += numBits;
                }
                else if (Number.isInteger(tcModel[key].bitLength)) {
                    bStringIdx += tcModel[key].bitLength;
                }
                else {
                    throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_4__.DecodingError(key);
                }
            }
        });
        return tcModel;
    }
    static isPublisherCustom(key) {
        return key.indexOf('publisherCustom') === 0;
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/SemanticPreEncoder.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/SemanticPreEncoder.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SemanticPreEncoder: () => (/* binding */ SemanticPreEncoder)
/* harmony export */ });
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../errors/index.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/index.js");
/* harmony import */ var _model_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/index.js */ "./node_modules/@iabtcf/core/lib/mjs/model/index.js");


class SemanticPreEncoder {
    static processor = [
        (tcModel) => tcModel,
        (tcModel, gvl) => {
            /**
             * in case this wasn't set previously.  This should filter out invalid
             * purpose restrictions.
             */
            tcModel.publisherRestrictions.gvl = gvl;
            /**
             * Purpose 1 is never allowed to be true for legitimate interest
             */
            tcModel.purposeLegitimateInterests.unset(1);
            /**
             * If a Vendor does not declare a purpose for consent or legitimate
             * interest they should not have a positive signal for it. This code
             * removes positive signals created mistakingly.
             */
            const vectorToIntMap = new Map();
            vectorToIntMap.set('legIntPurposes', tcModel.vendorLegitimateInterests);
            vectorToIntMap.set('purposes', tcModel.vendorConsents);
            vectorToIntMap.forEach((vector, gvlVendorKey) => {
                vector.forEach((value, vendorId) => {
                    if (value) {
                        const vendor = gvl.vendors[vendorId];
                        if (!vendor || vendor.deletedDate) {
                            /**
                             * If the vendor doesn't exist, then they should not receive a
                             * positive signal
                             */
                            vector.unset(vendorId);
                        }
                        else if (vendor[gvlVendorKey].length === 0) {
                            if (gvlVendorKey === 'legIntPurposes' && vendor['purposes'].length === 0 && vendor['legIntPurposes'].length === 0 && vendor['specialPurposes'].length > 0) {
                                /**
                                 * Per June 2021 Policy change, Vendors declaring only Special Purposes must
                                 * have their legitimate interest Vendor bit set if they have been disclosed.
                                 * This empty block ensures their LI bit remains set
                                 */
                            }
                            else {
                                /**
                                 * If the vendor does exist, but they haven't declared any
                                 * purposes for this legal basis, then we need to see if they can
                                 * possibly have the legal basis from their flexible purposes.
                                 */
                                if (tcModel.isServiceSpecific) {
                                    if (vendor.flexiblePurposes.length === 0) {
                                        /**
                                         * No flexible basis for any purposes, so we can safely remove
                                         * this vendor from the legal basis.
                                         */
                                        vector.unset(vendorId);
                                    }
                                    else {
                                        /**
                                         * They have some flexible purposes, we should check for a
                                         * publisher restriction value that would enable this vendor to
                                         * have the override-preferred basis.
                                         */
                                        const restrictions = tcModel.publisherRestrictions.getRestrictions(vendorId);
                                        let isValid = false;
                                        for (let i = 0, len = restrictions.length; i < len && !isValid; i++) {
                                            /**
                                             * If this condition is true the loop will break.  If we are
                                             * dealing with the consent purposes ('purposes') and the
                                             * publisher restriction overrides to consent then it is
                                             * valid for the vendor to have a positive signal for
                                             * consent.  Likewise for legitimate interest purposes
                                             * ('legIntPurposes') and requiring legitimate interest.
                                             */
                                            isValid = ((restrictions[i].restrictionType === _model_index_js__WEBPACK_IMPORTED_MODULE_1__.RestrictionType.REQUIRE_CONSENT &&
                                                gvlVendorKey === 'purposes') ||
                                                (restrictions[i].restrictionType === _model_index_js__WEBPACK_IMPORTED_MODULE_1__.RestrictionType.REQUIRE_LI &&
                                                    gvlVendorKey === 'legIntPurposes'));
                                        }
                                        if (!isValid) {
                                            /**
                                             * if we came through the previous  loop without finding a
                                             * valid reasing: no overriding restrictions (changes in
                                             * legal basis) then it's not valid for this vendor to have
                                             * this legal basis.
                                             */
                                            vector.unset(vendorId);
                                        }
                                    }
                                }
                                else {
                                    /**
                                     * This is a globally-scoped string so flexible purposes will not
                                     * be able to change this value because purposeRestrictions only
                                     * apply to service-specific strings.
                                     */
                                    vector.unset(vendorId);
                                }
                            }
                        }
                    }
                });
            });
            tcModel.vendorsDisclosed.set(gvl.vendors);
            return tcModel;
        },
    ];
    static process(tcModel, options) {
        const gvl = tcModel.gvl;
        if (!gvl) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_0__.EncodingError('Unable to encode TCModel without a GVL');
        }
        if (!gvl.isReady) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_0__.EncodingError('Unable to encode TCModel tcModel.gvl.readyPromise is not resolved');
        }
        tcModel = tcModel.clone();
        tcModel.consentLanguage = gvl.language.toUpperCase();
        if (options?.version > 0 && options?.version <= this.processor.length) {
            tcModel.version = options.version;
        }
        else {
            /**
             * this is equal to the latest or most current version
             */
            tcModel.version = this.processor.length;
        }
        const processorFunctionIndex = tcModel.version - 1;
        if (!this.processor[processorFunctionIndex]) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_0__.EncodingError(`Invalid version: ${tcModel.version}`);
        }
        return this.processor[processorFunctionIndex](tcModel, gvl);
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/BooleanEncoder.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/field/BooleanEncoder.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooleanEncoder: () => (/* binding */ BooleanEncoder)
/* harmony export */ });
class BooleanEncoder {
    static encode(value) {
        return String(Number(value));
    }
    static decode(value) {
        // less operations than !!parseInt(value, 2)
        return value === '1';
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/DateEncoder.js":
/*!************************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/field/DateEncoder.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateEncoder: () => (/* binding */ DateEncoder)
/* harmony export */ });
/* harmony import */ var _IntEncoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IntEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/IntEncoder.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/index.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/index.js");


class DateEncoder {
    static encode(value, numBits) {
        return _IntEncoder_js__WEBPACK_IMPORTED_MODULE_0__.IntEncoder.encode(Math.round(value.getTime() / 100), numBits);
    }
    static decode(value, numBits) {
        if (numBits !== value.length) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.DecodingError('invalid bit length');
        }
        const date = new Date();
        date.setTime(_IntEncoder_js__WEBPACK_IMPORTED_MODULE_0__.IntEncoder.decode(value, numBits) * 100);
        return date;
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/FieldEncoderMap.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/field/FieldEncoderMap.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldEncoderMap: () => (/* binding */ FieldEncoderMap)
/* harmony export */ });
/* harmony import */ var _model_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/index.js */ "./node_modules/@iabtcf/core/lib/mjs/model/index.js");
/* harmony import */ var _BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BooleanEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/BooleanEncoder.js");
/* harmony import */ var _DateEncoder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DateEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/DateEncoder.js");
/* harmony import */ var _FixedVectorEncoder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FixedVectorEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/FixedVectorEncoder.js");
/* harmony import */ var _IntEncoder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IntEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/IntEncoder.js");
/* harmony import */ var _LangEncoder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LangEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/LangEncoder.js");
/* harmony import */ var _PurposeRestrictionVectorEncoder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PurposeRestrictionVectorEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/PurposeRestrictionVectorEncoder.js");
/* harmony import */ var _VendorVectorEncoder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VendorVectorEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/VendorVectorEncoder.js");








function FieldEncoderMap() {
    return {
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.version]: _IntEncoder_js__WEBPACK_IMPORTED_MODULE_4__.IntEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.created]: _DateEncoder_js__WEBPACK_IMPORTED_MODULE_2__.DateEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.lastUpdated]: _DateEncoder_js__WEBPACK_IMPORTED_MODULE_2__.DateEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.cmpId]: _IntEncoder_js__WEBPACK_IMPORTED_MODULE_4__.IntEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.cmpVersion]: _IntEncoder_js__WEBPACK_IMPORTED_MODULE_4__.IntEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.consentScreen]: _IntEncoder_js__WEBPACK_IMPORTED_MODULE_4__.IntEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.consentLanguage]: _LangEncoder_js__WEBPACK_IMPORTED_MODULE_5__.LangEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.vendorListVersion]: _IntEncoder_js__WEBPACK_IMPORTED_MODULE_4__.IntEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.policyVersion]: _IntEncoder_js__WEBPACK_IMPORTED_MODULE_4__.IntEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.isServiceSpecific]: _BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_1__.BooleanEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.useNonStandardStacks]: _BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_1__.BooleanEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.specialFeatureOptins]: _FixedVectorEncoder_js__WEBPACK_IMPORTED_MODULE_3__.FixedVectorEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.purposeConsents]: _FixedVectorEncoder_js__WEBPACK_IMPORTED_MODULE_3__.FixedVectorEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.purposeLegitimateInterests]: _FixedVectorEncoder_js__WEBPACK_IMPORTED_MODULE_3__.FixedVectorEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.purposeOneTreatment]: _BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_1__.BooleanEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.publisherCountryCode]: _LangEncoder_js__WEBPACK_IMPORTED_MODULE_5__.LangEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.vendorConsents]: _VendorVectorEncoder_js__WEBPACK_IMPORTED_MODULE_7__.VendorVectorEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.vendorLegitimateInterests]: _VendorVectorEncoder_js__WEBPACK_IMPORTED_MODULE_7__.VendorVectorEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.publisherRestrictions]: _PurposeRestrictionVectorEncoder_js__WEBPACK_IMPORTED_MODULE_6__.PurposeRestrictionVectorEncoder,
        segmentType: _IntEncoder_js__WEBPACK_IMPORTED_MODULE_4__.IntEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.vendorsDisclosed]: _VendorVectorEncoder_js__WEBPACK_IMPORTED_MODULE_7__.VendorVectorEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.vendorsAllowed]: _VendorVectorEncoder_js__WEBPACK_IMPORTED_MODULE_7__.VendorVectorEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.publisherConsents]: _FixedVectorEncoder_js__WEBPACK_IMPORTED_MODULE_3__.FixedVectorEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.publisherLegitimateInterests]: _FixedVectorEncoder_js__WEBPACK_IMPORTED_MODULE_3__.FixedVectorEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.numCustomPurposes]: _IntEncoder_js__WEBPACK_IMPORTED_MODULE_4__.IntEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.publisherCustomConsents]: _FixedVectorEncoder_js__WEBPACK_IMPORTED_MODULE_3__.FixedVectorEncoder,
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.publisherCustomLegitimateInterests]: _FixedVectorEncoder_js__WEBPACK_IMPORTED_MODULE_3__.FixedVectorEncoder,
    };
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/FixedVectorEncoder.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/field/FixedVectorEncoder.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FixedVectorEncoder: () => (/* binding */ FixedVectorEncoder)
/* harmony export */ });
/* harmony import */ var _BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BooleanEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/BooleanEncoder.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/index.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/index.js");
/* harmony import */ var _model_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/index.js */ "./node_modules/@iabtcf/core/lib/mjs/model/index.js");



class FixedVectorEncoder {
    static encode(value, numBits) {
        let bitString = '';
        for (let i = 1; i <= numBits; i++) {
            bitString += _BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_0__.BooleanEncoder.encode(value.has(i));
        }
        return bitString;
    }
    static decode(value, numBits) {
        if (value.length !== numBits) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.DecodingError('bitfield encoding length mismatch');
        }
        const vector = new _model_index_js__WEBPACK_IMPORTED_MODULE_2__.Vector();
        for (let i = 1; i <= numBits; i++) {
            if (_BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_0__.BooleanEncoder.decode(value[i - 1])) {
                vector.set(i);
            }
        }
        vector.bitLength = value.length;
        return vector;
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/IntEncoder.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/field/IntEncoder.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntEncoder: () => (/* binding */ IntEncoder)
/* harmony export */ });
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../errors/index.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/index.js");

class IntEncoder {
    static encode(value, numBits) {
        let bitString;
        if (typeof value === 'string') {
            value = parseInt(value, 10);
        }
        bitString = value.toString(2);
        if (bitString.length > numBits || value < 0) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_0__.EncodingError(`${value} too large to encode into ${numBits}`);
        }
        // Pad the string if not filling all bits
        if (bitString.length < numBits) {
            // pad left
            bitString = '0'.repeat(numBits - bitString.length) + bitString;
        }
        return bitString;
    }
    static decode(value, numBits) {
        if (numBits !== value.length) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_0__.DecodingError('invalid bit length');
        }
        return parseInt(value, 2);
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/LangEncoder.js":
/*!************************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/field/LangEncoder.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LangEncoder: () => (/* binding */ LangEncoder)
/* harmony export */ });
/* harmony import */ var _IntEncoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IntEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/IntEncoder.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../errors/index.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/index.js");


class LangEncoder {
    static encode(value, numBits) {
        value = value.toUpperCase();
        const ASCII_START = 65;
        const firstLetter = value.charCodeAt(0) - ASCII_START;
        const secondLetter = value.charCodeAt(1) - ASCII_START;
        // check some things to throw some good errors
        if (firstLetter < 0 || firstLetter > 25 || secondLetter < 0 || secondLetter > 25) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.EncodingError(`invalid language code: ${value}`);
        }
        if (numBits % 2 === 1) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.EncodingError(`numBits must be even, ${numBits} is not valid`);
        }
        numBits = numBits / 2;
        const firstLetterBString = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_0__.IntEncoder.encode(firstLetter, numBits);
        const secondLetterBString = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_0__.IntEncoder.encode(secondLetter, numBits);
        return firstLetterBString + secondLetterBString;
    }
    static decode(value, numBits) {
        let retr;
        // is it an even number of bits? we have to divide it
        if (numBits === value.length && !(value.length % 2)) {
            const ASCII_START = 65;
            const mid = value.length / 2;
            const firstLetter = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_0__.IntEncoder.decode(value.slice(0, mid), mid) + ASCII_START;
            const secondLetter = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_0__.IntEncoder.decode(value.slice(mid), mid) + ASCII_START;
            retr = String.fromCharCode(firstLetter) + String.fromCharCode(secondLetter);
        }
        else {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.DecodingError('invalid bit length for language');
        }
        return retr;
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/PurposeRestrictionVectorEncoder.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/field/PurposeRestrictionVectorEncoder.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PurposeRestrictionVectorEncoder: () => (/* binding */ PurposeRestrictionVectorEncoder)
/* harmony export */ });
/* harmony import */ var _BitLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BitLength.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/BitLength.js");
/* harmony import */ var _BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BooleanEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/BooleanEncoder.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errors/index.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/index.js");
/* harmony import */ var _IntEncoder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IntEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/IntEncoder.js");
/* harmony import */ var _model_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/index.js */ "./node_modules/@iabtcf/core/lib/mjs/model/index.js");





class PurposeRestrictionVectorEncoder {
    static encode(prVector) {
        // start with the number of restrictions
        let bitString = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_3__.IntEncoder.encode(prVector.numRestrictions, _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.numRestrictions);
        // if the vector is empty we'll just return a string with just the numRestricitons being 0
        if (!prVector.isEmpty()) {
            // create each restriction group
            prVector.getRestrictions().forEach((purpRestriction) => {
                // every restriction group has the purposeId and the restrictionType;
                bitString += _IntEncoder_js__WEBPACK_IMPORTED_MODULE_3__.IntEncoder.encode(purpRestriction.purposeId, _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.purposeId);
                bitString += _IntEncoder_js__WEBPACK_IMPORTED_MODULE_3__.IntEncoder.encode(purpRestriction.restrictionType, _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.restrictionType);
                // now get all the vendors under that restriction
                const vendors = prVector.getVendors(purpRestriction);
                const len = vendors.length;
                /**
                 * numEntries comes first so we will have to keep a counter and the do
                 * the encoding at the end
                 */
                let numEntries = 0;
                let startId = 0;
                let rangeField = '';
                for (let i = 0; i < len; i++) {
                    const vendorId = vendors[i];
                    if (startId === 0) {
                        numEntries++;
                        startId = vendorId;
                    }
                    // we know that `len` is greater than zero because we entered the loop
                    const lastVendorId = vendors[len - 1];
                    const gvlVendorIds = prVector.gvl.vendorIds;
                    const nextGvlVendor = (vendorId) => {
                        while (++vendorId <= lastVendorId && !gvlVendorIds.has(vendorId)) {
                        }
                        return vendorId;
                    };
                    /**
                     * either end of the loop or there are GVL vendor IDs before the next one
                     */
                    if (i === len - 1 || vendors[i + 1] > nextGvlVendor(vendorId)) {
                        /**
                         * it's a range entry if we've got something other than the start
                         * ID
                         */
                        const isRange = !(vendorId === startId);
                        // 0 means single 1 means range
                        rangeField += _BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_1__.BooleanEncoder.encode(isRange);
                        rangeField += _IntEncoder_js__WEBPACK_IMPORTED_MODULE_3__.IntEncoder.encode(startId, _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.vendorId);
                        if (isRange) {
                            rangeField += _IntEncoder_js__WEBPACK_IMPORTED_MODULE_3__.IntEncoder.encode(vendorId, _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.vendorId);
                        }
                        // reset the startId so we grab the next id in the list
                        startId = 0;
                    }
                }
                /**
                 * now that  the range encoding is built, encode the number of ranges
                 * and then append the range field to the bitString.
                 */
                bitString += _IntEncoder_js__WEBPACK_IMPORTED_MODULE_3__.IntEncoder.encode(numEntries, _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.numEntries);
                bitString += rangeField;
            });
        }
        return bitString;
    }
    static decode(encodedString) {
        let index = 0;
        const vector = new _model_index_js__WEBPACK_IMPORTED_MODULE_4__.PurposeRestrictionVector();
        const numRestrictions = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_3__.IntEncoder.decode(encodedString.substr(index, _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.numRestrictions), _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.numRestrictions);
        index += _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.numRestrictions;
        for (let i = 0; i < numRestrictions; i++) {
            // First is purpose ID
            const purposeId = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_3__.IntEncoder.decode(encodedString.substr(index, _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.purposeId), _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.purposeId);
            index += _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.purposeId;
            // Second Restriction Type
            const restrictionType = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_3__.IntEncoder.decode(encodedString.substr(index, _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.restrictionType), _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.restrictionType);
            index += _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.restrictionType;
            const purposeRestriction = new _model_index_js__WEBPACK_IMPORTED_MODULE_4__.PurposeRestriction(purposeId, restrictionType);
            // Num Entries (number of vendors)
            const numEntries = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_3__.IntEncoder.decode(encodedString.substr(index, _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.numEntries), _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.numEntries);
            index += _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.numEntries;
            for (let j = 0; j < numEntries; j++) {
                const isARange = _BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_1__.BooleanEncoder.decode(encodedString.substr(index, _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.anyBoolean));
                index += _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.anyBoolean;
                const startOrOnlyVendorId = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_3__.IntEncoder.decode(encodedString.substr(index, _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.vendorId), _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.vendorId);
                index += _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.vendorId;
                if (isARange) {
                    const endVendorId = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_3__.IntEncoder.decode(encodedString.substr(index, _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.vendorId), _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.vendorId);
                    index += _BitLength_js__WEBPACK_IMPORTED_MODULE_0__.BitLength.vendorId;
                    if (endVendorId < startOrOnlyVendorId) {
                        throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_2__.DecodingError(`Invalid RangeEntry: endVendorId ${endVendorId} is less than ${startOrOnlyVendorId}`);
                    }
                    for (let k = startOrOnlyVendorId; k <= endVendorId; k++) {
                        vector.add(k, purposeRestriction);
                    }
                }
                else {
                    vector.add(startOrOnlyVendorId, purposeRestriction);
                }
            }
        }
        vector.bitLength = index;
        return vector;
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/VectorEncodingType.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/field/VectorEncodingType.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VectorEncodingType: () => (/* binding */ VectorEncodingType)
/* harmony export */ });
var VectorEncodingType;
(function (VectorEncodingType) {
    VectorEncodingType[VectorEncodingType["FIELD"] = 0] = "FIELD";
    VectorEncodingType[VectorEncodingType["RANGE"] = 1] = "RANGE";
})(VectorEncodingType || (VectorEncodingType = {}));


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/VendorVectorEncoder.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/field/VendorVectorEncoder.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VendorVectorEncoder: () => (/* binding */ VendorVectorEncoder)
/* harmony export */ });
/* harmony import */ var _model_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/index.js */ "./node_modules/@iabtcf/core/lib/mjs/model/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/index.js");
/* harmony import */ var _IntEncoder_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IntEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/IntEncoder.js");
/* harmony import */ var _BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BooleanEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/BooleanEncoder.js");
/* harmony import */ var _FixedVectorEncoder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FixedVectorEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/FixedVectorEncoder.js");
/* harmony import */ var _VectorEncodingType_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VectorEncodingType.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/VectorEncodingType.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../errors/index.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/index.js");







class VendorVectorEncoder {
    static encode(value) {
        // collectors for range encoding
        const ranges = [];
        let range = [];
        // since both encodings need the maxId, start with that
        let retrString = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_2__.IntEncoder.encode(value.maxId, _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.maxId);
        // bit field will be just the vendors as we walk through the vector
        let bitField = '';
        let rangeIsSmaller;
        // some math
        const headerLength = _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.maxId + _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.encodingType;
        const bitFieldLength = headerLength + value.maxId;
        const minRangeLength = (_index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.vendorId * 2 + _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.singleOrRange + _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.numEntries);
        // gets larger as we walk through the vector
        let rangeLength = headerLength + _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.numEntries;
        // walk through every value in the vector
        value.forEach((curValue, i) => {
            // build our bitfield no matter what
            bitField += _BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_3__.BooleanEncoder.encode(curValue);
            /**
             * A range is a minimum of 45 bits, if the number of vendors in this
             * vector is less than 45 then we know that a bitfield encoding will be
             * shorter than any range encoding.
             *
             * The second check checks while we walk through the vector and abandons
             * building the ranges once it becomes larger
             */
            rangeIsSmaller = (value.maxId > minRangeLength && rangeLength < bitFieldLength);
            /**
             * if the curValue is true and our rangeLength is less than the bitField
             * length, we'll continue to push these ranges into the array.  Once the
             * ranges become a larger encoding there is no reason to continue
             * building the structure because we will be choosing the bitfield
             * encoding
             */
            if (rangeIsSmaller && curValue) {
                /**
                 * Look ahead to see if this is the last value in our range
                 */
                const nextValue = value.has(i + 1);
                // if there isn't a next value, then we'll wrap up this range
                if (!nextValue) {
                    /**
                     * this is the last value of the range, so we'll push it on to the
                     * end into position 1
                     */
                    range.push(i);
                    // add to the range length the additional vendorId
                    rangeLength += _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.vendorId;
                    // store the array in our bigger array
                    ranges.push(range);
                    // clear the array for the next range
                    range = [];
                }
                else if (range.length === 0) {
                    // this is the first  value for this range
                    range.push(i);
                    // update our count with new range overhead
                    rangeLength += _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.singleOrRange;
                    rangeLength += _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.vendorId;
                }
            }
        });
        if (rangeIsSmaller) {
            retrString += String(_VectorEncodingType_js__WEBPACK_IMPORTED_MODULE_5__.VectorEncodingType.RANGE);
            retrString += this.buildRangeEncoding(ranges);
        }
        else {
            retrString += String(_VectorEncodingType_js__WEBPACK_IMPORTED_MODULE_5__.VectorEncodingType.FIELD);
            retrString += bitField;
        }
        return retrString;
    }
    static decode(value, version) {
        let vector;
        let index = 0;
        const maxId = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_2__.IntEncoder.decode(value.substr(index, _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.maxId), _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.maxId);
        index += _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.maxId;
        const encodingType = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_2__.IntEncoder.decode(value.charAt(index), _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.encodingType);
        index += _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.encodingType;
        /**
         * Range is handled in batches so we'll need a different decoding scheme
         */
        if (encodingType === _VectorEncodingType_js__WEBPACK_IMPORTED_MODULE_5__.VectorEncodingType.RANGE) {
            vector = new _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Vector();
            if (version === 1) {
                if (value.substr(index, 1) === '1') {
                    throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_6__.DecodingError('Unable to decode default consent=1');
                }
                // jump over the default encoding
                index++;
            }
            const numEntries = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_2__.IntEncoder.decode(value.substr(index, _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.numEntries), _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.numEntries);
            index += _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.numEntries;
            // loop through each group of entries
            for (let i = 0; i < numEntries; i++) {
                // Ranges can represent a single id or a range of ids.
                const isIdRange = _BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_3__.BooleanEncoder.decode(value.charAt(index));
                index += _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.singleOrRange;
                /**
                 * regardless of whether or not it's a single entry or range, the next
                 * set of bits is a vendor ID
                 */
                const firstId = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_2__.IntEncoder.decode(value.substr(index, _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.vendorId), _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.vendorId);
                index += _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.vendorId;
                // if it's a range, the next set of bits is the second id
                if (isIdRange) {
                    const secondId = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_2__.IntEncoder.decode(value.substr(index, _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.vendorId), _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.vendorId);
                    index += _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.vendorId;
                    // we'll need to set or unset all the vendor ids between the first and second
                    for (let j = firstId; j <= secondId; j++) {
                        vector.set(j);
                    }
                }
                else {
                    vector.set(firstId);
                }
            }
        }
        else {
            const bitField = value.substr(index, maxId);
            index += maxId;
            vector = _FixedVectorEncoder_js__WEBPACK_IMPORTED_MODULE_4__.FixedVectorEncoder.decode(bitField, maxId);
        }
        vector.bitLength = index;
        return vector;
    }
    static buildRangeEncoding(ranges) {
        // describe the number of entries to follow
        const numEntries = ranges.length;
        let rangeString = _IntEncoder_js__WEBPACK_IMPORTED_MODULE_2__.IntEncoder.encode(numEntries, _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.numEntries);
        // each range
        ranges.forEach((range) => {
            // is this range a single?
            const single = (range.length === 1);
            // first is the indicator of whether this is a single id or range (two)
            // 0 is single and range is 1
            rangeString += _BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_3__.BooleanEncoder.encode(!single);
            // second is the first (or only) vendorId
            rangeString += _IntEncoder_js__WEBPACK_IMPORTED_MODULE_2__.IntEncoder.encode(range[0], _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.vendorId);
            if (!single) {
                // add the second id if it exists
                rangeString += _IntEncoder_js__WEBPACK_IMPORTED_MODULE_2__.IntEncoder.encode(range[1], _index_js__WEBPACK_IMPORTED_MODULE_1__.BitLength.vendorId);
            }
        });
        return rangeString;
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/field/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooleanEncoder: () => (/* reexport safe */ _BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_0__.BooleanEncoder),
/* harmony export */   DateEncoder: () => (/* reexport safe */ _DateEncoder_js__WEBPACK_IMPORTED_MODULE_1__.DateEncoder),
/* harmony export */   FieldEncoderMap: () => (/* reexport safe */ _FieldEncoderMap_js__WEBPACK_IMPORTED_MODULE_2__.FieldEncoderMap),
/* harmony export */   FixedVectorEncoder: () => (/* reexport safe */ _FixedVectorEncoder_js__WEBPACK_IMPORTED_MODULE_3__.FixedVectorEncoder),
/* harmony export */   IntEncoder: () => (/* reexport safe */ _IntEncoder_js__WEBPACK_IMPORTED_MODULE_4__.IntEncoder),
/* harmony export */   LangEncoder: () => (/* reexport safe */ _LangEncoder_js__WEBPACK_IMPORTED_MODULE_5__.LangEncoder),
/* harmony export */   PurposeRestrictionVectorEncoder: () => (/* reexport safe */ _PurposeRestrictionVectorEncoder_js__WEBPACK_IMPORTED_MODULE_6__.PurposeRestrictionVectorEncoder),
/* harmony export */   VectorEncodingType: () => (/* reexport safe */ _VectorEncodingType_js__WEBPACK_IMPORTED_MODULE_7__.VectorEncodingType),
/* harmony export */   VendorVectorEncoder: () => (/* reexport safe */ _VendorVectorEncoder_js__WEBPACK_IMPORTED_MODULE_8__.VendorVectorEncoder)
/* harmony export */ });
/* harmony import */ var _BooleanEncoder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BooleanEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/BooleanEncoder.js");
/* harmony import */ var _DateEncoder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/DateEncoder.js");
/* harmony import */ var _FieldEncoderMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldEncoderMap.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/FieldEncoderMap.js");
/* harmony import */ var _FixedVectorEncoder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FixedVectorEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/FixedVectorEncoder.js");
/* harmony import */ var _IntEncoder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IntEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/IntEncoder.js");
/* harmony import */ var _LangEncoder_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LangEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/LangEncoder.js");
/* harmony import */ var _PurposeRestrictionVectorEncoder_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PurposeRestrictionVectorEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/PurposeRestrictionVectorEncoder.js");
/* harmony import */ var _VectorEncodingType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VectorEncodingType.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/VectorEncodingType.js");
/* harmony import */ var _VendorVectorEncoder_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VendorVectorEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/VendorVectorEncoder.js");











/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base64Url: () => (/* reexport safe */ _Base64Url_js__WEBPACK_IMPORTED_MODULE_0__.Base64Url),
/* harmony export */   BitLength: () => (/* reexport safe */ _BitLength_js__WEBPACK_IMPORTED_MODULE_1__.BitLength),
/* harmony export */   BooleanEncoder: () => (/* reexport safe */ _field_index_js__WEBPACK_IMPORTED_MODULE_5__.BooleanEncoder),
/* harmony export */   DateEncoder: () => (/* reexport safe */ _field_index_js__WEBPACK_IMPORTED_MODULE_5__.DateEncoder),
/* harmony export */   FieldEncoderMap: () => (/* reexport safe */ _field_index_js__WEBPACK_IMPORTED_MODULE_5__.FieldEncoderMap),
/* harmony export */   FieldSequence: () => (/* reexport safe */ _sequence_index_js__WEBPACK_IMPORTED_MODULE_6__.FieldSequence),
/* harmony export */   FixedVectorEncoder: () => (/* reexport safe */ _field_index_js__WEBPACK_IMPORTED_MODULE_5__.FixedVectorEncoder),
/* harmony export */   IntEncoder: () => (/* reexport safe */ _field_index_js__WEBPACK_IMPORTED_MODULE_5__.IntEncoder),
/* harmony export */   LangEncoder: () => (/* reexport safe */ _field_index_js__WEBPACK_IMPORTED_MODULE_5__.LangEncoder),
/* harmony export */   PurposeRestrictionVectorEncoder: () => (/* reexport safe */ _field_index_js__WEBPACK_IMPORTED_MODULE_5__.PurposeRestrictionVectorEncoder),
/* harmony export */   SegmentEncoder: () => (/* reexport safe */ _SegmentEncoder_js__WEBPACK_IMPORTED_MODULE_3__.SegmentEncoder),
/* harmony export */   SegmentSequence: () => (/* reexport safe */ _sequence_index_js__WEBPACK_IMPORTED_MODULE_6__.SegmentSequence),
/* harmony export */   SemanticPreEncoder: () => (/* reexport safe */ _SemanticPreEncoder_js__WEBPACK_IMPORTED_MODULE_4__.SemanticPreEncoder),
/* harmony export */   VectorEncodingType: () => (/* reexport safe */ _field_index_js__WEBPACK_IMPORTED_MODULE_5__.VectorEncodingType),
/* harmony export */   VendorVectorEncoder: () => (/* reexport safe */ _field_index_js__WEBPACK_IMPORTED_MODULE_5__.VendorVectorEncoder)
/* harmony export */ });
/* harmony import */ var _Base64Url_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base64Url.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/Base64Url.js");
/* harmony import */ var _BitLength_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BitLength.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/BitLength.js");
/* harmony import */ var _EncodingOptions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EncodingOptions.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/EncodingOptions.js");
/* harmony import */ var _SegmentEncoder_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SegmentEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/SegmentEncoder.js");
/* harmony import */ var _SemanticPreEncoder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SemanticPreEncoder.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/SemanticPreEncoder.js");
/* harmony import */ var _field_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./field/index.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/field/index.js");
/* harmony import */ var _sequence_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sequence/index.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/index.js");









/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/FieldSequence.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/FieldSequence.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldSequence: () => (/* binding */ FieldSequence)
/* harmony export */ });
/* harmony import */ var _model_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/index.js */ "./node_modules/@iabtcf/core/lib/mjs/model/index.js");

class FieldSequence {
    '1' = {
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Segment.CORE]: [
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.version,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.created,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.lastUpdated,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.cmpId,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.cmpVersion,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.consentScreen,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.consentLanguage,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.vendorListVersion,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.purposeConsents,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.vendorConsents,
        ],
    };
    '2' = {
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Segment.CORE]: [
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.version,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.created,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.lastUpdated,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.cmpId,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.cmpVersion,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.consentScreen,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.consentLanguage,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.vendorListVersion,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.policyVersion,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.isServiceSpecific,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.useNonStandardStacks,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.specialFeatureOptins,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.purposeConsents,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.purposeLegitimateInterests,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.purposeOneTreatment,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.publisherCountryCode,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.vendorConsents,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.vendorLegitimateInterests,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.publisherRestrictions,
        ],
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Segment.PUBLISHER_TC]: [
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.publisherConsents,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.publisherLegitimateInterests,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.numCustomPurposes,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.publisherCustomConsents,
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.publisherCustomLegitimateInterests,
        ],
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Segment.VENDORS_ALLOWED]: [
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.vendorsAllowed,
        ],
        [_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Segment.VENDORS_DISCLOSED]: [
            _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.vendorsDisclosed,
        ],
    };
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/SegmentSequence.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/SegmentSequence.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SegmentSequence: () => (/* binding */ SegmentSequence)
/* harmony export */ });
/* harmony import */ var _model_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/index.js */ "./node_modules/@iabtcf/core/lib/mjs/model/index.js");

class SegmentSequence {
    '1' = [
        _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Segment.CORE,
    ];
    '2' = [
        _model_index_js__WEBPACK_IMPORTED_MODULE_0__.Segment.CORE,
    ];
    constructor(tcModel, options) {
        if (tcModel.version === 2) {
            if (tcModel.isServiceSpecific) {
                /**
                 * If it's service specific only, then the publisher TC String can be
                 * stored in the cookie and would be transmitted if it's not for
                 * storage.  So it's included regardless of whether or not it's for
                 * saving or the cmp api to surface.
                 */
                this['2'].push(_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Segment.PUBLISHER_TC);
            }
            else {
                const isForVendors = !!(options && options.isForVendors);
                /**
                 * including vendors disclosed only if it is for saving (to the global
                 * scope and not for vendors through the CMP API) or supportOOB is
                 * turned on (either or both).  The compliment of this being not for
                 * saving (surfaced to CMP) and no support of OOB.
                 */
                if (!isForVendors || tcModel[_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.supportOOB] === true) {
                    this['2'].push(_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Segment.VENDORS_DISCLOSED);
                }
                if (isForVendors) {
                    /**
                     * If a publisher does support OOB and they have narrowed the allowed
                     * vendors to utilize it, then we should include the vendors allowed
                     * segment.  If it is empty then there are no restrictions, if that
                     * is intended to mean no support for OOB, then the flag should be
                     * set for that instead.
                     *
                     */
                    if (tcModel[_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.supportOOB] && tcModel[_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Fields.vendorsAllowed].size > 0) {
                        this['2'].push(_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Segment.VENDORS_ALLOWED);
                    }
                    /**
                     * Always include the publisher TC segment as long as this TC string
                     * is not intended to be saved in the global scope.
                     */
                    this['2'].push(_model_index_js__WEBPACK_IMPORTED_MODULE_0__.Segment.PUBLISHER_TC);
                }
            }
        }
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/SequenceVersionMap.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/SequenceVersionMap.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FieldSequence: () => (/* reexport safe */ _FieldSequence_js__WEBPACK_IMPORTED_MODULE_0__.FieldSequence),
/* harmony export */   SegmentSequence: () => (/* reexport safe */ _SegmentSequence_js__WEBPACK_IMPORTED_MODULE_1__.SegmentSequence)
/* harmony export */ });
/* harmony import */ var _FieldSequence_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FieldSequence.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/FieldSequence.js");
/* harmony import */ var _SegmentSequence_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SegmentSequence.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/SegmentSequence.js");
/* harmony import */ var _SequenceVersionMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SequenceVersionMap.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/sequence/SequenceVersionMap.js");
// created from 'create-ts-index'





/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/errors/DecodingError.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/errors/DecodingError.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DecodingError: () => (/* binding */ DecodingError)
/* harmony export */ });
/**
 * class for decoding errors
 *
 * @extends {Error}
 */
class DecodingError extends Error {
    /**
     * constructor - constructs an DecodingError
     *
     * @param {string} msg - Decoding Error Message
     * @return {undefined}
     */
    constructor(msg) {
        super(msg);
        this.name = 'DecodingError';
    }
}



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/errors/EncodingError.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/errors/EncodingError.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EncodingError: () => (/* binding */ EncodingError)
/* harmony export */ });
/**
 * class for encoding errors
 *
 * @extends {Error}
 */
class EncodingError extends Error {
    /**
     * constructor - constructs an EncodingError
     *
     * @param {string} msg - Encoding Error Message
     * @return {undefined}
     */
    constructor(msg) {
        super(msg);
        this.name = 'EncodingError';
    }
}



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/errors/GVLError.js":
/*!**************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/errors/GVLError.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GVLError: () => (/* binding */ GVLError)
/* harmony export */ });
/**
 * class for General GVL Errors
 *
 * @extends {Error}
 */
class GVLError extends Error {
    /**
     * constructor - constructs a GVLError
     *
     * @param {string} msg - Error message to display
     * @return {undefined}
     */
    constructor(msg) {
        super(msg);
        this.name = 'GVLError';
    }
}



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/errors/TCModelError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/errors/TCModelError.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TCModelError: () => (/* binding */ TCModelError)
/* harmony export */ });
/**
 * class for decoding errors
 *
 * @extends {Error}
 */
class TCModelError extends Error {
    /**
     * constructor - constructs an TCModelError
     *
     * @param {string} fieldName - the errored field
     * @param {string} passedValue - what was passed
     * @return {undefined}
     */
    constructor(fieldName, passedValue, msg = '') {
        super(`invalid value ${passedValue} passed for ${fieldName} ${msg}`);
        this.name = 'TCModelError';
    }
}



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/errors/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/errors/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DecodingError: () => (/* reexport safe */ _DecodingError_js__WEBPACK_IMPORTED_MODULE_0__.DecodingError),
/* harmony export */   EncodingError: () => (/* reexport safe */ _EncodingError_js__WEBPACK_IMPORTED_MODULE_1__.EncodingError),
/* harmony export */   GVLError: () => (/* reexport safe */ _GVLError_js__WEBPACK_IMPORTED_MODULE_2__.GVLError),
/* harmony export */   TCModelError: () => (/* reexport safe */ _TCModelError_js__WEBPACK_IMPORTED_MODULE_3__.TCModelError)
/* harmony export */ });
/* harmony import */ var _DecodingError_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DecodingError.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/DecodingError.js");
/* harmony import */ var _EncodingError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EncodingError.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/EncodingError.js");
/* harmony import */ var _GVLError_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GVLError.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/GVLError.js");
/* harmony import */ var _TCModelError_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TCModelError.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/TCModelError.js");






/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Base64Url: () => (/* reexport safe */ _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.Base64Url),
/* harmony export */   BinarySearchTree: () => (/* reexport safe */ _model_index_js__WEBPACK_IMPORTED_MODULE_2__.BinarySearchTree),
/* harmony export */   BitLength: () => (/* reexport safe */ _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.BitLength),
/* harmony export */   BooleanEncoder: () => (/* reexport safe */ _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.BooleanEncoder),
/* harmony export */   Cloneable: () => (/* reexport safe */ _Cloneable_js__WEBPACK_IMPORTED_MODULE_3__.Cloneable),
/* harmony export */   ConsentLanguages: () => (/* reexport safe */ _model_index_js__WEBPACK_IMPORTED_MODULE_2__.ConsentLanguages),
/* harmony export */   DateEncoder: () => (/* reexport safe */ _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.DateEncoder),
/* harmony export */   DecodingError: () => (/* reexport safe */ _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.DecodingError),
/* harmony export */   DeviceDisclosureStorageAccessType: () => (/* reexport safe */ _model_index_js__WEBPACK_IMPORTED_MODULE_2__.DeviceDisclosureStorageAccessType),
/* harmony export */   EncodingError: () => (/* reexport safe */ _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.EncodingError),
/* harmony export */   FieldEncoderMap: () => (/* reexport safe */ _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.FieldEncoderMap),
/* harmony export */   FieldSequence: () => (/* reexport safe */ _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.FieldSequence),
/* harmony export */   Fields: () => (/* reexport safe */ _model_index_js__WEBPACK_IMPORTED_MODULE_2__.Fields),
/* harmony export */   FixedVectorEncoder: () => (/* reexport safe */ _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.FixedVectorEncoder),
/* harmony export */   GVL: () => (/* reexport safe */ _GVL_js__WEBPACK_IMPORTED_MODULE_4__.GVL),
/* harmony export */   GVLError: () => (/* reexport safe */ _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.GVLError),
/* harmony export */   IntEncoder: () => (/* reexport safe */ _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.IntEncoder),
/* harmony export */   Json: () => (/* reexport safe */ _Json_js__WEBPACK_IMPORTED_MODULE_5__.Json),
/* harmony export */   LangEncoder: () => (/* reexport safe */ _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.LangEncoder),
/* harmony export */   PurposeRestriction: () => (/* reexport safe */ _model_index_js__WEBPACK_IMPORTED_MODULE_2__.PurposeRestriction),
/* harmony export */   PurposeRestrictionVector: () => (/* reexport safe */ _model_index_js__WEBPACK_IMPORTED_MODULE_2__.PurposeRestrictionVector),
/* harmony export */   PurposeRestrictionVectorEncoder: () => (/* reexport safe */ _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.PurposeRestrictionVectorEncoder),
/* harmony export */   RestrictionType: () => (/* reexport safe */ _model_index_js__WEBPACK_IMPORTED_MODULE_2__.RestrictionType),
/* harmony export */   Segment: () => (/* reexport safe */ _model_index_js__WEBPACK_IMPORTED_MODULE_2__.Segment),
/* harmony export */   SegmentEncoder: () => (/* reexport safe */ _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.SegmentEncoder),
/* harmony export */   SegmentIDs: () => (/* reexport safe */ _model_index_js__WEBPACK_IMPORTED_MODULE_2__.SegmentIDs),
/* harmony export */   SegmentSequence: () => (/* reexport safe */ _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.SegmentSequence),
/* harmony export */   SemanticPreEncoder: () => (/* reexport safe */ _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.SemanticPreEncoder),
/* harmony export */   TCModel: () => (/* reexport safe */ _TCModel_js__WEBPACK_IMPORTED_MODULE_6__.TCModel),
/* harmony export */   TCModelError: () => (/* reexport safe */ _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.TCModelError),
/* harmony export */   TCString: () => (/* reexport safe */ _TCString_js__WEBPACK_IMPORTED_MODULE_7__.TCString),
/* harmony export */   Vector: () => (/* reexport safe */ _model_index_js__WEBPACK_IMPORTED_MODULE_2__.Vector),
/* harmony export */   VectorEncodingType: () => (/* reexport safe */ _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.VectorEncodingType),
/* harmony export */   VendorVectorEncoder: () => (/* reexport safe */ _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__.VendorVectorEncoder)
/* harmony export */ });
/* harmony import */ var _encoder_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encoder/index.js */ "./node_modules/@iabtcf/core/lib/mjs/encoder/index.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors/index.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/index.js");
/* harmony import */ var _model_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/index.js */ "./node_modules/@iabtcf/core/lib/mjs/model/index.js");
/* harmony import */ var _Cloneable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Cloneable.js */ "./node_modules/@iabtcf/core/lib/mjs/Cloneable.js");
/* harmony import */ var _GVL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GVL.js */ "./node_modules/@iabtcf/core/lib/mjs/GVL.js");
/* harmony import */ var _Json_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Json.js */ "./node_modules/@iabtcf/core/lib/mjs/Json.js");
/* harmony import */ var _TCModel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TCModel.js */ "./node_modules/@iabtcf/core/lib/mjs/TCModel.js");
/* harmony import */ var _TCString_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TCString.js */ "./node_modules/@iabtcf/core/lib/mjs/TCString.js");
// created from 'create-ts-index'










/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/BinarySearchTree.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/BinarySearchTree.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinarySearchTree: () => (/* binding */ BinarySearchTree)
/* harmony export */ });
/* harmony import */ var _Cloneable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Cloneable.js */ "./node_modules/@iabtcf/core/lib/mjs/Cloneable.js");

class BinarySearchTree extends _Cloneable_js__WEBPACK_IMPORTED_MODULE_0__.Cloneable {
    root = null;
    getRoot() {
        return this.root;
    }
    isEmpty() {
        // if root is undefined or null then by definition this is empty
        return !(this.root);
    }
    add(value) {
        // create new node object
        const node = {
            value: value,
            left: null,
            right: null,
        };
        let current;
        // first item?
        if (this.isEmpty()) {
            this.root = node;
        }
        else {
            // start at the root
            current = this.root;
            // infinite loop, figure out where to put it
            while (true) {
                // if the value is less than current value; go left
                if (value < current.value) {
                    // if it's empty, we can insert
                    if (current.left === null) {
                        // insert on the left
                        current.left = node;
                        // our work is done here
                        break;
                    }
                    else {
                        /**
                         * if there's something there already, we'll reset the pointer and
                         * wait for the next loop to do something ie. keep traversing
                         */
                        current = current.left;
                    }
                }
                else if (value > current.value) {
                    // if the value is greater than our current value; go right
                    if (current.right === null) {
                        // there's nothing to the right, so put it here
                        current.right = node;
                        break;
                    }
                    else {
                        /**
                         * if there's something there already, we'll reset the pointer and
                         * wait for the next loop to do something ie. keep traversing
                         */
                        current = current.right;
                    }
                }
                else {
                    /**
                     * If it's neither greater than the right or less than the right then
                     * it is equal to the current nodes value.  In that case we won't do
                     * anything with it because we will only insert unique values.
                     */
                    break;
                }
            }
        }
    }
    /**
     * performs Morris in-order traversal
     * @return {number[]} sorted array
     */
    get() {
        const retr = [];
        let current = this.root;
        while (current) {
            if (!current.left) {
                retr.push(current.value); // if there is no left child, visit current node
                current = current.right; // then we go the right branch
            }
            else {
                // find the right most leaf of root.left node.
                let pre = current.left;
                // when pre.right == null, it means we go to the right most leaf
                // when pre.right == current, it means the right most leaf has been visited in the last round
                while (pre.right && pre.right != current) {
                    pre = pre.right;
                }
                // this means the pre.right has been set, it's time to go to current node
                if (pre.right == current) {
                    pre.right = null;
                    // means the current node is pointed by left right most child
                    // the left branch has been visited, it's time to push the current node
                    retr.push(current.value);
                    current = current.right;
                }
                else {
                    // the fist time to visit the pre node, make its right child point to current node
                    pre.right = current;
                    current = current.left;
                }
            }
        }
        return retr;
    }
    contains(value) {
        let retr = false;
        let current = this.root;
        while (current) {
            if (current.value === value) {
                retr = true;
                break;
            }
            else if (value > current.value) {
                current = current.right;
            }
            else if (value < current.value) {
                current = current.left;
            }
        }
        return retr;
    }
    min(current = this.root) {
        let retr;
        while (current) {
            if (current.left) {
                current = current.left;
            }
            else {
                retr = current.value;
                current = null;
            }
        }
        return retr;
    }
    max(current = this.root) {
        let retr;
        while (current) {
            if (current.right) {
                current = current.right;
            }
            else {
                retr = current.value;
                current = null;
            }
        }
        return retr;
    }
    remove(value, current = this.root) {
        // we start at the root, so the parent is null
        let parent = null;
        let parentSide = 'left';
        while (current) {
            if (value < current.value) {
                // set our parent to the current value
                parent = current;
                // value is less than current value, so go left
                current = current.left;
                parentSide = 'left';
            }
            else if (value > current.value) {
                // set our parent to the current value
                parent = current;
                // value is greater than current value, so go right
                current = current.right;
                parentSide = 'right';
            }
            else {
                /**
                   * if it's neither greater than or less than, then it's equal so BINGO!
                   * we've found it
                   *
                   * If we have children, we've got to figure out what to do with
                   * them once we are no longer around...  Woah, code is like real
                   * life...
                   *
                   * There are three cases we care about when it comes to this removal
                   * process:
                   *
                   * 1. No children -- If not children we just delete an do nothing
                   * else, no harm no foul.
                   *
                   * 2. One child -- Just link the parent's link to current to the
                   * child.
                   *
                   * 3. Two children --  Find the minimum value from the right subtree
                   * replace us with the minimum value and of course remove that
                   * minimum value from the right stubtree
                   */
                if (!current.left && !current.right) {
                    // case 1 there are no children easy peasy lemon squeezy
                    if (parent) {
                        parent[parentSide] = null;
                    }
                    else {
                        this.root = null;
                    }
                }
                else if (!current.left) {
                    // no left side only right, so link right
                    if (parent) {
                        parent[parentSide] = current.right;
                    }
                    else {
                        this.root = current.right;
                    }
                }
                else if (!current.right) {
                    // no right side only left, so link left
                    if (parent) {
                        parent[parentSide] = current.left;
                    }
                    else {
                        this.root = current.left;
                    }
                }
                else {
                    /**
                     * case 3 just like real life, if you delete a parent the more kids
                     * that parent has the more complicated things get... in this case we
                     * have two children.  We're gonna have to figure out who goes where.
                     */
                    const minVal = this.min(current.right);
                    // little bit of recursion...
                    this.remove(minVal, current.right);
                    current.value = minVal;
                }
                current = null;
            }
        }
    }
    /**
     * Build Binary Search Tree from the ordered number array.
     *  The depth of the tree will be the `log2` of the array length.
     * @param {number[]} values number array in ascending order
     * @return {BinarySearchTree} Binary Search Tree
     */
    static build(values) {
        if (!values || values.length === 0) {
            return null;
        }
        else if (values.length === 1) {
            const tree = new BinarySearchTree();
            tree.add(values[0]);
            return tree;
        }
        else {
            const rootIndex = values.length >> 1;
            const tree = new BinarySearchTree();
            tree.add(values[rootIndex]);
            const root = tree.getRoot();
            if (root) {
                if (rootIndex + 1 < values.length) {
                    const rightTree = BinarySearchTree.build(values.slice(rootIndex + 1));
                    root.right = rightTree ? rightTree.getRoot() : null;
                }
                if (rootIndex - 1 > 0) {
                    const leftTree = BinarySearchTree.build(values.slice(0, rootIndex - 1));
                    root.left = leftTree ? leftTree.getRoot() : null;
                }
            }
            return tree;
        }
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/ConsentLanguages.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/ConsentLanguages.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConsentLanguages: () => (/* binding */ ConsentLanguages)
/* harmony export */ });
class ConsentLanguages {
    static langSet = new Set([
        'BG',
        'CA',
        'CS',
        'DA',
        'DE',
        'EL',
        'EN',
        'ES',
        'ET',
        'FI',
        'FR',
        'HR',
        'HU',
        'IT',
        'JA',
        'LT',
        'LV',
        'MT',
        'NL',
        'NO',
        'PL',
        'PT',
        'RO',
        'RU',
        'SK',
        'SL',
        'SV',
        'TR',
        'ZH',
    ]);
    has(key) {
        return ConsentLanguages.langSet.has(key);
    }
    forEach(callback) {
        ConsentLanguages.langSet.forEach(callback);
    }
    get size() {
        return ConsentLanguages.langSet.size;
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/DeviceDisclosure.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/DeviceDisclosure.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/DeviceDisclosureStorageAccessType.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/DeviceDisclosureStorageAccessType.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DeviceDisclosureStorageAccessType: () => (/* binding */ DeviceDisclosureStorageAccessType)
/* harmony export */ });
var DeviceDisclosureStorageAccessType;
(function (DeviceDisclosureStorageAccessType) {
    DeviceDisclosureStorageAccessType["COOKIE"] = "cookie";
    DeviceDisclosureStorageAccessType["WEB"] = "web";
    DeviceDisclosureStorageAccessType["APP"] = "app";
})(DeviceDisclosureStorageAccessType || (DeviceDisclosureStorageAccessType = {}));


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/Fields.js":
/*!***********************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/Fields.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fields: () => (/* binding */ Fields)
/* harmony export */ });
class Fields {
    static cmpId = 'cmpId';
    static cmpVersion = 'cmpVersion';
    static consentLanguage = 'consentLanguage';
    static consentScreen = 'consentScreen';
    static created = 'created';
    static supportOOB = 'supportOOB';
    static isServiceSpecific = 'isServiceSpecific';
    static lastUpdated = 'lastUpdated';
    static numCustomPurposes = 'numCustomPurposes';
    static policyVersion = 'policyVersion';
    static publisherCountryCode = 'publisherCountryCode';
    static publisherCustomConsents = 'publisherCustomConsents';
    static publisherCustomLegitimateInterests = 'publisherCustomLegitimateInterests';
    static publisherLegitimateInterests = 'publisherLegitimateInterests';
    static publisherConsents = 'publisherConsents';
    static publisherRestrictions = 'publisherRestrictions';
    static purposeConsents = 'purposeConsents';
    static purposeLegitimateInterests = 'purposeLegitimateInterests';
    static purposeOneTreatment = 'purposeOneTreatment';
    static specialFeatureOptins = 'specialFeatureOptins';
    static useNonStandardStacks = 'useNonStandardStacks';
    static vendorConsents = 'vendorConsents';
    static vendorLegitimateInterests = 'vendorLegitimateInterests';
    static vendorListVersion = 'vendorListVersion';
    static vendorsAllowed = 'vendorsAllowed';
    static vendorsDisclosed = 'vendorsDisclosed';
    static version = 'version';
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/IntMap.js":
/*!***********************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/IntMap.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/KeyMap.js":
/*!***********************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/KeyMap.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/PurposeRestriction.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/PurposeRestriction.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PurposeRestriction: () => (/* binding */ PurposeRestriction)
/* harmony export */ });
/* harmony import */ var _Cloneable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Cloneable.js */ "./node_modules/@iabtcf/core/lib/mjs/Cloneable.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/index.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/index.js");
/* harmony import */ var _RestrictionType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RestrictionType.js */ "./node_modules/@iabtcf/core/lib/mjs/model/RestrictionType.js");



class PurposeRestriction extends _Cloneable_js__WEBPACK_IMPORTED_MODULE_0__.Cloneable {
    static hashSeparator = '-';
    purposeId_;
    restrictionType;
    /**
     * constructor
     *
     * @param {number} purposeId? - may optionally pass the purposeId into the
     * constructor
     * @param {RestrictionType} restrictionType? - may
     * optionally pass the restrictionType into the constructor
     * @return {undefined}
     */
    constructor(purposeId, restrictionType) {
        super();
        if (purposeId !== undefined) {
            this.purposeId = purposeId;
        }
        if (restrictionType !== undefined) {
            this.restrictionType = restrictionType;
        }
    }
    static unHash(hash) {
        const splitUp = hash.split(this.hashSeparator);
        const purpRestriction = new PurposeRestriction();
        if (splitUp.length !== 2) {
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.TCModelError('hash', hash);
        }
        purpRestriction.purposeId = parseInt(splitUp[0], 10);
        purpRestriction.restrictionType = parseInt(splitUp[1], 10);
        return purpRestriction;
    }
    get hash() {
        if (!this.isValid()) {
            throw new Error('cannot hash invalid PurposeRestriction');
        }
        return `${this.purposeId}${PurposeRestriction.hashSeparator}${this.restrictionType}`;
    }
    /**
     * @return {number} The purpose Id associated with a publisher
     * purpose-by-vendor restriction that resulted in a different consent or LI
     * status than the consent or LI purposes allowed lists.
     */
    get purposeId() {
        return this.purposeId_;
    }
    /**
     * @param {number} idNum - The purpose Id associated with a publisher
     * purpose-by-vendor restriction that resulted in a different consent or LI
     * status than the consent or LI purposes allowed lists.
     */
    set purposeId(idNum) {
        this.purposeId_ = idNum;
    }
    isValid() {
        return (Number.isInteger(this.purposeId) &&
            this.purposeId > 0 &&
            (this.restrictionType === _RestrictionType_js__WEBPACK_IMPORTED_MODULE_2__.RestrictionType.NOT_ALLOWED ||
                this.restrictionType === _RestrictionType_js__WEBPACK_IMPORTED_MODULE_2__.RestrictionType.REQUIRE_CONSENT ||
                this.restrictionType === _RestrictionType_js__WEBPACK_IMPORTED_MODULE_2__.RestrictionType.REQUIRE_LI));
    }
    isSameAs(otherPR) {
        return (this.purposeId === otherPR.purposeId &&
            this.restrictionType === otherPR.restrictionType);
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/PurposeRestrictionVector.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/PurposeRestrictionVector.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PurposeRestrictionVector: () => (/* binding */ PurposeRestrictionVector)
/* harmony export */ });
/* harmony import */ var _PurposeRestriction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurposeRestriction.js */ "./node_modules/@iabtcf/core/lib/mjs/model/PurposeRestriction.js");
/* harmony import */ var _BinarySearchTree_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BinarySearchTree.js */ "./node_modules/@iabtcf/core/lib/mjs/model/BinarySearchTree.js");
/* harmony import */ var _RestrictionType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RestrictionType.js */ "./node_modules/@iabtcf/core/lib/mjs/model/RestrictionType.js");
/* harmony import */ var _Cloneable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Cloneable.js */ "./node_modules/@iabtcf/core/lib/mjs/Cloneable.js");




class PurposeRestrictionVector extends _Cloneable_js__WEBPACK_IMPORTED_MODULE_3__.Cloneable {
    /**
     * if this originatd from an encoded string we'll need a place to store the
     * bit length; it can be set and got from here
     */
    bitLength = 0;
    /**
     * a map indexed by a string which will be a 'hash' of the purpose and
     * restriction type.
     *
     * Using a BST to keep vendors in a sorted order for encoding later
     */
    map = new Map();
    gvl_;
    has(hash) {
        return this.map.has(hash);
    }
    isOkToHave(restrictionType, purposeId, vendorId) {
        let result = true;
        /**
         * without a gvl set, there's no way to know... in that case we'll return
         * true but once the GVL is set later we'll go through these and clean up
         * the mess.
         */
        if (this.gvl?.vendors) {
            const vendor = this.gvl.vendors[vendorId];
            if (vendor) {
                if (restrictionType === _RestrictionType_js__WEBPACK_IMPORTED_MODULE_2__.RestrictionType.NOT_ALLOWED) {
                    /**
                     * if it's "not allowed" then flexible declaration is ignored but if
                     * if it isn't even listed as one of the purposes the vendor uses,
                     * then there is no reason to encode the value so check both arrays
                     * to see if it exists.  If it does then we can restrict it.
                     */
                    result = (vendor.legIntPurposes.includes(purposeId) || vendor.purposes.includes(purposeId));
                }
                else if (vendor.flexiblePurposes.length) {
                    switch (restrictionType) {
                        /**
                         * If the vendor has the purposeId in flexiblePurposes and it is
                         * listed as a legitimate interest purpose we can set the
                         * override to require consent.
                         */
                        case _RestrictionType_js__WEBPACK_IMPORTED_MODULE_2__.RestrictionType.REQUIRE_CONSENT:
                            result = (vendor.flexiblePurposes.includes(purposeId) && vendor.legIntPurposes.includes(purposeId));
                            break;
                        /**
                         * If the vendor has the purposeId in flexiblePurposes and it is
                         * listed as a consent purpose we can set the
                         * override to require legitimate interest.
                         */
                        case _RestrictionType_js__WEBPACK_IMPORTED_MODULE_2__.RestrictionType.REQUIRE_LI:
                            result = (vendor.flexiblePurposes.includes(purposeId) && vendor.purposes.includes(purposeId));
                            break;
                    }
                }
                else {
                    result = false;
                }
            }
            else {
                // this vendor doesn't exist
                result = false;
            }
        }
        // if the gvl isn't defined, we can't do anything until later
        return result;
    }
    /**
     * add - adds a given Vendor ID under a given Purpose Restriction
     *
     * @param {number} vendorId
     * @param {PurposeRestriction} purposeRestriction
     * @return {void}
     */
    add(vendorId, purposeRestriction) {
        if (this.isOkToHave(purposeRestriction.restrictionType, purposeRestriction.purposeId, vendorId)) {
            const hash = purposeRestriction.hash;
            if (!this.has(hash)) {
                this.map.set(hash, new _BinarySearchTree_js__WEBPACK_IMPORTED_MODULE_1__.BinarySearchTree());
                this.bitLength = 0;
            }
            /**
             * Previously I had a check here to remove a duplicate value, but because
             * we're using a tree the value is guaranteed to be unique so there is no
             * need to add an additional de-duplication here.
             */
            this.map.get(hash).add(vendorId);
        }
    }
    /**
     * restrictPurposeToLegalBasis - adds all Vendors under a given Purpose Restriction
     *
     * @param {PurposeRestriction} purposeRestriction
     * @return {void}
     */
    restrictPurposeToLegalBasis(purposeRestriction) {
        const vendors = this.gvl.vendorIds;
        const hash = purposeRestriction.hash;
        const lastEntry = (function () {
            let value;
            for (value of vendors)
                ;
            return value;
        })();
        /**
         * Create an ordered array of vendor IDs from `1` (the minimum value for Vendor ID) to `lastEntry`
         */
        const values = [...Array(lastEntry).keys()].map((i) => i + 1);
        for (let i = 1; i <= lastEntry; i++) {
            if (!this.has(hash)) {
                this.map.set(hash, _BinarySearchTree_js__WEBPACK_IMPORTED_MODULE_1__.BinarySearchTree.build(values)); // use static method `build` to create a `BST` from the ordered array of IDs
                this.bitLength = 0;
            }
            /**
             * Previously I had a check here to remove a duplicate value, but because
             * we're using a tree the value is guaranteed to be unique so there is no
             * need to add an additional de-duplication here.
             */
            this.map.get(hash).add(i);
        }
    }
    /**
     * getVendors - returns array of vendor ids optionally narrowed by a given
     * Purpose Restriction.  If no purpose restriction is passed then all vendor
     * ids will be returned.  One can expect this result to be a unique set of
     * ids no duplicates.
     *
     * @param {PurposeRestriction} [purposeRestriction] - optionally passed to
     * get only Vendor IDs restricted under the given Purpose Restriction
     * @return {number[]} - Unique ID set of vendors
     */
    getVendors(purposeRestriction) {
        let vendorIds = [];
        if (purposeRestriction) {
            const hash = purposeRestriction.hash;
            if (this.has(hash)) {
                vendorIds = this.map.get(hash).get();
            }
        }
        else {
            const vendorSet = new Set();
            this.map.forEach((bst) => {
                bst.get().forEach((vendorId) => {
                    vendorSet.add(vendorId);
                });
            });
            vendorIds = Array.from(vendorSet);
        }
        return vendorIds;
    }
    getRestrictionType(vendorId, purposeId) {
        let rType;
        this.getRestrictions(vendorId).forEach((purposeRestriction) => {
            if (purposeRestriction.purposeId === purposeId) {
                if (rType === undefined || rType > purposeRestriction.restrictionType) {
                    rType = purposeRestriction.restrictionType;
                }
            }
        });
        return rType;
    }
    /**
     * vendorHasRestriction - determines whether a given Vendor ID is under a
     * given Purpose Restriction
     *
     * @param {number} vendorId
     * @param {PurposeRestriction} purposeRestriction
     * @return {boolean} - true if the give Vendor ID is under the given Purpose
     * Restriction
     */
    vendorHasRestriction(vendorId, purposeRestriction) {
        let has = false;
        const restrictions = this.getRestrictions(vendorId);
        for (let i = 0; i < restrictions.length && !has; i++) {
            has = purposeRestriction.isSameAs(restrictions[i]);
        }
        return has;
    }
    /**
     * getMaxVendorId - gets the Maximum Vendor ID regardless of Purpose
     * Restriction
     *
     * @return {number} - maximum Vendor ID
     */
    getMaxVendorId() {
        let retr = 0;
        this.map.forEach((bst) => {
            retr = Math.max(bst.max(), retr);
        });
        return retr;
    }
    getRestrictions(vendorId) {
        const retr = [];
        this.map.forEach((bst, hash) => {
            if (vendorId) {
                if (bst.contains(vendorId)) {
                    retr.push(_PurposeRestriction_js__WEBPACK_IMPORTED_MODULE_0__.PurposeRestriction.unHash(hash));
                }
            }
            else {
                retr.push(_PurposeRestriction_js__WEBPACK_IMPORTED_MODULE_0__.PurposeRestriction.unHash(hash));
            }
        });
        return retr;
    }
    getPurposes() {
        const purposeIds = new Set();
        this.map.forEach((bst, hash) => {
            purposeIds.add(_PurposeRestriction_js__WEBPACK_IMPORTED_MODULE_0__.PurposeRestriction.unHash(hash).purposeId);
        });
        return Array.from(purposeIds);
    }
    /**
     * remove - removes Vendor ID from a Purpose Restriction
     *
     * @param {number} vendorId
     * @param {PurposeRestriction} purposeRestriction
     * @return {void}
     */
    remove(vendorId, purposeRestriction) {
        const hash = purposeRestriction.hash;
        const bst = this.map.get(hash);
        if (bst) {
            bst.remove(vendorId);
            // if it's empty let's delete the key so it doesn't show up empty
            if (bst.isEmpty()) {
                this.map.delete(hash);
                this.bitLength = 0;
            }
        }
    }
    /**
     * Essential for being able to determine whether we can actually set a
     * purpose restriction since they have to have a flexible legal basis
     *
     * @param {GVL} value - the GVL instance
     */
    set gvl(value) {
        if (!this.gvl_) {
            this.gvl_ = value;
            /**
             * if we have restrictions set before the gvl is set then we'll have to
             * go through and remove some if they're not valid
             */
            this.map.forEach((bst, hash) => {
                const purposeRestriction = _PurposeRestriction_js__WEBPACK_IMPORTED_MODULE_0__.PurposeRestriction.unHash(hash);
                const vendors = bst.get();
                vendors.forEach((vendorId) => {
                    if (!this.isOkToHave(purposeRestriction.restrictionType, purposeRestriction.purposeId, vendorId)) {
                        bst.remove(vendorId);
                    }
                });
            });
        }
    }
    /**
     * gvl returns local copy of the GVL these restrictions apply to
     *
     * @return {GVL}
     */
    get gvl() {
        return this.gvl_;
    }
    /**
     * isEmpty - whether or not this vector has any restrictions in it
     *
     * @return {boolean}
     */
    isEmpty() {
        return this.map.size === 0;
    }
    ;
    /**
     * numRestrictions - returns the number of Purpose Restrictions.
     *
     * @return {number}
     */
    get numRestrictions() {
        return this.map.size;
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/RestrictionType.js":
/*!********************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/RestrictionType.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RestrictionType: () => (/* binding */ RestrictionType)
/* harmony export */ });
/**
 * if a Vendor has declared flexible purposes (see: [[Vendor]] under
 * `flexiblePurposeIds`) on the Global Vendor List ([[Declarations]]) a CMP may
 * change their legal basis for processing in the encoding.
 */
var RestrictionType;
(function (RestrictionType) {
    /**
     * under no circumstances is this purpose allowed.
     */
    RestrictionType[RestrictionType["NOT_ALLOWED"] = 0] = "NOT_ALLOWED";
    /**
     * if the default declaration is legitimate interest then this flips the purpose to consent in the encoding.
     */
    RestrictionType[RestrictionType["REQUIRE_CONSENT"] = 1] = "REQUIRE_CONSENT";
    /**
     * if the default declaration is consent then this flips the purpose to Legitimate Interest in the encoding.
     */
    RestrictionType[RestrictionType["REQUIRE_LI"] = 2] = "REQUIRE_LI";
})(RestrictionType || (RestrictionType = {}));


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/Segment.js":
/*!************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/Segment.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Segment: () => (/* binding */ Segment)
/* harmony export */ });
var Segment;
(function (Segment) {
    Segment["CORE"] = "core";
    Segment["VENDORS_DISCLOSED"] = "vendorsDisclosed";
    Segment["VENDORS_ALLOWED"] = "vendorsAllowed";
    Segment["PUBLISHER_TC"] = "publisherTC";
})(Segment || (Segment = {}));


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/SegmentIDs.js":
/*!***************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/SegmentIDs.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SegmentIDs: () => (/* binding */ SegmentIDs)
/* harmony export */ });
/* harmony import */ var _Segment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Segment.js */ "./node_modules/@iabtcf/core/lib/mjs/model/Segment.js");

class SegmentIDs {
    /**
     * 0 = default - reserved for core string (does not need to be present in the core string)
     * 1 = OOB vendors disclosed
     * 2 = OOB vendors allowed
     * 3 = PublisherTC
     */
    static ID_TO_KEY = [
        _Segment_js__WEBPACK_IMPORTED_MODULE_0__.Segment.CORE,
        _Segment_js__WEBPACK_IMPORTED_MODULE_0__.Segment.VENDORS_DISCLOSED,
        _Segment_js__WEBPACK_IMPORTED_MODULE_0__.Segment.VENDORS_ALLOWED,
        _Segment_js__WEBPACK_IMPORTED_MODULE_0__.Segment.PUBLISHER_TC,
    ];
    static KEY_TO_ID = {
        [_Segment_js__WEBPACK_IMPORTED_MODULE_0__.Segment.CORE]: 0,
        [_Segment_js__WEBPACK_IMPORTED_MODULE_0__.Segment.VENDORS_DISCLOSED]: 1,
        [_Segment_js__WEBPACK_IMPORTED_MODULE_0__.Segment.VENDORS_ALLOWED]: 2,
        [_Segment_js__WEBPACK_IMPORTED_MODULE_0__.Segment.PUBLISHER_TC]: 3,
    };
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/Vector.js":
/*!***********************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/Vector.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vector: () => (/* binding */ Vector)
/* harmony export */ });
/* harmony import */ var _Cloneable_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Cloneable.js */ "./node_modules/@iabtcf/core/lib/mjs/Cloneable.js");
/* harmony import */ var _errors_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../errors/index.js */ "./node_modules/@iabtcf/core/lib/mjs/errors/index.js");


/**
 * Vector class is like a Set except it keeps track of a max id
 */
class Vector extends _Cloneable_js__WEBPACK_IMPORTED_MODULE_0__.Cloneable {
    /**
     * if this originatd from an encoded string we'll need a place to store the
     * bit length; it can be set and got from here
     */
    bitLength = 0;
    maxId_ = 0;
    set_ = new Set();
    *[Symbol.iterator]() {
        for (let i = 1; i <= this.maxId; i++) {
            yield [i, this.has(i)];
        }
    }
    /**
     * values()
     *
     * @return {IterableIterator<number>} - returns an iterator of the positive
     * values in the set
     */
    values() {
        return this.set_.values();
    }
    /**
     * maxId
     *
     * @return {number} - the highest id in this Vector
     */
    get maxId() {
        return this.maxId_;
    }
    /**
     * get
     *
     * @param {number} id - key for value to check
     * @return {boolean} - value of that key, if never set it will be false
     */
    has(id) {
        /**
         * if it exists in the set we'll return true
         */
        return this.set_.has(id);
    }
    /**
     * unset
     *
     * @param {SingleIDOrCollection} id - id or ids to unset
     * @return {void}
     */
    unset(id) {
        if (Array.isArray(id)) {
            id.forEach((id) => this.unset(id));
        }
        else if (typeof id === 'object') {
            this.unset(Object.keys(id).map((strId) => Number(strId)));
        }
        else {
            this.set_.delete(Number(id));
            /**
             * if bitLength was set before, it must now be unset
             */
            this.bitLength = 0;
            if (id === this.maxId) {
                /**
                 * aww bummer we lost our maxId... now we've got to search through
                 * all the ids and find the biggest one.
                 */
                this.maxId_ = 0;
                this.set_.forEach((id) => {
                    this.maxId_ = Math.max(this.maxId, id);
                });
            }
        }
    }
    isIntMap(item) {
        let result = (typeof item === 'object');
        result = (result && Object.keys(item).every((key) => {
            let itemResult = Number.isInteger(parseInt(key, 10));
            itemResult = (itemResult && this.isValidNumber(item[key].id));
            itemResult = (itemResult && item[key].name !== undefined);
            return itemResult;
        }));
        return result;
    }
    isValidNumber(item) {
        return (parseInt(item, 10) > 0);
    }
    isSet(item) {
        let result = false;
        if (item instanceof Set) {
            result = Array.from(item).every(this.isValidNumber);
        }
        return result;
    }
    /**
     * set - sets an item assumed to be a truthy value by its presence
     *
     * @param {SingleIDOrCollection} item - May be a single id (positive integer)
     * or collection of ids in a set, GVL Int Map, or Array.
     *
     * @return {void}
     */
    set(item) {
        /**
         * strategy here is to just recursively call set if it's a collection until
         * we get to the final integer ID
         */
        if (Array.isArray(item)) {
            item.forEach((item) => this.set(item));
        }
        else if (this.isSet(item)) {
            this.set(Array.from(item));
        }
        else if (this.isIntMap(item)) {
            this.set(Object.keys(item).map((strId) => Number(strId)));
        }
        else if (this.isValidNumber(item)) {
            this.set_.add(item);
            this.maxId_ = Math.max(this.maxId, item);
            /**
             * if bitLength was set before, it must now be unset
             */
            this.bitLength = 0;
        }
        else {
            /**
             * Super not cool to try and set something that's not valid
             */
            throw new _errors_index_js__WEBPACK_IMPORTED_MODULE_1__.TCModelError('set()', item, 'must be positive integer array, positive integer, Set<number>, or IntMap');
        }
    }
    empty() {
        this.set_ = new Set();
    }
    /**
     * forEach - to traverse from id=1 to id=maxId in a sequential non-sparse manner
     *
     *
     * @param {forEachCallback} callback - callback to execute
     * @return {void}
     *
     * @callback forEachCallback
     * @param {boolean} value - whether or not this id exists in the vector
     * @param {number} id - the id number of the current iteration
     */
    forEach(callback) {
        for (let i = 1; i <= this.maxId; i++) {
            callback(this.has(i), i);
        }
    }
    get size() {
        return this.set_.size;
    }
    setAll(intMap) {
        this.set(intMap);
    }
}


/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/ByPurposeVendorMap.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/gvl/ByPurposeVendorMap.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/Declarations.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/gvl/Declarations.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/Feature.js":
/*!****************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/gvl/Feature.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
;



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/GVLMapItem.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/gvl/GVLMapItem.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/IDSetMap.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/gvl/IDSetMap.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/Purpose.js":
/*!****************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/gvl/Purpose.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/Stack.js":
/*!**************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/gvl/Stack.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/Vendor.js":
/*!***************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/gvl/Vendor.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/VendorList.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/gvl/VendorList.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/gvl/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ByPurposeVendorMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ByPurposeVendorMap.js */ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/ByPurposeVendorMap.js");
/* harmony import */ var _Declarations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Declarations.js */ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/Declarations.js");
/* harmony import */ var _Feature_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Feature.js */ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/Feature.js");
/* harmony import */ var _GVLMapItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./GVLMapItem.js */ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/GVLMapItem.js");
/* harmony import */ var _IDSetMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IDSetMap.js */ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/IDSetMap.js");
/* harmony import */ var _Purpose_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Purpose.js */ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/Purpose.js");
/* harmony import */ var _Stack_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Stack.js */ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/Stack.js");
/* harmony import */ var _Vendor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Vendor.js */ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/Vendor.js");
/* harmony import */ var _VendorList_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VendorList.js */ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/VendorList.js");
// created from 'create-ts-index'











/***/ }),

/***/ "./node_modules/@iabtcf/core/lib/mjs/model/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@iabtcf/core/lib/mjs/model/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BinarySearchTree: () => (/* reexport safe */ _BinarySearchTree_js__WEBPACK_IMPORTED_MODULE_0__.BinarySearchTree),
/* harmony export */   ConsentLanguages: () => (/* reexport safe */ _ConsentLanguages_js__WEBPACK_IMPORTED_MODULE_1__.ConsentLanguages),
/* harmony export */   DeviceDisclosureStorageAccessType: () => (/* reexport safe */ _DeviceDisclosureStorageAccessType_js__WEBPACK_IMPORTED_MODULE_7__.DeviceDisclosureStorageAccessType),
/* harmony export */   Fields: () => (/* reexport safe */ _Fields_js__WEBPACK_IMPORTED_MODULE_2__.Fields),
/* harmony export */   PurposeRestriction: () => (/* reexport safe */ _PurposeRestriction_js__WEBPACK_IMPORTED_MODULE_5__.PurposeRestriction),
/* harmony export */   PurposeRestrictionVector: () => (/* reexport safe */ _PurposeRestrictionVector_js__WEBPACK_IMPORTED_MODULE_6__.PurposeRestrictionVector),
/* harmony export */   RestrictionType: () => (/* reexport safe */ _RestrictionType_js__WEBPACK_IMPORTED_MODULE_9__.RestrictionType),
/* harmony export */   Segment: () => (/* reexport safe */ _Segment_js__WEBPACK_IMPORTED_MODULE_10__.Segment),
/* harmony export */   SegmentIDs: () => (/* reexport safe */ _SegmentIDs_js__WEBPACK_IMPORTED_MODULE_11__.SegmentIDs),
/* harmony export */   Vector: () => (/* reexport safe */ _Vector_js__WEBPACK_IMPORTED_MODULE_12__.Vector)
/* harmony export */ });
/* harmony import */ var _BinarySearchTree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BinarySearchTree.js */ "./node_modules/@iabtcf/core/lib/mjs/model/BinarySearchTree.js");
/* harmony import */ var _ConsentLanguages_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConsentLanguages.js */ "./node_modules/@iabtcf/core/lib/mjs/model/ConsentLanguages.js");
/* harmony import */ var _Fields_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fields.js */ "./node_modules/@iabtcf/core/lib/mjs/model/Fields.js");
/* harmony import */ var _IntMap_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IntMap.js */ "./node_modules/@iabtcf/core/lib/mjs/model/IntMap.js");
/* harmony import */ var _KeyMap_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./KeyMap.js */ "./node_modules/@iabtcf/core/lib/mjs/model/KeyMap.js");
/* harmony import */ var _PurposeRestriction_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PurposeRestriction.js */ "./node_modules/@iabtcf/core/lib/mjs/model/PurposeRestriction.js");
/* harmony import */ var _PurposeRestrictionVector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PurposeRestrictionVector.js */ "./node_modules/@iabtcf/core/lib/mjs/model/PurposeRestrictionVector.js");
/* harmony import */ var _DeviceDisclosureStorageAccessType_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DeviceDisclosureStorageAccessType.js */ "./node_modules/@iabtcf/core/lib/mjs/model/DeviceDisclosureStorageAccessType.js");
/* harmony import */ var _DeviceDisclosure_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./DeviceDisclosure.js */ "./node_modules/@iabtcf/core/lib/mjs/model/DeviceDisclosure.js");
/* harmony import */ var _RestrictionType_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./RestrictionType.js */ "./node_modules/@iabtcf/core/lib/mjs/model/RestrictionType.js");
/* harmony import */ var _Segment_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Segment.js */ "./node_modules/@iabtcf/core/lib/mjs/model/Segment.js");
/* harmony import */ var _SegmentIDs_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SegmentIDs.js */ "./node_modules/@iabtcf/core/lib/mjs/model/SegmentIDs.js");
/* harmony import */ var _Vector_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Vector.js */ "./node_modules/@iabtcf/core/lib/mjs/model/Vector.js");
/* harmony import */ var _gvl_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./gvl/index.js */ "./node_modules/@iabtcf/core/lib/mjs/model/gvl/index.js");
















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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iabtcf_cmpapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iabtcf/cmpapi */ "./node_modules/@iabtcf/cmpapi/lib/mjs/index.js");
/* harmony import */ var _iabtcf_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iabtcf/core */ "./node_modules/@iabtcf/core/lib/mjs/index.js");
/* harmony import */ var _ccpa_src_uspapi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ccpa/src/uspapi.js */ "./ccpa/src/uspapi.js");
/**
 * Resources
 * https://github.com/InteractiveAdvertisingBureau/iabtcf-es
 * */



const cmplzCMP = 332;
const cmplzCMPVersion = 1;
const cmplzIsServiceSpecific = cmplz_tcf.isServiceSpecific == 1 ? true : false;
const cmplzExistingLanguages = ['gl', 'eu', 'bg', 'ca', 'cs', 'da', 'de', 'el', 'es', 'et', 'fi', 'fr', 'hr', 'hu', 'it', 'ja', 'lt', 'lv', 'mt', 'nl', 'no', 'pl', 'pt', 'ro', 'ru', 'sk', 'sl', 'sr', 'sv', 'tr', 'zh'];
var langCount = cmplzExistingLanguages.length;
let cmplz_html_lang_attr = document.documentElement.lang.length ? document.documentElement.lang.toLowerCase() : 'en';
let cmplzLanguage = 'en';
for (var i = 0; i < langCount; i++) {
  var cmplzLocale = cmplzExistingLanguages[i];
  if (cmplz_html_lang_attr.indexOf(cmplzLocale) != -1) {
    cmplzLanguage = cmplzLocale;
    break;
  }
}
if (cmplzLanguage === 'eu') cmplzLanguage = 'eus';
let cmplzLanguageJson;
let onOptOutPolicyPage = document.getElementById('cmplz-tcf-us-vendor-container') !== null;
let onOptInPolicyPage = document.getElementById('cmplz-tcf-vendor-container') !== null;
/**
 * initialize the __tcfapi function and post message
 * https://github.com/InteractiveAdvertisingBureau/iabtcf-es/tree/master/modules/stub
 */

let purposesUrl = cmplz_tcf.cmp_url + 'cmp/vendorlist' + '/purposes-' + cmplzLanguage + '.json';
if (!cmplzExistingLanguages.includes(cmplzLanguage)) {
  cmplzLanguage = 'en';
  purposesUrl = cmplz_tcf.cmp_url + 'cmp/vendorlist' + '/vendor-list.json';
}

/**
 * Create an element
 * @param el
 * @param content
 * @returns {*}
 */
function create_element(el, content) {
  let obj = document.createElement(el);
  obj.innerHtml = content;
  return obj;
}

/**
 * Get a cookie by name
 * @param name
 * @returns {string}
 */

function cmplz_tcf_get_cookie(name) {
  if (typeof document === "undefined") {
    return "";
  }
  name = complianz.prefix + name;
  const value = "; " + document.cookie;
  const parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
  return "";
}

/**
 * Add an event
 * @param event
 * @param selector
 * @param callback
 * @param context
 */
function cmplz_tcf_add_event(event, selector, callback, context) {
  document.addEventListener(event, e => {
    if (e.target.closest(selector)) {
      callback(e);
    }
  });
}

/**
 * Check if the element is hidden
 * @param el
 * @returns {boolean}
 */
function is_hidden(el) {
  return el.offsetParent === null;
}
var bannerDataLoadedResolve;
var tcModelLoadedResolve;
var tcfLanguageLoadedResolve;
var bannerLoadedResolve;
var revokeResolve;
var bannerDataLoaded = new Promise(function (resolve, reject) {
  bannerDataLoadedResolve = resolve;
});
var tcModelLoaded = new Promise(function (resolve, reject) {
  tcModelLoadedResolve = resolve;
});
var tcfLanguageLoaded = new Promise(function (resolve, reject) {
  tcfLanguageLoadedResolve = resolve;
});
var bannerLoaded = new Promise(function (resolve, reject) {
  bannerLoadedResolve = resolve;
});
var revoke = new Promise(function (resolve, reject) {
  revokeResolve = resolve;
});
fetch(purposesUrl, {
  method: "GET"
}).then(response => response.json()).then(function (data) {
  cmplzLanguageJson = data;
  tcfLanguageLoadedResolve();
});
document.addEventListener('wp_consent_type_defined', function (e) {
  bannerDataLoadedResolve();
});
document.addEventListener('cmplz_cookie_warning_loaded', function (e) {
  if (!complianz.disable_cookiebanner) {
    bannerLoadedResolve();
  }
});
document.addEventListener('cmplz_revoke', function (e) {
  const reload = e.detail;
  revokeResolve(reload);
});
bannerDataLoaded.then(() => {});
tcfLanguageLoaded.then(() => {
  _iabtcf_core__WEBPACK_IMPORTED_MODULE_1__.GVL.baseUrl = cmplz_tcf.cmp_url + "cmp/vendorlist";
  let gvl = new _iabtcf_core__WEBPACK_IMPORTED_MODULE_1__.GVL(cmplzLanguageJson);
  let sourceGvl = gvl.clone();
  let tcModel = new _iabtcf_core__WEBPACK_IMPORTED_MODULE_1__.TCModel(gvl);
  tcModel.publisherCountryCode = cmplz_tcf.publisherCountryCode;
  tcModel.version = 2;
  tcModel.cmpId = cmplzCMP;
  tcModel.cmpVersion = cmplzCMPVersion;
  tcModel.isServiceSpecific = cmplzIsServiceSpecific;
  tcModel.UseNonStandardStacks = 0; //A CMP that services multiple publishers sets this value to 0
  const cmpApi = new _iabtcf_cmpapi__WEBPACK_IMPORTED_MODULE_0__.CmpApi(cmplzCMP, cmplzCMPVersion, cmplzIsServiceSpecific); //Whether the signals encoded in this TC String were from service-specific storage (true) versus ‘global’ consensu.org shared storage (false).
  const storedTCString = cmplzGetTCString();

  /**
   * After banner data is fully loaded
   */

  tcModel.gvl.readyPromise.then(() => {
    const json = tcModel.gvl.getJson();
    let vendors = json.vendors;
    let vendorIds = cmplzFilterVendors(vendors);
    tcModel.gvl.narrowVendorsTo(vendorIds);
    //update model with given consents
    try {
      tcModel = _iabtcf_core__WEBPACK_IMPORTED_MODULE_1__.TCString.decode(storedTCString, tcModel);
    } catch (err) {}
    tcModelLoadedResolve();
  });
  Promise.all([bannerDataLoaded, tcModelLoaded]).then(() => {
    insertVendorsInPolicy(tcModel.gvl.vendors);
    if (complianz.consenttype === 'optin') {
      if (cmplz_tcf.debug) console.log(tcModel);
      var date = new Date();
      /**
       * If the TC String was created over a year ago, we clear it.
       */
      if (Date.parse(tcModel.created) < date.getTime() - 365 * 24 * 60 * 60 * 1000) {
        cmplzSetTCString(null, cmplzUIVisible());
      } else {
        cmplzSetTCString(tcModel, cmplzUIVisible());
      }
    } else {
      if (cmplz_tcf.debug) console.log("not an optin tcf region");
      cmplzSetTCString(null, false);
    }
  });
  Promise.all([bannerLoaded, tcModelLoaded, tcfLanguageLoaded]).then(() => {
    configureOptinBanner();
  });
  revoke.then(reload => {
    if (cmplz_is_tcf_region(complianz.region)) {
      revokeAllVendors(reload);
    }
  });

  /**
   * When the marketing is accepted, make sure all vendors are allowed
   */

  document.addEventListener("cmplz_fire_categories", function (e) {
    //skip if not gdpr
    if (complianz.consenttype !== 'optin') {
      return;
    }
    if (cmplz_in_array('marketing', e.detail.categories)) {
      acceptAllVendors();
    }
  });

  /**
   * Accept all vendors
   */
  function acceptAllVendors() {
    cmplzSetAllVendorLegitimateInterests();
    tcModel.setAllPurposeLegitimateInterests();
    for (var key in cmplz_tcf.purposes) {
      tcModel.purposeConsents.set(cmplz_tcf.purposes[key]);
      cmplzSetTypeByVendor('purpose_legitimate_interest', cmplz_tcf.purposes[key]);
    }
    tcModel.setAllSpecialFeatureOptins();
    for (var key in cmplz_tcf.specialFeatures) {
      tcModel.specialFeatureOptins.set(cmplz_tcf.specialFeatures[key]);
      cmplzSetTypeByVendor('specialfeature', cmplz_tcf.specialFeatures[key]);
    }
    tcModel.setAllPurposeConsents();
    for (var key in cmplz_tcf.purposes) {
      tcModel.purposeConsents.set(cmplz_tcf.purposes[key]);
      cmplzSetTypeByVendor('purpose_consent', cmplz_tcf.purposes[key]);
    }
    tcModel.setAllVendorConsents();
    document.querySelectorAll('.cmplz-tcf-input').forEach(checkbox => {
      checkbox.checked = true;
    });
    cmplzSetTCString(tcModel, cmplzUIVisible());
    cmplz_set_cookie('banner-status', 'dismissed');
  }

  /**
   * Revoke all vendors
   * @param reload
   */
  function revokeAllVendors(reload) {
    //legint should be handled by right to object checkbox in vendor overview.
    // tcModel.unsetAllVendorLegitimateInterests();
    tcModel.unsetAllPurposeLegitimateInterests();
    cmplzUnsetAllVendorLegitimateInterests();
    for (var key in cmplz_tcf.specialFeatures) {
      tcModel.specialFeatureOptins.set(cmplz_tcf.specialFeatures[key]);
      cmplzUnsetTypeByVendor('specialfeature', cmplz_tcf.specialFeatures[key]);
    }
    for (var key in cmplz_tcf.purposes) {
      tcModel.purposeConsents.set(cmplz_tcf.purposes[key]);
      cmplzUnsetTypeByVendor('purpose_consent', cmplz_tcf.purposes[key]);
    }
    tcModel.unsetAllVendorConsents();
    document.querySelectorAll('.cmplz-tcf-input').forEach(checkbox => {
      if (!checkbox.disabled) checkbox.checked = false;
    });
    cmplzSetTCString(tcModel, cmplzUIVisible());
    cmplz_set_cookie('banner-status', 'dismissed');
    if (reload) {
      location.reload();
    }
  }

  /**
   * Set all legitimate interests, except when a vendor does not have legints or special purposes.
   */
  function cmplzSetAllVendorLegitimateInterests() {
    tcModel.setAllVendorLegitimateInterests();
    for (var key in tcModel.gvl.vendors) {
      var vendor = tcModel.gvl.vendors[key];
      /**
       * no legint, and no special purposes, set legint signal to 0.
       */
      if (vendor.legIntPurposes.length == 0 && vendor.specialPurposes.length == 0) {
        tcModel.vendorLegitimateInterests.unset(vendor.id);
      }
    }
  }

  /**
   * Set all purpose legint that are currently used
   */
  function cmplzSetAllPurposeLegitimateInterests() {
    const purposes = cmplzIABfilterArray(cmplzLanguageJson.purposes, cmplz_tcf.purposes);
    for (var key in purposes) {
      const purpose = purposes[key];
      tcModel.purposeLegitimateInterests.set(purpose.id);
    }
  }

  /**
   * UnSet all legitimate interests, except when a vendor does not have legints or special purposes.
   */
  function cmplzUnsetAllVendorLegitimateInterests() {
    tcModel.unsetAllVendorLegitimateInterests();
    for (var key in tcModel.gvl.vendors) {
      var vendor = tcModel.gvl.vendors[key];
      /**
       * If a vendor only has special purposes, and no other purposes, there's no right to object.
       */
      if (vendor.legIntPurposes.length == 0 && vendor.purposes.length == 0 && vendor.flexiblePurposes.length == 0 && vendor.specialFeatures.length == 0 && vendor.specialPurposes.length != 0) {
        tcModel.vendorLegitimateInterests.set(vendor.id);
      }
    }
  }

  /**
   * If a purpose has been selected/deselected, we need to re-check for al vendors if this has consenquences for legint
   */
  function cmplzUpdateAllVendorLegitimateInterests() {
    for (var key in tcModel.gvl.vendors) {
      var vendor = tcModel.gvl.vendors[key];

      /**
       * no legint, and no special purposes, set legint signal to 0.
       */
      if (vendor.legIntPurposes.length == 0 && vendor.specialPurposes.length == 0) {
        tcModel.vendorLegitimateInterests.unset(vendor.id);
      }
      if (vendor.legIntPurposes.length == 0 && vendor.purposes.length == 0 && vendor.flexiblePurposes.length == 0 && vendor.specialFeatures.length == 0 && vendor.specialPurposes.length != 0) {
        tcModel.vendorLegitimateInterests.set(vendor.id);
      }
    }
  }

  /**
   * We use this method to keep track of consents per vendor. This is not stored in the core tcString
   *
   * @param type
   * @param typeId
   */
  function cmplzSetTypeByVendor(type, typeId) {
    if (type === 'purpose_consent') {
      tcModel.purposeConsents.set(typeId);
      for (var key in tcModel.gvl.vendors) {
        var vendor = tcModel.gvl.vendors[key];
        if (sourceGvl.vendors[vendor.id].purposes.includes(typeId) && !vendor.purposes.includes(typeId)) {
          tcModel.gvl.vendors[vendor.id].purposes.push(typeId);
        }
      }
    }
    if (type === 'purpose_legitimate_interest') {
      tcModel.purposeLegitimateInterests.set(typeId);
      for (var key in tcModel.gvl.vendors) {
        var vendor = tcModel.gvl.vendors[key];
        if (sourceGvl.vendors[vendor.id].purposes.includes(typeId) && !vendor.purposes.includes(typeId)) {
          tcModel.gvl.vendors[vendor.id].purposes.push(typeId);
        }
      }
    }
    if (type === 'specialfeature') {
      tcModel.specialFeatureOptins.set(typeId);
      for (var key in tcModel.gvl.vendors) {
        var vendor = tcModel.gvl.vendors[key];
        if (sourceGvl.vendors[vendor.id].specialFeatures.includes(typeId) && !vendor.specialFeatures.includes(typeId)) {
          tcModel.gvl.vendors[vendor.id].specialFeatures.push(typeId);
        }
      }
    }
    if (type === 'feature') {
      for (var key in tcModel.gvl.vendors) {
        var vendor = tcModel.gvl.vendors[key];
        if (sourceGvl.vendors[vendor.id].features.includes(typeId) && !vendor.features.includes(typeId)) {
          tcModel.gvl.vendors[vendor.id].features.push(typeId);
        }
      }
    }
  }
  function cmplzUnsetTypeByVendor(type, typeId) {
    if (type === 'purpose_consent') {
      tcModel.purposeConsents.unset(typeId);
      for (var key in tcModel.gvl.vendors) {
        var vendor = tcModel.gvl.vendors[key];
        let index = vendor.purposes.indexOf(typeId);
        if (index > -1) {
          tcModel.gvl.vendors[vendor.id].purposes.splice(index, 1);
        }
      }
    }
    if (type === 'purpose_legitimate_interest') {
      tcModel.purposeLegitimateInterests.unset(typeId);
      for (var key in tcModel.gvl.vendors) {
        var vendor = tcModel.gvl.vendors[key];
        let index = vendor.legIntPurposes.indexOf(typeId);
        if (index > -1) {
          tcModel.gvl.vendors[vendor.id].legIntPurposes.splice(index, 1);
        }
      }
    }
    if (type === 'specialfeature') {
      tcModel.specialFeatureOptins.unset(typeId);
      for (var key in tcModel.gvl.vendors) {
        var vendor = tcModel.gvl.vendors[key];
        const index = vendor.specialFeatures.indexOf(typeId);
        if (index > -1) {
          tcModel.gvl.vendors[vendor.id].specialFeatures.splice(index, 1);
        }
      }
    }
    if (type === 'feature') {
      for (var key in tcModel.gvl.vendors) {
        var vendor = tcModel.gvl.vendors[key];
        const index = vendor.features.indexOf(typeId);
        if (index > -1) {
          tcModel.gvl.vendors[vendor.id].features.splice(index, 1);
        }
      }
    }
  }

  /**
   * When revoke button is clicked, so banner shows again
   *
   */

  cmplz_tcf_add_event('click', '.cmplz-manage-consent', function () {
    const storedTCString = cmplzGetTCString();
    cmpApi.update(storedTCString, true); //just got the banner to show again, so we have to pass ui visible true
  });

  /**
   * Create a checkbox, clickable
   * @param type
   * @param object
   * @param container
   * @param checked
   * @param disabled
   */
  function cmplzRenderCheckbox(type, object, container, checked, disabled) {
    let template = document.getElementById('cmplz-tcf-type-template').innerHTML;
    let description = object.descriptionLegal;
    const descArr = description.split('*');
    let header = descArr[0];
    descArr.splice(0, 1);
    description = header + '<ul><li>' + descArr.join('</li><li>') + '</li></ul>';
    template = template.replace(/{type_name}/g, object.name);
    template = template.replace(/{type_description}/g, description);
    template = template.replace(/{type_id}/g, object.id);
    template = template.replace(/{type}/g, type);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = template;
    const checkbox = wrapper.firstChild;
    checkbox.querySelector('.cmplz-tcf-' + type + '-input').checked = checked;
    checkbox.querySelector('.cmplz-tcf-' + type + '-input').disabled = disabled;
    checkbox.querySelector('.cmplz-tcf-' + type + '-input').setAttribute('data-' + type + '_id', object.id);
    var fragment = document.createDocumentFragment();
    fragment.appendChild(checkbox);
    container.appendChild(checkbox);
  }

  /**
   * Generate entire block of checkboxes with event listener
   * @param type
   * @param objects
   * @param filterBy
   */

  function generateTypeBlock(type, objects, filterBy) {
    let containerid = type;
    let srcPurposes;
    if (filterBy !== false) {
      containerid = filterBy + '-' + containerid;
      srcPurposes = cmplzGetPurposes(filterBy, false);
    }
    const container = document.getElementById('cmplz-tcf-' + containerid + 's-container');
    if (container === null) {
      return;
    }
    container.innerHTML = '';
    for (var key in objects) {
      if (objects.hasOwnProperty(key)) {
        const object = objects[key];
        let addItem = true;
        if (filterBy) {
          if (!srcPurposes.includes(object.id)) {
            addItem = false;
          }
        }
        if (addItem) {
          const object = objects[key];
          let checked = false;
          let disabled = false;
          if (type === 'purpose_consent') {
            checked = tcModel.purposeConsents.has(object.id);
          }
          if (type === 'purpose_legitimate_interest') {
            checked = tcModel.purposeLegitimateInterests.has(object.id);
          }
          if (type === 'specialfeature') {
            checked = tcModel.specialFeatureOptins.has(object.id);
          }
          if (type === 'feature') {
            checked = true;
            disabled = true;
          }
          if (type === 'specialpurpose') {
            checked = true;
            disabled = true;
          }
          cmplzRenderCheckbox(type, object, container, checked, disabled);
        }
      }
    }

    //add event listener
    cmplz_tcf_add_event("click", '.cmplz-tcf-' + type + '-input', function (e) {
      let obj = e.target;
      const typeId = parseInt(obj.getAttribute('data-' + type + '_id'));
      if (obj.checked) {
        //set all of this id to checked
        document.querySelectorAll('[data-' + type + '_id="' + typeId + '"]').forEach(obj => {
          obj.checked = true;
        });
        if (type === 'purpose_consent') {
          tcModel.purposeConsents.set(typeId);
        }
        if (type === 'purpose_legitimate_interest') {
          tcModel.purposeLegitimateInterests.set(typeId);
        }
        if (type === 'specialfeature') {
          tcModel.specialFeatureOptins.set(typeId);
        }
        cmplzSetTypeByVendor(type, typeId);
      } else {
        //set all of this id to unchecked
        document.querySelectorAll('[data-' + type + '_id="' + typeId + '"]').forEach(obj => {
          obj.checked = false;
        });
        if (type === 'purpose_consent') {
          tcModel.purposeConsents.unset(typeId);
        }
        if (type === 'purpose_legitimate_interest') {
          tcModel.purposeLegitimateInterests.unset(typeId);
        }
        if (type === 'specialfeature') {
          tcModel.specialFeatureOptins.unset(typeId);
        }
        cmplzUnsetTypeByVendor(type, typeId);
      }
      cmplzUpdateAllVendorLegitimateInterests();
      cmplzSetTCString(tcModel, true);
    });
    cmplz_tcf_add_event("click", '.cmplz-tcf-toggle', function (e) {
      let obj = e.target;
      e.preventDefault();
      let label = obj.closest('label');
      let description = label.querySelector('.cmplz-tcf-type-description');
      if (is_hidden(description)) {
        obj.classList.add('cmplz-tcf-rl');
        obj.classList.remove('cmplz-tcf-rm');
        description.style.display = 'block';
      } else {
        obj.classList.add('cmplz-tcf-rm');
        obj.classList.remove('cmplz-tcf-rl');
        description.style.display = 'none';
      }
    });
  }
  function cmplzUIVisible() {
    let bannerVisible = true;
    const bannerStatus = cmplz_tcf_get_cookie('banner-status');
    if (bannerStatus === 'dismissed') {
      bannerVisible = false;
    }
    const policyVisible = document.getElementById('cmplz-tcf-vendor-container') !== null;
    return bannerVisible || policyVisible;
  }

  /**
   * Create a list of checkable vendors in the cookie policy
   * @param vendors
   */

  function insertVendorsInPolicy(vendors) {
    const vendorContainer = document.getElementById('cmplz-tcf-vendor-container');
    if (vendorContainer === null) {
      return;
    }
    vendorContainer.innerHTML = '';
    const template = document.getElementById('cmplz-tcf-vendor-template').innerHTML;
    const purposes = cmplzIABfilterArray(cmplzLanguageJson.purposes, cmplz_tcf.purposes);
    const specialPurposes = cmplzIABfilterArray(cmplzLanguageJson.specialPurposes, cmplz_tcf.specialPurposes);
    const features = cmplzIABfilterArray(cmplzLanguageJson.features, cmplz_tcf.features);
    const specialFeatures = cmplzIABfilterArray(cmplzLanguageJson.specialFeatures, cmplz_tcf.specialFeatures);
    generateTypeBlock('purpose_consent', purposes, 'statistics');
    generateTypeBlock('purpose_consent', purposes, 'marketing');
    generateTypeBlock('purpose_legitimate_interest', purposes, 'statistics');
    generateTypeBlock('purpose_legitimate_interest', purposes, 'marketing');
    generateTypeBlock('feature', features, false);
    generateTypeBlock('specialpurpose', specialPurposes, false);
    generateTypeBlock('specialfeature', specialFeatures, false);
    if (specialFeatures.length == 0) {
      document.getElementById('cmplz-tcf-specialfeatures-wrapper').style.display = 'none';
    }
    for (var key in vendors) {
      if (vendors.hasOwnProperty(key)) {
        let customTemplate = template;
        const vendor = vendors[key];
        const vendorPurposes = vendor.purposes + vendor.legIntPurposes;
        let purposeString = '';
        for (var p_key in vendorPurposes) {
          if (vendorPurposes.hasOwnProperty(p_key)) {
            let purposeName = false;
            for (var src_p_key in purposes) {
              if (purposes.hasOwnProperty(src_p_key)) {
                if (purposes[src_p_key].id == vendorPurposes[p_key]) {
                  purposeName = purposes[src_p_key].name;
                }
              }
            }
            if (purposeName) {
              const purposeLink = 'https://cookiedatabase.org/tcf/' + purposeName.replace(/ /g, '-').replace(/\//g, '-').toLowerCase();
              purposeString += '<div class="cmplz-tcf-purpose"><a href="' + purposeLink + '" target="_blank" rel="noopener noreferrer nofollow">' + purposeName + '</a></div>';
            }
          }
        }
        var retentionInDays = Math.round(vendor.cookieMaxAgeSeconds / (60 * 60 * 24));
        //if result is 0, get day in decimals.
        customTemplate = customTemplate.replace(/{cookie_retention_seconds}/g, vendor.cookieMaxAgeSeconds);
        customTemplate = customTemplate.replace(/{cookie_retention_days}/g, retentionInDays);
        customTemplate = customTemplate.replace(/{vendor_name}/g, vendor.name);
        customTemplate = customTemplate.replace(/{vendor_id}/g, vendor.id);
        customTemplate = customTemplate.replace(/{purposes}/g, purposeString);
        customTemplate = customTemplate.replace(/{privacy_policy}/g, vendor.policyUrl);
        const wrapper = document.createElement('div');
        wrapper.innerHTML = customTemplate;
        const checkbox = wrapper.firstChild;
        checkbox.querySelector('.cmplz-tcf-vendor-input').checked = tcModel.vendorConsents.has(vendor.id) || tcModel.vendorLegitimateInterests.has(vendor.id);
        checkbox.querySelector('.cmplz-tcf-vendor-input').setAttribute('data-vendor_id', vendor.id);

        //set consent
        checkbox.querySelector('.cmplz-tcf-consent-input').checked = tcModel.vendorConsents.has(vendor.id);
        checkbox.querySelector('.cmplz-tcf-consent-input').setAttribute('data-vendor_id', vendor.id);

        //show legint option if vendor has legintpurposes
        if (vendor.legIntPurposes.length != 0) {
          checkbox.querySelector('.cmplz_tcf_legitimate_interest_checkbox').style.display = 'block';
          checkbox.querySelector('.cmplz-tcf-legitimate-interest-input').setAttribute('data-vendor_id', vendor.id);
          checkbox.querySelector('.cmplz-tcf-legitimate-interest-input').checked = tcModel.vendorLegitimateInterests.has(vendor.id);
        }

        //handle non cookie access
        if (vendor.usesNonCookieAccess) {
          wrapper.querySelector('.non-cookie-storage-active').style.display = 'block';
        } else {
          wrapper.querySelector('.non-cookie-storage-inactive').style.display = 'block';
        }
        if (vendor.cookieRefresh) {
          wrapper.querySelector('.non-cookie-refresh-active').style.display = 'block';
        } else {
          wrapper.querySelector('.non-cookie-refresh-inactive').style.display = 'block';
        }
        if (vendor.cookieMaxAgeSeconds <= 0) {
          wrapper.querySelector('.session-storage').style.display = 'block';
        } else if (vendor.cookieMaxAgeSeconds <= 60 * 60 * 24) {
          wrapper.querySelector('.retention_seconds').style.display = 'block';
        } else {
          wrapper.querySelector('.retention_days').style.display = 'block';
        }
        var fragment = document.createDocumentFragment();
        fragment.appendChild(checkbox);
        vendorContainer.appendChild(checkbox);
      }
    }
    cmplz_tcf_add_event("click", '.cmplz-tcf-legitimate-interest-input', function (e) {
      let obj = e.target;
      const vendorId = parseInt(obj.getAttribute('data-vendor_id'));
      if (obj.checked) {
        tcModel.vendorLegitimateInterests.set(vendorId);
        let container = obj.closest('.cmplz-tcf-vendor-container');
        container.querySelector('.cmplz-tcf-vendor-input').checked = true;
      } else {
        tcModel.vendorLegitimateInterests.unset(vendorId);
      }
      cmplzSetTCString(tcModel, true);
      cmplz_set_cookie('banner-status', 'dismissed');
    });
    cmplz_tcf_add_event("click", '.cmplz-tcf-consent-input', function (e) {
      let obj = e.target;
      const vendorId = parseInt(obj.getAttribute('data-vendor_id'));
      if (obj.checked) {
        tcModel.vendorConsents.set(vendorId);
        let container = obj.closest('.cmplz-tcf-vendor-container');
        container.querySelector('.cmplz-tcf-vendor-input').prop('checked', true);
      } else {
        tcModel.vendorConsents.unset(vendorId);
      }
      //now we update the tcstring
      cmplzSetTCString(tcModel, true);
      cmplz_set_cookie('banner-status', 'dismissed');
    });
    cmplz_tcf_add_event("click", '.cmplz-tcf-vendor-input', function (e) {
      let obj = e.target;
      const vendorId = parseInt(obj.getAttribute('data-vendor_id'));
      let container = obj.closest('.cmplz-tcf-vendor-container');
      if (obj.checked) {
        tcModel.vendorConsents.set(vendorId);
        //positive leg int should not be set.
        tcModel.vendorLegitimateInterests.set(vendorId);
        container.querySelector('.cmplz-tcf-legitimate-interest-input').checked = true;
        container.querySelector('.cmplz-tcf-consent-input').checked = true;
      } else {
        tcModel.vendorConsents.unset(vendorId);
        tcModel.vendorLegitimateInterests.unset(vendorId);
        container.querySelector('.cmplz-tcf-legitimate-interest-input').checked = false;
        container.querySelector('.cmplz-tcf-consent-input').checked = false;
      }
      cmplzSetTCString(tcModel, true);
      cmplz_set_cookie('banner-status', 'dismissed');
    });
    cmplz_tcf_add_event("click", '.cmplz-tcf-toggle-info', function (e) {
      let obj = e.target;
      e.preventDefault();
      if (is_hidden()) {
        obj.style.display = 'block';
      } else {
        obj.style.display = 'none';
      }
    });
    cmplz_tcf_add_event("click", '.cmplz-tcf-toggle-vendor', function (e) {
      let obj = e.target;
      e.preventDefault();
      const container = obj.closest('.cmplz-tcf-vendor-container');
      const info = container.querySelector('.cmplz-tcf-info');
      if (is_hidden(info)) {
        obj.classList.add('cmplz-tcf-rl');
        obj.classList.remove('cmplz-tcf-rm');
        info.style.display = 'block';
      } else {
        obj.classList.add('cmplz-tcf-rm');
        obj.classList.remove('cmplz-tcf-rl');
        info.style.display = 'none';
      }
    });
    cmplz_tcf_add_event("click", "#cmplz-tcf-selectall", function () {
      for (var key in vendors) {
        if (vendors.hasOwnProperty(key)) {
          const vendor = vendors[key];
          tcModel.vendorConsents.set(vendor.id);
          document.querySelector('#cmplz-tcf-' + vendor.id).checked = true;
        }
      }
      const vendorCheckboxes = document.querySelectorAll('[data-vendor_id]');
      vendorCheckboxes.forEach(vendorCheckbox => {
        vendorCheckbox.checked = true;
      });
      acceptAllVendors();
    });
    cmplz_tcf_add_event("click", "#cmplz-tcf-deselectall", function () {
      for (var key in vendors) {
        if (vendors.hasOwnProperty(key)) {
          const vendor = vendors[key];
          tcModel.vendorConsents.unset(vendor.id);
          document.querySelector('#cmplz-tcf-' + vendor.id).checked = false;
        }
      }
      revokeAllVendors(true);
    });
    let event = new CustomEvent('cmplz_vendor_container_loaded', {
      detail: complianz.region
    });
    document.dispatchEvent(event);
  }

  /**
   * Filter the list of vendors
   *
   * @param vendors
   * @returns {*}
   */
  function cmplzFilterVendors(vendors) {
    let vendorIds = [];
    for (var key in vendors) {
      if (vendors.hasOwnProperty(key)) {
        const vendor = vendors[key];
        // if (vendor.id==755 || vendor.legIntPurposes.length==0){
        vendorIds.push(vendor.id);
        // }
      }
    }

    let addVendorIds = cmplzFilterVendorsBy('purposes', vendors, cmplz_tcf.purposes);
    vendorIds = vendorIds.filter(value => addVendorIds.includes(value));
    addVendorIds = cmplzFilterVendorsBy('specialPurposes', vendors, cmplz_tcf.specialPurposes);
    vendorIds = vendorIds.filter(value => addVendorIds.includes(value));
    addVendorIds = cmplzFilterVendorsBy('features', vendors, cmplz_tcf.features);
    vendorIds = vendorIds.filter(value => addVendorIds.includes(value));
    addVendorIds = cmplzFilterVendorsBy('specialFeatures', vendors, cmplz_tcf.specialFeatures);
    vendorIds = vendorIds.filter(value => addVendorIds.includes(value));
    return vendorIds;
  }

  /**
   * Get vendors who only have one of these purposes
   * @param vendors
   * @param category_purposes
   * @returns {[]}
   */
  function cmplzFilterVendorsBy(type, vendors, category_purposes) {
    let output = [];
    for (var key in vendors) {
      if (vendors.hasOwnProperty(key)) {
        const vendor = vendors[key];
        //for each vendor purpose, check if it exists in the category purposes list. If not, don't add this vendor
        let allPurposesAreCategoryPurpose = true;
        const vendorProperties = vendor[type];
        for (var p_key in vendorProperties) {
          if (vendorProperties.hasOwnProperty(p_key)) {
            const purpose = vendorProperties[p_key];
            const inPurposeArray = category_purposes.includes(purpose);
            if (!inPurposeArray) {
              allPurposesAreCategoryPurpose = false;
            }
          }
        }
        const inOutPutArray = output.includes(vendor.id);
        if (!inOutPutArray && allPurposesAreCategoryPurpose) {
          output.push(vendor.id);
        }
      }
    }
    return output;
  }

  /**
   * Get thet TC String
   * @returns {string}
   */
  function cmplzGetTCString() {
    let user_policy_id = cmplz_tcf_get_cookie('policy_id');
    if (!user_policy_id || typeof complianz !== 'undefined' && complianz.current_policy_id !== user_policy_id) {
      if (localStorage.cmplz_tcf_consent) localStorage.removeItem('cmplz_tcf_consent');
    }
    return window.localStorage.getItem('cmplz_tcf_consent');
  }

  /**
   * Set the tcstring, and update the api if needed
   * @param tcModel
   * @param uiVisible
   */
  function cmplzSetTCString(tcModel, uiVisible) {
    let encodedTCString = null;
    if (tcModel) {
      tcModel.created = cmplzRemoveTime(tcModel.lastUpdated);
      tcModel.lastUpdated = cmplzRemoveTime(tcModel.lastUpdated);
      encodedTCString = _iabtcf_core__WEBPACK_IMPORTED_MODULE_1__.TCString.encode(tcModel);
    }
    cmpApi.update(encodedTCString, uiVisible);
    window.localStorage.setItem('cmplz_tcf_consent', encodedTCString);
  }

  /**
   * Ensure the date does not contain hours or minutes
   * @param date
   * @returns {Date}
   */

  function cmplzRemoveTime(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

  /**
   * Get list of purposes
   * @param category
   * @param includeLowerCategories
   * @returns {*[]|number[]}
   */
  function cmplzGetPurposes(category, includeLowerCategories) {
    //these categories aren't used
    if (category === 'functional' || category === 'preferences') {
      return [];
    }
    if (category === 'marketing') {
      if (includeLowerCategories) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      } else {
        return [1, 2, 3, 4, 5, 6, 10];
      }
    } else if (category === 'statistics') {
      return [1, 7, 8, 9];
    }
  }

  /**
   * Check if a region is a TCF region
   * @param region
   * @returns {boolean}
   */
  function cmplz_is_tcf_region(region) {
    if (cmplz_in_array(region, complianz.tcf_regions)) {
      return true;
    }
    return false;
  }
  function configureOptinBanner() {
    //don't do this for non TCF regions
    if (!cmplz_is_tcf_region(complianz.region)) {
      return;
    }

    /**
     * Filter purposes based on passed purposes
     */
    //only optin variant of tcf has these purposes on the banner.
    if (complianz.consenttype === 'optin') {
      const srcMarketingPurposes = cmplzGetPurposes('marketing', false);
      const srcStatisticsPurposes = cmplzGetPurposes('statistics', false);
      const marketingPurposes = cmplzIABfilterArray(cmplzIABfilterArray(cmplzLanguageJson.purposes, cmplz_tcf.purposes), srcMarketingPurposes);
      const statisticsPurposes = cmplzIABfilterArray(cmplzIABfilterArray(cmplzLanguageJson.purposes, cmplz_tcf.purposes), srcStatisticsPurposes);
      const features = cmplzIABfilterArray(cmplzLanguageJson.features, cmplz_tcf.features);
      const specialPurposes = cmplzIABfilterArray(cmplzLanguageJson.specialPurposes, cmplz_tcf.specialPurposes);
      const specialFeatures = cmplzIABfilterArray(cmplzLanguageJson.specialFeatures, cmplz_tcf.specialFeatures);
      const marketingPurposesContainer = document.querySelector('.cmplz-tcf .cmplz-marketing .cmplz-description');
      const statisticsPurposesContainer = document.querySelector('.cmplz-tcf .cmplz-statistics .cmplz-description');
      const featuresContainer = document.querySelector('.cmplz-tcf .cmplz-features .cmplz-description');
      const specialFeaturesContainer = document.querySelector('.cmplz-tcf .cmplz-specialfeatures .cmplz-title');
      const specialPurposesContainer = document.querySelector('.cmplz-tcf .cmplz-specialpurposes .cmplz-title');
      if (features.length === 0) document.querySelector('.cmplz-tcf .cmplz-features').style.display = 'none';
      if (specialPurposes.length === 0) document.querySelector('.cmplz-tcf .cmplz-specialpurposes').style.display = 'none';
      if (specialFeatures.length === 0) document.querySelector('.cmplz-tcf .cmplz-specialfeatures').style.display = 'none';
      if (statisticsPurposes.length === 0) document.querySelector('.cmplz-tcf .cmplz-statistics').style.display = 'none';
      statisticsPurposesContainer.innerHTML = cmplzConcatenateString(statisticsPurposes);
      marketingPurposesContainer.innerHTML = cmplzConcatenateString(marketingPurposes);
      featuresContainer.innerHTML = cmplzConcatenateString(features);
      specialFeaturesContainer.innerHTML = cmplzConcatenateString(specialFeatures);
      specialPurposesContainer.innerHTML = cmplzConcatenateString(specialPurposes);
    }

    //on pageload, show vendorlist area
    let wrapper = document.getElementById('cmplz-tcf-wrapper');
    let noscript_wrapper = document.getElementById('cmplz-tcf-wrapper-nojavascript');
    if (wrapper) {
      wrapper.style.display = 'block';
      noscript_wrapper.style.display = 'none';
    }
  }
  function cmplzIABfilterArray(arrayToFilter, arrayToFilterBy) {
    let output = [];
    for (var key in arrayToFilter) {
      if (arrayToFilterBy.includes(arrayToFilter[key].id)) {
        output.push(arrayToFilter[key]);
      }
    }
    return output;
  }
  function cmplzConcatenateString(array) {
    let string = '';
    const max = array.length - 1;
    for (var key in array) {
      if (array.hasOwnProperty(key)) {
        string += array[key].name;
        if (key < max) {
          string += ', ';
        } else {
          string += '.';
        }
      }
    }
    return string;
  }
});

/**
 * TCF for CCPA
 */

const USPSTR_NN = "1NN";
const USPSTR_YN = "1YN";
const USPSTR_YY = "1YY";
const USPSTR_NA = "1---";
let ccpaVendorlistLoadedResolve;
var ccpaVendorlistLoaded = new Promise(function (resolve, reject) {
  ccpaVendorlistLoadedResolve = resolve;
});
let USvendorlistUrl = cmplz_tcf.cmp_url + 'cmp/vendorlist' + '/lspa.json';
let ccpaVendorList;
bannerDataLoaded.then(() => {
  if (complianz.consenttype === 'optout' || onOptOutPolicyPage) {
    fetch(USvendorlistUrl, {
      method: "GET"
    }).then(response => response.json()).then(function (data) {
      ccpaVendorList = data;
      ccpaVendorlistLoadedResolve();
    });
    cmplz_set_ccpa_tc_string();
    cmplzRenderUSVendorsInPolicy();
  } else {
    if (cmplz_tcf.debug) console.log("not an optout tcf region or page");
  }
});

/**
 * When CCPA applies, we set the TC string in the usprivacy cookie
 */
function cmplz_set_ccpa_tc_string() {
  if (cmplz_tcf.ccpa_applies) {
    cmplz_set_cookie('usprivacy', USPSTR_YN + cmplz_tcf.lspact, false);
    document.addEventListener("cmplz_fire_categories", function (e) {
      let val = USPSTR_YY + cmplz_tcf.lspact;
      if (cmplz_in_array('marketing', e.detail.categories)) {
        val = USPSTR_YN + cmplz_tcf.lspact;
      }
      cmplz_set_cookie('usprivacy', val, false);
    });
  } else {
    cmplz_set_cookie('usprivacy', USPSTR_NA + cmplz_tcf.lspact, false);
  }
}
function cmplzRenderUSVendorsInPolicy() {
  ccpaVendorlistLoaded.then(() => {
    let vendors = ccpaVendorList.signatories;
    const vendorContainer = document.getElementById('cmplz-tcf-us-vendor-container');
    if (vendorContainer === null) {
      return;
    }
    vendorContainer.innerHTML = '';
    const template = document.getElementById('cmplz-tcf-vendor-template').innerHTML;
    for (var key in vendors) {
      if (vendors.hasOwnProperty(key)) {
        let customTemplate = template;
        let vendor = vendors[key];
        customTemplate = customTemplate.replace(/{vendor_name}/g, vendor.signatoryLegalName);
        let hasOptoutUrl = true;
        if (vendor.optoutUrl.indexOf('http') === -1) {
          hasOptoutUrl = false;
          customTemplate = customTemplate.replace(/{optout_string}/g, vendor.optoutUrl);
        } else {
          customTemplate = customTemplate.replace(/{optout_url}/g, vendor.optoutUrl);
        }
        const wrapper = document.createElement('div');
        wrapper.innerHTML = customTemplate;
        const html = wrapper.firstChild;
        if (hasOptoutUrl) {
          html.querySelector('.cmplz-tcf-optout-string').style.display = 'none';
          html.querySelector('.cmplz-tcf-optout-url').style.display = 'block';
        } else {
          html.querySelector('.cmplz-tcf-optout-string').style.display = 'block';
          html.querySelector('.cmplz-tcf-optout-url').style.display = 'none';
        }
        var fragment = document.createDocumentFragment();
        fragment.appendChild(html);
        vendorContainer.appendChild(html);
      }
    }
    document.querySelector('#cmplz-tcf-wrapper').style.display = 'block';
    document.querySelector('#cmplz-tcf-wrapper-nojavascript').style.display = 'none';
  });
}

/**
 * @todo get a list of ddr.js files. Not currently available
 * https://github.com/InteractiveAdvertisingBureau/USPrivacy/issues/17
 */
// Add all Vendor scripts; this is just an array of string sources
//https://github.com/InteractiveAdvertisingBureau/USPrivacy/blob/master/CCPA/Data%20Deletion%20Request%20Handling.md
// vendorDeleteScriptSources.forEach((vendorDeleteScriptSource) => {
//
// 	const scriptElement = document.createElement("script");
// 	scriptElement.src = vendorDeleteScriptSource;
//
// 	document.body.appendChild(scriptElement);
//
// });

/**
 * Fire a data deletion request.
 */
document.addEventListener("cmplz_dnsmpi_submit", function (e) {
  if (cmplz_tcf.debug) console.log("fire data deletion request for TCF");
  __uspapi('performDeletion', 1);
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map