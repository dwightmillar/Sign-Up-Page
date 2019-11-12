import React from 'react';
import Panel from './Panel.jsx';

export default class Questionaire extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="title">Thanks for signing up!</h1>
        <div id="offers" className="container-fluid">
          <Panel
            type="offer"
            image={<img src={require('../images/gavel.png')}></img>} //using props breaks require in Question.jsx
            heading="Are you having legal issues?"
            text="We can help you find an expert that can help you with any Auto
            accident, Personal Injury, or Workers Comp issues. Get the money you
            deserve now!">
          </Panel>
        </div>
      </React.Fragment>
    )
  }
}
