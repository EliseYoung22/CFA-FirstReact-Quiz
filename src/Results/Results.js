import React, { Component } from 'react';
import './Results.css';
import PropTypes from 'prop-types';

class Results extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.end_message}</h1>
        <p> You score was:{this.props.score}</p>
        <button className="button" onClick={this.props.handleRestart}>Retry</button>
      </div>
    )
  }
}

Results.propTypes = {
  end_message: PropTypes.string,
  score: PropTypes.number.isRequired,
  handleRestart: PropTypes.func.isRequired
}

Results.defaultProps = {
  end_message: 'Congratulations!!!'
}

export default Results;
