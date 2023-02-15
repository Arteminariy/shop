import React, { FC, useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import './CataloguePage.css';

export interface ICataloguePageProps {}

const CataloguePage: FC<ICataloguePageProps> = () => {
	const [products, setProducts] = useState([])

	useEffect(()=>{
		fetch(`${process.env.REACT_APP_API_URL}/api/product`)
			.then(res => res.json())
			.then(data => setProducts(data.rows))
	}, [])

	return (
		<div className="catalogue-page">
			<div className="products-container">
				{products && products.map((product) => {
					return <Product product={product} key={product} />;
				})}
			</div>
		</div>
	);
};

export default CataloguePage;
