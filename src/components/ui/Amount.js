import React from 'react';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Colors from '../../constants/Colors';
import PropTypes from 'prop-types';

const amountStyles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    aligItems: 'center',
    textAlign: 'center',
    marginRight: '3rem',
  },
  item: {
    marginTop: '1.5rem',
  },
  textStyle: {
    color: Colors.primary,
    fontFamily: 'Roboto',
  },
  titleFont: {
    fontSize: '4rem',
  },
};
const Amount = (props) => {
  return (
    <div style={amountStyles.container}>
      <div style={amountStyles.item}>
        <span style={{ ...amountStyles.textStyle, ...props.textColor }}>
          <AttachMoneyIcon fontSize='large' />
        </span>
      </div>
      <div>
        <h2
          className='title'
          style={{
            ...amountStyles.titleFont,
            ...amountStyles.textStyle,
            ...props.textColor,
          }}
        >
          {props.children}
        </h2>
      </div>
    </div>
  );
};
Amount.propTypes = {
  children: PropTypes.any.isRequired,
  textColor: PropTypes.object,
};
export default Amount;
