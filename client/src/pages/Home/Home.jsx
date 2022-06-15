import React, { useState } from 'react';
import Header from '../../components/Header.jsx';
import Form from '../../components/Form.jsx';
import Footer from '../../components/Footer.jsx';
import { Box, Button } from '@mui/material';
import './Home.css';

function Home(props) {
	const [username, setUsername] = useState('');

	const handleClick = () => {
		console.log(username);
	};

	return (
		<Box
			sx={{
				mt: 30,
				fontFamily: 'Inter',
				justifyContent: 'center',
				alignItems: 'center',
				textAlign: 'center',
				minHeight: '100vh',
			}}>
			<Header text='Welcome to ' styledText='RankMyTweets' />
			<Form name={setUsername} />
			<Button onClick={handleClick} sx={{ mt: 3 }} variant='contained'>
				Go
			</Button>
			<Footer />
		</Box>
	);
}

export default Home;
