import React from 'react';
import InputText from './InputText';

export default {
  title: 'Components/InputText',
  component: InputText,
};

const Template = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: '',
  placeholder: 'Input...',
  size: 'md',
  alignment: 'left',
  border: true,
  iconAfter: false,
  iconBefore: false,
  shortkey: false,
};

export const SmallWithIcons = Template.bind({});
SmallWithIcons.args = {
  value: '',
  placeholder: 'Input...',
  size: 'sm',
  alignment: 'left',
  border: true,
  iconAfter: true,
  iconBefore: true,
  shortkey: true,
};

export const LargeCentered = Template.bind({});
LargeCentered.args = {
  value: '',
  placeholder: 'Input...',
  size: 'lg',
  alignment: 'center',
  border: true,
  iconAfter: false,
  iconBefore: false,
  shortkey: false,
};

export const DisabledWithIcons = Template.bind({});
DisabledWithIcons.args = {
  value: '',
  placeholder: 'Поле вимкнено',
  size: 'md',
  alignment: 'right',
  border: true,
  iconAfter: true,
  iconBefore: true,
  shortkey: true,
  disabled: true,
};
