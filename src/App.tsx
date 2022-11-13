import { Navbar } from './Components/Navbar';
import { Index } from './Components/Pages/Index';

function App() {
	return (
		<div className="app">
			<Navbar />

			<div className='content-flex'>
				<Index />
			</div>
		</div>
	);
}

export default App;
