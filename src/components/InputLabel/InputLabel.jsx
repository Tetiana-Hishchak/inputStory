import React from 'react';
import PropTypes from 'prop-types';
import './InputLabel.css'; 

import iconInfo from '../../stories/assets/info-circle.png'; 

const InputLabel = ({ htmlFor, labelText, required = false, infoIcon, labelSize = 'md', style }) => {
  return (
    <label className={`input-label input-label--${labelSize}`} htmlFor={htmlFor} style={style}>
      {labelText}
      {required && <span className="required-indicator">*</span>}
      {infoIcon && <img src={iconInfo} alt="iconInfo" className="icon-info" />}
    </label>
  );
};



InputLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.bool,
  labelSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),   
  labelText: PropTypes.string.isRequired,
  required: PropTypes.bool,
  infoIcon: PropTypes.bool,
};

export default InputLabel;
