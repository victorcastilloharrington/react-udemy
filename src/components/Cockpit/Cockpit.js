import React,{useEffect, useRef} from 'react';
import styles from './Cockpit.module.css';

const Cockpit = (props) => {
 
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    /* setTimeout(() => {
      alert('Saved Data to Cloud');
    }, 1000); */
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] Cleanup work');
    }
  }, []);

  let btnClass = null;  

  if(props.showPersons){
    btnClass = styles.red;
  }

  const classes = [];

  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }

  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }

return(
<div>
  <h1>I'm a React App</h1>
  <p className={classes.join(' ')}>This is really working</p>

  <button 
  ref={toggleBtnRef}
  className = {btnClass}
  onClick={props.clicked}>Click Me</button>
</div>
);
}

export default Cockpit;