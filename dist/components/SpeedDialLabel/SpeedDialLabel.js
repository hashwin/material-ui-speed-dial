'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SpeedDialLabel = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _SpeedDialLabel = require('./SpeedDialLabel.styles');

var _SpeedDialLabel2 = _interopRequireDefault(_SpeedDialLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Types
var SpeedDialLabel = exports.SpeedDialLabel = function SpeedDialLabel(_ref) {
	var className = _ref.className,
	    classes = _ref.classes,
	    text = _ref.text;

	return _react2.default.createElement(
		'span',
		{ className: className + ' ' + classes.root },
		text
	);
};

// $FlowFixMe

exports.default = (0, _styles.withStyles)(_SpeedDialLabel2.default)(SpeedDialLabel);