import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to={"/register"}>
          <img src={require('../images/logo.png')}></img>
        </Link>
      </header>
    )
  }
}
