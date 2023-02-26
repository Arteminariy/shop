import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import { addToBasket } from '../../http/addToBasket';
import {Button, Picture} from '../../UI/';
import type IProduct from '../../../types/IProduct';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/CartSlice';

export interface IProductProps {
	product: IProduct;
}

const Product: FC<IProductProps> = ({ product }) => {

	const dispatch = useDispatch()

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
				<p className="product-card-price">{product.price} ₽</p>
			</Link>
			<Button onClick={() => {
				addToBasket(1, product.id)
				dispatch(addToCart(product.id))
			}}>
				В корзину
			</Button>
		</div>
	);
};

export default Product;
