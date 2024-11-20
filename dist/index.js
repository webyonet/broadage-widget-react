"use strict";exports.__esModule=!0,exports["default"]=void 0;var _react=_interopRequireWildcard(require("react")),_propTypes=_interopRequireDefault(require("prop-types")),_reactAddonsShallowCompare=_interopRequireDefault(require("react-addons-shallow-compare")),_deepEqual=_interopRequireDefault(require("deep-equal"));function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _getRequireWildcardCache(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,c=new WeakMap;return(_getRequireWildcardCache=function(a){return a?c:b})(a)}function _interopRequireWildcard(b,c){if(!c&&b&&b.__esModule)return b;if(null===b||"object"!=typeof b&&"function"!=typeof b)return{default:b};var d=_getRequireWildcardCache(c);if(d&&d.has(b))return d.get(b);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in b)if("default"!=a&&{}.hasOwnProperty.call(b,a)){var g=f?Object.getOwnPropertyDescriptor(b,a):null;g&&(g.get||g.set)?Object.defineProperty(e,a,g):e[a]=b[a]}return e["default"]=b,d&&d.set(b,e),e}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)({}).hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(null,arguments)}function _inheritsLoose(a,b){a.prototype=Object.create(b.prototype),a.prototype.constructor=a,_setPrototypeOf(a,b)}function _setPrototypeOf(a,b){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,b){return a.__proto__=b,a},_setPrototypeOf(a,b)}(function(a,b,c,d,e,f){a.broadage=a.broadage||[],a.broadage.length||(e=document.createElement(b),f=document.getElementsByTagName(b)[0],e.async=!0,e.src=c,f.parentNode.insertBefore(e,f)),a.broadage.push({bundleId:d.bundleId,widgets:d.widgets,accountId:d.accountId})})(window,"script","//cdn-saas.broadage.com/widgets/loader/loader.js",{});var canUseDOM=!!("undefined"!=typeof window&&window.document&&window.document.createElement),BroadageWidget=exports["default"]=/*#__PURE__*/function(a){function b(b/*: Object*/)/*: void*/{var c;return c=a.call(this,b)||this,c.widgetLoadInterval=0,c.state={element:"broadage-widget-"+Math.random().toString(32).substr(2),options:c.props.options,className:c.props.className,bundleId:c.props.bundleId,accountId:c.props.accountId,widget:c.props.widget,queryStringParse:c.props.queryStringParse,requiredFields:c.props.requiredFields},canUseDOM&&c.widgetLoad(),c}_inheritsLoose(b,a);var c=b.prototype;return c.widgetLoad=function()/*: void*/{var a=this;this.widgetLoadInterval=setInterval(function(){window.hasOwnProperty("broadageWidget")&&(clearInterval(a.widgetLoadInterval),a.insertWidget())},100)},c.UNSAFE_componentWillReceiveProps=function(a/*: Object*/)/*: void*/{var b=this,c=this.state,d=c.bundleId,e=c.accountId,f=c.widget,g=c.options,h=c.requiredFields,i=c.className,j=c.queryStringParse,k=d!==a.bundleId||e!==a.accountId||f!==a.widget||!(0,_deepEqual["default"])(g,a.options)||!(0,_deepEqual["default"])(h,a.requiredFields)||!(0,_deepEqual["default"])(j,a.queryStringParse);k&&(this.removeWidget(),this.setState({bundleId:a.bundleId,accountId:a.accountId,widget:a.widget,options:_extends({},a.options),requiredFields:_extends({},a.requiredFields),queryStringParse:_extends({},a.queryStringParse)},function(){setTimeout(function(a){a.insertWidget()},0,b)})),i!==a.className&&this.setState({className:i})},c.shouldComponentUpdate=function(a/*: Object*/,b/*: Object*/)/*: Boolean*/{return(0,_reactAddonsShallowCompare["default"])(this,a,b)},c.componentWillUnmount=function()/*: void*/{clearInterval(this.widgetLoadInterval),this.removeWidget()},c.removeWidget=function()/*: void*/{var a=this.state.element;window.hasOwnProperty("broadageWidget")&&window.broadageWidget.remove(a)},c.insertWidget=function()/*: void*/{var a=this.state,b=a.element,c=a.bundleId,d=a.accountId,e=a.widget,f=a.options,g=a.requiredFields,h=a.queryStringParse,i=this.props.onActionCallback;if(window.hasOwnProperty("broadageWidget")){var j;window.broadageWidget.insert({bundleId:[c],accountId:d,widgets:(j={},j[e]=[_extends({element:b,options:_extends({},f)},g,{queryStringParse:h,onActionCallback:i})],j)})}},c.render=function(){var a=this.state,b=a.element,c=a.className;return/*#__PURE__*/_react["default"].createElement("div",{className:c,id:b})},b}(_react.Component);BroadageWidget.propTypes={bundleId:_propTypes["default"].string.isRequired,accountId:_propTypes["default"].string.isRequired,widget:_propTypes["default"].string.isRequired,requiredFields:_propTypes["default"].object.isRequired,options:_propTypes["default"].object,className:_propTypes["default"].string,queryStringParse:_propTypes["default"].object,onActionCallback:_propTypes["default"].func},BroadageWidget.defaultProps={options:{},queryStringParse:{},onActionCallback:Function(),className:null};