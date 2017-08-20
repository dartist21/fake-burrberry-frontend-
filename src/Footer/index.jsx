import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';

const Footer = styled.footer`
  padding: 2rem 0;
  background-color: #f3f3f3;

  @media (min-width: 48rem) {
    padding: 1rem 0rem;
  }

  @media screen and (min-width: 62rem) {
    padding: 3rem 0rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 48rem) {
    flex-direction: row;
    margin: 0;
  }
`;

const Button = styled.button`
  display: inline-block;
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  text-align: left;
  color: #999999;
  border: 0;
  background-color: #f3f3f3;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1.34;

  span {
    color: #171717;
  }

  @media (min-width: 48rem) {
    margin-right: 1.5rem;
  }
`;

const Title = styled.h4`
  display: block;
  margin: .5rem 0 1rem 0;
  text-align: center;
  color: #171717;
  font-family: Raleway, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.19;

  @media (min-width: 48rem) {
    display: none;
  }
`;

const Link = styled.a`
  display: block;
  text-align: center;
  text-decoration: none;
  color: #171717;
  font-family: Lora, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  font-style: italic;
  line-height: 1.33;

  @media (min-width: 48rem) {
    display: none;
  }
`;

export default function () {
  return (
    <Footer>
      <div className="container">
        <Navigation />
        <ButtonWrapper>
          <Button type="button" name="shipping-country">
            Shipping country: <span>Russian Federation</span>
          </Button>
          <Button type="button" name="language">
            Language: <span>English</span>
          </Button>
        </ButtonWrapper>
        <Title>Need help?</Title>
        <Link href="#">Find out more and contact us</Link>
      </div>
    </Footer>
  );
}
