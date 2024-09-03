import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InputText.css';

import searchIcon from '../../stories/assets/search-icon.png'; 
import iconHelp from '../../stories/assets/help-circle.png'; 
import iconKey from '../../stories/assets/shortkey.png'; 
import redIconBefore from '../../stories/assets/redIconBefore.png';
import redIconAfter from '../../stories/assets/redIconafter.png';

const InputText = ({
  value,
  onChange,
  placeholder,
  disabled,
  size,
  alignment,
  border,
  iconAfter,
  iconBefore,
  shortkey,
  state,
}) => {
  const inputClassNames = `
    input-text 
    ${size} 
    ${alignment} 
    ${border ? 'border' : ''} 
    ${iconAfter ? 'icon-after' : ''} 
    ${iconBefore ? 'icon-before' : ''}
  `;

  const iconBeforeSrc = (state === 'error' || state === 'error-focus') ? redIconBefore : searchIcon;
  const iconAfterSrc = (state === 'error' || state === 'error-focus') ? redIconAfter : iconHelp;

  return (
    <div className="input-text-container">
      {iconBefore && <img src={iconBeforeSrc} alt="search icon" className="icon icon-before" />}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={inputClassNames.trim()}
        {...(shortkey && { onKeyDown: (e) => e.key === 'Enter' && console.log('Enter pressed!') })}
      />
      {iconAfter && <img src={iconAfterSrc} alt="iconAfter" className="icon icon-after" />}

      {shortkey && <img src={iconKey} alt="iconKey" className="icon icon-shortkey" />}
    </div>
  );
};

InputText.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  alignment: PropTypes.oneOf(['left', 'center', 'right']),
  border: PropTypes.bool,
  iconAfter: PropTypes.bool,
  iconBefore: PropTypes.bool,
  shortkey: PropTypes.bool,
  state: PropTypes.oneOf(['default', 'hover', 'focus', 'error', 'error-focus', 'disabled']),
};

InputText.defaultProps = {
  placeholder: 'Input...',
  disabled: false,
  size: 'md',
  alignment: 'left',
  border: true,
  iconAfter: false,
  iconBefore: false,
  shortkey: false,
  state: 'default',
};

export default InputText;



