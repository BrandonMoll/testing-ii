import React, { Component } from 'react';


class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <button name="strike" onClick={this.props.strikeHandler} data-testid="strikeButton"> Strike </button>
        <button name="ball" onClick={this.props.ballHandler} data-testid="ballButton"> Ball </button>
        <button name="foul" onClick={this.props.foulHandler} data-testid="foulButton"> Foul </button>
        <button name="hit" onClick={this.props.hitHandler} data-testid="hitButton"> Hit </button>
      </div>
    );
  }
}

export default Dashboard;