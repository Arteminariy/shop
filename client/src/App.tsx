import React from 'react';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CataloguePage from './pages/CataloguePage/CataloguePage';
import ProductPage from './pages/ProductPage/ProductPage';
import UserPage from './pages/UserPage/UserPage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path="catalogue" element={<CataloguePage />} />
					<Route path="catalogue/:id" element={<ProductPage />} />
					{/* <Route path='*' element={<NotFoundPage/>}/> */}
					<Route path="user" element={<UserPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
