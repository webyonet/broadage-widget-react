"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactAddonsShallowCompare = _interopRequireDefault(require("react-addons-shallow-compare"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

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

var BroadageWidget =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(BroadageWidget, _Component);

  function BroadageWidget(props
  /*: Object*/
  )
  /*: void*/
  {
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

    _this.widgetLoad();

    return _this;
  }

  var _proto = BroadageWidget.prototype;

  _proto.widgetLoad = function widgetLoad()
  /*: void*/
  {
    var _this2 = this;

    this.widgetLoadInterval = setInterval(function () {
      if (window.hasOwnProperty('broadageWidget')) {
        clearInterval(_this2.widgetLoadInterval);

        _this2.insertWidget();
      }
    }, 100);
  };

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps
  /*: Object*/
  )
  /*: void*/
  {
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

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps
  /*: Object*/
  , nextState
  /*: Object*/
  )
  /*: Boolean*/
  {
    return (0, _reactAddonsShallowCompare["default"])(this, nextProps, nextState);
  };

  _proto.componentWillUnmount = function componentWillUnmount()
  /*: void*/
  {
    clearInterval(this.widgetLoadInterval);
    this.removeWidget();
  };

  _proto.removeWidget = function removeWidget()
  /*: void*/
  {
    var element = this.state.element;

    if (window.hasOwnProperty('broadageWidget')) {
      window.broadageWidget.remove(element);
    }
  };

  _proto.insertWidget = function insertWidget()
  /*: void*/
  {
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
    return _react["default"].createElement("div", {
      className: className,
      id: element
    });
  };

  return BroadageWidget;
}(_react.Component);

exports["default"] = BroadageWidget;
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