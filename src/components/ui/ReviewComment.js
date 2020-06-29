import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
const ReviewComment = (props) => {
  const titleStyle = {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  };
  return (
    <Fragment>
      <p className='title is-4' style={titleStyle}>
      "{props.children}"
      </p>
    </Fragment>
  );
};
ReviewComment.propTypes = {
  children: PropTypes.string.isRequired,
};
export default ReviewComment;
