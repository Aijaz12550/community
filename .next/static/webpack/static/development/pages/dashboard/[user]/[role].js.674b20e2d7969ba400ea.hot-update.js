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
  clientSecret: process.env.OAUTH_CLIENT_SECRET,
  accessTokenUri: process.env.OAUTH_TOKEN_URL,
  redirectUri: process.env.OAUTH_REDIRECT_URL,
  scopes: ["email", "name"]
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=[role].js.674b20e2d7969ba400ea.hot-update.js.map