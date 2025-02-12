/*!
 * Engagement Insights JS SDK, 1.0.3
 * Copyright (c) Microsoft and contributors. All rights reserved.
 * Licensed under the ISC License.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.MSEI = global.MSEI || {})));
}(this, (function (exports) { 'use strict';

    // Copyright (c) Microsoft Corporation. All rights reserved.
    // Licensed under the MIT License.
    var strShimFunction = "function";
    var strShimObject = "object";
    var strShimUndefined = "undefined";
    var strShimPrototype = "prototype";
    var strShimHasOwnProperty = "hasOwnProperty";
    /**
     * Returns the current global scope object, for a normal web page this will be the current
     * window, for a Web Worker this will be current worker global scope via "self". The internal
     * implementation returns the first available instance object in the following order
     * - globalThis (New standard)
     * - self (Will return the current window instance for supported browsers)
     * - window (fallback for older browser implementations)
     * - global (NodeJS standard)
     * - <null> (When all else fails)
     * While the return type is a Window for the normal case, not all environments will support all
     * of the properties or functions.
     */
    function getGlobal() {
        if (typeof globalThis !== strShimUndefined && globalThis) {
            return globalThis;
        }
        if (typeof self !== strShimUndefined && self) {
            return self;
        }
        if (typeof window !== strShimUndefined && window) {
            return window;
        }
        if (typeof global !== strShimUndefined && global) {
            return global;
        }
        return null;
    }
    /**
     * Creates an object that has the specified prototype, and that optionally contains specified properties. This helper exists to avoid adding a polyfil
     * for older browsers that do not define Object.create eg. ES3 only, IE8 just in case any page checks for presence/absence of the prototype implementation.
     * Note: For consistency this will not use the Object.create implementation if it exists as this would cause a testing requirement to test with and without the implementations
     * @param obj Object to use as a prototype. May be null
     */
    function objCreateFn(obj) {
        var func = Object["create"];
        // Use build in Object.create
        if (func) {
            // Use Object create method if it exists
            return func(obj);
        }
        if (obj == null) {
            return {};
        }
        var type = typeof obj;
        if (type !== strShimObject && type !== strShimFunction) {
            throw new TypeError('Object prototype may only be an Object:' + obj);
        }
        function tmpFunc() { }
        tmpFunc[strShimPrototype] = obj;
        return new tmpFunc();
    }
    function __assignFn(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object[strShimPrototype][strShimHasOwnProperty].call(s, p)) {
                    t[p] = s[p];
                }
            }
        }
        return t;
    }
    // tslint:disable-next-line: only-arrow-functions
    var __extendStaticsFn = function (d, b) {
        __extendStaticsFn = Object["setPrototypeOf"] ||
            // tslint:disable-next-line: only-arrow-functions
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            // tslint:disable-next-line: only-arrow-functions
            function (d, b) {
                for (var p in b) {
                    if (b[strShimHasOwnProperty](p)) {
                        d[p] = b[p];
                    }
                }
            };
        return __extendStaticsFn(d, b);
    };
    function __extendsFn(d, b) {
        __extendStaticsFn(d, b);
        function __() { this.constructor = d; }
        // tslint:disable-next-line: ban-comma-operator
        d[strShimPrototype] = b === null ? objCreateFn(b) : (__[strShimPrototype] = b[strShimPrototype], new __());
    }
    var globalObj = getGlobal() || {};
    // tslint:disable: only-arrow-functions
    (function (root, assignFn, extendsFn) {
        // Assign the globally scoped versions of the functions -- used when consuming individual ts files
        // If check is to support NativeScript where these are marked as readonly
        if (!root.__assign) {
            root.__assign = Object.assign || assignFn;
        }
        if (!root.__extends) {
            root.__extends = extendsFn;
        }
    })(globalObj, __assignFn, __extendsFn);
    // Assign local variables that will be used for embedded scenarios, if check is to support NativeScript where these are marked as readonly
    if (!__assign) {
        __assign = globalObj.__assign;
    }
    if (!__extends) {
        __extends = globalObj.__extends;
    }

    // Copyright (c) Microsoft Corporation. All rights reserved.
    // Licensed under the MIT License.
    /**
     * The EventsDiscardedReason enumeration contains a set of values that specify the reason for discarding an event.
     */
    var EventsDiscardedReason = {
        /**
         * Unknown.
         */
        Unknown: 0,
        /**
         * Status set to non-retryable.
         */
        NonRetryableStatus: 1,
        /**
         * The event is invalid.
         */
        InvalidEvent: 2,
        /**
         * The size of the event is too large.
         */
        SizeLimitExceeded: 3,
        /**
         * The server is not accepting events from this instrumentation key.
         */
        KillSwitch: 4,
        /**
         * The event queue is full.
         */
        QueueFull: 5
    };

    // Copyright (c) Microsoft Corporation. All rights reserved.
    /**
     * This file exists to hold environment utilities that are requied to check and
     * validate the current operating environment. Unless otherwise required, please
     * only defined methods (functions) in this class so that users of these
     * functions/properties only need to include those that are used within their own modules.
     */
    var strUndefined = strShimUndefined;
    var strObject = strShimObject;
    var strWindow = "window";
    var strDocument = "document";
    var strNavigator = "navigator";
    var strLocation = "location";
    var strConsole = "console";
    var strPerformance = "performance";
    var strJSON = "JSON";
    var strCrypto = "crypto";
    var strMsCrypto = "msCrypto";
    var strReactNative = "ReactNative";
    /**
     * Returns the current global scope object, for a normal web page this will be the current
     * window, for a Web Worker this will be current worker global scope via "self". The internal
     * implementation returns the first available instance object in the following order
     * - globalThis (New standard)
     * - self (Will return the current window instance for supported browsers)
     * - window (fallback for older browser implementations)
     * - global (NodeJS standard)
     * - <null> (When all else fails)
     * While the return type is a Window for the normal case, not all environments will support all
     * of the properties or functions.
     */
    var getGlobal$1 = getGlobal;
    /**
     * Return the named global object if available, will return null if the object is not available.
     * @param name The globally named object
     */
    function getGlobalInst(name) {
        var gbl = getGlobal$1();
        if (gbl && gbl[name]) {
            return gbl[name];
        }
        // Test workaround, for environments where <global>.window (when global == window) doesn't return the base window
        if (name === strWindow && hasWindow()) {
            // tslint:disable-next-line: no-angle-bracket-type-assertion
            return window;
        }
        return null;
    }
    /**
     * Checks if window object is available, this is required as we support the API running without a
     * window /document (eg. Node server, electron webworkers) and if we attempt to assign a window
     * object to a local variable or pass as an argument an "Uncaught ReferenceError: window is not defined"
     * exception will be thrown.
     * Defined as a function to support lazy / late binding environments.
     */
    function hasWindow() {
        return Boolean(typeof window === strObject && window);
    }
    /**
     * Returns the global window object if it is present otherwise null.
     * This helper is used to access the window object without causing an exception
     * "Uncaught ReferenceError: window is not defined"
     */
    function getWindow() {
        if (hasWindow()) {
            return window;
        }
        // Return the global instance or null
        return getGlobalInst(strWindow);
    }
    /**
     * Checks if document object is available, this is required as we support the API running without a
     * window /document (eg. Node server, electron webworkers) and if we attempt to assign a document
     * object to a local variable or pass as an argument an "Uncaught ReferenceError: document is not defined"
     * exception will be thrown.
     * Defined as a function to support lazy / late binding environments.
     */
    function hasDocument() {
        return Boolean(typeof document === strObject && document);
    }
    /**
     * Returns the global document object if it is present otherwise null.
     * This helper is used to access the document object without causing an exception
     * "Uncaught ReferenceError: document is not defined"
     */
    function getDocument() {
        if (hasDocument()) {
            return document;
        }
        return getGlobalInst(strDocument);
    }
    /**
     * Checks if navigator object is available, this is required as we support the API running without a
     * window /document (eg. Node server, electron webworkers) and if we attempt to assign a navigator
     * object to a local variable or pass as an argument an "Uncaught ReferenceError: navigator is not defined"
     * exception will be thrown.
     * Defined as a function to support lazy / late binding environments.
     */
    function hasNavigator() {
        return Boolean(typeof navigator === strObject && navigator);
    }
    /**
     * Returns the global navigator object if it is present otherwise null.
     * This helper is used to access the navigator object without causing an exception
     * "Uncaught ReferenceError: navigator is not defined"
     */
    function getNavigator() {
        if (hasNavigator()) {
            return navigator;
        }
        return getGlobalInst(strNavigator);
    }
    /**
     * Returns the global location object if it is present otherwise null.
     * This helper is used to access the location object without causing an exception
     * "Uncaught ReferenceError: location is not defined"
     */
    function getLocation() {
        if (typeof location === strObject && location) {
            return location;
        }
        return getGlobalInst(strLocation);
    }
    /**
     * Returns the global console object
     */
    function getConsole() {
        if (typeof console !== strUndefined) {
            return console;
        }
        return getGlobalInst(strConsole);
    }
    /**
     * Returns the performance object if it is present otherwise null.
     * This helper is used to access the performance object from the current
     * global instance which could be window or globalThis for a web worker
     */
    function getPerformance() {
        return getGlobalInst(strPerformance);
    }
    /**
     * Checks if JSON object is available, this is required as we support the API running without a
     * window /document (eg. Node server, electron webworkers) and if we attempt to assign a history
     * object to a local variable or pass as an argument an "Uncaught ReferenceError: JSON is not defined"
     * exception will be thrown.
     * Defined as a function to support lazy / late binding environments.
     */
    function hasJSON() {
        return Boolean((typeof JSON === strObject && JSON) || getGlobalInst(strJSON) !== null);
    }
    /**
     * Returns the global JSON object if it is present otherwise null.
     * This helper is used to access the JSON object without causing an exception
     * "Uncaught ReferenceError: JSON is not defined"
     */
    function getJSON() {
        if (hasJSON()) {
            return JSON || getGlobalInst(strJSON);
        }
        return null;
    }
    /**
     * Returns the crypto object if it is present otherwise null.
     * This helper is used to access the crypto object from the current
     * global instance which could be window or globalThis for a web worker
     */
    function getCrypto() {
        return getGlobalInst(strCrypto);
    }
    /**
     * Returns the crypto object if it is present otherwise null.
     * This helper is used to access the crypto object from the current
     * global instance which could be window or globalThis for a web worker
     */
    function getMsCrypto() {
        return getGlobalInst(strMsCrypto);
    }
    /**
     * Returns whether the environment is reporting that we are running in a React Native Environment
     */
    function isReactNative() {
        // If running in React Native, navigator.product will be populated
        var nav = getNavigator();
        if (nav && nav.product) {
            return nav.product === strReactNative;
        }
        return false;
    }

    // Copyright (c) Microsoft Corporation. All rights reserved.
    var strOnPrefix = "on";
    var strAttachEvent = "attachEvent";
    var strAddEventHelper = "addEventListener";
    var strDetachEvent = "detachEvent";
    var strRemoveEventListener = "removeEventListener";
    var UInt32Mask = 0x100000000;
    var MaxUInt32 = 0xffffffff;
    var _isTrident = null;
    // MWC based Random generator (for IE)
    var _mwcSeeded = false;
    var _mwcW = 123456789;
    var _mwcZ = 987654321;
    // Takes any integer
    function _mwcSeed(seedValue) {
        if (seedValue < 0) {
            // Make sure we end up with a positive number and not -ve one.
            seedValue >>>= 0;
        }
        _mwcW = (123456789 + seedValue) & MaxUInt32;
        _mwcZ = (987654321 - seedValue) & MaxUInt32;
        _mwcSeeded = true;
    }
    function _autoSeedMwc() {
        // Simple initialization using default Math.random() - So we inherit any entropy from the browser
        // and bitwise XOR with the current milliseconds
        _mwcSeed((Math.random() * UInt32Mask) ^ new Date().getTime());
    }
    function _isTypeof(value, theType) {
        return typeof value === theType;
    }
    function _isUndefined(value) {
        return _isTypeof(value, strShimUndefined) || value === undefined;
    }
    function _isNullOrUndefined(value) {
        return (_isUndefined(value) || value === null);
    }
    function _hasOwnProperty(obj, prop) {
        return obj && Object[strShimPrototype].hasOwnProperty.call(obj, prop);
    }
    function _isObject(value) {
        return _isTypeof(value, strShimObject);
    }
    function _isFunction(value) {
        return _isTypeof(value, strShimFunction);
    }
    /**
     * Binds the specified function to an event, so that the function gets called whenever the event fires on the object
     * @param obj Object to add the event too.
     * @param eventNameWithoutOn String that specifies any of the standard DHTML Events without "on" prefix
     * @param handlerRef Pointer that specifies the function to call when event fires
     * @param useCapture [Optional] Defaults to false
     * @returns True if the function was bound successfully to the event, otherwise false
     */
    function _attachEvent(obj, eventNameWithoutOn, handlerRef, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        var result = false;
        if (!_isNullOrUndefined(obj)) {
            try {
                if (!_isNullOrUndefined(obj[strAddEventHelper])) {
                    // all browsers except IE before version 9
                    obj[strAddEventHelper](eventNameWithoutOn, handlerRef, useCapture);
                    result = true;
                }
                else if (!_isNullOrUndefined(obj[strAttachEvent])) {
                    // IE before version 9                    
                    obj[strAttachEvent](strOnPrefix + eventNameWithoutOn, handlerRef);
                    result = true;
                }
            }
            catch (e) {
                // Just Ignore any error so that we don't break any execution path
            }
        }
        return result;
    }
    /**
     * Removes an event handler for the specified event
     * @param Object to remove the event from
     * @param eventNameWithoutOn {string} - The name of the event
     * @param handlerRef {any} - The callback function that needs to be executed for the given event
     * @param useCapture [Optional] Defaults to false
     */
    function _detachEvent(obj, eventNameWithoutOn, handlerRef, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        if (!_isNullOrUndefined(obj)) {
            try {
                if (!_isNullOrUndefined(obj[strRemoveEventListener])) {
                    obj[strRemoveEventListener](eventNameWithoutOn, handlerRef, useCapture);
                }
                else if (!_isNullOrUndefined(obj[strDetachEvent])) {
                    obj[strDetachEvent](strOnPrefix + eventNameWithoutOn, handlerRef);
                }
            }
            catch (e) {
                // Just Ignore any error so that we don't break any execution path
            }
        }
    }
    /**
     * Try to define get/set object property accessors for the target object/prototype, this will provide compatibility with
     * existing API definition when run within an ES5+ container that supports accessors but still enable the code to be loaded
     * and executed in an ES3 container, providing basic IE8 compatibility.
     * @param target The object on which to define the property.
     * @param prop The name of the property to be defined or modified.
     * @param getProp The getter function to wire against the getter.
     * @param setProp The setter function to wire against the setter.
     * @returns True if it was able to create the accessors otherwise false
     */
    function objDefineAccessors(target, prop, getProp, setProp) {
        var defineProp = Object["defineProperty"];
        if (defineProp) {
            try {
                var descriptor = {
                    enumerable: true,
                    configurable: true
                };
                if (getProp) {
                    descriptor.get = getProp;
                }
                if (setProp) {
                    descriptor.set = setProp;
                }
                defineProp(target, prop, descriptor);
                return true;
            }
            catch (e) {
                // IE8 Defines a defineProperty on Object but it's only supported for DOM elements so it will throw
                // We will just ignore this here.
            }
        }
        return false;
    }
    /**
     * This is a helper function for the equivalent of arForEach(objKeys(target), callbackFn), this is a
     * performance optimization to avoid the creation of a new array for large objects
     * @param target The target object to find and process the keys
     * @param callbackfn The function to call with the details
     */
    function objForEachKey(target, callbackfn) {
        if (target && _isObject(target)) {
            for (var prop in target) {
                if (_hasOwnProperty(target, prop)) {
                    callbackfn.call(target, prop, target[prop]);
                }
            }
        }
    }
    var CoreUtils = /** @class */ (function () {
        function CoreUtils() {
        }
        /**
         * Check if an object is of type Date
         */
        CoreUtils.isDate = function (obj) {
            return Object[strShimPrototype].toString.call(obj) === "[object Date]";
        };
        /**
         * Check if an object is of type Array
         */
        CoreUtils.isArray = function (obj) {
            return Object[strShimPrototype].toString.call(obj) === "[object Array]";
        };
        /**
         * Check if an object is of type Error
         */
        CoreUtils.isError = function (obj) {
            return Object[strShimPrototype].toString.call(obj) === "[object Error]";
        };
        /**
         * Checks if the type of value is a string.
         * @param {any} value - Value to be checked.
         * @return {boolean} True if the value is a string, false otherwise.
         */
        CoreUtils.isString = function (value) {
            return _isTypeof(value, "string");
        };
        /**
         * Checks if the type of value is a number.
         * @param {any} value - Value to be checked.
         * @return {boolean} True if the value is a number, false otherwise.
         */
        CoreUtils.isNumber = function (value) {
            return _isTypeof(value, "number");
        };
        /**
         * Checks if the type of value is a boolean.
         * @param {any} value - Value to be checked.
         * @return {boolean} True if the value is a boolean, false otherwise.
         */
        CoreUtils.isBoolean = function (value) {
            return _isTypeof(value, "boolean");
        };
        /**
         * Creates a new GUID.
         * @return {string} A GUID.
         */
        CoreUtils.disableCookies = function () {
            CoreUtils._canUseCookies = false;
        };
        CoreUtils.newGuid = function () {
            function randomHexDigit() {
                return CoreUtils.randomValue(15); // Get a random value from 0..15
            }
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(GuidRegex, function (c) {
                var r = (randomHexDigit() | 0), v = (c === 'x' ? r : r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        /**
         * Convert a date to I.S.O. format in IE8
         */
        CoreUtils.toISOString = function (date) {
            if (CoreUtils.isDate(date)) {
                var pad = function (num) {
                    var r = String(num);
                    if (r.length === 1) {
                        r = "0" + r;
                    }
                    return r;
                };
                return date.getUTCFullYear()
                    + "-" + pad(date.getUTCMonth() + 1)
                    + "-" + pad(date.getUTCDate())
                    + "T" + pad(date.getUTCHours())
                    + ":" + pad(date.getUTCMinutes())
                    + ":" + pad(date.getUTCSeconds())
                    + "." + String((date.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5)
                    + "Z";
            }
        };
        /**
         * Performs the specified action for each element in an array. This helper exists to avoid adding a polyfil for older browsers
         * that do not define Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page checks for presence/absence of the prototype
         * implementation. Note: For consistency this will not use the Array.prototype.xxxx implementation if it exists as this would
         * cause a testing requirement to test with and without the implementations
         * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
         * @param thisArg  [Optional] An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
         */
        CoreUtils.arrForEach = function (arr, callbackfn, thisArg) {
            var len = arr.length;
            for (var idx = 0; idx < len; idx++) {
                if (idx in arr) {
                    callbackfn.call(thisArg || arr, arr[idx], idx, arr);
                }
            }
        };
        /**
         * Returns the index of the first occurrence of a value in an array. This helper exists to avoid adding a polyfil for older browsers
         * that do not define Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page checks for presence/absence of the prototype
         * implementation. Note: For consistency this will not use the Array.prototype.xxxx implementation if it exists as this would
         * cause a testing requirement to test with and without the implementations
         * @param searchElement The value to locate in the array.
         * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
         */
        CoreUtils.arrIndexOf = function (arr, searchElement, fromIndex) {
            var len = arr.length;
            var from = fromIndex || 0;
            for (var lp = Math.max(from >= 0 ? from : len - Math.abs(from), 0); lp < len; lp++) {
                if (lp in arr && arr[lp] === searchElement) {
                    return lp;
                }
            }
            return -1;
        };
        /**
         * Calls a defined callback function on each element of an array, and returns an array that contains the results. This helper exists
         * to avoid adding a polyfil for older browsers that do not define Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page
         * checks for presence/absence of the prototype implementation. Note: For consistency this will not use the Array.prototype.xxxx
         * implementation if it exists as this would cause a testing requirement to test with and without the implementations
         * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
         * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
         */
        CoreUtils.arrMap = function (arr, callbackfn, thisArg) {
            var len = arr.length;
            var _this = thisArg || arr;
            var results = new Array(len);
            for (var lp = 0; lp < len; lp++) {
                if (lp in arr) {
                    results[lp] = callbackfn.call(_this, arr[lp], arr);
                }
            }
            return results;
        };
        /**
         * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is
         * provided as an argument in the next call to the callback function. This helper exists to avoid adding a polyfil for older browsers that do not define
         * Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page checks for presence/absence of the prototype implementation. Note: For consistency
         * this will not use the Array.prototype.xxxx implementation if it exists as this would cause a testing requirement to test with and without the implementations
         * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
         * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
         */
        CoreUtils.arrReduce = function (arr, callbackfn, initialValue) {
            var len = arr.length;
            var lp = 0;
            var value;
            // Specifically checking the number of passed arguments as the value could be anything
            if (arguments.length >= 3) {
                value = arguments[2];
            }
            else {
                while (lp < len && !(lp in arr)) {
                    lp++;
                }
                value = arr[lp++];
            }
            while (lp < len) {
                if (lp in arr) {
                    value = callbackfn(value, arr[lp], lp, arr);
                }
                lp++;
            }
            return value;
        };
        /**
         * helper method to trim strings (IE8 does not implement String.prototype.trim)
         */
        CoreUtils.strTrim = function (str) {
            if (!CoreUtils.isString(str)) {
                return str;
            }
            return str.replace(/^\s+|\s+$/g, "");
        };
        /**
         * Returns the names of the enumerable string properties and methods of an object. This helper exists to avoid adding a polyfil for older browsers
         * that do not define Object.keys eg. ES3 only, IE8 just in case any page checks for presence/absence of the prototype implementation.
         * Note: For consistency this will not use the Object.keys implementation if it exists as this would cause a testing requirement to test with and without the implementations
         * @param obj Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
         */
        CoreUtils.objKeys = function (obj) {
            var hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString');
            if (!_isFunction(obj) && (!_isObject(obj) || obj === null)) {
                throw new TypeError('objKeys called on non-object');
            }
            var result = [];
            for (var prop in obj) {
                if (_hasOwnProperty(obj, prop)) {
                    result.push(prop);
                }
            }
            if (hasDontEnumBug) {
                var dontEnums = [
                    'toString',
                    'toLocaleString',
                    'valueOf',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'constructor'
                ];
                var dontEnumsLength = dontEnums.length;
                for (var lp = 0; lp < dontEnumsLength; lp++) {
                    if (_hasOwnProperty(obj, dontEnums[lp])) {
                        result.push(dontEnums[lp]);
                    }
                }
            }
            return result;
        };
        /**
         * Trys to add an event handler for the specified event to the window, body and document
         * @param eventName {string} - The name of the event
         * @param callback {any} - The callback function that needs to be executed for the given event
         * @return {boolean} - true if the handler was successfully added
         */
        CoreUtils.addEventHandler = function (eventName, callback) {
            var result = false;
            var w = getWindow();
            if (w) {
                result = _attachEvent(w, eventName, callback);
                result = _attachEvent(w["body"], eventName, callback) || result;
            }
            var doc = getDocument();
            if (doc) {
                result = EventHelper.Attach(doc, eventName, callback) || result;
            }
            return result;
        };
        /**
         * Return the current time via the Date now() function (if available) and falls back to (new Date()).getTime() if now() is unavailable (IE8 or less)
         * https://caniuse.com/#search=Date.now
         */
        CoreUtils.dateNow = function () {
            var dt = Date;
            if (dt.now) {
                return dt.now();
            }
            return new dt().getTime();
        };
        /**
         * Return the current value of the Performance Api now() function (if available) and fallback to CoreUtils.dateNow() if it is unavailable (IE9 or less)
         * https://caniuse.com/#search=performance.now
         */
        CoreUtils.perfNow = function () {
            var perf = getPerformance();
            if (perf && perf.now) {
                return perf.now();
            }
            return CoreUtils.dateNow();
        };
        /**
         * Generate random base64 id string.
         * The default length is 22 which is 132-bits so almost the same as a GUID but as base64 (the previous default was 5)
         * @param maxLength - Optional value to specify the length of the id to be generated, defaults to 22
         */
        CoreUtils.newId = function (maxLength) {
            if (maxLength === void 0) { maxLength = 22; }
            var base64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            // Start with an initial random number, consuming the value in reverse byte order
            var number = CoreUtils.random32() >>> 0; // Make sure it's a +ve number
            var chars = 0;
            var result = "";
            while (result.length < maxLength) {
                chars++;
                result += base64chars.charAt(number & 0x3F);
                number >>>= 6; // Zero fill with right shift
                if (chars === 5) {
                    // 5 base64 characters === 30 bits so we don't have enough bits for another base64 char
                    // So add on another 30 bits and make sure it's +ve
                    number = (((CoreUtils.random32() << 2) & 0xFFFFFFFF) | (number & 0x03)) >>> 0;
                    chars = 0; // We need to reset the number every 5 chars (30 bits)
                }
            }
            return result;
        };
        /**
         * Identifies whether the current environment appears to be IE
         */
        CoreUtils.isIE = function () {
            if (_isTrident === null) {
                var navigator_1 = getNavigator() || {};
                var userAgent = (navigator_1.userAgent || "").toLowerCase();
                _isTrident = (userAgent.indexOf("msie") !== -1 || userAgent.indexOf("trident/") !== -1);
            }
            return _isTrident;
        };
        /**
         * Generate a random value between 0 and maxValue, max value should be limited to a 32-bit maximum.
         * So maxValue(16) will produce a number from 0..16 (range of 17)
         * @param maxValue
         */
        CoreUtils.randomValue = function (maxValue) {
            if (maxValue > 0) {
                return Math.floor((CoreUtils.random32() / MaxUInt32) * (maxValue + 1)) >>> 0;
            }
            return 0;
        };
        /**
         * generate a random 32-bit number (0x000000..0xFFFFFFFF) or (-0x80000000..0x7FFFFFFF), defaults un-unsigned.
         * @param signed - True to return a signed 32-bit number (-0x80000000..0x7FFFFFFF) otherwise an unsigned one (0x000000..0xFFFFFFFF)
         */
        CoreUtils.random32 = function (signed) {
            var value;
            var c = getCrypto() || getMsCrypto();
            if (c && c.getRandomValues) {
                // Make sure the number is converted into the specified range (-0x80000000..0x7FFFFFFF)
                value = c.getRandomValues(new Uint32Array(1))[0] & MaxUInt32;
            }
            else if (CoreUtils.isIE()) {
                // For IE 6, 7, 8 (especially on XP) Math.random is not very random
                if (!_mwcSeeded) {
                    // Set the seed for the Mwc algorithm
                    _autoSeedMwc();
                }
                // Don't use Math.random for IE
                // Make sure the number is converted into the specified range (-0x80000000..0x7FFFFFFF)
                value = CoreUtils.mwcRandom32() & MaxUInt32;
            }
            else {
                // Make sure the number is converted into the specified range (-0x80000000..0x7FFFFFFF)
                value = Math.floor((UInt32Mask * Math.random()) | 0);
            }
            if (!signed) {
                // Make sure we end up with a positive number and not -ve one.
                value >>>= 0;
            }
            return value;
        };
        /**
         * Seed the MWC random number generator with the specified seed or a random value
         * @param value - optional the number to used as the seed, if undefined, null or zero a random value will be chosen
         */
        CoreUtils.mwcRandomSeed = function (value) {
            if (!value) {
                _autoSeedMwc();
            }
            else {
                _mwcSeed(value);
            }
        };
        /**
         * Generate a random 32-bit number between (0x000000..0xFFFFFFFF) or (-0x80000000..0x7FFFFFFF), using MWC (Multiply with carry)
         * instead of Math.random() defaults to un-signed.
         * Used as a replacement random generator for IE to avoid issues with older IE instances.
         * @param signed - True to return a signed 32-bit number (-0x80000000..0x7FFFFFFF) otherwise an unsigned one (0x000000..0xFFFFFFFF)
         */
        CoreUtils.mwcRandom32 = function (signed) {
            _mwcZ = (36969 * (_mwcZ & 0xFFFF) + (_mwcZ >> 16)) & MaxUInt32;
            _mwcW = (18000 * (_mwcW & 0xFFFF) + (_mwcW >> 16)) & MaxUInt32;
            var value = (((_mwcZ << 16) + (_mwcW & 0xFFFF)) >>> 0) & MaxUInt32 | 0;
            if (!signed) {
                // Make sure we end up with a positive number and not -ve one.
                value >>>= 0;
            }
            return value;
        };
        /**
         * generate W3C trace id
         */
        CoreUtils.generateW3CId = function () {
            var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
            // rfc4122 version 4 UUID without dashes and with lowercase letters
            var oct = "", tmp;
            for (var a = 0; a < 4; a++) {
                tmp = CoreUtils.random32();
                oct +=
                    hexValues[tmp & 0xF] +
                        hexValues[tmp >> 4 & 0xF] +
                        hexValues[tmp >> 8 & 0xF] +
                        hexValues[tmp >> 12 & 0xF] +
                        hexValues[tmp >> 16 & 0xF] +
                        hexValues[tmp >> 20 & 0xF] +
                        hexValues[tmp >> 24 & 0xF] +
                        hexValues[tmp >> 28 & 0xF];
            }
            // "Set the two most significant bits (bits 6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively"
            var clockSequenceHi = hexValues[8 + (CoreUtils.random32() & 0x03) | 0];
            return oct.substr(0, 8) + oct.substr(9, 4) + "4" + oct.substr(13, 3) + clockSequenceHi + oct.substr(16, 3) + oct.substr(19, 12);
        };
        CoreUtils.isTypeof = _isTypeof;
        CoreUtils.isUndefined = _isUndefined;
        CoreUtils.isNullOrUndefined = _isNullOrUndefined;
        CoreUtils.hasOwnProperty = _hasOwnProperty;
        /**
         * Checks if the passed of value is a function.
         * @param {any} value - Value to be checked.
         * @return {boolean} True if the value is a boolean, false otherwise.
         */
        CoreUtils.isFunction = _isFunction;
        /**
         * Checks if the passed of value is a function.
         * @param {any} value - Value to be checked.
         * @return {boolean} True if the value is a boolean, false otherwise.
         */
        CoreUtils.isObject = _isObject;
        /**
         * Creates an object that has the specified prototype, and that optionally contains specified properties. This helper exists to avoid adding a polyfil
         * for older browsers that do not define Object.create eg. ES3 only, IE8 just in case any page checks for presence/absence of the prototype implementation.
         * Note: For consistency this will not use the Object.create implementation if it exists as this would cause a testing requirement to test with and without the implementations
         * @param obj Object to use as a prototype. May be null
         */
        // tslint:disable-next-line: member-ordering
        CoreUtils.objCreate = objCreateFn;
        /**
         * Try to define get/set object property accessors for the target object/prototype, this will provide compatibility with
         * existing API definition when run within an ES5+ container that supports accessors but still enable the code to be loaded
         * and executed in an ES3 container, providing basic IE8 compatibility.
         * @param target The object on which to define the property.
         * @param prop The name of the property to be defined or modified.
         * @param getProp The getter function to wire against the getter.
         * @param setProp The setter function to wire against the setter.
         * @returns True if it was able to create the accessors otherwise false
         */
        CoreUtils.objDefineAccessors = objDefineAccessors;
        return CoreUtils;
    }());
    var GuidRegex = /[xy]/g;
    var EventHelper = /** @class */ (function () {
        function EventHelper() {
        }
        /**
         * Binds the specified function to an event, so that the function gets called whenever the event fires on the object
         * @param obj Object to add the event too.
         * @param eventNameWithoutOn String that specifies any of the standard DHTML Events without "on" prefix
         * @param handlerRef Pointer that specifies the function to call when event fires
         * @returns True if the function was bound successfully to the event, otherwise false
         */
        EventHelper.Attach = _attachEvent;
        /**
         * Binds the specified function to an event, so that the function gets called whenever the event fires on the object
         * @deprecated Use {@link EventHelper#Attach} as we are already in a class call EventHelper the extra "Event" just causes a larger result
         * @param obj Object to add the event too.
         * @param eventNameWithoutOn String that specifies any of the standard DHTML Events without "on" prefix
         * @param handlerRef Pointer that specifies the function to call when event fires
         * @returns True if the function was bound successfully to the event, otherwise false
         */
        EventHelper.AttachEvent = _attachEvent;
        /**
         * Removes an event handler for the specified event
         * @param eventName {string} - The name of the event
         * @param callback {any} - The callback function that needs to be executed for the given event
         * @return {boolean} - true if the handler was successfully added
         */
        EventHelper.Detach = _detachEvent;
        /**
         * Removes an event handler for the specified event
         * @deprecated Use {@link EventHelper#Detach} as we are already in a class call EventHelper the extra "Event" just causes a larger result
         * @param eventName {string} - The name of the event
         * @param callback {any} - The callback function that needs to be executed for the given event
         * @return {boolean} - true if the handler was successfully added
         */
        EventHelper.DetachEvent = _detachEvent;
        return EventHelper;
    }());

    // Copyright (c) Microsoft Corporation. All rights reserved.
    // Licensed under the MIT License.
    var LoggingSeverity;
    (function (LoggingSeverity) {
        /**
         * Error will be sent as internal telemetry
         */
        LoggingSeverity[LoggingSeverity["CRITICAL"] = 1] = "CRITICAL";
        /**
         * Error will NOT be sent as internal telemetry, and will only be shown in browser console
         */
        LoggingSeverity[LoggingSeverity["WARNING"] = 2] = "WARNING";
    })(LoggingSeverity || (LoggingSeverity = {}));
    /**
     * Internal message ID. Please create a new one for every conceptually different message. Please keep alphabetically ordered
     */
    var _InternalMessageId = {
        // Non user actionable
        BrowserDoesNotSupportLocalStorage: 0,
        BrowserCannotReadLocalStorage: 1,
        BrowserCannotReadSessionStorage: 2,
        BrowserCannotWriteLocalStorage: 3,
        BrowserCannotWriteSessionStorage: 4,
        BrowserFailedRemovalFromLocalStorage: 5,
        BrowserFailedRemovalFromSessionStorage: 6,
        CannotSendEmptyTelemetry: 7,
        ClientPerformanceMathError: 8,
        ErrorParsingAISessionCookie: 9,
        ErrorPVCalc: 10,
        ExceptionWhileLoggingError: 11,
        FailedAddingTelemetryToBuffer: 12,
        FailedMonitorAjaxAbort: 13,
        FailedMonitorAjaxDur: 14,
        FailedMonitorAjaxOpen: 15,
        FailedMonitorAjaxRSC: 16,
        FailedMonitorAjaxSend: 17,
        FailedMonitorAjaxGetCorrelationHeader: 18,
        FailedToAddHandlerForOnBeforeUnload: 19,
        FailedToSendQueuedTelemetry: 20,
        FailedToReportDataLoss: 21,
        FlushFailed: 22,
        MessageLimitPerPVExceeded: 23,
        MissingRequiredFieldSpecification: 24,
        NavigationTimingNotSupported: 25,
        OnError: 26,
        SessionRenewalDateIsZero: 27,
        SenderNotInitialized: 28,
        StartTrackEventFailed: 29,
        StopTrackEventFailed: 30,
        StartTrackFailed: 31,
        StopTrackFailed: 32,
        TelemetrySampledAndNotSent: 33,
        TrackEventFailed: 34,
        TrackExceptionFailed: 35,
        TrackMetricFailed: 36,
        TrackPVFailed: 37,
        TrackPVFailedCalc: 38,
        TrackTraceFailed: 39,
        TransmissionFailed: 40,
        FailedToSetStorageBuffer: 41,
        FailedToRestoreStorageBuffer: 42,
        InvalidBackendResponse: 43,
        FailedToFixDepricatedValues: 44,
        InvalidDurationValue: 45,
        TelemetryEnvelopeInvalid: 46,
        CreateEnvelopeError: 47,
        // User actionable
        CannotSerializeObject: 48,
        CannotSerializeObjectNonSerializable: 49,
        CircularReferenceDetected: 50,
        ClearAuthContextFailed: 51,
        ExceptionTruncated: 52,
        IllegalCharsInName: 53,
        ItemNotInArray: 54,
        MaxAjaxPerPVExceeded: 55,
        MessageTruncated: 56,
        NameTooLong: 57,
        SampleRateOutOfRange: 58,
        SetAuthContextFailed: 59,
        SetAuthContextFailedAccountName: 60,
        StringValueTooLong: 61,
        StartCalledMoreThanOnce: 62,
        StopCalledWithoutStart: 63,
        TelemetryInitializerFailed: 64,
        TrackArgumentsNotSpecified: 65,
        UrlTooLong: 66,
        SessionStorageBufferFull: 67,
        CannotAccessCookie: 68,
        IdTooLong: 69,
        InvalidEvent: 70,
        FailedMonitorAjaxSetRequestHeader: 71,
        SendBrowserInfoOnUserInit: 72,
        PluginException: 73,
        NotificationException: 74,
        SnippetScriptLoadFailure: 99,
        InvalidInstrumentationKey: 100,
        CannotParseAiBlobValue: 101,
        InvalidContentBlob: 102,
        TrackPageActionEventFailed: 103
    };

    /*!
     * Microsoft Dynamic Proto Utility, 1.1.1
     * Copyright (c) Microsoft and contributors. All rights reserved.
     */
    /**
     * Constant string defined to support minimization
     * @ignore
     */
    var Constructor = 'constructor';
    /**
     * Constant string defined to support minimization
     * @ignore
     */
    var Prototype = 'prototype';
    /**
     * Constant string defined to support minimization
     * @ignore
     */
    var strFunction$1 = 'function';
    /**
     * Used to define the name of the instance function lookup table
     * @ignore
     */
    var DynInstFuncTable = '_dynInstFuncs';
    /**
     * Name used to tag the dynamic prototype function
     * @ignore
     */
    var DynProxyTag = '_isDynProxy';
    /**
     * Name added to a prototype to define the dynamic prototype "class" name used to lookup the function table
     * @ignore
     */
    var DynClassName = '_dynClass';
    /**
     * Prefix added to the classname to avoid any name clashes with other instance level properties
     * @ignore
     */
    var DynClassNamePrefix = '_dynCls$';
    /**
     * A tag which is used to check if we have already to attempted to set the instance function if one is not present
     * @ignore
     */
    var DynInstChkTag = '_dynInstChk';
    /**
     * A tag which is used to check if we are allows to try and set an instance function is one is not present. Using the same
     * tag name as the function level but a different const name for readability only.
     */
    var DynAllowInstChkTag = DynInstChkTag;
    /**
     * The global (imported) instances where the global performance options are stored
     */
    var DynProtoDefaultOptions = '_dfOpts';
    /**
     * Value used as the name of a class when it cannot be determined
     * @ignore
     */
    var UnknownValue = '_unknown_';
    /**
     * Constant string defined to support minimization
     * @ignore
     */
    var str__Proto = "__proto__";
    /**
     * Constant string defined to support minimization
     * @ignore
     */
    var strUseBaseInst = 'useBaseInst';
    /**
     * Constant string defined to support minimization
     * @ignore
     */
    var strSetInstFuncs = 'setInstFuncs';
    var Obj = Object;
    /**
     * Pre-lookup to check if we are running on a modern browser (i.e. not IE8)
     * @ignore
     */
    var _objGetPrototypeOf = Obj["getPrototypeOf"];
    /**
     * Internal Global used to generate a unique dynamic class name, every new class will increase this value
     * @ignore
     */
    var _dynamicNames = 0;
    /**
     * Helper to check if the object contains a property of the name
     * @ignore
     */
    function _hasOwnProperty$1(obj, prop) {
        return obj && Obj[Prototype].hasOwnProperty.call(obj, prop);
    }
    /**
     * Helper used to check whether the target is an Object prototype or Array prototype
     * @ignore
     */
    function _isObjectOrArrayPrototype(target) {
        return target && (target === Obj[Prototype] || target === Array[Prototype]);
    }
    /**
     * Helper used to check whether the target is an Object prototype, Array prototype or Function prototype
     * @ignore
     */
    function _isObjectArrayOrFunctionPrototype(target) {
        return _isObjectOrArrayPrototype(target) || target === Function[Prototype];
    }
    /**
     * Helper used to get the prototype of the target object as getPrototypeOf is not available in an ES3 environment.
     * @ignore
     */
    function _getObjProto(target) {
        if (target) {
            // This method doesn't existing in older browsers (e.g. IE8)
            if (_objGetPrototypeOf) {
                return _objGetPrototypeOf(target);
            }
            // target[Constructor] May break if the constructor has been changed or removed
            var newProto = target[str__Proto] || target[Prototype] || target[Constructor];
            if (newProto) {
                return newProto;
            }
        }
        return null;
    }
    /**
     * Helper to get the properties of an object, including none enumerable ones as functions on a prototype in ES6
     * are not enumerable.
     * @param target
     */
    function _forEachProp(target, func) {
        var props = [];
        var getOwnProps = Obj["getOwnPropertyNames"];
        if (getOwnProps) {
            props = getOwnProps(target);
        }
        else {
            for (var name_1 in target) {
                if (typeof name_1 === "string" && _hasOwnProperty$1(target, name_1)) {
                    props.push(name_1);
                }
            }
        }
        if (props && props.length > 0) {
            for (var lp = 0; lp < props.length; lp++) {
                func(props[lp]);
            }
        }
    }
    /**
     * Helper function to check whether the provided function name is a potential candidate for dynamic
     * callback and prototype generation.
     * @param target The target object, may be a prototype or class object
     * @param funcName The function name
     * @param skipOwn Skips the check for own property
     * @ignore
     */
    function _isDynamicCandidate(target, funcName, skipOwn) {
        return (funcName !== Constructor && typeof target[funcName] === strFunction$1 && (skipOwn || _hasOwnProperty$1(target, funcName)));
    }
    /**
     * Helper to throw a TypeError exception
     * @param message the message
     * @ignore
     */
    function _throwTypeError(message) {
        throw new TypeError("DynamicProto: " + message);
    }
    /**
     * Returns a collection of the instance functions that are defined directly on the thisTarget object, it does
     * not return any inherited functions
     * @param thisTarget The object to get the instance functions from
     * @ignore
     */
    function _getInstanceFuncs(thisTarget) {
        // Get the base proto
        var instFuncs = {};
        // Save any existing instance functions
        _forEachProp(thisTarget, function (name) {
            // Don't include any dynamic prototype instances - as we only want the real functions
            if (!instFuncs[name] && _isDynamicCandidate(thisTarget, name, false)) {
                // Create an instance callback for passing the base function to the caller
                instFuncs[name] = thisTarget[name];
            }
        });
        return instFuncs;
    }
    /**
     * Returns whether the value is included in the array
     * @param values The array of values
     * @param value  The value
     */
    function _hasVisited(values, value) {
        for (var lp = values.length - 1; lp >= 0; lp--) {
            if (values[lp] === value) {
                return true;
            }
        }
        return false;
    }
    /**
     * Returns an object that contains callback functions for all "base/super" functions, this is used to "save"
     * enabling calling super.xxx() functions without requiring that the base "class" has defined a prototype references
     * @param target The current instance
     * @ignore
     */
    function _getBaseFuncs(classProto, thisTarget, instFuncs, useBaseInst) {
        function _instFuncProxy(target, funcHost, funcName) {
            var theFunc = funcHost[funcName];
            if (theFunc[DynProxyTag] && useBaseInst) {
                // grab and reuse the hosted looking function (if available) otherwise the original passed function
                var instFuncTable = target[DynInstFuncTable] || {};
                if (instFuncTable[DynAllowInstChkTag] !== false) {
                    theFunc = (instFuncTable[funcHost[DynClassName]] || {})[funcName] || theFunc;
                }
            }
            return function () {
                return theFunc.apply(target, arguments);
            };
        }
        // Start creating a new baseFuncs by creating proxies for the instance functions (as they may get replaced)
        var baseFuncs = {};
        _forEachProp(instFuncs, function (name) {
            // Create an instance callback for passing the base function to the caller
            baseFuncs[name] = _instFuncProxy(thisTarget, instFuncs, name);
        });
        // Get the base prototype functions
        var baseProto = _getObjProto(classProto);
        var visited = [];
        // Don't include base object functions for Object, Array or Function
        while (baseProto && !_isObjectArrayOrFunctionPrototype(baseProto) && !_hasVisited(visited, baseProto)) {
            // look for prototype functions
            _forEachProp(baseProto, function (name) {
                // Don't include any dynamic prototype instances - as we only want the real functions
                // For IE 7/8 the prototype lookup doesn't provide the full chain so we need to bypass the 
                // hasOwnProperty check we get all of the methods, main difference is that IE7/8 doesn't return
                // the Object prototype methods while bypassing the check
                if (!baseFuncs[name] && _isDynamicCandidate(baseProto, name, !_objGetPrototypeOf)) {
                    // Create an instance callback for passing the base function to the caller
                    baseFuncs[name] = _instFuncProxy(thisTarget, baseProto, name);
                }
            });
            // We need to find all possible functions that might be overloaded by walking the entire prototype chain
            // This avoids the caller from needing to check whether it's direct base class implements the function or not
            // by walking the entire chain it simplifies the usage and issues from upgrading any of the base classes.
            visited.push(baseProto);
            baseProto = _getObjProto(baseProto);
        }
        return baseFuncs;
    }
    function _getInstFunc(target, funcName, proto, currentDynProtoProxy) {
        var instFunc = null;
        // We need to check whether the class name is defined directly on this prototype otherwise
        // it will walk the proto chain and return any parent proto classname.
        if (target && _hasOwnProperty$1(proto, DynClassName)) {
            var instFuncTable = target[DynInstFuncTable] || {};
            instFunc = (instFuncTable[proto[DynClassName]] || {})[funcName];
            if (!instFunc) {
                // Avoid stack overflow from recursive calling the same function
                _throwTypeError("Missing [" + funcName + "] " + strFunction$1);
            }
            // We have the instance function, lets check it we can speed up further calls
            // by adding the instance function back directly on the instance (avoiding the dynamic func lookup)
            if (!instFunc[DynInstChkTag] && instFuncTable[DynAllowInstChkTag] !== false) {
                // If the instance already has an instance function we can't replace it
                var canAddInst = !_hasOwnProperty$1(target, funcName);
                // Get current prototype
                var objProto = _getObjProto(target);
                var visited = [];
                // Lookup the function starting at the top (instance level prototype) and traverse down, if the first matching function
                // if nothing is found or if the first hit is a dynamic proto instance then we can safely add an instance shortcut
                while (canAddInst && objProto && !_isObjectArrayOrFunctionPrototype(objProto) && !_hasVisited(visited, objProto)) {
                    var protoFunc = objProto[funcName];
                    if (protoFunc) {
                        canAddInst = (protoFunc === currentDynProtoProxy);
                        break;
                    }
                    // We need to find all possible initial functions to ensure that we don't bypass a valid override function
                    visited.push(objProto);
                    objProto = _getObjProto(objProto);
                }
                try {
                    if (canAddInst) {
                        // This instance doesn't have an instance func and the class hierarchy does have a higher level prototype version
                        // so it's safe to directly assign for any subsequent calls (for better performance)
                        target[funcName] = instFunc;
                    }
                    // Block further attempts to set the instance function for any
                    instFunc[DynInstChkTag] = 1;
                }
                catch (e) {
                    // Don't crash if the object is readonly or the runtime doesn't allow changing this
                    // And set a flag so we don't try again for any function
                    instFuncTable[DynAllowInstChkTag] = false;
                }
            }
        }
        return instFunc;
    }
    function _getProtoFunc(funcName, proto, currentDynProtoProxy) {
        var protoFunc = proto[funcName];
        // Check that the prototype function is not a self reference -- try to avoid stack overflow!
        if (protoFunc === currentDynProtoProxy) {
            // It is so lookup the base prototype
            protoFunc = _getObjProto(proto)[funcName];
        }
        if (typeof protoFunc !== strFunction$1) {
            _throwTypeError("[" + funcName + "] is not a " + strFunction$1);
        }
        return protoFunc;
    }
    /**
     * Add the required dynamic prototype methods to the the class prototype
     * @param proto - The class prototype
     * @param className - The instance classname
     * @param target - The target instance
     * @param baseInstFuncs - The base instance functions
     * @param setInstanceFunc - Flag to allow prototype function to reset the instance function if one does not exist
     * @ignore
     */
    function _populatePrototype(proto, className, target, baseInstFuncs, setInstanceFunc) {
        function _createDynamicPrototype(proto, funcName) {
            var dynProtoProxy = function () {
                // Use the instance or prototype function
                var instFunc = _getInstFunc(this, funcName, proto, dynProtoProxy) || _getProtoFunc(funcName, proto, dynProtoProxy);
                return instFunc.apply(this, arguments);
            };
            // Tag this function as a proxy to support replacing dynamic proxy elements (primary use case is for unit testing
            // via which can dynamically replace the prototype function reference)
            dynProtoProxy[DynProxyTag] = 1;
            return dynProtoProxy;
        }
        if (!_isObjectOrArrayPrototype(proto)) {
            var instFuncTable = target[DynInstFuncTable] = target[DynInstFuncTable] || {};
            var instFuncs_1 = instFuncTable[className] = (instFuncTable[className] || {}); // fetch and assign if as it may not exist yet
            // Set whether we are allow to lookup instances, if someone has set to false then do not re-enable
            if (instFuncTable[DynAllowInstChkTag] !== false) {
                instFuncTable[DynAllowInstChkTag] = !!setInstanceFunc;
            }
            _forEachProp(target, function (name) {
                // Only add overridden functions
                if (_isDynamicCandidate(target, name, false) && target[name] !== baseInstFuncs[name]) {
                    // Save the instance Function to the lookup table and remove it from the instance as it's not a dynamic proto function
                    instFuncs_1[name] = target[name];
                    delete target[name];
                    // Add a dynamic proto if one doesn't exist or if a prototype function exists and it's not a dynamic one
                    if (!_hasOwnProperty$1(proto, name) || (proto[name] && !proto[name][DynProxyTag])) {
                        proto[name] = _createDynamicPrototype(proto, name);
                    }
                }
            });
        }
    }
    /**
     * Checks whether the passed prototype object appears to be correct by walking the prototype hierarchy of the instance
     * @param classProto The class prototype instance
     * @param thisTarget The current instance that will be checked whether the passed prototype instance is in the hierarchy
     * @ignore
     */
    function _checkPrototype(classProto, thisTarget) {
        var thisProto = _getObjProto(thisTarget);
        while (thisProto && !_isObjectArrayOrFunctionPrototype(thisProto)) {
            if (thisProto === classProto) {
                return true;
            }
            thisProto = _getObjProto(thisProto);
        }
        return false;
    }
    /**
     * Gets the current prototype name using the ES6 name if available otherwise falling back to a use unknown as the name.
     * It's not critical for this to return a name, it's used to decorate the generated unique name for easier debugging only.
     * @param target
     * @param unknownValue
     * @ignore
     */
    function _getObjName(target, unknownValue) {
        if (_hasOwnProperty$1(target, Prototype)) {
            // Look like a prototype
            return target.name || unknownValue || UnknownValue;
        }
        return (((target || {})[Constructor]) || {}).name || unknownValue || UnknownValue;
    }
    /**
     * Helper function when creating dynamic (inline) functions for classes, this helper performs the following tasks :-
     * - Saves references to all defined base class functions
     * - Calls the delegateFunc with the current target (this) and a base object reference that can be used to call all "super" functions.
     * - Will populate the class prototype for all overridden functions to support class extension that call the prototype instance.
     * Callers should use this helper when declaring all function within the constructor of a class, as mentioned above the delegateFunc is
     * passed both the target "this" and an object that can be used to call any base (super) functions, using this based object in place of
     * super.XXX() (which gets expanded to _super.prototype.XXX()) provides a better minification outcome and also ensures the correct "this"
     * context is maintained as TypeScript creates incorrect references using super.XXXX() for dynamically defined functions i.e. Functions
     * defined in the constructor or some other function (rather than declared as complete typescript functions).
     * ### Usage
     * ```typescript
     * import dynamicProto from "@microsoft/dynamicproto-js";
     * class ExampleClass extends BaseClass {
     *     constructor() {
     *         dynamicProto(ExampleClass, this, (_self, base) => {
     *             // This will define a function that will be converted to a prototype function
     *             _self.newFunc = () => {
     *                 // Access any "this" instance property
     *                 if (_self.someProperty) {
     *                     ...
     *                 }
     *             }
     *             // This will define a function that will be converted to a prototype function
     *             _self.myFunction = () => {
     *                 // Access any "this" instance property
     *                 if (_self.someProperty) {
     *                     // Call the base version of the function that we are overriding
     *                     base.myFunction();
     *                 }
     *                 ...
     *             }
     *             _self.initialize = () => {
     *                 ...
     *             }
     *             // Warnings: While the following will work as _self is simply a reference to
     *             // this, if anyone overrides myFunction() the overridden will be called first
     *             // as the normal JavaScript method resolution will occur and the defined
     *             // _self.initialize() function is actually gets removed from the instance and
     *             // a proxy prototype version is created to reference the created method.
     *             _self.initialize();
     *         });
     *     }
     * }
     * ```
     * @typeparam DPType This is the generic type of the class, used to keep intellisense valid
     * @typeparam DPCls The type that contains the prototype of the current class
     * @param theClass - This is the current class instance which contains the prototype for the current class
     * @param target - The current "this" (target) reference, when the class has been extended this.prototype will not be the 'theClass' value.
     * @param delegateFunc - The callback function (closure) that will create the dynamic function
     * @param options - Additional options to configure how the dynamic prototype operates
     */
    function dynamicProto(theClass, target, delegateFunc, options) {
        // Make sure that the passed theClass argument looks correct
        if (!_hasOwnProperty$1(theClass, Prototype)) {
            _throwTypeError("theClass is an invalid class definition.");
        }
        // Quick check to make sure that the passed theClass argument looks correct (this is a common copy/paste error)
        var classProto = theClass[Prototype];
        if (!_checkPrototype(classProto, target)) {
            _throwTypeError("[" + _getObjName(theClass) + "] is not in class hierarchy of [" + _getObjName(target) + "]");
        }
        var className = null;
        if (_hasOwnProperty$1(classProto, DynClassName)) {
            // Only grab the class name if it's defined on this prototype (i.e. don't walk the prototype chain)
            className = classProto[DynClassName];
        }
        else {
            // As not all browser support name on the prototype creating a unique dynamic one if we have not already
            // assigned one, so we can use a simple string as the lookup rather than an object for the dynamic instance
            // function table lookup.
            className = DynClassNamePrefix + _getObjName(theClass, "_") + "$" + _dynamicNames;
            _dynamicNames++;
            classProto[DynClassName] = className;
        }
        var perfOptions = dynamicProto[DynProtoDefaultOptions];
        var useBaseInst = !!perfOptions[strUseBaseInst];
        if (useBaseInst && options && options[strUseBaseInst] !== undefined) {
            useBaseInst = !!options[strUseBaseInst];
        }
        // Get the current instance functions
        var instFuncs = _getInstanceFuncs(target);
        // Get all of the functions for any base instance (before they are potentially overridden)
        var baseFuncs = _getBaseFuncs(classProto, target, instFuncs, useBaseInst);
        // Execute the delegate passing in both the current target "this" and "base" function references
        // Note casting the same type as we don't actually have the base class here and this will provide some intellisense support
        delegateFunc(target, baseFuncs);
        // Don't allow setting instance functions for older IE instances
        var setInstanceFunc = !!_objGetPrototypeOf && !!perfOptions[strSetInstFuncs];
        if (setInstanceFunc && options) {
            setInstanceFunc = !!options[strSetInstFuncs];
        }
        // Populate the Prototype for any overridden instance functions
        _populatePrototype(classProto, className, target, instFuncs, setInstanceFunc !== false);
    }
    /**
     * Exposes the default global options to allow global configuration, if the global values are disabled these will override
     * any passed values. This is primarily exposed to support unit-testing without the need for individual classes to expose
     * their internal usage of dynamic proto.
     */
    var perfDefaults = {
        setInstFuncs: true,
        useBaseInst: true
    };
    // And expose for testing
    dynamicProto[DynProtoDefaultOptions] = perfDefaults;

    // Copyright (c) Microsoft Corporation. All rights reserved.
    /**
     * For user non actionable traces use AI Internal prefix.
     */
    var AiNonUserActionablePrefix = "AI (Internal): ";
    /**
     * Prefix of the traces in portal.
     */
    var AiUserActionablePrefix = "AI: ";
    /**
     *  Session storage key for the prefix for the key indicating message type already logged
     */
    var AIInternalMessagePrefix = "AITR_";
    function _sanitizeDiagnosticText(text) {
        if (text) {
            return "\"" + text.replace(/\"/g, "") + "\"";
        }
        return "";
    }
    var _InternalLogMessage = /** @class */ (function () {
        function _InternalLogMessage(msgId, msg, isUserAct, properties) {
            if (isUserAct === void 0) { isUserAct = false; }
            var _self = this;
            _self.messageId = msgId;
            _self.message =
                (isUserAct ? AiUserActionablePrefix : AiNonUserActionablePrefix) +
                    msgId;
            var strProps = "";
            if (hasJSON()) {
                strProps = getJSON().stringify(properties);
            }
            var diagnosticText = (msg ? " message:" + _sanitizeDiagnosticText(msg) : "") +
                (properties ? " props:" + _sanitizeDiagnosticText(strProps) : "");
            _self.message += diagnosticText;
        }
        _InternalLogMessage.dataType = "MessageData";
        return _InternalLogMessage;
    }());
    var DiagnosticLogger = /** @class */ (function () {
        function DiagnosticLogger(config) {
            this.identifier = 'DiagnosticLogger';
            /**
             * The internal logging queue
             */
            this.queue = [];
            /**
             * Count of internal messages sent
             */
            var _messageCount = 0;
            /**
             * Holds information about what message types were already logged to console or sent to server.
             */
            var _messageLogged = {};
            dynamicProto(DiagnosticLogger, this, function (_self) {
                var isNullOrUndefined = CoreUtils.isNullOrUndefined;
                var isUndefined = CoreUtils.isUndefined;
                var isFunction = CoreUtils.isFunction;
                if (isNullOrUndefined(config)) {
                    config = {};
                }
                _self.consoleLoggingLevel = function () { return _getConfigValue('loggingLevelConsole', 0); };
                _self.telemetryLoggingLevel = function () { return _getConfigValue('loggingLevelTelemetry', 1); };
                _self.maxInternalMessageLimit = function () { return _getConfigValue('maxMessageLimit', 25); };
                _self.enableDebugExceptions = function () { return _getConfigValue('enableDebugExceptions', false); };
                /**
                 * This method will throw exceptions in debug mode or attempt to log the error as a console warning.
                 * @param severity {LoggingSeverity} - The severity of the log message
                 * @param message {_InternalLogMessage} - The log message.
                 */
                _self.throwInternal = function (severity, msgId, msg, properties, isUserAct) {
                    if (isUserAct === void 0) { isUserAct = false; }
                    var message = new _InternalLogMessage(msgId, msg, isUserAct, properties);
                    if (_self.enableDebugExceptions()) {
                        throw message;
                    }
                    else {
                        if (!isUndefined(message) && !!message) {
                            if (!isUndefined(message.message)) {
                                if (isUserAct) {
                                    // check if this message type was already logged to console for this page view and if so, don't log it again
                                    var messageKey = +message.messageId;
                                    if (!_messageLogged[messageKey] && _self.consoleLoggingLevel() >= LoggingSeverity.WARNING) {
                                        _self.warnToConsole(message.message);
                                        _messageLogged[messageKey] = true;
                                    }
                                }
                                else {
                                    // don't log internal AI traces in the console, unless the verbose logging is enabled
                                    if (_self.consoleLoggingLevel() >= LoggingSeverity.WARNING) {
                                        _self.warnToConsole(message.message);
                                    }
                                }
                                _self.logInternalMessage(severity, message);
                            }
                        }
                    }
                };
                /**
                 * This will write a warning to the console if possible
                 * @param message {string} - The warning message
                 */
                _self.warnToConsole = function (message) {
                    var theConsole = getConsole();
                    if (!!theConsole) {
                        var logFunc = 'log';
                        if (theConsole.warn) {
                            logFunc = 'warn';
                        }
                        if (isFunction(theConsole[logFunc])) {
                            theConsole[logFunc](message);
                        }
                    }
                };
                /**
                 * Resets the internal message count
                 */
                _self.resetInternalMessageCount = function () {
                    _messageCount = 0;
                    _messageLogged = {};
                };
                /**
                 * Logs a message to the internal queue.
                 * @param severity {LoggingSeverity} - The severity of the log message
                 * @param message {_InternalLogMessage} - The message to log.
                 */
                _self.logInternalMessage = function (severity, message) {
                    if (_areInternalMessagesThrottled()) {
                        return;
                    }
                    // check if this message type was already logged for this session and if so, don't log it again
                    var logMessage = true;
                    var messageKey = AIInternalMessagePrefix + message.messageId;
                    // if the session storage is not available, limit to only one message type per page view
                    if (_messageLogged[messageKey]) {
                        logMessage = false;
                    }
                    else {
                        _messageLogged[messageKey] = true;
                    }
                    if (logMessage) {
                        // Push the event in the internal queue
                        if (severity <= _self.telemetryLoggingLevel()) {
                            _self.queue.push(message);
                            _messageCount++;
                        }
                        // When throttle limit reached, send a special event
                        if (_messageCount === _self.maxInternalMessageLimit()) {
                            var throttleLimitMessage = "Internal events throttle limit per PageView reached for this app.";
                            var throttleMessage = new _InternalLogMessage(_InternalMessageId.MessageLimitPerPVExceeded, throttleLimitMessage, false);
                            _self.queue.push(throttleMessage);
                            _self.warnToConsole(throttleLimitMessage);
                        }
                    }
                };
                function _getConfigValue(name, defValue) {
                    var value = config[name];
                    if (!isNullOrUndefined(value)) {
                        return value;
                    }
                    return defValue;
                }
                function _areInternalMessagesThrottled() {
                    return _messageCount >= _self.maxInternalMessageLimit();
                }
            });
        }
        /**
         * When this is true the SDK will throw exceptions to aid in debugging.
         */
        DiagnosticLogger.prototype.enableDebugExceptions = function () {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
            return false;
        };
        /**
         * 0: OFF (default)
         * 1: CRITICAL
         * 2: >= WARNING
         */
        DiagnosticLogger.prototype.consoleLoggingLevel = function () {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
            return 0;
        };
        /**
         * 0: OFF
         * 1: CRITICAL (default)
         * 2: >= WARNING
         */
        DiagnosticLogger.prototype.telemetryLoggingLevel = function () {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
            return 1;
        };
        /**
         * The maximum number of internal messages allowed to be sent per page view
         */
        DiagnosticLogger.prototype.maxInternalMessageLimit = function () {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
            return 25;
        };
        /**
         * This method will throw exceptions in debug mode or attempt to log the error as a console warning.
         * @param severity {LoggingSeverity} - The severity of the log message
         * @param message {_InternalLogMessage} - The log message.
         */
        DiagnosticLogger.prototype.throwInternal = function (severity, msgId, msg, properties, isUserAct) {
            if (isUserAct === void 0) { isUserAct = false; }
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        /**
         * This will write a warning to the console if possible
         * @param message {string} - The warning message
         */
        DiagnosticLogger.prototype.warnToConsole = function (message) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        /**
         * Resets the internal message count
         */
        DiagnosticLogger.prototype.resetInternalMessageCount = function () {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        /**
         * Logs a message to the internal queue.
         * @param severity {LoggingSeverity} - The severity of the log message
         * @param message {_InternalLogMessage} - The message to log.
         */
        DiagnosticLogger.prototype.logInternalMessage = function (severity, message) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        return DiagnosticLogger;
    }());

    var strExecutionContextKey = "ctx";
    var PerfEvent = /** @class */ (function () {
        function PerfEvent(name, payloadDetails, isAsync) {
            var _self = this;
            var accessorDefined = false;
            _self.start = CoreUtils.dateNow();
            _self.name = name;
            _self.isAsync = isAsync;
            _self.isChildEvt = function () { return false; };
            if (CoreUtils.isFunction(payloadDetails)) {
                // Create an accessor to minimize the potential performance impact of executing the payloadDetails callback
                var theDetails_1;
                accessorDefined = CoreUtils.objDefineAccessors(_self, 'payload', function () {
                    // Delay the execution of the payloadDetails until needed
                    if (!theDetails_1 && CoreUtils.isFunction(payloadDetails)) {
                        theDetails_1 = payloadDetails();
                        // clear it out now so the referenced objects can be garbage collected
                        payloadDetails = null;
                    }
                    return theDetails_1;
                });
            }
            _self.getCtx = function (key) {
                if (key) {
                    // The parent and child links are located directly on the object (for better viewing in the DebugPlugin)
                    if (key === PerfEvent.ParentContextKey || key === PerfEvent.ChildrenContextKey) {
                        return _self[key];
                    }
                    return (_self[strExecutionContextKey] || {})[key];
                }
                return null;
            };
            _self.setCtx = function (key, value) {
                if (key) {
                    // Put the parent and child links directly on the object (for better viewing in the DebugPlugin)
                    if (key === PerfEvent.ParentContextKey) {
                        // Simple assumption, if we are setting a parent then we must be a child
                        if (!_self[key]) {
                            _self.isChildEvt = function () { return true; };
                        }
                        _self[key] = value;
                    }
                    else if (key === PerfEvent.ChildrenContextKey) {
                        _self[key] = value;
                    }
                    else {
                        var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
                        ctx[key] = value;
                    }
                }
            };
            _self.complete = function () {
                var childTime = 0;
                var childEvts = _self.getCtx(PerfEvent.ChildrenContextKey);
                if (CoreUtils.isArray(childEvts)) {
                    for (var lp = 0; lp < childEvts.length; lp++) {
                        var childEvt = childEvts[lp];
                        if (childEvt) {
                            childTime += childEvt.time;
                        }
                    }
                }
                _self.time = CoreUtils.dateNow() - _self.start;
                _self.exTime = _self.time - childTime;
                _self.complete = function () { };
                if (!accessorDefined && CoreUtils.isFunction(payloadDetails)) {
                    // If we couldn't define the property set during complete -- to minimize the perf impact until after the time
                    _self.payload = payloadDetails();
                }
            };
        }
        PerfEvent.ParentContextKey = "parent";
        PerfEvent.ChildrenContextKey = "childEvts";
        return PerfEvent;
    }());
    var PerfManager = /** @class */ (function () {
        function PerfManager(manager) {
            /**
             * General bucket used for execution context set and retrieved via setCtx() and getCtx.
             * Defined as private so it can be visualized via the DebugPlugin
             */
            this.ctx = {};
            dynamicProto(PerfManager, this, function (_self) {
                _self.create = function (src, payloadDetails, isAsync) {
                    // TODO (@MSNev): at some point we will want to add additional configuration to "select" which events to instrument
                    // for now this is just a simple do everything.
                    return new PerfEvent(src, payloadDetails, isAsync);
                };
                _self.fire = function (perfEvent) {
                    if (perfEvent) {
                        perfEvent.complete();
                        if (manager) {
                            manager.perfEvent(perfEvent);
                        }
                    }
                };
                _self.setCtx = function (key, value) {
                    if (key) {
                        var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
                        ctx[key] = value;
                    }
                };
                _self.getCtx = function (key) {
                    return (_self[strExecutionContextKey] || {})[key];
                };
            });
        }
        /**
         * Create a new event and start timing, the manager may return null/undefined to indicate that it does not
         * want to monitor this source event.
         * @param src The source name of the event
         * @param payloadDetails - An optional callback function to fetch the payload details for the event.
         * @param isAsync - Is the event occurring from a async event
         */
        PerfManager.prototype.create = function (src, payload, isAsync) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
            return null;
        };
        /**
         * Complete the perfEvent and fire any notifications.
         * @param perfEvent Fire the event which will also complete the passed event
         */
        PerfManager.prototype.fire = function (perfEvent) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        /**
         * Set an execution context value
         * @param key - The context key name
         * @param value - The value
         */
        PerfManager.prototype.setCtx = function (key, value) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        /**
         * Get the execution context value
         * @param key - The context key
         */
        PerfManager.prototype.getCtx = function (key) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        return PerfManager;
    }());
    var doPerfActiveKey = "CoreUtils.doPerf";
    /**
     * Helper function to wrap a function with a perf event
     * @param mgrSource - The Performance Manager or a Performance provider source (may be null)
     * @param getSource - The callback to create the source name for the event (if perf monitoring is enabled)
     * @param func - The function to call and measure
     * @param details - A function to return the payload details
     * @param isAsync - Is the event / function being call asynchronously or synchronously
     */
    function doPerf(mgrSource, getSource, func, details, isAsync) {
        if (mgrSource) {
            var perfMgr = mgrSource;
            if (perfMgr && CoreUtils.isFunction(perfMgr["getPerfMgr"])) {
                // Looks like a perf manager provider object
                perfMgr = perfMgr["getPerfMgr"]();
            }
            if (perfMgr) {
                var perfEvt = void 0;
                var currentActive = perfMgr.getCtx(doPerfActiveKey);
                try {
                    perfEvt = perfMgr.create(getSource(), details, isAsync);
                    if (perfEvt) {
                        if (currentActive && perfEvt.setCtx) {
                            perfEvt.setCtx(PerfEvent.ParentContextKey, currentActive);
                            if (currentActive.getCtx && currentActive.setCtx) {
                                var children = currentActive.getCtx(PerfEvent.ChildrenContextKey);
                                if (!children) {
                                    children = [];
                                    currentActive.setCtx(PerfEvent.ChildrenContextKey, children);
                                }
                                children.push(perfEvt);
                            }
                        }
                        // Set this event as the active event now
                        perfMgr.setCtx(doPerfActiveKey, perfEvt);
                        return func(perfEvt);
                    }
                }
                catch (ex) {
                    if (perfEvt && perfEvt.setCtx) {
                        perfEvt.setCtx("exception", ex);
                    }
                }
                finally {
                    // fire the perf event
                    if (perfEvt) {
                        perfMgr.fire(perfEvt);
                    }
                    // Reset the active event to the previous value
                    perfMgr.setCtx(doPerfActiveKey, currentActive);
                }
            }
        }
        return func();
    }

    // Copyright (c) Microsoft Corporation. All rights reserved.
    var _isFunction$1 = CoreUtils.isFunction;
    var TelemetryPluginChain = /** @class */ (function () {
        function TelemetryPluginChain(plugin, defItemCtx) {
            var _self = this;
            var _nextProxy = null;
            var _hasProcessTelemetry = _isFunction$1(plugin.processTelemetry);
            var _hasSetNext = _isFunction$1(plugin.setNextPlugin);
            _self._hasRun = false;
            _self.getPlugin = function () {
                return plugin;
            };
            _self.getNext = function () {
                return _nextProxy;
            };
            _self.setNext = function (nextPlugin) {
                _nextProxy = nextPlugin;
            };
            _self.processTelemetry = function (env, itemCtx) {
                if (!itemCtx) {
                    // Looks like a plugin didn't pass the (optional) context, so restore to the default
                    itemCtx = defItemCtx;
                }
                var identifier = plugin ? plugin.identifier : "TelemetryPluginChain";
                doPerf(itemCtx ? itemCtx.core() : null, function () { return identifier + ":processTelemetry"; }, function () {
                    if (plugin && _hasProcessTelemetry) {
                        _self._hasRun = true;
                        try {
                            // Ensure that we keep the context in sync (for processNext()), just in case a plugin
                            // doesn't calls processTelemetry() instead of itemContext.processNext() or some 
                            // other form of error occurred
                            itemCtx.setNext(_nextProxy);
                            if (_hasSetNext) {
                                // Backward compatibility setting the next plugin on the instance
                                plugin.setNextPlugin(_nextProxy);
                            }
                            // Set a flag on the next plugin so we know if it was attempted to be executed
                            _nextProxy && (_nextProxy._hasRun = false);
                            plugin.processTelemetry(env, itemCtx);
                        }
                        catch (error) {
                            var hasRun = _nextProxy && _nextProxy._hasRun;
                            if (!_nextProxy || !hasRun) {
                                // Either we have no next plugin or the current one did not attempt to call the next plugin
                                // Which means the current one is the root of the failure so log/report this failure
                                itemCtx.diagLog().throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.PluginException, "Plugin [" + plugin.identifier + "] failed during processTelemetry - " + error);
                            }
                            if (_nextProxy && !hasRun) {
                                // As part of the failure the current plugin did not attempt to call the next plugin in the cahin
                                // So rather than leave the pipeline dead in the water we call the next plugin
                                _nextProxy.processTelemetry(env, itemCtx);
                            }
                        }
                    }
                    else if (_nextProxy) {
                        _self._hasRun = true;
                        // The underlying plugin is either not defined or does not have a processTelemetry implementation
                        // so we still want the next plugin to be executed.
                        _nextProxy.processTelemetry(env, itemCtx);
                    }
                }, function () { return ({ item: env }); }, !(env.sync));
            };
        }
        return TelemetryPluginChain;
    }());

    // Copyright (c) Microsoft Corporation. All rights reserved.
    var _isNullOrUndefined$1 = CoreUtils.isNullOrUndefined;
    /**
     * Creates the instance execution chain for the plugins
     */
    function _createProxyChain(plugins, itemCtx) {
        var proxies = [];
        if (plugins && plugins.length > 0) {
            // Create the proxies and wire up the next plugin chain
            var lastProxy = null;
            for (var idx = 0; idx < plugins.length; idx++) {
                var thePlugin = plugins[idx];
                if (thePlugin && CoreUtils.isFunction(thePlugin.processTelemetry)) {
                    // Only add plugins that are processors
                    var newProxy = new TelemetryPluginChain(thePlugin, itemCtx);
                    proxies.push(newProxy);
                    if (lastProxy) {
                        // Set this new proxy as the next for the previous one
                        lastProxy.setNext(newProxy);
                    }
                    lastProxy = newProxy;
                }
            }
        }
        return proxies.length > 0 ? proxies[0] : null;
    }
    function _copyProxyChain(proxy, itemCtx, startAt) {
        var plugins = [];
        var add = startAt ? false : true;
        if (proxy) {
            while (proxy) {
                var thePlugin = proxy.getPlugin();
                if (add || thePlugin === startAt) {
                    add = true;
                    plugins.push(thePlugin);
                }
                proxy = proxy.getNext();
            }
        }
        if (!add) {
            plugins.push(startAt);
        }
        return _createProxyChain(plugins, itemCtx);
    }
    function _copyPluginChain(srcPlugins, itemCtx, startAt) {
        var plugins = srcPlugins;
        var add = false;
        if (startAt && srcPlugins) {
            plugins = [];
            CoreUtils.arrForEach(srcPlugins, function (thePlugin) {
                if (add || thePlugin === startAt) {
                    add = true;
                    plugins.push(thePlugin);
                }
            });
        }
        if (startAt && !add) {
            if (!plugins) {
                plugins = [];
            }
            plugins.push(startAt);
        }
        return _createProxyChain(plugins, itemCtx);
    }
    var ProcessTelemetryContext = /** @class */ (function () {
        /**
         * Creates a new Telemetry Item context with the current config, core and plugin execution chain
         * @param plugins - The plugin instances that will be executed
         * @param config - The current config
         * @param core - The current core instance
         */
        function ProcessTelemetryContext(plugins, config, core, startAt) {
            var _self = this;
            var _nextProxy = null; // Null == No next plugin
            // There is no next element (null) vs not defined (undefined)
            if (startAt !== null) {
                if (plugins && CoreUtils.isFunction(plugins.getPlugin)) {
                    // We have a proxy chain object
                    _nextProxy = _copyProxyChain(plugins, _self, startAt || plugins.getPlugin());
                }
                else {
                    // We just have an array
                    if (startAt) {
                        _nextProxy = _copyPluginChain(plugins, _self, startAt);
                    }
                    else if (CoreUtils.isUndefined(startAt)) {
                        // Undefined means copy the existing chain
                        _nextProxy = _createProxyChain(plugins, _self);
                    }
                }
            }
            _self.core = function () {
                return core;
            };
            _self.diagLog = function () {
                var logger = (core || {}).logger;
                if (!logger) {
                    // Fallback so we always have a logger
                    logger = new DiagnosticLogger(config || {});
                }
                return logger;
            };
            _self.getCfg = function () {
                return config;
            };
            _self.getExtCfg = function (identifier, defaultValue) {
                if (defaultValue === void 0) { defaultValue = {}; }
                var theConfig;
                if (config) {
                    var extConfig = config.extensionConfig;
                    if (extConfig && identifier) {
                        theConfig = extConfig[identifier];
                    }
                }
                return (theConfig ? theConfig : defaultValue);
            };
            _self.getConfig = function (identifier, field, defaultValue) {
                if (defaultValue === void 0) { defaultValue = false; }
                var theValue;
                var extConfig = _self.getExtCfg(identifier, null);
                if (extConfig && !_isNullOrUndefined$1(extConfig[field])) {
                    theValue = extConfig[field];
                }
                else if (config && !_isNullOrUndefined$1(config[field])) {
                    theValue = config[field];
                }
                return !_isNullOrUndefined$1(theValue) ? theValue : defaultValue;
            };
            _self.hasNext = function () {
                return _nextProxy != null;
            };
            _self.getNext = function () {
                return _nextProxy;
            };
            _self.setNext = function (nextPlugin) {
                _nextProxy = nextPlugin;
            };
            _self.processNext = function (env) {
                var nextPlugin = _nextProxy;
                if (nextPlugin) {
                    // Automatically move to the next plugin
                    _nextProxy = nextPlugin.getNext();
                    nextPlugin.processTelemetry(env, _self);
                }
            };
            _self.createNew = function (plugins, startAt) {
                if (plugins === void 0) { plugins = null; }
                return new ProcessTelemetryContext(plugins || _nextProxy, config, core, startAt);
            };
        }
        return ProcessTelemetryContext;
    }());

    // Copyright (c) Microsoft Corporation. All rights reserved.
    var _isFunction$2 = CoreUtils.isFunction;
    var getPlugin = "getPlugin";
    /**
     * BaseTelemetryPlugin provides a basic implementation of the ITelemetryPlugin interface so that plugins
     * can avoid implementation the same set of boiler plate code as well as provide a base
     * implementation so that new default implementations can be added without breaking all plugins.
     */
    var BaseTelemetryPlugin = /** @class */ (function () {
        function BaseTelemetryPlugin() {
            var _self = this;
            var _isinitialized = false;
            var _rootCtx = null; // Used as the root context, holding the current config and initialized core
            var _nextPlugin = null; // Used for backward compatibility where plugins don't call the main pipeline
            _self.core = null;
            _self.diagLog = function (itemCtx) {
                return _self._getTelCtx(itemCtx).diagLog();
            };
            _self.isInitialized = function () {
                return _isinitialized;
            };
            _self.setInitialized = function (isInitialized) {
                _isinitialized = isInitialized;
            };
            // _self.getNextPlugin = () => DO NOT IMPLEMENT
            // Sub-classes of this base class *should* not be relying on this value and instead
            // should use processNext() function. If you require access to the plugin use the
            // IProcessTelemetryContext.getNext().getPlugin() while in the pipeline, Note getNext() may return null.
            _self.setNextPlugin = function (next) {
                _nextPlugin = next;
            };
            _self.processNext = function (env, itemCtx) {
                if (itemCtx) {
                    // Normal core execution sequence
                    itemCtx.processNext(env);
                }
                else if (_nextPlugin && _isFunction$2(_nextPlugin.processTelemetry)) {
                    // Looks like backward compatibility or out of band processing. And as it looks 
                    // like a ITelemetryPlugin or ITelemetryPluginChain, just call processTelemetry
                    _nextPlugin.processTelemetry(env, null);
                }
            };
            _self._getTelCtx = function (currentCtx) {
                if (currentCtx === void 0) { currentCtx = null; }
                var itemCtx = currentCtx;
                if (!itemCtx) {
                    var rootCtx = _rootCtx || new ProcessTelemetryContext(null, {}, _self.core);
                    // tslint:disable-next-line: prefer-conditional-expression
                    if (_nextPlugin && _nextPlugin[getPlugin]) {
                        // Looks like a chain object
                        itemCtx = rootCtx.createNew(null, _nextPlugin[getPlugin]);
                    }
                    else {
                        itemCtx = rootCtx.createNew(null, _nextPlugin);
                    }
                }
                return itemCtx;
            };
            _self._baseTelInit = function (config, core, extensions, pluginChain) {
                if (config) {
                    // Make sure the extensionConfig exists
                    config.extensionConfig = config.extensionConfig || [];
                }
                if (!pluginChain && core) {
                    // Get the first plugin from the core
                    pluginChain = core.getProcessTelContext().getNext();
                }
                var nextPlugin = _nextPlugin;
                if (_nextPlugin && _nextPlugin[getPlugin]) {
                    // If it looks like a proxy/chain then get the plugin
                    nextPlugin = _nextPlugin[getPlugin]();
                }
                // Support legacy plugins where core was defined as a property
                _self.core = core;
                _rootCtx = new ProcessTelemetryContext(pluginChain, config, core, nextPlugin);
                _isinitialized = true;
            };
        }
        BaseTelemetryPlugin.prototype.initialize = function (config, core, extensions, pluginChain) {
            this._baseTelInit(config, core, extensions, pluginChain);
        };
        return BaseTelemetryPlugin;
    }());

    // Copyright (c) Microsoft Corporation. All rights reserved.
    var _isFunction$3 = CoreUtils.isFunction;
    var processTelemetry = "processTelemetry";
    var priority = "priority";
    var setNextPlugin = "setNextPlugin";
    var isInitialized = "isInitialized";
    /**
     * Initialize the queue of plugins
     * @param plugins - The array of plugins to initialize and setting of the next plugin
     * @param config The current config for the instance
     * @param core THe current core instance
     * @param extensions The extensions
     */
    function initializePlugins(processContext, extensions) {
        // Set the next plugin and identified the uninitialized plugins
        var initPlugins = [];
        var lastPlugin = null;
        var proxy = processContext.getNext();
        while (proxy) {
            var thePlugin = proxy.getPlugin();
            if (thePlugin) {
                if (lastPlugin &&
                    _isFunction$3(lastPlugin[setNextPlugin]) &&
                    _isFunction$3(thePlugin[processTelemetry])) {
                    // Set this plugin as the next for the previous one
                    lastPlugin[setNextPlugin](thePlugin);
                }
                if (!_isFunction$3(thePlugin[isInitialized]) || !thePlugin[isInitialized]()) {
                    initPlugins.push(thePlugin);
                }
                lastPlugin = thePlugin;
                proxy = proxy.getNext();
            }
        }
        // Now initiatilize the plugins
        CoreUtils.arrForEach(initPlugins, function (thePlugin) {
            thePlugin.initialize(processContext.getCfg(), processContext.core(), extensions, processContext.getNext());
        });
    }
    function sortPlugins(plugins) {
        // Sort by priority
        return plugins.sort(function (extA, extB) {
            var result = 0;
            var bHasProcess = _isFunction$3(extB[processTelemetry]);
            if (_isFunction$3(extA[processTelemetry])) {
                result = bHasProcess ? extA[priority] - extB[priority] : 1;
            }
            else if (bHasProcess) {
                result = -1;
            }
            return result;
        });
        // sort complete    
    }

    // Copyright (c) Microsoft Corporation. All rights reserved.
    var ChannelControllerPriority = 500;
    var ChannelValidationMessage = "Channel has invalid priority";
    var _objDefineAccessors = CoreUtils.objDefineAccessors;
    var ChannelController = /** @class */ (function (_super) {
        __extends(ChannelController, _super);
        function ChannelController() {
            var _this = _super.call(this) || this;
            _this.identifier = "ChannelControllerPlugin";
            _this.priority = ChannelControllerPriority; // in reserved range 100 to 200
            var _arrForEach = CoreUtils.arrForEach;
            var _channelQueue;
            dynamicProto(ChannelController, _this, function (_self, _base) {
                _self.setNextPlugin = function (next) {
                    // The Channel controller is last in pipeline
                };
                _self.processTelemetry = function (item, itemCtx) {
                    if (_channelQueue) {
                        _arrForEach(_channelQueue, function (queues) {
                            // pass on to first item in queue
                            if (queues.length > 0) {
                                // Copying the item context as we could have mutiple chains that are executing asynchronously
                                // and calling _getDefTelCtx as it's possible that the caller doesn't pass any context
                                var chainCtx = _this._getTelCtx(itemCtx).createNew(queues);
                                chainCtx.processNext(item);
                            }
                        });
                    }
                };
                _self.getChannelControls = function () {
                    return _channelQueue;
                };
                _self.initialize = function (config, core, extensions) {
                    if (_self.isInitialized()) {
                        // already initialized
                        return;
                    }
                    _base.initialize(config, core, extensions);
                    if (config.isCookieUseDisabled) {
                        CoreUtils.disableCookies();
                    }
                    _createChannelQueues((config || {}).channels, extensions);
                    // Initialize the Queues
                    _arrForEach(_channelQueue, function (queue) { return initializePlugins(new ProcessTelemetryContext(queue, config, core), extensions); });
                };
            });
            function _checkQueuePriority(queue) {
                _arrForEach(queue, function (queueItem) {
                    if (queueItem.priority < ChannelControllerPriority) {
                        throw Error(ChannelValidationMessage + queueItem.identifier);
                    }
                });
            }
            function _addChannelQueue(queue) {
                if (queue && queue.length > 0) {
                    queue = queue.sort(function (a, b) {
                        return a.priority - b.priority;
                    });
                    _checkQueuePriority(queue);
                    _channelQueue.push(queue);
                }
            }
            function _createChannelQueues(channels, extensions) {
                _channelQueue = [];
                if (channels) {
                    // Add and sort the configuration channel queues
                    _arrForEach(channels, function (queue) { return _addChannelQueue(queue); });
                }
                if (extensions) {
                    // Create a new channel queue for any extensions with a priority > the ChannelControllerPriority
                    var extensionQueue_1 = [];
                    _arrForEach(extensions, function (plugin) {
                        if (plugin.priority > ChannelControllerPriority) {
                            extensionQueue_1.push(plugin);
                        }
                    });
                    _addChannelQueue(extensionQueue_1);
                }
            }
            return _this;
        }
        ChannelController.prototype.processTelemetry = function (item, itemCtx) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        ChannelController.prototype.getChannelControls = function () {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
            return null;
        };
        ChannelController.prototype.initialize = function (config, core, extensions) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        /**
         * Static constructor, attempt to create accessors
         */
        // tslint:disable-next-line
        ChannelController._staticInit = (function () {
            // Dynamically create get/set property accessors
            _objDefineAccessors(ChannelController.prototype, "ChannelControls", ChannelController.prototype.getChannelControls);
            _objDefineAccessors(ChannelController.prototype, "channelQueue", ChannelController.prototype.getChannelControls);
        })();
        return ChannelController;
    }(BaseTelemetryPlugin));

    // Copyright (c) Microsoft Corporation. All rights reserved.
    var validationError = "Extensions must provide callback to initialize";
    var _arrForEach = CoreUtils.arrForEach;
    var _isNullOrUndefined$2 = CoreUtils.isNullOrUndefined;
    var strNotificationManager = "_notificationManager";
    var BaseCore = /** @class */ (function () {
        function BaseCore() {
            var _isInitialized = false;
            var _eventQueue;
            var _channelController;
            var _notificationManager;
            var _perfManager;
            dynamicProto(BaseCore, this, function (_self) {
                _self._extensions = new Array();
                _channelController = new ChannelController();
                _self.logger = CoreUtils.objCreate({
                    throwInternal: function (severity, msgId, msg, properties, isUserAct) {
                        if (isUserAct === void 0) { isUserAct = false; }
                    },
                    warnToConsole: function (message) { },
                    resetInternalMessageCount: function () { }
                });
                _eventQueue = [];
                _self.isInitialized = function () { return _isInitialized; };
                _self.initialize = function (config, extensions, logger, notificationManager) {
                    // Make sure core is only initialized once
                    if (_self.isInitialized()) {
                        throw Error("Core should not be initialized more than once");
                    }
                    if (!config || _isNullOrUndefined$2(config.instrumentationKey)) {
                        throw Error("Please provide instrumentation key");
                    }
                    _notificationManager = notificationManager;
                    // For backward compatibility only
                    _self[strNotificationManager] = notificationManager;
                    _self.config = config || {};
                    config.extensions = _isNullOrUndefined$2(config.extensions) ? [] : config.extensions;
                    // add notification to the extensions in the config so other plugins can access it
                    var extConfig = config.extensionConfig = _isNullOrUndefined$2(config.extensionConfig) ? {} : config.extensionConfig;
                    extConfig.NotificationManager = notificationManager;
                    if (logger) {
                        _self.logger = logger;
                    }
                    // Concat all available extensions
                    var allExtensions = [];
                    allExtensions.push.apply(allExtensions, extensions.concat(config.extensions));
                    allExtensions = sortPlugins(allExtensions);
                    var coreExtensions = [];
                    // Check if any two extensions have the same priority, then warn to console
                    // And extract the local extensions from the 
                    var extPriorities = {};
                    // Extension validation
                    _arrForEach(allExtensions, function (ext) {
                        if (_isNullOrUndefined$2(ext) || _isNullOrUndefined$2(ext.initialize)) {
                            throw Error(validationError);
                        }
                        var extPriority = ext.priority;
                        var identifier = ext.identifier;
                        if (ext && extPriority) {
                            if (!_isNullOrUndefined$2(extPriorities[extPriority])) {
                                logger.warnToConsole("Two extensions have same priority #" + extPriority + " - " + extPriorities[extPriority] + ", " + identifier);
                            }
                            else {
                                // set a value
                                extPriorities[extPriority] = identifier;
                            }
                        }
                        // Split extensions to core and channelController
                        if (!extPriority || extPriority < _channelController.priority) {
                            // Add to core extension that will be managed by BaseCore
                            coreExtensions.push(ext);
                        }
                    });
                    // Validation complete
                    // Add the channelController to the complete extension collection and
                    // to the end of the core extensions
                    allExtensions.push(_channelController);
                    coreExtensions.push(_channelController);
                    // Sort the complete set of extensions by priority
                    allExtensions = sortPlugins(allExtensions);
                    _self._extensions = allExtensions;
                    // initialize channel controller first, this will initialize all channel plugins
                    initializePlugins(new ProcessTelemetryContext([_channelController], config, _self), allExtensions);
                    initializePlugins(new ProcessTelemetryContext(coreExtensions, config, _self), allExtensions);
                    // Now reset the extensions to just those being managed by Basecore
                    _self._extensions = coreExtensions;
                    if (_self.getTransmissionControls().length === 0) {
                        throw new Error("No channels available");
                    }
                    _isInitialized = true;
                    _self.releaseQueue();
                };
                _self.getTransmissionControls = function () {
                    return _channelController.getChannelControls();
                };
                _self.track = function (telemetryItem) {
                    if (!telemetryItem.iKey) {
                        // setup default iKey if not passed in
                        telemetryItem.iKey = _self.config.instrumentationKey;
                    }
                    if (!telemetryItem.time) {
                        // add default timestamp if not passed in
                        telemetryItem.time = CoreUtils.toISOString(new Date());
                    }
                    if (_isNullOrUndefined$2(telemetryItem.ver)) {
                        // CommonSchema 4.0
                        telemetryItem.ver = "4.0";
                    }
                    if (_self.isInitialized()) {
                        // Process the telemetry plugin chain
                        _self.getProcessTelContext().processNext(telemetryItem);
                    }
                    else {
                        // Queue events until all extensions are initialized
                        _eventQueue.push(telemetryItem);
                    }
                };
                _self.getProcessTelContext = function () {
                    var extensions = _self._extensions;
                    var thePlugins = extensions;
                    // invoke any common telemetry processors before sending through pipeline
                    if (!extensions || extensions.length === 0) {
                        // Pass to Channel controller so data is sent to correct channel queues
                        thePlugins = [_channelController];
                    }
                    return new ProcessTelemetryContext(thePlugins, _self.config, _self);
                };
                _self.getNotifyMgr = function () {
                    if (!_notificationManager) {
                        // Create Dummy notification manager
                        _notificationManager = CoreUtils.objCreate({
                            addNotificationListener: function (listener) { },
                            removeNotificationListener: function (listener) { },
                            eventsSent: function (events) { },
                            eventsDiscarded: function (events, reason) { },
                            eventsSendRequest: function (sendReason, isAsync) { }
                        });
                        // For backward compatibility only
                        _self[strNotificationManager] = _notificationManager;
                    }
                    return _notificationManager;
                };
                _self.getPerfMgr = function () {
                    if (!_perfManager) {
                        if (_self.config && _self.config.enablePerfMgr) {
                            _perfManager = new PerfManager(_self.getNotifyMgr());
                        }
                    }
                    return _perfManager;
                };
                _self.setPerfMgr = function (perfMgr) {
                    _perfManager = perfMgr;
                };
                _self.eventCnt = function () {
                    return _eventQueue.length;
                };
                _self.releaseQueue = function () {
                    if (_eventQueue.length > 0) {
                        _arrForEach(_eventQueue, function (event) {
                            _self.getProcessTelContext().processNext(event);
                        });
                        _eventQueue = [];
                    }
                };
            });
        }
        BaseCore.prototype.initialize = function (config, extensions, logger, notificationManager) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        BaseCore.prototype.getTransmissionControls = function () {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
            return null;
        };
        BaseCore.prototype.track = function (telemetryItem) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        BaseCore.prototype.getProcessTelContext = function () {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
            return null;
        };
        BaseCore.prototype.getNotifyMgr = function () {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
            return null;
        };
        BaseCore.prototype.getPerfMgr = function () {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
            return null;
        };
        BaseCore.prototype.setPerfMgr = function (perfMgr) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        BaseCore.prototype.eventCnt = function () {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
            return 0;
        };
        BaseCore.prototype.releaseQueue = function () {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        return BaseCore;
    }());

    /**
     * Class to manage sending notifications to all the listeners.
     */
    var NotificationManager = /** @class */ (function () {
        function NotificationManager(config) {
            this.listeners = [];
            var arrForEach = CoreUtils.arrForEach;
            var perfEvtsSendAll = !!(config || {}).perfEvtsSendAll;
            dynamicProto(NotificationManager, this, function (_self) {
                _self.addNotificationListener = function (listener) {
                    _self.listeners.push(listener);
                };
                /**
                 * Removes all instances of the listener.
                 * @param {INotificationListener} listener - AWTNotificationListener to remove.
                 */
                _self.removeNotificationListener = function (listener) {
                    var index = CoreUtils.arrIndexOf(_self.listeners, listener);
                    while (index > -1) {
                        _self.listeners.splice(index, 1);
                        index = CoreUtils.arrIndexOf(_self.listeners, listener);
                    }
                };
                /**
                 * Notification for events sent.
                 * @param {ITelemetryItem[]} events - The array of events that have been sent.
                 */
                _self.eventsSent = function (events) {
                    arrForEach(_self.listeners, function (listener) {
                        if (listener && listener.eventsSent) {
                            setTimeout(function () { return listener.eventsSent(events); }, 0);
                        }
                    });
                };
                /**
                 * Notification for events being discarded.
                 * @param {ITelemetryItem[]} events - The array of events that have been discarded by the SDK.
                 * @param {number} reason           - The reason for which the SDK discarded the events. The EventsDiscardedReason
                 * constant should be used to check the different values.
                 */
                _self.eventsDiscarded = function (events, reason) {
                    arrForEach(_self.listeners, function (listener) {
                        if (listener && listener.eventsDiscarded) {
                            setTimeout(function () { return listener.eventsDiscarded(events, reason); }, 0);
                        }
                    });
                };
                /**
                 * [Optional] A function called when the events have been requested to be sent to the sever.
                 * @param {number} sendReason - The reason why the event batch is being sent.
                 * @param {boolean} isAsync   - A flag which identifies whether the requests are being sent in an async or sync manner.
                 */
                _self.eventsSendRequest = function (sendReason, isAsync) {
                    arrForEach(_self.listeners, function (listener) {
                        if (listener && listener.eventsSendRequest) {
                            if (isAsync) {
                                setTimeout(function () { return listener.eventsSendRequest(sendReason, isAsync); }, 0);
                            }
                            else {
                                try {
                                    listener.eventsSendRequest(sendReason, isAsync);
                                }
                                catch (e) {
                                    // Catch errors to ensure we don't block sending the requests
                                }
                            }
                        }
                    });
                };
                _self.perfEvent = function (perfEvent) {
                    if (perfEvent) {
                        // Send all events or only parent events
                        if (perfEvtsSendAll || !perfEvent.isChildEvt()) {
                            arrForEach(_self.listeners, function (listener) {
                                if (listener && listener.perfEvent) {
                                    if (perfEvent.isAsync) {
                                        setTimeout(function () { return listener.perfEvent(perfEvent); }, 0);
                                    }
                                    else {
                                        try {
                                            listener.perfEvent(perfEvent);
                                        }
                                        catch (e) {
                                            // Catch errors to ensure we don't block sending the requests
                                        }
                                    }
                                }
                            });
                        }
                    }
                };
            });
        }
        /**
         * Adds a notification listener.
         * @param {INotificationListener} listener - The notification listener to be added.
         */
        NotificationManager.prototype.addNotificationListener = function (listener) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        /**
         * Removes all instances of the listener.
         * @param {INotificationListener} listener - AWTNotificationListener to remove.
         */
        NotificationManager.prototype.removeNotificationListener = function (listener) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        /**
         * Notification for events sent.
         * @param {ITelemetryItem[]} events - The array of events that have been sent.
         */
        NotificationManager.prototype.eventsSent = function (events) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        /**
         * Notification for events being discarded.
         * @param {ITelemetryItem[]} events - The array of events that have been discarded by the SDK.
         * @param {number} reason           - The reason for which the SDK discarded the events. The EventsDiscardedReason
         * constant should be used to check the different values.
         */
        NotificationManager.prototype.eventsDiscarded = function (events, reason) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        /**
         * [Optional] A function called when the events have been requested to be sent to the sever.
         * @param {number} sendReason - The reason why the event batch is being sent.
         * @param {boolean} isAsync   - A flag which identifies whether the requests are being sent in an async or sync manner.
         */
        NotificationManager.prototype.eventsSendRequest = function (sendReason, isAsync) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        return NotificationManager;
    }());

    var AppInsightsCore = /** @class */ (function (_super) {
        __extends(AppInsightsCore, _super);
        function AppInsightsCore() {
            var _this = _super.call(this) || this;
            dynamicProto(AppInsightsCore, _this, function (_self, _base) {
                _self.initialize = function (config, extensions, logger, notificationManager) {
                    _base.initialize(config, extensions, logger || new DiagnosticLogger(config), notificationManager || new NotificationManager(config));
                };
                _self.track = function (telemetryItem) {
                    doPerf(_self.getPerfMgr(), function () { return "AppInsightsCore:track"; }, function () {
                        if (telemetryItem === null) {
                            _notifyInvalidEvent(telemetryItem);
                            // throw error
                            throw Error("Invalid telemetry item");
                        }
                        // do basic validation before sending it through the pipeline
                        _validateTelemetryItem(telemetryItem);
                        _base.track(telemetryItem);
                    }, function () { return ({ item: telemetryItem }); }, !(telemetryItem.sync));
                };
                /**
                 * Adds a notification listener. The SDK calls methods on the listener when an appropriate notification is raised.
                 * The added plugins must raise notifications. If the plugins do not implement the notifications, then no methods will be
                 * called.
                 * @param {INotificationListener} listener - An INotificationListener object.
                 */
                _self.addNotificationListener = function (listener) {
                    var manager = _self.getNotifyMgr();
                    if (manager) {
                        manager.addNotificationListener(listener);
                    }
                };
                /**
                 * Removes all instances of the listener.
                 * @param {INotificationListener} listener - INotificationListener to remove.
                 */
                _self.removeNotificationListener = function (listener) {
                    var manager = _self.getNotifyMgr();
                    if (manager) {
                        manager.removeNotificationListener(listener);
                    }
                };
                /**
                 * Periodically check logger.queue for
                 */
                _self.pollInternalLogs = function (eventName) {
                    var interval = _self.config.diagnosticLogInterval;
                    if (!interval || !(interval > 0)) {
                        interval = 10000;
                    }
                    return setInterval(function () {
                        var queue = _self.logger ? _self.logger.queue : [];
                        CoreUtils.arrForEach(queue, function (logMessage) {
                            var item = {
                                name: eventName ? eventName : "InternalMessageId: " + logMessage.messageId,
                                iKey: _self.config.instrumentationKey,
                                time: CoreUtils.toISOString(new Date()),
                                baseType: _InternalLogMessage.dataType,
                                baseData: { message: logMessage.message }
                            };
                            _self.track(item);
                        });
                        queue.length = 0;
                    }, interval);
                };
                function _validateTelemetryItem(telemetryItem) {
                    if (CoreUtils.isNullOrUndefined(telemetryItem.name)) {
                        _notifyInvalidEvent(telemetryItem);
                        throw Error("telemetry name required");
                    }
                }
                function _notifyInvalidEvent(telemetryItem) {
                    var manager = _self.getNotifyMgr();
                    if (manager) {
                        manager.eventsDiscarded([telemetryItem], EventsDiscardedReason.InvalidEvent);
                    }
                }
            });
            return _this;
        }
        AppInsightsCore.prototype.initialize = function (config, extensions, logger, notificationManager) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        AppInsightsCore.prototype.track = function (telemetryItem) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        /**
         * Adds a notification listener. The SDK calls methods on the listener when an appropriate notification is raised.
         * The added plugins must raise notifications. If the plugins do not implement the notifications, then no methods will be
         * called.
         * @param {INotificationListener} listener - An INotificationListener object.
         */
        AppInsightsCore.prototype.addNotificationListener = function (listener) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        /**
         * Removes all instances of the listener.
         * @param {INotificationListener} listener - INotificationListener to remove.
         */
        AppInsightsCore.prototype.removeNotificationListener = function (listener) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        /**
         * Periodically check logger.queue for
         */
        AppInsightsCore.prototype.pollInternalLogs = function (eventName) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
            return 0;
        };
        return AppInsightsCore;
    }(BaseCore));

    // Copyright (c) Microsoft Corporation. All rights reserved.

    // Copyright (c) Microsoft Corporation. All rights reserved.

    /**
     * Enums.ts
     * @author Abhilash Panwar (abpanwar)
     * @copyright Microsoft 2018
     * File containing the enums as constants.
     */
    /**
     * The ValueKind contains a set of values that specify value kind of the property.
     * Either PII (Personal Identifiable Information) or customer content.
     */
    var ValueKind = {
        /**
         * No kind.
         */
        NotSet: 0,
        /**
         * An LDAP distinguished name. For example, CN=Jeff Smith,OU=Sales,DC=Fabrikam,DC=COM.
         */
        Pii_DistinguishedName: 1,
        /**
         * Generic information.
         */
        Pii_GenericData: 2,
        /**
         * An IPV4 Internet address. For example, 192.0.2.1.
         */
        Pii_IPV4Address: 3,
        /**
         * An IPV6 Internet address. For example, 2001:0db8:85a3:0000:0000:8a2e:0370:7334.
         */
        Pii_IPv6Address: 4,
        /**
         * The Subject of an e-mail message.
         */
        Pii_MailSubject: 5,
        /**
         * A telephone number.
         */
        Pii_PhoneNumber: 6,
        /**
         * A query string.
         */
        Pii_QueryString: 7,
        /**
         * An SIP (Session Internet Protocol) address.
         */
        Pii_SipAddress: 8,
        /**
         * An e-mail address.
         */
        Pii_SmtpAddress: 9,
        /**
         * An user ID.
         */
        Pii_Identity: 10,
        /**
         * A URI (Uniform Resource Identifier).
         */
        Pii_Uri: 11,
        /**
         * The fully-qualified domain name.
         */
        Pii_Fqdn: 12,
        /**
         * Scrubs the last octet in a IPV4 Internet address.
         * For example: 10.121.227.147 becomes 10.121.227.*
         */
        Pii_IPV4AddressLegacy: 13,
        /**
         * Generic content.
         */
        CustomerContent_GenericContent: 32
    };
    /**
     * The EventLatency contains a set of values that specify the latency with which an event is sent.
     */
    var EventLatency = {
        /**
         * Normal latency.
         */
        Normal: 1,
        /**
         * Cost deferred latency. At the moment this latency is treated as Normal latency.
         */
        CostDeferred: 2,
        /**
         * Real time latency.
         */
        RealTime: 3
    };
    /**
     * Enum for property types.
     */
    var EventPropertyType = {
        Unspecified: 0,
        String: 1,
        Int32: 2,
        UInt32: 3,
        Int64: 4,
        UInt64: 5,
        Double: 6,
        Bool: 7,
        Guid: 8,
        DateTime: 9
    };
    var _ExtendedInternalMessageId = __assign(__assign({}, _InternalMessageId), { AuthHandShakeError: 501, AuthRedirectFail: 502, BrowserCannotReadLocalStorage: 503, BrowserCannotWriteLocalStorage: 504, BrowserDoesNotSupportLocalStorage: 505, CannotParseBiBlobValue: 506, CannotParseDataAttribute: 507, CVPluginNotAvailable: 508, DroppedEvent: 509, ErrorParsingAISessionCookie: 510, ErrorProvidedChannels: 511, FailedToGetCookies: 512, FailedToInitializeCorrelationVector: 513, FailedToInitializeSDK: 514, InvalidContentBlob: 515, InvalidCorrelationValue: 516, SessionRenewalDateIsZero: 517, SendPostOnCompleteFailure: 518, PostResponseHandler: 519 });

    var _a;
    var Version = '3.0.2';
    var FullVersionString = "1DS-Web-JS-" + Version;
    var strUndefined$1 = "undefined";
    // If value is array just get the type for the first element
    var _fieldTypeEventPropMap = (_a = {},
        _a[0 /* NotSet */] = EventPropertyType.Unspecified,
        _a[2 /* Number */] = EventPropertyType.Double,
        _a[1 /* String */] = EventPropertyType.String,
        _a[3 /* Boolean */] = EventPropertyType.Bool,
        _a[4096 /* Array */ | 2 /* Number */] = EventPropertyType.Double,
        _a[4096 /* Array */ | 1 /* String */] = EventPropertyType.String,
        _a[4096 /* Array */ | 3 /* Boolean */] = EventPropertyType.Bool,
        _a);
    /**
     * @ignore
     */
    var _uaDisallowsSameSiteNone = null;
    /**
     * @ignore
     */
    var _isUndefined$1 = CoreUtils.isUndefined;
    /**
     * @ignore
     */
    var _isNullOrUndefined$3 = CoreUtils.isNullOrUndefined;
    /**
     * @ignore
     */
    var _hasOwnProperty$2 = CoreUtils.hasOwnProperty;
    var beaconsSupported = null;
    var _areCookiesAvailable;
    var arrForEach = CoreUtils.arrForEach;
    var objKeys = CoreUtils.objKeys;
    var isReactNative$1 = isReactNative;
    var isString = CoreUtils.isString;
    var isNumber = CoreUtils.isNumber;
    var isBoolean = CoreUtils.isBoolean;
    var isFunction = CoreUtils.isFunction;
    var isArray = CoreUtils.isArray;
    var isObject = CoreUtils.isObject;
    /**
     * helper method to trim strings (IE8 does not implement String.prototype.trim)
     */
    var strTrim = CoreUtils.strTrim;
    /**
     * Checks if document object is available
     */
    var isDocumentObjectAvailable = Boolean(getDocument());
    /**
     * Checks if window object is available
     */
    var isWindowObjectAvailable = Boolean(getWindow());
    /**
     * Checks if value is assigned to the given param.
     * @param value - The token from which the tenant id is to be extracted.
     * @returns True/false denoting if value is assigned to the param.
     */
    function isValueAssigned(value) {
        /// <summary> takes a value and checks for undefined, null and empty string </summary>
        /// <param type="any"> value to be tested </param>
        /// <returns> true if value is null undefined or emptyString </returns>
        return !(_isNullOrUndefined$3(value) || value === "");
    }
    /**
     * Gets the tenant id from the tenant token.
     * @param apiKey - The token from which the tenant id is to be extracted.
     * @returns The tenant id.
     */
    function getTenantId(apiKey) {
        if (apiKey) {
            var indexTenantId = apiKey.indexOf("-");
            if (indexTenantId > -1) {
                return apiKey.substring(0, indexTenantId);
            }
        }
        return "";
    }
    /**
     * Checks if HTML5 Beacons are supported in the current environment.
     * @returns True if supported, false otherwise.
     */
    function isBeaconsSupported() {
        if (beaconsSupported === null) {
            beaconsSupported = hasNavigator() && Boolean(getNavigator().sendBeacon);
        }
        return beaconsSupported;
    }
    /**
     * Checks if the value is a valid EventLatency.
     * @param value - The value that needs to be checked.
     * @returns True if the value is in AWTEventLatency, false otherwise.
     */
    function isLatency(value) {
        if (value && isNumber(value) && value >= 1 && value <= 3) {
            return true;
        }
        return false;
    }
    /**
     * Sanitizes the Property. It checks the that the property name and value are valid. It also
     * checks/populates the correct type and pii of the property value.
     * @param name - property name                          - The property name.
     * @param property - The property value or an IEventProperty containing value,
     * type ,pii and customer content.
     * @returns IEventProperty containing valid name, value, pii and type or null if invalid.
     */
    function sanitizeProperty(name, property, stringifyObjects) {
        // Check that property is valid
        if (!isString(name) || _isNullOrUndefined$3(property) || property === "") {
            return null;
        }
        // If the property isn't IEventProperty (and is either string, number, boolean or array), convert it into one.
        if (isString(property) || isNumber(property) || isBoolean(property) || isArray(property)) {
            property = { value: property };
        }
        else if (typeof property === "object" && !property.hasOwnProperty("value")) {
            property = { value: stringifyObjects ? JSON.stringify(property) : property };
        }
        else if (_isNullOrUndefined$3(property.value)
            || property.value === "" || (!isString(property.value)
            && !isNumber(property.value) && !isBoolean(property.value)
            && !isArray(property.value))) {
            // Since property is IEventProperty, we need to validate its value
            return null;
        }
        // We need to check that if the property value is an array, it is valid
        if (isArray(property.value) &&
            !isArrayValid(property.value)) {
            return null;
        }
        // If either pii or cc is set convert value to string (since only string pii/cc is allowed).
        // If the value is a complex type like an array that can't be converted to string we will drop
        // the property.
        if (!_isNullOrUndefined$3(property.kind)) {
            if (isArray(property.value) || !isValueKind(property.kind)) {
                return null;
            }
            property.value = property.value.toString();
        }
        return property;
    }
    function useXDomainRequest() {
        if (typeof XMLHttpRequest !== undefined) {
            var xhr = getGlobalInst("XMLHttpRequest");
            if (xhr) {
                var conn = new xhr();
                return Boolean(_isUndefined$1(conn.withCredentials) && (typeof XDomainRequest !== undefined));
            }
        }
    }
    function getCommonSchemaMetaData(value, kind, type) {
        var encodedTypeValue = -1;
        if (!_isUndefined$1(value)) {
            if (kind > 0) {
                if (kind === 32) {
                    // encode customer content. Value can only be string. bit 13-16 are for cc
                    encodedTypeValue = (1 << 13);
                }
                else if (kind <= 13) {
                    // encode PII. Value can only be string. bits 5-12 are for Pii
                    encodedTypeValue = (kind << 5);
                }
            }
            // isDataType checks that the "type" is a number so we don't need to check for undefined
            if (isDataType(type)) {
                // Data Type is provided and valid, so use that
                if (encodedTypeValue === -1) {
                    // Don't return -1
                    encodedTypeValue = 0;
                }
                encodedTypeValue |= type;
            }
            else {
                var propType = _fieldTypeEventPropMap[getFieldValueType(value)] || -1;
                if (encodedTypeValue !== -1 && propType !== -1) {
                    // pii exists so we must return correct type
                    encodedTypeValue |= propType;
                }
                else if (propType === EventPropertyType.Double) {
                    encodedTypeValue = propType;
                }
            }
        }
        return encodedTypeValue;
    }
    function cookieAvailable() {
        if (_areCookiesAvailable === undefined) {
            _areCookiesAvailable = false;
            try {
                var doc = getDocument();
                var nav = getNavigator();
                if (doc && !_isUndefined$1(doc.cookie) && nav && nav.cookieEnabled) {
                    _areCookiesAvailable = true;
                }
            }
            catch (e) {
                // Unexpected, but just swallow
            }
        }
        return _areCookiesAvailable;
    }
    function disallowsSameSiteNone(userAgent) {
        if (!isString(userAgent)) {
            return false;
        }
        // Cover all iOS based browsers here. This includes:
        // - Safari on iOS 12 for iPhone, iPod Touch, iPad
        // - WkWebview on iOS 12 for iPhone, iPod Touch, iPad
        // - Chrome on iOS 12 for iPhone, iPod Touch, iPad
        // All of which are broken by SameSite=None, because they use the iOS networking stack
        if (userAgent.indexOf("CPU iPhone OS 12") !== -1 || userAgent.indexOf("iPad; CPU OS 12") !== -1) {
            return true;
        }
        // Cover Mac OS X based browsers that use the Mac OS networking stack. This includes:
        // - Safari on Mac OS X
        // This does not include:
        // - Internal browser on Mac OS X
        // - Chrome on Mac OS X
        // - Chromium on Mac OS X
        // Because they do not use the Mac OS networking stack.
        if (userAgent.indexOf("Macintosh; Intel Mac OS X 10_14") !== -1 && userAgent.indexOf("Version/") !== -1 && userAgent.indexOf("Safari") !== -1) {
            return true;
        }
        // Cover Mac OS X internal browsers that use the Mac OS networking stack. This includes:
        // - Internal browser on Mac OS X
        // This does not include:
        // - Safari on Mac OS X
        // - Chrome on Mac OS X
        // - Chromium on Mac OS X
        // Because they do not use the Mac OS networking stack.
        if (userAgent.indexOf("Macintosh; Intel Mac OS X 10_14") !== -1 && strEndsWith(userAgent, "AppleWebKit/605.1.15 (KHTML, like Gecko)")) {
            return true;
        }
        // Cover Chrome 50-69, because some versions are broken by SameSite=None, and none in this range require it.
        // Note: this covers some pre-Chromium Edge versions, but pre-Chromim Edge does not require SameSite=None, so this is fine.
        // Note: this regex applies to Windows, Mac OS X, and Linux, deliberately.
        if (userAgent.indexOf("Chrome/5") !== -1 || userAgent.indexOf("Chrome/6") !== -1) {
            return true;
        }
        // Unreal Engine runs Chromium 59, but does not advertise as Chrome until 4.23. Treat versions of Unreal
        // that don't specify their Chrome version as lacking support for SameSite=None.
        if (userAgent.indexOf("UnrealEngine") !== -1 && userAgent.indexOf("Chrome") === -1) {
            return true;
        }
        // UCBrowser < 12.13.2 ignores Set-Cookie headers with SameSite=None
        // NB: this rule isn't complete - you need regex to make a complete rule.
        // See: https://www.chromium.org/updates/same-site/incompatible-clients
        if (userAgent.indexOf("UCBrowser/12") !== -1 || userAgent.indexOf("UCBrowser/11") !== -1) {
            return true;
        }
        return false;
    }
    /**
     * Sets the value of a cookie.
     * @param name - Cookie name.
     * @param value - Cookie value.
     * @param days - Expiration days.
     */
    function setCookie(name, value, days) {
        if (cookieAvailable()) {
            var secureAttrib = "";
            var loc = getLocation();
            if (loc && loc.protocol === "https:") {
                secureAttrib = ";secure";
                if (_uaDisallowsSameSiteNone === null) {
                    _uaDisallowsSameSiteNone = disallowsSameSiteNone((getNavigator() || {}).userAgent);
                }
                if (!_uaDisallowsSameSiteNone) {
                    value = value + ";SameSite=None"; // SameSite can only be changed on secure pages and browsers that support samesite=None setting
                }
            }
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toUTCString();
            getDocument().cookie = name + "=" + value + expires + "; path=/" + secureAttrib;
        }
    }
    /**
     * Deletes a cookie, by setting its expiration to -1.
     * @param name - Cookie name to delete.
     */
    function deleteCookie(name) {
        setCookie(name, "", -1);
    }
    /**
     * Gets the cookie value for the specified cookie.
     * if value is k1=v1&k2==v2 then will return 'v1' for key 'k1'
     * @param cookieName - Cookie name.
     */
    function getCookie(name) {
        if (cookieAvailable()) {
            name = name + "=";
            var decodedCookie = decodeURIComponent(((getDocument() || {}).cookie) || "");
            var ca = decodedCookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                var j = 0;
                while (c.charAt(j) === " ") {
                    j++;
                }
                c = c.substring(j);
                if (c.indexOf(name) === 0) {
                    return c.substring(name.length, c.length);
                }
            }
        }
        return "";
    }
    /**
     * Create a new guid.
     * @param style - The style of guid to generated, defaults to Digits
     * Digits (Default) : 32 digits separated by hyphens: 00000000-0000-0000-0000-000000000000
     * Braces - 32 digits separated by hyphens, enclosed in braces: {00000000-0000-0000-0000-000000000000}
     * Parentheses - 32 digits separated by hyphens, enclosed in parentheses: (00000000-0000-0000-0000-000000000000)
     * Numeric - 32 digits: 00000000000000000000000000000000
     * @returns The formatted guid.
     */
    function createGuid(style) {
        if (style === void 0) { style = "D" /* Digits */; }
        var theGuid = CoreUtils.newGuid();
        if (style === "B" /* Braces */) {
            theGuid = "{" + theGuid + "}";
        }
        else if (style === "P" /* Parentheses */) {
            theGuid = "(" + theGuid + ")";
        }
        else if (style === "N" /* Numeric */) {
            theGuid = theGuid.replace(/-/g, "");
        }
        return theGuid;
    }
    var getTime = CoreUtils.perfNow;
    function isValueKind(value) {
        if (isNumber(value) && ((value >= ValueKind.NotSet && value <= ValueKind.Pii_IPV4AddressLegacy) || value === ValueKind.CustomerContent_GenericContent)) {
            return true;
        }
        return false;
    }
    function isDataType(value) {
        // Remark: 0 returns false, but it doesn't affect encoding anyways
        if (isNumber(value) && ((value >= 0 && value <= 9))) {
            return true;
        }
        return false;
    }
    function isArrayValid(value) {
        return value.length > 0;
    }
    function addPageUnloadEventListener(listener) {
        // Hook the unload event for the document, window and body to ensure that the client events are flushed to the server
        // As just hooking the window does not always fire (on chrome) for page navigations.
        var pageUnloadAdded = addEventHandler("beforeunload", listener);
        pageUnloadAdded = addEventHandler("unload", listener) || pageUnloadAdded;
        pageUnloadAdded = addEventHandler("pagehide", listener) || pageUnloadAdded;
        return pageUnloadAdded;
    }
    function setProcessTelemetryTimings(event, identifier) {
        var evt = event;
        evt.timings = evt.timings || {};
        evt.timings.processTelemetryStart = evt.timings.processTelemetryStart || {};
        evt.timings.processTelemetryStart[identifier] = getTime();
    }
    /**
     * Trys to add an event handler for the specified event to the window, body and document
     * @param eventName {string} - The name of the event
     * @param callback {any} - The callback function that needs to be executed for the given event
     * @returns true if the handler was successfully added
     */
    var addEventHandler = CoreUtils.addEventHandler;
    /**
     * Returns a bitwise value for the FieldValueSanitizerType enum representing the decoded type of the passed value
     * @param value The value to determine the type
     */
    function getFieldValueType(value) {
        var theType = 0 /* NotSet */;
        if (value !== null && value !== undefined) {
            var objType = typeof value;
            if (objType === "string") {
                theType = 1 /* String */;
            }
            else if (objType === "number") {
                theType = 2 /* Number */;
            }
            else if (objType === "boolean") {
                theType = 3 /* Boolean */;
            }
            else if (objType === strShimObject) {
                theType = 4 /* Object */;
                if (isArray(value)) {
                    theType = 4096 /* Array */;
                    if (value.length > 0) {
                        // Empty arrays are not supported and are considered to be the same as null
                        theType |= getFieldValueType(value[0]);
                    }
                }
                else if (_hasOwnProperty$2(value, "value")) {
                    // Looks like an IEventProperty
                    theType = 8192 /* EventProperty */ | getFieldValueType(value.value);
                }
            }
        }
        return theType;
    }
    /**
     * Returns a boolean to denote presence of suffix.
     * @param sourceString String to search in
     * @param suffix Suffix to identify
     * @returns `true` if the suffix is present, `false` if either `sourceString` or `suffix` are undefined of `suffix` is not present.
     */
    function strEndsWith(sourceString, suffix) {
        return (sourceString !== undefined && suffix !== undefined) && sourceString.indexOf(suffix, sourceString.length - suffix.length) !== -1;
    }

    /**
     * AppInsightsCore.ts
     * @author Abhilash Panwar (abpanwar) Hector Hernandez (hectorh)
     * @copyright Microsoft 2018
     */
    var PropVersion = "version";
    var properties = "properties";
    var AppInsightsCore$1 = /** @class */ (function (_super) {
        __extends(AppInsightsCore$$1, _super);
        function AppInsightsCore$$1() {
            var _this = _super.call(this) || this;
            _this.pluginVersionStringArr = [];
            _this.pluginVersionString = "";
            dynamicProto(AppInsightsCore$$1, _this, function (_self, _base) {
                _self.initialize = function (config, extensions, logger, notificationManager) {
                    doPerf(_self, function () { return "AppInsightsCore.initialize"; }, function () {
                        // Add default collector url
                        if (config) {
                            if (!config.endpointUrl) {
                                config.endpointUrl = "https://browser.events.data.microsoft.com/OneCollector/1.0/";
                            }
                            var propertyStorageOverride = config.propertyStorageOverride;
                            // Validate property storage override
                            if (propertyStorageOverride && (!propertyStorageOverride.getProperty || !propertyStorageOverride.setProperty)) {
                                throw new Error("Invalid property storage override passed.");
                            }
                            if (config.channels) {
                                arrForEach(config.channels, function (channels) {
                                    if (channels) {
                                        arrForEach(channels, function (channel) {
                                            if (channel.identifier && channel.version) {
                                                var ver = channel.identifier + "=" + channel.version;
                                                _self.pluginVersionStringArr.push(ver);
                                            }
                                        });
                                    }
                                });
                            }
                        }
                        _self.getWParam = function () {
                            return typeof document !== "undefined" ? 0 : -1;
                        };
                        if (extensions) {
                            arrForEach(extensions, function (ext) {
                                if (ext && ext.identifier && ext.version) {
                                    var ver = ext.identifier + "=" + ext.version;
                                    _self.pluginVersionStringArr.push(ver);
                                }
                            });
                        }
                        _self.pluginVersionString = _self.pluginVersionStringArr.join(";");
                        try {
                            _base.initialize(config, extensions, logger, notificationManager);
                        }
                        catch (e) {
                            _self.logger.throwInternal(LoggingSeverity.CRITICAL, _ExtendedInternalMessageId.ErrorProvidedChannels, "Channels must be provided through config.channels only");
                        }
                        _self.pollInternalLogs("InternalLog");
                    }, function () { return ({ config: config, extensions: extensions, logger: logger, notificationManager: notificationManager }); });
                };
                _self.track = function (item) {
                    doPerf(_self, function () { return "AppInsightsCore.track"; }, function () {
                        var telemetryItem = item;
                        if (telemetryItem) {
                            telemetryItem.timings = telemetryItem.timings || {};
                            telemetryItem.timings.trackStart = getTime();
                            if (!isLatency(telemetryItem.latency)) {
                                telemetryItem.latency = EventLatency.Normal;
                            }
                            var itemExt = telemetryItem.ext = telemetryItem.ext || {};
                            itemExt.sdk = itemExt.sdk || {};
                            itemExt.sdk.ver = FullVersionString;
                            var baseData = telemetryItem.baseData = telemetryItem.baseData || {};
                            if (!baseData[properties]) {
                                baseData[properties] = {};
                            }
                            var itemProperties = baseData[properties];
                            if (!itemProperties[PropVersion]) {
                                itemProperties[PropVersion] = "";
                            }
                            if (_self.pluginVersionString !== "") {
                                itemProperties[PropVersion] = _self.pluginVersionString;
                            }
                        }
                        _base.track(telemetryItem);
                    }, function () { return ({ item: item }); }, !(item.sync));
                };
            });
            return _this;
        }
        /**
         * Initialize the sdk.
         * @param config - The configuration to initialize the SDK.
         * @param extensions - An array of extensions that are to be used by the core.
         */
        AppInsightsCore$$1.prototype.initialize = function (config, extensions, logger, notificationManager) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        AppInsightsCore$$1.prototype.track = function (item) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        return AppInsightsCore$$1;
    }(AppInsightsCore));

    /**
     * BaseCore.ts
     * Base Core is a subset of 1DS Web SDK Core. The purpose of Base Core is to generate a smaller bundle size while providing essential features of Core. Features that are not included in Base Core are:
     * 1. Internal logging
     * 2. Sending notifications on telemetry sent/discarded
     * @author Abhilash Panwar (abpanwar) Hector Hernandez (hectorh)
     * @copyright Microsoft 2018
     */
    var BaseCore$1 = /** @class */ (function (_super) {
        __extends(BaseCore$$1, _super);
        function BaseCore$$1() {
            var _this = _super.call(this) || this;
            dynamicProto(BaseCore$$1, _this, function (_self, _base) {
                _self.initialize = function (config, extensions, logger, notificationManager) {
                    if (config) {
                        if (!config.endpointUrl) {
                            config.endpointUrl = "https://browser.events.data.microsoft.com/OneCollector/1.0/";
                        }
                    }
                    _self.getWParam = function () {
                        return isDocumentObjectAvailable ? 0 : -1;
                    };
                    try {
                        _base.initialize(config, extensions, logger, notificationManager);
                    }
                    catch (e) {
                        _self.logger.throwInternal(LoggingSeverity.CRITICAL, _ExtendedInternalMessageId.ErrorProvidedChannels, "Channels must be provided through config.channels only");
                    }
                };
                _self.track = function (item) {
                    var telemetryItem = item;
                    if (telemetryItem) {
                        var ext = telemetryItem.ext = telemetryItem.ext || {};
                        ext.sdk = ext.sdk || {};
                        ext.sdk.ver = FullVersionString;
                    }
                    _base.track(telemetryItem);
                };
            });
            return _this;
        }
        /**
         * Initialize the sdk.
         * @param config - The configuration to initialize the SDK.
         * @param extensions - An array of extensions that are to be used by the core.
         */
        BaseCore$$1.prototype.initialize = function (config, extensions, logger, notificationManager) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        BaseCore$$1.prototype.track = function (item) {
            // @DynamicProtoStub -- DO NOT add any code as this will be removed during packaging
        };
        return BaseCore$$1;
    }(BaseCore));

    /**
     * ESPromise.ts
     * @author  Nev Wylie (newylie))
     * @copyright Microsoft 2019
     * Simplified wrapper to provide ES6 style Promise callback handling for older browsers
     */
    /**
     * @ignore -- Don't include in the generated documentation
     * Using a local variable to assist with minfication
     */
    var _isFunction$4 = isFunction;
    /**
     * @ignore -- Don't include in the generated documentation
     * This function will be used as onFulfilled handler for any Promise found in the iterable passed to Promise.all.
     * The goal here is to capture in a closure the index of the current item from the iterable. If we did not create
     * this closure, the captured index variable would be the same one that the for loop updates and thus would always
     * be pointing to the last index in the iterable by the time that the onFulfilled handler is called.
     * However, note that for the resolvedCallback callback we want the opposite. For this one we do want to capture
     * the same variable that the for loop updates so that we have the full count of pending promises by the time
     * the onFulfilled handlers start getting called.
     * @param values The resolving promise values
     * @param index The index of this callback function
     * @param resolvedCallback THe callback function used to check if the "all" promise is complete
     */
    function _createPromiseAllOnResolvedFunction(values, index, resolvedCallback) {
        return function (value) {
            values[index] = value;
            resolvedCallback();
        };
    }
    /**
     * Simplified wrapper to provide ES6 style Promise callback handling for older browsers
     */
    var ESPromise = /** @class */ (function () {
        /**
         * The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.
         * @param resolverFunc A function that is passed with the arguments resolve and reject. The executor function is executed
         * immediately by the Promise implementation, passing resolve and reject functions (the executor is called before the Promise
         * constructor even returns the created object). The resolve and reject functions, when called, resolve or reject the promise,
         * respectively. The executor normally initiates some asynchronous work, and then, once that completes, either calls the resolve
         * function to resolve the promise or else rejects it if an error occurred. If an error is thrown in the executor function, the
         * promise is rejected. The return value of the executor is ignored.
         */
        function ESPromise(resolverFunc) {
            var _state = 0 /* Pending */;
            var _settledValue = null;
            var _queue = [];
            dynamicProto(ESPromise, this, function (_this) {
                _this.then = function (onResolved, onRejected) {
                    return new ESPromise(function (resolve, reject) {
                        // Queue the new promise returned to be resolved or rejected
                        // when this promise settles.
                        _enqueue(onResolved, onRejected, resolve, reject);
                    });
                };
                _this["catch"] = function (onRejected) {
                    return _this.then(null, onRejected);
                };
            });
            function _enqueue(onResolved, onRejected, resolve, reject) {
                _queue.push(function () {
                    var value;
                    try {
                        // First call the onFulfilled or onRejected handler, on the settled value
                        // of this promise. If the corresponding handler does not exist, simply
                        // pass through the settled value.
                        if (_state === 1 /* Resolved */) {
                            value = _isFunction$4(onResolved) ? onResolved(_settledValue) : _settledValue;
                        }
                        else {
                            value = _isFunction$4(onRejected) ? onRejected(_settledValue) : _settledValue;
                        }
                        if (value instanceof ESPromise) {
                            // The called handlers returned a new promise, so the chained promise
                            // will follow the state of this promise.
                            value.then(resolve, reject);
                        }
                        else if (_state === 2 /* Rejected */ && !_isFunction$4(onRejected)) {
                            // If there wasn't an onRejected handler and this promise is rejected, then
                            // the chained promise also rejects with the same reason.
                            reject(value);
                        }
                        else {
                            // If this promise is fulfilled, then the chained promise is also fulfilled
                            // with either the settled value of this promise (if no onFulfilled handler
                            // was available) or the return value of the handler. If this promise is
                            // rejected and there was an onRejected handler, then the chained promise is
                            // fulfilled with the return value of the handler.
                            resolve(value);
                        }
                    }
                    catch (error) {
                        // The chained promise will reject if there is any exception thrown while
                        // calling the onFulfilled or onRejected handlers.
                        reject(error);
                        return;
                    }
                });
                // If this promise is already settled, then immediately process the callback we
                // just added to the queue.
                if (_state !== 0 /* Pending */) {
                    _processQueue();
                }
            }
            function _processQueue() {
                if (_queue.length > 0) {
                    // The onFulfilled and onRejected handlers must be called asynchronously. Thus,
                    // we make a copy of the queue and work on it once the current call stack unwinds.
                    var pending_1 = _queue.slice();
                    _queue = [];
                    setTimeout(function () {
                        for (var i = 0, len = pending_1.length; i < len; ++i) {
                            try {
                                pending_1[i]();
                            }
                            catch (e) {
                                // Don't let 1 failing handler break all others
                                // TODO (newylie): Add some form of error reporting (i.e. Call any registered JS error handler so the error is reported)
                            }
                        }
                    }, 0);
                }
            }
            function _resolve(value) {
                if (_state === 0 /* Pending */) {
                    _settledValue = value;
                    _state = 1 /* Resolved */;
                    _processQueue();
                }
            }
            function _reject(reason) {
                if (_state === 0 /* Pending */) {
                    _settledValue = reason;
                    _state = 2 /* Rejected */;
                    _processQueue();
                }
            }
            (function _initialize() {
                if (!_isFunction$4(resolverFunc)) {
                    throw new TypeError("ESPromise: resolvedFunc argument is not a Function");
                }
                try {
                    resolverFunc(_resolve, _reject);
                }
                catch (error) {
                    // This promise will immediately reject if any exception is thrown
                    // from within the executor function.
                    _reject(error);
                }
            })();
        }
        /**
         * The Promise.resolve() method returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned;
         * if the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise
         * the returned promise will be fulfilled with the value. This function flattens nested layers of promise-like objects (e.g. a promise that resolves
         * to a promise that resolves to something) into a single layer.
         * @param value Argument to be resolved by this Promise. Can also be a Promise or a thenable to resolve.
         */
        ESPromise.resolve = function (value) {
            if (value instanceof ESPromise) {
                // Value is a Promise so just return it
                return value;
            }
            else if (value && _isFunction$4(value.then)) {
                // Value looks like a promise or thenable (has a then function)
                return new ESPromise(function (resolve, reject) {
                    try {
                        value.then(resolve, reject);
                    }
                    catch (error) {
                        reject(error);
                    }
                });
            }
            return new ESPromise(function (resolve) {
                resolve(value);
            });
        };
        /**
         * The Promise.reject() method returns a Promise object that is rejected with a given reason.
         * @param reason The reason why this Promise rejected.
         */
        ESPromise.reject = function (reason) {
            return new ESPromise(function (resolve, reject) {
                reject(reason);
            });
        };
        /**
         * The Promise.all() method returns a single Promise that resolves when all of the promises passed as an iterable
         * have resolved or when the iterable contains no promises. It rejects with the reason of the first promise that
         * rejects. There is no implied ordering in the execution of the array of Promises given. On some computers, they
         * may be executed in parallel, or in some sense concurrently, while on others they may be executed serially. For
         * this reason, there must be no dependency in any Promise on the order of execution of the Promises.
         * This method can be useful for aggregating the results of multiple promises.
         * FulfillmentSection - The returned promise is fulfilled with an array containing all the values of the iterable
         * passed as argument (also non-promise values).
         * If an empty iterable is passed, then this method returns (synchronously) an already resolved promise.
         * If all of the passed-in promises fulfill, or are not promises, the promise returned by Promise.all is fulfilled
         * asynchronously.
         * RejectionSection - If any of the passed-in promises reject, Promise.all asynchronously rejects with the value of
         * the promise that rejected, whether or not the other promises have resolved.
         * @param iterable
         */
        ESPromise.all = function (iterable) {
            if (!iterable || !iterable.length) {
                return;
            }
            return new ESPromise(function (resolve, reject) {
                try {
                    var values_1 = [];
                    var pending_2 = 0;
                    for (var lp = 0; lp < iterable.length; lp++) {
                        var item = iterable[lp];
                        // Quick and direct check for a Promise (will also catch a thenable)
                        if (item && _isFunction$4(item.then)) {
                            pending_2++;
                            item.then(_createPromiseAllOnResolvedFunction(values_1, lp, function () {
                                if (--pending_2 === 0) {
                                    resolve(values_1);
                                }
                            }), reject);
                        }
                        else {
                            values_1[lp] = item;
                        }
                    }
                    if (pending_2 === 0) {
                        // All promises were either resolved or where not a promise
                        setTimeout(function () {
                            resolve(values_1);
                        }, 0);
                    }
                }
                catch (error) {
                    reject(error);
                }
            });
        };
        /**
         * The race function returns a Promise that is settled the same way (and takes the same value) as the first promise
         * that settles amongst the promises of the iterable passed as an argument.
         * If the iterable passed is empty, the promise returned will be forever pending.
         * If the iterable contains one or more non-promise value and/or an already settled promise, then Promise.race will
         * resolve to the first of these values found in the iterable.
         * @param iterable
         */
        ESPromise.race = function (iterable) {
            return new ESPromise(function (resolve, reject) {
                if (!iterable || !iterable.length) {
                    return;
                }
                try {
                    var _loop_1 = function (lp) {
                        var item = iterable[lp];
                        // Quick and direct check for a Promise (will also catch a thenable)
                        if (item && _isFunction$4(item.then)) {
                            item.then(resolve, reject);
                        }
                        else {
                            setTimeout(function () {
                                resolve(item);
                            }, 0);
                        }
                    };
                    for (var lp = 0; lp < iterable.length; lp++) {
                        _loop_1(lp);
                    }
                }
                catch (error) {
                    reject(error);
                }
            });
        };
        /**
         * The then() method returns a Promise. It takes up to two arguments: callback functions for the success and failure cases of the Promise.
         * @param onResolved A Function called if the Promise is fulfilled. This function has one argument, the fulfillment value. If it is not a
         * function, it is internally replaced with an "Identity" function (it returns the received argument).
         * @param onRejected A Function called if the Promise is rejected. This function has one argument, the rejection reason. If it is not a
         * function, it is internally replaced with a "Thrower" function (it throws an error it received as argument).
         * @returns Once a Promise is fulfilled or rejected, the respective handler function (onFulfilled or onRejected) will be called asynchronously
         * (scheduled in the current thread loop). The behavior of the handler function follows a specific set of rules. If a handler function:
         * - returns a value, the promise returned by then gets resolved with the returned value as its value;
         * - doesn't return anything, the promise returned by then gets resolved with an undefined value;
         * - throws an error, the promise returned by then gets rejected with the thrown error as its value;
         * - returns an already fulfilled promise, the promise returned by then gets fulfilled with that promise's value as its value;
         * - returns an already rejected promise, the promise returned by then gets rejected with that promise's value as its value;
         * - returns another pending promise object, the resolution/rejection of the promise returned by then will be subsequent to the
         * resolution/rejection of the promise returned by the handler. Also, the value of the promise returned by then will be the same as the value of the promise returned by the handler.
         */
        ESPromise.prototype.then = function (onResolved, onRejected) {
            // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
            return;
        };
        /**
         * The catch() method returns a Promise and deals with rejected cases only. It behaves the same as calling Promise.prototype.then(undefined, onRejected)
         * (in fact, calling obj.catch(onRejected) internally calls obj.then(undefined, onRejected)). This means that you have to provide an onRejected function
         * even if you want to fall back to an undefined result value - for example obj.catch(() => {}).
         * @param onRejected A Function called when the Promise is rejected. This function has one argument: reason The rejection reason.
         * @returns Internally calls Promise.prototype.then on the object upon which it was called, passing the parameters undefined and the received
         * onRejected handler. Returns the value of that call, which is a Promise.
         */
        ESPromise.prototype["catch"] = function (onRejected) {
            // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
            return;
        };
        return ESPromise;
    }());

    /**
     * ESPromiseScheduler.ts
     * @author Nev Wylie (newylie)
     * @copyright Microsoft 2019
     */
    /** This is a default timeout that will cause outstanding running promises to be removed/rejected to avoid filling up memory with blocked events */
    var LazyRejectPeriod = 600000; // 10 Minutes
    // These are global variables that are shared across ALL instances of the scheduler
    /**
     * @ignore
     */
    var _schedulerId = 0;
    /**
     * @ignore
     */
    var _running = [];
    /**
     * @ignore
     */
    var _waiting = [];
    /**
     * @ignore
     */
    var _timedOut = [];
    /**
     * @ignore
     */
    function _getTime() {
        return new Date().getTime();
    }
    /**
     * Provides a simple mechanism queueing mechanism for scheduling events based on the ESPromise callbacks, this is used to ensure
     * order of async operations that are required to be executed in a specific order.
     */
    var ESPromiseScheduler = /** @class */ (function () {
        function ESPromiseScheduler(name, diagLog) {
            var _promiseId = 0;
            var _scheduledName = (name || "<unnamed>") + "." + _schedulerId;
            _schedulerId++;
            dynamicProto(ESPromiseScheduler, this, function (_this) {
                var _lastEvent = null;
                var _eventCount = 0;
                _this.scheduleEvent = function (startEventAction, eventName, timeout) {
                    var uniqueId = _scheduledName + "." + _eventCount;
                    _eventCount++;
                    if (eventName) {
                        uniqueId += "-(" + eventName + ")";
                    }
                    var uniqueEventId = uniqueId + "{" + _promiseId + "}";
                    _promiseId++;
                    // Create the next scheduled event details
                    var newScheduledEvent = {
                        evt: null,
                        tm: _getTime(),
                        id: uniqueEventId,
                        isRunning: false,
                        isAborted: false
                    };
                    if (!_lastEvent) {
                        // We don't have any currently running event, so just start the next event
                        newScheduledEvent.evt = _startWaitingEvent(newScheduledEvent);
                    }
                    else {
                        // Start a new promise which will wait until all current active events are complete before starting
                        // the new event, it does not resolve this scheduled event until after the new event is resolve to
                        // ensure that all scheduled events are completed in the correct order
                        newScheduledEvent.evt = _waitForPreviousEvent(newScheduledEvent, _lastEvent);
                    }
                    // Set this new event as the last one, so that any future events will wait for this one
                    _lastEvent = newScheduledEvent;
                    _lastEvent.evt._schId = uniqueEventId;
                    return newScheduledEvent.evt;
                    function _abortAndRemoveOldEvents(eventQueue) {
                        var now = _getTime();
                        var expired = now - LazyRejectPeriod;
                        var len = eventQueue.length;
                        var lp = 0;
                        while (lp < len) {
                            var evt = eventQueue[lp];
                            if (evt && evt.tm < expired) {
                                var message = null;
                                if (evt.abort) {
                                    message = "Aborting [" + evt.id + "] due to Excessive runtime (" + (now - evt.tm) + " ms)";
                                    evt.abort(message);
                                }
                                else {
                                    message = "Removing [" + evt.id + "] due to Excessive runtime (" + (now - evt.tm) + " ms)";
                                }
                                _warnLog(message);
                                eventQueue.splice(lp, 1);
                                len--;
                            }
                            else {
                                lp++;
                            }
                        }
                    }
                    function _cleanup(eventId, completed) {
                        var toQueue = false;
                        var removed = _removeQueuedEvent(_running, eventId);
                        if (!removed) {
                            removed = _removeQueuedEvent(_timedOut, eventId);
                            toQueue = true;
                        }
                        if (removed) {
                            if (removed.to) {
                                // If there was a timeout stop it
                                clearTimeout(removed.to);
                                removed.to = null;
                            }
                            // TODO (newylie): Convert this into reportable metrics
                            var tm = _getTime() - removed.tm;
                            if (completed) {
                                if (!toQueue) {
                                    _debugLog("Promise [" + eventId + "] Complete -- " + tm + " ms");
                                }
                                else {
                                    _warnLog("Timed out event [" + eventId + "] finally complete -- " + tm + " ms");
                                }
                            }
                            else {
                                _timedOut.push(removed);
                                _warnLog("Event [" + eventId + "] Timed out and removed -- " + tm + " ms");
                            }
                        }
                        else {
                            _debugLog("Failed to remove [" + eventId + "] from running queue");
                        }
                        // Also if the last scheduled event was this event then clear it as we are now finished
                        if (_lastEvent && _lastEvent.id === eventId) {
                            _lastEvent = null;
                        }
                        _abortAndRemoveOldEvents(_running);
                        _abortAndRemoveOldEvents(_waiting);
                        _abortAndRemoveOldEvents(_timedOut);
                    }
                    // Return a callback function that will be called when the waiting promise is resolved or rejected to ensure
                    // that any outer promise is also resolved or rejected
                    function _removeScheduledEvent(eventId, callback) {
                        return function (value) {
                            _cleanup(eventId, true);
                            callback && callback(value);
                            return value;
                        };
                    }
                    function _waitForFinalResult(eventId, startResult, schEventResolve, schEventReject) {
                        startResult.then(function (value) {
                            if (value instanceof ESPromise) {
                                // If the result is a promise then this appears to be a chained result, so wait for this promise to complete
                                _debugLog("Event [" + eventId + "] returned a promise -- waiting");
                                _waitForFinalResult(eventId, value, schEventResolve, schEventReject);
                                return value;
                            }
                            else {
                                return _removeScheduledEvent(eventId, schEventResolve)(value);
                            }
                        }, _removeScheduledEvent(eventId, schEventReject));
                    }
                    // Add the passed event to the active event list with resolve and reject callbacks that will remove
                    // it from the active event list
                    function _createScheduledEvent(eventDetails, startEvent) {
                        var eventId = eventDetails.id;
                        return new ESPromise(function (schEventResolve, schEventReject) {
                            _debugLog("Event [" + eventId + "] Starting -- waited for " + (eventDetails.wTm || "--") + " ms");
                            eventDetails.isRunning = true;
                            eventDetails.abort = function (message) {
                                eventDetails.abort = null;
                                eventDetails.isAborted = true;
                                _cleanup(eventId, false);
                                schEventReject(new Error(message));
                            };
                            var startResult = startEvent(eventId);
                            if (startResult instanceof ESPromise) {
                                if (timeout) {
                                    // Note: Only starting a timer if a timeout was specified
                                    eventDetails.to = setTimeout(function () {
                                        _cleanup(eventId, false);
                                        // Cause the listeners to reject (Note: We can't actually reject the waiting event)
                                        schEventReject(new Error("Timed out after [" + timeout + "] ms"));
                                    }, timeout);
                                }
                                _waitForFinalResult(eventId, startResult, function (theResult) {
                                    _debugLog("Event [" + eventId + "] Resolving after " + (_getTime() - eventDetails.tm) + " ms");
                                    schEventResolve(theResult);
                                }, schEventReject);
                            }
                            else {
                                // The startEvent didn't return a promise so just return a resolved promise
                                _debugLog("Promise [" + eventId + "] Auto completed as the start action did not return a promise");
                                schEventResolve();
                            }
                        });
                    }
                    function _startWaitingEvent(eventDetails) {
                        var now = _getTime();
                        eventDetails.wTm = now - eventDetails.tm;
                        eventDetails.tm = now;
                        if (eventDetails.isAborted) {
                            return ESPromise.reject(new Error("[" + uniqueId + "] was aborted"));
                        }
                        _running.push(eventDetails);
                        return _createScheduledEvent(eventDetails, startEventAction);
                    }
                    // Start a new promise which will wait until all current active events are complete before starting
                    // the new event, it does not resolve this scheduled event until after the new event is resolve to
                    // ensure that all scheduled events are completed in the correct order
                    function _waitForPreviousEvent(eventDetails, waitForEvent) {
                        var waitEvent = new ESPromise(function (waitResolve, waitReject) {
                            var runTime = _getTime() - waitForEvent.tm;
                            var prevId = waitForEvent.id;
                            _debugLog("[" + uniqueId + "] is waiting for [" + prevId + ":" + runTime + " ms] to complete before starting -- [" + _waiting.length + "] waiting and [" + _running.length + "] running");
                            eventDetails.abort = function (message) {
                                eventDetails.abort = null;
                                _removeQueuedEvent(_waiting, uniqueId);
                                eventDetails.isAborted = true;
                                waitReject(new Error(message));
                            };
                            // Wait for the previous event to complete
                            waitForEvent.evt.then(function (value) {
                                _removeQueuedEvent(_waiting, uniqueId);
                                // Wait for the last event to complete before starting the new one, this ensures the execution
                                // order so that we don't try and remove events that havn't been committed yet
                                _startWaitingEvent(eventDetails).then(waitResolve, waitReject);
                            }, function (reason) {
                                _removeQueuedEvent(_waiting, uniqueId);
                                // Wait for the last event to complete before starting the new one, this ensures the execution
                                // order so that we don't try and remove events that havn't been committed yet
                                _startWaitingEvent(eventDetails).then(waitResolve, waitReject);
                            });
                        });
                        _waiting.push(eventDetails);
                        return waitEvent;
                    }
                };
                function _removeQueuedEvent(queue, eventId) {
                    for (var lp = 0; lp < queue.length; lp++) {
                        if (queue[lp].id === eventId) {
                            return queue.splice(lp, 1)[0];
                        }
                    }
                    return null;
                }
            });
            function _debugLog(message) {
                // Only log if running within test harness
                var global = getGlobal$1();
                if (global && global["QUnit"]) {
                    // tslint:disable-next-line:no-console
                    console && console.log("ESPromiseScheduler[" + _scheduledName + "] " + message);
                }
            }
            function _warnLog(message) {
                diagLog && diagLog.warnToConsole("ESPromiseScheduler[" + _scheduledName + "] " + message);
            }
        }
        ESPromiseScheduler.incomplete = function () {
            return _running;
        };
        ESPromiseScheduler.waitingToStart = function () {
            return _waiting;
        };
        /**
         * Schedule an event that will execute the startEvent after all outstanding events are resolved or rejected. This is used to ensure
         * order of async operations that are required to be executed in a specific order.
         * The returned promise will be resolve or rejected based on the values returned from the doAction.
         * @param startEventAction The function to execute to start the event after all outstanding events have completed, will be called asynchronously.
         * @param eventName An [Optional] event name to assist with debbuging to understand what events are either waiting to start or still running (incomplete).
         * @param timeout An [Optional] timeout
         */
        ESPromiseScheduler.prototype.scheduleEvent = function (startEventAction, eventName, timeout) {
            // @DynamicProtoStub - DO NOT add any code as this will be removed during packaging
            return;
        };
        return ESPromiseScheduler;
    }());

    /**
     * Index.ts
     * @author Abhilash Panwar (abpanwar)
     * @copyright Microsoft 2018
     * File to export public classes, interfaces and enums.
     */

    /**
    * Enums.ts
    * @author Abhilash Panwar (abpanwar)
    * @copyright Microsoft 2020
    * File containing enums for EI.
    */
    var ActionType = {
        leftClick: 'LClick',
        rightClick: 'RClick',
        middleClick: 'MClick',
        keyboardEnter: 'KEnter',
        keyboardSpace: 'KSpace'
    };

    /*!
     * 1DS JS SDK POST plugin, 3.0.2
     * Copyright (c) Microsoft and contributors. All rights reserved.
     * (Microsoft Internal Only)
     */
    /**
     * Real Time profile (default profile). RealTime Latency events are sent every 1 sec and
     * Normal Latency events are sent every 2 sec.
     */
    var RT_PROFILE = "REAL_TIME";
    /**
     * Near Real Time profile. RealTime Latency events are sent every 3 sec and
     * Normal Latency events are sent every 6 sec.
     */
    var NRT_PROFILE = "NEAR_REAL_TIME";
    /**
     * Best Effort. RealTime Latency events are sent every 9 sec and
     * Normal Latency events are sent every 18 sec.
     */
    var BE_PROFILE = "BEST_EFFORT";

    /*!
     * 1DS JS SDK POST plugin, 3.0.2
     * Copyright (c) Microsoft and contributors. All rights reserved.
     * (Microsoft Internal Only)
     */
    /**
    * This class defines a "batch" events related to a specific iKey, it is used by the PostChannel and HttpManager
    * to collect and transfer ownership of events without duplicating them in-memory. This reduces the previous
    * array duplication and shared ownership issues that occurred due to race conditions caused by the async nature
    * of sending requests.
    */
    var EventBatch = /** @class */ (function () {
        /**
         * Private constructor so that caller is forced to use the static create method.
         * @param iKey - The iKey to associate with the events (not validated)
         * @param addEvents - The optional collection of events to assign to this batch - defaults to an empty array.
         */
        function EventBatch(iKey, addEvents) {
            var events = addEvents ? [].concat(addEvents) : [];
            var isNullOrUndefined = CoreUtils.isNullOrUndefined;
            var _self = this;
            _self.iKey = function () {
                return iKey;
            };
            _self.count = function () {
                return events.length;
            };
            _self.events = function () {
                return events;
            };
            _self.addEvents = function (theEvents, append) {
                if (append === void 0) { append = true; }
                if (theEvents && theEvents.length > 0) {
                    if (append) {
                        events = events.concat(theEvents);
                    }
                    else {
                        events = theEvents.concat(events);
                    }
                    return theEvents.length;
                }
                return 0;
            };
            _self.split = function (fromEvent, numEvents) {
                // Create a new batch with the same iKey
                var newBatch = new EventBatch(iKey);
                if (fromEvent < events.length) {
                    var cnt = events.length - fromEvent;
                    if (!isNullOrUndefined(numEvents)) {
                        cnt = numEvents < cnt ? numEvents : cnt;
                    }
                    newBatch.addEvents(events.splice(fromEvent, cnt), true);
                }
                return newBatch;
            };
        }
        /**
         * Creates a new Event Batch object
         * @param iKey The iKey associated with this batch of events
         */
        EventBatch.create = function (iKey, theEvents) {
            return new EventBatch(iKey, theEvents);
        };
        return EventBatch;
    }());

    /*!
     * 1DS JS SDK POST plugin, 3.0.2
     * Copyright (c) Microsoft and contributors. All rights reserved.
     * (Microsoft Internal Only)
     */
    /**
     * Note: This is an optimization for V8-based browsers. When V8 concatenates a string,
     * the strings are only joined logically using a "cons string" or "constructed/concatenated
     * string". These containers keep references to one another and can result in very large
     * memory usage. For example, if a 2MB string is constructed by concatenating 4 bytes
     * together at a time, the memory usage will be ~44MB; so ~22x increase. The strings are
     * only joined together when an operation requiring their joining takes place, such as
     * substr(). This function is called when adding data to this buffer to ensure these
     * types of strings are periodically joined to reduce the memory footprint.
     * Setting to every 20 events as the JSON.stringify() may have joined many strings
     * and calling this too much causes a minor delay while processing.
     */
    var _MAX_STRING_JOINS = 20;
    var RequestSizeLimitBytes = 3984588; // approx 3.8 Mb
    var BeaconRequestSizeLimitBytes = 65000; // approx 64kb (the current Edge, Firefox and Chrome max limit)
    var MaxRecordSize = 2000000; // approx 2 Mb
    var MaxBeaconRecordSize = Math.min(MaxRecordSize, BeaconRequestSizeLimitBytes);
    var metadata = "metadata";
    var f = "f";
    var rCheckDot = /\./;
    /**
    * Class to handle serialization of event and request.
    * Currently uses Bond for serialization. Please note that this may be subject to change.
    */
    var Serializer = /** @class */ (function () {
        function Serializer(perfManager, valueSanitizer, stringifyObjects, enableCompoundKey) {
            var strData = "data";
            var strBaseData = "baseData";
            var strExt = "ext";
            var _checkForCompoundkey = !!enableCompoundKey;
            var _theSanitizer = valueSanitizer;
            var _isReservedCache = {};
            dynamicProto(Serializer, this, function (_self) {
                _self.createPayload = function (retryCnt, isTeardown, isSync, useSendBeacon) {
                    return {
                        apiKeys: [],
                        payloadBlob: "",
                        overflow: null,
                        sizeExceed: [],
                        batches: [],
                        numEvents: 0,
                        retryCnt: retryCnt,
                        isTeardown: isTeardown,
                        isSync: isSync,
                        isBeacon: useSendBeacon
                    };
                };
                _self.appendPayload = function (payload, theBatch, maxEventsPerBatch) {
                    var canAddEvents = payload && theBatch && !payload.overflow;
                    if (canAddEvents) {
                        doPerf(perfManager, function () { return "Serializer:appendPayload"; }, function () {
                            var theEvents = theBatch.events();
                            var payloadBlob = payload.payloadBlob;
                            var payloadEvents = payload.numEvents;
                            var eventsAdded = false;
                            var sizeExceeded = [];
                            var isBeaconPayload = payload.isBeacon;
                            var requestMaxSize = isBeaconPayload ? BeaconRequestSizeLimitBytes : RequestSizeLimitBytes;
                            var recordMaxSize = isBeaconPayload ? MaxBeaconRecordSize : MaxRecordSize;
                            var lp = 0;
                            var joinCount = 0;
                            while (lp < theEvents.length) {
                                var theEvent = theEvents[lp];
                                if (theEvent) {
                                    if (payloadEvents >= maxEventsPerBatch) {
                                        // Maximum events per payload reached, so don't add any more
                                        payload.overflow = theBatch.split(lp);
                                        break;
                                    }
                                    var eventBlob = _self.getEventBlob(theEvent);
                                    if (eventBlob.length <= recordMaxSize) {
                                        // This event will fit into the payload
                                        var blobLength = eventBlob.length;
                                        var currentSize = payloadBlob.length;
                                        if (currentSize + blobLength > requestMaxSize) {
                                            // Request or batch size exceeded, so don't add any more to the payload
                                            payload.overflow = theBatch.split(lp);
                                            break;
                                        }
                                        if (payloadBlob) {
                                            payloadBlob += "\n";
                                        }
                                        payloadBlob += eventBlob;
                                        joinCount++;
                                        // v8 memory optimization only
                                        if (joinCount > _MAX_STRING_JOINS) {
                                            // this substr() should cause the constructed string to join
                                            payloadBlob.substr(0, 1);
                                            joinCount = 0;
                                        }
                                        eventsAdded = true;
                                        payloadEvents++;
                                    }
                                    else {
                                        // Single event size exceeded so remove from the batch
                                        sizeExceeded.push(theEvent);
                                        // We also need to remove this event from the existing array, otherwise a notification will be sent
                                        // indicating that it was successfully sent
                                        theEvents.splice(lp, 1);
                                        lp--;
                                    }
                                }
                                lp++;
                            }
                            if (sizeExceeded && sizeExceeded.length > 0) {
                                payload.sizeExceed.push(EventBatch.create(theBatch.iKey(), sizeExceeded));
                                // Remove the exceeded events from the batch
                            }
                            if (eventsAdded) {
                                payload.batches.push(theBatch);
                                payload.payloadBlob = payloadBlob;
                                payload.numEvents = payloadEvents;
                                var apiKey = theBatch.iKey();
                                if (CoreUtils.arrIndexOf(payload.apiKeys, apiKey) === -1) {
                                    payload.apiKeys.push(apiKey);
                                }
                            }
                        }, function () { return ({ payload: payload, theBatch: { iKey: theBatch.iKey(), evts: theBatch.events() }, max: maxEventsPerBatch }); });
                    }
                    return canAddEvents;
                };
                _self.getEventBlob = function (eventData) {
                    return doPerf(perfManager, function () { return "Serializer.getEventBlob"; }, function () {
                        var serializedEvent = {
                            name: eventData.name,
                            time: eventData.time,
                            ver: eventData.ver,
                            iKey: "o:" + getTenantId(eventData.iKey)
                        };
                        // Assigning local var so usage in part b/c don't throw if there is no ext
                        var serializedExt = {};
                        // Part A
                        var eventExt = eventData[strExt];
                        if (eventExt) {
                            // Only assign ext if the event had one (There are tests covering this use case)
                            serializedEvent[strExt] = serializedExt;
                            objForEachKey(eventExt, function (key, value) {
                                var data = serializedExt[key] = {};
                                // Don't include a metadata callback as we don't currently set metadata Part A fields
                                _processPathKeys(value, data, "ext." + key, true, null, null);
                            });
                        }
                        var serializedData = serializedEvent[strData] = {
                            baseType: eventData.baseType
                        };
                        var serializedBaseData = serializedData[strBaseData] = {};
                        // Part B
                        _processPathKeys(eventData.baseData, serializedBaseData, strBaseData, false, [strBaseData], function (pathKeys, name, value) {
                            _addJSONPropertyMetaData(serializedExt, pathKeys, name, value);
                        });
                        // Part C
                        _processPathKeys(eventData.data, serializedData, strData, false, [], function (pathKeys, name, value) {
                            _addJSONPropertyMetaData(serializedExt, pathKeys, name, value);
                        });
                        return JSON.stringify(serializedEvent);
                    }, function () { return ({ item: eventData }); });
                };
                function _isReservedField(path, name) {
                    var result = _isReservedCache[path];
                    if (result === undefined) {
                        result = false;
                        if (path.indexOf("ext.metadata") === 0) { // Using indexOf === 0 as a replacement for startsWith() which is not available on IE
                            // Do not allow the changing of fields located in the ext.metadata extension
                            result = true;
                        }
                        else if (path.indexOf("ext.web") === 0) { // Using indexOf === 0 as a replacement for startsWith() which is not available on IE
                            // Do not allow the changing of fields located in the ext.web extension
                            result = true;
                        }
                        _isReservedCache[path] = result;
                    }
                    return result;
                }
                function _processPathKeys(srcObj, target, thePath, checkReserved, metadataPathKeys, metadataCallback) {
                    objForEachKey(srcObj, function (key, srcValue) {
                        var prop = null;
                        if (isValueAssigned(srcValue)) {
                            var path = thePath;
                            var name_1 = key;
                            var theMetaPathKeys = metadataPathKeys;
                            var destObj = target;
                            // Handle keys with embedded '.', like "TestObject.testProperty"
                            if (_checkForCompoundkey && !checkReserved && rCheckDot.test(key)) {
                                var subKeys = key.split(".");
                                var keyLen = subKeys.length;
                                if (keyLen > 1) {
                                    if (theMetaPathKeys) {
                                        // Create a copy of the meta path keys so we can add the extra ones
                                        theMetaPathKeys = theMetaPathKeys.slice();
                                    }
                                    for (var lp = 0; lp < keyLen - 1; lp++) {
                                        var subKey = subKeys[lp];
                                        // Add/reuse the sub key object
                                        destObj = destObj[subKey] = destObj[subKey] || {};
                                        path += "." + subKey;
                                        if (theMetaPathKeys) {
                                            theMetaPathKeys.push(subKey);
                                        }
                                    }
                                    name_1 = subKeys[keyLen - 1];
                                }
                            }
                            var isReserved = checkReserved && _isReservedField(path, name_1);
                            if (!isReserved && _theSanitizer && _theSanitizer.handleField(path, name_1)) {
                                prop = _theSanitizer.value(path, name_1, srcValue, stringifyObjects);
                            }
                            else {
                                prop = sanitizeProperty(name_1, srcValue, stringifyObjects);
                            }
                            if (prop) {
                                // Set the value
                                var newValue = prop.value;
                                destObj[name_1] = newValue;
                                if (metadataCallback) {
                                    metadataCallback(theMetaPathKeys, name_1, prop);
                                }
                                if (isObject(newValue) && !isArray(newValue)) {
                                    var newPath = theMetaPathKeys;
                                    if (newPath) {
                                        newPath = newPath.slice();
                                        newPath.push(name_1);
                                    }
                                    // Make sure we process sub objects as well (for value sanitization and metadata)
                                    _processPathKeys(srcValue, newValue, path + "." + name_1, checkReserved, newPath, metadataCallback);
                                }
                            }
                        }
                    });
                }
            });
        }
    // Removed Stub for Serializer.prototype.createPayload.
    // Removed Stub for Serializer.prototype.appendPayload.
    // Removed Stub for Serializer.prototype.getEventBlob.
    // Removed Stub for Serializer.prototype.handleField.
    // Removed Stub for Serializer.prototype.getSanitizer.
        return Serializer;
    }());
    /**
     * @ignore
     */
    function _addJSONPropertyMetaData(json, propKeys, name, propertyValue) {
        if (propertyValue && json) {
            var encodedTypeValue = getCommonSchemaMetaData(propertyValue.value, propertyValue.kind, propertyValue.propertyType);
            if (encodedTypeValue > -1) {
                // Add the root metadata
                var metaData = json[metadata];
                if (!metaData) {
                    // Sets the root 'f'
                    metaData = json[metadata] = { f: {} };
                }
                var metaTarget_1 = metaData[f];
                if (!metaTarget_1) {
                    // This can occur if someone has manually added an ext.metadata object
                    // Such as ext.metadata.privLevel and ext.metadata.privTags
                    metaTarget_1 = metaData[f] = {};
                }
                // Traverse the metadata path and build each object (contains an 'f' key) -- if required
                arrForEach(propKeys, function (key) {
                    if (!metaTarget_1[key]) {
                        metaTarget_1[key] = { f: {} };
                    }
                    var newTarget = metaTarget_1[key][f];
                    if (!newTarget) {
                        // Not expected, but can occur if the metadata context was pre-created as part of the event
                        newTarget = metaTarget_1[key][f] = {};
                    }
                    metaTarget_1 = newTarget;
                });
                metaTarget_1 = metaTarget_1[name] = {};
                if (isArray(propertyValue.value)) {
                    metaTarget_1["a"] = {
                        t: encodedTypeValue
                    };
                }
                else {
                    metaTarget_1["t"] = encodedTypeValue;
                }
            }
        }
    }

    /*!
     * 1DS JS SDK POST plugin, 3.0.2
     * Copyright (c) Microsoft and contributors. All rights reserved.
     * (Microsoft Internal Only)
     */
    /**
    * RetryPolicy.ts
    * @author Abhilash Panwar (abpanwar)
    * @copyright Microsoft 2018
    */
    var RandomizationLowerThreshold = 0.8;
    var RandomizationUpperThreshold = 1.2;
    var BaseBackoff = 3000;
    var MaxBackoff = 600000;
    /**
    * Class for retry policy.
    */
    var RetryPolicy = /** @class */ (function () {
        function RetryPolicy() {
        }
        /**
         * Determine if the request should be retried for the given status code.
         * The below expression reads that we should only retry for:
         *      - HttpStatusCodes that are smaller than 300.
         *      - HttpStatusCodes greater or equal to 500 (except for 501-NotImplement
         *        and 505-HttpVersionNotSupport).
         *      - HttpStatusCode 408-RequestTimeout.
         *      - HttpStatusCode 429.
         * This is based on Microsoft.WindowsAzure.Storage.RetryPolicies.ExponentialRetry class
         * @param httpStatusCode - The status code returned for the request.
         * @returns True if request should be retried, false otherwise.
         */
        RetryPolicy.shouldRetryForStatus = function (httpStatusCode) {
            /* */
            return !((httpStatusCode >= 300 && httpStatusCode < 500 && httpStatusCode !== 408 && httpStatusCode !== 429)
                || (httpStatusCode === 501)
                || (httpStatusCode === 505));
        };
        /**
         * Gets the number of milliseconds to back off before retrying the request. The
         * back off duration is exponentially scaled based on the number of retries already
         * done for the request.
         * @param retriesSoFar - The number of times the request has already been retried.
         * @returns The back off duration for the request before it can be retried.
         */
        RetryPolicy.getMillisToBackoffForRetry = function (retriesSoFar) {
            var waitDuration = 0;
            var minBackoff = BaseBackoff * RandomizationLowerThreshold;
            var maxBackoff = BaseBackoff * RandomizationUpperThreshold;
            var randomBackoff = Math.floor(Math.random() * (maxBackoff - minBackoff)) + minBackoff;
            waitDuration = Math.pow(2, retriesSoFar) * randomBackoff;
            return Math.min(waitDuration, MaxBackoff);
        };
        return RetryPolicy;
    }());

    /*!
     * 1DS JS SDK POST plugin, 3.0.2
     * Copyright (c) Microsoft and contributors. All rights reserved.
     * (Microsoft Internal Only)
     */
    var SecToMsMultiplier = 1000;
    /**
    * Class to stop certain tenants sending events.
    */
    var KillSwitch = /** @class */ (function () {
        function KillSwitch() {
            var _killedTokenDictionary = {};
            function _normalizeTenants(values) {
                var result = [];
                if (values) {
                    arrForEach(values, function (value) {
                        result.push(strTrim(value));
                    });
                }
                return result;
            }
            dynamicProto(KillSwitch, this, function (_self) {
                _self.setKillSwitchTenants = function (killTokens, killDuration) {
                    if (killTokens && killDuration) {
                        try {
                            var killedTokens = _normalizeTenants(killTokens.split(","));
                            if (killDuration === "this-request-only") {
                                return killedTokens;
                            }
                            var durationMs = parseInt(killDuration, 10) * SecToMsMultiplier;
                            for (var i = 0; i < killedTokens.length; ++i) {
                                _killedTokenDictionary[killedTokens[i]] = CoreUtils.dateNow() + durationMs;
                            }
                        }
                        catch (ex) {
                            return [];
                        }
                    }
                    return [];
                };
                _self.isTenantKilled = function (tenantToken) {
                    var killDictionary = _killedTokenDictionary;
                    var name = strTrim(tenantToken);
                    if (killDictionary[name] !== undefined && killDictionary[name] > CoreUtils.dateNow()) {
                        return true;
                    }
                    delete killDictionary[name];
                    return false;
                };
            });
        }
    // Removed Stub for KillSwitch.prototype.setKillSwitchTenants.
    // Removed Stub for KillSwitch.prototype.isTenantKilled.
        return KillSwitch;
    }());

    /*!
     * 1DS JS SDK POST plugin, 3.0.2
     * Copyright (c) Microsoft and contributors. All rights reserved.
     * (Microsoft Internal Only)
     */
    /**
    * Class to manage clock skew correction.
    */
    var ClockSkewManager = /** @class */ (function () {
        function ClockSkewManager() {
            var _allowRequestSending = true;
            var _shouldAddClockSkewHeaders = true;
            var _isFirstRequest = true;
            var _clockSkewHeaderValue = "use-collector-delta";
            var _clockSkewSet = false;
            dynamicProto(ClockSkewManager, this, function (_self) {
                /**
                 * Determine if requests can be sent.
                 * @returns True if requests can be sent, false otherwise.
                 */
                _self.allowRequestSending = function () {
                    return _allowRequestSending;
                };
                /**
                 * Tells the ClockSkewManager that it should assume that the first request has now been sent,
                 * If this method had not yet been called AND the clock Skew had not been set this will set
                 * allowRequestSending to false until setClockSet() is called.
                 */
                _self.firstRequestSent = function () {
                    if (_isFirstRequest) {
                        _isFirstRequest = false;
                        if (!_clockSkewSet) {
                            // Block sending until we get the first clock Skew
                            _allowRequestSending = false;
                        }
                    }
                };
                /**
                 * Determine if clock skew headers should be added to the request.
                 * @returns True if clock skew headers should be added, false otherwise.
                 */
                _self.shouldAddClockSkewHeaders = function () {
                    return _shouldAddClockSkewHeaders;
                };
                /**
                 * Gets the clock skew header value.
                 * @returns The clock skew header value.
                 */
                _self.getClockSkewHeaderValue = function () {
                    return _clockSkewHeaderValue;
                };
                /**
                 * Sets the clock skew header value. Once clock skew is set this method
                 * is no-op.
                 * @param timeDeltaInMillis - Time delta to be saved as the clock skew header value.
                 */
                _self.setClockSkew = function (timeDeltaInMillis) {
                    if (!_clockSkewSet) {
                        if (timeDeltaInMillis) {
                            _clockSkewHeaderValue = timeDeltaInMillis;
                            _shouldAddClockSkewHeaders = true;
                            _clockSkewSet = true;
                        }
                        else {
                            _shouldAddClockSkewHeaders = false;
                        }
                        // Unblock sending
                        _allowRequestSending = true;
                    }
                };
            });
        }
    // Removed Stub for ClockSkewManager.prototype.allowRequestSending.
    // Removed Stub for ClockSkewManager.prototype.firstRequestSent.
    // Removed Stub for ClockSkewManager.prototype.shouldAddClockSkewHeaders.
    // Removed Stub for ClockSkewManager.prototype.getClockSkewHeaderValue.
    // Removed Stub for ClockSkewManager.prototype.setClockSkew.
        return ClockSkewManager;
    }());

    /*!
     * 1DS JS SDK POST plugin, 3.0.2
     * Copyright (c) Microsoft and contributors. All rights reserved.
     * (Microsoft Internal Only)
     */
    var _a$1;
    var Method = "POST";
    var DisabledPropertyName = "Microsoft_ApplicationInsights_BypassAjaxInstrumentation";
    var strDropped = "drop";
    var strSending = "send";
    var strRequeue = "requeue";
    var strResponseFail = "rspFail";
    var strOther = "oth";
    var strKillTokensHeader = "kill-tokens";
    var strKillDurationHeader = "kill-duration";
    var strKillDurationSecondsHeader = "kill-duration-seconds";
    var strTimeDeltaHeader = "time-delta-millis";
    /**
     * Identifies the default notification reason to the action names
     */
    var _eventActionMap = (_a$1 = {},
        _a$1[1 /* Paused */] = strRequeue,
        _a$1[100 /* RequeueEvents */] = strRequeue,
        _a$1[200 /* Complete */] = "sent",
        _a$1[8004 /* KillSwitch */] = strDropped,
        _a$1[8003 /* SizeLimitExceeded */] = strDropped,
        _a$1);
    function _getResponseText(xhr) {
        try {
            return xhr.responseText;
        }
        catch (e) {
            // Best effort, as XHR may throw while XDR wont so just ignore
        }
        return "";
    }
    /**
     * Class managing the sending of requests.
     */
    var HttpManager = /** @class */ (function () {
        /**
         * @constructor
         * @param requestQueue   - The queue that contains the requests to be sent.
         */
        function HttpManager(maxEventsPerBatch, maxConnections, maxRetries, actions) {
            this._responseHandlers = [];
            var _urlString = "?cors=true&content-type=application/x-json-stream&client-id=NO_AUTH&client-version="
                + FullVersionString;
            var _killSwitch = new KillSwitch();
            var _paused = false;
            var _clockSkewManager = new ClockSkewManager();
            var _useBeacons = false;
            var _outstandingRequests = 0; // Holds the number of outstanding async requests that have not returned a response yet
            var _postManager;
            var _httpInterface;
            var _core;
            var _customHttpInterface = true;
            var _queryStringParameters = [];
            var _headers = {};
            var _batchQueue = [];
            var _serializer = null;
            var _enableEventTimings = false;
            dynamicProto(HttpManager, this, function (_self) {
                var _sendCredentials = true;
                _self.initialize = function (endpointUrl, core, postChannel, httpInterface, channelConfig) {
                    if (!channelConfig) {
                        channelConfig = {};
                    }
                    _urlString = endpointUrl + _urlString;
                    _core = core;
                    _enableEventTimings = !_core.config.disableEventTimings;
                    var enableCompoundKey = !!_core.config.enableCompoundKey;
                    _postManager = postChannel;
                    var valueSanitizer = channelConfig.valueSanitizer;
                    var stringifyObjects = channelConfig.stringifyObjects;
                    if (!CoreUtils.isUndefined(channelConfig.enableCompoundKey)) {
                        enableCompoundKey = !!channelConfig.enableCompoundKey;
                    }
                    _serializer = new Serializer(_core, valueSanitizer, stringifyObjects, enableCompoundKey);
                    _httpInterface = httpInterface;
                    if (!_httpInterface) {
                        _customHttpInterface = false;
                        _useBeacons = !isReactNative$1(); // Only use beacons if not running in React Native
                        var location_1 = getLocation();
                        if (location_1 && location_1.protocol && location_1.protocol.toLowerCase() === "file:") {
                            // Special case where a local html file fails with a CORS error on Chromium browsers
                            _sendCredentials = false;
                        }
                        var sendPostFunc = null;
                        if (useXDomainRequest()) {
                            sendPostFunc = _xdrSendPost;
                        }
                        else if (isReactNative$1()) {
                            sendPostFunc = _fetchSendPost;
                        }
                        else if (typeof XMLHttpRequest !== "undefined") {
                            sendPostFunc = _xhrSendPost;
                        }
                        _httpInterface = {
                            sendPOST: sendPostFunc
                        };
                    }
                };
                // Special internal method to allow the DebugPlugin to hook embedded objects
                _self["_getDbgPlgTargets"] = function () {
                    return [_httpInterface, _killSwitch, _serializer];
                };
                function _xdrSendPost(payload, oncomplete) {
                    // It doesn't support custom headers, so no action is taken with current requestHeaders
                    var xdr = new XDomainRequest();
                    xdr.open(Method, payload.urlString);
                    // can't get the status code in xdr.
                    xdr.onload = function () {
                        // we will assume onload means the request succeeded.
                        var response = _getResponseText(xdr);
                        _doOnComplete(oncomplete, 200, {}, response);
                        _handleCollectorResponse(response);
                    };
                    // we will assume onerror means we need to drop the events.
                    xdr.onerror = function () {
                        _doOnComplete(oncomplete, 400, {});
                    };
                    // we will assume ontimeout means we need to retry the events.
                    xdr.ontimeout = function () {
                        _doOnComplete(oncomplete, 500, {});
                    };
                    xdr.send(payload.data);
                }
                function _fetchSendPost(payload, oncomplete) {
                    var _a;
                    fetch(payload.urlString, (_a = {
                            body: payload.data,
                            method: Method,
                            credentials: "include"
                        },
                        _a[DisabledPropertyName] = true,
                        _a.headers = payload.headers,
                        _a)).then(function (response) {
                        var headerMap = {};
                        var responseText = "";
                        if (response.headers) {
                            response.headers.forEach(function (value, name) {
                                headerMap[name] = value;
                            });
                        }
                        if (response.body) {
                            response.text().then(function (text) {
                                responseText = text;
                            });
                        }
                        _doOnComplete(oncomplete, response.status, headerMap, responseText);
                        _handleCollectorResponse(responseText);
                    })["catch"](function (error) {
                        // In case there is an error in the request. Set the status to 0
                        // so that the events can be retried later.
                        _doOnComplete(oncomplete, 0, {});
                    });
                }
                function _xhrSendPost(payload, oncomplete, sync) {
                    function _appendHeader(theHeaders, xhr, name) {
                        if (!theHeaders[name] && xhr && xhr.getResponseHeader) {
                            var value = xhr.getResponseHeader(name);
                            if (value) {
                                theHeaders[name] = strTrim(value);
                            }
                        }
                        return theHeaders;
                    }
                    function _getAllResponseHeaders(xhr) {
                        var theHeaders = {};
                        if (!xhr.getAllResponseHeaders) {
                            // Firefox 2-63 doesn't have getAllResponseHeaders function but it does have getResponseHeader
                            // Only call these if getAllResponseHeaders doesn't exist, otherwise we can get invalid response errors
                            // as collector is not currently returning the correct header to allow JS to access these headers
                            theHeaders = _appendHeader(theHeaders, xhr, strTimeDeltaHeader);
                            theHeaders = _appendHeader(theHeaders, xhr, strKillDurationHeader);
                            theHeaders = _appendHeader(theHeaders, xhr, strKillDurationSecondsHeader);
                        }
                        else {
                            theHeaders = _convertAllHeadersToMap(xhr.getAllResponseHeaders());
                        }
                        return theHeaders;
                    }
                    function xhrComplete(xhr, responseTxt) {
                        _doOnComplete(oncomplete, xhr.status, _getAllResponseHeaders(xhr), responseTxt);
                    }
                    var xhRequest = new XMLHttpRequest();
                    try {
                        xhRequest[DisabledPropertyName] = true;
                    }
                    catch (e) {
                        // If the environment has locked down the XMLHttpRequest (preventExtensions and/or freeze), this would
                        // cause the request to fail and we no telemetry would be sent
                    }
                    if (_sendCredentials) {
                        // Special case where a local html file fails with a CORS error on Chromium browsers (protocol is only evaluated on initialization)
                        xhRequest.withCredentials = true;
                    }
                    xhRequest.open(Method, payload.urlString, !sync);
                    // Set custom headers (e.g. gzip) here (after open())
                    arrForEach(objKeys(payload.headers), function (name) {
                        xhRequest.setRequestHeader(name, payload.headers[name]);
                    });
                    xhRequest.onload = function () {
                        var response = _getResponseText(xhRequest);
                        xhrComplete(xhRequest, response);
                        _handleCollectorResponse(response);
                    };
                    xhRequest.onerror = function () {
                        xhrComplete(xhRequest);
                    };
                    xhRequest.ontimeout = function () {
                        xhrComplete(xhRequest);
                    };
                    xhRequest.send(payload.data);
                }
                function _doOnComplete(oncomplete, status, headers, response) {
                    try {
                        oncomplete(status, headers, response);
                    }
                    catch (e) {
                        _postManager.diagLog().throwInternal(LoggingSeverity.WARNING, _ExtendedInternalMessageId.SendPostOnCompleteFailure, e);
                    }
                }
                _self.addQueryStringParameter = function (name, value) {
                    for (var i = 0; i < _queryStringParameters.length; i++) {
                        if (_queryStringParameters[i].name === name) {
                            _queryStringParameters[i].value = value;
                            return;
                        }
                    }
                    _queryStringParameters.push({ name: name, value: value });
                };
                _self.addHeader = function (name, value) {
                    _headers[name] = value;
                };
                _self.canSendRequest = function () {
                    return _hasIdleConnection() && _clockSkewManager.allowRequestSending();
                };
                _self.sendQueuedRequests = function (sendReason, isAsync, useSendBeacon) {
                    var isSync = CoreUtils.isNullOrUndefined(isAsync) ? false : !isAsync;
                    if (_canSendPayload(_batchQueue, isSync, 0)) {
                        _sendBatches(_clearQueue(), 0, false, isSync, sendReason || 0 /* Undefined */, !!useSendBeacon);
                    }
                };
                _self.isCompletelyIdle = function () {
                    return !_paused && _outstandingRequests === 0 && _batchQueue.length === 0;
                };
                _self.addBatch = function (theBatch) {
                    if (theBatch && theBatch.count() > 0) {
                        // Try and kill the event faster
                        if (_killSwitch.isTenantKilled(theBatch.iKey())) {
                            return false;
                        }
                        _batchQueue.push(theBatch);
                    }
                    return true;
                };
                /**
                 * Queue all the remaining requests to be sent. The requests will be
                 * sent using HTML5 Beacons if they are available.
                 */
                _self.teardown = function () {
                    if (_batchQueue.length > 0) {
                        _sendBatches(_clearQueue(), 0, true, true, 2 /* Unload */, true);
                    }
                };
                /**
                 * Pause the sending of requests. No new requests will be sent.
                 */
                _self.pause = function () {
                    _paused = true;
                };
                /**
                 * Resume the sending of requests.
                 */
                _self.resume = function () {
                    _paused = false;
                    _self.sendQueuedRequests(4 /* Resumed */, false);
                };
                /**
                 * Sends a request synchronously to the Aria collector. This api is used to send
                 * a request containing a single immediate event.
                 *
                 * @param batch - The request to be sent.
                 * @param sendReason   - The token used to send the request.
                 */
                _self.sendSynchronousBatch = function (batch, sendReason, useSendBeacon) {
                    // This will not take into account the max connections restriction. Since this is sync, we can
                    // only send one of this request at a time and thus should not worry about multiple connections
                    // being used to send synchronous events.
                    // Increment active connection since we are still going to use a connection to send the request.
                    if (batch && batch.count() > 0) {
                        // For sync requests we will not wait for the clock skew.
                        _sendBatches([batch], 0, false, true, sendReason || 0 /* Undefined */, !!useSendBeacon);
                    }
                };
                function _hasIdleConnection() {
                    return !_paused && _outstandingRequests < maxConnections;
                }
                function _clearQueue() {
                    var theQueue = _batchQueue;
                    _batchQueue = [];
                    return theQueue;
                }
                function _canSendPayload(theBatches, isSync, retryCnt) {
                    var result = false;
                    if (theBatches && theBatches.length > 0 && !_paused && _httpInterface && _serializer) {
                        // Always attempt to send synchronous events don't wait for idle or clockSkew
                        // and don't block retry requests if clockSkew is not yet set
                        result = isSync || (_hasIdleConnection() && (retryCnt > 0 || _clockSkewManager.allowRequestSending()));
                    }
                    return result;
                }
                function _createDebugBatches(theBatches) {
                    var values = {};
                    if (theBatches) {
                        arrForEach(theBatches, function (theBatch, idx) {
                            values[idx] = {
                                iKey: theBatch.iKey(),
                                evts: theBatch.events()
                            };
                        });
                    }
                    return values;
                }
                function _sendBatches(theBatches, retryCount, isTeardown, isSynchronous, sendReason, useSendBeacon) {
                    if (!theBatches || theBatches.length === 0) {
                        // Nothing to do
                        return;
                    }
                    if (_paused) {
                        _sendBatchesNotification(theBatches, 1 /* Paused */, isSynchronous);
                        return;
                    }
                    var orgBatches = theBatches;
                    doPerf(_core, function () { return "HttpManager:_sendBatches"; }, function (perfEvt) {
                        if (perfEvt) {
                            // Perf Monitoring is enabled, so create a "Quick" copy of the original batches so we still report
                            // the original values as part of the perfEvent. This is because theBatches uses .shift() to remove each
                            // batch as they are processed - removing from the original array, so by the time the _createDebugBatches()
                            // function is called the passed in value has changed and therefore the reported value for the perfEvent is incorrect
                            theBatches = theBatches.slice(0);
                        }
                        var droppedBatches = [];
                        var thePayload = null;
                        var serializationStart = getTime();
                        while (_canSendPayload(theBatches, isSynchronous, retryCount)) {
                            var theBatch = theBatches.shift();
                            if (theBatch && theBatch.count() > 0) {
                                if (!_killSwitch.isTenantKilled(theBatch.iKey())) {
                                    // Make sure we have a payload object
                                    thePayload = thePayload || _serializer.createPayload(retryCount, isTeardown, isSynchronous, useSendBeacon && _canUseSendBeaconApi());
                                    // Add the batch to the current payload
                                    if (!_serializer.appendPayload(thePayload, theBatch, maxEventsPerBatch)) {
                                        // Entire batch was not added so send the payload and retry adding this batch
                                        _doPayloadSend(thePayload, serializationStart, getTime(), sendReason);
                                        serializationStart = getTime();
                                        theBatches = [theBatch].concat(theBatches);
                                        thePayload = null;
                                    }
                                    else if (thePayload.overflow !== null) {
                                        // Total Payload size was exceeded so send the payload and add the unsent as the next batch to send
                                        theBatches = [thePayload.overflow].concat(theBatches);
                                        thePayload.overflow = null;
                                        _doPayloadSend(thePayload, serializationStart, getTime(), sendReason);
                                        serializationStart = getTime();
                                        thePayload = null;
                                    }
                                }
                                else {
                                    droppedBatches.push(theBatch);
                                }
                            }
                        }
                        // Make sure to flush any remaining payload
                        if (thePayload) {
                            _doPayloadSend(thePayload, serializationStart, getTime(), sendReason);
                        }
                        if (theBatches.length > 0) {
                            // Add any unsent batches back to the head of the queue
                            _batchQueue = theBatches.concat(_batchQueue);
                        }
                        // Now send notification about any dropped events
                        _sendBatchesNotification(droppedBatches, 8004 /* KillSwitch */, isSynchronous);
                    }, function () { return ({ batches: _createDebugBatches(orgBatches), retryCount: retryCount, isTeardown: isTeardown, isSynchronous: isSynchronous, sendReason: sendReason, useSendBeacon: useSendBeacon }); }, !isSynchronous);
                }
                function _buildQueryString(thePayload) {
                    var urlString = _urlString;
                    var apiQsKeys = "";
                    arrForEach(thePayload.apiKeys, function (apiKey) {
                        if (apiQsKeys.length > 0) {
                            apiQsKeys += ",";
                        }
                        apiQsKeys += apiKey;
                    });
                    if (apiQsKeys.length > 0) {
                        urlString += "&apikey=" + apiQsKeys;
                    }
                    urlString += "&upload-time=" + CoreUtils.dateNow().toString();
                    var msfpc = _getMsfpc(thePayload);
                    if (isValueAssigned(msfpc)) {
                        urlString = urlString + "&ext.intweb.msfpc=" + msfpc;
                    }
                    if (_clockSkewManager.shouldAddClockSkewHeaders()) {
                        urlString += "&time-delta-to-apply-millis=" + _clockSkewManager.getClockSkewHeaderValue();
                    }
                    if (_core.getWParam) {
                        var wParam = _core.getWParam();
                        if (wParam >= 0) {
                            urlString += "&w=" + wParam;
                        }
                    }
                    for (var i = 0; i < _queryStringParameters.length; i++) {
                        urlString += "&" + _queryStringParameters[i].name + "=" + _queryStringParameters[i].value;
                    }
                    return urlString;
                }
                function _canUseSendBeaconApi() {
                    return !_customHttpInterface && _useBeacons && isBeaconsSupported();
                }
                function _setTimingValue(timings, name, value) {
                    timings[name] = timings[name] || {};
                    timings[name][_postManager.identifier] = value;
                }
                function _doPayloadSend(thePayload, serializationStart, serializationCompleted, sendReason) {
                    if (thePayload && thePayload.payloadBlob && thePayload.payloadBlob.length > 0) {
                        var urlString_1 = _buildQueryString(thePayload);
                        var sendEventStart_1 = getTime();
                        var strSendAttempt_1 = "sendAttempt";
                        doPerf(_core, function () { return "HttpManager:_doPayloadSend"; }, function () {
                            // Increment the send attempt count and add timings after packaging (So it's not serialized in the 1st attempt)
                            arrForEach(thePayload.batches, function (theBatch) {
                                arrForEach(theBatch.events(), function (telemetryItem) {
                                    if (_enableEventTimings) {
                                        var timings = telemetryItem.timings = telemetryItem.timings || {};
                                        _setTimingValue(timings, "sendEventStart", sendEventStart_1);
                                        _setTimingValue(timings, "serializationStart", serializationStart);
                                        _setTimingValue(timings, "serializationCompleted", serializationCompleted);
                                    }
                                    telemetryItem[strSendAttempt_1] > 0 ? telemetryItem[strSendAttempt_1]++ : telemetryItem[strSendAttempt_1] = 1;
                                });
                            });
                            // Note: always sending this notification in a synchronous manner.
                            _sendBatchesNotification(thePayload.batches, (1000 /* SendingUndefined */ + (sendReason || 0 /* Undefined */)), thePayload.isSync, true);
                            var orgPayloadData = {
                                data: thePayload.payloadBlob,
                                urlString: urlString_1,
                                headers: _headers
                            };
                            var sender = null;
                            var useSendHook = !!_self.sendHook;
                            // Send all data using beacon if closing mode is on or channel was teared down
                            if (_canUseSendBeaconApi() && thePayload.isBeacon) {
                                useSendHook = false;
                                sender = function (payload) {
                                    _sendUsingBeacons(payload, thePayload, sendReason);
                                    // Ignore any processed data and just send the original content as we can't pass any custom headers via sendBeacon
                                    if (_self.sendListener) {
                                        _self.sendListener(orgPayloadData, payload, thePayload.isSync || thePayload.isTeardown, true);
                                    }
                                };
                            }
                            else if (_httpInterface) {
                                // Send sync requests if the request is immediate or we are tearing down telemetry.
                                sender = function (payload) {
                                    // Notify the clock skew manager that we are sending the first request (Potentially blocking all further requests)
                                    _clockSkewManager.firstRequestSent();
                                    var onComplete = function (status, headers) {
                                        _retryRequestIfNeeded(status, headers, thePayload, sendReason);
                                    };
                                    try {
                                        _httpInterface.sendPOST(payload, onComplete, thePayload.isTeardown || thePayload.isSync);
                                        if (_self.sendListener) {
                                            // Send the original payload to the listener
                                            _self.sendListener(orgPayloadData, payload, thePayload.isSync || thePayload.isTeardown, false);
                                        }
                                    }
                                    catch (ex) {
                                        _doOnComplete(onComplete, 0, {});
                                    }
                                };
                            }
                            doPerf(_core, function () { return "HttpManager:_doPayloadSend.sender"; }, function () {
                                if (sender) {
                                    if (!thePayload.isSync) {
                                        _outstandingRequests++;
                                    }
                                    if (useSendHook) {
                                        // Create a new IPayloadData that is sent into the hook method, so that the hook method
                                        // can't change the object references to the orgPayloadData (it can still change the content -- mainly the headers)
                                        var hookData_1 = {
                                            data: orgPayloadData.data,
                                            urlString: orgPayloadData.urlString,
                                            headers: orgPayloadData.headers
                                        };
                                        var senderCalled_1 = false;
                                        doPerf(_core, function () { return "HttpManager:_doPayloadSend.sendHook"; }, function () {
                                            try {
                                                _self.sendHook(hookData_1, function (payload) {
                                                    senderCalled_1 = true;
                                                    sender(payload);
                                                }, thePayload.isSync || thePayload.isTeardown);
                                            }
                                            catch (ex) {
                                                if (!senderCalled_1) {
                                                    // The hook never called the sender -- assume that it never will
                                                    sender(orgPayloadData);
                                                }
                                            }
                                        });
                                    }
                                    else {
                                        sender(orgPayloadData);
                                    }
                                }
                            });
                        }, function () { return ({ thePayload: thePayload, serializationStart: serializationStart, serializationCompleted: serializationCompleted, sendReason: sendReason }); }, thePayload.isSync);
                    }
                    // Ensure that we send any discard events for oversize events even when there was no payload to send
                    _sendBatchesNotification(thePayload.sizeExceed, 8003 /* SizeLimitExceeded */, thePayload.isSync);
                }
                function _sendUsingBeacons(payload, thePayload, sendReason) {
                    // Custom headers not supported in sendBeacon _headers would be ignored
                    try {
                        if (isBeaconsSupported()) {
                            var nav_1 = getNavigator();
                            if (nav_1.sendBeacon(payload.urlString, payload.data)) {
                                // Request successfully sent via beacon.
                                _handleRequestFinished(thePayload, 200 /* Complete */, sendReason, false);
                                return;
                            }
                            else {
                                // Split data and try to send as much events as possible
                                var droppedBatches_1 = null;
                                arrForEach(thePayload.batches, function (theBatch) {
                                    {
                                        // Remove all of the events from the existing batch in the payload as the copy includes the original
                                        droppedBatches_1.push(theBatch.split(0));
                                    }
                                });
                                _handleRequestFinished(thePayload, 200 /* Complete */, sendReason, false);
                                _sendBatchesNotification(droppedBatches_1, 8003 /* SizeLimitExceeded */, thePayload.isSync, true);
                            }
                        }
                    }
                    catch (ex) {
                        _postManager.diagLog().warnToConsole("Failed to send telemetry using sendBeacon API. Ex:" + ex);
                    }
                }
                function _addEventCompletedTimings(theEvents, sendEventCompleted) {
                    if (_enableEventTimings) {
                        arrForEach(theEvents, function (theEvent) {
                            var timings = theEvent.timings = theEvent.timings || {};
                            _setTimingValue(timings, "sendEventCompleted", sendEventCompleted);
                        });
                    }
                }
                function _retryRequestIfNeeded(status, headers, thePayload, sendReason) {
                    var reason = 9000 /* ResponseFailure */;
                    var droppedBatches = null;
                    var isRetrying = false;
                    var backOffTrans = false;
                    try {
                        var shouldRetry = true;
                        if (typeof status !== strUndefined$1) {
                            if (headers) {
                                _clockSkewManager.setClockSkew(headers[strTimeDeltaHeader]);
                                var killDuration = headers[strKillDurationHeader] || headers["kill-duration-seconds"];
                                arrForEach(_killSwitch.setKillSwitchTenants(headers[strKillTokensHeader], killDuration), function (killToken) {
                                    arrForEach(thePayload.batches, function (theBatch) {
                                        if (theBatch.iKey() === killToken) {
                                            // Make sure we have initialized the array
                                            droppedBatches = droppedBatches || [];
                                            // Create a copy of the batch with all of the events (and more importantly the action functions)
                                            var removedEvents = theBatch.split(0);
                                            // And then remove the events for the payload batch and reduce the actual number of processed
                                            thePayload.numEvents -= removedEvents.count();
                                            droppedBatches.push(removedEvents);
                                        }
                                    });
                                });
                            }
                            if (status === 200) {
                                // Response was successfully sent
                                reason = 200 /* Complete */;
                                return;
                            }
                            if (!RetryPolicy.shouldRetryForStatus(status) || thePayload.numEvents <= 0) {
                                // Only retry for specific response codes and if there is still events after kill switch processing
                                shouldRetry = false;
                            }
                            // Derive the notification response from the HttpStatus Code
                            reason = 9000 /* ResponseFailure */ + (status % 1000);
                        }
                        if (shouldRetry) {
                            // The events should be retried -- so change notification to requeue them
                            reason = 100 /* RequeueEvents */;
                            var retryCount_1 = thePayload.retryCnt;
                            if (!thePayload.isSync) {
                                if (retryCount_1 < maxRetries) {
                                    isRetrying = true;
                                    _doAction(function () {
                                        // try to resend the same batches
                                        if (!thePayload.isSync) {
                                            // Reduce the outstanding request count (if this was an async request) as we didn't reduce the count
                                            // previously and we are about to reschedule our retry attempt and we want an attempt to send
                                            // to occur, it's also required to ensure that a follow up handleRequestFinished() call occurs
                                            _outstandingRequests--;
                                        }
                                        _sendBatches(thePayload.batches, retryCount_1 + 1, thePayload.isTeardown, thePayload.isSync, 5 /* SendRequestReason.Retry */, thePayload.isBeacon);
                                    }, true, RetryPolicy.getMillisToBackoffForRetry(retryCount_1));
                                }
                                else {
                                    backOffTrans = true;
                                }
                            }
                        }
                    }
                    finally {
                        if (!isRetrying) {
                            // Make sure the clockSkewManager doesn't blocking further sending of requests once we have a proper response
                            // This won't override any previously sent clock Skew value
                            _clockSkewManager.setClockSkew();
                            _handleRequestFinished(thePayload, reason, sendReason, backOffTrans);
                        }
                        _sendBatchesNotification(droppedBatches, 8004 /* KillSwitch */, thePayload.isSync);
                    }
                }
                function _handleRequestFinished(thePayload, batchReason, sendReason, backOffTrans) {
                    try {
                        if (backOffTrans) {
                            // Slow down the transmission requests
                            _postManager._backOffTransmission();
                        }
                        if (batchReason === 200 /* Complete */) {
                            if (!backOffTrans && !thePayload.isSync) {
                                // We have a successful async response, so the lets open the floodgates
                                // The reason for checking isSync is to avoid unblocking if beacon send occurred as it
                                // doesn't wait for a response.
                                _postManager._clearBackOff();
                            }
                            _addCompleteTimings(thePayload.batches);
                        }
                        // Send the notifications synchronously
                        _sendBatchesNotification(thePayload.batches, batchReason, thePayload.isSync, true);
                    }
                    finally {
                        if (!thePayload.isSync) {
                            // we always need to decrement this value otherwise the httpmanager locks up and won't send any more events
                            _outstandingRequests--;
                            // Don't try to send additional queued events if this is a retry operation as the retried
                            // response will eventually call _handleRequestFinished for the retried event
                            if (sendReason !== 5 /* Retry */) {
                                // Try and send any other queued batched events
                                _self.sendQueuedRequests(sendReason, !thePayload.isSync, thePayload.isBeacon);
                            }
                        }
                    }
                }
                function _addCompleteTimings(theBatches) {
                    if (_enableEventTimings) {
                        var sendEventCompleted_1 = getTime();
                        arrForEach(theBatches, function (theBatch) {
                            if (theBatch && theBatch.count() > 0) {
                                _addEventCompletedTimings(theBatch.events(), sendEventCompleted_1);
                            }
                        });
                    }
                }
                function _doAction(cb, isSync, interval) {
                    if (isSync) {
                        cb();
                    }
                    else {
                        _postManager._setTimeoutOverride(cb, interval);
                    }
                }
                /**
                * Converts the XHR getAllResponseHeaders to a map containing the header key and value.
                */
                // tslint:disable-next-line: align
                function _convertAllHeadersToMap(headersString) {
                    var headers = {};
                    if (isString(headersString)) {
                        var headersArray = strTrim(headersString).split(/[\r\n]+/);
                        arrForEach(headersArray, function (headerEntry) {
                            if (headerEntry) {
                                var idx = headerEntry.indexOf(": ");
                                if (idx !== -1) {
                                    // The new spec has the headers returning all as lowercase -- but not all browsers do this yet
                                    var header = strTrim(headerEntry.substring(0, idx)).toLowerCase();
                                    var value = strTrim(headerEntry.substring(idx + 1));
                                    headers[header] = value;
                                }
                                else {
                                    headers[strTrim(headerEntry)] = 1;
                                }
                            }
                        });
                    }
                    return headers;
                }
                function _getMsfpc(thePayload) {
                    for (var lp = 0; lp < thePayload.batches.length; lp++) {
                        var batchEvents = thePayload.batches[lp].events();
                        for (var evtLp = 0; evtLp < batchEvents.length; evtLp++) {
                            var intWeb = ((batchEvents[evtLp].ext || {})["intweb"] || {});
                            if (isValueAssigned(intWeb["msfpc"])) {
                                return encodeURIComponent(intWeb["msfpc"]);
                            }
                        }
                    }
                    return "";
                }
                function _handleCollectorResponse(responseText) {
                    var responseHandlers = _self._responseHandlers;
                    try {
                        for (var i = 0; i < responseHandlers.length; i++) {
                            try {
                                responseHandlers[i](responseText);
                            }
                            catch (e) {
                                _postManager.diagLog().throwInternal(LoggingSeverity.CRITICAL, _ExtendedInternalMessageId.PostResponseHandler, "Response handler failed: " + e);
                            }
                        }
                        if (responseText) {
                            var response = JSON.parse(responseText);
                            if (isValueAssigned(response.webResult) && isValueAssigned(response.webResult.msfpc)) {
                                // Set cookie
                                setCookie("MSFPC", response.webResult.msfpc, 365);
                            }
                        }
                    }
                    catch (ex) {
                        // Doing nothing
                    }
                }
                function _sendBatchesNotification(theBatches, batchReason, isSyncRequest, sendSync) {
                    if (theBatches && theBatches.length > 0 && actions) {
                        var theAction_1 = actions[_getNotificationAction(batchReason)];
                        if (theAction_1) {
                            doPerf(_core, function () { return "HttpManager:_sendBatchesNotification"; }, function () {
                                _doAction(function () {
                                    try {
                                        theAction_1.call(actions, theBatches, batchReason, isSyncRequest);
                                    }
                                    catch (e) {
                                        _postManager.diagLog().throwInternal(LoggingSeverity.CRITICAL, _ExtendedInternalMessageId.NotificationException, "send request notification failed: " + e);
                                    }
                                }, sendSync || isSyncRequest, 0);
                            }, function () { return ({ batches: _createDebugBatches(theBatches), reason: batchReason, isSync: isSyncRequest, sendSync: sendSync }); }, !isSyncRequest);
                        }
                    }
                }
                function _getNotificationAction(reason) {
                    var action = _eventActionMap[reason];
                    if (!isValueAssigned(action)) {
                        action = strOther;
                        if (reason >= 9000 /* ResponseFailure */ && reason <= 9999 /* ResponseFailureMax */) {
                            action = strResponseFail;
                        }
                        else if (reason >= 8000 /* EventsDropped */ && reason <= 8999 /* EventsDroppedMax */) {
                            action = strDropped;
                        }
                        else if (reason >= 1000 /* SendingUndefined */ && reason <= 1999 /* SendingEventMax */) {
                            action = strSending;
                        }
                    }
                    return action;
                }
            });
        }
    // Removed Stub for HttpManager.prototype.initialize.
    // Removed Stub for HttpManager.prototype.addQueryStringParameter.
    // Removed Stub for HttpManager.prototype.addHeader.
    // Removed Stub for HttpManager.prototype.addBatch.
    // Removed Stub for HttpManager.prototype.canSendRequest.
    // Removed Stub for HttpManager.prototype.sendQueuedRequests.
    // Removed Stub for HttpManager.prototype.isCompletelyIdle.
    // Removed Stub for HttpManager.prototype.teardown.
    // Removed Stub for HttpManager.prototype.pause.
    // Removed Stub for HttpManager.prototype.resume.
    // Removed Stub for HttpManager.prototype.sendSynchronousBatch.
        return HttpManager;
    }());

    /*!
     * 1DS JS SDK POST plugin, 3.0.2
     * Copyright (c) Microsoft and contributors. All rights reserved.
     * (Microsoft Internal Only)
     */
    var FlushCheckTimer = 0.250; // This needs to be in seconds, so this is 250ms
    var MaxNumberEventPerBatch = 500;
    var EventsDroppedAtOneTime = 20;
    var MaxSendAttempts = 6;
    var MaxBackoffCount = 4;
    var globalContext = isWindowObjectAvailable ? window : undefined;
    var MaxConnections = 2;
    var MaxRetries = 1;
    var strEventsDiscarded = "eventsDiscarded";
    var strOverrideInstrumentationKey = "overrideInstrumentationKey";
    /**
     * Class that manages adding events to inbound queues and batching of events
     * into requests.
     */
    var PostChannel = /** @class */ (function (_super) {
        __extends(PostChannel, _super);
        function PostChannel() {
            var _this = _super.call(this) || this;
            _this.identifier = "PostChannel";
            _this.priority = 1011;
            _this.version = '3.0.2';
            var _config;
            var _isTeardownCalled = false;
            var _flushCallbackQueue = [];
            var _flushCallbackTimerId = null;
            var _paused = false;
            var _queueSize = 0;
            var _queueSizeLimit = 10000;
            var _profiles = {};
            var _currentProfile = RT_PROFILE;
            var _scheduledTimerId = null;
            var _currentBackoffCount = 0;
            var _timerCount = 0;
            var _xhrOverride;
            var _httpManager;
            var _batchQueues = {};
            var _autoFlushEventsLimit;
            // either MaxBatchSize * (1+ Max Connections) or _queueLimit / 6 (where 3 latency Queues [normal, realtime, cost deferred] * 2 [allow half full -- allow for retry])
            var _autoFlushBatchLimit;
            var _delayedBatchSendLatency = -1;
            var _delayedBatchReason;
            dynamicProto(PostChannel, _this, function (_self, _base) {
                _initializeProfiles();
                _clearQueues();
                _setAutoLimits();
                _httpManager = new HttpManager(MaxNumberEventPerBatch, MaxConnections, MaxRetries, {
                    requeue: _requeueEvents,
                    send: _sendingEvent,
                    sent: _eventsSentEvent,
                    drop: _eventsDropped,
                    rspFail: _eventsResponseFail,
                    oth: _otherEvent
                });
                // Special internal method to allow the DebugPlugin to hook embedded objects
                _self["_getDbgPlgTargets"] = function () {
                    return [_httpManager];
                };
                _self.initialize = function (coreConfig, core, extensions) {
                    doPerf(core, function () { return "PostChannel:initialize"; }, function () {
                        var extendedCore = core;
                        _base.initialize(coreConfig, core, extensions);
                        _self.setInitialized(false);
                        var ctx = _self._getTelCtx();
                        coreConfig.extensionConfig[_self.identifier] = coreConfig.extensionConfig[_self.identifier] || {};
                        _config = ctx.getExtCfg(_self.identifier);
                        _self._setTimeoutOverride = _config.setTimeoutOverride ? _config.setTimeoutOverride : setTimeout.bind(globalContext);
                        _self._clearTimeoutOverride = _config.clearTimeoutOverride ? _config.clearTimeoutOverride : clearTimeout.bind(globalContext);
                        var existingGetWParamMethod = extendedCore.getWParam;
                        extendedCore.getWParam = function () {
                            var wparam = 0;
                            if (_config.ignoreMc1Ms0CookieProcessing) {
                                wparam = wparam | 2;
                            }
                            return wparam | existingGetWParamMethod();
                        };
                        if (_config.eventsLimitInMem > 0) {
                            _queueSizeLimit = _config.eventsLimitInMem;
                        }
                        if (_config.autoFlushEventsLimit > 0) {
                            _autoFlushEventsLimit = _config.autoFlushEventsLimit;
                        }
                        _setAutoLimits();
                        if (_config.httpXHROverride && _config.httpXHROverride.sendPOST) {
                            _xhrOverride = _config.httpXHROverride;
                        }
                        if (isValueAssigned(coreConfig.anonCookieName)) {
                            _httpManager.addQueryStringParameter("anoncknm", coreConfig.anonCookieName);
                        }
                        _httpManager.sendHook = _config.payloadPreprocessor;
                        _httpManager.sendListener = _config.payloadListener;
                        // Override endpointUrl if provided in Post config
                        var endpointUrl = _config.overrideEndpointUrl ? _config.overrideEndpointUrl : coreConfig.endpointUrl;
                        _self._notificationManager = coreConfig.extensionConfig.NotificationManager;
                        _httpManager.initialize(endpointUrl, _self.core, _self, _xhrOverride, _config);
                        // When running in Web browsers try to send all telemetry if page is unloaded
                        addPageUnloadEventListener(function () { _releaseAllQueuesUsingBeacons(2 /* Unload */, false); });
                        _self.setInitialized(true);
                    }, function () { return ({ coreConfig: coreConfig, core: core, extensions: extensions }); });
                };
                _self.processTelemetry = function (ev, itemCtx) {
                    setProcessTelemetryTimings(ev, _self.identifier);
                    itemCtx = _self._getTelCtx(itemCtx);
                    // Get the channel instance from the current request/instance
                    var channelConfig = itemCtx.getExtCfg(_self.identifier);
                    // DisableTelemetry was defined in the config provided during initialization
                    var disableTelemetry = !!_config.disableTelemetry;
                    if (channelConfig) {
                        // DisableTelemetry is defined in the config for this request/instance
                        disableTelemetry = disableTelemetry || !!channelConfig.disableTelemetry;
                    }
                    var event = ev;
                    if (!disableTelemetry && !_isTeardownCalled) {
                        // Override iKey if provided in Post config if provided for during initialization
                        if (_config[strOverrideInstrumentationKey]) {
                            event.iKey = _config[strOverrideInstrumentationKey];
                        }
                        // Override iKey if provided in Post config if provided for this instance
                        if (channelConfig && channelConfig[strOverrideInstrumentationKey]) {
                            event.iKey = channelConfig[strOverrideInstrumentationKey];
                        }
                        _addEventToQueues(event, true);
                        _scheduleTimer();
                    }
                    _self.processNext(event, itemCtx);
                };
                function _addEventToQueues(event, append) {
                    // If send attempt field is undefined we should set it to 0.
                    if (!event.sendAttempt) {
                        event.sendAttempt = 0;
                    }
                    // Add default latency
                    if (!event.latency) {
                        event.latency = EventLatency.Normal;
                    }
                    // Remove extra AI properties if present
                    if (event.ext && event.ext["trace"]) {
                        delete (event.ext["trace"]);
                    }
                    if (event.ext && event.ext["user"] && event.ext["user"]["id"]) {
                        delete (event.ext["user"]["id"]);
                    }
                    if (event.sync) {
                        // If the transmission is backed off then do not send synchronous events.
                        // We will convert these events to Real time latency instead.
                        if (_currentBackoffCount || _paused) {
                            event.latency = EventLatency.RealTime;
                            event.sync = false;
                        }
                        else {
                            // Log the event synchronously
                            if (_httpManager) {
                                _httpManager.sendSynchronousBatch(EventBatch.create(event.iKey, [event]), 3 /* SyncEvent */);
                                return;
                            }
                        }
                    }
                    var eventDropped = false;
                    if (_queueSize < _queueSizeLimit) {
                        eventDropped = !_addEventToProperQueue(event, append);
                    }
                    else {
                        // Drop old event from lower or equal latency
                        eventDropped = true;
                        if (_dropEventWithLatencyOrLess(event.iKey, event.latency)) {
                            eventDropped = !_addEventToProperQueue(event, append);
                        }
                    }
                    if (eventDropped) {
                        // Can't drop events from current queues because the all the slots are taken by queues that are being flushed.
                        _notifyEvents(strEventsDiscarded, [event], EventsDiscardedReason.QueueFull);
                    }
                }
                _self.setEventQueueLimits = function (eventLimit, autoFlushLimit) {
                    _queueSizeLimit = eventLimit > 0 ? eventLimit : 10000;
                    _autoFlushEventsLimit = autoFlushLimit > 0 ? autoFlushLimit : 0;
                    _setAutoLimits();
                    // We only do this check here as during normal event addition if the queue is > then events start getting dropped
                    var doFlush = _queueSize > eventLimit;
                    if (!doFlush && _autoFlushBatchLimit > 0) {
                        // Check the auto flush max batch size
                        for (var latency = EventLatency.Normal; !doFlush && latency <= EventLatency.RealTime; latency++) {
                            var batchQueue = _batchQueues[latency];
                            if (batchQueue && batchQueue.batches) {
                                arrForEach(batchQueue.batches, function (theBatch) {
                                    if (theBatch && theBatch.count() >= _autoFlushBatchLimit) {
                                        // If any 1 batch is > than the limit then trigger an auto flush
                                        doFlush = true;
                                    }
                                });
                            }
                        }
                    }
                    _performAutoFlush(true, doFlush);
                };
                _self.teardown = function () {
                    _releaseAllQueuesUsingBeacons(2 /* Unload */, false);
                    _isTeardownCalled = true;
                    _httpManager.teardown();
                };
                _self.pause = function () {
                    _clearScheduledTimer();
                    _paused = true;
                    _httpManager.pause();
                };
                _self.resume = function () {
                    _paused = false;
                    _httpManager.resume();
                    _scheduleTimer();
                };
                _self.addResponseHandler = function (responseHandler) {
                    _httpManager._responseHandlers.push(responseHandler);
                };
                _self._loadTransmitProfiles = function (profiles) {
                    _resetTransmitProfiles();
                    objForEachKey(profiles, function (profileName, profileValue) {
                        if (profileValue.length >= 2) {
                            profileValue.splice(0, profileValue.length - 2);
                            // Make sure if a higher latency is set to not send then don't send lower latency
                            if (profileValue[1] < 0) {
                                profileValue[0] = -1;
                            }
                            // Make sure each latency is multiple of the latency higher then it. If not a multiple
                            // we round up so that it becomes a multiple.
                            if (profileValue[1] > 0 && profileValue[0] > 0) {
                                var timerMultiplier = profileValue[0] / profileValue[1];
                                profileValue[0] = Math.ceil(timerMultiplier) * profileValue[1];
                            }
                            _profiles[profileName] = profileValue;
                        }
                    });
                };
                _self.flush = function (async, callback, sendReason) {
                    if (async === void 0) { async = true; }
                    if (!_paused) {
                        // Clear the normal schedule timer as we are going to try and flush ASAP
                        _clearScheduledTimer();
                        sendReason = sendReason || 1 /* ManualFlush */;
                        if (async) {
                            // Move all queued events to the HttpManager
                            _queueBatches(EventLatency.Normal, sendReason, async);
                            if (_flushCallbackTimerId == null) {
                                _flushCallbackTimerId = _createTimer(function () {
                                    _flushImpl(callback, sendReason);
                                }, 0);
                            }
                            else {
                                // Even if null (no callback) this will ensure after the flushImpl finishes waiting
                                // for a completely idle connection it will attempt to re-flush any queued events on the next cycle
                                _flushCallbackQueue.push(callback);
                            }
                        }
                        else {
                            // Now cause all queued events to be sent synchronously
                            _sendEventsForLatencyAndAbove(EventLatency.Normal, sendReason, false);
                            if (callback !== null && callback !== undefined) {
                                callback();
                            }
                        }
                    }
                };
                _self.setMsaAuthTicket = function (ticket) {
                    _httpManager.addHeader("AuthMsaDeviceTicket", ticket);
                };
                _self.hasEvents = _hasEvents;
                _self._setTransmitProfile = function (profileName) {
                    if (_currentProfile !== profileName && _profiles[profileName] !== undefined) {
                        _clearScheduledTimer();
                        _currentProfile = profileName;
                        _scheduleTimer();
                    }
                };
                /**
                 * Batch and send events currently in the queue for the given latency.
                 * @param latency - Latency for which to send events.
                 */
                function _sendEventsForLatencyAndAbove(latency, sendReason, isAsync, useSendBeacon) {
                    var queued = _queueBatches(latency, sendReason, isAsync);
                    // Always trigger the request as while the post channel may not have queued additional events, the httpManager may already have waiting events
                    _httpManager.sendQueuedRequests(sendReason, isAsync, useSendBeacon);
                    return queued;
                }
                function _hasEvents() {
                    return _queueSize > 0;
                }
                /**
                 * Try to schedule the timer after which events will be sent. If there are
                 * no events to be sent, or there is already a timer scheduled, or the
                 * http manager doesn't have any idle connections this method is no-op.
                 */
                function _scheduleTimer() {
                    // If we had previously attempted to send requests, but the http manager didn't have any idle connections then the requests where delayed
                    // so try and requeue then again now
                    if (_delayedBatchSendLatency >= 0 && _queueBatches(_delayedBatchSendLatency, _delayedBatchReason, true)) {
                        _httpManager.sendQueuedRequests(_delayedBatchReason, true, false);
                    }
                    // During initialization the _profiles enforce that the normal [0] is a multiple of the critical [1] timer value
                    var timeOut = _profiles[_currentProfile][1];
                    if (!_scheduledTimerId && !_flushCallbackTimerId && timeOut >= 0 && !_paused) {
                        if (_hasEvents()) {
                            _scheduledTimerId = _createTimer(function () {
                                _scheduledTimerId = null;
                                _sendEventsForLatencyAndAbove(_timerCount === 0 ? EventLatency.RealTime : EventLatency.Normal, 1 /* NormalSchedule */, true);
                                // Increment the count for next cycle
                                _timerCount++;
                                _timerCount %= 2;
                                _scheduleTimer();
                            }, timeOut);
                        }
                        else {
                            _timerCount = 0;
                        }
                    }
                }
                _self._backOffTransmission = function () {
                    if (_currentBackoffCount < MaxBackoffCount) {
                        _currentBackoffCount++;
                        _clearScheduledTimer();
                        _scheduleTimer();
                    }
                };
                _self._clearBackOff = function () {
                    if (_currentBackoffCount) {
                        _currentBackoffCount = 0;
                        _clearScheduledTimer();
                        _scheduleTimer();
                    }
                };
                function _createTimer(theTimerFunc, timeOut) {
                    // If the transmission is backed off make the timer at least 1 sec to allow for back off.
                    if (timeOut === 0 && _currentBackoffCount) {
                        timeOut = 1;
                    }
                    var timerMultiplier = 1000;
                    if (_currentBackoffCount) {
                        timerMultiplier = RetryPolicy.getMillisToBackoffForRetry(_currentBackoffCount - 1);
                    }
                    return _self._setTimeoutOverride(theTimerFunc, timeOut * timerMultiplier);
                }
                function _clearScheduledTimer() {
                    if (_scheduledTimerId !== null) {
                        _self._clearTimeoutOverride(_scheduledTimerId);
                        _scheduledTimerId = null;
                        _timerCount = 0;
                    }
                }
                // Try to send all queued events using beacons if available
                function _releaseAllQueuesUsingBeacons(sendReason, isAsync) {
                    _clearScheduledTimer();
                    // Cancel all flush callbacks
                    if (_flushCallbackTimerId) {
                        _self._clearTimeoutOverride(_flushCallbackTimerId);
                        _flushCallbackTimerId = null;
                    }
                    if (!_paused) {
                        // Queue all the remaining requests to be sent. The requests will be sent using HTML5 Beacons if they are available.
                        _sendEventsForLatencyAndAbove(EventLatency.Normal, sendReason, isAsync, true);
                    }
                }
                /**
                 * Add empty queues for all latencies in the inbound queues map. This is called
                 * when Transmission Manager is being flushed. This ensures that new events added
                 * after flush are stored separately till we flush the current events.
                 */
                function _clearQueues() {
                    _batchQueues[EventLatency.RealTime] = {
                        batches: [],
                        iKeyMap: {}
                    };
                    _batchQueues[EventLatency.CostDeferred] = {
                        batches: [],
                        iKeyMap: {}
                    };
                    _batchQueues[EventLatency.Normal] = {
                        batches: [],
                        iKeyMap: {}
                    };
                }
                function _getEventBatch(iKey, latency, create) {
                    var batchQueue = _batchQueues[latency];
                    if (!batchQueue) {
                        latency = EventLatency.Normal;
                        batchQueue = _batchQueues[latency];
                    }
                    var eventBatch = batchQueue.iKeyMap[iKey];
                    if (!eventBatch && create) {
                        eventBatch = EventBatch.create(iKey);
                        batchQueue.batches.push(eventBatch);
                        batchQueue.iKeyMap[iKey] = eventBatch;
                    }
                    return eventBatch;
                }
                function _performAutoFlush(isAsync, doFlush) {
                    // Only perform the auto flush check if the httpManager has an idle connection and we are not in a backoff situation
                    if (_httpManager.canSendRequest() && !_currentBackoffCount) {
                        if (_autoFlushEventsLimit > 0 && _queueSize > _autoFlushEventsLimit) {
                            // Force flushing
                            doFlush = true;
                        }
                        if (doFlush && _flushCallbackTimerId == null) {
                            // Auto flush the queue
                            _self.flush(isAsync, null, 20 /* MaxQueuedEvents */);
                        }
                    }
                }
                function _addEventToProperQueue(event, append) {
                    var eventBatch = _getEventBatch(event.iKey, event.latency, true);
                    if (eventBatch.addEvents([event], append)) {
                        _queueSize++;
                        // Check for auto flushing based on total events in the queue, but not for requeued or retry events
                        if (append && event.sendAttempt === 0) {
                            // Force the flushing of the batch if the batch (specific iKey / latency combination) reaches it's auto flush limit
                            _performAutoFlush(!event.sync, _autoFlushBatchLimit > 0 && eventBatch.count() >= _autoFlushBatchLimit);
                        }
                        return true;
                    }
                    return false;
                }
                function _dropEventWithLatencyOrLess(iKey, latency) {
                    var currentLatency = EventLatency.Normal;
                    while (currentLatency <= latency) {
                        var eventBatch = _getEventBatch(iKey, latency, true);
                        if (eventBatch && eventBatch.count() > 0) {
                            // Dropped oldest events from lowest possible latency
                            var droppedEvents = eventBatch.split(0, EventsDroppedAtOneTime);
                            if (droppedEvents.count() > 0) {
                                _notifyBatchEvents(strEventsDiscarded, [droppedEvents], EventsDiscardedReason.QueueFull);
                                return true;
                            }
                        }
                        currentLatency++;
                    }
                    return false;
                }
                function _queueBatches(latency, sendReason, isAsync) {
                    var eventsQueued = false;
                    // Only queue batches if this is a sync request or the httpManager has an idle connection
                    // Thus keeping the events within the PostChannel until the HttpManager has a connection available
                    // This is so we can drop "old" events if the queue is getting full because we can't successfully send events
                    if (!isAsync || _httpManager.canSendRequest()) {
                        doPerf(_self.core, function () { return "PostChannel._queueBatches"; }, function () {
                            var droppedEvents = [];
                            var latencyToProcess = EventLatency.RealTime;
                            while (latencyToProcess >= latency) {
                                var batchQueue = _batchQueues[latencyToProcess];
                                if (batchQueue && batchQueue.batches) {
                                    arrForEach(batchQueue.batches, function (theBatch) {
                                        // Add the batch to the http manager to send the requests
                                        if (!_httpManager.addBatch(theBatch)) {
                                            // The events from this iKey are being dropped (killed)
                                            droppedEvents = droppedEvents.concat(theBatch.events());
                                        }
                                        else {
                                            eventsQueued = eventsQueued || (theBatch && theBatch.count() > 0);
                                        }
                                        _queueSize -= theBatch.count();
                                    });
                                    // Remove all batches from this Queue
                                    batchQueue.batches = [];
                                    batchQueue.iKeyMap = {};
                                }
                                latencyToProcess--;
                            }
                            if (droppedEvents.length > 0) {
                                _notifyEvents(strEventsDiscarded, droppedEvents, EventsDiscardedReason.KillSwitch);
                            }
                            if (eventsQueued && _delayedBatchSendLatency >= latency) {
                                // We have queued events at the same level as the delayed values so clear the setting
                                _delayedBatchSendLatency = -1;
                                _delayedBatchReason = 0 /* Undefined */;
                            }
                        }, function () { return ({ latency: latency, sendReason: sendReason }); }, isAsync);
                    }
                    else {
                        // remember the min latency so that we can re-trigger later
                        _delayedBatchSendLatency = _delayedBatchSendLatency >= 0 ? Math.min(_delayedBatchSendLatency, latency) : latency;
                        _delayedBatchReason = Math.max(_delayedBatchReason, sendReason);
                    }
                    return eventsQueued;
                }
                /**
                 * This is the callback method is called as part of the manual flushing process.
                 * @param callback
                 * @param sendReason
                 */
                function _flushImpl(callback, sendReason) {
                    // Add any additional queued events and cause all queued events to be sent synchronously
                    _sendEventsForLatencyAndAbove(EventLatency.Normal, sendReason, true);
                    _waitForIdleManager(function () {
                        // Only called AFTER the httpManager does not have any outstanding requests
                        if (callback) {
                            callback();
                        }
                        if (_flushCallbackQueue.length > 0) {
                            _flushCallbackTimerId = _createTimer(function () { return _flushImpl(_flushCallbackQueue.shift(), sendReason); }, 0);
                        }
                        else {
                            // No more flush requests
                            _flushCallbackTimerId = null;
                            if (_hasEvents()) {
                                // We still have events, so restart the normal timer schedule
                                _scheduleTimer();
                            }
                        }
                    });
                }
                function _waitForIdleManager(callback) {
                    if (_httpManager.isCompletelyIdle()) {
                        callback();
                    }
                    else {
                        _flushCallbackTimerId = _createTimer(function () {
                            _waitForIdleManager(callback);
                        }, FlushCheckTimer);
                    }
                }
                /**
                 * Resets the transmit profiles to the default profiles of Real Time, Near Real Time
                 * and Best Effort. This removes all the custom profiles that were loaded.
                 */
                function _resetTransmitProfiles() {
                    _clearScheduledTimer();
                    _initializeProfiles();
                    _currentProfile = RT_PROFILE;
                    _scheduleTimer();
                }
                function _initializeProfiles() {
                    _profiles = {};
                    _profiles[RT_PROFILE] = [2, 1];
                    _profiles[NRT_PROFILE] = [6, 3];
                    _profiles[BE_PROFILE] = [18, 9];
                }
                /**
                 * The notification handler for requeue events
                 * @ignore
                 */
                function _requeueEvents(batches, reason) {
                    var droppedEvents = [];
                    arrForEach(batches, function (theBatch) {
                        if (theBatch && theBatch.count() > 0) {
                            arrForEach(theBatch.events(), function (theEvent) {
                                if (theEvent) {
                                    // Check if the request being added back is for a sync event in which case mark it no longer a sync event
                                    if (theEvent.sync) {
                                        theEvent.latency = EventLatency.RealTime;
                                        theEvent.sync = false;
                                    }
                                    if (theEvent.sendAttempt < MaxSendAttempts) {
                                        // Reset the event timings
                                        setProcessTelemetryTimings(theEvent, _self.identifier);
                                        _addEventToQueues(theEvent, false);
                                    }
                                    else {
                                        droppedEvents.push(theEvent);
                                    }
                                }
                            });
                        }
                    });
                    if (droppedEvents.length > 0) {
                        _notifyEvents(strEventsDiscarded, droppedEvents, EventsDiscardedReason.NonRetryableStatus);
                    }
                }
                function _callNotification(evtName, theArgs) {
                    var manager = (_self._notificationManager || {});
                    var notifyFunc = manager[evtName];
                    if (notifyFunc) {
                        try {
                            notifyFunc.apply(manager, theArgs);
                        }
                        catch (e) {
                            _self.diagLog().throwInternal(LoggingSeverity.CRITICAL, _ExtendedInternalMessageId.NotificationException, evtName + " notification failed: " + e);
                        }
                    }
                }
                function _notifyEvents(evtName, theEvents) {
                    var extraArgs = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        extraArgs[_i - 2] = arguments[_i];
                    }
                    if (theEvents && theEvents.length > 0) {
                        _callNotification(evtName, [theEvents].concat(extraArgs));
                    }
                }
                function _notifyBatchEvents(evtName, batches) {
                    var extraArgs = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        extraArgs[_i - 2] = arguments[_i];
                    }
                    if (batches && batches.length > 0) {
                        arrForEach(batches, function (theBatch) {
                            if (theBatch && theBatch.count() > 0) {
                                _callNotification(evtName, [theBatch.events()].concat(extraArgs));
                            }
                        });
                    }
                }
                /**
                 * The notification handler for when batches are about to be sent
                 * @ignore
                 */
                function _sendingEvent(batches, reason, isSyncRequest) {
                    if (batches && batches.length > 0) {
                        _callNotification("eventsSendRequest", [(reason >= 1000 /* SendingUndefined */ && reason <= 1999 /* SendingEventMax */ ?
                                reason - 1000 /* SendingUndefined */ :
                                0 /* Undefined */), isSyncRequest !== true]);
                    }
                }
                /**
                 * This event represents that a batch of events have been successfully sent and a response received
                 * @param batches The notification handler for when the batches have been successfully sent
                 * @param reason For this event the reason will always be EventBatchNotificationReason.Complete
                 */
                function _eventsSentEvent(batches, reason) {
                    _notifyBatchEvents("eventsSent", batches, reason);
                    // Try and schedule the processing timer if we have events
                    _scheduleTimer();
                }
                function _eventsDropped(batches, reason) {
                    _notifyBatchEvents(strEventsDiscarded, batches, (reason >= 8000 /* EventsDropped */ && reason <= 8999 /* EventsDroppedMax */ ?
                        reason - 8000 /* EventsDropped */ :
                        EventsDiscardedReason.Unknown));
                }
                function _eventsResponseFail(batches) {
                    _notifyBatchEvents(strEventsDiscarded, batches, EventsDiscardedReason.NonRetryableStatus);
                    // Try and schedule the processing timer if we have events
                    _scheduleTimer();
                }
                function _otherEvent(batches, reason) {
                    _notifyBatchEvents(strEventsDiscarded, batches, EventsDiscardedReason.Unknown);
                    // Try and schedule the processing timer if we have events
                    _scheduleTimer();
                }
                function _setAutoLimits() {
                    if (!_config || !_config.disableAutoBatchFlushLimit) {
                        _autoFlushBatchLimit = Math.max(MaxNumberEventPerBatch * (MaxConnections + 1), _queueSizeLimit / 6);
                    }
                    else {
                        _autoFlushBatchLimit = 0;
                    }
                }
            });
            return _this;
        }
    // Removed Stub for PostChannel.prototype.initialize.
    // Removed Stub for PostChannel.prototype.processTelemetry.
    // Removed Stub for PostChannel.prototype.setEventQueueLimits.
    // Removed Stub for PostChannel.prototype.teardown.
    // Removed Stub for PostChannel.prototype.pause.
    // Removed Stub for PostChannel.prototype.resume.
    // Removed Stub for PostChannel.prototype.addResponseHandler.
    // Removed Stub for PostChannel.prototype.flush.
    // Removed Stub for PostChannel.prototype.setMsaAuthTicket.
    // Removed Stub for PostChannel.prototype.hasEvents.
    // Removed Stub for PostChannel.prototype._loadTransmitProfiles.
    // Removed Stub for PostChannel.prototype._setTransmitProfile.
    // Removed Stub for PostChannel.prototype._backOffTransmission.
    // Removed Stub for PostChannel.prototype._clearBackOff.
        return PostChannel;
    }(BaseTelemetryPlugin));

    /*!
     * 1DS JS SDK POST plugin, 3.0.2
     * Copyright (c) Microsoft and contributors. All rights reserved.
     * (Microsoft Internal Only)
     */

    /*
    * Constants.ts
    * @author Abhilash Panwar (abpanwar)
    * @copyright Microsoft 2020
    * File containing constants for Engagement Insights properties.
    */
    var _Extensions = /** @class */ (function () {
        function _Extensions() {
        }
        _Extensions._SignalExt = 's';
        _Extensions._SignalLongExt = 'signal';
        return _Extensions;
    }());
    var _SignalExtKeys = /** @class */ (function () {
        function _SignalExtKeys() {
        }
        _SignalExtKeys._View = 'v';
        _SignalExtKeys._Referrer = 'r';
        _SignalExtKeys._Action = 't';
        _SignalExtKeys._Click = 'k';
        _SignalExtKeys._Session = 's';
        _SignalExtKeys._User = 'u';
        _SignalExtKeys._Host = 'h';
        _SignalExtKeys._Sdk = 'z';
        _SignalExtKeys._ExtKey = 'e';
        return _SignalExtKeys;
    }());
    var _SharedKeys = /** @class */ (function () {
        function _SharedKeys() {
        }
        _SharedKeys._Type = 't';
        _SharedKeys._Uri = 'u';
        _SharedKeys._NameKey = 'n';
        _SharedKeys._Domain = 'd';
        _SharedKeys._Version = 'v';
        _SharedKeys._Title = 'v';
        _SharedKeys._Class = 'c';
        _SharedKeys._TimeZone = 'z';
        _SharedKeys._Source = 's';
        _SharedKeys._Id = 'i';
        return _SharedKeys;
    }());
    var _UserExtKeys = /** @class */ (function () {
        function _UserExtKeys() {
        }
        _UserExtKeys._LocalId = 'd';
        _UserExtKeys._AuthId = 'a';
        _UserExtKeys._AuthType = 'u';
        _UserExtKeys._Email = 'e';
        _UserExtKeys._State = 's';
        _UserExtKeys._TimeSinceVisit = 't';
        return _UserExtKeys;
    }());
    var _ReferrerExtKeys = /** @class */ (function () {
        function _ReferrerExtKeys() {
        }
        _ReferrerExtKeys._PageTitle = 'p';
        return _ReferrerExtKeys;
    }());
    var _ViewExtKeys = /** @class */ (function () {
        function _ViewExtKeys() {
        }
        _ViewExtKeys._Height = 'h';
        _ViewExtKeys._Width = 'w';
        _ViewExtKeys._VpHeight = 'g';
        _ViewExtKeys._VpWidth = 'd';
        _ViewExtKeys._ColorDepth = 'o';
        _ViewExtKeys._PreviousViews = 'r';
        _ViewExtKeys._SResolution = 's';
        return _ViewExtKeys;
    }());
    var _ActionExtKeys = /** @class */ (function () {
        function _ActionExtKeys() {
        }
        _ActionExtKeys._ElapsedTime = 'e';
        _ActionExtKeys._IsOutbound = 'o';
        _ActionExtKeys._Target = 'g';
        _ActionExtKeys._ElementId = 'm';
        return _ActionExtKeys;
    }());
    var _ClickExtKeys = /** @class */ (function () {
        function _ClickExtKeys() {
        }
        _ClickExtKeys._Coordinates = 'c';
        return _ClickExtKeys;
    }());
    var _SessionExtKeys = /** @class */ (function () {
        function _SessionExtKeys() {
        }
        _SessionExtKeys._Id = 'i';
        _SessionExtKeys._Duration = 'd';
        return _SessionExtKeys;
    }());
    var _UserStateValues = /** @class */ (function () {
        function _UserStateValues() {
        }
        _UserStateValues._New = 'new';
        _UserStateValues._Returning = 'returning';
        return _UserStateValues;
    }());
    var _ViewEventName = 'view';
    var _ViewSchemaVersion = '1.0';
    var _ActionEventName = 'action';
    var _ActionSchemaVersion = '1.0';
    var _SDKVersion = 'EI-JS-1.0.3';
    var _emptyString = '';
    var _PageViewType = 'page';
    var _EIPreviousKey = 'EISession.Previous';
    var _EISessionKey = 'EISession.Id';
    var _MSEI = '_msei';
    var _UserMappingEventName = 'usermapping';
    var _UserMappingEventVersion = '1.0';
    var _UserMappingStorageKey = 'EIMappings';
    var _DayToMilliseconds = 24 * 60 * 60 * 1000;
    // stats related
    var _StatsEventName = 'ei_sdk_stats';
    var _StatsSchemaVersion = '1.0';
    var _eventSent = 'e_s';
    var _eventDiscarded = 'e_d';
    var _eventDiscardedUnknown = 'e_d_u';
    var _eventDiscardedNonRetryableStatus = 'e_d_nr';
    var _eventDiscardedInvalidEvent = 'e_d_ie';
    var _eventDiscardedSizeLimitExceeded = 'e_d_sle';
    var _eventDiscardedKillSwitch = 'e_d_ks';
    var _eventDiscardedQueueFull = 'e_d_qf';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends$1(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? (function(obj) { /* ai_es3_polyfil create */ var func = Object["create"]; if (func) { return func(obj); } if (obj == null) { return {}; } var type = typeof obj; if (type !== 'object' && type !== 'function') { throw new TypeError('Object prototype may only be an Object:' + obj); } function tmpFunc() {} tmpFunc.prototype = obj; return new tmpFunc(); })(b) : (__.prototype = b.prototype, new __());
    }

    var mseiCookieExpiryDays = 365;
    /**
     * This class adds a telemetry plugin to populate autocollected properties.
     */
    var Properties = /** @class */ (function (_super) {
        __extends$1(Properties, _super);
        function Properties() {
            var _this = _super.call(this) || this;
            _this._user = {};
            _this._props = {};
            //Get time zone
            var timeZone = new Date().getTimezoneOffset();
            var minutes = timeZone % 60;
            var hours = (timeZone - minutes) / 60;
            var timeZonePrefix = '+';
            if (hours > 0) {
                timeZonePrefix = '-';
            }
            hours = Math.abs(hours);
            minutes = Math.abs(minutes);
            _this._timeZone = timeZonePrefix + (hours < 10 ? '0' + hours : hours.toString()) + ':' + (minutes < 10 ? '0' + minutes : minutes.toString());
            //Get domain
            var windowLocation = getLocation();
            if (windowLocation) {
                var domain = windowLocation.hostname;
                _this.origin = windowLocation.origin;
                if (domain) {
                    _this._domain = windowLocation.protocol === 'file:' ? 'local' : domain;
                }
            }
            return _this;
        }
        Properties.prototype.setup = function (SessionManager) {
            this._msei = getCookie(_MSEI);
            if (!this._msei) {
                this._msei = createGuid();
                setCookie(_MSEI, this._msei, mseiCookieExpiryDays);
                this._mseiCreated = true;
            }
            this._sessionManager = SessionManager;
        };
        /**
         * Process the current telemetry item.
         * @param event event to process
         * @param itemCtx context information for the core telemetry library
         */
        Properties.prototype.processTelemetry = function (event, itemCtx) {
            event.data[_Extensions._SignalExt][_SignalExtKeys._ExtKey][_SharedKeys._TimeZone] = this._timeZone;
            event.data[_Extensions._SignalExt][_SignalExtKeys._ExtKey][_SharedKeys._Source] = 'Web';
            event.data[_Extensions._SignalExt][_SignalExtKeys._Sdk] = {};
            event.data[_Extensions._SignalExt][_SignalExtKeys._Sdk][_SharedKeys._Version] = _SDKVersion;
            event.data[_Extensions._SignalExt][_SignalExtKeys._Host] = {};
            event.data[_Extensions._SignalExt][_SignalExtKeys._Host][_SharedKeys._Domain] = this._domain;
            //Add user fields
            event.data[_Extensions._SignalExt][_SignalExtKeys._User] = {};
            event.data[_Extensions._SignalExt][_SignalExtKeys._User][_UserExtKeys._LocalId] = this._user.localId || this._msei;
            event.data[_Extensions._SignalExt][_SignalExtKeys._User][_UserExtKeys._AuthId] = this._user.authId;
            event.data[_Extensions._SignalExt][_SignalExtKeys._User][_UserExtKeys._AuthType] = this._user.authType;
            event.data[_Extensions._SignalExt][_SignalExtKeys._User][_UserExtKeys._Email] = this._user.email;
            event.data[_Extensions._SignalExt][_SignalExtKeys._User][_SharedKeys._NameKey] = this._user.name;
            //Pass event to session manager to process and add required session fields.
            this._sessionManager._processEvent(event, this._mseiCreated, event.name === _ViewEventName || event.name === _ActionEventName);
            //Add common custom properties
            this._addPropsIfNotAlreadyAdded(event.data);
            //Delete empty properties
            this._removeEmptyKeys(event.data);
            this.processNext(event, itemCtx);
        };
        Properties.prototype.setUser = function (user) {
            this._user = user;
        };
        Properties.prototype.setProperty = function (name, value) {
            //1DS SDK transport will validate name and value so not duplicating it here.     
            this._props[name] = value;
        };
        Properties.prototype._addPropsIfNotAlreadyAdded = function (data) {
            var _this = this;
            arrForEach(objKeys(this._props), function (key) {
                if (!isValueAssigned(data[key])) {
                    data[key] = _this._props[key];
                }
            });
        };
        Properties.prototype._removeEmptyKeys = function (input) {
            var _this = this;
            arrForEach(objKeys(input), function (key) {
                if (input[key] && isObject(input[key]) && !CoreUtils.isDate(input[key])) {
                    if (objKeys(input[key]).length === 0) {
                        delete input[key];
                    }
                    else {
                        _this._removeEmptyKeys(input[key]);
                    }
                }
                else if (!isValueAssigned(input[key])) {
                    delete input[key];
                }
            });
        };
        return Properties;
    }(BaseTelemetryPlugin));

    /**
    * AnalyticsHelper.ts
    * @author Abhilash Panwar (abpanwar) Hector Hernandez (hectorh)
    * @copyright Microsoft 2020
    * File containing helper methods for EI Analytics.
    * Copied from 1DS SDK.
    */
    var which = 'which';
    var button = 'button';
    var keyCode = 'keyCode';
    var max_content_name = 200;
    var A = 'A';
    var AREA = 'AREA';
    var IMG = 'IMG';
    var INPUT = 'INPUT';
    var _clickCaptureInputTypes = { BUTTON: true, CHECKBOX: true, RADIO: true, RESET: true, SUBMIT: true };
    /**
    * Determines whether an event is a right click or not
    * @param evt - Mouse event
    * @returns true if the event is a right click
    */
    function _isRightClick(evt) {
        if (which in evt) { // Chrome, FF, ...
            return (evt.which === 3);
        }
        else if (button in evt) { // IE, ...
            return (evt.button === 2);
        }
    }
    /**
    * Determines whether an event is a left click or not
    * @param evt - Mouse event
    * @returns true if the event is a left click
    */
    function _isLeftClick(evt) {
        if (which in evt) { // Chrome, FF, ...
            return (evt.which === 1);
        }
        else if (button in evt) { // IE, ...
            return (evt.button === 1);
        }
    }
    /**
    * Determines whether an event is a middle click or not
    * @param evt - Mouse event
    * @returns true if the event is a middle click
    */
    function _isMiddleClick(evt) {
        if (which in evt) { // Chrome, FF, ...
            return (evt.which === 2);
        }
        else if (button in evt) { // IE, ...
            return (evt.button === 4);
        }
    }
    /**
    *  Determines whether an event is a keyboard enter or not
    * @param evt - Keyboard event
    * @returns true if the event is a keyboard enter
    */
    function _isKeyboardEnter(evt) {
        if (keyCode in evt) { // Chrome, FF, ...
            return (evt.keyCode === 13);
        }
    }
    /**
    *  Determines whether an event is a keyboard space or not
    * @param evt - Keyboard event
    * @returns true if the event is a space enter
    */
    function _isKeyboardSpace(evt) {
        if (keyCode in evt) { // Chrome, FF, ...
            return (evt.keyCode === 32);
        }
    }
    /**
     * Gets the content tags in the element.
     * @param element The element to parse for content.
     */
    function _getContent(element) {
        return {
            c: element.className,
            id: element.id,
            n: _getDefaultContentName(element)
        };
    }
    /**
     *
    * Get click target
    * @returns Click target URI
    */
    function _getClickTarget(element) {
        var clickTarget = _emptyString;
        switch (element.tagName) {
            case A:
            case AREA:
                clickTarget = element.href;
                break;
            case IMG:
                clickTarget = _getImageHref(element);
                break;
            case INPUT:
                var type = element.type;
                if (type && (_clickCaptureInputTypes[type.toUpperCase()])) {
                    var loc = getLocation() || {};
                    if (element.form) {
                        clickTarget = element.form.action || loc.pathname;
                    }
                    else {
                        clickTarget = loc.pathname;
                    }
                }
                break;
            default:
                break;
        }
        return clickTarget;
    }
    function _getPathNameFromUri(uri) {
        var location = document.createElement('a');
        location.href = uri;
        return location.pathname;
    }
    /**
    * Gets the default content name.
    * @param element - An html element
    * @returns Content name
    */
    /*ignore jslint start*/
    function _getDefaultContentName(element) {
        if (!element.tagName) {
            return _emptyString;
        }
        var doc = getDocument() || {};
        var contentName;
        switch (element.tagName) {
            case A:
                contentName = doc.all ? element.innerText || element.innerHTML : element.text || element.innerHTML;
                break;
            case IMG:
            case AREA:
                contentName = element.alt;
                break;
            default:
                contentName = element.value || element.name || element.alt || element.innerText || element.id;
        }
        return contentName.substring(0, max_content_name);
    }
    /**
    * Get Image href of a given HTMLImageElement
    * @param element - An html image element
    * @returns Href value.
    */
    function _getImageHref(element) {
        if (element) {
            var parent_1 = _findClosestAnchor(element);
            if (parent_1.length === 1) {
                if (parent_1[0].href) {
                    return parent_1[0].href;
                }
                else if (parent_1[0].src) {
                    return (parent_1[0].src);
                }
            }
        }
        return _emptyString;
    }
    /**
    * Walks up DOM tree to find anchor element
    * @param element - DOM element
    * @returns Dom element which is an anchor
    */
    function _findClosestAnchor(element) {
        /// <summary> Walks up DOM tree to find anchor element </summary>
        /// <param type='object'> DOM element </param>
        /// <returns> Dom element which is an anchor</returns>
        return _walkUpDomChainWithElementValidation(element, _isElementAnAnchor);
    }
    /**
    * Walks up DOM tree to find element which matches validationMethod
    * @param el - DOM element
    * @param validationMethod - DOM element validation method
    * @param validationMethodParam - DOM element validation method parameters
    * @returns Dom element which is an anchor
    */
    function _walkUpDomChainWithElementValidation(el, validationMethod, validationMethodParam) {
        var element = el;
        if (element) {
            //TODO(abpanwar): Handle element if jQuery
            //element = _returnDomObjectIfjQuery(element);
            while (!validationMethod(element, validationMethodParam)) {
                element = element.parentNode;
                //element = _returnDomObjectIfjQuery(element);
                if (!element || !(element.getAttribute)) {
                    return null;
                }
            }
            return element;
        }
    }
    /**
    * Determine if DOM element is an anchor
    * @param element - DOM element
    * @returns Is element an anchor
    */
    function _isElementAnAnchor(element) {
        return element.nodeName === A;
    }
    /**
    * Generate hashcode from a string
    * @param value - The string to generate hashcode
    * @returns The generated hashcode
    */
    function _hashCode(value) {
        if (value) {
            var hash = 0;
            var len = value.length;
            var i = 0;
            if (len > 0) {
                while (i < len) {
                    hash = (hash << 5) - hash + value.charCodeAt(i++) | 0;
                }
            }
            return hash;
        }
    }

    /**
    * Autocollector.ts
    * @author Abhilash Panwar (abpanwar) Hector Hernandez (hectorh)
    * @copyright Microsoft 2020
    * File containing class for autocollecting signals for EI.
    */
    var clickCaptureElements = { A: true, BUTTON: true, AREA: true, INPUT: true };
    /**
     * Class for autocollecting signals.
     */
    var Autocollector = /** @class */ (function () {
        function Autocollector() {
        }
        /**
         * Autocollects signals based on the config passed.
         * @param analytics The analytics class to use to send signals.
         * @param config The config detailing what needs to be auto collected.
         */
        Autocollector.prototype._autocollect = function (analytics, config) {
            this._analytics = analytics;
            var captureView = this._captureView.bind(this);
            if (config && isObject(config)) {
                if (config.view) {
                    captureView();
                    var win_1 = getWindow();
                    var _replaceState_1 = win_1.history.replaceState;
                    var _pushState_1 = win_1.history.pushState;
                    win_1.history.replaceState = function () {
                        _replaceState_1.apply(win_1.history, arguments);
                        captureView();
                    };
                    win_1.history.pushState = function () {
                        _pushState_1.apply(win_1.history, arguments);
                        captureView();
                    };
                }
                if (config.click) {
                    this._captureClicks();
                }
            }
        };
        /**
         * Gets the screen resolution.
         */
        Autocollector.prototype._getScreenResolution = function () {
            if (isDocumentObjectAvailable && isWindowObjectAvailable) {
                var win = getWindow();
                var doc = getDocument();
                return {
                    h: screen.height,
                    w: screen.width,
                    cd: screen.colorDepth,
                    vW: Math.max(doc.documentElement.clientWidth, win.innerWidth || 0),
                    vH: Math.max(doc.documentElement.clientHeight, win.innerHeight || 0),
                    sR: screen.height && screen.width ? screen.height + 'X' + screen.width : _emptyString
                };
            }
            return null;
        };
        Autocollector.prototype._getPageNameFromPath = function (pageName) {
            pageName = pageName.replace(/\/$/, "");
            var fragments = pageName.split('/');
            if (fragments && fragments[fragments.length - 1] !== _emptyString) {
                pageName = fragments[fragments.length - 1];
            }
            else {
                pageName = '/';
            }
            return pageName;
        };
        Autocollector.prototype._getReferrer = function (doc) {
            return {
                uri: doc.referrer
            };
        };
        Autocollector.prototype._removeAllListeners = function () {
            var _this = this;
            var win = getWindow();
            var doc = getDocument();
            if (win && win.addEventListener) {
                // IE9 onwards addEventListener is available, 'click' event captures mouse click. mousedown works on other browsers
                var event = (navigator.appVersion.indexOf('MSIE') !== -1) ? 'click' : 'mousedown';
                win.removeEventListener(event, function (evt) { _this._processClick(evt); }, false);
                win.removeEventListener('keyup', function (evt) { _this._processClick(evt); }, false);
            }
        };
        Autocollector.prototype._captureView = function () {
            var loc = getLocation();
            if (isDocumentObjectAvailable && loc) {
                var doc = getDocument();
                var view = {
                    uri: loc.href,
                    title: doc.title.substring(0, 150),
                    name: this._getPageNameFromPath(loc.pathname || _emptyString),
                    referrer: this._getReferrer(doc)
                };
                this._analytics.trackView(view);
            }
        };
        Autocollector.prototype._captureClicks = function () {
            var _this = this;
            var win = getWindow();
            var doc = getDocument();
            if (win && win.addEventListener) {
                // IE9 onwards addEventListener is available, 'click' event captures mouse click. mousedown works on other browsers
                var event = (navigator.appVersion.indexOf('MSIE') !== -1) ? 'click' : 'mousedown';
                win.addEventListener(event, function (evt) { _this._processClick(evt); }, false);
                win.addEventListener('keyup', function (evt) { _this._processClick(evt); }, false);
            }
        };
        Autocollector.prototype._processClick = function (clickEvent) {
            var element = clickEvent.srcElement || clickEvent.target;
            var sendAction = false;
            // Check if we should capture the element
            while (element && element.tagName) {
                if (element.control && clickCaptureElements[element.control.tagName.toUpperCase()]) {
                    element = element.control;
                }
                if (!clickCaptureElements[element.tagName.toUpperCase()]) {
                    element = element.parentElement || element.parentNode;
                    continue;
                }
                else {
                    // Check allowed INPUT types
                    sendAction = element.tagName.toUpperCase() === 'INPUT' ? _clickCaptureInputTypes[element.type.toUpperCase()] : true;
                    break;
                }
            }
            if (sendAction) {
                // Capture the action type
                var actionType = void 0;
                if (_isRightClick(clickEvent)) {
                    actionType = ActionType.rightClick;
                }
                else if (_isLeftClick(clickEvent)) {
                    actionType = ActionType.leftClick;
                }
                else if (_isKeyboardEnter(clickEvent)) {
                    actionType = ActionType.keyboardEnter;
                }
                else if (_isKeyboardSpace(clickEvent)) {
                    actionType = ActionType.keyboardSpace;
                }
                else if (_isMiddleClick(clickEvent)) {
                    actionType = ActionType.middleClick;
                }
                else {
                    return;
                }
                var content = _getContent(element);
                var action = {
                    name: content.n,
                    type: actionType,
                    clickCoordinates: clickEvent.pageX + 'X' + clickEvent.pageY,
                    "class": content.c,
                    elementId: content.id,
                    viewTarget: _getClickTarget(element)
                };
                this._analytics.trackAction(action);
            }
        };
        return Autocollector;
    }());

    /*
    * StorageManager.ts
    * @author Abhilash Panwar (abpanwar) Hector Hernandez (hectorh)
    * @copyright Microsoft 2020
    * File containing apis to help store properties in storage.
    */
    /**
     * This class adds ability to store properties in various types of storages or custom storage.
     * TODO(abpanwar): This class will change once we add support for other storage types, custom storage and error handling.
     */
    var StorageManager = /** @class */ (function () {
        /**
         * Creates an instance of the storage manager class to determine the storage that needs to be used.
         * @param storageDisabled Whether storage is disabled due to user not providing consent.
         */
        function StorageManager(storageDisabled) {
            this._storage = StorageManager._getLocalStorage();
            if (storageDisabled && this._storage) {
                this._deleteAllStorage();
            }
        }
        /**
         * Get local storage if available.
         */
        StorageManager._getLocalStorage = function () {
            var global = getGlobal$1() || {};
            return (global['localStorage']);
        };
        /**
         * Stores a key value pair in the chosen storage.
         * @param key key to be stored
         * @param value value to be stored
         */
        StorageManager.prototype._setProperty = function (key, value) {
            this._storage.setItem(key, value);
        };
        /**
         * Returns a value associated with the passed key. Null if key is not present.
         * @param key key to be used to return the value
         */
        StorageManager.prototype._getProperty = function (key) {
            return this._storage.getItem(key);
        };
        /**
         * Deletes all data stored in cookies or local storage.
         */
        StorageManager.prototype._deleteAllStorage = function () {
            this._storage.removeItem(_EISessionKey);
            this._storage.removeItem(_EIPreviousKey);
            deleteCookie(_MSEI);
        };
        return StorageManager;
    }());

    /*
    * SessionManager.ts
    * @author Abhilash Panwar (abpanwar) Hector Hernandez (hectorh)
    * @copyright Microsoft 2020
    * File containing apis to help manage session.
    */
    var delimitter = ';';
    var extendTime = 1800000; //30 mins
    var maxTime = 86400000; //24 hours
    var p = parseInt; // for minimization purpose
    /**
     * Class to manage session
     */
    var SessionManager = /** @class */ (function () {
        /**
         * Creates an instance of the session manager.
         * @param storageManager storage manager to store session details.
         */
        function SessionManager(storageManager) {
            this._storageManager = storageManager;
            this._session = this._parseSessionString(this._storageManager._getProperty(_EISessionKey));
        }
        /**
         * Process the session state based on the recieved event and add the session fields.
         * @param event Event to add session fields to.
         * @param userCookieExists Indicates if the user cookie was created.
         */
        SessionManager.prototype._processEvent = function (event, userCookieCreated, isHit) {
            //Add session properties
            event.data[_Extensions._SignalExt][_SignalExtKeys._Session] = {};
            var eventTime = this._parseISOString(event.time);
            //Extend or start session for view events
            if (isHit) {
                //Add latency to make it high
                event.latency = EventLatency.RealTime;
                this._extendOrStartSession(eventTime, event, userCookieCreated);
                event.data[_Extensions._SignalExt][_SignalExtKeys._User][_UserExtKeys._State] = this._session.n ? _UserStateValues._New : _UserStateValues._Returning;
                event.data[_Extensions._SignalExt][_SignalExtKeys._Session][_SessionExtKeys._Duration] = eventTime - this._session.s;
            }
            event.data[_Extensions._SignalExt][_SignalExtKeys._Session][_SessionExtKeys._Id] = this._isSessionActive(eventTime) ? this._session.i : _emptyString;
        };
        /**
         * Returns true if a session is active. False otherwise.
         * @param time The event time for the signal that is used to extend or start the session.
         * @param reload Set to true, if we should reload from storage before checking. For view events this should be true.
         */
        SessionManager.prototype._isSessionActive = function (time, reload) {
            if (reload === void 0) { reload = false; }
            if (reload) {
                this._session = this._parseSessionString(this._storageManager._getProperty(_EISessionKey));
            }
            return this._session && isObject(this._session) && time <= this._session.e;
        };
        /**
         * Extends an ongoing session or starts a new one.
         * @param time The event time for the signal that is used to extend or start the session.
         * @param event The event that is being processed.
         * @param userCookieCreated Indicates if the user user cookie is created.
         */
        SessionManager.prototype._extendOrStartSession = function (time, event, userCookieCreated) {
            this._session = this._parseSessionString(this._storageManager._getProperty(_EISessionKey));
            if (!this._session || this._session.e < time) {
                if (!userCookieCreated) {
                    event.data[_Extensions._SignalExt][_SignalExtKeys._User][_UserExtKeys._TimeSinceVisit] = this._session ? time - this._session.e : _emptyString;
                }
                //start new session      
                this._session = {
                    i: createGuid(),
                    s: time,
                    e: time + extendTime,
                    m: time + maxTime,
                    n: userCookieCreated
                };
            }
            else {
                //extend existing session
                this._session.e = time + extendTime < this._session.m ? time + extendTime : this._session.m;
            }
            this._storageManager._setProperty(_EISessionKey, this._getSessionString(this._session));
        };
        SessionManager.prototype._parseSessionString = function (sessionString) {
            if (!isString(sessionString)) {
                return null;
            }
            var sessionArr = sessionString.split(delimitter);
            var session = { i: sessionArr[0], s: p(sessionArr[1], 10), e: p(sessionArr[2], 10) };
            session.m = session.s + maxTime;
            session.n = sessionArr.length === 4; // Has new user part of the session.
            return session;
        };
        SessionManager.prototype._getSessionString = function (session) {
            var sessionString = session.i + delimitter + session.s + delimitter + session.e;
            return session.n ? sessionString + delimitter + session.n : sessionString;
        };
        SessionManager.prototype._parseISOString = function (timeString) {
            var b = timeString.split(/\D+/);
            return Date.UTC(p(b[0], 10), p(b[1], 10) - 1, p(b[2], 10), p(b[3], 10), p(b[4], 10), p(b[5], 10), p(b[6], 10));
        };
        return SessionManager;
    }());

    /*
    * SessionManager.ts
    * @author Abhilash Panwar (abpanwar) Haorui Guo (haoruiguo)
    * @copyright Microsoft 2020
    * File containing apis to help send SDK usage stats.
    */
    var StatsTimer = 60000;
    var StatsManager = /** @class */ (function () {
        /**
         * Creates an instance of the stats manager class to send SDK usage statistics.
         * @param sendStats stats will be sent to the tenant using this function.
         */
        function StatsManager(sendStats) {
            var _this = this;
            this._isInitalized = false;
            this._stats = {};
            this._isInitalized = true;
            this._sendStats = sendStats;
            setTimeout(function () { return _this._flush(); }, StatsTimer);
        }
        /**
         * Creates an event if there's stats and calls sendStats.
         */
        StatsManager.prototype._flush = function () {
            var _this = this;
            if (this._isInitalized) {
                for (var ingestionKey in this._stats) {
                    if (this._stats.hasOwnProperty(ingestionKey)) {
                        this._sendStats(this._stats[ingestionKey], ingestionKey);
                    }
                }
                this._stats = {};
                this._timeoutId = setTimeout(function () { return _this._flush(); }, StatsTimer);
            }
        };
        /**
         * Flush the current stats and stop the stats collection.
         */
        StatsManager.prototype._teardown = function () {
            if (this._isInitalized) {
                this._flush();
                clearTimeout(this._timeoutId);
                this._isInitalized = false;
            }
        };
        /**
         * Add stats for events successfully sent from SDK.
         */
        StatsManager.prototype._addStatForEventSent = function (events) {
            events = this._getNonStatsEvents(events);
            if (events.length === 0)
                return;
            this._addStatForEvents(events, _eventSent);
        };
        /**
         * Add stats for events being requested to send but were discarded by SDK
         */
        StatsManager.prototype._addStatForEventDiscarded = function (events, reason) {
            events = this._getNonStatsEvents(events);
            if (events.length === 0)
                return;
            this._addStatForEvents(events, _eventDiscarded);
            switch (reason) {
                case EventsDiscardedReason.InvalidEvent:
                    this._addStatForEvents(events, _eventDiscardedInvalidEvent);
                    break;
                case EventsDiscardedReason.KillSwitch:
                    this._addStatForEvents(events, _eventDiscardedKillSwitch);
                    break;
                case EventsDiscardedReason.NonRetryableStatus:
                    this._addStatForEvents(events, _eventDiscardedNonRetryableStatus);
                    break;
                case EventsDiscardedReason.QueueFull:
                    this._addStatForEvents(events, _eventDiscardedQueueFull);
                    break;
                case EventsDiscardedReason.SizeLimitExceeded:
                    this._addStatForEvents(events, _eventDiscardedSizeLimitExceeded);
                    break;
                case EventsDiscardedReason.Unknown:
                    this._addStatForEvents(events, _eventDiscardedUnknown);
                    break;
            }
        };
        StatsManager.prototype._addStatForEvents = function (events, stat) {
            for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
                var event_1 = events_1[_i];
                this._addStat(stat, 1, event_1.iKey);
            }
        };
        StatsManager.prototype._addStat = function (statName, value, ingestionKey) {
            if (this._isInitalized) {
                if (!this._stats[ingestionKey]) {
                    this._stats[ingestionKey] = {};
                }
                if (!this._stats[ingestionKey][statName]) {
                    this._stats[ingestionKey][statName] = value;
                }
                else {
                    this._stats[ingestionKey][statName] = this._stats[ingestionKey][statName] + value;
                }
            }
        };
        StatsManager.prototype._getNonStatsEvents = function (events) {
            var nonStatsEvents = [];
            for (var _i = 0, events_2 = events; _i < events_2.length; _i++) {
                var event_2 = events_2[_i];
                if (event_2.name !== _StatsEventName) {
                    nonStatsEvents.push(event_2);
                }
            }
            return nonStatsEvents;
        };
        return StatsManager;
    }());

    /*
    * Analytics.ts
    * @author Abhilash Panwar (abpanwar)
    * @copyright Microsoft 2020
    * File containing Analytics object.
    */
    var d = decodeURI; // for code minimization purpose
    /**
     * Engagement Insights class that is used to send events.
     */
    var Analytics = /** @class */ (function () {
        function Analytics() {
            this._properties = new Properties();
            this._isInitialized = false;
            this._autoCollector = new Autocollector();
            this._invalidSignalPrefix = _Extensions._SignalExt + '.';
            this._invalidSignalLongPrefix = _Extensions._SignalLongExt + '.';
        }
        /**
         * Initializes the Analytics class according to the passed configuration. It will send autocollected events if the passed
         * configuration specifies it.
         * @param configuration the configuration used to initialize the Analytics class
         */
        Analytics.prototype.initialize = function (configuration) {
            var _this = this;
            if (!this._isInitialized) {
                this._isInitialized = true;
                this._configuration = configuration;
                this._applicationInsightsCore = new AppInsightsCore$1();
                this._postChannel = new PostChannel();
                var profile = {};
                profile[RT_PROFILE] = [2, 0];
                this._postChannel._loadTransmitProfiles(profile);
                this._storageDisabled = isValueAssigned(configuration.userConsent) ? !configuration.userConsent : false;
                this._storageDisabled = StorageManager._getLocalStorage() ? this._storageDisabled : true;
                this._storageManager = new StorageManager(this._storageDisabled);
                //Only enable session if the user has given consent.
                if (!this._storageDisabled) {
                    this._sessionManager = new SessionManager(this._storageManager);
                    this._properties.setup(this._sessionManager);
                }
                //Initialize the core
                var coreConfig = {
                    instrumentationKey: configuration.ingestionKey,
                    endpointUrl: configuration.endpointUrl,
                    disableCookiesUsage: this._storageDisabled,
                    extensions: [this._properties, this._postChannel],
                    extensionConfig: []
                };
                var postConfig = {
                    ignoreMc1Ms0CookieProcessing: true
                };
                coreConfig.extensionConfig[this._postChannel.identifier] = postConfig;
                this._statsManager = new StatsManager(function (stats, ingestionKey) {
                    var hasStats = false;
                    var event = {
                        name: _StatsEventName,
                        timestamp: new Date(),
                        version: _StatsSchemaVersion,
                        ingestionKey: ingestionKey
                    };
                    var props = {};
                    for (var statKey in stats) {
                        if (stats.hasOwnProperty(statKey)) {
                            props[statKey] = stats[statKey].toString();
                            hasStats = true;
                        }
                    }
                    event.properties = props;
                    if (hasStats) {
                        event.properties = event.properties || {};
                        _this._sanitizeProperties(event.properties);
                        _this._trackEvent(event);
                    }
                });
                this._notificationManager = new NotificationManager();
                this._notificationManager.addNotificationListener({
                    eventsSent: this._statsManager._addStatForEventSent.bind(this._statsManager),
                    eventsDiscarded: this._statsManager._addStatForEventDiscarded.bind(this._statsManager)
                });
                this._applicationInsightsCore.initialize(coreConfig, [], null, this._notificationManager);
                //Pass autocapture config to Autocollector
                this._autoCollector._autocollect(this, configuration.autoCapture);
                // send stored usermapping if setUser is called before initialize
                if (this._setUserBeforeInitialize && this._configuration.userMapping) {
                    this._updateUserMapping(this._user);
                }
            }
        };
        /**
         * Tracks a custom event to be sent to Engagement Insights.
         * @param event event to be sent
         */
        Analytics.prototype.trackEvent = function (event) {
            if (event.name !== _StatsEventName) {
                event.properties = event.properties || {};
                this._sanitizeProperties(event.properties);
                this._trackEvent(event);
            }
        };
        /**
         * Tracks a view event to be sent to Engagement Insights.
         * @param view view event to be sent
         */
        Analytics.prototype.trackView = function (view) {
            if (!this._storageDisabled) {
                if (!view || !isObject(view) || !isString(view.uri) || view.uri.length === 0) {
                    throw 'View event should have uri';
                }
                this._lastViewTime = view.timestamp || new Date();
                var event_1 = {
                    name: _ViewEventName,
                    version: _ViewSchemaVersion,
                    timestamp: this._lastViewTime
                };
                var props = view.properties || {};
                this._sanitizeProperties(props);
                // There should only be a previous view loaded if the session is ongoing.
                if (this._sessionManager._isSessionActive(this._lastViewTime.getTime()), true) {
                    this._previousView = this._storageManager._getProperty(_EIPreviousKey);
                }
                this._addAutocollectableFieldsToView(view);
                this._addViewInfo(view, props);
                this._addScreenInfo(props);
                this._lastView = view;
                event_1.properties = props;
                this._trackEvent(event_1);
                this._storageManager._setProperty(_EIPreviousKey, view.uri);
            }
        };
        /**
         * Tracks an action event to be sent to Engagement Insights.
         * @param action action event to be sent
         * @param properties custom properties that are part of this event as defined by the emitter.
         */
        Analytics.prototype.trackAction = function (action, properties) {
            if (!this._storageDisabled) {
                if (!this._lastView) {
                    throw 'Views should be instrumented before actions are sent';
                }
                if (!isValueAssigned(action.type)) {
                    throw 'Action event should have type';
                }
                var actionTime = action.timestamp || new Date();
                // If this is the action event that starts a session then send a view event from the last view before the action is sent. 
                if (!this._sessionManager._isSessionActive(actionTime.getTime())) {
                    this._lastView.timestamp = actionTime;
                    this.trackView(this._lastView);
                }
                var event_2 = {
                    name: _ActionEventName,
                    version: _ActionSchemaVersion,
                    timestamp: actionTime
                };
                var props = action.properties || {};
                this._sanitizeProperties(props);
                this._addViewInfo(this._lastView, props);
                this._addScreenInfo(props);
                //Add action properties
                props[_Extensions._SignalExt][_SignalExtKeys._Action] = {};
                props[_Extensions._SignalExt][_SignalExtKeys._Action][_SharedKeys._NameKey] = action.name;
                props[_Extensions._SignalExt][_SignalExtKeys._Action][_SharedKeys._Type] = action.type;
                props[_Extensions._SignalExt][_SignalExtKeys._Action][_ActionExtKeys._ElementId] = action.elementId;
                props[_Extensions._SignalExt][_SignalExtKeys._Action][_SharedKeys._Class] = action["class"];
                props[_Extensions._SignalExt][_SignalExtKeys._Action][_ActionExtKeys._Target] = d(action.viewTarget);
                //Elapsed time
                props[_Extensions._SignalExt][_SignalExtKeys._Action][_ActionExtKeys._ElapsedTime] = actionTime.getTime() - this._lastViewTime.getTime();
                //Outbound. Only check if there is a view target and we have an origin for the webpage.
                if (action.viewTarget && this._properties.origin) {
                    props[_Extensions._SignalExt][_SignalExtKeys._Action][_ActionExtKeys._IsOutbound] = !action.viewTarget.startsWith(this._properties.origin);
                }
                props[_Extensions._SignalExt][_SignalExtKeys._Click] = {};
                props[_Extensions._SignalExt][_SignalExtKeys._Click][_ClickExtKeys._Coordinates] = action.clickCoordinates;
                event_2.properties = props;
                this._trackEvent(event_2);
            }
        };
        /**
         * Teardown the SDK, and flushes all events currenlty in the queue.
         * After this method the SDK can be re-initialized with a new configuration.
         */
        Analytics.prototype.teardown = function () {
            if (this._isInitialized) {
                this._postChannel.teardown();
                this._isInitialized = false;
                //Reset properties      
                this._properties = new Properties();
                this._autoCollector._removeAllListeners();
                this._statsManager._teardown();
            }
        };
        /**
         * Set custom property to be sent with every event.
         * @param name name of property
         * @param value value for the property
         */
        Analytics.prototype.setProperty = function (name, value) {
            if (this._isValidKey(name)) {
                this._properties.setProperty(name, value);
            }
        };
        /**
         * Set user details to be sent with every event. Update UserMapping depending on whether the SDK is initialized or not
         * @param user user details
         */
        Analytics.prototype.setUser = function (user) {
            this._properties.setUser(user);
            if (this._isInitialized && this._configuration.userMapping) {
                this._updateUserMapping(user);
            }
            else {
                this._user = user;
                this._setUserBeforeInitialize = true;
            }
        };
        Analytics.prototype._trackEvent = function (event) {
            if (this._isInitialized) {
                var item = {
                    name: event.name,
                    iKey: event.ingestionKey || this._configuration.ingestionKey
                };
                var props = event.properties;
                var time = event.timestamp ? event.timestamp : new Date();
                item.time = CoreUtils.toISOString(time);
                props[_Extensions._SignalExt][_SignalExtKeys._ExtKey] = {};
                props[_Extensions._SignalExt][_SignalExtKeys._ExtKey][_SharedKeys._Id] = createGuid();
                if (!CoreUtils.isNullOrUndefined(event.version)) {
                    props[_Extensions._SignalExt][_SignalExtKeys._ExtKey][_SharedKeys._Version] = event.version;
                }
                item.data = props;
                this._applicationInsightsCore.track(item);
            }
        };
        Analytics.prototype._sanitizeProperties = function (props) {
            var _this = this;
            // Don't allow customer to send any fields in the event extension. It is reserved for EI.
            arrForEach(objKeys(props), function (key) {
                if (!_this._isValidKey(key)) {
                    delete props[key];
                }
            });
            props[_Extensions._SignalExt] = {};
        };
        Analytics.prototype._isValidKey = function (key) {
            key = key.toLowerCase();
            return !(key.length < 3 || key.startsWith(this._invalidSignalPrefix) || key.startsWith(this._invalidSignalLongPrefix) || key === _Extensions._SignalLongExt);
        };
        Analytics.prototype._addScreenInfo = function (props) {
            // Get screen resolution
            var screen = this._autoCollector._getScreenResolution();
            if (screen) {
                props[_Extensions._SignalExt][_SignalExtKeys._View][_ViewExtKeys._Height] = screen.h;
                props[_Extensions._SignalExt][_SignalExtKeys._View][_ViewExtKeys._Width] = screen.w;
                props[_Extensions._SignalExt][_SignalExtKeys._View][_ViewExtKeys._VpHeight] = screen.vH;
                props[_Extensions._SignalExt][_SignalExtKeys._View][_ViewExtKeys._VpWidth] = screen.vW;
                props[_Extensions._SignalExt][_SignalExtKeys._View][_ViewExtKeys._ColorDepth] = screen.cd;
                props[_Extensions._SignalExt][_SignalExtKeys._View][_ViewExtKeys._SResolution] = screen.sR;
            }
        };
        Analytics.prototype._addViewInfo = function (view, props) {
            props[_Extensions._SignalExt][_SignalExtKeys._View] = {};
            props[_Extensions._SignalExt][_SignalExtKeys._View][_SharedKeys._Title] = view.title;
            props[_Extensions._SignalExt][_SignalExtKeys._View][_SharedKeys._Type] = _PageViewType;
            props[_Extensions._SignalExt][_SignalExtKeys._View][_SharedKeys._Uri] = d(view.uri);
            props[_Extensions._SignalExt][_SignalExtKeys._View][_SharedKeys._NameKey] = d(view.name);
            props[_Extensions._SignalExt][_SignalExtKeys._View][_SharedKeys._Class] = view.viewClass;
            props[_Extensions._SignalExt][_SignalExtKeys._View][_ViewExtKeys._PreviousViews] = this._previousView;
            if (view.referrer && isObject(view.referrer)) {
                props[_Extensions._SignalExt][_SignalExtKeys._Referrer] = {};
                props[_Extensions._SignalExt][_SignalExtKeys._Referrer][_ReferrerExtKeys._PageTitle] = view.referrer.pageTitle;
                props[_Extensions._SignalExt][_SignalExtKeys._Referrer][_SharedKeys._Uri] = d(view.referrer.uri);
            }
        };
        Analytics.prototype._addAutocollectableFieldsToView = function (view) {
            view.name = view.name || this._autoCollector._getPageNameFromPath(_getPathNameFromUri(view.uri));
            if (isDocumentObjectAvailable) {
                view.referrer = view.referrer || this._autoCollector._getReferrer(getDocument());
            }
        };
        Analytics.prototype._updateUserMapping = function (user) {
            var time = CoreUtils.dateNow();
            var localId = user.localId || this._properties._msei;
            if (localId && user.authId) {
                var usermappingKey = _hashCode(localId + ',' + user.authId).toString();
                var storedMapping = JSON.parse(this._storageManager._getProperty(_UserMappingStorageKey)) || {};
                if (!CoreUtils.hasOwnProperty(storedMapping, usermappingKey) || time - parseInt(storedMapping[usermappingKey]) > 7 * _DayToMilliseconds) {
                    storedMapping[usermappingKey] = time.toString();
                    this._storageManager._setProperty(_UserMappingStorageKey, JSON.stringify(storedMapping));
                    var event_3 = {
                        name: _UserMappingEventName,
                        version: _UserMappingEventVersion,
                        properties: {}
                    };
                    this._sanitizeProperties(event_3.properties);
                    this._trackEvent(event_3);
                }
                if (objKeys(storedMapping).length > 5) {
                    this._deleteOldestUserMapping(storedMapping);
                }
            }
        };
        Analytics.prototype._deleteOldestUserMapping = function (storedMapping) {
            var oldestMappingKey = '';
            var oldestTimestamp = Number.MAX_VALUE;
            arrForEach(objKeys(storedMapping), function (key) {
                if (parseInt(storedMapping[key]) < oldestTimestamp) {
                    oldestMappingKey = key;
                    oldestTimestamp = parseInt(storedMapping[key]);
                }
            });
            delete storedMapping[oldestMappingKey];
            this._storageManager._setProperty(_UserMappingStorageKey, JSON.stringify(storedMapping));
        };
        return Analytics;
    }());

    /**
     * Index.ts
     * @author Abhilash Panwar (abpanwar)
     * @copyright Microsoft 2020
     */
    // Run through queue if window object available
    if (isWindowObjectAvailable) {
        var win = getWindow();
        var queueName = 'MSEIqueue';
        var queue = win[queueName];
        if (isArray(queue)) {
            for (var index = 0; index < queue.length; index++) {
                var args = queue[index];
                if (args[0] === 'new') {
                    win[args[1]] = new Analytics();
                }
                else {
                    win[args[1]][args[0]].apply(win[args[1]], args[2]);
                }
            }
        }
        delete win[queueName];
    }

    exports.ActionType = ActionType;
    exports.Analytics = Analytics;

    (function(obj, prop, descriptor) { /* ai_es3_polyfil defineProperty */ var func = Object["defineProperty"]; if (func) { try { return func(obj, prop, descriptor); } catch(e) { /* IE8 defines defineProperty, but will throw */ } } if (descriptor && typeof descriptor.value !== undefined) { obj[prop] = descriptor.value; } return obj; })(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=msei-1.0.3.js.map