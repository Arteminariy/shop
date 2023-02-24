// AdminPage.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AdminPage, { IAdminPageProps } from './AdminPage';
import './AdminPage.css'
import '../../index.css'

export default {
	title: 'AdminPage',
	component: AdminPage,
} as ComponentMeta<typeof AdminPage>;

const Template: ComponentStory<typeof AdminPage> = (args: IAdminPageProps) => <AdminPage {...args} />;

export const Default = Template.bind({});

Default.args = {};