import React from 'react';
import InputLabel from './InputLabel';

export default {
  title: 'Components/InputLabel',
  component: InputLabel,
};

const Template = (args) => <InputLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  htmlFor:"email", 
  label:"Email:",
};
