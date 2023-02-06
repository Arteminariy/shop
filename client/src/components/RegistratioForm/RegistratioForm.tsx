import React, { FC } from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import './RegistratioForm.css';

export interface IRegistratioFormProps {

}


const RegistratioForm: FC<IRegistratioFormProps> = ({}) => {
	return (
		<div className='registratio-form'>
			<Input placeholder='Login'></Input>
			<Input placeholder='Password' type='password'></Input>
			<Button variant='outlined'>Войти</Button>
		</div>
	)
};

export default RegistratioForm;
