(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("browser-search"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "browser-search"], factory);
	else if(typeof exports === 'object')
		exports["react-browser-search"] = factory(require("react"), require("browser-search"));
	else
		root["react-browser-search"] = factory(root["react"], root["browser-search"]);
})(self, function(__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_browser_search__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/d/index.js":
/*!*********************************!*\
  !*** ./node_modules/d/index.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isValue         = __webpack_require__(/*! type/value/is */ "./node_modules/type/value/is.js")
  , isPlainFunction = __webpack_require__(/*! type/plain-function/is */ "./node_modules/type/plain-function/is.js")
  , assign          = __webpack_require__(/*! es5-ext/object/assign */ "./node_modules/es5-ext/object/assign/index.js")
  , normalizeOpts   = __webpack_require__(/*! es5-ext/object/normalize-options */ "./node_modules/es5-ext/object/normalize-options.js")
  , contains        = __webpack_require__(/*! es5-ext/string/#/contains */ "./node_modules/es5-ext/string/\u0000#/contains/index.js");

var d = (module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if (arguments.length < 2 || typeof dscr !== "string") {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
		w = contains.call(dscr, "w");
	} else {
		c = w = true;
		e = false;
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
});

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== "string") {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (!isValue(get)) {
		get = undefined;
	} else if (!isPlainFunction(get)) {
		options = get;
		get = set = undefined;
	} else if (!isValue(set)) {
		set = undefined;
	} else if (!isPlainFunction(set)) {
		options = set;
		set = undefined;
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
	} else {
		c = true;
		e = false;
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};


/***/ }),

/***/ "./node_modules/es5-ext/array/\u0000#/e-index-of.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/array/ #/e-index-of.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var numberIsNaN       = __webpack_require__(/*! ../../number/is-nan */ "./node_modules/es5-ext/number/is-nan/index.js")
  , toPosInt          = __webpack_require__(/*! ../../number/to-pos-integer */ "./node_modules/es5-ext/number/to-pos-integer.js")
  , value             = __webpack_require__(/*! ../../object/valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , indexOf           = Array.prototype.indexOf
  , objHasOwnProperty = Object.prototype.hasOwnProperty
  , abs               = Math.abs
  , floor             = Math.floor;

module.exports = function (searchElement /*, fromIndex*/) {
	var i, length, fromIndex, val;
	if (!numberIsNaN(searchElement)) return indexOf.apply(this, arguments);

	length = toPosInt(value(this).length);
	fromIndex = arguments[1];
	if (isNaN(fromIndex)) fromIndex = 0;
	else if (fromIndex >= 0) fromIndex = floor(fromIndex);
	else fromIndex = toPosInt(this.length) - floor(abs(fromIndex));

	for (i = fromIndex; i < length; ++i) {
		if (objHasOwnProperty.call(this, i)) {
			val = this[i];
			if (numberIsNaN(val)) return i; // Jslint: ignore
		}
	}
	return -1;
};


/***/ }),

/***/ "./node_modules/es5-ext/array/from/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/array/from/index.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/array/from/is-implemented.js")() ? Array.from : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/array/from/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/array/from/is-implemented.js":
/*!***********************************************************!*\
  !*** ./node_modules/es5-ext/array/from/is-implemented.js ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function () {
	var from = Array.from, arr, result;
	if (typeof from !== "function") return false;
	arr = ["raz", "dwa"];
	result = from(arr);
	return Boolean(result && result !== arr && result[1] === "dwa");
};


/***/ }),

/***/ "./node_modules/es5-ext/array/from/shim.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/array/from/shim.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var iteratorSymbol = (__webpack_require__(/*! es6-symbol */ "./node_modules/es6-symbol/index.js").iterator)
  , isArguments    = __webpack_require__(/*! ../../function/is-arguments */ "./node_modules/es5-ext/function/is-arguments.js")
  , isFunction     = __webpack_require__(/*! ../../function/is-function */ "./node_modules/es5-ext/function/is-function.js")
  , toPosInt       = __webpack_require__(/*! ../../number/to-pos-integer */ "./node_modules/es5-ext/number/to-pos-integer.js")
  , callable       = __webpack_require__(/*! ../../object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , validValue     = __webpack_require__(/*! ../../object/valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , isValue        = __webpack_require__(/*! ../../object/is-value */ "./node_modules/es5-ext/object/is-value.js")
  , isString       = __webpack_require__(/*! ../../string/is-string */ "./node_modules/es5-ext/string/is-string.js")
  , isArray        = Array.isArray
  , call           = Function.prototype.call
  , desc           = { configurable: true, enumerable: true, writable: true, value: null }
  , defineProperty = Object.defineProperty;

// eslint-disable-next-line complexity, max-lines-per-function
module.exports = function (arrayLike /*, mapFn, thisArg*/) {
	var mapFn = arguments[1]
	  , thisArg = arguments[2]
	  , Context
	  , i
	  , j
	  , arr
	  , length
	  , code
	  , iterator
	  , result
	  , getIterator
	  , value;

	arrayLike = Object(validValue(arrayLike));

	if (isValue(mapFn)) callable(mapFn);
	if (!this || this === Array || !isFunction(this)) {
		// Result: Plain array
		if (!mapFn) {
			if (isArguments(arrayLike)) {
				// Source: Arguments
				length = arrayLike.length;
				if (length !== 1) return Array.apply(null, arrayLike);
				arr = new Array(1);
				arr[0] = arrayLike[0];
				return arr;
			}
			if (isArray(arrayLike)) {
				// Source: Array
				arr = new Array((length = arrayLike.length));
				for (i = 0; i < length; ++i) arr[i] = arrayLike[i];
				return arr;
			}
		}
		arr = [];
	} else {
		// Result: Non plain array
		Context = this;
	}

	if (!isArray(arrayLike)) {
		if ((getIterator = arrayLike[iteratorSymbol]) !== undefined) {
			// Source: Iterator
			iterator = callable(getIterator).call(arrayLike);
			if (Context) arr = new Context();
			result = iterator.next();
			i = 0;
			while (!result.done) {
				value = mapFn ? call.call(mapFn, thisArg, result.value, i) : result.value;
				if (Context) {
					desc.value = value;
					defineProperty(arr, i, desc);
				} else {
					arr[i] = value;
				}
				result = iterator.next();
				++i;
			}
			length = i;
		} else if (isString(arrayLike)) {
			// Source: String
			length = arrayLike.length;
			if (Context) arr = new Context();
			for (i = 0, j = 0; i < length; ++i) {
				value = arrayLike[i];
				if (i + 1 < length) {
					code = value.charCodeAt(0);
					// eslint-disable-next-line max-depth
					if (code >= 0xd800 && code <= 0xdbff) value += arrayLike[++i];
				}
				value = mapFn ? call.call(mapFn, thisArg, value, j) : value;
				if (Context) {
					desc.value = value;
					defineProperty(arr, j, desc);
				} else {
					arr[j] = value;
				}
				++j;
			}
			length = j;
		}
	}
	if (length === undefined) {
		// Source: array or array-like
		length = toPosInt(arrayLike.length);
		if (Context) arr = new Context(length);
		for (i = 0; i < length; ++i) {
			value = mapFn ? call.call(mapFn, thisArg, arrayLike[i], i) : arrayLike[i];
			if (Context) {
				desc.value = value;
				defineProperty(arr, i, desc);
			} else {
				arr[i] = value;
			}
		}
	}
	if (Context) {
		desc.value = null;
		arr.length = length;
	}
	return arr;
};


/***/ }),

/***/ "./node_modules/es5-ext/array/to-array.js":
/*!************************************************!*\
  !*** ./node_modules/es5-ext/array/to-array.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var from    = __webpack_require__(/*! ./from */ "./node_modules/es5-ext/array/from/index.js")
  , isArray = Array.isArray;

module.exports = function (arrayLike) { return isArray(arrayLike) ? arrayLike : from(arrayLike); };


/***/ }),

/***/ "./node_modules/es5-ext/error/custom.js":
/*!**********************************************!*\
  !*** ./node_modules/es5-ext/error/custom.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var assign            = __webpack_require__(/*! ../object/assign */ "./node_modules/es5-ext/object/assign/index.js")
  , isObject          = __webpack_require__(/*! ../object/is-object */ "./node_modules/es5-ext/object/is-object.js")
  , isValue           = __webpack_require__(/*! ../object/is-value */ "./node_modules/es5-ext/object/is-value.js")
  , captureStackTrace = Error.captureStackTrace;

module.exports = function (message /*, code, ext*/) {
	var err = new Error(message), code = arguments[1], ext = arguments[2];
	if (!isValue(ext)) {
		if (isObject(code)) {
			ext = code;
			code = null;
		}
	}
	if (isValue(ext)) assign(err, ext);
	if (isValue(code)) err.code = code;
	if (captureStackTrace) captureStackTrace(err, module.exports);
	return err;
};


/***/ }),

/***/ "./node_modules/es5-ext/function/_define-length.js":
/*!*********************************************************!*\
  !*** ./node_modules/es5-ext/function/_define-length.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPosInt = __webpack_require__(/*! ../number/to-pos-integer */ "./node_modules/es5-ext/number/to-pos-integer.js");

var test = function (arg1, arg2) { return arg2; };

var desc, defineProperty, generate, mixin;

try {
	Object.defineProperty(test, "length", {
		configurable: true,
		writable: false,
		enumerable: false,
		value: 1
	});
}
catch (ignore) {}

if (test.length === 1) {
	// ES6
	desc = { configurable: true, writable: false, enumerable: false };
	defineProperty = Object.defineProperty;
	module.exports = function (fn, length) {
		length = toPosInt(length);
		if (fn.length === length) return fn;
		desc.value = length;
		return defineProperty(fn, "length", desc);
	};
} else {
	mixin = __webpack_require__(/*! ../object/mixin */ "./node_modules/es5-ext/object/mixin.js");
	generate = (function () {
		var cache = [];
		return function (length) {
			var args, i = 0;
			if (cache[length]) return cache[length];
			args = [];
			while (length--) args.push("a" + (++i).toString(36));
			// eslint-disable-next-line no-new-func
			return new Function(
				"fn",
				"return function (" + args.join(", ") + ") { return fn.apply(this, arguments); };"
			);
		};
	})();
	module.exports = function (src, length) {
		var target;
		length = toPosInt(length);
		if (src.length === length) return src;
		target = generate(length)(src);
		try { mixin(target, src); }
		catch (ignore) {}
		return target;
	};
}


/***/ }),

/***/ "./node_modules/es5-ext/function/is-arguments.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/function/is-arguments.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


var objToString = Object.prototype.toString
  , id = objToString.call((function () { return arguments; })());

module.exports = function (value) { return objToString.call(value) === id; };


/***/ }),

/***/ "./node_modules/es5-ext/function/is-function.js":
/*!******************************************************!*\
  !*** ./node_modules/es5-ext/function/is-function.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


var objToString = Object.prototype.toString
  , isFunctionStringTag = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);

module.exports = function (value) {
	return typeof value === "function" && isFunctionStringTag(objToString.call(value));
};


/***/ }),

/***/ "./node_modules/es5-ext/function/noop.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/function/noop.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


// eslint-disable-next-line no-empty-function
module.exports = function () {};


/***/ }),

/***/ "./node_modules/es5-ext/math/sign/index.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/math/sign/is-implemented.js")() ? Math.sign : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/math/sign/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/math/sign/is-implemented.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/is-implemented.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function () {
	var sign = Math.sign;
	if (typeof sign !== "function") return false;
	return sign(10) === 1 && sign(-20) === -1;
};


/***/ }),

/***/ "./node_modules/es5-ext/math/sign/shim.js":
/*!************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/shim.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (value) {
	value = Number(value);
	if (isNaN(value) || value === 0) return value;
	return value > 0 ? 1 : -1;
};


/***/ }),

/***/ "./node_modules/es5-ext/number/is-nan/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/number/is-nan/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/number/is-nan/is-implemented.js")() ? Number.isNaN : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/number/is-nan/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/number/is-nan/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/number/is-nan/is-implemented.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function () {
	var numberIsNaN = Number.isNaN;
	if (typeof numberIsNaN !== "function") return false;
	return !numberIsNaN({}) && numberIsNaN(NaN) && !numberIsNaN(34);
};


/***/ }),

/***/ "./node_modules/es5-ext/number/is-nan/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/number/is-nan/shim.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (value) {
	// eslint-disable-next-line no-self-compare
	return value !== value;
};


/***/ }),

/***/ "./node_modules/es5-ext/number/to-integer.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/number/to-integer.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var sign  = __webpack_require__(/*! ../math/sign */ "./node_modules/es5-ext/math/sign/index.js")
  , abs   = Math.abs
  , floor = Math.floor;

module.exports = function (value) {
	if (isNaN(value)) return 0;
	value = Number(value);
	if (value === 0 || !isFinite(value)) return value;
	return sign(value) * floor(abs(value));
};


/***/ }),

/***/ "./node_modules/es5-ext/number/to-pos-integer.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/number/to-pos-integer.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toInteger = __webpack_require__(/*! ./to-integer */ "./node_modules/es5-ext/number/to-integer.js")
  , max       = Math.max;

module.exports = function (value) { return max(0, toInteger(value)); };


/***/ }),

/***/ "./node_modules/es5-ext/object/_iterate.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/_iterate.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Internal method, used by iteration functions.
// Calls a function for each key-value pair found in object
// Optionally takes compareFn to iterate object in specific order



var callable                = __webpack_require__(/*! ./valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , value                   = __webpack_require__(/*! ./valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , bind                    = Function.prototype.bind
  , call                    = Function.prototype.call
  , keys                    = Object.keys
  , objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;

module.exports = function (method, defVal) {
	return function (obj, cb /*, thisArg, compareFn*/) {
		var list, thisArg = arguments[2], compareFn = arguments[3];
		obj = Object(value(obj));
		callable(cb);

		list = keys(obj);
		if (compareFn) {
			list.sort(typeof compareFn === "function" ? bind.call(compareFn, obj) : undefined);
		}
		if (typeof method !== "function") method = list[method];
		return call.call(method, list, function (key, index) {
			if (!objPropertyIsEnumerable.call(obj, key)) return defVal;
			return call.call(cb, thisArg, obj[key], key, obj, index);
		});
	};
};


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/assign/is-implemented.js")() ? Object.assign : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/assign/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/is-implemented.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
};


/***/ }),

/***/ "./node_modules/es5-ext/object/assign/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/shim.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var keys  = __webpack_require__(/*! ../keys */ "./node_modules/es5-ext/object/keys/index.js")
  , value = __webpack_require__(/*! ../valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , max   = Math.max;

module.exports = function (dest, src /*, ???srcn*/) {
	var error, i, length = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/for-each.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/for-each.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./_iterate */ "./node_modules/es5-ext/object/_iterate.js")("forEach");


/***/ }),

/***/ "./node_modules/es5-ext/object/is-callable.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/is-callable.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
// Deprecated



module.exports = function (obj) { return typeof obj === "function"; };


/***/ }),

/***/ "./node_modules/es5-ext/object/is-object.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/is-object.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

var map = { function: true, object: true };

module.exports = function (value) { return (isValue(value) && map[typeof value]) || false; };


/***/ }),

/***/ "./node_modules/es5-ext/object/is-value.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/is-value.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var _undefined = __webpack_require__(/*! ../function/noop */ "./node_modules/es5-ext/function/noop.js")(); // Support ES3 engines

module.exports = function (val) { return val !== _undefined && val !== null; };


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/object/keys/is-implemented.js")() ? Object.keys : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/object/keys/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/is-implemented.js":
/*!************************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/is-implemented.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};


/***/ }),

/***/ "./node_modules/es5-ext/object/keys/shim.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/shim.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isValue = __webpack_require__(/*! ../is-value */ "./node_modules/es5-ext/object/is-value.js");

var keys = Object.keys;

module.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };


/***/ }),

/***/ "./node_modules/es5-ext/object/map.js":
/*!********************************************!*\
  !*** ./node_modules/es5-ext/object/map.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callable = __webpack_require__(/*! ./valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , forEach  = __webpack_require__(/*! ./for-each */ "./node_modules/es5-ext/object/for-each.js")
  , call     = Function.prototype.call;

module.exports = function (obj, cb /*, thisArg*/) {
	var result = {}, thisArg = arguments[2];
	callable(cb);
	forEach(obj, function (value, key, targetObj, index) {
		result[key] = call.call(cb, thisArg, value, key, targetObj, index);
	});
	return result;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/mixin.js":
/*!**********************************************!*\
  !*** ./node_modules/es5-ext/object/mixin.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var value                    = __webpack_require__(/*! ./valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , defineProperty           = Object.defineProperty
  , getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor
  , getOwnPropertyNames      = Object.getOwnPropertyNames
  , getOwnPropertySymbols    = Object.getOwnPropertySymbols;

module.exports = function (target, source) {
	var error, sourceObject = Object(value(source));
	target = Object(value(target));
	getOwnPropertyNames(sourceObject).forEach(function (name) {
		try {
			defineProperty(target, name, getOwnPropertyDescriptor(source, name));
		} catch (e) { error = e; }
	});
	if (typeof getOwnPropertySymbols === "function") {
		getOwnPropertySymbols(sourceObject).forEach(function (symbol) {
			try {
				defineProperty(target, symbol, getOwnPropertyDescriptor(source, symbol));
			} catch (e) { error = e; }
		});
	}
	if (error !== undefined) throw error;
	return target;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/normalize-options.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/object/normalize-options.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1 /*, ???options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/primitive-set.js":
/*!******************************************************!*\
  !*** ./node_modules/es5-ext/object/primitive-set.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";


var forEach = Array.prototype.forEach, create = Object.create;

// eslint-disable-next-line no-unused-vars
module.exports = function (arg /*, ???args*/) {
	var set = create(null);
	forEach.call(arguments, function (name) { set[name] = true; });
	return set;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/valid-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-callable.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (fn) {
	if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
	return fn;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/valid-value.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-value.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isValue = __webpack_require__(/*! ./is-value */ "./node_modules/es5-ext/object/is-value.js");

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};


/***/ }),

/***/ "./node_modules/es5-ext/object/validate-stringifiable-value.js":
/*!*********************************************************************!*\
  !*** ./node_modules/es5-ext/object/validate-stringifiable-value.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var ensureValue   = __webpack_require__(/*! ./valid-value */ "./node_modules/es5-ext/object/valid-value.js")
  , stringifiable = __webpack_require__(/*! ./validate-stringifiable */ "./node_modules/es5-ext/object/validate-stringifiable.js");

module.exports = function (value) { return stringifiable(ensureValue(value)); };


/***/ }),

/***/ "./node_modules/es5-ext/object/validate-stringifiable.js":
/*!***************************************************************!*\
  !*** ./node_modules/es5-ext/object/validate-stringifiable.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isCallable = __webpack_require__(/*! ./is-callable */ "./node_modules/es5-ext/object/is-callable.js");

module.exports = function (stringifiable) {
	try {
		if (stringifiable && isCallable(stringifiable.toString)) return stringifiable.toString();
		return String(stringifiable);
	} catch (e) {
		throw new TypeError("Passed argument cannot be stringifed");
	}
};


/***/ }),

/***/ "./node_modules/es5-ext/safe-to-string.js":
/*!************************************************!*\
  !*** ./node_modules/es5-ext/safe-to-string.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isCallable = __webpack_require__(/*! ./object/is-callable */ "./node_modules/es5-ext/object/is-callable.js");

module.exports = function (value) {
	try {
		if (value && isCallable(value.toString)) return value.toString();
		return String(value);
	} catch (e) {
		return "<Non-coercible to string value>";
	}
};


/***/ }),

/***/ "./node_modules/es5-ext/string/\u0000#/contains/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/string/ #/contains/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es5-ext/string/\u0000#/contains/is-implemented.js")() ? String.prototype.contains : __webpack_require__(/*! ./shim */ "./node_modules/es5-ext/string/\u0000#/contains/shim.js");


/***/ }),

/***/ "./node_modules/es5-ext/string/\u0000#/contains/is-implemented.js":
/*!*******************************************************************!*\
  !*** ./node_modules/es5-ext/string/ #/contains/is-implemented.js ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";


var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return str.contains("dwa") === true && str.contains("foo") === false;
};


/***/ }),

/***/ "./node_modules/es5-ext/string/\u0000#/contains/shim.js":
/*!*********************************************************!*\
  !*** ./node_modules/es5-ext/string/ #/contains/shim.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


var indexOf = String.prototype.indexOf;

module.exports = function (searchString /*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};


/***/ }),

/***/ "./node_modules/es5-ext/string/is-string.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/string/is-string.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


var objToString = Object.prototype.toString, id = objToString.call("");

module.exports = function (value) {
	return (
		typeof value === "string" ||
		(value &&
			typeof value === "object" &&
			(value instanceof String || objToString.call(value) === id)) ||
		false
	);
};


/***/ }),

/***/ "./node_modules/es5-ext/to-short-string-representation.js":
/*!****************************************************************!*\
  !*** ./node_modules/es5-ext/to-short-string-representation.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var safeToString = __webpack_require__(/*! ./safe-to-string */ "./node_modules/es5-ext/safe-to-string.js");

var reNewLine = /[\n\r\u2028\u2029]/g;

module.exports = function (value) {
	var string = safeToString(value);
	// Trim if too long
	if (string.length > 100) string = string.slice(0, 99) + "???";
	// Replace eventual new lines
	string = string.replace(reNewLine, function (char) {
		return JSON.stringify(char).slice(1, -1);
	});
	return string;
};


/***/ }),

/***/ "./node_modules/es6-symbol/index.js":
/*!******************************************!*\
  !*** ./node_modules/es6-symbol/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/es6-symbol/is-implemented.js")()
	? (__webpack_require__(/*! ext/global-this */ "./node_modules/ext/global-this/index.js").Symbol)
	: __webpack_require__(/*! ./polyfill */ "./node_modules/es6-symbol/polyfill.js");


/***/ }),

/***/ "./node_modules/es6-symbol/is-implemented.js":
/*!***************************************************!*\
  !*** ./node_modules/es6-symbol/is-implemented.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var global     = __webpack_require__(/*! ext/global-this */ "./node_modules/ext/global-this/index.js")
  , validTypes = { object: true, symbol: true };

module.exports = function () {
	var Symbol = global.Symbol;
	var symbol;
	if (typeof Symbol !== "function") return false;
	symbol = Symbol("test symbol");
	try { String(symbol); }
	catch (e) { return false; }

	// Return 'true' also for polyfills
	if (!validTypes[typeof Symbol.iterator]) return false;
	if (!validTypes[typeof Symbol.toPrimitive]) return false;
	if (!validTypes[typeof Symbol.toStringTag]) return false;

	return true;
};


/***/ }),

/***/ "./node_modules/es6-symbol/is-symbol.js":
/*!**********************************************!*\
  !*** ./node_modules/es6-symbol/is-symbol.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = function (value) {
	if (!value) return false;
	if (typeof value === "symbol") return true;
	if (!value.constructor) return false;
	if (value.constructor.name !== "Symbol") return false;
	return value[value.constructor.toStringTag] === "Symbol";
};


/***/ }),

/***/ "./node_modules/es6-symbol/lib/private/generate-name.js":
/*!**************************************************************!*\
  !*** ./node_modules/es6-symbol/lib/private/generate-name.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var d = __webpack_require__(/*! d */ "./node_modules/d/index.js");

var create = Object.create, defineProperty = Object.defineProperty, objPrototype = Object.prototype;

var created = create(null);
module.exports = function (desc) {
	var postfix = 0, name, ie11BugWorkaround;
	while (created[desc + (postfix || "")]) ++postfix;
	desc += postfix || "";
	created[desc] = true;
	name = "@@" + desc;
	defineProperty(
		objPrototype,
		name,
		d.gs(null, function (value) {
			// For IE11 issue see:
			// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
			//    ie11-broken-getters-on-dom-objects
			// https://github.com/medikoo/es6-symbol/issues/12
			if (ie11BugWorkaround) return;
			ie11BugWorkaround = true;
			defineProperty(this, name, d(value));
			ie11BugWorkaround = false;
		})
	);
	return name;
};


/***/ }),

/***/ "./node_modules/es6-symbol/lib/private/setup/standard-symbols.js":
/*!***********************************************************************!*\
  !*** ./node_modules/es6-symbol/lib/private/setup/standard-symbols.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var d            = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , NativeSymbol = (__webpack_require__(/*! ext/global-this */ "./node_modules/ext/global-this/index.js").Symbol);

module.exports = function (SymbolPolyfill) {
	return Object.defineProperties(SymbolPolyfill, {
		// To ensure proper interoperability with other native functions (e.g. Array.from)
		// fallback to eventual native implementation of given symbol
		hasInstance: d(
			"", (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill("hasInstance")
		),
		isConcatSpreadable: d(
			"",
			(NativeSymbol && NativeSymbol.isConcatSpreadable) ||
				SymbolPolyfill("isConcatSpreadable")
		),
		iterator: d("", (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill("iterator")),
		match: d("", (NativeSymbol && NativeSymbol.match) || SymbolPolyfill("match")),
		replace: d("", (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill("replace")),
		search: d("", (NativeSymbol && NativeSymbol.search) || SymbolPolyfill("search")),
		species: d("", (NativeSymbol && NativeSymbol.species) || SymbolPolyfill("species")),
		split: d("", (NativeSymbol && NativeSymbol.split) || SymbolPolyfill("split")),
		toPrimitive: d(
			"", (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill("toPrimitive")
		),
		toStringTag: d(
			"", (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill("toStringTag")
		),
		unscopables: d(
			"", (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill("unscopables")
		)
	});
};


/***/ }),

/***/ "./node_modules/es6-symbol/lib/private/setup/symbol-registry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/es6-symbol/lib/private/setup/symbol-registry.js ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var d              = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , validateSymbol = __webpack_require__(/*! ../../../validate-symbol */ "./node_modules/es6-symbol/validate-symbol.js");

var registry = Object.create(null);

module.exports = function (SymbolPolyfill) {
	return Object.defineProperties(SymbolPolyfill, {
		for: d(function (key) {
			if (registry[key]) return registry[key];
			return (registry[key] = SymbolPolyfill(String(key)));
		}),
		keyFor: d(function (symbol) {
			var key;
			validateSymbol(symbol);
			for (key in registry) {
				if (registry[key] === symbol) return key;
			}
			return undefined;
		})
	});
};


/***/ }),

/***/ "./node_modules/es6-symbol/polyfill.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-symbol/polyfill.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// ES2015 Symbol polyfill for environments that do not (or partially) support it



var d                    = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , validateSymbol       = __webpack_require__(/*! ./validate-symbol */ "./node_modules/es6-symbol/validate-symbol.js")
  , NativeSymbol         = (__webpack_require__(/*! ext/global-this */ "./node_modules/ext/global-this/index.js").Symbol)
  , generateName         = __webpack_require__(/*! ./lib/private/generate-name */ "./node_modules/es6-symbol/lib/private/generate-name.js")
  , setupStandardSymbols = __webpack_require__(/*! ./lib/private/setup/standard-symbols */ "./node_modules/es6-symbol/lib/private/setup/standard-symbols.js")
  , setupSymbolRegistry  = __webpack_require__(/*! ./lib/private/setup/symbol-registry */ "./node_modules/es6-symbol/lib/private/setup/symbol-registry.js");

var create = Object.create
  , defineProperties = Object.defineProperties
  , defineProperty = Object.defineProperty;

var SymbolPolyfill, HiddenSymbol, isNativeSafe;

if (typeof NativeSymbol === "function") {
	try {
		String(NativeSymbol());
		isNativeSafe = true;
	} catch (ignore) {}
} else {
	NativeSymbol = null;
}

// Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false
HiddenSymbol = function Symbol(description) {
	if (this instanceof HiddenSymbol) throw new TypeError("Symbol is not a constructor");
	return SymbolPolyfill(description);
};

// Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)
module.exports = SymbolPolyfill = function Symbol(description) {
	var symbol;
	if (this instanceof Symbol) throw new TypeError("Symbol is not a constructor");
	if (isNativeSafe) return NativeSymbol(description);
	symbol = create(HiddenSymbol.prototype);
	description = description === undefined ? "" : String(description);
	return defineProperties(symbol, {
		__description__: d("", description),
		__name__: d("", generateName(description))
	});
};

setupStandardSymbols(SymbolPolyfill);
setupSymbolRegistry(SymbolPolyfill);

// Internal tweaks for real symbol producer
defineProperties(HiddenSymbol.prototype, {
	constructor: d(SymbolPolyfill),
	toString: d("", function () { return this.__name__; })
});

// Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
defineProperties(SymbolPolyfill.prototype, {
	toString: d(function () { return "Symbol (" + validateSymbol(this).__description__ + ")"; }),
	valueOf: d(function () { return validateSymbol(this); })
});
defineProperty(
	SymbolPolyfill.prototype,
	SymbolPolyfill.toPrimitive,
	d("", function () {
		var symbol = validateSymbol(this);
		if (typeof symbol === "symbol") return symbol;
		return symbol.toString();
	})
);
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d("c", "Symbol"));

// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
defineProperty(
	HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
	d("c", SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])
);

// Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
defineProperty(
	HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
	d("c", SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive])
);


/***/ }),

/***/ "./node_modules/es6-symbol/validate-symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/es6-symbol/validate-symbol.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isSymbol = __webpack_require__(/*! ./is-symbol */ "./node_modules/es6-symbol/is-symbol.js");

module.exports = function (value) {
	if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
	return value;
};


/***/ }),

/***/ "./node_modules/event-emitter/index.js":
/*!*********************************************!*\
  !*** ./node_modules/event-emitter/index.js ***!
  \*********************************************/
/***/ ((module, exports, __webpack_require__) => {

"use strict";


var d        = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , callable = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")

  , apply = Function.prototype.apply, call = Function.prototype.call
  , create = Object.create, defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , descriptor = { configurable: true, enumerable: false, writable: true }

  , on, once, off, emit, methods, descriptors, base;

on = function (type, listener) {
	var data;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) data[type] = listener;
	else if (typeof data[type] === 'object') data[type].push(listener);
	else data[type] = [data[type], listener];

	return this;
};

once = function (type, listener) {
	var once, self;

	callable(listener);
	self = this;
	on.call(this, type, once = function () {
		off.call(self, type, once);
		apply.call(listener, this, arguments);
	});

	once.__eeOnceListener__ = listener;
	return this;
};

off = function (type, listener) {
	var data, listeners, candidate, i;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) return this;
	data = this.__ee__;
	if (!data[type]) return this;
	listeners = data[type];

	if (typeof listeners === 'object') {
		for (i = 0; (candidate = listeners[i]); ++i) {
			if ((candidate === listener) ||
					(candidate.__eeOnceListener__ === listener)) {
				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];
				else listeners.splice(i, 1);
			}
		}
	} else {
		if ((listeners === listener) ||
				(listeners.__eeOnceListener__ === listener)) {
			delete data[type];
		}
	}

	return this;
};

emit = function (type) {
	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) return;
	listeners = this.__ee__[type];
	if (!listeners) return;

	if (typeof listeners === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) args[i - 1] = arguments[i];

		listeners = listeners.slice();
		for (i = 0; (listener = listeners[i]); ++i) {
			apply.call(listener, this, args);
		}
	} else {
		switch (arguments.length) {
		case 1:
			call.call(listeners, this);
			break;
		case 2:
			call.call(listeners, this, arguments[1]);
			break;
		case 3:
			call.call(listeners, this, arguments[1], arguments[2]);
			break;
		default:
			l = arguments.length;
			args = new Array(l - 1);
			for (i = 1; i < l; ++i) {
				args[i - 1] = arguments[i];
			}
			apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: once,
	off: off,
	emit: emit
};

descriptors = {
	on: d(on),
	once: d(once),
	off: d(off),
	emit: d(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function (o) {
	return (o == null) ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;


/***/ }),

/***/ "./node_modules/ext/global-this/implementation.js":
/*!********************************************************!*\
  !*** ./node_modules/ext/global-this/implementation.js ***!
  \********************************************************/
/***/ ((module) => {

var naiveFallback = function () {
	if (typeof self === "object" && self) return self;
	if (typeof window === "object" && window) return window;
	throw new Error("Unable to resolve global `this`");
};

module.exports = (function () {
	if (this) return this;

	// Unexpected strict mode (may happen if e.g. bundled into ESM module)

	// Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis
	// In all ES5+ engines global object inherits from Object.prototype
	// (if you approached one that doesn't please report)
	try {
		Object.defineProperty(Object.prototype, "__global__", {
			get: function () { return this; },
			configurable: true
		});
	} catch (error) {
		// Unfortunate case of Object.prototype being sealed (via preventExtensions, seal or freeze)
		return naiveFallback();
	}
	try {
		// Safari case (window.__global__ is resolved with global context, but __global__ does not)
		if (!__global__) return naiveFallback();
		return __global__;
	} finally {
		delete Object.prototype.__global__;
	}
})();


/***/ }),

/***/ "./node_modules/ext/global-this/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ext/global-this/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./is-implemented */ "./node_modules/ext/global-this/is-implemented.js")() ? globalThis : __webpack_require__(/*! ./implementation */ "./node_modules/ext/global-this/implementation.js");


/***/ }),

/***/ "./node_modules/ext/global-this/is-implemented.js":
/*!********************************************************!*\
  !*** ./node_modules/ext/global-this/is-implemented.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function () {
	if (typeof globalThis !== "object") return false;
	if (!globalThis) return false;
	return globalThis.Array === Array;
};


/***/ }),

/***/ "./node_modules/is-promise/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-promise/index.js ***!
  \******************************************/
/***/ ((module) => {

module.exports = isPromise;
module.exports["default"] = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),

/***/ "./node_modules/lru-queue/index.js":
/*!*****************************************!*\
  !*** ./node_modules/lru-queue/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPosInt = __webpack_require__(/*! es5-ext/number/to-pos-integer */ "./node_modules/es5-ext/number/to-pos-integer.js")

  , create = Object.create, hasOwnProperty = Object.prototype.hasOwnProperty;

module.exports = function (limit) {
	var size = 0, base = 1, queue = create(null), map = create(null), index = 0, del;
	limit = toPosInt(limit);
	return {
		hit: function (id) {
			var oldIndex = map[id], nuIndex = ++index;
			queue[nuIndex] = id;
			map[id] = nuIndex;
			if (!oldIndex) {
				++size;
				if (size <= limit) return;
				id = queue[base];
				del(id);
				return id;
			}
			delete queue[oldIndex];
			if (base !== oldIndex) return;
			while (!hasOwnProperty.call(queue, ++base)) continue; //jslint: skip
		},
		delete: del = function (id) {
			var oldIndex = map[id];
			if (!oldIndex) return;
			delete queue[oldIndex];
			delete map[id];
			--size;
			if (base !== oldIndex) return;
			if (!size) {
				index = 0;
				base = 1;
				return;
			}
			while (!hasOwnProperty.call(queue, ++base)) continue; //jslint: skip
		},
		clear: function () {
			size = 0;
			base = 1;
			queue = create(null);
			map = create(null);
			index = 0;
		}
	};
};


/***/ }),

/***/ "./node_modules/memoizee/ext/async.js":
/*!********************************************!*\
  !*** ./node_modules/memoizee/ext/async.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint consistent-this: 0, no-shadow:0, no-eq-null: 0, eqeqeq: 0, no-unused-vars: 0 */

// Support for asynchronous functions



var aFrom        = __webpack_require__(/*! es5-ext/array/from */ "./node_modules/es5-ext/array/from/index.js")
  , objectMap    = __webpack_require__(/*! es5-ext/object/map */ "./node_modules/es5-ext/object/map.js")
  , mixin        = __webpack_require__(/*! es5-ext/object/mixin */ "./node_modules/es5-ext/object/mixin.js")
  , defineLength = __webpack_require__(/*! es5-ext/function/_define-length */ "./node_modules/es5-ext/function/_define-length.js")
  , nextTick     = __webpack_require__(/*! next-tick */ "./node_modules/next-tick/index.js");

var slice = Array.prototype.slice, apply = Function.prototype.apply, create = Object.create;

(__webpack_require__(/*! ../lib/registered-extensions */ "./node_modules/memoizee/lib/registered-extensions.js").async) = function (tbi, conf) {
	var waiting = create(null)
	  , cache = create(null)
	  , base = conf.memoized
	  , original = conf.original
	  , currentCallback
	  , currentContext
	  , currentArgs;

	// Initial
	conf.memoized = defineLength(function (arg) {
		var args = arguments, last = args[args.length - 1];
		if (typeof last === "function") {
			currentCallback = last;
			args = slice.call(args, 0, -1);
		}
		return base.apply(currentContext = this, currentArgs = args);
	}, base);
	try { mixin(conf.memoized, base); }
	catch (ignore) {}

	// From cache (sync)
	conf.on("get", function (id) {
		var cb, context, args;
		if (!currentCallback) return;

		// Unresolved
		if (waiting[id]) {
			if (typeof waiting[id] === "function") waiting[id] = [waiting[id], currentCallback];
			else waiting[id].push(currentCallback);
			currentCallback = null;
			return;
		}

		// Resolved, assure next tick invocation
		cb = currentCallback;
		context = currentContext;
		args = currentArgs;
		currentCallback = currentContext = currentArgs = null;
		nextTick(function () {
			var data;
			if (hasOwnProperty.call(cache, id)) {
				data = cache[id];
				conf.emit("getasync", id, args, context);
				apply.call(cb, data.context, data.args);
			} else {
				// Purged in a meantime, we shouldn't rely on cached value, recall
				currentCallback = cb;
				currentContext = context;
				currentArgs = args;
				base.apply(context, args);
			}
		});
	});

	// Not from cache
	conf.original = function () {
		var args, cb, origCb, result;
		if (!currentCallback) return apply.call(original, this, arguments);
		args = aFrom(arguments);
		cb = function self(err) {
			var cb, args, id = self.id;
			if (id == null) {
				// Shouldn't happen, means async callback was called sync way
				nextTick(apply.bind(self, this, arguments));
				return undefined;
			}
			delete self.id;
			cb = waiting[id];
			delete waiting[id];
			if (!cb) {
				// Already processed,
				// outcome of race condition: asyncFn(1, cb), asyncFn.clear(), asyncFn(1, cb)
				return undefined;
			}
			args = aFrom(arguments);
			if (conf.has(id)) {
				if (err) {
					conf.delete(id);
				} else {
					cache[id] = { context: this, args: args };
					conf.emit("setasync", id, typeof cb === "function" ? 1 : cb.length);
				}
			}
			if (typeof cb === "function") {
				result = apply.call(cb, this, args);
			} else {
				cb.forEach(function (cb) { result = apply.call(cb, this, args); }, this);
			}
			return result;
		};
		origCb = currentCallback;
		currentCallback = currentContext = currentArgs = null;
		args.push(cb);
		result = apply.call(original, this, args);
		cb.cb = origCb;
		currentCallback = cb;
		return result;
	};

	// After not from cache call
	conf.on("set", function (id) {
		if (!currentCallback) {
			conf.delete(id);
			return;
		}
		if (waiting[id]) {
			// Race condition: asyncFn(1, cb), asyncFn.clear(), asyncFn(1, cb)
			if (typeof waiting[id] === "function") waiting[id] = [waiting[id], currentCallback.cb];
			else waiting[id].push(currentCallback.cb);
		} else {
			waiting[id] = currentCallback.cb;
		}
		delete currentCallback.cb;
		currentCallback.id = id;
		currentCallback = null;
	});

	// On delete
	conf.on("delete", function (id) {
		var result;
		// If false, we don't have value yet, so we assume that intention is not
		// to memoize this call. After value is obtained we don't cache it but
		// gracefully pass to callback
		if (hasOwnProperty.call(waiting, id)) return;
		if (!cache[id]) return;
		result = cache[id];
		delete cache[id];
		conf.emit("deleteasync", id, slice.call(result.args, 1));
	});

	// On clear
	conf.on("clear", function () {
		var oldCache = cache;
		cache = create(null);
		conf.emit(
			"clearasync", objectMap(oldCache, function (data) { return slice.call(data.args, 1); })
		);
	});
};


/***/ }),

/***/ "./node_modules/memoizee/ext/dispose.js":
/*!**********************************************!*\
  !*** ./node_modules/memoizee/ext/dispose.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Call dispose callback on each cache purge



var callable   = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , forEach    = __webpack_require__(/*! es5-ext/object/for-each */ "./node_modules/es5-ext/object/for-each.js")
  , extensions = __webpack_require__(/*! ../lib/registered-extensions */ "./node_modules/memoizee/lib/registered-extensions.js")

  , apply = Function.prototype.apply;

extensions.dispose = function (dispose, conf, options) {
	var del;
	callable(dispose);
	if ((options.async && extensions.async) || (options.promise && extensions.promise)) {
		conf.on("deleteasync", del = function (id, resultArray) {
			apply.call(dispose, null, resultArray);
		});
		conf.on("clearasync", function (cache) {
			forEach(cache, function (result, id) {
 del(id, result);
});
		});
		return;
	}
	conf.on("delete", del = function (id, result) {
 dispose(result);
});
	conf.on("clear", function (cache) {
		forEach(cache, function (result, id) {
 del(id, result);
});
	});
};


/***/ }),

/***/ "./node_modules/memoizee/ext/max-age.js":
/*!**********************************************!*\
  !*** ./node_modules/memoizee/ext/max-age.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint consistent-this: 0 */

// Timeout cached values



var aFrom      = __webpack_require__(/*! es5-ext/array/from */ "./node_modules/es5-ext/array/from/index.js")
  , forEach    = __webpack_require__(/*! es5-ext/object/for-each */ "./node_modules/es5-ext/object/for-each.js")
  , nextTick   = __webpack_require__(/*! next-tick */ "./node_modules/next-tick/index.js")
  , isPromise  = __webpack_require__(/*! is-promise */ "./node_modules/is-promise/index.js")
  , timeout    = __webpack_require__(/*! timers-ext/valid-timeout */ "./node_modules/timers-ext/valid-timeout.js")
  , extensions = __webpack_require__(/*! ../lib/registered-extensions */ "./node_modules/memoizee/lib/registered-extensions.js");

var noop = Function.prototype, max = Math.max, min = Math.min, create = Object.create;

extensions.maxAge = function (maxAge, conf, options) {
	var timeouts, postfix, preFetchAge, preFetchTimeouts;

	maxAge = timeout(maxAge);
	if (!maxAge) return;

	timeouts = create(null);
	postfix =
		(options.async && extensions.async) || (options.promise && extensions.promise)
			? "async"
			: "";
	conf.on("set" + postfix, function (id) {
		timeouts[id] = setTimeout(function () { conf.delete(id); }, maxAge);
		if (typeof timeouts[id].unref === "function") timeouts[id].unref();
		if (!preFetchTimeouts) return;
		if (preFetchTimeouts[id]) {
			if (preFetchTimeouts[id] !== "nextTick") clearTimeout(preFetchTimeouts[id]);
		}
		preFetchTimeouts[id] = setTimeout(function () {
			delete preFetchTimeouts[id];
		}, preFetchAge);
		if (typeof preFetchTimeouts[id].unref === "function") preFetchTimeouts[id].unref();
	});
	conf.on("delete" + postfix, function (id) {
		clearTimeout(timeouts[id]);
		delete timeouts[id];
		if (!preFetchTimeouts) return;
		if (preFetchTimeouts[id] !== "nextTick") clearTimeout(preFetchTimeouts[id]);
		delete preFetchTimeouts[id];
	});

	if (options.preFetch) {
		if (options.preFetch === true || isNaN(options.preFetch)) {
			preFetchAge = 0.333;
		} else {
			preFetchAge = max(min(Number(options.preFetch), 1), 0);
		}
		if (preFetchAge) {
			preFetchTimeouts = {};
			preFetchAge = (1 - preFetchAge) * maxAge;
			conf.on("get" + postfix, function (id, args, context) {
				if (!preFetchTimeouts[id]) {
					preFetchTimeouts[id] = "nextTick";
					nextTick(function () {
						var result;
						if (preFetchTimeouts[id] !== "nextTick") return;
						delete preFetchTimeouts[id];
						conf.delete(id);
						if (options.async) {
							args = aFrom(args);
							args.push(noop);
						}
						result = conf.memoized.apply(context, args);
						if (options.promise) {
							// Supress eventual error warnings
							if (isPromise(result)) {
								if (typeof result.done === "function") result.done(noop, noop);
								else result.then(noop, noop);
							}
						}
					});
				}
			});
		}
	}

	conf.on("clear" + postfix, function () {
		forEach(timeouts, function (id) { clearTimeout(id); });
		timeouts = {};
		if (preFetchTimeouts) {
			forEach(preFetchTimeouts, function (id) { if (id !== "nextTick") clearTimeout(id); });
			preFetchTimeouts = {};
		}
	});
};


/***/ }),

/***/ "./node_modules/memoizee/ext/max.js":
/*!******************************************!*\
  !*** ./node_modules/memoizee/ext/max.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Limit cache size, LRU (least recently used) algorithm.



var toPosInteger = __webpack_require__(/*! es5-ext/number/to-pos-integer */ "./node_modules/es5-ext/number/to-pos-integer.js")
  , lruQueue     = __webpack_require__(/*! lru-queue */ "./node_modules/lru-queue/index.js")
  , extensions   = __webpack_require__(/*! ../lib/registered-extensions */ "./node_modules/memoizee/lib/registered-extensions.js");

extensions.max = function (max, conf, options) {
	var postfix, queue, hit;

	max = toPosInteger(max);
	if (!max) return;

	queue = lruQueue(max);
	postfix = (options.async && extensions.async) || (options.promise && extensions.promise)
		? "async" : "";

	conf.on("set" + postfix, hit = function (id) {
		id = queue.hit(id);
		if (id === undefined) return;
		conf.delete(id);
	});
	conf.on("get" + postfix, hit);
	conf.on("delete" + postfix, queue.delete);
	conf.on("clear" + postfix, queue.clear);
};


/***/ }),

/***/ "./node_modules/memoizee/ext/promise.js":
/*!**********************************************!*\
  !*** ./node_modules/memoizee/ext/promise.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint max-statements: 0 */

// Support for functions returning promise



var objectMap     = __webpack_require__(/*! es5-ext/object/map */ "./node_modules/es5-ext/object/map.js")
  , primitiveSet  = __webpack_require__(/*! es5-ext/object/primitive-set */ "./node_modules/es5-ext/object/primitive-set.js")
  , ensureString  = __webpack_require__(/*! es5-ext/object/validate-stringifiable-value */ "./node_modules/es5-ext/object/validate-stringifiable-value.js")
  , toShortString = __webpack_require__(/*! es5-ext/to-short-string-representation */ "./node_modules/es5-ext/to-short-string-representation.js")
  , isPromise     = __webpack_require__(/*! is-promise */ "./node_modules/is-promise/index.js")
  , nextTick      = __webpack_require__(/*! next-tick */ "./node_modules/next-tick/index.js");

var create = Object.create
  , supportedModes = primitiveSet("then", "then:finally", "done", "done:finally");

(__webpack_require__(/*! ../lib/registered-extensions */ "./node_modules/memoizee/lib/registered-extensions.js").promise) = function (mode, conf) {
	var waiting = create(null), cache = create(null), promises = create(null);

	if (mode === true) {
		mode = null;
	} else {
		mode = ensureString(mode);
		if (!supportedModes[mode]) {
			throw new TypeError("'" + toShortString(mode) + "' is not valid promise mode");
		}
	}

	// After not from cache call
	conf.on("set", function (id, ignore, promise) {
		var isFailed = false;

		if (!isPromise(promise)) {
			// Non promise result
			cache[id] = promise;
			conf.emit("setasync", id, 1);
			return;
		}
		waiting[id] = 1;
		promises[id] = promise;
		var onSuccess = function (result) {
			var count = waiting[id];
			if (isFailed) {
				throw new Error(
					"Memoizee error: Detected unordered then|done & finally resolution, which " +
						"in turn makes proper detection of success/failure impossible (when in " +
						"'done:finally' mode)\n" +
						"Consider to rely on 'then' or 'done' mode instead."
				);
			}
			if (!count) return; // Deleted from cache before resolved
			delete waiting[id];
			cache[id] = result;
			conf.emit("setasync", id, count);
		};
		var onFailure = function () {
			isFailed = true;
			if (!waiting[id]) return; // Deleted from cache (or succeed in case of finally)
			delete waiting[id];
			delete promises[id];
			conf.delete(id);
		};

		var resolvedMode = mode;
		if (!resolvedMode) resolvedMode = "then";

		if (resolvedMode === "then") {
			var nextTickFailure = function () { nextTick(onFailure); };
			// Eventual finally needs to be attached to non rejected promise
			// (so we not force propagation of unhandled rejection)
			promise = promise.then(function (result) {
				nextTick(onSuccess.bind(this, result));
			}, nextTickFailure);
			// If `finally` is a function we attach to it to remove cancelled promises.
			if (typeof promise.finally === "function") {
				promise.finally(nextTickFailure);
			}
		} else if (resolvedMode === "done") {
			// Not recommended, as it may mute any eventual "Unhandled error" events
			if (typeof promise.done !== "function") {
				throw new Error(
					"Memoizee error: Retrieved promise does not implement 'done' " +
						"in 'done' mode"
				);
			}
			promise.done(onSuccess, onFailure);
		} else if (resolvedMode === "done:finally") {
			// The only mode with no side effects assuming library does not throw unconditionally
			// for rejected promises.
			if (typeof promise.done !== "function") {
				throw new Error(
					"Memoizee error: Retrieved promise does not implement 'done' " +
						"in 'done:finally' mode"
				);
			}
			if (typeof promise.finally !== "function") {
				throw new Error(
					"Memoizee error: Retrieved promise does not implement 'finally' " +
						"in 'done:finally' mode"
				);
			}
			promise.done(onSuccess);
			promise.finally(onFailure);
		}
	});

	// From cache (sync)
	conf.on("get", function (id, args, context) {
		var promise;
		if (waiting[id]) {
			++waiting[id]; // Still waiting
			return;
		}
		promise = promises[id];
		var emit = function () { conf.emit("getasync", id, args, context); };
		if (isPromise(promise)) {
			if (typeof promise.done === "function") promise.done(emit);
			else {
				promise.then(function () { nextTick(emit); });
			}
		} else {
			emit();
		}
	});

	// On delete
	conf.on("delete", function (id) {
		delete promises[id];
		if (waiting[id]) {
			delete waiting[id];
			return; // Not yet resolved
		}
		if (!hasOwnProperty.call(cache, id)) return;
		var result = cache[id];
		delete cache[id];
		conf.emit("deleteasync", id, [result]);
	});

	// On clear
	conf.on("clear", function () {
		var oldCache = cache;
		cache = create(null);
		waiting = create(null);
		promises = create(null);
		conf.emit("clearasync", objectMap(oldCache, function (data) { return [data]; }));
	});
};


/***/ }),

/***/ "./node_modules/memoizee/ext/ref-counter.js":
/*!**************************************************!*\
  !*** ./node_modules/memoizee/ext/ref-counter.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// Reference counter, useful for garbage collector like functionality



var d          = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , extensions = __webpack_require__(/*! ../lib/registered-extensions */ "./node_modules/memoizee/lib/registered-extensions.js")

  , create = Object.create, defineProperties = Object.defineProperties;

extensions.refCounter = function (ignore, conf, options) {
	var cache, postfix;

	cache = create(null);
	postfix = (options.async && extensions.async) || (options.promise && extensions.promise)
		? "async" : "";

	conf.on("set" + postfix, function (id, length) {
 cache[id] = length || 1;
});
	conf.on("get" + postfix, function (id) {
 ++cache[id];
});
	conf.on("delete" + postfix, function (id) {
 delete cache[id];
});
	conf.on("clear" + postfix, function () {
 cache = {};
});

	defineProperties(conf.memoized, {
		deleteRef: d(function () {
			var id = conf.get(arguments);
			if (id === null) return null;
			if (!cache[id]) return null;
			if (!--cache[id]) {
				conf.delete(id);
				return true;
			}
			return false;
		}),
		getRefCount: d(function () {
			var id = conf.get(arguments);
			if (id === null) return 0;
			if (!cache[id]) return 0;
			return cache[id];
		})
	});
};


/***/ }),

/***/ "./node_modules/memoizee/index.js":
/*!****************************************!*\
  !*** ./node_modules/memoizee/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var normalizeOpts = __webpack_require__(/*! es5-ext/object/normalize-options */ "./node_modules/es5-ext/object/normalize-options.js")
  , resolveLength = __webpack_require__(/*! ./lib/resolve-length */ "./node_modules/memoizee/lib/resolve-length.js")
  , plain         = __webpack_require__(/*! ./plain */ "./node_modules/memoizee/plain.js");

module.exports = function (fn/*, options*/) {
	var options = normalizeOpts(arguments[1]), length;

	if (!options.normalizer) {
		length = options.length = resolveLength(options.length, fn.length, options.async);
		if (length !== 0) {
			if (options.primitive) {
				if (length === false) {
					options.normalizer = __webpack_require__(/*! ./normalizers/primitive */ "./node_modules/memoizee/normalizers/primitive.js");
				} else if (length > 1) {
					options.normalizer = __webpack_require__(/*! ./normalizers/get-primitive-fixed */ "./node_modules/memoizee/normalizers/get-primitive-fixed.js")(length);
				}
			} else if (length === false) options.normalizer = __webpack_require__(/*! ./normalizers/get */ "./node_modules/memoizee/normalizers/get.js")();
				else if (length === 1) options.normalizer = __webpack_require__(/*! ./normalizers/get-1 */ "./node_modules/memoizee/normalizers/get-1.js")();
				else options.normalizer = __webpack_require__(/*! ./normalizers/get-fixed */ "./node_modules/memoizee/normalizers/get-fixed.js")(length);
		}
	}

	// Assure extensions
	if (options.async) __webpack_require__(/*! ./ext/async */ "./node_modules/memoizee/ext/async.js");
	if (options.promise) __webpack_require__(/*! ./ext/promise */ "./node_modules/memoizee/ext/promise.js");
	if (options.dispose) __webpack_require__(/*! ./ext/dispose */ "./node_modules/memoizee/ext/dispose.js");
	if (options.maxAge) __webpack_require__(/*! ./ext/max-age */ "./node_modules/memoizee/ext/max-age.js");
	if (options.max) __webpack_require__(/*! ./ext/max */ "./node_modules/memoizee/ext/max.js");
	if (options.refCounter) __webpack_require__(/*! ./ext/ref-counter */ "./node_modules/memoizee/ext/ref-counter.js");

	return plain(fn, options);
};


/***/ }),

/***/ "./node_modules/memoizee/lib/configure-map.js":
/*!****************************************************!*\
  !*** ./node_modules/memoizee/lib/configure-map.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint no-eq-null: 0, eqeqeq: 0, no-unused-vars: 0 */



var customError      = __webpack_require__(/*! es5-ext/error/custom */ "./node_modules/es5-ext/error/custom.js")
  , defineLength     = __webpack_require__(/*! es5-ext/function/_define-length */ "./node_modules/es5-ext/function/_define-length.js")
  , d                = __webpack_require__(/*! d */ "./node_modules/d/index.js")
  , ee               = (__webpack_require__(/*! event-emitter */ "./node_modules/event-emitter/index.js").methods)
  , resolveResolve   = __webpack_require__(/*! ./resolve-resolve */ "./node_modules/memoizee/lib/resolve-resolve.js")
  , resolveNormalize = __webpack_require__(/*! ./resolve-normalize */ "./node_modules/memoizee/lib/resolve-normalize.js");

var apply = Function.prototype.apply
  , call = Function.prototype.call
  , create = Object.create
  , defineProperties = Object.defineProperties
  , on = ee.on
  , emit = ee.emit;

module.exports = function (original, length, options) {
	var cache = create(null)
	  , conf
	  , memLength
	  , get
	  , set
	  , del
	  , clear
	  , extDel
	  , extGet
	  , extHas
	  , normalizer
	  , getListeners
	  , setListeners
	  , deleteListeners
	  , memoized
	  , resolve;
	if (length !== false) memLength = length;
	else if (isNaN(original.length)) memLength = 1;
	else memLength = original.length;

	if (options.normalizer) {
		normalizer = resolveNormalize(options.normalizer);
		get = normalizer.get;
		set = normalizer.set;
		del = normalizer.delete;
		clear = normalizer.clear;
	}
	if (options.resolvers != null) resolve = resolveResolve(options.resolvers);

	if (get) {
		memoized = defineLength(function (arg) {
			var id, result, args = arguments;
			if (resolve) args = resolve(args);
			id = get(args);
			if (id !== null) {
				if (hasOwnProperty.call(cache, id)) {
					if (getListeners) conf.emit("get", id, args, this);
					return cache[id];
				}
			}
			if (args.length === 1) result = call.call(original, this, args[0]);
			else result = apply.call(original, this, args);
			if (id === null) {
				id = get(args);
				if (id !== null) throw customError("Circular invocation", "CIRCULAR_INVOCATION");
				id = set(args);
			} else if (hasOwnProperty.call(cache, id)) {
				throw customError("Circular invocation", "CIRCULAR_INVOCATION");
			}
			cache[id] = result;
			if (setListeners) conf.emit("set", id, null, result);
			return result;
		}, memLength);
	} else if (length === 0) {
		memoized = function () {
			var result;
			if (hasOwnProperty.call(cache, "data")) {
				if (getListeners) conf.emit("get", "data", arguments, this);
				return cache.data;
			}
			if (arguments.length) result = apply.call(original, this, arguments);
			else result = call.call(original, this);
			if (hasOwnProperty.call(cache, "data")) {
				throw customError("Circular invocation", "CIRCULAR_INVOCATION");
			}
			cache.data = result;
			if (setListeners) conf.emit("set", "data", null, result);
			return result;
		};
	} else {
		memoized = function (arg) {
			var result, args = arguments, id;
			if (resolve) args = resolve(arguments);
			id = String(args[0]);
			if (hasOwnProperty.call(cache, id)) {
				if (getListeners) conf.emit("get", id, args, this);
				return cache[id];
			}
			if (args.length === 1) result = call.call(original, this, args[0]);
			else result = apply.call(original, this, args);
			if (hasOwnProperty.call(cache, id)) {
				throw customError("Circular invocation", "CIRCULAR_INVOCATION");
			}
			cache[id] = result;
			if (setListeners) conf.emit("set", id, null, result);
			return result;
		};
	}
	conf = {
		original: original,
		memoized: memoized,
		profileName: options.profileName,
		get: function (args) {
			if (resolve) args = resolve(args);
			if (get) return get(args);
			return String(args[0]);
		},
		has: function (id) { return hasOwnProperty.call(cache, id); },
		delete: function (id) {
			var result;
			if (!hasOwnProperty.call(cache, id)) return;
			if (del) del(id);
			result = cache[id];
			delete cache[id];
			if (deleteListeners) conf.emit("delete", id, result);
		},
		clear: function () {
			var oldCache = cache;
			if (clear) clear();
			cache = create(null);
			conf.emit("clear", oldCache);
		},
		on: function (type, listener) {
			if (type === "get") getListeners = true;
			else if (type === "set") setListeners = true;
			else if (type === "delete") deleteListeners = true;
			return on.call(this, type, listener);
		},
		emit: emit,
		updateEnv: function () { original = conf.original; }
	};
	if (get) {
		extDel = defineLength(function (arg) {
			var id, args = arguments;
			if (resolve) args = resolve(args);
			id = get(args);
			if (id === null) return;
			conf.delete(id);
		}, memLength);
	} else if (length === 0) {
		extDel = function () { return conf.delete("data"); };
	} else {
		extDel = function (arg) {
			if (resolve) arg = resolve(arguments)[0];
			return conf.delete(arg);
		};
	}
	extGet = defineLength(function () {
		var id, args = arguments;
		if (length === 0) return cache.data;
		if (resolve) args = resolve(args);
		if (get) id = get(args);
		else id = String(args[0]);
		return cache[id];
	});
	extHas = defineLength(function () {
		var id, args = arguments;
		if (length === 0) return conf.has("data");
		if (resolve) args = resolve(args);
		if (get) id = get(args);
		else id = String(args[0]);
		if (id === null) return false;
		return conf.has(id);
	});
	defineProperties(memoized, {
		__memoized__: d(true),
		delete: d(extDel),
		clear: d(conf.clear),
		_get: d(extGet),
		_has: d(extHas)
	});
	return conf;
};


/***/ }),

/***/ "./node_modules/memoizee/lib/registered-extensions.js":
/*!************************************************************!*\
  !*** ./node_modules/memoizee/lib/registered-extensions.js ***!
  \************************************************************/
/***/ (() => {

"use strict";



/***/ }),

/***/ "./node_modules/memoizee/lib/resolve-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/memoizee/lib/resolve-length.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPosInt = __webpack_require__(/*! es5-ext/number/to-pos-integer */ "./node_modules/es5-ext/number/to-pos-integer.js");

module.exports = function (optsLength, fnLength, isAsync) {
	var length;
	if (isNaN(optsLength)) {
		length = fnLength;
		if (!(length >= 0)) return 1;
		if (isAsync && length) return length - 1;
		return length;
	}
	if (optsLength === false) return false;
	return toPosInt(optsLength);
};


/***/ }),

/***/ "./node_modules/memoizee/lib/resolve-normalize.js":
/*!********************************************************!*\
  !*** ./node_modules/memoizee/lib/resolve-normalize.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callable = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js");

module.exports = function (userNormalizer) {
	var normalizer;
	if (typeof userNormalizer === "function") return { set: userNormalizer, get: userNormalizer };
	normalizer = { get: callable(userNormalizer.get) };
	if (userNormalizer.set !== undefined) {
		normalizer.set = callable(userNormalizer.set);
		if (userNormalizer.delete) normalizer.delete = callable(userNormalizer.delete);
		if (userNormalizer.clear) normalizer.clear = callable(userNormalizer.clear);
		return normalizer;
	}
	normalizer.set = normalizer.get;
	return normalizer;
};


/***/ }),

/***/ "./node_modules/memoizee/lib/resolve-resolve.js":
/*!******************************************************!*\
  !*** ./node_modules/memoizee/lib/resolve-resolve.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toArray  = __webpack_require__(/*! es5-ext/array/to-array */ "./node_modules/es5-ext/array/to-array.js")
  , isValue  = __webpack_require__(/*! es5-ext/object/is-value */ "./node_modules/es5-ext/object/is-value.js")
  , callable = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js");

var slice = Array.prototype.slice, resolveArgs;

resolveArgs = function (args) {
	return this.map(function (resolve, i) {
		return resolve ? resolve(args[i]) : args[i];
	}).concat(slice.call(args, this.length));
};

module.exports = function (resolvers) {
	resolvers = toArray(resolvers);
	resolvers.forEach(function (resolve) {
		if (isValue(resolve)) callable(resolve);
	});
	return resolveArgs.bind(resolvers);
};


/***/ }),

/***/ "./node_modules/memoizee/normalizers/get-1.js":
/*!****************************************************!*\
  !*** ./node_modules/memoizee/normalizers/get-1.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var indexOf = __webpack_require__(/*! es5-ext/array/#/e-index-of */ "./node_modules/es5-ext/array/\u0000#/e-index-of.js");

module.exports = function () {
	var lastId = 0, argsMap = [], cache = [];
	return {
		get: function (args) {
			var index = indexOf.call(argsMap, args[0]);
			return index === -1 ? null : cache[index];
		},
		set: function (args) {
			argsMap.push(args[0]);
			cache.push(++lastId);
			return lastId;
		},
		delete: function (id) {
			var index = indexOf.call(cache, id);
			if (index !== -1) {
				argsMap.splice(index, 1);
				cache.splice(index, 1);
			}
		},
		clear: function () {
			argsMap = [];
			cache = [];
		}
	};
};


/***/ }),

/***/ "./node_modules/memoizee/normalizers/get-fixed.js":
/*!********************************************************!*\
  !*** ./node_modules/memoizee/normalizers/get-fixed.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var indexOf = __webpack_require__(/*! es5-ext/array/#/e-index-of */ "./node_modules/es5-ext/array/\u0000#/e-index-of.js")
  , create  = Object.create;

module.exports = function (length) {
	var lastId = 0, map = [[], []], cache = create(null);
	return {
		get: function (args) {
			var index = 0, set = map, i;
			while (index < length - 1) {
				i = indexOf.call(set[0], args[index]);
				if (i === -1) return null;
				set = set[1][i];
				++index;
			}
			i = indexOf.call(set[0], args[index]);
			if (i === -1) return null;
			return set[1][i] || null;
		},
		set: function (args) {
			var index = 0, set = map, i;
			while (index < length - 1) {
				i = indexOf.call(set[0], args[index]);
				if (i === -1) {
					i = set[0].push(args[index]) - 1;
					set[1].push([[], []]);
				}
				set = set[1][i];
				++index;
			}
			i = indexOf.call(set[0], args[index]);
			if (i === -1) {
				i = set[0].push(args[index]) - 1;
			}
			set[1][i] = ++lastId;
			cache[lastId] = args;
			return lastId;
		},
		delete: function (id) {
			var index = 0, set = map, i, path = [], args = cache[id];
			while (index < length - 1) {
				i = indexOf.call(set[0], args[index]);
				if (i === -1) {
					return;
				}
				path.push(set, i);
				set = set[1][i];
				++index;
			}
			i = indexOf.call(set[0], args[index]);
			if (i === -1) {
				return;
			}
			id = set[1][i];
			set[0].splice(i, 1);
			set[1].splice(i, 1);
			while (!set[0].length && path.length) {
				i = path.pop();
				set = path.pop();
				set[0].splice(i, 1);
				set[1].splice(i, 1);
			}
			delete cache[id];
		},
		clear: function () {
			map = [[], []];
			cache = create(null);
		}
	};
};


/***/ }),

/***/ "./node_modules/memoizee/normalizers/get-primitive-fixed.js":
/*!******************************************************************!*\
  !*** ./node_modules/memoizee/normalizers/get-primitive-fixed.js ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (length) {
	if (!length) {
		return function () {
			return "";
		};
	}
	return function (args) {
		var id = String(args[0]), i = 0, currentLength = length;
		while (--currentLength) {
			id += "\u0001" + args[++i];
		}
		return id;
	};
};


/***/ }),

/***/ "./node_modules/memoizee/normalizers/get.js":
/*!**************************************************!*\
  !*** ./node_modules/memoizee/normalizers/get.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint max-statements: 0 */



var indexOf = __webpack_require__(/*! es5-ext/array/#/e-index-of */ "./node_modules/es5-ext/array/\u0000#/e-index-of.js");

var create = Object.create;

module.exports = function () {
	var lastId = 0, map = [], cache = create(null);
	return {
		get: function (args) {
			var index = 0, set = map, i, length = args.length;
			if (length === 0) return set[length] || null;
			if ((set = set[length])) {
				while (index < length - 1) {
					i = indexOf.call(set[0], args[index]);
					if (i === -1) return null;
					set = set[1][i];
					++index;
				}
				i = indexOf.call(set[0], args[index]);
				if (i === -1) return null;
				return set[1][i] || null;
			}
			return null;
		},
		set: function (args) {
			var index = 0, set = map, i, length = args.length;
			if (length === 0) {
				set[length] = ++lastId;
			} else {
				if (!set[length]) {
					set[length] = [[], []];
				}
				set = set[length];
				while (index < length - 1) {
					i = indexOf.call(set[0], args[index]);
					if (i === -1) {
						i = set[0].push(args[index]) - 1;
						set[1].push([[], []]);
					}
					set = set[1][i];
					++index;
				}
				i = indexOf.call(set[0], args[index]);
				if (i === -1) {
					i = set[0].push(args[index]) - 1;
				}
				set[1][i] = ++lastId;
			}
			cache[lastId] = args;
			return lastId;
		},
		delete: function (id) {
			var index = 0, set = map, i, args = cache[id], length = args.length, path = [];
			if (length === 0) {
				delete set[length];
			} else if ((set = set[length])) {
				while (index < length - 1) {
					i = indexOf.call(set[0], args[index]);
					if (i === -1) {
						return;
					}
					path.push(set, i);
					set = set[1][i];
					++index;
				}
				i = indexOf.call(set[0], args[index]);
				if (i === -1) {
					return;
				}
				id = set[1][i];
				set[0].splice(i, 1);
				set[1].splice(i, 1);
				while (!set[0].length && path.length) {
					i = path.pop();
					set = path.pop();
					set[0].splice(i, 1);
					set[1].splice(i, 1);
				}
			}
			delete cache[id];
		},
		clear: function () {
			map = [];
			cache = create(null);
		}
	};
};


/***/ }),

/***/ "./node_modules/memoizee/normalizers/primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/memoizee/normalizers/primitive.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (args) {
	var id, i, length = args.length;
	if (!length) return "\u0002";
	id = String(args[i = 0]);
	while (--length) id += "\u0001" + args[++i];
	return id;
};


/***/ }),

/***/ "./node_modules/memoizee/plain.js":
/*!****************************************!*\
  !*** ./node_modules/memoizee/plain.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var callable      = __webpack_require__(/*! es5-ext/object/valid-callable */ "./node_modules/es5-ext/object/valid-callable.js")
  , forEach       = __webpack_require__(/*! es5-ext/object/for-each */ "./node_modules/es5-ext/object/for-each.js")
  , extensions    = __webpack_require__(/*! ./lib/registered-extensions */ "./node_modules/memoizee/lib/registered-extensions.js")
  , configure     = __webpack_require__(/*! ./lib/configure-map */ "./node_modules/memoizee/lib/configure-map.js")
  , resolveLength = __webpack_require__(/*! ./lib/resolve-length */ "./node_modules/memoizee/lib/resolve-length.js");

module.exports = function self(fn /*, options */) {
	var options, length, conf;

	callable(fn);
	options = Object(arguments[1]);

	if (options.async && options.promise) {
		throw new Error("Options 'async' and 'promise' cannot be used together");
	}

	// Do not memoize already memoized function
	if (hasOwnProperty.call(fn, "__memoized__") && !options.force) return fn;

	// Resolve length;
	length = resolveLength(options.length, fn.length, options.async && extensions.async);

	// Configure cache map
	conf = configure(fn, length, options);

	// Bind eventual extensions
	forEach(extensions, function (extFn, name) {
		if (options[name]) extFn(options[name], conf, options);
	});

	if (self.__profiler__) self.__profiler__(conf);

	conf.updateEnv();
	return conf.memoized;
};


/***/ }),

/***/ "./node_modules/next-tick/index.js":
/*!*****************************************!*\
  !*** ./node_modules/next-tick/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


var ensureCallable = function (fn) {
	if (typeof fn !== 'function') throw new TypeError(fn + " is not a function");
	return fn;
};

var byObserver = function (Observer) {
	var node = document.createTextNode(''), queue, currentQueue, i = 0;
	new Observer(function () {
		var callback;
		if (!queue) {
			if (!currentQueue) return;
			queue = currentQueue;
		} else if (currentQueue) {
			queue = currentQueue.concat(queue);
		}
		currentQueue = queue;
		queue = null;
		if (typeof currentQueue === 'function') {
			callback = currentQueue;
			currentQueue = null;
			callback();
			return;
		}
		node.data = (i = ++i % 2); // Invoke other batch, to handle leftover callbacks in case of crash
		while (currentQueue) {
			callback = currentQueue.shift();
			if (!currentQueue.length) currentQueue = null;
			callback();
		}
	}).observe(node, { characterData: true });
	return function (fn) {
		ensureCallable(fn);
		if (queue) {
			if (typeof queue === 'function') queue = [queue, fn];
			else queue.push(fn);
			return;
		}
		queue = fn;
		node.data = (i = ++i % 2);
	};
};

module.exports = (function () {
	// Node.js
	if ((typeof process === 'object') && process && (typeof process.nextTick === 'function')) {
		return process.nextTick;
	}

	// queueMicrotask
	if (typeof queueMicrotask === "function") {
		return function (cb) { queueMicrotask(ensureCallable(cb)); };
	}

	// MutationObserver
	if ((typeof document === 'object') && document) {
		if (typeof MutationObserver === 'function') return byObserver(MutationObserver);
		if (typeof WebKitMutationObserver === 'function') return byObserver(WebKitMutationObserver);
	}

	// W3C Draft
	// http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html
	if (typeof setImmediate === 'function') {
		return function (cb) { setImmediate(ensureCallable(cb)); };
	}

	// Wide available standard
	if ((typeof setTimeout === 'function') || (typeof setTimeout === 'object')) {
		return function (cb) { setTimeout(ensureCallable(cb), 0); };
	}

	return null;
}());


/***/ }),

/***/ "./node_modules/object-hash/dist/object_hash.js":
/*!******************************************************!*\
  !*** ./node_modules/object-hash/dist/object_hash.js ***!
  \******************************************************/
/***/ ((module) => {

!function(e){var t; true?module.exports=e():0}(function(){return function r(o,i,u){function s(n,e){if(!i[n]){if(!o[n]){var t=undefined;if(!e&&t)return require(n,!0);if(a)return a(n,!0);throw new Error("Cannot find module '"+n+"'")}e=i[n]={exports:{}};o[n][0].call(e.exports,function(e){var t=o[n][1][e];return s(t||e)},e,e.exports,r,o,i,u)}return i[n].exports}for(var a=undefined,e=0;e<u.length;e++)s(u[e]);return s}({1:[function(w,b,m){!function(e,n,s,c,d,h,p,g,y){"use strict";var r=w("crypto");function t(e,t){t=u(e,t);var n;return void 0===(n="passthrough"!==t.algorithm?r.createHash(t.algorithm):new l).write&&(n.write=n.update,n.end=n.update),f(t,n).dispatch(e),n.update||n.end(""),n.digest?n.digest("buffer"===t.encoding?void 0:t.encoding):(e=n.read(),"buffer"!==t.encoding?e.toString(t.encoding):e)}(m=b.exports=t).sha1=function(e){return t(e)},m.keys=function(e){return t(e,{excludeValues:!0,algorithm:"sha1",encoding:"hex"})},m.MD5=function(e){return t(e,{algorithm:"md5",encoding:"hex"})},m.keysMD5=function(e){return t(e,{algorithm:"md5",encoding:"hex",excludeValues:!0})};var o=r.getHashes?r.getHashes().slice():["sha1","md5"],i=(o.push("passthrough"),["buffer","hex","binary","base64"]);function u(e,t){var n={};if(n.algorithm=(t=t||{}).algorithm||"sha1",n.encoding=t.encoding||"hex",n.excludeValues=!!t.excludeValues,n.algorithm=n.algorithm.toLowerCase(),n.encoding=n.encoding.toLowerCase(),n.ignoreUnknown=!0===t.ignoreUnknown,n.respectType=!1!==t.respectType,n.respectFunctionNames=!1!==t.respectFunctionNames,n.respectFunctionProperties=!1!==t.respectFunctionProperties,n.unorderedArrays=!0===t.unorderedArrays,n.unorderedSets=!1!==t.unorderedSets,n.unorderedObjects=!1!==t.unorderedObjects,n.replacer=t.replacer||void 0,n.excludeKeys=t.excludeKeys||void 0,void 0===e)throw new Error("Object argument required.");for(var r=0;r<o.length;++r)o[r].toLowerCase()===n.algorithm.toLowerCase()&&(n.algorithm=o[r]);if(-1===o.indexOf(n.algorithm))throw new Error('Algorithm "'+n.algorithm+'"  not supported. supported values: '+o.join(", "));if(-1===i.indexOf(n.encoding)&&"passthrough"!==n.algorithm)throw new Error('Encoding "'+n.encoding+'"  not supported. supported values: '+i.join(", "));return n}function a(e){if("function"==typeof e)return null!=/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(e))}function f(o,t,i){i=i||[];function u(e){return t.update?t.update(e,"utf8"):t.write(e,"utf8")}return{dispatch:function(e){return this["_"+(null===(e=o.replacer?o.replacer(e):e)?"null":typeof e)](e)},_object:function(t){var n,e=Object.prototype.toString.call(t),r=/\[object (.*)\]/i.exec(e);r=(r=r?r[1]:"unknown:["+e+"]").toLowerCase();if(0<=(e=i.indexOf(t)))return this.dispatch("[CIRCULAR:"+e+"]");if(i.push(t),void 0!==s&&s.isBuffer&&s.isBuffer(t))return u("buffer:"),u(t);if("object"===r||"function"===r||"asyncfunction"===r)return e=Object.keys(t),o.unorderedObjects&&(e=e.sort()),!1===o.respectType||a(t)||e.splice(0,0,"prototype","__proto__","constructor"),o.excludeKeys&&(e=e.filter(function(e){return!o.excludeKeys(e)})),u("object:"+e.length+":"),n=this,e.forEach(function(e){n.dispatch(e),u(":"),o.excludeValues||n.dispatch(t[e]),u(",")});if(!this["_"+r]){if(o.ignoreUnknown)return u("["+r+"]");throw new Error('Unknown object type "'+r+'"')}this["_"+r](t)},_array:function(e,t){t=void 0!==t?t:!1!==o.unorderedArrays;var n=this;if(u("array:"+e.length+":"),!t||e.length<=1)return e.forEach(function(e){return n.dispatch(e)});var r=[],t=e.map(function(e){var t=new l,n=i.slice();return f(o,t,n).dispatch(e),r=r.concat(n.slice(i.length)),t.read().toString()});return i=i.concat(r),t.sort(),this._array(t,!1)},_date:function(e){return u("date:"+e.toJSON())},_symbol:function(e){return u("symbol:"+e.toString())},_error:function(e){return u("error:"+e.toString())},_boolean:function(e){return u("bool:"+e.toString())},_string:function(e){u("string:"+e.length+":"),u(e.toString())},_function:function(e){u("fn:"),a(e)?this.dispatch("[native]"):this.dispatch(e.toString()),!1!==o.respectFunctionNames&&this.dispatch("function-name:"+String(e.name)),o.respectFunctionProperties&&this._object(e)},_number:function(e){return u("number:"+e.toString())},_xml:function(e){return u("xml:"+e.toString())},_null:function(){return u("Null")},_undefined:function(){return u("Undefined")},_regexp:function(e){return u("regex:"+e.toString())},_uint8array:function(e){return u("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray:function(e){return u("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array:function(e){return u("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array:function(e){return u("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array:function(e){return u("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array:function(e){return u("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array:function(e){return u("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array:function(e){return u("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array:function(e){return u("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer:function(e){return u("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url:function(e){return u("url:"+e.toString())},_map:function(e){u("map:");e=Array.from(e);return this._array(e,!1!==o.unorderedSets)},_set:function(e){u("set:");e=Array.from(e);return this._array(e,!1!==o.unorderedSets)},_file:function(e){return u("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob:function(){if(o.ignoreUnknown)return u("[blob]");throw Error('Hashing Blob objects is currently not supported\n(see https://github.com/puleos/object-hash/issues/26)\nUse "options.replacer" or "options.ignoreUnknown"\n')},_domwindow:function(){return u("domwindow")},_bigint:function(e){return u("bigint:"+e.toString())},_process:function(){return u("process")},_timer:function(){return u("timer")},_pipe:function(){return u("pipe")},_tcp:function(){return u("tcp")},_udp:function(){return u("udp")},_tty:function(){return u("tty")},_statwatcher:function(){return u("statwatcher")},_securecontext:function(){return u("securecontext")},_connection:function(){return u("connection")},_zlib:function(){return u("zlib")},_context:function(){return u("context")},_nodescript:function(){return u("nodescript")},_httpparser:function(){return u("httpparser")},_dataview:function(){return u("dataview")},_signal:function(){return u("signal")},_fsevent:function(){return u("fsevent")},_tlswrap:function(){return u("tlswrap")}}}function l(){return{buf:"",write:function(e){this.buf+=e},end:function(e){this.buf+=e},read:function(){return this.buf}}}m.writeToStream=function(e,t,n){return void 0===n&&(n=t,t={}),f(t=u(e,t),n).dispatch(e)}}.call(this,w("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},w("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/fake_9a5aa49d.js","/")},{buffer:3,crypto:5,lYpoI2:11}],2:[function(e,t,f){!function(e,t,n,r,o,i,u,s,a){!function(e){"use strict";var a="undefined"!=typeof Uint8Array?Uint8Array:Array,t="+".charCodeAt(0),n="/".charCodeAt(0),r="0".charCodeAt(0),o="a".charCodeAt(0),i="A".charCodeAt(0),u="-".charCodeAt(0),s="_".charCodeAt(0);function f(e){e=e.charCodeAt(0);return e===t||e===u?62:e===n||e===s?63:e<r?-1:e<r+10?e-r+26+26:e<i+26?e-i:e<o+26?e-o+26:void 0}e.toByteArray=function(e){var t,n;if(0<e.length%4)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.length,r="="===e.charAt(r-2)?2:"="===e.charAt(r-1)?1:0,o=new a(3*e.length/4-r),i=0<r?e.length-4:e.length,u=0;function s(e){o[u++]=e}for(t=0;t<i;t+=4,0)s((16711680&(n=f(e.charAt(t))<<18|f(e.charAt(t+1))<<12|f(e.charAt(t+2))<<6|f(e.charAt(t+3))))>>16),s((65280&n)>>8),s(255&n);return 2==r?s(255&(n=f(e.charAt(t))<<2|f(e.charAt(t+1))>>4)):1==r&&(s((n=f(e.charAt(t))<<10|f(e.charAt(t+1))<<4|f(e.charAt(t+2))>>2)>>8&255),s(255&n)),o},e.fromByteArray=function(e){var t,n,r,o,i=e.length%3,u="";function s(e){return"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)}for(t=0,r=e.length-i;t<r;t+=3)n=(e[t]<<16)+(e[t+1]<<8)+e[t+2],u+=s((o=n)>>18&63)+s(o>>12&63)+s(o>>6&63)+s(63&o);switch(i){case 1:u=(u+=s((n=e[e.length-1])>>2))+s(n<<4&63)+"==";break;case 2:u=(u=(u+=s((n=(e[e.length-2]<<8)+e[e.length-1])>>10))+s(n>>4&63))+s(n<<2&63)+"="}return u}}(void 0===f?this.base64js={}:f)}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/base64-js/lib/b64.js","/node_modules/gulp-browserify/node_modules/base64-js/lib")},{buffer:3,lYpoI2:11}],3:[function(O,e,H){!function(e,n,f,r,h,p,g,y,w){var a=O("base64-js"),i=O("ieee754");function f(e,t,n){if(!(this instanceof f))return new f(e,t,n);var r,o,i,u,s=typeof e;if("base64"===t&&"string"==s)for(e=(u=e).trim?u.trim():u.replace(/^\s+|\s+$/g,"");e.length%4!=0;)e+="=";if("number"==s)r=j(e);else if("string"==s)r=f.byteLength(e,t);else{if("object"!=s)throw new Error("First argument needs to be a number, array or string.");r=j(e.length)}if(f._useTypedArrays?o=f._augment(new Uint8Array(r)):((o=this).length=r,o._isBuffer=!0),f._useTypedArrays&&"number"==typeof e.byteLength)o._set(e);else if(C(u=e)||f.isBuffer(u)||u&&"object"==typeof u&&"number"==typeof u.length)for(i=0;i<r;i++)f.isBuffer(e)?o[i]=e.readUInt8(i):o[i]=e[i];else if("string"==s)o.write(e,0,t);else if("number"==s&&!f._useTypedArrays&&!n)for(i=0;i<r;i++)o[i]=0;return o}function b(e,t,n,r){return f._charsWritten=c(function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t}(t),e,n,r)}function m(e,t,n,r){return f._charsWritten=c(function(e){for(var t,n,r=[],o=0;o<e.length;o++)n=e.charCodeAt(o),t=n>>8,n=n%256,r.push(n),r.push(t);return r}(t),e,n,r)}function v(e,t,n){var r="";n=Math.min(e.length,n);for(var o=t;o<n;o++)r+=String.fromCharCode(e[o]);return r}function o(e,t,n,r){r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+1<e.length,"Trying to read beyond buffer length"));var o,r=e.length;if(!(r<=t))return n?(o=e[t],t+1<r&&(o|=e[t+1]<<8)):(o=e[t]<<8,t+1<r&&(o|=e[t+1])),o}function u(e,t,n,r){r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+3<e.length,"Trying to read beyond buffer length"));var o,r=e.length;if(!(r<=t))return n?(t+2<r&&(o=e[t+2]<<16),t+1<r&&(o|=e[t+1]<<8),o|=e[t],t+3<r&&(o+=e[t+3]<<24>>>0)):(t+1<r&&(o=e[t+1]<<16),t+2<r&&(o|=e[t+2]<<8),t+3<r&&(o|=e[t+3]),o+=e[t]<<24>>>0),o}function _(e,t,n,r){if(r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+1<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return r=o(e,t,n,!0),32768&r?-1*(65535-r+1):r}function E(e,t,n,r){if(r||(d("boolean"==typeof n,"missing or invalid endian"),d(null!=t,"missing offset"),d(t+3<e.length,"Trying to read beyond buffer length")),!(e.length<=t))return r=u(e,t,n,!0),2147483648&r?-1*(4294967295-r+1):r}function I(e,t,n,r){return r||(d("boolean"==typeof n,"missing or invalid endian"),d(t+3<e.length,"Trying to read beyond buffer length")),i.read(e,t,n,23,4)}function A(e,t,n,r){return r||(d("boolean"==typeof n,"missing or invalid endian"),d(t+7<e.length,"Trying to read beyond buffer length")),i.read(e,t,n,52,8)}function s(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+1<e.length,"trying to write beyond buffer length"),Y(t,65535));o=e.length;if(!(o<=n))for(var i=0,u=Math.min(o-n,2);i<u;i++)e[n+i]=(t&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function l(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"trying to write beyond buffer length"),Y(t,4294967295));o=e.length;if(!(o<=n))for(var i=0,u=Math.min(o-n,4);i<u;i++)e[n+i]=t>>>8*(r?i:3-i)&255}function B(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+1<e.length,"Trying to write beyond buffer length"),F(t,32767,-32768)),e.length<=n||s(e,0<=t?t:65535+t+1,n,r,o)}function L(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"Trying to write beyond buffer length"),F(t,2147483647,-2147483648)),e.length<=n||l(e,0<=t?t:4294967295+t+1,n,r,o)}function U(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+3<e.length,"Trying to write beyond buffer length"),D(t,34028234663852886e22,-34028234663852886e22)),e.length<=n||i.write(e,t,n,r,23,4)}function x(e,t,n,r,o){o||(d(null!=t,"missing value"),d("boolean"==typeof r,"missing or invalid endian"),d(null!=n,"missing offset"),d(n+7<e.length,"Trying to write beyond buffer length"),D(t,17976931348623157e292,-17976931348623157e292)),e.length<=n||i.write(e,t,n,r,52,8)}H.Buffer=f,H.SlowBuffer=f,H.INSPECT_MAX_BYTES=50,f.poolSize=8192,f._useTypedArrays=function(){try{var e=new ArrayBuffer(0),t=new Uint8Array(e);return t.foo=function(){return 42},42===t.foo()&&"function"==typeof t.subarray}catch(e){return!1}}(),f.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.isBuffer=function(e){return!(null==e||!e._isBuffer)},f.byteLength=function(e,t){var n;switch(e+="",t||"utf8"){case"hex":n=e.length/2;break;case"utf8":case"utf-8":n=T(e).length;break;case"ascii":case"binary":case"raw":n=e.length;break;case"base64":n=M(e).length;break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":n=2*e.length;break;default:throw new Error("Unknown encoding")}return n},f.concat=function(e,t){if(d(C(e),"Usage: Buffer.concat(list, [totalLength])\nlist should be an Array."),0===e.length)return new f(0);if(1===e.length)return e[0];if("number"!=typeof t)for(o=t=0;o<e.length;o++)t+=e[o].length;for(var n=new f(t),r=0,o=0;o<e.length;o++){var i=e[o];i.copy(n,r),r+=i.length}return n},f.prototype.write=function(e,t,n,r){isFinite(t)?isFinite(n)||(r=n,n=void 0):(a=r,r=t,t=n,n=a),t=Number(t)||0;var o,i,u,s,a=this.length-t;switch((!n||a<(n=Number(n)))&&(n=a),r=String(r||"utf8").toLowerCase()){case"hex":o=function(e,t,n,r){n=Number(n)||0;var o=e.length-n;(!r||o<(r=Number(r)))&&(r=o),d((o=t.length)%2==0,"Invalid hex string"),o/2<r&&(r=o/2);for(var i=0;i<r;i++){var u=parseInt(t.substr(2*i,2),16);d(!isNaN(u),"Invalid hex string"),e[n+i]=u}return f._charsWritten=2*i,i}(this,e,t,n);break;case"utf8":case"utf-8":i=this,u=t,s=n,o=f._charsWritten=c(T(e),i,u,s);break;case"ascii":case"binary":o=b(this,e,t,n);break;case"base64":i=this,u=t,s=n,o=f._charsWritten=c(M(e),i,u,s);break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":o=m(this,e,t,n);break;default:throw new Error("Unknown encoding")}return o},f.prototype.toString=function(e,t,n){var r,o,i,u,s=this;if(e=String(e||"utf8").toLowerCase(),t=Number(t)||0,(n=void 0!==n?Number(n):s.length)===t)return"";switch(e){case"hex":r=function(e,t,n){var r=e.length;(!t||t<0)&&(t=0);(!n||n<0||r<n)&&(n=r);for(var o="",i=t;i<n;i++)o+=k(e[i]);return o}(s,t,n);break;case"utf8":case"utf-8":r=function(e,t,n){var r="",o="";n=Math.min(e.length,n);for(var i=t;i<n;i++)e[i]<=127?(r+=N(o)+String.fromCharCode(e[i]),o=""):o+="%"+e[i].toString(16);return r+N(o)}(s,t,n);break;case"ascii":case"binary":r=v(s,t,n);break;case"base64":o=s,u=n,r=0===(i=t)&&u===o.length?a.fromByteArray(o):a.fromByteArray(o.slice(i,u));break;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=function(e,t,n){for(var r=e.slice(t,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}(s,t,n);break;default:throw new Error("Unknown encoding")}return r},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},f.prototype.copy=function(e,t,n,r){if(t=t||0,(r=r||0===r?r:this.length)!==(n=n||0)&&0!==e.length&&0!==this.length){d(n<=r,"sourceEnd < sourceStart"),d(0<=t&&t<e.length,"targetStart out of bounds"),d(0<=n&&n<this.length,"sourceStart out of bounds"),d(0<=r&&r<=this.length,"sourceEnd out of bounds"),r>this.length&&(r=this.length);var o=(r=e.length-t<r-n?e.length-t+n:r)-n;if(o<100||!f._useTypedArrays)for(var i=0;i<o;i++)e[i+t]=this[i+n];else e._set(this.subarray(n,n+o),t)}},f.prototype.slice=function(e,t){var n=this.length;if(e=S(e,n,0),t=S(t,n,n),f._useTypedArrays)return f._augment(this.subarray(e,t));for(var r=t-e,o=new f(r,void 0,!0),i=0;i<r;i++)o[i]=this[i+e];return o},f.prototype.get=function(e){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(e)},f.prototype.set=function(e,t){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(e,t)},f.prototype.readUInt8=function(e,t){if(t||(d(null!=e,"missing offset"),d(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return this[e]},f.prototype.readUInt16LE=function(e,t){return o(this,e,!0,t)},f.prototype.readUInt16BE=function(e,t){return o(this,e,!1,t)},f.prototype.readUInt32LE=function(e,t){return u(this,e,!0,t)},f.prototype.readUInt32BE=function(e,t){return u(this,e,!1,t)},f.prototype.readInt8=function(e,t){if(t||(d(null!=e,"missing offset"),d(e<this.length,"Trying to read beyond buffer length")),!(e>=this.length))return 128&this[e]?-1*(255-this[e]+1):this[e]},f.prototype.readInt16LE=function(e,t){return _(this,e,!0,t)},f.prototype.readInt16BE=function(e,t){return _(this,e,!1,t)},f.prototype.readInt32LE=function(e,t){return E(this,e,!0,t)},f.prototype.readInt32BE=function(e,t){return E(this,e,!1,t)},f.prototype.readFloatLE=function(e,t){return I(this,e,!0,t)},f.prototype.readFloatBE=function(e,t){return I(this,e,!1,t)},f.prototype.readDoubleLE=function(e,t){return A(this,e,!0,t)},f.prototype.readDoubleBE=function(e,t){return A(this,e,!1,t)},f.prototype.writeUInt8=function(e,t,n){n||(d(null!=e,"missing value"),d(null!=t,"missing offset"),d(t<this.length,"trying to write beyond buffer length"),Y(e,255)),t>=this.length||(this[t]=e)},f.prototype.writeUInt16LE=function(e,t,n){s(this,e,t,!0,n)},f.prototype.writeUInt16BE=function(e,t,n){s(this,e,t,!1,n)},f.prototype.writeUInt32LE=function(e,t,n){l(this,e,t,!0,n)},f.prototype.writeUInt32BE=function(e,t,n){l(this,e,t,!1,n)},f.prototype.writeInt8=function(e,t,n){n||(d(null!=e,"missing value"),d(null!=t,"missing offset"),d(t<this.length,"Trying to write beyond buffer length"),F(e,127,-128)),t>=this.length||(0<=e?this.writeUInt8(e,t,n):this.writeUInt8(255+e+1,t,n))},f.prototype.writeInt16LE=function(e,t,n){B(this,e,t,!0,n)},f.prototype.writeInt16BE=function(e,t,n){B(this,e,t,!1,n)},f.prototype.writeInt32LE=function(e,t,n){L(this,e,t,!0,n)},f.prototype.writeInt32BE=function(e,t,n){L(this,e,t,!1,n)},f.prototype.writeFloatLE=function(e,t,n){U(this,e,t,!0,n)},f.prototype.writeFloatBE=function(e,t,n){U(this,e,t,!1,n)},f.prototype.writeDoubleLE=function(e,t,n){x(this,e,t,!0,n)},f.prototype.writeDoubleBE=function(e,t,n){x(this,e,t,!1,n)},f.prototype.fill=function(e,t,n){if(t=t||0,n=n||this.length,d("number"==typeof(e="string"==typeof(e=e||0)?e.charCodeAt(0):e)&&!isNaN(e),"value is not a number"),d(t<=n,"end < start"),n!==t&&0!==this.length){d(0<=t&&t<this.length,"start out of bounds"),d(0<=n&&n<=this.length,"end out of bounds");for(var r=t;r<n;r++)this[r]=e}},f.prototype.inspect=function(){for(var e=[],t=this.length,n=0;n<t;n++)if(e[n]=k(this[n]),n===H.INSPECT_MAX_BYTES){e[n+1]="...";break}return"<Buffer "+e.join(" ")+">"},f.prototype.toArrayBuffer=function(){if("undefined"==typeof Uint8Array)throw new Error("Buffer.toArrayBuffer not supported in this browser");if(f._useTypedArrays)return new f(this).buffer;for(var e=new Uint8Array(this.length),t=0,n=e.length;t<n;t+=1)e[t]=this[t];return e.buffer};var t=f.prototype;function S(e,t,n){return"number"!=typeof e?n:t<=(e=~~e)?t:0<=e||0<=(e+=t)?e:0}function j(e){return(e=~~Math.ceil(+e))<0?0:e}function C(e){return(Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)})(e)}function k(e){return e<16?"0"+e.toString(16):e.toString(16)}function T(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<=127)t.push(e.charCodeAt(n));else for(var o=n,i=(55296<=r&&r<=57343&&n++,encodeURIComponent(e.slice(o,n+1)).substr(1).split("%")),u=0;u<i.length;u++)t.push(parseInt(i[u],16))}return t}function M(e){return a.toByteArray(e)}function c(e,t,n,r){for(var o=0;o<r&&!(o+n>=t.length||o>=e.length);o++)t[o+n]=e[o];return o}function N(e){try{return decodeURIComponent(e)}catch(e){return String.fromCharCode(65533)}}function Y(e,t){d("number"==typeof e,"cannot write a non-number as a number"),d(0<=e,"specified a negative value for writing an unsigned value"),d(e<=t,"value is larger than maximum value for type"),d(Math.floor(e)===e,"value has a fractional component")}function F(e,t,n){d("number"==typeof e,"cannot write a non-number as a number"),d(e<=t,"value larger than maximum allowed value"),d(n<=e,"value smaller than minimum allowed value"),d(Math.floor(e)===e,"value has a fractional component")}function D(e,t,n){d("number"==typeof e,"cannot write a non-number as a number"),d(e<=t,"value larger than maximum allowed value"),d(n<=e,"value smaller than minimum allowed value")}function d(e,t){if(!e)throw new Error(t||"Failed assertion")}f._augment=function(e){return e._isBuffer=!0,e._get=e.get,e._set=e.set,e.get=t.get,e.set=t.set,e.write=t.write,e.toString=t.toString,e.toLocaleString=t.toString,e.toJSON=t.toJSON,e.copy=t.copy,e.slice=t.slice,e.readUInt8=t.readUInt8,e.readUInt16LE=t.readUInt16LE,e.readUInt16BE=t.readUInt16BE,e.readUInt32LE=t.readUInt32LE,e.readUInt32BE=t.readUInt32BE,e.readInt8=t.readInt8,e.readInt16LE=t.readInt16LE,e.readInt16BE=t.readInt16BE,e.readInt32LE=t.readInt32LE,e.readInt32BE=t.readInt32BE,e.readFloatLE=t.readFloatLE,e.readFloatBE=t.readFloatBE,e.readDoubleLE=t.readDoubleLE,e.readDoubleBE=t.readDoubleBE,e.writeUInt8=t.writeUInt8,e.writeUInt16LE=t.writeUInt16LE,e.writeUInt16BE=t.writeUInt16BE,e.writeUInt32LE=t.writeUInt32LE,e.writeUInt32BE=t.writeUInt32BE,e.writeInt8=t.writeInt8,e.writeInt16LE=t.writeInt16LE,e.writeInt16BE=t.writeInt16BE,e.writeInt32LE=t.writeInt32LE,e.writeInt32BE=t.writeInt32BE,e.writeFloatLE=t.writeFloatLE,e.writeFloatBE=t.writeFloatBE,e.writeDoubleLE=t.writeDoubleLE,e.writeDoubleBE=t.writeDoubleBE,e.fill=t.fill,e.inspect=t.inspect,e.toArrayBuffer=t.toArrayBuffer,e}}.call(this,O("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},O("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/buffer/index.js","/node_modules/gulp-browserify/node_modules/buffer")},{"base64-js":2,buffer:3,ieee754:10,lYpoI2:11}],4:[function(c,d,e){!function(e,t,a,n,r,o,i,u,s){var a=c("buffer").Buffer,f=4,l=new a(f);l.fill(0);d.exports={hash:function(e,t,n,r){for(var o=t(function(e,t){e.length%f!=0&&(n=e.length+(f-e.length%f),e=a.concat([e,l],n));for(var n,r=[],o=t?e.readInt32BE:e.readInt32LE,i=0;i<e.length;i+=f)r.push(o.call(e,i));return r}(e=a.isBuffer(e)?e:new a(e),r),8*e.length),t=r,i=new a(n),u=t?i.writeInt32BE:i.writeInt32LE,s=0;s<o.length;s++)u.call(i,o[s],4*s,!0);return i}}}.call(this,c("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/helpers.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],5:[function(v,e,_){!function(l,c,u,d,h,p,g,y,w){var u=v("buffer").Buffer,e=v("./sha"),t=v("./sha256"),n=v("./rng"),b={sha1:e,sha256:t,md5:v("./md5")},s=64,a=new u(s);function r(e,n){var r=b[e=e||"sha1"],o=[];return r||i("algorithm:",e,"is not yet supported"),{update:function(e){return u.isBuffer(e)||(e=new u(e)),o.push(e),e.length,this},digest:function(e){var t=u.concat(o),t=n?function(e,t,n){u.isBuffer(t)||(t=new u(t)),u.isBuffer(n)||(n=new u(n)),t.length>s?t=e(t):t.length<s&&(t=u.concat([t,a],s));for(var r=new u(s),o=new u(s),i=0;i<s;i++)r[i]=54^t[i],o[i]=92^t[i];return n=e(u.concat([r,n])),e(u.concat([o,n]))}(r,n,t):r(t);return o=null,e?t.toString(e):t}}}function i(){var e=[].slice.call(arguments).join(" ");throw new Error([e,"we accept pull requests","http://github.com/dominictarr/crypto-browserify"].join("\n"))}a.fill(0),_.createHash=function(e){return r(e)},_.createHmac=r,_.randomBytes=function(e,t){if(!t||!t.call)return new u(n(e));try{t.call(this,void 0,new u(n(e)))}catch(e){t(e)}};var o,f=["createCredentials","createCipher","createCipheriv","createDecipher","createDecipheriv","createSign","createVerify","createDiffieHellman","pbkdf2"],m=function(e){_[e]=function(){i("sorry,",e,"is not implemented yet")}};for(o in f)m(f[o],o)}.call(this,v("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},v("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/index.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./md5":6,"./rng":7,"./sha":8,"./sha256":9,buffer:3,lYpoI2:11}],6:[function(w,b,e){!function(e,r,o,i,u,a,f,l,y){var t=w("./helpers");function n(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var n=1732584193,r=-271733879,o=-1732584194,i=271733878,u=0;u<e.length;u+=16){var s=n,a=r,f=o,l=i,n=c(n,r,o,i,e[u+0],7,-680876936),i=c(i,n,r,o,e[u+1],12,-389564586),o=c(o,i,n,r,e[u+2],17,606105819),r=c(r,o,i,n,e[u+3],22,-1044525330);n=c(n,r,o,i,e[u+4],7,-176418897),i=c(i,n,r,o,e[u+5],12,1200080426),o=c(o,i,n,r,e[u+6],17,-1473231341),r=c(r,o,i,n,e[u+7],22,-45705983),n=c(n,r,o,i,e[u+8],7,1770035416),i=c(i,n,r,o,e[u+9],12,-1958414417),o=c(o,i,n,r,e[u+10],17,-42063),r=c(r,o,i,n,e[u+11],22,-1990404162),n=c(n,r,o,i,e[u+12],7,1804603682),i=c(i,n,r,o,e[u+13],12,-40341101),o=c(o,i,n,r,e[u+14],17,-1502002290),n=d(n,r=c(r,o,i,n,e[u+15],22,1236535329),o,i,e[u+1],5,-165796510),i=d(i,n,r,o,e[u+6],9,-1069501632),o=d(o,i,n,r,e[u+11],14,643717713),r=d(r,o,i,n,e[u+0],20,-373897302),n=d(n,r,o,i,e[u+5],5,-701558691),i=d(i,n,r,o,e[u+10],9,38016083),o=d(o,i,n,r,e[u+15],14,-660478335),r=d(r,o,i,n,e[u+4],20,-405537848),n=d(n,r,o,i,e[u+9],5,568446438),i=d(i,n,r,o,e[u+14],9,-1019803690),o=d(o,i,n,r,e[u+3],14,-187363961),r=d(r,o,i,n,e[u+8],20,1163531501),n=d(n,r,o,i,e[u+13],5,-1444681467),i=d(i,n,r,o,e[u+2],9,-51403784),o=d(o,i,n,r,e[u+7],14,1735328473),n=h(n,r=d(r,o,i,n,e[u+12],20,-1926607734),o,i,e[u+5],4,-378558),i=h(i,n,r,o,e[u+8],11,-2022574463),o=h(o,i,n,r,e[u+11],16,1839030562),r=h(r,o,i,n,e[u+14],23,-35309556),n=h(n,r,o,i,e[u+1],4,-1530992060),i=h(i,n,r,o,e[u+4],11,1272893353),o=h(o,i,n,r,e[u+7],16,-155497632),r=h(r,o,i,n,e[u+10],23,-1094730640),n=h(n,r,o,i,e[u+13],4,681279174),i=h(i,n,r,o,e[u+0],11,-358537222),o=h(o,i,n,r,e[u+3],16,-722521979),r=h(r,o,i,n,e[u+6],23,76029189),n=h(n,r,o,i,e[u+9],4,-640364487),i=h(i,n,r,o,e[u+12],11,-421815835),o=h(o,i,n,r,e[u+15],16,530742520),n=p(n,r=h(r,o,i,n,e[u+2],23,-995338651),o,i,e[u+0],6,-198630844),i=p(i,n,r,o,e[u+7],10,1126891415),o=p(o,i,n,r,e[u+14],15,-1416354905),r=p(r,o,i,n,e[u+5],21,-57434055),n=p(n,r,o,i,e[u+12],6,1700485571),i=p(i,n,r,o,e[u+3],10,-1894986606),o=p(o,i,n,r,e[u+10],15,-1051523),r=p(r,o,i,n,e[u+1],21,-2054922799),n=p(n,r,o,i,e[u+8],6,1873313359),i=p(i,n,r,o,e[u+15],10,-30611744),o=p(o,i,n,r,e[u+6],15,-1560198380),r=p(r,o,i,n,e[u+13],21,1309151649),n=p(n,r,o,i,e[u+4],6,-145523070),i=p(i,n,r,o,e[u+11],10,-1120210379),o=p(o,i,n,r,e[u+2],15,718787259),r=p(r,o,i,n,e[u+9],21,-343485551),n=g(n,s),r=g(r,a),o=g(o,f),i=g(i,l)}return Array(n,r,o,i)}function s(e,t,n,r,o,i){return g((t=g(g(t,e),g(r,i)))<<o|t>>>32-o,n)}function c(e,t,n,r,o,i,u){return s(t&n|~t&r,e,t,o,i,u)}function d(e,t,n,r,o,i,u){return s(t&r|n&~r,e,t,o,i,u)}function h(e,t,n,r,o,i,u){return s(t^n^r,e,t,o,i,u)}function p(e,t,n,r,o,i,u){return s(n^(t|~r),e,t,o,i,u)}function g(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}b.exports=function(e){return t.hash(e,n,16)}}.call(this,w("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},w("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/md5.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],7:[function(e,l,t){!function(e,t,n,r,o,i,u,s,f){var a;l.exports=a||function(e){for(var t,n=new Array(e),r=0;r<e;r++)0==(3&r)&&(t=4294967296*Math.random()),n[r]=t>>>((3&r)<<3)&255;return n}}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/rng.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{buffer:3,lYpoI2:11}],8:[function(c,d,e){!function(e,t,n,r,o,s,a,f,l){var i=c("./helpers");function u(l,c){l[c>>5]|=128<<24-c%32,l[15+(c+64>>9<<4)]=c;for(var e,t,n,r=Array(80),o=1732584193,i=-271733879,u=-1732584194,s=271733878,d=-1009589776,h=0;h<l.length;h+=16){for(var p=o,g=i,y=u,w=s,b=d,a=0;a<80;a++){r[a]=a<16?l[h+a]:v(r[a-3]^r[a-8]^r[a-14]^r[a-16],1);var f=m(m(v(o,5),(f=i,t=u,n=s,(e=a)<20?f&t|~f&n:!(e<40)&&e<60?f&t|f&n|t&n:f^t^n)),m(m(d,r[a]),(e=a)<20?1518500249:e<40?1859775393:e<60?-1894007588:-899497514)),d=s,s=u,u=v(i,30),i=o,o=f}o=m(o,p),i=m(i,g),u=m(u,y),s=m(s,w),d=m(d,b)}return Array(o,i,u,s,d)}function m(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function v(e,t){return e<<t|e>>>32-t}d.exports=function(e){return i.hash(e,u,20,!0)}}.call(this,c("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],9:[function(c,d,e){!function(e,t,n,r,u,s,a,f,l){function b(e,t){var n=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(n>>16)<<16|65535&n}function o(e,l){var c,d=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298),t=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225),n=new Array(64);e[l>>5]|=128<<24-l%32,e[15+(l+64>>9<<4)]=l;for(var r,o,h=0;h<e.length;h+=16){for(var i=t[0],u=t[1],s=t[2],p=t[3],a=t[4],g=t[5],y=t[6],w=t[7],f=0;f<64;f++)n[f]=f<16?e[f+h]:b(b(b((o=n[f-2],m(o,17)^m(o,19)^v(o,10)),n[f-7]),(o=n[f-15],m(o,7)^m(o,18)^v(o,3))),n[f-16]),c=b(b(b(b(w,m(o=a,6)^m(o,11)^m(o,25)),a&g^~a&y),d[f]),n[f]),r=b(m(r=i,2)^m(r,13)^m(r,22),i&u^i&s^u&s),w=y,y=g,g=a,a=b(p,c),p=s,s=u,u=i,i=b(c,r);t[0]=b(i,t[0]),t[1]=b(u,t[1]),t[2]=b(s,t[2]),t[3]=b(p,t[3]),t[4]=b(a,t[4]),t[5]=b(g,t[5]),t[6]=b(y,t[6]),t[7]=b(w,t[7])}return t}var i=c("./helpers"),m=function(e,t){return e>>>t|e<<32-t},v=function(e,t){return e>>>t};d.exports=function(e){return i.hash(e,o,32,!0)}}.call(this,c("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},c("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/crypto-browserify/sha256.js","/node_modules/gulp-browserify/node_modules/crypto-browserify")},{"./helpers":4,buffer:3,lYpoI2:11}],10:[function(e,t,f){!function(e,t,n,r,o,i,u,s,a){f.read=function(e,t,n,r,o){var i,u,l=8*o-r-1,c=(1<<l)-1,d=c>>1,s=-7,a=n?o-1:0,f=n?-1:1,o=e[t+a];for(a+=f,i=o&(1<<-s)-1,o>>=-s,s+=l;0<s;i=256*i+e[t+a],a+=f,s-=8);for(u=i&(1<<-s)-1,i>>=-s,s+=r;0<s;u=256*u+e[t+a],a+=f,s-=8);if(0===i)i=1-d;else{if(i===c)return u?NaN:1/0*(o?-1:1);u+=Math.pow(2,r),i-=d}return(o?-1:1)*u*Math.pow(2,i-r)},f.write=function(e,t,l,n,r,c){var o,i,u=8*c-r-1,s=(1<<u)-1,a=s>>1,d=23===r?Math.pow(2,-24)-Math.pow(2,-77):0,f=n?0:c-1,h=n?1:-1,c=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(i=isNaN(t)?1:0,o=s):(o=Math.floor(Math.log(t)/Math.LN2),t*(n=Math.pow(2,-o))<1&&(o--,n*=2),2<=(t+=1<=o+a?d/n:d*Math.pow(2,1-a))*n&&(o++,n/=2),s<=o+a?(i=0,o=s):1<=o+a?(i=(t*n-1)*Math.pow(2,r),o+=a):(i=t*Math.pow(2,a-1)*Math.pow(2,r),o=0));8<=r;e[l+f]=255&i,f+=h,i/=256,r-=8);for(o=o<<r|i,u+=r;0<u;e[l+f]=255&o,f+=h,o/=256,u-=8);e[l+f-h]|=128*c}}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/ieee754/index.js","/node_modules/gulp-browserify/node_modules/ieee754")},{buffer:3,lYpoI2:11}],11:[function(e,h,t){!function(e,t,n,r,o,f,l,c,d){var i,u,s;function a(){}(e=h.exports={}).nextTick=(u="undefined"!=typeof window&&window.setImmediate,s="undefined"!=typeof window&&window.postMessage&&window.addEventListener,u?function(e){return window.setImmediate(e)}:s?(i=[],window.addEventListener("message",function(e){var t=e.source;t!==window&&null!==t||"process-tick"!==e.data||(e.stopPropagation(),0<i.length&&i.shift()())},!0),function(e){i.push(e),window.postMessage("process-tick","*")}):function(e){setTimeout(e,0)}),e.title="browser",e.browser=!0,e.env={},e.argv=[],e.on=a,e.addListener=a,e.once=a,e.off=a,e.removeListener=a,e.removeAllListeners=a,e.emit=a,e.binding=function(e){throw new Error("process.binding is not supported")},e.cwd=function(){return"/"},e.chdir=function(e){throw new Error("process.chdir is not supported")}}.call(this,e("lYpoI2"),"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},e("buffer").Buffer,arguments[3],arguments[4],arguments[5],arguments[6],"/node_modules/gulp-browserify/node_modules/process/browser.js","/node_modules/gulp-browserify/node_modules/process")},{buffer:3,lYpoI2:11}]},{},[1])(1)});

/***/ }),

/***/ "./node_modules/purify-ts/Either.js":
/*!******************************************!*\
  !*** ./node_modules/purify-ts/Either.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Right = exports.Left = exports.Either = void 0;
var Maybe_1 = __webpack_require__(/*! ./Maybe */ "./node_modules/purify-ts/Maybe.js");
exports.Either = {
    of: function (value) {
        return right(value);
    },
    lefts: function (list) {
        var e_1, _a;
        var result = [];
        try {
            for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var x = list_1_1.value;
                if (x.isLeft()) {
                    result.push(x.extract());
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    },
    rights: function (list) {
        var e_2, _a;
        var result = [];
        try {
            for (var list_2 = __values(list), list_2_1 = list_2.next(); !list_2_1.done; list_2_1 = list_2.next()) {
                var x = list_2_1.value;
                if (x.isRight()) {
                    result.push(x.extract());
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (list_2_1 && !list_2_1.done && (_a = list_2.return)) _a.call(list_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return result;
    },
    encase: function (throwsF) {
        try {
            return right(throwsF());
        }
        catch (e) {
            return left(e);
        }
    },
    sequence: function (eithers) {
        var e_3, _a;
        var res = [];
        try {
            for (var eithers_1 = __values(eithers), eithers_1_1 = eithers_1.next(); !eithers_1_1.done; eithers_1_1 = eithers_1.next()) {
                var e = eithers_1_1.value;
                if (e.isLeft()) {
                    return e;
                }
                res.push(e.extract());
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (eithers_1_1 && !eithers_1_1.done && (_a = eithers_1.return)) _a.call(eithers_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return right(res);
    },
    isEither: function (x) {
        return x instanceof Left || x instanceof Right;
    },
    'fantasy-land/of': function (value) {
        return exports.Either.of(value);
    }
};
var Right = /** @class */ (function () {
    function Right(__value) {
        this.__value = __value;
        this._ = 'R';
        this['fantasy-land/bimap'] = this.bimap;
        this['fantasy-land/map'] = this.map;
        this['fantasy-land/ap'] = this.ap;
        this['fantasy-land/equals'] = this.equals;
        this['fantasy-land/chain'] = this.chain;
        this['fantasy-land/alt'] = this.alt;
        this['fantasy-land/reduce'] = this.reduce;
        this['fantasy-land/extend'] = this.extend;
    }
    Right.prototype.isLeft = function () {
        return false;
    };
    Right.prototype.isRight = function () {
        return true;
    };
    Right.prototype.toJSON = function () {
        return this.__value;
    };
    Right.prototype.inspect = function () {
        return "Right(" + JSON.stringify(this.__value) + ")";
    };
    Right.prototype.toString = function () {
        return this.inspect();
    };
    Right.prototype.bimap = function (_, g) {
        return right(g(this.__value));
    };
    Right.prototype.map = function (f) {
        return right(f(this.__value));
    };
    Right.prototype.mapLeft = function (_) {
        return this;
    };
    Right.prototype.ap = function (other) {
        return other.isRight() ? this.map(other.extract()) : other;
    };
    Right.prototype.equals = function (other) {
        return other.isRight() ? this.__value === other.extract() : false;
    };
    Right.prototype.chain = function (f) {
        return f(this.__value);
    };
    Right.prototype.chainLeft = function (_) {
        return this;
    };
    Right.prototype.join = function () {
        return this.__value;
    };
    Right.prototype.alt = function (_) {
        return this;
    };
    Right.prototype.altLazy = function (_) {
        return this;
    };
    Right.prototype.reduce = function (reducer, initialValue) {
        return reducer(initialValue, this.__value);
    };
    Right.prototype.extend = function (f) {
        return right(f(this));
    };
    Right.prototype.unsafeCoerce = function () {
        return this.__value;
    };
    Right.prototype.caseOf = function (patterns) {
        return '_' in patterns ? patterns._() : patterns.Right(this.__value);
    };
    Right.prototype.leftOrDefault = function (defaultValue) {
        return defaultValue;
    };
    Right.prototype.orDefault = function (_) {
        return this.__value;
    };
    Right.prototype.orDefaultLazy = function (_) {
        return this.__value;
    };
    Right.prototype.leftOrDefaultLazy = function (getDefaultValue) {
        return getDefaultValue();
    };
    Right.prototype.ifLeft = function (_) {
        return this;
    };
    Right.prototype.ifRight = function (effect) {
        return effect(this.__value), this;
    };
    Right.prototype.toMaybe = function () {
        return Maybe_1.Just(this.__value);
    };
    Right.prototype.leftToMaybe = function () {
        return Maybe_1.Nothing;
    };
    Right.prototype.either = function (_, ifRight) {
        return ifRight(this.__value);
    };
    Right.prototype.extract = function () {
        return this.__value;
    };
    Right.prototype.swap = function () {
        return left(this.__value);
    };
    return Right;
}());
Right.prototype.constructor = exports.Either;
var Left = /** @class */ (function () {
    function Left(__value) {
        this.__value = __value;
        this._ = 'L';
        this['fantasy-land/bimap'] = this.bimap;
        this['fantasy-land/map'] = this.map;
        this['fantasy-land/ap'] = this.ap;
        this['fantasy-land/equals'] = this.equals;
        this['fantasy-land/chain'] = this.chain;
        this['fantasy-land/alt'] = this.alt;
        this['fantasy-land/reduce'] = this.reduce;
        this['fantasy-land/extend'] = this.extend;
    }
    Left.prototype.isLeft = function () {
        return true;
    };
    Left.prototype.isRight = function () {
        return false;
    };
    Left.prototype.toJSON = function () {
        return this.__value;
    };
    Left.prototype.inspect = function () {
        return "Left(" + JSON.stringify(this.__value) + ")";
    };
    Left.prototype.toString = function () {
        return this.inspect();
    };
    Left.prototype.bimap = function (f, _) {
        return left(f(this.__value));
    };
    Left.prototype.map = function (_) {
        return this;
    };
    Left.prototype.mapLeft = function (f) {
        return left(f(this.__value));
    };
    Left.prototype.ap = function (other) {
        return other.isLeft() ? other : this;
    };
    Left.prototype.equals = function (other) {
        return other.isLeft() ? other.extract() === this.__value : false;
    };
    Left.prototype.chain = function (_) {
        return this;
    };
    Left.prototype.chainLeft = function (f) {
        return f(this.__value);
    };
    Left.prototype.join = function () {
        return this;
    };
    Left.prototype.alt = function (other) {
        return other;
    };
    Left.prototype.altLazy = function (other) {
        return other();
    };
    Left.prototype.reduce = function (_, initialValue) {
        return initialValue;
    };
    Left.prototype.extend = function (_) {
        return this;
    };
    Left.prototype.unsafeCoerce = function () {
        if (this.__value instanceof Error) {
            throw this.__value;
        }
        throw new Error('Either#unsafeCoerce was ran on a Left');
    };
    Left.prototype.caseOf = function (patterns) {
        return '_' in patterns ? patterns._() : patterns.Left(this.__value);
    };
    Left.prototype.leftOrDefault = function (_) {
        return this.__value;
    };
    Left.prototype.orDefault = function (defaultValue) {
        return defaultValue;
    };
    Left.prototype.orDefaultLazy = function (getDefaultValue) {
        return getDefaultValue();
    };
    Left.prototype.leftOrDefaultLazy = function (_) {
        return this.__value;
    };
    Left.prototype.ifLeft = function (effect) {
        return effect(this.__value), this;
    };
    Left.prototype.ifRight = function (_) {
        return this;
    };
    Left.prototype.toMaybe = function () {
        return Maybe_1.Nothing;
    };
    Left.prototype.leftToMaybe = function () {
        return Maybe_1.Just(this.__value);
    };
    Left.prototype.either = function (ifLeft, _) {
        return ifLeft(this.__value);
    };
    Left.prototype.extract = function () {
        return this.__value;
    };
    Left.prototype.swap = function () {
        return right(this.__value);
    };
    return Left;
}());
Left.prototype.constructor = exports.Either;
var left = function (value) { return new Left(value); };
exports.Left = left;
var right = function (value) { return new Right(value); };
exports.Right = right;


/***/ }),

/***/ "./node_modules/purify-ts/Maybe.js":
/*!*****************************************!*\
  !*** ./node_modules/purify-ts/Maybe.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Nothing = exports.Just = exports.Maybe = void 0;
var Either_1 = __webpack_require__(/*! ./Either */ "./node_modules/purify-ts/Either.js");
exports.Maybe = {
    of: function (value) {
        return just(value);
    },
    empty: function () {
        return nothing;
    },
    zero: function () {
        return nothing;
    },
    fromNullable: function (value) {
        return value == null ? nothing : just(value);
    },
    fromFalsy: function (value) {
        return value ? just(value) : nothing;
    },
    fromPredicate: function (pred, value) {
        switch (arguments.length) {
            case 1:
                return function (value) { return exports.Maybe.fromPredicate(pred, value); };
            default:
                return pred(value) ? just(value) : nothing;
        }
    },
    mapMaybe: function (f, list) {
        switch (arguments.length) {
            case 1:
                return function (list) { return exports.Maybe.mapMaybe(f, list); };
            default:
                return exports.Maybe.catMaybes(list.map(f));
        }
    },
    catMaybes: function (list) {
        var e_1, _a;
        var res = [];
        try {
            for (var list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var e = list_1_1.value;
                if (e.isJust()) {
                    res.push(e.extract());
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return res;
    },
    encase: function (thunk) {
        try {
            return just(thunk());
        }
        catch (_a) {
            return nothing;
        }
    },
    isMaybe: function (x) {
        return x instanceof Just || x instanceof Nothing;
    },
    sequence: function (maybes) {
        var e_2, _a;
        var res = [];
        try {
            for (var maybes_1 = __values(maybes), maybes_1_1 = maybes_1.next(); !maybes_1_1.done; maybes_1_1 = maybes_1.next()) {
                var m = maybes_1_1.value;
                if (m.isJust()) {
                    res.push(m.extract());
                }
                else {
                    return nothing;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (maybes_1_1 && !maybes_1_1.done && (_a = maybes_1.return)) _a.call(maybes_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return just(res);
    },
    'fantasy-land/of': function (value) {
        return this.of(value);
    },
    'fantasy-land/empty': function () {
        return this.empty();
    },
    'fantasy-land/zero': function () {
        return this.zero();
    }
};
var Just = /** @class */ (function () {
    function Just(__value) {
        this.__value = __value;
        this['fantasy-land/equals'] = this.equals;
        this['fantasy-land/map'] = this.map;
        this['fantasy-land/ap'] = this.ap;
        this['fantasy-land/alt'] = this.alt;
        this['fantasy-land/chain'] = this.chain;
        this['fantasy-land/reduce'] = this.reduce;
        this['fantasy-land/extend'] = this.extend;
        this['fantasy-land/filter'] = this.filter;
    }
    Just.prototype.isJust = function () {
        return true;
    };
    Just.prototype.isNothing = function () {
        return false;
    };
    Just.prototype.inspect = function () {
        return "Just(" + JSON.stringify(this.__value) + ")";
    };
    Just.prototype.toString = function () {
        return this.inspect();
    };
    Just.prototype.toJSON = function () {
        return this.__value;
    };
    Just.prototype.equals = function (other) {
        return this.extract() === other.extract();
    };
    Just.prototype.map = function (f) {
        return just(f(this.__value));
    };
    Just.prototype.ap = function (maybeF) {
        return maybeF.isJust() ? this.map(maybeF.extract()) : nothing;
    };
    Just.prototype.alt = function (_) {
        return this;
    };
    Just.prototype.altLazy = function (_) {
        return this;
    };
    Just.prototype.chain = function (f) {
        return f(this.__value);
    };
    Just.prototype.chainNullable = function (f) {
        return exports.Maybe.fromNullable(f(this.__value));
    };
    Just.prototype.join = function () {
        return this.__value;
    };
    Just.prototype.reduce = function (reducer, initialValue) {
        return reducer(initialValue, this.__value);
    };
    Just.prototype.extend = function (f) {
        return just(f(this));
    };
    Just.prototype.unsafeCoerce = function () {
        return this.__value;
    };
    Just.prototype.caseOf = function (patterns) {
        return '_' in patterns ? patterns._() : patterns.Just(this.__value);
    };
    Just.prototype.orDefault = function (_) {
        return this.__value;
    };
    Just.prototype.orDefaultLazy = function (_) {
        return this.__value;
    };
    Just.prototype.toList = function () {
        return [this.__value];
    };
    Just.prototype.mapOrDefault = function (f, _) {
        return f(this.__value);
    };
    Just.prototype.extract = function () {
        return this.__value;
    };
    Just.prototype.extractNullable = function () {
        return this.__value;
    };
    Just.prototype.toEither = function (_) {
        return Either_1.Right(this.__value);
    };
    Just.prototype.ifJust = function (effect) {
        return effect(this.__value), this;
    };
    Just.prototype.ifNothing = function (_) {
        return this;
    };
    Just.prototype.filter = function (pred) {
        return pred(this.__value) ? just(this.__value) : nothing;
    };
    return Just;
}());
Just.prototype.constructor = exports.Maybe;
var Nothing = /** @class */ (function () {
    function Nothing() {
        this['fantasy-land/equals'] = this.equals;
        this['fantasy-land/map'] = this.map;
        this['fantasy-land/ap'] = this.ap;
        this['fantasy-land/alt'] = this.alt;
        this['fantasy-land/chain'] = this.chain;
        this['fantasy-land/reduce'] = this.reduce;
        this['fantasy-land/extend'] = this.extend;
        this['fantasy-land/filter'] = this.filter;
    }
    Nothing.prototype.isJust = function () {
        return false;
    };
    Nothing.prototype.isNothing = function () {
        return true;
    };
    Nothing.prototype.inspect = function () {
        return 'Nothing';
    };
    Nothing.prototype.toString = function () {
        return this.inspect();
    };
    Nothing.prototype.toJSON = function () {
        return this.__value;
    };
    Nothing.prototype.equals = function (other) {
        return this.extract() === other.extract();
    };
    Nothing.prototype.map = function (_) {
        return nothing;
    };
    Nothing.prototype.ap = function (_) {
        return nothing;
    };
    Nothing.prototype.alt = function (other) {
        return other;
    };
    Nothing.prototype.altLazy = function (other) {
        return other();
    };
    Nothing.prototype.chain = function (_) {
        return nothing;
    };
    Nothing.prototype.chainNullable = function (_) {
        return nothing;
    };
    Nothing.prototype.join = function () {
        return nothing;
    };
    Nothing.prototype.reduce = function (_, initialValue) {
        return initialValue;
    };
    Nothing.prototype.extend = function (_) {
        return nothing;
    };
    Nothing.prototype.unsafeCoerce = function () {
        throw new Error('Maybe#unsafeCoerce was ran on a Nothing');
    };
    Nothing.prototype.caseOf = function (patterns) {
        return '_' in patterns ? patterns._() : patterns.Nothing();
    };
    Nothing.prototype.orDefault = function (defaultValue) {
        return defaultValue;
    };
    Nothing.prototype.orDefaultLazy = function (getDefaultValue) {
        return getDefaultValue();
    };
    Nothing.prototype.toList = function () {
        return [];
    };
    Nothing.prototype.mapOrDefault = function (_, defaultValue) {
        return defaultValue;
    };
    Nothing.prototype.extract = function () {
        return undefined;
    };
    Nothing.prototype.extractNullable = function () {
        return null;
    };
    Nothing.prototype.toEither = function (left) {
        return Either_1.Left(left);
    };
    Nothing.prototype.ifJust = function (_) {
        return this;
    };
    Nothing.prototype.ifNothing = function (effect) {
        return effect(), this;
    };
    Nothing.prototype.filter = function (_) {
        return nothing;
    };
    return Nothing;
}());
Nothing.prototype.constructor = exports.Maybe;
/** Constructs a Just. Represents an optional value that exists */
var just = function (value) { return new Just(value); };
exports.Just = just;
/** Represents a missing value, you can think of it as a smart 'null' */
var nothing = new Nothing();
exports.Nothing = nothing;


/***/ }),

/***/ "./node_modules/react-device-detect/dist/lib.js":
/*!******************************************************!*\
  !*** ./node_modules/react-device-detect/dist/lib.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);

var UAParser = __webpack_require__(/*! ua-parser-js/dist/ua-parser.min */ "./node_modules/ua-parser-js/dist/ua-parser.min.js");

var ClientUAInstance = new UAParser();
var browser = ClientUAInstance.getBrowser();
var cpu = ClientUAInstance.getCPU();
var device = ClientUAInstance.getDevice();
var engine = ClientUAInstance.getEngine();
var os = ClientUAInstance.getOS();
var ua = ClientUAInstance.getUA();
var setUa = function setUa(userAgentString) {
  return ClientUAInstance.setUA(userAgentString);
};
var parseUserAgent = function parseUserAgent(userAgent) {
  if (!userAgent) {
    console.error('No userAgent string was provided');
    return;
  }

  var UserAgentInstance = new UAParser(userAgent);
  return {
    UA: UserAgentInstance,
    browser: UserAgentInstance.getBrowser(),
    cpu: UserAgentInstance.getCPU(),
    device: UserAgentInstance.getDevice(),
    engine: UserAgentInstance.getEngine(),
    os: UserAgentInstance.getOS(),
    ua: UserAgentInstance.getUA(),
    setUserAgent: function setUserAgent(userAgentString) {
      return UserAgentInstance.setUA(userAgentString);
    }
  };
};

var UAHelper = /*#__PURE__*/Object.freeze({
  ClientUAInstance: ClientUAInstance,
  browser: browser,
  cpu: cpu,
  device: device,
  engine: engine,
  os: os,
  ua: ua,
  setUa: setUa,
  parseUserAgent: parseUserAgent
});

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var DeviceTypes = {
  Mobile: 'mobile',
  Tablet: 'tablet',
  SmartTv: 'smarttv',
  Console: 'console',
  Wearable: 'wearable',
  Embedded: 'embedded',
  Browser: undefined
};
var BrowserTypes = {
  Chrome: 'Chrome',
  Firefox: 'Firefox',
  Opera: 'Opera',
  Yandex: 'Yandex',
  Safari: 'Safari',
  InternetExplorer: 'Internet Explorer',
  Edge: 'Edge',
  Chromium: 'Chromium',
  Ie: 'IE',
  MobileSafari: 'Mobile Safari',
  EdgeChromium: 'Edge Chromium',
  MIUI: 'MIUI Browser',
  SamsungBrowser: 'Samsung Browser'
};
var OsTypes = {
  IOS: 'iOS',
  Android: 'Android',
  WindowsPhone: 'Windows Phone',
  Windows: 'Windows',
  MAC_OS: 'Mac OS'
};
var InitialDeviceTypes = {
  isMobile: false,
  isTablet: false,
  isBrowser: false,
  isSmartTV: false,
  isConsole: false,
  isWearable: false
};

var checkDeviceType = function checkDeviceType(type) {
  switch (type) {
    case DeviceTypes.Mobile:
      return {
        isMobile: true
      };

    case DeviceTypes.Tablet:
      return {
        isTablet: true
      };

    case DeviceTypes.SmartTv:
      return {
        isSmartTV: true
      };

    case DeviceTypes.Console:
      return {
        isConsole: true
      };

    case DeviceTypes.Wearable:
      return {
        isWearable: true
      };

    case DeviceTypes.Browser:
      return {
        isBrowser: true
      };

    case DeviceTypes.Embedded:
      return {
        isEmbedded: true
      };

    default:
      return InitialDeviceTypes;
  }
};
var setUserAgent = function setUserAgent(userAgent) {
  return setUa(userAgent);
};
var setDefaults = function setDefaults(p) {
  var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
  return p ? p : d;
};
var getNavigatorInstance = function getNavigatorInstance() {
  if (typeof window !== 'undefined') {
    if (window.navigator || navigator) {
      return window.navigator || navigator;
    }
  }

  return false;
};
var isIOS13Check = function isIOS13Check(type) {
  var nav = getNavigatorInstance();
  return nav && nav.platform && (nav.platform.indexOf(type) !== -1 || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 && !window.MSStream);
};

var browserPayload = function browserPayload(isBrowser, browser, engine, os, ua) {
  return {
    isBrowser: isBrowser,
    browserMajorVersion: setDefaults(browser.major),
    browserFullVersion: setDefaults(browser.version),
    browserName: setDefaults(browser.name),
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var mobilePayload = function mobilePayload(type, device, os, ua) {
  return _objectSpread2({}, type, {
    vendor: setDefaults(device.vendor),
    model: setDefaults(device.model),
    os: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    ua: setDefaults(ua)
  });
};
var smartTvPayload = function smartTvPayload(isSmartTV, engine, os, ua) {
  return {
    isSmartTV: isSmartTV,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var consolePayload = function consolePayload(isConsole, engine, os, ua) {
  return {
    isConsole: isConsole,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var wearablePayload = function wearablePayload(isWearable, engine, os, ua) {
  return {
    isWearable: isWearable,
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};
var embeddedPayload = function embeddedPayload(isEmbedded, device, engine, os, ua) {
  return {
    isEmbedded: isEmbedded,
    vendor: setDefaults(device.vendor),
    model: setDefaults(device.model),
    engineName: setDefaults(engine.name),
    engineVersion: setDefaults(engine.version),
    osName: setDefaults(os.name),
    osVersion: setDefaults(os.version),
    userAgent: setDefaults(ua)
  };
};

function deviceDetect(userAgent) {
  var _ref = userAgent ? parseUserAgent(userAgent) : UAHelper,
      device = _ref.device,
      browser = _ref.browser,
      engine = _ref.engine,
      os = _ref.os,
      ua = _ref.ua;

  var type = checkDeviceType(device.type);
  var isBrowser = type.isBrowser,
      isMobile = type.isMobile,
      isTablet = type.isTablet,
      isSmartTV = type.isSmartTV,
      isConsole = type.isConsole,
      isWearable = type.isWearable,
      isEmbedded = type.isEmbedded;

  if (isBrowser) {
    return browserPayload(isBrowser, browser, engine, os, ua);
  }

  if (isSmartTV) {
    return smartTvPayload(isSmartTV, engine, os, ua);
  }

  if (isConsole) {
    return consolePayload(isConsole, engine, os, ua);
  }

  if (isMobile) {
    return mobilePayload(type, device, os, ua);
  }

  if (isTablet) {
    return mobilePayload(type, device, os, ua);
  }

  if (isWearable) {
    return wearablePayload(isWearable, engine, os, ua);
  }

  if (isEmbedded) {
    return embeddedPayload(isEmbedded, device, engine, os, ua);
  }
}

var isMobileType = function isMobileType(_ref) {
  var type = _ref.type;
  return type === DeviceTypes.Mobile;
};
var isTabletType = function isTabletType(_ref2) {
  var type = _ref2.type;
  return type === DeviceTypes.Tablet;
};
var isMobileAndTabletType = function isMobileAndTabletType(_ref3) {
  var type = _ref3.type;
  return type === DeviceTypes.Mobile || type === DeviceTypes.Tablet;
};
var isSmartTVType = function isSmartTVType(_ref4) {
  var type = _ref4.type;
  return type === DeviceTypes.SmartTv;
};
var isBrowserType = function isBrowserType(_ref5) {
  var type = _ref5.type;
  return type === DeviceTypes.Browser;
};
var isWearableType = function isWearableType(_ref6) {
  var type = _ref6.type;
  return type === DeviceTypes.Wearable;
};
var isConsoleType = function isConsoleType(_ref7) {
  var type = _ref7.type;
  return type === DeviceTypes.Console;
};
var isEmbeddedType = function isEmbeddedType(_ref8) {
  var type = _ref8.type;
  return type === DeviceTypes.Embedded;
};
var getMobileVendor = function getMobileVendor(_ref9) {
  var vendor = _ref9.vendor;
  return setDefaults(vendor);
};
var getMobileModel = function getMobileModel(_ref10) {
  var model = _ref10.model;
  return setDefaults(model);
};
var getDeviceType = function getDeviceType(_ref11) {
  var type = _ref11.type;
  return setDefaults(type, 'browser');
}; // os types

var isAndroidType = function isAndroidType(_ref12) {
  var name = _ref12.name;
  return name === OsTypes.Android;
};
var isWindowsType = function isWindowsType(_ref13) {
  var name = _ref13.name;
  return name === OsTypes.Windows;
};
var isMacOsType = function isMacOsType(_ref14) {
  var name = _ref14.name;
  return name === OsTypes.MAC_OS;
};
var isWinPhoneType = function isWinPhoneType(_ref15) {
  var name = _ref15.name;
  return name === OsTypes.WindowsPhone;
};
var isIOSType = function isIOSType(_ref16) {
  var name = _ref16.name;
  return name === OsTypes.IOS;
};
var getOsVersion = function getOsVersion(_ref17) {
  var version = _ref17.version;
  return setDefaults(version);
};
var getOsName = function getOsName(_ref18) {
  var name = _ref18.name;
  return setDefaults(name);
}; // browser types

var isChromeType = function isChromeType(_ref19) {
  var name = _ref19.name;
  return name === BrowserTypes.Chrome;
};
var isFirefoxType = function isFirefoxType(_ref20) {
  var name = _ref20.name;
  return name === BrowserTypes.Firefox;
};
var isChromiumType = function isChromiumType(_ref21) {
  var name = _ref21.name;
  return name === BrowserTypes.Chromium;
};
var isEdgeType = function isEdgeType(_ref22) {
  var name = _ref22.name;
  return name === BrowserTypes.Edge;
};
var isYandexType = function isYandexType(_ref23) {
  var name = _ref23.name;
  return name === BrowserTypes.Yandex;
};
var isSafariType = function isSafariType(_ref24) {
  var name = _ref24.name;
  return name === BrowserTypes.Safari || name === BrowserTypes.MobileSafari;
};
var isMobileSafariType = function isMobileSafariType(_ref25) {
  var name = _ref25.name;
  return name === BrowserTypes.MobileSafari;
};
var isOperaType = function isOperaType(_ref26) {
  var name = _ref26.name;
  return name === BrowserTypes.Opera;
};
var isIEType = function isIEType(_ref27) {
  var name = _ref27.name;
  return name === BrowserTypes.InternetExplorer || name === BrowserTypes.Ie;
};
var isMIUIType = function isMIUIType(_ref28) {
  var name = _ref28.name;
  return name === BrowserTypes.MIUI;
};
var isSamsungBrowserType = function isSamsungBrowserType(_ref29) {
  var name = _ref29.name;
  return name === BrowserTypes.SamsungBrowser;
};
var getBrowserFullVersion = function getBrowserFullVersion(_ref30) {
  var version = _ref30.version;
  return setDefaults(version);
};
var getBrowserVersion = function getBrowserVersion(_ref31) {
  var major = _ref31.major;
  return setDefaults(major);
};
var getBrowserName = function getBrowserName(_ref32) {
  var name = _ref32.name;
  return setDefaults(name);
}; // engine types

var getEngineName = function getEngineName(_ref33) {
  var name = _ref33.name;
  return setDefaults(name);
};
var getEngineVersion = function getEngineVersion(_ref34) {
  var version = _ref34.version;
  return setDefaults(version);
};
var isElectronType = function isElectronType() {
  var nav = getNavigatorInstance();
  var ua = nav && nav.userAgent && nav.userAgent.toLowerCase();
  return typeof ua === 'string' ? /electron/.test(ua) : false;
};
var isEdgeChromiumType = function isEdgeChromiumType(ua) {
  return typeof ua === 'string' && ua.indexOf('Edg/') !== -1;
};
var getIOS13 = function getIOS13() {
  var nav = getNavigatorInstance();
  return nav && (/iPad|iPhone|iPod/.test(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints > 1) && !window.MSStream;
};
var getIPad13 = function getIPad13() {
  return isIOS13Check('iPad');
};
var getIphone13 = function getIphone13() {
  return isIOS13Check('iPhone');
};
var getIPod13 = function getIPod13() {
  return isIOS13Check('iPod');
};
var getUseragent = function getUseragent(userAg) {
  return setDefaults(userAg);
};

function buildSelectorsObject(options) {
  var _ref = options ? options : UAHelper,
      device = _ref.device,
      browser = _ref.browser,
      os = _ref.os,
      engine = _ref.engine,
      ua = _ref.ua;

  return {
    isSmartTV: isSmartTVType(device),
    isConsole: isConsoleType(device),
    isWearable: isWearableType(device),
    isEmbedded: isEmbeddedType(device),
    isMobileSafari: isMobileSafariType(browser) || getIPad13(),
    isChromium: isChromiumType(browser),
    isMobile: isMobileAndTabletType(device) || getIPad13(),
    isMobileOnly: isMobileType(device),
    isTablet: isTabletType(device) || getIPad13(),
    isBrowser: isBrowserType(device),
    isDesktop: isBrowserType(device),
    isAndroid: isAndroidType(os),
    isWinPhone: isWinPhoneType(os),
    isIOS: isIOSType(os) || getIPad13(),
    isChrome: isChromeType(browser),
    isFirefox: isFirefoxType(browser),
    isSafari: isSafariType(browser),
    isOpera: isOperaType(browser),
    isIE: isIEType(browser),
    osVersion: getOsVersion(os),
    osName: getOsName(os),
    fullBrowserVersion: getBrowserFullVersion(browser),
    browserVersion: getBrowserVersion(browser),
    browserName: getBrowserName(browser),
    mobileVendor: getMobileVendor(device),
    mobileModel: getMobileModel(device),
    engineName: getEngineName(engine),
    engineVersion: getEngineVersion(engine),
    getUA: getUseragent(ua),
    isEdge: isEdgeType(browser) || isEdgeChromiumType(ua),
    isYandex: isYandexType(browser),
    deviceType: getDeviceType(device),
    isIOS13: getIOS13(),
    isIPad13: getIPad13(),
    isIPhone13: getIphone13(),
    isIPod13: getIPod13(),
    isElectron: isElectronType(),
    isEdgeChromium: isEdgeChromiumType(ua),
    isLegacyEdge: isEdgeType(browser) && !isEdgeChromiumType(ua),
    isWindows: isWindowsType(os),
    isMacOs: isMacOsType(os),
    isMIUI: isMIUIType(browser),
    isSamsungBrowser: isSamsungBrowserType(browser)
  };
}

var isSmartTV = isSmartTVType(device);
var isConsole = isConsoleType(device);
var isWearable = isWearableType(device);
var isEmbedded = isEmbeddedType(device);
var isMobileSafari = isMobileSafariType(browser) || getIPad13();
var isChromium = isChromiumType(browser);
var isMobile = isMobileAndTabletType(device) || getIPad13();
var isMobileOnly = isMobileType(device);
var isTablet = isTabletType(device) || getIPad13();
var isBrowser = isBrowserType(device);
var isDesktop = isBrowserType(device);
var isAndroid = isAndroidType(os);
var isWinPhone = isWinPhoneType(os);
var isIOS = isIOSType(os) || getIPad13();
var isChrome = isChromeType(browser);
var isFirefox = isFirefoxType(browser);
var isSafari = isSafariType(browser);
var isOpera = isOperaType(browser);
var isIE = isIEType(browser);
var osVersion = getOsVersion(os);
var osName = getOsName(os);
var fullBrowserVersion = getBrowserFullVersion(browser);
var browserVersion = getBrowserVersion(browser);
var browserName = getBrowserName(browser);
var mobileVendor = getMobileVendor(device);
var mobileModel = getMobileModel(device);
var engineName = getEngineName(engine);
var engineVersion = getEngineVersion(engine);
var getUA = getUseragent(ua);
var isEdge = isEdgeType(browser) || isEdgeChromiumType(ua);
var isYandex = isYandexType(browser);
var deviceType = getDeviceType(device);
var isIOS13 = getIOS13();
var isIPad13 = getIPad13();
var isIPhone13 = getIphone13();
var isIPod13 = getIPod13();
var isElectron = isElectronType();
var isEdgeChromium = isEdgeChromiumType(ua);
var isLegacyEdge = isEdgeType(browser) && !isEdgeChromiumType(ua);
var isWindows = isWindowsType(os);
var isMacOs = isMacOsType(os);
var isMIUI = isMIUIType(browser);
var isSamsungBrowser = isSamsungBrowserType(browser);
var getSelectorsByUserAgent = function getSelectorsByUserAgent(userAgent) {
  if (!userAgent || typeof userAgent !== 'string') {
    console.error('No valid user agent string was provided');
    return;
  }

  var _UAHelper$parseUserAg = parseUserAgent(userAgent),
      device = _UAHelper$parseUserAg.device,
      browser = _UAHelper$parseUserAg.browser,
      os = _UAHelper$parseUserAg.os,
      engine = _UAHelper$parseUserAg.engine,
      ua = _UAHelper$parseUserAg.ua;

  return buildSelectorsObject({
    device: device,
    browser: browser,
    os: os,
    engine: engine,
    ua: ua
  });
};

var AndroidView = function AndroidView(_ref) {
  var renderWithFragment = _ref.renderWithFragment,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["renderWithFragment", "children"]);

  return isAndroid ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var BrowserView = function BrowserView(_ref2) {
  var renderWithFragment = _ref2.renderWithFragment,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["renderWithFragment", "children"]);

  return isBrowser ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var IEView = function IEView(_ref3) {
  var renderWithFragment = _ref3.renderWithFragment,
      children = _ref3.children,
      props = _objectWithoutProperties(_ref3, ["renderWithFragment", "children"]);

  return isIE ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var IOSView = function IOSView(_ref4) {
  var renderWithFragment = _ref4.renderWithFragment,
      children = _ref4.children,
      props = _objectWithoutProperties(_ref4, ["renderWithFragment", "children"]);

  return isIOS ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var MobileView = function MobileView(_ref5) {
  var renderWithFragment = _ref5.renderWithFragment,
      children = _ref5.children,
      props = _objectWithoutProperties(_ref5, ["renderWithFragment", "children"]);

  return isMobile ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var TabletView = function TabletView(_ref6) {
  var renderWithFragment = _ref6.renderWithFragment,
      children = _ref6.children,
      props = _objectWithoutProperties(_ref6, ["renderWithFragment", "children"]);

  return isTablet ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var WinPhoneView = function WinPhoneView(_ref7) {
  var renderWithFragment = _ref7.renderWithFragment,
      children = _ref7.children,
      props = _objectWithoutProperties(_ref7, ["renderWithFragment", "children"]);

  return isWinPhone ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var MobileOnlyView = function MobileOnlyView(_ref8) {
  var renderWithFragment = _ref8.renderWithFragment,
      children = _ref8.children,
      viewClassName = _ref8.viewClassName,
      style = _ref8.style,
      props = _objectWithoutProperties(_ref8, ["renderWithFragment", "children", "viewClassName", "style"]);

  return isMobileOnly ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var SmartTVView = function SmartTVView(_ref9) {
  var renderWithFragment = _ref9.renderWithFragment,
      children = _ref9.children,
      props = _objectWithoutProperties(_ref9, ["renderWithFragment", "children"]);

  return isSmartTV ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var ConsoleView = function ConsoleView(_ref10) {
  var renderWithFragment = _ref10.renderWithFragment,
      children = _ref10.children,
      props = _objectWithoutProperties(_ref10, ["renderWithFragment", "children"]);

  return isConsole ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var WearableView = function WearableView(_ref11) {
  var renderWithFragment = _ref11.renderWithFragment,
      children = _ref11.children,
      props = _objectWithoutProperties(_ref11, ["renderWithFragment", "children"]);

  return isWearable ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};
var CustomView = function CustomView(_ref12) {
  var renderWithFragment = _ref12.renderWithFragment,
      children = _ref12.children,
      viewClassName = _ref12.viewClassName,
      style = _ref12.style,
      condition = _ref12.condition,
      props = _objectWithoutProperties(_ref12, ["renderWithFragment", "children", "viewClassName", "style", "condition"]);

  return condition ? renderWithFragment ? React__default.createElement(React.Fragment, null, children) : React__default.createElement("div", props, children) : null;
};

function withOrientationChange(WrappedComponent) {
  return /*#__PURE__*/function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
      var _this;

      _classCallCheck(this, _class);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
      _this.isEventListenerAdded = false;
      _this.handleOrientationChange = _this.handleOrientationChange.bind(_assertThisInitialized(_this));
      _this.onOrientationChange = _this.onOrientationChange.bind(_assertThisInitialized(_this));
      _this.onPageLoad = _this.onPageLoad.bind(_assertThisInitialized(_this));
      _this.state = {
        isLandscape: false,
        isPortrait: false
      };
      return _this;
    }

    _createClass(_class, [{
      key: "handleOrientationChange",
      value: function handleOrientationChange() {
        if (!this.isEventListenerAdded) {
          this.isEventListenerAdded = true;
        }

        var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
        this.setState({
          isPortrait: orientation === 0,
          isLandscape: orientation === 90
        });
      }
    }, {
      key: "onOrientationChange",
      value: function onOrientationChange() {
        this.handleOrientationChange();
      }
    }, {
      key: "onPageLoad",
      value: function onPageLoad() {
        this.handleOrientationChange();
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined && isMobile) {
          if (!this.isEventListenerAdded) {
            this.handleOrientationChange();
            window.addEventListener("load", this.onPageLoad, false);
          } else {
            window.removeEventListener("load", this.onPageLoad, false);
          }

          window.addEventListener("resize", this.onOrientationChange, false);
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener("resize", this.onOrientationChange, false);
      }
    }, {
      key: "render",
      value: function render() {
        return React__default.createElement(WrappedComponent, _extends({}, this.props, {
          isLandscape: this.state.isLandscape,
          isPortrait: this.state.isPortrait
        }));
      }
    }]);

    return _class;
  }(React__default.Component);
}

function useMobileOrientation() {
  var _useState = React.useState(function () {
    var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
    return {
      isPortrait: orientation === 0,
      isLandscape: orientation === 90,
      orientation: orientation === 0 ? 'portrait' : 'landscape'
    };
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var handleOrientationChange = React.useCallback(function () {
    var orientation = window.innerWidth > window.innerHeight ? 90 : 0;
    var next = {
      isPortrait: orientation === 0,
      isLandscape: orientation === 90,
      orientation: orientation === 0 ? 'portrait' : 'landscape'
    };
    state.orientation !== next.orientation && setState(next);
  }, [state.orientation]);
  React.useEffect(function () {
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined && isMobile) {
      handleOrientationChange();
      window.addEventListener("load", handleOrientationChange, false);
      window.addEventListener("resize", handleOrientationChange, false);
    }

    return function () {
      window.removeEventListener("resize", handleOrientationChange, false);
      window.removeEventListener("load", handleOrientationChange, false);
    };
  }, [handleOrientationChange]);
  return state;
}

function useDeviceData(userAgent) {
  var hookUserAgent = userAgent ? userAgent : window.navigator.userAgent;
  return parseUserAgent(hookUserAgent);
}

function useDeviceSelectors(userAgent) {
  var hookUserAgent = userAgent ? userAgent : window.navigator.userAgent;
  var deviceData = useDeviceData(hookUserAgent);
  var selectors = buildSelectorsObject(deviceData);
  return [selectors, deviceData];
}

exports.AndroidView = AndroidView;
exports.BrowserTypes = BrowserTypes;
exports.BrowserView = BrowserView;
exports.ConsoleView = ConsoleView;
exports.CustomView = CustomView;
exports.IEView = IEView;
exports.IOSView = IOSView;
exports.MobileOnlyView = MobileOnlyView;
exports.MobileView = MobileView;
exports.OsTypes = OsTypes;
exports.SmartTVView = SmartTVView;
exports.TabletView = TabletView;
exports.WearableView = WearableView;
exports.WinPhoneView = WinPhoneView;
exports.browserName = browserName;
exports.browserVersion = browserVersion;
exports.deviceDetect = deviceDetect;
exports.deviceType = deviceType;
exports.engineName = engineName;
exports.engineVersion = engineVersion;
exports.fullBrowserVersion = fullBrowserVersion;
exports.getSelectorsByUserAgent = getSelectorsByUserAgent;
exports.getUA = getUA;
exports.isAndroid = isAndroid;
exports.isBrowser = isBrowser;
exports.isChrome = isChrome;
exports.isChromium = isChromium;
exports.isConsole = isConsole;
exports.isDesktop = isDesktop;
exports.isEdge = isEdge;
exports.isEdgeChromium = isEdgeChromium;
exports.isElectron = isElectron;
exports.isEmbedded = isEmbedded;
exports.isFirefox = isFirefox;
exports.isIE = isIE;
exports.isIOS = isIOS;
exports.isIOS13 = isIOS13;
exports.isIPad13 = isIPad13;
exports.isIPhone13 = isIPhone13;
exports.isIPod13 = isIPod13;
exports.isLegacyEdge = isLegacyEdge;
exports.isMIUI = isMIUI;
exports.isMacOs = isMacOs;
exports.isMobile = isMobile;
exports.isMobileOnly = isMobileOnly;
exports.isMobileSafari = isMobileSafari;
exports.isOpera = isOpera;
exports.isSafari = isSafari;
exports.isSamsungBrowser = isSamsungBrowser;
exports.isSmartTV = isSmartTV;
exports.isTablet = isTablet;
exports.isWearable = isWearable;
exports.isWinPhone = isWinPhone;
exports.isWindows = isWindows;
exports.isYandex = isYandex;
exports.mobileModel = mobileModel;
exports.mobileVendor = mobileVendor;
exports.osName = osName;
exports.osVersion = osVersion;
exports.parseUserAgent = parseUserAgent;
exports.setUserAgent = setUserAgent;
exports.useDeviceData = useDeviceData;
exports.useDeviceSelectors = useDeviceSelectors;
exports.useMobileOrientation = useMobileOrientation;
exports.withOrientationChange = withOrientationChange;


/***/ }),

/***/ "./node_modules/timers-ext/max-timeout.js":
/*!************************************************!*\
  !*** ./node_modules/timers-ext/max-timeout.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";


module.exports = 2147483647;


/***/ }),

/***/ "./node_modules/timers-ext/valid-timeout.js":
/*!**************************************************!*\
  !*** ./node_modules/timers-ext/valid-timeout.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var toPosInt   = __webpack_require__(/*! es5-ext/number/to-pos-integer */ "./node_modules/es5-ext/number/to-pos-integer.js")
  , maxTimeout = __webpack_require__(/*! ./max-timeout */ "./node_modules/timers-ext/max-timeout.js");

module.exports = function (value) {
	value = toPosInt(value);
	if (value > maxTimeout) throw new TypeError(value + " exceeds maximum possible timeout");
	return value;
};


/***/ }),

/***/ "./src/provider/index.ts":
/*!*******************************!*\
  !*** ./src/provider/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserSearchContext": () => (/* reexport safe */ _provider__WEBPACK_IMPORTED_MODULE_0__.BrowserSearchContext),
/* harmony export */   "BrowserSearchProvider": () => (/* reexport safe */ _provider__WEBPACK_IMPORTED_MODULE_0__.BrowserSearchProvider)
/* harmony export */ });
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./provider */ "./src/provider/provider.tsx");



/***/ }),

/***/ "./src/provider/provider.tsx":
/*!***********************************!*\
  !*** ./src/provider/provider.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserSearchContext": () => (/* binding */ BrowserSearchContext),
/* harmony export */   "BrowserSearchProvider": () => (/* binding */ BrowserSearchProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../queryClient */ "./src/queryClient/index.ts");


const queryClient = (0,_queryClient__WEBPACK_IMPORTED_MODULE_1__.buildQueryClient)();
const BrowserSearchContext = react__WEBPACK_IMPORTED_MODULE_0___default().createContext(queryClient);
const BrowserSearchProvider = ({ children, }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BrowserSearchContext.Provider, { value: queryClient }, children));


/***/ }),

/***/ "./src/queryClient/index.ts":
/*!**********************************!*\
  !*** ./src/queryClient/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildQueryClient": () => (/* reexport safe */ _queryClient__WEBPACK_IMPORTED_MODULE_0__.buildQueryClient)
/* harmony export */ });
/* harmony import */ var _queryClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queryClient */ "./src/queryClient/queryClient.ts");



/***/ }),

/***/ "./src/queryClient/queryCache/index.ts":
/*!*********************************************!*\
  !*** ./src/queryClient/queryCache/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildIndexValuesCache": () => (/* reexport safe */ _indexValuesCache__WEBPACK_IMPORTED_MODULE_1__.buildIndexValuesCache),
/* harmony export */   "buildQueryCache": () => (/* reexport safe */ _queryCache__WEBPACK_IMPORTED_MODULE_0__.buildQueryCache)
/* harmony export */ });
/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queryCache */ "./src/queryClient/queryCache/queryCache.ts");
/* harmony import */ var _indexValuesCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexValuesCache */ "./src/queryClient/queryCache/indexValuesCache.ts");




/***/ }),

/***/ "./src/queryClient/queryCache/indexValuesCache.ts":
/*!********************************************************!*\
  !*** ./src/queryClient/queryCache/indexValuesCache.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildIndexValuesCache": () => (/* binding */ buildIndexValuesCache)
/* harmony export */ });
/* harmony import */ var _storeCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeCache */ "./src/queryClient/queryCache/storeCache/index.ts");

const buildIndexValuesCache = () => {
    const responseCache = (0,_storeCache__WEBPACK_IMPORTED_MODULE_0__.buildStoreCache)();
    const pendingQueryCache = (0,_storeCache__WEBPACK_IMPORTED_MODULE_0__.buildStoreCache)();
    const queryCache = ({ storeId, indexId }) => {
        return (responseCache
            .queryCache(storeId, indexId)
            .map(response => Promise.resolve(response))
            .alt(pendingQueryCache.queryCache(storeId, indexId)));
    };
    const addQueryToCache = ({ storeId, indexId }, query) => {
        pendingQueryCache.addValueToStoreCache(storeId, indexId, query);
        query
            .then(queryResponse => {
            // if not in the cache, it means cache has been emptied in the meantime (because of store mutation) so it's obsolete
            if (pendingQueryCache.queryCache(storeId, indexId)) {
                responseCache.addValueToStoreCache(storeId, indexId, queryResponse);
            }
        })
            .finally(() => {
            pendingQueryCache.deleteKeyFromStore(storeId, indexId);
        });
    };
    const deleteStoreCache = (storeId) => {
        responseCache.deleteStoreCache(storeId);
        pendingQueryCache.deleteStoreCache(storeId);
    };
    return {
        queryCache,
        addQueryToCache,
        deleteStoreCache,
    };
};


/***/ }),

/***/ "./src/queryClient/queryCache/queryCache.ts":
/*!**************************************************!*\
  !*** ./src/queryClient/queryCache/queryCache.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildQueryCache": () => (/* binding */ buildQueryCache)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../request */ "./src/request.ts");
/* harmony import */ var _storeCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeCache */ "./src/queryClient/queryCache/storeCache/index.ts");


const buildQueryCache = () => {
    const responseCache = (0,_storeCache__WEBPACK_IMPORTED_MODULE_1__.buildStoreCache)();
    const pendingQueryCache = (0,_storeCache__WEBPACK_IMPORTED_MODULE_1__.buildStoreCache)();
    const queryCache = (request) => {
        const requestHash = (0,_request__WEBPACK_IMPORTED_MODULE_0__.hashRequest)(request);
        return (responseCache
            .queryCache(request.storeId, requestHash)
            .map(response => Promise.resolve(response))
            .alt(pendingQueryCache.queryCache(request.storeId, requestHash)));
    };
    const addQueryToCache = (request, query) => {
        const requestHash = (0,_request__WEBPACK_IMPORTED_MODULE_0__.hashRequest)(request);
        pendingQueryCache.addValueToStoreCache(request.storeId, requestHash, query);
        query
            .then(queryResponse => {
            // if not in the cache, it means cache has been emptied in the meantime (because of store mutation) so it's obsolete
            if (pendingQueryCache.queryCache(request.storeId, requestHash)) {
                responseCache.addValueToStoreCache(request.storeId, requestHash, queryResponse);
            }
        })
            .finally(() => {
            pendingQueryCache.deleteKeyFromStore(request.storeId, requestHash);
        });
    };
    const deleteStoreCache = (storeId) => {
        responseCache.deleteStoreCache(storeId);
        pendingQueryCache.deleteStoreCache(storeId);
    };
    return {
        queryCache,
        addQueryToCache,
        deleteStoreCache,
    };
};


/***/ }),

/***/ "./src/queryClient/queryCache/storeCache/index.ts":
/*!********************************************************!*\
  !*** ./src/queryClient/queryCache/storeCache/index.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildStoreCache": () => (/* reexport safe */ _storeCache__WEBPACK_IMPORTED_MODULE_0__.buildStoreCache)
/* harmony export */ });
/* harmony import */ var _storeCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storeCache */ "./src/queryClient/queryCache/storeCache/storeCache.ts");



/***/ }),

/***/ "./src/queryClient/queryCache/storeCache/storeCache.ts":
/*!*************************************************************!*\
  !*** ./src/queryClient/queryCache/storeCache/storeCache.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildStoreCache": () => (/* binding */ buildStoreCache)
/* harmony export */ });
/* harmony import */ var purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! purify-ts/Maybe */ "./node_modules/purify-ts/Maybe.js");
/* harmony import */ var purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_0__);

const buildStoreCache = () => {
    const globalCache = new Map();
    const queryCache = (storeId, cacheKey) => {
        const storeCache = globalCache.get(storeId);
        return (storeCache === undefined ? purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_0__.Nothing
            : storeCache.has(cacheKey) ? (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_0__.Just)(storeCache.get(cacheKey))
                : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_0__.Nothing);
    };
    const addValueToStoreCache = (storeId, key, value) => {
        var _a;
        const storeCache = (_a = globalCache.get(storeId)) !== null && _a !== void 0 ? _a : new Map();
        storeCache.set(key, value);
        globalCache.set(storeId, storeCache);
    };
    const deleteStoreCache = (storeId) => {
        globalCache.delete(storeId);
    };
    const deleteKeyFromStore = (storeId, key) => {
        const storeCache = globalCache.get(storeId);
        if (storeCache) {
            storeCache.delete(key);
        }
    };
    return {
        queryCache,
        addValueToStoreCache,
        deleteStoreCache,
        deleteKeyFromStore,
    };
};


/***/ }),

/***/ "./src/queryClient/queryClient.ts":
/*!****************************************!*\
  !*** ./src/queryClient/queryClient.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildQueryClient": () => (/* binding */ buildQueryClient)
/* harmony export */ });
/* harmony import */ var browser_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browser-search */ "browser-search");
/* harmony import */ var browser_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(browser_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _queryCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryCache */ "./src/queryClient/queryCache/index.ts");
/* harmony import */ var _subscriber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subscriber */ "./src/queryClient/subscriber/index.ts");



const buildQueryClient = () => {
    const queryCache = (0,_queryCache__WEBPACK_IMPORTED_MODULE_1__.buildQueryCache)();
    const indexValuesCache = (0,_queryCache__WEBPACK_IMPORTED_MODULE_1__.buildIndexValuesCache)();
    const subscriber = (0,_subscriber__WEBPACK_IMPORTED_MODULE_2__.buildSubscriber)();
    const mutateStore = (mutationFunction) => (storeId) => (mutationFunction(storeId)
        .then(result => {
        [queryCache, indexValuesCache].forEach(cache => cache.deleteStoreCache(storeId));
        subscriber.notifyStoreChange(storeId);
        return result;
    }));
    const queryStore = (request) => {
        const maybeCachedSearchResponsePromise = queryCache.queryCache(request);
        return (maybeCachedSearchResponsePromise.caseOf({
            Just: searchResponse => [searchResponse, () => { }],
            Nothing: () => {
                const [searchResponsePromise, abort] = browser_search__WEBPACK_IMPORTED_MODULE_0__.searchStore(request);
                queryCache.addQueryToCache(request, searchResponsePromise);
                return [searchResponsePromise, abort];
            }
        }));
    };
    const queryIndex = (request) => {
        const maybeCachedResponsePromise = indexValuesCache.queryCache(request);
        return (maybeCachedResponsePromise.caseOf({
            Just: indexValues => indexValues,
            Nothing: () => {
                const indexValuesPromise = browser_search__WEBPACK_IMPORTED_MODULE_0__.getAllValuesOfProperty(request.storeId)(request.indexId);
                indexValuesCache.addQueryToCache(request, indexValuesPromise);
                return indexValuesPromise;
            }
        }));
    };
    const createStore = browser_search__WEBPACK_IMPORTED_MODULE_0__.createStore;
    const deleteStore = mutateStore(browser_search__WEBPACK_IMPORTED_MODULE_0__.deleteStore);
    const addDataToStore = (storeId) => (data) => mutateStore((storeId) => browser_search__WEBPACK_IMPORTED_MODULE_0__.addDocumentsToStore(storeId)(data))(storeId);
    const subscribeToStoreChange = subscriber.addStoreListener;
    const unsubscribeToStoreChange = subscriber.removeStoreListener;
    return {
        queryStore,
        queryIndex,
        createStore,
        deleteStore,
        addDataToStore,
        subscribeToStoreChange,
        unsubscribeToStoreChange,
    };
};


/***/ }),

/***/ "./src/queryClient/subscriber/index.ts":
/*!*********************************************!*\
  !*** ./src/queryClient/subscriber/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSubscriber": () => (/* reexport safe */ _subscriber__WEBPACK_IMPORTED_MODULE_0__.buildSubscriber)
/* harmony export */ });
/* harmony import */ var _subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subscriber */ "./src/queryClient/subscriber/subscriber.ts");



/***/ }),

/***/ "./src/queryClient/subscriber/subscriber.ts":
/*!**************************************************!*\
  !*** ./src/queryClient/subscriber/subscriber.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildSubscriber": () => (/* binding */ buildSubscriber)
/* harmony export */ });
const buildSubscriber = () => {
    let storeListeners = new Map();
    const notifyStoreChange = (storeId) => {
        var _a;
        const listeners = (_a = storeListeners.get(storeId)) !== null && _a !== void 0 ? _a : [];
        listeners.forEach(callback => callback({ trigger: 'store-mutation' }));
    };
    const addStoreListener = (storeId) => (listener) => {
        var _a;
        const listeners = (_a = storeListeners.get(storeId)) !== null && _a !== void 0 ? _a : [];
        listeners.push(listener);
        storeListeners.set(storeId, listeners);
    };
    const removeStoreListener = (storeId) => (listenerToRemove) => {
        var _a;
        const listeners = (_a = storeListeners.get(storeId)) !== null && _a !== void 0 ? _a : [];
        const filteredListeners = listeners.filter(listener => listener !== listenerToRemove);
        storeListeners.set(storeId, filteredListeners);
    };
    return {
        notifyStoreChange,
        addStoreListener,
        removeStoreListener,
    };
};


/***/ }),

/***/ "./src/queryState.ts":
/*!***************************!*\
  !*** ./src/queryState.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/request.ts":
/*!************************!*\
  !*** ./src/request.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "areRequestsEqual": () => (/* binding */ areRequestsEqual),
/* harmony export */   "hashRequest": () => (/* binding */ hashRequest)
/* harmony export */ });
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-hash */ "./node_modules/object-hash/dist/object_hash.js");
/* harmony import */ var object_hash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_hash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoizee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoizee */ "./node_modules/memoizee/index.js");
/* harmony import */ var memoizee__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(memoizee__WEBPACK_IMPORTED_MODULE_1__);


const hashRequest = memoizee__WEBPACK_IMPORTED_MODULE_1___default()((request) => hashObject(request), { maxAge: 2000 });
const areRequestsEqual = (requestA, requestB) => hashRequest(requestA) === hashRequest(requestB);
const hashObject = (object) => object_hash__WEBPACK_IMPORTED_MODULE_0___default()(object, { algorithm: 'md5', unorderedArrays: true });


/***/ }),

/***/ "./src/stateMachine/index.ts":
/*!***********************************!*\
  !*** ./src/stateMachine/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildStateMachine": () => (/* reexport safe */ _stateMachine__WEBPACK_IMPORTED_MODULE_0__.buildStateMachine)
/* harmony export */ });
/* harmony import */ var _stateMachine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateMachine */ "./src/stateMachine/stateMachine.ts");



/***/ }),

/***/ "./src/stateMachine/stateMachine.ts":
/*!******************************************!*\
  !*** ./src/stateMachine/stateMachine.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildStateMachine": () => (/* binding */ buildStateMachine)
/* harmony export */ });
/* harmony import */ var purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! purify-ts/Maybe */ "./node_modules/purify-ts/Maybe.js");
/* harmony import */ var purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_0__);

const buildStateMachine = (stateTransitions) => (state, action) => {
    const maybeNextState = stateTransitions.reduce((maybeNextState, stateTransition) => maybeNextState.alt(stateTransition(state, action)), purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_0__.Nothing);
    return maybeNextState.caseOf({
        Just: (nextState) => nextState,
        Nothing: () => state,
    });
};


/***/ }),

/***/ "./src/useAddDataToStore/index.ts":
/*!****************************************!*\
  !*** ./src/useAddDataToStore/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useAddDataToStore": () => (/* reexport safe */ _useAddDataToStore__WEBPACK_IMPORTED_MODULE_0__.useAddDataToStore)
/* harmony export */ });
/* harmony import */ var _useAddDataToStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useAddDataToStore */ "./src/useAddDataToStore/useAddDataToStore.ts");



/***/ }),

/***/ "./src/useAddDataToStore/useAddDataToStore.ts":
/*!****************************************************!*\
  !*** ./src/useAddDataToStore/useAddDataToStore.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildReducer": () => (/* binding */ buildReducer),
/* harmony export */   "useAddDataToStore": () => (/* binding */ useAddDataToStore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! purify-ts/Maybe */ "./node_modules/purify-ts/Maybe.js");
/* harmony import */ var purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stateMachine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stateMachine */ "./src/stateMachine/index.ts");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider */ "./src/provider/index.ts");




const fromIdleToLoading = (state, action) => (state.status === 'idle' && action.type === 'requestStarted' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'loading',
        request: action.request,
        isFetching: true,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const fromLoadingToError = (state, action) => (state.status === 'loading' && action.type === 'requestFailed' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'error',
        request: action.request,
        error: action.error,
        isFetching: false,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const fromLoadingToSuccess = (state, action) => (state.status === 'loading' && action.type === 'requestCompleted' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'success',
        request: action.request,
        response: action.response,
        isFetching: false,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const initialState = {
    status: 'idle',
    isFetching: false,
};
const buildReducer = () => {
    const stateTransitions = [fromIdleToLoading, fromLoadingToError, fromLoadingToSuccess];
    return (0,_stateMachine__WEBPACK_IMPORTED_MODULE_1__.buildStateMachine)(stateTransitions);
};
const useAddDataToStore = () => {
    const queryClient = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_provider__WEBPACK_IMPORTED_MODULE_2__.BrowserSearchContext);
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(buildReducer(), initialState);
    const runQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((request) => {
        const responsePromise = queryClient.addDataToStore(request.storeId)(request.data);
        dispatch({ type: 'requestStarted', request });
        return (responsePromise
            .then(_ => {
            dispatch({ type: 'requestCompleted', response: null, request });
            return;
        })
            .catch(error => {
            dispatch({ type: 'requestFailed', request, error });
        }));
    }, [queryClient]);
    return [runQuery, state];
};


/***/ }),

/***/ "./src/useCreateStore/index.ts":
/*!*************************************!*\
  !*** ./src/useCreateStore/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCreateStore": () => (/* reexport safe */ _useCreateStore__WEBPACK_IMPORTED_MODULE_0__.useCreateStore)
/* harmony export */ });
/* harmony import */ var _useCreateStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useCreateStore */ "./src/useCreateStore/useCreateStore.ts");



/***/ }),

/***/ "./src/useCreateStore/useCreateStore.ts":
/*!**********************************************!*\
  !*** ./src/useCreateStore/useCreateStore.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildReducer": () => (/* binding */ buildReducer),
/* harmony export */   "useCreateStore": () => (/* binding */ useCreateStore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! purify-ts/Maybe */ "./node_modules/purify-ts/Maybe.js");
/* harmony import */ var purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stateMachine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stateMachine */ "./src/stateMachine/index.ts");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider */ "./src/provider/index.ts");




const fromIdleToLoading = (state, action) => (state.status === 'idle' && action.type === 'requestStarted' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'loading',
        request: action.request,
        isFetching: true,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const fromLoadingToError = (state, action) => (state.status === 'loading' && action.type === 'requestFailed' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'error',
        request: action.request,
        error: action.error,
        isFetching: false,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const fromLoadingToSuccess = (state, action) => (state.status === 'loading' && action.type === 'requestCompleted' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'success',
        request: action.request,
        response: action.response,
        isFetching: false,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const initialState = {
    status: 'idle',
    isFetching: false,
};
const buildReducer = () => {
    const stateTransitions = [fromIdleToLoading, fromLoadingToError, fromLoadingToSuccess];
    return (0,_stateMachine__WEBPACK_IMPORTED_MODULE_1__.buildStateMachine)(stateTransitions);
};
const useCreateStore = () => {
    const queryClient = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_provider__WEBPACK_IMPORTED_MODULE_2__.BrowserSearchContext);
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(buildReducer(), initialState);
    const runQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((request) => {
        const responsePromise = queryClient.createStore(request.storeId)(request.indexConfig)(request.keyPath);
        dispatch({ type: 'requestStarted', request });
        return (responsePromise
            .then(_ => {
            dispatch({ type: 'requestCompleted', response: null, request });
            return;
        })
            .catch(error => {
            dispatch({ type: 'requestFailed', request, error });
        }));
    }, [queryClient]);
    return [runQuery, state];
};


/***/ }),

/***/ "./src/useDeleteStore/index.ts":
/*!*************************************!*\
  !*** ./src/useDeleteStore/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDeleteStore": () => (/* reexport safe */ _useDeleteStore__WEBPACK_IMPORTED_MODULE_0__.useDeleteStore)
/* harmony export */ });
/* harmony import */ var _useDeleteStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useDeleteStore */ "./src/useDeleteStore/useDeleteStore.ts");



/***/ }),

/***/ "./src/useDeleteStore/useDeleteStore.ts":
/*!**********************************************!*\
  !*** ./src/useDeleteStore/useDeleteStore.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildReducer": () => (/* binding */ buildReducer),
/* harmony export */   "useDeleteStore": () => (/* binding */ useDeleteStore)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! purify-ts/Maybe */ "./node_modules/purify-ts/Maybe.js");
/* harmony import */ var purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stateMachine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stateMachine */ "./src/stateMachine/index.ts");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider */ "./src/provider/index.ts");




const fromIdleToLoading = (state, action) => (state.status === 'idle' && action.type === 'requestStarted' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'loading',
        request: action.request,
        isFetching: true,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const fromLoadingToError = (state, action) => (state.status === 'loading' && action.type === 'requestFailed' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'error',
        request: action.request,
        error: action.error,
        isFetching: false,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const fromLoadingToSuccess = (state, action) => (state.status === 'loading' && action.type === 'requestCompleted' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'success',
        request: action.request,
        response: action.response,
        isFetching: false,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const initialState = {
    status: 'idle',
    isFetching: false,
};
const buildReducer = () => {
    const stateTransitions = [fromIdleToLoading, fromLoadingToError, fromLoadingToSuccess];
    return (0,_stateMachine__WEBPACK_IMPORTED_MODULE_1__.buildStateMachine)(stateTransitions);
};
const useDeleteStore = () => {
    const queryClient = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_provider__WEBPACK_IMPORTED_MODULE_2__.BrowserSearchContext);
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(buildReducer(), initialState);
    const runQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((request) => {
        const responsePromise = queryClient.deleteStore(request.storeId);
        dispatch({ type: 'requestStarted', request });
        return (responsePromise
            .then(_ => {
            dispatch({ type: 'requestCompleted', response: null, request });
            return;
        })
            .catch(error => {
            dispatch({ type: 'requestFailed', request, error });
        }));
    }, [queryClient]);
    return [runQuery, state];
};


/***/ }),

/***/ "./src/useIndexValues/index.ts":
/*!*************************************!*\
  !*** ./src/useIndexValues/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useIndexValues": () => (/* reexport safe */ _useIndexValues__WEBPACK_IMPORTED_MODULE_0__.useIndexValues)
/* harmony export */ });
/* harmony import */ var _useIndexValues__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useIndexValues */ "./src/useIndexValues/useIndexValues.ts");



/***/ }),

/***/ "./src/useIndexValues/useIndexValues.ts":
/*!**********************************************!*\
  !*** ./src/useIndexValues/useIndexValues.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildReducer": () => (/* binding */ buildReducer),
/* harmony export */   "useIndexValues": () => (/* binding */ useIndexValues)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! purify-ts/Maybe */ "./node_modules/purify-ts/Maybe.js");
/* harmony import */ var purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _stateMachine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../stateMachine */ "./src/stateMachine/index.ts");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider */ "./src/provider/index.ts");




const initialState = {
    status: 'idle',
    isFetching: false,
};
const fromIdleToLoading = (state, action) => (state.status === 'idle' && action.type === 'requestStarted' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'loading',
        request: action.request,
        isFetching: true,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const fromLoadingToLoading = (state, action) => (state.status === 'loading' && action.type === 'requestStarted' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'loading',
        request: action.request,
        isFetching: true,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const fromLoadingToError = (state, action) => (state.status === 'loading' && action.type === 'requestFailed' && state.request === action.request ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'error',
        request: action.request,
        error: action.error,
        isFetching: false,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const fromLoadingToSuccess = (state, action) => (state.status === 'loading' && action.type === 'requestCompleted' && state.request === action.request ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'success',
        request: action.request,
        response: action.response,
        isFetching: false,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const fromSuccessToStale = (state, action) => (state.status === 'success' && action.type === 'requestStarted' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'stale',
        request: state.request,
        response: state.response,
        newRequest: action.request,
        isFetching: true,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const fromStaleToSuccess = (state, action) => (state.status === 'stale' && action.type === 'requestCompleted' && state.newRequest === action.request ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'success',
        request: action.request,
        response: action.response,
        isFetching: false,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const fromStaleToStale = (state, action) => (state.status === 'stale' && action.type === 'requestStarted' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'stale',
        request: state.request,
        response: state.response,
        newRequest: action.request,
        isFetching: true,
    }) :
    purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const fromStaleToError = (state, action) => (state.status === 'stale' && action.type === 'requestFailed' && state.newRequest === action.request ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'error',
        request: action.request,
        error: action.error,
        isFetching: false,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const fromErrorToLoading = (state, action) => (state.status === 'error' && action.type === 'requestStarted' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Just)({
        status: 'loading',
        request: action.request,
        isFetching: true,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_3__.Nothing);
const buildReducer = () => {
    const stateTransitions = [fromIdleToLoading, fromLoadingToLoading, fromLoadingToError, fromLoadingToSuccess, fromSuccessToStale, fromStaleToStale, fromStaleToSuccess, fromStaleToError, fromErrorToLoading];
    return (0,_stateMachine__WEBPACK_IMPORTED_MODULE_1__.buildStateMachine)(stateTransitions);
};
const useIndexValues = (storeId, indexId) => {
    const queryClient = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_provider__WEBPACK_IMPORTED_MODULE_2__.BrowserSearchContext);
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(buildReducer(), initialState);
    const runQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
        const request = {
            storeId,
            indexId,
        };
        const responsePromise = queryClient.queryIndex(request);
        dispatch({ type: 'requestStarted', request });
        responsePromise
            .then(response => {
            dispatch({ type: 'requestCompleted', response: response, request });
        })
            .catch(error => {
            dispatch({ type: 'requestFailed', request, error });
        });
    }, [storeId, indexId]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        queryClient.subscribeToStoreChange(storeId)(runQuery);
        return () => {
            queryClient.unsubscribeToStoreChange(storeId)(runQuery);
        };
    }, [storeId, queryClient, runQuery]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        runQuery();
    }, [runQuery]);
    return state;
};


/***/ }),

/***/ "./src/useQuery/index.ts":
/*!*******************************!*\
  !*** ./src/useQuery/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useQuery": () => (/* reexport safe */ _useQuery__WEBPACK_IMPORTED_MODULE_0__.useQuery)
/* harmony export */ });
/* harmony import */ var _useQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useQuery */ "./src/useQuery/useQuery.ts");



/***/ }),

/***/ "./src/useQuery/useQuery.ts":
/*!**********************************!*\
  !*** ./src/useQuery/useQuery.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildReducer": () => (/* binding */ buildReducer),
/* harmony export */   "useQuery": () => (/* binding */ useQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! purify-ts/Maybe */ "./node_modules/purify-ts/Maybe.js");
/* harmony import */ var purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-device-detect */ "./node_modules/react-device-detect/dist/lib.js");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../provider */ "./src/provider/index.ts");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request */ "./src/request.ts");
/* harmony import */ var _stateMachine__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stateMachine */ "./src/stateMachine/index.ts");






const initialState = {
    status: 'idle',
    isFetching: false,
};
const fromIdleToLoading = (state, action) => (state.status === 'idle' && action.type === 'searchStarted' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Just)({
        status: 'loading',
        request: action.request,
        abort: action.abort,
        isFetching: true,
        trigger: action.trigger
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Nothing);
const fromLoadingToLoading = (state, action) => {
    if (state.status === 'loading' && action.type === 'searchStarted') {
        if (getShouldAbortRequest(state.request, action)) {
            state.abort();
        }
        return (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Just)({
            status: 'loading',
            request: action.request,
            abort: action.abort,
            isFetching: true,
            trigger: action.trigger,
        });
    }
    return purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Nothing;
};
const fromLoadingToError = (state, action) => (state.status === 'loading' && action.type === 'searchFailed' && state.request === action.request ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Just)({
        status: 'error',
        request: action.request,
        error: action.error,
        isFetching: false,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Nothing);
const fromLoadingToSuccess = (state, action) => (state.status === 'loading' && action.type === 'searchCompleted' && state.request === action.request ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Just)({
        status: 'success',
        request: action.request,
        response: action.response,
        isFetching: false,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Nothing);
const fromSuccessToStale = (state, action) => (state.status === 'success' && action.type === 'searchStarted' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Just)({
        status: 'stale',
        request: state.request,
        response: state.response,
        newRequest: action.request,
        abort: action.abort,
        isFetching: true,
        trigger: action.trigger,
        areStatsStale: getAreStatsStale(state.request, action),
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Nothing);
const fromStaleToSuccess = (state, action) => (state.status === 'stale' && action.type === 'searchCompleted' && state.newRequest === action.request ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Just)({
        status: 'success',
        request: action.request,
        response: action.response,
        isFetching: false,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Nothing);
const fromStaleToStale = (state, action) => {
    if (state.status === 'stale' && action.type === 'searchStarted') {
        if (getShouldAbortRequest(state.newRequest, action)) {
            state.abort();
        }
        return (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Just)({
            status: 'stale',
            request: state.request,
            response: state.response,
            newRequest: action.request,
            abort: action.abort,
            isFetching: true,
            trigger: action.trigger,
            areStatsStale: getAreStatsStale(state.request, action),
        });
    }
    return purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Nothing;
};
const fromStaleToError = (state, action) => (state.status === 'stale' && action.type === 'searchFailed' && state.newRequest === action.request ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Just)({
        status: 'error',
        request: action.request,
        error: action.error,
        isFetching: false,
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Nothing);
const fromErrorToLoading = (state, action) => (state.status === 'error' && action.type === 'searchStarted' ?
    (0,purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Just)({
        status: 'loading',
        request: action.request,
        abort: action.abort,
        isFetching: true,
        trigger: action.trigger
    }) : purify_ts_Maybe__WEBPACK_IMPORTED_MODULE_5__.Nothing);
const getAreStatsStale = (previousRequest, searchStartedAction) => (previousRequest.filtersApplied !== searchStartedAction.request.filtersApplied ||
    previousRequest.filterConfig !== searchStartedAction.request.filterConfig ||
    searchStartedAction.trigger === 'store-mutation');
const getShouldAbortRequest = (previousRequest, searchStartedAction) => (!react_device_detect__WEBPACK_IMPORTED_MODULE_1__.isSafari && (!(0,_request__WEBPACK_IMPORTED_MODULE_3__.areRequestsEqual)(previousRequest, searchStartedAction.request) ||
    searchStartedAction.trigger === 'store-mutation'));
const buildReducer = () => {
    const stateTransitions = [fromIdleToLoading, fromLoadingToLoading, fromLoadingToError, fromLoadingToSuccess, fromSuccessToStale, fromStaleToStale, fromStaleToSuccess, fromStaleToError, fromErrorToLoading];
    return (0,_stateMachine__WEBPACK_IMPORTED_MODULE_4__.buildStateMachine)(stateTransitions);
};
const useQuery = (request) => {
    const queryClient = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_provider__WEBPACK_IMPORTED_MODULE_2__.BrowserSearchContext);
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(buildReducer(), initialState);
    const runQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(({ trigger }) => {
        const requestInstance = Object.assign({}, request);
        const [seachResponsePromise, abortSearch] = queryClient.queryStore(requestInstance);
        dispatch({ type: 'searchStarted', request: requestInstance, abort: abortSearch, trigger });
        seachResponsePromise
            .then(searchResponse => {
            dispatch({ type: 'searchCompleted', response: searchResponse, request: requestInstance });
        })
            .catch(error => {
            console.log(error, request);
            dispatch({ type: 'searchFailed', request: requestInstance, error });
        });
    }, [request, queryClient]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        queryClient.subscribeToStoreChange(request.storeId)(runQuery);
        return () => {
            queryClient.unsubscribeToStoreChange(request.storeId)(runQuery);
        };
    }, [request.storeId, queryClient, runQuery]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        runQuery({ trigger: 'request-change' });
    }, [runQuery]);
    return state;
};


/***/ }),

/***/ "./node_modules/type/function/is.js":
/*!******************************************!*\
  !*** ./node_modules/type/function/is.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isPrototype = __webpack_require__(/*! ../prototype/is */ "./node_modules/type/prototype/is.js");

module.exports = function (value) {
	if (typeof value !== "function") return false;

	if (!hasOwnProperty.call(value, "length")) return false;

	try {
		if (typeof value.length !== "number") return false;
		if (typeof value.call !== "function") return false;
		if (typeof value.apply !== "function") return false;
	} catch (error) {
		return false;
	}

	return !isPrototype(value);
};


/***/ }),

/***/ "./node_modules/type/object/is.js":
/*!****************************************!*\
  !*** ./node_modules/type/object/is.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isValue = __webpack_require__(/*! ../value/is */ "./node_modules/type/value/is.js");

// prettier-ignore
var possibleTypes = { "object": true, "function": true, "undefined": true /* document.all */ };

module.exports = function (value) {
	if (!isValue(value)) return false;
	return hasOwnProperty.call(possibleTypes, typeof value);
};


/***/ }),

/***/ "./node_modules/type/plain-function/is.js":
/*!************************************************!*\
  !*** ./node_modules/type/plain-function/is.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isFunction = __webpack_require__(/*! ../function/is */ "./node_modules/type/function/is.js");

var classRe = /^\s*class[\s{/}]/, functionToString = Function.prototype.toString;

module.exports = function (value) {
	if (!isFunction(value)) return false;
	if (classRe.test(functionToString.call(value))) return false;
	return true;
};


/***/ }),

/***/ "./node_modules/type/prototype/is.js":
/*!*******************************************!*\
  !*** ./node_modules/type/prototype/is.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isObject = __webpack_require__(/*! ../object/is */ "./node_modules/type/object/is.js");

module.exports = function (value) {
	if (!isObject(value)) return false;
	try {
		if (!value.constructor) return false;
		return value.constructor.prototype === value;
	} catch (error) {
		return false;
	}
};


/***/ }),

/***/ "./node_modules/type/value/is.js":
/*!***************************************!*\
  !*** ./node_modules/type/value/is.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";


// ES3 safe
var _undefined = void 0;

module.exports = function (value) { return value !== _undefined && value !== null; };


/***/ }),

/***/ "./node_modules/ua-parser-js/dist/ua-parser.min.js":
/*!*********************************************************!*\
  !*** ./node_modules/ua-parser-js/dist/ua-parser.min.js ***!
  \*********************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* UAParser.js v1.0.2
   Copyright ?? 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License */
(function(window,undefined){"use strict";var LIBVERSION="1.0.2",EMPTY="",UNKNOWN="?",FUNC_TYPE="function",UNDEF_TYPE="undefined",OBJ_TYPE="object",STR_TYPE="string",MAJOR="major",MODEL="model",NAME="name",TYPE="type",VENDOR="vendor",VERSION="version",ARCHITECTURE="architecture",CONSOLE="console",MOBILE="mobile",TABLET="tablet",SMARTTV="smarttv",WEARABLE="wearable",EMBEDDED="embedded",UA_MAX_LENGTH=255;var AMAZON="Amazon",APPLE="Apple",ASUS="ASUS",BLACKBERRY="BlackBerry",BROWSER="Browser",CHROME="Chrome",EDGE="Edge",FIREFOX="Firefox",GOOGLE="Google",HUAWEI="Huawei",LG="LG",MICROSOFT="Microsoft",MOTOROLA="Motorola",OPERA="Opera",SAMSUNG="Samsung",SONY="Sony",XIAOMI="Xiaomi",ZEBRA="Zebra",FACEBOOK="Facebook";var extend=function(regexes,extensions){var mergedRegexes={};for(var i in regexes){if(extensions[i]&&extensions[i].length%2===0){mergedRegexes[i]=extensions[i].concat(regexes[i])}else{mergedRegexes[i]=regexes[i]}}return mergedRegexes},enumerize=function(arr){var enums={};for(var i=0;i<arr.length;i++){enums[arr[i].toUpperCase()]=arr[i]}return enums},has=function(str1,str2){return typeof str1===STR_TYPE?lowerize(str2).indexOf(lowerize(str1))!==-1:false},lowerize=function(str){return str.toLowerCase()},majorize=function(version){return typeof version===STR_TYPE?version.replace(/[^\d\.]/g,EMPTY).split(".")[0]:undefined},trim=function(str,len){if(typeof str===STR_TYPE){str=str.replace(/^\s\s*/,EMPTY).replace(/\s\s*$/,EMPTY);return typeof len===UNDEF_TYPE?str:str.substring(0,UA_MAX_LENGTH)}};var rgxMapper=function(ua,arrays){var i=0,j,k,p,q,matches,match;while(i<arrays.length&&!matches){var regex=arrays[i],props=arrays[i+1];j=k=0;while(j<regex.length&&!matches){matches=regex[j++].exec(ua);if(!!matches){for(p=0;p<props.length;p++){match=matches[++k];q=props[p];if(typeof q===OBJ_TYPE&&q.length>0){if(q.length===2){if(typeof q[1]==FUNC_TYPE){this[q[0]]=q[1].call(this,match)}else{this[q[0]]=q[1]}}else if(q.length===3){if(typeof q[1]===FUNC_TYPE&&!(q[1].exec&&q[1].test)){this[q[0]]=match?q[1].call(this,match,q[2]):undefined}else{this[q[0]]=match?match.replace(q[1],q[2]):undefined}}else if(q.length===4){this[q[0]]=match?q[3].call(this,match.replace(q[1],q[2])):undefined}}else{this[q]=match?match:undefined}}}}i+=2}},strMapper=function(str,map){for(var i in map){if(typeof map[i]===OBJ_TYPE&&map[i].length>0){for(var j=0;j<map[i].length;j++){if(has(map[i][j],str)){return i===UNKNOWN?undefined:i}}}else if(has(map[i],str)){return i===UNKNOWN?undefined:i}}return str};var oldSafariMap={"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},windowsVersionMap={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"};var regexes={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[VERSION,[NAME,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[VERSION,[NAME,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[NAME,VERSION],[/opios[\/ ]+([\w\.]+)/i],[VERSION,[NAME,OPERA+" Mini"]],[/\bopr\/([\w\.]+)/i],[VERSION,[NAME,OPERA]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,/(weibo)__([\d\.]+)/i],[NAME,VERSION],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[VERSION,[NAME,"UC"+BROWSER]],[/\bqbcore\/([\w\.]+)/i],[VERSION,[NAME,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[VERSION,[NAME,"WeChat"]],[/konqueror\/([\w\.]+)/i],[VERSION,[NAME,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[VERSION,[NAME,"IE"]],[/yabrowser\/([\w\.]+)/i],[VERSION,[NAME,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 Secure "+BROWSER],VERSION],[/\bfocus\/([\w\.]+)/i],[VERSION,[NAME,FIREFOX+" Focus"]],[/\bopt\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[VERSION,[NAME,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[VERSION,[NAME,"Dolphin"]],[/coast\/([\w\.]+)/i],[VERSION,[NAME,OPERA+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[VERSION,[NAME,"MIUI "+BROWSER]],[/fxios\/([-\w\.]+)/i],[VERSION,[NAME,FIREFOX]],[/\bqihu|(qi?ho?o?|360)browser/i],[[NAME,"360 "+BROWSER]],[/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],[[NAME,/(.+)/,"$1 "+BROWSER],VERSION],[/(comodo_dragon)\/([\w\.]+)/i],[[NAME,/_/g," "],VERSION],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[NAME,VERSION],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i],[NAME],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[NAME,FACEBOOK],VERSION],[/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[NAME,VERSION],[/\bgsa\/([\w\.]+) .*safari\//i],[VERSION,[NAME,"GSA"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[VERSION,[NAME,CHROME+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[NAME,CHROME+" WebView"],VERSION],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[VERSION,[NAME,"Android "+BROWSER]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[NAME,VERSION],[/version\/([\w\.]+) .*mobile\/\w+ (safari)/i],[VERSION,[NAME,"Mobile Safari"]],[/version\/([\w\.]+) .*(mobile ?safari|safari)/i],[VERSION,NAME],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[NAME,[VERSION,strMapper,oldSafariMap]],[/(webkit|khtml)\/([\w\.]+)/i],[NAME,VERSION],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[NAME,"Netscape"],VERSION],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[VERSION,[NAME,FIREFOX+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[NAME,VERSION]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[ARCHITECTURE,"amd64"]],[/(ia32(?=;))/i],[[ARCHITECTURE,lowerize]],[/((?:i[346]|x)86)[;\)]/i],[[ARCHITECTURE,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[ARCHITECTURE,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[ARCHITECTURE,"armhf"]],[/windows (ce|mobile); ppc;/i],[[ARCHITECTURE,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[ARCHITECTURE,/ower/,EMPTY,lowerize]],[/(sun4\w)[;\)]/i],[[ARCHITECTURE,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[ARCHITECTURE,lowerize]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[MODEL,[VENDOR,SAMSUNG],[TYPE,TABLET]],[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[MODEL,[VENDOR,SAMSUNG],[TYPE,MOBILE]],[/\((ip(?:hone|od)[\w ]*);/i],[MODEL,[VENDOR,APPLE],[TYPE,MOBILE]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[MODEL,[VENDOR,APPLE],[TYPE,TABLET]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[MODEL,[VENDOR,HUAWEI],[TYPE,TABLET]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i],[MODEL,[VENDOR,HUAWEI],[TYPE,MOBILE]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[MODEL,/_/g," "],[VENDOR,XIAOMI],[TYPE,MOBILE]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[MODEL,/_/g," "],[VENDOR,XIAOMI],[TYPE,TABLET]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[MODEL,[VENDOR,"OPPO"],[TYPE,MOBILE]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[MODEL,[VENDOR,"Vivo"],[TYPE,MOBILE]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[MODEL,[VENDOR,"Realme"],[TYPE,MOBILE]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[MODEL,[VENDOR,MOTOROLA],[TYPE,MOBILE]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[MODEL,[VENDOR,MOTOROLA],[TYPE,TABLET]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[MODEL,[VENDOR,LG],[TYPE,TABLET]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[MODEL,[VENDOR,LG],[TYPE,MOBILE]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[MODEL,[VENDOR,"Lenovo"],[TYPE,TABLET]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[MODEL,/_/g," "],[VENDOR,"Nokia"],[TYPE,MOBILE]],[/(pixel c)\b/i],[MODEL,[VENDOR,GOOGLE],[TYPE,TABLET]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[MODEL,[VENDOR,GOOGLE],[TYPE,MOBILE]],[/droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[MODEL,[VENDOR,SONY],[TYPE,MOBILE]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[MODEL,"Xperia Tablet"],[VENDOR,SONY],[TYPE,TABLET]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[MODEL,[VENDOR,"OnePlus"],[TYPE,MOBILE]],[/(alexa)webm/i,/(kf[a-z]{2}wi)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[MODEL,[VENDOR,AMAZON],[TYPE,TABLET]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[MODEL,/(.+)/g,"Fire Phone $1"],[VENDOR,AMAZON],[TYPE,MOBILE]],[/(playbook);[-\w\),; ]+(rim)/i],[MODEL,VENDOR,[TYPE,TABLET]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[MODEL,[VENDOR,BLACKBERRY],[TYPE,MOBILE]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[MODEL,[VENDOR,ASUS],[TYPE,TABLET]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[MODEL,[VENDOR,ASUS],[TYPE,MOBILE]],[/(nexus 9)/i],[MODEL,[VENDOR,"HTC"],[TYPE,TABLET]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i],[VENDOR,[MODEL,/_/g," "],[TYPE,MOBILE]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[MODEL,[VENDOR,"Acer"],[TYPE,TABLET]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[MODEL,[VENDOR,"Meizu"],[TYPE,MOBILE]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,MOBILE]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[VENDOR,MODEL,[TYPE,TABLET]],[/(surface duo)/i],[MODEL,[VENDOR,MICROSOFT],[TYPE,TABLET]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[MODEL,[VENDOR,"Fairphone"],[TYPE,MOBILE]],[/(u304aa)/i],[MODEL,[VENDOR,"AT&T"],[TYPE,MOBILE]],[/\bsie-(\w*)/i],[MODEL,[VENDOR,"Siemens"],[TYPE,MOBILE]],[/\b(rct\w+) b/i],[MODEL,[VENDOR,"RCA"],[TYPE,TABLET]],[/\b(venue[\d ]{2,7}) b/i],[MODEL,[VENDOR,"Dell"],[TYPE,TABLET]],[/\b(q(?:mv|ta)\w+) b/i],[MODEL,[VENDOR,"Verizon"],[TYPE,TABLET]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[MODEL,[VENDOR,"Barnes & Noble"],[TYPE,TABLET]],[/\b(tm\d{3}\w+) b/i],[MODEL,[VENDOR,"NuVision"],[TYPE,TABLET]],[/\b(k88) b/i],[MODEL,[VENDOR,"ZTE"],[TYPE,TABLET]],[/\b(nx\d{3}j) b/i],[MODEL,[VENDOR,"ZTE"],[TYPE,MOBILE]],[/\b(gen\d{3}) b.+49h/i],[MODEL,[VENDOR,"Swiss"],[TYPE,MOBILE]],[/\b(zur\d{3}) b/i],[MODEL,[VENDOR,"Swiss"],[TYPE,TABLET]],[/\b((zeki)?tb.*\b) b/i],[MODEL,[VENDOR,"Zeki"],[TYPE,TABLET]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[VENDOR,"Dragon Touch"],MODEL,[TYPE,TABLET]],[/\b(ns-?\w{0,9}) b/i],[MODEL,[VENDOR,"Insignia"],[TYPE,TABLET]],[/\b((nxa|next)-?\w{0,9}) b/i],[MODEL,[VENDOR,"NextBook"],[TYPE,TABLET]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[VENDOR,"Voice"],MODEL,[TYPE,MOBILE]],[/\b(lvtel\-)?(v1[12]) b/i],[[VENDOR,"LvTel"],MODEL,[TYPE,MOBILE]],[/\b(ph-1) /i],[MODEL,[VENDOR,"Essential"],[TYPE,MOBILE]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[MODEL,[VENDOR,"Envizen"],[TYPE,TABLET]],[/\b(trio[-\w\. ]+) b/i],[MODEL,[VENDOR,"MachSpeed"],[TYPE,TABLET]],[/\btu_(1491) b/i],[MODEL,[VENDOR,"Rotor"],[TYPE,TABLET]],[/(shield[\w ]+) b/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,TABLET]],[/(sprint) (\w+)/i],[VENDOR,MODEL,[TYPE,MOBILE]],[/(kin\.[onetw]{3})/i],[[MODEL,/\./g," "],[VENDOR,MICROSOFT],[TYPE,MOBILE]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,TABLET]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,MOBILE]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[VENDOR,MODEL,[TYPE,CONSOLE]],[/droid.+; (shield) bui/i],[MODEL,[VENDOR,"Nvidia"],[TYPE,CONSOLE]],[/(playstation [345portablevi]+)/i],[MODEL,[VENDOR,SONY],[TYPE,CONSOLE]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[MODEL,[VENDOR,MICROSOFT],[TYPE,CONSOLE]],[/smart-tv.+(samsung)/i],[VENDOR,[TYPE,SMARTTV]],[/hbbtv.+maple;(\d+)/i],[[MODEL,/^/,"SmartTV"],[VENDOR,SAMSUNG],[TYPE,SMARTTV]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[VENDOR,LG],[TYPE,SMARTTV]],[/(apple) ?tv/i],[VENDOR,[MODEL,APPLE+" TV"],[TYPE,SMARTTV]],[/crkey/i],[[MODEL,CHROME+"cast"],[VENDOR,GOOGLE],[TYPE,SMARTTV]],[/droid.+aft(\w)( bui|\))/i],[MODEL,[VENDOR,AMAZON],[TYPE,SMARTTV]],[/\(dtv[\);].+(aquos)/i],[MODEL,[VENDOR,"Sharp"],[TYPE,SMARTTV]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],[[VENDOR,trim],[MODEL,trim],[TYPE,SMARTTV]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[TYPE,SMARTTV]],[/((pebble))app/i],[VENDOR,MODEL,[TYPE,WEARABLE]],[/droid.+; (glass) \d/i],[MODEL,[VENDOR,GOOGLE],[TYPE,WEARABLE]],[/droid.+; (wt63?0{2,3})\)/i],[MODEL,[VENDOR,ZEBRA],[TYPE,WEARABLE]],[/(quest( 2)?)/i],[MODEL,[VENDOR,FACEBOOK],[TYPE,WEARABLE]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[VENDOR,[TYPE,EMBEDDED]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[MODEL,[TYPE,MOBILE]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[MODEL,[TYPE,TABLET]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[TYPE,TABLET]],[/(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i],[[TYPE,MOBILE]],[/(android[-\w\. ]{0,9});.+buil/i],[MODEL,[VENDOR,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[VERSION,[NAME,EDGE+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[VERSION,[NAME,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i],[NAME,VERSION],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[VERSION,NAME]],os:[[/microsoft (windows) (vista|xp)/i],[NAME,VERSION],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[NAME,[VERSION,strMapper,windowsVersionMap]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[NAME,"Windows"],[VERSION,strMapper,windowsVersionMap]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/cfnetwork\/.+darwin/i],[[VERSION,/_/g,"."],[NAME,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[NAME,"Mac OS"],[VERSION,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[VERSION,NAME],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[NAME,VERSION],[/\(bb(10);/i],[VERSION,[NAME,BLACKBERRY]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[VERSION,[NAME,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[VERSION,[NAME,FIREFOX+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[VERSION,[NAME,"webOS"]],[/crkey\/([\d\.]+)/i],[VERSION,[NAME,CHROME+"cast"]],[/(cros) [\w]+ ([\w\.]+\w)/i],[[NAME,"Chromium OS"],VERSION],[/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[NAME,VERSION],[/(sunos) ?([\w\.\d]*)/i],[[NAME,"Solaris"],VERSION],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,/(unix) ?([\w\.]*)/i],[NAME,VERSION]]};var UAParser=function(ua,extensions){if(typeof ua===OBJ_TYPE){extensions=ua;ua=undefined}if(!(this instanceof UAParser)){return new UAParser(ua,extensions).getResult()}var _ua=ua||(typeof window!==UNDEF_TYPE&&window.navigator&&window.navigator.userAgent?window.navigator.userAgent:EMPTY);var _rgxmap=extensions?extend(regexes,extensions):regexes;this.getBrowser=function(){var _browser={};_browser[NAME]=undefined;_browser[VERSION]=undefined;rgxMapper.call(_browser,_ua,_rgxmap.browser);_browser.major=majorize(_browser.version);return _browser};this.getCPU=function(){var _cpu={};_cpu[ARCHITECTURE]=undefined;rgxMapper.call(_cpu,_ua,_rgxmap.cpu);return _cpu};this.getDevice=function(){var _device={};_device[VENDOR]=undefined;_device[MODEL]=undefined;_device[TYPE]=undefined;rgxMapper.call(_device,_ua,_rgxmap.device);return _device};this.getEngine=function(){var _engine={};_engine[NAME]=undefined;_engine[VERSION]=undefined;rgxMapper.call(_engine,_ua,_rgxmap.engine);return _engine};this.getOS=function(){var _os={};_os[NAME]=undefined;_os[VERSION]=undefined;rgxMapper.call(_os,_ua,_rgxmap.os);return _os};this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}};this.getUA=function(){return _ua};this.setUA=function(ua){_ua=typeof ua===STR_TYPE&&ua.length>UA_MAX_LENGTH?trim(ua,UA_MAX_LENGTH):ua;return this};this.setUA(_ua);return this};UAParser.VERSION=LIBVERSION;UAParser.BROWSER=enumerize([NAME,VERSION,MAJOR]);UAParser.CPU=enumerize([ARCHITECTURE]);UAParser.DEVICE=enumerize([MODEL,VENDOR,TYPE,CONSOLE,MOBILE,SMARTTV,TABLET,WEARABLE,EMBEDDED]);UAParser.ENGINE=UAParser.OS=enumerize([NAME,VERSION]);if(typeof exports!==UNDEF_TYPE){if("object"!==UNDEF_TYPE&&module.exports){exports=module.exports=UAParser}exports.UAParser=UAParser}else{if("function"===FUNC_TYPE&&__webpack_require__.amdO){!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return UAParser}).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}else if(typeof window!==UNDEF_TYPE){window.UAParser=UAParser}}var $=typeof window!==UNDEF_TYPE&&(window.jQuery||window.Zepto);if($&&!$.ua){var parser=new UAParser;$.ua=parser.getResult();$.ua.get=function(){return parser.getUA()};$.ua.set=function(ua){parser.setUA(ua);var result=parser.getResult();for(var prop in result){$.ua[prop]=result[prop]}}}})(typeof window==="object"?window:this);

/***/ }),

/***/ "browser-search":
/*!*********************************!*\
  !*** external "browser-search" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_browser_search__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BrowserSearchProvider": () => (/* reexport safe */ _provider__WEBPACK_IMPORTED_MODULE_5__.BrowserSearchProvider),
/* harmony export */   "useAddDataToStore": () => (/* reexport safe */ _useAddDataToStore__WEBPACK_IMPORTED_MODULE_3__.useAddDataToStore),
/* harmony export */   "useCreateStore": () => (/* reexport safe */ _useCreateStore__WEBPACK_IMPORTED_MODULE_2__.useCreateStore),
/* harmony export */   "useDeleteStore": () => (/* reexport safe */ _useDeleteStore__WEBPACK_IMPORTED_MODULE_4__.useDeleteStore),
/* harmony export */   "useIndexValues": () => (/* reexport safe */ _useIndexValues__WEBPACK_IMPORTED_MODULE_1__.useIndexValues),
/* harmony export */   "useQuery": () => (/* reexport safe */ _useQuery__WEBPACK_IMPORTED_MODULE_0__.useQuery)
/* harmony export */ });
/* harmony import */ var _useQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useQuery */ "./src/useQuery/index.ts");
/* harmony import */ var _useIndexValues__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useIndexValues */ "./src/useIndexValues/index.ts");
/* harmony import */ var _useCreateStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useCreateStore */ "./src/useCreateStore/index.ts");
/* harmony import */ var _useAddDataToStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useAddDataToStore */ "./src/useAddDataToStore/index.ts");
/* harmony import */ var _useDeleteStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useDeleteStore */ "./src/useDeleteStore/index.ts");
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./provider */ "./src/provider/index.ts");
/* harmony import */ var _queryState__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./queryState */ "./src/queryState.ts");








})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map