import React, { Component } from 'react';


class Display extends Component {
  render() {
    return (
      <div className="Display">
        <div className="strikes" data-testid="displayStrikes">{this.props.strikes}</div>
        <div className="balls" data-testid="balls">{this.props.balls} Balls </div>
      </div>
    );
  }
}

export default Display;