import { $authHost, $host } from '.';
import IBrand from '../../types/IBrand';
import IProduct from '../../types/IProduct';
import IType from '../../types/IType';

export const createType = async (type: IType) => {
	const { data } = await $authHost.post('api/type', type);
	return data;
};

export const fetchTypes = async () => {
	const { data } = await $host.get('api/type');
	return data;
};

export const createBrand = async (brand: IBrand) => {
	const { data } = await $authHost.post('api/brand', brand);
	return data;
};

export const fetchBrands = async () => {
	const { data } = await $host.get('api/brand');
	return data;
};

export const createProduct = async (product: IProduct) => {
	const { data } = await $authHost.post('api/product', product);
	return data;
};

export const fetchProducts = async () => {
	const { data } = await $host.get('api/product');
	return data;
};