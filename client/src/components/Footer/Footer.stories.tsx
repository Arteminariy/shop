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

Default.args = {};