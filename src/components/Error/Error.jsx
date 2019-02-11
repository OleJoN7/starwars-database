import React from 'react';

import './Error.css';
import icon from './death-star.png';

const Error = () => {
  return (
    <div className="error">
      <img src={icon} alt="error"/>
      <span className="boom">BOOM!</span>
      <span>
        Error - Our droids will fix it.
      </span>
    </div>
  );
};

export default Error;