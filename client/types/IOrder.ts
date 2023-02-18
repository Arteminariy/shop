import IOrderProducts from './IOrderProducts';

export default interface IOrder {
	id: number;
	userId: number;
	order_products: IOrderProducts[];
}
