// Accordion.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion, { IAccordionProps } from './Accordion';
import './Accordion'
import '../../index.css'

export default {
	title: 'Card',
	component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args: IAccordionProps) => <Accordion {...args}/>;

export const Default = Template.bind({});

Default.args = {
	content: [
		{ header: `cum`, text: `no cum` },
	],
};
