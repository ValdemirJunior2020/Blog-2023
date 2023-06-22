import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

export const Default = () => <Button>Hello, Storybook!</Button>;
export const Primary = () => <Button variant="primary">Primary Button</Button>;
export const Secondary = () => <Button variant="secondary">Secondary Button</Button>;
