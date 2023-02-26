import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { publicRoutes, authRoutes } from './routes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { check } from './http/userAPI';
import { setIsAuth, setUser } from './store/UserSlice';
import { Spin } from 'antd';

function App() {
	const isAuth = useSelector((state: RootState) => state.user.isAuth);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	useEffect(() => {
		check()
			.then((data) => {
				dispatch(setUser(data));
				dispatch(setIsAuth(true));
			})
			.finally(() => setLoading(false));
	}, []);

	if (loading) {
		return (
			<div className="spinner">
				<Spin tip="Loading" size="large">
					<div className="content" />
				</Spin>
			</div>
		);
	}

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout />}>
					{isAuth &&
						authRoutes.map(({ path, element }) => (
							<Route key={path} path={path} element={element} />
						))}
					{publicRoutes.map(({ path, element }) => (
						<Route key={path} path={path} element={element} />
					))}

					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
