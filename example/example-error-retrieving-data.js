webpackJsonp([1],{0:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var a=r(32),o=n(a);(0,o["default"])()},32:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(33),o=r(176),l=n(o),u=r(2),i=n(u),s=r(104);t["default"]=function(e){var t=arguments.length<=1||void 0===arguments[1]?200:arguments[1],r=function(r){var n=r.page,a=r.pageSize,o=r.q,u=r.sort,i=(n-1)*a,s=i+a;return new l["default"](function(r,n,a){var l=!1;a(function(){l=!0,console.log("getData: canceled")}),setTimeout(function(){if(!l){console.log("getData: resolving");try{var t=void 0;t=void 0===o?[].concat(e):[].concat(e).filter(function(e){var t=!1;return e.forEach(function(e){0===(""+e.content).toLowerCase().indexOf(o)&&(t=!0)}),t}),void 0!==u&&!function(){var e="asc"===u.order?1:-1;if("id"===u.sort)t.sort(function(t,r){return(t[0].content-r[0].content)*e});else{if("firstColumn"!==u.sort)throw new Error('Unexpected sort "'+u.sort+'"');t.sort(function(t,r){return(""+t[1].content).localeCompare(""+r[1].content)*e})}}();var a=t.slice(i,s);r({result:a,info:{total:a.length,totalFiltered:t.length}})}catch(d){n(d)}}},t)})},n=function(e,t,r){var n=JSON.stringify({cellIndex:t,rowIndex:r,data:e});document.getElementById("row-clicked").innerHTML="Row clicked: "+n};(0,a.makeTableWrapper)(function(e,t){var o={onCellClicked:n,getData:r,renderCell:function(e){return e.content},browserHistory:e},l=function(e){return i["default"].createElement(a.Table,{opts:Object.assign({},o,{location:e.location})},i["default"].createElement(a.TableHead,null,i["default"].createElement(a.TableHeadRow,null,i["default"].createElement(a.TableHeadTh,{sortable:!0,name:"id"},"Id"),i["default"].createElement(a.TableHeadTh,{sortable:{defaultOrder:"asc"},name:"firstColumn"},"First column"),i["default"].createElement(a.TableHeadTh,null,"Second column"))))};t(i["default"].createElement(s.Router,{history:e},i["default"].createElement(s.Route,{path:"/",component:l},i["default"].createElement(s.Route,{path:"*",component:l}))),document.getElementById("main-container")),document.getElementById("row-clicked").innerHTML="Row clicked:"})}},33:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.makeTableWrapper=t.TableHeadTh=t.TableHeadRow=t.TableHead=t.Table=void 0;var a=r(34),o=n(a),l=r(101),u=n(l),i=r(102),s=n(i),d=r(99),c=n(d),f=r(103),p=n(f);t.Table=o["default"],t.TableHead=u["default"],t.TableHeadRow=s["default"],t.TableHeadTh=c["default"],t.makeTableWrapper=p["default"]},34:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(2),s=n(i),d=r(35),c=r(63),f=n(c),p=r(83),g=n(p),_=r(80),v=n(_),m=r(90),T=n(m),y=function(e){function t(e){function r(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,g["default"])(u.getState,e.opts.browserHistory);case 2:case"end":return t.stop()}},n[0],this)}var n=[r].map(regeneratorRuntime.mark);a(this,t);var l=o(this,Object.getPrototypeOf(t).call(this,e));l._TableWrapper=(0,T["default"])(e),l._location=e.opts.location;var u=(0,f["default"])(e.opts);return u.getState().get("saga").run(r),l._store=u,l}return l(t,e),u(t,[{key:"componentWillMount",value:function(){this._store.dispatch({type:v["default"].INIT_LOCATION,location:this._location})}},{key:"render",value:function(){var e=this._TableWrapper;return s["default"].createElement(d.Provider,{store:this._store},s["default"].createElement(e,null))}}]),t}(i.Component);t["default"]=y},63:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(42),o=r(64),l=n(o),u=r(65),i=n(u),s=r(67),d=n(s),c=r(79),f=n(c),p=r(81),g=n(p),_=r(82),v=n(_);t["default"]=function(e){var t=(0,d["default"])(),r=(0,i["default"])(t,e),n=function(){var e=arguments.length<=0||void 0===arguments[0]?r:arguments[0],t=arguments[1];return(0,v["default"])(e,t).merge({table:(0,g["default"])(e.get("table"),t),paginator:(0,f["default"])(e.get("paginator"),t)})},o=(0,a.createStore)(n,(0,a.applyMiddleware)(l["default"],t));return o}},65:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(66),o=n(a);t["default"]=function(e,t){var r=o["default"].fromJS({saga:e,location:void 0,loading:!1,initialized:!1,errorLoadingData:!1,errorLoadingDataMessage:"Error loading data.",loadingMessage:"Loading data...",table:{data:[],total:0,totalFiltered:0,onCellClicked:t.onCellClicked,getData:t.getData,renderCell:t.renderCell,sortContext:void 0},paginator:{buttons:[],showButtons:!1,goToPageDisabled:!0,firstDisabled:!0,lastDisabled:!0,previousDisabled:!0,nextDisabled:!0,totalPages:0,totalResult:0,page:0,pageSize:0,q:"",qFieldValue:"",goToPageValue:"",debounce:{timeout:void 0}}});return r}},79:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(80),o=n(a);t["default"]=function(e,t){switch(t.type){case o["default"].UPDATE_GO_TO_PAGE_DISABLED:return e.merge({goToPageDisabled:t.goToPageDisabled});case o["default"].UPDATE_TOTAL_RESULT_AND_PAGES_AND_LINKS:return e.merge({buttons:t.buttons,showButtons:t.showButtons,firstDisabled:t.firstDisabled,lastDisabled:t.lastDisabled,previousDisabled:t.previousDisabled,nextDisabled:t.nextDisabled,totalResult:t.totalResult,totalPages:t.totalPages});case o["default"].START_DEBOUNCE_Q:return e.mergeIn(["debounce"],{timeout:t.timeout});case o["default"].INIT_Q_FIELD_VALUE:case o["default"].UPDATE_Q_FIELD_VALUE:return e.merge({qFieldValue:t.qFieldValue});case o["default"].UPDATE_Q:return e.merge({q:t.q});case o["default"].UPDATE_GO_TO_PAGE_VALUE:return e.merge({goToPageValue:t.goToPageValue});case o["default"].UPDATE_PAGE_SIZE:return e.merge({pageSize:t.pageSize});case o["default"].UPDATE_PAGE:return e.merge({page:t.page});default:return e}}},80:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="INITIALIZE",n="SET_SORT",a="SET_ORDER",o="LOADING",l="UPDATE_DATA",u="ERROR_LOADING_DATA",i="TOGGLE_SORT",s="INIT_LOCATION",d="UPDATE_LOCATION",c="UPDATE_Q",f="INIT_Q_FIELD_VALUE",p="UPDATE_Q_FIELD_VALUE",g="UPDATE_GO_TO_PAGE_VALUE",_="UPDATE_PAGE_SIZE",v="UPDATE_PAGE",m="START_DEBOUNCE_Q",T="NAVIGATE_TO_PAGE",y="UPDATE_TOTAL_RESULT_AND_PAGES_AND_LINKS",E="UPDATE_GO_TO_PAGE_DISABLED",b="UPDATE_SORT_CONTEXT",P="RESET_SORT_CONTEXT";t["default"]={INITIALIZE:r,SET_SORT:n,SET_ORDER:a,LOADING:o,UPDATE_DATA:l,ERROR_LOADING_DATA:u,TOGGLE_SORT:i,INIT_LOCATION:s,UPDATE_LOCATION:d,UPDATE_Q:c,INIT_Q_FIELD_VALUE:f,UPDATE_Q_FIELD_VALUE:p,UPDATE_GO_TO_PAGE_VALUE:g,UPDATE_PAGE_SIZE:_,UPDATE_PAGE:v,START_DEBOUNCE_Q:m,NAVIGATE_TO_PAGE:T,UPDATE_TOTAL_RESULT_AND_PAGES_AND_LINKS:y,UPDATE_GO_TO_PAGE_DISABLED:E,UPDATE_SORT_CONTEXT:b,RESET_SORT_CONTEXT:P}},81:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(80),o=n(a);t["default"]=function(e,t){switch(t.type){case o["default"].UPDATE_SORT_CONTEXT:return e.merge({sortContext:t.sortContext});case o["default"].UPDATE_DATA:return e.merge({data:t.data,total:t.total,totalFiltered:t.totalFiltered});default:return e}}},82:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(80),o=n(a);t["default"]=function(e,t){switch(t.type){case o["default"].INIT_LOCATION:case o["default"].UPDATE_LOCATION:return e.merge({location:t.location});case o["default"].INITIALIZE:return e.merge({initialized:!0});case o["default"].LOADING:return e.merge({loading:t.loading});case o["default"].ERROR_LOADING_DATA:return e.merge({errorLoadingData:!0});default:return e}}},83:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t,r,n,a,o,l,u=this;return regeneratorRuntime.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,(0,c.put)(b());case 2:return t=e(),r=t.get("paginator").toJS(),n=r.page,a=r.pageSize,o=r.q,l=t.get("table").get("sortContext"),i.prev=8,i.delegateYield(regeneratorRuntime.mark(function s(){var e,r,i,f;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return e=t.get("table").get("getData"),r={page:n,pageSize:a,q:o,sort:void 0===l?l:l.toJS()},i=e(r),i[d.CANCEL]=function(){i.cancel()},u.next=6,(0,c.call)(function(){return i});case 6:return f=u.sent,u.next=9,[(0,c.put)(A()),(0,c.put)(O(f))];case 9:case"end":return u.stop()}},s,u)})(),"t0",10);case 10:i.next=17;break;case 12:return i.prev=12,i.t1=i["catch"](8),i.next=16,(0,c.put)(h());case 16:throw i.t1;case 17:return i.prev=17,i.next=20,(0,c.put)(P());case 20:return i.finish(17);case 21:case"end":return i.stop()}},E[0],this,[[8,12,17,21]])}function o(e){var t,r,n,a,o;return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.location,r=t.query,n=void 0,a=void 0,o=void 0,n=void 0===r.page?1:parseInt(r.page,10),a=void 0===r.pageSize?10:parseInt(r.pageSize,10),o=void 0===r.q||""===r.q?"":r.q,l.next=8,[(0,c.put)({type:s["default"].UPDATE_Q,q:o}),(0,c.put)({type:s["default"].UPDATE_PAGE,page:n}),(0,c.put)({type:s["default"].UPDATE_PAGE_SIZE,pageSize:a}),(0,c.put)({type:s["default"].INIT_Q_FIELD_VALUE,qFieldValue:o}),(0,c.put)({type:s["default"].UPDATE_SORT_CONTEXT,sortContext:r.sort})];case 8:case"end":return l.stop()}},E[1],this)}function l(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.delegateYield((0,d.takeEvery)(s["default"].INIT_LOCATION,o),"t0",1);case 1:case"end":return e.stop()}},E[2],this)}function u(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.delegateYield((0,d.takeLatest)(s["default"].NAVIGATE_TO_PAGE,a.bind(void 0,e)),"t0",1);case 1:case"end":return t.stop()}},E[3],this)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(80),s=n(i),d=r(67),c=r(84),f=r(85),p=n(f),g=r(86),_=n(g),v=r(87),m=n(v),T=r(88),y=n(T),E=[a,o,l,u].map(regeneratorRuntime.mark),b=function(){return{type:s["default"].LOADING,loading:!0}},P=function(){return{type:s["default"].LOADING,loading:!1}},A=function(){return{type:s["default"].INITIALIZE}},h=function(){return{type:s["default"].ERROR_LOADING_DATA}},O=function(e){return{type:s["default"].UPDATE_DATA,data:e.result,total:e.info.total,totalFiltered:e.info.totalFiltered}},D=function(e,t){var r=(0,_["default"])(e,(0,p["default"])(t));return[l(e),u(e),(0,m["default"])(e,r),(0,y["default"])(e,r)]};t["default"]=D},84:function(e,t,r){e.exports=r(77)},85:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){e.push(t)},n=function(e,t,r,n,a,o){var l={};""===a?l.q=void 0:l.q=a,r>1?l.page=r:l.page=void 0,n>10?l.pageSize=n:l.pageSize=void 0,void 0===o?l.sort=void 0:l.sort=o;var u=Object.assign({},l,t.query,l);return e.createPath({pathname:t.pathname,query:u})},a=function(e){return{goToPage:r.bind(void 0,e),makeLink:n.bind(void 0,e)}};t["default"]=a},86:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t,r){var n=t(),a=n.get("location").toJS(),o=n.get("paginator").toJS(),l=o.page,u=o.pageSize,i=o.q,s=n.get("table").get("sortContext"),d=void 0;d=void 0===s?void 0:s.toJS();var c=void 0;return c=void 0===r?l:r,e(a,c,u,i,d)}function o(e,t,r){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t(a(e,r)),n.next=3,(0,i.put)({type:u["default"].NAVIGATE_TO_PAGE});case 3:case"end":return n.stop()}},s[0],this)}Object.defineProperty(t,"__esModule",{value:!0});var l=r(80),u=n(l),i=r(84),s=[o].map(regeneratorRuntime.mark),d=function(e,t){return{navigateToPage:o.bind(void 0,t.makeLink,t.goToPage,e),makeLinkFromState:a.bind(void 0,t.makeLink,e)}};t["default"]=d},87:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){var r,n,a,o;return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return r=e(),n="desc",a=r.get("table").get("sortContext"),o=void 0,o=void 0!==a&&t.name===a.get("sort")?"asc"===a.get("order")?"desc":"asc":n,l.next=7,(0,d.put)({type:s["default"].UPDATE_SORT_CONTEXT,sortContext:{order:o,sort:t.name}});case 7:case"end":return l.stop()}},c[0],this)}function o(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.delegateYield((0,u.takeEvery)(s["default"].UPDATE_SORT_CONTEXT,e.navigateToPage),"t0",1);case 1:case"end":return t.stop()}},c[1],this)}function l(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.delegateYield((0,u.takeEvery)(s["default"].TOGGLE_SORT,a.bind(void 0,e)),"t0",1);case 1:case"end":return t.stop()}},c[2],this)}Object.defineProperty(t,"__esModule",{value:!0});var u=r(67),i=r(80),s=n(i),d=r(84),c=[a,o,l].map(regeneratorRuntime.mark),f=function(e,t){return[o(t),l(e)]};t["default"]=f},88:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){var t,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e().get("paginator").get("goToPageValue"),r=!((0,v.isPositiveInteger)(t)&&t>=1),n.next=4,(0,m.put)({type:_["default"].UPDATE_GO_TO_PAGE_DISABLED,goToPageDisabled:r});case 4:case"end":return n.stop()}},E[0],this)}function o(e,t){return e===t?"current":null}function l(e,t){var r,n,a,l,u,i,s,d,c,f,p,g,v,T,b,P,A,h;return regeneratorRuntime.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return P=function(e,r){var n=l-1,a=l+1,u=i;b=r>1,T.push({key:"first",page:1,content:y["default"].createElement("span",null,"«"),link:s?"":t(1),disabled:s,className:s?"disabled":void 0}),T.push({key:"previous",page:n,content:y["default"].createElement("span",null,"‹"),link:c?"":t(n),disabled:c,className:c?"disabled":void 0});for(var p=e-1;p<r;p+=1){var g=p+1;T.push({page:g,key:g,content:g,link:t(g),disabled:!1,className:o(l,g)})}T.push({key:"next",page:a,content:y["default"].createElement("span",null,"›"),link:f?"":t(a),disabled:f,className:f?"disabled":void 0}),T.push({key:"last",page:u,content:y["default"].createElement("span",null,"»"),link:d?"":t(u),disabled:d,className:d?"disabled":void 0})},r=e(),n=r.get("paginator"),a=r.get("table").get("totalFiltered"),l=n.get("page"),u=n.get("pageSize"),i=Math.ceil(a/u),s=l<=1,d=l>=i,c=s,f=d,p=10,g=r.get("location").toJS(),v=n.get("q"),T=[],b=void 0,i<=p?P(1,i):(A=p/2+1,l<=A?P(1,p):l>=i-(A-2)?P(i-(p-1),i):(h=l+(A-2),P(l-(A-1),h<i?h:i))),E.next=19,(0,m.put)({type:_["default"].UPDATE_TOTAL_RESULT_AND_PAGES_AND_LINKS,buttons:T,showButtons:b,firstDisabled:s,lastDisabled:d,nextDisabled:f,previousDisabled:c,totalPages:i,totalResult:a});case 19:case"end":return E.stop()}},E[1],this)}function u(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.delegateYield((0,p.takeEvery)(_["default"].UPDATE_Q,e.navigateToPage),"t0",1);case 1:case"end":return t.stop()}},E[2],this)}function i(e,t){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,[(0,p.takeEvery)(_["default"].UPDATE_PAGE,t.navigateToPage),(0,p.takeEvery)(_["default"].UPDATE_PAGE,l.bind(void 0,e,t.makeLinkFromState))];case 2:case"end":return r.stop()}},E[3],this)}function s(e,t){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,[(0,p.takeEvery)(_["default"].UPDATE_PAGE_SIZE,t.navigateToPage),(0,p.takeEvery)(_["default"].UPDATE_PAGE_SIZE,l.bind(void 0,e,t.makeLinkFromState))];case 2:case"end":return r.stop()}},E[4],this)}function d(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.delegateYield((0,p.takeEvery)(_["default"].UPDATE_GO_TO_PAGE_VALUE,a.bind(void 0,e)),"t0",1);case 1:case"end":return t.stop()}},E[5],this)}function c(e,t){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.delegateYield((0,p.takeEvery)(_["default"].UPDATE_SORT_CONTEXT,l.bind(void 0,e,t.makeLinkFromState)),"t0",1);case 1:case"end":return r.stop()}},E[6],this)}function f(e,t){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.delegateYield((0,p.takeEvery)(_["default"].UPDATE_DATA,l.bind(void 0,e,t.makeLinkFromState)),"t0",1);case 1:case"end":return r.stop()}},E[7],this)}Object.defineProperty(t,"__esModule",{value:!0});var p=r(67),g=r(80),_=n(g),v=r(89),m=r(84),T=r(2),y=n(T),E=[a,l,u,i,s,d,c,f].map(regeneratorRuntime.mark),b=function(e,t){return[u(t),i(e,t),s(e,t),d(e),c(e,t),f(e,t)]};t["default"]=b},89:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e===parseInt(e,10)},n=function(e){return r(e)&&e>0};t.isInteger=r,t.isPositiveInteger=n},90:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),o=n(a),l=r(91),u=n(l),i=r(97),s=n(i),d=r(35),c=r(98),f=n(c),p=function(e){var t=o["default"].Children.only(e.children),r=o["default"].Children.only(t.props.children);return o["default"].cloneElement(t,{children:o["default"].cloneElement(r,{children:o["default"].Children.map(r.props.children,function(e){return o["default"].createElement(f["default"],e.props)})})})};t["default"]=function(e){return(0,d.connect)(function(t){return{loading:t.get("loading"),initialized:t.get("initialized"),errorLoadingData:t.get("errorLoadingData"),errorLoadingDataMessage:t.get("errorLoadingDataMessage"),loadingMessage:t.get("loadingMessage"),table:t.get("table").toJS(),children:p(e)}},s["default"])(u["default"])}},91:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),o=n(a),l=r(92),u=n(l),i=r(94),s=n(i),d=function(e){return e.errorLoadingData?o["default"].createElement("div",null,e.errorLoadingDataMessage):!e.initialized&&e.loading?o["default"].createElement("div",null,e.loadingMessage):o["default"].createElement("div",{className:"table-wrapper"},o["default"].createElement("div",{className:"row"},o["default"].createElement("div",{className:"col-md-12"},o["default"].createElement(s["default"],{paginator:e.paginator,pageSizeSelector:!0,goTo:!0,filtering:!0}))),o["default"].createElement("div",{className:"row"},o["default"].createElement("div",{className:"col-md-12"},function(){return e.loading?o["default"].createElement("div",null,e.loadingMessage):o["default"].createElement(u["default"],{data:e.table.data,renderCell:e.table.renderCell,onCellClicked:e.table.onCellClicked,emptyTableMessage:e.table.emptyTableMessage,tableClassName:e.table.tableClassName,isCellClickable:e.table.isCellClickable},e.children)}())),function(){if(!e.loading)return o["default"].createElement("div",{className:"row"},o["default"].createElement("div",{className:"col-md-12"},o["default"].createElement(s["default"],{paginator:e.paginator})))}())};d.propTypes={table:a.PropTypes.object.isRequired,initialized:a.PropTypes.bool.isRequired,loading:a.PropTypes.bool.isRequired,errorLoadingData:a.PropTypes.bool.isRequired,errorLoadingDataMessage:a.PropTypes.string.isRequired,loadingMessage:a.PropTypes.string.isRequired},t["default"]=d},92:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),o=n(a),l=r(93),u=n(l),i=function(e){if(0===e.data.length)return o["default"].createElement("div",null,e.emptyTableMessage);var t=[];return e.data.forEach(function(r,n){t.push(o["default"].createElement(u["default"],{key:n,data:r,rowIndex:n,onCellClicked:e.onCellClicked,renderCell:e.renderCell,isCellClickable:e.isCellClickable}))}),o["default"].createElement("table",{className:e.tableClassName},e.children,o["default"].createElement("tbody",null,t))};i.propTypes={data:a.PropTypes.array.isRequired,emptyTableMessage:a.PropTypes.string.isRequired,tableClassName:a.PropTypes.string.isRequired,renderCell:a.PropTypes.func,onCellClicked:a.PropTypes.func},i.defaultProps={emptyTableMessage:"No data to display with given parameters.",tableClassName:"table table-bordered"},t["default"]=i},93:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),o=n(a),l=r(89),u=function(e){var t=function(t,r,n){return e.isCellClickable(t,r,n)?"clickable":""},r=e.data;return o["default"].createElement("tr",null,function(){var n=[];return r.forEach(function(a,l){n.push(o["default"].createElement("td",{key:l,className:t(r,l,e.rowIndex),onClick:e.onCellClicked.bind(void 0,r,l,e.rowIndex)},e.renderCell(a,l,e.rowIndex)))}),n}())};u.propTypes={rowIndex:function(e,t){var r=e[t];if(!(0,l.isInteger)(r))throw new Error("Invalid rowIndex, expecting number, got "+r)},renderCell:a.PropTypes.func.isRequired,onCellClicked:a.PropTypes.func.isRequired,data:a.PropTypes.array.isRequired},u.defaultProps={renderCell:function(e){return e},onCellClicked:function(){},isCellClickable:function(){return!0}},t["default"]=u},94:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(35),o=r(95),l=n(o),u=r(96),i=n(u);t["default"]=(0,a.connect)(function(e){var t=e.get("paginator");return{buttons:t.get("buttons").toJS(),showButtons:t.get("showButtons"),goToPageDisabled:t.get("goToPageDisabled"),totalPages:t.get("totalPages"),page:t.get("page"),pageSize:t.get("pageSize"),qFieldValue:t.get("qFieldValue"),goToPageValue:t.get("goToPageValue")}},i["default"])(l["default"])},95:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),o=n(a),l=function(e){var t=function(t,r,n){n.preventDefault(),r||e.updatePage(t)},r=function(t){e.updatePageSize(parseInt(t.target.value,10))},n=function(t){var r=t.target.value;""===r?e.updateGoToPageValue(""):/^[0-9]+$/.test(r)&&r>=1&&e.updateGoToPageValue(parseInt(r,10))},a=function(t){if(13===t.keyCode){if(t.preventDefault(),e.goToPageDisabled)return;e.updatePage(e.goToPageValue)}},l=function(t){e.updateQFieldValue(t.target.value)},u=function(t){t.preventDefault(),e.goToPageDisabled||e.updatePage(e.goToPageValue)},i=e.filtering,s=e.goTo,d=e.pageSizeSelector,c=function(){if(d||s||i)return o["default"].createElement("div",{className:"row"},function(){if(i)return o["default"].createElement("div",{className:"col-md-5"},o["default"].createElement("label",null,"Filter",o["default"].createElement("input",{type:"text",className:"form-control",value:e.qFieldValue,placeholder:"Filter:",onChange:l})))}(),function(){if(s)return o["default"].createElement("div",{className:"col-md-4"},o["default"].createElement("div",{className:"page-selector form-group"},o["default"].createElement("label",null,"Go to page",o["default"].createElement("div",{className:"input-group"},o["default"].createElement("input",{type:"text",className:"form-control",placeholder:"Page:",value:e.goToPageValue,onChange:n,onKeyDown:a}),o["default"].createElement("div",{className:"input-group-btn"},o["default"].createElement("button",{className:"btn btn-default ",disabled:e.goToPageDisabled,onClick:u},"Go"))))))}(),function(){if(d)return o["default"].createElement("div",{className:"col-md-3"},o["default"].createElement("div",{className:"page-size-selector form-group"},o["default"].createElement("label",null,"Page size ",o["default"].createElement("select",{className:"form-control",value:e.pageSize,onChange:r},o["default"].createElement("option",{value:10},"10"),o["default"].createElement("option",{value:25},"25"),o["default"].createElement("option",{value:50},"50"),o["default"].createElement("option",{value:100},"100")))))}())}();return o["default"].createElement("div",{className:"paginator-wrapper"},o["default"].createElement("div",{className:"row"},o["default"].createElement("div",{className:"col-md-4"},c),function(){if(e.showButtons)return o["default"].createElement("div",{className:"col-md-8"},o["default"].createElement("ul",{className:"pagination pull-right"},function(){var r=[],n=function(e,n,a,l,u,i){r.push(o["default"].createElement("li",{key:n,className:u},o["default"].createElement("a",{disabled:i,href:l,onClick:t.bind(void 0,e,i)},o["default"].createElement("span",null,a))))};return e.buttons.forEach(function(e){n(e.page,e.key,e.content,e.link,e.className,e.disabled)}),r}()))}()))};l.propTypes={buttons:a.PropTypes.array.isRequired,showButtons:a.PropTypes.bool.isRequired,goToPageDisabled:a.PropTypes.bool.isRequired,page:a.PropTypes.number.isRequired,pageSize:a.PropTypes.number.isRequired,qFieldValue:a.PropTypes.string.isRequired,goToPageValue:a.PropTypes.any.isRequired,updateQFieldValue:a.PropTypes.func.isRequired,updateGoToPageValue:a.PropTypes.func.isRequired,updatePageSize:a.PropTypes.func.isRequired,updatePage:a.PropTypes.func.isRequired,pageSizeSelector:a.PropTypes.bool.isRequired,goTo:a.PropTypes.bool.isRequired,filtering:a.PropTypes.bool.isRequired},l.defaultProps={pageSizeSelector:!1,goTo:!1,filtering:!1},t["default"]=l},96:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){return{type:f["default"].START_DEBOUNCE_Q,timeout:e}}function o(e){return{type:f["default"].UPDATE_GO_TO_PAGE_VALUE,goToPageValue:e}}function l(e){return{type:f["default"].UPDATE_PAGE,page:e}}function u(e){return function(t){t({type:f["default"].UPDATE_PAGE_SIZE,pageSize:e}),t(l(1)),t(o(""))}}function i(e){return function(t,r){clearTimeout(r().get("paginator").get("debounce").get("timeout")),t(a(setTimeout(function(){t({type:f["default"].UPDATE_Q,q:e}),t(l(1)),t(o(""))},300)))}}function s(e){return{type:f["default"].UPDATE_Q_FIELD_VALUE,qFieldValue:e}}function d(e){return function(t){t(s(e)),t(i(e))}}Object.defineProperty(t,"__esModule",{value:!0});var c=r(80),f=n(c);t["default"]={updateQFieldValue:d,updateGoToPageValue:o,updatePageSize:u,updatePage:l}},97:function(e,t){"use strict";function r(){console.log("clicked")}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={onCellClicked:r}},98:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(99),o=n(a),l=r(100),u=n(l),i=r(35);t["default"]=(0,i.connect)(function(e){var t=e.get("table").get("sortContext"),r=void 0;return r=void 0===t?void 0:t.toJS(),{sortContext:r}},u["default"])(o["default"])},99:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),o=n(a),l=function(e){var t=function(){return void 0!==e.sortContext&&e.sortContext.sort===e.name},r=function(){var t=e.sortContext,r="glyphicon glyphicon-";return r+=void 0!==t&&t.sort===e.name?"asc"===t.order?"arrow-up":"arrow-down":"sort",o["default"].createElement("i",{className:r})},n=function(){return e.sortable?"sortable":""},a=function(){var t=e.sortable;t&&e.toggleSort(e.name)},l=function(t){t.stopPropagation(),e.resetSortContext()};return o["default"].createElement("th",{className:n(),onClick:a},e.children,function(){if(e.sortable)return o["default"].createElement("div",{className:"pull-right"},function(){if(t())return o["default"].createElement("i",{className:"glyphicon glyphicon-remove",onClick:l})}()," ",r())}())};l.propTypes={sortable:a.PropTypes.any.isRequired,name:a.PropTypes.string,toggleSort:a.PropTypes.func,resetSortContext:a.PropTypes.func,sortContext:a.PropTypes.shape({sort:a.PropTypes.string,order:a.PropTypes.string})},l.defaultProps={sortable:!1},t["default"]=l},100:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(){return{type:u["default"].UPDATE_SORT_CONTEXT,sortContext:void 0}}function o(e){return{type:u["default"].TOGGLE_SORT,name:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=r(80),u=n(l);r(97);t["default"]={toggleSort:o,resetSortContext:a}},101:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),o=n(a);t["default"]=function(e){return o["default"].createElement("thead",null,e.children)}},102:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),o=n(a);t["default"]=function(e){return o["default"].createElement("tr",null,e.children)}},103:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(104),o=r(168),l=r(172),u=n(l),i=r(176),s=n(i),d=r(179);s["default"].config({warnings:!0,longStackTraces:!0,cancellation:!0}),t["default"]=function(e){var t=(0,a.useRouterHistory)(o.createHistory)({parseQueryString:u["default"].parse,stringifyQuery:u["default"].stringify});e(t,d.render)}},168:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var a=r(130),o=n(a),l=r(128),u=n(l),i=r(165),s=n(i);t.createHistory=s["default"];var d=r(114),c=n(d);t.createHashHistory=c["default"];var f=r(161),p=n(f);t.createMemoryHistory=p["default"];var g=r(160),_=n(g);t.useBasename=_["default"];var v=r(169),m=n(v);t.useBeforeUnload=m["default"];var T=r(131),y=n(T);t.useQueries=y["default"];var E=r(117),b=n(E);t.Actions=b["default"];var P=r(170),A=n(P);t.enableBeforeUnload=A["default"];var h=r(171),O=n(h);t.enableQueries=O["default"];var D=o["default"](u["default"],"Using createLocation without a history instance is deprecated; please use history.createLocation instead");t.createLocation=D},169:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function a(e){function t(t){var r=e();if("string"==typeof r)return(t||window.event).returnValue=r,r}return s.addEventListener(window,"beforeunload",t),function(){s.removeEventListener(window,"beforeunload",t)}}function o(e){return function(t){function r(){for(var e=void 0,t=0,r=f.length;null==e&&t<r;++t)e=f[t].call();return e}function n(e){return f.push(e),1===f.length&&i.canUseDOM&&(d=a(r)),function(){f=f.filter(function(t){return t!==e}),0===f.length&&d&&(d(),d=null)}}function o(e){i.canUseDOM&&f.indexOf(e)===-1&&(f.push(e),1===f.length&&(d=a(r)))}function u(e){f.length>0&&(f=f.filter(function(t){return t!==e}),0===f.length&&d())}var s=e(t),d=void 0,f=[];return l({},s,{listenBeforeUnload:n,registerBeforeUnloadHook:c["default"](o,"registerBeforeUnloadHook is deprecated; use listenBeforeUnload instead"),unregisterBeforeUnloadHook:c["default"](u,"unregisterBeforeUnloadHook is deprecated; use the callback returned from listenBeforeUnload instead")})}}t.__esModule=!0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},u=r(115),i=(n(u),r(119)),s=r(120),d=r(130),c=n(d);t["default"]=o,e.exports=t["default"]},170:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var a=r(130),o=n(a),l=r(169),u=n(l);
t["default"]=o["default"](u["default"],"enableBeforeUnload is deprecated, use useBeforeUnload instead"),e.exports=t["default"]},171:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0;var a=r(130),o=n(a),l=r(131),u=n(l);t["default"]=o["default"](u["default"],"enableQueries is deprecated, use useQueries instead"),e.exports=t["default"]},172:function(e,t,r){"use strict";var n=r(173),a=r(175);e.exports={stringify:n,parse:a}},173:function(e,t,r){"use strict";var n=r(174),a={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},o={delimiter:"&",strictNullHandling:!1,skipNulls:!1,encode:!0,encoder:n.encode},l=function u(e,t,r,a,o,l,i,s,d){var c=e;if("function"==typeof i)c=i(t,c);else if(c instanceof Date)c=c.toISOString();else if(null===c){if(a)return l?l(t):t;c=""}if("string"==typeof c||"number"==typeof c||"boolean"==typeof c||n.isBuffer(c))return l?[l(t)+"="+l(c)]:[t+"="+String(c)];var f=[];if("undefined"==typeof c)return f;var p;if(Array.isArray(i))p=i;else{var g=Object.keys(c);p=s?g.sort(s):g}for(var _=0;_<p.length;++_){var v=p[_];o&&null===c[v]||(f=Array.isArray(c)?f.concat(u(c[v],r(t,v),r,a,o,l,i,s,d)):f.concat(u(c[v],t+(d?"."+v:"["+v+"]"),r,a,o,l,i,s,d)))}return f};e.exports=function(e,t){var r,n,u=e,i=t||{},s="undefined"==typeof i.delimiter?o.delimiter:i.delimiter,d="boolean"==typeof i.strictNullHandling?i.strictNullHandling:o.strictNullHandling,c="boolean"==typeof i.skipNulls?i.skipNulls:o.skipNulls,f="boolean"==typeof i.encode?i.encode:o.encode,p=f?"function"==typeof i.encoder?i.encoder:o.encoder:null,g="function"==typeof i.sort?i.sort:null,_="undefined"!=typeof i.allowDots&&i.allowDots;if(null!==i.encoder&&void 0!==i.encoder&&"function"!=typeof i.encoder)throw new TypeError("Encoder has to be a function.");"function"==typeof i.filter?(n=i.filter,u=n("",u)):Array.isArray(i.filter)&&(r=n=i.filter);var v=[];if("object"!=typeof u||null===u)return"";var m;m=i.arrayFormat in a?i.arrayFormat:"indices"in i?i.indices?"indices":"repeat":"indices";var T=a[m];r||(r=Object.keys(u)),g&&r.sort(g);for(var y=0;y<r.length;++y){var E=r[y];c&&null===u[E]||(v=v.concat(l(u[E],E,T,d,c,p,n,g,_)))}return v.join(s)}},174:function(e,t){"use strict";var r=function(){for(var e=new Array(256),t=0;t<256;++t)e[t]="%"+((t<16?"0":"")+t.toString(16)).toUpperCase();return e}();t.arrayToObject=function(e,t){for(var r=t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!=typeof e[n]&&(r[n]=e[n]);return r},t.merge=function(e,r,n){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];e[r]=!0}return e}if("object"!=typeof e)return[e].concat(r);var a=e;return Array.isArray(e)&&!Array.isArray(r)&&(a=t.arrayToObject(e,n)),Object.keys(r).reduce(function(e,a){var o=r[a];return Object.prototype.hasOwnProperty.call(e,a)?e[a]=t.merge(e[a],o,n):e[a]=o,e},a)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),n="",a=0;a<t.length;++a){var o=t.charCodeAt(a);45===o||46===o||95===o||126===o||o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122?n+=t.charAt(a):o<128?n+=r[o]:o<2048?n+=r[192|o>>6]+r[128|63&o]:o<55296||o>=57344?n+=r[224|o>>12]+r[128|o>>6&63]+r[128|63&o]:(a+=1,o=65536+((1023&o)<<10|1023&t.charCodeAt(a)),n+=r[240|o>>18]+r[128|o>>12&63]+r[128|o>>6&63]+r[128|63&o])}return n},t.compact=function(e,r){if("object"!=typeof e||null===e)return e;var n=r||[],a=n.indexOf(e);if(a!==-1)return n[a];if(n.push(e),Array.isArray(e)){for(var o=[],l=0;l<e.length;++l)e[l]&&"object"==typeof e[l]?o.push(t.compact(e[l],n)):"undefined"!=typeof e[l]&&o.push(e[l]);return o}for(var u=Object.keys(e),i=0;i<u.length;++i){var s=u[i];e[s]=t.compact(e[s],n)}return e},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&"undefined"!=typeof e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},175:function(e,t,r){"use strict";var n=r(174),a=Object.prototype.hasOwnProperty,o={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1e3,strictNullHandling:!1,plainObjects:!1,allowPrototypes:!1,allowDots:!1,decoder:n.decode},l=function(e,t){for(var r={},n=e.split(t.delimiter,t.parameterLimit===1/0?void 0:t.parameterLimit),o=0;o<n.length;++o){var l,u,i=n[o],s=i.indexOf("]=")===-1?i.indexOf("="):i.indexOf("]=")+1;s===-1?(l=t.decoder(i),u=t.strictNullHandling?null:""):(l=t.decoder(i.slice(0,s)),u=t.decoder(i.slice(s+1))),a.call(r,l)?r[l]=[].concat(r[l]).concat(u):r[l]=u}return r},u=function s(e,t,r){if(!e.length)return t;var n,a=e.shift();if("[]"===a)n=[],n=n.concat(s(e,t,r));else{n=r.plainObjects?Object.create(null):{};var o="["===a[0]&&"]"===a[a.length-1]?a.slice(1,a.length-1):a,l=parseInt(o,10);!isNaN(l)&&a!==o&&String(l)===o&&l>=0&&r.parseArrays&&l<=r.arrayLimit?(n=[],n[l]=s(e,t,r)):n[o]=s(e,t,r)}return n},i=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^\.\[]+)/g,"[$1]"):e,o=/^([^\[\]]*)/,l=/(\[[^\[\]]*\])/g,i=o.exec(n),s=[];if(i[1]){if(!r.plainObjects&&a.call(Object.prototype,i[1])&&!r.allowPrototypes)return;s.push(i[1])}for(var d=0;null!==(i=l.exec(n))&&d<r.depth;)d+=1,(r.plainObjects||!a.call(Object.prototype,i[1].replace(/\[|\]/g,""))||r.allowPrototypes)&&s.push(i[1]);return i&&s.push("["+n.slice(i.index)+"]"),u(s,t,r)}};e.exports=function(e,t){var r=t||{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:o.delimiter,r.depth="number"==typeof r.depth?r.depth:o.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:o.arrayLimit,r.parseArrays=r.parseArrays!==!1,r.decoder="function"==typeof r.decoder?r.decoder:o.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:o.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:o.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:o.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:o.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:o.strictNullHandling,""===e||null===e||"undefined"==typeof e)return r.plainObjects?Object.create(null):{};for(var a="string"==typeof e?l(e,r):e,u=r.plainObjects?Object.create(null):{},s=Object.keys(a),d=0;d<s.length;++d){var c=s[d],f=i(c,a[c],r);u=n.merge(u,f,r)}return n.compact(u)}}});