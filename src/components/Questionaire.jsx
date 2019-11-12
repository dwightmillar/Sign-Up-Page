import React from 'react';
import Panel from './Panel.jsx';
import { Link } from 'react-router-dom';

export default class Questionaire extends React.Component {
  constructor() {
    super();
    this.state = {
      questionCount: 0,
      activeAnswers: 0
    }
    this.updateActiveAnswerCount = this.updateActiveAnswerCount.bind(this);
  }

  updateActiveAnswerCount() {
    this.setState({activeAnswers: this.state.activeAnswers + 1})
  }

  render() {
    var questions = [];

    var nextButton =
      <a>
        <button className="btn btn-primary disabled">Next</button>
      </a>;


    questions.push(
        <Panel
          addAnswer={this.updateActiveAnswerCount}
          type="questionaire"
          image={<img src={require('../images/CreditScore.png')}></img>} //using props breaks require in Question.jsx
          heading="What is your credit score?"
          text="This information is used to fetch appropriate offers and will not be saved."
          answers={['Poor', 'Good', 'Excellent']}>
        </Panel>
    );

    if (this.state.questionCount !== questions.length) {
      this.setState({questionCount: questions.length});
    }

    if (this.state.questionCount === this.state.activeAnswers) {
      nextButton =
      <Link to={'/offers'}>
        <button className="btn btn-primary">Next</button>
      </Link>
    }

    return (
      <React.Fragment>
        <h1 className="title">Let's get started!</h1>
        <div id="questionaire" className="container-fluid">
            {questions}
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6">
              {nextButton}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
