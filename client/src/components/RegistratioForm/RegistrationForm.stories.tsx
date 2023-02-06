// RegistratioForm.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RegistratioForm, { IRegistratioFormProps } from './RegistrationForm';
import './RegistratioForm.css'
import '../../index.css'

export default {
	title: 'RegistratioForm',
	component: RegistratioForm,
} as ComponentMeta<typeof RegistratioForm>;

const Template: ComponentStory<typeof RegistratioForm> = (args: IRegistratioFormProps) => <RegistratioForm {...args} />;

export const Default = Template.bind({});

Default.args = {};