import React from 'react';
import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

import { Large } from '../Common/BreakPoints';

const Navigation = styled.div`
  display: none;
  margin-bottom: 1.25rem;

  @media (min-width: 48rem) {
    display: block;
  }

  @media (min-width: 62rem) {
    margin-bottom: 2.25rem;
  }
`;

const Title = styled.h5`
  margin: 1rem 0;
  text-transform: uppercase;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: 1.19;
`;

const Link = styled(RouterLink)`
  display: block;
  margin-bottom: 0.75rem;
  text-decoration: none;
  color: #999999;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.34;
`;

const Image = styled.img`
  margin-top: 1rem;
  display: block;
  height: 154px;
  margin-bottom: 1rem;
`;

const FindStoreLink = styled(RouterLink)`
  margin-top: 1rem;
  font-family: Raleway;
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1rem;
  text-align: left;
  border-bottom: 1px solid #171717;
  text-decoration: none;
  cursor: pointer;
  color: #171717;
`;

export default function () {
  return (
    <Navigation>
      <div className="row">
        <div className="col-md-3">
          <Title>Customer service</Title>
          <nav>
            <Link to="">Contact Us</Link>
            <Link to="">Payment</Link>
            <Link to="">Shipping</Link>
            <Link to="">Returns</Link>
            <Link to="">Faqs</Link>
            <Link to="">Live Chat</Link>
            <Link to="">The Burberry App</Link>
            <Link to="">Store Locator</Link>
          </nav>
        </div>
        <div className="col-md-3">
          <Title>Our company</Title>
          <nav>
            <Link to="">Our History</Link>
            <Link to="">Burberry Group Plc</Link>
            <Link to="">Careers</Link>
            <Link to="">Corporate Responsibility</Link>
            <Link to="">Site Map</Link>
          </nav>
        </div>
        <div className="col-md-3">
          <Title>Legal & Cookies</Title>
          <nav>
            <Link to="">Terms & Conditions</Link>
            <Link to="">Privacy Policy</Link>
            <Link to="">Cookie Policy</Link>
            <Link to="">Accessibility Statement</Link>
            <Link to="">Japan Only - SCTL indications</Link>
          </nav>
        </div>
        <div className="col-md-3">
          <Large>
            <Image
              src="http://assets.burberry.com/is/image/Burberryltd/933f04c94a361dfd816c77528ec0e7286921051b.jpg"
              alt="shop"
            />
            <FindStoreLink to="">Find a store</FindStoreLink>
          </Large>
        </div>
      </div>
    </Navigation>
  );
}
