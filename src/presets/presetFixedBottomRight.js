// @flow

import type { PresetRawType } from '../../material-ui-speed-dial.js.flow';
import type { ThemeType } from '../types/styles';

const styles = (theme: ThemeType): PresetRawType => {
	return {
		root: {
			position: 'fixed',
			bottom: 0,
			right: 0,
		},
		button: {
			position: 'absolute',
			bottom: theme.spacing.unit * 2,
			right: theme.spacing.unit * 2,
		},
		list: {
			bottom: theme.spacing.unit * 2.5,
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
	};
};

export default styles;
