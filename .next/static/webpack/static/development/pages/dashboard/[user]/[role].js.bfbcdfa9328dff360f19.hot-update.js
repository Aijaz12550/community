webpackHotUpdate("static/development/pages/dashboard/[user]/[role].js",{

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



var login = function login(payload) {
  return function (dispatch) {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["signin"])());
  };
};
var register = function register(payload) {
  return function (dispatch) {
    _configuration__WEBPACK_IMPORTED_MODULE_1__["_axios"].post(_configuration__WEBPACK_IMPORTED_MODULE_1__["registerUser"], payload).then(function (data) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["signup"])(data));
    })["catch"](function (error) {
      console.log('error', error);
    });
  };
};
var signout = function signout() {
  return function (dispatch) {
    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_0__["signin"])(null));
  };
};

/***/ })

})
//# sourceMappingURL=[role].js.bfbcdfa9328dff360f19.hot-update.js.map