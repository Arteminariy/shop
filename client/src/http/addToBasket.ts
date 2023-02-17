import axios from 'axios';

const addToBasket = (basketId: number, productId: number) => {
	axios
		.post(`${process.env.REACT_APP_API_URL}/basket/${basketId}`, {
			productId,
		})
		.then((response) => {
			//eslint-disable no-console
			console.log(response.data);
		});
};

export default addToBasket;
