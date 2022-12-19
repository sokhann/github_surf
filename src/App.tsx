import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage, FavoritesPage } from './pages';
import { Navigation } from './components';

function App() {
	return (
		<>
			<Navigation />
			<main className="p-4">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/favorites" element={<FavoritesPage />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
