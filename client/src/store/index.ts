import {configureStore} from '@reduxjs/toolkit'
import registrationReducer from './RegistrationSlice'

const store = configureStore({
    reducer: {
        registration: registrationReducer
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch