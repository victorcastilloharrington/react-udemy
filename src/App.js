import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person';

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

    const style = {
      backgroundColor: '#20cc55',
      font: 'inherit',
      border: '2px solid #5fb0ff',
      borderRadius: '5px',
      padding: '8px',
      cursor: 'pointer',
      color: '#fff',
      fontWeight: 'bold'
    };

    let persons = null;

    if (this.state.showPersons){
      persons = (
      <div>
        {this.state.persons.map((person,index) => {
          return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)} />
        })}
      </div>
          );
      
          style.backgroundColor = 'rgb(228, 43, 43)';
    }

    const classes = [];

    if (this.state.persons.length <= 2){
      classes.push('red');
    }

    if (this.state.persons.length <= 1){
      classes.push('bold');
    }
    console.log(classes);
    return (
      <div className="App">
        <header className="App-header">
          <h1>I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working</p>

          <button 
          style ={style}
          onClick={this.togglePersonsHandler}>Click Me</button>
          <p>{this.state.inputCount}</p>
          {persons}
        </header>
      </div>
    );
  }
}

// export default App;
export default Radium(App);
