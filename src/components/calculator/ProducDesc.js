import React from 'react';
const ProducDesc = (props) => {
  const descStyle = {
    container: {
      width: '25rem',
    },
    p: {
      color: '#161616',
      fontFamily: 'Roboto',
      texAlign: 'justify',
    },
  };
  return (
    <div style={{ ...descStyle.container, ...props.style }}>
      <p
        className='subtitle is-5'
        style={{ ...descStyle.p, ...props.descStyle }}
      >
        {props.children}
      </p>
    </div>
  );
};

export default ProducDesc;
