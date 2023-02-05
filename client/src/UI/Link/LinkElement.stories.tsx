/* eslint-disable */
import LinkElement, {ILinkElementProps} from './LinkElement';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './LinkElement.css'

export default {
	title: 'LinkElement',
	component: LinkElement,
} as ComponentMeta<typeof LinkElement>;

const Template: ComponentStory<typeof LinkElement> = (args: ILinkElementProps) => <LinkElement {...args} />;

export const Default = Template.bind({});

Default.args = {
	children: 'Default text'
};