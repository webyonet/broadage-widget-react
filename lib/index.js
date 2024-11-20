"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactAddonsShallowCompare = _interopRequireDefault(require("react-addons-shallow-compare"));
var _deepEqual = _interopRequireDefault(require("deep-equal"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
(function (b, s, p, o, r, t) {
  b['broadage'] = b['broadage'] || [];
  if (!b['broadage'].length) {
    r = document.createElement(s);
    t = document.getElementsByTagName(s)[0];
    r.async = true;
    r.src = p;
    t.parentNode.insertBefore(r, t);
  }
  b['broadage'].push({
    'bundleId': o.bundleId,
    'widgets': o.widgets,
    'accountId': o.accountId
  });
})(window, 'script', '//cdn-saas.broadage.com/widgets/loader/loader.js', {});
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
var BroadageWidget = exports["default"] = /*#__PURE__*/function (_Component) {
  function BroadageWidget(props /*: Object*/) /*: void*/{
    var _this;
    _this = _Component.call(this, props) || this;
    _this.widgetLoadInterval = 0;
    _this.state = {
      element: "broadage-widget-" + Math.random().toString(32).substr(2),
      options: _this.props.options,
      className: _this.props.className,
      bundleId: _this.props.bundleId,
      accountId: _this.props.accountId,
      widget: _this.props.widget,
      queryStringParse: _this.props.queryStringParse,
      requiredFields: _this.props.requiredFields
    };
    if (canUseDOM) {
      _this.widgetLoad();
    }
    return _this;
  }
  _inheritsLoose(BroadageWidget, _Component);
  var _proto = BroadageWidget.prototype;
  _proto.widgetLoad = function widgetLoad() /*: void*/{
    var _this2 = this;
    this.widgetLoadInterval = setInterval(function () {
      if (window.hasOwnProperty('broadageWidget')) {
        clearInterval(_this2.widgetLoadInterval);
        _this2.insertWidget();
      }
    }, 100);
  };
  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps /*: Object*/) /*: void*/{
    var _this3 = this;
    var _this$state = this.state,
      bundleId = _this$state.bundleId,
      accountId = _this$state.accountId,
      widget = _this$state.widget,
      options = _this$state.options,
      requiredFields = _this$state.requiredFields,
      className = _this$state.className,
      queryStringParse = _this$state.queryStringParse;
    var isUpdate = bundleId !== nextProps.bundleId || accountId !== nextProps.accountId || widget !== nextProps.widget || !(0, _deepEqual["default"])(options, nextProps.options) || !(0, _deepEqual["default"])(requiredFields, nextProps.requiredFields) || !(0, _deepEqual["default"])(queryStringParse, nextProps.queryStringParse);
    if (isUpdate) {
      this.removeWidget();
      this.setState({
        bundleId: nextProps.bundleId,
        accountId: nextProps.accountId,
        widget: nextProps.widget,
        options: _extends({}, nextProps.options),
        requiredFields: _extends({}, nextProps.requiredFields),
        queryStringParse: _extends({}, nextProps.queryStringParse)
      }, function () {
        setTimeout(function (self) {
          self.insertWidget();
        }, 0, _this3);
      });
    }
    if (className !== nextProps.className) {
      this.setState({
        className: className
      });
    }
  };
  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps /*: Object*/, nextState /*: Object*/) /*: Boolean*/{
    return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
  };
  _proto.componentWillUnmount = function componentWillUnmount() /*: void*/{
    clearInterval(this.widgetLoadInterval);
    this.removeWidget();
  };
  _proto.removeWidget = function removeWidget() /*: void*/{
    var element = this.state.element;
    if (window.hasOwnProperty('broadageWidget')) {
      window.broadageWidget.remove(element);
    }
  };
  _proto.insertWidget = function insertWidget() /*: void*/{
    var _this$state2 = this.state,
      element = _this$state2.element,
      bundleId = _this$state2.bundleId,
      accountId = _this$state2.accountId,
      widget = _this$state2.widget,
      options = _this$state2.options,
      requiredFields = _this$state2.requiredFields,
      queryStringParse = _this$state2.queryStringParse;
    var onActionCallback = this.props.onActionCallback;
    if (window.hasOwnProperty('broadageWidget')) {
      var _widgets;
      window.broadageWidget.insert({
        bundleId: [bundleId],
        accountId: accountId,
        widgets: (_widgets = {}, _widgets[widget] = [_extends({
          element: element,
          options: _extends({}, options)
        }, requiredFields, {
          queryStringParse: queryStringParse,
          onActionCallback: onActionCallback
        })], _widgets)
      });
    }
  };
  _proto.render = function render() {
    var _this$state3 = this.state,
      element = _this$state3.element,
      className = _this$state3.className;
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: className,
      id: element
    });
  };
  return BroadageWidget;
}(_react.Component);
BroadageWidget.propTypes = {
  bundleId: _propTypes["default"].string.isRequired,
  accountId: _propTypes["default"].string.isRequired,
  widget: _propTypes["default"].string.isRequired,
  requiredFields: _propTypes["default"].object.isRequired,
  options: _propTypes["default"].object,
  className: _propTypes["default"].string,
  queryStringParse: _propTypes["default"].object,
  onActionCallback: _propTypes["default"].func
};
BroadageWidget.defaultProps = {
  options: {},
  queryStringParse: {},
  onActionCallback: Function(),
  className: null
};