import React, { Component } from 'react';
import Display from './components/display';
import Dashboard from './components/dashboard';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      strikes: 0,
      balls: 0
    }
  }

  strikeHandler = (e) => {
    if(this.state.strikes === 2) {
      alert("3 strikes! You\'re out")
      this.setState({
        strikes: 0,
        balls: 0
      })
    } else {
      this.setState({ strikes: this.state.strikes + 1 })
    }
  }

  ballHandler = (e) => {
    if(this.state.balls === 3) {
      alert('Walk!')
      this.setState({ strikes: 0, balls: 0})
    } else {
      this.setState({ balls: this.state.balls + 1 })
    }
  }

  foulHandler = (e) => {
    if(this.state.strikes === 2 ) {
      alert("Foul Ball! 2 Strikes")
    } else {
      this.setState({ strikes: this.state.strikes + 1 })
    }
  }

  hitHandler = (e) => {
    alert('Base hit!');
    this.setState({ strikes: 0, balls: 0 })
  }


  render() {
    return (
      <div className="App">
        <Display strikes={this.state.strikes} balls={this.state.balls} />
        <Dashboard 
          strikeHandler={this.strikeHandler} 
          ballHandler={this.ballHandler} 
          foulHandler={this.foulHandler}
          hitHandler={this.hitHandler} />
      </div>
    );
  }
}

export default App;
