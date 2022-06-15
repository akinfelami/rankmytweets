import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Form from '../components/Form.jsx';
import Footer from '../components/Footer.jsx';
import { Box, Button } from '@mui/material';

function Home(props) {
	const [username, setUsername] = useState('');
	const [data, setData] = useState([{}]);

	const fetchData = async (url) => {
		const result = await fetch(url);
		return result.json();
	};

	async function handleClick() {
		try {
			const response = await fetchData(`/${username}`);
			console.log(response[0]['text']);
			console.log(response[0]['likes']);
			setData(response);
		} catch (error) {
			console.error(error);
		}
	}

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
			<Button
				onClick={handleClick}
				sx={{ mt: 3, textTransform: 'none' }}
				variant='contained'>
				Rank
			</Button>
			<p>Your most liked recent tweet is: </p>{' '}
			<span>{data[0]['text']}</span>
			<p>
				It got <span>{data[0]['likes']}</span> likes{' '}
			</p>
			<Footer />
			{/* {data.map((tweet, i) => {
				<p key={i}>{tweet}</p>;
			})} */}
		</Box>
	);
}

export default Home;
