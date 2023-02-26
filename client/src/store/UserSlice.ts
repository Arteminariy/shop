import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type IUser from '../../types/IUser';

export type UserState = {
	isAuth: boolean;
	user: IUser | null;
};

const initialState: UserState = {
	isAuth: false,
	user: null,
};

const UserSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setIsAuth(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload;
		},
		setUser(state, action: PayloadAction<IUser>) {
			state.user = action.payload;
		},
	},
});

export const selectUser = (state: UserState) => state;

export const { setIsAuth, setUser } = UserSlice.actions;
export default UserSlice.reducer;
