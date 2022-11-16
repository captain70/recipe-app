import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import Home from './components/Navbar';

function App() {
	return (
		<>
			<BrowserRouter>
				<Home />
				<Pages />
			</BrowserRouter>
		</>
	);
}

export default App;
