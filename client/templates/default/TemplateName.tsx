import React, { FC } from 'react';
import './TemplateName.module.css';

export interface ITemplateNameProps { }

const TemplateName: FC<ITemplateNameProps> = ({ }) => (
	<div className='template-name'>
		TemplateName Component
	</div>
);

export default TemplateName;
