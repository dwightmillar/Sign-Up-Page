import React from 'react';

export default class Panel extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      activeAnswer: '',
      display: ''
    }
    this.setAnswer = this.setAnswer.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  setAnswer(event) {
    this.setState({ activeAnswer: event.currentTarget.id });
    if(!this.state.activeAnswer) {
      this.props.addAnswer();
    }
  }

  deleteQuestion(event) {
    console.log('clicked offer - ' + event.currentTarget.id)
    this.setState({ display: 'no'});
  }

  render() {
    const answerButtons = [];

    if (this.props.type === 'questionaire') {
      for (let answer in this.props.answers) {
        answerButtons.push(
          <button key={answer} id={answer} className={this.state.activeAnswer === answer ? "btn btn-warning" : "btn btn-secondary"}
            onClick={this.setAnswer}>
            {this.props.answers[answer]}
          </button>
        );
      }
    } else {
      answerButtons.push(
        <button key="1" id="yes" className="btn btn-light"
          onClick={this.deleteQuestion}>
          <i className="fa fa-check"></i>
          Yes
        </button>
      );
      answerButtons.push(
        <button key="0" id="no" className="btn btn-dark"
          onClick={this.deleteQuestion}>
          <i className="fa fa-times"></i>
          No
        </button>
      );
    }

    if(this.state.display === 'no') {
      return null;
    }

    return (
      <div id="panel" className="col-12 container-fluid">
        <div className="row">
          <div className="col-4">
            {this.props.image}
          </div>
          <div className="col-8">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
            {answerButtons}
          </div>
        </div>
      </div>
    )
  }
}
