webpackHotUpdate("static/development/pages/signIn.js",{

/***/ "./pages/signIn/index.js":
/*!*******************************!*\
  !*** ./pages/signIn/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_signin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/signin */ "./components/signin/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/middleware */ "./redux/middleware/index.js");
var _this = undefined,
    _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/pages/signIn/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import "../../styles/signin/index.scss";

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(function (state) {
  return state;
})(function (props) {
  return __jsx(_components_signin__WEBPACK_IMPORTED_MODULE_1__["SignIn"], {
    _signin: function _signin(payload) {
      return props.dispatch(Object(_redux_middleware__WEBPACK_IMPORTED_MODULE_3__["login"])(payload));
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 3
    }
  });
}));

/***/ })

})
//# sourceMappingURL=signIn.js.9f4b258470ef84ce2f4e.hot-update.js.map