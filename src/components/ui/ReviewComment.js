import React, { Fragment } from 'react';
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

export default ReviewComment;
