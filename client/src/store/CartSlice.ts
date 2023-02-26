import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
		addToCart(state, action: PayloadAction<number>) {
			state.prodIds.push(action.payload);
		},
	},
});

export const selectCart = (state: CartState) => state.prodIds

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
