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
    type: {
		id: number;
		name: string;
	};
    brand: {
		id: number;
		name: string;
	};
	description: string;
}

const Product: FC<IProductProps> = ({ product }) => {
	return (
		<Link to={String(product.id)} style={{ textDecoration: 'none', color: '#000' }}>
			<div className="product-card-container">
				<div className="product-card-img">
					<img src={`${process.env.REACT_APP_API_URL}/${product.img}`} alt={product.name} />
				</div>
				<h3 className="product-card-brand-name">{product.brand.name}</h3>
				<p className="product-card-name">{product.name}</p>
				<strong className="product-card-price">{product.price}₽</strong>
				<Button variant="filled">В корзину</Button>
			</div>
		</Link>
	);
};

export default Product;
