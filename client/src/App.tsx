import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import {publicRoutes, authRoutes} from './routes'
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {

	const isAuth = useSelector((state: RootState) => state.user.isAuth)

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
