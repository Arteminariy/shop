// Button.stories.ts|tsx

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button, { IButtonProps } from './Button';
import './Button.css'

export default {
	title: 'Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: IButtonProps) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
	variant: 'outlined',
};