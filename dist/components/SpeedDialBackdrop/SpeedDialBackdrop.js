'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SpeedDialBackdrop = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _SpeedDialBackdrop = require('./SpeedDialBackdrop.styles');

var _SpeedDialBackdrop2 = _interopRequireDefault(_SpeedDialBackdrop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Types
var SpeedDialBackdrop = exports.SpeedDialBackdrop = function SpeedDialBackdrop(_ref) {
	var className = _ref.className,
	    classes = _ref.classes,
	    state = _ref.state,
	    onClick = _ref.onClick;

	return _react2.default.createElement('div', { onClick: onClick, className: classes.root + ' ' + classes['root--state-' + state] + ' ' + className });
};

// $FlowFixMe

exports.default = (0, _styles.withStyles)(_SpeedDialBackdrop2.default)(SpeedDialBackdrop);