import React, { FC } from 'react';
import {
	TwitterOutlined,
	FacebookFilled,
	TwitterSquareFilled,
	FacebookOutlined,
	WhatsAppOutlined,
	MailOutlined,
	MailFilled
} from '@ant-design/icons'
import './Contacts.css';

export interface IContactsProps {
    children: JSX.Element | JSX.Element[] | string,
}

const Contacts: FC<IContactsProps> = ({ children }) => (
	<div className='contacts' data-testid='Contacts'>
		{children}
		<a href='' className='contacts-link'>
			<TwitterOutlined />
		</a>
		<a href='' className='contacts-link'>
			<FacebookOutlined />
		</a>
		<a href='' className='contacts-link'>
			<WhatsAppOutlined />
		</a>
		<a href='' className='contacts-link'><MailOutlined />
		</a>
		<a href='' className='contacts-link'>
			<TwitterSquareFilled />
		</a>
		<a href='' className='contacts-link'>
			<FacebookFilled />
		</a>
		<a href='' className='contacts-link'>
			<MailFilled />
		</a>
	</div>
);

export default Contacts;
