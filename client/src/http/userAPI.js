import { $authHost, $host } from '.';
import jwt from 'jwt-decode'

export const registration = async (login, password) => {
	const {data} = await $host.post('api/user/registration', {email, password})
	return jwt.decode(data.token)
}

export const login = async (login, password) => {
	const {data} = await $host.post('api/user/login', {email, password})
	return jwt.decode(data.token)
}

export const check = async (login, password) => {
	const response = await $host.post('api/user/auth')
	return response
}