import React, { FC } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Divider } from 'antd';
import './Layout.css';

interface ILayoutProps {}

const Layout: FC<ILayoutProps> = ({}) => (
	<>
		<Header
			tabs={[
				{ title: 'Главная', link: '/' },
				{ title: 'Каталог', link: '/catalogue' }
			]}
		/>
		<Divider className="divider" />
		<div className="layout-container">
			<Outlet />
		</div>
		<Footer/>
	</>
);

export default Layout;
