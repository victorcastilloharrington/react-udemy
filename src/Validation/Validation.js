import React from 'react';

const validation = (props) => {
  return (    
    <div>      
      <p>
       { props.inLength < 5 ?
          'text too short'
          :
          'text long enough'
       }
      </p>
    </div>
  )
}

export default validation;