import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import IProduct from '../../../types/IProduct';
import { Button, Picture } from '../../UI';
import { CATALOGUE_ROUTE } from '../../utils/consts';
import './ProductLi.css';

export interface IProductLiProps {
	product: IProduct;
}

const ProductLi: FC<IProductLiProps> = ({ product }) => {
	return (
		<div className="product-li-container">
			<Link
				to={`${CATALOGUE_ROUTE}/${String(product.id)}`}
				style={{ textDecoration: 'none', color: '#000' }}
			>
				<Picture
					width={120}
					height={120}
					link={`${process.env.REACT_APP_API_URL}/${product.img}`}
				/>
				<div className="product-text">
					<h3 className="product-li-brand-name">
						{product.brand.name}
					</h3>
					<p className="product-li-name">{product.name}</p>
					<p className="product-li-price">{product.price} ₽</p>
				</div>
			</Link>
		</div>
	);
};

export default ProductLi;
