import React, { FC } from 'react';
import './Button.css';

export interface IButtonProps {
	children: JSX.Element | JSX.Element[] | string,
	variant: ButtonStyleVariant,
	click?: () => void
}
export type ButtonStyleVariant = 'filled' | 'outlined'

const Button: FC<IButtonProps> = ({ children, variant, click }) => (
	<button onClick={click} className={variant === 'outlined' ? 'button outlined-btn' : 'button filled-btn'} data-testid="Button">
		{children}
	</button>
);

export default Button;
