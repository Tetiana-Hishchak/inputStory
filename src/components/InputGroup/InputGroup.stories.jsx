import React, { useState } from 'react';
import InputGroup from './InputGroup';

export default {
  title: 'Components/InputGroup',
  component: InputGroup,
  argTypes: {
    labelSize: {
      control: { type: 'select' },
      options: ["sm","md","lg","xl"],
      defaultValue: 'md',  
    },
    state: {
      control: { type: 'select' },
      options: ['default', 'hover', 'focus', 'error', 'error-focus', 'disabled'],
      defaultValue: 'default',
    },
    userText: {
      control: 'boolean',
      defaultValue: false,
    },
    labelPosition: {
      control: { type: 'select' },
      options: ['top', 'left'],
      defaultValue: 'top', 
    },
    label: { control: 'boolean', defaultValue: true }, 

    labelText:{control: 'text', defaultValue: 'Email:'},
    border: { control: 'boolean', defaultValue: true },  
    helperText: { control: 'boolean', defaultValue: true }, 

    inputProps: {
      placeholder: { control: 'text', defaultValue: 'Input...' },
      disabled: { control: 'boolean', defaultValue: false },
      size: {
        control: { type: 'select' },
        options: ['sm', 'md', 'lg', 'xl'],
        defaultValue: 'md',  
      },
      alignment: {
        control: { type: 'select' },
        options: ['left', 'center', 'right'],
        defaultValue: 'left',  
      },
      border: { control: 'boolean', defaultValue: true }, 
      iconBefore: { control: 'boolean', defaultValue: true }, 
      iconAfter: { control: 'boolean', defaultValue: true },  
      shortkey: { control: 'boolean', defaultValue: true },  
      id: { control: 'text', defaultValue: 'email' },
    }
  },
};

const Template = (args) => {
  const [value, setValue] = useState('');

  const inputProps = {
    ...args.inputProps,
    value: value,
    onChange: (e) => setValue(e.target.value),
  };

  return (
    <InputGroup
      {...args}
      inputProps={inputProps}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: true,
  state: 'default',
  labelPosition: 'top', 
  size: 'sm',  
  labelText: 'Email:', 
  helperText: true,  
  labelSize: 'md',
  inputProps: {
    placeholder: 'Input...',
    disabled: false,
    size: 'md',  
    alignment: 'left',  
    border: true, 
    iconBefore: true, 
    iconAfter: true,  
    shortkey: true,  
    id: 'email',
  }
};
