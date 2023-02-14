// RegistrationForm.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RegistrationForm, { IRegistrationFormProps } from './RegistrationForm';
import './RegistrationForm.css'
import '../../index.css'

export default {
	title: 'RegistrationForm',
	component: RegistrationForm,
} as ComponentMeta<typeof RegistrationForm>;

const Template: ComponentStory<typeof RegistrationForm> = (args: IRegistrationFormProps) => <RegistrationForm {...args} />;

export const Default = Template.bind({});

Default.args = {};