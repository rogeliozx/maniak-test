import React from 'react';
import PropTypes from 'prop-types';
const ButtonContainer = (props) => {
  return (
    <div className='buttons' style={{...props.style}}>
     {props.children}
    </div>
  );
};
ButtonContainer.propTypes = {
  children: PropTypes.any.isRequired,
  style: PropTypes.object,
};

export default ButtonContainer;
