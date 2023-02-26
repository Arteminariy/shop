import React, { FC } from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import { UserOutlined, ShoppingOutlined } from '@ant-design/icons'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export interface IHeaderProps {
	tabs: IHeaderTab[];
}

export interface IHeaderTab {
	title: string;
	link: string;
}

const Header: FC<IHeaderProps> = ({ tabs }) => {

	const isAuth = useSelector((state: RootState) => state.user.isAuth)
	return (
		<header>
			<div className="header-content">
				<div className="header-top">
					<div className="header-logo">Shine Bright</div>
					<div className="header-buttons">
						{isAuth ?
							<>
								<Link to="user"><UserOutlined className="header-icon" /></Link>
							</> : <><Link to="login"><UserOutlined className="header-icon" /></Link></>}
					</div>
				</div>
				<div className="header-tabs">
					{tabs.map((tab) => {
						return (
							<NavLink to={tab.link} className="header-tab">
								{tab.title}
							</NavLink>
						);
					})}
				</div>
			</div>
		</header>
	);
};

export default Header;
