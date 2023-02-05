import React, { FC } from 'react';
import './Button.css';

export interface IButtonProps {
	children: JSX.Element | string,
	variant: ButtonStyleVariant
}
export type ButtonStyleVariant = 'filled' | 'outlined'

const Button: FC<IButtonProps> = ({ children, variant }) => (
	<button className={variant === 'outlined' ? 'button outlined-btn' : 'button filled-btn'} data-testid="Button">
		{children}
	</button>
);

export default Button;
