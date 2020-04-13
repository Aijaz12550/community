webpackHotUpdate("static/development/pages/signIn.js",{

/***/ "./components/Dashboard/sidebar/index.js":
/*!***********************************************!*\
  !*** ./components/Dashboard/sidebar/index.js ***!
  \***********************************************/
/*! exports provided: SideBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBar", function() { return SideBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _dashboardRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dashboardRoutes */ "./components/Dashboard/dashboardRoutes/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_sidebar_index_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/sidebar/index.scss */ "./styles/sidebar/index.scss");
/* harmony import */ var _styles_sidebar_index_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_sidebar_index_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _this = undefined,
    _jsxFileName = "/home/aijaz/nextjs/community-dashboard.git/components/Dashboard/sidebar/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var SideBar = function SideBar() {
  var sidebar = Object(react__WEBPACK_IMPORTED_MODULE_0__["createRef"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return __jsx("div", {
    className: "sidebar",
    "data-color": "red",
    "data-active-color": "white",
    style: {
      height: '100%',
      border: 'none',
      boxShadow: '1px 0px 25px rgba(0, 0, 0, 0.04)'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "sidebar-header logo",
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M98.9421 19.6442L93.3587 20.2954V43.3768H88.9911H61.8771H57.5089V19.6442H51.1553L74.7538 1.71014L81.3469 6.60069V1.71014H87.005V10.8149L98.9421 19.6442Z",
    fill: "#009999",
    stroke: "#009999",
    "stroke-width": "1.5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M73.4834 36.7277V36.831C73.4728 36.8172 73.4568 36.7965 73.4409 36.7759C73.4568 36.7552 73.4674 36.7414 73.4834 36.7277Z",
    fill: "#009999",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M73.441 36.7759C73.3943 36.8241 73.354 36.8723 73.3125 36.9136V36.6381C73.3592 36.6932 73.4001 36.7414 73.441 36.7759Z",
    fill: "#009999",
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M70.8933 21.5018C72.5554 20.6685 74.3561 22.5435 75.0486 23.5851C77.4726 23.2379 79.204 20.4601 83.3594 23.5851C84.5347 24.469 81.2817 35.0435 74.0098 35.0435C61.5437 27.7518 68.8156 22.5435 70.8933 21.5018Z",
    fill: "white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M16.9681 69.768L12.7681 59.304L7.87207 69.816L0.768066 51.456H4.84807L8.32807 61.68L11.0161 54.936L9.62407 51.456H13.0801L17.0401 61.272L20.0401 51.456H23.7841L16.9681 69.768Z",
    fill: "#344563",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M29.3663 66.432C30.0383 66.432 30.7343 66.2 31.4543 65.736L32.9423 68.232C32.3663 68.552 31.7583 68.808 31.1183 69C30.4783 69.192 29.8703 69.288 29.2943 69.288C28.0463 69.288 26.9663 69.056 26.0543 68.592C25.1583 68.112 24.4783 67.448 24.0143 66.6C23.5503 65.736 23.3183 64.752 23.3183 63.648C23.3183 62.624 23.5823 61.68 24.1103 60.816C24.6543 59.952 25.3903 59.272 26.3183 58.776C27.2463 58.264 28.2623 58.008 29.3663 58.008C30.8703 58.008 32.1023 58.448 33.0623 59.328C34.0383 60.208 34.6703 61.464 34.9583 63.096L27.2783 65.544C27.7903 66.136 28.4863 66.432 29.3663 66.432ZM29.1023 60.624C28.3503 60.624 27.7503 60.88 27.3023 61.392C26.8543 61.904 26.6303 62.592 26.6303 63.456V63.672L31.2383 62.112C30.9023 61.12 30.1903 60.624 29.1023 60.624Z",
    fill: "#344563",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M53.8639 51.336V69.72H53.7679L41.4079 58.56L41.4799 69H37.9519V50.64H38.0959L50.4319 61.968L50.3599 51.336H53.8639Z",
    fill: "#344563",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M63.0929 66.432C63.7649 66.432 64.4609 66.2 65.1809 65.736L66.6689 68.232C66.0929 68.552 65.4849 68.808 64.8449 69C64.2049 69.192 63.5969 69.288 63.0209 69.288C61.7729 69.288 60.6929 69.056 59.7809 68.592C58.8849 68.112 58.2049 67.448 57.7409 66.6C57.2769 65.736 57.0449 64.752 57.0449 63.648C57.0449 62.624 57.3089 61.68 57.8369 60.816C58.3809 59.952 59.1169 59.272 60.0449 58.776C60.9729 58.264 61.9889 58.008 63.0929 58.008C64.5969 58.008 65.8289 58.448 66.7889 59.328C67.7649 60.208 68.3969 61.464 68.6849 63.096L61.0049 65.544C61.5169 66.136 62.2129 66.432 63.0929 66.432ZM62.8289 60.624C62.0769 60.624 61.4769 60.88 61.0289 61.392C60.5809 61.904 60.3569 62.592 60.3569 63.456V63.672L64.9649 62.112C64.6289 61.12 63.9169 60.624 62.8289 60.624Z",
    fill: "#344563",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M74.4865 58.512V69H71.1265V58.512H74.4865ZM71.0545 54.792C71.0545 54.312 71.2385 53.912 71.6065 53.592C71.9905 53.256 72.4225 53.088 72.9025 53.088C73.3665 53.088 73.7825 53.256 74.1505 53.592C74.5185 53.912 74.7025 54.312 74.7025 54.792C74.7025 55.272 74.5185 55.672 74.1505 55.992C73.7825 56.312 73.3665 56.472 72.9025 56.472C72.4225 56.472 71.9905 56.312 71.6065 55.992C71.2385 55.672 71.0545 55.272 71.0545 54.792Z",
    fill: "#344563",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M89.6828 58.512V69C89.6828 69.992 89.3948 70.888 88.8188 71.688C88.2588 72.504 87.4908 73.136 86.5148 73.584C85.5548 74.048 84.5068 74.28 83.3708 74.28C82.5068 74.28 81.7468 74.176 81.0908 73.968C80.4508 73.76 79.9308 73.528 79.5308 73.272C79.1468 73.016 78.6828 72.664 78.1388 72.216L80.1068 69.912C80.5868 70.36 81.0588 70.712 81.5228 70.968C82.0028 71.224 82.6028 71.352 83.3228 71.352C84.1708 71.352 84.8828 71.136 85.4588 70.704C86.0348 70.288 86.3228 69.704 86.3228 68.952V67.464C86.0028 68.008 85.5068 68.448 84.8348 68.784C84.1788 69.12 83.3708 69.288 82.4108 69.288C81.4668 69.288 80.5868 69.048 79.7708 68.568C78.9708 68.072 78.3308 67.4 77.8508 66.552C77.3708 65.688 77.1308 64.736 77.1308 63.696C77.1308 62.64 77.3788 61.672 77.8748 60.792C78.3868 59.912 79.0508 59.224 79.8668 58.728C80.6988 58.232 81.5708 57.984 82.4828 57.984C83.3468 57.984 84.1148 58.112 84.7868 58.368C85.4588 58.608 85.9708 58.928 86.3228 59.328L86.5868 58.512H89.6828ZM83.4188 66.552C84.7628 66.552 85.7308 66.024 86.3228 64.968V62.4C86.0988 61.888 85.7228 61.48 85.1948 61.176C84.6828 60.872 84.0908 60.72 83.4188 60.72C82.6028 60.72 81.9148 60.992 81.3548 61.536C80.7948 62.08 80.5148 62.768 80.5148 63.6C80.5148 64.432 80.7948 65.136 81.3548 65.712C81.9148 66.272 82.6028 66.552 83.4188 66.552Z",
    fill: "#344563",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M100.43 58.008C101.422 58.008 102.246 58.304 102.902 58.896C103.574 59.488 103.918 60.24 103.934 61.152V69H100.574V62.4C100.526 61.376 100.014 60.864 99.0383 60.864C98.2703 60.864 97.6543 61.224 97.1903 61.944C96.7263 62.664 96.4943 63.592 96.4943 64.728V69H93.1343V50.064H96.4223V60.168C96.8063 59.496 97.3343 58.968 98.0063 58.584C98.6943 58.2 99.5023 58.008 100.43 58.008Z",
    fill: "#344563",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M114.728 57.984C115.64 57.984 116.472 58.208 117.224 58.656C117.992 59.088 118.6 59.72 119.048 60.552C119.496 61.384 119.72 62.376 119.72 63.528C119.72 64.68 119.472 65.696 118.976 66.576C118.48 67.44 117.816 68.112 116.984 68.592C116.152 69.056 115.248 69.288 114.272 69.288C112.848 69.288 111.672 68.84 110.744 67.944V69H107.384V50.064H110.72V59.232C111.168 58.864 111.736 58.568 112.424 58.344C113.112 58.104 113.88 57.984 114.728 57.984ZM113.528 66.456C114.024 66.456 114.48 66.328 114.896 66.072C115.328 65.816 115.672 65.464 115.928 65.016C116.184 64.552 116.312 64.048 116.312 63.504C116.312 62.672 116.04 61.984 115.496 61.44C114.952 60.896 114.296 60.624 113.528 60.624C112.872 60.624 112.296 60.776 111.8 61.08C111.304 61.384 110.952 61.792 110.744 62.304V64.872C111.32 65.928 112.248 66.456 113.528 66.456Z",
    fill: "#344563",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M121.545 63.624C121.545 62.552 121.793 61.592 122.289 60.744C122.801 59.896 123.513 59.232 124.425 58.752C125.353 58.256 126.401 58.008 127.569 58.008C128.737 58.008 129.761 58.256 130.641 58.752C131.537 59.232 132.225 59.896 132.705 60.744C133.185 61.592 133.425 62.552 133.425 63.624C133.425 64.696 133.185 65.664 132.705 66.528C132.225 67.392 131.537 68.072 130.641 68.568C129.761 69.048 128.721 69.288 127.521 69.288C126.353 69.288 125.313 69.064 124.401 68.616C123.505 68.152 122.801 67.496 122.289 66.648C121.793 65.8 121.545 64.792 121.545 63.624ZM124.929 63.648C124.929 64.48 125.169 65.176 125.649 65.736C126.129 66.28 126.737 66.552 127.473 66.552C128.241 66.552 128.857 66.28 129.321 65.736C129.801 65.192 130.041 64.496 130.041 63.648C130.041 62.8 129.801 62.104 129.321 61.56C128.857 61.016 128.241 60.744 127.473 60.744C126.737 60.744 126.129 61.024 125.649 61.584C125.169 62.128 124.929 62.816 124.929 63.648Z",
    fill: "#344563",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M139.36 60.912C139.648 60.352 140.04 59.848 140.536 59.4C141.048 58.952 141.568 58.608 142.096 58.368C142.624 58.112 143.04 57.984 143.344 57.984L143.176 61.344C143.08 61.328 142.944 61.32 142.768 61.32C142.096 61.32 141.504 61.496 140.992 61.848C140.48 62.2 140.088 62.656 139.816 63.216C139.544 63.76 139.408 64.32 139.408 64.896V69H136.072V58.512H139.096L139.36 60.912Z",
    fill: "#344563",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M149.324 69.216C148.46 69.216 147.652 69.064 146.9 68.76C146.148 68.456 145.524 68.032 145.028 67.488L146.42 65.64C147.348 66.504 148.22 66.936 149.036 66.936C149.468 66.936 149.812 66.872 150.068 66.744C150.34 66.6 150.476 66.392 150.476 66.12C150.476 65.8 150.324 65.56 150.02 65.4C149.716 65.224 149.372 65.08 148.988 64.968C148.62 64.856 148.372 64.784 148.244 64.752C147.332 64.464 146.652 64.04 146.204 63.48C145.756 62.904 145.532 62.248 145.532 61.512C145.532 60.952 145.676 60.408 145.964 59.88C146.268 59.336 146.732 58.896 147.356 58.56C147.98 58.208 148.756 58.032 149.684 58.032C150.548 58.032 151.284 58.12 151.892 58.296C152.5 58.472 153.084 58.76 153.644 59.16L152.372 61.128C152.052 60.872 151.692 60.664 151.292 60.504C150.908 60.328 150.556 60.24 150.236 60.24C149.852 60.24 149.54 60.32 149.3 60.48C149.06 60.64 148.94 60.832 148.94 61.056C148.924 61.392 149.06 61.648 149.348 61.824C149.652 61.984 150.116 62.152 150.74 62.328C150.836 62.36 150.932 62.392 151.028 62.424C151.14 62.456 151.252 62.488 151.364 62.52C153.012 63.064 153.836 64.056 153.836 65.496C153.836 66.168 153.668 66.784 153.332 67.344C152.996 67.904 152.484 68.36 151.796 68.712C151.124 69.048 150.3 69.216 149.324 69.216Z",
    fill: "#344563",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "sidebar-wrapper scrollBarStyle sidebar-content",
    __self: _this,
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
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    style: {
      height: 350
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, Object(_dashboardRoutes__WEBPACK_IMPORTED_MODULE_3__["routes"])().map(function (prop, key) {
    return __jsx("li", {
      key: key,
      className: "cursorPoint",
      style: {
        height: 50,
        marginBottom: 10
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/dashboard/[user]/[role]",
      as: "/dashboard/user/".concat(prop.path),
      __self: _this,
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
      __self: _this,
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
      __self: _this,
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
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 25
      }
    }, __jsx("path", {
      d: "M0.877747 1.90001L5.97775 7.00001L0.877747 12.1L2.45552 13.6667L9.12219 7.00001L2.45552 0.333344L0.877747 1.90001Z",
      fill: "#344563",
      __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "sidebar-card",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "sidebar-card-content",
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "card-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 17
    }
  }, "Macado Leam"), __jsx("p", {
    className: "card-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, "Board Member"), __jsx("div", {
    className: "sidebar-card-footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "memberSince",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 19
    }
  }, "Member Since"), __jsx("p", {
    className: "f-date",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  }, "September 2019"))))))));
};

/***/ })

})
//# sourceMappingURL=signIn.js.e369e5fd03cae6cd0d0e.hot-update.js.map