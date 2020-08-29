import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: 'Hello,'
  }

  inputChangeHandler = (event) => {
    let inputText = event.target.value;
    this.setState({
      text: inputText
    })
  }

  deleteCharHandler = (index) => {
    let charsArr = this.state.text.split('');
    charsArr.splice(index, 1);
    let text = charsArr.join('');
    this.setState({
      text: text
    })
  }


  render() {

    let arrText = this.state.text.split('');
    let listCharRender = arrText.map((item, index) => {
      return <CharComponent char={item} click={() => this.deleteCharHandler(index)}/>
    });

    return (
      <div className="App">
        {/* <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p> */}
        <input onChange={(event) => this.inputChangeHandler(event)} value={this.state.text} />
        <p>{this.state.text.length}</p>
        <ValidationComponent length={this.state.text.length} />
        {listCharRender}
      </div>
    );
  }
}

export default App;
