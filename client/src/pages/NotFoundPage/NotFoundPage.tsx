import React, { FC } from 'react';
import './NotFoundPage.css';

export interface INotFoundPageProps { }

const NotFoundPage: FC<INotFoundPageProps> = () => {
	return (
		<div className="not-found-page">
			NotFoundPage Component
		</div>
	)
};

export default NotFoundPage;
