import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url: "https://kettle-assess.glitch.me/definition",
      searchTerm: null,
      definition: null
    };
  }

  handleClick(){
    
    /* 
      I know this is a crappy way to call the API, but I'm not gonna spend all day
      figuring out how to get past the CORS problem.
    */

    fetch(this.state.url + "?word=" + this.state.searchTerm)
      .then((res) => { return res.json(); })
      .then((data) => {
        this.setState({
          definition: data.definition
        });
      });
  }



   onValueChange() {

      // I know this isn't the React way, I'm sure it's something mind-numbingly simple. But I'm pressed for time and I gotta head to jiu jitsu. 

      this.setState({
        searchTerm: document.querySelector('input').value, 
        definition: null
      });
   }

  render(){
    return(
      <div>
        <h1>Word Bank!</h1>
        <Input onValueChange={() => this.onValueChange()} />
        <Button onClick={() => {this.handleClick()}}/>
        <WordBank word={this.state.searchTerm} definition={this.state.definition} /> 
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
      <input  type="text"
              class="form-control"
              placeholder="Search for word" 
              onChange={this.props.onValueChange}  
      />
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
      <button onClick={this.props.onClick}>Get word</button>
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
          <div class="row">word: {this.props.word}</div>
          <div class="row">definition: {this.props.definition}</div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));
