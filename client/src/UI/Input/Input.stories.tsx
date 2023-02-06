// Input.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input, { IInputProps } from './Input';
import './Input.css'
import '../../index.css'

export default {
	title: 'Input',
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: IInputProps) => <Input {...args} />;

export const Default = Template.bind({});

Default.args = {};