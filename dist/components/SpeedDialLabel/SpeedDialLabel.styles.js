'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.styles = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stylesRaw = void 0;
var styles = exports.styles = function styles(theme) {
	stylesRaw = {
		root: (0, _extends3.default)({}, theme.typography.body1, {
			backgroundColor: theme.palette.background.paper,
			borderRadius: 5,
			boxShadow: theme.shadows[4],
			whiteSpace: 'nowrap'
		})
	};
	return stylesRaw;
};

exports.default = styles;