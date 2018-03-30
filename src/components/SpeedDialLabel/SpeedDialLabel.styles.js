// @flow
import type { StylesType, ThemeType } from '../../../material-ui-speed-dial.js.flow';

let stylesRaw;

export const styles = (theme: ThemeType): StylesType => {
	stylesRaw = {
		root: {
			...theme.typography.body1,
			backgroundColor: theme.palette.background.paper,
			borderRadius: 5,
			boxShadow: theme.shadows[4],
			whiteSpace: 'nowrap',
		},
	};
	return stylesRaw;
};

export default styles;
