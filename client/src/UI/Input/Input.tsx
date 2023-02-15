import React, { FC, useState } from 'react';
import './Input.css';

export interface IInputProps {
	placeholder?: string,
	type?: string
}

const Input: FC<IInputProps> = ({ placeholder, type }) => {
	const [value, setvalue] = useState('');
	return (
		<input className="input" placeholder={placeholder} type={type}/>
	)
};

export default Input;
