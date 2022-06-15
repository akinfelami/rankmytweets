import React from 'react';
import { Box, FormControl, TextField, Typography } from '@mui/material';

function Form(props) {
	const handleUsername = (e) => {
		e.preventDefault();
		const result = e.target.value;
		props.name(result);
	};

	return (
		<Box
			component='form'
			sx={{
				mt: 3,
			}}>
			<FormControl sx={{ mt: 3 }}>
				<Typography>Enter your Twitter handle without '@'</Typography>
				<TextField
					sx={{ mt: 1 }}
					fullWidth
					id='standard-search'
					label='username'
					type='search'
					size='small'
					variant='outlined'
					onChange={handleUsername}
				/>
			</FormControl>
		</Box>
	);
}

export default Form;
