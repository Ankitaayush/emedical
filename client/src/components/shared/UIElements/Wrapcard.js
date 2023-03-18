import React from 'react';

import './Wrapcard.css';

/*
  wrap the content to have a card like view it is used in UserItem component
  
*/

const Wrapcard = props => {
  return (
    <div className={`wrapCard ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Wrapcard;
