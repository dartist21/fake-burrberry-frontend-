import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.svg';
import Hamburger from './Hamburger';
import { ToMedium, Medium } from '../Common/BreakPoints';
import CountrySelector from '../Common/CountrySelector';
import Menu from './Menu';

const Header = styled.header`
  padding: 1.125rem 0;
  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0 0 0;
  }
  @media screen and (min-width: 62rem) {
    padding-top: 2rem;
  }
`;

const Logo = styled.img`
  display: block;
  margin: auto;
  height: .75rem;

  @media screen and (min-width: 48rem) {
    height: 1rem;
  }
`;

const Navigation = styled.nav`
  text-align: center;
  margin-top: 1.5rem;

  @media only screen and (min-width: 62rem) {
    margin-top: 2rem;
  }
`;

const countries = ['United Kingdom (£)', 'Russian Federation (₽)'];

export default function () {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="row">
              <div className="col-xs-2 col-md-4">
                <ToMedium>
                  <Hamburger />
                </ToMedium>
                <Medium>
                  <CountrySelector countries={countries} />
                </Medium>
              </div>
              <div className="col-xs-8 col-md-4">
                <Link to="/">
                  <Logo alt="logo" src={logo} />
                </Link>
              </div>
              <Medium>
                <div className="col-xs-12">
                  <Navigation>
                    <Menu />
                  </Navigation>
                </div>
              </Medium>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
}
