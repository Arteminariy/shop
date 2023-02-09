import React, { FC } from 'react';
import './CataloguePage.css';

export interface ICataloguePageProps { }

const CataloguePage: FC<ICataloguePageProps> = ({ }) => {
	return (
		<div className='catalogue-page'>
			CataloguePage Component
		</div>
	)
};

export default CataloguePage;
