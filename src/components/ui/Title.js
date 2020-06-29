import React from 'react';
import PropTypes from 'prop-types';
const Title = (props) => {
  const titleStyle = {
    backgroundColor: '#071eb3',
    color: '#ffffff',
    fontWeight: '900',
    fontFamily: 'Roboto',
    texAlign: 'center',
    display: 'inline',
    transform:' translate(-50%, -50%)',
    padding: '0.5rem',
  };
  return (
    <div style={props.style}>
      <h1
        className={`title is-${props.size}`}
        style={{ ...titleStyle, ...props.titleStyle }}
      >
        {props.children}
      </h1>
    </div>
  );
};
Title.propTypes = {
  children: PropTypes.string.isRequired,
  size: PropTypes.number,
  style: PropTypes.object,
  titleStyle: PropTypes.object,
};
export default Title;
