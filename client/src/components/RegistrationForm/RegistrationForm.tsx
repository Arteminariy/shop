import React, { FC } from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import './RegistrationForm.css';

export interface IRegistrationFormProps {

}


const RegistrationForm: FC<IRegistrationFormProps> = ({}) => {
	return (
		<div className='registration-form'>
			<Input placeholder='Login'></Input>
			<Input placeholder='Password' type='password'></Input>
			<Button variant='outlined'>Войти</Button>
		</div>
	)
};

export default RegistratioForm;
