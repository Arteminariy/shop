// NotFoundPage.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotFoundPage, { INotFoundPageProps } from './NotFoundPage';
import './NotFoundPage.css'
import '../../index.css'

export default {
	title: 'NotFoundPage',
	component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args: INotFoundPageProps) => <NotFoundPage {...args} />;

export const Default = Template.bind({});

Default.args = {};