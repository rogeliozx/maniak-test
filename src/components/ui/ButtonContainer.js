import React from 'react';
const ButtonContainer = (props) => {
  return (
    <div className='buttons' style={{...props.style}}>
     {props.children}
    </div>
  );
};

export default ButtonContainer;
