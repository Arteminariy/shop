import React, { FC } from 'react';
import Input from '../../UI/Input/Input';
import './RegistrationForm.css';

export interface IRegistrationFormProps {

}


const RegistrationForm: FC<IRegistrationFormProps> = ({}) => {
	return (
		<div className="registration-form">
			<Input placeholder="Login"></Input>
			<Input placeholder="Password" type="password"></Input>
			
			<button className="button filled-btn">Войти</button>
		</div>
	)
};

export default RegistrationForm;
