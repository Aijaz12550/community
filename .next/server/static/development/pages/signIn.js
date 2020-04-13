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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Dashboard/dashboardRoutes/index.js":
/*!*******************************************************!*\
  !*** ./components/Dashboard/dashboardRoutes/index.js ***!
  \*******************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _viewResidents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../viewResidents */ "./components/Dashboard/viewResidents/index.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/Dashboard/dashboardRoutes/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



let routes = () => {
  let router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return [{
    path: "view_residents",
    name: "View Residents",
    component: __jsx(_viewResidents__WEBPACK_IMPORTED_MODULE_0__["ViewResident"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 18
      }
    }),
    icon: __jsx("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, __jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M1.85716 0.666748H6.61907C7.27655 0.666748 7.80954 1.19974 7.80954 1.85722V6.61913C7.80954 7.27661 7.27655 7.8096 6.61907 7.8096H1.85716C1.19968 7.8096 0.666687 7.27661 0.666687 6.61913V1.85722C0.666687 1.19974 1.19968 0.666748 1.85716 0.666748ZM11.3809 10.1905H16.1429C16.8003 10.1905 17.3333 10.7235 17.3333 11.381V16.1429C17.3333 16.8004 16.8003 17.3334 16.1429 17.3334H11.3809C10.7235 17.3334 10.1905 16.8004 10.1905 16.1429V11.381C10.1905 10.7235 10.7235 10.1905 11.3809 10.1905ZM11.3809 0.666748H16.1429C16.8003 0.666748 17.3333 1.19974 17.3333 1.85722V6.61913C17.3333 7.27661 16.8003 7.8096 16.1429 7.8096H11.3809C10.7235 7.8096 10.1905 7.27661 10.1905 6.61913V1.85722C10.1905 1.19974 10.7235 0.666748 11.3809 0.666748ZM1.85716 10.1905H6.61907C7.27655 10.1905 7.80954 10.7235 7.80954 11.381V16.1429C7.80954 16.8004 7.27655 17.3334 6.61907 17.3334H1.85716C1.19968 17.3334 0.666687 16.8004 0.666687 16.1429V11.381C0.666687 10.7235 1.19968 10.1905 1.85716 10.1905Z",
      fill: router.query.role === "view_residents" ? "#009999" : "#344563",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 11
      }
    }))
  }, {
    path: "invite_residents",
    name: "Invite Residents",
    component: __jsx("p", {
      style: {
        marginTop: 80
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 18
      }
    }, " hello seond 222222"),
    icon: __jsx("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, __jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14.9524 3.84128C14.0757 3.84128 13.3651 3.13062 13.3651 2.25397C13.3651 1.37733 14.0757 0.666672 14.9524 0.666672C15.829 0.666672 16.5397 1.37733 16.5397 2.25397C16.5397 3.13062 15.829 3.84128 14.9524 3.84128ZM7.01588 4.63496C7.01588 5.5116 7.72654 6.22226 8.60318 6.22226C9.47982 6.22226 10.1905 5.5116 10.1905 4.63496C10.1905 3.75832 9.47982 3.04766 8.60318 3.04766C7.72654 3.04766 7.01588 3.75832 7.01588 4.63496ZM2.25399 8.60317C1.37735 8.60317 0.666687 7.89251 0.666687 7.01587C0.666687 6.13922 1.37735 5.42857 2.25399 5.42857C3.13063 5.42857 3.84129 6.13922 3.84129 7.01587C3.84129 7.89251 3.13063 8.60317 2.25399 8.60317ZM9.79366 9.39685H8.20635C7.54887 9.39685 7.01588 9.92984 7.01588 10.5873V16.1429C7.01588 16.8004 7.54887 17.3334 8.20635 17.3334H9.79366C10.4511 17.3334 10.9841 16.8004 10.9841 16.1429V10.5873C10.9841 9.92984 10.4511 9.39685 9.79366 9.39685ZM3.44446 11.7778H1.85716C1.19968 11.7778 0.666687 12.3108 0.666687 12.9682V16.1428C0.666687 16.8003 1.19968 17.3333 1.85716 17.3333H3.44446C4.10195 17.3333 4.63494 16.8003 4.63494 16.1428V12.9682C4.63494 12.3108 4.10195 11.7778 3.44446 11.7778ZM16.1428 7.01586H14.5555C13.8981 7.01586 13.3651 7.54886 13.3651 8.20634V16.11C13.3651 16.7675 13.8981 17.3005 14.5555 17.3005H16.1428C16.8003 17.3005 17.3333 16.7675 17.3333 16.11V8.20634C17.3333 7.54886 16.8003 7.01586 16.1428 7.01586ZM6.2237 4.72005C6.23838 5.13769 6.36062 5.52797 6.56358 5.86402L4.59885 6.6008C4.52736 6.19411 4.35265 5.82298 4.10273 5.51541L6.2237 4.72005ZM12.9129 3.48312C12.7099 3.14706 12.5877 2.75679 12.573 2.33915L10.452 3.13451C10.7019 3.44207 10.8766 3.8132 10.9481 4.21989L12.9129 3.48312Z",
      fill: router.query.role === "invite_residents" ? "#009999" : "#344563",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }
    }))
  }, {
    path: "invite_members",
    name: "Invite Members",
    component: __jsx("p", {
      style: {
        marginTop: 80
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 18
      }
    }, "Hello 3333333"),
    icon: __jsx("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }, __jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.3213 16.7365C17.3992 17.0867 17.0867 17.3992 16.7365 17.3213L12.7609 16.4379C11.6055 17.0232 10.3245 17.333 8.99985 17.333C4.39757 17.333 0.666687 13.6021 0.666687 8.99983C0.666687 4.39756 4.39757 0.666672 8.99985 0.666672C13.6021 0.666672 17.333 4.39756 17.333 8.99983C17.333 10.3245 17.0232 11.6055 16.4379 12.7609L17.3213 16.7365Z",
      fill: router.query.role === "invite_members" ? "#009999" : "#344563",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 11
      }
    }))
  }, {
    path: "manage_members",
    name: "Manage Members",
    component: __jsx("p", {
      style: {
        marginTop: 80
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 18
      }
    }, " hello seond 444444444444"),
    icon: __jsx("svg", {
      width: "17",
      height: "16",
      viewBox: "0 0 17 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }
    }, __jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12.6364 0.337662C12.4212 0.337662 12.2468 0.512096 12.2468 0.727272V2.28571C12.2468 2.50089 12.4212 2.67532 12.6364 2.67532C12.8516 2.67532 13.026 2.50089 13.026 2.28571V0.727272C13.026 0.512096 12.8516 0.337662 12.6364 0.337662ZM4.84419 0.337662C4.62902 0.337662 4.45458 0.512096 4.45458 0.727272V2.28571C4.45458 2.50089 4.62902 2.67532 4.84419 2.67532C5.05937 2.67532 5.2338 2.50089 5.2338 2.28571V0.727272C5.2338 0.512096 5.05937 0.337662 4.84419 0.337662ZM6.01302 1.11688H11.4676V2.28571C11.4676 2.93124 11.9909 3.45455 12.6364 3.45455C13.2819 3.45455 13.8052 2.93124 13.8052 2.28571V1.11688H15.7533C16.3988 1.11688 16.9221 1.64019 16.9221 2.28571V5.01299H0.558472V2.28571C0.558472 1.64019 1.08178 1.11688 1.7273 1.11688H3.67535V2.28571C3.67535 2.93124 4.19866 3.45455 4.84419 3.45455C5.48971 3.45455 6.01302 2.93124 6.01302 2.28571V1.11688ZM16.9221 12.4156V5.7922H0.558472V12.4156C0.558472 14.3522 2.12838 15.9221 4.06497 15.9221H13.4156C15.3522 15.9221 16.9221 14.3522 16.9221 12.4156ZM5.27125 9.6467C5.43795 9.48807 5.70169 9.49461 5.86032 9.66132L7.54588 11.4327L11.0855 7.59312C11.2414 7.42393 11.505 7.41321 11.6742 7.56919C11.8434 7.72516 11.8541 7.98876 11.6982 8.15796L7.85705 12.3246C7.69381 12.5017 7.41487 12.5039 7.24885 12.3294L5.25662 10.2358C5.09799 10.0691 5.10454 9.80533 5.27125 9.6467Z",
      fill: router.query.role === "manage_members" ? "#009999" : "#344563",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }
    }))
  }, {
    path: "managae_documents",
    name: "Manage Documents",
    component: __jsx("p", {
      style: {
        marginTop: 80
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 18
      }
    }, "Manage Component"),
    icon: __jsx("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }
    }, __jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M13.2488 6.89959L17.3334 10.9829V3.44445C17.3334 1.91032 16.0897 0.666668 14.5556 0.666668H3.44446C1.91034 0.666668 0.666687 1.91032 0.666687 3.44445V14.1587L6.33847 8.48695C6.49923 8.32618 6.76193 8.33309 6.91403 8.50208L8.90032 10.687L12.6877 6.89965C12.8426 6.7447 13.0938 6.74467 13.2488 6.89959ZM7.80957 4.63492C7.80957 5.51156 7.09892 6.22222 6.22227 6.22222C5.34563 6.22222 4.63497 5.51156 4.63497 4.63492C4.63497 3.75827 5.34563 3.04761 6.22227 3.04761C7.09892 3.04761 7.80957 3.75827 7.80957 4.63492ZM6.22223 5.42857C5.78391 5.42857 5.42858 5.07324 5.42858 4.63491C5.42858 4.19659 5.78391 3.84126 6.22223 3.84126C6.66055 3.84126 7.01588 4.19659 7.01588 4.63491C7.01588 5.07324 6.66055 5.42857 6.22223 5.42857ZM17.3333 14.5068V12.2498L12.9349 7.80953L9.37434 11.4051L14.7065 17.3281C16.1722 17.2383 17.3333 16.0095 17.3333 14.5068ZM3.33818 17.3333H13.6302L6.5218 9.44017L0.666687 15.3528C1.02277 16.5006 2.08417 17.3333 3.33818 17.3333Z",
      fill: router.query.role === "managae_documents" ? "#009999" : "#344563",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 11
      }
    }))
  }, {
    path: "send_communication",
    name: "Send Communication",
    component: __jsx("p", {
      style: {
        marginTop: 80
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 18
      }
    }, " communication"),
    icon: __jsx("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 9
      }
    }, __jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M2.16782 4.59754C2.04119 4.40337 2.06788 4.14705 2.23179 3.98314L3.98314 2.23179C4.14705 2.06788 4.40337 2.04119 4.59754 2.16782L5.95278 3.05167C6.27266 2.88749 6.6056 2.74933 6.94871 2.63877L7.28195 1.0559C7.3297 0.829062 7.52982 0.666687 7.76163 0.666687H10.2384C10.4702 0.666687 10.6703 0.829062 10.7181 1.0559L11.0513 2.63877C11.3944 2.74933 11.7274 2.88749 12.0473 3.05167L13.4025 2.16782C13.5967 2.04119 13.853 2.06788 14.0169 2.23179L15.7683 3.98314C15.9322 4.14705 15.9589 4.40337 15.8322 4.59754L14.9484 5.95278C15.1125 6.27266 15.2507 6.6056 15.3613 6.94871L16.9441 7.28195C17.171 7.3297 17.3334 7.52982 17.3334 7.76163V10.2384C17.3334 10.4702 17.171 10.6703 16.9441 10.7181L15.3613 11.0513C15.2507 11.3944 15.1125 11.7274 14.9484 12.0473L15.8322 13.4025C15.9589 13.5967 15.9322 13.853 15.7683 14.0169L14.0169 15.7683C13.853 15.9322 13.5967 15.9589 13.4025 15.8322L12.0473 14.9484C11.7274 15.1125 11.3944 15.2507 11.0513 15.3613L10.7181 16.9441C10.6703 17.171 10.4702 17.3334 10.2384 17.3334H7.76163C7.52982 17.3334 7.3297 17.171 7.28195 16.9441L6.94871 15.3613C6.6056 15.2507 6.27266 15.1125 5.95278 14.9484L4.59754 15.8322C4.40337 15.9589 4.14705 15.9322 3.98314 15.7683L2.23179 14.0169C2.06788 13.853 2.04119 13.5967 2.16782 13.4025L3.05167 12.0473C2.88749 11.7274 2.74933 11.3944 2.63877 11.0513L1.0559 10.7181C0.829062 10.6703 0.666687 10.4702 0.666687 10.2384V7.76163C0.666687 7.52982 0.829062 7.3297 1.0559 7.28195L2.63877 6.94871C2.74933 6.6056 2.88749 6.27266 3.05167 5.95278L2.16782 4.59754ZM9.00002 12.4314C7.10493 12.4314 5.56865 10.8951 5.56865 9.00002C5.56865 7.10493 7.10493 5.56865 9.00002 5.56865C10.8951 5.56865 12.4314 7.10493 12.4314 9.00002C12.4314 10.8951 10.8951 12.4314 9.00002 12.4314ZM11.451 9.00002C11.451 10.3537 10.3537 11.451 9.00006 11.451C7.64642 11.451 6.54908 10.3537 6.54908 9.00002C6.54908 7.64638 7.64642 6.54904 9.00006 6.54904C10.3537 6.54904 11.451 7.64638 11.451 9.00002Z",
      fill: router.query.role === "send_communication" ? "#009999" : "#344563",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 11
      }
    }))
  }];
};

/***/ }),

/***/ "./components/Dashboard/footer/index.js":
/*!**********************************************!*\
  !*** ./components/Dashboard/footer/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/Dashboard/footer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("footer", {
      className: "footer" + (this.props.default ? " footer-default" : ""),
      style: {
        background: "white",
        height: '50px',
        position: 'absolute',
        bottom: 0,
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      fluid: this.props.fluid ? true : false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 11
      }
    }, __jsx("nav", {
      className: "footer-nav",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 15
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "#",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 19
      }
    }, "Community management System")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "#",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 19
      }
    }, "Blog")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "#",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 19
      }
    }, "Licenses")))), __jsx("div", {
      className: "credits ml-auto",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "copyright",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }, "\xA9 ", 1900 + new Date().getYear(), ", made with", " ", __jsx("i", {
      className: "fa fa-heart heart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }), " by talktiva")))));
  }

}

Footer.propTypes = {
  default: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  fluid: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Dashboard/imageRow/index.js":
/*!************************************************!*\
  !*** ./components/Dashboard/imageRow/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/Dashboard/imageRow/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class Images extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "test", () => {
      if (this.state.width >= 2000) {
        this.setState({
          showData: 6
        });
      } else if (this.state.width >= 1800) {
        this.setState({
          showData: 5
        });
      } else if (this.state.width >= 1600) {
        this.setState({
          showData: 4
        });
      } else if (this.state.width >= 1400) {
        this.setState({
          showData: 3
        });
      } else if (this.state.width >= 1200) {
        this.setState({
          showData: 2
        });
      } else if (this.state.width >= 1000) {
        this.setState({
          showData: 1
        });
      } else {
        this.setState({
          showData: 0
        });
      }
    });

    this.state = {
      width: 0,
      height: 0,
      showData: 4
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    }, () => this.test());
  }

  render() {
    return __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, this.props.familyMember.map((v, i) => {
      let margin = 0;
      let zIndex = 0;

      if (i < this.state.showData) {
        if (i == 0) {
          margin = 0;
          zIndex = 4;
        } else if (i == 1) {
          margin = -10;
          zIndex = 3;
        } else if (i == 2) {
          margin = -10;
          zIndex = 2;
        } else if (i == 3) {
          margin = -10;
          zIndex = 1;
        }

        return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Image"], {
          style: {
            marginLeft: margin,
            zIndex: zIndex
          },
          key: i,
          className: "roundedCircle",
          src: v.memberImage,
          circle: true,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 29
          }
        });
      }
    }), this.props.familyMember.length > this.state.showData ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
      style: {
        width: 47.5,
        height: 47.5,
        borderRadius: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'SF Pro Display',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#344563',
        background: '#dadee2',
        marginLeft: -10
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }, "+", this.props.familyMember.length > this.state.showData ? this.props.familyMember.length - this.state.showData : 0) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), __jsx("div", {
      style: {
        marginLeft: 5,
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        color: '#344563'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }, this.props.familyMember.map((v, i, arr) => {
      if (i < this.state.showData) {
        return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, v.memberName, ",");
      }
    }), this.props.familyMember.length > this.state.showData ? ` & ${this.props.familyMember.length > this.state.showData ? this.props.familyMember.length - this.state.showData : 0} Others` : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Images);

/***/ }),

/***/ "./components/Dashboard/index.js":
/*!***************************************!*\
  !*** ./components/Dashboard/index.js ***!
  \***************************************/
/*! exports provided: ViewResident, DashBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoard", function() { return DashBoard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./components/Dashboard/sidebar/index.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./components/Dashboard/navbar/index.jsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/Dashboard/footer/index.js");
/* harmony import */ var _dashboardRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboardRoutes */ "./components/Dashboard/dashboardRoutes/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _viewResidents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewResidents */ "./components/Dashboard/viewResidents/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewResident", function() { return _viewResidents__WEBPACK_IMPORTED_MODULE_6__["ViewResident"]; });

var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/Dashboard/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const DashBoard = ({
  users
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  console.log("users ==>", users);
  return __jsx("div", {
    className: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_1__["SideBar"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "main-panel",
    style: {
      background: "#F6F7FB",
      height: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      height: "calc(90% - 120px)"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, Object(_dashboardRoutes__WEBPACK_IMPORTED_MODULE_4__["routes"])().map((val, key) => {
    var _router$query;

    if ((router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.role) === val.path) {
      return __jsx("div", {
        key: key,
        style: {
          padding: "10px"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }
      }, val.component);
    }
  })), __jsx(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  })));
};

/***/ }),

/***/ "./components/Dashboard/navbar/index.jsx":
/*!***********************************************!*\
  !*** ./components/Dashboard/navbar/index.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_navbar_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/navbar/index.scss */ "./styles/navbar/index.scss");
/* harmony import */ var _styles_navbar_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_navbar_index_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/Dashboard/navbar/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent"
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.sidebarToggle = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent"
      });
    } else {
      this.setState({
        color: "dark"
      });
    }

    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  }

  render() {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      expand: "lg",
      className: "navbar-absolute fixed-top",
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: '#FEFFFF',
        boxShadow: '0px 25px 50px rgba(0, 0, 0, 0.04)',
        padding: 0,
        height: '70px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      fluid: true,
      style: this.state.isOpen ? {
        marginTop: 24
      } : {
        margin: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "navbar-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "navbar-toggle",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, __jsx("button", {
      type: "button",
      ref: this.sidebarToggle,
      className: "navbar-toggler",
      onClick: () => this.openSidebar(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "navbar-toggler-bar bar1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }
    }), __jsx("span", {
      className: "navbar-toggler-bar bar2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }), __jsx("span", {
      className: "navbar-toggler-bar bar3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 17
      }
    })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
      onClick: this.toggle,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }
    }, __jsx("span", {
      className: "navbar-toggler-bar navbar-kebab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }), __jsx("span", {
      className: "navbar-toggler-bar navbar-kebab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }), __jsx("span", {
      className: "navbar-toggler-bar navbar-kebab",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: this.state.isOpen,
      navbar: true,
      className: "justify-content-end",
      style: {
        background: '#009999',
        marginTop: 19
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
      navbar: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
      style: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 15
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
      style: {
        marginRight: 25
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "nav-link btn-magnify",
      style: {},
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      className: "roundedCircle",
      src: "/assets/mockup/Notifications.png",
      circle: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 23
      }
    })))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
      style: {
        width: '38px',
        height: '38px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Image"], {
      className: "roundedCircle",
      style: {
        width: 38,
        height: 38,
        borderRadius: 19
      },
      src: "/assets/mockup/img10.png",
      circle: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavItem"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "nav-link btn-magnify",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: "profileName",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 21
      }
    }, "Bradley Robin"))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      nav: true,
      isOpen: this.state.dropdownOpen,
      toggle: e => this.dropdownToggle(e),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 17
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
      caret: true,
      nav: true,
      style: {
        color: 'black'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 19
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
      right: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 19
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
      tag: "a",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 21
      }
    }, "Action"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
      tag: "a",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 21
      }
    }, "Another Action"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
      tag: "a",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 21
      }
    }, "Something else here"))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Dashboard/residentMemberDetail/index.js":
/*!************************************************************!*\
  !*** ./components/Dashboard/residentMemberDetail/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_residentMemberDetail_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/residentMemberDetail/index.scss */ "./styles/residentMemberDetail/index.scss");
/* harmony import */ var _styles_residentMemberDetail_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_residentMemberDetail_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/Dashboard/residentMemberDetail/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class ResidentMemberDetail extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  render() {
    var _this$props, _this$props$trData, _this$props2, _this$props2$trData, _this$props3, _this$props3$trData, _this$props4, _this$props4$trData;

    return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
      show: this.props.show,
      onHide: this.props.onHide,
      className: "contained-modal-title-vcenter modalComponent",
      "aria-labelledby": "contained-modal-title-vcenter",
      centered: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
      closeButton: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }
    }, __jsx("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 25
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
      lg: "12",
      md: "12",
      sm: "12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 29
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      style: {
        border: "none",
        boxShadow: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 33
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Card"].Body, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 37
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "number",
      style: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 45
      }
    }, __jsx("p", {
      className: "view-residents-title",
      style: {},
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 49
      }
    }, (_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$trData = _this$props.trData) === null || _this$props$trData === void 0 ? void 0 : _this$props$trData.address), __jsx("p", {
      className: "view-residents-address",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 49
      }
    }, __jsx("span", {
      style: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 14,
        lineHeight: '19px',
        color: '#7D8DA1'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 53
      }
    }, "Residence Since:"), __jsx("span", {
      style: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '19px',
        color: '#344563'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 53
      }
    }, ((_this$props2 = this.props) === null || _this$props2 === void 0 ? void 0 : (_this$props2$trData = _this$props2.trData) === null || _this$props2$trData === void 0 ? void 0 : _this$props2$trData.residenceSince.split(' ')[1]) + ' ' + ((_this$props3 = this.props) === null || _this$props3 === void 0 ? void 0 : (_this$props3$trData = _this$props3.trData) === null || _this$props3$trData === void 0 ? void 0 : _this$props3$trData.residenceSince.split(' ')[2]))), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 49
      }
    }))))))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
      style: {
        paddingTop: 0
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
      className: "residents-tabl",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 21
      }
    }, __jsx("thead", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 25
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 29
      }
    }, __jsx("th", {
      className: "td1-m",
      style: {
        width: '30%',
        alignItems: 'center',
        display: 'flex',
        paddingLeft: 30
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 33
      }
    }, "Name"), __jsx("th", {
      className: "td2-m",
      style: {
        width: '20%',
        alignItems: 'center',
        display: 'flex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 33
      }
    }, "Phone Number"), __jsx("th", {
      className: "td3-m",
      style: {
        width: '30%',
        alignItems: 'center',
        display: 'flex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 33
      }
    }, "Email Address"), __jsx("th", {
      className: "text-right",
      style: {
        width: '20%',
        alignItems: 'center',
        display: 'flex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 33
      }
    }, "Member Since"))), __jsx("tbody", {
      className: "scrollBarStyle tBody",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 25
      }
    }, (_this$props4 = this.props) === null || _this$props4 === void 0 ? void 0 : (_this$props4$trData = _this$props4.trData) === null || _this$props4$trData === void 0 ? void 0 : _this$props4$trData.familyMember.map((data1, index) => __jsx("tr", {
      className: "residents-table-row-modal",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 33
      }
    }, __jsx("td", {
      className: "address-td sm-dmemberImageisplay-none td1-m",
      style: {
        width: '30%',
        alignItems: 'center',
        display: 'flex'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 37
      }
    }, __jsx("svg", {
      width: "50",
      height: "50",
      viewBox: "0 0 50 50",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      xlink: "http://www.w3.org/1999/xlink",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 41
      }
    }, __jsx("circle", {
      cx: "25",
      cy: "25",
      r: "24.5",
      fill: "url(#pattern0)",
      stroke: "white",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 45
      }
    }), __jsx("defs", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 45
      }
    }, __jsx("pattern", {
      id: "pattern0",
      patternContentUnits: "objectBoundingBox",
      width: "1",
      height: "1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 49
      }
    }, __jsx("use", {
      href: "#image0",
      transform: "scale(0.005)",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 53
      }
    })), __jsx("image", {
      id: "image0",
      width: "200",
      height: "200",
      href: "data:image/png;base64,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",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 49
      }
    }))), __jsx("span", {
      style: {
        marginLeft: 20
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 41
      }
    }, data1.memberName)), __jsx("td", {
      className: "td2-m",
      style: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '20%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 37
      }
    }, data1.phoneNumber), __jsx("td", {
      className: "td3-m",
      style: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '30%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 37
      }
    }, data1.emailAddress), __jsx("td", {
      className: "text-right",
      style: {
        width: '20%',
        alignItems: 'center',
        display: 'flex',
        textOverflow: 'ellipsis'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 37
      }
    }, data1.memberSince.split(' ')[1] + ' ' + data1.memberSince.split(' ')[2])))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ResidentMemberDetail);

/***/ }),

/***/ "./components/Dashboard/sidebar/index.js":
/*!***********************************************!*\
  !*** ./components/Dashboard/sidebar/index.js ***!
  \***********************************************/
/*! exports provided: SideBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBar", function() { return SideBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dashboardRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboardRoutes */ "./components/Dashboard/dashboardRoutes/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_sidebar_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/sidebar/index.scss */ "./styles/sidebar/index.scss");
/* harmony import */ var _styles_sidebar_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_sidebar_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/Dashboard/sidebar/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const SideBar = () => {
  const sidebar = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return __jsx("div", {
    className: "sidebar",
    "data-color": "red",
    "data-active-color": "white",
    style: {
      height: '100%',
      border: 'none',
      boxShadow: '1px 0px 25px rgba(0, 0, 0, 0.04)'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "sidebar-header logo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("svg", {
    width: "154",
    height: "75",
    viewBox: "0 0 154 75",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M98.9421 19.6442L93.3587 20.2954V43.3768H88.9911H61.8771H57.5089V19.6442H51.1553L74.7538 1.71014L81.3469 6.60069V1.71014H87.005V10.8149L98.9421 19.6442Z",
    fill: "#009999",
    stroke: "#009999",
    strokeWidth: "1.5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M73.4834 36.7277V36.831C73.4728 36.8172 73.4568 36.7965 73.4409 36.7759C73.4568 36.7552 73.4674 36.7414 73.4834 36.7277Z",
    fill: "#009999",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M73.441 36.7759C73.3943 36.8241 73.354 36.8723 73.3125 36.9136V36.6381C73.3592 36.6932 73.4001 36.7414 73.441 36.7759Z",
    fill: "#009999",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M75.337 21.9101C76.2558 21.0097 77.4372 20.4601 78.8736 20.4601C81.9658 20.4601 84.3984 22.938 84.3984 26.4251C84.3984 28.5167 83.3487 30.2559 81.4099 32.1321C80.9926 32.5363 79.7172 33.6813 79.6599 33.7354C79.4792 33.9038 79.2846 34.0783 79.0764 34.2583C78.8062 34.4916 78.5319 34.7203 78.2536 34.9442C77.6586 35.4233 77.0233 35.9058 76.3884 36.3683C76.107 36.5733 75.8235 36.7756 75.538 36.975C75.3948 37.0738 75.2239 37.1268 75.0488 37.1268C74.8737 37.1268 74.7029 37.0738 74.5597 36.975C74.274 36.7757 73.9904 36.5736 73.7088 36.3687C73.0756 35.9087 72.4538 35.4338 71.844 34.9442C71.5657 34.7203 71.2914 34.4916 71.0213 34.2583C70.813 34.0783 70.6184 33.9038 70.4378 33.7354C70.3804 33.6813 69.105 32.5359 68.6877 32.1321C66.7493 30.2559 65.6992 28.5171 65.6992 26.4251C65.6992 22.9376 68.1318 20.4601 71.224 20.4601C72.6604 20.4601 73.8419 21.0093 74.7607 21.9101C74.8639 22.0114 74.96 22.1126 75.0488 22.2126C75.1381 22.1126 75.2337 22.0114 75.337 21.9105V21.9101ZM75.3748 35.0308C75.9857 34.5871 76.5855 34.1289 77.1737 33.6567C77.4368 33.4452 77.6961 33.2292 77.9514 33.0088C78.144 32.8421 78.3229 32.6817 78.4869 32.5288C78.5664 32.4546 79.8256 31.3234 80.2157 30.9463C81.8608 29.3534 82.6985 27.9667 82.6985 26.4251C82.6985 23.8447 81.0122 22.1268 78.8736 22.1268C77.9221 22.1268 77.1576 22.4822 76.5388 23.0889C76.328 23.296 76.1412 23.5255 75.9821 23.773C75.9242 23.8603 75.8718 23.9511 75.8253 24.0447C75.5256 24.7039 74.5716 24.7039 74.2724 24.0447C74.226 23.9511 74.1738 23.8603 74.116 23.773C73.9567 23.5254 73.7698 23.296 73.5588 23.0889C72.9401 22.4822 72.1755 22.1268 71.224 22.1268C69.0855 22.1268 67.3991 23.8447 67.3991 26.4251C67.3991 27.9667 68.2364 29.3534 69.8819 30.9459C70.2716 31.3234 71.5312 32.4546 71.6107 32.5288C71.7748 32.6817 71.9537 32.8421 72.1462 33.0088C72.3867 33.2171 72.6468 33.4338 72.9239 33.6567C73.6164 34.2129 74.325 34.7497 75.0488 35.2662C75.1525 35.1917 75.2613 35.1133 75.3748 35.0308Z",
    fill: "white",
    stroke: "white",
    strokeWidth: "0.5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M70.8933 21.5018C72.5554 20.6685 74.3561 22.5435 75.0486 23.5851C77.4726 23.2379 79.204 20.4601 83.3594 23.5851C84.5347 24.469 81.2817 35.0435 74.0098 35.0435C61.5437 27.7518 68.8156 22.5435 70.8933 21.5018Z",
    fill: "white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M16.9681 69.768L12.7681 59.304L7.87207 69.816L0.768066 51.456H4.84807L8.32807 61.68L11.0161 54.936L9.62407 51.456H13.0801L17.0401 61.272L20.0401 51.456H23.7841L16.9681 69.768Z",
    fill: "#344563",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M29.3663 66.432C30.0383 66.432 30.7343 66.2 31.4543 65.736L32.9423 68.232C32.3663 68.552 31.7583 68.808 31.1183 69C30.4783 69.192 29.8703 69.288 29.2943 69.288C28.0463 69.288 26.9663 69.056 26.0543 68.592C25.1583 68.112 24.4783 67.448 24.0143 66.6C23.5503 65.736 23.3183 64.752 23.3183 63.648C23.3183 62.624 23.5823 61.68 24.1103 60.816C24.6543 59.952 25.3903 59.272 26.3183 58.776C27.2463 58.264 28.2623 58.008 29.3663 58.008C30.8703 58.008 32.1023 58.448 33.0623 59.328C34.0383 60.208 34.6703 61.464 34.9583 63.096L27.2783 65.544C27.7903 66.136 28.4863 66.432 29.3663 66.432ZM29.1023 60.624C28.3503 60.624 27.7503 60.88 27.3023 61.392C26.8543 61.904 26.6303 62.592 26.6303 63.456V63.672L31.2383 62.112C30.9023 61.12 30.1903 60.624 29.1023 60.624Z",
    fill: "#344563",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M53.8639 51.336V69.72H53.7679L41.4079 58.56L41.4799 69H37.9519V50.64H38.0959L50.4319 61.968L50.3599 51.336H53.8639Z",
    fill: "#344563",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M63.0929 66.432C63.7649 66.432 64.4609 66.2 65.1809 65.736L66.6689 68.232C66.0929 68.552 65.4849 68.808 64.8449 69C64.2049 69.192 63.5969 69.288 63.0209 69.288C61.7729 69.288 60.6929 69.056 59.7809 68.592C58.8849 68.112 58.2049 67.448 57.7409 66.6C57.2769 65.736 57.0449 64.752 57.0449 63.648C57.0449 62.624 57.3089 61.68 57.8369 60.816C58.3809 59.952 59.1169 59.272 60.0449 58.776C60.9729 58.264 61.9889 58.008 63.0929 58.008C64.5969 58.008 65.8289 58.448 66.7889 59.328C67.7649 60.208 68.3969 61.464 68.6849 63.096L61.0049 65.544C61.5169 66.136 62.2129 66.432 63.0929 66.432ZM62.8289 60.624C62.0769 60.624 61.4769 60.88 61.0289 61.392C60.5809 61.904 60.3569 62.592 60.3569 63.456V63.672L64.9649 62.112C64.6289 61.12 63.9169 60.624 62.8289 60.624Z",
    fill: "#344563",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M74.4865 58.512V69H71.1265V58.512H74.4865ZM71.0545 54.792C71.0545 54.312 71.2385 53.912 71.6065 53.592C71.9905 53.256 72.4225 53.088 72.9025 53.088C73.3665 53.088 73.7825 53.256 74.1505 53.592C74.5185 53.912 74.7025 54.312 74.7025 54.792C74.7025 55.272 74.5185 55.672 74.1505 55.992C73.7825 56.312 73.3665 56.472 72.9025 56.472C72.4225 56.472 71.9905 56.312 71.6065 55.992C71.2385 55.672 71.0545 55.272 71.0545 54.792Z",
    fill: "#344563",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M89.6828 58.512V69C89.6828 69.992 89.3948 70.888 88.8188 71.688C88.2588 72.504 87.4908 73.136 86.5148 73.584C85.5548 74.048 84.5068 74.28 83.3708 74.28C82.5068 74.28 81.7468 74.176 81.0908 73.968C80.4508 73.76 79.9308 73.528 79.5308 73.272C79.1468 73.016 78.6828 72.664 78.1388 72.216L80.1068 69.912C80.5868 70.36 81.0588 70.712 81.5228 70.968C82.0028 71.224 82.6028 71.352 83.3228 71.352C84.1708 71.352 84.8828 71.136 85.4588 70.704C86.0348 70.288 86.3228 69.704 86.3228 68.952V67.464C86.0028 68.008 85.5068 68.448 84.8348 68.784C84.1788 69.12 83.3708 69.288 82.4108 69.288C81.4668 69.288 80.5868 69.048 79.7708 68.568C78.9708 68.072 78.3308 67.4 77.8508 66.552C77.3708 65.688 77.1308 64.736 77.1308 63.696C77.1308 62.64 77.3788 61.672 77.8748 60.792C78.3868 59.912 79.0508 59.224 79.8668 58.728C80.6988 58.232 81.5708 57.984 82.4828 57.984C83.3468 57.984 84.1148 58.112 84.7868 58.368C85.4588 58.608 85.9708 58.928 86.3228 59.328L86.5868 58.512H89.6828ZM83.4188 66.552C84.7628 66.552 85.7308 66.024 86.3228 64.968V62.4C86.0988 61.888 85.7228 61.48 85.1948 61.176C84.6828 60.872 84.0908 60.72 83.4188 60.72C82.6028 60.72 81.9148 60.992 81.3548 61.536C80.7948 62.08 80.5148 62.768 80.5148 63.6C80.5148 64.432 80.7948 65.136 81.3548 65.712C81.9148 66.272 82.6028 66.552 83.4188 66.552Z",
    fill: "#344563",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M100.43 58.008C101.422 58.008 102.246 58.304 102.902 58.896C103.574 59.488 103.918 60.24 103.934 61.152V69H100.574V62.4C100.526 61.376 100.014 60.864 99.0383 60.864C98.2703 60.864 97.6543 61.224 97.1903 61.944C96.7263 62.664 96.4943 63.592 96.4943 64.728V69H93.1343V50.064H96.4223V60.168C96.8063 59.496 97.3343 58.968 98.0063 58.584C98.6943 58.2 99.5023 58.008 100.43 58.008Z",
    fill: "#344563",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M114.728 57.984C115.64 57.984 116.472 58.208 117.224 58.656C117.992 59.088 118.6 59.72 119.048 60.552C119.496 61.384 119.72 62.376 119.72 63.528C119.72 64.68 119.472 65.696 118.976 66.576C118.48 67.44 117.816 68.112 116.984 68.592C116.152 69.056 115.248 69.288 114.272 69.288C112.848 69.288 111.672 68.84 110.744 67.944V69H107.384V50.064H110.72V59.232C111.168 58.864 111.736 58.568 112.424 58.344C113.112 58.104 113.88 57.984 114.728 57.984ZM113.528 66.456C114.024 66.456 114.48 66.328 114.896 66.072C115.328 65.816 115.672 65.464 115.928 65.016C116.184 64.552 116.312 64.048 116.312 63.504C116.312 62.672 116.04 61.984 115.496 61.44C114.952 60.896 114.296 60.624 113.528 60.624C112.872 60.624 112.296 60.776 111.8 61.08C111.304 61.384 110.952 61.792 110.744 62.304V64.872C111.32 65.928 112.248 66.456 113.528 66.456Z",
    fill: "#344563",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M121.545 63.624C121.545 62.552 121.793 61.592 122.289 60.744C122.801 59.896 123.513 59.232 124.425 58.752C125.353 58.256 126.401 58.008 127.569 58.008C128.737 58.008 129.761 58.256 130.641 58.752C131.537 59.232 132.225 59.896 132.705 60.744C133.185 61.592 133.425 62.552 133.425 63.624C133.425 64.696 133.185 65.664 132.705 66.528C132.225 67.392 131.537 68.072 130.641 68.568C129.761 69.048 128.721 69.288 127.521 69.288C126.353 69.288 125.313 69.064 124.401 68.616C123.505 68.152 122.801 67.496 122.289 66.648C121.793 65.8 121.545 64.792 121.545 63.624ZM124.929 63.648C124.929 64.48 125.169 65.176 125.649 65.736C126.129 66.28 126.737 66.552 127.473 66.552C128.241 66.552 128.857 66.28 129.321 65.736C129.801 65.192 130.041 64.496 130.041 63.648C130.041 62.8 129.801 62.104 129.321 61.56C128.857 61.016 128.241 60.744 127.473 60.744C126.737 60.744 126.129 61.024 125.649 61.584C125.169 62.128 124.929 62.816 124.929 63.648Z",
    fill: "#344563",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M139.36 60.912C139.648 60.352 140.04 59.848 140.536 59.4C141.048 58.952 141.568 58.608 142.096 58.368C142.624 58.112 143.04 57.984 143.344 57.984L143.176 61.344C143.08 61.328 142.944 61.32 142.768 61.32C142.096 61.32 141.504 61.496 140.992 61.848C140.48 62.2 140.088 62.656 139.816 63.216C139.544 63.76 139.408 64.32 139.408 64.896V69H136.072V58.512H139.096L139.36 60.912Z",
    fill: "#344563",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M149.324 69.216C148.46 69.216 147.652 69.064 146.9 68.76C146.148 68.456 145.524 68.032 145.028 67.488L146.42 65.64C147.348 66.504 148.22 66.936 149.036 66.936C149.468 66.936 149.812 66.872 150.068 66.744C150.34 66.6 150.476 66.392 150.476 66.12C150.476 65.8 150.324 65.56 150.02 65.4C149.716 65.224 149.372 65.08 148.988 64.968C148.62 64.856 148.372 64.784 148.244 64.752C147.332 64.464 146.652 64.04 146.204 63.48C145.756 62.904 145.532 62.248 145.532 61.512C145.532 60.952 145.676 60.408 145.964 59.88C146.268 59.336 146.732 58.896 147.356 58.56C147.98 58.208 148.756 58.032 149.684 58.032C150.548 58.032 151.284 58.12 151.892 58.296C152.5 58.472 153.084 58.76 153.644 59.16L152.372 61.128C152.052 60.872 151.692 60.664 151.292 60.504C150.908 60.328 150.556 60.24 150.236 60.24C149.852 60.24 149.54 60.32 149.3 60.48C149.06 60.64 148.94 60.832 148.94 61.056C148.924 61.392 149.06 61.648 149.348 61.824C149.652 61.984 150.116 62.152 150.74 62.328C150.836 62.36 150.932 62.392 151.028 62.424C151.14 62.456 151.252 62.488 151.364 62.52C153.012 63.064 153.836 64.056 153.836 65.496C153.836 66.168 153.668 66.784 153.332 67.344C152.996 67.904 152.484 68.36 151.796 68.712C151.124 69.048 150.3 69.216 149.324 69.216Z",
    fill: "#344563",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "sidebar-wrapper scrollBarStyle sidebar-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "navUlListHeading",
    style: {
      padding: '0 15px 0px 35px ',
      margin: '0 0 10px 0'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Main Navigation"), __jsx("div", {
    className: "sidebar-wrapper scrollBarStyle sidebar-body",
    ref: sidebar,
    style: {
      color: "black",
      overflowY: 'auto'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    style: {
      height: 350
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, Object(_dashboardRoutes__WEBPACK_IMPORTED_MODULE_3__["routes"])().map((prop, key) => {
    return __jsx("li", {
      key: key,
      className: "cursorPoint",
      style: {
        height: 50,
        marginBottom: 10
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/dashboard/[user]/[role]",
      as: `/dashboard/user/${prop.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "nav-link",
      style: router.query.role === prop.path ? {
        padding: '16px 15px 12px 30px ',
        marginRight: '5px',
        display: "flex",
        alignItems: "center",
        color: "#009999",
        borderLeft: "4px solid #009999",
        background: '#F0F9F9',
        borderRadius: '0px 76px 76px 0px'
      } : {
        // marginTop: "25px",
        padding: '16px 15px 12px 34px ',
        display: "flex",
        alignItems: "center"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, prop.icon, __jsx("p", {
      style: {
        width: "100%",
        height: "22px",
        top: " calc(50% - 22px/2 + 2px)",
        paddingLeft: "15px",
        fontFamily: "Open Sans",
        fontStyle: " normal",
        fontWeight: router.query.role === prop.path ? 'bold' : "normal",
        color: router.query.role === prop.path ? "#009999" : "#344563",
        fontSize: "16px",
        lineHeight: "22px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 23
      }
    }, prop.name), router.query.role === prop.path && __jsx("svg", {
      width: "10",
      height: "14",
      viewBox: "0 0 10 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 25
      }
    }, __jsx("path", {
      d: "M0.877747 1.90001L5.97775 7.00001L0.877747 12.1L2.45552 13.6667L9.12219 7.00001L2.45552 0.333344L0.877747 1.90001Z",
      fill: "#344563",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 27
      }
    })))));
  })), __jsx("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 450
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "sidebar-card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "sidebar-card-content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 15
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    className: "roundedCircle",
    style: {
      width: 140,
      height: 140,
      borderRadius: 70,
      backgroundColor: 'none'
    },
    src: "/assets/mockup/sidebarImg.png",
    circle: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "card-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, "Macado Leam"), __jsx("p", {
    className: "card-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, "Board Member"), __jsx("div", {
    className: "sidebar-card-footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "memberSince",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }, "Member Since"), __jsx("p", {
    className: "f-date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  }, "September 2019"))))))));
};

/***/ }),

/***/ "./components/Dashboard/viewResidents/index.jsx":
/*!******************************************************!*\
  !*** ./components/Dashboard/viewResidents/index.jsx ***!
  \******************************************************/
/*! exports provided: ViewResident */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewResident", function() { return ViewResident; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _residentMemberDetail__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../residentMemberDetail */ "./components/Dashboard/residentMemberDetail/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _imageRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../imageRow */ "./components/Dashboard/imageRow/index.js");
/* harmony import */ var _styles_viewResidents_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/viewResidents/index.scss */ "./styles/viewResidents/index.scss");
/* harmony import */ var _styles_viewResidents_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_viewResidents_index_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/Dashboard/viewResidents/index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ViewResident = () => {
  let data = [{
    dataID: 1,
    address: '10 Mckeon Pl',
    familyMember: [{
      memberName: 'Brii Ritter',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Wilam Carry',
      memberImage: '/assets/mockup/img2.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Jhon Doe',
      memberImage: '/assets/mockup/img3.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }],
    residenceSince: '10 September 2018'
  }, {
    dataID: 1,
    address: '12 Barnum Pl',
    familyMember: [{
      memberName: 'Brii Ritter',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Wilam Carry',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Jhon Doe',
      memberImage: '/assets/mockup/img3.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Walter Obrain',
      memberImage: '/assets/mockup/img4.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Brii Ritter',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Wilam Carry',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Jhon Doe',
      memberImage: '/assets/mockup/img3.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Walter Obrain',
      memberImage: '/assets/mockup/img4.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Owais Warsi',
      memberImage: '/assets/mockup/img5.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }],
    residenceSince: '10 September 2018'
  }, {
    dataID: 1,
    address: '5 Taylor Ct',
    familyMember: [{
      memberName: 'Brii Ritter',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 June 2018'
    }, {
      memberName: 'Wilam Carry',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 June 2018'
    }, {
      memberName: 'Jhon Doe',
      memberImage: '/assets/mockup/img3.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 June 2018'
    }, {
      memberName: 'Walter Obrain',
      memberImage: '/assets/mockup/img4.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 June 2018'
    }, {
      memberName: 'Brii Ritter',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 June 2018'
    }, {
      memberName: 'Wilam Carry',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 June 2018'
    }, {
      memberName: 'Jhon Doe',
      memberImage: '/assets/mockup/img3.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 June 2018'
    }, {
      memberName: 'Walter Obrain',
      memberImage: '/assets/mockup/img4.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 June 2018'
    }, {
      memberName: 'Owais Warsi',
      memberImage: '/assets/mockup/img5.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 June 2018'
    }],
    residenceSince: '10 June 2018'
  }, {
    dataID: 1,
    address: '3 Taylor Ct',
    familyMember: [{
      memberName: 'Brii Ritter',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Wilam Carry',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Jhon Doe',
      memberImage: '/assets/mockup/img3.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Walter Obrain',
      memberImage: '/assets/mockup/img4.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Brii Ritter',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Wilam Carry',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Jhon Doe',
      memberImage: '/assets/mockup/img3.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Walter Obrain',
      memberImage: '/assets/mockup/img4.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Owais Warsi',
      memberImage: '/assets/mockup/img5.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }],
    residenceSince: '10 September 2018'
  }, {
    dataID: 1,
    address: '10 Barnum Pl',
    familyMember: [{
      memberName: 'Brii Ritter',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Wilam Carry',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Jhon Doe',
      memberImage: '/assets/mockup/img3.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Walter Obrain',
      memberImage: '/assets/mockup/img4.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Brii Ritter',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Wilam Carry',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Jhon Doe',
      memberImage: '/assets/mockup/img3.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Walter Obrain',
      memberImage: '/assets/mockup/img4.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Owais Warsi',
      memberImage: '/assets/mockup/img5.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }],
    residenceSince: '10 September 2018'
  }, {
    dataID: 1,
    address: '5 Titus Pl',
    familyMember: [{
      memberName: 'Brii Ritter',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Wilam Carry',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Jhon Doe',
      memberImage: '/assets/mockup/img3.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Walter Obrain',
      memberImage: '/assets/mockup/img4.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Brii Ritter',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Wilam Carry',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Jhon Doe',
      memberImage: '/assets/mockup/img3.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Walter Obrain',
      memberImage: '/assets/mockup/img4.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Owais Warsi',
      memberImage: '/assets/mockup/img5.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }],
    residenceSince: '10 September 2018'
  }, {
    dataID: 1,
    address: '10 Lynn Pl',
    familyMember: [{
      memberName: 'Brii Ritter',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Wilam Carry',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Jhon Doe',
      memberImage: '/assets/mockup/img3.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Walter Obrain',
      memberImage: '/assets/mockup/img4.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Brii Ritter',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Wilam Carry',
      memberImage: '/assets/mockup/img1.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Jhon Doe',
      memberImage: '/assets/mockup/img3.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Walter Obrain',
      memberImage: '/assets/mockup/img4.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }, {
      memberName: 'Owais Warsi',
      memberImage: '/assets/mockup/img5.png',
      phoneNumber: '(217) 555-0113',
      emailAddress: 'seth.olson@example.com',
      memberSince: '10 September 2018'
    }],
    residenceSince: '10 September 2018'
  }];
  const {
    0: modalShow,
    1: setModalShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: sendData,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: searchData,
    1: SearchCol
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: noMatchSearchData,
    1: noMatchSearchCol
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function sendProps(setModalValue, setDataValue) {
    setModalShow(setModalValue);
    setData(setDataValue);
  }

  function searchHandleChange(value) {
    const results = data.filter(person => person.address.toLowerCase().includes(value.toLowerCase()));

    if (value && results.length === 0) {
      noMatchSearchCol(true);
    }

    if (!value) {
      noMatchSearchCol(false);
    }

    SearchCol(results);
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    style: {
      marginTop: 60
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "12",
    md: "12",
    sm: "12",
    style: {
      paddingLeft: 35,
      paddingRight: 35
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 11
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      background: "#F6F7FB",
      border: "none",
      boxShadow: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CardBody"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "number",
    style: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  }, __jsx("p", {
    className: "view-residents-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 21
    }
  }, "Turner Hill HomeOwners Association"), __jsx("p", {
    className: "view-residents-address",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 21
    }
  }, "2 Barnum place, Ridgefeild CT 06877"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 21
    }
  })))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    lg: "12",
    md: "12",
    sm: "12",
    style: {
      paddingLeft: 35,
      paddingRight: 35,
      marginTop: 18
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 11
    }
  }, __jsx("form", {
    style: {
      background: '#FFFFFF',
      border: 'none !important solid #E9E9E9',
      boxSizing: 'border-box',
      boxShadow: '0px 12px 50px rgba(0, 0, 0, 0.04)',
      borderRadius: '8px',
      paddingLeft: 5,
      paddingRight: 5
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    className: "no-border card-stats",
    style: {
      background: "white",
      height: "50px",
      alignItems: 'center',
      margin: 0
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 15
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
    addonType: "append",
    style: {
      background: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], {
    style: {
      background: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "fas fa-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 21
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Search...",
    style: {
      background: "white",
      outline: 'none'
    },
    onChange: event => searchHandleChange(event.target.value),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    md: "12",
    style: {
      paddingLeft: 35,
      paddingRight: 35
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 11
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Table"], {
    responsive: "sm",
    className: "residents-tabl ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 13
    }
  }, __jsx("thead", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 15
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  }, __jsx("th", {
    className: "sm-display-none th td1",
    style: {
      width: '35%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 19
    }
  }, "Address"), __jsx("th", {
    className: "th td2",
    style: {
      width: '35%',
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 19
    }
  }, "Family Members"), __jsx("th", {
    className: "text-right th",
    style: {
      width: '30%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 19
    }
  }, "Residence Since"))), noMatchSearchData ? __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 17
    }
  }) : __jsx("tbody", {
    className: "scrollBarStyle tbody",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 17
    }
  }, searchData.length ? searchData.map((data1, index) => __jsx("tr", {
    className: "residents-table-row",
    style: {},
    key: index,
    onClick: () => sendProps(true, data1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 21
    }
  }, __jsx("td", {
    className: "address-td sm-dmemberImageisplay-none td1",
    style: {
      width: '35%',
      alignItems: 'center',
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 23
    }
  }, data1.address), __jsx("td", {
    className: "td2",
    style: {
      width: '35%',
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 23
    }
  }, __jsx(_imageRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
    familyMember: data1.familyMember,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 25
    }
  })), __jsx("td", {
    className: "text-right td-residence-since",
    style: {
      width: '30%',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 23
    }
  }, data1.residenceSince.split(' ')[1] + ' ' + data1.residenceSince.split(' ')[2]))) : data.map((data1, index) => __jsx("tr", {
    className: "residents-table-row",
    style: {},
    key: index,
    onClick: () => sendProps(true, data1),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 23
    }
  }, __jsx("td", {
    className: "address-td sm-dmemberImageisplay-none td1",
    style: {
      width: '35%',
      alignItems: 'center',
      display: 'flex'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 25
    }
  }, data1.address), __jsx("td", {
    className: "td2",
    style: {
      width: '35%',
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 25
    }
  }, __jsx(_imageRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
    familyMember: data1.familyMember,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 27
    }
  })), __jsx("td", {
    className: "text-right td-residence-since",
    style: {
      width: '30%',
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'flex-end'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 25
    }
  }, data1.residenceSince.split(' ')[1] + ' ' + data1.residenceSince.split(' ')[2])))))))), __jsx(_residentMemberDetail__WEBPACK_IMPORTED_MODULE_2__["default"], {
    show: modalShow,
    trData: sendData,
    onHide: () => setModalShow(false),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 7
    }
  }));
};

/***/ }),

/***/ "./components/homeAddress/index.js":
/*!*****************************************!*\
  !*** ./components/homeAddress/index.js ***!
  \*****************************************/
/*! exports provided: HomeAddress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeAddress", function() { return HomeAddress; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _invitationCode_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../invitationCode/layout */ "./components/invitationCode/layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/signin/index.scss */ "./styles/signin/index.scss");
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/homeAddress/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const HomeAddress = () => {
  return __jsx(_invitationCode_layout__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    prog: 50,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx("p", {
    style: {
      color: "black",
      marginTop: "20px",
      fontSize: "19px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "It seems you're also a resident at <Community> Please enter your home address."), __jsx("p", {
    style: {
      color: "gray"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Your home address is required to use resident app and stay connected with your neighbors."), __jsx("input", {
    className: "invitation-code-input",
    placeholder: "Your Home Address",
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }), __jsx("input", {
    className: "invitation-code-input",
    placeholder: "Apt / unit",
    type: "text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), __jsx("p", {
    style: {
      color: "red"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "Cannot find your home at this community. Please enter your correct home address or please contact our support.", __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "support@weneibours.io"), "for any help."), __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "< Back"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, "Next >"))));
};

/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: ViewResident, DashBoard, HomeAddress, LandingPage, Container, SignIn, SignUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard */ "./components/Dashboard/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewResident", function() { return _Dashboard__WEBPACK_IMPORTED_MODULE_0__["ViewResident"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashBoard", function() { return _Dashboard__WEBPACK_IMPORTED_MODULE_0__["DashBoard"]; });

/* harmony import */ var _homeAddress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeAddress */ "./components/homeAddress/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeAddress", function() { return _homeAddress__WEBPACK_IMPORTED_MODULE_1__["HomeAddress"]; });

/* harmony import */ var _invitationCode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invitationCode */ "./components/invitationCode/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _landingPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landingPage */ "./components/landingPage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return _landingPage__WEBPACK_IMPORTED_MODULE_3__["LandingPage"]; });

/* harmony import */ var _mainlayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mainlayout */ "./components/mainlayout/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _mainlayout__WEBPACK_IMPORTED_MODULE_4__["Container"]; });

/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signin */ "./components/signin/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignIn", function() { return _signin__WEBPACK_IMPORTED_MODULE_5__["SignIn"]; });

/* harmony import */ var _signup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup */ "./components/signup/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return _signup__WEBPACK_IMPORTED_MODULE_6__["SignUp"]; });









/***/ }),

/***/ "./components/invitationCode/index.js":
/*!********************************************!*\
  !*** ./components/invitationCode/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./components/invitationCode/layout.js");
/* harmony import */ var _styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/userValidation/index.scss */ "./styles/userValidation/index.scss");
/* harmony import */ var _styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/signin/index.scss */ "./styles/signin/index.scss");
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/invitationCode/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (() => __jsx(_layout__WEBPACK_IMPORTED_MODULE_2__["Layout"], {
  prog: 1,
  key: "123",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, "Already have an acoount?", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/signIn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 7
  }
}, __jsx("a", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }
}, "Sign In"))), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }
}, "Please Enter the invitation code that you have received from us."), __jsx("p", {
  style: {
    color: "red"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }
}, "sorry! Entered invitation code is invalid or expired. If problem persist please contact our support.", __jsx("a", {
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }
}, "support@weneibours.io")), __jsx("input", {
  className: "invitation-code-input",
  placeholder: "Invitation Code",
  type: "password",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }
}), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }
}, "Your Community is <abc>"), __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }
}, "And For the member role is president."), __jsx("div", {
  style: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }
}, __jsx("button", {
  className: "btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 7
  }
}, "< Back"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/homeAddress",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 7
  }
}, __jsx("button", {
  className: "btn",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }
}, " Next >")))));

/***/ }),

/***/ "./components/invitationCode/layout.js":
/*!*********************************************!*\
  !*** ./components/invitationCode/layout.js ***!
  \*********************************************/
/*! exports provided: Layout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Layout", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _progressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./progressBar */ "./components/invitationCode/progressBar.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/userValidation/index.scss */ "./styles/userValidation/index.scss");
/* harmony import */ var _styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/invitationCode/layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = ({
  children,
  prog
}) => {
  return __jsx("div", {
    className: "main-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "user-validation-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  }, __jsx(_progressBar__WEBPACK_IMPORTED_MODULE_1__["Progress"], {
    val: prog,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "layout-children-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 14
    }
  }, children)));
};

/***/ }),

/***/ "./components/invitationCode/progressBar.js":
/*!**************************************************!*\
  !*** ./components/invitationCode/progressBar.js ***!
  \**************************************************/
/*! exports provided: Progress */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Progress", function() { return Progress; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/invitationCode/progressBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Progress = ({
  val
}) => {
  return __jsx("div", {
    style: {
      width: '100%'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["ProgressBar"], {
    variant: "success",
    color: "red",
    now: val,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }));
};

/***/ }),

/***/ "./components/landingPage/carousel.js":
/*!********************************************!*\
  !*** ./components/landingPage/carousel.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_landingpage_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/landingpage/index.scss */ "./styles/landingpage/index.scss");
/* harmony import */ var _styles_landingpage_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_landingpage_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/landingPage/carousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import img1 from '../../assets/wn.png'



const items = [{
  src: "/assets/wn2.png",
  altText: "",
  caption: ""
}, {
  src: "/assets/wn3.png",
  altText: "",
  caption: " "
}, {
  src: "/assets/wn1.png",
  altText: "",
  caption: ""
}];

const Banner = props => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: animating,
    1: setAnimating
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselItem"], {
      onExiting: () => setAnimating(true),
      onExited: () => setAnimating(false),
      key: item.src,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }
    }, __jsx("img", {
      src: item.src,
      alt: item.altText,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }
    }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselCaption"], {
      captionText: item.caption,
      captionHeader: item.caption,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }));
  });
  return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
    activeIndex: activeIndex,
    next: next,
    previous: previous,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 5
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselIndicators"], {
    items: items,
    activeIndex: activeIndex,
    onClickHandler: goToIndex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }), slides, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselControl"], {
    direction: "prev",
    directionText: "Previous",
    onClickHandler: previous,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["CarouselControl"], {
    direction: "next",
    directionText: "Next",
    onClickHandler: next,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./components/landingPage/header.js":
/*!******************************************!*\
  !*** ./components/landingPage/header.js ***!
  \******************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_landingpage_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/landingpage/index.scss */ "./styles/landingpage/index.scss");
/* harmony import */ var _styles_landingpage_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_landingpage_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/landingPage/header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Header = () => {
  const {
    0: isShow,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: menuclass,
    1: setMenulass
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('close-small-menu');
  return __jsx("div", {
    className: "header-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "lg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "hdng",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "WeNeibours"), __jsx("p", {
    className: "hdng",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "whyWeNeibours"), __jsx("p", {
    className: "hdng",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Contact Us"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signIn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "hdng",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, "SignIn")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/invitationCode",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "get-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Get Started"))), menuclass === 'close-small-menu' ? __jsx("div", {
    onClick: () => setMenulass('sm'),
    className: "toggle-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 42
    }
  }, __jsx("div", {
    className: "toggle-line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "toggle-line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("div", {
    className: "toggle-line",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  })) : __jsx("div", {
    onClick: () => setMenulass('close-small-menu'),
    className: "close",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "cross",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "X")), __jsx("div", {
    className: menuclass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "sm-headings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "WeNeibours"), __jsx("p", {
    className: "sm-headings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, "whyWeNeibours"), __jsx("p", {
    className: "sm-headings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, "Contact Us"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/signIn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: "sm-headings",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "SignIn")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/invitationCode",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "get-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, "Get Started"))));
};

/***/ }),

/***/ "./components/landingPage/index.js":
/*!*****************************************!*\
  !*** ./components/landingPage/index.js ***!
  \*****************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel */ "./components/landingPage/carousel.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./components/landingPage/header.js");
/* harmony import */ var _styles_landingpage_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/landingpage/index.scss */ "./styles/landingpage/index.scss");
/* harmony import */ var _styles_landingpage_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_landingpage_index_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/landingPage/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const LandingPage = props => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }), __jsx(_carousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "landingpage-bottom",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Keep communications organized in WeNeibours, the smart alternative to email."), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "Already Have an account?", __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signIn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, " Sign In")))));
};

/***/ }),

/***/ "./components/mainlayout/index.js":
/*!****************************************!*\
  !*** ./components/mainlayout/index.js ***!
  \****************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_mainlayout_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/mainlayout/index.scss */ "./styles/mainlayout/index.scss");
/* harmony import */ var _styles_mainlayout_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_mainlayout_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/mainlayout/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = ({
  children
}) => __jsx("div", {
  className: "main-container",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }
}, __jsx("div", {
  className: "main-container-child",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, children));

/***/ }),

/***/ "./components/signin/apple.js":
/*!************************************!*\
  !*** ./components/signin/apple.js ***!
  \************************************/
/*! exports provided: Apple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Apple", function() { return Apple; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/signin/apple.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Apple = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    AppleID.auth.init({
      clientId: '[CLIENT_ID]',
      scope: '[email]',
      redirectURI: '[REDIRECT_URI]',
      state: '[STATE]',
      usePopup: true //or false defaults to false

    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("script", {
    type: "text/javascript",
    src: "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  })), __jsx("div", {
    id: "appleid-signin",
    "data-color": "black",
    "data-border": "true",
    "data-type": "sign in",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }));
};

/***/ }),

/***/ "./components/signin/google.js":
/*!*************************************!*\
  !*** ./components/signin/google.js ***!
  \*************************************/
/*! exports provided: GoogleLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLogin", function() { return GoogleLogin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/signin/google.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // To federated sign in from Google

class GoogleLogin extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    const ga = window.gapi && window.gapi.auth2 ? window.gapi.auth2.getAuthInstance() : null;
    if (!ga) this.createScript();
  }

  signIn() {
    const ga = window.gapi.auth2.getAuthInstance();
    ga === null || ga === void 0 ? void 0 : ga.signIn().then(googleUser => {
      console.log('google ===>', googleUser);
    }, error => {
      console.log(error);
    });
  }

  createScript() {
    // load the Google SDK
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.onload = this.initGapi;
    document.body.appendChild(script);
  }

  initGapi() {
    // init the Google SDK client
    const g = window.gapi;
    g.load('auth2', function () {
      g.auth2.init({
        client_id: '215485620819-r3ps1inqudcu9u0dvpeu6lrrfktd7dma.apps.googleusercontent.com',
        // authorized scopes
        scope: 'profile email openid'
      });
    });
  }

  render() {
    return __jsx("button", {
      className: "google-login-btn",
      onClick: this.signIn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }
    }, "continue with Google");
  }

}

/***/ }),

/***/ "./components/signin/index.js":
/*!************************************!*\
  !*** ./components/signin/index.js ***!
  \************************************/
/*! exports provided: SignIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn", function() { return SignIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mainlayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mainlayout */ "./components/mainlayout/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/signin/index.scss */ "./styles/signin/index.scss");
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./google */ "./components/signin/google.js");
/* harmony import */ var _apple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apple */ "./components/signin/apple.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../configuration */ "./configuration/index.js");
/* harmony import */ var _redux_middleware_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/middleware/auth */ "./redux/middleware/auth.js");
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/signin/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const SignIn = ({
  _signin
}) => {
  const _onSubmit = () => {
    _signin({});
  };

  return __jsx(_mainlayout__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Welcome Back! "), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Please Sign In to access your community dashboard."), __jsx("button", {
    className: "apple-login-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "continue with Apple"), __jsx(_google__WEBPACK_IMPORTED_MODULE_4__["GoogleLogin"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(_apple__WEBPACK_IMPORTED_MODULE_5__["Apple"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 3
    }
  }, "OR USE YOUR OWN EMAIL")), __jsx("input", {
    className: "signin-input",
    placeholder: "Email",
    type: "email",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("input", {
    className: "signin-input",
    placeholder: "Password",
    type: "password",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "Forgot password?"), __jsx("button", {
    className: "signinbtn",
    onClick: _onSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Sign In"));
};

/***/ }),

/***/ "./components/signup/index.js":
/*!************************************!*\
  !*** ./components/signup/index.js ***!
  \************************************/
/*! exports provided: SignUp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUp", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _invitationCode_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../invitationCode/layout */ "./components/invitationCode/layout.js");
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/signin/index.scss */ "./styles/signin/index.scss");
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/userValidation/index.scss */ "./styles/userValidation/index.scss");
/* harmony import */ var _styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/signup/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SignUp = ({
  _signup
}) => {
  const _onSubmit = () => {
    _signup({
      appartmentUnit: "string",
      communityId: 0,
      deviceType: "IOS",
      email: "string",
      fullName: "string",
      idToken: "string",
      invitationCode: "string",
      password: "string",
      phone: "string",
      registrationId: "string",
      registrationType: "APPLICATION",
      street: "string",
      udid: "string",
      userRoleType: {
        description: "string",
        name: "string"
      }
    });
  };

  return __jsx(_invitationCode_layout__WEBPACK_IMPORTED_MODULE_1__["Layout"], {
    prog: 100,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("p", {
    style: {
      color: "black",
      marginTop: "20px",
      fontSize: "17px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, "Almost there! Please SignUp to access your <Community> community dashboard."), __jsx("button", {
    className: "apple-login-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "continue with Apple"), __jsx("button", {
    className: "google-login-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "continue with Google"), __jsx("input", {
    className: "invitation-code-input",
    placeholder: "Email",
    type: "email",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }), __jsx("input", {
    className: "invitation-code-input",
    placeholder: "Phone",
    type: "Number",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx("input", {
    className: "invitation-code-input",
    placeholder: "Password",
    type: "password",
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      width: "100%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "btn",
    style: {
      marginRight: "7px",
      alignSelf: "flex-start"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, "< Back"), __jsx("button", {
    className: "btn",
    style: {
      width: "65%"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "Sign Up")));
};

/***/ }),

/***/ "./configuration/OauthConfig.js":
/*!**************************************!*\
  !*** ./configuration/OauthConfig.js ***!
  \**************************************/
/*! exports provided: OauthConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OauthConfig", function() { return OauthConfig; });
let ClientOAuth2 = __webpack_require__(/*! client-oauth2 */ "client-oauth2");

let OauthConfig = new ClientOAuth2({
  clientId: process.env.OAUTH_CLIENT_ID,
  clientSecret: process.env.OAUTH_CLIENT_SECRET,
  accessTokenUri: process.env.OAUTH_TOKEN_URL,
  redirectUri: process.env.OAUTH_REDIRECT_URL,
  scopes: ["email", "name"]
});

/***/ }),

/***/ "./configuration/api.js":
/*!******************************!*\
  !*** ./configuration/api.js ***!
  \******************************/
/*! exports provided: getAllUsers, uploadAddressProof, addFcmToken, getApplicationSetting, downloadProfileImage, uploadProfileImage, registerUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return getAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadAddressProof", function() { return uploadAddressProof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFcmToken", function() { return addFcmToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getApplicationSetting", function() { return getApplicationSetting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadProfileImage", function() { return downloadProfileImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadProfileImage", function() { return uploadProfileImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return registerUser; });
const getAllUsers = 'users';
const uploadAddressProof = `users/{id}/addressProof`;
const addFcmToken = `users/addfcmToken/`;
const getApplicationSetting = `users/appSettings/{applicationType}`;
const downloadProfileImage = `users/avatar`;
const uploadProfileImage = `users/avatar`;
const registerUser = `users/register`;

/***/ }),

/***/ "./configuration/httpInterceptor.js":
/*!******************************************!*\
  !*** ./configuration/httpInterceptor.js ***!
  \******************************************/
/*! exports provided: _axios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_axios", function() { return _axios; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tokenHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenHandler */ "./configuration/tokenHandler.js");



const _axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: process.env.API_BASE_URL
});

let token = Object(_tokenHandler__WEBPACK_IMPORTED_MODULE_1__["getToken"])();
_axios.CancelToken = axios__WEBPACK_IMPORTED_MODULE_0___default.a.CancelToken;

_axios.interceptors.request.use(async config => {
  if (token) {
    config.headers.Authorization = `bearer ${token}`;
    config.headers["Access-Control-Allow-Origin"] = "*";
    config.headers["Access-Control-Allow-Credentials"] = true;
  }

  return config;
});



/***/ }),

/***/ "./configuration/index.js":
/*!********************************!*\
  !*** ./configuration/index.js ***!
  \********************************/
/*! exports provided: OauthConfig, _axios, getAllUsers, uploadAddressProof, addFcmToken, getApplicationSetting, downloadProfileImage, uploadProfileImage, registerUser, setToken, getToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OauthConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OauthConfig */ "./configuration/OauthConfig.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OauthConfig", function() { return _OauthConfig__WEBPACK_IMPORTED_MODULE_0__["OauthConfig"]; });

/* harmony import */ var _httpInterceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./httpInterceptor */ "./configuration/httpInterceptor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_axios", function() { return _httpInterceptor__WEBPACK_IMPORTED_MODULE_1__["_axios"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./configuration/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["getAllUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadAddressProof", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["uploadAddressProof"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addFcmToken", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["addFcmToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getApplicationSetting", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["getApplicationSetting"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "downloadProfileImage", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["downloadProfileImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uploadProfileImage", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["uploadProfileImage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerUser", function() { return _api__WEBPACK_IMPORTED_MODULE_2__["registerUser"]; });

/* harmony import */ var _tokenHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokenHandler */ "./configuration/tokenHandler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return _tokenHandler__WEBPACK_IMPORTED_MODULE_3__["setToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return _tokenHandler__WEBPACK_IMPORTED_MODULE_3__["getToken"]; });






/***/ }),

/***/ "./configuration/tokenHandler.js":
/*!***************************************!*\
  !*** ./configuration/tokenHandler.js ***!
  \***************************************/
/*! exports provided: setToken, getToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
let dummyToken = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJsYXN0TmFtZSI6bnVsbCwidXNlckFkZHJlc3NQcm9vZlZlcmlmaWNhdGlvblN0YXR1cyI6eyJjb2RlIjoiUyIsImRlc2NyaXB0aW9uIjoiVmVyaWZpY2F0aW9uIFN1Y2Nlc3NmdWwiLCJ0aXRsZSI6IiIsIm1lc3NhZ2UiOiIifSwidXNlcl9uYW1lIjoid2VuZWlnaGJvcnMudGVzdDFAeW9wbWFpbC5jb20iLCJmdWxsTmFtZSI6IlRlc3QgVXNlcjEiLCJ1c2VySWQiOjQ5NzEsImF1dGhvcml0aWVzIjpbIlJPTEVfQ09NTVVOSVRZX1JFU0lERU5UIiwiUk9MRV9SRUdJT05BTF9NQU5BR0VSIl0sImNsaWVudF9pZCI6InRhbGt0aXZhQXBwIiwiZmFtaWx5SWQiOiIzMTY2Nzg0ODQxMTktNjA3ZC00YTNiLWFjNjMtODQwYWI0NjA2N2UyIiwiZmlyc3ROYW1lIjpudWxsLCJ0ZW1wb3JhcnlQYXNzd29yZCI6ZmFsc2UsImVtYWlsVmVyaWZpZWQiOnRydWUsImF1ZCI6WyJtcy9ub3RpZmljYXRpb24iLCJtcy91c2VyIiwibXMvZXZlbnQiLCJtcy9zZW5kRW1haWwiXSwic2NvcGUiOlsiUk9MRV9DT01NVU5JVFlfUkVTSURFTlQiXSwiZXhwIjoxNTg2Njk1OTQ0LCJqdGkiOiIwNDk4NzIyZC01OGE4LTQxMjctYWY1Mi0zOTc0OTdhMmYzYjYiLCJlbWFpbCI6IndlbmVpZ2hib3JzLnRlc3QxQHlvcG1haWwuY29tIn0.DWlyKv611qVS_frm_nSBSLLboIDiRwpuIbT3GlgvDxxG97VYwPsI-bCozauh8I2usP2QQKyxO8e-Sp8aXPW-woVZspEG3OtM-v55cQM7mqTUfIAELQUD6Dzv04aCDggx5TL5IiL_yewRWm2tcsiEo_tNE4vUVAsZLM6tmesW7NROOUjLu9DwmD54IlZLTNbaF9-Mqk7A07YThtzRmqUIoKcgyVtc0svjo1_mtz2nz-NOxcTlVkP6iscXecfUqYrmbFnEsiJzk7qzi-LDSfkg13PUgzvm1tQ-cgB-DPdA-O2suoZyWkCB-3lL5jgOaoeedSkR5q4-dECoFADjdmaM8w';
let token;
const setToken = token => {
  token = token;
};
const getToken = () => {
  //  fetch('https://devapp.talktiva.com/uaa/oauth/token',{
  //     method:'POST',
  //         headers:{
  //             "Content-Type":"application/json",
  //             "Authorization":"Basic dGFsa3RpdmFBcHA6dGFsa0BUaXZhITE="
  //     },
  //     body:JSON.stringify({
  //         grant_type:'password',
  //         username:"weneighbors.test1@yopmail.com",
  //         password:"Unimel@n12345"
  //     })
  // }).then(res => {
  //     token = res.access_token
  // }).catch(err => {
  //     console.log('err =====>>>>>>>>>..',err)
  // })
  return token ? token : dummyToken;
};

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
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

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

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
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
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

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
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

exports.typeOf = typeOf;
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
exports.isValidElementType = isValidElementType;
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
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/signIn/index.js":
/*!*******************************!*\
  !*** ./pages/signIn/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components */ "./components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/middleware */ "./redux/middleware/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/pages/signIn/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state)(props => __jsx(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}, "Sign In")), __jsx(_components__WEBPACK_IMPORTED_MODULE_0__["SignIn"], {
  _signin: payload => props.dispatch(Object(_redux_middleware__WEBPACK_IMPORTED_MODULE_2__["login"])(payload)),
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}))));

/***/ }),

/***/ "./redux/CONSTANTS/index.js":
/*!**********************************!*\
  !*** ./redux/CONSTANTS/index.js ***!
  \**********************************/
/*! exports provided: SIGNIN, SIGNUP, SIGNOUT, ALLUSERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNIN", function() { return SIGNIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP", function() { return SIGNUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNOUT", function() { return SIGNOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLUSERS", function() { return ALLUSERS; });
const SIGNIN = 'SIGNIN';
const SIGNUP = `SIGNUP`;
const SIGNOUT = `SIGNOUT`;
const ALLUSERS = `ALLUSERS`;

/***/ }),

/***/ "./redux/actions/authAction.js":
/*!*************************************!*\
  !*** ./redux/actions/authAction.js ***!
  \*************************************/
/*! exports provided: signin, signup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CONSTANTS */ "./redux/CONSTANTS/index.js");


const signin = payload => {
  return {
    type: _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["SIGNIN"],
    payload
  };
};

const signup = payload => {
  return {
    type: _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["SIGNUP"],
    payload
  };
};



/***/ }),

/***/ "./redux/actions/index.js":
/*!********************************!*\
  !*** ./redux/actions/index.js ***!
  \********************************/
/*! exports provided: signin, signup, allUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authAction */ "./redux/actions/authAction.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return _authAction__WEBPACK_IMPORTED_MODULE_0__["signin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return _authAction__WEBPACK_IMPORTED_MODULE_0__["signup"]; });

/* harmony import */ var _usersActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usersActions */ "./redux/actions/usersActions.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "allUsers", function() { return _usersActions__WEBPACK_IMPORTED_MODULE_1__["allUsers"]; });




/***/ }),

/***/ "./redux/actions/usersActions.js":
/*!***************************************!*\
  !*** ./redux/actions/usersActions.js ***!
  \***************************************/
/*! exports provided: allUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allUsers", function() { return allUsers; });
/* harmony import */ var _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../CONSTANTS */ "./redux/CONSTANTS/index.js");


const allUsers = payload => {
  return {
    type: _CONSTANTS__WEBPACK_IMPORTED_MODULE_0__["ALLUSERS"],
    payload
  };
};



/***/ }),

/***/ "./redux/middleware/auth.js":
/*!**********************************!*\
  !*** ./redux/middleware/auth.js ***!
  \**********************************/
/*! exports provided: login, register, signout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signout", function() { return signout; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./redux/actions/index.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configuration */ "./configuration/index.js");



const login = payload => {
  return dispatch => {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["signin"])());
  };
};
const register = payload => {
  return dispatch => {
    _configuration__WEBPACK_IMPORTED_MODULE_1__["_axios"].post(_configuration__WEBPACK_IMPORTED_MODULE_1__["registerUser"], payload).then(data => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["signup"])(data));
    }).catch(error => {
      console.log('error', error);
    });
  };
};
const signout = () => {
  return dispatch => {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["signin"])(null));
  };
};

/***/ }),

/***/ "./redux/middleware/index.js":
/*!***********************************!*\
  !*** ./redux/middleware/index.js ***!
  \***********************************/
/*! exports provided: login, register, signout, getUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth */ "./redux/middleware/auth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "register", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["register"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signout", function() { return _auth__WEBPACK_IMPORTED_MODULE_0__["signout"]; });

/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users */ "./redux/middleware/users.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return _users__WEBPACK_IMPORTED_MODULE_1__["getUsers"]; });




/***/ }),

/***/ "./redux/middleware/users.js":
/*!***********************************!*\
  !*** ./redux/middleware/users.js ***!
  \***********************************/
/*! exports provided: getUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./redux/actions/index.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configuration */ "./configuration/index.js");



const getUsers = payload => {
  return async dispatch => {
    await _configuration__WEBPACK_IMPORTED_MODULE_1__["_axios"].get(_configuration__WEBPACK_IMPORTED_MODULE_1__["getAllUsers"]).then(data => {
      console.log('data ===>> all users', data);
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["allUsers"])(data));
    }).catch(error => {
      console.log('error', error);
    });
  };
};

/***/ }),

/***/ "./styles/landingpage/index.scss":
/*!***************************************!*\
  !*** ./styles/landingpage/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/mainlayout/index.scss":
/*!**************************************!*\
  !*** ./styles/mainlayout/index.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/navbar/index.scss":
/*!**********************************!*\
  !*** ./styles/navbar/index.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/residentMemberDetail/index.scss":
/*!************************************************!*\
  !*** ./styles/residentMemberDetail/index.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/sidebar/index.scss":
/*!***********************************!*\
  !*** ./styles/sidebar/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/signin/index.scss":
/*!**********************************!*\
  !*** ./styles/signin/index.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/userValidation/index.scss":
/*!******************************************!*\
  !*** ./styles/userValidation/index.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./styles/viewResidents/index.scss":
/*!*****************************************!*\
  !*** ./styles/viewResidents/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 5:
/*!*************************************!*\
  !*** multi ./pages/signIn/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aijaz/nextjs/community-dashboard.git/pages/signIn/index.js */"./pages/signIn/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "client-oauth2":
/*!********************************!*\
  !*** external "client-oauth2" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("client-oauth2");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=signIn.js.map