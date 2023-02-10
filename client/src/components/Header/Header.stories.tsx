// Header.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header, { IHeaderProps } from './Header';
import './Header.css'
import '../../index.css'

export default {
	title: 'Header',
	component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args: IHeaderProps) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
	tabs: [
		{ title: "Главная", link: "/" },
		{ title: "Каталог", link: "/catalogue" },
	]
};