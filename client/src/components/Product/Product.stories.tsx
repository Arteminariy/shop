// Product.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Product, { IProductProps } from './Product';
import './Product.css'
import '../../index.css'

export default {
	title: 'Product',
	component: Product,
} as ComponentMeta<typeof Product>;

const Template: ComponentStory<typeof Product> = (args: IProductProps) => <Product {...args} />;

export const Default = Template.bind({});

Default.args = {};