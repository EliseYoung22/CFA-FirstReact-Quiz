import React, { Component } from 'react';
import './Results.css';

class Results extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.end_message}</h1>
        <p> You score was:{this.props.score}</p>
        <button onClick={this.props.handleRestart}>Retry</button>
      </div>
    )
  }
}

export default Results;
