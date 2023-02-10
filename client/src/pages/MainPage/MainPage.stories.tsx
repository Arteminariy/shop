// MainPage.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainPage, { IMainPageProps } from './MainPage';
import './MainPage.css'
import '../../index.css'

export default {
	title: 'MainPage',
	component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = (args: IMainPageProps) => <MainPage {...args} />;

export const Default = Template.bind({});

Default.args = {};