// Pages.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Pages, { IPagesProps } from './Pages';
import './Pages.css'
import '../../index.css'

export default {
	title: 'Pages',
	component: Pages,
} as ComponentMeta<typeof Pages>;

const Template: ComponentStory<typeof Pages> = (args: IPagesProps) => <Pages {...args} />;

export const Default = Template.bind({});

Default.args = {};