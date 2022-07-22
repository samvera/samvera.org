(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1456:function(e,t,n){"use strict";n.d(t,{Jm:function(){return r},jz:function(){return a},dy:function(){return o}});var r=[{name:"About Samvera",href:"/about/samvera-community-sourced-software"},{name:"What is Samvera?",href:"/what-is-samvera/samvera-open-source-repository-framework"},{name:"Why Use Samvera?",href:"/why-use-samvera"},{name:"Who Uses Samvera?",href:"/who-uses-samvera"},{name:"Getting Started",href:"/getting-started"},{name:"News and Events",href:"/news"}],a=[{label:"Boston Public Library",href:"#"},{label:"Columbia University",href:"#"},{label:"Cornell University",href:"#"}],o=[{href:"contact-us",label:"Contact Us"},{href:"https://groups.google.com/forum/#!forum/samvera-community/join",label:"Join Samvera\u2019s Community mailing list"},{href:"https://groups.google.com/forum/#!forum/samvera-tech/join",label:"Join Samvera\u2019s technical mailing list"},{href:"https://samvera.atlassian.net/wiki/spaces/samvera/overview?mode=global",label:"Samvera Wiki Home Page"},{href:"https://github.com/samvera",label:"Samvera on Github"},{href:"https://samvera.org/feed/",label:"RSS feed for this site"}]},9057:function(e,t,n){"use strict";n.d(t,{Z:function(){return _}});var r=n(7294),a=r.createElement;function o(){return a("section",{className:"bg-samGrey flex flex-col justify-center items-center text-white p-10"},a("h3",{className:"title mb-6"},"If you want to go far, go together."),a("button",null,"Contact Us"))}var i=r.createElement;function s(){return i("section",{className:"bg-samBlueLight p-10 flex flex-col items-center justify-center"},i("p",{className:"m-0"},"This work is licensed under a Creative Commons Attribution 4.0 International License."))}var u=n(1456),c=n(1664),l=r.createElement;function f(){return l("section",{className:"bg-samBlue p-10 flex flex-col items-center justify-center"},l("h3",{className:"title pb-8"},"Samvera Partners"),l("ul",{className:"grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4"},u.jz.map((function(e){return l("li",{key:e.label,className:"px-4 md:px-8 lg:px-10"},l(c.default,{href:e.href},l("a",null,e.label)))}))))}var m=n(1229),d=n(8347),p=n(9121),h=r.createElement,v=function(e){var t=e.Component,n=(0,d.Z)(e,["Component"]);return h(t,(0,m.Z)({bgColor:"#fff",fgColor:"#333"},n))};function g(){var e=new Date;return h("footer",{className:"p-10 flex flex-col justify-center items-center"},h("div",{className:"font-fontinBold mb-3"},"\xa9 ",e.getFullYear()," Samvera"),h("ul",{className:"flex flex-row"},h("li",null,h(v,{Component:p.QZ,url:"https://twitter.com/SamveraRepo"})),h("li",null,h(v,{Component:p.QZ,url:"https://github.com/samvera"}))))}var y=r.createElement;function b(e){var t=e.children;return y("div",{className:"bg-samBlueLight"},y("div",{className:"container mx-auto"},y("div",{className:"grid md:grid-cols-12"},t)))}var x=n(9227),w=n(8470),N=n(1225),S=n(2077),k=r.createElement;function O(e){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}(e.current?"text-samOrange":" hover:text-samOrange","px-3 py-2 font-fontinBold lowercase text-samGreyDark leading-tight")}function j(){var e=r.useState(u.Jm),t=(0,x.Z)(e,2),n=t[0];t[1];return k(w.p,{as:"nav",className:"border-b-2 border-samDarkRed"},(function(e){var t=e.open;return k(r.Fragment,null,k("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},k("div",{className:"relative flex items-center justify-between h-24"},k("div",{className:"absolute inset-y-0 left-0 flex items-center sm:hidden"},k(w.p.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"},k("span",{className:"sr-only"},"Open main menu"),k(t?N.Z:S.Z,{className:"block h-6 w-6","aria-hidden":"true"}))),k("div",{className:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},k("div",{className:"flex-shrink-0 flex items-center"},k(c.default,{href:"/"},k("a",null,k("img",{className:"h-16 w-auto",src:"/images/samvera-logo-tm.svg",alt:"Samvera Logo"})))),k("div",{className:"hidden sm:block sm:ml-6"},k("div",{className:"flex space-x-4"},n.map((function(e){return k("a",{key:e.name,href:e.href,className:O(e),"aria-current":e.current?"page":void 0},e.name)}))))))),k(w.p.Panel,{className:"sm:hidden"},k("div",{className:"px-2 pt-2 pb-3 space-y-1"},n.map((function(e){return k(w.p.Button,{key:e.name,as:"a",href:e.href,className:"".concat(O(e)," block"),"aria-current":e.current?"page":void 0},e.name)})))))}))}var C=r.createElement;function _(e){var t=e.children;return C("div",{className:"text-samGrey font-cooperBook bg-white"},C(j,null),C(b,null,t),C(o,null),C(f,null),C(s,null),C(g,null))}},3367:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var a=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=a},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var r,a=(r=n(7294))&&r.__esModule?r:{default:r},o=n(3367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},7947:function(e,t,n){"use strict";var r=n(1682);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=m,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(7294)),s=(o=n(617))&&o.__esModule?o:{default:o},u=n(3367),c=n(4287),l=n(7845);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function m(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function h(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(m(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var s=a.key.slice(a.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(a.type){case"title":case"base":t.has(a.type)?o=!1:t.add(a.type);break;case"meta":for(var u=0,c=p.length;u<c;u++){var l=p[u];if(a.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var f=a.props[l],m=r[l]||new Set;"name"===l&&i||!m.has(f)?(m.add(f),r[l]=m):o=!1}}}return o}}()).reverse().map((function(e,n){var o=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return s["data-href"]=s.href,s.href=void 0,s["data-optimized-fonts"]=!0,i.default.cloneElement(e,s)}return i.default.cloneElement(e,{key:o})}))}function v(e){var t=e.children,n=(0,i.useContext)(u.AmpStateContext),r=(0,i.useContext)(c.HeadManagerContext);return i.default.createElement(s.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}v.rewind=function(){};var g=v;t.default=g},617:function(e,t,n){"use strict";var r=n(3115),a=n(2553),o=n(2012),i=(n(450),n(9807)),s=n(7690),u=n(9828);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var a=u(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var l=n(7294),f=function(e){i(n,e);var t=c(n);function n(e){var o;return a(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},8894:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var r=n(7294),a=n(9008),o=n(9057),i=r.createElement;function s(){return i(r.Fragment,null,i(a.default,null,i("title",null,"Samvera - a vibrant and welcoming community developing repository software tools"),i("meta",{name:"description",content:"Samvera is cool"}),i("link",{rel:"icon",href:"/favicon.ico"})),i(o.Z,null,i("div",{className:"h-96"})))}},3685:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8894)}])},9008:function(e,t,n){e.exports=n(7947)},8164:function(e,t,n){var r=n(4360);e.exports=function(e){if(Array.isArray(e))return r(e)}},1682:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7381:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},5725:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},3115:function(e,t,n){var r=n(8164),a=n(7381),o=n(3585),i=n(5725);e.exports=function(e){return r(e)||a(e)||o(e)||i()}}},function(e){e.O(0,[774,1,888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);