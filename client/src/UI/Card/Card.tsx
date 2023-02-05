import React, { FC } from 'react';
import './Card.css';

interface ICardProps {
  children: JSX.Element | JSX.Element[],
}

const Card: FC<ICardProps> = ({children}) => (
  <div
    className="card"
  >
    {children}
  </div>
);

export default Card;