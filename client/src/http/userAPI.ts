import { $authHost, $host } from '.';
import jwt, { JwtPayload } from 'jwt-decode'
import jwtDecode from 'jwt-decode';

//check jwt.payload

export const registration = async (login: string, password: string) => {
	const {data} = await $host.post('api/user/registration', {login, password})
	return jwtDecode<JwtPayload>(data.token)
}

export const login = async (login: string, password: string) => {
	const {data} = await $host.post('api/user/login', {login, password})
	return jwtDecode<JwtPayload>(data.token)
}

export const check = async (login: string, password: string) => {
	const response = await $host.post('api/user/auth')
	return response
}