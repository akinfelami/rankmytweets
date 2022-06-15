import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home.jsx';

function App() {
	// const [result, setResult] = useState('')

	// async function handleClick() {
	// 	try {
	// 		const response = await fetch('/results');
	// 		const data = await response.text()
	// 		console.log(data)
	// 		setResult(data)

	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// }

	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
