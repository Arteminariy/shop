import IBasket from './IBasket';
import IOrder from './IOrder';

export default interface IUser {
	id: number;
	login: string;
	password: string;
	role: string;
	basket: IBasket;
	orders: IOrder[];
}
