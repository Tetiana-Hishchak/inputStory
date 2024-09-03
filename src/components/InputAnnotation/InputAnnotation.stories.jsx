import React from 'react';
import InputAnnotation from './InputAnnotation'; // Імпорт вашого компонента

export default {
  title: 'Components/InputAnnotation',
  component: InputAnnotation,
  argTypes: {
    text: { control: 'text', defaultValue: 'This is an annotation text' },
    type: {
      control: { type: 'select' },
      options: ['info', 'error'],
      defaultValue: 'info',
    },
  },
};

const Template = (args) => <InputAnnotation {...args} />;

export const Info = Template.bind({});
Info.args = {
  text: 'This is an info message',
  type: 'info',
};

export const Error = Template.bind({});
Error.args = {
  text: 'This is an error message',
  type: 'error',
};


