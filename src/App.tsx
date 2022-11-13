import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { Navbar } from './Components/Navbar';
import { Index } from './Components/Pages/Index';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route index element={<Index />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
