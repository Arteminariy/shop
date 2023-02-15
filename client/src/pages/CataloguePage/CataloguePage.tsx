import React, { FC } from 'react';
import Product, { IProduct } from '../../components/Product/Product';
import img1 from '../../pictures/1.jpg';
import './CataloguePage.css';

export interface ICataloguePageProps {}

const CataloguePage: FC<ICataloguePageProps> = ({}) => {
	const products: IProduct[] = [
		{
			id: 1,
			name: 'Каловые массы',
			price: 1000,
			img: img1,
			typeName: 'type',
			brandName: 'brand',
		},
		{
			id: 2,
			name: 'Каловые массы',
			price: 1000,
			img: img1,
			typeName: 'type',
			brandName: 'brand',
		},
		{
			id: 3,
			name: 'Каловые массы',
			price: 1000,
			img: img1,
			typeName: 'type',
			brandName: 'brand',
		},
	];
	return (
		<div className="catalogue-page">
			<div className="products-container">
				{products.map((product) => {
					return <Product product={product} />;
				})}
			</div>
		</div>
	);
};

export default CataloguePage;
