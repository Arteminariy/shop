import React, { FC } from 'react';
import './Header.css';
import { Link } from 'react-router-dom'

export interface IHeaderProps {
	tabs: IHeaderTab[]
}

export interface IHeaderTab {
	title: string,
	link: string
}

const Header: FC<IHeaderProps> = ({ tabs }) => {
	return (
		<header>
			<div className="header-content">
				{tabs.map(tab => {
					return (
						<div className="header-tab">
							<Link to={tab.link} className="header-tab-text">
								{tab.title}
							</Link>
						</div>
					)
				})}
			</div>
		</header>
	)
};

export default Header;
