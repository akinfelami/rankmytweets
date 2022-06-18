import React from 'react';
import './Header.css';
import {
	Typography,
	Box,
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from '@mui/material';

let theme = createTheme();
theme = responsiveFontSizes(theme);

function Header(props) {
	return (
		<Box>
			<ThemeProvider theme={theme}>
				<Typography variant='h3'>
					{props.text}
					<Typography
						variant='h3'
						sx={{
							display: 'inline',
							fontWeight: 500,
							color: '#3B60E4',
						}}>
						<a href='https://github.com/akinfelami/rankmytweets'>
							{props.styledText}
						</a>
						<Typography sx={{ mt: 2 }}>{props.content}</Typography>
					</Typography>
				</Typography>
			</ThemeProvider>
		</Box>
	);
}

export default Header;
