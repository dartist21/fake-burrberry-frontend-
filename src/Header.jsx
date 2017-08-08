import React, { Component } from 'react';
import logo from './assets/img/logo.svg';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <a href="#">
          <img src={logo} className="logo" alt="logo" />
        </a>
      </header>
    );
  }
}

export default Header;
