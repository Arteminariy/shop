import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import img1 from '../../pictures/1.jpg';
import Button from '../../UI/Button/Button';

export interface IProductPageProps {}

const ProductPage: FC<IProductPageProps> = () => {
	const { id } = useParams();
	const [product, setProduct] = useState({
		id: id,
		name: 'name',
		price: 1000,
		img: img1,
		typeName: '',
		brandName: '',
		description: '',
	});

	useEffect(() => {
		fetch(`http://localhost:5000/api/product/${id}`)
			.then((res) => res.json())
			.then((data) => setProduct(data))
			.then((data) => console.log('Запрос'));
	}, [id]);
	return (
		<div className="product-page">
			{product && (
				<>
					<div className="product-content">
						<div className="product-image">
							<img src={product.img} alt={product.name} />
						</div>
						<div className="product-content-text">
							<h2 className="product-name">{product.name}</h2>
							<p className="product-brand">{product.brandName}</p>
							<p className="product-type">{product.typeName}</p>
							<p className="product-article">
								Артикул: {product.id}
							</p>
							<p className="product-price">{product.price}₽</p>
							<div className="btn-container">
								<Button variant="filled">В корзину</Button>
							</div>
						</div>
					</div>
					<div className="product-description">
						<h3 className="product-description">Описание</h3>
						<p className="product-description-text">
							{product.description}
						</p>
					</div>
				</>
			)}
		</div>
	);
};

export default ProductPage;
