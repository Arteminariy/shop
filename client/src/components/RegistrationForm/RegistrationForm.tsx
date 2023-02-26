import React, { FC } from 'react';
import {Button, Input} from '../../UI/';
import './RegistrationForm.css';

export interface IRegistrationFormProps {

}


const RegistrationForm: FC<IRegistrationFormProps> = () => {
	return (
		<div className="registration-form">
			<Input placeholder="Login"></Input>
			<Input placeholder="Password" type="password"></Input>
			<Button variant="filled">Войти</Button>
		</div>
	)
};

export default RegistrationForm;
