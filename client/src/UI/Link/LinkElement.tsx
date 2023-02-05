import React, { FC } from 'react';
import './LinkElement.css';

export interface ILinkElementProps {
    link: string,
    children: string | JSX.Element,
}

const LinkElement: FC<ILinkElementProps> = ({ link, children }) => (
    <a
        href={link}
        className="linkElement"
    >
        <div
            
            data-testid="LinkElement"
        >
            {children}
        </div>
    </a>
);

export default LinkElement;
