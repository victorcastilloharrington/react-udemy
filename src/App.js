import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    persons: [
      {id: 'asdfd_1', name: 'Vic', age:25},
      {id: 'asdfd_2', name: 'Romi', age:31},
      {id: 'asdfd_3', name: 'David', age: 27}
    ],
    inputCount: null,
    inputString: ''
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
  
  countInputHandler = (event) => {
    this.setState({
      inputCount : event.target.value.length,
      inputString: event.target.value
    });
  }

  deleteCharHandler = (charIndex) => {
    
    const charArray = [...this.state.inputString.split('')];
    charArray.splice(charIndex, 1);
    this.setState({
      inputString: charArray.join(''),
      inputCount: charArray.length
    });
    
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
    let chars = '';

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

    if(this.state.inputString !== ''){
      let charArray = this.state.inputString.split('');

      chars = (
        <div>
        {charArray.map((char, index) => {
            return <Char aChar={char} key={index} click={(event) => this.deleteCharHandler(index) }/> 
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
          <br/><input type="text" onChange={(event) => this.countInputHandler(event)} value={this.state.inputString}/>
          <p>{this.state.inputCount}</p>
          {persons}

          <Validation inLength={this.state.inputCount} />
          {chars}
        </header>
      </div>
    );
  }
}

export default App;
