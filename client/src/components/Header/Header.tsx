import React, { FC } from 'react';
import './Header.css';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { UserOutlined, LogoutOutlined, DashboardOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setIsAuth, setUser } from '../../store/UserSlice';
import { MAIN_ROUTE } from '../../utils/consts';

export interface IHeaderProps {
	tabs: IHeaderTab[];
}

export interface IHeaderTab {
	title: string;
	link: string;
}

const Header: FC<IHeaderProps> = ({ tabs }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate()

	const user = useSelector((state: RootState) => state.user);

	const logOut = () => {
		dispatch(setUser(null));
		dispatch(setIsAuth(false));
		navigate(MAIN_ROUTE)
	};

	const isAdmin = user.user?.role === 'ADMIN' ? true : false

	return (
		<header>
			<div className="header-content">
				<div className="header-top">
					<div className="header-logo">Shine Bright</div>
					<div className="header-buttons">
						{user.isAuth ? (
							<>
								<Link to="user">
									<UserOutlined className="header-icon" />
								</Link>
								<LogoutOutlined onClick={logOut} className="header-icon" />
							</>
						) : (
							<>
								<Link to="login">
									<UserOutlined className="header-icon" />
								</Link>
							</>
						)}
						{isAdmin && <DashboardOutlined />}
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
