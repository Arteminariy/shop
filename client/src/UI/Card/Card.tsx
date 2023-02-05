import React, { FC } from 'react';
import Picture from '../Picture/Picture';
import './Card.css';

interface ICardProps {
  children: JSX.Element,
}

const Card: FC<ICardProps> = ({children}) => (
  <div
    className="card"
  >
    {children}
  </div>
);

export default Card;
