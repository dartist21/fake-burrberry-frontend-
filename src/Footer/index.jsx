import React from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';
import Selector from './Selector';

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

const countries = ['United Kingdom (£)', 'Russian Federation (₽)'];

const languages = ['Russian', 'English'];

export default function () {
  return (
    <Footer>
      <div className="container">
        <Navigation />
        <ButtonWrapper>
          <Selector title="Shipping country" values={countries} />
          <Selector title="Language" values={languages} />
        </ButtonWrapper>
        <Title>Need help?</Title>
        <Link href="#">Find out more and contact us</Link>
      </div>
    </Footer>
  );
}
