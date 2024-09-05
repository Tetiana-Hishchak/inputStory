import React from 'react';
import PropTypes from 'prop-types';
import './InputText.css';

import searchIcon from '../../stories/assets/search-icon.png'; 
import iconHelp from '../../stories/assets/help-circle.png'; 
import iconKey from '../../stories/assets/shortkey.png'; 
import redIconBefore from '../../stories/assets/redIconBefore.png';
import redIconAfter from '../../stories/assets/redIconafter.png';

const InputText = ({
  value = '',  
  onChange = () => {},  
  placeholder = 'Input...',  
  disabled = false, 
  size = 'md', 
  alignment = 'left', 
  border = true, 
  iconAfter = false, 
  iconBefore = false, 
  shortkey = false,  
  state = 'default',  
  labelPosition = 'top',
}) => {
  const inputClassNames = `
    input-text
    ${size || ''} 
    ${alignment || ''} 
    ${border ? 'border' : ''} 
    ${iconAfter ? 'icon-after' : ''} 
    ${iconBefore ? 'icon-before' : ''}
    ${labelPosition !== 'left' ? `${size}--padding` : ''}
   `.trim();

  const iconBeforeSrc = (state === 'error' || state === 'error-focus') ? redIconBefore : searchIcon;
  const iconAfterSrc = (state === 'error' || state === 'error-focus') ? redIconAfter : iconHelp;
  const rightPosition =(alignment === 'right' && iconAfter) || (alignment === 'right' && shortkey)

  return (
    <div className="input-text-container">
      {labelPosition !== 'left' && iconBefore && <img src={iconBeforeSrc} alt="search icon" className="icon icon-before" />}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled || state === 'disabled'}
        className={inputClassNames}
        aria-disabled={disabled}
        aria-placeholder={placeholder}
        {...(shortkey && { onKeyDown: (e) => e.key === 'Enter' && console.log('Enter pressed!') })}
        style={{
          padding: labelPosition === 'top' && iconBefore 
            ? (rightPosition ? '0 64px 0 32px' : '0 12px 0 32px')
            : (rightPosition ? '0 64px 0 0' : '0 12px 0 12px')
        }}
      />
      {labelPosition !== 'left' && iconAfter && <img src={iconAfterSrc} alt="iconAfter" className="icon icon-after" />}
      {labelPosition !== 'left' && shortkey && <img src={iconKey} alt="iconKey" className="icon icon-shortkey" />}
    </div>
  );
};

InputText.propTypes = {
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
  state: PropTypes.oneOf(['default', 'hover', 'focus', 'error', 'error-focus', 'disabled']),
  labelPosition: PropTypes.oneOf(['top', 'left']),
}

export default InputText;
