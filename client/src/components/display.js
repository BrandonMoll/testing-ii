import React, { Component } from 'react';


class Display extends Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (
      <div className="Display">
        <div className="strikes" data-testid="displayStrikes">{this.props.strikes}</div>
        <div className="balls" data-testid="displayBalls">{this.props.balls} Balls </div>
      </div>
    );
  }
}

export default Display;