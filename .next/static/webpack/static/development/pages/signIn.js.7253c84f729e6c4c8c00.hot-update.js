webpackHotUpdate("static/development/pages/signIn.js",{

/***/ "./pages/signIn/index.js":
/*!*******************************!*\
  !*** ./pages/signIn/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_signin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/signin */ "./components/signin/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/middleware */ "./redux/middleware/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var _this = undefined,
    _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/pages/signIn/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




 // import "../../styles/signin/index.scss";

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state) {
  return state;
})(function (props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, "Sign In")), __jsx(_components_signin__WEBPACK_IMPORTED_MODULE_0__["SignIn"], {
    _signin: function _signin(payload) {
      return props.dispatch(Object(_redux_middleware__WEBPACK_IMPORTED_MODULE_2__["login"])(payload));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 3
    }
  }));
}));

/***/ })

})
//# sourceMappingURL=signIn.js.7253c84f729e6c4c8c00.hot-update.js.map