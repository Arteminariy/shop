// AuthPage.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AuthPage, { IAuthPageProps } from './AuthPage';
import './AuthPage.css'
import '../../index.css'

export default {
	title: 'AuthPage',
	component: AuthPage,
} as ComponentMeta<typeof AuthPage>;

const Template: ComponentStory<typeof AuthPage> = (args: IAuthPageProps) => <AuthPage {...args} />;

export const Default = Template.bind({});

Default.args = {};