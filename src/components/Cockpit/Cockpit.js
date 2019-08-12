import React from 'react';
import styles from './Cockpit.module.css';

const Cockpit = (props) => {
  let btnClass = null;

  if(props.showPersons){
    btnClass = styles.red;
  }

  const classes = [];

  if (props.personsLength <= 2) {
    classes.push(styles.red);
  }

  if (props.personsLength <= 1) {
    classes.push(styles.bold);
  }

return(
<div>
  <h1>I'm a React App</h1>
  <p className={classes.join(' ')}>This is really working</p>

  <button 
  className = {btnClass}
  onClick={props.clicked}>Click Me</button>
</div>
);
}

export default Cockpit;