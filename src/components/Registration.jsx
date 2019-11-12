import React from 'react';
import Form from './Form.jsx';

export default class Registration extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="registration" className="container-fluid">
          <div className="row" style={{ height: 100 + '%' }}>
            <div className="col-6 main">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 title">
                    <h1>What is this?</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h4>FinanceDoneRight gives pre-qualified offers from our network of
                      approved partners. Complete the form to start saving money now!
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    &nbsp;
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h2>Quick</h2>
                    <h4>We won't waste your time. Complete the form and start saving!</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    &nbsp;
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h2>Secure</h2>
                    <h4>We don't store your personal information or data.</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    &nbsp;
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <h2>Harmless</h2>
                    <h4>FinanceDoneRight will not negatively affect your credit in any way.</h4>
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 main">
              <Form {...this.props}/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
