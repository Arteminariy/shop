import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './CartSlice';
import registrationReducer from './RegistrationSlice'

const store = configureStore({
	reducer: {
		registration: registrationReducer,
		cart: CartSlice
	}
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch