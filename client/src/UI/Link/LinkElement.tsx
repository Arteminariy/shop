import React, { FC } from 'react';
import './LinkElement.css';

export interface ILinkElementProps {
    link: string
    children: string
}

const LinkElement: FC<ILinkElementProps> = ({ link, children }) => (
    <a
        href={link}
    >
        <div
            className="link"
            data-testid="LinkElement"
        >
            {children}
        </div>
    </a>
);

export default LinkElement;
