import axios from 'axios';

export const addToBasket = (basketId: number, productId: number) => {
	axios
		.post(`${process.env.REACT_APP_API_URL}/api/basket/${basketId}`, {
			productId,
		})
		.then((response) => {
			// eslint-disable no-console
			// console.log(response.data);
		});
	// console.log('click')
};


