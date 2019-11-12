import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div>
        <h1>Word Bank!</h1>
        <Input />
        <Button />
        <WordBank word="shoe" definition="a thing you wear." /> 
      </div>
    );
  }
}



class Input extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <input type="text" class="form-control" placeholder="Search for word" />
    );
  }
}


class Button extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <button>Get word</button>
    );
  }
}



class WordBank extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      word: this.props.word,
      definition: this.props.definition
    };
  }
  render(){
    return(
      <div>
        <div class="container">
          <div class="row">word: {this.state.word}</div>
          <div class="row">definition: {this.state.definition}</div>
        </div>
      </div>
    );
  }
}




ReactDOM.render(<App />, document.getElementById('root'));
