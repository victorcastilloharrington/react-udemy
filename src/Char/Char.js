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
    <div>
      <p style={styles}>{props.aChar}</p>
    </div>
  )
};

export default char;