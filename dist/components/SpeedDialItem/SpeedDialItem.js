'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SpeedDialItem = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _SpeedDialItem = require('./SpeedDialItem.styles');

var _SpeedDialItem2 = _interopRequireDefault(_SpeedDialItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Types
var SpeedDialItem = exports.SpeedDialItem = function SpeedDialItem(_ref) {
	var state = _ref.state,
	    renderAvatar = _ref.renderAvatar,
	    children = _ref.children,
	    className = _ref.className,
	    preset = _ref.preset,
	    classes = _ref.classes,
	    onClick = _ref.onClick;

	return _react2.default.createElement(
		'li',
		{ className: classes.root + ' ' + (className !== undefined ? className : '') },
		_react2.default.createElement(
			'a',
			{ className: classes.link + ' ' + classes['link--state-' + state], onClick: onClick },
			children({
				state: state,
				className: '' + preset.label
			}),
			renderAvatar && renderAvatar({
				state: state,
				className: classes.avatar + ' ' + preset.avatar
			})
		)
	);
};

// $FlowFixMe

exports.default = (0, _styles.withStyles)(_SpeedDialItem2.default)(SpeedDialItem);