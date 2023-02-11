import React, { FC } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import user_icon from "../../assets/User_Empty.png";

export interface IHeaderProps {
    tabs: IHeaderTab[];
}

export interface IHeaderTab {
    title: string;
    link: string;
}

const Header: FC<IHeaderProps> = ({ tabs }) => {
	const authorized = true
    return (
        <header>
            <div className="header-content">
                <div className="header-top">
                    <div className="header-logo">Shine Bright</div>
                    <div className="header-buttons">
						{ authorized ? <Link to="/"><div className="header-icon"><img src={user_icon} alt="Профиль" /></div></Link> : <></>}
                    </div>
                </div>
                <div className="header-tabs">
                    {tabs.map((tab) => {
                        return (
                            <div className="header-tab">
                                <Link to={tab.link} className="header-tab-text">
                                    {tab.title}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </header>
    );
};

export default Header;
