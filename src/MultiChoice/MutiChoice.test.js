import React from 'react';
import ReactDOM from 'react-dom';
import MultiChoice from './MultiChoice';
import App from '../App/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MultiChoice
    answers={['hello']}
    updateSelected={App.updateSelected}
    handleSubmit={App.submitAnswer}
    selectedAnswer={App.selected} />, div);
});
