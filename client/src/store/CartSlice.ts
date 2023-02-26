import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IProduct from '../../types/IProduct';

export type CartState = {
	prodIds: number[];
	totalPrice: number;
};

const initialState: CartState = {
	prodIds: [],
	totalPrice: 0,
};

const CartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart(state, action: PayloadAction<IProduct>) {
			state.prodIds.push(action.payload.id);
			state.totalPrice += action.payload.price;
		},
	},
});

export const selectCart = (state: CartState) => state.prodIds;

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
