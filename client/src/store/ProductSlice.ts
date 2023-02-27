import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IBrand from '../../types/IBrand';
import IProduct from '../../types/IProduct';
import IType from '../../types/IType';

export type ProductState = {
	types: IType[];
	brands: IBrand[];
	products: IProduct[];
	page: number;
	limit: number;
	totalCount: number;
};

const initialState: ProductState = {
	types: [],
	brands: [],
	products: [],
	page: 1,
	limit: 8,
	totalCount: 0,
};

const ProductSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setTypes(state, action: PayloadAction<IType[]>) {
			state.types = [...action.payload];
		},
		setBrands(state, action: PayloadAction<IBrand[]>) {
			state.brands = [...action.payload];
		},
		setProducts(state, action: PayloadAction<IProduct[]>) {
			state.products = [...action.payload];
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		},
		setLimit(state, action: PayloadAction<number>) {
			state.limit = action.payload;
		},
		setTotalCount(state, action: PayloadAction<number>) {
			state.totalCount = action.payload;
		},
	},
});

export const selectUser = (state: ProductState) => state;

export const {
	setTypes,
	setBrands,
	setProducts,
	setPage,
	setLimit,
	setTotalCount,
} = ProductSlice.actions;
export default ProductSlice.reducer;
