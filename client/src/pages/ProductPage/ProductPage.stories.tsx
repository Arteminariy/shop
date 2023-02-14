// ProductPage.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductPage, { IProductPageProps } from './ProductPage';
import './ProductPage.css'
import '../../index.css'

export default {
	title: 'ProductPage',
	component: ProductPage,
} as ComponentMeta<typeof ProductPage>;

const Template: ComponentStory<typeof ProductPage> = (args: IProductPageProps) => <ProductPage {...args} />;

export const Default = Template.bind({});

Default.args = {};