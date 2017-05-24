import React from 'react';
import ReactDOM from 'react-dom';
import MultiChoice from './MultiChoice';
import App from '../App/App';

it('renders without crashing', () => {
  const sample_data = [
    {
      question: 'What is the meaing of life?',
      correct_answer: '42',
      possible_answers: ['Love', 'Money', 'Javascript', '42']

    }
  ]
  const div = document.createElement('div');
  ReactDOM.render(<MultiChoice
    answers={['hello']}
    updateSelected={App.updateSelected}
    handleSubmit={App.submitAnswer}
    selectedAnswer={App.selected} />, div);
});
