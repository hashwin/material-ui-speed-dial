'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SpeedDial = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('@material-ui/core/styles');

var _SpeedDial = require('./SpeedDial.styles');

var _SpeedDial2 = _interopRequireDefault(_SpeedDial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATE = {
	CLOSED: 'closed',
	OPENING: 'opening',
	OPENED: 'opened',
	CLOSING: 'closing'
};
/* eslint complexity: 0*/

var SpeedDial = exports.SpeedDial = function (_Component) {
	(0, _inherits3.default)(SpeedDial, _Component);

	function SpeedDial(props) {
		(0, _classCallCheck3.default)(this, SpeedDial);

		var _this = (0, _possibleConstructorReturn3.default)(this, (SpeedDial.__proto__ || (0, _getPrototypeOf2.default)(SpeedDial)).call(this, props));

		_this.handleOpen = function () {
			if (!_this.isControlled) {
				_this.open();
			}
		};

		_this.handleClose = function () {
			if (!_this.isControlled) {
				_this.close();
			}
		};

		_this.state = {
			state: _this.isControlled && props.isOpen ? STATE.OPENED : STATE.CLOSED
		};
		return _this;
	}

	(0, _createClass3.default)(SpeedDial, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.forceSetState = this.setState;
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (!this.isControlled) {
				return;
			}
			if (!this.props.isOpen && nextProps.isOpen) {
				this.open();
				return;
			}
			if (this.props.isOpen && !nextProps.isOpen) {
				this.close();
				return;
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			/* istanbul ignore next */
			this.forceSetState = function () {};
		}
	}, {
		key: 'close',
		value: function close() {
			var _this2 = this;

			this.forceSetState({ state: STATE.CLOSING }, function () {
				setTimeout(function () {
					_this2.forceSetState({ state: STATE.CLOSED });
				}, _this2.props.animationDelay);
			});
		}
	}, {
		key: 'open',
		value: function open() {
			var _this3 = this;

			this.forceSetState({ state: STATE.OPENING }, function () {
				setTimeout(function () {
					_this3.forceSetState({ state: STATE.OPENED });
				}, _this3.props.animationDelay);
			});
		}
	}, {
		key: 'renderButton',
		value: function renderButton() {
			var _props = this.props,
			    classes = _props.classes,
			    preset = _props.preset,
			    renderButton = _props.renderButton,
			    renderOpenedButton = _props.renderOpenedButton;
			var state = this.state.state;


			if (!renderOpenedButton) {
				return renderButton({
					className: classes.button + ' ' + preset.button,
					onClick: state === STATE.OPENED ? this.handleClose : this.handleOpen,
					state: state
				}, {
					className: classes.buttonIcon + ' ' + classes.buttonIconSingle + ' ' + classes['buttonIconSingle--state-' + state],
					state: state
				});
			}

			return [renderButton({
				key: 'closed',
				className: classes.button + ' ' + classes.buttonClosed + ' ' + classes['buttonClosed--state-' + state] + ' ' + preset.button,
				onClick: this.handleOpen,
				state: state
			}, {
				className: classes.buttonIcon + ' ' + classes.buttonClosedIcon + ' ' + classes['buttonClosedIcon--state-' + state],
				state: state
			}), renderOpenedButton({
				key: 'open',
				className: classes.button + ' ' + classes.buttonOpened + ' ' + classes['buttonOpened--state-' + state] + ' ' + preset.button,
				onClick: this.handleClose,
				state: state
			}, {
				className: classes.buttonIcon + ' ' + classes.buttonOpenedIcon + ' ' + classes['buttonOpenedIcon--state-' + state],
				state: state
			})];
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    classes = _props2.classes,
			    preset = _props2.preset,
			    className = _props2.className,
			    renderList = _props2.renderList,
			    renderBackdrop = _props2.renderBackdrop,
			    renderOuterRimButton = _props2.renderOuterRimButton,
			    children = _props2.children;
			var state = this.state.state;

			return _react2.default.createElement(
				_react.Fragment,
				null,
				renderBackdrop && renderBackdrop({
					className: '' + preset.backdrop,
					state: state,
					onClick: this.handleClose
				}),
				_react2.default.createElement(
					'div',
					{ className: preset.root + ' ' + (className || '') },
					renderOuterRimButton && renderOuterRimButton({
						className: classes.button + ' ' + classes.buttonOuterRim + ' ' + classes['buttonOuterRim--state-' + state] + ' ' + preset.buttonOuterRim,
						state: state
					}, {
						className: '',
						state: state
					}),
					renderList({
						className: classes.list + ' ' + classes['list--state-' + state] + ' ' + preset.list,
						children: children({
							state: state,
							preset: preset,
							className: '' + preset.item,
							handleClose: this.handleClose
						}),
						state: state
					}),
					this.renderButton()
				)
			);
		}
	}, {
		key: 'isControlled',
		get: function get() {
			return typeof this.props.isOpen === 'boolean';
		}
	}]);
	return SpeedDial;
}(_react.Component);

SpeedDial.displayName = 'SpeedDial';
SpeedDial.defaultProps = {
	animationDelay: 500,
	preset: {
		root: '',
		button: '',
		list: '',
		item: '',
		firstItem: '',
		avatar: '',
		label: ''
	}
};
exports.default = (0, _styles.withStyles)(_SpeedDial2.default)(SpeedDial);