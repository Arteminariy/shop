import React, { FC, useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import ProductSkeleton from '../../components/Product/ProductSkeleton';
import './CataloguePage.css';

export interface ICataloguePageProps {}

const CataloguePage: FC<ICataloguePageProps> = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/api/product`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.rows);
				setIsLoading(false);
			});
	}, []);

	return (
		<div className="catalogue-page">
			<div className="products-container">
				{isLoading
					? [...new Array(4)].map((_, i) => <ProductSkeleton key={i} />)
					: products.map((product) => <Product product={product} key={product} />)}
			</div>
		</div>
	);
};

export default CataloguePage;
