// Footer.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Footer, { IFooterProps } from './Footer';
import './Footer.css'
import '../../index.css'

export default {
	title: 'Footer',
	component: Footer,
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args: IFooterProps) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {
	tabs: [
		{
			tab: [
				{ text: "Главная", link: "/" },
				{ text: "1", link: "/" },
				{ text: "a", link: "/" },
				{ text: "а", link: "/" },
			]
		},
		{
			tab: [
				{ text: "Каталог", link: "/catalogue" },
				{ text: "2", link: "/" },
				{ text: "b", link: "/" },
				{ text: "б", link: "/" },
			]
		},
		{
			tab: [
				{ text: "Акции", link: "/" },
				{ text: "3", link: "/" },
				{ text: "c", link: "/" },
				{ text: "в", link: "/" },
			]
		},
		{
			tab: [
				{ text: "Новинки", link: "/" },
				{ text: "4", link: "/" },
				{ text: "d", link: "/" },
				{ text: "г", link: "/" },
			]
		},
	]
};