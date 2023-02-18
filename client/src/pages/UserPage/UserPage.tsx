import React, { FC } from 'react';
import './UserPage.css';

export interface IUserPageProps { }

// const userId = 1

const UserPage: FC<IUserPageProps> = () => {
	// const [user, setUser] = useState()

	// useEffect(()=>{
	// 	fetch(`${process.env.REACT_APP_API_URL}/api/user/${userId}`)
	// 		.then(res => res.json())
	// 		.then(data => setUser(data))
	// }, [])

	return (
		<div className="user-page">
			<div className="user-info-container">

			</div>
			<div className="user-basket-container">
				<h3 className="user-basket-heading">Корзина:</h3>
				<div className="user-basket">
					
				</div>
			</div>
			<div className="user-orders-container">
				<h3 className="user-orders-heading">Заказы:</h3>
				<div className="user-orders"></div>
			</div>
		</div>
	)
};

export default UserPage;
