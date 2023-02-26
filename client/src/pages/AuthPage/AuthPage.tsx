import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { login, registration } from '../../http/userAPI';
import { RootState } from '../../store';
import { setIsAuth, setUser } from '../../store/UserSlice';
import { Button } from '../../UI';
import { CATALOGUE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import './AuthPage.css';

export interface IAuthPageProps {}

const AuthPage: FC<IAuthPageProps> = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const isLogin = location.pathname === LOGIN_ROUTE;

	const user = useSelector((state: RootState) => state.user.user);
	const dispatch = useDispatch();

	const [userLogin, setUserLogin] = useState('');
	const [password, setPassword] = useState('');

	const click = async () => {
		try {
			let data;
			if (isLogin) {
				data = await login(userLogin, password);
				dispatch(setUser(data));
				dispatch(setIsAuth(true));
				navigate(CATALOGUE_ROUTE)
				
			} else {
				data = await registration(userLogin, password);
				dispatch(setUser(data));
				dispatch(setIsAuth(true));
				navigate(CATALOGUE_ROUTE)
				
			}
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className="auth-page">
			<div className="auth-form-container">
				<h2 className="auth-form-heading">Авторизация</h2>
				{isLogin ? (
					<div className="registration-form">
						<input
							placeholder="Login"
							className="input"
							type="text"
							value={userLogin}
							onChange={(e) => setUserLogin(e.target.value)}
						/>
						<input
							placeholder="Password"
							className="input"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div className="btn-container">
							<NavLink
								className="auth-link"
								to={REGISTRATION_ROUTE}
							>
								Регистрация
							</NavLink>
							<Button onClick={click} variant="filled">
								Войти
							</Button>
						</div>
					</div>
				) : (
					<div className="registration-form">
						<input
							placeholder="Login"
							className="input"
							type="text"
							value={userLogin}
							onChange={(e) => setUserLogin(e.target.value)}
						/>
						<input
							placeholder="Password"
							className="input"
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<div className="btn-container">
							<NavLink className="auth-link" to={LOGIN_ROUTE}>
								Вход
							</NavLink>
							<Button onClick={click} variant="filled">
								Зарегистрироваться
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AuthPage;
