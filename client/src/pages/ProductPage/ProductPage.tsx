import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import img1 from '../../pictures/1.jpg';

export interface IProductPageProps {}

const ProductPage: FC<IProductPageProps> = () => {
	const { id } = useParams();
	const fetchProduct = {
		id: 1,
		name: 'Каловые массы',
		price: 1000,
		img: img1,
		typeName: 'type',
		brandName: 'brand',
	}
	return (
		<div className="product-page">
			<div className="product-content">
				<div className="product-image"><img src={fetchProduct.img} alt={fetchProduct.name} /></div>
				<div className="product-name">{fetchProduct.name}</div>
				<div className="product-brand">{fetchProduct.brandName}</div>
				<div className="product-type">{fetchProduct.typeName}</div>
				<div className="product-article">{fetchProduct.id}</div>
				<strong className="product-price">{fetchProduct.price}</strong>
			</div>
			.product-description
		</div>
	);
};

export default ProductPage;
