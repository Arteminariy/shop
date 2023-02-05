import React, { FC } from 'react';
import './link.css';

interface LinkProps {
    link: string
}

const Link: FC<LinkProps> = ({ link }) => (
    <a
        href={link}
    >
        <div
            className="link"
            data-testid="Link"
        >
            Link Component
        </div>
    </a>
);

export default Link;
