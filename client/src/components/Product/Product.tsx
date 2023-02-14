import React, { FC } from 'react';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';
import './Product.css';

export interface IProductProps {
	product: IProduct
}

export interface IProduct {
	name: string,
	price: number,
	img: string,
	typeName: string,
	brandName: string
}

const Product: FC<IProductProps> = ({ product }) => {
	return (
		<div className='product-container'>
			<div className='product-img'>
				<img src={product.img} alt={product.name} />
			</div>
			<h3 className='product-brand-name'>{product.brandName}</h3>
			<p className='product-name'>{product.name}</p>
			<p className='product-price'>{product.price}</p>
			<Button variant='filled'>В корзину</Button>
		</div>
	)
};

export default Product;
