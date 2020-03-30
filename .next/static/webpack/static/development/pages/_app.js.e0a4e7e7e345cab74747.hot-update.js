webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/configureStore.js":
/*!*********************************!*\
  !*** ./redux/configureStore.js ***!
  \*********************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers */ "./redux/reducers/index.js");
/* harmony import */ var _reducers_authReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/authReducer */ "./redux/reducers/authReducer.js");





var _combine_reducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])(_reducers__WEBPACK_IMPORTED_MODULE_2__);

var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    developer: 'talktiva'
  };
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_combine_reducers, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
};

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: AuthReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _authReducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authReducer */ "./redux/reducers/authReducer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthReducer", function() { return _authReducer__WEBPACK_IMPORTED_MODULE_0__["AuthReducer"]; });



/***/ })

})
//# sourceMappingURL=_app.js.e0a4e7e7e345cab74747.hot-update.js.map