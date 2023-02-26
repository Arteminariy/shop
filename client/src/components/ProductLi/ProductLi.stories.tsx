// ProductLi.stories.ts|tsx
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductLi, { IProductLiProps } from './ProductLi';
import './ProductLi.css'
import '../../index.css'

export default {
	title: 'ProductLi',
	component: ProductLi,
} as ComponentMeta<typeof ProductLi>;

const Template: ComponentStory<typeof ProductLi> = (args: IProductLiProps) => <ProductLi {...args} />;

export const Default = Template.bind({});

Default.args = {};