import React, { FC } from 'react';
import './Card.css';

export interface ICardProps {
    children: JSX.Element | JSX.Element[] | string,
}

const Card: FC<ICardProps> = ({ children }) => (
    <div
        className="card"
    >
        {children}
    </div>
);

export default Card;
