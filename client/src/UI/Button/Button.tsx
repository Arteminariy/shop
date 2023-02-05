import React, { FC } from 'react';
import './Button.css';

export interface IButtonProps {
	children: JSX.Element | string,
	variant: ButtonStyleVariant;
}
export enum ButtonStyleVariant {
	filled,
	outlined
}

const Button: FC<IButtonProps> = ({ children, variant }) => (
	<button className={variant === ButtonStyleVariant.outlined ? 'button outlined-btn' : 'button filled-btn'} data-testid="Button">
		{children}
	</button>
);

export default Button;
