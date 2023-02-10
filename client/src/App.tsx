import React from 'react';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import { Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import CataloguePage from './pages/CataloguePage/CataloguePage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route index element={<MainPage/>}/>
					<Route path='catalogue' element={<CataloguePage/>}/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
