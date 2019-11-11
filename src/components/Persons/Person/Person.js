import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Person.module.css';
import withClass from '../../../hoc/WithClass';
import AuthContext from '../../../context/auth-context';


class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount(){
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render(){
    return (
    <div className={styles.Person}>
          {this.context.authenticated ? <p>authenticated!</p> : <p>Please Log IN</p>}
      <p onClick={this.props.click} >I'm {this.props.name} and I'm {this.props.age} years old!</p>
      <p>{this.props.children}</p>
      <input onChange={this.props.changed} 
      type="text" 
      value={this.props.name}
      ref={this.inputElementRef}/>
    </div>
  )
  }
  
};

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person);

// export default Person;

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