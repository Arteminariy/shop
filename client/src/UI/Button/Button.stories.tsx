/* eslint-disable */
import React from 'react';
import Button, { ButtonStyleVariant } from './Button';

export default {
  title: "Button",
};

export const Default = () => <Button variant={ButtonStyleVariant.filled}>Default text</Button>;

Default.story = {
  name: 'default',
};
