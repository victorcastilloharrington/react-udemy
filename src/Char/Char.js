import React from 'react';

const styles = {
  display: 'inline-block',
  padding: '16px',
  textAlign: 'center',
  margin: '16px',
  border: '1px solid #000'
};

const char = (props) => {
  return(
      <p style={styles} onClick={props.click}>{props.aChar}</p>
  )
};

export default char;