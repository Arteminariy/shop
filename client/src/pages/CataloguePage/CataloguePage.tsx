import React, { FC, useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import './CataloguePage.css';

export interface ICataloguePageProps {}

const CataloguePage: FC<ICataloguePageProps> = () => {
	const [products, setProducts] = useState([])

	useEffect(()=>{
		fetch('http://localhost:5000/api/product')
			.then(res => res.json())
			.then(data => setProducts(data.rows))
			.then(data => console.log('Запрос'))
	})

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
