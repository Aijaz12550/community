module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/IUH":
/***/ (function(module, exports) {



/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("s7nH");


/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "iHtQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _invitationCode_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qMYR");
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pCgL");
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/IUH");
/* harmony import */ var _styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SignUp = () => {
  return __jsx(_invitationCode_layout__WEBPACK_IMPORTED_MODULE_1__[/* Layout */ "a"], {
    prog: 100
  }, __jsx("p", {
    style: {
      color: "black",
      marginTop: "20px",
      fontSize: "17px"
    }
  }, "Almost there! Please SignUp to access your <Community> community dashboard."), __jsx("button", {
    className: "apple-login-btn"
  }, "continue with Apple"), __jsx("button", {
    className: "google-login-btn"
  }, "continue with Google"), __jsx("input", {
    className: "invitation-code-input",
    placeholder: "Email",
    type: "email",
    required: true
  }), __jsx("input", {
    className: "invitation-code-input",
    placeholder: "Phone",
    type: "Number",
    required: true
  }), __jsx("input", {
    className: "invitation-code-input",
    placeholder: "Password",
    type: "password",
    required: true
  }), __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      width: "100%"
    }
  }, __jsx("button", {
    className: "btn",
    style: {
      marginRight: "7px",
      alignSelf: "flex-start"
    }
  }, "< Back"), __jsx("button", {
    className: "btn",
    style: {
      width: "65%"
    }
  }, "Sign Up")));
};

/***/ }),

/***/ "pCgL":
/***/ (function(module, exports) {



/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "qMYR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Layout; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// CONCATENATED MODULE: ./components/invitationCode/progressBar.js
var __jsx = external_react_default.a.createElement;


const Progress = ({
  val
}) => {
  return __jsx("div", {
    style: {
      width: '100%'
    }
  }, __jsx(external_react_bootstrap_["ProgressBar"], {
    variant: "success",
    color: "red",
    now: val
  }));
};
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./styles/userValidation/index.scss
var userValidation = __webpack_require__("/IUH");

// CONCATENATED MODULE: ./components/invitationCode/layout.js
var layout_jsx = external_react_default.a.createElement;




const Layout = ({
  children,
  prog
}) => {
  return layout_jsx("div", {
    className: "main-container"
  }, layout_jsx("div", {
    className: "user-validation-container"
  }, layout_jsx(Progress, {
    val: prog
  }), layout_jsx("div", {
    className: "layout-children-container"
  }, children)));
};

/***/ }),

/***/ "s7nH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("iHtQ");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_components_signup__WEBPACK_IMPORTED_MODULE_1__[/* SignUp */ "a"], null));

/***/ })

/******/ });