import React, { FC } from 'react';
import './Button.css';
import theme from '../theme';

export interface IButtonProps {
	children: JSX.Element | JSX.Element[] | string;
	variant?: ButtonStyleVariant;
	onClick?: () => void;
	color?: 'main' | 'secondary'
	href?: string;
}
export type ButtonStyleVariant = 'filled' | 'outlined';

const Button: FC<IButtonProps> = ({
	children,
	variant = 'filled',
	onClick,
	color,
	href,
}) => {

	const btnVariant = {
		filled: {
			bgc: color === 'main' ? theme.main : theme.secondary,
			color: theme.background,
			border: `1px solid ${color === 'main' ? theme.main : theme.secondary}`,
		},
		outlined: {
			bgc: theme.background,
			color: color === 'main' ? theme.main : theme.secondary,
			border: `1px solid ${color === 'main' ? theme.main : theme.secondary}`
		},
		// outlinedOnHover: {
		// 	bgc: color === 'main' ? theme.main : theme.secondary,
		// 	color: theme.background,
		// 	border: `1px solid ${color === 'main' ? theme.main : theme.secondary}`
		// }
	}

	return (
		<button
			onClick={onClick}
			style={{
				cursor: 'pointer',
				backgroundColor: variant === 'filled' ? btnVariant.filled.bgc : btnVariant.outlined.bgc,
				color: variant === 'filled' ? btnVariant.filled.color : btnVariant.outlined.color,
				border: variant === 'filled' ? btnVariant.filled.border : btnVariant.outlined.border
			}}
			className="button"
		>
			{children}
		</button>
	);
};

export default Button;
