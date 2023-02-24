import {
	ADMIN_ROUTE,
	LOGIN_ROUTE,
	CATALOGUE_ROUTE,
	USER_ROUTE,
	REGISTRATION_ROUTE,
	MAIN_ROUTE
} from './utils/consts';
import AdminPage from './pages/AdminPage/AdminPage';
import UserPage from './pages/UserPage/UserPage';
import ProductPage from './pages/ProductPage/ProductPage';
import AuthPage from './pages/AuthPage/AuthPage';
import CataloguePage from './pages/CataloguePage/CataloguePage';
import MainPage from './pages/MainPage/MainPage';

export const authRoutes = [
	{
		path: ADMIN_ROUTE,
		element: <AdminPage/>,
	},
	{
		path: USER_ROUTE,
		element: <UserPage/>,
	},
];
export const publicRoutes = [
	{
		path: MAIN_ROUTE,
		element: <MainPage/>
	},
	{
		path: CATALOGUE_ROUTE + '/:id',
		element: <ProductPage/>,
	},
	{
		path: LOGIN_ROUTE,
		element: <AuthPage/>,
	},
	{
		path: CATALOGUE_ROUTE,
		element: <CataloguePage/>,
	},
	{
		path: REGISTRATION_ROUTE,
		element: <AuthPage/>,
	},
];
