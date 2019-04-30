import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  state = {
    persons: [
      {id: 'asdfd_1', name: 'Vic', age:25},
      {id: 'asdfd_2', name: 'Romi', age:31},
      {id: 'asdfd_3', name: 'David', age: 27}
    ]
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
      backgroundColor: '#fff',
      font: 'inherit',
      border: '2px solid #5fb0ff',
      borderRadius: '5px',
      padding: '8px',
      cursor: 'pointer'
    }

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
          )
    }


    return (
      <div className="App">
        <header className="App-header">
          <h1>I'm a React App</h1>
          <p>This is really working</p>

          <button 
          style ={style}
          onClick={this.togglePersonsHandler}>Click Me</button>

          {persons}
        </header>
      </div>
    );
  }
}

export default App;
