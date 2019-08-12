import React from 'react';
import styles from './Person.module.css';

const person = (props) => {
  return (
    <div className={styles.Person}>
      <p onClick={props.click} >I'm {props.name} and I'm {props.age} years old!</p>
      <p>{props.children}</p>
      <input onChange={props.changed} type="text" value={props.name}/>
    </div>
  )
}

export default person;