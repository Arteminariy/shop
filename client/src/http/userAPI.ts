import { $authHost, $host } from '.';
import jwt, { JwtPayload } from 'jwt-decode'
import jwtDecode from 'jwt-decode';
import IUser from '../../types/IUser';

//check jwt.payload

export const registration = async (login: string, password: string) => {
	const {data} = await $host.post('api/user/registration', {login, password})
	localStorage.setItem('token', data.token)
	return jwtDecode<IUser>(data.token);
}

export const login = async (login: string, password: string) => {
	const {data} = await $host.post('api/user/login', {login, password})
	localStorage.setItem('token', data.token)
	return jwtDecode<IUser>(data.token)
}

export const check = async () => {
	const {data} = await $authHost.get('api/user/auth')
	localStorage.setItem('token', data.token)
	return jwtDecode<IUser>(data.token);
}