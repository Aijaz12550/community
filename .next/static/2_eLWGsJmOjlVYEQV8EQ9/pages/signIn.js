(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"8LsS":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("q1tI"),o=n.n(r),i=(n("G7Ex"),o.a.createElement),s=function(t){var e=t.children;return i("div",{className:"main-container"},i("div",{className:"main-container-child"},e))}},"8tBW":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("q1tI"),o=n.n(r),i=n("8LsS"),s=n("YFqc"),a=n.n(s),c=(n("pCgL"),o.a.createElement),u=function(t){return c(i.a,null,c("p",null,"Welcome Back!"),c("p",null,"Please Sign In to access your community dashboard."),c("button",{className:"apple-login-btn"},"continue with Apple"),c("button",{className:"google-login-btn"},"continue with Google"),c(a.a,{href:"#"},c("a",null,"OR USE YOUR OWN EMAIL")),c("input",{className:"signin-input",placeholder:"Email",type:"email",required:!0}),c("input",{className:"signin-input",placeholder:"Password",type:"password",required:!0}),c("p",null,"Forgot password?"),c("button",{className:"signinbtn"},"Sign In"))}},G7Ex:function(t,e,n){},YFqc:function(t,e,n){t.exports=n("cTJO")},cTJO:function(t,e,n){"use strict";var r=n("/GRZ"),o=n("i2R6"),i=n("tCBg"),s=n("T0f4"),a=n("48fX");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var u=n("AroE"),l=n("7KCV");e.__esModule=!0,e.default=void 0;var f,p=l(n("q1tI")),h=n("QmWs"),d=n("g/15"),v=u(n("nOHt"));function m(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var g=new Map,y=window.IntersectionObserver,w={};function E(){return f||(y?f=new y((function(t){t.forEach((function(t){if(g.has(t.target)){var e=g.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(f.unobserve(t.target),g.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var b=function(t){a(u,t);var e,n=(e=u,function(){var t,n=s(e);if(c()){var r=s(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return i(this,t)});function u(t){var e;return r(this,u),(e=n.call(this,t)).p=void 0,e.cleanUpListeners=function(){},e.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var s=t(o,i);return e=o,n=i,r=s,s}}((function(t,e){return{href:m(t),as:e?m(e):e}})),e.linkClicked=function(t){var n=t.currentTarget,r=n.nodeName,o=n.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),s=i.href,a=i.as;if(function(t){var e=(0,h.parse)(t,!1,!0),n=(0,h.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(s)){var c=window.location.pathname;s=(0,h.resolve)(c,s),a=a?(0,h.resolve)(c,a):s,t.preventDefault();var u=e.props.scroll;null==u&&(u=a.indexOf("#")<0),v.default[e.props.replace?"replace":"push"](s,a,{shallow:e.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},e.p=!1!==t.prefetch,e}return o(u,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,h.resolve)(t,n);return[o,r?(0,h.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&y&&t&&t.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=E();return n?(n.observe(t),g.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}g.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();v.default.prefetch(e[0],e[1],t).catch((function(t){0})),w[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=p.default.createElement("a",null,e));var i=p.Children.only(e),s={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),p.default.cloneElement(i,s)}}]),u}(p.Component);e.default=b},pCgL:function(t,e,n){},s2mo:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signIn",function(){return n("sV8s")}])},sV8s:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),i=n("8tBW"),s=(n("pCgL"),o.a.createElement);e.default=function(){return s(i.a,null)}}},[["s2mo",0,1,2,3,6]]]);