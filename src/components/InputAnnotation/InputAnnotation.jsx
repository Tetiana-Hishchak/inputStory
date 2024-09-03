import React from 'react';
import PropTypes from 'prop-types';
import './InputAnnotation.css';

const InputAnnotation = ({ text, type = 'info' }) => {
  return (
    <div className={`input-annotation input-annotation-${type}`}>
      {text}
    </div>
  );
};

InputAnnotation.propTypes = {
  text: PropTypes.string.isRequired, 
  type: PropTypes.oneOf(['info', 'error']),
};

export default InputAnnotation;

