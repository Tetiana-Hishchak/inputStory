import React from 'react';
import PropTypes from 'prop-types';
import './InputLabel.css'; 

import iconInfo from '../../stories/assets/info-circle.png'; 

const InputLabel = ({ htmlFor, label, required = false, infoIcon, style }) => {
  return (
    <label className="input-label" htmlFor={htmlFor} style={style}>
      {label}
      {required && <span className="required-indicator">*</span>}
      {infoIcon && <img src={iconInfo} alt="iconInfo" className="icon icon-info" />}
    </label>
  );
};


InputLabel.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  infoIcon: PropTypes.bool,
};

export default InputLabel;
