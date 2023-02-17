import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Picture from '../../UI/Picture/Picture';
import './Product.css';
import addToBasket from '../../http/addToBasket';

export interface IProductProps {
	product: IProduct;
}

export interface IProduct {
	id: number;
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
		<div className="product-card-container">
			{/* <div className="product-card-img">
					<img src={`${process.env.REACT_APP_API_URL}/${product.img}`} alt={product.name} />
				</div> */}
			<Link
				to={String(product.id)}
				style={{ textDecoration: 'none', color: '#000' }}
			>
				<Picture
					width={280}
					height={280}
					link={`${process.env.REACT_APP_API_URL}/${product.img}`}
				/>
				<h3 className="product-card-brand-name">
					{product.brand.name}
				</h3>
				<p className="product-card-name">{product.name}</p>
				<p className="product-card-price">{product.price}₽</p>
			</Link>
			<button
				className="button filled-btn"
				onClick={(e: any) => addToBasket(1, 2)}
			>
				В корзину
			</button>
		</div>
	);
};

export default Product;
