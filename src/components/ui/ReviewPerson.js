import React from 'react';
import PropTypes from 'prop-types';
const ReviewPerson = (props) => {
  const titleStyle = {
    name: {
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      fontFamily: 'Roboto',
    },
    position: {
      color: '#a5a5a5',
      fontFamily: 'Roboto',
    },
  };
  return (
    <div style={props.style}>
      <h3 
        className='subtitle is-3 is-capitalized'
        style={{ ...titleStyle.name, ...props.nameStyle }}
      >
        {props.name}
      </h3>
      <h5
        className='subtitle is-6 is-capitalized'
        style={{ ...titleStyle.position, ...props.positionStyle }}
      >
        {props.position}
      </h5>
    </div>
  );
};
ReviewPerson.propTypes = {
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.object,
  positionStyle: PropTypes.object,
  nameStyle: PropTypes.object,
};
export default ReviewPerson;
