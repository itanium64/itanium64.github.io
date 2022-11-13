import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './Components/Layout';
import { Index } from './Components/Pages/Index';
import { ItaniumWiki } from './Components/Pages/Wiki/ItaniumWiki';

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route index element={<Index />} />
					<Route path='/wiki' element={<ItaniumWiki />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
