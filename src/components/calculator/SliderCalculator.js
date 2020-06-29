import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from '@material-ui/core/Slider';
import GroupIcon from '@material-ui/icons/Group';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Description from '../ui/Description';
import ValueLabel from './ValueLabel';

const styleSlider = {
  input: {
    width: '10rem',
  },
};
const SliderCalculator = (props) => {
  const { calculate } = props;
  const [value, setValue] = useState(props.min ? props.min : 0);
  useEffect(() => {
    calculate(value);
  }, [value, calculate]);
  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : parseFloat(event.target.value));
  };
  const handleSliderChange = (event, newValue) => {
    setValue(() => newValue);
  };
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };
  return (
    <div className='columns is-multiline'>
      <div className='column is-half'>
        <Description>Monthly ingredient spending</Description>
      </div>
      <div className='column is-half'>
        <div className='control has-icons-left has-icons-right'>
          <input
            style={styleSlider.input}
            value={value}
            margin='dense'
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputprops={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
            className='input'
            type='number'
            placeholder='Employees'
          />
          <span className='icon is-small is-left'>
            {props.money ? <AttachMoneyIcon /> : <GroupIcon />}
          </span>
          <span className='icon is-small is-right'>
            <i className='fas fa-check'></i>
          </span>
        </div>
      </div>
      <div className='column'>
        <Slider
          value={typeof value === 'number' ? value : 0}
          onChange={handleSliderChange}
          ValueLabelComponent={ValueLabel}
          aria-labelledby='input-slider'
          max={props.max ? props.max : 100}
          min={props.min ? props.min : 0}
        />
      </div>
    </div>
  );
};
SliderCalculator.propTypes = {
  calculate: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  style: PropTypes.object,
  money: PropTypes.any,
};
export default SliderCalculator;
