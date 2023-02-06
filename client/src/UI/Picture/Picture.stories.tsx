// Picture.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Picture, { IPictureProps } from './Picture';
import './Picture.css'
import '../../index.css'
import picture from '../../../../server/static/0c3d7c3c-5c0e-4e6a-a3ea-ec5c4ad7a10e.jpg'

export default {
	title: 'Picture',
	component: Picture,
} as ComponentMeta<typeof Picture>;

const Template: ComponentStory<typeof Picture> = (args: IPictureProps) => <Picture {...args} />;

export const Default = Template.bind({});

Default.args = {
  link: picture,
  width: 800,
  preview: false
};