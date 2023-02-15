import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import './Product.css';

export interface IProductProps {
    product: IProduct;
}

export interface IProduct {
	id: number,
    name: string;
    price: number;
    img: string;
    typeName: string;
    brandName: string;
}

const Product: FC<IProductProps> = ({ product }) => {
	return (
		<Link to={String(product.id)} style={{ textDecoration: 'none', color: '#000' }}>
			<div className="product-container">
				<div className="product-img">
					<img src={product.img} alt={product.name} />
				</div>
				<h3 className="product-brand-name">{product.brandName}</h3>
				<p className="product-name">{product.name}</p>
				<strong className="product-price">{product.price}₽</strong>
				<Button variant="filled">В корзину</Button>
			</div>
		</Link>
	);
};

export default Product;
