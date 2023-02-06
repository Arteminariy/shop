/* eslint-disable */
import ScrollUpButton from './ScrollUpButton';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './ScrollUpButton.css'
import '../../index.css'

export default {
	title: 'ScrollUpButton',
	component: ScrollUpButton,
} as ComponentMeta<typeof ScrollUpButton>;

const Template: ComponentStory<typeof ScrollUpButton> = () => <ScrollUpButton />;

export const Default = Template.bind({});

Default.args = {}