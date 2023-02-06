// TemplateName.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TemplateName, { ITemplateNameProps } from './TemplateName';
import './TemplateName.css'
import '../../index.css'

export default {
	title: 'TemplateName',
	component: TemplateName,
} as ComponentMeta<typeof TemplateName>;

const Template: ComponentStory<typeof TemplateName> = (args: ITemplateNameProps) => <TemplateName {...args} />;

export const Default = Template.bind({});

Default.args = {};