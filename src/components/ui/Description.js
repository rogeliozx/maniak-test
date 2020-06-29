import React from 'react';
import PropTypes from 'prop-types';
const Description = (props) => {
  const descStyle = {
    container: {
        width:'10rem'
    },
    p: {
      color: '#161616',
      fontWeight: 'bold',
      fontFamily: 'Roboto',
      texAlign: 'justify',
    },
  };
  return (
    <div style={{...descStyle.container,...props.style}}>
      <p
        className='subtitle is-6'
        style={{ ...descStyle.p, ...props.descStyle }}
      >
        {props.children}
      </p>
    </div>
  );
};
Description.propTypes = {
  children: PropTypes.string.isRequired,
  style: PropTypes.object,
  descStyle: PropTypes.object,
};
export default Description;
