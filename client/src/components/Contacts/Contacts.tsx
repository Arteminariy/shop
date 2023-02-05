import React, { FC } from 'react';
import LinkElement from '../../UI/LinkElement/LinkElement';
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
        <LinkElement link="">
            <TwitterOutlined />
        </LinkElement>
        <LinkElement link="">
            <FacebookOutlined />
        </LinkElement>
        <LinkElement link="">
            <WhatsAppOutlined />
        </LinkElement>
        <LinkElement link=""><MailOutlined />
        </LinkElement>
        <LinkElement link="">
            <TwitterSquareFilled />
        </LinkElement>
        <LinkElement link="">
            <FacebookFilled />
        </LinkElement>
        <LinkElement link="">
            <MailFilled />
        </LinkElement>
    </div>
);

export default Contacts;
