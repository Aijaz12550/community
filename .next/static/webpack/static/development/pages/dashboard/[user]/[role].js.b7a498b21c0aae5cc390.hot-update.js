webpackHotUpdate("static/development/pages/dashboard/[user]/[role].js",{

/***/ "./configuration/OauthConfig.js":
/*!**************************************!*\
  !*** ./configuration/OauthConfig.js ***!
  \**************************************/
/*! exports provided: OauthConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OauthConfig", function() { return OauthConfig; });
var ClientOAuth2 = __webpack_require__(/*! client-oauth2 */ "./node_modules/client-oauth2/src/client-oauth2.js");

var OauthConfig = new ClientOAuth2({
  clientId: process.env.OAUTH_CLIENT_ID,
  clientSecret: "talk@Tiva!1",
  accessTokenUri: "https://devapp.talktiva.com/uaa/oauth/token",
  redirectUri: "http://localhost:3000",
  scopes: ["email", "name"]
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=[role].js.b7a498b21c0aae5cc390.hot-update.js.map