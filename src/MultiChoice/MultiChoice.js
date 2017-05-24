import React, { Component } from 'react'
import './MultiChoice.css';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Button } from 'react-materialize';



class MultiChoice extends Component {
  render (){
    return (
      <div className="green-background">
        {this.props.answers.map((answer, i) => <button  key={i} onClick={() => this.props.updateSelected(answer)}>{answer}</button>)}
        <br />
        <p> You have selected: {this.props.selectedAnswer}</p>
      <Button className="red-button" onClick={this.props.handleSubmit}>Submit</Button>
      </div>
    )
  }
}

MultiChoice.propTypes = {
  answers: PropTypes.array.isRequired,
  updateSelected: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
}

export default MultiChoice;
