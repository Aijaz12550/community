module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/IUH":
/***/ (function(module, exports) {



/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8LsS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_mainlayout_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("G7Ex");
/* harmony import */ var _styles_mainlayout_index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_mainlayout_index_scss__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = ({
  children
}) => __jsx("div", {
  className: "main-container"
}, __jsx("div", {
  className: "main-container-child"
}, children));

/***/ }),

/***/ "8tBW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SignIn; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/mainlayout/index.js
var mainlayout = __webpack_require__("8LsS");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./styles/signin/index.scss
var signin = __webpack_require__("pCgL");

// CONCATENATED MODULE: ./components/signin/google.js
var __jsx = external_react_default.a.createElement;
 // To federated sign in from Google

class google_GoogleLogin extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    const ga = window.gapi && window.gapi.auth2 ? window.gapi.auth2.getAuthInstance() : null;
    if (!ga) this.createScript();
  }

  signIn() {
    const ga = window.gapi.auth2.getAuthInstance();
    ga === null || ga === void 0 ? void 0 : ga.signIn().then(googleUser => {
      console.log('google ===>', googleUser);
    }, error => {
      console.log(error);
    });
  }

  createScript() {
    // load the Google SDK
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.onload = this.initGapi;
    document.body.appendChild(script);
  }

  initGapi() {
    // init the Google SDK client
    const g = window.gapi;
    g.load('auth2', function () {
      g.auth2.init({
        client_id: '215485620819-r3ps1inqudcu9u0dvpeu6lrrfktd7dma.apps.googleusercontent.com',
        // authorized scopes
        scope: 'profile email openid'
      });
    });
  }

  render() {
    return __jsx("button", {
      className: "google-login-btn",
      onClick: this.signIn
    }, "continue with Google");
  }

}
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// CONCATENATED MODULE: ./components/signin/apple.js
var apple_jsx = external_react_default.a.createElement;


const Apple = () => {
  Object(external_react_["useEffect"])(() => {
    AppleID.auth.init({
      clientId: '[CLIENT_ID]',
      scope: '[SCOPES]',
      redirectURI: '[REDIRECT_URI]',
      state: '[STATE]',
      usePopup: true //or false defaults to false

    });
  });
  return apple_jsx(external_react_["Fragment"], null, apple_jsx(head_default.a, null, apple_jsx("script", {
    type: "text/javascript",
    src: "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
  })), apple_jsx("div", {
    id: "appleid-signin",
    "data-color": "black",
    "data-border": "true",
    "data-type": "sign in"
  }));
};
// CONCATENATED MODULE: ./components/signin/index.js
var signin_jsx = external_react_default.a.createElement;






const SignIn = props => {
  return signin_jsx(mainlayout["a" /* Container */], null, signin_jsx("p", null, "Welcome Back!"), signin_jsx("p", null, "Please Sign In to access your community dashboard."), signin_jsx("button", {
    className: "apple-login-btn"
  }, "continue with Apple"), signin_jsx(google_GoogleLogin, null), signin_jsx(Apple, null), signin_jsx(link_default.a, {
    href: "#"
  }, signin_jsx("a", null, "OR USE YOUR OWN EMAIL")), signin_jsx("input", {
    className: "signin-input",
    placeholder: "Email",
    type: "email",
    required: true
  }), signin_jsx("input", {
    className: "signin-input",
    placeholder: "Password",
    type: "password",
    required: true
  }), signin_jsx("p", null, "Forgot password?"), signin_jsx("button", {
    className: "signinbtn"
  }, "Sign In"));
};

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "DDR+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeAddress; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _invitationCode_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qMYR");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("pCgL");
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const HomeAddress = () => {
  return __jsx(_invitationCode_layout__WEBPACK_IMPORTED_MODULE_1__[/* Layout */ "a"], {
    prog: 50
  }, __jsx("p", {
    style: {
      color: "black",
      marginTop: "20px",
      fontSize: "19px"
    }
  }, "It seems you're also a resident at <Community> Please enter your home address."), __jsx("p", {
    style: {
      color: "gray"
    }
  }, "Your home address is required to use resident app and stay connected with your neighbors."), __jsx("input", {
    className: "invitation-code-input",
    placeholder: "Your Home Address",
    type: "text"
  }), __jsx("input", {
    className: "invitation-code-input",
    placeholder: "Apt / unit",
    type: "text"
  }), __jsx("p", {
    style: {
      color: "red"
    }
  }, "Cannot find your home at this community. Please enter your correct home address or please contact our support.", __jsx("a", {
    href: "#"
  }, "support@weneibours.io"), "for any help."), __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%"
    }
  }, __jsx("button", {
    className: "btn"
  }, "< Back"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/signup"
  }, __jsx("button", {
    className: "btn"
  }, "Next >"))));
};

/***/ }),

/***/ "G7Ex":
/***/ (function(module, exports) {



/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _landingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("p3EU");
/* harmony import */ var _styles_assets_css_dashboard_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("UX5j");
/* harmony import */ var _styles_assets_css_dashboard_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_assets_css_dashboard_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("q4sD");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("e+cM");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Home = () => __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, __jsx("title", null, "Community System"), __jsx("link", {
  rel: "icon",
  href: "/favicon.ico"
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/_next/static/css/styles.chunk.css?v=" + Date.now()
}), __jsx("link", {
  rel: "stylesheet",
  href: "https://use.fontawesome.com/releases/v5.7.0/css/all.css",
  integrity: "sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
})), __jsx(_components__WEBPACK_IMPORTED_MODULE_5__[/* DashBoard */ "a"], null));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "SMXH":
/***/ (function(module, exports) {



/***/ }),

/***/ "UX5j":
/***/ (function(module, exports) {



/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "ZfO+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("qMYR");
/* harmony import */ var _styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/IUH");
/* harmony import */ var _styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("pCgL");
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





/* harmony default export */ __webpack_exports__["a"] = (() => __jsx(_layout__WEBPACK_IMPORTED_MODULE_2__[/* Layout */ "a"], {
  prog: 1,
  key: "123"
}, __jsx("p", null, "Already have an acoount?", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/signIn"
}, __jsx("a", null, "Sign In"))), __jsx("p", null, "Please Enter the invitation code that you have received from us."), __jsx("p", {
  style: {
    color: "red"
  }
}, "sorry! Entered invitation code is invalid or expired. If problem persist please contact our support.", __jsx("a", {
  href: "#"
}, "support@weneibours.io")), __jsx("input", {
  className: "invitation-code-input",
  placeholder: "Invitation Code",
  type: "password"
}), __jsx("p", null, "Your Community is <abc>"), __jsx("p", null, "And For the member role is president."), __jsx("div", {
  style: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
}, __jsx("button", {
  className: "btn"
}, "< Back"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/homeAddress"
}, __jsx("button", {
  className: "btn"
}, " Next >")))));

/***/ }),

/***/ "byk8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ LandingPage; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./styles/landingpage/index.scss
var landingpage = __webpack_require__("f21D");

// CONCATENATED MODULE: ./components/landingPage/carousel.js
var __jsx = external_react_default.a.createElement;
 // import img1 from '../../assets/wn.png'



const items = [{
  src: "/assets/wn2.png",
  altText: "",
  caption: ""
}, {
  src: "/assets/wn3.png",
  altText: "",
  caption: " "
}, {
  src: "/assets/wn1.png",
  altText: "",
  caption: ""
}];

const Banner = props => {
  const {
    0: activeIndex,
    1: setActiveIndex
  } = Object(external_react_["useState"])(0);
  const {
    0: animating,
    1: setAnimating
  } = Object(external_react_["useState"])(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return __jsx(external_reactstrap_["CarouselItem"], {
      onExiting: () => setAnimating(true),
      onExited: () => setAnimating(false),
      key: item.src
    }, __jsx("img", {
      src: item.src,
      alt: item.altText
    }), __jsx(external_reactstrap_["CarouselCaption"], {
      captionText: item.caption,
      captionHeader: item.caption
    }));
  });
  return __jsx(external_reactstrap_["Carousel"], {
    activeIndex: activeIndex,
    next: next,
    previous: previous
  }, __jsx(external_reactstrap_["CarouselIndicators"], {
    items: items,
    activeIndex: activeIndex,
    onClickHandler: goToIndex
  }), slides, __jsx(external_reactstrap_["CarouselControl"], {
    direction: "prev",
    directionText: "Previous",
    onClickHandler: previous
  }), __jsx(external_reactstrap_["CarouselControl"], {
    direction: "next",
    directionText: "Next",
    onClickHandler: next
  }));
};

/* harmony default export */ var carousel = (Banner);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/landingPage/header.js
var header_jsx = external_react_default.a.createElement;



const Header = () => {
  const {
    0: isShow,
    1: setShow
  } = Object(external_react_["useState"])(false);
  const {
    0: menuclass,
    1: setMenulass
  } = Object(external_react_["useState"])('close-small-menu');
  return header_jsx("div", {
    className: "header-container"
  }, header_jsx("div", {
    className: "lg"
  }, header_jsx("p", {
    className: "hdng"
  }, "WeNeibours"), header_jsx("p", {
    className: "hdng"
  }, "whyWeNeibours"), header_jsx("p", {
    className: "hdng"
  }, "Contact Us"), header_jsx(link_default.a, {
    href: "/signIn"
  }, header_jsx("p", {
    className: "hdng"
  }, "SignIn")), header_jsx(link_default.a, {
    href: "/invitationCode"
  }, header_jsx("button", {
    className: "get-btn"
  }, "Get Started"))), menuclass === 'close-small-menu' ? header_jsx("div", {
    onClick: () => setMenulass('sm'),
    className: "toggle-container"
  }, header_jsx("div", {
    className: "toggle-line"
  }), header_jsx("div", {
    className: "toggle-line"
  }), header_jsx("div", {
    className: "toggle-line"
  })) : header_jsx("div", {
    onClick: () => setMenulass('close-small-menu'),
    className: "close"
  }, header_jsx("p", {
    className: "cross"
  }, "X")), header_jsx("div", {
    className: menuclass
  }, header_jsx("p", {
    className: "sm-headings"
  }, "WeNeibours"), header_jsx("p", {
    className: "sm-headings"
  }, "whyWeNeibours"), header_jsx("p", {
    className: "sm-headings"
  }, "Contact Us"), header_jsx(link_default.a, {
    href: "/signIn"
  }, header_jsx("p", {
    className: "sm-headings"
  }, "SignIn")), header_jsx(link_default.a, {
    href: "/invitationCode"
  }, header_jsx("button", {
    className: "get-btn"
  }, "Get Started"))));
};
// CONCATENATED MODULE: ./components/landingPage/index.js
var landingPage_jsx = external_react_default.a.createElement;





const LandingPage = props => {
  return landingPage_jsx("div", null, landingPage_jsx(Header, null), landingPage_jsx(carousel, null), landingPage_jsx("div", {
    className: "landingpage-bottom"
  }, landingPage_jsx("p", null, "Keep communications organized in WeNeibours, the smart alternative to email."), landingPage_jsx("p", null, "Already Have an account?", landingPage_jsx(link_default.a, {
    href: "/signIn"
  }, landingPage_jsx("a", null, " Sign In")))));
};

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("g/15");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (false) { var exact, PropTypes, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "e+cM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ DashBoard; });

// UNUSED EXPORTS: ViewResident, HomeAddress, LandingPage, Container, SignIn, SignUp

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// EXTERNAL MODULE: ./styles/viewResidents/index.scss
var viewResidents = __webpack_require__("kf+y");

// CONCATENATED MODULE: ./components/Dashboard/viewResidents/index.jsx
var __jsx = external_react_default.a.createElement;



const ViewResident = () => {
  return __jsx("div", {
    className: "content"
  }, __jsx(external_reactstrap_["Row"], null, __jsx(external_reactstrap_["Col"], {
    lg: "12",
    md: "12",
    sm: "12"
  }, __jsx(external_reactstrap_["Card"], {
    style: {
      background: "#F6F7FB",
      border: "none",
      boxShadow: "none"
    }
  }, __jsx(external_reactstrap_["CardBody"], null, __jsx(external_reactstrap_["Row"], null, __jsx("div", {
    className: "number",
    style: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center"
    }
  }, __jsx("p", {
    className: "view-residents-title"
  }, "Turner Hill HomeOwners Association"), __jsx("p", {
    className: "view-residents-address"
  }, "2 barnum place abc abc USA", " "), __jsx("p", null)))))), __jsx(external_reactstrap_["Col"], {
    lg: "12",
    md: "12",
    sm: "12"
  }, __jsx("form", {
    style: {
      background: "white"
    }
  }, __jsx(external_reactstrap_["InputGroup"], {
    className: "no-border card-stats",
    style: {
      background: "white",
      height: "50px"
    }
  }, __jsx(external_reactstrap_["InputGroupAddon"], {
    addonType: "append",
    style: {
      background: "white"
    }
  }, __jsx(external_reactstrap_["InputGroupText"], {
    style: {
      background: "white"
    }
  }, __jsx("i", {
    className: "fas fa-search"
  }))), __jsx(external_reactstrap_["Input"], {
    placeholder: "Search...",
    style: {
      background: "white"
    }
  }))))), __jsx(external_reactstrap_["Row"], null, __jsx(external_reactstrap_["Col"], {
    md: "12"
  }, __jsx(external_reactstrap_["Table"], {
    responsive: true,
    className: "residents-tabl"
  }, __jsx("thead", {
    className: "text-primary"
  }, __jsx("tr", null, __jsx("th", {
    className: "sm-display-none"
  }, "Address"), __jsx("th", null, "Family Members"), __jsx("th", {
    className: "text-right",
    style: {
      minWidth: '150px',
      padding: '0px',
      paddingRight: '15px'
    }
  }, "Residence Since"))), __jsx("tbody", null, __jsx("tr", {
    className: "residents-table-row"
  }, __jsx("td", {
    className: "address-td sm-display-none"
  }, "Dakota Rice"), __jsx("td", {
    className: "row-residents"
  }, __jsx("div", {
    className: " residents-name-container  truncate-overflow"
  }, __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle",
    style: {
      background: "yellow",
      zIndex: 2
    }
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle",
    style: {
      background: "yellow",
      zIndex: 2
    }
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle",
    style: {
      background: "yellow",
      zIndex: 2
    }
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  })), __jsx("span", {
    className: "residents-name-container truncate-overflow"
  }, __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"))), __jsx("td", {
    className: "text-right"
  }, "September 2019")), __jsx("div", {
    style: {
      height: '15px'
    }
  }), __jsx("tr", {
    className: "residents-table-row"
  }, __jsx("td", {
    className: "address-td sm-display-none"
  }, "Dakota Rice"), __jsx("td", {
    className: "row-residents"
  }, __jsx("div", {
    className: " residents-name-container  truncate-overflow"
  }, __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle",
    style: {
      background: "yellow",
      zIndex: 2
    }
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle",
    style: {
      background: "yellow",
      zIndex: 2
    }
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle",
    style: {
      background: "yellow",
      zIndex: 2
    }
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  })), __jsx("span", {
    className: "residents-name-container truncate-overflow"
  }, __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"))), __jsx("td", {
    className: "text-right"
  }, "September 2019")), __jsx("div", {
    style: {
      height: '15px'
    }
  }), __jsx("tr", {
    className: "residents-table-row"
  }, __jsx("td", {
    className: "address-td sm-display-none"
  }, "Dakota Rice"), __jsx("td", {
    className: "row-residents"
  }, __jsx("div", {
    className: " residents-name-container  truncate-overflow"
  }, __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle",
    style: {
      background: "yellow",
      zIndex: 2
    }
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle",
    style: {
      background: "yellow",
      zIndex: 2
    }
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle",
    style: {
      background: "yellow",
      zIndex: 2
    }
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  })), __jsx("span", {
    className: "residents-name-container truncate-overflow"
  }, __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"))), __jsx("td", {
    className: "text-right"
  }, "September 2019")), __jsx("div", {
    style: {
      height: '15px'
    }
  }), __jsx("tr", {
    className: "residents-table-row"
  }, __jsx("td", {
    className: "address-td sm-display-none"
  }, "Dakota Rice"), __jsx("td", {
    className: "row-residents"
  }, __jsx("div", {
    className: " residents-name-container  truncate-overflow"
  }, __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle",
    style: {
      background: "yellow",
      zIndex: 2
    }
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle",
    style: {
      background: "yellow",
      zIndex: 2
    }
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle",
    style: {
      background: "yellow",
      zIndex: 2
    }
  }), __jsx("img", {
    src: "/zeit.svg",
    className: "roundedCircle"
  })), __jsx("span", {
    className: "residents-name-container truncate-overflow"
  }, __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"), __jsx("p", null, "hello,"))), __jsx("td", {
    className: "text-right"
  }, "September 2019")))))));
};
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./components/Dashboard/dashboardRoutes/index.js
var dashboardRoutes_jsx = external_react_default.a.createElement;



let routes = () => {
  let router = Object(router_["useRouter"])();
  return [{
    path: "view_residents",
    name: "View Residents",
    component: dashboardRoutes_jsx(ViewResident, null),
    icon: dashboardRoutes_jsx("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, dashboardRoutes_jsx("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M1.85716 0.666748H6.61907C7.27655 0.666748 7.80954 1.19974 7.80954 1.85722V6.61913C7.80954 7.27661 7.27655 7.8096 6.61907 7.8096H1.85716C1.19968 7.8096 0.666687 7.27661 0.666687 6.61913V1.85722C0.666687 1.19974 1.19968 0.666748 1.85716 0.666748ZM11.3809 10.1905H16.1429C16.8003 10.1905 17.3333 10.7235 17.3333 11.381V16.1429C17.3333 16.8004 16.8003 17.3334 16.1429 17.3334H11.3809C10.7235 17.3334 10.1905 16.8004 10.1905 16.1429V11.381C10.1905 10.7235 10.7235 10.1905 11.3809 10.1905ZM11.3809 0.666748H16.1429C16.8003 0.666748 17.3333 1.19974 17.3333 1.85722V6.61913C17.3333 7.27661 16.8003 7.8096 16.1429 7.8096H11.3809C10.7235 7.8096 10.1905 7.27661 10.1905 6.61913V1.85722C10.1905 1.19974 10.7235 0.666748 11.3809 0.666748ZM1.85716 10.1905H6.61907C7.27655 10.1905 7.80954 10.7235 7.80954 11.381V16.1429C7.80954 16.8004 7.27655 17.3334 6.61907 17.3334H1.85716C1.19968 17.3334 0.666687 16.8004 0.666687 16.1429V11.381C0.666687 10.7235 1.19968 10.1905 1.85716 10.1905Z",
      fill: router.query.role === "view_residents" ? "#009999" : "#344563"
    }))
  }, {
    path: "invite_residents",
    name: "Invite Residents",
    component: dashboardRoutes_jsx("p", null, " hello seond 222222"),
    icon: dashboardRoutes_jsx("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, dashboardRoutes_jsx("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M14.9524 3.84128C14.0757 3.84128 13.3651 3.13062 13.3651 2.25397C13.3651 1.37733 14.0757 0.666672 14.9524 0.666672C15.829 0.666672 16.5397 1.37733 16.5397 2.25397C16.5397 3.13062 15.829 3.84128 14.9524 3.84128ZM7.01588 4.63496C7.01588 5.5116 7.72654 6.22226 8.60318 6.22226C9.47982 6.22226 10.1905 5.5116 10.1905 4.63496C10.1905 3.75832 9.47982 3.04766 8.60318 3.04766C7.72654 3.04766 7.01588 3.75832 7.01588 4.63496ZM2.25399 8.60317C1.37735 8.60317 0.666687 7.89251 0.666687 7.01587C0.666687 6.13922 1.37735 5.42857 2.25399 5.42857C3.13063 5.42857 3.84129 6.13922 3.84129 7.01587C3.84129 7.89251 3.13063 8.60317 2.25399 8.60317ZM9.79366 9.39685H8.20635C7.54887 9.39685 7.01588 9.92984 7.01588 10.5873V16.1429C7.01588 16.8004 7.54887 17.3334 8.20635 17.3334H9.79366C10.4511 17.3334 10.9841 16.8004 10.9841 16.1429V10.5873C10.9841 9.92984 10.4511 9.39685 9.79366 9.39685ZM3.44446 11.7778H1.85716C1.19968 11.7778 0.666687 12.3108 0.666687 12.9682V16.1428C0.666687 16.8003 1.19968 17.3333 1.85716 17.3333H3.44446C4.10195 17.3333 4.63494 16.8003 4.63494 16.1428V12.9682C4.63494 12.3108 4.10195 11.7778 3.44446 11.7778ZM16.1428 7.01586H14.5555C13.8981 7.01586 13.3651 7.54886 13.3651 8.20634V16.11C13.3651 16.7675 13.8981 17.3005 14.5555 17.3005H16.1428C16.8003 17.3005 17.3333 16.7675 17.3333 16.11V8.20634C17.3333 7.54886 16.8003 7.01586 16.1428 7.01586ZM6.2237 4.72005C6.23838 5.13769 6.36062 5.52797 6.56358 5.86402L4.59885 6.6008C4.52736 6.19411 4.35265 5.82298 4.10273 5.51541L6.2237 4.72005ZM12.9129 3.48312C12.7099 3.14706 12.5877 2.75679 12.573 2.33915L10.452 3.13451C10.7019 3.44207 10.8766 3.8132 10.9481 4.21989L12.9129 3.48312Z",
      fill: router.query.role === "invite_residents" ? "#009999" : "#344563"
    }))
  }, {
    path: "invite_members",
    name: "Invite Members",
    component: dashboardRoutes_jsx("p", null, "Hello 3333333"),
    icon: dashboardRoutes_jsx("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, dashboardRoutes_jsx("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M17.3213 16.7365C17.3992 17.0867 17.0867 17.3992 16.7365 17.3213L12.7609 16.4379C11.6055 17.0232 10.3245 17.333 8.99985 17.333C4.39757 17.333 0.666687 13.6021 0.666687 8.99983C0.666687 4.39756 4.39757 0.666672 8.99985 0.666672C13.6021 0.666672 17.333 4.39756 17.333 8.99983C17.333 10.3245 17.0232 11.6055 16.4379 12.7609L17.3213 16.7365Z",
      fill: router.query.role === "invite_members" ? "#009999" : "#344563"
    }))
  }, {
    path: "manage_members",
    name: "Manage Members",
    component: dashboardRoutes_jsx("p", null, " hello seond 444444444444"),
    icon: dashboardRoutes_jsx("svg", {
      width: "17",
      height: "16",
      viewBox: "0 0 17 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, dashboardRoutes_jsx("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12.6364 0.337662C12.4212 0.337662 12.2468 0.512096 12.2468 0.727272V2.28571C12.2468 2.50089 12.4212 2.67532 12.6364 2.67532C12.8516 2.67532 13.026 2.50089 13.026 2.28571V0.727272C13.026 0.512096 12.8516 0.337662 12.6364 0.337662ZM4.84419 0.337662C4.62902 0.337662 4.45458 0.512096 4.45458 0.727272V2.28571C4.45458 2.50089 4.62902 2.67532 4.84419 2.67532C5.05937 2.67532 5.2338 2.50089 5.2338 2.28571V0.727272C5.2338 0.512096 5.05937 0.337662 4.84419 0.337662ZM6.01302 1.11688H11.4676V2.28571C11.4676 2.93124 11.9909 3.45455 12.6364 3.45455C13.2819 3.45455 13.8052 2.93124 13.8052 2.28571V1.11688H15.7533C16.3988 1.11688 16.9221 1.64019 16.9221 2.28571V5.01299H0.558472V2.28571C0.558472 1.64019 1.08178 1.11688 1.7273 1.11688H3.67535V2.28571C3.67535 2.93124 4.19866 3.45455 4.84419 3.45455C5.48971 3.45455 6.01302 2.93124 6.01302 2.28571V1.11688ZM16.9221 12.4156V5.7922H0.558472V12.4156C0.558472 14.3522 2.12838 15.9221 4.06497 15.9221H13.4156C15.3522 15.9221 16.9221 14.3522 16.9221 12.4156ZM5.27125 9.6467C5.43795 9.48807 5.70169 9.49461 5.86032 9.66132L7.54588 11.4327L11.0855 7.59312C11.2414 7.42393 11.505 7.41321 11.6742 7.56919C11.8434 7.72516 11.8541 7.98876 11.6982 8.15796L7.85705 12.3246C7.69381 12.5017 7.41487 12.5039 7.24885 12.3294L5.25662 10.2358C5.09799 10.0691 5.10454 9.80533 5.27125 9.6467Z",
      fill: router.query.role === "manage_members" ? "#009999" : "#344563"
    }))
  }, {
    path: "managae_documents",
    name: "Manage Documents",
    component: dashboardRoutes_jsx("p", null, "Manage Component"),
    icon: dashboardRoutes_jsx("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, dashboardRoutes_jsx("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M13.2488 6.89959L17.3334 10.9829V3.44445C17.3334 1.91032 16.0897 0.666668 14.5556 0.666668H3.44446C1.91034 0.666668 0.666687 1.91032 0.666687 3.44445V14.1587L6.33847 8.48695C6.49923 8.32618 6.76193 8.33309 6.91403 8.50208L8.90032 10.687L12.6877 6.89965C12.8426 6.7447 13.0938 6.74467 13.2488 6.89959ZM7.80957 4.63492C7.80957 5.51156 7.09892 6.22222 6.22227 6.22222C5.34563 6.22222 4.63497 5.51156 4.63497 4.63492C4.63497 3.75827 5.34563 3.04761 6.22227 3.04761C7.09892 3.04761 7.80957 3.75827 7.80957 4.63492ZM6.22223 5.42857C5.78391 5.42857 5.42858 5.07324 5.42858 4.63491C5.42858 4.19659 5.78391 3.84126 6.22223 3.84126C6.66055 3.84126 7.01588 4.19659 7.01588 4.63491C7.01588 5.07324 6.66055 5.42857 6.22223 5.42857ZM17.3333 14.5068V12.2498L12.9349 7.80953L9.37434 11.4051L14.7065 17.3281C16.1722 17.2383 17.3333 16.0095 17.3333 14.5068ZM3.33818 17.3333H13.6302L6.5218 9.44017L0.666687 15.3528C1.02277 16.5006 2.08417 17.3333 3.33818 17.3333Z",
      fill: router.query.role === "managae_documents" ? "#009999" : "#344563"
    }))
  }, {
    path: "send_communication",
    name: "Send Communication",
    component: dashboardRoutes_jsx("p", null, " communication"),
    icon: dashboardRoutes_jsx("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 18 18",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, dashboardRoutes_jsx("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M13.2488 6.89959L17.3334 10.9829V3.44445C17.3334 1.91032 16.0897 0.666668 14.5556 0.666668H3.44446C1.91034 0.666668 0.666687 1.91032 0.666687 3.44445V14.1587L6.33847 8.48695C6.49923 8.32618 6.76193 8.33309 6.91403 8.50208L8.90032 10.687L12.6877 6.89965C12.8426 6.7447 13.0938 6.74467 13.2488 6.89959ZM7.80957 4.63492C7.80957 5.51156 7.09892 6.22222 6.22227 6.22222C5.34563 6.22222 4.63497 5.51156 4.63497 4.63492C4.63497 3.75827 5.34563 3.04761 6.22227 3.04761C7.09892 3.04761 7.80957 3.75827 7.80957 4.63492ZM6.22223 5.42857C5.78391 5.42857 5.42858 5.07324 5.42858 4.63491C5.42858 4.19659 5.78391 3.84126 6.22223 3.84126C6.66055 3.84126 7.01588 4.19659 7.01588 4.63491C7.01588 5.07324 6.66055 5.42857 6.22223 5.42857ZM17.3333 14.5068V12.2498L12.9349 7.80953L9.37434 11.4051L14.7065 17.3281C16.1722 17.2383 17.3333 16.0095 17.3333 14.5068ZM3.33818 17.3333H13.6302L6.5218 9.44017L0.666687 15.3528C1.02277 16.5006 2.08417 17.3333 3.33818 17.3333Z",
      fill: router.query.role === "send_communication" ? "#009999" : "#344563"
    }))
  }];
};
// EXTERNAL MODULE: ./styles/sidebar/index.scss
var styles_sidebar = __webpack_require__("SMXH");

// CONCATENATED MODULE: ./components/Dashboard/sidebar/index.js
var sidebar_jsx = external_react_default.a.createElement;






const SideBar = () => {
  const sidebar = Object(external_react_["createRef"])();
  const router = Object(router_["useRouter"])();
  return sidebar_jsx("div", {
    className: "sidebar",
    "data-color": "red",
    "data-active-color": "white"
  }, sidebar_jsx("div", {
    className: "sidebar-header logo"
  }, sidebar_jsx("svg", {
    style: {
      width: "250px",
      marginLeft: "-25px",
      paddingLeft: "-10px"
    }
  }, sidebar_jsx("path", {
    d: "M161.942 59.6442L156.359 60.2954V83.3768H151.991H124.877H120.509V59.6442H114.155L137.754 41.7101L144.347 46.6006V41.7101H150.005V50.8149L161.942 59.6442Z",
    fill: "#009999",
    stroke: "#009999",
    "stroke-width": "1.5"
  }), sidebar_jsx("path", {
    d: "M133.893 61.5018C135.556 60.6685 137.356 62.5435 138.049 63.5851C140.473 63.2379 142.204 60.4601 146.36 63.5851C147.535 64.469 144.282 75.0435 137.01 75.0435C124.544 67.7518 131.816 62.5435 133.893 61.5018Z",
    fill: "white"
  }), sidebar_jsx("path", {
    d: "M79.968 109.768L75.768 99.304L70.872 109.816L63.768 91.456H67.848L71.328 101.68L74.016 94.936L72.624 91.456H76.08L80.04 101.272L83.04 91.456H86.784L79.968 109.768Z",
    fill: "#344563"
  }), sidebar_jsx("path", {
    d: "M92.3663 106.432C93.0383 106.432 93.7343 106.2 94.4543 105.736L95.9423 108.232C95.3663 108.552 94.7583 108.808 94.1183 109C93.4783 109.192 92.8703 109.288 92.2943 109.288C91.0463 109.288 89.9663 109.056 89.0543 108.592C88.1583 108.112 87.4783 107.448 87.0143 106.6C86.5503 105.736 86.3183 104.752 86.3183 103.648C86.3183 102.624 86.5823 101.68 87.1103 100.816C87.6543 99.952 88.3903 99.272 89.3183 98.776C90.2463 98.264 91.2623 98.008 92.3663 98.008C93.8703 98.008 95.1023 98.448 96.0623 99.328C97.0383 100.208 97.6703 101.464 97.9583 103.096L90.2783 105.544C90.7903 106.136 91.4863 106.432 92.3663 106.432ZM92.1023 100.624C91.3503 100.624 90.7503 100.88 90.3023 101.392C89.8543 101.904 89.6303 102.592 89.6303 103.456V103.672L94.2383 102.112C93.9023 101.12 93.1903 100.624 92.1023 100.624Z",
    fill: "#344563"
  }), sidebar_jsx("path", {
    d: "M116.864 91.336V109.72H116.768L104.408 98.56L104.48 109H100.952V90.64H101.096L113.432 101.968L113.36 91.336H116.864Z",
    fill: "#344563"
  }), sidebar_jsx("path", {
    d: "M126.093 106.432C126.765 106.432 127.461 106.2 128.181 105.736L129.669 108.232C129.093 108.552 128.485 108.808 127.845 109C127.205 109.192 126.597 109.288 126.021 109.288C124.773 109.288 123.693 109.056 122.781 108.592C121.885 108.112 121.205 107.448 120.741 106.6C120.277 105.736 120.045 104.752 120.045 103.648C120.045 102.624 120.309 101.68 120.837 100.816C121.381 99.952 122.117 99.272 123.045 98.776C123.973 98.264 124.989 98.008 126.093 98.008C127.597 98.008 128.829 98.448 129.789 99.328C130.765 100.208 131.397 101.464 131.685 103.096L124.005 105.544C124.517 106.136 125.213 106.432 126.093 106.432ZM125.829 100.624C125.077 100.624 124.477 100.88 124.029 101.392C123.581 101.904 123.357 102.592 123.357 103.456V103.672L127.965 102.112C127.629 101.12 126.917 100.624 125.829 100.624Z",
    fill: "#344563"
  }), sidebar_jsx("path", {
    d: "M137.486 98.512V109H134.126V98.512H137.486ZM134.054 94.792C134.054 94.312 134.238 93.912 134.606 93.592C134.99 93.256 135.422 93.088 135.902 93.088C136.366 93.088 136.782 93.256 137.15 93.592C137.518 93.912 137.702 94.312 137.702 94.792C137.702 95.272 137.518 95.672 137.15 95.992C136.782 96.312 136.366 96.472 135.902 96.472C135.422 96.472 134.99 96.312 134.606 95.992C134.238 95.672 134.054 95.272 134.054 94.792Z",
    fill: "#344563"
  }), sidebar_jsx("path", {
    d: "M152.683 98.512V109C152.683 109.992 152.395 110.888 151.819 111.688C151.259 112.504 150.491 113.136 149.515 113.584C148.555 114.048 147.507 114.28 146.371 114.28C145.507 114.28 144.747 114.176 144.091 113.968C143.451 113.76 142.931 113.528 142.531 113.272C142.147 113.016 141.683 112.664 141.139 112.216L143.107 109.912C143.587 110.36 144.059 110.712 144.523 110.968C145.003 111.224 145.603 111.352 146.323 111.352C147.171 111.352 147.883 111.136 148.459 110.704C149.035 110.288 149.323 109.704 149.323 108.952V107.464C149.003 108.008 148.507 108.448 147.835 108.784C147.179 109.12 146.371 109.288 145.411 109.288C144.467 109.288 143.587 109.048 142.771 108.568C141.971 108.072 141.331 107.4 140.851 106.552C140.371 105.688 140.131 104.736 140.131 103.696C140.131 102.64 140.379 101.672 140.875 100.792C141.387 99.912 142.051 99.224 142.867 98.728C143.699 98.232 144.571 97.984 145.483 97.984C146.347 97.984 147.115 98.112 147.787 98.368C148.459 98.608 148.971 98.928 149.323 99.328L149.587 98.512H152.683ZM146.419 106.552C147.763 106.552 148.731 106.024 149.323 104.968V102.4C149.099 101.888 148.723 101.48 148.195 101.176C147.683 100.872 147.091 100.72 146.419 100.72C145.603 100.72 144.915 100.992 144.355 101.536C143.795 102.08 143.515 102.768 143.515 103.6C143.515 104.432 143.795 105.136 144.355 105.712C144.915 106.272 145.603 106.552 146.419 106.552Z",
    fill: "#344563"
  }), sidebar_jsx("path", {
    d: "M163.43 98.008C164.422 98.008 165.246 98.304 165.902 98.896C166.574 99.488 166.918 100.24 166.934 101.152V109H163.574V102.4C163.526 101.376 163.014 100.864 162.038 100.864C161.27 100.864 160.654 101.224 160.19 101.944C159.726 102.664 159.494 103.592 159.494 104.728V109H156.134V90.064H159.422V100.168C159.806 99.496 160.334 98.968 161.006 98.584C161.694 98.2 162.502 98.008 163.43 98.008Z",
    fill: "#344563"
  }), sidebar_jsx("path", {
    d: "M177.728 97.984C178.64 97.984 179.472 98.208 180.224 98.656C180.992 99.088 181.6 99.72 182.048 100.552C182.496 101.384 182.72 102.376 182.72 103.528C182.72 104.68 182.472 105.696 181.976 106.576C181.48 107.44 180.816 108.112 179.984 108.592C179.152 109.056 178.248 109.288 177.272 109.288C175.848 109.288 174.672 108.84 173.744 107.944V109H170.384V90.064H173.72V99.232C174.168 98.864 174.736 98.568 175.424 98.344C176.112 98.104 176.88 97.984 177.728 97.984ZM176.528 106.456C177.024 106.456 177.48 106.328 177.896 106.072C178.328 105.816 178.672 105.464 178.928 105.016C179.184 104.552 179.312 104.048 179.312 103.504C179.312 102.672 179.04 101.984 178.496 101.44C177.952 100.896 177.296 100.624 176.528 100.624C175.872 100.624 175.296 100.776 174.8 101.08C174.304 101.384 173.952 101.792 173.744 102.304V104.872C174.32 105.928 175.248 106.456 176.528 106.456Z",
    fill: "#344563"
  }), sidebar_jsx("path", {
    d: "M184.545 103.624C184.545 102.552 184.793 101.592 185.289 100.744C185.801 99.896 186.513 99.232 187.425 98.752C188.353 98.256 189.401 98.008 190.569 98.008C191.737 98.008 192.761 98.256 193.641 98.752C194.537 99.232 195.225 99.896 195.705 100.744C196.185 101.592 196.425 102.552 196.425 103.624C196.425 104.696 196.185 105.664 195.705 106.528C195.225 107.392 194.537 108.072 193.641 108.568C192.761 109.048 191.721 109.288 190.521 109.288C189.353 109.288 188.313 109.064 187.401 108.616C186.505 108.152 185.801 107.496 185.289 106.648C184.793 105.8 184.545 104.792 184.545 103.624ZM187.929 103.648C187.929 104.48 188.169 105.176 188.649 105.736C189.129 106.28 189.737 106.552 190.473 106.552C191.241 106.552 191.857 106.28 192.321 105.736C192.801 105.192 193.041 104.496 193.041 103.648C193.041 102.8 192.801 102.104 192.321 101.56C191.857 101.016 191.241 100.744 190.473 100.744C189.737 100.744 189.129 101.024 188.649 101.584C188.169 102.128 187.929 102.816 187.929 103.648Z",
    fill: "#344563"
  }), sidebar_jsx("path", {
    d: "M202.36 100.912C202.648 100.352 203.04 99.848 203.536 99.4C204.048 98.952 204.568 98.608 205.096 98.368C205.624 98.112 206.04 97.984 206.344 97.984L206.176 101.344C206.08 101.328 205.944 101.32 205.768 101.32C205.096 101.32 204.504 101.496 203.992 101.848C203.48 102.2 203.088 102.656 202.816 103.216C202.544 103.76 202.408 104.32 202.408 104.896V109H199.072V98.512H202.096L202.36 100.912Z",
    fill: "#344563"
  }), sidebar_jsx("path", {
    d: "M212.324 109.216C211.46 109.216 210.652 109.064 209.9 108.76C209.148 108.456 208.523 108.032 208.027 107.488L209.419 105.64C210.347 106.504 211.22 106.936 212.036 106.936C212.468 106.936 212.812 106.872 213.068 106.744C213.34 106.6 213.475 106.392 213.475 106.12C213.475 105.8 213.324 105.56 213.02 105.4C212.715 105.224 212.372 105.08 211.988 104.968C211.62 104.856 211.372 104.784 211.243 104.752C210.331 104.464 209.652 104.04 209.204 103.48C208.756 102.904 208.531 102.248 208.531 101.512C208.531 100.952 208.676 100.408 208.964 99.88C209.268 99.336 209.732 98.896 210.355 98.56C210.979 98.208 211.756 98.032 212.684 98.032C213.548 98.032 214.283 98.12 214.891 98.296C215.499 98.472 216.083 98.76 216.643 99.16L215.372 101.128C215.051 100.872 214.691 100.664 214.292 100.504C213.908 100.328 213.556 100.24 213.236 100.24C212.852 100.24 212.54 100.32 212.299 100.48C212.059 100.64 211.939 100.832 211.939 101.056C211.923 101.392 212.06 101.648 212.348 101.824C212.652 101.984 213.116 102.152 213.74 102.328C213.835 102.36 213.932 102.392 214.027 102.424C214.139 102.456 214.251 102.488 214.363 102.52C216.011 103.064 216.835 104.056 216.835 105.496C216.835 106.168 216.667 106.784 216.331 107.344C215.995 107.904 215.484 108.36 214.796 108.712C214.124 109.048 213.299 109.216 212.324 109.216Z",
    fill: "#344563"
  }))), sidebar_jsx("div", {
    className: "sidebar-wrapper",
    ref: sidebar,
    style: {
      color: "black"
    }
  }, sidebar_jsx(external_reactstrap_["Nav"], null, routes().map((prop, key) => {
    return sidebar_jsx("li", {
      key: key
    }, sidebar_jsx(link_default.a, {
      href: "/dashboard/[user]/[role]",
      as: `/dashboard/user/${prop.path}`
    }, sidebar_jsx("div", {
      className: "nav-link",
      style: router.query.role === prop.path ? {
        background: "#F0F9F9",
        marginTop: "25px",
        display: "flex",
        alignItems: "center",
        color: "#009999",
        borderLeft: "4px solid #009999"
      } : {
        marginTop: "25px",
        display: "flex",
        alignItems: "center"
      }
    }, prop.icon, sidebar_jsx("p", {
      style: {
        width: "100%",
        height: "22px",
        top: " calc(50% - 22px/2 + 2px)",
        paddingLeft: "15px",
        fontFamily: "Open Sans",
        fontStyle: " normal",
        fontWeight: router.query.role === prop.path ? 650 : "normal",
        color: router.query.role === prop.path ? "#009999" : "#344563",
        fontSize: "16px",
        lineHeight: "22px"
      }
    }, prop.name), router.query.role === prop.path && sidebar_jsx("svg", {
      width: "10",
      height: "14",
      viewBox: "0 0 10 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, sidebar_jsx("path", {
      d: "M0.877747 1.90001L5.97775 7.00001L0.877747 12.1L2.45552 13.6667L9.12219 7.00001L2.45552 0.333344L0.877747 1.90001Z",
      fill: "#344563"
    })))));
  })), sidebar_jsx("div", {
    className: "sidebar-card"
  }, sidebar_jsx("img", {
    src: "/zeit.svg"
  }), sidebar_jsx("p", {
    className: "card-name"
  }, "Macado Leam"), sidebar_jsx("p", {
    className: "card-title"
  }, "Board Member"), sidebar_jsx("div", {
    className: "sidebar-card-footer"
  }, sidebar_jsx("p", null, "Member Since"), sidebar_jsx("p", {
    className: "f-date"
  }, "September 2019")))));
};
// CONCATENATED MODULE: ./components/Dashboard/navbar/index.jsx
var navbar_jsx = external_react_default.a.createElement;




class navbar_Header extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent"
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.sidebarToggle = external_react_default.a.createRef();
  }

  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent"
      });
    } else {
      this.setState({
        color: "dark"
      });
    }

    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  }

  render() {
    return navbar_jsx(external_reactstrap_["Navbar"], {
      expand: "lg",
      className: "navbar-absolute fixed-top",
      style: {
        background: "white",
        borderBottom: "2px solid lightgray"
      }
    }, navbar_jsx(external_reactstrap_["Container"], {
      fluid: true
    }, navbar_jsx("div", {
      className: "navbar-wrapper"
    }, navbar_jsx("div", {
      className: "navbar-toggle"
    }, navbar_jsx("button", {
      type: "button",
      ref: this.sidebarToggle,
      className: "navbar-toggler",
      onClick: () => this.openSidebar()
    }, navbar_jsx("span", {
      className: "navbar-toggler-bar bar1"
    }), navbar_jsx("span", {
      className: "navbar-toggler-bar bar2"
    }), navbar_jsx("span", {
      className: "navbar-toggler-bar bar3"
    })))), navbar_jsx(external_reactstrap_["NavbarToggler"], {
      onClick: this.toggle
    }, navbar_jsx("span", {
      className: "navbar-toggler-bar navbar-kebab"
    }), navbar_jsx("span", {
      className: "navbar-toggler-bar navbar-kebab"
    }), navbar_jsx("span", {
      className: "navbar-toggler-bar navbar-kebab"
    })), navbar_jsx(external_reactstrap_["Collapse"], {
      isOpen: this.state.isOpen,
      navbar: true,
      className: "justify-content-end"
    }, navbar_jsx(external_reactstrap_["Nav"], {
      navbar: true
    }, navbar_jsx(external_reactstrap_["NavItem"], null, navbar_jsx(link_default.a, {
      href: "/"
    }, navbar_jsx("div", {
      className: "nav-link btn-magnify"
    }, navbar_jsx("i", {
      className: "fas fa-list"
    }), navbar_jsx("p", null, navbar_jsx("span", {
      className: "d-lg-none d-md-block"
    }, "Stats"))))), navbar_jsx(external_reactstrap_["Dropdown"], {
      nav: true,
      isOpen: this.state.dropdownOpen,
      toggle: e => this.dropdownToggle(e)
    }, navbar_jsx(external_reactstrap_["DropdownToggle"], {
      caret: true,
      nav: true,
      style: {
        color: 'black'
      }
    }, navbar_jsx("i", {
      className: "fas fa-user"
    }), navbar_jsx("p", null, navbar_jsx("span", {
      className: "d-lg-none d-md-block",
      style: {
        color: "black"
      }
    }, "Some Actions"))), navbar_jsx(external_reactstrap_["DropdownMenu"], {
      right: true
    }, navbar_jsx(external_reactstrap_["DropdownItem"], {
      tag: "a"
    }, "Action"), navbar_jsx(external_reactstrap_["DropdownItem"], {
      tag: "a"
    }, "Another Action"), navbar_jsx(external_reactstrap_["DropdownItem"], {
      tag: "a"
    }, "Something else here")))))));
  }

}

/* harmony default export */ var navbar = (navbar_Header);
// CONCATENATED MODULE: ./components/Dashboard/footer/index.js
var footer_jsx = external_react_default.a.createElement;



class footer_Footer extends external_react_default.a.Component {
  render() {
    return footer_jsx("footer", {
      className: "footer" + (this.props.default ? " footer-default" : ""),
      style: {
        background: "white"
      }
    }, footer_jsx(external_reactstrap_["Container"], {
      fluid: this.props.fluid ? true : false
    }, footer_jsx(external_reactstrap_["Row"], null, footer_jsx("nav", {
      className: "footer-nav"
    }, footer_jsx("ul", null, footer_jsx("li", null, footer_jsx("a", {
      href: "#",
      target: "_blank"
    }, "Community management System")), footer_jsx("li", null, footer_jsx("a", {
      href: "#",
      target: "_blank"
    }, "Blog")), footer_jsx("li", null, footer_jsx("a", {
      href: "#",
      target: "_blank"
    }, "Licenses")))), footer_jsx("div", {
      className: "credits ml-auto"
    }, footer_jsx("div", {
      className: "copyright"
    }, "\xA9 ", 1900 + new Date().getYear(), ", made with", " ", footer_jsx("i", {
      className: "fa fa-heart heart"
    }), " by talktiva")))));
  }

}

/* harmony default export */ var footer = (footer_Footer);
// CONCATENATED MODULE: ./components/Dashboard/index.js
var Dashboard_jsx = external_react_default.a.createElement;







const DashBoard = props => {
  var _router$query, _router$query$role;

  const router = Object(router_["useRouter"])();
  console.log("== redux-state ==>", props);
  return Dashboard_jsx("div", {
    className: "wrapper"
  }, Dashboard_jsx(SideBar, null), Dashboard_jsx("div", {
    className: "main-panel",
    style: {
      background: "#F6F7FB"
    }
  }, Dashboard_jsx(navbar, {
    heading: router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : (_router$query$role = _router$query.role) === null || _router$query$role === void 0 ? void 0 : _router$query$role.replace(/_/, " ")
  }), Dashboard_jsx("div", {
    style: {
      marginTop: "80px",
      minHeight: "185vh"
    }
  }, routes().map((val, key) => {
    var _router$query2;

    if ((router === null || router === void 0 ? void 0 : (_router$query2 = router.query) === null || _router$query2 === void 0 ? void 0 : _router$query2.role) === val.path) {
      return Dashboard_jsx("div", {
        key: key,
        style: {
          padding: "10px"
        }
      }, val.component);
    }
  })), Dashboard_jsx(footer, null)));
};
// EXTERNAL MODULE: ./components/homeAddress/index.js
var homeAddress = __webpack_require__("DDR+");

// EXTERNAL MODULE: ./components/invitationCode/index.js
var invitationCode = __webpack_require__("ZfO+");

// EXTERNAL MODULE: ./components/landingPage/index.js + 2 modules
var landingPage = __webpack_require__("byk8");

// EXTERNAL MODULE: ./components/mainlayout/index.js
var mainlayout = __webpack_require__("8LsS");

// EXTERNAL MODULE: ./components/signin/index.js + 2 modules
var signin = __webpack_require__("8tBW");

// EXTERNAL MODULE: ./components/signup/index.js
var signup = __webpack_require__("iHtQ");

// CONCATENATED MODULE: ./components/index.js








/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "f21D":
/***/ (function(module, exports) {



/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (false) {} // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iHtQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _invitationCode_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qMYR");
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pCgL");
/* harmony import */ var _styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_signin_index_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("/IUH");
/* harmony import */ var _styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_userValidation_index_scss__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SignUp = () => {
  return __jsx(_invitationCode_layout__WEBPACK_IMPORTED_MODULE_1__[/* Layout */ "a"], {
    prog: 100
  }, __jsx("p", {
    style: {
      color: "black",
      marginTop: "20px",
      fontSize: "17px"
    }
  }, "Almost there! Please SignUp to access your <Community> community dashboard."), __jsx("button", {
    className: "apple-login-btn"
  }, "continue with Apple"), __jsx("button", {
    className: "google-login-btn"
  }, "continue with Google"), __jsx("input", {
    className: "invitation-code-input",
    placeholder: "Email",
    type: "email",
    required: true
  }), __jsx("input", {
    className: "invitation-code-input",
    placeholder: "Phone",
    type: "Number",
    required: true
  }), __jsx("input", {
    className: "invitation-code-input",
    placeholder: "Password",
    type: "password",
    required: true
  }), __jsx("div", {
    style: {
      display: "flex",
      flexDirection: "row",
      width: "100%"
    }
  }, __jsx("button", {
    className: "btn",
    style: {
      marginRight: "7px",
      alignSelf: "flex-start"
    }
  }, "< Back"), __jsx("button", {
    className: "btn",
    style: {
      width: "65%"
    }
  }, "Sign Up")));
};

/***/ }),

/***/ "kf+y":
/***/ (function(module, exports) {



/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "p3EU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_landingPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("byk8");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(state => state)(_components_landingPage__WEBPACK_IMPORTED_MODULE_0__[/* LandingPage */ "a"]));

/***/ }),

/***/ "pCgL":
/***/ (function(module, exports) {



/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "qMYR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Layout; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// CONCATENATED MODULE: ./components/invitationCode/progressBar.js
var __jsx = external_react_default.a.createElement;


const Progress = ({
  val
}) => {
  return __jsx("div", {
    style: {
      width: '100%'
    }
  }, __jsx(external_react_bootstrap_["ProgressBar"], {
    variant: "success",
    color: "red",
    now: val
  }));
};
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./styles/userValidation/index.scss
var userValidation = __webpack_require__("/IUH");

// CONCATENATED MODULE: ./components/invitationCode/layout.js
var layout_jsx = external_react_default.a.createElement;




const Layout = ({
  children,
  prog
}) => {
  return layout_jsx("div", {
    className: "main-container"
  }, layout_jsx("div", {
    className: "user-validation-container"
  }, layout_jsx(Progress, {
    val: prog
  }), layout_jsx("div", {
    className: "layout-children-container"
  }, children)));
};

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });