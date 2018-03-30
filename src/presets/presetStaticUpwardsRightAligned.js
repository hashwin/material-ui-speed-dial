// @flow

import type { PresetRawType, ThemeType } from '../../material-ui-speed-dial.js.flow';

const styles = (theme: ThemeType): PresetRawType => {
	return {
		root: {
			position: 'relative',
			bottom: 0,
			right: 0,
			zIndex: theme.zIndex.appBar + 2,
			height: theme.spacing.unit * 5.5,
		},
		button: {
			position: 'absolute',
			bottom: theme.spacing.unit * 2,
			right: theme.spacing.unit * 2,
		},
		buttonOuterRim: {
			position: 'absolute',
			bottom: theme.spacing.unit * 10.8,
			right: theme.spacing.unit * 3,
		},
		list: {
			bottom: theme.spacing.unit * 2.2,
			right: 0,
		},
		item: {},
		firstItem: {
			paddingTop: theme.spacing.unit,
		},
		avatar: {
			top: theme.spacing.unit * 0.7,
			right: theme.spacing.unit * 3,
		},
		label: {
			paddingTop: theme.spacing.unit * 0.5,
			paddingRight: theme.spacing.unit,
			paddingBottom: theme.spacing.unit * 0.5,
			paddingLeft: theme.spacing.unit,
			marginRight: theme.spacing.unit * 9,
		},
		backdrop: {
			bottom: 0,
			right: 0,
		},
	};
};

export default styles;
