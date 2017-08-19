import React from 'react';
import styled from 'styled-components';

import logo from '../assets/img/logo.svg';
import Hamburger from './Hamburger';

const Header = styled.header`
  padding: 1.125rem 0;
  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0;
  }
  @media screen and (min-width: 62rem) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const Logo = styled.img`
  display: block;
  margin: auto;
  height: .75rem;

  @media screen and (min-width: 62rem) {
    height: 1rem;
  }
`;

export default function () {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-2 col-md-4">
                <Hamburger />
              </div>
              <div className="col-xs-8 col-md-4">
                <a href="">
                  <Logo alt="logo" src={logo} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}
