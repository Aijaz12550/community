(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/IUH":function(e,t,n){},"4aT+":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/homeAddress",function(){return n("Lvvk")}])},"DDR+":function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),o=n("qMYR"),i=n("YFqc"),s=n.n(i),c=(n("pCgL"),a.a.createElement),u=function(){return c(o.a,{prog:50},c("p",{style:{color:"black",marginTop:"20px",fontSize:"19px"}},"It seems you're also a resident at <Community> Please enter your home address."),c("p",{style:{color:"gray"}},"Your home address is required to use resident app and stay connected with your neighbors."),c("input",{className:"invitation-code-input",placeholder:"Your Home Address",type:"text"}),c("input",{className:"invitation-code-input",placeholder:"Apt / unit",type:"text"}),c("p",{style:{color:"red"}},"Cannot find your home at this community. Please enter your correct home address or please contact our support.",c("a",{href:"#"},"support@weneibours.io"),"for any help."),c("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"100%"}},c("button",{className:"btn"},"< Back"),c(s.a,{href:"/signup"},c("button",{className:"btn"},"Next >"))))}},Lvvk:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),o=n("DDR+"),i=a.a.createElement;t.default=function(){return i(o.a,null)}},QA0p:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n=void 0===t?{}:t,r=n.propTypes,o=n.defaultProps,i=n.allowFallback,s=void 0!==i&&i,c=n.displayName,u=void 0===c?e.name||e.displayName:c,l=function(t,n){return e(t,n)};return Object.assign(a.default.forwardRef||!s?a.default.forwardRef(l):function(e){return l(e,null)},{displayName:u,propTypes:r,defaultProps:o})};var r,a=(r=n("q1tI"))&&r.__esModule?r:{default:r}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("/GRZ"),a=n("i2R6"),o=n("tCBg"),i=n("T0f4"),s=n("48fX");function c(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var u=n("AroE"),l=n("7KCV");t.__esModule=!0,t.default=void 0;var f,p=l(n("q1tI")),d=n("QmWs"),v=n("g/15"),h=u(n("nOHt"));function m(e){return e&&"object"===typeof e?(0,v.formatWithValidation)(e):e}var y=new Map,b=window.IntersectionObserver,w={};function g(){return f||(b?f=new b((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var x=function(e){s(u,e);var t,n=(t=u,function(){var e,n=i(t);if(c()){var r=i(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return o(this,e)});function u(e){var t;return r(this,u),(t=n.call(this,e)).p=void 0,t.cleanUpListeners=function(){},t.formatUrls=function(e){var t=null,n=null,r=null;return function(a,o){if(r&&a===t&&o===n)return r;var i=e(a,o);return t=a,n=o,r=i,i}}((function(e,t){return{href:m(e),as:t?m(t):t}})),t.linkClicked=function(e){var n=e.currentTarget,r=n.nodeName,a=n.target;if("A"!==r||!(a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var o=t.formatUrls(t.props.href,t.props.as),i=o.href,s=o.as;if(function(e){var t=(0,d.parse)(e,!1,!0),n=(0,d.parse)((0,v.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(i)){var c=window.location.pathname;i=(0,d.resolve)(c,i),s=s?(0,d.resolve)(c,s):i,e.preventDefault();var u=t.props.scroll;null==u&&(u=s.indexOf("#")<0),h.default[t.props.replace?"replace":"push"](i,s,{shallow:t.props.shallow}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},t.p=!1!==e.prefetch,t}return a(u,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,a=(0,d.resolve)(e,n);return[a,r?(0,d.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var t=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=g();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),w[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,a=n.as;"string"===typeof t&&(t=p.default.createElement("a",null,t));var o=p.Children.only(t),i={ref:function(t){e.handleRef(t),o&&"object"===typeof o&&o.ref&&("function"===typeof o.ref?o.ref(t):"object"===typeof o.ref&&(o.ref.current=t))},onMouseEnter:function(t){o.props&&"function"===typeof o.props.onMouseEnter&&o.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){o.props&&"function"===typeof o.props.onClick&&o.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==o.type||"href"in o.props)||(i.href=a||r),p.default.cloneElement(o,i)}}]),u}(p.Component);t.default=x},pCgL:function(e,t,n){},q4sD:function(e,t,n){},qMYR:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n("q1tI"),a=n.n(r),o=n("wx14"),i=n("zLVn"),s=n("TSYQ"),c=n.n(s),u=(n("QA0p"),a.a.createContext({}));u.Consumer,u.Provider;function l(e,t){var n=Object(r.useContext)(u);return e||n[t]||t}var f=1e3;function p(e,t,n){var r=(e-t)/(n-t)*100;return Math.round(r*f)/f}function d(e,t){var n,r=e.min,s=e.now,u=e.max,l=e.label,f=e.srOnly,d=e.striped,v=e.animated,h=e.className,m=e.style,y=e.variant,b=e.bsPrefix,w=Object(i.a)(e,["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"]);return a.a.createElement("div",Object(o.a)({ref:t},w,{role:"progressbar",className:c()(h,b+"-bar",(n={},n["bg-"+y]=y,n[b+"-bar-animated"]=v,n[b+"-bar-striped"]=v||d,n)),style:Object(o.a)({width:p(s,r,u)+"%"},m),"aria-valuenow":s,"aria-valuemin":r,"aria-valuemax":u}),f?a.a.createElement("span",{className:"sr-only"},l):l)}var v=a.a.forwardRef((function(e,t){var n=e.isChild,s=Object(i.a)(e,["isChild"]);if(s.bsPrefix=l(s.bsPrefix,"progress"),n)return d(s,t);var u=s.min,f=s.now,p=s.max,v=s.label,h=s.srOnly,m=s.striped,y=s.animated,b=s.bsPrefix,w=s.variant,g=s.className,x=s.children,O=Object(i.a)(s,["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"]);return a.a.createElement("div",Object(o.a)({ref:t},O,{className:c()(g,b)}),x?function(e,t){var n=0;return a.a.Children.map(e,(function(e){return a.a.isValidElement(e)?t(e,n++):e}))}(x,(function(e){return Object(r.cloneElement)(e,{isChild:!0})})):d({min:u,now:f,max:p,label:v,srOnly:h,striped:m,animated:y,bsPrefix:b,variant:w},t))}));v.displayName="ProgressBar",v.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1};var h=v,m=a.a.createElement,y=function(e){var t=e.val;return m("div",{style:{width:"100%"}},m(h,{variant:"success",color:"red",now:t}))},b=(n("q4sD"),n("/IUH"),a.a.createElement),w=function(e){var t=e.children,n=e.prog;return b("div",{className:"main-container"},b("div",{className:"user-validation-container"},b(y,{val:n}),b("div",{className:"layout-children-container"},t)))}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}},[["4aT+",0,1,2,3,4]]]);