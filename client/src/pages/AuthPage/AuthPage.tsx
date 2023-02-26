import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { login, registration } from '../../http/userAPI';
import { Button, Input } from '../../UI';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import './AuthPage.css';

export interface IAuthPageProps {}

const AuthPage: FC<IAuthPageProps> = () => {
	const location = useLocation();
	const isLogin = location.pathname === LOGIN_ROUTE;

	const click = async () => {
		if (isLogin) {
			const res = await login('', '')
		} else {
			const res = await registration('', '')
			console.log(res)
		}
	}

	return (
		<div className="auth-page">
			<div className="auth-form-container">
				<h2 className="auth-form-heading">Авторизация</h2>
				{isLogin ? (
					<div className="registration-form">
						<Input placeholder="Login"></Input>
						<Input placeholder="Password" type="password"></Input>
						<div className="btn-container">
							<NavLink className="auth-link" to={REGISTRATION_ROUTE}>Регистрация</NavLink> 
							<Button variant="filled">Войти</Button>
						</div>
					</div>
				) : (
					<div className="registration-form">
						<Input placeholder="Login"></Input>
						<Input placeholder="Password" type="password"></Input>
						<div className="btn-container">
							<NavLink className="auth-link" to={LOGIN_ROUTE}>Вход</NavLink> 
							<Button variant="filled">Зарегистрироваться</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default AuthPage;
