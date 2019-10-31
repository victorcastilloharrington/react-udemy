import React, { Component} from 'react';
import styles from './App.module.css';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';


class App extends Component {

  state = {
    persons: [
      {id: 'asdfd_1', name: 'Vic', age:25},
      {id: 'asdfd_2', name: 'Romi', age:31},
      {id: 'asdfd_3', name: 'David', age: 27}
    ],
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }


  deletePersonHandler = (personsIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personsIndex, 1);
    this.setState({persons:persons})
  }

  nameChangeHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex( p => {
        return p.id === id;
      });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value; 

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => { 
      return {
        persons: persons, 
      changeCounter: prevState.changeCounter + 1
      };    
    });
  }
  

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  loginHandler = () => {
    const currentLog = this.state.authenticated;
    this.setState({authenticated : !currentLog});
  }

  render() {
    
    let persons = null;

    if (this.state.showPersons){
      persons = 
        <Persons
        persons={this.state.persons} 
        clicked={this.deletePersonHandler} 
        changed={this.nameChangeHandler} />
      ;
    }

    return (
      <withClass classes={styles.App}>
        <AuthContext.Provider value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler}}>
          <Cockpit clicked={this.togglePersonsHandler} showPersons={this.state.showPersons} persons={this.state.persons} />
          {persons}
        </AuthContext.Provider>
      </withClass>
    );
  }
}

// export default App;
export default withClass(App, styles.App);
