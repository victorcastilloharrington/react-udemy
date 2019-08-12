import React, { Component } from 'react';
import styles from './App.module.css';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      {id: 'asdfd_1', name: 'Vic', age:25},
      {id: 'asdfd_2', name: 'Romi', age:31},
      {id: 'asdfd_3', name: 'David', age: 27}
    ],
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

    this.setState({ persons: persons });
  }
  

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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
      <div className={styles.App}>
          <Cockpit clicked={this.togglePersonsHandler} showPersons={this.state.showPersons} personsLength={this.state.persons.length} />
          {persons}
      </div>
    );
  }
}

export default App;
