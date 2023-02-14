import React, { FC } from 'react';
import './Card.css';

export interface ICardProps {
    children: JSX.Element | JSX.Element[] | string,
    size?: ICardSize
}
export interface ICardSize {
    x: number,
    y: number
}


const Card: FC<ICardProps> = ({ children, size }) => (
	<div
		className='card'
		style={{
			width: size?.x,
			height: size?.y
		}}
	>
		{children}
	</div>
);

export default Card;
