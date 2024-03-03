import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#FFFFFF',
		},
		secondary: {
			main: '#6B46BF',
			dark: '#4A3185',
			light: '#886BCB',
			contrastText: '#FFFFFF',
		},
		error: {
			main: '#FF4F4F',
		},
	},
	typography: {
		h1: {
			fontFamily: 'DM Mono',
			fontSize: '58px',
			fontWeight: 500,
		},
		h2: {
			fontFamily: 'DM Mono',
			fontSize: '28px',
			fontWeight: 500,
			lineHeight: '40px',
			letterSpacing: '0em',
			textAlign: 'left',
		},
		body1: {
			fontFamily: 'DM Mono',
			fontWeight: 500,
			fontSize: '15px',
			lineHeight: '19.08px',
			textAlign: 'center',
		},
		body2: {
			fontFamily: 'DM Mono',
			fontWeight: 500,
			fontSize: '19px',
			lineHeight: '24.17px',
			textAlign: 'center',
		},
	},
});

export default theme;
