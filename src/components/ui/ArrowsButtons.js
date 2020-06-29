import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Button from '@material-ui/core/Button';
import Colors from '../../constants/Colors';
const ArrowsButtons = (props) => {
  const {operation}=props;
    const styleArrow={
        button:{
            borderRadius:0,
            minHeight:'3rem',
            backgroundColor:Colors.primary
        },
        arrow:{
          color:'white'
        }
    }
  const kidArrow= props.arrow ? props.arrow :'FORWARD';
  let Arrow;
  if (kidArrow.toUpperCase() === 'BACK') {
    Arrow = ArrowBackIcon;
  } else {
    Arrow = ArrowForwardIcon;
  }

  return (
    <Button style={{...styleArrow.button,...props.style}} onClick={()=>{
      if(kidArrow.toUpperCase()==='BACK'){
      return  operation(-1);
      }
     return operation(+1)
    }}>
      <Arrow style={{...styleArrow.arrow,...props.arrowStyle}}/>
    </Button>
  );
};

export default ArrowsButtons;
