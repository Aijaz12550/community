webpackHotUpdate("static/development/pages/dashboard/[user]/[role].js",{

/***/ "./configuration/httpInterceptor.js":
/*!******************************************!*\
  !*** ./configuration/httpInterceptor.js ***!
  \******************************************/
/*! exports provided: _axios */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_axios", function() { return _axios; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tokenHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokenHandler */ "./configuration/tokenHandler.js");




var _axios = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: process.env.API_BASE_URL
});

var token = Object(_tokenHandler__WEBPACK_IMPORTED_MODULE_2__["getToken"])();
_axios.CancelToken = axios__WEBPACK_IMPORTED_MODULE_1___default.a.CancelToken;

_axios.interceptors.request.use(function _callee(config) {
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (token) {
            config.headers.Authorization = "bearer ".concat(token);
            config.headers["Access-Control-Allow-Origin"] = "*";
            config.headers["Access-Control-Allow-Credentials"] = true;
          }

          return _context.abrupt("return", config);

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=[role].js.ef1241418753f8cbc9c7.hot-update.js.map