import React from 'react';

import './styles.css';

function Button(props) {
  const {title} = props;

  return(
    <button className="slide_from_right">{title}</button>
  );
}

export default Button;