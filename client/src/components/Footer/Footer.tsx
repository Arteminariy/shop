import React, { FC } from 'react';
import './Footer.css';

export interface IFooterProps { }

const Footer: FC<IFooterProps> = ({ }) => {
	return (
		<div className='footer'>
			Footer Component
		</div>
	)
};

export default Footer;
