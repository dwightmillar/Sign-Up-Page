import React from "react";
import { Route } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import Registration from './Registration.jsx';
import Questionaire from './Questionaire.jsx';
import Offers from './Offers.jsx';
import Header from './Header.jsx';

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Header />

        <Route exact path="/" render={() => <Redirect to='/register' />} />

        <Route path="/register" render={(props) => (
          <Registration {...props} />
        )} />

        <Route path="/questionaire" render={(props) => (
          <Questionaire {...props} />
        )} />

        <Route path="/offers" render={(props) => (
          <Offers {...props} />
        )} />

      </React.Fragment>
    )
  }
}

export default withRouter(App);
