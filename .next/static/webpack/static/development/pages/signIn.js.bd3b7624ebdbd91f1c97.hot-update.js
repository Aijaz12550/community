webpackHotUpdate("static/development/pages/signIn.js",{

/***/ "./components/signin/index.js":
/*!************************************!*\
  !*** ./components/signin/index.js ***!
  \************************************/
/*! exports provided: SignIn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignIn", function() { return SignIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
var _this = undefined,
    _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/signin/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var SignIn = function SignIn(_ref) {
  var _signin = _ref._signin;

  var _onSubmit = function _onSubmit() {
    _signin({});
  };

  return __jsx(_mainlayout__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, "Welcome Back! "), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Please Sign In to access your community dashboard."), __jsx("button", {
    className: "apple-login-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, "continue with Apple"), __jsx(_google__WEBPACK_IMPORTED_MODULE_4__["GoogleLogin"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(_apple__WEBPACK_IMPORTED_MODULE_5__["Apple"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("a", {
    __self: _this,
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
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "Forgot password?"), __jsx("button", {
    className: "signinbtn",
    onClick: _onSubmit,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Sign In"));
};

/***/ })

})
//# sourceMappingURL=signIn.js.bd3b7624ebdbd91f1c97.hot-update.js.map