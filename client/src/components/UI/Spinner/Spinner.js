import React from 'react';

import './Spinner.sass';

const spinner = ({size,position = ''}) => (
  <div
    style={{
      fontSize: size
    }}
    className={`loader ${position}`}
  ></div>
);

export default spinner;