import React from 'react';
import Colors from '../../constants/Colors';
const BadgeStyle = {
  borderRadius: 0,
  minHeight: '3rem',
  backgroundColor: Colors.primary,
  fontWeight: '600',
  fontFamily: 'Cormorant Garamond',
  padding: '0.5rem',
  color:'white',
  width:'4rem',
  margin:0
};
const BadgeContainer = (props) => {
  return (
    <span className='has-text-centered subtitle  is-5' style={{ ...BadgeStyle, ...props.titleStyle }}>{props.children}</span>
  );
};

export default BadgeContainer;
