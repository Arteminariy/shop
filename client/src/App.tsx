import React from 'react';
import './App.css';
import TestPage from './pages/TestPage/TestPage';
import { Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import CataloguePage from './pages/CataloguePage/CataloguePage';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path='/' element={<Layout/>}>
					<Route index element={<TestPage/>}/>
					<Route path='catalogue' element={<CataloguePage/>}/>
				</Route>
			</Routes>
		</div>
	);
}

export default App;
