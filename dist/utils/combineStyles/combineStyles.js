'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var combineStyles = function combineStyles() {
	for (var _len = arguments.length, stylesCreators = Array(_len), _key = 0; _key < _len; _key++) {
		stylesCreators[_key] = arguments[_key];
	}

	return function () {
		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		var out = {};
		stylesCreators.forEach(function (stylesCreatorOrObject) {
			if ((0, _typeof3.default)(stylesCreatorOrObject) === 'object') {
				out = (0, _extends3.default)({}, out, stylesCreatorOrObject);
				return;
			}

			if (typeof stylesCreatorOrObject === 'function') {
				out = (0, _extends3.default)({}, out, stylesCreatorOrObject.apply(undefined, args));
				return;
			}
		});
		return out;
	};
};

exports.default = combineStyles;