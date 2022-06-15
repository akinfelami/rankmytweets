import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx';

function App(props) {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
