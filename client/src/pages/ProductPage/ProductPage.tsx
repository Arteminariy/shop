import React, { FC } from 'react';
import './ProductPage.css';

export interface IProductPageProps { }

const ProductPage: FC<IProductPageProps> = ({ }) => {
	return (
		<div className='product-page'>
			ProductPage Component
		</div>
	)
};

export default ProductPage;
