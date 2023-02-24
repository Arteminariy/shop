import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import {publicRoutes, authRoutes} from './routes'

function App() {

	const isAuth = true

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					{isAuth && authRoutes.map(({path, element}) => 
						<Route key={path} path={path} element={element}/>
					)}
					{publicRoutes.map(({path, element}) => 
						<Route key={path} path={path} element={element}/>
					)}
					
					<Route path="*" element={<NotFoundPage/>}/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
