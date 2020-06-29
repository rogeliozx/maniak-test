import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import PropTypes from 'prop-types';
function ValueLabel(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement='top' title={value}>
      {children}
    </Tooltip>
  );
}
ValueLabel.propTypes = {
  open: PropTypes.bool,
  value: PropTypes.number,
  children: PropTypes.any.isRequired,
};
export default ValueLabel;
