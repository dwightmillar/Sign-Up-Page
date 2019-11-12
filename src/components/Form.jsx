import React from 'react';
import { Link } from 'react-router-dom';

export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      suite: '',
      city: '',
      state: '',
      ZIP: ''
    }
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value});
  }

  render() {
    var registerButton = null;

    if(this.state.firstName && this.state.lastName && this.state.email && this.state.address && this.state.city && this.state.state && this.state.ZIP) {

      registerButton =
      <Link to={"/questionaire"}>
        <button className="btn btn-primary">Register</button>
      </Link>

      } else {
        registerButton =
          <a>
            <button className="btn btn-primary disabled">Register</button>
          </a>
      }

    return (
      <React.Fragment>
        <div id="form">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 title">
                <h1>Sign up today!</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label for="firstName">First Name*</label>
                <input id="firstName" type="text" value={this.state.firstName} onChange={this.updateInput}></input>
              </div>
              <div className="col-6">
                <label for="lastName">Last Name*</label>
                <input id="lastName" type="text" value={this.state.lastName} onChange={this.updateInput}></input>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label for="email">Email*</label>
                <input id="email" type="text" value={this.state.email} onChange={this.updateInput}></input>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label for="address">Street Address*</label>
                <input id="address" type="text" value={this.state.address} onChange={this.updateInput}></input>
              </div>
              <div className="col-6">
                <label for="suite">Apt, Suite, Other</label>
                <input id="suite" type="text" value={this.state.suite} onChange={this.updateInput}></input>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label for="city">City*</label>
                <input id="city" type="text" value={this.state.city} onChange={this.updateInput}></input>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <label for="state">State*</label>
                <input id="state" type="text" value={this.state.state} onChange={this.updateInput}></input>
              </div>
              <div className="col-6">
                <label for="ZIP">ZIP Code*</label>
                <input id="ZIP" type="text" value={this.state.ZIP} onChange={this.updateInput}></input>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              * = required
            </div>
          </div>

          <div className="row">
            <div className="col-6"></div>
              {registerButton}
            </div>
          </div>

      </React.Fragment>
    )
  }
}
