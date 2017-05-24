import React, { Component } from 'react';
import './App.css';
import Question from '../Question/Question';
// import ProgressBar from '../ProgressBar/ProgressBar';
import MultiChoice from '../MultiChoice/MultiChoice';
import Results from '../Results/Results';
import CircularProgressbar from 'react-circular-progressbar';
// import {Card, Button, Col, Row} from 'react-materialize';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'None yet!',
      score: 0,
    };

    this.updateSelected = this.updateSelected.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);



    this.quiz_data = [
      {
        question: 'What is the meaing of life?',
        correct_answer: '42',
        possible_answers: ['Love', 'Money', 'Javascript', '42']
      },
      {
        question: 'Who is the best coding Youtuber?',
        correct_answer: 'FunFunFunction',
        possible_answers: ['CodingTrain', 'YoungLamb', 'WesBos', 'FunFunFunction']
      }
    ]
  }

  submitAnswer(){
    if (this.state.selected === this.quiz_data[this.state.progress].correct_answer){
      this.setState({
        score: this.state.score + 1,
        progress: this.state.progress + 1,
        selected: 'None yet!'
      })
    } else {
      this.setState({
        progress: this.state.progress + 1
      })
    }
  }

  updateSelected(answer) {
    this.setState({
      selected: answer
    })
  }

  restartQuiz (){
    this.setState ({
      progress: 0,
      selected: 'None yet!',
      score: 0,
    })
  }


  render() {
    return (
      <div>
        <h2 className="quiz-title">Quiz App</h2>
        <CircularProgressbar percentage={this.state.progress / this.quiz_data.length * 100}  />

        {this.state.progress < this.quiz_data.length ? (
          <div>
            <Question current_question={this.quiz_data[this.state.progress].question}/>
            <MultiChoice
              answers={this.quiz_data[this.state.progress].possible_answers}
              updateSelected={this.updateSelected}
              handleSubmit={this.submitAnswer}
              selectedAnswer={this.state.selected} />
          </div>
        )
        : (
        <Results score={this.state.score}
          end_message="Congratulations, you have finished!"
          handleRestart={()=> this.restartQuiz()}/>
         )}
      </div>
    );
  }
}

export default App;
