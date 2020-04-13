webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Dashboard/index.js":
/*!***************************************!*\
  !*** ./components/Dashboard/index.js ***!
  \***************************************/
/*! exports provided: ViewResident, DashBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoard", function() { return DashBoard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./components/Dashboard/sidebar/index.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar */ "./components/Dashboard/navbar/index.jsx");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./components/Dashboard/footer/index.js");
/* harmony import */ var _dashboardRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboardRoutes */ "./components/Dashboard/dashboardRoutes/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _viewResidents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewResidents */ "./components/Dashboard/viewResidents/index.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewResident", function() { return _viewResidents__WEBPACK_IMPORTED_MODULE_6__["ViewResident"]; });

var _this = undefined,
    _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/Dashboard/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var DashBoard = function DashBoard(_ref) {
  var _router$query, _router$query$role;

  var users = _ref.users;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  console.log("== redux-state ==>", users);
  return __jsx("div", {
    className: "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_sidebar__WEBPACK_IMPORTED_MODULE_1__["SideBar"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "main-panel",
    style: {
      background: "#F6F7FB",
      height: '100%'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    heading: router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : (_router$query$role = _router$query.role) === null || _router$query$role === void 0 ? void 0 : _router$query$role.replace(/_/, " "),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("div", {
    style: {
      height: 'calc(90% - 120px)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, Object(_dashboardRoutes__WEBPACK_IMPORTED_MODULE_4__["routes"])().map(function (val, key) {
    var _router$query2;

    if ((router === null || router === void 0 ? void 0 : (_router$query2 = router.query) === null || _router$query2 === void 0 ? void 0 : _router$query2.role) === val.path) {
      return __jsx("div", {
        key: key,
        style: {
          padding: "10px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }
      }, val.component);
    }
  })), __jsx(_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })));
};

/***/ })

})
//# sourceMappingURL=index.js.ddc074763555a7f50fbf.hot-update.js.map