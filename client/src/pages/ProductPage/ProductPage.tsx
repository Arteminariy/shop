import React, { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductPage.css';
import img1 from '../../pictures/1.jpg';
import Picture from '../../UI/Picture/Picture';
import { addToBasket } from '../../http/addToBasket';
import Button from '../../UI/Button/Button';
import Product from '../../components/Product/Product';
import ProductPageSkeleton from './ProductPageSkeleton';

export interface IProductPageProps { }

const ProductPage: FC<IProductPageProps> = () => {
	const { id } = useParams();
	const [isLoading, setIsLoading] = useState(true)
	const [product, setProduct] = useState({
		id: id,
		name: 'name',
		price: 1000,
		img: img1,
		typeId: 1,
		brandId: 1,
		type: {
			name: '',
		},
		brand: {
			name: '',
		},
		description: [
			{
				title: '',
				description: '',
			},
		],
	});

	useEffect(() => {
		fetch(`http://localhost:5000/api/product/${id}`)
			.then((res) => res.json())
			.then((data) => {
				setProduct(data)
				setIsLoading(false)
			});
	}, [id]);

	return (
		<div className="product-page">
			{isLoading ? <ProductPageSkeleton/> : (
				<>
					<div className="product-content">
						<div className="product-image">
							<img src={`${process.env.REACT_APP_API_URL}/${product.img}`} alt={product.name} />
						</div>
						{/* <Picture
							width={600}
							height={400}
							link={`${process.env.REACT_APP_API_URL}/${product.img}`}
						/> */}
						<div className="product-content-text">
							<h2 className="product-name">{product.name}</h2>
							<p className="product-brand">
								{product.brand.name}
							</p>
							<p className="product-type">{product.type.name}</p>
							<p className="product-article">
								Артикул: {product.id}
							</p>
							<p className="product-price">{product.price}₽</p>
							<div className="btn-container">
								<Button onClick={() => addToBasket(1, 1)} color="secondary" variant="filled">
									В корзину
								</Button>
							</div>
						</div>
					</div>
					<div className="product-description">
						{product.description.length > 0 && (
							<>
								{product.description.map((desc) => {
									if (desc.title === 'description-text') {
										return (
											<>
												<h3 className="product-global-description-title">
													Описание
												</h3>
												<p className="product-description-text">
													{desc.description}
												</p>
											</>
										);
									}
									return '';
								})}
								<h3 className="product-description-title">
									Подробные характеристики
								</h3>
								{product.description.map((desc) => {
									if (desc.title !== 'description-text') {
										return (
											<div className="product-description-row">
												<p className="product-description-text">
													{desc.title}
												</p>
												<p className="product-description-text">
													{desc.description}
												</p>
											</div>
										);
									}
									return '';
								})}
							</>
						)}
					</div>
					<div className="recommendations-container">
						<h3 className="product-global-description-title">
							Бестселлеры
						</h3>
						{/* <Product product={}/> x3  Сортируешь по популярности (в бэк заносишь данные о каждой покупке и сортируешь по кол-ву покупок). Берешь топ 3*/}
					</div>
				</>
			)}
		</div>
	);
};

export default ProductPage;
