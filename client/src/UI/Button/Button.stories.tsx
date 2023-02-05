/* eslint-disable */
import React from 'react';
import Button, { ButtonStyleVariant } from './Button';

export default {
  title: "Button",
  component: Button
};

export const Default = () => <Button variant={'filled'}>Default text</Button>;

Default.story = {
  name: 'default',
};
