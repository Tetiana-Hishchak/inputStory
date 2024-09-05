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
  labelText,
  labelPosition = 'top',
  labelSize = 'md', 
  ...props
}) => {

  const currentAnnotationType = (state === 'error' || state === 'error-focus') ? 'error' : annotationType;

  return (
    <div 
      className={`input-group ${state}`} {...props}
    >
      <div className={`input-group-wrapper input-group-wrapper--${labelPosition}`}>
        {label && (
          <InputLabel
          htmlFor={inputProps?.id}
          labelText={labelText}
          required={required}
          infoIcon={infoIcon}
          labelSize={labelSize}
          className={`input-label input-label--${labelSize} input-label--${labelPosition}`}
        />
        )}
        <div className={`input-group-input input-group-input--${labelPosition}`}>
          <InputText 
            {...inputProps}
            state={state}
            labelPosition ={labelPosition}
            
          />
        </div>
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
  label: PropTypes.bool,
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



