webpackHotUpdate("static/development/pages/dashboard/[user]/[role].js",{

/***/ "./redux/middleware/users.js":
/*!***********************************!*\
  !*** ./redux/middleware/users.js ***!
  \***********************************/
/*! exports provided: getUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./redux/actions/index.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../configuration */ "./configuration/index.js");




var getUsers = function getUsers(payload) {
  return function _callee(dispatch) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_configuration__WEBPACK_IMPORTED_MODULE_2__["_axios"].get(_configuration__WEBPACK_IMPORTED_MODULE_2__["getAllUsers"]).then(function (data) {
              console.log('data ===>> all users', data);
              dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__["allUsers"])(data));
            })["catch"](function (error) {
              console.log('error', error);
            }));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };
};

/***/ })

})
//# sourceMappingURL=[role].js.2178879d10bfa9df30b9.hot-update.js.map