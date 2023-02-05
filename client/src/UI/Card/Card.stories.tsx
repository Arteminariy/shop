// Button.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card, { ICardProps } from './Card';
import './Card.css'
import '../../index.css'

export default {
	title: 'Card',
	component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args: ICardProps) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: 'Default text'
};