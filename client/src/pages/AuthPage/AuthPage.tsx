import React, { FC } from 'react';
import './AuthPage.css';

export interface IAuthPageProps { }

const AuthPage: FC<IAuthPageProps> = () => {
	return (
		<div className="auth-page">
			AuthPage Component
		</div>
	)
};

export default AuthPage;
