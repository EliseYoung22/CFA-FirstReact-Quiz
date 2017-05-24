import React, { Component } from 'react';
import './ProgressBar.css';
import PropTypes from 'prop-types';



class ProgressBar extends Component {
  render () {
    return <p>{this.props.current_step}/{this.props.question_length}</p>
  }
}

//stateless component
//this refers to an object

// const ProgressBar = ({current_step, question_lenth}) => {
//   return
//   <p>{current_step}/{question_lenth}</p>
// }

ProgressBar.propTypes = {
  current_step: PropTypes.number.isRequired,
  question_length: PropTypes.number.isRequired
}

export default ProgressBar;
