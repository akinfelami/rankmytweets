import React from 'react';
import {
	Box,
	FormControl,
	TextField,
	Typography,
	Button,
	FormLabel,
} from '@mui/material';

const Forms = (props) => {
	const handleUsername = (e) => {
		e.preventDefault();
		const result = e.target.value;
		props.name(result);
	};

	return (
		<form onSubmit={props.submit}>
			<FormControl>
				<FormLabel>Enter twitter handle without '@':</FormLabel>
				<TextField
					sx={{ mt: 1, display: 'block' }}
					id='standard-search'
					type='search'
					size='small'
					value={props.user}
					variant='outlined'
					onChange={handleUsername}
				/>
				<Button
					type='submit'
					sx={{
						display: 'block',
						mt: 3,
						marginLeft: 'auto',
						marginRight: 'auto',
						textTransform: 'none',
						maxWidth: '150px',
					}}
					variant='contained'>
					Submit
				</Button>
			</FormControl>
		</form>
	);
};

export default Forms;
