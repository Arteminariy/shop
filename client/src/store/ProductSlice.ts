import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IBrand from '../../types/IBrand';
import IProduct from '../../types/IProduct';
import IType from '../../types/IType';

export type ProductState = {
	types: IType[];
	brands: IBrand[];
	products: IProduct[];
};

const initialState: ProductState = {
	types: [],
	brands: [],
	products: [],
};

const ProductSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setTypes(state, action: PayloadAction<IType[]>) {
			state.types = [...state.types, ...action.payload];
		},
		setBrands(state, action: PayloadAction<IBrand[]>) {
			state.brands = [...state.brands, ...action.payload];
		},
		setProducts(state, action: PayloadAction<IProduct[]>) {
			state.products = [...state.products, ...action.payload];
		},
	},
});

export const selectUser = (state: ProductState) => state;

export const {} = ProductSlice.actions;
export default ProductSlice.reducer;
