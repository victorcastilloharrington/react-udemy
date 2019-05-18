import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    inputCount: null,
    inputString: ''
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

    let chars = '';  

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


          <input type="text" onChange={(event) => this.countInputHandler(event)} value={this.state.inputString}/>
          <p>{this.state.inputCount}</p>
          <Validation inLength={this.state.inputCount} />
          {chars}
        </header>
      </div>
    );
  }
}

export default App;
