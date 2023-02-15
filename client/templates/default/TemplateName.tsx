import React, { FC } from 'react';
import './TemplateName.css';

export interface ITemplateNameProps { }

const TemplateName: FC<ITemplateNameProps> = () => {
	return (
		<div className='template-name'>
			TemplateName Component
		</div>
	)
};

export default TemplateName;
