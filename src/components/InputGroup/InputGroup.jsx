import React from 'react';
import PropTypes from 'prop-types';
import './InputGroup.css';
import InputText from '../InputText/InputText';
import InputAnnotation from '../InputAnnotation/InputAnnotation';
import InputLabel from '../InputLabel/InputLabel';

const InputGroup = ({
  label,
  state,
  helperText,
  inputProps,
  annotationType = 'info',
  required = false,
  infoIcon,
  labelPosition = 'top',
  labelSize = 'sm', 
  ...props
}) => {

  const currentAnnotationType = (state === 'error' || state === 'error-focus') ? 'error' : annotationType;

  return (
    <div className={`input-group ${state}`} {...props}>
      {label && (
        <InputLabel
          htmlFor={inputProps?.id}
          label={'Email'} 
          required={required}
          infoIcon={infoIcon}
          style={{
            display: labelPosition === 'top' ? 'block' : 'inline-block',
            marginBottom: labelPosition === 'top' ? '8px' : '0',
            marginRight: labelPosition === 'left' ? '-10px' : '0',
            fontSize: labelSize === 'sm' ? '12px' : labelSize === 'md' ? '14px' : labelSize === 'lg' ? '16px' : '18px', 
          }}
        />
      )}
      <div className="input-group-input">
        <InputText 
          {...inputProps}
          state={state}
        />
      </div>
      {helperText && (
        <InputAnnotation
          text={'This is a hint text to help user'}
          type={currentAnnotationType}
        />
      )}
    </div>
  );
};

InputGroup.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.bool,
  state: PropTypes.oneOf(['default', 'hover', 'focus', 'error', 'error-focus', 'disabled']),
  annotationType: PropTypes.oneOf(['info', 'error']),
  required: PropTypes.bool,
  infoIcon: PropTypes.bool,
  labelPosition: PropTypes.oneOf(['top', 'left']),
  labelSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']), 
  inputProps: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    border: PropTypes.bool,
    iconAfter: PropTypes.bool,
    iconBefore: PropTypes.bool,
    shortkey: PropTypes.bool,
    id: PropTypes.string,
  }),
};

export default InputGroup;

