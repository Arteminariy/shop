import IBasketProducts from './IBasketProducts';

export default interface IBasket {
	id: number;
	userId: number;
	basket_products: IBasketProducts[];
}
