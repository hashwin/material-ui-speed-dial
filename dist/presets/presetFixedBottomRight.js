'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});


var styles = function styles(theme) {
	return {
		root: {
			position: 'fixed',
			bottom: 0,
			right: 0,
			zIndex: theme.zIndex.appBar + 2
		},
		button: {
			position: 'absolute',
			bottom: theme.spacing.unit * 2,
			right: theme.spacing.unit * 2
		},
		buttonOuterRim: {
			position: 'absolute',
			bottom: theme.spacing.unit * 10.8,
			right: theme.spacing.unit * 3
		},
		list: {
			bottom: theme.spacing.unit * 2.5,
			right: 0
		},
		item: {},
		firstItem: {
			paddingTop: theme.spacing.unit
		},
		avatar: {
			top: theme.spacing.unit * 0.7,
			right: theme.spacing.unit * 3
		},
		label: {
			paddingTop: theme.spacing.unit * 0.5,
			paddingRight: theme.spacing.unit,
			paddingBottom: theme.spacing.unit * 0.5,
			paddingLeft: theme.spacing.unit,
			marginRight: theme.spacing.unit * 9
		},
		backdrop: {
			bottom: 0,
			right: 0
		}
	};
};

exports.default = styles;