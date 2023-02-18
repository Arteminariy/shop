import React, { FC } from 'react';
import './Button.css';

export interface IButtonProps {
	children: JSX.Element | JSX.Element[] | string;
	variant?: ButtonStyleVariant;
	onClick?: () => void;
	href?: string;
}
export type ButtonStyleVariant = 'filled' | 'outlined';

const Button: FC<IButtonProps> = ({
	children,
	variant = 'filled',
	onClick,
	href,
}) => {
	return (
		<button
			onClick={onClick}
			className={
				variant === 'outlined'
					? 'button outlined-btn'
					: 'button filled-btn'
			}
		>
			{children}
		</button>
	);
};

export default Button;
