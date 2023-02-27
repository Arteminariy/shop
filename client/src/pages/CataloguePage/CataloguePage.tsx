import { Select } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pages from '../../components/Pages/Pages';
import Product from '../../components/Product/Product';
import ProductSkeleton from '../../components/Product/ProductSkeleton';
import { fetchBrands, fetchProducts, fetchTypes } from '../../http/productAPI';
import { RootState } from '../../store';
import {
	setBrands,
	setProducts,
	setTotalCount,
	setTypes,
} from '../../store/ProductSlice';
import './CataloguePage.css';

export interface ICataloguePageProps {}

const CataloguePage: FC<ICataloguePageProps> = () => {
	const [isLoading, setIsLoading] = useState(true);
	const dispatch = useDispatch();

	const { types, brands, products } = useSelector(
		(state: RootState) => state.product
	);

	useEffect(() => {
		fetchTypes().then((data) => dispatch(setTypes(data)));
		fetchBrands().then((data) => dispatch(setBrands(data)));
		fetchProducts().then((data) => {
			dispatch(setProducts(data.rows));
			dispatch(setTotalCount(data.count));
		});
		fetch(`${process.env.REACT_APP_API_URL}/api/product`)
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.rows);
				setIsLoading(false);
			});
	}, []);

	return (
		<div className="catalogue-page">
			<div className="sort-container">
				<Select
					defaultValue=""
					style={{ width: 120 }}
					allowClear
					placeholder="Тип"
					options={types.map((type) => {
						return { value: type.name, label: type.name };
					})}
				/>
				<Select
					defaultValue=""
					style={{ width: 120 }}
					allowClear
					placeholder="Брэнд"
					options={brands.map((brand) => {
						return { value: brand.name, label: brand.name };
					})}
				/>
			</div>
			<div className="products-container">
				{isLoading
					? [...new Array(4)].map((_, i) => (
						<ProductSkeleton key={i} />
					  ))
					: products.map((product, i) => (
						<Product product={product} key={i} />
					  ))}
			</div>
			<Pages />
		</div>
	);
};

export default CataloguePage;
