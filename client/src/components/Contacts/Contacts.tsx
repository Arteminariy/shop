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
    <div className="contacts" data-testid="Contacts">
        {children}
        <TwitterOutlined />
        <FacebookOutlined />
        <WhatsAppOutlined />
        <MailOutlined />
        <TwitterSquareFilled />
        <FacebookFilled />
        <MailFilled />
    </div>
);

export default Contacts;
