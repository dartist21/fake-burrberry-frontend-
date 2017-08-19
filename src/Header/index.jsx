import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from '../assets/img/logo.svg';
import arrow from '../assets/img/arrow.svg';
import Hamburger from './Hamburger';
import { ToMedium, Medium } from '../Product/Show/BreakPoints';
import Menu from './Menu';

const Header = styled.header`
  padding: 1.125rem 0;
  @media screen and (min-width: 48rem) {
    padding: 1.5rem 0 0 0;
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

const Shopping = styled.button`
  vertical-align: middle;
  position: relative;
  padding: 0;
  padding-right: 1.25rem;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.34;
  color: #999999;
  background: transparent;
  border: none;
  &:after {
    content: "";
    top: 25%;
    position: absolute;
    right: 0;
    width: 12px;
    height: 6px;
    background: url(${arrow}) no-repeat;
    background-size: contain;
  }
`;

const Navigation = styled.nav`
  text-align: center;
  margin-top: 1.5rem;

  @media only screen and (min-width: 62rem) {
    margin-top: 2rem;
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
                <ToMedium>
                  <Hamburger />
                </ToMedium>
                <Medium>
                  <Shopping>Shopping in: United Kingdom (£)</Shopping>
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
