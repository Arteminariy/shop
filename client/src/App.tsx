import React from 'react';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import Button, { ButtonStyleVariant } from './UI/Button/Button';

function App() {
	return (
		<div className="App">
			<MainPage/>
			<Button variant={ButtonStyleVariant.filled}>Some text</Button>
		</div>
	);
}

export default App;
