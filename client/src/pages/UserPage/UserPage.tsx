import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useLocation } from 'react-router-dom';
import IProduct from '../../../types/IProduct';
import ProductLi from '../../components/ProductLi/ProductLi';
import { RootState } from '../../store';
import './UserPage.css';

export interface IUserPageProps {}

// const userId = 1

const UserPage: FC<IUserPageProps> = () => {
	// const location = useLocation();
	// const isLogin = location.pathname
	// const [user, setUser] = useState({})

	// useEffect(()=>{
	// 	fetch(`${process.env.REACT_APP_API_URL}/api/user/${userId}`)
	// 		.then(res => res.json())
	// 		.then(data => setUser(data))
	// }, [])

	// const click = async () => {
	// 	if(isLogin)
	// 	const res = await registration()
	// 	console.log(res)
	// }

	const { prodIds, totalPrice } = useSelector(
		(state: RootState) => state.cart
	);

	const [basket, setBasket] = useState<IProduct[]>([]);

	useEffect(() => {
		prodIds.forEach((id) => {
			fetch(`http://localhost:5000/api/product/${id}`)
				.then((res) => res.json())
				.then((data) => {
					setBasket((prev) => [...prev, data]);
				});
		});
	}, [prodIds]);

	return (
		<div className="user-page">
			<div className="user-info-container"></div>
			<div className="user-basket-container">
				<h3 className="user-basket-heading">Корзина:</h3>
				<div className="user-basket">
					{basket.length > 0 ? (
						basket.map((prod) => {
							return <ProductLi product={prod} />;
						})
					) : (
						<div className="empty-basket">Корзина пустая</div>
					)}
				</div>
				{basket.length > 0 ? <p>Полная сумма: {totalPrice} ₽</p> : <></>}
				
			</div>
			<div className="user-orders-container">
				<h3 className="user-orders-heading">Заказы:</h3>
				<div className="user-orders"></div>
			</div>
		</div>
	);
};

export default UserPage;
