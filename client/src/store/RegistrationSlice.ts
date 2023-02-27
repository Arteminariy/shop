import { createSlice } from '@reduxjs/toolkit';

type RegistrationFormState = {
    login: string,
    password: string
}

const initialState: RegistrationFormState = {
	login: '',
	password: ''
}

const RegistrationSlice = createSlice({
	name: 'registrationForm',
	initialState,
	reducers: {
		registration() {

		}
	}
})

export const { registration } = RegistrationSlice.actions
export default RegistrationSlice.reducer