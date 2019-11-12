import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const APIurl = "https://kettle-assess.glitch.me/definition";


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      url: APIurl,
      searchTerm: null,
      searchURL: null,
      definition: null
    };
  }

  handleClick(){
    // this.setState({
    //   searchTerm: "boo"
    // });

    fetch(this.state.url + "?word=" + this.state.searchTerm)
      .then((res) => { return res.json(); })
      .then((data) => {
        this.setState({
          definition: data.definition
        });

        console.log(data.definition);

      });
  }



   onValueChange() {
      this.setState({searchTerm: document.querySelector('input').value});
      console.log(this.state.searchTerm);
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
      <input type="text" class="form-control" placeholder="Search for word" 
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



// const exampleData = { word: 'pork' };


// var head = {
//   method: 'POST', 
//   // mode: 'no-cors',
//   body: exampleData,
//   headers: new Headers()
// };