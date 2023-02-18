// UserPage.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UserPage, { IUserPageProps } from './UserPage';
import './UserPage.css'
import '../../index.css'

export default {
	title: 'UserPage',
	component: UserPage,
} as ComponentMeta<typeof UserPage>;

const Template: ComponentStory<typeof UserPage> = (args: IUserPageProps) => <UserPage {...args} />;

export const Default = Template.bind({});

Default.args = {};