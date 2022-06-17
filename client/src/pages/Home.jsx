import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Card from '@mui/material/Card';
import Forms from '../components/Forms.jsx';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { alpha } from '@material-ui/core/styles/colorManipulator';
import { Box, Typography, Button } from '@mui/material';

function Home(props) {
	const [data, setData] = useState([{}]);
	const [username, setUsername] = useState('');
	const [result, setResult] = useState(false);

	const fetchData = async (url) => {
		const result = await fetch(url);
		return result.json();
	};

	async function handleClick(e) {
		e.preventDefault();
		try {
			const response = await fetchData(`/${username}`);
			setData(response);
			console.log(response[0]);
			setResult(true);
		} catch (error) {
			console.error(error);
		}
	}

	const handleBack = () => {
		setResult(false);
	};

	return (
		<>
			{!result && (
				<Box
					sx={{
						mt: 10,
						maxWidth: '500px',
					}}>
					<Header
						text='Welcome to '
						styledText='RankMyTweets😇'
						content='RankMyTweets searches 100 of your most recent tweets
							and returns the most liked.'
					/>
					<Card
						sx={{
							p: 4,
							mt: 3,
							backgroundColor: alpha('#FFFFFF', 0.8),
							boxShadow: 3,
							borderRadius: 5,
						}}>
						<Forms
							name={setUsername}
							user={username}
							submit={handleClick}
						/>
					</Card>
					<Typography sx={{ mt: 3, color: 'text.secondary' }}>
						This app will not run if you enter an invalid username
						or a username with '@'. If you're unable to see your
						tweet despite entering a valid username, it is because
						your account is private or the app has reached it's
						limit of requests to the Twitter API at at the moment.
						Kindly check back later. Thank you.
					</Typography>
				</Box>
			)}
			{result && (
				<Box
					sx={{
						mt: 20,
						maxWidth: '345px',
						marginLeft: 'auto',
						marginRight: 'auto',
					}}>
					<Header
						text='See tweet details 👇'
						content='Note that this site does not support rendering images/videos. Kindly click "See tweet" to see your tweet if it is an image/video'></Header>
					<Card sx={{ backgroundColor: '#ADD7F6', mt: 2 }}>
						<CardContent>
							<Typography
								gutterBottom
								variant='body3'
								component='div'>
								Your Tweet had {data[0]['likes']} {''} likes
							</Typography>
							<Typography
								variant='body'
								sx={{
									fontWeight: 'bold',
								}}>
								"{data[0]['tweet']}"
							</Typography>
						</CardContent>
						<CardActions sx={{ justifyContent: 'center' }}>
							<Button
								onClick={() =>
									(window.location.href = `https://twitter.com/${username}/status/${data[0]['id']}`)
								}
								size='small'>
								See Tweet
							</Button>
						</CardActions>
					</Card>
					<Button
						onClick={handleBack}
						sx={{ mt: 3, textTransform: 'none' }}
						variant='contained'>
						Go back
					</Button>
				</Box>
			)}
			<Footer />
		</>
	);
}

export default Home;
