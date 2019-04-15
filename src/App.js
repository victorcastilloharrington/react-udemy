import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
class App extends Component {

  state = {
    persons: [
      {name: 'Vic', age:25},
      {name: 'Romi', age:31},
      {name: 'David', age: 27}
    ]
  }

  switchNameHandler = () =>{
    // console.log('Clikkkk');

    this.setState({
      persons: [
      {name: 'Victor', age:25},
      {name: 'Romi', age:31},
      {name: 'David', age: 79}
    ]
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>I'm a React App</h1>
          <p>This is really working</p>
          <button onClick={this.switchNameHandler}>Click Me</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Eating</Person>
          < Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </header>
      </div>
    );
  }
}

export default App;
