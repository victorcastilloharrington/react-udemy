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

  switchNameHandler = (newName) =>{

    this.setState({
      persons: [
      {name: newName, age:25},
      {name: 'Romi', age:31},
      {name: 'David', age: 79}
    ]
    })
  }

  nameChangeHandler = (event) =>{
    this.setState({
      persons: [
        {name: 'Vic', age:25},
        {name: event.target.value, age:31},
        {name: 'David', age: 27}
    ]
    })
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


    return (
      <div className="App">
        <header className="App-header">
          <h1>I'm a React App</h1>
          <p>This is really working</p>

          <button 
          style ={style}
          onClick={() => this.switchNameHandler('VicVic')}>Click Me</button>

          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>

          <Person 
          click={this.switchNameHandler.bind(this, 'VNWK')}
          changed={this.nameChangeHandler}
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}>My Hobbies: Fighting, Watching Movies</Person>

          < Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
        </header>
      </div>
    );
  }
}

export default App;
