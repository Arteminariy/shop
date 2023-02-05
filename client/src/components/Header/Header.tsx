import React, { FC } from 'react';
import './Header.css';

interface IHeaderProps {
    children: JSX.Element,
}

const Header: FC<IHeaderProps> = ({ children }) => (
    <div
        className="header"
    >
        {children}
    </div>
);

export default Header;