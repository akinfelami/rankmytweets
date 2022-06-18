import React from 'react';
import { Box } from '@mui/material';

function Footer() {
	return (
		<Box
			component='div'
			sx={{
				mt: 10,
				width: '100%',
				fontFamily: 'Inter',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
			}}>
			Made with ❤️ by{' '}
			<a href='https://github.com/akinfelami'>Akinfolami Akin-Alamu</a>
		</Box>
	);
}

export default Footer;
