// CataloguePage.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CataloguePage, { ICataloguePageProps } from './CataloguePage';
import './CataloguePage.css'
import '../../index.css'

export default {
	title: 'CataloguePage',
	component: CataloguePage,
} as ComponentMeta<typeof CataloguePage>;

const Template: ComponentStory<typeof CataloguePage> = (args: ICataloguePageProps) => <CataloguePage {...args} />;

export const Default = Template.bind({});

Default.args = {};