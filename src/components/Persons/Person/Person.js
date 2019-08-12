import React, {Component} from 'react';
import styles from './Person.module.css';


class Person extends Component {

  render(){
    return (
    <div className={styles.Person}>
      <p onClick={this.props.click} >I'm {this.props.name} and I'm {this.props.age} years old!</p>
      <p>{this.props.children}</p>
      <input onChange={this.props.changed} type="text" value={this.props.name}/>
    </div>
  )
  }
  
};

export default Person;

// const person = (props) => {
//   return (
//     <div className={styles.Person}>
//       <p onClick={props.click} >I'm {props.name} and I'm {props.age} years old!</p>
//       <p>{props.children}</p>
//       <input onChange={props.changed} type="text" value={props.name}/>
//     </div>
//   )
// }

// export default person;